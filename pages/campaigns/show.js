// jshint esversion: 6
import React, { Component } from 'react';
import Layout from '../../components/Layout.js';
import ContributeForm from '../../components/contributeForm.js';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3.js';
import campaignInstanceMaker from '../../ethereum/campaign.js';
import { Router, Link } from '../../routes.js';

class CampaignShow extends Component {

  static async getInitialProps(props) {
    const campaign = await campaignInstanceMaker(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    console.log('summary',summary);
    return {
      minimumContribution: web3.utils.toBN(summary[0]).toString(),
      totalContribution: web3.utils.toBN(summary[1]).toString(),
      balance: web3.utils.toBN(summary[2]).toString(),
      requestsCount: web3.utils.toBN(summary[3]).toString(),
      contributorsCount: web3.utils.toBN(summary[4]).toString(),
      manager: summary[5],
      campaignAddress: props.query.address
    };
  }

  renderCards() {
    const items = [
      {
        header: this.props.manager,
        meta: 'Address of Manager',
        description: 'This address created this campaign and can create payment requests.',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: `${web3.utils.fromWei(this.props.totalContribution,'ether')} ETH`,
        meta: 'Total Contribution',
        description: 'This is the total amount contributed by all the contributors.'
      },
      {
        header: this.props.contributorsCount,
        meta: 'Contributors Count',
        description: 'This is the number of Contributors of this Campaign.'
      },
      {
        header: `${web3.utils.fromWei(this.props.minimumContribution,'ether')} ETH`,
        meta: 'Minimum Contribution',
        description: 'This is the minimum amount that this Campaign accepts as a contribution.'
      }
    ];

    return <Card.Group items={items} itemsPerRow={2} />
  }

  render() {
    return (
      <Layout>
        <h3>ContractShow</h3>
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={ this.props.campaignAddress } />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <h4>There are {this.props.requestsCount} requests in this campaign.</h4>
              <Link route={`/campaigns/${this.props.campaignAddress}/requests`}>
                <a>
                  <Button primary content="View Requests" />
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
