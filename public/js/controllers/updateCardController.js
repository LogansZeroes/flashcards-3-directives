app.controller('UpdateCardController', function($scope, $http, FlashCardsFactory){
  $scope.newCard = {
    id: null,
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

  FlashCardsFactory.getFlashCards().then(function(cards){
    $scope.flashCards = cards;
  }).catch(function(err){
    $log.error('error getting cards:', err);
  });

  $scope.updateCard = function(){
    $http.put('/updateCard', $scope.newCard)
  }
})
