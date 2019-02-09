var ideaNames = document.getElementById('Ideaname');
var ideaDescriptions = document.getElementById('IdeaDesc');

function submitIdea(){
	window.alert = null;
alert('test'); // fail
delete window.alert; // true
alert('test'); // win
}


function addIdea() {
			//alert("Wow, thats alot of damage.");
			var name = document.getElementById("IdeaName").value;
			var description = document.getElementById("IdeaDesc").value;

			alert(name);
			//alert(description);
			var table = document.getElementById("ideas");
			var str = "<tr><th>" + name + "</th><th>" + description + "</th>";
			table.innerHTML += str;
			return false;
	}
