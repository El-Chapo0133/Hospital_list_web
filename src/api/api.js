/**
 * Author 		: Loris Levêque
 * Date 		: 24.01.2020
 * Description 	: Class that mimics a db
 */

var Api = /** Class */ (function() {
	//const FILE = "_resources/database/database.json";
	const FILE = { name: "_resources/database/database.json", lastModified: 1579506339806, webkitRelativePath: "", size: 404, type: "text/plain" }
	function Api() {
		this.getAll = function() {
			var request = new XMLHttpRequest();

			request.onReadyStateChange = () => {
				if (request.readyState == 4) {
					if (request.status == 200 || request.status == 0) {
						// success
						return request.responseText;
					} else {
						// failure
						throw("Error on the file loaded");
					}
				}
			}
			request.open("GET", FILE, true);
			request.send();

			/*var input = document.getElementById("file");

			input.addEventListener('change', (e) => {
				var reader = new FileReader();
				reader.addEventListener('load', (e) => {
					console.log(e.target.result);
				})

				var file = e.target.files[0];
				file.name = "_resources/database/database.json";

				reader.readAsText(file);
			});*/
		}
	}
	return Api;
})();

var api = new Api();