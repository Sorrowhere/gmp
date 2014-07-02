(function($){
    // generate doc menu
    $(function(){
        var menu = $('#menuList');
        var path = window.location.pathname;
        var current = path.substring(path.lastIndexOf('/') + 1);
        $.ajax({
            type: 'get',
            url: '/doc/menus',
            success: function(data){
                console.log(data);
                var menuItem;
                data.forEach(function(item, index, arr){
                    menuItem = $('<li><a href="/doc/' + item.pageName + '">' + item.pageTitle + '</a></li>');
                    if(current == item.pageName){
                        menuItem.addClass('active');
                    }
                    menu.append(menuItem);
                });
            }
        })
    });
})(jQuery);