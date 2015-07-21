var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
    var stop;
    var test = function () {
        if ($scope.value == 5) {
            $interval.cancel(stop);
        }
    }
    test();
    var getLatest = function () {
        $http.get('/Home/Latest').success(function (data, status, config) {
            if (status == 200) {
                $scope.data = data;
            } else if (status == 202) {
                $scope.data = 20;
            }
        });
    }
    getLatest();
    var requestTest = function () {
        $http.get('/Home/RequestTest').success(function (data, status, config) {
            $scope.testId = data.TestId;
            $scope.testRunning = true;
            console.log(data);
        }).error(function () {
            alert('failed');
        });
    }
    var getResult = function () {
        $http.get('/Home/RetrieveResult').success(function (data, status, config) {
            if (status == 200) {
                $scope.data = data;
                console.log($scope.data);
            } else if (status == 201) {
                $scope.data = data;
                console.log($scope.data);
                console.log(status);
            }
        }).error(function () {
            alert('failed');
        });
    }
    //var retrieveResult
    $scope.value = 1;

    $scope.poll = function () {
        requestTest();
        stop = $interval(function () {
            $scope.value++;
            getResult();
        }, 1000);
    };
    $scope.cancelTest = function myfunction() {
        $interval.cancel(stop);
        $scope.testRunning = false;
    }
}]);