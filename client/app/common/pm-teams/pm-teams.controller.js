class PmTeamsController {
  constructor(TeamsService, $rootScope) {
    "ngInject";
    this.TeamsService = TeamsService;
    this.teams = [];
    this.currentTeam = {};
    this.$rootScope = $rootScope;
  }
  getAllTeams() {
    this.teams = this.TeamsService.getAllTeams();
  }
  setCurrentTeam(team) {
    this.currentTeam = team;
    this.TeamsService.setCurrentTeam(team);
    this.onTeamChange({team: team});
  }
  isMale(member) {
    return !member.name.split(' ')[0].endsWith('a');
  }
  deleteMember(currentTeam, memberId) {
    this.TeamsService.deleteMember(currentTeam, memberId);
  }
  $onInit() {
    this.$rootScope.$on('teamRefreshed', () => {
      this.teams = this.TeamsService.getAllTeams();
    });
  }
}

export default PmTeamsController;
