# Contract Documentation

There are two contracts. First contract creates instances of the second contract and stores in its current instance.

The inputs and outputs are based on the Javascript side through web3 API. Version of web3 used is 1.0.0-beta.37

## <u>campaignFactory</u>.methods

This contract is the core of dApp. We hard code its address in our dApp and that is used to retrieve the contract instances of individual campaign contracts.

### createCampaign(uint)
This method creates a contract instance of Campaign.
- <b>Type:</b> send
- <b>Input:</b> <u>uint</u> minimum contribution
- <b>Output:</b>

### getDeployedCampaigns()
This method returns a list of deployed campaigns
- <b>Type:</b> call
- <b>Input:</b>
- <b>Output:</b> <u>[string]</u> deployedCampaigns


## <u>campaign</u>.methods
This contract is the instance of individual campaigns created by project managers.

### manager()
This method returns manager's address of the current campaign instance.

- <b>Type:</b> call
- <b>Input:</b>
- <b>Output:</b> <u>string</u> manager

### minimumContribution()

- <b>Type:</b>
- <b>Input:</b> <u></u>
- <b>Output:</b>

### requests(uint)

- <b>Type:</b> call
- <b>Input:</b> <u>uint</u> index
- <b>Output:</b> Object

### contributors(address)

- <b>Type:</b> call
- <b>Input:</b> <u>string</u> address
- <b>Output:</b> <u>uint</u> contributedAmount

### contributorsCount()

- <b>Type:</b> call
- <b>Input:</b>
- <b>Output:</b> <u>uint</u> contributorsCount

### totalContribution()

- <b>Type:</b> call
- <b>Input:</b> <u></u>
- <b>Output:</b> <u>uint</u> totalContribution

### contribute()

- <b>Type:</b> send
- <b>Input:</b> <u></u>
- <b>Output:</b> <u></u>

### createRequest(string, uint, address)

- <b>Type:</b> send
- <b>Input:</b> description, requestAmount, vendorAddress
- <b>Output:</b> <u></u>

### approveRequest(uint)

- <b>Type:</b> send
- <b>Input:</b> <u>uint</u> index
- <b>Output:</b> <u></u>

### disapproveRequest(uint)

- <b>Type:</b> send
- <b>Input:</b> <u>uint</u> index
- <b>Output:</b> <u></u>

### getRequestDetails(uint)

- <b>Type:</b> call
- <b>Input:</b> <u>uint</u> index
- <b>Output:</b>
 - <u>string</u> description
 - <u>uint</u> requestAmount
 - <u>address</u> vendorAddress
 - <u>bool</u> complete
 - <u>bool</u> approval by sender
 - <u>uint</u> request's approval weight
 - <u>bool</u> can it be finalised?

### finalizeRequest(uint)

- <b>Type:</b> send
- <b>Input:</b> <u>uint</u> index
- <b>Output:</b> <u></u>

### getSummary()

- <b>Type:</b> call
- <b>Input:</b> <u></u>
- <b>Output:</b>
  - <u>uint</u> minimumContribution
  - <u>uint</u> totalContribution
  - <u>uint</u> balance of contract
  - <u>uint</u> number of requests
  - <u>uint</u> contributorsCount
  - <u>address</u> manager

### getRequestCount()

- <b>Type:</b> call
- <b>Input:</b> <u></u>
- <b>Output:</b> <u>uint</u> number of requests

---

###

- <b>Type:</b>
- <b>Input:</b> <u></u>
- <b>Output:</b> <u></u>
