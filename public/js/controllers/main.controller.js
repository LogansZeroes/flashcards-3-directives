app.controller('MainController', function ($scope, $rootScope, FlashCardsFactory, $log, ScoreFactory) {

  $scope.categories = FlashCardsFactory.categories;
  $scope.selectedCategory;

  $scope.getCategoryCards = function (category) {
    $scope.loading = true;
    FlashCardsFactory.getFlashCards(category).then(function(cards){
      ScoreFactory.reset();
      $scope.selectedCategory = category;
      $scope.flashCards = cards;
    }).catch(function(err){
      $log.error('error getting cards:', err);
    }).finally(function(){
      $scope.loading = false;
    });
  };

  $scope.getCategoryCards();

  $rootScope.$on('refreshNow', function(){
    $scope.getCategoryCards();
  })  
});
