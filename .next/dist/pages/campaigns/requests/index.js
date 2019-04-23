'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _campaign = require('../../../ethereum/campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow.js');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sohamzemse/soham/workspace/blockchain/ethereum/kickstart2/pages/campaigns/requests/index.js?entry';


var RequestView = function (_Component) {
  (0, _inherits3.default)(RequestView, _Component);

  function RequestView() {
    (0, _classCallCheck3.default)(this, RequestView);

    return (0, _possibleConstructorReturn3.default)(this, (RequestView.__proto__ || (0, _getPrototypeOf2.default)(RequestView)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestView, [{
    key: 'renderRequests',
    value: function renderRequests() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          index: index,
          request: request,
          address: _this2.props.campaignAddress,
          contributorsCount: _this2.props.contributorsCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
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
          Body = _semanticUiReact.Table.Body,
          Cell = _semanticUiReact.Table.Cell;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'This is list of Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.campaignAddress + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        primary: true,
        content: 'Add Request',
        icon: 'add',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Vendor'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, this.renderRequests())));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, requestCount, contributorsCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getRequestCount().call();

              case 3:
                requestCount = _context.sent;
                _context.next = 6;
                return campaign.methods.contributorsCount().call();

              case 6:
                contributorsCount = _context.sent;
                _context.next = 9;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 9:
                requests = _context.sent;
                return _context.abrupt('return', { campaignAddress: props.query.address, requests: requests, contributorsCount: contributorsCount });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestView;
}(_react.Component);

exports.default = RequestView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsImNhbXBhaWduSW5zdGFuY2VNYWtlciIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0VmlldyIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJjYW1wYWlnbkFkZHJlc3MiLCJjb250cmlidXRvcnNDb3VudCIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwiQ2VsbCIsInJlbmRlclJlcXVlc3RzIiwiY2FtcGFpZ24iLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0UmVxdWVzdENvdW50IiwiY2FsbCIsInJlcXVlc3RDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBUTs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQTJCOzs7O0FBQ2xDLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7OztxQ0FXYTttQkFDZjs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNqRDsrQkFDRSxBQUFDO2VBQUQsQUFDTyxBQUNMO2lCQUZGLEFBRVMsQUFDUDttQkFIRixBQUdXLEFBQ1Q7bUJBQVMsT0FBQSxBQUFLLE1BSmhCLEFBSXNCLEFBQ3BCOzZCQUFtQixPQUFBLEFBQUssTUFMMUIsQUFLZ0M7O3NCQUxoQzt3QkFERixBQUNFLEFBUUg7QUFSRztBQUNFLFNBREY7QUFGSixBQUFPLEFBV1IsT0FYUTs7Ozs2QkFhQTtVQUFBLEFBQ0MsU0FERCxBQUN5Qyx1QkFEekMsQUFDQztVQURELEFBQ1MsTUFEVCxBQUN5Qyx1QkFEekMsQUFDUztVQURULEFBQ2MsYUFEZCxBQUN5Qyx1QkFEekMsQUFDYztVQURkLEFBQzBCLE9BRDFCLEFBQ3lDLHVCQUR6QyxBQUMwQjtVQUQxQixBQUNnQyxPQURoQyxBQUN5Qyx1QkFEekMsQUFDZ0MsQUFFdkM7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDZDQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxrQkFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFFRTtpQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdPOztvQkFIUDtzQkFKTixBQUVFLEFBQ0UsQUFDRSxBQVFKO0FBUkk7QUFDRSw0QkFPTixBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLGdDQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0EsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLG1DQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU5GLEFBTUUsQUFDQSw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FUTixBQUNFLEFBQ0UsQUFPRSxBQUdKLCtCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBekJOLEFBQ0UsQUFZRSxBQVlFLEFBQ0csQUFBSyxBQU1mOzs7OzsyRyxBQTNENEI7Ozs7O21CQUNyQjtBLDJCQUFXLHdCQUFzQixNQUFBLEFBQU0sTSxBQUE1QixBQUFrQzs7dUJBQ3hCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGtCLEFBQWpCLEFBQW1DOzttQkFBeEQ7QTs7dUJBQzBCLFNBQUEsQUFBUyxRQUFULEFBQWlCLG9CLEFBQWpCLEFBQXFDOzttQkFBL0Q7QTs7eUNBQ2lCLEFBQVEsVUFDdkIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUE4QixPQUE5QixBQUFxQyxJQUFLLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVjt5QkFBb0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBOUMsQUFBb0IsQUFBaUM7QSxBQUQxRSxBQUNyQixpQkFBQSxDQURxQjs7bUJBQWpCO0E7aURBR0MsRUFBRSxpQkFBaUIsTUFBQSxBQUFNLE1BQXpCLEFBQStCLFNBQVMsVUFBeEMsVUFBa0QsbUIsQUFBbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RFgsQSxBQS9EMEI7O2tCQStEMUIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc29oYW16ZW1zZS9zb2hhbS93b3Jrc3BhY2UvYmxvY2tjaGFpbi9ldGhlcmV1bS9raWNrc3RhcnQyIn0=