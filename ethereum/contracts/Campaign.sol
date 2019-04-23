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
        uint requestAmount;
        address vendorAddress;
        bool complete;
        mapping(address => bool) approvals;
        uint approvalWeight;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => uint) public contributors;
    uint public contributorsCount;
    uint public totalContribution;

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

        if (contributors[msg.sender] == 0) {
            contributorsCount++;
        }
        contributors[msg.sender] += msg.value;
        totalContribution += msg.value;
    }

    function createRequest(string description, uint requestAmount, address vendorAddress) public onlyManager {
        requests.push(Request({
            description: description,
            requestAmount: requestAmount,
            vendorAddress: vendorAddress,
            complete: false,
            approvalWeight: 0
        }));
    }

    function approveRequest(uint index) public {
        require(contributors[msg.sender] > 0);
        Request storage request = requests[index];
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalWeight += contributors[msg.sender];
    }

    function disapproveRequest(uint index) public {
        require(contributors[msg.sender] > 0);
        Request storage request = requests[index];
        require(request.approvals[msg.sender]);

        request.approvals[msg.sender] = false;
        request.approvalWeight -= contributors[msg.sender];
    }

    function getRequestDetails(uint index) public view returns(string, uint, address, bool, bool, uint, bool) {
        Request storage request = requests[index];
        return (
            request.description,
            request.requestAmount,
            request.vendorAddress,
            request.complete,
            request.approvals[msg.sender],
            request.approvalWeight,
            request.approvalWeight >= totalContribution / 2
        );
    }

    function finalizeRequest(uint index) public onlyManager {
        Request storage request = requests[index];
        require(address(this).balance >= request.requestAmount);
        require(request.approvalWeight >= totalContribution / 2);
        require(!request.complete);

        request.vendorAddress.transfer(request.requestAmount);
        request.complete = true;
    }

    function getSummary() public view returns (
        uint, uint, uint, uint, uint, address
    ) {
        return (
            minimumContribution,
            totalContribution,
            address(this).balance,
            requests.length,
            contributorsCount,
            manager
        );
    }

    function getRequestCount() public view returns (uint) {
        return requests.length;
    }


}
