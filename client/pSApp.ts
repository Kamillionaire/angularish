console.log ('pets!')

angular. module('myPetStoreApp',['ui.router','ngMaterial','ngMessages']).config((
  $stateProvider: ng.ui.IStateProvider,
  $locationProvider: ng.ILocationProvider,
  $urlRouterProvider: ng.ui.IUrlRouterProvider,$mdThemingProvider)=>{
  $stateProvider
    .state('Home',{
      url:'/',
      templateUrl:"views/petsHome.html",
      controller:myPSController,
      controllerAs:'vm'
  })
    .state('petStore',{
      url:'/petStore',
      templateUrl:"views/petStore.html",
      controller:myPSController,
      controllerAs:'vm'

    })
    .state('petDetails',{
      url:'/petDetails/:name',
      templateUrl:"views/petDetails.html",
      controller:detailsController,
      controllerAs:'vm'
    })
           $urlRouterProvider.otherwise('/');
           $locationProvider.html5Mode(true);
          //  $mdThemingProvider.theme('dark')
          //      .primaryPalette('teal')
          //      .accentPalette('purple');

      });
