console.log ('pets!')

angular.module('myPetStoreApp',[]);
class myPSController {
  pets=[
    {name:'Bunny',price: 5},
    {name:'Rabbit',price: 10},
    {name:'Dog', price: 15},
    {name:'Puppy', price: 20}]
  newPet
  makeNewPet(){ console.log ('makeNewPet')
    this.pets.push(this.newPet)

  }
};
angular.module('myPetStoreApp').controller('myPSController',myPSController);
