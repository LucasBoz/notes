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

        vm.note.item.push(vm.newItem);


        /**
         * Remove um item vazio da lista
         * a nao ser que ele seje o ultimo da lista
         */

        vm.removeEmpty = function (index) {
            if (vm.note.item[index].value == "" && index != vm.note.item.length - 1) {
                vm.note.item.splice(index, 1);
            }
        };

        /**
         * Será usado para verificar se o item está vazio
         *ou seja, igual a um item recem criado
         */

        vm.isEmpty = function (item) {
            if (item.value == vm.newItem.value) {
                return true;
            } else if (item.done == vm.newItem.done) {
                return true;
            }
            return false;
        };

        /**
         * Escuta o input de item para adocionar um novo campo
         * ao ser imputado dados
         */

        $scope.$watch(angular.bind(this, function () {
            if (!!this.note.item[this.note.item.length - 1].value) {
                vm.note.item.push({done: false, value: ''});
            }
        }));

        vm.save = function save() {
            if (vm.note) {
                localStorage.setItem('note', JSON.stringify(vm.note));
                $mdToast.show(
                    $mdToast.simple()
                        .content(vm.note.title + " salvo com sucesso")
                        .hideDelay(3500)
                );
                vm.getNotes();
                console.log("SALVOU");
            }
        };

        vm.getNotes = function () {
            vm.note = JSON.parse(localStorage.getItem('note'));
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
