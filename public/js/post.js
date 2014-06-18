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

	    var postValue;
	    var taMiddle = $('#taMiddle');
	    var postPreview = $('#postPreview');
	    editor.on('change', function(){
	    	postValue = editor.getValue();
	    	// taMiddle.text(postValue).trigger('change');
	    	$.ajax({
	    		type: 'post',
	    		url: '/preview',
	    		data: { "content": postValue },
	    		success: function(data){
	    			postPreview.html(data.content);
	    		}
	    	});
	    });

	    // save handler
		$('#postSave').on('click', function(){
			//
			var markContent = postValue;
			var htmlContent = postPreview.html();
			if($.trim(markContent).length == 0){
				return false;
			}

			$.ajax({
				type: 'post',
				url: '/post',
				data: {
					"markContent": markContent,
					"htmlContent": htmlContent
				},
				success: function(data){
					// 
				}
			});
		});
	}
})(jQuery);