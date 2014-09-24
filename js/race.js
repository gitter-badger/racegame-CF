$(function() {

//Shows form to create user racer
  $('button#create').on('click', function() {
    $('form#userStats').removeClass('hidden');
  })

  $('fieldset').on('click', function() {
    var $userName = $('#userName').val();
    var $userSpeed = $('#userSpeed').val();
    var $userFocus = $('#userFocus').val();

  })

//begins race on button click
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

      $(this.name).css('left', this.position);
    }

    //variable focus depending on position
if (rabbit.position > turtle.position && user.position) {
  rabbit.focus += 1
} else if (turtle.position > rabbit.position && user.position) {
  turtle.focus += 1
} else if (user.position > rabbit.position && turtle.position) {
  user.focus += 1
}

  }
}

//racer variables
var user = new Animal($('#userName').val(), $('#userSpeed').val(), $('#userFocus').val());
var rabbit = new Animal("Rocky", 7, 3);
var turtle = new Animal("Mrytle", 5, 7);
var meters = 100;



//button to advance racers on click
$('button#race').on('click', function () {
  if (rabbit.position < meters && turtle.position < meters && user.position < meters) {
    rabbit.advance();
    turtle.advance();
    user.advance();
  }else {

    var winner;
    if (rabbit.position >= meters) {
      winner = "Rocky Wins!!!!";
    }
    else if (turtle.position >= meters) {
      winner = "Mrytle Wins!!!";
    }
    else {
      winner = "User Wins!!!";
    }
  $('h3#winner').html(winner)
  }

  })
})




