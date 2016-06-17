
devers = new Meteor.Collection("devers");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

Template.devReg.events({
  'submit .addDevForm' : function (event) {


    event.preventDefault();
    

    var name = event.target.name.value;

    
    devers.insert({
      name: name,
      createdAt: new Date() // current time
    });
    
     // Clear form
    event.target.name.value = "";

  }

});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
