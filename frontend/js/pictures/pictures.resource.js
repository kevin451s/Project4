(function() {
  'use strict';
  angular.module('Shure')
    .factory('PictureResource', PictureResource);

  PictureResource.$inject = ['$resource'];

  function PictureResource($resource) {
    return $resource('http://localhost:3000/api/pictures/:id', {id: '@_id'}, { 'update': { method: 'PATCH'}})
  }
}());
