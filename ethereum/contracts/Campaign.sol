pragma solidity ^0.4.25;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        deployedCampaigns.push(new Campaign(minimum, msg.sender));
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        mapping(address => bool) approvals;
        uint approvalCount;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public contributors;
    uint public contributorsCount;

    modifier onlyManager {
        require(msg.sender == manager);
        _;
    }

    constructor(uint minimum, address senderAddress) public {
        manager = senderAddress;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value >= minimumContribution);

        contributors[msg.sender] = true;
        contributorsCount++;
    }

    function createRequest(string description, uint value, address recipient) public onlyManager {
        requests.push(Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        }));
    }

    function approveRequest(uint index) public {
        require(contributors[msg.sender]);
        Request storage request = requests[index];
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public onlyManager {
        Request storage request = requests[index];
        require(request.approvalCount > contributorsCount/2);
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    
}
