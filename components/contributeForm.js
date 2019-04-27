import React, { Component } from 'react';
import { Button, Form, Input, Message, Segment } from 'semantic-ui-react';
import campaignInstanceMaker from '../ethereum/campaign.js';
import web3 from '../ethereum/web3.js';
import { Router } from '../routes.js';

class ContributeForm extends Component {
  state = {
    success: false,
    error: false,
    errorMessage: '',
    loading: false,
    amount: ''
  }

  contribute = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, success: false, error: false });
    try {
      const accounts = await web3.eth.getAccounts();
      console.log('Attempting to contribute from', this.props.address);
      const campaign = await campaignInstanceMaker(this.props.address);
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.amount, 'ether')
      });
      this.setState({ success: true, error: false });
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ success: false, error: true, errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (

        <Form onSubmit={this.contribute} success={this.state.success} error={this.state.error} >
          <h3>Contribute to this campaign</h3>
          <Form.Field>
            <Input
              placeholder="Enter contribution amount"
              label={{ basic: true, content: 'ether' }}
              labelPosition="right"
              value={this.state.value}
              onChange={event => {
                this.setState({ amount: event.target.value })
              }} />
          </Form.Field>

          <Message success header="Success!" content="You are a contributor of this campaign" />
          <Message error header="Error!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>Contribute</Button>
        </Form>

    );
  }
}

export default ContributeForm;
