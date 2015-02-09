angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('DisconnectCtrl', function ($scope, $cordovaBluetoothSerial, $firebase) {
	var ref = new Firebase("https://lighterjack.firebaseio.com/");
	var sync = $firebase(ref);

	$scope.foobar = function () {
		sync.$push({butt: "cheek"}).then(function () {
			console.log('success nigga');
		});
	};

	$scope.RSSI = function () {
		$cordovaBluetoothSerial.readRSSI(function(rssi){
			console.log(rssi);
		}, function () {
			console.log('error');
		});
	};

	$scope.disconnect = function () {
		$cordovaBluetoothSerial.disconnect();
	};

	$scope.connect = function () {
		$cordovaBluetoothSerial.connect("2CFBD790-596B-1C4E-1EED-5507C3AC5A87", function () {
			console.log('connectded');
		}, function () {
			console.log('error nigga');
		});
	};
});