/**
 * Full-size select class
 */
UUI.FULL_SELECT = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//OPTIONAL: params.value
		//REQUIRED: params.options
		//OPTIONAL: params.style
		//OPTIONAL: params.selectStyle

		var
		// name
		name = params.name,

		// value
		value = params.value,

		// options
		options = params.options,

		// select style
		selectStyle = params.selectStyle,

		// wrapper
		wrapper,

		// _select
		_select,

		// get name.
		getName,

		// get value.
		getValue,

		// set value.
		setValue,

		// select.
		select,

		// blur.
		blur,

		// add select style.
		addSelectStyle,

		// add option.
		addOption,

		// remove all options.
		removeAllOptions,

		// on.
		on;

		wrapper = DIV({
			style : {
				padding : 5,
				backgroundColor : '#fff',
				position : 'relative'
			},
			c : _select = SELECT({
				style : {
					width : '100%',
					border : 'none',
					background : 'transparent'
				},
				name : name,
				value : value,
				c : options
			})
		});

		inner.setWrapperDom(wrapper);

		self.getName = getName = function() {
			return name;
		};

		self.getValue = getValue = function() {
			return _select.getValue();
		};

		self.setValue = setValue = function(value) {
			//REQUIRED: value

			var
			// origin value
			originValue = _select.getValue();

			_select.setValue(value);

			if (originValue !== value) {

				EVENT.fireAll({
					node : self,
					name : 'change'
				});
			}
		};

		self.select = select = function() {
			_select.select();
		};

		self.blur = blur = function() {
			_select.blur();
		};

		self.addSelectStyle = addSelectStyle = function(style) {
			//REQUIRED: style

			_select.addStyle(style);
		};

		if (selectStyle !== undefined) {
			addSelectStyle(selectStyle);
		}

		self.addOption = addOption = function(option) {
			//REQUIRED: option

			_select.append(option);
		};

		self.removeAllOptions = removeAllOptions = function() {
			_select.empty();
		};

		self.on = on = function(eventName, eventHandler) {
			//REQUIRED: eventName
			//REQUIRED: eventHandler

			if (eventName === 'focus' || eventName === 'blur' || eventName === 'change' || eventName === 'select' || eventName === 'keydown' || eventName === 'keypress' || eventName === 'keyup') {

				EVENT({
					node : self,
					lowNode : _select,
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
