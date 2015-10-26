/**
 * Created by Boz on 26/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('notes')
        .directive('noteItem', noteItem);

    /** @ngInject */
    function noteItem() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/noteItem/noteItem.html',
            scope: {
                creationDate: '='
            },
            controller: NoteItemController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NoteItemController() {
            var vm = this;

        }
    }

})();
