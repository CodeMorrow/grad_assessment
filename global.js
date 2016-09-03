window.addEventListener("load", function() {
	var like1 = document.getElementById('like1');
	var totalLikes1 = document.getElementById('totalLikes1');
	var like2 = document.getElementById('like2');
	var totalLikes2 = document.getElementById('totalLikes2');

	like1.addEventListener("click", function(){

		 if (like1.innerHTML === "Like") {

		 	like1.innerHTML = "Unlike";
		 	totalLikes1.innerHTML = "6 Likes"

		 } else {

		 	like1.innerHTML = "Like";
		 	totalLikes1.innerHTML = "5 Likes"
		 }

	});

	like2.addEventListener("click", function(){

		 if (like2.innerHTML === "Like") {

		 	like2.innerHTML = "Unlike";
		 	totalLikes2.innerHTML = "6 Likes"

		 } else {

		 	like2.innerHTML = "Like";
		 	totalLikes2.innerHTML = "5 Likes"
		 }

	});

});