class PmAddTeamController {
  constructor(TeamsService) {
    "ngInject";
    this.teamsService = TeamsService;
    this.nameInput = '';
  }
  addTeam(name) {
    this.teamsService.add(name);
    this.nameInput = '';
  }
}

export default PmAddTeamController;
