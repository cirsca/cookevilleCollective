/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
  'newCollab': (collabObject) => {
    console.log(collabObject);
    collabObject.createdAt = new Date();
    collabObject.creator = 'coolGuy';
    Collabs.insert(collabObject);
    let mostRecent = Collabs.find({creator: 'coolGuy'}, {sort: {createdAt: -1}}).fetch();
    let id = mostRecent[0]._id;

    return id;
  }
});
