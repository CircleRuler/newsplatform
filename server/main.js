import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup
  UserInfo.update({},{$set:{todayScore:0}},false,true);
});
