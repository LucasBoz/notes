(function () {
  'use strict';

  angular
    .module('notes')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdIconProvider, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    /**
     * ICONS
     */
    $mdIconProvider.icon('add', 'assets/icon/icon_add.svg', 24);

    /**
     * COLORS
     */
  var customOrange = {
      '50': '#ffdd80',
      '100': '#ffd666',
      '200': '#ffcf4d',
      '300': '#ffc933',
      '400': '#ffc21a',
      '500': '#ffbb00',
      '600': '#e6a800',
      '700': '#cc9600',
      '800': '#b38300',
      '900': '#997000',
      'A100': '#ffe499',
      'A200': '#ffebb3',
      'A400': '#fff1cc',
      'A700': '#805e00'
    };

    var customWhite = {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#ffffff',
      '400': '#ffffff',
      '500': '#ffffff',
      '600': '#f2f2f2',
      '700': '#e6e6e6',
      '800': '#d9d9d9',
      '900': '#cccccc',
      'A100': '#ffffff',
      'A200': '#ffffff',
      'A400': '#ffffff',
      'A700': '#bfbfbf'
    };

    $mdThemingProvider.alwaysWatchTheme(true);


     $mdThemingProvider.definePalette('customOrange', customOrange);
     $mdThemingProvider.definePalette('customWhite', customWhite);

    $mdThemingProvider.theme('header')
      .primaryPalette('customOrange', {
        'default': '400'
      }).accentPalette('grey', {
        'default': '500'
      }).backgroundPalette('customOrange', {
        'default': '500'
      });
    $mdThemingProvider.theme('white')
      .primaryPalette('customWhite', {
        'default': '400'
      }).accentPalette('grey', {
        'default': '500'
      }).backgroundPalette('customWhite', {
        'default': '500'
      });
    $mdThemingProvider.theme('red')
      .primaryPalette('red', {
        'default': '400'
      }).accentPalette('grey', {
        'default': '900'
      }).backgroundPalette('red', {
        'default': '500'
      });
    $mdThemingProvider.theme('orange')
      .primaryPalette('orange', {
        'default': '400'
      }).accentPalette('grey', {
        'default': '900'
      }).backgroundPalette('orange', {
        'default': '500'
      });
    $mdThemingProvider.theme('yellow')
      .primaryPalette('yellow', {
        'default': '500'
      }).accentPalette('grey', {
        'default': '900'
      }).backgroundPalette('yellow', {
        'default': '500'
      });
    $mdThemingProvider.theme('grey')
      .primaryPalette('grey', {
        'default': '500'
      }).accentPalette('blue-grey', {
        'default': '900'
      }).backgroundPalette('grey', {
        'default': '300'
      });
    $mdThemingProvider.theme('blue')
      .primaryPalette('blue', {
        'default': '400'
      }).accentPalette('grey', {
        'default': '600'
      }).backgroundPalette('blue', {
        'default': '100'
      });
    $mdThemingProvider.theme('teal')
      .primaryPalette('teal', {
        'default': '400'
      }).accentPalette('grey', {
        'default': '900'
      }).backgroundPalette('teal', {
        'default': '400'
      });
    $mdThemingProvider.theme('green')
      .primaryPalette('green', {
        'default': '400'
      }).accentPalette('grey', {
        'default': '900'
      }).backgroundPalette('green', {
        'default': '400'
      });


  }


})();
