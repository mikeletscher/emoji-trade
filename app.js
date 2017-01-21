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
      TweenMax.to($('.fade-slide-in-after-render'), 1, { opacity: 1, y: 0 });

      var emojies = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: [{ img: '1f3d7.png', name: 'crane' }, { img: '1f3d0.png', name: 'volleyball' }]
      });

      function emojiesWithDefaults(q, sync) {
        if (q === '') {
          sync([{ img: '1f3d7.png', name: 'crane' }, { img: '1f3d0.png', name: 'volleyball' }]);
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
        display: 'name',
        source: emojiesWithDefaults,
        templates: {
          suggestion: _.template('<div><img src="images/emoji/<%- img %>" class="tt-icon"> <%- name %></div>')
        }
      }).bind('typeahead:select', function(ev, suggestion) {
        _vm.loading = true;

        if((['emoji-view']).indexOf(_vm.$route.name) >= 0) {
          _vm.loading = false;
          router.push({ name: 'emoji-view', params: { emojiId: suggestion.name }});
        } else {
          var searchForm = $('.search-form');

          var scrollTop = $(window).scrollTop();
          var elementOffset = searchForm.offset().top;
          var elementOffsetLeft = searchForm.offset().left;
          var distance = (elementOffset - scrollTop);

          searchForm.css({ top: distance, left: elementOffsetLeft, marginLeft: 0, position: 'absolute' });

          TweenMax.to($('.gradient-bg'), 0.7, { bottom: $(window).height() - 87, ease: Expo.easeOut });

          TweenMax.to(searchForm, 0.7, { top: -43, ease: Expo.easeOut, onComplete: function() {
            router.push({ name: 'emoji-view', params: { emojiId: suggestion.name }});
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
      rendered: true,
      chart: null
    };
  },

  created: function() {
    var _vm = this;

    this.$nextTick(function() {
      var containerHeight = $('.ct-chart').outerHeight();

      _vm.chart = new Chartist.Line('.ct-chart', {
        labels: ['1:00pm', '1:15pm', '1:30pm', '1:45pm', '2:00pm', '2:15pm'],
        series: [
          [12, 9, 7, 8, 5, 8]
        ]
      }, {
        axisY: {
          onlyInteger: true,
        },
        fullWidth: true,
        height: containerHeight + 'px',
        chartPadding: {
          right: 56,
          top: 42,
          bottom: 18,
          left: 20
        }
      });

      _vm.chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 2000 * data.index,
              dur: 1200,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        }
      });

      TweenMax.to($('.fade-in-after-render'), 0.5, { opacity: 1 });
    });
  },

  methods: {
    viewDuration: function(duration) {
      var _vm = this;

      TweenMax.to($('.ct-chart'), 0.5, { opacity: 0, onComplete: function() {
        _vm.chart.update({
          labels: ['1:00pm', '1:15pm', '1:30pm', '1:45pm', '2:00pm', '2:15pm'],
          series: [
            [4, 3, 5, 1, 4, 9]
          ]
        });

        TweenMax.to($('.ct-chart'), 0.3, { opacity: 1 });
      } });
    }
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
