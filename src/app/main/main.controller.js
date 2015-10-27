(function () {
    'use strict';

    angular
        .module('notes')
        .controller('MainController', MainController);


    /** @ngInject */
    function MainController($timeout, webDevTec, toastr, $mdToast, $scope) {
        var vm = this;

        vm.newItem = {
            "done": false,
            "value": ""
        };
        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1445864494819;
        vm.showToastr = showToastr;

        $scope.note = {};

        $scope.note.item = [];

        vm.note = $scope.note;


        vm.removeEmpty = function (index) {
            if (vm.isEmpty(vm.note.item[index])) {
                vm.note.item.splice(index, 1);
            }
        };

        vm.isEmpty = function (item) {
            if (item.value == vm.newItem.value) {
                return true;
            } else if (item.done == vm.newItem.done) {
                return true;
            }
            return false;
        };

        $scope.$watchCollection('note.item', function (newValue, oldValue) {
            if (vm.note.item.length == 0) {
                vm.note.item.push("");
            }

            if ((vm.note.item.length >= 1) &&
                (newValue[newValue.length - 1].value != "" ) &&
                (!!newValue[newValue.length - 1].value) ) {

                if (!!newValue[newValue.length - 1]) {
                    vm.note.item.push("");
                }
            }


        });


        vm.save = function save() {
            if (vm.note) {
                localStorage.setItem('note', JSON.stringify(vm.note));
                $mdToast.show(
                    $mdToast.simple()
                        .content(vm.note.title + " salvo com sucesso")
                        .hideDelay(3500)
                );
                vm.getNotes();
            }
        };

        vm.getNotes = function () {
            vm.notes = JSON.parse(localStorage.getItem('note'));
        };
        vm.getNotes();


        function activate() {
            getWebDevTec();
            $timeout(function () {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        activate();

        function showToastr() {
            toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            vm.classAnimation = '';
        }

        function getWebDevTec() {
            vm.awesomeThings = webDevTec.getTec();

            angular.forEach(vm.awesomeThings, function (awesomeThing) {
                awesomeThing.rank = Math.random();
            });
        }

    }
})();
