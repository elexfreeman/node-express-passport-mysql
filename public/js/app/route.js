/**
 * Created by elex on 20.12.2016.
 */

/* Config */
dpApp.config([
    '$routeProvider', '$locationProvider',
    function($routeProvide, $locationProvider){
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $routeProvide
            .when('/',{
                templateUrl:'/js/app/views/dashboard.html',
                controller:'defaultCtrl'
            })
            .when('/login',{
                templateUrl:'/js/app/views/login.html',
                controller:'defaultCtrl'
            })/*
            .when('/appCalendarDay/:year/:month/:day/',{
                templateUrl:'/calendar/DayTpl',
                controller:'CalendarDayCtrl'
            })
            .when('/appCalendarNewEvent/:year/:month/:day/:box_id/:time/',{
                templateUrl:'/calendar/NewEventTpl',
                controller:'CalendarNewEventCtrl'
            })
            .when('/appCalendarEditEvent/:order_id/',{
                templateUrl:'/calendar/EditEventTpl',
                controller:'CalendarEditEventCtrl'
            })*/

            .otherwise({
                redirectTo: '/'
            });
    }
]);
