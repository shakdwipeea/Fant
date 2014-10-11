'use strict';

/**
 * @ngdoc function
 * @name fantApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the fantApp
 */
angular.module('fantApp')
  .controller('DashboardCtrl', function ($scope,Player,DashInit,$window,$state,SaveTeam) {
    if($window.localStorage.getItem('Data') == '') {
        $state.go('cover');
    } else {
        var DataInit = DashInit.getData();
    DataInit.then(function  (payload) {
        // body...
        $scope.Budget = payload.budg;
        $scope.TeamName = payload.tname;
        $scope.PreviousPoint = payload.prept;
        $scope.TotalPoint = payload.total;

    },function(reason) {
        $scope.message = reason;
        console.log(reason);
    });

    var goal = Player.getPlayers(0);
    goal.then(function  (payload) {
        $scope.players.goal.push(payload);
        //console.log($scope.players.goal.name);
    },function  (reason) {
        console.log(reason);
    });

     var def = Player.getPlayers(1);
    def.then(function  (payload) {
        $scope.players.def.push(payload);
        //console.log($scope.players.goal.name);
    },function  (reason) {
        console.log(reason);
    });

     var mid = Player.getPlayers(2);
    mid.then(function  (payload) {
        $scope.players.mid.push(payload);
        //console.log($scope.players.goal.name);
    },function  (reason) {
        console.log(reason);
    });

     var att = Player.getPlayers(3);
    att.then(function  (payload) {
        $scope.players.att.push(payload);
        //console.log($scope.players.goal.name);
    },function  (reason) {
        console.log(reason);
    });

    }

    $scope.players = {
    	goal: [],
        def: [],
    	mid: [],
    	att: []
    };

    $scope.team = {
        keeper: [],
        def: [],
        mid: [],
        att: []
    };

    


    $scope.AddPlayer = function  (name,flag) {  
        // body...
        console.log("Function called from " + flag + " and player " + name);
        console.log('Hi',$scope.team[0]);
        var present = -1;
        
        var prop = "";
        if(flag == 0) {
            prop = "keeper";
        }
        else if (flag == 1) {
            prop = "def";
        }
        else if(flag == 2) {
            prop="mid";
        }
        else if(flag == 3) {
            prop = "att";
        }

        for (var i = 0; i < $scope.team[prop].length; i++) {
            if(name == $scope.team[prop][i].name){
                present = 1;
                break;            
            }
        }
        
        console.log(present);
        var valid = 0;
        if(present == -1){
            if(flag == 0) {
                if($scope.team.keeper.length != 3) {
                    $scope.team.keeper.push({name:name});
                    valid = 1;
                }
            }
            else if(flag == 1) {
                if($scope.team.def.length != 5) {
                    $scope.team.def.push({name:name});
                    valid = 2;
                }
            }
            else if (flag == 2) {
                if($scope.team.mid.length != 5) {
                    $scope.team.mid.push({name:name});
                    valid = 3;
                }
            }
            else if (flag == 3) {
                if($scope.team.att.length != 3)  {
                    $scope.team.att.push({name:name});
                    valid = 4;
                }
            }
            if (valid != 0) {
                var promise = SaveTeam.save(flag,name);
                promise.then(function  (data) {
                    // body...
                },function  (reason) {
                    // body...
                    console.log(reason);
                    //Dirty stuff;
                    switch(valid) {
                        case 1 : $scope.team.keeper.pop();
                            break;
                        case 2: $scope.team.def.pop();
                            break;
                        case 3: $scope.team.mid.pop();
                            break;
                        case 4: $scope.team.att.pop();
                            break;
                        default: 
                            console.log('WTF');
                    }
                })
            }
        }
    }
  });
