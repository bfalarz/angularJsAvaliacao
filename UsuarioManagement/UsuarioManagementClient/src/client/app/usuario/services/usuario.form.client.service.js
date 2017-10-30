(function() {
    'use strict';

    angular
        .module('app.usuario')
        .factory('UsuarioForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'nome',
                    type: 'input',
                    templateOptions: {
                        label: 'Nome:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'email',
                    type: 'input',
                    templateOptions: {
                        label: 'E-mail:',
                        disabled: disabled
                    }
                },
                {
                    key: 'estado',
                    type: 'input',
                    templateOptions: {
                        label: 'Estado:',
                        disabled: disabled
                    }
                }
            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
