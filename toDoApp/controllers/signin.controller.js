angular
    .module('StarterApp')
    .controller('signInCtrl', ['$scope','myFactory','$firebaseAuth','$location', function( $scope , myFactory , $firebaseAuth , $location) {
        var ref = new Firebase ('https://demotodo1.firebaseio.com/');
       $scope.title = 'Sign In Page';
        $scope.user = {
            email:'',
            password:''
        };
        $scope.login= function(){
            //myFactory.signInAuth()
            var authObj = $firebaseAuth(ref)
            authObj.$authWithPassword({
                email: $scope.user.email,
                password: $scope.user.password
            }).then(function(authData) {
                $location.path('/home')
                //console.log("Logged in as:", authData.uid);
            }).catch(function(error) {
                console.error("Authentication failed:", error);
            });
        }
    }]);
//$scope.authObj.$authWithPassword({
//email: "my@email.com",
//    password: "mypassword"
//}).then(function(authData) {
//    console.log("Logged in as:", authData.uid);
//}).catch(function(error) {
//    console.error("Authentication failed:", error);
//});