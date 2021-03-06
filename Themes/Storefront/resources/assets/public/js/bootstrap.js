window.$ = window.jQuery = require('jquery');

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
    },
});

require('bootstrap');
require('jquery.easing');
require('slick-carousel');
require('jquery-slimscroll');
require('devbridge-autocomplete');
require('selectize');
require('hammerjs');
