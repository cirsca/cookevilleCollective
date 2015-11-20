/*****************************************************************************/
/* newCollab: Event Handlers */
/*****************************************************************************/
Template.newCollab.events({
  'submit #newCollab': (event, template) => {

    event.preventDefault();
    let title = event.target.title.value;
    let tags = event.target.tags.value;
    let collabObject = {
      title: title,
      tags: tags
    };
    Meteor.call('newCollab',collabObject,(err,data)=>{
      if(err){
        Bert.alert('Oh nos! ' + err, 'danger');
      }else {
        Bert.alert('Aww yuss!', 'success');
        Router.go('/collabs/view/' + data);
      }
    });
  }
});

/*****************************************************************************/
/* newCollab: Helpers */
/*****************************************************************************/
Template.newCollab.helpers({
});

/*****************************************************************************/
/* newCollab: Lifecycle Hooks */
/*****************************************************************************/
Template.newCollab.onCreated(function () {
  Session.setDefault('isPublic',true);
});

Template.newCollab.onRendered(function () {
});

Template.newCollab.onDestroyed(function () {
});
