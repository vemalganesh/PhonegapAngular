angular.module('MaintainApp.controllers.Main', ['ngStorage'])

.controller('MainController',function($scope, $localStorage){
$scope.newvehicle = {};
$scope.vechicles = {};

if($localStorage.vechicles != undefined){
$scope.vechicles = $localStorage.vechicles;
}


$scope.newpart = {};
$scope.allParts = {};
// $scope.partsToshow = {};
if($localStorage.allParts != undefined){
$scope.allParts = $localStorage.allParts;
}
$scope.CurrentVecId = 0;

$scope.addVehicle = function(){
  if($scope.vechicles != undefined && $scope.newvehicle.vehiclemodel != undefined && $scope.newvehicle.totalDistance != undefined &&
    $scope.newvehicle.logdatetime != undefined && $scope.newvehicle.totalPrice != undefined && 
    $scope.newvehicle.repairShop != undefined){
  if(!$scope.isObjectEmpty($scope.vechicles)){
  $scope.vechicles.push({
  id :  $scope.vechicles.length + 1,
  model: $scope.newvehicle.vehiclemodel,
  Totaldistance: $scope.newvehicle.totalDistance,
  logDateTime: $scope.newvehicle.logdatetime,
  TotalPrice: $scope.newvehicle.totalPrice,
  PartsChanged: $scope.newvehicle.PartsChanged,
  RepairShop: $scope.newvehicle.repairShop
});
console.dir($scope.vechicles);
$localStorage.vechicles = $scope.vechicles;
$scope.newvehicle = {};
  }
  else
  {
    $scope.vechicles = [
    {
      id:1,
      model: $scope.newvehicle.vehiclemodel,
      Totaldistance: $scope.newvehicle.totalDistance,
      logDateTime: $scope.newvehicle.logdatetime,
      TotalPrice: $scope.newvehicle.totalPrice,
      PartsChanged: $scope.newvehicle.PartsChanged,
      RepairShop: $scope.newvehicle.repairShop
    }]
    $localStorage.vechicles =  $scope.vechicles;
    $scope.newvehicle = {};
    console.dir($scope.vechicles);
}
  }
}

$scope.loadParts = function(vehicle)
{
  $scope.CurrentVecId = vehicle.id;
}

$scope.removePart = function(part)
{
var removedVehicle = $scope.allParts.indexOf(part);
$scope.allParts.splice(removedVehicle, 1);
$localStorage.allParts = $scope.allParts;
}

$scope.removeVehicle = function(vehicle)
{
var removedVehicle = $scope.vechicles.indexOf(vehicle);
$scope.vechicles.splice(removedVehicle, 1);
$localStorage.vechicles = $scope.vechicles;
}


$scope.addPartsChanged = function()
{
 if(!$scope.isObjectEmpty($scope.allParts)){
  $scope.allParts.push({
  Vecid :  $scope.CurrentVecId,
  partsInfo: $scope.newpart.partsinfo
});
$localStorage.allParts = $scope.allParts;
$scope.newpart = {};
  }
  else
  {
    $scope.allParts = [
    {
      Vecid:$scope.CurrentVecId,
      partsInfo: $scope.newpart.partsinfo
    }]
    $localStorage.allParts =  $scope.allParts;
    $scope.newpart = {};
}
}

$scope.isObjectEmpty = function(card){
  return Object.keys(card).length === 0;
}


});
