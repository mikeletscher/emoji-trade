// Components
var SearchPage = {
  template: "#search-page-template",

  data: function() {
    return {};
  },

  mounted: function() {
    this.$nextTick(function() {
      var emojies = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: ['laugh', 'cry', 'sad']
      });

      function emojiesWithDefaults(q, sync) {
        if (q === '') {
          sync(emojies.get('laugh', 'sad'));
        } else {
          emojies.search(q, sync);
        }
      }

      $('.main-search').typeahead({
        highlight: true,
        minLength: 0,
        hint: true
      },
      {
        name: 'emojies',
        source: emojiesWithDefaults
      }).bind('typeahead:select', function(ev, suggestion) {
        router.push({ name: 'emoji-view', params: { emojiId: suggestion }});
      });;
    });
  }
};

var EmojiViewPage = {
  template: "#view-emoji-page-template",

  computed: {
    emojiId: function() {
      return this.$route.params.emojiId;
    }
  }
};

// Routes
var router = new VueRouter({
  routes: [
    { path: '/', name: 'search', component: SearchPage },
    { path: '/emoji/:emojiId', name: 'emoji-view', component: EmojiViewPage }
  ]
});

// Main app
var EmojiTrade = new Vue({
  el: "#emoji-trade",
  router: router,

  components: {
    SearchPage: SearchPage
  },

  computed: {
    isSearchPage: function() {
      return ['search'].indexOf(this.$route.name) >= 0;
    }
  }
});
