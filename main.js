

var myFirebaseRef = new Firebase("https://training-tracker.firebaseio.com/");

myFirebaseRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});

myFirebaseRef.set({
  javascript: {
    books: {
      book1: "Eloquent JavaScript by Marijn Haverbeke",
      book2: "JavaScript & jQuery by Jon Duckett",
      book3: "JavaScript The Good Parts by Douglas Crockford"
    },
    articles: {
      article1: "Understand JavaScript’s 'this' With Clarity, and Master It",
      article2: "Exploring JavaScript for-in loops"
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

$( ".articles li:nth-child(1)" ).append(myData.javascript.articles.article1);
$( ".articles li:nth-child(2)" ).append(myData.javascript.articles.article2);

$( ".tutorials li:nth-child(1)" ).append(myData.javascript.tutorials.tut1);
$( ".tutorials li:nth-child(2)" ).append(myData.javascript.tutorials.tut2);

$( ".videos li:nth-child(1)" ).append(myData.javascript.videos.video1);
$( ".videos li:nth-child(2)" ).append(myData.javascript.videos.video2);

$( ".books li:nth-child(1)" ).append(myData.javascript.books.book1);
$( ".books li:nth-child(2)" ).append(myData.javascript.books.book2);
$( ".books li:nth-child(3)" ).append(myData.javascript.books.book3);

$( ".courses li:nth-child(1)" ).append(myData.javascript.courses.course1);
$( ".courses li:nth-child(2)" ).append(myData.javascript.courses.course2);

// event listener for when an item is checked

$( ".articles li:nth-child(1) input" ).change(function() {
    if(this.checked) {
        console.log('Item 1 checked');
    }
});

console.log(myData.javascript.videos.video1);








