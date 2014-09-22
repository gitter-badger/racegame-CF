$(function() {

var $userName, $userSpeed, $userFocus;

//Shows form to create user racer
  $('button#create').on('click', function() {
    $('form#userStats').removeClass('hidden');
  });

  $('input').on('click', function() {
    var $userName = $('label#userName').text();
    var $userSpeed = $('label#userSpeed').text();
    var $userFocus = $('label#userFocus').text();
  });


$('button#race').on('click', function () {
function Animal (name, speed, focus) {
  this.name = name;
  this.speed = speed;
  this.focus = focus;
  this.position = 0;
  this.isFocused = function () {
    return Math.Floor(Math.random() * 10) < this.focus;
  }

  this.advance = function () {
    if (this.isFocused) {
      this.position += this.speed;
    }
  }
}

//user racer
var user = new Animal($userName, $userSpeed, $userFocus)

var rabbit = new Animal("Rocky", 7, 3);
var turtle = new Animal("Mrytle", 3, 7);
var meters = 100;


//variable focus depending on position
if (rabbit.position > turtle.position && user.position) {
  rabbit.focus += 1
} else if (turtle.position > rabbit.position && user.position) {
  turtle.focus += 1
} else if (user.position > rabbit.position && turtle.position) {
  user.focus += 1
};

while (turtle.position < meters && rabbit.position < meters && user.position < meters) {
  rabbit.advance();
  turtle.advance();
  user.advance();
    if (rabbit.advance()) {
      $('div#rabbit').animate({left:5});
    }
    else if (turtle.advance()) {
      $('div#turtle').animate({left:5});
    }
    else {
      $('div#user').animate({left:5});
    }
}

//winner alert
if (turtle.position >= meters) {
  $('div#rabbit', 'div#user').hide();
} else if (rabbit.position >= meters){
  $('div#turtle', 'div#user').hide();
} else {
  $('div#turtle', 'div#rabbit').hide();
}

});

});




