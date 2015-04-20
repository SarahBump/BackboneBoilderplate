var LogoView = Backbone.View.extend({
  tagName: "div",
  className: "column",
  template: _.template("<h1>Hi name is <%= name %>, I love the movie <%= movie %>, I live in <%= city %>, and i love wdi because <%= reason %></h1>"),
  initialize: function() {
    this.render();
  },
  render: function() {
    var data= {
      name: "Sarah",
      movie: "Argo",
      city: "Chicago",
      reason:  "blah"
    };
    var renderedTemplate = this.template(data);
    this.$el.html(renderedTemplate);
  }
});

var logo = new LogoView({
  el: $('body')
});
