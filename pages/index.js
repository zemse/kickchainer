//jshint esversion:6
import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factoryInstance from '../ethereum/factory.js';
import Layout from '../components/Layout.js';
import { Link } from '../routes.js';

class IndexCampaign extends Component {

  static async getInitialProps() {
    const campaigns = await factoryInstance.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View campaign</a>
          </Link>
        ),
        fluid: true,
        style: { overflowWrap: 'break-word', marginLeft: 0, marginRight: 0 }
      };
    });

    return <Card.Group items={items} className="zcards" />;
  }

  render() {
    return (
      <Layout>
        <h3>Open campaigns</h3>
        <Link route="/campaigns/new">
          <a>
            <Button floated="right" content="Create Campaign" icon="add" primary />
          </a>
        </Link>
        {this.renderCampaigns()}
      </Layout>
    );
  }

}

export default IndexCampaign;
