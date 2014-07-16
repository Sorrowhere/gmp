(function($){
    // generate doc menu
    $(function(){
        var nav = $('#navList');
        var path = window.location.pathname;
        var current = path.substring(path.lastIndexOf('/') + 1).length;
        current = current.length>0?current: 'index';
        $.ajax({
            type: 'get',
            url: '/nav',
            success: function(data){
                var navItem;
                data.forEach(function(item, index, arr){
                    navItem = $('<li><a href="/' + item.pageName + '">' + item.pageTitle + '</a></li>');
                    if(current == item.pageName){
                        navItem.addClass('active');
                    }
                    nav.append(navItem);
                });
            }
        });

        $(window).scroll(function(){

            var sideScrollTop = $(window).scrollTop();
            var $side = $('#gmpSide');

            $side.find('li').removeClass('active').filter(function(){
                var href = $(this).find('a').attr('href');
                var scrollTop = $(window).scrollTop();
                return scrollTop < $(href).offset().top + 1;
            }).filter(':first').addClass('active');


            $('.JS-menu-sub').find('li.active').closest('li.JS-menu-main-item').addClass('active');

            if($side.position().top < sideScrollTop){
                $side.addClass('gmp-fixed');
            }else{
                $side.removeClass('gmp-fixed');
            }


        });
        $('#gmpSide').find('a').on('click', function(){
            var href = $(this).attr('href');
            $(this).parent('li').addClass('active').siblings('li').removeClass('active');
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 300);
        });

        if(window.location.hash.length !== 0){
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top
            }, 300);
        }
    });
})(jQuery);