//var ideaNames = document.getElementById("Ideaname");
//var ideaDescriptions = document.getElementById("IdeaDesc");

function addIdea() {
			//alert("Aye, matey, you've added another option!");
			var name = document.getElementById("IdeaName").value;
			var description = document.getElementById("IdeaDesc").value;

			//alert(name);
			//alert(description);
			var table = document.getElementById("ideas");
			var str = "<tr><th>" + name + "</th><th>" + description + "</th>";
			table.innerHTML += str;

			var firebaseRef = firebase.database().ref();

			firebaseRef.child(name).set(description);

			//CREATE unqique, randomly generated child name:
			//firebaseRef.push().set(description);


			return false;
	}

	function submitIdea(){
		window.alert = null;
	alert('test'); // fail
	delete window.alert; // true
	alert('test'); // win
	}
