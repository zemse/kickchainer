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

var _web = require('../ethereum/web3.js');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sohamzemse/soham/workspace/blockchain/ethereum/kickstart2/components/RequestRow.js';
// jshint esversion: 6


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      contributor: false,
      approved: false,
      loading: false
    }, _this.approveIt = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //if(this.state.approved) return;
              _this.setState({ loading: true });
              _context.prev = 1;
              _context.next = 4;
              return _web2.default.eth.getAccounts();

            case 4:
              accounts = _context.sent;
              _context.next = 7;
              return (0, _campaign2.default)(_this.props.address);

            case 7:
              campaign = _context.sent;
              _context.next = 10;
              return campaign.methods.approveRequest(_this.props.index).send({
                from: accounts[0]
              });

            case 10:
              _this.setState({ approved: true, loading: false });
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context['catch'](1);

              _this.setState({ loading: false });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[1, 13]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var accounts, campaign, isContributor;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context2.sent;
                _context2.next = 5;
                return (0, _campaign2.default)(_this3.props.address);

              case 5:
                campaign = _context2.sent;
                _context2.next = 8;
                return campaign.methods.contributors(accounts[0]).call();

              case 8:
                isContributor = _context2.sent;

                _this3.setState({ contributor: isContributor });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    }
  }, {
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, this.props.index), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.props.request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _web2.default.utils.fromWei(String(this.props.request.value), 'ether') + ' ETH'), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, this.props.request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.props.request.approvalCount, '/', this.props.contributorsCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        basic: true,
        color: 'green',
        content: this.state.contributor ? this.state.approved ? 'Approved' : 'Approve' : 'You can\'t approve',
        loading: this.state.loading,
        disabled: !this.state.contributor || this.state.approved,
        onClick: this.approveIt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsImNhbXBhaWduSW5zdGFuY2VNYWtlciIsIlJlcXVlc3RSb3ciLCJzdGF0ZSIsImNvbnRyaWJ1dG9yIiwiYXBwcm92ZWQiLCJsb2FkaW5nIiwiYXBwcm92ZUl0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwicHJvcHMiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpbmRleCIsInNlbmQiLCJmcm9tIiwiY29udHJpYnV0b3JzIiwiY2FsbCIsImlzQ29udHJpYnV0b3IiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwiU3RyaW5nIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50IiwiY29udHJpYnV0b3JzQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUEyQjs7Ozs7OztBQUpsQzs7O0ksQUFNTTs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0o7bUJBQVEsQUFDTyxBQUNiO2dCQUZNLEFBRUksQUFDVjtlLEFBSE0sQUFHRztBQUhILEFBQ04sYSxBQWNGLHFGQUFZLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUNWO0FBQ0E7b0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FGTixBQUVWLEFBQWMsQUFBVzs4QkFGZjs4QkFBQTtxQkFJZSxjQUFBLEFBQUssSUFKcEIsQUFJZSxBQUFTOztpQkFBMUI7QUFKRSxrQ0FBQTs4QkFBQTtxQkFLZSx3QkFBc0IsTUFBQSxBQUFLLE1BTDFDLEFBS2UsQUFBaUM7O2lCQUFsRDtBQUxFLGtDQUFBOzhCQUFBOzhCQU1GLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxPQUEzQyxBQUFrRDtzQkFDaEQsU0FQQSxBQU1GLEFBQXVELEFBQ3JELEFBQVM7QUFENEMsQUFDM0QsZUFESTs7aUJBR047b0JBQUEsQUFBSyxTQUFTLEVBQUUsVUFBRixBQUFZLE1BQU0sU0FUeEIsQUFTUixBQUFjLEFBQTJCOzhCQVRqQztBQUFBOztpQkFBQTs4QkFBQTs4Q0FXUjs7b0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FYUixBQVdSLEFBQWMsQUFBVzs7aUJBWGpCO2lCQUFBOzhCQUFBOztBQUFBOytCQUFBO0E7Ozs7O3dDQVRRO21CQUNsQjs7K0VBQUMsb0JBQUE7Z0NBQUE7d0VBQUE7b0JBQUE7K0NBQUE7bUJBQUE7aUNBQUE7dUJBQ3dCLGNBQUEsQUFBSyxJQUQ3QixBQUN3QixBQUFTOzttQkFBMUI7QUFEUCxxQ0FBQTtpQ0FBQTt1QkFFd0Isd0JBQXNCLE9BQUEsQUFBSyxNQUZuRCxBQUV3QixBQUFpQzs7bUJBQWxEO0FBRlAscUNBQUE7aUNBQUE7dUJBRzZCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWEsU0FBOUIsQUFBOEIsQUFBUyxJQUhwRSxBQUc2QixBQUEyQzs7bUJBQWpFO0FBSFAsMENBSUM7O3VCQUFBLEFBQUssU0FBUyxFQUFFLGFBSmpCLEFBSUMsQUFBYyxBQUFlOzttQkFKOUI7bUJBQUE7aUNBQUE7O0FBQUE7cUJBQUE7QUFBRCxBQU1EOzs7OzZCQWlCUTtVQUFBLEFBQ0MsTUFERCxBQUNlLHVCQURmLEFBQ0M7VUFERCxBQUNNLE9BRE4sQUFDZSx1QkFEZixBQUNNLEFBRWI7OzZCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BRGQsQUFDRSxBQUFrQixBQUNsQix3QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUFPLEFBQUssTUFBTCxBQUFXLFFBRnBCLEFBRUUsQUFBMEIsQUFDMUIsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsdUJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBckMsQUFBbUIsQUFBMEIsUUFBN0MsQUFBcUQsV0FIOUQsQUFHRSxBQUF1RSxBQUN2RSx5QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUFPLEFBQUssTUFBTCxBQUFXLFFBSnBCLEFBSUUsQUFBMEIsQUFDMUIsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BQUwsQUFBVyxRQUFsQixBQUEwQixlQUFnQixVQUFBLEFBQUssTUFMakQsQUFLRSxBQUFxRCxBQUNyRCxvQ0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2VBQUQsQUFFRTtlQUZGLEFBRVEsQUFDTjtpQkFBUyxLQUFBLEFBQUssTUFBTCxBQUFXLGNBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQW9CLGFBQTNDLEFBQXNELFlBSGpFLEFBRzJFLEFBQ3pFO2lCQUFTLEtBQUEsQUFBSyxNQUpoQixBQUlzQixBQUNwQjtrQkFBVSxDQUFDLEtBQUEsQUFBSyxNQUFOLEFBQVksZUFBYSxLQUFBLEFBQUssTUFMMUMsQUFLZ0QsQUFDOUM7aUJBQVMsS0FOWCxBQU1nQjs7b0JBTmhCO3NCQVBKLEFBTUUsQUFDRSxBQVNGO0FBVEU7QUFDRSx5Q0FRSixBQUFDOztvQkFBRDtzQkFqQkosQUFDRSxBQWdCRSxBQUdMO0FBSEs7QUFBQTs7Ozs7QUFNUixBLEFBekR5Qjs7a0JBeUR6QixBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NvaGFtemVtc2Uvc29oYW0vd29ya3NwYWNlL2Jsb2NrY2hhaW4vZXRoZXJldW0va2lja3N0YXJ0MiJ9