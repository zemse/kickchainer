// jshint esversion: 6
import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3.js';
import campaignInstanceMaker from '../ethereum/campaign.js';

class RequestRow extends Component {
  state = {
    contributor: false,
    approved: false,
    loading: false
  }

  componentDidMount() {
    (async () => {
      const accounts = await web3.eth.getAccounts();
      const campaign = await campaignInstanceMaker(this.props.address);
      const isContributor = await campaign.methods.contributors(accounts[0]).call();
      this.setState({ contributor: isContributor });
    })();
  }

  approveIt = async () => {
    //if(this.state.approved) return;
    this.setState({ loading: true });
    try {
      const accounts = await web3.eth.getAccounts();
      const campaign = await campaignInstanceMaker(this.props.address);
      await campaign.methods.approveRequest(this.props.index).send({
        from: accounts[0]
      });
      this.setState({ approved: true, loading: false });
    } catch (error) {
      this.setState({ loading: false })
    }
  }

  render() {
    const { Row, Cell } = Table;

    return (
      <Row>
        <Cell>{this.props.index}</Cell>
        <Cell>{this.props.request.description}</Cell>
        <Cell>{web3.utils.fromWei(String(this.props.request.value), 'ether') + ' ETH'}</Cell>
        <Cell>{this.props.request.recipient}</Cell>
        <Cell>{this.props.request.approvalCount}/{this.props.contributorsCount}</Cell>
        <Cell>
          <Button
            basic
            color="green"
            content={this.state.contributor?this.state.approved?'Approved':'Approve':'You can\'t approve'}
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
