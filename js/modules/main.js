

define(['jquery'], function($) {
    return {
        init: function() {
            console.log($('html').attr('lang'), 'init');
        }
    }
});