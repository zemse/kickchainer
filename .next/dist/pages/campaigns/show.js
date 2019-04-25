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

var _Layout = require('../../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _contributeForm = require('../../components/contributeForm.js');

var _contributeForm2 = _interopRequireDefault(_contributeForm);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3.js');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../../ethereum/campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../../routes.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sohamzemse/soham/workspace/blockchain/ethereum/kickstart2/pages/campaigns/show.js?entry';
// jshint esversion: 6


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {

      var items = [{
        header: this.props.manager,
        meta: 'Address of Manager',
        description: 'This address created this campaign and can create payment requests.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: _web2.default.utils.fromWei(this.props.totalContribution, 'ether') + ' ETH',
        meta: 'Total Contribution',
        description: 'This is the total amount contributed by all the contributors.'
      }, {
        header: this.props.contributorsCount,
        meta: 'Contributors Count',
        description: 'This is the number of Contributors of this Campaign.'
      }, {
        header: _web2.default.utils.fromWei(this.props.minimumContribution, 'ether') + ' ETH',
        meta: 'Minimum Contribution',
        description: 'This is the minimum amount that this Campaign accepts as a contribution.'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, itemsPerRow: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'ContractShow'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, { columns: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_contributeForm2.default, { address: this.props.campaignAddress, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'There are ', this.props.requestsCount, ' requests in this campaign.'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.campaignAddress + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, content: 'View Requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _campaign2.default)(props.query.address);

              case 2:
                campaign = _context.sent;
                _context.next = 5;
                return campaign.methods.getSummary().call();

              case 5:
                summary = _context.sent;
                return _context.abrupt('return', {
                  minimumContribution: summary[0],
                  totalContribution: summary[1],
                  balance: summary[2],
                  requestsCount: summary[3],
                  contributorsCount: summary[4],
                  manager: summary[5],
                  campaignAddress: props.query.address
                });

              case 7:
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

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ29udHJpYnV0ZUZvcm0iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJjYW1wYWlnbkluc3RhbmNlTWFrZXIiLCJSb3V0ZXIiLCJMaW5rIiwiQ2FtcGFpZ25TaG93IiwiaXRlbXMiLCJoZWFkZXIiLCJwcm9wcyIsIm1hbmFnZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInRvdGFsQ29udHJpYnV0aW9uIiwiY29udHJpYnV0b3JzQ291bnQiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbkFkZHJlc3MiLCJyZXF1ZXN0c0NvdW50IiwicXVlcnkiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiYmFsYW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBMkI7Ozs7QUFDbEMsQUFBUyxBQUFRLEFBQVk7Ozs7O0FBUDdCOzs7SSxBQVNNOzs7Ozs7Ozs7OztrQ0FpQlUsQUFFWjs7VUFBTTtnQkFFTSxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNuQjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBTEMsQUFDWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0UsT0FGVTtnQkFRRixjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQXhCLEFBQThCLG1CQUE5QixBQUFpRCxXQUQzRCxBQUNvRSxBQUNsRTtjQUZGLEFBRVEsQUFDTjtxQkFWVSxBQU9aLEFBR2U7QUFIZixBQUNFO2dCQUtRLEtBQUEsQUFBSyxNQURmLEFBQ3FCLEFBQ25CO2NBRkYsQUFFUSxBQUNOO3FCQWZVLEFBWVosQUFHZTtBQUhmLEFBQ0U7Z0JBS1EsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUF4QixBQUE4QixxQkFBOUIsQUFBbUQsV0FEN0QsQUFDc0UsQUFDcEU7Y0FGRixBQUVRLEFBQ047cUJBcEJKLEFBQWMsQUFpQlosQUFHZSxBQUlqQjtBQVBFLEFBQ0U7OzJDQU1HLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUIsT0FBTyxhQUExQixBQUF1QztvQkFBdkM7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGlDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxPQUFJLFNBQVYsQUFBbUI7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNHO0FBREg7Y0FERixBQUNFLEFBQ0csQUFBSyxBQUVSLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDBDQUFlLFNBQVUsS0FBQSxBQUFLLE1BQS9CLEFBQXFDO29CQUFyQztzQkFOTixBQUNFLEFBSUUsQUFDRSxBQUdKO0FBSEk7NEJBR0gsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFlLG1CQUFBLEFBQUssTUFBcEIsQUFBMEIsZUFENUIsQUFDRSxBQUNBLGdEQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxrQkFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QjtvQkFBeEI7c0JBakJkLEFBQ0UsQUFFRSxBQVNFLEFBQ0UsQUFFRSxBQUNFLEFBQ0UsQUFRZjtBQVJlOzs7Ozs7MkcsQUE5RGE7Ozs7Ozs7dUJBQ0osd0JBQXNCLE1BQUEsQUFBTSxNLEFBQTVCLEFBQWtDOzttQkFBbkQ7QTs7dUJBQ2dCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O21CQUE5QztBOzt1Q0FHaUIsUUFEaEIsQUFDZ0IsQUFBUSxBQUM3QjtxQ0FBbUIsUUFGZCxBQUVjLEFBQVEsQUFDM0I7MkJBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7aUNBQWUsUUFKVixBQUlVLEFBQVEsQUFDdkI7cUNBQW1CLFFBTGQsQUFLYyxBQUFRLEFBQzNCOzJCQUFTLFFBTkosQUFNSSxBQUFRLEFBQ2pCO21DQUFpQixNQUFBLEFBQU0sTSxBQVBsQixBQU93QjtBQVB4QixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VOLEEsQUEzRTJCOztrQkEyRTNCLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc29oYW16ZW1zZS9zb2hhbS93b3Jrc3BhY2UvYmxvY2tjaGFpbi9ldGhlcmV1bS9raWNrc3RhcnQyIn0=