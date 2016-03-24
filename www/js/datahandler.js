$(document).ready(function() {

	$("#save_settings").click(function() {
		storeSettings();
	})

	console.log("ready");
});

function storeSettings() {
	var showUser = $("#flip_user").prop("checked");
	var showTime = $("#flip_time").prop("checked");

	console.log(showUser);
}

function getSettings() {

}