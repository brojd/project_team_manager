import uniqid from 'uniqid';

export default class TeamsService {
  constructor() {
    this.teams = [];
    this.currentTeam = {};
  }
  add(name) {
    const team = new Team(name);
    this.teams.push(team);
  }
  getAllTeams() {
    return this.teams;
  }
  setCurrentTeam(team) {
    this.currentTeam = team;
  }
  getCurrentTeam() {
    return this.currentTeam;
  }
  addMemberToTeam(member, team) {
    if (!team.id) {
      alert('You should choose the team first');
      return false;
    } else if (team.members.includes(member)) {
      alert('Member has been already added to the team');
      return false;
    }
    team.members.push(member);
    this.teams.map(n => {
      if (n.id === team.id) {
        return team;
      }
    });
  }
  deleteMember(team, memberId) {
    this.teams.map(n => {
      if (n.id === team.id) {
        team.members = team.members.filter(m => m.id !== memberId);
        this.currentTeam = team;
        return team;
      }
    });
  }
  updateTeam(newTeam) {
    let newTeams = this.teams.slice();
    const index = newTeams.findIndex(n => n.id === newTeam.id);
    newTeams.splice(index, 1, newTeam);
    this.currentTeam = newTeam;
    this.teams = newTeams;
  }
}

class Team {
  constructor(name) {
    this.id = uniqid();
    this.name = name;
    this.members = [];
  }
}
