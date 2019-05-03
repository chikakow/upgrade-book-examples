import 'angular';
import 'angular-ui-router';

declare const angular: any;

export const module = angular.module('AngularJS2App', ['ui.router']);

module.config(($locationProvider, $stateProvider) => {
  $locationProvider.html5Mode(true);

  $stateProvider.state('angularjs_c', {
    url: '/lazy2/angularjs_c',
    template: `
      <div style="background-color: yellow">
        <div>AngularJS C!</div>
        <div><a href="/angular_a">Go to Angular A</a></div>
        <div><a href="/angular_b">Go to Angular B</a></div>
        <div><a href="/lazy1/angularjs_a">Go to Angular JS A</a></div>
        <div><a href="/lazy1/angularjs_b">Go to Angular JS B</a></div>
        <div>Go to AngularJS C</div>
        <div><a href="/lazy2/angularjs_d">Go to Angular JS D</a></div>
      </div>
    `
  });

  $stateProvider.state('angularjs_d', {
    url: '/lazy2/angularjs_d',
    template: `
      <div style="background-color: yellow">
        <div>AngularJS D!</div>
        <div><a href="/angular_a">Go to Angular A</a></div>
        <div><a href="/angular_b">Go to Angular B</a></div>
        <div><a href="/lazy1/angularjs_a">Go to Angular JS A</a></div>
        <div><a href="/lazy1/angularjs_b">Go to Angular JS B</a></div>
        <div><a href="/lazy2/angularjs_c">Go to Angular JS C</a></div>
        <div>Go to AngularJS D</div>
      </div>
    `
  });

  $stateProvider.state('sink', {
    url: '/*path',
    template: ''
  });
});

module.run(($rootScope) => {
  console.log('Running AngularJS application');

  $rootScope.$on('$stateChangeStart', (e, toState, toParams) => {
    console.log('$stateChangeStart', toState, toParams);
  });
});
