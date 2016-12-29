import angular from 'angular';
import uiRouter from 'angular-ui-router';
import PmEmployeesFirstComponent from './pm-employees-first.component';

let PmEmployeesFirstModule = angular.module('PmEmployeesFirst', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('PmEmployeesFirst', {
      url: '/',
      component: 'pmEmployeesFirst'
    });
})

.component('pmEmployeesFirst', PmEmployeesFirstComponent)
  
.name;

export default PmEmployeesFirstModule;
