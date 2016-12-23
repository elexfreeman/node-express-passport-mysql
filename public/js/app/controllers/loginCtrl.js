
/* Редактирование предзаказа */
dpApp.controller('loginCtrl',[
    '$scope','$rootScope','$http', '$location', '$routeParams','$templateCache',
    function($scope, $rootScope, $http, $location, $routeParams,$templateCache) {
        $rootScope.body_class="signup-page";
        console.info('login');

        /*вход на сайт*/
        $scope.Login = function() {
            $http.post(
                '/rest_login',
                $scope.login
            )
                .success(function (response) {

                    /* $location.path('/appCalendarEditEvent/'+response.event+"/");*/



                });
        }



    }
]);
