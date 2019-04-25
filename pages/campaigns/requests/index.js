import React, { Component } from 'react';
import Layout from '../../../components/Layout.js';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes.js';
import web3 from '../../../ethereum/web3.js';
import campaignInstanceMaker from '../../../ethereum/campaign.js';
import RequestRow from '../../../components/RequestRow.js';

class RequestView extends Component {
  static async getInitialProps(props) {
    const campaign = await campaignInstanceMaker(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    console.log('in getInitialProps',summary);
    const requestsCount = summary[3];
    const totalContribution = summary[1];

      // const requests = await Promise.all(
      //   Array(parseInt(requestsCount)).fill().map( (element, index) => campaign.methods.requests(index).call() )
      // );
      // this.setState({ requests: requests });

    return { requestsCount, totalContribution, campaignAddress: props.query.address };
  }

  state = {
    requests: [],
  }

  componentDidMount() {
    (async () => {


    const requests = [];
    for(let index = 0; index < this.props.requestsCount; index++) {

      try {
        const campaign = await campaignInstanceMaker(this.props.campaignAddress);
        const result = await campaign.methods.getRequestDetails(index).call();
        requests.push(result);

      } catch (err) {
        console.log(err.message)
      }
      this.setState({ requests: requests });

    }
    console.log('in componentDidMount:',this.state.requests);
    })();
  }

  renderRequests() {
    console.log('request[] in renderRequests',this.state.requests);
    return this.state.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          index={index}
          request={request}
          description={0}
          amount={0}
          vendor={0}
          approvalCount={0}
          address={this.props.campaignAddress}
          totalContribution={this.props.totalContribution}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>This is list of Requests</h3>
        <Link route={`/campaigns/${this.props.campaignAddress}/requests/new`}>
          <a>
            <Button
              primary
              content="Create Request"
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
