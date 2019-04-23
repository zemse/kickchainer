import React, { Component } from 'react';
import Layout from '../../../components/Layout.js';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes.js';
import campaignInstanceMaker from '../../../ethereum/campaign.js';
import RequestRow from '../../../components/RequestRow.js';

class RequestView extends Component {
  static async getInitialProps(props) {
    const campaign = campaignInstanceMaker(props.query.address);
    const requestCount = await campaign.methods.getRequestCount().call();
    const contributorsCount = await campaign.methods.contributorsCount().call();
    const requests = await Promise.all(
      Array(parseInt(requestCount)).fill().map( (element, index) => campaign.methods.requests(index).call() )
    );
    return { campaignAddress: props.query.address, requests, contributorsCount }
  }

  renderRequests() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          index={index}
          request={request}
          address={this.props.campaignAddress}
          contributorsCount={this.props.contributorsCount}
          />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body, Cell } = Table;

    return (
      <Layout>
        <h3>This is list of Requests</h3>
        <Link route={`/campaigns/${this.props.campaignAddress}/requests/new`}>
          <a>
            <Button
              primary
              content="Add Request"
              icon="add"
            />
          </a>
        </Link>

        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Vendor</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRequests()}
          </Body>
        </Table>

      </Layout>
    );
  }
}

export default RequestView;
