new window.JustValidate('#formFeedback', {
	rules: {
		feedbackUserName: {
			required: true,
			minLength: 2
		},
		feedbackUserEmail: {
			required: true,
			email: true
		},
		feedbackUserPhone: {
			required: true,
			phone: true,
			minLength: 10
		},
		feedbackUserMessage: {
			required: true,
			minLength: 5
		}
	},
	messages: {
		feedbackUserName: {
			required: 'Заполните данное поле',
			minLength: 'Данное поле должно содержать не менее 2 символов',
		},
		feedbackUserEmail: {
			required: 'Заполните данное поле',
			email: 'Проверьте адрес электронной почты'
		},
		feedbackUserPhone: {
			required: 'Заполните данное поле',
			phone: 'Проверьте номер телефона',
			minLength: 'Данное поле должно содержать не менее 10 символов'
		},
		feedbackUserMessage: {
			required: 'Заполните данное поле',
			minLength: 'Данное поле должно содержать не менее 5 символов',
		}
	},
	submitHandler: function (form, values, ajax) {
		ajax({
			url: 'https://just-validate-api.herokuapp.com/submit',
			method: 'POST',
			data: values,
			async: true,
			callback: function (response) {
				alert('AJAX submit successful\nОтвет сервера: ' + response)
			},
			error: function (response) {
				alert('AJAX submit error\nОтвет сервера: ' + response)
			}
		});
	},

});


