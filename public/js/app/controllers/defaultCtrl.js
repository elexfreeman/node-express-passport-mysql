
/* Редактирование предзаказа */
dpApp.controller('defaultCtrl',[
    '$scope','$rootScope','$http', '$location', '$routeParams','$templateCache',
    function($scope, $rootScope, $http, $location, $routeParams,$templateCache) {
        /*проверяем на логин*/
        console.info('default');
        $http.get("/a_is_login")
            .then(function(response) {
                if(!response.data.status){
                    $location.path('login');
                }


            });
    }
]);
