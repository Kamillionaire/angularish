class detailsController{
  petName
  constructor($stateParams: ng.ui.IStateParamsService){
    this.petName=$stateParams['name']
  }
};
