
devers = new Meteor.Collection("devers");




if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);


  Template.options.events({
  "click #infolink": function() { 
    scrollFunction('#info');
  },

  "click #mainlink": function() { 
    scrollFunction('#main');
  },



});

 Template.index.events({

    "click #dirlink": function() { 
    scrollFunction('#dir');
  },

      "click #catlink": function() { 
    scrollFunction('#cat');
  },

      "click #prizelink": function() { 
    scrollFunction('#prize');
  },

      "click #placelink": function() { 
    scrollFunction('#place');
  },

  "click #infolink": function() { 
    scrollFunction('#info');
  },

  "click #challengelink": function() { 
    scrollFunction('#challenge');
  },

    "click #sponsorlink": function() { 
    scrollFunction('#sponsor');
  },

    "click #signuplink": function() { 
    scrollFunction('#signup');
  },

  });

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
    event.target.mail.value = "";
    event.target.subject.value = "";
    event.target.data.value = "";

  }

});

Template.contactUs.events({

  'submit .contactoGeralForm' : function (event) {

    event.preventDefault();
    

    var name = event.target.name.value;
    var mail = event.target.mail.value;
    var company = event.target.company.value;
    var data = event.target.data.value;


    // In your client code: asynchronously send an email
    Meteor.call('sendEmail',
            'breakingdev@neeti.tecnico.ulisboa.pt',
            mail,
            company,
            data);

    // Clear form
    event.target.name.value = "";
    event.target.mail.value = "";
    event.target.company.value = "";
    event.target.data.value = "";

  }


});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup


    //replace xxxxx and yyyyy with gmail username and password
    process.env.MAIL_URL = "smtp://xxxxx%40gmail.com:yyyyyyy@smtp.gmail.com:465/"


Meteor.methods({
  sendEmail: function (to, from, company, text) {
    check([to, from, company, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      company: company,
      text: text
    });
  }
});

  });
}

var scrollFunction = function(idstring) {
  $('html, body').animate({
    scrollTop: $(idstring).offset().top
  }, 1000);
};



// Iron Router


Router.route('/', function () {
  this.render("index");
});

Router.route('/contactos', function () {
  this.render("contacts");
});
