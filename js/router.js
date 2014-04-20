Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function () {
  	// body...
  });
});

Todos.TodosIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('todos');
	}
})

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
