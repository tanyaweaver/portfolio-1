(function (module) {
  var nwDestinations = [];
  var myPortfolioArray = [];
  var locationView = {};
  nwLocations.all = [];

  function nwLocations(ele) { //HANDLEBAR USAGE NOW USED
    for (key in ele) this[key] = ele[key];
  };

  nwLocations.prototype.toHtml = function() {
    var $source = $('#nwlocations-template').html();
    var template = Handlebars.compile($source);
    var compiledTemplate = template(this);
    return compiledTemplate;
  };

  nwLocations.loadAll = function(data) {
    data.forEach(function(element) {
      nwLocations.all.push(new nwLocations(element));
    });
  };
  // nwDestinations.forEach(function(a) {
  //   $('#nwlocations').append(a.toHtml());
  // });
  nwLocations.fetchAll = function() {
    if (localStorage.locations) {
      console.log('hola');
      nwLocations.loadAll(JSON.parse(localStorage.locations));
      locationView.initIndexPage();

      $.ajax({
        type: 'GET',
        url: 'data/locations.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
        }
      });
    } else {
      console.log('hi');
      $.getJSON('/data/locations.json', function(data) {
        console.log('yolo');
        nwLocations.loadAll(data);
        localStorage.locations = JSON.stringify(data);
        locationView.initIndexPage();
      });
    }
  };

  locationView.initIndexPage = function() {
    console.log('yolo');
    nwLocations.all.forEach(function(a) {
      $('#nwlocations').append(a.toHtml($('#nwlocations-template')));
    });
    $('#numTotal .numTotalClass').text(nwLocations.totalNumWords());
  };
  nwLocations.totalNumWords = function() {
    return nwLocations.all.map(function(arg) {
      return arg.body.match(/\b\w+/g).length;
    }).reduce(function(a,b) {
      return a + b;
    });
  };
  module.nwLocations = nwLocations;
  module.locationView = locationView;
})(window);

// function myPortfolio(ele) {
//   for (key in ele) this[key] = ele[key];
// };
//
// portfolio.prototype.toHtml = function() {
//   var $source = $('#myPortfolio-template').html();
//   var template = Handlebars.compile($source);
//   return template(this);
// };
// myPortfolio.forEach(function(element) {
//   myPortfolioArray.push(new portfolio(element));
// });
// myPortfolioArray.forEach(function(a) {
//   $('#myPortfolio').append(a.toHtml());
// });

handleLeftDivAbout = function() {

  $('.mainNav').on('click', '.index' , function() {
    $('.kingston').toggle();
    $('#topRight').toggle();
    $('html,body').scrollTop(0);
    $('main').fadeIn('#aboutMe');
  });
};
handleLeftDiv = function() {
  $('.mainNav').on('click', '.portfolio', function() {
    $('#topRight').toggle();
    $('.kingston').toggle();
    $('#aboutMe').toggle();
    $('.duoPic').toggle();
    $('.JMK').toggle();
    $('.Stockholm').toggle();
    $('html,body').scrollTop(0);
    $('main').fadeIn('.nwlocations-body');
  });
  $('.mainNav').click();
};

handleHiddenDivAbout = function() {

  $('.hiddenNav').on('click', '.index' , function() {
    $('.kingston').toggle();
    $('#topRight').toggle();
    $('.rightDiv').fadeIn('#aboutMe');
  });
};
handleHiddenDiv = function() {
  $('.hiddenNav').on('click', '.portfolio', function() {
    $('#topRight').toggle();
    $('.kingston').toggle();
    $('#aboutMe').toggle();
    $('.duoPic').toggle();
    $('.JMK').toggle();
    $('.Stockholm').toggle();
    $('.rightDiv').fadeIn('.nwlocations-body');
  });
  $('.hiddenNav').click();
};

$(document).ready(function() {
  handleLeftDivAbout();
  handleLeftDiv();
  handleHiddenDiv();
  handleHiddenDivAbout();
});
