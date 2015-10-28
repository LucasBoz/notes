(function() {
  'use strict';

  angular
    .module('notes')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdIconProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $mdIconProvider.icon('add', 'assets/icon/icon_add.svg', 24);
  }



})();
