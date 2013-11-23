
(function(shatter) {
  shatter.use('saveSettingsCtrl', 'controllerImpl', function($scope) {
    $scope.saveDisqus = function(settings, invalid) {
      return $scope.save('disqusForumShortname', settings, invalid);
    };
  });
})(window.shatter);