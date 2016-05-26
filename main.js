

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
      book1: "Eloquent JavaScript"
    },
    articles: "Learn JavaScript 101",
    videos: "How This Works in JavaScript"
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


$( ".user-name" ).append(userName);









