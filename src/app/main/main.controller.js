(function () {
    'use strict';

    angular

        .module('notes')
        .controller('MainController', MainController);


    /** @ngInject */
    function MainController($timeout, webDevTec, toastr, $mdToast, $scope, $mdDialog) {

        var vm = this;

        /**
         * Atributos do main
         *
         */
        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1445864494819;
        vm.showToastr = showToastr;


        vm.defautNote = {
            title : "",
            color : 'blue',
            item :
                [
                    {
                        "done": false,
                        "value": ""
                    }
                ]
        };

        vm.newNote = angular.copy( vm.defautNote );

        vm.alterColor = function(color){
            vm.newNote.color = color;
        };

        vm.addNewNote = function (newNote){
            if(newNote.title || newNote.item[0].value){
                vm.notes.push( angular.copy(newNote) );

                localStorage.setItem('note', angular.toJson(vm.notes));

                vm.showToastr('Salvo com sucesso');

                vm.newNote = angular.copy( vm.defautNote );

            }else{
                vm.showToastr('Adicione algum valor a nota');
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

        $scope.$watch(angular.bind(vm, function () {
            if (vm.newNote && vm.newNote.item) {
                if (vm.newNote.item[vm.newNote.item.length - 1].value) {
                    vm.newNote.item.push({done: false, value: ''});
                }
                angular.forEach(vm.newNote.item, function (item, index) {
                    if (item.value == "" && index != vm.newNote.item.length - 1) {
                        vm.newNote.item.splice(index, 1);
                    }
                })
            }
        }));

        vm.getNotes = function () {
            if(localStorage.getItem('note')) {
                vm.notes = angular.fromJson(localStorage.getItem('note'));
            }
            if (!vm.notes) {
                vm.notes = [];
            }
        };
        vm.getNotes();


        vm.openNote = function(ev, note, notes){
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'app/main/note.dialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals : {note : note, notes : notes},
                clickOutsideToClose: true
            })
                .then(function () {
                }, function () {
                });
        };



        function DialogController($scope, $mdDialog, note, notes) {

            console.log("XXX" + note.title);

            var vm = this;

            vm.note = note;

            vm.notes = notes;

            vm.alterColor = function( color ){
                vm.note.color = color;
                vm.save();
            };

            vm.save = function () {
                  localStorage.setItem('note',angular.toJson(notes));
            };

            vm.delete = function (){
                vm.notes.splice( notes.indexOf(note) , 1 );
                vm.save();
                vm.hide();
            };

            vm.hide = function() {
                $mdDialog.hide();
            };

            $scope.$watch(angular.bind(vm.note, function () {
                if (vm.note && vm.note.item) {
                    if (vm.note.item[vm.note.item.length - 1].value) {
                      vm.note.item.push({done: false, value: ''});
                    }
                    angular.forEach(vm.note.item, function (item, index) {
                        if (item.value == "" && index != vm.note.item.length - 1) {
                          vm.note.item.splice(index, 1);
                        }
                    })
                }
            }));
        }

        function activate() {
            getWebDevTec();
            $timeout(function () {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        activate();

        function showToastr(info) {
            toastr.info(info);
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
