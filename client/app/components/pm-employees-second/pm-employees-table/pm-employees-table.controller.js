class PmEmployeesTableController {
  constructor(EmployeesService, TeamsService) {
    "ngInject";
    this.name = 'PmEmployeesTable';
    this.EmployeesService = EmployeesService;
    this.TeamsService = TeamsService;
    this.employees = [];
    this.propToSortBy = 'name';
    this.reverse = false;
  }
  fetchAllEmployees() {
    this.EmployeesService.fetchAllEmployees()
      .then(res => this.employees = res, err => console.log(err));
  }
  setCurrentEmployee(employee) {
    employee.isCurrent = !employee.isCurrent;
  }
  sortBy(propertyName) {
    this.propToSortBy = propertyName;
    this.reverse = this.propToSortBy === propertyName ? !this.reverse : false;
  }
  addEmployeeToTeam(employee) {
    const currentTeam = this.TeamsService.getCurrentTeam();
    this.TeamsService.addMemberToTeam(employee, currentTeam);
  }
}

export default PmEmployeesTableController;
