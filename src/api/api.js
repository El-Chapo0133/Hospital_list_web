/**
 * Author 		: Loris Levêque
 * Date 		: 24.01.2020
 * Description 	: Class that mimics a db
 * *********************************/

const struct_patient = {
	"title":"Premier patient",
	"name":"Ashley Sanchez",
	"obervations": "",
	"dates_entry": "",
	"dates_exit": "",
	"actions": "",
	"requirements": "",
	"then": "",
	"pharmaceuticals": [["","","","",""]],
	"history": "",
	"antecedant": "",
	"allergy": ""
}

var fs 		= require('fs');

var Api = /** Class */ (function() {
	//const FILE = "_resources/database/database.json";
	const FILE = "_resources/database/database.json";
	var json = {};
	function Api() {
		this.init = async function(callback) {
			fs.readFile(FILE, (err, data) => {
				if (err)
					throw(err);
				else {
					json = JSON.parse(data.toString());
					callback();
				}
			});
		}
		this.getAllPatients = async function() {
			return json.patients;
		}
		this.insertPatient = async function(input) {
			if (!isNull(json)) {
				if (isInputCorrect(input)) {
					input.id = (getLastPatient().id + 1);
					json.patients.push(input);
					return;
				}
			}
		}
		this.removePatientFromId= async function(input) {
			if (!isNull(json)) {
				json.patients.forEach((patient) => {
					if (patient.id == input) {
						/* TODO
						cp array, remove cell where id = id, cp array to json
						 */
					}
				});
			}
		}
		this.close = async function() {
			fs.writeFile(FILE, JSON.stringify(json), (err) => {
				if (err)
					throw(err);
				else {
					json = null;
					return;
				}
			});
		}
	}
	function isNull(input) {
		if (input == null)
			return true;
		else
			return false;
	}
	function isInputCorrect(input) {
		/* TODO */
		return true;
	}
	function getLastPatient() {
		return json.patients[json.patients.length - 1];
	}
	return Api;
})();

module.exports = new Api();