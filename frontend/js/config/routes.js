(function() {
  'use strict';

  angular.module('Shure')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/templates/home.html'
      })
      .state('picturesList', {
        url: '/pictures/list',
        templateUrl: 'js/pictures/picture-list.html',
        controller: 'PictureListController',
        controllerAs: 'pictureListVm'
      })
  }
}());
