/**
 * Full-size input class
 */
UUI.FULL_INPUT = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//OPTIONAL: params.type
		//OPTIONAL: params.placeholder
		//OPTIONAL: params.value
		//OPTIONAL: params.capture
		//OPTIONAL: params.accept
		//OPTIONAL: params.style
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.isOffAutocomplete
		//OPTIONAL: params.on

		var
		// name
		name = params.name,

		// type
		type = params.type,

		// placeholder
		placeholder = params.placeholder,

		// capture
		capture = params.capture,

		// accept
		accept = params.accept,

		// value
		value = params.value,

		// input style
		inputStyle = params.inputStyle,
		
		// is off autocomplete
		isOffAutocomplete = params.isOffAutocomplete,

		// keydown delay
		keydownDelay,

		// wrapper
		wrapper,

		// input
		input,

		// get name.
		getName,

		// get value.
		getValue,

		// set value.
		setValue,

		// select.
		select,

		// focus.
		focus,

		// blur.
		blur,

		// add input style.
		addInputStyle,

		// on.
		on;

		wrapper = DIV({
			style : {
				padding : 5,
				backgroundColor : '#fff'
			},
			c : DIV({
				style : {
					position : 'relative'
				},
				c : [

				// span
				SPAN({
					style : {
						visibility : 'hidden'
					},
					c : '.'
				}),

				// input
				input = INPUT({
					style : {
						position : 'absolute',
						left : 0,
						top : 0,
						width : '100%',
						border : 'none',
						background : type === 'date' || type === 'datetime' || type === 'datetime-local' || type === 'month' || type === 'time' || type === 'week' ? undefined : 'transparent'
					},
					name : name,
					type : type,
					value : value,
					capture : capture,
					accept : accept,
					placeholder : placeholder,
					isOffAutocomplete : isOffAutocomplete
				})]
			}),
			on : {
				tap : function() {

					input.focus();

					EVENT.fireAll({
						node : self,
						name : 'focus'
					});
				}
			}
		});

		inner.setWrapperDom(wrapper);

		self.getName = getName = function() {
			return name;
		};

		self.getValue = getValue = function() {
			return input.getValue();
		};

		self.setValue = setValue = function(value) {
			//REQUIRED: value

			var
			// origin value
			originValue = input.getValue();

			input.setValue(value);

			if (originValue !== value) {

				EVENT.fireAll({
					node : self,
					name : 'change'
				});
			}
		};

		self.select = select = function() {

			input.select();

			EVENT.fireAll({
				node : self,
				name : 'select'
			});

			EVENT.fireAll({
				node : self,
				name : 'focus'
			});
		};

		self.focus = focus = function() {

			input.focus();

			EVENT.fireAll({
				node : self,
				name : 'focus'
			});
		};

		self.blur = blur = function() {

			input.blur();

			EVENT.fireAll({
				node : self,
				name : 'blur'
			});
		};

		self.addInputStyle = addInputStyle = function(style) {
			//REQUIRED: style

			input.addStyle(style);
		};

		if (inputStyle !== undefined) {
			addInputStyle(inputStyle);
		}

		self.on = on = function(eventName, eventHandler) {
			//REQUIRED: eventName
			//REQUIRED: eventHandler

			if (eventName === 'focus' || eventName === 'blur' || eventName === 'change' || eventName === 'keydown' || eventName === 'keypress' || eventName === 'keyup') {

				EVENT({
					node : self,
					lowNode : input,
					name : eventName
				}, eventHandler);

			} else {

				EVENT({
					node : self,
					lowNode : wrapper,
					name : eventName
				}, eventHandler);
			}
		};
	}
});
