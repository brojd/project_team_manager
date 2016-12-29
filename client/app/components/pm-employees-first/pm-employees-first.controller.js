class PmEmployeesFirstComponent {
  constructor(TeamsService, EmployeesService, $scope, $rootScope) {
    "ngInject";
    this.TeamsService = TeamsService;
    this.EmployeesService = EmployeesService;
    this.members = [];
    this.allEmployees = [];
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.clickOutsideDropdown = false;
  }
  isMale(member) {
    return !member.name.split(' ')[0].endsWith('a');
  }
  deleteMember(memberId) {
    this.members = this.members.filter(n => n.id !== memberId);
  }
  addMember(member) {
    if (!this.TeamsService.getCurrentTeam().id) {
      alert('Choose the team first');
      return false;
    } else if (this.members.findIndex(n => n.id === member.id) !== -1) {
      alert('Employee has been already added');
      return false;
    }
    this.members.push(member);
  }
  setClickOutsideDropdown(event) {
    if (event.target.className.includes('PmDropdown_item') || event.target.className.includes('PmTypeahead_input')) {
      this.clickOutsideDropdown = false;
    } else {
      this.clickOutsideDropdown = true;
    }
  }
  syncData() {
    let currentTeam = this.TeamsService.getCurrentTeam();
    if (!currentTeam.id) {
      alert('Choose the team first');
      return false;
    }
    let newTeam = Object.assign({ ...currentTeam, members: this.members });
    this.TeamsService.updateTeam(newTeam);
    this.$rootScope.$emit('teamRefreshed', {team: newTeam});
  }
  $onInit() {
    this.EmployeesService.fetchAllEmployees()
      .then(res => this.allEmployees = res, err => console.log(err));
    this.members = this.TeamsService.getCurrentTeam().members ? this.TeamsService.getCurrentTeam().members.slice() : [];
    this.$scope.$on('teamChanged', (event, data) => {
      this.members = data.team.members.slice();
    });
    this.$scope.$on('appClicked', (event, data) => this.setClickOutsideDropdown(data.event));
  }
}

export default PmEmployeesFirstComponent;
