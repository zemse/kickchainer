//jshint esversion:6
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import factoryInstance from '../ethereum/factory.js';

class IndexCampaign extends Component {

  static async getInitialProps() {
    let time;
    console.log('call started', time = Date.now());
    console.log(await factoryInstance.methods.getDeployedCampaigns().call());
    console.log('call done', Date.now() - time);
    const campaigns = await factoryInstance.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  render() {
    return (
      <h1>This is campaign index {this.props.campaigns[0]}</h1>
    );
  }
}

export default IndexCampaign;






// //jshint esversion:6
// import React, { Component } from 'react';
// import { Card } from 'semantic-ui-react';
// import factoryInstance from '../ethereum/factory.js';
//
// class IndexCampaign extends Component {
//
//   static async getInitialProps() {
//     let campaigns = [0]//await factoryInstance.methods.getDeployedCampaigns().call();
//
//     return { campaigns };
//   }
//
//   async componentDidMount () {
//     this.props.campaigns = await factoryInstance.methods.getDeployedCampaigns().call();
//
//   }
//
//   renderCampaigns() {
//     const items = this.props.campaigns.map(address => {
//       return {
//         header: address,
//         description: <a>Click me</a>,
//         fluid: true
//       };
//     });
//
//     return <Card.Group items={items} />;
//   }
//
//   render() {
//     return (
//       <div>{this.renderCampaigns()}</div>
//     );
//   }
// }
//
// export default IndexCampaign;
