(function($){
    $(function(){
		// editor init
		var editor = ace.edit('editor');
		var session = editor.session;
        var emmet = require("ace/ext/emmet");
        var editorState = 1;
		// editor set
		editor.setTheme('ace/theme/chrome');
		editor.setShowInvisibles(true);

		// editor session set
		session.setMode('ace/mode/html');
		session.setFoldStyle('markbegin');

		// change line
		session.setUseWrapMode(true);
		session.setWrapLimitRange(90, 90);
		editor.renderer.setPrintMarginColumn(90);

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

            // set editor state not saved
            editorState = 0;
            // markdown version
            $.ajax({
	    		type: 'post',
	    		url: '/manage/preview',
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
                url: '/manage/page/detail/' + url.substring(url.lastIndexOf('/') + 1),
                success: function(data){
                    editor.setValue(data.markContent);
                    txtPageName.val(data.pageName);
                    txtPageTitle.val(data.pageTitle);
                }
            });
        }

	    // save handler
		$('#btnPageSave').on('click', function(){
            var reqUrl = '/manage/page';
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
                reqUrl = '/manage/page/' + data.key;
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
                        editorState = 1;
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

        $(window).on('keydown', function(e){
            if(e.keyCode == 83 && e.ctrlKey == true){
                $('#btnPageSave').trigger('click');
                return false;
            }
        });

//        window.onbeforeunload = function(){
//            var msg = '文档尚未保存，确定关闭窗口吗？';
//            if(editorState == 0){
//                return msg;
//            }
//        }

    });
})(jQuery);