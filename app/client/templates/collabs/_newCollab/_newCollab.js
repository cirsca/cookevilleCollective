/*****************************************************************************/
/* newCollab: Event Handlers */
/*****************************************************************************/
Template.newCollab.events({
  'submit #newCollab': (event, template) => {

    event.preventDefault();
    let title = event.target.title.value;
    let tags = event.target.tags.value;
    tags = tags.split(',');
    if(tags[0] === ""){
      Bert.alert('You gotta put at least one tag in! What medium are we using?', 'warning');
      return false;
    }
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
  },

  'click .one-to-two': () => {
    $('.step-1').hide();
    $('.step-2').show();
  },
  'click .two-to-three': ()=> {
    $('.step-2').hide();
    $('.step-3').show();
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
  $('.step-2, .step-3').hide();
});

Template.newCollab.onDestroyed(function () {
});
