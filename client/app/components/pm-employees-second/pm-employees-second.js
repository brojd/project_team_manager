import angular from 'angular';
import uiRouter from 'angular-ui-router';
import PmEmployeesSecondComponent from './pm-employees-second.component';

let PmEmployeesSecondModule = angular.module('PmEmployeesSecondView', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('PmEmployeesSecond', {
      url: '/employeesSecondView',
      component: 'pmEmployeesSecond'
    });
})

.component('pmEmployeesSecond', PmEmployeesSecondComponent)
  
.name;

export default PmEmployeesSecondModule;
