
/* Controllers */

angular.module('myApp.controllers', [])
  .controller('hotelcontroller', ['$scope','hoteldata', function($scope,hoteldata) {
  	
    
  	$scope.IncreaseRating = function(hotel)
  	{
  		hotel.Rating = hotel.Rating + 1;
  	}
    function callback(data)
    {
      $scope.Hotels = data;
    }
    hoteldata.getHotels().then(function (data){
      $scope.Hotels = data;
    });

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('samplecontroller', ['$scope', function($scope) {

  }])
  .controller('Detailscontroller',['$scope','DetailsData','$http','$routeParams','CommentsData','$location',function($scope,DetailsData,$http,$routeParams,CommentsData,$location){
    var param = $routeParams.key;
    DetailsData.getDetails(param).then(function (data){
      $scope.Details = data;
      $scope.key = param;
      });
    $scope.SubmitComment = function(comment,key)    {
      $http.post("https://glowing-fire-3924.firebaseio.com/hotels/"+key+"/Comment.json",JSON.stringify(comment));
       $location.path('/#Details/'+key);
    }
    CommentsData.getComments(param).then(function(data){
        $scope.Comments = data;
    });
  }])
  .controller('NewHotelcontroller',['$scope','$http','$window',function($scope,$http,$window){
      $scope.CreateHotel = function(hotel){
          $http.post("https://glowing-fire-3924.firebaseio.com/hotels.json",hotel);
//          $window.location.href = "#view1";
    }
 // DetailsData.getDetails().then(function (data){
   //   $scope.Details = data;
     // });    
  }]);
