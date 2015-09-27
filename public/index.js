var app = angular.module("App", ['ui.router']);

app.config(function ($stateProvider) {
        $stateProvider.
                state('index', {
                    url: '',
                    template: 'Go to <a href="#lessons">/lessons</a>',
                    controller: 'MainController'
                }).
                state('lessons', {
                    url: '/lessons',
                    templateUrl: 'partials/lessons.html',
                    controller: 'LessonsController'
                })

    });
    
app.controller('MainController', function($scope) {
    });


//$.getJSON( "/api/lessons", function( data ) {
    var lessons = [
   {  
      "url":1,
      "title":"Lesson 1 title",
      "text":"Lesson 1 text",
      "faq":[  
         {  
            "title":"Question 1 title",
            "text":"Question 1 text"
         },
         {  
            "title":"Question 2 title",
            "text":"Question 2 text"
         },
         {  
            "title":"Question 3 title",
            "text":"Question 3 text"
         },
         {  
            "title":"Question 4 title",
            "text":"Question 4 text"
         }
      ]
   }
];

    app.controller('LessonsController', function($scope) {
        $scope.lessons = lessons;
    });

lessons = [  
   {  
      "url":1,
      "title":"Lesson 1 title",
      "text":"Lesson 1 text",
      "faq":[  
         {  
            "title":"Question 1 title",
            "text":"Question 1 text"
         },
         {  
            "title":"Question 2 title",
            "text":"Question 2 text"
         },
         {  
            "title":"Question 3 title",
            "text":"Question 3 text"
         },
         {  
            "title":"Question 4 title",
            "text":"Question 4 text"
         }
      ]
   },
   {  
      "url":2,
      "title":"Lesson 2 title",
      "text":"Lesson 2 text",
      "faq":[  
         {  
            "title":"Question 1 title",
            "text":"Question 1 text"
         },
         {  
            "title":"Question 2 title",
            "text":"Question 2 text"
         },
         {  
            "title":"Question 3 title",
            "text":"Question 3 text"
         }
      ]
   },
   {  
      "url":3,
      "title":"Lesson 3 title",
      "text":"Lesson 3 text",
      "faq":[  
         {  
            "title":"Question 1 title",
            "text":"Question 1 text"
         },
         {  
            "title":"Question 2 title",
            "text":"Question 2 text"
         },
         {  
            "title":"Question 3 title",
            "text":"Question 3 text"
         }
      ]
   },
   {  
      "url":4,
      "title":"Lesson 4 title",
      "text":"Lesson 4 text",
      "faq":[  
         {  
            "title":"Question 1 title",
            "text":"Question 1 text"
         },
         {  
            "title":"Question 2 title",
            "text":"Question 2 text"
         },
         {  
            "title":"Question 3 title",
            "text":"Question 3 text"
         },
         {  
            "title":"Question 4 title",
            "text":"Question 4 text"
         }
      ]
   },
   {  
      "url":5,
      "title":"Lesson 5 title",
      "text":"Lesson 5 text",
      "faq":[  
         {  
            "title":"Question 1 title",
            "text":"Question 1 text"
         },
         {  
            "title":"Question 2 title",
            "text":"Question 2 text"
         },
         {  
            "title":"Question 3 title",
            "text":"Question 3 text"
         },
         {  
            "title":"Question 4 title",
            "text":"Question 4 text"
         },
         {  
            "title":"Question 5 title",
            "text":"Question 5 text"
         }
      ]
   },
   {  
      "url":6,
      "title":"Lesson 6 title",
      "text":"Lesson 6 text",
      "faq":[  
         {  
            "title":"Question 1 title",
            "text":"Question 1 text"
         },
         {  
            "title":"Question 2 title",
            "text":"Question 2 text"
         },
         {  
            "title":"Question 3 title",
            "text":"Question 3 text"
         }
      ]
   },
   {  
      "url":7,
      "title":"Lesson 7 title",
      "text":"Lesson 7 text",
      "faq":[  
         {  
            "title":"Question 1 title",
            "text":"Question 1 text"
         },
         {  
            "title":"Question 2 title",
            "text":"Question 2 text"
         },
         {  
            "title":"Question 3 title",
            "text":"Question 3 text"
         },
         {  
            "title":"Question 4 title",
            "text":"Question 4 text"
         }
      ]
   },
   {  
      "url":8,
      "title":"Lesson 8 title",
      "text":"Lesson 8 text",
      "faq":[  
         {  
            "title":"Question 1 title",
            "text":"Question 1 text"
         },
         {  
            "title":"Question 2 title",
            "text":"Question 2 text"
         },
         {  
            "title":"Question 3 title",
            "text":"Question 3 text"
         }
      ]
   },
   {  
      "url":9,
      "title":"Lesson 9 title",
      "text":"Lesson 9 text",
      "faq":[  
         {  
            "title":"Question 1 title",
            "text":"Question 1 text"
         },
         {  
            "title":"Question 2 title",
            "text":"Question 2 text"
         },
         {  
            "title":"Question 3 title",
            "text":"Question 3 text"
         },
         {  
            "title":"Question 4 title",
            "text":"Question 4 text"
         },
         {  
            "title":"Question 5 title",
            "text":"Question 5 text"
         }
      ]
   },
   {  
      "url":10,
      "title":"Lesson 10 title",
      "text":"Lesson 10 text",
      "faq":[  
         {  
            "title":"Question 1 title",
            "text":"Question 1 text"
         },
         {  
            "title":"Question 2 title",
            "text":"Question 2 text"
         },
         {  
            "title":"Question 3 title",
            "text":"Question 3 text"
         },
         {  
            "title":"Question 4 title",
            "text":"Question 4 text"
         },
         {  
            "title":"Question 5 title",
            "text":"Question 5 text"
         }
      ]
   }
];    

for (var i = 1; i<=lessons.length; i++){
    var stateName = 'lesson_' + i;
    var stateUrl = '/lessons/'+ lessons[i-1].url;
    var stateController = 'Lesson'+i+'Controller';

    app.config(function ($stateProvider) {
        $stateProvider.
                state(stateName, {
                    url: stateUrl,
                    templateUrl: 'partials/lesson.html',
                    controller: stateController
                })
    });

    var title = lessons[i-1].title;
    var text = lessons[i-1].text;
    var faq = lessons[i-1].faq;
    app.controller(stateController, function($scope) {
        $scope.title = title;
        $scope.text = text;
        $scope.faq = faq;
    });
}

//});