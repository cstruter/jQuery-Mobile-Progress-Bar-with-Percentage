/**
	The jQuery Mobile Progress Bar with Percentage.
	@constructs
	@param {String} elementId - the id of the div element which will be shown as progress bar
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(true)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(50)
		.showCounter(true)
		.build();
*/
jQMProgressBar = function (elementId) {
	if (elementId === undefined) {
		throw '[Error]: id is undefined';
	}
	if (!(this instanceof jQMProgressBar)) {
		return new jQMProgressBar(elementId);
	}
	this._id = elementId;
	this._outerTheme = null;
	this._innerTheme = null;
	this._max = 100;
	this._startFrom = 0;
	this._interval = 100;
	this._isBuilt = false;
	this._mini = false;
	this._isRunning = false;
	this._indefinite = false;
	this._showCounter = true;
	return this;
};

/**
	Set the outer theme.
	@param {String} newTheme - the outer theme which must be 'a' or 'b' or 'c' or 'd' or 'e'
	@default based on inherit chain or 'c'
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(false)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(10)
		.showCounter(true)
		.build();
 */
jQMProgressBar.prototype.setOuterTheme = function (newTheme) {
	if (this._isBuilt) {
		throw '[Error]: pbar is already built.';
	} else {
		this._outerTheme = newTheme;
		return this;
	}
};

/**
	Set the inner theme.
	@param {String} newInnerTheme - the outer theme which must be 'a' or 'b' or 'c' or 'd' or 'e'
	@default based on inherit chain or 'c'
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(false)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(10)
		.showCounter(true)
		.build();
 */
jQMProgressBar.prototype.setInnerTheme = function (newInnerTheme) {
	if (this._isBuilt) {
		throw '[Error]: pbar is already built.';
	} else {
		this._innerTheme = newInnerTheme;
		return this;
	}
};

/**
	Set the initial value of the filling bar.
	@param {Number} newStartFrom - the initial value of the filling bar
	@default 0
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(false)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(10)
		.showCounter(true)
		.build();
 */
jQMProgressBar.prototype.setStartFrom = function (newStartFrom) {
	if (this._isBuilt) {
		throw '[Error]: pbar is already built.';
	} else {
		this._startFrom = newStartFrom;
		return this;
	}
};

/**
	Set the max value of the filling bar.
	@param {Number} newMax - the max value of the filling bar
	@default 100
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(false)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(10)
		.showCounter(true)
		.build();
 */
jQMProgressBar.prototype.setMax = function (newMax) {
	if (this._isBuilt) {
		throw '[Error]: pbar is already built.';
	} else {
		this._max = newMax;
		return this;
	}
};

/**
	Set whether the progress bar has mini size.
	@param {Boolean} newMini - true or false
	@default false
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(false)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(10)
		.showCounter(true)
		.build();
 */
jQMProgressBar.prototype.isMini = function (newMini) {
	if (this._isBuilt) {
		throw '[Error]: pbar is already built.';
	} else {
		this._mini = newMini;
		return this;
	}
};

/**
	Set whether the progress bar is indefinite.
	@param {Boolean} newIndefinite - true or false
	@default false
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.isIndefinite(true)
		.build();
 */
jQMProgressBar.prototype.isIndefinite = function (newIndefinite) {
	if (this._isBuilt) {
		throw '[Error]: pbar is already built.';
	} else {
		this._indefinite = newIndefinite;
		return this;
	}
};

/**
	Set whether a percentage completion counter appears.
	@param {Boolean} newShowCounter - true or false
	@default true
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(false)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(10)
		.showCounter(false)
		.build();
 */
jQMProgressBar.prototype.showCounter = function (newShowCounter) {
	if (this._isBuilt) {
		throw '[Error]: pbar is already built.';
	} else {
		this._showCounter = newShowCounter;
		return this;
	}
};

/**
	Set the loading frequency in milliseconds.
	@param {Number} newInterval - the loading frequency in milliseconds
	@default 100
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(false)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(10)
		.showCounter(true)
		.build();
 */
jQMProgressBar.prototype.setInterval = function (newInterval) {
	if (this._isBuilt) {
		throw '[Error]: pbar is already built.';
	} else {
		this._interval = newInterval;
		return this;
	}
};

/**
	Build the progress bar.
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(false)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(10)
		.showCounter(true)
		.build();
 */
jQMProgressBar.prototype.build = function () {
	if (this._isBuilt) {
		throw '[Error]: pbar is already built.';
	} else {
		$(['#', this._id].join(""))
			.progressbar({
				outerTheme: this._outerTheme,
				innerTheme: this._innerTheme,
				value: this._startFrom,
				max: this._max,
				mini: this._mini,
				indefinite: this._indefinite,
				counter: this._showCounter
			});
		this._isBuilt = true;
		return this;
	}
};

/**
	Starts or resumes the loading/filling procedure.
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(false)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(10)
		.showCounter(true)
		.build();

	pbar.run();
 */
jQMProgressBar.prototype.run = function () {
	if (this._isRunning) {
		throw '[Error]: pbar is already running.';
	} else if (this._indefinite) {
		throw '[Error]: pbar is indefinite.';
	} else {
		(function loop(instance) {
			instance.fillProgressBar = setTimeout((function (inst) {
				return function () {
					var thisValue = $(['#', inst._id].join(""))
						.progressbar('option', 'value'),
						counter = !isNaN(thisValue) ? (thisValue + 1) : 1;
					if (counter > inst._max) {
						clearTimeout(inst.fillProgressBar);
					} else {
						$(['#', inst._id].join(""))
							.progressbar({
								value: counter
							});
						loop.call(this, inst);
					}
				};
			})(instance), instance._interval);
		})(this);
		this._isRunning = true;
		return this;
	}
};

/**
	Stop the loading/filling procedure.
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(false)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(10)
		.showCounter(true)
		.build()
		.run();

	pbar.stop();
 */
jQMProgressBar.prototype.stop = function () {
	if (!this._isRunning) {
		throw '[Error]: pbar is already stopped.';
	} else {
		clearTimeout(this.fillProgressBar);
		this._isRunning = false;
		return this;
	}
};

/**
	Explicitly set the current loading/filling value.
	@param {Number} val - the current loading/filling value
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(false)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(10)
		.showCounter(true)
		.build();

	pbar.setValue(50);
 */
jQMProgressBar.prototype.setValue = function (val) {
	if (this._indefinite) {
		throw '[Error]: pbar is indefinite.';
	} else {
		$(['#', this._id].join(""))
			.progressbar({
				value: val
			});
		return this;
	}
};

/**
	Destroys the progress bar. Removes possible event handler attached to the document element.
	@example
	// create a progress bar
	var pbar = jQMProgressBar('progressbar')
		.setOuterTheme('b')
		.setInnerTheme('e')
		.isMini(false)
		.setMax(100)
		.setStartFrom(0)
		.setInterval(10)
		.showCounter(true)
		.build();

	pbar.destroy();
 */
jQMProgressBar.prototype.destroy = function () {
	if (!this._isBuilt) {
		throw '[Error]: pbar is not built yet.';
	} else {
		if (this.fillProgressBar) {
			clearTimeout(this.fillProgressBar);
		}
		$(document)
			.off('complete', ['#', this._id].join(""));
		$(['#', this._id].join(""))
			.progressbar('destroy');
		return null;
	}
};