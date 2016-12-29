import angular from 'angular';
import uiRouter from 'angular-ui-router';
import PmNavbarComponent from './pm-navbar.component';

let PmNavbarModule = angular.module('pmNavbar', [
  uiRouter
])

.component('pmNavbar', PmNavbarComponent)
  
.name;

export default PmNavbarModule;
