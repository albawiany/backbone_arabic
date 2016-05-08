require.config({
  paths: {
    'jquery': 'vendor/jquery/dist/jquery.min',
    'underscore': 'vendor/underscore-amd/underscore-min',
    'backbone': 'vendor/backbone-amd/backbone-min',
    'bootstrap': 'vendor/bootstrap/dist/js/bootstrap.min',
  }
});

require(['views/app'], function(AppView) {
  new AppView;
});
