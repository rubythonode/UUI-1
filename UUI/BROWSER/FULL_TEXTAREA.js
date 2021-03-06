/**
 * Full-size textarea class
 */
UUI.FULL_TEXTAREA = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//OPTIONAL: params.placeholder
		//OPTIONAL: params.value
		//OPTIONAL: params.style
		//OPTIONAL: params.textareaStyle
		//OPTIONAL: params.on

		var
		// name
		name = params.name,

		// placeholder
		placeholder = params.placeholder,

		// value
		value = params.value,

		// textarea style
		textareaStyle = params.textareaStyle,

		// wrapper
		wrapper,

		// textarea
		textarea,

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
		addTextareaStyle,

		// on.
		on;

		wrapper = DIV({
			style : {
				padding : 5,
				backgroundColor : '#fff',
				position : 'relative',
				height : 100
			},
			c : textarea = TEXTAREA({
				style : {
					width : '100%',
					height : '100%',
					backgroundColor : 'transparent',
					border : 'none'
				},
				name : name,
				placeholder : placeholder,
				value : value
			})
		});

		inner.setWrapperDom(wrapper);
		inner.setContentDom(textarea);

		self.getName = getName = function() {
			return name;
		};

		self.getValue = getValue = function() {
			return textarea.getValue();
		};

		self.setValue = setValue = function(value) {
			//REQUIRED: value

			var
			// origin value
			originValue = textarea.getValue();

			textarea.setValue(value);

			if (originValue !== value) {

				EVENT.fireAll({
					node : self,
					name : 'change'
				});
			}
		};

		self.select = select = function() {
			textarea.select();
		};

		self.focus = focus = function() {
			textarea.focus();
		};

		self.blur = blur = function() {
			textarea.blur();
		};

		self.addTextareaStyle = addTextareaStyle = function(style) {
			//REQUIRED: style

			textarea.addStyle(style);
		};

		if (textareaStyle !== undefined) {
			addTextareaStyle(textareaStyle);
		}

		self.on = on = function(eventName, eventHandler) {
			//REQUIRED: eventName
			//REQUIRED: eventHandler

			if (eventName === 'focus' || eventName === 'blur' || eventName === 'change' || eventName === 'keydown' || eventName === 'keypress' || eventName === 'keyup') {

				EVENT({
					node : self,
					lowNode : textarea,
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
