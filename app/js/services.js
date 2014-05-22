'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
  .factory('hoteldata',['$http','$q',function dataprovider($http,$q){
	
	
 var dataprovider = {
 	getHotels:function(){
 		var deffered = $q.defer();
 		$http({method: 'GET', url: 'https://glowing-fire-3924.firebaseio.com/hotels.json'}).
    success(function(data, status, headers, config) {
      	deffered.resolve(data);
    }).
    error(function(data, status, headers, config) {
    	deffered.reject();
    });
    return deffered.promise;
 	}
 }		
return dataprovider;
  
}])
  .factory('DetailsData',['$http','$q',function dataprovider($http,$q){
  	var dataprovider = {
  		getDetails:function(param){
 		var deffered = $q.defer();
 		$http.get("https://glowing-fire-3924.firebaseio.com/hotels/"+param+".json").
    success(function(data, status, headers, config) {
      	deffered.resolve(data);
    }).
    error(function(data, status, headers, config) {
    	deffered.reject();
    });
    return deffered.promise;
 		}
 	}		
	return dataprovider;
  }])
  .factory('CommentsData',['$http','$q',function dataprovider($http,$q){
    var dataprovider = {
      getComments:function(param){
    var deffered = $q.defer();
    $http.get("https://glowing-fire-3924.firebaseio.com/hotels/"+param+"/Comment.json").
    success(function(data, status, headers, config) {
        deffered.resolve(data);
    }).
    error(function(data, status, headers, config) {
      deffered.reject();
    });
    return deffered.promise;
    }
  }   
  return dataprovider;
  }]);
