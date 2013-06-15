

      function ActivityController($scope) {
        $scope.items = [];
        $scope.paused = true;   // in pausa

        var updateDuration = function (i) {
              var dur = $scope.items[i].tend - $scope.items[i].tbegin;
              $scope.items[i].duration = dur > 0 ? dur/60000 : 0;
        };

        $scope.start = function () {
          var d1 = new Date;


          if ($scope.paused) {
            // se era in pausa passa nello stato attivo
            $scope.paused = false;
          } else {
          // se non era in pausa termina l'attività precedente
          // e fai partire dallo stesso istante l'attività nuova
              var i = $scope.items.length-1;
              $scope.items[i].tend = d1;
              updateDuration(i);
          }
          $scope.items.push ({ desc: 'describe activity', tbegin: d1, tend: 0, duration: 0});
        }

        $scope.remove = function (index) {
          $scope.items.splice(index, 1);
        }

        $scope.duplicate = function (index) {
          var i = $scope.items.length-1;
          $scope.items[i].desc = $scope.items[index].desc;
        }

        $scope.pause = function () {
          if ($scope.paused == false )  {
              var i = $scope.items.length-1;
              $scope.paused = true;
              $scope.items[i].tend = new Date
              updateDuration(i);
          }
        }
      }

      function TodoController($scope) {
        $scope.items = [

          {title: 'fattura pasini', duration: 0, price: 40.0},
          {title: 'pulsar pls', duration: 0, price: 40.0},
          {title: 'modifica gma', duration: 0, price: 40.0},
          {title: 'fattura conscoop', duration: 0, price: 40.0}
        ]; 


        $scope.insert = function () {
          $scope.items.push ({title: '', duration: 0, price: 40.0});
        }

        $scope.remove = function (index) {
          $scope.items.splice(index, 1);
        }
      }
