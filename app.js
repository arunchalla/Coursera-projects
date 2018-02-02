( function (){
    'use strict';
    var x="hello";
    angular.module("myFirstApp",[])
    .controller("myFirstCtrl",function($scope){
        $scope.name=" ";

        $scope.sayHello=function(){
            return 'angular js basics' ;
        }


    });
})();