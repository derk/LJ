angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('DisconnectCtrl', function ($scope, $cordovaBluetoothSerial) {
	$scope.RSSI = function () {
		$cordovaBluetoothSerial.readRSSI(function (rssi) {
			console.log(rssi);
		});
	};

	$scope.disconnect = function () {
		$cordovaBluetoothSerial.disconnect();
	};
});