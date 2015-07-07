//app
(function() {
  var app = angular.module('proxyAdmin', []);

  var jsonResults = [{
    name: "cynthia",
    id: 020384
  }, {
    name: "meggie",
    id: 975839
  }, {
    name: "bianca",
    id: 076532
  }];

  app.controller("ResultsListController", function() {
    this.items = jsonResults;
    this.test = 0;
  });

})();
