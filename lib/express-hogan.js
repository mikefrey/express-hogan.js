var hogan = require('hogan.js');

(function (expressHogan) {
	expressHogan.compile = function(source, options) {
		if (typeof source == 'string') {
			return function(options) {
				options.locals = options.locals || {};
				options.partials = options.partials || {};

				if (options.body) {
					options.locals.body = options.body;
				}

				var template = hogan.compile(source);
				return template;

				// for (var i in options.partials) {
				// 	if (typeof options.partials[i].r == 'function') continue;
				// 	options.partials[i] = hogan.compile(options.partials[i]);
				// }

				// return template.render(options.locals, options.partials);
			};
		} else {
			return source;
		}
	};

	expressHogan.render = function(source, options) {
		var template = expressHogan.compile(source, options);

		// for (var i in options.partials) {
		// 	if (typeof options.partials[i].r == 'function') continue;
		// 	options.partials[i] = hogan.compile(options.partials[i]);
		// }

		return template.render(options.locals, options.partials);
	};
})(typeof exports !== 'undefined' ? exports : expressHogan);
