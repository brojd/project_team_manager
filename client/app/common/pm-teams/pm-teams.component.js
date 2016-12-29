import template from './pm-teams.html';
import controller from './pm-teams.controller';
import './pm-teams.scss';

let PmTeamsComponent = {
  restrict: 'E',
  bindings: {
    onTeamChange: '&'
  },
  template,
  controller
};

export default PmTeamsComponent;
