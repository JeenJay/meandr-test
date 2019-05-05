autosize(document.querySelectorAll('textarea'));

var feedbackFormInput = document.querySelectorAll('.field__text');
for (var i = 0; i < feedbackFormInput.length; i++) {
	feedbackFormInput[i].addEventListener('focus', function () {
		this.parentElement.classList.add('is-focused');
		this.select();
	});
	feedbackFormInput[i].addEventListener('blur', function () {
		this.parentElement.classList.remove('is-focused');
	});
}

// var textarea = document.getElementById("formFeedbackUserMessage");
// textarea.oninput = function () {
// 	textarea.style.height = "";
// 	textarea.style.height = Math.min(textarea.scrollHeight) + "px";
// };
