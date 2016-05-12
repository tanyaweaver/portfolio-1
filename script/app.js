var nwDestinations = [];

function nwLocations(ele) { //HANDLEBAR USAGE NOW USED
  for (key in ele) this[key] = ele[key];
};

nwLocations.prototype.toHtml = function() {
  var $source = $('#nwlocations-template').html();
  var template = Handlebars.compile($source);
  var compiledTemplate = template(this);
  return compiledTemplate;
};

// function nwLocations (ele) { JQUERY USEAGE COMMENTED ON
//   this.cityName = ele.cityName;
//   this.cityImg = ele.cityImg;
//   this.category = ele.category;
//   this.body = ele.body;
// }

// nwLocations.prototype.toHtml = function () {
//   var $newLocation = $('article.template').clone();
//   $newLocation.find('article.template').attr('data-category', this.category);
//   $newLocation.find('h1').text(this.cityName);
//   $newLocation.find('h2').text(this.body);
//   $newLocation.find('.nwlocations-body').html(this.cityImg);
//   $newLocation.removeClass('template');
//   return $newLocation;
// };
myNWLocations.forEach(function(element) {
  nwDestinations.push(new nwLocations(element));
});

nwDestinations.forEach(function(a) {
  $('#nwlocations').append(a.toHtml());
});

// var appTemplate = $('#nwlocations-template').html();
// var compiledTemplate = Handlebars.compile(appTemplate);
// var compiledMyNWLocations = compiledTemplate(this);
// $('#app').append(compiledMyNWLocations);

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
