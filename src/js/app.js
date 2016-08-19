angular.module('portfolio', ['ui.router'])
  .config( ($stateProvider, $urlRouterProvider) => {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: ''
      })

  })
