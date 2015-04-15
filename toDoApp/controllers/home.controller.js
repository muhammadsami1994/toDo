angular
    .module('StarterApp')
    .controller('homeCtrl', ['$scope', '$mdSidenav',function( $scope , $mdSidenav) {

        $scope.title = 'Home Page';
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
    }]);