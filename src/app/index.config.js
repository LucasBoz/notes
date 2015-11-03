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

        $mdThemingProvider.alwaysWatchTheme(true);

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
                'default': '50'
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
