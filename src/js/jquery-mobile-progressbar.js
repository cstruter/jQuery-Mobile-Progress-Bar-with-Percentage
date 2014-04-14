/*
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
(function ($, undefined) {
    $.widget("mobile.progressbar", {
        options: {
            outerTheme: null,
            innerTheme: null,
            mini: false,
            value: 0,
            max: 100,
            counter: true,
            indefinite: false,
			text: null
        },
        min: 0,
        _create: function () {
            var control = this.element,
                parentTheme = $.mobile.getInheritedTheme(control, "c"),
                outerTheme = this.options.outerTheme || parentTheme,
                innerTheme = this.options.indefinite ? "indefinite" : this.options.innerTheme || parentTheme,
                miniClass = this.options.mini ? " ui-jqm-progressbar-mini" : "",
                counter = this.options.counter;
            this.element.addClass(['ui-jqm-progressbar ', " ui-jqm-progressbar-outer-", outerTheme,
                ' ui-jqm-progressbar-corner-all', miniClass
            ].join(""))
                .attr({
                    role: "progressbar",
                    "min-value": this.min,
                    "max-value": this.options.max,
                    "content-value": this._value()
                });
            if (!this.options.indefinite) {
                this.labelContent = ($("<div></div>")
                    .addClass('ui-jqm-progressbar-label ui-jqm-progressbar-corner-all'))
                    .appendTo(this.element);
				if (this.options.counter) {
					this.labelContent.text(this._value());
				} else if (this.options.text != null) {
					this.labelContent.text(this.options.text);
				}
            }
            this.valueContent = ($("<div></div>")
                .addClass(['ui-jqm-progressbar-bg ', " ui-jqm-progressbar-active-", innerTheme,
                    ' ui-jqm-progressbar-corner-all'
                ].join("")))
                .appendTo(this.element);
            if (!this.options.indefinite) {
                this._refreshValue();
                this.oldValue = this._value();
            }
        },
        _destroy: function () {
            this.element.removeClass()
                .removeAttr("role")
                .removeAttr("min-value")
                .removeAttr("max-value")
                .removeAttr("content-value");
            if ((typeof this.labelContent !== "undefined")) {
                this.labelContent.remove();
            }
            this.valueContent.remove();
        },
        value: function (newValue) {
            if (newValue === undefined) {
                return this._value();
            }
            this._setOption("value", newValue);
            return this;
        },
        _setOption: function (key, value) {
			switch(key)
			{
				case "value":
					this.options.value = value;
					this._refreshValue();
					if (this._value() === this.options.max) {
						this.element.trigger("complete");
					}				
				break;
				case "innerTheme":
					this.options.innerTheme = value;
					this.valueContent.removeClass();
					this.valueContent.addClass(['ui-jqm-progressbar-bg ', " ui-jqm-progressbar-active-", value,
						' ui-jqm-progressbar-corner-all'
					].join(""));
				break;
				case "text":
					this.options.text = value;
					this.labelContent.text(value);
				break;
				default:
				break;
			}
        },
        _value: function () {
            var val = this.options.value;
            if (typeof val !== "number") {
                val = 0;
            }
            return Math.min(this.options.max, Math.max(this.min, val));
        },
        _percentage: function () {
            return 100 * this._value() / this.options.max;
        },
        _refreshValue: function () {
            var value = this.value();
            this.oldValue = value;
            this.valueContent.css("width", [this._percentage(), '%'].join(""));
			if (this.options.counter) {
				this.labelContent.text([this._percentage(), '%'].join(""));
            }
            this.element.attr("content-value", value);
        }
    });
})(jQuery);
