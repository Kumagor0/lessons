angular.module("App", ['ui.router'])
    .config(function config($stateProvider) {
        $stateProvider.
                state('index', {
                    url: '',
                    template: 'Go to <a href="#lessons">/lessons</a>',
                    controller: 'MainController'
                });
        $stateProvider.
                state('lessons', {
                    url: '/lessons',
                    templateUrl: 'partials/lessons.html',
                    controller: 'LessonsController'
                })

    })
    
    .controller('MainController', function($scope) {
    })


$.getJSON( "/api/lessons", function( data ) {
    var lessons = data;

    angular.module("App", ['ui.router'])
        .controller('LessonsController', function($scope) {
            $scope.lessons = lessons;
        });

    for (var i = 1; i <= lessons.length; i++){
 
        angular.module("App", ['ui.router'])        
            .controller('Lesson'+i+'Controller', function($scope) {
                $scope.title = lessons[i-1].title;
                $scope.text = lessons[i-1].text;
                $scope.faq = lessons[i-1].faq;
            })

            .config(function config($stateProvider) {
                $stateProvider.
                        state('lesson_' + i, {
                            url: '/lessons/'+ lessons[i - 1].url,
                            templateUrl: 'partials/lessons.html',
                            controller: 'Lesson'+i+'Controller'
                        })
            });            
    }

});