/**
 * Created by elex on 20.12.2016.
 */

/* Config */
dpApp.config([
    '$routeProvider', '$locationProvider',
    function($routeProvide, $locationProvider){
        /*$locationProvider.html5Mode(true);*/
        $routeProvide
            .when('/',{
                templateUrl:'/calendar/CalendarTpl',
                controller:'defaultCtrl'
            })
            .when('/appCalendarMonth/:year/:month/',{
                templateUrl:'/calendar/CalendarTpl',
                controller:'CalendarMonthCtrl'
            })
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
            })

            .otherwise({
                redirectTo: '/'
            });
    }
]);
