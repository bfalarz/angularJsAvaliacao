(function() {
    'use strict';

    angular
        .module('app.usuario')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listUsuario',
                config: {
                    url: '/usuario',
                    templateUrl: 'app/usuario/views/list.html',
                    controller: 'UsuarioController',
                    controllerAs: 'vm',
                    title: 'List Usuarios',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Usuarios'
                    }
                }
            },
            {
                state: 'createUsuario',
                config: {
                    url: '/usuario/create',
                    templateUrl: 'app/usuario/views/create.html',
                    controller: 'UsuarioController',
                    controllerAs: 'vm',
                    title: 'Create Usuario'
                }
            },
            {
                state: 'viewUsuario',
                config: {
                    url: '/usuario/:usuarioId',
                    templateUrl: 'app/usuario/views/view.html',
                    controller: 'UsuarioController',
                    controllerAs: 'vm',
                    title: 'View Usuario'
                }
            },
            {
                state: 'editUsuario',
                config: {
                    url: '/usuario/:usuarioId/edit',
                    templateUrl: 'app/usuario/views/edit.html',
                    controller: 'UsuarioController',
                    controllerAs: 'vm',
                    title: 'Edit Usuario'
                }
            }
        ];
    }
})();
