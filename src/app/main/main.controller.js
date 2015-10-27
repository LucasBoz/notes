(function () {
    'use strict';

    angular
        .module('notes')
        .controller('MainController', MainController);


    /** @ngInject */
    function MainController($timeout, webDevTec, toastr, $mdToast, $scope) {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1445864494819;
        vm.showToastr = showToastr;

        $scope.note = {};

        $scope.note.item = [];

        vm.note = $scope.note;

        vm.note.item.push("");



        $scope.$watchCollection('note.item', function (newValue, oldValue) {
            if (!!newValue && !!newValue[newValue.length -1 ]) {
                vm.note.item.push("");
                console.log('Name changed to ' + newValue);
            }

            for (var i = 0; i < vm.note.item.length - 1; i++) {
                if(vm.note.item[i] == ""){
                    vm.note.item.splice(i,1) ;
                }

            }
        });


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
