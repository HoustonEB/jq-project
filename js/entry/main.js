require.config({
   baseUrl: './js', // 依照gulpfile的位置.
    paths: {
       jquery: 'lib/jquery'
    }
});

require(['modules/main'], function(main) {
    main.init();
});