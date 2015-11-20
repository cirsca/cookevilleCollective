/*****************************************************************************/
/* viewCollab: Event Handlers */
/*****************************************************************************/
Template.viewCollab.events({
});

/*****************************************************************************/
/* viewCollab: Helpers */
/*****************************************************************************/
Template.viewCollab.helpers({
  collab: () => {
    let id = Router.current().params.id;
    return Collabs.find({_id: id});
  }
});

/*****************************************************************************/
/* viewCollab: Lifecycle Hooks */
/*****************************************************************************/
Template.viewCollab.onCreated(function () {
});

Template.viewCollab.onRendered(function () {

});

Template.viewCollab.onDestroyed(function () {
});
