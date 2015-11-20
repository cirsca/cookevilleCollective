Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('collabs', {
  name: 'collabs',
  controller: 'CollabsController',
  where: 'client'
});

Router.route('/collabs/view/:id', {
  name: 'viewCollab',
  where: 'client'
});

Router.route('/collabs/new', {
  name: 'newCollab',
  where: 'client'
});