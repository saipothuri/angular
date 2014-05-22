'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('mySample',['$compile',function($compile){
  	return {
  		link: function(scope,element,attrs,controller){
  			var markup = "<input type='text' ng-model='sampleinfo'/>{{sampleinfo}}<br/>";
  			var compiled = $compile(markup)(scope);
  			angular.element(element).append(compiled);
  		}
  	}
  }])
  .directive('echo',function(){
  	return{
  		restrict : 'AEC',
  		template : "<input type='text' ng-model='sampleinfo'/>{{sampleinfo}}<br/><br/>",
  		scope : {
  			  		}

  	}
  })
 .directive('hotelSummary',function(){
  	return{
  		restrict : 'E',
  		templateUrl : 'templates/hotelsummary.html'
  		}
  })
  ;
