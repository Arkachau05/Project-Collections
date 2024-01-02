let myText = document.getElementById("myText");
let wordCount = document.getElementById("wordCount");

myText.addEventListener("keyup",function(){
	var characters = myText.value.split('');
  	wordCount.innerText = characters.filter( item => {
		return (item != ' ');
	}).length;
});