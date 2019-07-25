

var app = angular.module("myModule",[])
    
app.controller("myController", function($scope,$http) 
{

        $scope.rowLimit = 3;
        
        $scope.rowArr = [
            {col:1,pname:'PD',pts:0},
            {col:2,pname:"Ramya",pts:0}
        ];

        $scope.addPlayer = function(user)
        {
            var pno= $scope.rowArr.length +1;
            //$scope.rowArr.push({'col':'p'+pno})
            $scope.rowArr.push({col:pno,pname:user,pts:0})
        };

        var dre = $scope.rowArr;
        
        $scope.subpl = function (plData) {
            var plData = plData;
            $http.post('/players', JSON.stringify(plData)).then(function (response) {
                if (response)
                $scope.msg = "Post Data Submitted Successfully!";
                }, function (response) {
                $scope.msg = "Service not Exists";
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
        });

        //amplify.store("PlData", dre);
    };
    });

