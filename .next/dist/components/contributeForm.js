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

var _campaign = require('../ethereum/campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3.js');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sohamzemse/soham/workspace/blockchain/ethereum/kickstart2/components/contributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      success: false,
      error: false,
      errorMessage: '',
      loading: false,
      amount: ''
    }, _this.contribute = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, campaign;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, success: false, error: false });
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;

                console.log('Attempting to contribute from', _this.props.address);
                _context.next = 9;
                return (0, _campaign2.default)(_this.props.address);

              case 9:
                campaign = _context.sent;
                _context.next = 12;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.amount, 'ether')
                });

              case 12:
                _this.setState({ success: true, error: false });
                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](2);

                _this.setState({ success: false, error: true, errorMessage: _context.t0.message });

              case 19:
                _this.setState({ loading: false });

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 16]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Segment, { basic: true, textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.contribute, success: this.state.success, error: this.state.error, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Contribute to this campaign'), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Enter contribution amount',
        label: { basic: true, content: 'ether' },
        labelPosition: 'right',
        value: this.state.value,
        onChange: function onChange(event) {
          _this3.setState({ amount: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'You are a contributor of this campaign', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Contribute')));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiU2VnbWVudCIsImNhbXBhaWduSW5zdGFuY2VNYWtlciIsIndlYjMiLCJSb3V0ZXIiLCJDb250cmlidXRlRm9ybSIsInN0YXRlIiwic3VjY2VzcyIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsImFtb3VudCIsImNvbnRyaWJ1dGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwibWV0aG9kcyIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsImJhc2ljIiwiY29udGVudCIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBTSxBQUFPLEFBQVM7O0FBQ3ZDLEFBQU8sQUFBMkI7Ozs7QUFDbEMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7NE4sQUFDSjtlQUFRLEFBQ0csQUFDVDthQUZNLEFBRUMsQUFDUDtvQkFITSxBQUdRLEFBQ2Q7ZUFKTSxBQUlHLEFBQ1Q7YyxBQUxNLEFBS0U7QUFMRixBQUNOLGEsQUFPRjsyRkFBYSxpQkFBQSxBQUFPLE9BQVA7c0JBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1g7c0JBQUEsQUFBTSxBQUNOO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLFNBQWpCLEFBQTBCLE9BQU8sT0FGcEMsQUFFWCxBQUFjLEFBQXdDO2dDQUYzQztnQ0FBQTt1QkFJYyxjQUFBLEFBQUssSUFKbkIsQUFJYyxBQUFTOzttQkFBMUI7QUFKRyxvQ0FLVDs7d0JBQUEsQUFBUSxJQUFSLEFBQVksaUNBQWlDLE1BQUEsQUFBSyxNQUx6QyxBQUtULEFBQXdEO2dDQUwvQzt1QkFNYyx3QkFBc0IsTUFBQSxBQUFLLE1BTnpDLEFBTWMsQUFBaUM7O21CQUFsRDtBQU5HLG9DQUFBO2dDQUFBO2dDQU9ILEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4Qjt3QkFDNUIsU0FEaUMsQUFDakMsQUFBUyxBQUNmO3lCQUFPLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsUUFUNUIsQUFPSCxBQUFtQyxBQUVoQyxBQUFvQztBQUZKLEFBQ3ZDLGlCQURJOzttQkFJTjtzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxPQUEvQixBQUFjLEFBQXdCLEFBQ3RDOytCQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQVo5QixBQVlULEFBQTZDO2dDQVpwQztBQUFBOzttQkFBQTtnQ0FBQTtnREFjVDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sT0FBbEIsQUFBeUIsTUFBTSxjQUFjLFlBZGxELEFBY1QsQUFBYyxBQUFpRDs7bUJBRWpFO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBaEJMLEFBZ0JYLEFBQWMsQUFBVzs7bUJBaEJkO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBbUJKO21CQUNQOzs2QkFDRSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxXQUFmLEFBQXlCO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsWUFBWSxTQUFTLEtBQUEsQUFBSyxNQUEvQyxBQUFxRCxTQUFTLE9BQU8sS0FBQSxBQUFLLE1BQTFFLEFBQWdGO29CQUFoRjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGdEQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztxQkFBRCxBQUNjLEFBQ1o7ZUFBTyxFQUFFLE9BQUYsQUFBUyxNQUFNLFNBRnhCLEFBRVMsQUFBd0IsQUFDL0I7dUJBSEYsQUFHZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUpkLEFBSW9CLEFBQ2xCO2tCQUFVLHlCQUFTLEFBQ2pCO2lCQUFBLEFBQUssU0FBUyxFQUFFLFFBQVEsTUFBQSxBQUFNLE9BQTlCLEFBQWMsQUFBdUIsQUFDdEM7QUFQSDtvQkFBQTtzQkFISixBQUVFLEFBQ0UsQUFVRjtBQVZFO0FBQ0UsMkJBU0osQUFBQywwQ0FBUSxTQUFULE1BQWlCLFFBQWpCLEFBQXdCLFlBQVcsU0FBbkMsQUFBMkM7b0JBQTNDO3NCQWJGLEFBYUUsQUFDQTtBQURBOzBCQUNBLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsVUFBUyxTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBZEYsQUFjRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO29CQUFwQztzQkFBQTtBQUFBO1NBakJOLEFBQ0UsQUFDRSxBQWVFLEFBSVA7Ozs7O0FBR0gsQSxBQXJENkI7O2tCQXFEN0IsQUFBZSIsImZpbGUiOiJjb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc29oYW16ZW1zZS9zb2hhbS93b3Jrc3BhY2UvYmxvY2tjaGFpbi9ldGhlcmV1bS9raWNrc3RhcnQyIn0=