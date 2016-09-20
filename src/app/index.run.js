(function() {
  'use strict';

  angular
    .module('notes')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
