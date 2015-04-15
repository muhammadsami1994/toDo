angular
    .module('StarterApp')
    .controller('signUpCtrl', ['$scope','$firebaseAuth','$location', function( $scope  , $firebaseAuth , $location ) {
        $scope.title = 'Sign Up Page';
        var ref = new Firebase ('https://demotodo1.firebaseio.com/');

        $scope.userForSignUp = {
            userName:'',
            email:'',
            password:''
        }
        $scope.SignUp= function(){
            //myFactory.signUpAuth($scope.user)
            var authObj= $firebaseAuth(ref);
                authObj.$createUser({
                    userName: $scope.userForSignUp.userName,
                    email: $scope.userForSignUp.email,
                    password: $scope.userForSignUp.password
            }).then(function(userData) {
                console.log("User " + userData.uid + " created successfully!");

                //return $scope.authObj.$authWithPassword({
                //    email: $scope.userForSignUp.email,
                //    password: $scope.userForSignUp.password
                //});
            }).then(function(authData) {
                    $location.path('/')
                //console.log("Logged in as:", authData.uid);
            }).catch(function(error) {
                console.error("Error: "+ error);
            });

            }
    }]);