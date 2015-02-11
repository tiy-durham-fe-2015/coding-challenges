// Solution to:
// http://mcicpc.cs.atu.edu/archives/2014/mcpc2014/browse.html
//

$(function () {
  $('.eval').click(function () {
    var ta = $('.room');
    var input = ta.val().trim().split(/[\r\n]+/g);
    var room = Room(input);

    var walker = Walker({
      room: room
    });

    while (walker.move()) {
      console.log(walker.tile());
    }

    walker.placeDoor();

    ta.val(room.toString());
  });
});


////////////////////////////

function Room(grid) {
  var room = grid.map(function (line) {
    return line.split('');
  });

  function findEntrance(room, wall1, wall2, coord, length) {
    for (var i = 0; i < length; ++i) {
      wall1[coord] = i;
      wall2[coord] = i;

      if (room.tile(wall1) === '*') {
        return wall1;
      } else if (room.tile(wall2) === '*') {
        return wall2;
      }
    }
  }

  function findVerticalEntrance(room) {
    return findEntrance(
      room,
      Coord(0, 0),
      Coord(room.width - 1, 0),
      'y',
      room.height);
  }

  function findHorizontalEntrance(room) {
    return findEntrance(
      room,
      Coord(0, 0),
      Coord(0, room.height - 1),
      'x',
      room.width);
  }

  function entranceCoord(room) {
    return findVerticalEntrance(room) ||
      findHorizontalEntrance(room);
  }

  var self = {
    width: room[0].length,

    height: room.length,

    entrance: function () {
      return entranceCoord(self);
    },

    tile: function (coord) {
      return room[coord.y][coord.x];
    },

    setTile: function (coord, val) {
      room[coord.y][coord.x] = val;
    },

    toString: function () {
      return room.map(function (line) {
        return line.join('');
      }).join('\n');
    }
  };

  return self;
}

function Walker(spec) {
  var room = spec.room,
      position = room.entrance(),
      direction = startingDirection(position);

  function startingDirection() {
    return position.x === 0 ? Coord(1, 0) :
      position.x === room.width - 1 ? Coord(-1, 0) :
      position.y === 0 ? Coord(0, 1) :
      Coord(0, -1);
  }

  var self = {
    move: function () {
      position = Coord(
        position.x + direction.x,
        position.y + direction.y);

      var tile = self.tile();

      if (tile === '/' || tile === '\\') {
        self.turn(tile);
      }

      return tile !== 'x';
    },

    tile: function () {
      return room.tile(position);
    },

    turn: function (tile) {
      if (tile === '/') {
        return direction.y ? self.turnRight() : self.turnLeft();
      } else {
        return direction.y ? self.turnLeft() : self.turnRight();
      }
    },

    turnRight: function () {
      if (direction.x) {
        direction.y = direction.x;
        direction.x = 0;
      } else {
        direction.x = -direction.y;
        direction.y = 0;
      }
    },

    turnLeft: function () {
      if (direction.x) {
        direction.y = -direction.x;
        direction.x = 0;
      } else {
        direction.x = direction.y;
        direction.y = 0;
      }
    },

    placeDoor: function () {
      room.setTile(position, '&');
    }
  };

  return self;
}

function Coord(x, y) {
  return {
    x: x,
    y: y
  };
}
