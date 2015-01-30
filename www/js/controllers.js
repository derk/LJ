angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('RssiCtrl', function ($scope) {
	$scope.RSSI = function () {
		$cordovaBluetoothSerial.readRssi();
	};
});
