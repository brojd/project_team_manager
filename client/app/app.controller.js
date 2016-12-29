class PmAppController {
  constructor($scope) {
    "ngInject";
    this.$scope = $scope;
  }
  handleTeamChange(team) {
    this.$scope.$broadcast('teamChanged', { team: team });
  }
  handleAppClick(e) {
    this.$scope.$broadcast('appClicked', {event: e});
  }
}

export default PmAppController;
