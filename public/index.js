var app = angular.module("App", ['ui.router']);

var lessons = [];

app.run(function($http){
  $http.get("/api/lessons")
      .success(function(response) {lessons = response;});
})

app.config(function ($stateProvider) {
        $stateProvider
          .state('index', {
            url: '',
            templateUrl: 'partials/index.html'
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
            controller: function ($scope, $stateParams, $sce) {
              $scope.trustAsHtml = $sce.trustAsHtml;
              $scope.title = lessons[$stateParams.lessonId - 1].title;
              $scope.text = lessons[$stateParams.lessonId - 1].text;
              $scope.faq = lessons[$stateParams.lessonId - 1].faq;
            }
          })
});