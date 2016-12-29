import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import ngAnimate from 'angular-animate';
import dirPagination from 'angular-utils-pagination';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    Services,
    ngAnimate,
    dirPagination
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
