

var myFirebaseRef = new Firebase("https://training-tracker.firebaseio.com/");

myFirebaseRef.set({
  javascript: {
    books: {
      book1: {
        title: "Eloquent JavaScript by Marijn Haverbeke",
        completed: false
      },
      book2: {
        title: "JavaScript & jQuery by Jon Duckett",
        complete: false
      },
      book3: {
        title: "JavaScript The Good Parts by Douglas Crockford",
        complete: false
      },
      completed: 0
    },
    articles: {
      article1: {
        title: "Understand JavaScript’s 'this' With Clarity, and Master It",
        completed: false
      },
      article2: {
        title: "Exploring JavaScript for-in loops",
        completed: false
      },
      completed: 0
    },
    videos: {
      video1: "How This Works in JavaScript",
      video2: "Keeping Track of 'This' in JavaScript"
    },
    tutorials: {
      tut1: "Learn Angular by Building a Gmail Clone",
      tut2: "Create a MEAN Stack Google Map App (Part I)"
    },
    courses: {
      course1: "Lynda: JavaScript Essential Training",
      course2: "Lynda: JavaScript and AJAX"
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
});


myFirebaseRef.child("/user1/name").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"
  userName = snapshot.val();
});

myFirebaseRef.on("value", function(data) {
  console.log(data.val());  
  myData = data.val();
});

$( ".user-name" ).append(userName);

$( ".articles li:nth-child(1)" ).append(myData.javascript.articles.article1.title);
$( ".articles li:nth-child(2)" ).append(myData.javascript.articles.article2.title);

$( ".tutorials li:nth-child(1)" ).append(myData.javascript.tutorials.tut1);
$( ".tutorials li:nth-child(2)" ).append(myData.javascript.tutorials.tut2);

$( ".videos li:nth-child(1)" ).append(myData.javascript.videos.video1);
$( ".videos li:nth-child(2)" ).append(myData.javascript.videos.video2);

$( ".books li:nth-child(1)" ).append(myData.javascript.books.book1.title);
$( ".books li:nth-child(2)" ).append(myData.javascript.books.book2.title);
$( ".books li:nth-child(3)" ).append(myData.javascript.books.book3.title);

$( ".courses li:nth-child(1)" ).append(myData.javascript.courses.course1);
$( ".courses li:nth-child(2)" ).append(myData.javascript.courses.course2);

// event listener for when an item is checked

var completedArticles = 0;
var totalArticles = 2;

$( ".articles li:nth-child(1) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/articles/article1").update({ 'completed': true });
      completedArticles ++;
      myFirebaseRef.child("/javascript/articles/").update({ 'completed': completedArticles });
      console.log(myData.javascript.articles.completed);
      console.log(completedArticles/totalArticles*100);
      $( ".articles-progress" ).css('width', (completedArticles/totalArticles*100));
    }
    else {
      myFirebaseRef.child("/javascript/articles/article1").update({ 'completed': false });
      completedArticles --;
      myFirebaseRef.child("/javascript/articles/").update({ 'completed': completedArticles });
      console.log(myData.javascript.articles.completed);
      console.log(completedArticles/totalArticles*100);
      $( ".articles-progress" ).css('width', (completedArticles/totalArticles*100));
    }
});



$( ".articles li:nth-child(2) input" ).change(function() {
    if(this.checked) {
      myFirebaseRef.child("/javascript/articles/article2").update({ 'completed': true });
      completedArticles ++;
      myFirebaseRef.child("/javascript/articles/").update({ 'completed': completedArticles });
      console.log(myData.javascript.articles.completed);
      console.log(completedArticles/totalArticles*100);
      $( ".articles-progress" ).css('width', (completedArticles/totalArticles*100));
    }
    else {
      myFirebaseRef.child("/javascript/articles/article2").update({ 'completed': false });
      completedArticles --;
      myFirebaseRef.child("/javascript/articles/").update({ 'completed': completedArticles });
      console.log(myData.javascript.articles.completed);
      console.log(completedArticles/totalArticles*100);
      $( ".articles-progress" ).css('width', (completedArticles/totalArticles*100));
    }
});

//console.log(myData.javascript.articles.completed);




/*

myFirebaseRef.child("/javascript/articles/article1").update({ 'completed': true });

myFirebaseRef.child("/javascript/articles/article1").push({ 'completed': true });  //push

fredNameRef.update({ first: 'Fred', last: 'Flintstone' });
*/




