var nwDestinations = [];
var myPortfolioArray = [];

function nwLocations(ele) { //HANDLEBAR USAGE NOW USED
  for (key in ele) this[key] = ele[key];
};

function myPortfolio(ele) {
  for (key in ele) this[key] = ele[key];
};

nwLocations.prototype.toHtml = function() {
  var $source = $('#nwlocations-template').html();
  var template = Handlebars.compile($source);
  var compiledTemplate = template(this);
  return compiledTemplate;
};

portfolio.prototype.toHtml = function() {
  var $source = $('#myPortfolio-template').html();
  var template = Handlebars.compile($source);
  return template(this);
};

myNWLocations.forEach(function(element) {
  nwDestinations.push(new nwLocations(element));
});

myPortfolio.forEach(function(element) {
  myPortfolioArray.push(new portfolio(element));
});

nwDestinations.forEach(function(a) {
  $('#nwlocations').append(a.toHtml());
});

myPortfolioArray.forEach(function(a) {
  $('#myPortfolio').append(a.toHtml());
});

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
