$(function() {

  console.log( "ready!" );
//Shows form to create user racer
  $('button#create').on('click', function() {
    $('form#userStats').removeClass('hidden');
  })


var user;
  $('form').on('submit', function(event) {
    var $userName = $('#userName').val();
    console.log("User name " + $userName)
    var $userSpeed = parseInt($('#userSpeed').val());
    console.log($('#userSpeed').val())
    var $userFocus = parseInt($('#userFocus').val());
    console.log($('#userFocus').val());

  $('#userID').html($userName);

    event.preventDefault();
    user = new Animal($userName, $userSpeed, $userFocus);
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
  }


//animation to show racers moving on track
if (rabbit.advance) {
  $('#rabbit').css('left', this.position);
  }

if (turtle.advance) {
  $('#turtle').css('left', this.position);
  }

if (user.advance) {
  $('#userID').css('left', this.position);
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
var rabbit = new Animal("Rocky", 7, 3);
var turtle = new Animal("Mrytle", 3, 7);
var meters = 100;



//button to advance racers on click
$('button#race').on('click', function () {
  if (rabbit.position < meters && turtle.position < meters && user.position < meters) {
    rabbit.advance();
    turtle.advance();
    user.advance();
    console.log("turtle position | " + turtle.position)
    console.log("rabbit position | " + rabbit.position)
    console.log("user position | " + user.position)
  }else {

    var winner;
    if (rabbit.position >= meters) {
      winner = "Rocky Wins!!!!";
    }
    else if (turtle.position >= meters) {
      winner = "Mrytle Wins!!!";
    }
    else {
      winner = $('#userName').val() + " Wins!!!";
    }
  $('h3#winner').html(winner)
  }

  })
})



