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

var _Layout = require('../../../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes.js');

var _web = require('../../../ethereum/web3.js');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../../../ethereum/campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow.js');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sohamzemse/soham/workspace/blockchain/ethereum/kickstart2/pages/campaigns/requests/index.js?entry';


var RequestView = function (_Component) {
  (0, _inherits3.default)(RequestView, _Component);

  function RequestView() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestView.__proto__ || (0, _getPrototypeOf2.default)(RequestView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      requests: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var requests, index, campaign, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                requests = [];
                index = 0;

              case 2:
                if (!(index < _this2.props.requestsCount)) {
                  _context.next = 20;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return (0, _campaign2.default)(_this2.props.campaignAddress);

              case 6:
                campaign = _context.sent;
                _context.next = 9;
                return campaign.methods.getRequestDetails(index).call();

              case 9:
                result = _context.sent;

                requests.push(result);

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](3);

                console.log(_context.t0.message);

              case 16:
                _this2.setState({ requests: requests });

              case 17:
                index++;
                _context.next = 2;
                break;

              case 20:
                console.log('in componentDidMount:', _this2.state.requests);

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 13]]);
      }))();
    }
  }, {
    key: 'renderRequests',
    value: function renderRequests() {
      var _this3 = this;

      console.log('request[] in renderRequests', this.state.requests);
      return this.state.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          index: index,
          request: request,
          description: 0,
          amount: 0,
          vendor: 0,
          approvalCount: 0,
          address: _this3.props.campaignAddress,
          totalContribution: _this3.props.totalContribution,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'This is list of Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.campaignAddress + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        primary: true,
        content: 'Create Request',
        icon: 'add',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Vendor'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, this.renderRequests())));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var campaign, summary, requestsCount, totalContribution;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _campaign2.default)(props.query.address);

              case 2:
                campaign = _context2.sent;
                _context2.next = 5;
                return campaign.methods.getSummary().call();

              case 5:
                summary = _context2.sent;

                console.log('in getInitialProps', summary);
                requestsCount = summary[3];
                totalContribution = summary[1];

                // const requests = await Promise.all(
                //   Array(parseInt(requestsCount)).fill().map( (element, index) => campaign.methods.requests(index).call() )
                // );
                // this.setState({ requests: requests });

                return _context2.abrupt('return', { requestsCount: requestsCount, totalContribution: totalContribution, campaignAddress: props.query.address });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestView;
}(_react.Component);

exports.default = RequestView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIndlYjMiLCJjYW1wYWlnbkluc3RhbmNlTWFrZXIiLCJSZXF1ZXN0Um93IiwiUmVxdWVzdFZpZXciLCJzdGF0ZSIsInJlcXVlc3RzIiwiaW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzQ291bnQiLCJjYW1wYWlnbkFkZHJlc3MiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0RGV0YWlscyIsImNhbGwiLCJyZXN1bHQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJzZXRTdGF0ZSIsIm1hcCIsInJlcXVlc3QiLCJ0b3RhbENvbnRyaWJ1dGlvbiIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUmVxdWVzdHMiLCJxdWVyeSIsImFkZHJlc3MiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFROztBQUNqQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQTJCOzs7O0FBQ2xDLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7OztzTixBQWdCSjtnQixBQUFRLEFBQ0k7QUFESixBQUNOOzs7Ozt3Q0FHa0I7bUJBQ2xCOzsrRUFBQyxtQkFBQTt1Q0FBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFHSztBQUhMLDJCQUFBLEFBR2dCLEFBQ1Q7QUFKUCx3QkFBQSxBQUllOzttQkFKZjtzQkFJa0IsUUFBUSxPQUFBLEFBQUssTUFKL0IsQUFJcUMsZ0JBSnJDO2tDQUFBO0FBQUE7QUFBQTs7Z0NBQUE7Z0NBQUE7dUJBTzBCLHdCQUFzQixPQUFBLEFBQUssTUFQckQsQUFPMEIsQUFBaUM7O21CQUFsRDtBQVBULG9DQUFBO2dDQUFBO3VCQVF3QixTQUFBLEFBQVMsUUFBVCxBQUFpQixrQkFBakIsQUFBbUMsT0FSM0QsQUFRd0IsQUFBMEM7O21CQUF6RDtBQVJULGtDQVNHOzt5QkFBQSxBQUFTLEtBVFosQUFTRyxBQUFjOztnQ0FUakI7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBWUc7O3dCQUFBLEFBQVEsSUFBSSxZQVpmLEFBWUcsQUFBZ0I7O21CQUVsQjt1QkFBQSxBQUFLLFNBQVMsRUFBRSxVQWRqQixBQWNDLEFBQWMsQUFBWTs7bUJBVnlCO0FBSnBEO2dDQUFBO0FBQUE7O21CQWlCRDt3QkFBQSxBQUFRLElBQVIsQUFBWSx5QkFBd0IsT0FBQSxBQUFLLE1BakJ4QyxBQWlCRCxBQUErQzs7bUJBakI5QzttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBQUFELEFBbUJEOzs7O3FDQUVnQjttQkFDZjs7Y0FBQSxBQUFRLElBQVIsQUFBWSwrQkFBOEIsS0FBQSxBQUFLLE1BQS9DLEFBQXFELEFBQ3JEO2tCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDakQ7K0JBQ0UsQUFBQztlQUFELEFBQ08sQUFDTDtpQkFGRixBQUVTLEFBQ1A7bUJBSEYsQUFHVyxBQUNUO3VCQUpGLEFBSWUsQUFDYjtrQkFMRixBQUtVLEFBQ1I7a0JBTkYsQUFNVSxBQUNSO3lCQVBGLEFBT2lCLEFBQ2Y7bUJBQVMsT0FBQSxBQUFLLE1BUmhCLEFBUXNCLEFBQ3BCOzZCQUFtQixPQUFBLEFBQUssTUFUMUIsQUFTZ0M7O3NCQVRoQzt3QkFERixBQUNFLEFBWUg7QUFaRztBQUNFLFNBREY7QUFGSixBQUFPLEFBZVIsT0FmUTs7Ozs2QkFpQkE7VUFBQSxBQUNDLFNBREQsQUFDbUMsdUJBRG5DLEFBQ0M7VUFERCxBQUNTLE1BRFQsQUFDbUMsdUJBRG5DLEFBQ1M7VUFEVCxBQUNjLGFBRGQsQUFDbUMsdUJBRG5DLEFBQ2M7VUFEZCxBQUMwQixPQUQxQixBQUNtQyx1QkFEbkMsQUFDMEIsQUFDakM7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDZDQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxrQkFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFFRTtpQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdPOztvQkFIUDtzQkFKTixBQUVFLEFBQ0UsQUFDRSxBQVFKO0FBUkk7QUFDRSw0QkFPTixBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLGdDQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0EsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLG1DQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU5GLEFBTUUsQUFDQSw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FUTixBQUNFLEFBQ0UsQUFPRSxBQUdKLCtCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBekJOLEFBQ0UsQUFZRSxBQVlFLEFBQ0csQUFBSyxBQU1mOzs7Ozs2RyxBQTlGNEI7Ozs7Ozs7dUJBQ0osd0JBQXNCLE1BQUEsQUFBTSxNLEFBQTVCLEFBQWtDOzttQkFBbkQ7QTs7dUJBQ2dCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O21CQUE5QztBLG9DQUNOOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxzQkFBWixBQUFpQyxBQUMzQjtBLGdDQUFnQixRLEFBQUEsQUFBUSxBQUN4QjtBLG9DQUFvQixRLEFBQUEsQUFBUSxBQUVoQzs7QUFDQTtBQUNBO0FBQ0E7OztrREFFSyxFQUFFLGVBQUYsZUFBaUIsbUJBQWpCLG1CQUFvQyxpQkFBaUIsTUFBQSxBQUFNLE0sQUFBM0QsQUFBaUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQWJsRCxBQWtHMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NvaGFtemVtc2Uvc29oYW0vd29ya3NwYWNlL2Jsb2NrY2hhaW4vZXRoZXJldW0va2lja3N0YXJ0MiJ9