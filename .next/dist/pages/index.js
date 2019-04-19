'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory.js');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sohamzemse/soham/workspace/blockchain/ethereum/kickstart2/pages/index.js?entry';
//jshint esversion:6


var IndexCampaign = function (_Component) {
  (0, _inherits3.default)(IndexCampaign, _Component);

  function IndexCampaign() {
    (0, _classCallCheck3.default)(this, IndexCampaign);

    return (0, _possibleConstructorReturn3.default)(this, (IndexCampaign.__proto__ || (0, _getPrototypeOf2.default)(IndexCampaign)).apply(this, arguments));
  }

  (0, _createClass3.default)(IndexCampaign, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'This is campaign index ', this.props.campaigns[0]);
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var time, campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                time = void 0;

                console.log('call started', time = Date.now());
                _context.t0 = console;
                _context.next = 5;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 5:
                _context.t1 = _context.sent;

                _context.t0.log.call(_context.t0, _context.t1);

                console.log('call done', Date.now() - time);
                _context.next = 10;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 10:
                campaigns = _context.sent;
                return _context.abrupt('return', { campaigns: campaigns });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return IndexCampaign;
}(_react.Component);

exports.default = IndexCampaign;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsImZhY3RvcnlJbnN0YW5jZSIsIkluZGV4Q2FtcGFpZ24iLCJwcm9wcyIsImNhbXBhaWducyIsInRpbWUiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsIm5vdyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFPLEFBQXFCOzs7Ozs7O0FBSDVCOzs7SSxBQUtNOzs7Ozs7Ozs7Ozs2QkFXSyxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxPQUFBLEVBQTRCLGdDQUFBLEFBQUssTUFBTCxBQUFXLFVBRHpDLEFBQ0UsQUFBNEIsQUFBcUIsQUFFcEQ7Ozs7Ozs7Ozs7bUJBWks7QSw0QkFDSjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksZ0JBQWdCLE9BQU8sS0FBbkMsQUFBbUMsQUFBSzs4QixBQUN4Qzs7dUJBQWtCLGtCQUFBLEFBQWdCLFFBQWhCLEFBQXdCLHVCLEFBQXhCLEFBQStDOzs7Ozs0QixBQUF6RCwrQkFDUjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksYUFBYSxLQUFBLEFBQUssUUFBOUIsQUFBc0M7O3VCQUNkLGtCQUFBLEFBQWdCLFFBQWhCLEFBQXdCLHVCLEFBQXhCLEFBQStDOzttQkFBakU7QTtpREFDQyxFQUFFLFcsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBUmlCLEFBa0I1Qjs7a0JBQUEsQUFBZTs7QUFPZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zb2hhbXplbXNlL3NvaGFtL3dvcmtzcGFjZS9ibG9ja2NoYWluL2V0aGVyZXVtL2tpY2tzdGFydDIifQ==