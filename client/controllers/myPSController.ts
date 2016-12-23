class myPSController {
  searchTerm = '';
  indexToUpdate;
  pets=[
    {name:'Bunny',price: 5.65,type:'baby', image:'bunny.jpeg'},
    {name:'Rabbit',price: 10.99,type:'adult',image:'rabbit.jpeg'},
    {name:'Dog', price: 15.99,type:'adult',image:'dog.jpeg'},
    {name:'Puppy', price: 20,type:'baby',image:'puppy.jpeg'}]
  newPet:any={};
  validForm(newPet){
    return typeof newPet.price === 'number' && typeof newPet.name === 'string'
  }
  makeNewPet(){
    console.log ('makeNewPet')
    console.log (this.newPet)
    console.log (this.pets)
    this.pets.push(this.newPet)
  }
  deleteThis(item,$index){
    console.log (arguments)
    this.pets.splice($index, 1);
  }
  updateThis(item,$index){
    this.newPet=item
    this.indexToUpdate=$index
  }
  actualUpdate(){
    this.pets[this.indexToUpdate]=this.newPet
  }

};
angular.module('myPetStoreApp').controller('myPSController',myPSController);
