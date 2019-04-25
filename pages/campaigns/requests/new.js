import React, { Component } from 'react';
import Layout from '../../../components/Layout.js';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import web3 from '../../../ethereum/web3.js';
import campaignInstanceMaker from '../../../ethereum/campaign.js';
import { Router, Link } from '../../../routes.js';

class RequestNew extends Component {
  state = {
    description: '',
    requestAmount: '',
    vendorAddress: '',
    loading: false,
    success: false,
    errorMessage: ''
  }

  static getInitialProps(props) {
    return { campaignAddress: props.query.address }
  }

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, success: false, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      const campaign = await campaignInstanceMaker(this.props.campaignAddress);

      await campaign.methods.createRequest(
        this.state.description,
        +web3.utils.toWei(this.state.requestAmount, 'ether'),
        this.state.vendorAddress
      ).send({
        from: accounts[0]
      });
      this.setState({ loading: false, success: true });
      Router.pushRoute(`/campaigns/${this.props.campaignAddress}/requests`);
    } catch (error) {
      this.setState({ loading: false, errorMessage: error.message });
    }

  }

  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.campaignAddress}/requests`}>
          <a>Go back to requests</a>
        </Link>
        <h3>This is a new request form. Only manager can create a new request</h3>
        <Form onSubmit={this.onSubmit} success={this.state.success} error={Boolean(this.state.errorMessage)}>
          <Form.Field>
            <Input
              placeholder="Enter description"
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })}
              />
          </Form.Field>

          <Form.Field>
            <Input
              placeholder="Enter amount"
              label={{ basic: true, content: 'ETH' }}
              labelPosition="right"
              value={this.state.requestAmount}
              onChange={event => this.setState({ requestAmount: event.target.value })}
              />
          </Form.Field>

          <Form.Field>
            <Input
              placeholder="Enter address of vendor"
              value={this.state.vendorAddress}
              onChange={event => this.setState({ vendorAddress: event.target.value })}
              />
          </Form.Field>
          <Message success header="Success!" content="Request is submitted" />
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button
            primary
            loading={this.state.loading}
            content="Submit request"
            />
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
