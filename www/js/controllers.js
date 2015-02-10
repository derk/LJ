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
		sync.$push({foo: "bar"}).then(function () {
			console.log('success');
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
		$cordovaBluetoothSerial.connect("4E8953FE-8D07-21F4-063C-4F29B2368B0F", function () {
			console.log('connectded');
		}, function () {
			console.log('error');
		});
	};
});