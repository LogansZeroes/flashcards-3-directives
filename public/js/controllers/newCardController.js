app.controller('NewCardController', function($scope, $rootScope, $http, FlashCardsFactory) {

  $scope.newCard = {
    question: null,
    category: null,
    answers: [{
      text: null,
      correct: false
    }, {
      text: null,
      correct: false
    }, {
      text: null,
      correct: false
    }]
  }

  $scope.sendForm = function(newCard) {

    $http.post('/cards', newCard)
      .then(function() {
        $rootScope.$broadcast('refreshNow');
      })
  }


  $scope.reset = function() {
    $scope.newCard = {
      question: null,
      category: null,
      answers: [{
        text: null,
        correct: false
      }, {
        text: null,
        correct: false
      }, {
        text: null,
        correct: false
      }]
    }
  }

});
