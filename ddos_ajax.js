$(document).ready(function(){
$.ajax({
method: "POST",
url: "database/settings/database.php"
})
.done(function(){
console.log("Ddos");
});
});
