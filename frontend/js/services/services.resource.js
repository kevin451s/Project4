(function() {
  'use strict';
  angular.module('Shure')
    .factory('ServiceResource', ServiceResource);

  ServiceResource.$inject = ['$resource'];

  function ServiceResource($resource) {
    return $resource('http://localhost:3000/services/:id', {id: '@_id'}, { 'update': { method: 'PATCH'}})
  }
}());
