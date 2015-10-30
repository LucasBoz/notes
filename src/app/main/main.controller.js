(function () {
    'use strict';

    angular

        .module('notes')
        .controller('MainController', MainController);


    /** @ngInject */
    function MainController($timeout, webDevTec, toastr, $mdToast, $scope, $mdDialog) {
        var vm = this;

        vm.defautItem = {
            "done": false,
            "value": ""
        };

        vm.defautNote = {
            title : "",
            color : 'defaut',
            item : angular.copy( vm.defaultItem )
        };
        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1445864494819;
        vm.showToastr = showToastr;

        $scope.note = {"item":[{"done":false,"value":" "}],"title":" ","color":"default"};

        vm.newNote = {"item":[{"done":false,"value":""}],"title":"New Item","color":"default"};

        vm.newNote.item.push({"item":[{"done":false,"value":""}],"title":"New Item","color":"default"});


        vm.note = $scope.note;

        vm.note.item.push({done: false, value: '', color : 'blue'});

        vm.note.item.push({done: false, value: ''});

        vm.alterColor = function(color){
            vm.newNote.color = color;
        };


        vm.addNewNote = function (newNote){
            if(!!newNote){
                vm.notes.push( angular.copy(newNote) );

                localStorage.setItem('note', JSON.stringify(vm.notes));

                vm.showToastr('Salvo com sucesso');

                vm.newNote = angular.copy( vm.defautNote );


            }else{
                vm.showToastr('Problema ao salvar');
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
            if (!!this.note && !!this.note.item) {
                if (!!this.note.item[this.note.item.length - 1].value) {
                    vm.note.item.push({done: false, value: ''});
                }
                angular.forEach(this.note.item, function (item, index) {
                    if (item.value == "" && index != vm.note.item.length - 1) {
                        vm.note.item.splice(index, 1);
                    }
                })
            };
            if (!!this.newNote && !!this.newNote.item) {
                if (!!this.newNote.item[this.newNote.item.length - 1].value) {
                    vm.newNote.item.push({done: false, value: ''});
                }
                angular.forEach(this.newNote.item, function (item, index) {
                    if (item.value == "" && index != vm.newNote.item.length - 1) {
                        vm.newNote.item.splice(index, 1);
                    }
                })
            }
        }));

        vm.getNotes = function () {
            vm.notes = JSON.parse(localStorage.getItem('note'));
            if( !vm.notes ){
                vm.notes = [];
                vm.note = {"item":[],"title":" ","color":"default"};
                vm.note.item.push({done: false, value: ''});
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
                .then(function (answer) {
                }, function () {
                });
        };



        function DialogController($scope, $mdDialog , $filter, note, notes) {

            $scope.note = note;

            $scope.notes = notes;

            $scope.alterColor = function( color ){
                $scope.note.color = color;
                $scope.save();
            };

            $scope.save = function() {
      //          if (note) {
                    localStorage.setItem('note', JSON.stringify(notes));
        //        }
            };

            $scope.hide = function() {
                $mdDialog.hide();
            };
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
