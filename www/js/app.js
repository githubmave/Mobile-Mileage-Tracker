// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ui.router.router','ionic','ngStorage'])

.config(function($stateProvider, $urlRouterProvider) {
    
      $stateProvider

    // setup an abstract state for the tabs directive
    .state('splash', {
      url: "/",
      templateUrl: "templates/splash.html"
    })

    .state('startPoint', {
      url: '/startPoint',
      templateUrl: 'templates/startPoint.html',
      controller: 'startPointCtrl'
    })

     .state('endPoint', {
      url: '/endPoint',
      templateUrl: 'templates/endPoint.html',
      controller: 'endPointCtrl'
    })

    .state('setCar', {
      url: '/setCar',
      templateUrl: "templates/setCar.html",
      controller: 'setCarCtrl'
    })

    .state('countCost', {
      url: '/countCost',
      templateUrl: 'templates/countCost.html',
      controller: 'countCostCtrl'
    })

    .state('genreport', {
      url: '/genreport',
      templateUrl: 'templates/genreport.html',
      controller: 'genreportCtrl'
    })

    .state('history', {
      url: '/history',
      templateUrl: 'templates/history.html',
      controller: 'historyCtrl'
    })

     .state('history:itemId', {
      url: '/history/:itemId',
      templateUrl: 'templates/historyDetails.html',
      controller: 'historyCtrl'
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/startPoint');

    
})

.factory('tripDb',function(){

    var db=new PouchDB('dbTrips');

       return db;
})

.controller('startPointCtrl', function($scope,$localStorage,tripDb,TripService) {


      $scope.notDone=TripService.getNotDone();
   //   $scope.notDoneTrip=TripService.getNotDoneTrip();
      $scope.newTrip=TripService.getNotDoneTrip();
      // $scope.unitPrice=TripService.getUnitPrice();
      $scope.tripList=TripService.getStorTripList();
      $scope.testList=[];

      //**********************************************************************

   

         $scope.deleteDb=function(trip){

               tripDb.get(trip._id, function (err, doc) {
               tripDb.remove(doc, function (err, res) {});
              });


         }

      //***********************************************************
      $scope.saveNotDoneTrip=function(){
               TripService.setNotDone();
               $scope.notDoneTrip.startPoint=$scope.newTrip.startPoint;
               $scope.notDoneTrip.startMeter=$scope.newTrip.startMeter;

               TripService.setNotDoneTrip($scope.notDoneTrip);


      }

      //*************************************************************

      $scope.saveNewTrip=function(){
           $scope.testCheck="ttttt";
         
            TripService.setTrip($scope.newTrip);

            // tripDb.post(angular.copy($scope.newTrip), function(err, res) {
            //     if (err) console.log(err)
            //       $scope.newTrip = {};
            //     });

      }



})

.controller('endPointCtrl', function($scope,$localStorage,TripService) {

      
       $scope.notDone=TripService.getNotDone();
     // $scope.notDoneTrip=TripService.getNotDoneTrip(); 
       $scope.newTrip=TripService.getNotDoneTrip();
       $scope.tripList=TripService.getStorTripList();
       
 
      //*********************************************************
      $scope.saveNotDoneTrip=function(){
              TripService.setNotDone();

               $scope.notDoneTrip.startPoint=$scope.newTrip.startPoint;
               $scope.notDoneTrip.startMeter=$scope.newTrip.startMeter;
               $scope.notDoneTrip.endPoint=$scope.newTrip.endPoint;
               $scope.notDoneTrip.endMeter=$scope.newTrip.endMeter;

               TripService.setNotDoneTrip($scope.notDoneTrip);
      }

      //*****************************

      $scope.saveNewTrip=function(){
 
           TripService.setTrip($scope.newTrip);

      }

})

.controller('countCostCtrl', function($scope,TripService,tripDb,$ionicPopup) {

          
             $scope.newTrip=TripService.getTrip();
             $scope.notDone=TripService.getNotDone();

             $scope.newSetting=TripService.getNewSetting();

             $scope.newTrip.unitPrice=$scope.newSetting.unitPrice;
             $scope.newTrip.onshow=false;

             $scope.testDbChange=0;
             $scope.uid=1;

             // $scope.distance=$scope.newTrip.endMeter-$scope.newTrip.startMeter;


             $scope.tripList=TripService.getStorTripList();

             if($scope.newTrip.endMeter!=undefined && $scope.newTrip.startMeter!=undefined){
               $scope.distance=Number($scope.newTrip.endMeter)-Number($scope.newTrip.startMeter);
               $scope.petrolFee=$scope.distance*$scope.newSetting.unitPrice;
             }
            //***********************
              $scope.value = new Date(2014, 11, 28, 14, 57);

            //*********************************************************************
          

           //**********************************************************************

           $scope.saveDbTrip=function(){

                // var uid=1;

                tripDb.post(angular.copy($scope.newTrip),function(err,res){
                    if(err) console.log(err);
                });

                 
           }

           //**********************************************************************
                  tripDb.changes({
                              live: true,
                              onChange: function (change) {
                                      if (!change.deleted) {
                                            tripDb.get(change.id, function(err, doc) {
                                              if (err) console.log(err);
                                                    $scope.$apply(function() { //UPDATE
                                                      for (var i = 0; i < $scope.tripList.length; i++) {
                                                        if ($scope.tripList[i]._id === doc._id) {
                                                          // $scope.tripList[i] = doc;
                                                           TripService.setTripList(doc);
                                                          return;
                                                        }
                                                      } // CREATE / READ
                                                    
                                                       TripService.pushTrip(doc);

                                                       TripService.clearNotDoneTrip();

                                                       // $scope.testDbChange=$scope.uid++;

                                                    });
                                            })
                                      } 
                                      else { //DELETE
                                        $scope.$apply(function () {
                                          for (var i = 0; i<$scope.tripList.length; i++) {
                                            if ($scope.tripList[i]._id === change.id) {
                                              $scope.tripList.splice(i,1);
                                            }
                                          }
                                        })
                                       }
                              }
              });


        


           //************************************************************************
            $scope.saveNewTrip=function(){

               TripService.pushTrip($scope.newTrip);

               TripService.clearNotDoneTrip();

           }

})

.controller('genreportCtrl', function($scope,$localStorage,TripService) {



})

.controller('historyCtrl', function($scope,$stateParams,$ionicPopup,$ionicListDelegate,TripService,tripDb) {

              // $scope.$storage=$localStorage.$default({ newTrip:{},
              //                                        tripList:[{}]

                     

              // });
             $scope.newTrip={};
             $scope.online=false;


             $scope.tripList=TripService.getStorTripList();
             $scope.tripId=$stateParams.itemId;
             $scope.newSetting=TripService.getNewSetting();
            
            //******************************
              $scope.toggleOnline = function() {
              $scope.online = !$scope.online;
              // if ($scope.online) {  // Read http://pouchdb.com/api.html#sync
              //   $scope.sync = todoDb.sync('http://127.0.0.1:5984/todos', {live: true})
              //     .on('error', function (err) {
              //       console.log("Syncing stopped");
              //       console.log(err);
              //     });
              // } else {
              //   $scope.sync.cancel();
              // }
            };

             //***********************************************************

             $scope.setActive=function(trip){
                  trip.onshow=!trip.onshow;

                     

                      // var scope = $scope.$new(true);
                      //  // var startP=trip.startPoint;
                      //  // var endP=trip.endPoint;

                      //  // var dataList=[];
                      //   scope.data = { response: "Unit Price:"+trip.unitPrice
                                                                              
                      //                };


                      //   $ionicPopup.prompt({
                      //     title: ' More Details',
                      //     scope: scope,
                      //     buttons: [
                      //       { text: 'Cancel',  onTap: function(e) { return false; } },
                      //       {
                      //         text: '<b>Save</b>',
                      //         type: 'button-dark',
                      //         onTap: function(e) {
                      //           return scope.data.response;
                      //         }
                      //       },
                      //     ]
                      //   }).then(function (newStart) {
                      //         // if (newStart && newStart != trip.startPoint) {
                      //         //   trip.startPoint= newStart;

                      //         //   // trip.endPoint=newList[1].endP;
                      //         //   $scope.updateTrip(trip); 
                      //         // }

                      //         $ionicListDelegate.closeOptionButtons();

                      //   });






             }

             //*********************************************************
                   tripDb.changes({
                              live: true,
                              onChange: function (change) {
                                      if (!change.deleted) {
                                            tripDb.get(change.id, function(err, doc) {
                                              if (err) console.log(err);
                                                    $scope.$apply(function() { //UPDATE
                                                      for (var i = 0; i < $scope.tripList.length; i++) {
                                                        if ($scope.tripList[i]._id === doc._id) {
                                                          // $scope.tripList[i] = doc;
                                                           TripService.setTripList(doc);
                                                          return;
                                                        }
                                                      } // CREATE / READ
                                                    
                                                       TripService.pushTrip(doc);
                                                       TripService.clearNotDoneTrip();

                                                    });
                                            })
                                      } 
                                      else { //DELETE
                                        $scope.$apply(function () {
                                          for (var i = 0; i<$scope.tripList.length; i++) {
                                            if ($scope.tripList[i]._id === change.id) {
                                              $scope.tripList.splice(i,1);
                                            }
                                          }
                                        })
                                       }
                              }
              });

        
             //*********************************************************

             $scope.deleteTrip=function(trip){

                  //  if($scope.$storage.tripList.length>1){

                           //  for(i in $scope.tripList){

                           //    if($scope.tripList[i].id==id){
                           // //    $scope.$storage.tripList.splice(i,1);

                           //          TripService.deleteTrip($scope.tripList[i].id);
                           //    }

                           //  }

                tripDb.get(trip._id, function (err, doc) {
                             tripDb.remove(doc, function (err, res) {});
                });
            
            }


              //***********************************************************

             //  $scope.saveOldTrip=function(trip){

             //        // for(i in $scope.tripList){
                      
             //        //       if($scope.tripList[i].id==trip.id){

             //        //          $scope.newTrip=angular.copy(trip);

             //        //          TripService.pushTrip($scope.newTrip);
             //        //       }
             //        // }



             //          tripDb.post(angular.copy(trip),function(err,res){
             //                  if(err) console.log(err);
             //          });
             // }
            
             //**********************************************************************
              $scope.updateTrip=function(trip){
                   tripDb.get(trip._id, function (err, doc) {
                      if (err) {
                        console.log(err);
                      } else {
                        tripDb.put(angular.copy(trip), doc._rev, function (err, res) {
                          if (err) console.log(err);
                        });
                      }
                    });
                       


              }

             //**********************************************************************
             $scope.editTripStart=function(trip){

                             
                       var scope = $scope.$new(true);
                       // var startP=trip.startPoint;
                       // var endP=trip.endPoint;

                       // var dataList=[];
                        scope.data = { response: trip.startPoint};

                        dataList=scope.data.response;

                        $ionicPopup.prompt({
                          title: '<i class="icon ion-edit"></i> Edit trip:',
                          scope: scope,
                          buttons: [
                            { text: ' Cancel',  onTap: function(e) { return false; } },
                            {
                              text: '<b>  Save</b>',
                              type: 'button-dark',
                              onTap: function(e) {
                                return scope.data.response;
                              }
                            },
                          ]
                        }).then(function (newStart) {
                              if (newStart && newStart != trip.startPoint) {
                                trip.startPoint= newStart;

                                // trip.endPoint=newList[1].endP;
                                $scope.updateTrip(trip); 
                              }

                              $ionicListDelegate.closeOptionButtons();

                        });
  
             }
             //*********************************************************************

              $scope.editTripEnd=function(trip){

                             
                       var scope = $scope.$new(true);
                       // var startP=trip.startPoint;
                       // var endP=trip.endPoint;

                       // var dataList=[];
                        scope.data = { response: trip.endPoint};

                        dataList=scope.data.response;

                        $ionicPopup.prompt({
                          title: '<i class="icon ion-edit"></i> Edit trip:',
                          scope: scope,
                          buttons: [
                            { text: ' Cancel',  onTap: function(e) { return false; } },
                            {
                              text: '<b>   Save</b>',
                              type: 'button-dark',
                              onTap: function(e) {
                                return scope.data.response;
                              }
                            },
                          ]
                        }).then(function (newEnd) {
                              if (newEnd && newEnd != trip.endPoint) {
                                trip.endPoint= newEnd;

                                // trip.endPoint=newList[1].endP;
                                $scope.updateTrip(trip); 
                              }

                              $ionicListDelegate.closeOptionButtons();

                        });
  
             }

             //**********************************************************************

}) 


.controller('setCarCtrl', function($scope,$localStorage,TripService) {


       $scope.newSetting=TripService.getNewSetting();

       $scope.setNewSetting=function(){

              TripService.setNewSetting($scope.newSetting);

       }


})

 // .controller('DateController', ['$scope', function($scope) {
 //      $scope.value = new Date(2010, 11, 28, 14, 57);
 //    }])


.service('TripService', function ($localStorage){


    var trip={};
    var uid=1; 
    var newSetting={};

    var  notDone=true;

    var notDoneTrip={};

    var trips=[{}];

    var tripDbList=[];

    // var showList=[];

     var db=new PouchDB('Dbtrips');

   
    var $storage=$localStorage.$default({ uid:1,
                                          notDone:true,
                                          newTrip:{},
                                          notDoneTrip:{},
                                          tripList:[{}],
                                          // newSetting:{}

        });

   
    this.setNotDone=function(){
            // $storage.notDone=!$storage.notDone;

            notDone=!notDone;
         
    }


    this.getNotDone=function(){

                // return $storage.notDone;
      return notDone;

    }

    this.setNotDoneTrip=function(trip){
         // $storage.notDoneTrip=angular.copy(trip);
         notDoneTrip=angular.copy(trip);

    }


    this.getNotDoneTrip=function(){

      // return $storage.notDoneTrip;
      return notDoneTrip;

    }
    
    this.setNewSetting=function(setting){

           newSetting=setting;


    }
    
    this.getNewSetting=function(){

            return newSetting;
         // return 2;
    }
    this.clearNotDoneTrip=function(){

       // $storage.notDoneTrip={};
          notDoneTrip={};
    }

    this.pushTrip=function(trip){

               // if($storage.tripList.length<20){
                    
               //       trip.id=$storage.uid++;
               //       $storage.tripList.push(trip);
               // }
               // else{
               //     $storage.tripList.splice(0,1);

               //      trip.id=$storage.uid++;
               //      $storage.tripList.push(trip);

               // }

                if(tripDbList.length<20){
                    
                     trip.id=uid++;
                     tripDbList.push(trip);
               }
               else{
                   tripDbList.splice(0,1);

                    trip.id=uid++;
                    tripDbList.push(trip);

               }

              

     }
         



    this.deleteTrip=function(id){
                   

              if(tripDbList.length>1){
                    for(i in tripDbList){

                                    if(tripDbList[i].id==id){
                                       tripDbList.splice(i,1);
                                    }
                     }
              }

              else{

                                       tripDbList.splice(0,1);
                                       uid=1;
              }

    }

  

    this.setTrip=function(tri){
        
         trip=angular.copy(tri);


    }

    this.getTrip=function(){
         return trip;
   
    }

   
    this.getStorTripList = function () {
        // return $storage.tripList;

        return tripDbList;
     }


     this.setTripList=function(trip){

            
            for(i in tripDbList){

                 if(tripDbList[i].id==trip.id){
                    tripDbList[i]=trip;                          

                 }

            }

     }

     this.getTripList = function () {
        return trips;
     }


     

    
});