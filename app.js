var miAppAngular = angular.module('navegacion', ['ngRoute'] );
miAppAngular.config( [ '$routeProvider' , function($routeProvider) {
    
    $routeProvider.when('/' , {      
        templateUrl: 'vista/home.html',
        controller: 'inicio'
    })
    .when('/inicio', {
        templateUrl: 'vista/inicio.html',
        controller: 'inicio'  
    })
    .when('/detalles/:indice', {
        templateUrl: 'vista/detalles.html',
        controller: 'detalles'  
    })
    .when('/opendata', {
        templateUrl: 'vista/opendata.html',
        controller: 'opendata'
    })
    .when('/404', {
        templateUrl: 'vista/404.html',
        controller: 'inicio'
    })
    .otherwise({        
        redirectTo: '/404'        
    })
}]);

miAppAngular.constant('configuracionGlobal' , {
    nombreApp:'3Dictvs',
    subtitulo:'Todas las notificaciones a tu alcance',
    nombreDelSitio:'Anuncios Ayto. Gijón',
    api_url1: 'data/anuncios.json'     
});