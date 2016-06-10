
$( document ).ready(function() {

var myData = 2;

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
    books: {
      book1: {
        title: "Eloquent JavaScript by Marijn Haverbeke",
        completed: false
      },
      book2: {
        title: "JavaScript & jQuery by Jon Duckett",
        completed: false
      },
      book3: {
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
    tutorials: {
      tut1: {
        title: "Learn Angular by Building a Gmail Clone",
        completed: false
      },
      tut2: {
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
  var completedTotal = completedPrototype + completedBooks + completedVids + completedTuts + completedCourses;
  var totalItems = totalPrototype + totalBooks + totalTuts + totalVids + totalCourses;
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

// books

var completedBooks = 0;
var totalBooks = 3;

$( ".books li:nth-child(1) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/books/book1").update({ 'completed': true });
      completedBooks ++;
      myFirebaseRef.child("/javascript/books/").update({ 'completed': completedBooks });
      console.log(myData.javascript.books.completed);
      console.log(completedBooks/totalBooks*100);
      $( ".books-progress" ).css('width', (completedBooks/totalBooks*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/books/book1").update({ 'completed': false });
      completedBooks --;
      myFirebaseRef.child("/javascript/books/").update({ 'completed': completedBooks });
      console.log(myData.javascript.books.completed);
      console.log(completedBooks/totalBooks*100);
      $( ".books-progress" ).css('width', (completedBooks/totalBooks*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

$( ".books li:nth-child(2) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/books/book2").update({ 'completed': true });
      completedBooks ++;
      myFirebaseRef.child("/javascript/books/").update({ 'completed': completedBooks });
      console.log(myData.javascript.books.completed);
      console.log(completedBooks/totalBooks*100);
      $( ".books-progress" ).css('width', (completedBooks/totalBooks*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/books/book2").update({ 'completed': false });
      completedBooks --;
      myFirebaseRef.child("/javascript/books/").update({ 'completed': completedBooks });
      console.log(myData.javascript.books.completed);
      console.log(completedBooks/totalBooks*100);
      $( ".books-progress" ).css('width', (completedBooks/totalBooks*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

$( ".books li:nth-child(3) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/books/book3").update({ 'completed': true });
      completedBooks ++;
      myFirebaseRef.child("/javascript/books/").update({ 'completed': completedBooks });
      console.log(myData.javascript.books.completed);
      console.log(completedBooks/totalBooks*100);
      $( ".books-progress" ).css('width', (completedBooks/totalBooks*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/books/book3").update({ 'completed': false });
      completedBooks --;
      myFirebaseRef.child("/javascript/books/").update({ 'completed': completedBooks });
      console.log(myData.javascript.books.completed);
      console.log(completedBooks/totalBooks*100);
      $( ".books-progress" ).css('width', (completedBooks/totalBooks*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});


// Tutorials

var completedTuts = 0;
var totalTuts = 2;

$( ".tutorials li:nth-child(1) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/tutorials/tut1").update({ 'completed': true });
      completedTuts ++;
      myFirebaseRef.child("/javascript/tutorials/").update({ 'completed': completedTuts });
      console.log(myData.javascript.tutorials.completed);
      console.log(completedTuts/totalTuts*100);
      $( ".tuts-progress" ).css('width', (completedTuts/totalTuts*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/tutorials/tut1").update({ 'completed': false });
      completedTuts --;
      myFirebaseRef.child("/javascript/tutorials/").update({ 'completed': completedTuts });
      console.log(myData.javascript.tutorials.completed);
      console.log(completedTuts/totalTuts*100);
      $( ".tuts-progress" ).css('width', (completedTuts/totalTuts*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
});

$( ".tutorials li:nth-child(2) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/tutorials/tut2").update({ 'completed': true });
      completedTuts ++;
      myFirebaseRef.child("/javascript/tutorials/").update({ 'completed': completedTuts });
      console.log(myData.javascript.tutorials.completed);
      console.log(completedTuts/totalTuts*100);
      $( ".tuts-progress" ).css('width', (completedTuts/totalTuts*100)+"%");
      calcTotalPercent();
      console.log(completePercent);
      $( ".total-progress" ).css('width', completePercent+"%").text(completePercent + "%");
    }
    else {
      myFirebaseRef.child("/javascript/tutorials/tut2").update({ 'completed': false });
      completedTuts --;
      myFirebaseRef.child("/javascript/tutorials/").update({ 'completed': completedTuts });
      console.log(myData.javascript.tutorials.completed);
      console.log(completedTuts/totalTuts*100);
      $( ".tuts-progress" ).css('width', (completedTuts/totalTuts*100)+"%");
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

  $( ".tutorials li:nth-child(1)" ).append(myData.javascript.tutorials.tut1.title);

  $( ".tutorials li:nth-child(2)" ).append(myData.javascript.tutorials.tut2.title);

  $( ".videos li:nth-child(1)" ).append(myData.javascript.videos.video1.title);

  $( ".videos li:nth-child(2)" ).append(myData.javascript.videos.video2.title);

  $( ".books li:nth-child(1)" ).append(myData.javascript.books.book1.title);
  
  $( ".books li:nth-child(2)" ).append(myData.javascript.books.book2.title);

  $( ".books li:nth-child(3)" ).append(myData.javascript.books.book3.title);

  $( ".courses li:nth-child(1)" ).append(myData.javascript.courses.course1.title);

  $( ".courses li:nth-child(2)" ).append(myData.javascript.courses.course2.title);

  };

  setTimeout(function(){ displayLogic(); }, 1000);

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
*/


