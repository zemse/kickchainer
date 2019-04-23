'use strict';

// jshint esversion: 6
var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', 'campaigns/show').add('/campaigns/:address/requests', 'campaigns/requests').add('/campaigns/:address/requests/new', 'campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU0sU0FBUyxBQUFmOztBQUVBLE9BQ0csQUFESCxJQUNPLEFBRFAsa0JBQ3lCLEFBRHpCLGtCQUVHLEFBRkgsSUFFTyxBQUZQLHVCQUU4QixBQUY5QixrQkFHRyxBQUhILElBR08sQUFIUCxnQ0FHdUMsQUFIdkMsc0JBSUcsQUFKSCxJQUlPLEFBSlAsb0NBSTJDLEFBSjNDOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NvaGFtemVtc2Uvc29oYW0vd29ya3NwYWNlL2Jsb2NrY2hhaW4vZXRoZXJldW0va2lja3N0YXJ0MiJ9