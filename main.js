
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
    videos: {
      video1: {
        title: "How This Works in JavaScript",
        completed: false
      },
      video2: {
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
    courses: {
      course1: {
        title: "Lynda: JavaScript Essential Training",
        completed: false
      },
      course2: {
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
  var completedTotal = completedPrototype + completedThisKeyword + completedVids + completedFunctions + completedCourses;
  var totalItems = totalPrototype + totalThisKeyword + totalFunctions + totalVids + totalCourses;
  console.log(completedTotal);
  console.log(totalItems);
  completePercent = completedTotal/totalItems*100;
  completePercent = completePercent.toFixed(1);
};

// event listener for when an item is checked

// prototype

var completedPrototype = 0;
var totalPrototype = 2;

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

var completedThisKeyword = 0;
var totalThisKeyword = 3;

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

var completedFunctions = 0;
var totalFunctions = 2;

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

// videos 


var completedVids = 0;
var totalVids = 2;

$( ".videos li:nth-child(1) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/videos/video1").update({ 'completed': true });
      completedVids ++;
      myFirebaseRef.child("/javascript/videos/").update({ 'completed': completedVids });
      console.log(myData.javascript.videos.completed);
      console.log(completedVids/totalVids*100);
      $( ".videos-progress" ).css('width', (completedVids/totalVids*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/videos/video1").update({ 'completed': false });
      completedVids --;
      myFirebaseRef.child("/javascript/videos/").update({ 'completed': completedVids });
      console.log(myData.javascript.videos.completed);
      console.log(completedVids/totalVids*100);
      $( ".videos-progress" ).css('width', (completedVids/totalVids*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

$( ".videos li:nth-child(2) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/videos/video2").update({ 'completed': true });
      completedVids ++;
      myFirebaseRef.child("/javascript/videos/").update({ 'completed': completedVids });
      console.log(myData.javascript.videos.completed);
      console.log(completedVids/totalVids*100);
      $( ".videos-progress" ).css('width', (completedVids/totalVids*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/videos/video2").update({ 'completed': false });
      completedVids --;
      myFirebaseRef.child("/javascript/videos/").update({ 'completed': completedVids });
      console.log(myData.javascript.videos.completed);
      console.log(completedVids/totalVids*100);
      $( ".videos-progress" ).css('width', (completedVids/totalVids*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

// 

var completedCourses = 0;
var totalCourses = 2;

$( ".courses li:nth-child(1) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/courses/course1").update({ 'completed': true });
      completedCourses ++;
      myFirebaseRef.child("/javascript/courses/").update({ 'completed': completedCourses });
      console.log(myData.javascript.courses.completed);
      console.log(completedCourses/totalCourses*100);
      $( ".courses-progress" ).css('width', (completedCourses/totalCourses*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/courses/course1").update({ 'completed': false });
      completedCourses --;
      myFirebaseRef.child("/javascript/courses/").update({ 'completed': completedCourses });
      console.log(myData.javascript.courses.completed);
      console.log(completedCourses/totalCourses*100);
      $( ".courses-progress" ).css('width', (completedCourses/totalCourses*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

$( ".courses li:nth-child(2) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/courses/course2").update({ 'completed': true });
      completedCourses ++;
      myFirebaseRef.child("/javascript/courses/").update({ 'completed': completedCourses });
      console.log(myData.javascript.courses.completed);
      console.log(completedCourses/totalCourses*100);
      $( ".courses-progress" ).css('width', (completedCourses/totalCourses*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/courses/course2").update({ 'completed': false });
      completedCourses --;
      myFirebaseRef.child("/javascript/courses/").update({ 'completed': completedCourses });
      console.log(myData.javascript.courses.completed);
      console.log(completedCourses/totalCourses*100);
      $( ".courses-progress" ).css('width', (completedCourses/totalCourses*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});



  //console.log(myData.javascript.articles.article1.title);

  function displayLogic(){

  $( ".user-name" ).append(userName);
  
  //$( ".articles li:nth-child(1) label").children().text("");
  $( ".prototype li:nth-child(1)" ).append(myData.javascript.prototype.prototype1.title);

  $( ".prototype li:nth-child(2)" ).append(myData.javascript.prototype.prototype2.title);

  if( myData.javascript.prototype.prototype1.completed == true ){
    alert("First prototype is completed")
    $(".prototype li:nth-child(1) input").attr('checked', 'checked');
  }

  if( myData.javascript.prototype.prototype2.completed == true ){
    alert("Second prototype is completed")
    $(".prototype li:nth-child(2) input").attr('checked', 'checked');
  }  

  $( ".functions li:nth-child(1)" ).append(myData.javascript.functions.functions1.title);

  $( ".functions li:nth-child(2)" ).append(myData.javascript.functions.functions2.title);

  $( ".videos li:nth-child(1)" ).append(myData.javascript.videos.video1.title);

  $( ".videos li:nth-child(2)" ).append(myData.javascript.videos.video2.title);

  $( ".thiskeyword li:nth-child(1)" ).append(myData.javascript.thiskeyword.thiskeyword1.title);
  
  $( ".thiskeyword li:nth-child(2)" ).append(myData.javascript.thiskeyword.thiskeyword2.title);

  $( ".thiskeyword li:nth-child(3)" ).append(myData.javascript.thiskeyword.thiskeyword3.title);

  $( ".courses li:nth-child(1)" ).append(myData.javascript.courses.course1.title);

  $( ".courses li:nth-child(2)" ).append(myData.javascript.courses.course2.title);

  };

  setTimeout(function(){ displayLogic(); }, 2000);

});





/*
      console.log(myData.javascript.articles.completed);
      console.log(completedArticles/totalArticles*100);

      console.log(completePercent);

      console.log(myData.javascript.articles.completed);
      console.log(completedArticles/totalArticles*100);

      console.log(completePercent);

            console.log(myData.javascript.prototype.completed);
      console.log(completedPrototype/totalPrototype*100);

            console.log(completePercent);

                 console.log(myData.javascript.prototype.completed);
      console.log(completedArticles/totalArticles*100);

            console.log(completePercent);

      console.log(myData.javascript.books.completed);
      console.log(completedBooks/totalBooks*100);

      console.log(completePercent);

           console.log(myData.javascript.books.completed);
      console.log(completedBooks/totalBooks*100);


      console.log(completePercent);

            console.log(myData.javascript.books.completed);
      console.log(completedBooks/totalBooks*100);


      console.log(completePercent);

            console.log(myData.javascript.books.completed);
      console.log(completedBooks/totalBooks*100);

            console.log(completePercent);

                  console.log(myData.javascript.books.completed);
      console.log(completedBooks/totalBooks*100);

            console.log(completePercent);

      console.log(myData.javascript.books.completed);
      console.log(completedBooks/totalBooks*100);

            console.log(completePercent);

    */



