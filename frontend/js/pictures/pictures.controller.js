(function() {
  'use strict';
  angular.module('Shure')
    .controller('PictureListController', PictureListController)
    .controller('PictureNewController', PictureNewController)
    .controller('PictureShowController', PictureShowController)
    .controller('PictureEditController', PictureEditController);

  PictureListController.$inject = ['PictureResource'];
  PictureNewController.$inject = ['PictureResource', '$state'];
  PictureShowController.$inject = ['PictureResource', '$stateParams'];
  PictureEditController.$inject = ['PictureResource', '$state', '$stateParams'];



  function PictureListController(PictureResource) {

    var vm = this;

    vm.pictures = [];
    vm.deletePicture = deletePicture;

    PictureResource.query().$promise.then(function(data) {
      console.log('PictureResource.query()')
      vm.pictures = data;
      console.log(vm.pictures)
    });

    function deletePicture(pictureToDelete) {
      PictureResource.delete({id:pictureToDelete._id}).$promise.then(function(response) {
        if(response.message) {
          console.log(response.message);
          vm.pictures = vm.pictures.filter(function(picture) {
            return picture != pictureToDelete;
          });
        }
      });
    }
  }

  function PictureNewController(PictureResource, $state) {
    var vm = this;
    vm.newPicture = {};
    vm.addPicture = addPicture;

    function addPicture() {
      PictureResource.save(vm.newPicture).$promise.then(function(jsonPicture) {
        vm.newPicture = {};
        $state.go('pictureList')
      });
    }
  }

  function PictureShowController(PictureResource, $stateParams) {
    var vm = this;
    vm.picture = {};

    PictureResource.get({id: $stateParams.id}).$promise.then(function(jsonPicture) {
      vm.picture = jsonPicture;
    });
  }

  function PictureEditController(PictureResource, $state, $stateParams) {
    var vm = this;
    
    vm.picture = {};
    vm.updatePicture = updatePicture;

    PictureResource.get({id: $stateParams.id}).$promise.then(function(jsonPicture) {
      vm.picture = jsonPicture;
    });

    function updatePicture() {
      PictureResource.update(vm.picture).$promise.then(function(editedPicture) {
        vm.picture = editedPicture;
        $state.go('pictureList');
      });
    }
  }
}());
