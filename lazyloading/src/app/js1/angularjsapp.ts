import 'angular';
import 'angular-ui-router';

declare const angular: any;

export const module = angular.module('AngularJSApp', ['ui.router']);

module.config(($locationProvider, $stateProvider) => {
  $locationProvider.html5Mode(true);

  $stateProvider.state('angularjs_a', {
    url: '/lazy1/angularjs_a',
    template: `
      <div style="background-color: yellow">
        <div>AngularJS A!</div>
        <div><a href="/angular_a">Go to Angular A</a></div>
        <div><a href="/angular_b">Go to Angular B</a></div>
        <div>Go to Angular JS A</div>
        <div><a href="/lazy1/angularjs_b">Go to Angular JS B</a></div>
        <div><a href="/lazy2/angularjs_c">Go to Angular JS C</a></div>
        <div><a href="/lazy2/angularjs_d">Go to Angular JS D</a></div>
      </div>
    `
  });

  $stateProvider.state('angularjs_b', {
    url: '/lazy1/angularjs_b',
    template: `
      <div style="background-color: yellow">
        <div>AngularJS B!</div>
        <div><a href="/angular_a">Go to Angular A</a></div>
        <div><a href="/angular_b">Go to Angular B</a></div>
        <div><a href="/lazy1/angularjs_a">Go to Angular JS A</a></div>
        <div>Go to Angular JS B</div>
        <div><a href="/lazy2/angularjs_c">Go to Angular JS C</a></div>
        <div><a href="/lazy2/angularjs_d">Go to Angular JS D</a></div>
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
