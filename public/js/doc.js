(function($){
    // generate doc menu
    $(function(){
        var nav = $('#navList');
        var path = window.location.pathname;
        var current = path.substring(path.lastIndexOf('/') + 1);
        $.ajax({
            type: 'get',
            url: '/doc/nav',
            success: function(data){
                console.log(data);
                var navItem;
                data.forEach(function(item, index, arr){
                    navItem = $('<li><a href="/doc/' + item.pageName + '">' + item.pageTitle + '</a></li>');
                    if(current == item.pageName){
                        navItem.addClass('active');
                    }
                    nav.append(navItem);
                });
            }
        });

        $(window).scroll(function(){
            $('.gmp-side').find('a').removeClass('active').filter(function(){
                var href = $(this).attr('href');
                var scrollTop = $(window).scrollTop();
                return scrollTop < $(href).offset().top + 1;
            }).filter(':first').addClass('active');
        });
        $('.gmp-side').find('a').on('click', function(){
            var href = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 300);
        })
    });
})(jQuery);