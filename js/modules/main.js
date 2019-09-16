

define(['jquery'], function($) {
    console.log($);
    return {
        init: function() {
            console.log($('html').attr('lang'), 'init')
        }
    }
});