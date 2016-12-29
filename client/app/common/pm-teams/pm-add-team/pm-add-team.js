import angular from 'angular';
import uiRouter from 'angular-ui-router';
import PmAddTeamComponent from './pm-add-team.component';

let PmAddTeamModule = angular.module('PmAddTeam', [
  uiRouter
])

.component('pmAddTeam', PmAddTeamComponent)

.name;

export default PmAddTeamModule;
