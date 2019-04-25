'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _web = require('../ethereum/web3.js');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sohamzemse/soham/workspace/blockchain/ethereum/kickstart2/components/RequestRow.js';
// jshint esversion: 6


var accounts = void 0,
    campaign = void 0;

// class RequestRow extends Component {
//   static async getInitialProps() {
//     console.log('this.props.address in RequestRow.js',this.props.address);
//     accounts = await web3.eth.getAccounts();
//     campaign = await campaignInstanceMaker(this.props.address);
//     const isContributor = (await campaign.methods.contributors(accounts[0]).call()) > 0;
//     return { isContributor };
//   }
//
//   state = {
//     contributor: false,
//     approved: false,
//     loading: false
//   }
//
//   approveIt = async () => {
//     //if(this.state.approved) return;
//     this.setState({ loading: true });
//     try {
//       await campaign.methods.approveRequest(this.props.index).send({
//         from: accounts[0]
//       });
//       this.setState({ approved: true, loading: false });
//     } catch (error) {
//       this.setState({ loading: false })
//     }
//   }
//
//   render() {
//     const { Row, Cell } = Table;
//
//     return (
//       <Row>
//         <Cell>{this.props.index}</Cell>
//         <Cell>{this.props.request.description}</Cell>
//         <Cell>{web3.utils.fromWei(String(this.props.request.value), 'ether') + ' ETH'}</Cell>
//         <Cell>{this.props.request.recipient}</Cell>
//         <Cell>{this.props.request.approvalCount}/{this.props.contributorsCount}</Cell>
//         <Cell>
//           <Button
//             basic
//             color="green"
//             content={this.state.contributor?this.state.approved?'Approved':'Approve':'Only contributors can approve'}
//             loading={this.state.loading}
//             disabled={!this.state.contributor||this.state.approved}
//             onClick={this.approveIt}
//           />
//         </Cell>
//         <Cell></Cell>
//       </Row>
//     );
//   }
// }


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      contributor: true,
      approved: false,
      loading: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, this.props.index), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, this.props.request[0]), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _web2.default.utils.fromWei(String(this.props.request[1]), 'ether') + ' ETH'), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, this.props.request[2]), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, this.props.request[5] / this.props.totalContribution + '%'), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        basic: true,
        color: 'green',
        content: this.state.contributor ? this.state.approved ? 'Approved' : 'Approve' : 'Only contributors can approve',
        loading: this.state.loading,
        disabled: !this.state.contributor || this.state.approved,
        onClick: this.approveIt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      })), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsImNhbXBhaWduSW5zdGFuY2VNYWtlciIsImFjY291bnRzIiwiY2FtcGFpZ24iLCJSZXF1ZXN0Um93Iiwic3RhdGUiLCJjb250cmlidXRvciIsImFwcHJvdmVkIiwibG9hZGluZyIsIlJvdyIsIkNlbGwiLCJwcm9wcyIsImluZGV4IiwicmVxdWVzdCIsInV0aWxzIiwiZnJvbVdlaSIsIlN0cmluZyIsInRvdGFsQ29udHJpYnV0aW9uIiwiYXBwcm92ZUl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU87O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQTJCOzs7Ozs7O0FBSmxDOzs7QUFNQSxJQUFJLGdCQUFKO0lBQWMsZ0JBQWQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0ksQUFJTTs7Ozs7Ozs7Ozs7Ozs7b04sQUFDSjttQkFBUSxBQUNPLEFBQ2I7Z0JBRk0sQUFFSSxBQUNWO2UsQUFITSxBQUdHO0FBSEgsQUFDTjs7Ozs7NkJBSU87VUFBQSxBQUNDLE1BREQsQUFDZSx1QkFEZixBQUNDO1VBREQsQUFDTSxPQUROLEFBQ2UsdUJBRGYsQUFDTSxBQUViOzs2QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQURkLEFBQ0UsQUFBa0IsQUFDbEIsd0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BQUwsQUFBVyxRQUZwQixBQUVFLEFBQU8sQUFBbUIsQUFDMUIscUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsdUJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBckMsQUFBbUIsQUFBTyxBQUFtQixLQUE3QyxBQUFrRCxXQUgzRCxBQUdFLEFBQW9FLEFBQ3BFLHlCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQUFMLEFBQVcsUUFKcEIsQUFJRSxBQUFPLEFBQW1CLEFBQzFCLHFCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixLQUFHLEtBQUEsQUFBSyxNQUEzQixBQUFpQyxvQkFMMUMsQUFLRSxBQUE0RCxBQUM1RCxzQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2VBQUQsQUFFSTtlQUZKLEFBRVUsQUFDTjtpQkFBUyxLQUFBLEFBQUssTUFBTCxBQUFXLGNBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQW9CLGFBQTNDLEFBQXNELFlBSG5FLEFBRzZFLEFBQ3pFO2lCQUFTLEtBQUEsQUFBSyxNQUpsQixBQUl3QixBQUNwQjtrQkFBVSxDQUFDLEtBQUEsQUFBSyxNQUFOLEFBQVksZUFBYSxLQUFBLEFBQUssTUFMNUMsQUFLa0QsQUFDOUM7aUJBQVMsS0FOYixBQU1rQjs7b0JBTmxCO3NCQVBKLEFBTUUsQUFDRSxBQVNGO0FBVEU7QUFDSSx5Q0FRTixBQUFDOztvQkFBRDtzQkFqQkosQUFDRSxBQWdCRSxBQUdMO0FBSEs7QUFBQTs7Ozs7QSxBQTFCaUIsQUFpQ3pCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NvaGFtemVtc2Uvc29oYW0vd29ya3NwYWNlL2Jsb2NrY2hhaW4vZXRoZXJldW0va2lja3N0YXJ0MiJ9