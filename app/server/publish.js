


Meteor.publish('collabs', function () {
  return Collabs.find();
});