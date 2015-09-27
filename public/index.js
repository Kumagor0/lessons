var app = angular.module("App", ['ui.router']);

var lessons = [];

$.getJSON( "/api/lessons", function( data ) {
  lessons = data;
});

app.config(function ($stateProvider) {
        $stateProvider
          .state('index', {
            url: '',
            template: 'Go to <a href="#lessons">/lessons</a>'
          })
          .state('lessons', {
            url: '/lessons',
            templateUrl: 'partials/lessons.html',
            controller: function($scope){
              $scope.lessons = lessons;
            }
          })
          .state('lesson', {
            url: '/lessons/{lessonId}',
            templateUrl: 'partials/lesson.html',
            controller: function ($scope, $stateParams) {
              $scope.title = lessons[$stateParams.lessonId - 1].title;
              $scope.text = lessons[$stateParams.lessonId - 1].text;
              $scope.faq = lessons[$stateParams.lessonId - 1].faq;
            }
          })
});