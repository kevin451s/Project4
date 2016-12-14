(function() {
  'use strict';
  angular.module('Shure')
    .controller('ServiceListController', ServiceListController)
    .controller('ServiceNewController', ServiceNewController)
    .controller('ServiceShowController', ServiceShowController)
    .controller('ServiceEditController', ServiceEditController);

  ServiceListController.$inject = ['ServiceResource'];
  ServiceNewController.$inject = ['ServiceResource', '$state'];
  ServiceShowController.$inject = ['ServiceResource', '$stateParams'];
  ServiceEditController.$inject = ['ServiceResource', '$state', '$stateParams'];



  function ServiceListController(ServiceResource) {

    var vm = this;
    vm.title = "this is working "
    vm.services = [];
    vm.deleteService = deleteService;

    ServiceResource.query().$promise.then(function(data) {
      console.log('ServiceResource.query()')
      vm.services = data;
      console.log(vm.services)
    });

    function deleteService(serviceToDelete) {
      ServiceResource.delete({id:serviceToDelete._id}).$promise.then(function(response) {
        if(response.message) {
          console.log(response.message);
          vm.services = vm.services.filter(function(service) {
            return service != serviceToDelete;
          });
        }
      });
    }
  }

  function ServiceNewController(ServiceResource, $state) {
    var vm = this;
    vm.newService = {};
    vm.addService = addService;

    function addService() {
      ServiceResource.save(vm.newService).$promise.then(function(jsonService) {
        vm.newService = {};
        $state.go('serviceList')
      });
    }
  }

  function ServiceShowController(ServiceResource, $stateParams) {
    var vm = this;
    vm.service = {};

    ServiceResource.get({id: $stateParams.id}).$promise.then(function(jsonService) {
      vm.service = jsonService;
    });
  }

  function ServiceEditController(ServiceResource, $state, $stateParams) {
    var vm = this;
    vm.title = "its working"
    vm.service = {};
    vm.updateService = updateService;

    ServiceResource.get({id: $stateParams.id}).$promise.then(function(jsonService) {
      vm.service = jsonService;
    });

    function updateService() {
      ServiceResource.update(vm.service).$promise.then(function(editedService) {
        vm.service = editedService;
        $state.go('serviceList');
      });
    }
  }
}());
