(function($){ 
	window.onload = function(){
		// editor init
		var editor = ace.edit('editor');
		var session = editor.session;
		// editor set
		editor.setTheme('ace/theme/chrome');
		editor.setShowInvisibles(true);

		// editor session set
		session.setMode('ace/mode/markdown');
		session.setFoldStyle('markbegin');

		// change line
		session.setUseWrapMode(true);
		session.setWrapLimitRange(80, 80);
		editor.renderer.setPrintMarginColumn(80);

		// render set
		editor.renderer.setHScrollBarAlwaysVisible(false);
		

	    ace.config.loadModule("ace/ext/language_tools", function() {
	        editor.setOptions({
	            enableSnippets: true,
	            enableBasicAutocompletion: true
	        });
	    });

	    var pageValue;
	    var taMiddle = $('#taMiddle');
	    var pagePreview = $('#pagePreview');
	    editor.on('change', function(){
	    	pageValue = editor.getValue();
	    	
	    	$.ajax({
	    		type: 'post',
	    		url: '/preview',
	    		data: { "content": pageValue },
	    		success: function(data){
	    			pagePreview.html(data.content);
	    		}
	    	});
	    });

	    // save handler
		$('#pageSave').on('click', function(){
			var markContent = pageValue;
			var htmlContent = pagePreview.html();
			var pageName = $('#pageName').val();
			var pageTitle = $('#pageTitle').val();
			if($.trim(markContent).length == 0){
				return false;
			}

			$.ajax({
				type: 'post',
				url: '/page',
				data: {
					"markContent": markContent,
					"htmlContent": htmlContent,
					"pageName": pageName,
					"pageTitle": pageTitle
				},
				beforeSend: function(){
					$('#loading').css('display', 'inline-block');
				},
				success: function(data){
					$('#loading').css('display', 'none');
				}
			});
		});

		// edit
		// var url = window.location.pathname;
		// if(url.indexOf('/:')!==0){
		// 	// fetch init content
		// 	$.ajax({
		// 		type: 'get',
		// 		url: '/page/detail/' + url.substring(url.indexOf('/:') + 1),
		// 		success: function(data){
		// 			// 
		// 		}
		// 	});
		// }
	}
})(jQuery);