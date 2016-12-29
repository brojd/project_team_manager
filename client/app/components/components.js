import angular from 'angular';
import PmEmployeesFirst from './pm-employees-first/pm-employees-first';
import PmEmployeesSecond from './pm-employees-second/pm-employees-second';
import PmEmployeesTable from './pm-employees-second/pm-employees-table/pm-employees-table';

let componentModule = angular.module('app.components', [
  PmEmployeesFirst,
  PmEmployeesSecond,
  PmEmployeesTable
])

.name;

export default componentModule;
