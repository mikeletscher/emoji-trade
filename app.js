// Components
var SearchForm = {
  template: "#search-form-template",

  data: function() {
    return {
      loading: false
    };
  },

  mounted: function() {
    this.loading = false;
    var _vm = this;

    this.$on('clear-search-loading', function() { debugger; _vm.loading = false });

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
        _vm.loading = true;

        var searchForm = $('.search-form');

        var scrollTop = $(window).scrollTop();
        var elementOffset = searchForm.offset().top;
        var elementOffsetLeft = searchForm.offset().left;
        var distance = (elementOffset - scrollTop);

        searchForm.css({ top: distance, left: elementOffsetLeft, marginLeft: 0, position: 'absolute' });

        TweenMax.to(searchForm, 0.5, { top: 6 });

        router.push({ name: 'emoji-view', params: { emojiId: suggestion }});
      });;
    });
  }
};

var SearchHomePage = {
  template: '<div></div>',

  beforeRouteEnter: function(to, from, next) {
    next(function(vm) {
      vm.$emit('clear-search-loading');
      $('.search-form').css({ top: 'auto', left: 'auto', marginLeft: 0, position: 'static' });
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
    { path: '/', name: 'search', component: SearchHomePage },
    { path: '/emoji/:emojiId', name: 'emoji-view', component: EmojiViewPage }
  ]
});

// Main app
var EmojiTrade = new Vue({
  el: "#emoji-trade",
  router: router,

  components: {
    'search-form': SearchForm
  }
});
