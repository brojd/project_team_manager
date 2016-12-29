import angular from 'angular';
import TeamsService from './teams-service';
import EmployeesService from './employees-service';

export default angular
  .module('app.services', [])
  .service({
    TeamsService,
    EmployeesService
  })
  .name;
