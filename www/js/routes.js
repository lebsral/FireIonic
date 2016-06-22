angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('menu', {
      url: '/menu',
      templateUrl: 'templates/menu.html'
    })
        
      
    
      
        
    .state('sTANDPIPEANDHOSESYSTEMSForm7F', {
      url: '/Standpipes7F',
      templateUrl: 'templates/sTANDPIPEANDHOSESYSTEMSForm7F.html'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/Standpipes7F');
  

  

});