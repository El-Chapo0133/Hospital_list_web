/**
 * Author 		: Loris Levêque
 * Date 		: 24.01.2020
 * Description 	: class that render a html file
 * *********************************/

var ejs 	= require('ejs');

var Render = /** Class */ (function() {
	function Render() {
		this.renderFile = async function(file, obj, callback) {
			ejs.renderFile(file, obj, (err, data) => {
				if (err)
					throw(err);
				else {
					callback(data.toString());
				}
			});
		}
		this.renderString = async function(string, obj) {
			ejs.render(string, obj, (err, data) => {
				if (err)
					throw(err);
				else {
					callback(data.toString());
				}
			})
		}
	}
	return Render;
})();

module.exports = new Render();