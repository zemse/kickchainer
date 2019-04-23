// jshint esversion: 6
import React, { Component } from 'react';
import Layout from '../../components/Layout.js';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factoryInstance from '../../ethereum/factory.js';
import web3 from '../../ethereum/web3.js';
import { Router } from '../../routes.js';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await factoryInstance.methods
        .createCampaign(web3.utils.toWei(this.state.minimumContribution, 'ether'))
        .send({
          from: accounts[0]
        });
      //put contract success message here
      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });

  };

  render() {
    return (
      <Layout>
        <h3>This is a new campaign form</h3>
        <Form onSubmit={this.onSubmit} error={Boolean(this.state.errorMessage)}>
          <Form.Field>
            <Input
              label={{ basic: true, content: 'ETH' }}
              labelPosition="right"
              placeholder="Enter minimum contribution"
              value={this.state.minimumContribution}
              onChange={event => {
                this.setState({ minimumContribution: event.target.value });
              }}
            />
          </Form.Field>
          <Message
            error
            header="Oops!"
            content={this.state.errorMessage}
          />
        <Button primary loading={this.state.loading}>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
