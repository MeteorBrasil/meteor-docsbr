release = Meteor.release ? "1.0.3.1" : "(checkout)";

Template.registerHelper("release", release);

Template.registerHelper("fullApi", function () {
  return true;
});

Template.registerHelper('dstache', function() {
  return '{{';
});

Template.registerHelper('tstache', function() {
  return '{{{';
});

Template.registerHelper('lt', function () {
  return '<';
});
