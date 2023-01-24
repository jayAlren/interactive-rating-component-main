function selectedScores() {
	const gradeScores = document.querySelector('input[name="toggle-group"]:checked').value;

	localStorage.setItem("inputValue", gradeScores);
	
}
