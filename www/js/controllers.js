angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
    var dashMap = new ol.Map({
      interactions: ol.interaction.defaults().extend([
        new ol.interaction.DragRotateAndZoom()
      ]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM({})
        })
      ],
      // Use the canvas renderer because it's currently the fastest
      target: 'dashMap',
      view: new ol.View({
        center: [-33519607, 5616436],
        zoom: 8
      })
    });
  })

  .controller('ChatsCtrl', function ($scope, $ionicModal, Chats) {
    var chatMap = new ol.Map({
      interactions: ol.interaction.defaults().extend([
        new ol.interaction.DragRotateAndZoom()
      ]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM({})
        })
      ],
      // Use the canvas renderer because it's currently the fastest
      target: 'chatMap',
      view: new ol.View({
        center: [-33519607, 5616436],
        zoom: 8
      })
    });

    $scope.OpenModal = function () {
      // Open a modal
      $ionicModal.fromTemplateUrl("scenicNameSearchOption.html", {
        scope: $scope
      }).then(function (modal) {
        $scope.scenicNameOptionModal = modal;
        $scope.scenicNameOptionModal.show();
      });
    };

    // Hide the modal
    $scope.HideScenicNameOptionModal = function () {
      $scope.scenicNameOptionModal.hide();
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
