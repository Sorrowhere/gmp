(function($){
    $(function(){
		// editor init
		var editor = ace.edit('editor');
		var session = editor.session;
        var emmet = require("ace/ext/emmet");
		// editor set
		editor.setTheme('ace/theme/chrome');
		editor.setShowInvisibles(true);

		// editor session set
		session.setMode('ace/mode/markdown');
		session.setFoldStyle('markbegin');

		// change line
		session.setUseWrapMode(true);
		session.setWrapLimitRange(100, 100);
		editor.renderer.setPrintMarginColumn(100);

        editor.setOptions({
            enableEmmet:true
        });

	    var pageValue;
	    var taMiddle = $('#taMiddle');
	    var pagePreview = $('#pagePreview');
        var txtPageName = $('#txtPageName');
        var txtPageTitle = $('#txtPageTitle');

	    editor.on('change', function(){

	    	pageValue = editor.getValue();

            // markdown version
            $.ajax({
	    		type: 'post',
	    		url: '/preview',
	    		data: { "content": pageValue },
	    		success: function(data){
	    			pagePreview.html(data.content);
	    		}
	    	});

            // html version
            //pagePreview.html(pageValue);

	    });


        // edit
        var url = window.location.pathname;
        if(isEdit(url)){
            $('title').text('编辑页面');
            // fetch init content
            $.ajax({
                type: 'get',
                url: '/page/detail/' + url.substring(url.lastIndexOf('/') + 1),
                success: function(data){
                    editor.setValue(data.markContent);
                    txtPageName.val(data.pageName);
                    txtPageTitle.val(data.pageTitle);
                }
            });
        }

	    // save handler
		$('#btnPageSave').on('click', function(){
            var reqUrl = '/page';
            var data = {
                "markContent": pageValue,
                "htmlContent": pagePreview.html(),
                "pageName": txtPageName.val(),
                "pageTitle": txtPageTitle.val()
            };
			if($.trim(pageValue).length == 0){
				return false;
			}
            if(isEdit(url)){
                data.key = url.substring(url.lastIndexOf('/') + 1);
                reqUrl = '/page/' + data.key;
            }
            $.ajax({
                type: 'post',
                url: reqUrl,
                data: data,
                beforeSend: function(){
                    $('#loading').css('display', 'inline-block');
                },
                success: function(msg){
                    $('#loading').css('display', 'none');
                    if(msg.status == 2){
                        txtPageName.addClass('error');
                        $('#errorExist').css('display', 'inline-block');
                        $('#saveSuccess').css('display', 'none');
                    }
                    if(msg.status == 1){
                        $('#errorExist').css('display', 'none');
                        $('#saveSuccess').css('display', 'inline-block');
                        txtPageName.removeClass('error');
                        if(!isEdit(url)){
                            editor.setValue('');
                            txtPageTitle.val('');
                            txtPageName.val('');
                        }
                    }
                }
            });
		});

        function isEdit(url){
            return url.match(/page\/\d+/g);
        }

    });
})(jQuery);