(function () {
    'use strict';

    angular
        .module('notes')
        .controller('MainController', MainController);


    /** @ngInject */
    function MainController($timeout, webDevTec, toastr, $mdToast) {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1445864494819;
        vm.showToastr = showToastr;



        vm.save = function save(){
            if(vm.note) {
                localStorage.setItem('note', JSON.stringify(vm.note));
                $mdToast.show(
                    $mdToast.simple()
                        .content(vm.note.title + " salvo com sucesso")
                        .hideDelay(3500)
                );
                vm.getNotes();
            }
        };

        vm.getNotes = function(){
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
