// anon function for capturing form view
// level one
(function(){
	// level two
	var FormView = (function(){
		// level three
		var initialize = function(){
			_setListeners();
			_hideObjects();
		}
		var _hideObjects =	function(){
			// level four
			$(".form_label").hide();

			$("#nope").hide();
			
			$("#step_one_done").hide();
			
			$("#step_two_done").hide();

			$("#submit_done").hide();
			
			$("#stepOne_link").hide();
		}	
		var _setListeners = function(){
			// leve four
			$("#nope_close").click(function(){
				$("#nope").hide();
			});	

			$("#stepTwo_link").click(function(){
				// level five
				_validateInput();
			});
		}
		var _validateInput = function(){
			// level four
			var firstName = $('#first_name').val()
			var lastName = $('#last_name').val()
			//alert('firstName =' + firstName + 'lastName =' + lastName)
			if (firstName.length > 0 && firstName.toLowerCase() != 'first name' && lastName.length > 0 && lastName.toLowerCase() != 'last name'){
				//alert('all good')
				$('.form_left').hide();
				NavView.change('two')
				DoneView.init(firstName, lastName)
			}
			else {
				$('#nope').show();
				}
		}
		return {init: initialize}
	}());
	
	var DoneView = (function(){
		// level three
		var firstName = null
		var lastName = null
		var initialize = function(fName, lName){
			firstName = fName
			lastName = lName
			$('#nope').hide();
			_renderElements()
			_setElemListeners()
			}
		var _renderElements = function(){
			$('#two_firstName').text('First Name: ' + firstName);
			$('#two_lastName').text('Last Name: ' + lastName);
			$('#submit_done').show();
			$('#stepOne_link').show();
		}
		var _setElemListeners = function(){
			// level four
			$("#stepOne_link").click(function(){
				NavView.change('one')
				//alert('hey')
				FormView.init();
			});	
		}
		return {init: initialize}
	}());
	
	var NavView = (function(){
		// level three
		var indicatorChange = function(num){
			var step = {
				'one': function(){
					// code for going back to step 1
					$('p#step_one').show();
					$('p#step_two').show();
					$('p#step_one_done').hide();
					$('p#step_two_done').hide();
					$('.form_left').show();
					$('#two_names').hide();
				},
				'two': function(){
					// alert('code for going to step 2')
					$('p#step_one').hide();
					$('p#step_two').hide();
					$('p#step_one_done').show();
					$('p#step_two_done').show();
					$('#two_names').show();
				}
			}
			step[num]()
		}
		return {change: indicatorChange}
	}());
	
	this.FormView = FormView }).call(this);

$(document).ready(function(){
	FormView.init()
});