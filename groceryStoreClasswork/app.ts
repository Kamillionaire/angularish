console.log('hello world')

angular.module('myGroceryStoreApp',[]);
class myController {
  message="Eat Your Greens"
  groceries=[
    {name:'khale',price: 1},
    {name:'collards',price: 2},
    {name:'spinach', price: 3},
    {name:'Rainbow Chard', price: 4}]

};
angular.module('myGroceryStoreApp').controller('myController',myController);
