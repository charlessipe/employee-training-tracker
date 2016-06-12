
$( document ).ready(function() {

//var myData = 2;

var myFirebaseRef = new Firebase("https://training-tracker.firebaseio.com/");

var myFirebaseRef2 = new Firebase("https://training-tracker.firebaseio.com/user1");

/*myFirebaseRef2.set({
  user1: {
    facebookId: 100,
    name: "Chuck Sipe",
    articles : {
      article1: true,
      article2: false,
      article3: true,
      completed: 2,
      total: 3
    },
    videos: {
      video1: true,
      video2: false,
      completed: 1,
      total: 2
    }
  }
});
*/

/*
myFirebaseRef.set({
  javascript: {
    thiskeyword: {
      thiskeyword1: {
        title: "Eloquent JavaScript by Marijn Haverbeke",
        completed: false
      },
      thiskeyword2: {
        title: "JavaScript & jQuery by Jon Duckett",
        completed: false
      },
      thiskeyword3: {
        title: "JavaScript The Good Parts by Douglas Crockford",
        completed: false
      },
      completed: 0
    },
    prototype: {
      prototype1: {
        title: "A Plain English Guide to JavaScript Prototypes",
        completed: false
      },
      prototype2: {
        title: "JavaScript Prototype in Plain Language",
        completed: false
      },
      completed: 0
    },
    closures: {
      closures1: {
        title: "How This Works in JavaScript",
        completed: false
      },
      closures2: {
        title: "Keeping Track of 'This' in JavaScript",
        completed: false
      },
      completed: 0
    },
    functions: {
      functions1: {
        title: "Learn Angular by Building a Gmail Clone",
        completed: false
      },
      functions2: {
        title: "Create a MEAN Stack Google Map App (Part I)",
        completed: false
      },
      completed: 0
    },
    scope: {
      scope1: {
        title: "Lynda: JavaScript Essential Training",
        completed: false
      },
      scope2: {
        title: "Lynda: JavaScript and AJAX",
        completed: false
      },
      completed: 0
    }
  },
  user1: {
    facebookId: 100,
    name: "Charles Sipe",
    articles : {
      article1: true,
      article2: false,
      article3: true,
      completed: 2,
      total: 3
    },
    videos: {
      video1: true,
      video2: false,
      completed: 1,
      total: 2
    }
  }
}, displayLogic);
*/



// Cache user's name from Firebase

myFirebaseRef.child("/user1/name").on("value", function(snapshot) {
  //alert(snapshot.val());  // Alerts "Charles Sipe"
  userName = snapshot.val();
});

// Cache the Firebase data

myFirebaseRef.on("value", function(data) {
  console.log(data.val());  //
  myData = data.val();
  //displayLogic();
});



// Calculate total percentage of items checked/completed

var completePercent = 0;

function calcTotalPercent() {
  //var completedPrototype = myData.javascript.prototype.completed;
  var completedTotal = completedPrototype + completedThisKeyword + completedClosures + completedFunctions + completedScope;
  var totalItems = totalPrototype + totalThisKeyword + totalFunctions + totalClosures + totalScope;
  console.log(completedTotal);
  console.log(totalItems);
  completePercent = completedTotal/totalItems*100;
  completePercent = completePercent.toFixed(1);
};

// event listener for when an item is checked

// prototype

//var completedPrototype = 0;
var totalPrototype = 2;

// get completedPrototype from Firebase object
function getCompletedPrototype(){
  completedPrototype = myData.javascript.prototype.completed;
  console.log("completedPrototype is " + completedPrototype);
  $( ".prototype-progress" ).css('width', (completedPrototype/totalPrototype*100)+"%");
  calcTotalPercent();
  $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
} 

setTimeout(function(){ getCompletedPrototype(); }, 4000);


$( ".prototype li:nth-child(1) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/prototype/prototype1").update({ 'completed': true });
      completedPrototype ++;
      myFirebaseRef.child("/javascript/prototype/").update({ 'completed': completedPrototype });
      $( ".prototype-progress" ).css('width', (completedPrototype/totalPrototype*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/prototype/prototype1").update({ 'completed': false });
      completedPrototype --;
      myFirebaseRef.child("/javascript/prototype/").update({ 'completed': completedPrototype });
      $( ".prototype-progress" ).css('width', (completedPrototype/totalPrototype*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});



$( ".prototype li:nth-child(2) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/prototype/prototype2").update({ 'completed': true });
      completedPrototype ++;
      myFirebaseRef.child("/javascript/prototype/").update({ 'completed': completedPrototype });
      $( ".prototype-progress" ).css('width', (completedPrototype/totalPrototype*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/prototype/prototype2").update({ 'completed': false });
      completedPrototype --;
      myFirebaseRef.child("/javascript/prototype/").update({ 'completed': completedPrototype });
      $( ".prototype-progress" ).css('width', (completedPrototype/totalPrototype*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

// this keyword

//var completedThisKeyword = 0;
var totalThisKeyword = 3;

// get completedThisKeyword from Firebase object
function getCompletedThisKeyword(){
  completedThisKeyword = myData.javascript.thiskeyword.completed;
  console.log("completedThisKeyword is " + completedThisKeyword);
  $( ".thiskeyword-progress" ).css('width', (completedThisKeyword/totalThisKeyword*100)+"%");
  calcTotalPercent();
  $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
} 

setTimeout(function(){ getCompletedThisKeyword(); }, 4100);

$( ".thiskeyword li:nth-child(1) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/thiskeyword/thiskeyword1").update({ 'completed': true });
      completedThisKeyword ++;
      myFirebaseRef.child("/javascript/thiskeyword/").update({ 'completed': completedThisKeyword });
      $( ".thiskeyword-progress" ).css('width', (completedThisKeyword/totalThisKeyword*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/thiskeyword/thiskeyword1").update({ 'completed': false });
      completedThisKeyword --;
      myFirebaseRef.child("/javascript/thiskeyword/").update({ 'completed': completedThisKeyword });
      $( ".thiskeyword-progress" ).css('width', (completedThisKeyword/totalThisKeyword*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

$( ".thiskeyword li:nth-child(2) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/thiskeyword/thiskeyword2").update({ 'completed': true });
      completedThisKeyword ++;
      myFirebaseRef.child("/javascript/thiskeyword/").update({ 'completed': completedThisKeyword });
      $( ".thiskeyword-progress" ).css('width', (completedThisKeyword/totalThisKeyword*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/thiskeyword/thiskeyword2").update({ 'completed': false });
      completedThisKeyword --;
      myFirebaseRef.child("/javascript/thiskeyword/").update({ 'completed': completedThisKeyword });
      $( ".thiskeyword-progress" ).css('width', (completedThisKeyword/totalThisKeyword*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

$( ".thiskeyword li:nth-child(3) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/thiskeyword/thiskeyword3").update({ 'completed': true });
      completedThisKeyword ++;
      myFirebaseRef.child("/javascript/thiskeyword/").update({ 'completed': completedThisKeyword });
      $( ".thiskeyword-progress" ).css('width', (completedThisKeyword/totalThisKeyword*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/thiskeyword/thiskeyword3").update({ 'completed': false });
      completedThisKeyword --;
      myFirebaseRef.child("/javascript/thiskeyword/").update({ 'completed': completedThisKeyword });
      $( ".thiskeyword-progress" ).css('width', (completedThisKeyword/totalThisKeyword*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});


// Functions

//var completedFunctions = 0;
var totalFunctions = 2;

// get completedFunctions from Firebase object
function getCompletedFunctions(){
  completedFunctions = myData.javascript.functions.completed;
  console.log("completedFunctions is " + completedFunctions);
  $( ".functions-progress" ).css('width', (completedFunctions/totalFunctions*100)+"%");
  calcTotalPercent();
  $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
} 

setTimeout(function(){ getCompletedFunctions(); }, 4000);


$( ".functions li:nth-child(1) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/functions/functions1").update({ 'completed': true });
      completedFunctions ++;
      myFirebaseRef.child("/javascript/functions/").update({ 'completed': completedFunctions });
      console.log(myData.javascript.functions.completed);
      console.log(completedFunctions/totalFunctions*100);
      $( ".functions-progress" ).css('width', (completedFunctions/totalFunctions*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/functions/functions1").update({ 'completed': false });
      completedFunctions --;
      myFirebaseRef.child("/javascript/functions/").update({ 'completed': completedFunctions });
      console.log(myData.javascript.functions.completed);
      console.log(completedFunctions/totalFunctions*100);
      $( ".functions-progress" ).css('width', (completedFunctions/totalFunctions*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

$( ".functions li:nth-child(2) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/functions/functions2").update({ 'completed': true });
      completedFunctions ++;
      myFirebaseRef.child("/javascript/functions/").update({ 'completed': completedFunctions });
      console.log(myData.javascript.functions.completed);
      console.log(completedFunctions/totalFunctions*100);
      $( ".functions-progress" ).css('width', (completedFunctions/totalFunctions*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/functions/functions2").update({ 'completed': false });
      completedFunctions --;
      myFirebaseRef.child("/javascript/functions/").update({ 'completed': completedFunctions });
      console.log(myData.javascript.functions.completed);
      console.log(completedFunctions/totalFunctions*100);
      $( ".functions-progress" ).css('width', (completedFunctions/totalFunctions*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

// closures 



var totalClosures = 2;

function getCompletedClosures(){
  completedClosures = myData.javascript.closures.completed;
  console.log("completedClosures is " + completedClosures);
  $( ".closures-progress" ).css('width', (completedClosures/totalClosures*100)+"%");
  calcTotalPercent();
  $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
} 

setTimeout(function(){ getCompletedClosures(); }, 4200);

$( ".closures li:nth-child(1) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/closures/closures1").update({ 'completed': true });
      completedClosures ++;
      myFirebaseRef.child("/javascript/closures/").update({ 'completed': completedClosures });
      $( ".closures-progress" ).css('width', (completedClosures/totalClosures*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/closures/closures1").update({ 'completed': false });
      completedClosures --;
      myFirebaseRef.child("/javascript/closures/").update({ 'completed': completedClosures });
      $( ".closures-progress" ).css('width', (completedClosures/totalClosures*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

$( ".closures li:nth-child(2) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/closures/closures2").update({ 'completed': true });
      completedClosures ++;
      myFirebaseRef.child("/javascript/closures/").update({ 'completed': completedClosures });
      $( ".closures-progress" ).css('width', (completedClosures/totalClosures*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/closures/closures2").update({ 'completed': false });
      completedClosures --;
      myFirebaseRef.child("/javascript/closures/").update({ 'completed': completedClosures });
      $( ".closures-progress" ).css('width', (completedClosures/totalClosures*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

// scope


var totalScope = 2;

function getCompletedScope(){
  completedScope = myData.javascript.scope.completed;
  console.log("completedScope is " + completedScope);
  $( ".scope-progress" ).css('width', (completedScope/totalScope*100)+"%");
  calcTotalPercent();
  $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
} 

setTimeout(function(){ getCompletedScope(); }, 4100);

$( ".scope li:nth-child(1) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/scope/scope1").update({ 'completed': true });
      completedScope ++;
      myFirebaseRef.child("/javascript/scope/").update({ 'completed': completedScope });
      $( ".scope-progress" ).css('width', (completedScope/totalScope*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/scope/scope1").update({ 'completed': false });
      completedScope --;
      myFirebaseRef.child("/javascript/scope/").update({ 'completed': completedScope });
      $( ".scope-progress" ).css('width', (completedScope/totalScope*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

$( ".scope li:nth-child(2) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/scope/scope2").update({ 'completed': true });
      completedScope ++;
      myFirebaseRef.child("/javascript/scope/").update({ 'completed': completedScope });
      $( ".scope-progress" ).css('width', (completedScope/totalScope*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/scope/scope2").update({ 'completed': false });
      completedScope --;
      myFirebaseRef.child("/javascript/scope/").update({ 'completed': completedScope });
      $( ".scope-progress" ).css('width', (completedScope/totalScope*100)+"%");
      calcTotalPercent();
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});



  //console.log(myData.javascript.articles.article1.title);

  function displayLogic(){

  $( ".user-name" ).append(userName);
  
  //$( ".articles li:nth-child(1) label").children().text("");
  $( ".prototype li:nth-child(1)" ).append(myData.javascript.prototype.prototype1.title);

  $( ".prototype li:nth-child(2)" ).append(myData.javascript.prototype.prototype2.title);

  if( myData.javascript.prototype.prototype1.completed == true ){ // Display check marks if item is completed
    $(".prototype li:nth-child(1) input").attr('checked', 'checked');
  }

  if( myData.javascript.prototype.prototype2.completed == true ){
    $(".prototype li:nth-child(2) input").attr('checked', 'checked');
  }  

  $( ".functions li:nth-child(1)" ).append(myData.javascript.functions.functions1.title);

  $( ".functions li:nth-child(2)" ).append(myData.javascript.functions.functions2.title);
  
  if( myData.javascript.functions.functions1.completed == true ){
    $(".functions li:nth-child(1) input").attr('checked', 'checked');
  }

  if( myData.javascript.functions.functions2.completed == true ){
    $(".functions li:nth-child(2) input").attr('checked', 'checked');
  }

  $( ".closures li:nth-child(1)" ).append(myData.javascript.closures.closures1.title);

  $( ".closures li:nth-child(2)" ).append(myData.javascript.closures.closures2.title);

  if( myData.javascript.closures.closures1.completed == true ){
    $(".closures li:nth-child(1) input").attr('checked', 'checked');
  }

  if( myData.javascript.closures.closures2.completed == true ){
    $(".closures li:nth-child(2) input").attr('checked', 'checked');
  }

  $( ".thiskeyword li:nth-child(1)" ).append(myData.javascript.thiskeyword.thiskeyword1.title);
  
  $( ".thiskeyword li:nth-child(2)" ).append(myData.javascript.thiskeyword.thiskeyword2.title);

  $( ".thiskeyword li:nth-child(3)" ).append(myData.javascript.thiskeyword.thiskeyword3.title);

  if( myData.javascript.thiskeyword.thiskeyword1.completed == true ){
    $(".thiskeyword li:nth-child(1) input").attr('checked', 'checked');
  }

  if( myData.javascript.thiskeyword.thiskeyword2.completed == true ){
    $(".thiskeyword li:nth-child(2) input").attr('checked', 'checked');
  }

  if( myData.javascript.thiskeyword.thiskeyword3.completed == true ){
    $(".thiskeyword li:nth-child(3) input").attr('checked', 'checked');
  }

  $( ".scope li:nth-child(1)" ).append(myData.javascript.scope.scope1.title);

  $( ".scope li:nth-child(2)" ).append(myData.javascript.scope.scope2.title);

  if( myData.javascript.scope.scope1.completed == true ){
    $(".scope li:nth-child(1) input").attr('checked', 'checked');
  }

  if( myData.javascript.scope.scope2.completed == true ){
    $(".scope li:nth-child(2) input").attr('checked', 'checked');
  }

  };

  setTimeout(function(){ displayLogic(); }, 3000);

});


