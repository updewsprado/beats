(function() {
  'use strict';

  angular
    .module('beatsApp')
    .component('modalStatus', modalStatusComponent());

  function modalStatusComponent() {
    var component = {
      bindings: { crudstatus: '<' },
      templateUrl: 'client/app/components/modal.status.component.htm',
      controllerAs: 'vm'
    }
    return component;
  }

})();