
/* Редактирование предзаказа */
dpApp.controller('defaultCtrl',[
    '$scope','$rootScope','$http', '$location', '$routeParams','$templateCache',
    function($scope, $rootScope, $http, $location, $routeParams,$templateCache) {
        $http.get("/calendar/CalendarInit")
            .then(function(response) {

                /*текущая дата и время*/
                $scope.now = new Date();
                $scope.year = $scope.now.format("yyyy");
                $scope.month = $scope.now.format("mm");
                $scope.day = $scope.now.format("dd");
                $scope.time = $scope.now.format("HH:MM:ss");

                /*$location.path('/appCalendarMonth/'+$scope.year+"/"+$scope.month+"/");*/
            });
    }
]);
