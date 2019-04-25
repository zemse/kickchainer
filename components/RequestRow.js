// jshint esversion: 6
import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3.js';
import campaignInstanceMaker from '../ethereum/campaign.js';

let accounts, campaign;

// class RequestRow extends Component {
//   static async getInitialProps() {
//     console.log('this.props.address in RequestRow.js',this.props.address);
//     accounts = await web3.eth.getAccounts();
//     campaign = await campaignInstanceMaker(this.props.address);
//     const isContributor = (await campaign.methods.contributors(accounts[0]).call()) > 0;
//     return { isContributor };
//   }
//
//   state = {
//     contributor: false,
//     approved: false,
//     loading: false
//   }
//
//   approveIt = async () => {
//     //if(this.state.approved) return;
//     this.setState({ loading: true });
//     try {
//       await campaign.methods.approveRequest(this.props.index).send({
//         from: accounts[0]
//       });
//       this.setState({ approved: true, loading: false });
//     } catch (error) {
//       this.setState({ loading: false })
//     }
//   }
//
//   render() {
//     const { Row, Cell } = Table;
//
//     return (
//       <Row>
//         <Cell>{this.props.index}</Cell>
//         <Cell>{this.props.request.description}</Cell>
//         <Cell>{web3.utils.fromWei(String(this.props.request.value), 'ether') + ' ETH'}</Cell>
//         <Cell>{this.props.request.recipient}</Cell>
//         <Cell>{this.props.request.approvalCount}/{this.props.contributorsCount}</Cell>
//         <Cell>
//           <Button
//             basic
//             color="green"
//             content={this.state.contributor?this.state.approved?'Approved':'Approve':'Only contributors can approve'}
//             loading={this.state.loading}
//             disabled={!this.state.contributor||this.state.approved}
//             onClick={this.approveIt}
//           />
//         </Cell>
//         <Cell></Cell>
//       </Row>
//     );
//   }
// }



class RequestRow extends Component {
  state = {
    contributor: true,
    approved: false,
    loading: false
  }
  render() {
    const { Row, Cell } = Table;

    return (
      <Row>
        <Cell>{this.props.index}</Cell>
        <Cell>{this.props.request[0]}</Cell>
        <Cell>{web3.utils.fromWei(String(this.props.request[1]), 'ether') + ' ETH'}</Cell>
        <Cell>{this.props.request[2]}</Cell>
        <Cell>{this.props.request[5]/this.props.totalContribution + '%'}</Cell>
        <Cell>
          <Button
              basic
              color="green"
              content={this.state.contributor?this.state.approved?'Approved':'Approve':'Only contributors can approve'}
              loading={this.state.loading}
              disabled={!this.state.contributor||this.state.approved}
              onClick={this.approveIt}
            />
        </Cell>
        <Cell></Cell>
      </Row>
    );
  }

}

export default RequestRow;
