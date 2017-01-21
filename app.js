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

        if((['emoji-view']).indexOf(_vm.$route.name) >= 0) {
          _vm.loading = false;
          router.push({ name: 'emoji-view', params: { emojiId: suggestion }});
        } else {
          var searchForm = $('.search-form');

          var scrollTop = $(window).scrollTop();
          var elementOffset = searchForm.offset().top;
          var elementOffsetLeft = searchForm.offset().left;
          var distance = (elementOffset - scrollTop);

          searchForm.css({ top: distance, left: elementOffsetLeft, marginLeft: 0, position: 'absolute' });

          TweenMax.to($('.gradient-bg'), 0.7, { bottom: $(window).height() - 81, ease: Expo.easeOut });

          TweenMax.to(searchForm, 0.7, { top: -49, ease: Expo.easeOut, onComplete: function() {
            router.push({ name: 'emoji-view', params: { emojiId: suggestion }});
          }});
        }
      });;
    });
  }
};

var SearchHomePage = {
  template: "#search-home-page-template",

  components: {
    'search-form': SearchForm
  }
};


var EmojiViewPage = {
  template: "#view-emoji-page-template",

  data: function() {
    return {
      rendered: true
    };
  },

  created: function() {
    this.$nextTick(function() {
      TweenMax.to($('.fade-in-after-render'), 0.5, { opacity: 1 });
    });
  },

  computed: {
    emojiId: function() {
      return this.$route.params.emojiId;
    }
  },

  components: {
    'search-form': SearchForm
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
  router: router
});
