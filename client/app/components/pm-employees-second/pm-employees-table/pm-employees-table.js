import angular from 'angular';
import uiRouter from 'angular-ui-router';
import PmEmployeesTableComponent from './pm-employees-table.component';

let PmEmployeesTableModule = angular.module('PmEmployeesTable', [
  uiRouter
])

.component('pmEmployeesTable', PmEmployeesTableComponent)

.name;

export default PmEmployeesTableModule;
