app.controller('ProjectsCtrl', function($scope, $timeout, $mdSidenav, $log) {

  var allProjects = {
    'md-site': {
      "name": "Alfred Material",
      "screenshot": '',
      "description": '',
      "repository": '',
      "tech": []
    },
    'ef': {
      "name": "Turbotax Exemption Check",
      "screenshot": '',
      "description": '',
      "repository": '',
      "tech": []
    },
    'mean': {
      "name": "MEAN Skeleton",
      "screenshot": '',
      "description": '',
      "repository": '',
      "tech": []
    },
    'old-site': {
      "name": "Old Website",
      "screenshot": '',
      "description": '',
      "repository": '',
      "tech": []
    },
    'moderator': {
      "name": "Cengage Moderator",
      "screenshot": '',
      "description": '',
      "repository": '',
      "tech": []
    },
    'css-logos': {
      "name": "CSS Logos",
      "screenshot": '',
      "description": '',
      "repository": '',
      "tech": []
    }
  };


  $scope.makeActivePreview = function(newActiveName) {

  };

  $scope.activePreview = allProjects['md-site'];
});