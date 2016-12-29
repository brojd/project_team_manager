import angular from 'angular';
import uiRouter from 'angular-ui-router';
import PmTeamsComponent from './pm-teams.component';
import PmAddTeam from './pm-add-team/pm-add-team';

let PmTeamsModule = angular.module('pmTeams', [
  uiRouter, PmAddTeam
])

.component('pmTeams', PmTeamsComponent)
  
.name;

export default PmTeamsModule;
