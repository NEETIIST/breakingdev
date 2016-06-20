
devers = new Meteor.Collection("devers");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

Template.devReg.events({
  'submit .addDevForm' : function (event) {


    event.preventDefault();
    

    var name = event.target.name.value;
    var age = event.target.age.value;
    var city = event.target.city.value;

    
    devers.insert({
      name: name,
      age: age,
      city: city,
      createdAt: new Date() // current time
    });
    
     // Clear form
    event.target.name.value = "";
    event.target.age.value = "";
    event.target.city.value = "";

  }

});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

// Iron Router


Router.route('/', function () {
  this.render("index");
});

Router.route('/boot', function () {
  this.render('bootstrap');
});

Router.route('/items', function () {
  this.render('home');
});