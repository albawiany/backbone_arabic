define(['backbone','underscore','jquery'], function(Backbone, _, $) {
  var App = Backbone.View.extend({
    el: 'body',
    events: {
      "click .play": "playAudio",
      "click .text .btn": "changeSource"
    },

    active: "arabic",
     
    itemTemplate: _.template($("script.template").html()),
    initialize: function() {
      var that = this;
      $.getJSON('resources/words.json', function(data){
          _.each(data.words, function(i) {
            this.$(".list").append(this.itemTemplate({i:i}));
          }, that);
          that.$(".spanish").hide();
      });
    },
    changeSource: function() {
      if (this.active == "arabic") {
        this.active = "spanish";
        this.$(".spaBtn").addClass("btn-primary");
        this.$(".arabBtn").removeClass("btn-primary");
        this.$(".arab").hide();
        this.$(".spanish").show();
      } else {
        this.active = "arabic";
        this.$(".spaBtn").removeClass("btn-primary");
        this.$(".arabBtn").addClass("btn-primary");
        this.$(".arab").show();
        this.$(".spanish").hide();
      }
    },
    playAudio: function(e) {
      var name = $(e.target).data("audio");
      var audio = new Audio("audios/"+name+".mp3");
      audio.play();
    }
  });

  return App;
});
