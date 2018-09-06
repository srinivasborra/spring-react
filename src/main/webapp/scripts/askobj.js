var askobj={
		appContext: 'http://localhost:8082/ui/',
		
		get: function (files, callBack) {
			var bufferObj = {};
			var bufferLen = files.length;
			
			for (var i in files) {
				// need a closure
				(function () {
					var index = i;
					var path  = files[i];
					askobj.ajax({
						url: path,
						dataType: 'text',
						success: function (data, success, responseObj) {
							if (success != 'success') {
								$.error('Loader: error while getting a file '+ path +'.');
								return;
							}
							bufferObj[index] = responseObj.responseText;
							loadDone();

						},
						error: function (data, err, errData) {
							if (err == 'error') {
								$.error('Loader: failed to load '+ files[i] +'.');
							} else {
								$.error('Loader: file "'+ files[i] + '" is loaded, but with a parsing error(s) in line '+ errData.line +': '+ errData.message);
								bufferObj[index] = responseObj.responseText;
								loadDone();
							}
						}
					});
				})();
			}
			// internal counter
			function loadDone() {
				bufferLen--;
				if (bufferLen <= 0) callBack(bufferObj);
			}
		},
		
		load: function (mod_name, mod_url, callBack) {
			// check if was loaded before 
			if (askobj.isLoaded.hasOwnProperty(mod_name)) {
				if (typeof askobj[mod_name].render == 'undefined') {
					$.error('Loader: module "'+ mod_name + '" has no render() method.');
				} else {
					askobj[mod_name].render();
				}
				checkCallback();
			} else {
				askobj.ajax({ 
					url: mod_url, 
					dataType: "script", 
					success: function (data, status, respObj) {
						askobj.isLoaded[mod_name] = true;
					},
					error: function (respObj, err, errData) {
						if (err == 'error') {
							$.error('Loader: module "'+ mod_name +'" failed to load ('+ mod_url +').');
						} else {
							askobj.isLoaded[mod_name] = true;
							$.error('Loader: module "'+ mod_name + '" is loaded ('+ mod_url +'), but with a parsing error(s) in line '+ errData.line +': '+ errData.message);
						}
					},
					complete : function () {
						checkCallback();
					}
				});		
			}
			
			function checkCallback() {
				if (typeof callBack == 'function') callBack();
			}
		},
		
		go: function (page) {
			console.log('Go: '+ page);
		}
}