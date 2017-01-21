// Components
var SearchForm = {
  template: "#search-form-template",

  data: function() {
    return {
      loading: true
    };
  },

  mounted: function() {
    var _vm = this;

    this.$nextTick(function() {
      TweenMax.to($('.fade-slide-in-after-render'), 1, { opacity: 1, y: 0 });

      var emojies = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: [{ img: '1f602.png', name: 'joy' }]
      });

      function emojiesWithDefaults(q, sync) {
        if (q === '') {
          sync([{ img: '1f602.png', name: 'joy' }]);
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
          router.push({ name: 'emoji-view', params: { emojiId: suggestion.name, duration: '1hr' }});
        } else {
          var searchForm = $('.search-form');

          var scrollTop = $(window).scrollTop();
          var elementOffset = searchForm.offset().top;
          var elementOffsetLeft = searchForm.offset().left;
          var distance = (elementOffset - scrollTop);

          TweenMax.to($('.gradient-bg'), 0.7, { bottom: $(window).height() - 85, ease: Expo.easeOut });

          TweenMax.to(searchForm, 0.7, { y: -26, ease: Expo.easeOut, onComplete: function() {
            router.push({ name: 'emoji-view', params: { emojiId: suggestion.name, duration: '1hr' }});
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
  },

  created: function() {
    var _vm = this;

    this.$nextTick(function() {
      _vm.$refs.emojiSearch.loading = false;
    });
  }
};


var EmojiViewPage = {
  template: "#view-emoji-page-template",

  data: function() {
    return {
      rendered: true,
      chart: null,
      chartData: {},
      currentDuration: this.$route.params.duration || '1hr',
      errorPresent: false
    };
  },

  created: function() {
    var _vm = this;

    $.ajax({
      url: 'http://newminion.com:1234/charts?id=1F602',

      success: function(data) {
        var graphData = JSON.parse(data);
        _vm.chartData = graphData;

        _vm.$nextTick(function() {
          _vm.$refs.emojiSearch.loading = false;

          var containerHeight = $('.ct-chart').outerHeight();

          _vm.chart = new Chartist.Line('.ct-chart', {
            labels: _vm.formatDates(graphData[_vm.currentDuration][0]),
            series: [
              graphData[_vm.currentDuration][1]
            ]
          }, {
            axisY: {},
            fullWidth: true,
            height: containerHeight + 'px',
            chartPadding: {
              right: 56,
              top: 55,
              bottom: 48,
              left: 54
            },
            lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
            })
          });

          _vm.chart.on('draw', function(data) {
            if(data.type === 'line' || data.type === 'area') {
              data.element.animate({
                d: {
                  begin: 2000 * data.index,
                  dur: 900,
                  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                  to: data.path.clone().stringify(),
                  easing: Chartist.Svg.Easing.easeOutQuint
                }
              });
            }
          });

          TweenMax.to($('.fade-in-after-render'), 0.3, { opacity: 1 });
        });
      },

      error: function(error) {
        _vm.errorPresent = true;
        _vm.$refs.emojiSearch.loading = false;
        $('.loading-symbol').remove();
      }
    });
  },

  methods: {
    formatDates: function(dates) {
      return _.map(dates, function(date, index) {
        if (index > 0 && moment(date).format("M/D") == moment(dates[index - 1]).format("M/D")) {
          return moment(date).format("h:mma");
        } else {
          return moment(date).format("M/D - h:mma");
        }
      });
    },

    viewDuration: function(duration) {
      var _vm = this;

      this.currentDuration = duration;

      TweenMax.to($('.ct-chart'), 0.2, { opacity: 0, onComplete: function() {
        _vm.chart.update({
          labels: _vm.formatDates(_vm.chartData[_vm.currentDuration][0]),
          series: [
            _vm.chartData[_vm.currentDuration][1]
          ]
        });

        TweenMax.to($('.ct-chart'), 0.2, { opacity: 1 });
      }});
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
    { path: '/emoji/:emojiId/:duration', name: 'emoji-view', component: EmojiViewPage }
  ]
});

// Main app
var EmojiTrade = new Vue({
  el: "#emoji-trade",
  router: router
});
