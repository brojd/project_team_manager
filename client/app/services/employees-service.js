import { API_URL } from '../../config';

export default class TeamsService {
  constructor($http) {
    "ngInject";
    this.$http = $http;
  }
  fetchAllEmployees() {
    return this.$http.get(`${API_URL}`)
      .then(res => {
        if (res.data.length > 0) {
          return res.data;
        } else {
          return Promise.reject(res.data)
        }
      }, err => Promise.reject(err));
  }
}
