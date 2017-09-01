/* Author: Matt Roop
   Application: Shopping List 
   File: app.js
*/

var app = angular.module("shoppingList", []);

app.controller("myShoppingListController", function($scope) {
    /** Item array declaration & initialization **/
    $scope.shoppingItems = ['bread', 'milk', 'lunch meat'];
    
    /** Function to push new items to the shoppingItems array list with the add item button **/
    $scope.addShoppingItem = function() {
        $scope.errorText = ""
        if (!$scope.addItem) { return;}
        if ($scope.shoppingItems.indexOf($scope.addItem) == -1) {
            $scope.shoppingItems.push($scope.addItem);
        } else {
            $scope.errorText = "This item is already on the list.";
        }
        
    }
    
    /** Function to splice items from the shoppingItems array list with the remove item button **/
    $scope.removeShoppingItem = function(item) {
        $scope.shoppingItems.splice(item, 1);
    }
});