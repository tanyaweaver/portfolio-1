var resumeArray = [];

function Resume (ele) {
  this.employerName = ele.employerName;
  this.jobTitle = ele.jobTitle;
  this.category = ele.category;
  this.body = ele.body;
}

Resume.prototype.toHtml = function () {
  var $newResume = $('article.template').clone();
  $newResume.find('article.template').attr('data-category', this.category);
  $newResume.find('h1').text(this.employerName);
  $newResume.find('h2').text(this.jobTitle);
  $newResume.find('.resume-body').html(this.body);
  $newResume.removeClass('template');
  return $newResume;
};
myResume.forEach(function(element) {
  resumeArray.push(new Resume(element));
});

resumeArray.forEach(function(a) {
  $('#resume').append(a.toHtml());
});

handleLeftDivAbout = function() {

  $('.leftDiv').on('click', '.index' , function() {
    $('.kingston').toggle();
    $('#topRight').toggle();
    $('.rightDiv').fadeIn('#aboutMe');
  });
};
handleLeftDiv = function() {
  $('.leftDiv').on('click', '.portfolio', function() {
    $('#topRight').toggle();
    $('.kingston').toggle();
    $('#aboutMe').toggle();
    $('.duoPic').toggle();
    $('.JMK').toggle();
    $('.Stockholm').toggle();
    $('.rightDiv').fadeIn('.resume-body');
  });
  $('.leftDiv').click();
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
    $('.rightDiv').fadeIn('.resume-body');
  });
  $('.hiddenNav').click();
};

$(document).ready(function() {
  handleLeftDivAbout();
  handleLeftDiv();
  handleHiddenDiv();
  handleHiddenDivAbout();
});
