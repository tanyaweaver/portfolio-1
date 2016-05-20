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
    var eTag;
    $.ajax({
      type: 'HEAD',
      url: '../data/locations.json',
      success: function(data, message, xhr) {
        eTag = xhr.getResponseHeader('eTag');
        if(!localStorage.locations || eTag !== localStorage.eTag) {
          $.getJSON('../data/locations.json', function(data1) {
            console.log('yolo, getting json data and sending it to local storage');
            localStorage.eTag = eTag; //saving new eTag TO local storage
            nwLocations.loadAll(data1);
            localStorage.locations = JSON.stringify(data1);
            // eTag = JSON.parse(localStorage.eTag); getting eTag FROM local storage
            locationView.initIndexPage();
          });
        } else {
          console.log('hola, getting info from local storgae because eTag has not changed');
          nwLocations.loadAll(JSON.parse(localStorage.locations));
          locationView.initIndexPage();
        }
      }
    });
  };

  locationView.initIndexPage = function() {
    console.log('yolo, rendering locations to the page');
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

})(window);
