import angular from 'angular';
import PmNavbar from './pm-navbar/pm-navbar';
import PmTeams from './pm-teams/pm-teams';

let commonModule = angular.module('app.common', [
  PmNavbar,
  PmTeams
])
  
.name;

export default commonModule;
