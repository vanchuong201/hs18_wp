/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158; 
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/**
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Contributors: Mattia Larentis
 *
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 *
 * A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 *
 * License: MIT
 *
 * http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
;(function ($, window, undefined) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allDropdowns = $();

    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function (options) {
        // don't do anything if touch is supported
        // (plugin causes some issues on mobile)
        if('ontouchstart' in document) return this; // don't want to affect chaining

        // the element we really care about
        // is the dropdown-toggle's parent
        $allDropdowns = $allDropdowns.add(this.parent());

        return this.each(function () {
            var $this = $(this),
                $parent = $this.parent(),
                defaults = {
                    delay: 500,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                showEvent   = 'show.bs.dropdown',
                hideEvent   = 'hide.bs.dropdown',
            // shownEvent  = 'shown.bs.dropdown',
            // hiddenEvent = 'hidden.bs.dropdown',
                settings = $.extend(true, {}, defaults, options, data),
                timeout;

            $parent.hover(function (event) {
                // so a neighbor can't open the dropdown
                if(!$parent.hasClass('open') && !$this.is(event.target)) {
                    // stop this event, stop executing any code 
                    // in this callback but continue to propagate
                    return true;
                }

                $allDropdowns.find(':focus').blur();

                if(settings.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');

                window.clearTimeout(timeout);
                $parent.addClass('open');
                $this.trigger(showEvent);
            }, function () {
                timeout = window.setTimeout(function () {
                    $parent.removeClass('open');
                    $this.trigger(hideEvent);
                    //}, settings.delay);
                }, 200);
            });

            // this helps with button groups!
            $this.hover(function () {
                $allDropdowns.find(':focus').blur();

                if(settings.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');

                window.clearTimeout(timeout);
                $parent.addClass('open');
                $this.trigger(showEvent);
            });

            // handle submenus
            $parent.find('.dropdown-submenu').each(function (){
                var $this = $(this);
                var subTimeout;
                $this.hover(function () {
                    window.clearTimeout(subTimeout);
                    $this.children('.dropdown-menu').show();
                    // always close submenu siblings instantly
                    $this.siblings().children('.dropdown-menu').hide();
                }, function () {
                    var $submenu = $this.children('.dropdown-menu');
                    subTimeout = window.setTimeout(function () {
                        $submenu.hide();
                    }, settings.delay);
                });
            });
        });
    };

    $(document).ready(function () {
        // apply dropdownHover to all elements with the data-hover="dropdown" attribute
        $('[data-hover="dropdown"]').dropdownHover();
    });
})(jQuery, this);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {},

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;

        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');

            if (key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));

/**
 * Owl Carousel v2.1.4
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
/**
 * Owl carousel
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

    /**
     * Creates a carousel.
     * @class The Owl Carousel.
     * @public
     * @param {HTMLElement|jQuery} element - The element to create the carousel for.
     * @param {Object} [options] - The options
     */
    function Owl(element, options) {

        /**
         * Current settings for the carousel.
         * @public
         */
        this.settings = null;

        /**
         * Current options set by the caller including defaults.
         * @public
         */
        this.options = $.extend({}, Owl.Defaults, options);

        /**
         * Plugin element.
         * @public
         */
        this.$element = $(element);

        /**
         * Proxied event handlers.
         * @protected
         */
        this._handlers = {};

        /**
         * References to the running plugins of this carousel.
         * @protected
         */
        this._plugins = {};

        /**
         * Currently suppressed events to prevent them from beeing retriggered.
         * @protected
         */
        this._supress = {};

        /**
         * Absolute current position.
         * @protected
         */
        this._current = null;

        /**
         * Animation speed in milliseconds.
         * @protected
         */
        this._speed = null;

        /**
         * Coordinates of all items in pixel.
         * @todo The name of this member is missleading.
         * @protected
         */
        this._coordinates = [];

        /**
         * Current breakpoint.
         * @todo Real media queries would be nice.
         * @protected
         */
        this._breakpoint = null;

        /**
         * Current width of the plugin element.
         */
        this._width = null;

        /**
         * All real items.
         * @protected
         */
        this._items = [];

        /**
         * All cloned items.
         * @protected
         */
        this._clones = [];

        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         * @protected
         */
        this._mergers = [];

        /**
         * Widths of all items.
         */
        this._widths = [];

        /**
         * Invalidated parts within the update process.
         * @protected
         */
        this._invalidated = {};

        /**
         * Ordered list of workers for the update process.
         * @protected
         */
        this._pipe = [];

        /**
         * Current state information for the drag operation.
         * @todo #261
         * @protected
         */
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };

        /**
         * Current state information and their tags.
         * @type {Object}
         * @protected
         */
        this._states = {
            current: {},
            tags: {
                'initializing': [ 'busy' ],
                'animating': [ 'busy' ],
                'dragging': [ 'interacting' ]
            }
        };

        $.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this);
        }, this));

        $.each(Owl.Plugins, $.proxy(function(key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
                = new plugin(this);
        }, this));

        $.each(Owl.Workers, $.proxy(function(priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));

        this.setup();
        this.initialize();
    }

    /**
     * Default options for the carousel.
     * @public
     */

    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,

        startPosition: 0,
        rtl: false,

        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,

        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,

        fallbackEasing: 'swing',

        info: false,

        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',

        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab'
    };

    /**
     * Enumeration for width.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };

    /**
     * Enumeration for types.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Type = {
        Event: 'event',
        State: 'state'
    };

    /**
     * Contains all registered plugins.
     * @public
     */
    Owl.Plugins = {};

    /**
     * List of workers involved in the update process.
     */
    Owl.Workers = [ {
        filter: [ 'width', 'settings' ],
        run: function() {
            this._width = this.$element.width();
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: [ 'items', 'settings' ],
        run: function() {
            this.$stage.children('.cloned').remove();
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            var margin = this.settings.margin || '',
                grid = !this.settings.autoWidth,
                rtl = this.settings.rtl,
                css = {
                    'width': 'auto',
                    'margin-left': rtl ? margin : '',
                    'margin-right': rtl ? '' : margin
                };
            !grid && this.$stage.children().css(css);
            cache.css = css;
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                merge = null,
                iterator = this._items.length,
                grid = !this.settings.autoWidth,
                widths = [];
            cache.items = {
                merge: false,
                width: width
            };

            while (iterator--) {
                merge = this._mergers[iterator];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
                cache.items.merge = merge > 1 || cache.items.merge;
                widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
            }

            this._widths = widths;
        }
    }, {
        filter: [ 'items', 'settings' ],
        run: function() {
            var clones = [],
                items = this._items,
                settings = this.settings,
                view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2,
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                append = '',
                prepend = '';
            repeat /= 2;

            while (repeat--) {
                clones.push(this.normalize(clones.length / 2, true));
                append = append + items[clones[clones.length - 1]][0].outerHTML;
                clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
            }

            this._clones = clones;

            $(append).addClass('cloned').appendTo(this.$stage);
            $(prepend).addClass('cloned').prependTo(this.$stage);
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                size = this._clones.length + this._items.length,
                iterator = -1,
                previous = 0,
                current = 0,
                coordinates = [];

            while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = this._widths[this.relative(iterator)] + this.settings.margin;
                coordinates.push(previous + current * rtl);
            }

            this._coordinates = coordinates;
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function() {
            var padding = this.settings.stagePadding,
                coordinates = this._coordinates,
                css = {
                    'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                    'padding-left': padding || '',
                    'padding-right': padding || ''
                };

            this.$stage.css(css);
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            var iterator = this._coordinates.length,
                grid = !this.settings.autoWidth,
                items = this.$stage.children();
            if (grid && cache.items.merge) {
                while (iterator--) {
                    cache.css.width = this._widths[this.relative(iterator)];
                    items.eq(iterator).css(cache.css);
                }
            } else if (grid) {
                cache.css.width = cache.items.width;
                items.css(cache.css);
            }
        }
    }, {
        filter: [ 'items' ],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr('style');
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current);
        }
    }, {
        filter: [ 'position' ],
        run: function() {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: [ 'width', 'position', 'items', 'settings' ],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [], i, n;

            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;
                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
                    || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i);
                }
            }

            this.$stage.children('.active').removeClass('active');
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

            if (this.settings.center) {
                this.$stage.children('.center').removeClass('center');
                this.$stage.children().eq(this.current()).addClass('center');
            }
        }
    } ];

    /**
     * Initializes the carousel.
     * @protected
     */
    Owl.prototype.initialize = function() {
        this.enter('initializing');
        this.trigger('initialize');
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
        if (this.settings.autoWidth && !this.is('pre-loading')) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();
            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
            }
        }

        this.$element.addClass(this.options.loadingClass);
        // create stage
        this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
            .wrap('<div class="' + this.settings.stageOuterClass + '"/>');

        // append stage
        this.$element.append(this.$stage.parent());

        // append content
        this.replace(this.$element.children().not(this.$stage.parent()));

        // check visibility
        if (this.$element.is(':visible')) {
            // update view
            this.refresh();
        } else {
            // invalidate width
            this.invalidate('width');
        }

        this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);

        // register event handlers
        this.registerEventHandlers();
        this.leave('initializing');
        this.trigger('initialized');
    };

    /**
     * Setups the current settings.
     * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
     * @todo Support for media queries by using `matchMedia` would be nice.
     * @public
     */
    Owl.prototype.setup = function() {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;

        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function(breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });

            settings = $.extend({}, this.options, overwrites[match]);

            delete settings.responsive;

            // responsive class
            if (settings.responsiveClass) {
                this.$element.attr('class',
                    this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
                );
            }
        }

        if (this.settings === null || this._breakpoint !== match) {
            this.trigger('change', { property: { name: 'settings', value: settings } });
            this._breakpoint = match;
            this.settings = settings;
            this.invalidate('settings');
            this.trigger('changed', { property: { name: 'settings', value: this.settings } });
        }
    };

    /**
     * Updates option logic if necessery.
     * @protected
     */
    Owl.prototype.optionsLogic = function() {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };

    /**
     * Prepares an item before add.
     * @todo Rename event parameter `content` to `item`.
     * @protected
     * @returns {jQuery|HTMLElement} - The item container.
     */
    Owl.prototype.prepare = function(item) {
        var event = this.trigger('prepare', { content: item });

        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>')
                .addClass(this.options.itemClass).append(item)
        }
        this.trigger('prepared', { content: event.data });
        return event.data;
    };

    /**
     * Updates the view.
     * @public
     */
    Owl.prototype.update = function() {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function(p) { return this[p] }, this._invalidated),
            cache = {};

        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }

        this._invalidated = {};
        !this.is('valid') && this.enter('valid');
    };

    /**
     * Gets the width of the view.
     * @public
     * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
     * @returns {Number} - The width of the view in pixel.
     */
    Owl.prototype.width = function(dimension) {
        dimension = dimension || Owl.Width.Default;

        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };

    /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @public
     */
    Owl.prototype.refresh = function() {
        this.enter('refreshing');
        this.trigger('refresh');
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave('refreshing');
        this.trigger('refreshed');
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onThrottledResize = function() {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onResize = function() {

        if (!this._items.length) {
            return false;
        }

        if (this._width === this.$element.width()) {
            return false;
        }

        if (!this.$element.is(':visible')) {
            return false;
        }

        this.enter('resizing');

        if (this.trigger('resize').isDefaultPrevented()) {
            this.leave('resizing');
            return false;
        }

        this.invalidate('width');
        this.refresh();
        this.leave('resizing');
        this.trigger('resized');
    };

    /**
     * Registers event handlers.
     * @todo Check `msPointerEnabled`
     * @todo #261
     * @protected
     */
    Owl.prototype.registerEventHandlers = function() {

        if ($.support.transition) {
            this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
        }

        if (this.settings.responsive !== false) {
            this.on(window, 'resize', this._handlers.onThrottledResize);
        }

        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
        }

        if (this.settings.touchDrag){
            this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
        }
    };

    /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragStart = function(event) {

        var stage = null;

        if (event.which === 3) {
            return;
        }

        if ($.support.transform) {
            stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5]
            };
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl ?
                    stage.left + this.$stage.width() - this.width() + this.settings.margin :
                    stage.left,
                y: stage.top
            };
        }

        if (this.is('animating')) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop()
            this.invalidate('position');
        }

        this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
        this.speed(0);
        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);

        $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
        $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));
            $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                return;
            }

            event.preventDefault();
            this.enter('dragging');
            this.trigger('drag');
        }, this));
    };

    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragMove = function(event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);
        if (!this.is('dragging')) {
            return;
        }

        event.preventDefault();
        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
        } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }
        this._drag.stage.current = stage;
        this.animate(stage.x);
    };

    /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragEnd = function(event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

        $(document).off('.owl.core');

        this.$element.removeClass(this.options.grabClass);
        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate('position');
            this.update();
            this._drag.direction = direction;

            if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                this._drag.target.one('click.owl.core', function() { return false; });
            }
        }

        if (!this.is('dragging')) {
            return;
        }

        this.leave('dragging');
        this.trigger('dragged');
    };

    /**
     * Gets absolute position of the closest item for a coordinate.
     * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @protected
     * @param {Number} coordinate - The coordinate in pixel.
     * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
     * @return {Number} - The absolute position of the closest item.
     */
    Owl.prototype.closest = function(coordinate, direction) {

        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();

        if (!this.settings.freeDrag) {
            // check closest item
            $.each(coordinates, $.proxy(function(index, value) {
                // on a left pull, check on current index
                if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                    // on a right pull, check on previous index
                    // to do so, subtract width from value and set position = index + 1
                } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                    position = index + 1;
                } else if (this.op(coordinate, '<', value)
                    && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                    position = direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }

        if (!this.settings.loop) {
            // non loop boundries
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }

        return position;
    };

    /**
     * Animates the stage.
     * @todo #270
     * @public
     * @param {Number} coordinate - The coordinate in pixels.
     */
    Owl.prototype.animate = function(coordinate) {

        var animate = this.speed() > 0;

        this.is('animating') && this.onTransitionEnd();
        if (animate) {
            this.enter('animating');
            this.trigger('translate');
        }

        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                transition: (this.speed() / 1000) + 's'
            });
        } else if (animate) {
            this.$stage.animate({
                left: coordinate + 'px'
            }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
        } else {
            this.$stage.css({
                left: coordinate + 'px'
            });
        }
    };

    /**
     * Checks whether the carousel is in a specific state or not.
     * @param {String} state - The state to check.
     * @returns {Boolean} - The flag which indicates if the carousel is busy.
     */

    Owl.prototype.is = function(state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };

    /**
     * Sets the absolute position of the current item.
     * @public
     * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
     * @returns {Number} - The absolute position of the current item.
     */
    Owl.prototype.current = function(position) {

        if (position === undefined) {
            return this._current;
        }

        if (this._items.length === 0) {
            return undefined;
        }

        position = this.normalize(position);

        if (this._current !== position) {
            var event = this.trigger('change', { property: { name: 'position', value: position } });
            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }
            this._current = position;
            this.invalidate('position');
            this.trigger('changed', { property: { name: 'position', value: this._current } });
        }

        return this._current;
    };

    /**
     * Invalidates the given part of the update routine.
     * @param {String} [part] - The part to invalidate.
     * @returns {Array.<String>} - The invalidated parts.
     */
    Owl.prototype.invalidate = function(part) {

        if ($.type(part) === 'string') {
            this._invalidated[part] = true;
            this.is('valid') && this.leave('valid');
        }

        return $.map(this._invalidated, function(v, i) { return i });
    };

    /**
     * Resets the absolute position of the current item.
     * @public
     * @param {Number} position - The absolute position of the new item.
     */
    Owl.prototype.reset = function(position) {
        position = this.normalize(position);
        if (position === undefined) {
            return;
        }

        this._speed = 0;
        this._current = position;
        this.suppress([ 'translate', 'translated' ]);
        this.animate(this.coordinates(position));
        this.release([ 'translate', 'translated' ]);
    };

    /**
     * Normalizes an absolute or a relative position of an item.
     * @public
     * @param {Number} position - The absolute or relative position to normalize.
     * @param {Boolean} [relative=false] - Whether the given position is relative or not.
     * @returns {Number} - The normalized position.
     */
    Owl.prototype.normalize = function(position, relative) {

        var n = this._items.length,
            m = relative ? 0 : this._clones.length;

        if (!this.isNumeric(position) || n < 1) {
            position = undefined;
        } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }

        return position;
    };

    /**
     * Converts an absolute position of an item into a relative one.
     * @public
     * @param {Number} position - The absolute position to convert.
     * @returns {Number} - The converted position.
     */
    Owl.prototype.relative = function(position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };

    /**
     * Gets the maximum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.maximum = function(relative) {

        var settings = this.settings,
            maximum = this._coordinates.length,
            boundary = Math.abs(this._coordinates[maximum - 1]) - this._width,
            i = -1, j;

        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
            // binary search
            while (maximum - i > 1) {
                Math.abs(this._coordinates[j = maximum + i >> 1]) < boundary
                    ? i = j : maximum = j;
            }
        } else if (settings.center) {
            maximum = this._items.length - 1;
        } else {
            maximum = this._items.length - settings.items;
        }

        if (relative) {
            maximum -= this._clones.length / 2;
        }

        return Math.max(maximum, 0);
    };

    /**
     * Gets the minimum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.minimum = function(relative) {
        return relative ? 0 : this._clones.length / 2;
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.items = function(position) {
        if (position === undefined) {
            return this._items.slice();
        }

        position = this.normalize(position, true);
        return this._items[position];
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.mergers = function(position) {
        if (position === undefined) {
            return this._mergers.slice();
        }

        position = this.normalize(position, true);
        return this._mergers[position];
    };

    /**
     * Gets the absolute positions of clones for an item.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
     */
    Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

        if (position === undefined) {
            return $.map(this._clones, function(v, i) { return map(i) });
        }

        return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
    };

    /**
     * Sets the current animation speed.
     * @public
     * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
     * @returns {Number} - The current animation speed in milliseconds.
     */
    Owl.prototype.speed = function(speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }

        return this._speed;
    };

    /**
     * Gets the coordinate of an item.
     * @todo The name of this method is missleanding.
     * @public
     * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
     * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
     */
    Owl.prototype.coordinates = function(position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;

        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                return this.coordinates(index);
            }, this));
        }

        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        } else {
            coordinate = this._coordinates[newPosition] || 0;
        }

        coordinate = Math.ceil(coordinate);
        return coordinate;
    };

    /**
     * Calculates the speed for a translation.
     * @protected
     * @param {Number} from - The absolute position of the start item.
     * @param {Number} to - The absolute position of the target item.
     * @param {Number} [factor=undefined] - The time factor in milliseconds.
     * @returns {Number} - The time in milliseconds for the translation.
     */
    Owl.prototype.duration = function(from, to, factor) {
        if (factor === 0) {
            return 0;
        }
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };

    /**
     * Slides to the specified item.
     * @public
     * @param {Number} position - The position of the item.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.to = function(position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();

        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }

            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;

            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current);
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        } else {
            position = Math.max(minimum, Math.min(maximum, position));
        }

        this.speed(this.duration(current, position, speed));
        this.current(position);
        if (this.$element.is(':visible')) {
            this.update();
        }
    };

    /**
     * Slides to the next item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.next = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };

    /**
     * Slides to the previous item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.prev = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };

    /**
     * Handles the end of an animation.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onTransitionEnd = function(event) {
        // if css2 animation then event object is undefined
        if (event !== undefined) {
            event.stopPropagation();
            // Catch only owl-stage transitionEnd event
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }

        this.leave('animating');
        this.trigger('translated');
    };

    /**
     * Gets viewport width.
     * @protected
     * @return {Number} - The width in pixel.
     */
    Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            throw 'Can not detect viewport width.';
        }

        return width;
    };

    /**
     * Replaces the current content.
     * @public
     * @param {HTMLElement|jQuery|String} content - The new content.
     */
    Owl.prototype.replace = function(content) {
        this.$stage.empty();
        this._items = [];
        if (content) {
            content = (content instanceof jQuery) ? content : $(content);
        }

        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }

        content.filter(function() {
            return this.nodeType === 1;
        }).each($.proxy(function(index, item) {
                item = this.prepare(item);
                this.$stage.append(item);
                this._items.push(item);
                this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
            }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate('items');
    };

    /**
     * Adds an item.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {HTMLElement|jQuery|String} content - The item content to add.
     * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
     */
    Owl.prototype.add = function(content, position) {
        var current = this.relative(this._current);
        position = position === undefined ? this._items.length : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);
        this.trigger('add', { content: content, position: position });
        content = this.prepare(content);
        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }

        this._items[current] && this.reset(this._items[current].index());
        this.invalidate('items');
        this.trigger('added', { content: content, position: position });
    };

    /**
     * Removes an item by its position.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {Number} position - The relative position of the item to remove.
     */
    Owl.prototype.remove = function(position) {
        position = this.normalize(position, true);
        if (position === undefined) {
            return;
        }

        this.trigger('remove', { content: this._items[position], position: position });
        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);
        this.invalidate('items');
        this.trigger('removed', { content: null, position: position });
    };

    /**
     * Preloads images with auto width.
     * @todo Replace by a more generic approach
     * @protected
     */
    Owl.prototype.preloadAutoWidthImages = function(images) {
        images.each($.proxy(function(i, element) {
            this.enter('pre-loading');
            element = $(element);
            $(new Image()).one('load', $.proxy(function(e) {
                element.attr('src', e.target.src);
                element.css('opacity', 1);
                this.leave('pre-loading');
                !this.is('pre-loading') && !this.is('initializing') && this.refresh();
            }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
        }, this));
    };

    /**
     * Destroys the carousel.
     * @public
     */
    Owl.prototype.destroy = function() {
        this.$element.off('.owl.core');
        this.$stage.off('.owl.core');
        $(document).off('.owl.core');
        if (this.settings.responsive !== false) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, 'resize', this._handlers.onThrottledResize);
        }

        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }

        this.$stage.children('.cloned').remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
            .removeData('owl.carousel');
    };

    /**
     * Operators to calculate right-to-left and left-to-right.
     * @protected
     * @param {Number} [a] - The left side operand.
     * @param {String} [o] - The operator.
     * @param {Number} [b] - The right side operand.
     */
    Owl.prototype.op = function(a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };

    /**
     * Attaches to an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The event handler to attach.
     * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
     */
    Owl.prototype.on = function(element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };

    /**
     * Detaches from an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The attached event handler to detach.
     * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
     */
    Owl.prototype.off = function(element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };

    /**
     * Triggers a public event.
     * @todo Remove `status`, `relatedTarget` should be used instead.
     * @protected
     * @param {String} name - The event name.
     * @param {*} [data=null] - The event data.
     * @param {String} [namespace=carousel] - The event namespace.
     * @param {String} [state] - The state which is associated with the event.
     * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
     * @returns {Event} - The event arguments.
     */
    Owl.prototype.trigger = function(name, data, namespace, state, enter) {
        var status = {
            item: { count: this._items.length, index: this.current() }
        }, handler = $.camelCase(
            $.grep([ 'on', name, namespace ], function(v) { return v })
                .join('-').toLowerCase()
        ), event = $.Event(
            [ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
            $.extend({ relatedTarget: this }, status, data)
        );

        if (!this._supress[name]) {
            $.each(this._plugins, function(name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });
            this.register({ type: Owl.Type.Event, name: name });
            this.$element.trigger(event);
            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].call(this, event);
            }
        }

        return event;
    };

    /**
     * Enters a state.
     * @param name - The state name.
     */
    Owl.prototype.enter = function(name) {
        $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            if (this._states.current[name] === undefined) {
                this._states.current[name] = 0;
            }
            this._states.current[name]++;
        }, this));
    };

    /**
     * Leaves a state.
     * @param name - The state name.
     */
    Owl.prototype.leave = function(name) {
        $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            this._states.current[name]--;
        }, this));
    };

    /**
     * Registers an event or state.
     * @public
     * @param {Object} object - The event or state to register.
     */
    Owl.prototype.register = function(object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {};
            }

            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function(e) {
                    if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                        return _default.apply(this, arguments);
                    }

                    return e.namespace && e.namespace.indexOf('owl') > -1;
                };

                $.event.special[object.name].owl = true;
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }
            this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
                return $.inArray(tag, this._states.tags[object.name]) === i;
            }, this));
        }
    };

    /**
     * Suppresses events.
     * @protected
     * @param {Array.<String>} events - The events to suppress.
     */
    Owl.prototype.suppress = function(events) {
        $.each(events, $.proxy(function(index, event) {
            this._supress[event] = true;
        }, this));
    };

    /**
     * Releases suppressed events.
     * @protected
     * @param {Array.<String>} events - The events to release.
     */
    Owl.prototype.release = function(events) {
        $.each(events, $.proxy(function(index, event) {
            delete this._supress[event];
        }, this));
    };

    /**
     * Gets unified pointer coordinates from event.
     * @todo #261
     * @protected
     * @param {Event} - The `mousedown` or `touchstart` event.
     * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
     */
    Owl.prototype.pointer = function(event) {
        var result = { x: null, y: null };
        event = event.originalEvent || event || window.event;
        event = event.touches && event.touches.length ?
            event.touches[0] : event.changedTouches && event.changedTouches.length ?
            event.changedTouches[0] : event;
        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        } else {
            result.x = event.clientX;
            result.y = event.clientY;
        }

        return result;
    };

    /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @protected
     * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
     * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
     */
    Owl.prototype.isNumeric = function(number) {
        return !isNaN(parseFloat(number));
    };

    /**
     * Gets the difference of two vectors.
     * @todo #261
     * @protected
     * @param {Object} - The first vector.
     * @param {Object} - The second vector.
     * @returns {Object} - The difference.
     */
    Owl.prototype.difference = function(first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    };

    /**
     * The jQuery Plugin for the Owl Carousel
     * @todo Navigation plugin `next` and `prev`
     * @public
     */
    $.fn.owlCarousel = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this),
                data = $this.data('owl.carousel');
            if (!data) {
                data = new Owl(this, typeof option == 'object' && option);
                $this.data('owl.carousel', data);
                $.each([
                    'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
                ], function(i, event) {
                    data.register({ type: Owl.Type.Event, name: event });
                    data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
                        if (e.namespace && e.relatedTarget !== this) {
                            this.suppress([ event ]);
                            data[event].apply(this, [].slice.call(arguments, 1));
                            this.release([ event ]);
                        }
                    }, data));
                });
            }

            if (typeof option == 'string' && option.charAt(0) !== '_') {
                data[option].apply(data, args);
            }
        });
    };

    /**
     * The constructor for the jQuery Plugin
     * @public
     */
    $.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */

;(function($, window, document, undefined) {

    /**
     * Creates the auto refresh plugin.
     * @class The Auto Refresh Plugin
     * @param {Owl} carousel - The Owl Carousel
     */

    var AutoRefresh = function(carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Refresh interval.
         * @protected
         * @type {number}
         */
        this._interval = null;

        /**
         * Whether the element is currently visible or not.
         * @protected
         * @type {Boolean}
         */
        this._visible = null;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500
    };

    /**
     * Watches the element.
     */
    AutoRefresh.prototype.watch = function() {

        if (this._interval) {
            return;
        }

        this._visible = this._core.$element.is(':visible');
        this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    };

    /**
     * Refreshes the element.
     */
    AutoRefresh.prototype.refresh = function() {
        if (this._core.$element.is(':visible') === this._visible) {
            return;
        }

        this._visible = !this._visible;
        this._core.$element.toggleClass('owl-hidden', !this._visible);
        this._visible && (this._core.invalidate('width') && this._core.refresh());
    };

    /**
     * Destroys the plugin.
     */
    AutoRefresh.prototype.destroy = function() {
        var handler, property;
        window.clearInterval(this._interval);
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }

        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */

;(function($, window, document, undefined) {

    /**
     * Creates the lazy plugin.
     * @class The Lazy Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Lazy = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Already loaded items.
         * @protected
         * @type {Array.<jQuery>}
         */
        this._loaded = [];

        /**
         * Event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }

                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }

                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function(i, v) { this.load(v) }, this);

                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position)), load);
                        position++;
                    }
                }
            }, this)
        };

        // set the default options
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

        // register event handler
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    Lazy.Defaults = {
        lazyLoad: false
    };

    /**
     * Loads all resources of an item at the specified position.
     * @param {Number} position - The absolute position of the item.
     * @protected
     */
    Lazy.prototype.load = function(position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');

        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }

        $elements.each($.proxy(function(index, element) {
            var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');
            this._core.trigger('load', { element: $element, url: url }, 'lazy');
            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('src', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function() {
                    $element.css({
                        'background-image': 'url(' + url + ')',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));
        this._loaded.push($item.get(0));
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Lazy.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }

        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */

;(function($, window, document, undefined) {

    /**
     * Creates the auto height plugin.
     * @class The Auto Height Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoHeight = function(carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight
                    && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };

    /**
     * Updates the view.
     */
    AutoHeight.prototype.update = function() {
        var start = this._core._current,
            end = start + this._core.settings.items,
            visible = this._core.$stage.children().toArray().slice(start, end),
            heights = [],
            maxheight = 0;

        $.each(visible, function(index, item) {
            heights.push($(item).height());
        });

        maxheight = Math.max.apply(null, heights);

        this._core.$stage.parent()
            .height(maxheight)
            .addClass(this._core.settings.autoHeightClass);
    };

    AutoHeight.prototype.destroy = function() {
        var handler, property;
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }

        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the video plugin.
     * @class The Video Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Video = function(carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Cache all video URLs.
         * @protected
         * @type {Object}
         */
        this._videos = {};

        /**
         * Current playing item.
         * @protected
         * @type {jQuery}
         */
        this._playing = null;

        /**
         * All event handlers.
         * @todo The cloned content removale is too late
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
                }
            }, this),

            'resize.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),

            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.is('resizing')) {
                    this._core.$stage.find('.cloned .owl-video-frame').remove();
                }
            }, this),

            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position' && this._playing) {
                    this.stop();
                }
            }, this),

            'prepared.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }

                var $element = $(e.content).find('.owl-video');

                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Video.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);

        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
            this.play(e);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };

    /**
     * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {jQuery} item - The item containing the video.
     */
    Video.prototype.fetch = function(target, item) {
        var type = (function() {
                if (target.attr('data-vimeo-id')) {
                    return 'vimeo';
                } else if (target.attr('data-vzaar-id')) {
                    return 'vzaar'
                } else {
                    return 'youtube';
                }
            })(),

            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight,
            url = target.attr('href');
        if (url) {
            /*
             Parses the id's out of the following urls (and probably more):
             https://www.youtube.com/watch?v=:id
             https://youtu.be/:id
             https://vimeo.com/:id
             https://vimeo.com/channels/:channel/:id
             https://vimeo.com/groups/:group/videos/:id
             https://app.vzaar.com/videos/:id
             Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
             */

            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else if (id[3].indexOf('vzaar') > -1) {
                type = 'vzaar';
            } else {
                throw new Error('Video URL not supported.');
            }

            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }

        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };

        item.attr('data-video', url);
        this.thumbnail(target, this._videos[url]);
    };

    /**
     * Creates video thumbnail.
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {Object} info - The video info object.
     * @see `fetch`
     */
    Video.prototype.thumbnail = function(target, video) {
        var tnLink,
            icon,
            path,
            dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,

            create = function(path) {
                icon = '<div class="owl-video-play-icon"></div>';
                if (settings.lazyLoad) {
                    tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
                } else {
                    tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
                }

                target.after(tnLink);
                target.after(icon);
            };

        // wrap video content into owl-video-wrapper div
        target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }

        // custom thumbnail
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }

        if (video.type === 'youtube') {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        } else if (video.type === 'vzaar') {
            $.ajax({
                type: 'GET',
                url: '//vzaar.com/api/videos/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data.framegrab_url;
                    create(path);
                }
            });
        }
    };

    /**
     * Stops the current video.
     * @public
     */
    Video.prototype.stop = function() {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
        this._core.leave('playing');
        this._core.trigger('stopped', null, 'video');
    };

    /**
     * Starts the current video.
     * @public
     * @param {Event} event - The event arguments.
     */
    Video.prototype.play = function(event) {
        var target = $(event.target),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html;

        if (this._playing) {
            return;
        }

        this._core.enter('playing');
        this._core.trigger('play', null, 'video');
        item = this._core.items(this._core.relative(item.index()));
        this._core.reset(item.index());

        if (video.type === 'youtube') {
            html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
                video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
        } else if (video.type === 'vimeo') {
            html = '<iframe src="//player.vimeo.com/video/' + video.id +
                '?autoplay=1" width="' + width + '" height="' + height +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        } else if (video.type === 'vzaar') {
            html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
                'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
        }

        $('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));
        this._playing = item.addClass('owl-video-playing');
    };

    /**
     * Checks whether an video is currently in full screen mode or not.
     * @todo Bad style because looks like a readonly method but changes members.
     * @protected
     * @returns {Boolean}
     */
    Video.prototype.isInFullScreen = function() {
        var element = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement;
        return element && $(element).parent().hasClass('owl-video-frame');
    };

    /**
     * Destroys the plugin.
     */
    Video.prototype.destroy = function() {
        var handler, property;
        this._core.$element.off('click.owl.video');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }

        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the animate plugin.
     * @class The Navigation Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Animate = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;

        this.handlers = {
            'change.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this.swapping = e.type == 'translated';
                }
            }, this),
            'translate.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };

        this.core.$element.on(this.handlers);
    };

    /**
     * Default options.
     * @public
     */
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };

    /**
     * Toggles the animation classes whenever an translations starts.
     * @protected
     * @returns {Boolean|undefined}
     */
    Animate.prototype.swap = function() {
        if (this.core.settings.items !== 1) {
            return;
        }

        if (!$.support.animation || !$.support.transition) {
            return;
        }

        this.core.speed(0);

        var left,
            clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;
        if (this.core.current() === this.previous) {
            return;
        }

        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($.support.animation.end, clear)
                .css( { 'left': left + 'px' } )
                .addClass('animated owl-animated-out')
                .addClass(outgoing);
        }

        if (incoming) {
            next.one($.support.animation.end, clear)
                .addClass('animated owl-animated-in')
                .addClass(incoming);
        }
    };

    Animate.prototype.clear = function(e) {
        $(e.target).css( { 'left': '' } )
            .removeClass('animated owl-animated-out owl-animated-in')
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Animate.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }

        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the autoplay plugin.
     * @class The Autoplay Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Autoplay = function(carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * The autoplay timeout.
         * @type {Timeout}
         */
        this._timeout = null;

        /**
         * Indicates whenever the autoplay is paused.
         * @type {Boolean}
         */
        this._paused = false;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'settings') {
                    if (this._core.settings.autoplay) {
                        this.play();
                    } else {
                        this.stop();
                    }
                } else if (e.namespace && e.property.name === 'position') {
                    //console.log('play?', e);
                    if (this._core.settings.autoplay) {
                        this._setAutoPlayInterval();
                    }
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play();
                }
            }, this),
            'play.owl.autoplay': $.proxy(function(e, t, s) {
                if (e.namespace) {
                    this.play(t, s);
                }
            }, this),
            'stop.owl.autoplay': $.proxy(function(e) {
                if (e.namespace) {
                    this.stop();
                }
            }, this),
            'mouseover.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.play();
                }
            }, this),
            'touchstart.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'touchend.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause) {
                    this.play();
                }
            }, this)
        };

        // register event handlers
        this._core.$element.on(this._handlers);

        // set default options
        this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    };

    /**
     * Default options.
     * @public
     */
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };

    /**
     * Starts the autoplay.
     * @public
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype.play = function(timeout, speed) {
        this._paused = false;
        if (this._core.is('rotating')) {
            return;
        }
        this._core.enter('rotating');
        this._setAutoPlayInterval();
    };

    /**
     * Gets a new timeout
     * @private
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     * @return {Timeout}
     */
    Autoplay.prototype._getNextTimeout = function(timeout, speed) {
        if ( this._timeout ) {
            window.clearTimeout(this._timeout);
        }

        return window.setTimeout($.proxy(function() {
            if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
                return;
            }
            this._core.next(speed || this._core.settings.autoplaySpeed);
        }, this), timeout || this._core.settings.autoplayTimeout);
    };

    /**
     * Sets autoplay in motion.
     * @private
     */
    Autoplay.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout();
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.stop = function() {
        if (!this._core.is('rotating')) {
            return;
        }
        window.clearTimeout(this._timeout);
        this._core.leave('rotating');
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.pause = function() {
        if (!this._core.is('rotating')) {
            return;
        }
        this._paused = true;
    };

    /**
     * Destroys the plugin.
     */
    Autoplay.prototype.destroy = function() {
        var handler, property;
        this.stop();

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }

        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
    'use strict';

    /**
     * Creates the navigation plugin.
     * @class The Navigation Plugin
     * @param {Owl} carousel - The Owl Carousel.
     */
    var Navigation = function(carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Indicates whether the plugin is initialized or not.
         * @protected
         * @type {Boolean}
         */
        this._initialized = false;

        /**
         * The current paging indexes.
         * @protected
         * @type {Array}
         */
        this._pages = [];

        /**
         * All DOM elements of the user interface.
         * @protected
         * @type {Object}
         */
        this._controls = {};

        /**
         * Markup for an indicator.
         * @protected
         * @type {Array.<String>}
         */
        this._templates = [];

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * Overridden methods of the carousel.
         * @protected
         * @type {Object}
         */
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
                        $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
                }
            }, this),
            'added.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, this._templates.pop());
                }
            }, this),
            'remove.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.draw();
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger('initialize', null, 'navigation');
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger('initialized', null, 'navigation');
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('refresh', null, 'navigation');
                    this.update();
                    this.draw();
                    this._core.trigger('refreshed', null, 'navigation');
                }
            }, this)
        };
        // set default options
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
        // register event handlers
        this.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     * @todo Rename `slideBy` to `navBy`
     */
    Navigation.Defaults = {
        nav: false,
        navText: [ 'prev', 'next' ],
        navSpeed: false,
        navElement: 'div',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: [ 'owl-prev', 'owl-next' ],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    };

    /**
     * Initializes the layout of the plugin and extends the carousel.
     * @protected
     */
    Navigation.prototype.initialize = function() {
        var override,
            settings = this._core.settings;
        // create DOM structure for relative navigation
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
            : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$previous = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[0])
            .html(settings.navText[0])
            .prependTo(this._controls.$relative)
            .on('click', $.proxy(function(e) {
                this.prev(settings.navSpeed);
            }, this));

        this._controls.$next = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[1])
            .html(settings.navText[1])
            .appendTo(this._controls.$relative)
            .on('click', $.proxy(function(e) {
                this.next(settings.navSpeed);
            }, this));

        // create DOM structure for absolute navigation
        if (!settings.dotsData) {
            this._templates = [ $('<div>')
                .addClass(settings.dotClass)
                .append($('<span>'))
                .prop('outerHTML') ];
        }

        this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
            : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
        this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
            var index = $(e.target).parent().is(this._controls.$absolute)
                ? $(e.target).index() : $(e.target).parent().index();
            e.preventDefault();
            this.to(index, settings.dotsSpeed);
        }, this));

        // override public methods of the carousel
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };

    /**
     * Destroys the plugin.
     * @protected
     */
    Navigation.prototype.destroy = function() {
        var handler, control, property, override;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }

        for (control in this._controls) {
            this._controls[control].remove();
        }

        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }

        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    /**
     * Updates the internal state.
     * @protected
     */
    Navigation.prototype.update = function() {
        var i, j, k,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(true),
            settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData
                ? 1 : settings.dotsEach || settings.items;

        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
        }

        if (settings.dots || settings.slideBy == 'page') {
            this._pages = [];
            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });

                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };

    /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     * @protected
     */
    Navigation.prototype.draw = function() {
        var difference,
            settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;

        this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

        if (settings.nav) {
            this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
        }

        this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
        if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;
            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(''));
            } else if (difference > 0) {
                this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove();
            }
            this._controls.$absolute.find('.active').removeClass('active');
            this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }
    };

    /**
     * Extends event data.
     * @protected
     * @param {Event} event - The event object which gets thrown.
     */
    Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;
        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData
                ? 1 : settings.dotsEach || settings.items)
        };
    };

    /**
     * Gets the current page position of the carousel.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.current = function() {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function(page, index) {
            return page.start <= current && page.end >= current;
        }, this)).pop();
    };

    /**
     * Gets the current succesor/predecessor position.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.getPosition = function(successor) {
        var position, length,
            settings = this._core.settings;
        if (settings.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy;
        }
        return position;
    };

    /**
     * Slides to the next item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.next = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };

    /**
     * Slides to the previous item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.prev = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };

    /**
     * Slides to the specified item or page.
     * @public
     * @param {Number} position - The position of the item or page.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
     */
    Navigation.prototype.to = function(position, speed, standard) {
        var length;
        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    'use strict';
    /**
     * Creates the hash plugin.
     * @class The Hash Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Hash = function(carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Hash index for the items.
         * @protected
         * @type {Object}
         */
        this._hashes = {};

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
                    if (!hash) {
                        return;
                    }
                    this._hashes[hash] = e.content;
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position') {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function(item, hash) {
                            return item === current ? hash : null;
                        }).join();
                    if (!hash || window.location.hash.slice(1) === hash) {
                        return;
                    }
                    window.location.hash = hash;
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);

        // register the event handlers
        this.$element.on(this._handlers);

        // register event listener for hash navigation
        $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);
            if (position === undefined || position === this._core.current()) {
                return;
            }

            this._core.to(this._core.relative(position), false, true);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Hash.Defaults = {
        URLhashListener: false
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Hash.prototype.destroy = function() {
        var handler, property;
        $(window).off('hashchange.owl.navigation');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }

        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
    var style = $('<support>').get(0).style,
        prefixes = 'Webkit Moz O ms'.split(' '),
        events = {
            transition: {
                end: {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    transition: 'transitionend'
                }
            },

            animation: {
                end: {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    animation: 'animationend'
                }
            }
        },

        tests = {
            csstransforms: function() {
                return !!test('transform');
            },

            csstransforms3d: function() {
                return !!test('perspective');
            },

            csstransitions: function() {
                return !!test('transition');
            },

            cssanimations: function() {
                return !!test('animation');
            }
        };

    function test(property, prefixed) {
        var result = false,
            upper = property.charAt(0).toUpperCase() + property.slice(1);
        $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
            if (style[property] !== undefined) {
                result = prefixed ? property : true;
                return false;
            }
        });

        return result;
    }

    function prefixed(property) {
        return test(property, true);
    }

    if (tests.csstransitions()) {
        /* jshint -W053 */
        $.support.transition = new String(prefixed('transition'))
        $.support.transition.end = events.transition.end[ $.support.transition ];
    }

    if (tests.cssanimations()) {
        /* jshint -W053 */
        $.support.animation = new String(prefixed('animation'))
        $.support.animation.end = events.animation.end[ $.support.animation ];
    }

    if (tests.csstransforms()) {
        /* jshint -W053 */
        $.support.transform = new String(prefixed('transform'));
        $.support.transform3d = tests.csstransforms3d();
    }
})(window.Zepto || window.jQuery, window, document);

// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com>
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true,
                closed: false,
                activate: function(){}
            }
            //Variables
            var options = $.extend(defaults, options);
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
            var hash = window.location.hash;
            var historyApi = !!(window.history && history.replaceState);

            //Events
            $(this).bind('tabactivate', function(e, currentTab) {
                if(typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.resp-tabs-list');
                var respTabsId = $respTabs.attr('id');
                $respTabs.find('ul.resp-tabs-list li').addClass('resp-tab-item');
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                $respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs');
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '100%' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion');
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content').before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");

                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function () {
                    $tabItemh2 = $(this);
                    var $tabItem = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')');
                    var $accItem = $respTabs.find('.resp-accordion:eq(' + itemCount + ')');
                    $accItem.append($tabItem.html());
                    $accItem.data($tabItem.data());
                    $tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', 'tab_item-' + (count));
                    $tabItem.attr('role', 'tab');

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content').each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
                        tabcount++;
                    });
                    count++;
                });

                // Show correct content area
                var tabNum = 0;
                if(hash!='') {
                    var matches = hash.match(new RegExp(respTabsId+"([0-9]+)"));
                    if (matches!==null && matches.length===2) {
                        tabNum = parseInt(matches[1],10)-1;
                        if (tabNum > count) {
                            tabNum = 0;
                        }
                    }
                }

                //Active correct tab
                $($respTabs.find('.resp-tab-item')[tabNum]).addClass('resp-tab-active');

                //keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                if(options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                    $($respTabs.find('.resp-accordion')[tabNum]).addClass('resp-tab-active');
                    $($respTabs.find('.resp-tab-content')[tabNum]).addClass('resp-tab-content-active').attr('style', 'display:block');
                }
                //assign proper classes for when tabs mode is activated before making a selection in accordion mode
                else {
                    $($respTabs.find('.resp-tab-content')[tabNum]).addClass('resp-tab-content-active resp-accordion-closed')
                }

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {

                    var $currentTab = $(this);
                    $currentTab.click(function () {

                        var $currentTab = $(this);
                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active').slideUp('', function () { $(this).addClass('resp-accordion-closed'); });
                            $currentTab.removeClass('resp-tab-active');
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active');
                        } else {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);

                        //Update Browser History
                        if(historyApi) {
                            /*var currentHash = window.location.hash;
                            var newHash = respTabsId+(parseInt($tabAria.substring(9),10)+1).toString();
                            if (currentHash!="") {
                                var re = new RegExp(respTabsId+"[0-9]+");
                                if (currentHash.match(re)!=null) {
                                    newHash = currentHash.replace(re,newHash);
                                }
                                else {
                                    newHash = currentHash+"|"+newHash;
                                }
                            }
                            else {
                                newHash = '#'+newHash;
                            }

                            history.replaceState(null,null,newHash);*/
                        }
                    });

                });

                //Window resize function
                $(window).resize(function () {
                    $respTabs.find('.resp-accordion-closed').removeAttr('style');
                });
            });
        }
    });
})(jQuery);



/*!

 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+

 * http://cherne.net/brian/resources/jquery.hoverIntent.html

 *

 * You may use hoverIntent under the terms of the MIT license. Basically that

 * means you are free to use hoverIntent as long as this header is left intact.

 * Copyright 2007, 2013 Brian Cherne

 */

 

/* hoverIntent is similar to jQuery's built-in "hover" method except that

 * instead of firing the handlerIn function immediately, hoverIntent checks

 * to see if the user's mouse has slowed down (beneath the sensitivity

 * threshold) before firing the event. The handlerOut function is only

 * called after a matching handlerIn.

 *

 * // basic usage ... just like .hover()

 * .hoverIntent( handlerIn, handlerOut )

 * .hoverIntent( handlerInOut )

 *

 * // basic usage ... with event delegation!

 * .hoverIntent( handlerIn, handlerOut, selector )

 * .hoverIntent( handlerInOut, selector )

 *

 * // using a basic configuration object

 * .hoverIntent( config )

 *

 * @param  handlerIn   function OR configuration object

 * @param  handlerOut  function OR selector for delegation OR undefined

 * @param  selector    selector OR undefined

 * @author Brian Cherne <brian(at)cherne(dot)net>

 */

(function($) {

    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values

        var cfg = {

            interval: 100,

            sensitivity: 7,

            timeout: 0

        };

        if ( typeof handlerIn === "object" ) {

            cfg = $.extend(cfg, handlerIn );

        } else if ($.isFunction(handlerOut)) {

            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );

        } else {

            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );

        }

        // instantiate variables

        // cX, cY = current X and Y position of mouse, updated by mousemove event

        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval

        var cX, cY, pX, pY;

        // A private function for getting mouse position

        var track = function(ev) {

            cX = ev.pageX;

            cY = ev.pageY;

        };

        // A private function for comparing current and previous mouse position

        var compare = function(ev,ob) {

            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);

            // compare mouse positions to see if they've crossed the threshold

            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {

                $(ob).off("mousemove.hoverIntent",track);

                // set hoverIntent state to true (so mouseOut can be called)

                ob.hoverIntent_s = 1;

                return cfg.over.apply(ob,[ev]);

            } else {

                // set previous coordinates for next time

                pX = cX; pY = cY;

                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)

                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );

            }

        };

        // A private function for delaying the mouseOut function

        var delay = function(ev,ob) {

            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);

            ob.hoverIntent_s = 0;

            return cfg.out.apply(ob,[ev]);

        };

        // A private function for handling mouse 'hovering'

        var handleHover = function(e) {

            // copy objects to be passed into t (required for event object to be passed in IE)

            var ev = jQuery.extend({},e);

            var ob = this;

            // cancel hoverIntent timer if it exists

            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type == "mouseenter"

            if (e.type == "mouseenter") {

                // set "previous" X and Y position based on initial entry point

                pX = ev.pageX; pY = ev.pageY;

                // update "current" X and Y position based on mousemove

                $(ob).on("mousemove.hoverIntent",track);

                // start polling interval (self-calling timeout) to compare mouse coordinates over time

                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"

            } else {

                // unbind expensive mousemove event

                $(ob).off("mousemove.hoverIntent",track);

                // if hoverIntent state is true, then call the mouseOut function after the specified delay

                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}

            }

        };

        // listen for mouseenter and mouseleave

        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);

    };

})(jQuery);

/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2014, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.5
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
;

(function($, doc, win){
    'use strict';
    // init flags & variables
    var debug = false;
    var lmb = 1, px = "px";
    var rtl = false;
    var browser = {
        data: {
            index: 0,
            name: 'scrollbar'
        },
        macosx: /mac/i.test(navigator.platform),
        mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
        overlay: null,
        scroll: null,
        scrolls: [],
        webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent),
        log: debug ? function(data, toString){
            var output = data;
            if(toString && typeof data != "string"){
                output = [];
                $.each(data, function(i, v){
                    output.push('"' + i + '": ' + v);
                });
                output = output.join(", ");
            }
            if(win.console && win.console.log){
                //win.console.log(output);
            } else {
                //alert(output);
            }
        } : function(){
        }
    };

    var defaults = {
        "autoScrollSize": true,     // automatically calculate scrollsize
        "autoUpdate": true,         // update scrollbar if content/container size changed
        "debug": false,             // debug mode
        "disableBodyScroll": false, // disable body scroll if mouse over container
        "duration": 200,            // scroll animate duration in ms
        "ignoreMobile": true,       // ignore mobile devices
        "ignoreOverlay": true,      // ignore browsers with overlay scrollbars (mobile, MacOS)
        "scrollStep": 30,           // scroll step for scrollbar arrows
        "showArrows": false,        // add class to show arrows
        "stepScrolling": true,      // when scrolling to scrollbar mousedown position
        "type":"simple",            // [advanced|simple] scrollbar html type
        "scrollx": null,            // horizontal scroll element
        "scrolly": null,            // vertical scroll element
        "onDestroy": null,          // callback function on destroy,
        "onInit": null,             // callback function on first initialization
        "onScroll": null,           // callback function on content scrolling
        "onUpdate": null            // callback function on init/resize (before scrollbar size calculation)
    };

    var customScrollbar = function(container, options){
        rtl = $('body').hasClass('rtl');
        if(!browser.scroll){
            browser.log("Init jQuery Scrollbar v0.2.5");
            browser.overlay = isScrollOverlaysContent();
            browser.scroll = getBrowserScrollSize();
            updateScrollbars();
            $(win).resize(function(){
                var forceUpdate = false;
                if(browser.scroll && (browser.scroll.height || browser.scroll.width)){
                    var scroll = getBrowserScrollSize();
                    if(scroll.height != browser.scroll.height || scroll.width != browser.scroll.width){
                        browser.scroll = scroll;
                        forceUpdate = true; // handle page zoom
                    }
                }
                updateScrollbars(forceUpdate);
            });
        }

        this.container = container;
        this.options = $.extend({}, defaults, win.jQueryScrollbarOptions || {});
        this.scrollTo = null;
        this.scrollx = {};
        this.scrolly = {};
        this.init(options);
    };

    customScrollbar.prototype = {
        destroy: function(){
            if(!this.wrapper){
                return;
            }

            // init variables
            var scrollLeft = this.container.scrollLeft();
            var scrollTop  = this.container.scrollTop();
            this.container.insertBefore(this.wrapper).css({
                "height":"",
                "margin":""
            }).removeClass("scroll-content")
                .removeClass("scroll-scrollx_visible")
                .removeClass("scroll-scrolly_visible")
                .off(".scrollbar")
                .scrollLeft(scrollLeft)
                .scrollTop(scrollTop);
            this.scrollx.scrollbar.removeClass("scroll-scrollx_visible").find("div").andSelf().off(".scrollbar");
            this.scrolly.scrollbar.removeClass("scroll-scrolly_visible").find("div").andSelf().off(".scrollbar");
            this.wrapper.remove();
            $(doc).add("body").off(".scrollbar");
            if($.isFunction(this.options.onDestroy))
                this.options.onDestroy.apply(this, [this.container]);
        },

        getScrollbar: function(d){
            var scrollbar = this.options["scroll" + d];
            var html = {
                "advanced":
                    '<div class="scroll-element_corner"></div>' +
                        '<div class="scroll-arrow scroll-arrow_less"></div>' +
                        '<div class="scroll-arrow scroll-arrow_more"></div>' +
                        '<div class="scroll-element_outer">' +
                        '    <div class="scroll-element_size"></div>' + // required! used for scrollbar size calculation !
                        '    <div class="scroll-element_inner-wrapper">' +
                        '        <div class="scroll-element_inner scroll-element_track">'  + // used for handling scrollbar click
                        '            <div class="scroll-element_inner-bottom"></div>' +
                        '        </div>' +
                        '    </div>' +
                        '    <div class="scroll-bar">' +
                        '        <div class="scroll-bar_body">' +
                        '            <div class="scroll-bar_body-inner"></div>' +
                        '        </div>' +
                        '        <div class="scroll-bar_bottom"></div>' +
                        '        <div class="scroll-bar_center"></div>' +
                        '    </div>' +
                        '</div>',
                "simple":
                    '<div class="scroll-element_outer">' +
                        '    <div class="scroll-element_size"></div>'  + // required! used for scrollbar size calculation !
                        '    <div class="scroll-element_track"></div>' + // used for handling scrollbar click
                        '    <div class="scroll-bar"></div>' +
                        '</div>'
            };

            var type = html[this.options.type] ? this.options.type : "advanced";
            if(scrollbar){
                if(typeof(scrollbar) == "string"){
                    scrollbar = $(scrollbar).appendTo(this.wrapper);
                } else {
                    scrollbar = $(scrollbar);
                }
            } else {
                scrollbar = $("<div>").addClass("scroll-element").html(html[type]).appendTo(this.wrapper);
            }

            if(this.options.showArrows){
                scrollbar.addClass("scroll-element_arrows_visible");
            }

            return scrollbar.addClass("scroll-" + d);
        },



        init: function(options){
            // init variables
            var S = this;
            var c = this.container;
            var cw = this.containerWrapper || c;
            var o = $.extend(this.options, options || {});
            var s = {
                "x": this.scrollx,
                "y": this.scrolly
            };

            var w = this.wrapper;
            var initScroll = {
                "scrollLeft": c.scrollLeft(),
                "scrollTop": c.scrollTop()
            };

            // do not init if in ignorable browser
            if ((browser.mobile && o.ignoreMobile)
                || (browser.overlay && o.ignoreOverlay)
                || (browser.macosx && !browser.webkit) // still required to ignore nonWebKit browsers on Mac
                ) {
                return false;
            }

            // init scroll container
            if(!w){
                this.wrapper = w = $('<div>').addClass('scroll-wrapper').addClass(c.attr('class'))
                    .css('position', c.css('position') == 'absolute' ? 'absolute' : 'relative')
                    .insertBefore(c).append(c);
                if(c.is('textarea')){
                    this.containerWrapper = cw = $('<div>').insertBefore(c).append(c);
                    w.addClass('scroll-textarea');
                }

                if (rtl) {
                    cw.addClass("scroll-content").css({
                        "height":"",
                        "margin-bottom": browser.scroll.height * -1 + px,
                        "margin-left":  browser.scroll.width  * -1 + px
                    });
                } else {
                    cw.addClass("scroll-content").css({
                        "height":"",
                        "margin-bottom": browser.scroll.height * -1 + px,
                        "margin-right":  browser.scroll.width  * -1 + px
                    });
                }

                c.on("scroll.scrollbar", function(event){
                    if($.isFunction(o.onScroll)){
                        o.onScroll.call(S, {
                            "maxScroll": s.y.maxScrollOffset,
                            "scroll": c.scrollTop(),
                            "size": s.y.size,
                            "visible": s.y.visible
                        }, {
                            "maxScroll": s.x.maxScrollOffset,
                            "scroll": c.scrollLeft(),
                            "size": s.x.size,
                            "visible": s.x.visible
                        });
                    }
                    s.x.isVisible && s.x.scroller.css(rtl?"right":"left", c.scrollLeft() * s.x.kx + px);
                    s.y.isVisible && s.y.scroller.css("top",  c.scrollTop()  * s.y.kx + px);
                });

                /* prevent native scrollbars to be visible on #anchor click */
                w.on("scroll", function(){
                    w.scrollTop(0).scrollLeft(0);
                });

                if(o.disableBodyScroll){
                    var handleMouseScroll = function(event){
                        isVerticalScroll(event) ?
                            s.y.isVisible && s.y.mousewheel(event) :
                            s.x.isVisible && s.x.mousewheel(event);
                        event.preventDefault();
                        return false;
                    };

                    w.on({
                        "MozMousePixelScroll.scrollbar": handleMouseScroll,
                        "mousewheel.scrollbar": handleMouseScroll
                    });

                    if(browser.mobile){
                        w.on("touchstart.scrollbar", function(event){
                            var touch = event.originalEvent.touches && event.originalEvent.touches[0] || event;
                            var originalTouch = {
                                "pageX": touch.pageX,
                                "pageY": touch.pageY
                            };

                            if (rtl) {
                                var originalScroll = {
                                    "right": c.scrollLeft(),
                                    "top": c.scrollTop()
                                };
                            } else {
                                var originalScroll = {
                                    "left": c.scrollLeft(),
                                    "top": c.scrollTop()
                                };
                            }

                            $(doc).on({
                                "touchmove.scrollbar": function(event){
                                    var touch = event.originalEvent.targetTouches && event.originalEvent.targetTouches[0] || event;
                                    c.scrollLeft(rtl?originalScroll.right:originalScroll.left + originalTouch.pageX - touch.pageX);
                                    c.scrollTop(originalScroll.top + originalTouch.pageY - touch.pageY);
                                    event.preventDefault();
                                },

                                "touchend.scrollbar": function(){
                                    $(doc).off(".scrollbar");
                                }
                            });
                        });
                    }
                }

                if($.isFunction(o.onInit))
                    o.onInit.apply(this, [c]);
            } else {
                if (rtl) {
                    cw.css({
                        "height":"",
                        "margin-bottom": browser.scroll.height * -1 + px,
                        "margin-left":  browser.scroll.width  * -1 + px
                    });
                } else {
                    cw.css({
                        "height":"",
                        "margin-bottom": browser.scroll.height * -1 + px,
                        "margin-right":  browser.scroll.width  * -1 + px
                    });
                }
            }

            // init scrollbars & recalculate sizes
            $.each(s, function(d, scrollx){
                var scrollCallback = null;
                var scrollForward = 1;
                var scrollOffset = (d == "x") ? "scrollLeft" : "scrollTop";
                var scrollStep = o.scrollStep;
                var scrollTo = function(){
                    var currentOffset = c[scrollOffset]();
                    c[scrollOffset](currentOffset + scrollStep);
                    if(scrollForward == 1 && (currentOffset + scrollStep) >= scrollToValue)
                        currentOffset = c[scrollOffset]();
                    if(scrollForward == -1 && (currentOffset + scrollStep) <= scrollToValue)
                        currentOffset = c[scrollOffset]();
                    if(c[scrollOffset]() == currentOffset && scrollCallback){
                        scrollCallback();
                    }
                }

                var scrollToValue = 0;
                if(!scrollx.scrollbar){
                    scrollx.scrollbar = S.getScrollbar(d);
                    scrollx.scroller = scrollx.scrollbar.find(".scroll-bar");
                    scrollx.mousewheel = function(event){
                        if(!scrollx.isVisible || (d == 'x' && isVerticalScroll(event))){
                            return true;
                        }

                        if(d == 'y' && !isVerticalScroll(event)){
                            s.x.mousewheel(event);
                            return true;
                        }

                        var delta = event.originalEvent.wheelDelta * -1 || event.originalEvent.detail;
                        var maxScrollValue = scrollx.size - scrollx.visible - scrollx.offset;

                        // fix new mozilla
                        if (!delta) {
                            if (d === 'x' && !!event.originalEvent.deltaX) {
                                delta = event.originalEvent.deltaX * 40;
                            } else if (d === 'y' && !!event.originalEvent.deltaY) {
                                delta = event.originalEvent.deltaY * 40;
                            }
                        }

                        if(!((scrollToValue <= 0 && delta < 0) || (scrollToValue >= maxScrollValue && delta > 0))){
                            scrollToValue = scrollToValue + delta;
                            if(scrollToValue < 0)
                                scrollToValue = 0;
                            if(scrollToValue > maxScrollValue)
                                scrollToValue = maxScrollValue;
                            S.scrollTo = S.scrollTo || {};
                            S.scrollTo[scrollOffset] = scrollToValue;

                            setTimeout(function(){
                                if(S.scrollTo){
                                    c.stop().animate(S.scrollTo, 240, 'linear', function(){
                                        scrollToValue = c[scrollOffset]();
                                    });
                                    S.scrollTo = null;
                                }
                            }, 1);
                        } else {
                            return true;
                        }

                        event.preventDefault();
                        return false;
                    };

                    scrollx.scrollbar.on({
                        "MozMousePixelScroll.scrollbar": scrollx.mousewheel,
                        "mousewheel.scrollbar": scrollx.mousewheel,
                        "mouseenter.scrollbar": function(){
                            scrollToValue = c[scrollOffset]();
                        }
                    });

                    scrollx.triggerEvent = function(event) {
                        var ret = scrollx.mousewheel(event);
                        if (!ret) {
                            event.preventDefault;
                            return false;
                        }
                        return true;
                    }

                    w.on({
                        "MozMousePixelScroll.scrollbar": scrollx.triggerEvent,
                        "mousewheel.scrollbar": scrollx.triggerEvent,
                        "mouseenter.scrollbar": function(){
                            scrollToValue = c[scrollOffset]();
                        }
                    });

                    // handle arrows & scroll inner mousedown event
                    scrollx.scrollbar.find(".scroll-arrow, .scroll-element_track")
                        .on("mousedown.scrollbar", function(event){
                            if(event.which != lmb)
                                return true;
                            scrollForward = 1;
                            var data = {
                                "eventOffset": event[(d == "x") ? "pageX" : "pageY"],
                                "maxScrollValue": scrollx.size - scrollx.visible - scrollx.offset,
                                "scrollbarOffset": scrollx.scroller.offset()[(d == "x") ? rtl?"right":"left" : "top"],
                                "scrollbarSize": scrollx.scroller[(d == "x") ? "outerWidth" : "outerHeight"]()
                            };

                            var timeout = 0, timer = 0;
                            if($(this).hasClass('scroll-arrow')){
                                scrollForward = $(this).hasClass("scroll-arrow_more") ? 1 : -1;
                                scrollStep = o.scrollStep * scrollForward;
                                scrollToValue = scrollForward > 0 ? data.maxScrollValue : 0;
                            } else {
                                scrollForward = (data.eventOffset > (data.scrollbarOffset + data.scrollbarSize) ? 1
                                    : (data.eventOffset < data.scrollbarOffset ? -1 : 0));
                                scrollStep = Math.round(scrollx.visible * 0.75) * scrollForward;
                                scrollToValue = (data.eventOffset - data.scrollbarOffset -
                                    (o.stepScrolling ? (scrollForward == 1 ? data.scrollbarSize : 0)
                                        : Math.round(data.scrollbarSize / 2)));
                                scrollToValue = c[scrollOffset]() + (scrollToValue / scrollx.kx);
                            }

                            S.scrollTo = S.scrollTo || {};
                            S.scrollTo[scrollOffset] = o.stepScrolling ? c[scrollOffset]() + scrollStep : scrollToValue;
                            if(o.stepScrolling){
                                scrollCallback = function(){
                                    scrollToValue = c[scrollOffset]();
                                    clearInterval(timer);
                                    clearTimeout(timeout);
                                    timeout = 0;
                                    timer = 0;
                                };
                                timeout = setTimeout(function(){
                                    timer = setInterval(scrollTo, 40);
                                }, o.duration + 100);
                            }
                            setTimeout(function(){
                                if(S.scrollTo){
                                    c.animate(S.scrollTo, o.duration);
                                    S.scrollTo = null;
                                }
                            }, 1);
                            return handleMouseDown(scrollCallback, event);
                        });

                    // handle scrollbar drag'n'drop
                    scrollx.scroller.on("mousedown.scrollbar", function(event){
                        if(event.which != lmb)
                            return true;
                        var eventPosition = event[(d == "x")? "pageX" : "pageY"];
                        var initOffset = c[scrollOffset]();
                        scrollx.scrollbar.addClass("scroll-draggable");
                        $(doc).on("mousemove.scrollbar", function(event){
                            var diff = parseInt((event[(d == "x")? "pageX" : "pageY"] - eventPosition) / scrollx.kx, 10);
                            c[scrollOffset](initOffset + diff);
                        });

                        return handleMouseDown(function(){
                            scrollx.scrollbar.removeClass("scroll-draggable");
                            scrollToValue = c[scrollOffset]();
                        }, event);
                    });
                }
            });

            // remove classes & reset applied styles
            $.each(s, function(d, scrollx){
                var scrollClass = "scroll-scroll" + d + "_visible";
                var scrolly = (d == "x") ? s.y : s.x;
                scrollx.scrollbar.removeClass(scrollClass);
                scrolly.scrollbar.removeClass(scrollClass);
                cw.removeClass(scrollClass);
            });

            // calculate init sizes
            $.each(s, function(d, scrollx){
                $.extend(scrollx, (d == "x") ? {
                    "offset": parseInt(c.css(rtl?"right":"left"), 10) || 0,
                    "size": c.prop("scrollWidth"),
                    "visible": w.width()
                } : {
                    "offset": parseInt(c.css("top"), 10) || 0,
                    "size": c.prop("scrollHeight"),
                    "visible": w.height()
                });
            });

            var updateScroll = function(d, scrollx){
                var scrollClass = "scroll-scroll" + d + "_visible";
                var scrolly = (d == "x") ? s.y : s.x;
                var offset = parseInt(c.css((d == "x") ? rtl?"right":"left" : "top"), 10) || 0;
                var AreaSize = scrollx.size;
                var AreaVisible = scrollx.visible + offset;
                scrollx.isVisible = (AreaSize - AreaVisible) > 1; // bug in IE9/11 with 1px diff
                if(scrollx.isVisible){
                    scrollx.scrollbar.addClass(scrollClass);
                    scrolly.scrollbar.addClass(scrollClass);
                    cw.addClass(scrollClass);
                } else {
                    scrollx.scrollbar.removeClass(scrollClass);
                    scrolly.scrollbar.removeClass(scrollClass);
                    cw.removeClass(scrollClass);
                }

                if(d == "y" && (scrollx.isVisible || scrollx.size < scrollx.visible)){
                    cw.css("height", (AreaVisible + browser.scroll.height) + px);
                }

                if(s.x.size != c.prop("scrollWidth")
                    || s.y.size != c.prop("scrollHeight")
                    || s.x.visible != w.width()
                    || s.y.visible != w.height()
                    || s.x.offset  != (parseInt(c.css(rtl?"right":"left"), 10) || 0)
                    || s.y.offset  != (parseInt(c.css("top"), 10) || 0)
                    ){

                    $.each(s, function(d, scrollx){

                        $.extend(scrollx, (d == "x") ? {
                            "offset": parseInt(c.css(rtl?"right":"left"), 10) || 0,
                            "size": c.prop("scrollWidth"),
                            "visible": w.width()
                        } : {
                            "offset": parseInt(c.css("top"), 10) || 0,
                            "size": c.prop("scrollHeight"),
                            "visible": w.height()
                        });
                    });
                    updateScroll(d == "x" ? "y" : "x", scrolly);
                }
            };
            $.each(s, updateScroll);
            if($.isFunction(o.onUpdate))
                o.onUpdate.apply(this, [c]);
            // calculate scroll size
            $.each(s, function(d, scrollx){
                var cssOffset = (d == "x") ? rtl?"right":"left" : "top";
                var cssFullSize = (d == "x") ? "outerWidth" : "outerHeight";
                var cssSize = (d == "x") ? "width" : "height";
                var offset = parseInt(c.css(cssOffset), 10) || 0;
                var AreaSize = scrollx.size;
                var AreaVisible = scrollx.visible + offset;
                var scrollSize = scrollx.scrollbar.find(".scroll-element_size");
                scrollSize = scrollSize[cssFullSize]() + (parseInt(scrollSize.css(cssOffset), 10) || 0);

                if(o.autoScrollSize){
                    scrollx.scrollbarSize = parseInt(scrollSize * AreaVisible / AreaSize, 10);
                    scrollx.scroller.css(cssSize, scrollx.scrollbarSize + px);
                }
                scrollx.scrollbarSize = scrollx.scroller[cssFullSize]();
                scrollx.kx = ((scrollSize - scrollx.scrollbarSize) / (AreaSize - AreaVisible)) || 1;
                scrollx.maxScrollOffset = AreaSize - AreaVisible;
            });
            c.scrollLeft(initScroll.scrollLeft).scrollTop(initScroll.scrollTop).trigger("scroll");
        }
    };

    /*
     * Extend jQuery as plugin
     *
     * @param {object|string} options or command to execute
     * @param {object|array} args additional arguments as array []
     */

    $.fn.scrollbar = function(options, args){
        var toReturn = this;
        if(options === "get")
            toReturn = null;
        this.each(function() {
            var container = $(this);
            if(container.hasClass("scroll-wrapper")
                || container.get(0).nodeName == "body"){
                return true;
            }

            var instance = container.data("scrollbar");
            if(instance){
                if(options === "get"){
                    toReturn = instance;
                    return false;
                }
                var func = (typeof options == "string" && instance[options]) ? options : "init";
                instance[func].apply(instance, $.isArray(args) ? args : []);
                if(options === "destroy"){
                    container.removeData("scrollbar");
                    while($.inArray(instance, browser.scrolls) >= 0)
                        browser.scrolls.splice($.inArray(instance, browser.scrolls), 1);
                }
            } else {
                if(typeof options != "string"){
                    instance = new customScrollbar(container, options);
                    container.data("scrollbar", instance);
                    browser.scrolls.push(instance);
                }
            }
            return true;
        });
        return toReturn;
    };

    /**
     * Connect default options to global object
     */
    $.fn.scrollbar.options = defaults;

    /**
     * Extend AngularJS as UI directive
     *
     *
     */
    if(win.angular){
        (function(angular){
            var app = angular.module('jQueryScrollbar', []);
            app.directive('jqueryScrollbar', function(){
                return {
                    "link": function(scope, element){
                        element.scrollbar(scope.options).on('$destroy', function(){
                            element.scrollbar('destroy');
                        });
                    },
                    "restring": "AC",
                    "scope": {
                        "options": "=jqueryScrollbar"
                    }
                };
            });
        })(win.angular);
    }

    /**
     * Check if scroll content/container size is changed
     */

    var timer = 0, timerCounter = 0;
    var updateScrollbars = function(force){
        var i, c, o, s, w, x, y;
        for( i = 0; i < browser.scrolls.length; i++){
            s = browser.scrolls[i];
            c = s.container;
            o = s.options;
            w = s.wrapper;
            x = s.scrollx;
            y = s.scrolly;
            if(force || (o.autoUpdate && w && w.is(":visible") &&
                (c.prop("scrollWidth") != x.size
                    || c.prop("scrollHeight") != y.size
                    || w.width()  != x.visible
                    || w.height() != y.visible
                    ))){
                s.init();
                if(debug){
                    browser.log({
                        "scrollHeight":  c.prop("scrollHeight") + ":" + s.scrolly.size,
                        "scrollWidth":   c.prop("scrollWidth") + ":" + s.scrollx.size,
                        "visibleHeight": w.height() + ":" + s.scrolly.visible,
                        "visibleWidth":  w.width() + ":" + s.scrollx.visible
                    }, true);
                    timerCounter++;
                }
            }
        }

        if(debug && timerCounter > 10){
            browser.log("Scroll updates exceed 10");
            updateScrollbars = function(){};
        } else {
            clearTimeout(timer);
            timer = setTimeout(updateScrollbars, 300);
        }
    };

    /* ADDITIONAL FUNCTIONS */
    /**
     * Get native browser scrollbar size (height/width)
     *
     * @param {Boolean} actual size or CSS size, default - CSS size
     * @returns {Object} with height, width
     */
    function getBrowserScrollSize(actualSize){
        if(browser.webkit && !actualSize){
            return {
                "height": 0,
                "width": 0
            };
        }

        var css = {
            "border":  "none",
            "box-sizing": "content-box",
            "height":  "200px",
            "margin":  "0",
            "padding": "0",
            "width":   "200px"
        };

        browser.data.inner = $("<div>").css($.extend({}, css));
        browser.data.outer = $("<div>").css($.extend({
            "left":       "-1000px",
            "overflow":   "scroll",
            "position":   "absolute",
            "top":        "-1000px",
            "direction":  "ltr"
        }, css)).append(browser.data.inner).appendTo("body");
        browser.data.outer.scrollLeft(1000).scrollTop(1000);
        var ret = {
            "height": Math.ceil((browser.data.outer.offset().top - browser.data.inner.offset().top) || 0),
            "width": Math.ceil((browser.data.outer.offset().left - browser.data.inner.offset().left) || 0)
        };
        browser.data.inner.remove();
        browser.data.outer.remove();
        return ret;
    }

    function handleMouseDown(callback, event){
        $(doc).on({
            "blur.scrollbar": function(){
                $(doc).add('body').off('.scrollbar');
                callback && callback();
            },
            "dragstart.scrollbar": function(event){
                event.preventDefault();
                return false;
            },
            "mouseup.scrollbar": function(){
                $(doc).add('body').off('.scrollbar');
                callback && callback();
            }
        });

        $("body").on({
            "selectstart.scrollbar": function(event){
                event.preventDefault();
                return false;
            }
        });
        event && event.preventDefault();
        return false;
    }

    /**
     * Check if native browser scrollbars overlay content
     *
     * @returns {Boolean}
     */
    function isScrollOverlaysContent(){
        var scrollSize = getBrowserScrollSize(true);
        return !(scrollSize.height || scrollSize.width);
    }

    function isVerticalScroll(event){
        var e = event.originalEvent;
        if (e.axis && e.axis === e.HORIZONTAL_AXIS)
            return false;
        if (e.wheelDeltaX)
            return false;
        return true;
    }
})(jQuery, document, window);

/*global jQuery: true */
/*!
   --------------------------------
   Infinite Scroll
   --------------------------------
   + https://github.com/paulirish/infinite-scroll
   + version 2.1.0
   + Copyright 2011/12 Paul Irish & Luke Shumard
   + Licensed under the MIT license
   + Documentation: http://infinite-scroll.com/
*/

// Uses AMD or browser globals to create a jQuery plugin.
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($, undefined) {
    'use strict';
    $.infinitescroll = function infscr(options, callback, element) {
        this.element = $(element);
        // Flag the object in the event of a failed creation
        if (!this._create(options, callback)) {
            this.failed = true;
        }
    };

    $.infinitescroll.defaults = {
        loading: {
            finished: undefined,
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
            img: 'data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7',
            msg: null,
            msgText: '<em>Loading the next set of posts...</em>',
            selector: null,
            speed: 'fast',
            start: undefined
        },
        state: {
            isDuringAjax: false,
            isInvalidPage: false,
            isDestroyed: false,
            isDone: false, // For when it goes all the way through the archive.
            isPaused: false,
            isBeyondMaxPage: false,
            currPage: 1
        },
        debug: false,
        behavior: undefined,
        binder: $(window), // used to cache the selector
        nextSelector: 'div.navigation a:first',
        navSelector: 'div.navigation',
        contentSelector: null, // rename to pageFragment
        extraScrollPx: 150,
        itemSelector: 'div.post',
        animate: false,
        pathParse: undefined,
        dataType: 'html',
        appendCallback: true,
        bufferPx: 40,
        errorCallback: function () { },
        infid: 0, //Instance ID
        pixelsFromNavToBottom: undefined,
        path: undefined, // Either parts of a URL as an array (e.g. ["/page/", "/"] or a function that takes in the page number and returns a URL
        prefill: false, // When the document is smaller than the window, load data until the document is larger or links are exhausted
        maxPage: undefined // to manually control maximum page (when maxPage is undefined, maximum page limitation is not work)
    };

    $.infinitescroll.prototype = {
        /*
            ----------------------------
            Private methods
            ----------------------------
            */
        // Bind or unbind from scroll
        _binding: function infscr_binding(binding) {
            var instance = this,
            opts = instance.options;
            opts.v = '2.0b2.120520';
            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_binding_'+opts.behavior] !== undefined) {
                this['_binding_'+opts.behavior].call(this);
                return;
            }

            if (binding !== 'bind' && binding !== 'unbind') {
                this._debug('Binding value  ' + binding + ' not valid');
                return false;
            }

            if (binding === 'unbind') {
                (this.options.binder).unbind('smartscroll.infscr.' + instance.options.infid);
            } else {
                (this.options.binder)[binding]('smartscroll.infscr.' + instance.options.infid, function () {
                    instance.scroll();
                });
            }

            this._debug('Binding', binding);
        },

        // Fundamental aspects of the plugin are initialized
        _create: function infscr_create(options, callback) {
            // Add custom options to defaults
            var opts = $.extend(true, {}, $.infinitescroll.defaults, options);
            this.options = opts;
            var $window = $(window);
            var instance = this;
            // Validate selectors
            if (!instance._validate(options)) {
                return false;
            }
            // Validate page fragment path
            var path = $(opts.nextSelector).attr('href');
            if (!path) {
                this._debug('Navigation selector not found');
                return false;
            }
            // Set the path to be a relative URL from root.
            opts.path = opts.path || this._determinepath(path);
            // contentSelector is 'page fragment' option for .load() / .ajax() calls
            opts.contentSelector = opts.contentSelector || this.element;
            // loading.selector - if we want to place the load message in a specific selector, defaulted to the contentSelector
            opts.loading.selector = opts.loading.selector || opts.contentSelector;
            // Define loading.msg
            opts.loading.msg = opts.loading.msg || $('<div id="infscr-loading"><img alt="Loading..." src="' + opts.loading.img + '" /><div>' + opts.loading.msgText + '</div></div>');
            // Preload loading.img
            (new Image()).src = opts.loading.img;
            // distance from nav links to bottom
            // computed as: height of the document + top offset of container - top offset of nav link
            if(opts.pixelsFromNavToBottom === undefined) {
                opts.pixelsFromNavToBottom = $(document).height() - $(opts.navSelector).offset().top;
                this._debug('pixelsFromNavToBottom: ' + opts.pixelsFromNavToBottom);
            }

            var self = this;
            // determine loading.start actions
            opts.loading.start = opts.loading.start || function() {
                $(opts.navSelector).hide();
                opts.loading.msg
                .appendTo(opts.loading.selector)
                .show(opts.loading.speed, $.proxy(function() {
                    this.beginAjax(opts);
                }, self));
            };

            // determine loading.finished actions
            opts.loading.finished = opts.loading.finished || function() {
                if (!opts.state.isBeyondMaxPage)
                    opts.loading.msg.fadeOut(opts.loading.speed);
            };

            // callback loading
            opts.callback = function(instance, data, url) {
                if (!!opts.behavior && instance['_callback_'+opts.behavior] !== undefined) {
                    instance['_callback_'+opts.behavior].call($(opts.contentSelector)[0], data, url);
                }

                if (callback) {
                    callback.call($(opts.contentSelector)[0], data, opts, url);
                }

                if (opts.prefill) {
                    $window.bind('resize.infinite-scroll', instance._prefill);
                }
            };

            if (options.debug) {
                // Tell IE9 to use its built-in console
                if (Function.prototype.bind && (typeof console === 'object' || typeof console === 'function') && typeof console.log === 'object') {
                    ['log','info','warn','error','assert','dir','clear','profile','profileEnd']
                        .forEach(function (method) {
                            console[method] = this.call(console[method], console);
                        }, Function.prototype.bind);
                }
            }

            this._setup();
            // Setups the prefill method for use
            if (opts.prefill) {
                this._prefill();
            }

            // Return true to indicate successful creation
            return true;
        },

        _prefill: function infscr_prefill() {
            var instance = this;
            var $window = $(window);
            function needsPrefill() {
                return ( $(instance.options.contentSelector).height() <= $window.height() );
            }
            this._prefill = function() {
                if (needsPrefill()) {
                    instance.scroll();
                }
                $window.bind('resize.infinite-scroll', function() {
                    if (needsPrefill()) {
                        $window.unbind('resize.infinite-scroll');
                        instance.scroll();
                    }
                });
            };

            // Call self after setting up the new function
            this._prefill();
        },

        // Console log wrapper
        _debug: function infscr_debug() {
            if (true !== this.options.debug) {
                return;
            }

            if (typeof console !== 'undefined' && typeof console.log === 'function') {
                // Modern browsers
                // Single argument, which is a string
                if ((Array.prototype.slice.call(arguments)).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === 'string') {
                    //console.log( (Array.prototype.slice.call(arguments)).toString() );
                } else {
                    //console.log( Array.prototype.slice.call(arguments) );
                }
            } else if (!Function.prototype.bind && typeof console !== 'undefined' && typeof console.log === 'object') {
                // IE8
                Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
            }
        },

        // find the number to increment in the path.
        _determinepath: function infscr_determinepath(path) {
            var opts = this.options;
            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_determinepath_'+opts.behavior] !== undefined) {
                return this['_determinepath_'+opts.behavior].call(this,path);
            }

            if (!!opts.pathParse) {
                this._debug('pathParse manual');
                return opts.pathParse(path, this.options.state.currPage+1);
            } else if (path.match(/^(.*?)\b2\b(.*?$)/)) {
                path = path.match(/^(.*?)\b2\b(.*?$)/).slice(1);
                // if there is any 2 in the url at all.
            } else if (path.match(/^(.*?)2(.*?$)/)) {
                // page= is used in django:
                // http://www.infinite-scroll.com/changelog/comment-page-1/#comment-127
                if (path.match(/^(.*?page=)2(\/.*|$)/)) {
                    path = path.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    return path;
                }
                path = path.match(/^(.*?)2(.*?$)/).slice(1);
            } else {
                // page= is used in drupal too but second page is page=1 not page=2:
                // thx Jerod Fritz, vladikoff
                if (path.match(/^(.*?page=)1(\/.*|$)/)) {
                    path = path.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    return path;
                } else {
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
                    // Get rid of isInvalidPage to allow permalink to state
                    opts.state.isInvalidPage = true;  //prevent it from running on this page.
                }
            }
            this._debug('determinePath', path);
            return path;
        },

        // Custom error
        _error: function infscr_error(xhr) {
            var opts = this.options;
            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_error_'+opts.behavior] !== undefined) {
                this['_error_'+opts.behavior].call(this,xhr);
                return;
            }
            if (xhr !== 'destroy' && xhr !== 'end') {
                xhr = 'unknown';
            }

            this._debug('Error', xhr);
            if (xhr === 'end' || opts.state.isBeyondMaxPage) {
                this._showdonemsg();
            }

            opts.state.isDone = true;
            opts.state.currPage = 1; // if you need to go back to this instance
            opts.state.isPaused = false;
            opts.state.isBeyondMaxPage = false;
            this._binding('unbind');
        },

        // Load Callback
        _loadcallback: function infscr_loadcallback(box, data, url) {
            var opts = this.options,
            callback = this.options.callback, // GLOBAL OBJECT FOR CALLBACK
            result = (opts.state.isDone) ? 'done' : (!opts.appendCallback) ? 'no-append' : 'append',
            frag;
            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_loadcallback_'+opts.behavior] !== undefined) {
                this['_loadcallback_'+opts.behavior].call(this,box,data);
                return;
            }
            switch (result) {
                case 'done':
                    this._showdonemsg();
                    return false;
                case 'no-append':
                    if (opts.dataType === 'html') {
                        data = '<div>' + data + '</div>';
                        data = $(data).find(opts.itemSelector);
                    }
                    // if it didn't return anything
                    if (data.length === 0) {
                        return this._error('end');
                    }
                    break;
                case 'append':
                    var children = box.children();
                    // if it didn't return anything
                    if (children.length === 0) {
                        return this._error('end');
                    }
                    // use a documentFragment because it works when content is going into a table or UL
                    frag = document.createDocumentFragment();
                    while (box[0].firstChild) {
                        frag.appendChild(box[0].firstChild);
                    }

                    this._debug('contentSelector', $(opts.contentSelector)[0]);
                    $(opts.contentSelector)[0].appendChild(frag);
                    // previously, we would pass in the new DOM element as context for the callback
                    // however we're now using a documentfragment, which doesn't have parents or children,
                    // so the context is the contentContainer guy, and we pass in an array
                    // of the elements collected as the first argument.
                    data = children.get();
                    break;
            }

            // loadingEnd function
            opts.loading.finished.call($(opts.contentSelector)[0],opts);
            // smooth scroll to ease in the new content
            if (opts.animate) {
                var scrollTo = $(window).scrollTop() + $(opts.loading.msg).height() + opts.extraScrollPx + 'px';
                $('html,body').animate({ scrollTop: scrollTo }, 800, function () { opts.state.isDuringAjax = false; });
            }

            if (!opts.animate) {
                // once the call is done, we can allow it again.
                opts.state.isDuringAjax = false;
            }
            callback(this, data, url);
            if (opts.prefill) {
                this._prefill();
            }
        },

        _nearbottom: function infscr_nearbottom() {
            var opts = this.options,
            pixelsFromWindowBottomToBottom = 0 + $(document).height() - (opts.binder.scrollTop()) - $(window).height();
            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_nearbottom_'+opts.behavior] !== undefined) {
                return this['_nearbottom_'+opts.behavior].call(this);
            }

            this._debug('math:', pixelsFromWindowBottomToBottom, opts.pixelsFromNavToBottom);
            // if distance remaining in the scroll (including buffer) is less than the orignal nav to bottom....
            return (pixelsFromWindowBottomToBottom - opts.bufferPx < opts.pixelsFromNavToBottom);
        },
        // Pause / temporarily disable plugin from firing
        _pausing: function infscr_pausing(pause) {
            var opts = this.options;
            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_pausing_'+opts.behavior] !== undefined) {
                this['_pausing_'+opts.behavior].call(this,pause);
                return;
            }
            // If pause is not 'pause' or 'resume', toggle it's value
            if (pause !== 'pause' && pause !== 'resume' && pause !== null) {
                this._debug('Invalid argument. Toggling pause value instead');
            }

            pause = (pause && (pause === 'pause' || pause === 'resume')) ? pause : 'toggle';
            switch (pause) {
                case 'pause':
                    opts.state.isPaused = true;
                break;
                case 'resume':
                    opts.state.isPaused = false;
                break;
                case 'toggle':
                    opts.state.isPaused = !opts.state.isPaused;
                break;
            }
            this._debug('Paused', opts.state.isPaused);
            return false;
        },

        // Behavior is determined
        // If the behavior option is undefined, it will set to default and bind to scroll
        _setup: function infscr_setup() {
            var opts = this.options;
            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_setup_'+opts.behavior] !== undefined) {
                this['_setup_'+opts.behavior].call(this);
                return;
            }
            this._binding('bind');
            return false;
        },

        // Show done message
        _showdonemsg: function infscr_showdonemsg() {
            var opts = this.options;
            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_showdonemsg_'+opts.behavior] !== undefined) {
                this['_showdonemsg_'+opts.behavior].call(this);
                return;
            }
            opts.loading.msg
            .find('img')
            .hide()
            .parent()
            .find('div').html(opts.loading.finishedMsg).animate({ opacity: 1 }, 2000, function () {
                $(this).parent().fadeOut(opts.loading.speed);
            });
            // user provided callback when done
            opts.errorCallback.call($(opts.contentSelector)[0],'done');
        },
        // grab each selector option and see if any fail
        _validate: function infscr_validate(opts) {
            for (var key in opts) {
                if (key.indexOf && key.indexOf('Selector') > -1 && $(opts[key]).length === 0) {
                    this._debug('Your ' + key + ' found no elements.');
                    return false;
                }
            }
            return true;
        },
        /*
            ----------------------------
            Public methods
            ----------------------------
            */

        // Bind to scroll
        bind: function infscr_bind() {
            this._binding('bind');
        },
        // Destroy current instance of plugin
        destroy: function infscr_destroy() {
            this.options.state.isDestroyed = true;
            this.options.loading.finished();
            return this._error('destroy');
        },

        // Set pause value to false
        pause: function infscr_pause() {
            this._pausing('pause');
        },
        // Set pause value to false
        resume: function infscr_resume() {
            this._pausing('resume');
        },

        beginAjax: function infscr_ajax(opts) {
            var instance = this,
                path = opts.path,
                box, desturl, method, condition;
            // increment the URL bit. e.g. /page/3/
            opts.state.currPage++;
            // Manually control maximum page
            if ( opts.maxPage !== undefined && opts.state.currPage > opts.maxPage ){
                opts.state.isBeyondMaxPage = true;
                this.destroy();
                return;
            }
            // if we're dealing with a table we can't use DIVs
            box = $(opts.contentSelector).is('table, tbody') ? $('<tbody/>') : $('<div/>');
            desturl = (typeof path === 'function') ? path(opts.state.currPage) : path.join(opts.state.currPage);
            instance._debug('heading into ajax', desturl);
            method = (opts.dataType === 'html' || opts.dataType === 'json' ) ? opts.dataType : 'html+callback';
            if (opts.appendCallback && opts.dataType === 'html') {
                method += '+callback';
            }
            switch (method) {
                case 'html+callback':
                    instance._debug('Using HTML via .load() method');
                    box.load(desturl + ' ' + opts.itemSelector, undefined, function infscr_ajax_callback(responseText) {
                        instance._loadcallback(box, responseText, desturl);
                    });
                    break;
                case 'html':
                    instance._debug('Using ' + (method.toUpperCase()) + ' via $.ajax() method');
                    $.ajax({
                        // params
                        url: desturl,
                        dataType: opts.dataType,
                        complete: function infscr_ajax_callback(jqXHR, textStatus) {
                            condition = (typeof (jqXHR.isResolved) !== 'undefined') ? (jqXHR.isResolved()) : (textStatus === 'success' || textStatus === 'notmodified');
                            if (condition) {
                                instance._loadcallback(box, jqXHR.responseText, desturl);
                            } else {
                                instance._error('end');
                            }
                        }
                    });
                    break;
                case 'json':
                    instance._debug('Using ' + (method.toUpperCase()) + ' via $.ajax() method');
                    $.ajax({
                        dataType: 'json',
                        type: 'GET',
                        url: desturl,
                        success: function (data, textStatus, jqXHR) {
                            condition = (typeof (jqXHR.isResolved) !== 'undefined') ? (jqXHR.isResolved()) : (textStatus === 'success' || textStatus === 'notmodified');
                            if (opts.appendCallback) {
                                // if appendCallback is true, you must defined template in options.
                                // note that data passed into _loadcallback is already an html (after processed in opts.template(data)).
                                if (opts.template !== undefined) {
                                    var theData = opts.template(data);
                                    box.append(theData);
                                    if (condition) {
                                        instance._loadcallback(box, theData);
                                    } else {
                                        instance._error('end');
                                    }
                                } else {
                                    instance._debug('template must be defined.');
                                    instance._error('end');
                                }
                            } else {
                                // if appendCallback is false, we will pass in the JSON object. you should handle it yourself in your callback.
                                if (condition) {
                                    instance._loadcallback(box, data, desturl);
                                } else {
                                    instance._error('end');
                                }
                            }
                        },

                        error: function() {
                            instance._debug('JSON ajax request failed.');
                            instance._error('end');
                        }
                    });
                    break;
            }
        },

        // Retrieve next set of content items
        retrieve: function infscr_retrieve(pageNum) {
            pageNum = pageNum || null;
            var instance = this,
            opts = instance.options;
            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['retrieve_'+opts.behavior] !== undefined) {
                this['retrieve_'+opts.behavior].call(this,pageNum);
                return;
            }

            // for manual triggers, if destroyed, get out of here
            if (opts.state.isDestroyed) {
                this._debug('Instance is destroyed');
                return false;
            }

            // we dont want to fire the ajax multiple times
            opts.state.isDuringAjax = true;
            opts.loading.start.call($(opts.contentSelector)[0],opts);
        },

        // Check to see next page is needed
        scroll: function infscr_scroll() {
            var opts = this.options,
            state = opts.state;
            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['scroll_'+opts.behavior] !== undefined) {
                this['scroll_'+opts.behavior].call(this);
                return;
            }

            if (state.isDuringAjax || state.isInvalidPage || state.isDone || state.isDestroyed || state.isPaused) {
                return;
            }

            if (!this._nearbottom()) {
                return;
            }

            this.retrieve();
        },

        // Toggle pause value
        toggle: function infscr_toggle() {
            this._pausing();
        },

        // Unbind from scroll
        unbind: function infscr_unbind() {
            this._binding('unbind');
        },

        // update options
        update: function infscr_options(key) {
            if ($.isPlainObject(key)) {
                this.options = $.extend(true,this.options,key);
            }
        }
    };
    /*
        ----------------------------
        Infinite Scroll function
        ----------------------------
        Borrowed logic from the following...
        jQuery UI
        - https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.widget.js
        jCarousel
        - https://github.com/jsor/jcarousel/blob/master/lib/jquery.jcarousel.js
        Masonry
        - https://github.com/desandro/masonry/blob/master/jquery.masonry.js
*/

    $.fn.infinitescroll = function infscr_init(options, callback) {
        var thisCall = typeof options;
        switch (thisCall) {
            // method
            case 'string':
                var args = Array.prototype.slice.call(arguments, 1);
                this.each(function () {
                    var instance = $.data(this, 'infinitescroll');
                    if (!instance) {
                        // not setup yet
                        // return $.error('Method ' + options + ' cannot be called until Infinite Scroll is setup');
                        return false;
                    }
                    if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
                        // return $.error('No such method ' + options + ' for Infinite Scroll');
                        return false;
                    }

                    // no errors!
                    instance[options].apply(instance, args);
                });
            break;
            // creation
            case 'object':
                this.each(function () {
                var instance = $.data(this, 'infinitescroll');
                if (instance) {
                    // update options of current instance
                    instance.update(options);
                } else {
                    // initialize new instance
                    instance = new $.infinitescroll(options, callback, this);
                    // don't attach if instantiation failed
                    if (!instance.failed) {
                        $.data(this, 'infinitescroll', instance);
                    }
                }
            });
            break;
        }
        return this;
    };

    /*
     * smartscroll: debounced scroll event for jQuery *
     * https://github.com/lukeshumard/smartscroll
     * Based on smartresize by @louis_remi: https://github.com/lrbabe/jquery.smartresize.js *
     * Copyright 2011 Louis-Remi & Luke Shumard * Licensed under the MIT license. *
     */
    var event = $.event,
    scrollTimeout;
    event.special.smartscroll = {
        setup: function () {
            $(this).bind('scroll', event.special.smartscroll.handler);
        },
        teardown: function () {
            $(this).unbind('scroll', event.special.smartscroll.handler);
        },
        handler: function (event, execAsap) {
            // Save the context
            var context = this,
            args = arguments;
            // set correct event type
            event.type = 'smartscroll';
            if (scrollTimeout) { clearTimeout(scrollTimeout); }
            scrollTimeout = setTimeout(function () {
                $(context).trigger('smartscroll', args);
            }, execAsap === 'execAsap' ? 0 : 100);
        }
    };

    $.fn.smartscroll = function (fn) {
        return fn ? this.bind('smartscroll', fn) : this.trigger('smartscroll', ['execAsap']);
    };
}));

/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.0
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
    'use strict';
    /* globals define: false, module: false, require: false */

    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
            factory( window, jQuery );
        });
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            window,
            require('jquery')
        );
    } else {
        // browser global
        window.jQueryBridget = factory(
            window,
            window.jQuery
        );
    }

}( window, function factory( window, jQuery ) {
    'use strict';

// ----- utils ----- //

    var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
    var console = window.console;
    var logError = typeof console == 'undefined' ? function() {} :
        function( message ) {
            console.error( message );
        };

// ----- jQueryBridget ----- //

    function jQueryBridget( namespace, PluginClass, $ ) {
        $ = $ || jQuery || window.jQuery;
        if ( !$ ) {
            return;
        }

        // add option method -> $().plugin('option', {...})
        if ( !PluginClass.prototype.option ) {
            // option setter
            PluginClass.prototype.option = function( opts ) {
                // bail out if not an object
                if ( !$.isPlainObject( opts ) ){
                    return;
                }
                this.options = $.extend( true, this.options, opts );
            };
        }

        // make jQuery plugin
        $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
            if ( typeof arg0 == 'string' ) {
                // method call $().plugin( 'methodName', { options } )
                // shift arguments by 1
                var args = arraySlice.call( arguments, 1 );
                return methodCall( this, arg0, args );
            }
            // just $().plugin({ options })
            plainCall( this, arg0 );
            return this;
        };

        // $().plugin('methodName')
        function methodCall( $elems, methodName, args ) {
            var returnValue;
            var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

            $elems.each( function( i, elem ) {
                // get instance
                var instance = $.data( elem, namespace );
                if ( !instance ) {
                    logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
                        pluginMethodStr );
                    return;
                }

                var method = instance[ methodName ];
                if ( !method || methodName.charAt(0) == '_' ) {
                    logError( pluginMethodStr + ' is not a valid method' );
                    return;
                }

                // apply method, get return value
                var value = method.apply( instance, args );
                // set return value if value is returned, use only first value
                returnValue = returnValue === undefined ? value : returnValue;
            });

            return returnValue !== undefined ? returnValue : $elems;
        }

        function plainCall( $elems, options ) {
            $elems.each( function( i, elem ) {
                var instance = $.data( elem, namespace );
                if ( instance ) {
                    // set options & init
                    instance.option( options );
                    instance._init();
                } else {
                    // initialize new instance
                    instance = new PluginClass( elem, options );
                    $.data( elem, namespace, instance );
                }
            });
        }

        updateJQuery( $ );

    }

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
    function updateJQuery( $ ) {
        if ( !$ || ( $ && $.bridget ) ) {
            return;
        }
        $.bridget = jQueryBridget;
    }

    updateJQuery( jQuery || window.jQuery );

// -----  ----- //

    return jQueryBridget;

}));

/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */
    if ( typeof define == 'function' && define.amd ) {
        // AMD - RequireJS
        define( 'ev-emitter/ev-emitter',factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS - Browserify, Webpack
        module.exports = factory();
    } else {
        // Browser globals
        global.EvEmitter = factory();
    }

}( typeof window != 'undefined' ? window : this, function() {



    function EvEmitter() {}

    var proto = EvEmitter.prototype;

    proto.on = function( eventName, listener ) {
        if ( !eventName || !listener ) {
            return;
        }
        // set events hash
        var events = this._events = this._events || {};
        // set listeners array
        var listeners = events[ eventName ] = events[ eventName ] || [];
        // only add once
        if ( listeners.indexOf( listener ) == -1 ) {
            listeners.push( listener );
        }

        return this;
    };

    proto.once = function( eventName, listener ) {
        if ( !eventName || !listener ) {
            return;
        }
        // add event
        this.on( eventName, listener );
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {};
        // set onceListeners object
        var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
        // set flag
        onceListeners[ listener ] = true;

        return this;
    };

    proto.off = function( eventName, listener ) {
        var listeners = this._events && this._events[ eventName ];
        if ( !listeners || !listeners.length ) {
            return;
        }
        var index = listeners.indexOf( listener );
        if ( index != -1 ) {
            listeners.splice( index, 1 );
        }

        return this;
    };

    proto.emitEvent = function( eventName, args ) {
        var listeners = this._events && this._events[ eventName ];
        if ( !listeners || !listeners.length ) {
            return;
        }
        var i = 0;
        var listener = listeners[i];
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

        while ( listener ) {
            var isOnce = onceListeners && onceListeners[ listener ];
            if ( isOnce ) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off( eventName, listener );
                // unset once flag
                delete onceListeners[ listener ];
            }
            // trigger listener
            listener.apply( this, args );
            // get next listener
            i += isOnce ? 0 : 1;
            listener = listeners[i];
        }

        return this;
    };

    return EvEmitter;

}));

/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */

( function( window, factory ) {
    'use strict';

    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'get-size/get-size',[],function() {
            return factory();
        });
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory();
    } else {
        // browser global
        window.getSize = factory();
    }

})( window, function factory() {
    'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
    function getStyleSize( value ) {
        var num = parseFloat( value );
        // not a percent like '100%', and a number
        var isValid = value.indexOf('%') == -1 && !isNaN( num );
        return isValid && num;
    }

    function noop() {}

    var logError = typeof console == 'undefined' ? noop :
        function( message ) {
            console.error( message );
        };

// -------------------------- measurements -------------------------- //

    var measurements = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
    ];

    var measurementsLength = measurements.length;

    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for ( var i=0; i < measurementsLength; i++ ) {
            var measurement = measurements[i];
            size[ measurement ] = 0;
        }
        return size;
    }

// -------------------------- getStyle -------------------------- //

    /**
     * getStyle, get style of element, check for Firefox bug
     * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
     */
    function getStyle( elem ) {
        var style = getComputedStyle( elem );
        if ( !style ) {
            logError( 'Style returned ' + style +
                '. Are you running this code in a hidden iframe on Firefox? ' +
                'See http://bit.ly/getsizebug1' );
        }
        return style;
    }

// -------------------------- setup -------------------------- //

    var isSetup = false;

    var isBoxSizeOuter;

    /**
     * setup
     * check isBoxSizerOuter
     * do on first getSize() rather than on page load for Firefox bug
     */
    function setup() {
        // setup once
        if ( isSetup ) {
            return;
        }
        isSetup = true;

        // -------------------------- box sizing -------------------------- //

        /**
         * WebKit measures the outer-width on style.width on border-box elems
         * IE & Firefox<29 measures the inner-width
         */
        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';

        var body = document.body || document.documentElement;
        body.appendChild( div );
        var style = getStyle( div );

        getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
        body.removeChild( div );

    }

// -------------------------- getSize -------------------------- //

    function getSize( elem ) {
        setup();

        // use querySeletor if elem is string
        if ( typeof elem == 'string' ) {
            elem = document.querySelector( elem );
        }

        // do not proceed on non-objects
        if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
            return;
        }

        var style = getStyle( elem );

        // if hidden, everything is 0
        if ( style.display == 'none' ) {
            return getZeroSize();
        }

        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;

        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

        // get all measurements
        for ( var i=0; i < measurementsLength; i++ ) {
            var measurement = measurements[i];
            var value = style[ measurement ];
            var num = parseFloat( value );
            // any 'auto', 'medium' value will be 0
            size[ measurement ] = !isNaN( num ) ? num : 0;
        }

        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;

        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

        // overwrite width and height if we can get it from style
        var styleWidth = getStyleSize( style.width );
        if ( styleWidth !== false ) {
            size.width = styleWidth +
                // add padding and border unless it's already including it
                ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
        }

        var styleHeight = getStyleSize( style.height );
        if ( styleHeight !== false ) {
            size.height = styleHeight +
                // add padding and border unless it's already including it
                ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
        }

        size.innerWidth = size.width - ( paddingWidth + borderWidth );
        size.innerHeight = size.height - ( paddingHeight + borderHeight );

        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;

        return size;
    }

    return getSize;

});

/**
 * matchesSelector v2.0.1
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
    /*global define: false, module: false */
    'use strict';
    // universal module definition
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'desandro-matches-selector/matches-selector',factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory();
    } else {
        // browser global
        window.matchesSelector = factory();
    }

}( window, function factory() {
    'use strict';

    var matchesMethod = ( function() {
        var ElemProto = Element.prototype;
        // check for the standard method name first
        if ( ElemProto.matches ) {
            return 'matches';
        }
        // check un-prefixed
        if ( ElemProto.matchesSelector ) {
            return 'matchesSelector';
        }
        // check vendor prefixes
        var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

        for ( var i=0; i < prefixes.length; i++ ) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if ( ElemProto[ method ] ) {
                return method;
            }
        }
    })();

    return function matchesSelector( elem, selector ) {
        return elem[ matchesMethod ]( selector );
    };

}));

/**
 * Fizzy UI utils v2.0.2
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */

    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'fizzy-ui-utils/utils',[
            'desandro-matches-selector/matches-selector'
        ], function( matchesSelector ) {
            return factory( window, matchesSelector );
        });
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            window,
            require('desandro-matches-selector')
        );
    } else {
        // browser global
        window.fizzyUIUtils = factory(
            window,
            window.matchesSelector
        );
    }

}( window, function factory( window, matchesSelector ) {



    var utils = {};

// ----- extend ----- //

// extends objects
    utils.extend = function( a, b ) {
        for ( var prop in b ) {
            a[ prop ] = b[ prop ];
        }
        return a;
    };

// ----- modulo ----- //

    utils.modulo = function( num, div ) {
        return ( ( num % div ) + div ) % div;
    };

// ----- makeArray ----- //

// turn element or nodeList into an array
    utils.makeArray = function( obj ) {
        var ary = [];
        if ( Array.isArray( obj ) ) {
            // use object if already an array
            ary = obj;
        } else if ( obj && typeof obj.length == 'number' ) {
            // convert nodeList to array
            for ( var i=0; i < obj.length; i++ ) {
                ary.push( obj[i] );
            }
        } else {
            // array of single index
            ary.push( obj );
        }
        return ary;
    };

// ----- removeFrom ----- //

    utils.removeFrom = function( ary, obj ) {
        var index = ary.indexOf( obj );
        if ( index != -1 ) {
            ary.splice( index, 1 );
        }
    };

// ----- getParent ----- //

    utils.getParent = function( elem, selector ) {
        while ( elem != document.body ) {
            elem = elem.parentNode;
            if ( matchesSelector( elem, selector ) ) {
                return elem;
            }
        }
    };

// ----- getQueryElement ----- //

// use element as selector string
    utils.getQueryElement = function( elem ) {
        if ( typeof elem == 'string' ) {
            return document.querySelector( elem );
        }
        return elem;
    };

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
    utils.handleEvent = function( event ) {
        var method = 'on' + event.type;
        if ( this[ method ] ) {
            this[ method ]( event );
        }
    };

// ----- filterFindElements ----- //

    utils.filterFindElements = function( elems, selector ) {
        // make array of elems
        elems = utils.makeArray( elems );
        var ffElems = [];

        elems.forEach( function( elem ) {
            // check that elem is an actual element
            if ( !( elem instanceof HTMLElement ) ) {
                return;
            }
            // add elem if no selector
            if ( !selector ) {
                ffElems.push( elem );
                return;
            }
            // filter & find items if we have a selector
            // filter
            if ( matchesSelector( elem, selector ) ) {
                ffElems.push( elem );
            }
            // find children
            var childElems = elem.querySelectorAll( selector );
            // concat childElems to filterFound array
            for ( var i=0; i < childElems.length; i++ ) {
                ffElems.push( childElems[i] );
            }
        });

        return ffElems;
    };

// ----- debounceMethod ----- //

    utils.debounceMethod = function( _class, methodName, threshold ) {
        // original method
        var method = _class.prototype[ methodName ];
        var timeoutName = methodName + 'Timeout';

        _class.prototype[ methodName ] = function() {
            var timeout = this[ timeoutName ];
            if ( timeout ) {
                clearTimeout( timeout );
            }
            var args = arguments;

            var _this = this;
            this[ timeoutName ] = setTimeout( function() {
                method.apply( _this, args );
                delete _this[ timeoutName ];
            }, threshold || 100 );
        };
    };

// ----- docReady ----- //

    utils.docReady = function( callback ) {
        var readyState = document.readyState;
        if ( readyState == 'complete' || readyState == 'interactive' ) {
            callback();
        } else {
            document.addEventListener( 'DOMContentLoaded', callback );
        }
    };

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    utils.toDashed = function( str ) {
        return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
            return $1 + '-' + $2;
        }).toLowerCase();
    };

    var console = window.console;
    /**
     * allow user to initialize classes via [data-namespace] or .js-namespace class
     * htmlInit( Widget, 'widgetName' )
     * options are parsed from data-namespace-options
     */
    utils.htmlInit = function( WidgetClass, namespace ) {
        utils.docReady( function() {
            var dashedNamespace = utils.toDashed( namespace );
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
            var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
            var elems = utils.makeArray( dataAttrElems )
                .concat( utils.makeArray( jsDashElems ) );
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window.jQuery;

            elems.forEach( function( elem ) {
                var attr = elem.getAttribute( dataAttr ) ||
                    elem.getAttribute( dataOptionsAttr );
                var options;
                try {
                    options = attr && JSON.parse( attr );
                } catch ( error ) {
                    // log error, do not initialize
                    if ( console ) {
                        console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
                            ': ' + error );
                    }
                    return;
                }
                // initialize
                var instance = new WidgetClass( elem, options );
                // make available via $().data('layoutname')
                if ( jQuery ) {
                    jQuery.data( elem, namespace, instance );
                }
            });

        });
    };

// -----  ----- //

    return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD - RequireJS
        define( 'outlayer/item',[
            'ev-emitter/ev-emitter',
            'get-size/get-size'
        ],
            factory
        );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS - Browserify, Webpack
        module.exports = factory(
            require('ev-emitter'),
            require('get-size')
        );
    } else {
        // browser global
        window.Outlayer = {};
        window.Outlayer.Item = factory(
            window.EvEmitter,
            window.getSize
        );
    }

}( window, function factory( EvEmitter, getSize ) {
    'use strict';

// ----- helpers ----- //

    function isEmptyObj( obj ) {
        for ( var prop in obj ) {
            return false;
        }
        prop = null;
        return true;
    }

// -------------------------- CSS3 support -------------------------- //


    var docElemStyle = document.documentElement.style;

    var transitionProperty = typeof docElemStyle.transition == 'string' ?
        'transition' : 'WebkitTransition';
    var transformProperty = typeof docElemStyle.transform == 'string' ?
        'transform' : 'WebkitTransform';

    var transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        transition: 'transitionend'
    }[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
    var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + 'Duration',
        transitionProperty: transitionProperty + 'Property',
        transitionDelay: transitionProperty + 'Delay'
    };

// -------------------------- Item -------------------------- //

    function Item( element, layout ) {
        if ( !element ) {
            return;
        }

        this.element = element;
        // parent layout class, i.e. Masonry, Isotope, or Packery
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };

        this._create();
    }

// inherit EvEmitter
    var proto = Item.prototype = Object.create( EvEmitter.prototype );
    proto.constructor = Item;

    proto._create = function() {
        // transition objects
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };

        this.css({
            position: 'absolute'
        });
    };

// trigger specified handler for event type
    proto.handleEvent = function( event ) {
        var method = 'on' + event.type;
        if ( this[ method ] ) {
            this[ method ]( event );
        }
    };

    proto.getSize = function() {
        this.size = getSize( this.element );
    };

    /**
     * apply CSS styles to element
     * @param {Object} style
     */
    proto.css = function( style ) {
        var elemStyle = this.element.style;

        for ( var prop in style ) {
            // use vendor property if available
            var supportedProp = vendorProperties[ prop ] || prop;
            elemStyle[ supportedProp ] = style[ prop ];
        }
    };

    // measure position, and sets it
    proto.getPosition = function() {
        var style = getComputedStyle( this.element );
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xValue = style[ isOriginLeft ? 'left' : 'right' ];
        var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
        // convert percent to pixels
        var layoutSize = this.layout.size;
        var x = xValue.indexOf('%') != -1 ?
            ( parseFloat( xValue ) / 100 ) * layoutSize.width : parseInt( xValue, 10 );
        var y = yValue.indexOf('%') != -1 ?
            ( parseFloat( yValue ) / 100 ) * layoutSize.height : parseInt( yValue, 10 );

        // clean up 'auto' or other non-integer values
        x = isNaN( x ) ? 0 : x;
        y = isNaN( y ) ? 0 : y;
        // remove padding from measurement
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

        this.position.x = x;
        this.position.y = y;
    };

// set settled position, apply padding
    proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');

        // x
        var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
        var xProperty = isOriginLeft ? 'left' : 'right';
        var xResetProperty = isOriginLeft ? 'right' : 'left';

        var x = this.position.x + layoutSize[ xPadding ];
        // set in percentage or pixels
        style[ xProperty ] = this.getXValue( x );
        // reset other property
        style[ xResetProperty ] = '';

        // y
        var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
        var yProperty = isOriginTop ? 'top' : 'bottom';
        var yResetProperty = isOriginTop ? 'bottom' : 'top';

        var y = this.position.y + layoutSize[ yPadding ];
        // set in percentage or pixels
        style[ yProperty ] = this.getYValue( y );
        // reset other property
        style[ yResetProperty ] = '';

        this.css( style );
        this.emitEvent( 'layout', [ this ] );
    };

    proto.getXValue = function( x ) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && !isHorizontal ?
            ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
    };

    proto.getYValue = function( y ) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && isHorizontal ?
            ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
    };

    proto._transitionTo = function( x, y ) {
        this.getPosition();
        // get current x & y from top/left
        var curX = this.position.x;
        var curY = this.position.y;

        var compareX = parseInt( x, 10 );
        var compareY = parseInt( y, 10 );
        var didNotMove = compareX === this.position.x && compareY === this.position.y;

        // save end position
        this.setPosition( x, y );

        // if did not move and not transitioning, just go to layout
        if ( didNotMove && !this.isTransitioning ) {
            this.layoutPosition();
            return;
        }

        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate( transX, transY );

        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    };

    proto.getTranslate = function( x, y ) {
        // flip cooridinates if origin on right or bottom
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
    };

// non transition + transform support
    proto.goTo = function( x, y ) {
        this.setPosition( x, y );
        this.layoutPosition();
    };

    proto.moveTo = proto._transitionTo;

    proto.setPosition = function( x, y ) {
        this.position.x = parseInt( x, 10 );
        this.position.y = parseInt( y, 10 );
    };

// ----- transition ----- //

    /**
     * @param {Object} style - CSS
     * @param {Function} onTransitionEnd
     */

// non transition, just trigger callback
    proto._nonTransition = function( args ) {
        this.css( args.to );
        if ( args.isCleaning ) {
            this._removeStyles( args.to );
        }
        for ( var prop in args.onTransitionEnd ) {
            args.onTransitionEnd[ prop ].call( this );
        }
    };

    /**
     * proper transition
     * @param {Object} args - arguments
     *   @param {Object} to - style to transition to
     *   @param {Object} from - style to start transition from
     *   @param {Boolean} isCleaning - removes transition styles after transition
     *   @param {Function} onTransitionEnd - callback
     */
    proto.transition = function( args ) {
        // redirect to nonTransition if no transition duration
        if ( !parseFloat( this.layout.options.transitionDuration ) ) {
            this._nonTransition( args );
            return;
        }

        var _transition = this._transn;
        // keep track of onTransitionEnd callback by css property
        for ( var prop in args.onTransitionEnd ) {
            _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
        }
        // keep track of properties that are transitioning
        for ( prop in args.to ) {
            _transition.ingProperties[ prop ] = true;
            // keep track of properties to clean up when transition is done
            if ( args.isCleaning ) {
                _transition.clean[ prop ] = true;
            }
        }

        // set from styles
        if ( args.from ) {
            this.css( args.from );
            // force redraw. http://blog.alexmaccaw.com/css-transitions
            var h = this.element.offsetHeight;
            // hack for JSHint to hush about unused var
            h = null;
        }
        // enable transition
        this.enableTransition( args.to );
        // set styles that are transitioning
        this.css( args.to );

        this.isTransitioning = true;

    };

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
    function toDashedAll( str ) {
        return str.replace( /([A-Z])/g, function( $1 ) {
            return '-' + $1.toLowerCase();
        });
    }

    var transitionProps = 'opacity,' + toDashedAll( transformProperty );

    proto.enableTransition = function(/* style */) {
        // HACK changing transitionProperty during a transition
        // will cause transition to jump
        if ( this.isTransitioning ) {
            return;
        }

        // make `transition: foo, bar, baz` from style object
        // HACK un-comment this when enableTransition can work
        // while a transition is happening
        // var transitionValues = [];
        // for ( var prop in style ) {
        //   // dash-ify camelCased properties like WebkitTransition
        //   prop = vendorProperties[ prop ] || prop;
        //   transitionValues.push( toDashedAll( prop ) );
        // }
        // munge number to millisecond, to match stagger
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == 'number' ? duration + 'ms' : duration;
        // enable transition styles
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        // listen for transition end event
        this.element.addEventListener( transitionEndEvent, this, false );
    };

// ----- events ----- //

    proto.onwebkitTransitionEnd = function( event ) {
        this.ontransitionend( event );
    };

    proto.onotransitionend = function( event ) {
        this.ontransitionend( event );
    };

// properties that I munge to make my life easier
    var dashedVendorProperties = {
        '-webkit-transform': 'transform'
    };

    proto.ontransitionend = function( event ) {
        // disregard bubbled events from children
        if ( event.target !== this.element ) {
            return;
        }
        var _transition = this._transn;
        // get property name of transitioned property, convert to prefix-free
        var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

        // remove property that has completed transitioning
        delete _transition.ingProperties[ propertyName ];
        // check if any properties are still transitioning
        if ( isEmptyObj( _transition.ingProperties ) ) {
            // all properties have completed transitioning
            this.disableTransition();
        }
        // clean style
        if ( propertyName in _transition.clean ) {
            // clean up style
            this.element.style[ event.propertyName ] = '';
            delete _transition.clean[ propertyName ];
        }
        // trigger onTransitionEnd callback
        if ( propertyName in _transition.onEnd ) {
            var onTransitionEnd = _transition.onEnd[ propertyName ];
            onTransitionEnd.call( this );
            delete _transition.onEnd[ propertyName ];
        }

        this.emitEvent( 'transitionEnd', [ this ] );
    };

    proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener( transitionEndEvent, this, false );
        this.isTransitioning = false;
    };

    /**
     * removes style property from element
     * @param {Object} style
     **/
    proto._removeStyles = function( style ) {
        // clean up transition styles
        var cleanStyle = {};
        for ( var prop in style ) {
            cleanStyle[ prop ] = '';
        }
        this.css( cleanStyle );
    };

    var cleanTransitionStyle = {
        transitionProperty: '',
        transitionDuration: '',
        transitionDelay: ''
    };

    proto.removeTransitionStyles = function() {
        // remove transition
        this.css( cleanTransitionStyle );
    };

// ----- stagger ----- //

    proto.stagger = function( delay ) {
        delay = isNaN( delay ) ? 0 : delay;
        this.staggerDelay = delay + 'ms';
    };

// ----- show/hide/remove ----- //

// remove element from DOM
    proto.removeElem = function() {
        this.element.parentNode.removeChild( this.element );
        // remove display: none
        this.css({ display: '' });
        this.emitEvent( 'remove', [ this ] );
    };

    proto.remove = function() {
        // just remove element if no transition support or no transition
        if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
            this.removeElem();
            return;
        }

        // start transition
        this.once( 'transitionEnd', function() {
            this.removeElem();
        });
        this.hide();
    };

    proto.reveal = function() {
        delete this.isHidden;
        // remove display: none
        this.css({ display: '' });

        var options = this.layout.options;

        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
        onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };

    proto.onRevealTransitionEnd = function() {
        // check if still visible
        // during transition, item may have been hidden
        if ( !this.isHidden ) {
            this.emitEvent('reveal');
        }
    };

    /**
     * get style property use for hide/reveal transition end
     * @param {String} styleProperty - hiddenStyle/visibleStyle
     * @returns {String}
     */
    proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
        var optionStyle = this.layout.options[ styleProperty ];
        // use opacity
        if ( optionStyle.opacity ) {
            return 'opacity';
        }
        // get first property
        for ( var prop in optionStyle ) {
            return prop;
        }
    };

    proto.hide = function() {
        // set flag
        this.isHidden = true;
        // remove display: none
        this.css({ display: '' });

        var options = this.layout.options;

        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
        onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            // keep hidden stuff hidden
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };

    proto.onHideTransitionEnd = function() {
        // check if still hidden
        // during transition, item may have been un-hidden
        if ( this.isHidden ) {
            this.css({ display: 'none' });
            this.emitEvent('hide');
        }
    };

    proto.destroy = function() {
        this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
        });
    };

    return Item;

}));

/*!
 * Outlayer v2.1.0
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
    'use strict';
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD - RequireJS
        define( 'outlayer/outlayer',[
            'ev-emitter/ev-emitter',
            'get-size/get-size',
            'fizzy-ui-utils/utils',
            './item'
        ],
            function( EvEmitter, getSize, utils, Item ) {
                return factory( window, EvEmitter, getSize, utils, Item);
            }
        );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS - Browserify, Webpack
        module.exports = factory(
            window,
            require('ev-emitter'),
            require('get-size'),
            require('fizzy-ui-utils'),
            require('./item')
        );
    } else {
        // browser global
        window.Outlayer = factory(
            window,
            window.EvEmitter,
            window.getSize,
            window.fizzyUIUtils,
            window.Outlayer.Item
        );
    }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
    'use strict';

// ----- vars ----- //

    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
    var GUID = 0;
// internal store of all Outlayer intances
    var instances = {};


    /**
     * @param {Element, String} element
     * @param {Object} options
     * @constructor
     */
    function Outlayer( element, options ) {
        var queryElement = utils.getQueryElement( element );
        if ( !queryElement ) {
            if ( console ) {
                console.error( 'Bad element for ' + this.constructor.namespace +
                    ': ' + ( queryElement || element ) );
            }
            return;
        }
        this.element = queryElement;
        // add jQuery
        if ( jQuery ) {
            this.$element = jQuery( this.element );
        }

        // options
        this.options = utils.extend( {}, this.constructor.defaults );
        this.option( options );

        // add id for Outlayer.getFromElement
        var id = ++GUID;
        this.element.outlayerGUID = id; // expando
        instances[ id ] = this; // associate via id

        // kick it off
        this._create();

        var isInitLayout = this._getOption('initLayout');
        if ( isInitLayout ) {
            this.layout();
        }
    }

// settings are for internal use only
    Outlayer.namespace = 'outlayer';
    Outlayer.Item = Item;

// default options
    Outlayer.defaults = {
        containerStyle: {
            position: 'relative'
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        // item options
        transitionDuration: '0.4s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
    };

    var proto = Outlayer.prototype;
// inherit EvEmitter
    utils.extend( proto, EvEmitter.prototype );

    /**
     * set options
     * @param {Object} opts
     */
    proto.option = function( opts ) {
        utils.extend( this.options, opts );
    };

    /**
     * get backwards compatible option value, check old name
     */
    proto._getOption = function( option ) {
        var oldOption = this.constructor.compatOptions[ option ];
        return oldOption && this.options[ oldOption ] !== undefined ?
            this.options[ oldOption ] : this.options[ option ];
    };

    Outlayer.compatOptions = {
        // currentName: oldName
        initLayout: 'isInitLayout',
        horizontal: 'isHorizontal',
        layoutInstant: 'isLayoutInstant',
        originLeft: 'isOriginLeft',
        originTop: 'isOriginTop',
        resize: 'isResizeBound',
        resizeContainer: 'isResizingContainer'
    };

    proto._create = function() {
        // get items from children
        this.reloadItems();
        // elements that affect layout, but are not laid out
        this.stamps = [];
        this.stamp( this.options.stamp );
        // set container style
        utils.extend( this.element.style, this.options.containerStyle );

        // bind resize method
        var canBindResize = this._getOption('resize');
        if ( canBindResize ) {
            this.bindResize();
        }
    };

// goes through all children again and gets bricks in proper order
    proto.reloadItems = function() {
        // collection of item elements
        this.items = this._itemize( this.element.children );
    };


    /**
     * turn elements into Outlayer.Items to be used in layout
     * @param {Array or NodeList or HTMLElement} elems
     * @returns {Array} items - collection of new Outlayer Items
     */
    proto._itemize = function( elems ) {

        var itemElems = this._filterFindItemElements( elems );
        var Item = this.constructor.Item;

        // create new Outlayer Items for collection
        var items = [];
        for ( var i=0; i < itemElems.length; i++ ) {
            var elem = itemElems[i];
            var item = new Item( elem, this );
            items.push( item );
        }

        return items;
    };

    /**
     * get item elements to be used in layout
     * @param {Array or NodeList or HTMLElement} elems
     * @returns {Array} items - item elements
     */
    proto._filterFindItemElements = function( elems ) {
        return utils.filterFindElements( elems, this.options.itemSelector );
    };

    /**
     * getter method for getting item elements
     * @returns {Array} elems - collection of item elements
     */
    proto.getItemElements = function() {
        return this.items.map( function( item ) {
            return item.element;
        });
    };

// ----- init & layout ----- //

    /**
     * lays out all items
     */
    proto.layout = function() {
        this._resetLayout();
        this._manageStamps();

        // don't animate first layout
        var layoutInstant = this._getOption('layoutInstant');
        var isInstant = layoutInstant !== undefined ?
            layoutInstant : !this._isLayoutInited;
        this.layoutItems( this.items, isInstant );

        // flag for initalized
        this._isLayoutInited = true;
    };

// _init is alias for layout
    proto._init = proto.layout;

    /**
     * logic before any new layout
     */
    proto._resetLayout = function() {
        this.getSize();
    };


    proto.getSize = function() {
        this.size = getSize( this.element );
    };

    /**
     * get measurement from option, for columnWidth, rowHeight, gutter
     * if option is String -> get element from selector string, & get size of element
     * if option is Element -> get size of element
     * else use option as a number
     *
     * @param {String} measurement
     * @param {String} size - width or height
     * @private
     */
    proto._getMeasurement = function( measurement, size ) {
        var option = this.options[ measurement ];
        var elem;
        if ( !option ) {
            // default to 0
            this[ measurement ] = 0;
        } else {
            // use option as an element
            if ( typeof option == 'string' ) {
                elem = this.element.querySelector( option );
            } else if ( option instanceof HTMLElement ) {
                elem = option;
            }
            // use size of element, if element
            this[ measurement ] = elem ? getSize( elem )[ size ] : option;
        }
    };

    /**
     * layout a collection of item elements
     * @api public
     */
    proto.layoutItems = function( items, isInstant ) {
        items = this._getItemsForLayout( items );

        this._layoutItems( items, isInstant );

        this._postLayout();
    };

    /**
     * get the items to be laid out
     * you may want to skip over some items
     * @param {Array} items
     * @returns {Array} items
     */
    proto._getItemsForLayout = function( items ) {
        return items.filter( function( item ) {
            return !item.isIgnored;
        });
    };

    /**
     * layout items
     * @param {Array} items
     * @param {Boolean} isInstant
     */
    proto._layoutItems = function( items, isInstant ) {
        this._emitCompleteOnItems( 'layout', items );

        if ( !items || !items.length ) {
            // no items, emit event with empty array
            return;
        }

        var queue = [];

        items.forEach( function( item ) {
            // get x/y object from method
            var position = this._getItemLayoutPosition( item );
            // enqueue
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push( position );
        }, this );

        this._processLayoutQueue( queue );
    };

    /**
     * get item layout position
     * @param {Outlayer.Item} item
     * @returns {Object} x and y position
     */
    proto._getItemLayoutPosition = function( /* item */ ) {
        return {
            x: 0,
            y: 0
        };
    };

    /**
     * iterate over array and position each item
     * Reason being - separating this logic prevents 'layout invalidation'
     * thx @paul_irish
     * @param {Array} queue
     */
    proto._processLayoutQueue = function( queue ) {
        this.updateStagger();
        queue.forEach( function( obj, i ) {
            this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
        }, this );
    };

// set stagger from option in milliseconds number
    proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if ( stagger === null || stagger === undefined ) {
            this.stagger = 0;
            return;
        }
        this.stagger = getMilliseconds( stagger );
        return this.stagger;
    };

    /**
     * Sets position of item in DOM
     * @param {Outlayer.Item} item
     * @param {Number} x - horizontal position
     * @param {Number} y - vertical position
     * @param {Boolean} isInstant - disables transitions
     */
    proto._positionItem = function( item, x, y, isInstant, i ) {
        if ( isInstant ) {
            // if not transition, just set CSS
            item.goTo( x, y );
        } else {
            item.stagger( i * this.stagger );
            item.moveTo( x, y );
        }
    };

    /**
     * Any logic you want to do after each layout,
     * i.e. size the container
     */
    proto._postLayout = function() {
        this.resizeContainer();
    };

    proto.resizeContainer = function() {
        var isResizingContainer = this._getOption('resizeContainer');
        if ( !isResizingContainer ) {
            return;
        }
        var size = this._getContainerSize();
        if ( size ) {
            this._setContainerMeasure( size.width, true );
            this._setContainerMeasure( size.height, false );
        }
    };

    /**
     * Sets width or height of container if returned
     * @returns {Object} size
     *   @param {Number} width
     *   @param {Number} height
     */
    proto._getContainerSize = noop;

    /**
     * @param {Number} measure - size of width or height
     * @param {Boolean} isWidth
     */
    proto._setContainerMeasure = function( measure, isWidth ) {
        if ( measure === undefined ) {
            return;
        }

        var elemSize = this.size;
        // add padding and border width if border box
        if ( elemSize.isBorderBox ) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
                elemSize.borderLeftWidth + elemSize.borderRightWidth :
                elemSize.paddingBottom + elemSize.paddingTop +
                    elemSize.borderTopWidth + elemSize.borderBottomWidth;
        }

        measure = Math.max( measure, 0 );
        this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
    };

    /**
     * emit eventComplete on a collection of items events
     * @param {String} eventName
     * @param {Array} items - Outlayer.Items
     */
    proto._emitCompleteOnItems = function( eventName, items ) {
        var _this = this;
        function onComplete() {
            _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
        }

        var count = items.length;
        if ( !items || !count ) {
            onComplete();
            return;
        }

        var doneCount = 0;
        function tick() {
            doneCount++;
            if ( doneCount == count ) {
                onComplete();
            }
        }

        // bind callback
        items.forEach( function( item ) {
            item.once( eventName, tick );
        });
    };

    /**
     * emits events via EvEmitter and jQuery events
     * @param {String} type - name of event
     * @param {Event} event - original event
     * @param {Array} args - extra arguments
     */
    proto.dispatchEvent = function( type, event, args ) {
        // add original event to arguments
        var emitArgs = event ? [ event ].concat( args ) : args;
        this.emitEvent( type, emitArgs );

        if ( jQuery ) {
            // set this.$element
            this.$element = this.$element || jQuery( this.element );
            if ( event ) {
                // create jQuery event
                var $event = jQuery.Event( event );
                $event.type = type;
                this.$element.trigger( $event, args );
            } else {
                // just trigger with type if no event available
                this.$element.trigger( type, args );
            }
        }
    };

// -------------------------- ignore & stamps -------------------------- //


    /**
     * keep item in collection, but do not lay it out
     * ignored items do not get skipped in layout
     * @param {Element} elem
     */
    proto.ignore = function( elem ) {
        var item = this.getItem( elem );
        if ( item ) {
            item.isIgnored = true;
        }
    };

    /**
     * return item to layout collection
     * @param {Element} elem
     */
    proto.unignore = function( elem ) {
        var item = this.getItem( elem );
        if ( item ) {
            delete item.isIgnored;
        }
    };

    /**
     * adds elements to stamps
     * @param {NodeList, Array, Element, or String} elems
     */
    proto.stamp = function( elems ) {
        elems = this._find( elems );
        if ( !elems ) {
            return;
        }

        this.stamps = this.stamps.concat( elems );
        // ignore
        elems.forEach( this.ignore, this );
    };

    /**
     * removes elements to stamps
     * @param {NodeList, Array, or Element} elems
     */
    proto.unstamp = function( elems ) {
        elems = this._find( elems );
        if ( !elems ){
            return;
        }

        elems.forEach( function( elem ) {
            // filter out removed stamp elements
            utils.removeFrom( this.stamps, elem );
            this.unignore( elem );
        }, this );
    };

    /**
     * finds child elements
     * @param {NodeList, Array, Element, or String} elems
     * @returns {Array} elems
     */
    proto._find = function( elems ) {
        if ( !elems ) {
            return;
        }
        // if string, use argument as selector string
        if ( typeof elems == 'string' ) {
            elems = this.element.querySelectorAll( elems );
        }
        elems = utils.makeArray( elems );
        return elems;
    };

    proto._manageStamps = function() {
        if ( !this.stamps || !this.stamps.length ) {
            return;
        }

        this._getBoundingRect();

        this.stamps.forEach( this._manageStamp, this );
    };

// update boundingLeft / Top
    proto._getBoundingRect = function() {
        // get bounding rect for container element
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
            bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
        };
    };

    /**
     * @param {Element} stamp
     **/
    proto._manageStamp = noop;

    /**
     * get x/y position of element relative to container element
     * @param {Element} elem
     * @returns {Object} offset - has left, top, right, bottom
     */
    proto._getElementOffset = function( elem ) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize( elem );
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
    };

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
    proto.handleEvent = utils.handleEvent;

    /**
     * Bind layout to window resizing
     */
    proto.bindResize = function() {
        window.addEventListener( 'resize', this );
        this.isResizeBound = true;
    };

    /**
     * Unbind layout to window resizing
     */
    proto.unbindResize = function() {
        window.removeEventListener( 'resize', this );
        this.isResizeBound = false;
    };

    proto.onresize = function() {
        this.resize();
    };

    utils.debounceMethod( Outlayer, 'onresize', 100 );

    proto.resize = function() {
        // don't trigger if size did not change
        // or if resize was unbound. See #9
        if ( !this.isResizeBound || !this.needsResizeLayout() ) {
            return;
        }

        this.layout();
    };

    /**
     * check if layout is needed post layout
     * @returns Boolean
     */
    proto.needsResizeLayout = function() {
        var size = getSize( this.element );
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    };

// -------------------------- methods -------------------------- //

    /**
     * add items to Outlayer instance
     * @param {Array or NodeList or Element} elems
     * @returns {Array} items - Outlayer.Items
     **/
    proto.addItems = function( elems ) {
        var items = this._itemize( elems );
        // add items to collection
        if ( items.length ) {
            this.items = this.items.concat( items );
        }
        return items;
    };

    /**
     * Layout newly-appended item elements
     * @param {Array or NodeList or Element} elems
     */
    proto.appended = function( elems ) {
        var items = this.addItems( elems );
        if ( !items.length ) {
            return;
        }
        // layout and reveal just the new items
        this.layoutItems( items, true );
        this.reveal( items );
    };

    /**
     * Layout prepended elements
     * @param {Array or NodeList or Element} elems
     */
    proto.prepended = function( elems ) {
        var items = this._itemize( elems );
        if ( !items.length ) {
            return;
        }
        // add items to beginning of collection
        var previousItems = this.items.slice(0);
        this.items = items.concat( previousItems );
        // start new layout
        this._resetLayout();
        this._manageStamps();
        // layout new stuff without transition
        this.layoutItems( items, true );
        this.reveal( items );
        // layout previous items
        this.layoutItems( previousItems );
    };

    /**
     * reveal a collection of items
     * @param {Array of Outlayer.Items} items
     */
    proto.reveal = function( items ) {
        this._emitCompleteOnItems( 'reveal', items );
        if ( !items || !items.length ) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach( function( item, i ) {
            item.stagger( i * stagger );
            item.reveal();
        });
    };

    /**
     * hide a collection of items
     * @param {Array of Outlayer.Items} items
     */
    proto.hide = function( items ) {
        this._emitCompleteOnItems( 'hide', items );
        if ( !items || !items.length ) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach( function( item, i ) {
            item.stagger( i * stagger );
            item.hide();
        });
    };

    /**
     * reveal item elements
     * @param {Array}, {Element}, {NodeList} items
     */
    proto.revealItemElements = function( elems ) {
        var items = this.getItems( elems );
        this.reveal( items );
    };

    /**
     * hide item elements
     * @param {Array}, {Element}, {NodeList} items
     */
    proto.hideItemElements = function( elems ) {
        var items = this.getItems( elems );
        this.hide( items );
    };

    /**
     * get Outlayer.Item, given an Element
     * @param {Element} elem
     * @param {Function} callback
     * @returns {Outlayer.Item} item
     */
    proto.getItem = function( elem ) {
        // loop through items to get the one that matches
        for ( var i=0; i < this.items.length; i++ ) {
            var item = this.items[i];
            if ( item.element == elem ) {
                // return item
                return item;
            }
        }
    };

    /**
     * get collection of Outlayer.Items, given Elements
     * @param {Array} elems
     * @returns {Array} items - Outlayer.Items
     */
    proto.getItems = function( elems ) {
        elems = utils.makeArray( elems );
        var items = [];
        elems.forEach( function( elem ) {
            var item = this.getItem( elem );
            if ( item ) {
                items.push( item );
            }
        }, this );

        return items;
    };

    /**
     * remove element(s) from instance and DOM
     * @param {Array or NodeList or Element} elems
     */
    proto.remove = function( elems ) {
        var removeItems = this.getItems( elems );

        this._emitCompleteOnItems( 'remove', removeItems );

        // bail if no items to remove
        if ( !removeItems || !removeItems.length ) {
            return;
        }

        removeItems.forEach( function( item ) {
            item.remove();
            // remove item from collection
            utils.removeFrom( this.items, item );
        }, this );
    };

// ----- destroy ----- //

// remove and disable Outlayer instance
    proto.destroy = function() {
        // clean up dynamic styles
        var style = this.element.style;
        style.height = '';
        style.position = '';
        style.width = '';
        // destroy items
        this.items.forEach( function( item ) {
            item.destroy();
        });

        this.unbindResize();

        var id = this.element.outlayerGUID;
        delete instances[ id ]; // remove reference to instance by id
        delete this.element.outlayerGUID;
        // remove data for jQuery
        if ( jQuery ) {
            jQuery.removeData( this.element, this.constructor.namespace );
        }

    };

// -------------------------- data -------------------------- //

    /**
     * get Outlayer instance from element
     * @param {Element} elem
     * @returns {Outlayer}
     */
    Outlayer.data = function( elem ) {
        elem = utils.getQueryElement( elem );
        var id = elem && elem.outlayerGUID;
        return id && instances[ id ];
    };


// -------------------------- create Outlayer class -------------------------- //

    /**
     * create a layout class
     * @param {String} namespace
     */
    Outlayer.create = function( namespace, options ) {
        // sub-class Outlayer
        var Layout = subclass( Outlayer );
        // apply new options and compatOptions
        Layout.defaults = utils.extend( {}, Outlayer.defaults );
        utils.extend( Layout.defaults, options );
        Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

        Layout.namespace = namespace;

        Layout.data = Outlayer.data;

        // sub-class Item
        Layout.Item = subclass( Item );

        // -------------------------- declarative -------------------------- //

        utils.htmlInit( Layout, namespace );

        // -------------------------- jQuery bridge -------------------------- //

        // make into jQuery plugin
        if ( jQuery && jQuery.bridget ) {
            jQuery.bridget( namespace, Layout );
        }

        return Layout;
    };

    function subclass( Parent ) {
        function SubClass() {
            Parent.apply( this, arguments );
        }

        SubClass.prototype = Object.create( Parent.prototype );
        SubClass.prototype.constructor = SubClass;

        return SubClass;
    }

// ----- helpers ----- //

// how many milliseconds are in each unit
    var msUnits = {
        ms: 1,
        s: 1000
    };

// munge time-like parameter into millisecond number
// '0.4s' -> 40
    function getMilliseconds( time ) {
        if ( typeof time == 'number' ) {
            return time;
        }
        var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if ( !num.length ) {
            return 0;
        }
        num = parseFloat( num );
        var mult = msUnits[ unit ] || 1;
        return num * mult;
    }

// ----- fin ----- //

// back in global
    Outlayer.Item = Item;

    return Outlayer;

}));

/**
 * Isotope Item
 **/

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'isotope/js/item',[
            'outlayer/outlayer'
        ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            require('outlayer')
        );
    } else {
        // browser global
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(
            window.Outlayer
        );
    }

}( window, function factory( Outlayer ) {
    'use strict';

// -------------------------- Item -------------------------- //

// sub-class Outlayer Item
    function Item() {
        Outlayer.Item.apply( this, arguments );
    }

    var proto = Item.prototype = Object.create( Outlayer.Item.prototype );

    var _create = proto._create;
    proto._create = function() {
        // assign id, used for original-order sorting
        this.id = this.layout.itemGUID++;
        _create.call( this );
        this.sortData = {};
    };

    proto.updateSortData = function() {
        if ( this.isIgnored ) {
            return;
        }
        // default sorters
        this.sortData.id = this.id;
        // for backward compatibility
        this.sortData['original-order'] = this.id;
        this.sortData.random = Math.random();
        // go thru getSortData obj and apply the sorters
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for ( var key in getSortData ) {
            var sorter = sorters[ key ];
            this.sortData[ key ] = sorter( this.element, this );
        }
    };

    var _destroy = proto.destroy;
    proto.destroy = function() {
        // call super
        _destroy.apply( this, arguments );
        // reset display, #741
        this.css({
            display: ''
        });
    };

    return Item;

}));

/**
 * Isotope LayoutMode
 */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'isotope/js/layout-mode',[
            'get-size/get-size',
            'outlayer/outlayer'
        ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            require('get-size'),
            require('outlayer')
        );
    } else {
        // browser global
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(
            window.getSize,
            window.Outlayer
        );
    }

}( window, function factory( getSize, Outlayer ) {
    'use strict';

    // layout mode class
    function LayoutMode( isotope ) {
        this.isotope = isotope;
        // link properties
        if ( isotope ) {
            this.options = isotope.options[ this.namespace ];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size;
        }
    }

    var proto = LayoutMode.prototype;

    /**
     * some methods should just defer to default Outlayer method
     * and reference the Isotope instance as `this`
     **/
    var facadeMethods = [
        '_resetLayout',
        '_getItemLayoutPosition',
        '_manageStamp',
        '_getContainerSize',
        '_getElementOffset',
        'needsResizeLayout',
        '_getOption'
    ];

    facadeMethods.forEach( function( methodName ) {
        proto[ methodName ] = function() {
            return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
        };
    });

    // -----  ----- //

    // for horizontal layout modes, check vertical size
    proto.needsVerticalResizeLayout = function() {
        // don't trigger if size did not change
        var size = getSize( this.isotope.element );
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    };

    // ----- measurements ----- //

    proto._getMeasurement = function() {
        this.isotope._getMeasurement.apply( this, arguments );
    };

    proto.getColumnWidth = function() {
        this.getSegmentSize( 'column', 'Width' );
    };

    proto.getRowHeight = function() {
        this.getSegmentSize( 'row', 'Height' );
    };

    /**
     * get columnWidth or rowHeight
     * segment: 'column' or 'row'
     * size 'Width' or 'Height'
     **/
    proto.getSegmentSize = function( segment, size ) {
        var segmentName = segment + size;
        var outerSize = 'outer' + size;
        // columnWidth / outerWidth // rowHeight / outerHeight
        this._getMeasurement( segmentName, outerSize );
        // got rowHeight or columnWidth, we can chill
        if ( this[ segmentName ] ) {
            return;
        }
        // fall back to item of first element
        var firstItemSize = this.getFirstItemSize();
        this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
            // or size of container
            this.isotope.size[ 'inner' + size ];
    };

    proto.getFirstItemSize = function() {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize( firstItem.element );
    };

    // ----- methods that should reference isotope ----- //

    proto.layout = function() {
        this.isotope.layout.apply( this.isotope, arguments );
    };

    proto.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size;
    };

    // -------------------------- create -------------------------- //

    LayoutMode.modes = {};

    LayoutMode.create = function( namespace, options ) {

        function Mode() {
            LayoutMode.apply( this, arguments );
        }

        Mode.prototype = Object.create( proto );
        Mode.prototype.constructor = Mode;

        // default options
        if ( options ) {
            Mode.options = options;
        }

        Mode.prototype.namespace = namespace;
        // register in Isotope
        LayoutMode.modes[ namespace ] = Mode;

        return Mode;
    };

    return LayoutMode;

}));

/*!
 * Masonry v4.1.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'masonry/masonry',[
            'outlayer/outlayer',
            'get-size/get-size'
        ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            require('outlayer'),
            require('get-size')
        );
    } else {
        // browser global
        window.Masonry = factory(
            window.Outlayer,
            window.getSize
        );
    }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

    // create an Outlayer layout class
    var Masonry = Outlayer.create('masonry');
    // isFitWidth -> fitWidth
    Masonry.compatOptions.fitWidth = 'isFitWidth';

    Masonry.prototype._resetLayout = function() {
        this.getSize();
        this._getMeasurement( 'columnWidth', 'outerWidth' );
        this._getMeasurement( 'gutter', 'outerWidth' );
        this.measureColumns();

        // reset column Y
        this.colYs = [];
        for ( var i=0; i < this.cols; i++ ) {
            this.colYs.push( 0 );
        }

        this.maxY = 0;
    };

    Masonry.prototype.measureColumns = function() {
        this.getContainerWidth();
        // if columnWidth is 0, default to outerWidth of first item
        if ( !this.columnWidth ) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            // columnWidth fall back to item of first element
            this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
                // if first elem has no width, default to size of container
                this.containerWidth;
        }

        var columnWidth = this.columnWidth += this.gutter;

        // calculate columns
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        // fix rounding errors, typically with gutters
        var excess = columnWidth - containerWidth % columnWidth;
        // if overshoot is less than a pixel, round up, otherwise floor it
        var mathMethod = excess && excess < 1 ? 'round' : 'floor';
        cols = Math[ mathMethod ]( cols );
        this.cols = Math.max( cols, 1 );
    };

    Masonry.prototype.getContainerWidth = function() {
        // container is parent if fit width
        var isFitWidth = this._getOption('fitWidth');
        var container = isFitWidth ? this.element.parentNode : this.element;
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var size = getSize( container );
        this.containerWidth = size && size.innerWidth;
    };

    Masonry.prototype._getItemLayoutPosition = function( item ) {
        item.getSize();
        // how many columns does this brick span
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
        // round if off by 1 pixel, otherwise use ceil
        var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
        colSpan = Math.min( colSpan, this.cols );

        var colGroup = this._getColGroup( colSpan );
        // get the minimum Y value from the columns
        var minimumY = Math.min.apply( Math, colGroup );
        var shortColIndex = colGroup.indexOf( minimumY );

        // position the brick
        var position = {
            x: this.columnWidth * shortColIndex,
            y: minimumY
        };

        // apply setHeight to necessary columns
        var setHeight = minimumY + item.size.outerHeight;
        var setSpan = this.cols + 1 - colGroup.length;
        for ( var i = 0; i < setSpan; i++ ) {
            this.colYs[ shortColIndex + i ] = setHeight;
        }

        return position;
    };

    /**
     * @param {Number} colSpan - number of columns the element spans
     * @returns {Array} colGroup
     */
    Masonry.prototype._getColGroup = function( colSpan ) {
        if ( colSpan < 2 ) {
            // if brick spans only one column, use all the column Ys
            return this.colYs;
        }

        var colGroup = [];
        // how many different places could this brick fit horizontally
        var groupCount = this.cols + 1 - colSpan;
        // for each group potential horizontal position
        for ( var i = 0; i < groupCount; i++ ) {
            // make an array of colY values for that one group
            var groupColYs = this.colYs.slice( i, i + colSpan );
            // and get the max value of the array
            colGroup[i] = Math.max.apply( Math, groupColYs );
        }
        return colGroup;
    };

    Masonry.prototype._manageStamp = function( stamp ) {
        var stampSize = getSize( stamp );
        var offset = this._getElementOffset( stamp );
        // get the columns that this stamp affects
        var isOriginLeft = this._getOption('originLeft');
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor( firstX / this.columnWidth );
        firstCol = Math.max( 0, firstCol );
        var lastCol = Math.floor( lastX / this.columnWidth );
        // lastCol should not go over if multiple of columnWidth #425
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min( this.cols - 1, lastCol );
        // set colYs to bottom of the stamp

        var isOriginTop = this._getOption('originTop');
        var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
            stampSize.outerHeight;
        for ( var i = firstCol; i <= lastCol; i++ ) {
            this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
        }
    };

    Masonry.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply( Math, this.colYs );
        var size = {
            height: this.maxY
        };

        if ( this._getOption('fitWidth') ) {
            size.width = this._getContainerFitWidth();
        }

        return size;
    };

    Masonry.prototype._getContainerFitWidth = function() {
        var unusedCols = 0;
        // count unused columns
        var i = this.cols;
        while ( --i ) {
            if ( this.colYs[i] !== 0 ) {
                break;
            }
            unusedCols++;
        }
        // fit container to columns that have been used
        return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
    };

    Masonry.prototype.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
    };

    return Masonry;

}));

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * http://masonry.desandro.com
 */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'isotope/js/layout-modes/masonry',[
            '../layout-mode',
            'masonry/masonry'
        ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            require('../layout-mode'),
            require('masonry-layout')
        );
    } else {
        // browser global
        factory(
            window.Isotope.LayoutMode,
            window.Masonry
        );
    }

}( window, function factory( LayoutMode, Masonry ) {
    'use strict';

// -------------------------- masonryDefinition -------------------------- //

    // create an Outlayer layout class
    var MasonryMode = LayoutMode.create('masonry');

    var proto = MasonryMode.prototype;

    var keepModeMethods = {
        _getElementOffset: true,
        layout: true,
        _getMeasurement: true
    };

    // inherit Masonry prototype
    for ( var method in Masonry.prototype ) {
        // do not inherit mode methods
        if ( !keepModeMethods[ method ] ) {
            proto[ method ] = Masonry.prototype[ method ];
        }
    }

    var measureColumns = proto.measureColumns;
    proto.measureColumns = function() {
        // set items, used if measuring first item
        this.items = this.isotope.filteredItems;
        measureColumns.call( this );
    };

    // point to mode options for fitWidth
    var _getOption = proto._getOption;
    proto._getOption = function( option ) {
        if ( option == 'fitWidth' ) {
            return this.options.isFitWidth !== undefined ?
                this.options.isFitWidth : this.options.fitWidth;
        }
        return _getOption.apply( this.isotope, arguments );
    };

    return MasonryMode;

}));

/**
 * fitRows layout mode
 */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'isotope/js/layout-modes/fit-rows',[
            '../layout-mode'
        ],
            factory );
    } else if ( typeof exports == 'object' ) {
        // CommonJS
        module.exports = factory(
            require('../layout-mode')
        );
    } else {
        // browser global
        factory(
            window.Isotope.LayoutMode
        );
    }

}( window, function factory( LayoutMode ) {
    'use strict';

    var FitRows = LayoutMode.create('fitRows');

    var proto = FitRows.prototype;

    proto._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement( 'gutter', 'outerWidth' );
    };

    proto._getItemLayoutPosition = function( item ) {
        item.getSize();

        var itemWidth = item.size.outerWidth + this.gutter;
        // if this element cannot fit in the current row
        var containerWidth = this.isotope.size.innerWidth + this.gutter;
        if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
            this.x = 0;
            this.y = this.maxY;
        }

        var position = {
            x: this.x,
            y: this.y
        };

        this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
        this.x += itemWidth;

        return position;
    };

    proto._getContainerSize = function() {
        return { height: this.maxY };
    };

    return FitRows;

}));

/**
 * vertical layout mode
 */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'isotope/js/layout-modes/vertical',[
            '../layout-mode'
        ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            require('../layout-mode')
        );
    } else {
        // browser global
        factory(
            window.Isotope.LayoutMode
        );
    }

}( window, function factory( LayoutMode ) {
    'use strict';

    var Vertical = LayoutMode.create( 'vertical', {
        horizontalAlignment: 0
    });

    var proto = Vertical.prototype;

    proto._resetLayout = function() {
        this.y = 0;
    };

    proto._getItemLayoutPosition = function( item ) {
        item.getSize();
        var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
            this.options.horizontalAlignment;
        var y = this.y;
        this.y += item.size.outerHeight;
        return { x: x, y: y };
    };

    proto._getContainerSize = function() {
        return { height: this.y };
    };

    return Vertical;

}));

/*!
 * Isotope v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( [
            'outlayer/outlayer',
            'get-size/get-size',
            'desandro-matches-selector/matches-selector',
            'fizzy-ui-utils/utils',
            'isotope/js/item',
            'isotope/js/layout-mode',
            // include default layout modes
            'isotope/js/layout-modes/masonry',
            'isotope/js/layout-modes/fit-rows',
            'isotope/js/layout-modes/vertical'
        ],
            function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
                return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
            });
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            window,
            require('outlayer'),
            require('get-size'),
            require('desandro-matches-selector'),
            require('fizzy-ui-utils'),
            require('isotope/js/item'),
            require('isotope/js/layout-mode'),
            // include default layout modes
            require('isotope/js/layout-modes/masonry'),
            require('isotope/js/layout-modes/fit-rows'),
            require('isotope/js/layout-modes/vertical')
        );
    } else {
        // browser global
        window.Isotope = factory(
            window,
            window.Outlayer,
            window.getSize,
            window.matchesSelector,
            window.fizzyUIUtils,
            window.Isotope.Item,
            window.Isotope.LayoutMode
        );
    }

}( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
                             Item, LayoutMode ) {



// -------------------------- vars -------------------------- //

    var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

    var trim = String.prototype.trim ?
        function( str ) {
            return str.trim();
        } :
        function( str ) {
            return str.replace( /^\s+|\s+$/g, '' );
        };

// -------------------------- isotopeDefinition -------------------------- //

    // create an Outlayer layout class
    var Isotope = Outlayer.create( 'isotope', {
        layoutMode: 'masonry',
        isJQueryFiltering: true,
        sortAscending: true
    });

    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;

    var proto = Isotope.prototype;

    proto._create = function() {
        this.itemGUID = 0;
        // functions that sort items
        this._sorters = {};
        this._getSorters();
        // call super
        Outlayer.prototype._create.call( this );

        // create layout modes
        this.modes = {};
        // start filteredItems with all items
        this.filteredItems = this.items;
        // keep of track of sortBys
        this.sortHistory = [ 'original-order' ];
        // create from registered layout modes
        for ( var name in LayoutMode.modes ) {
            this._initLayoutMode( name );
        }
    };

    proto.reloadItems = function() {
        // reset item ID counter
        this.itemGUID = 0;
        // call super
        Outlayer.prototype.reloadItems.call( this );
    };

    proto._itemize = function() {
        var items = Outlayer.prototype._itemize.apply( this, arguments );
        // assign ID for original-order
        for ( var i=0; i < items.length; i++ ) {
            var item = items[i];
            item.id = this.itemGUID++;
        }
        this._updateItemsSortData( items );
        return items;
    };


    // -------------------------- layout -------------------------- //

    proto._initLayoutMode = function( name ) {
        var Mode = LayoutMode.modes[ name ];
        // set mode options
        // HACK extend initial options, back-fill in default options
        var initialOpts = this.options[ name ] || {};
        this.options[ name ] = Mode.options ?
            utils.extend( Mode.options, initialOpts ) : initialOpts;
        // init layout mode instance
        this.modes[ name ] = new Mode( this );
    };


    proto.layout = function() {
        // if first time doing layout, do all magic
        if ( !this._isLayoutInited && this._getOption('initLayout') ) {
            this.arrange();
            return;
        }
        this._layout();
    };

    // private method to be used in layout() & magic()
    proto._layout = function() {
        // don't animate first layout
        var isInstant = this._getIsInstant();
        // layout flow
        this._resetLayout();
        this._manageStamps();
        this.layoutItems( this.filteredItems, isInstant );

        // flag for initalized
        this._isLayoutInited = true;
    };

    // filter + sort + layout
    proto.arrange = function( opts ) {
        // set any options pass
        this.option( opts );
        this._getIsInstant();
        // filter, sort, and layout

        // filter
        var filtered = this._filter( this.items );
        this.filteredItems = filtered.matches;

        this._bindArrangeComplete();

        if ( this._isInstant ) {
            this._noTransition( this._hideReveal, [ filtered ] );
        } else {
            this._hideReveal( filtered );
        }

        this._sort();
        this._layout();
    };
    // alias to _init for main plugin method
    proto._init = proto.arrange;

    proto._hideReveal = function( filtered ) {
        this.reveal( filtered.needReveal );
        this.hide( filtered.needHide );
    };

    // HACK
    // Don't animate/transition first layout
    // Or don't animate/transition other layouts
    proto._getIsInstant = function() {
        var isLayoutInstant = this._getOption('layoutInstant');
        var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
            !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant;
    };

    // listen for layoutComplete, hideComplete and revealComplete
    // to trigger arrangeComplete
    proto._bindArrangeComplete = function() {
        // listen for 3 events to trigger arrangeComplete
        var isLayoutComplete, isHideComplete, isRevealComplete;
        var _this = this;
        function arrangeParallelCallback() {
            if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
                _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
            }
        }
        this.once( 'layoutComplete', function() {
            isLayoutComplete = true;
            arrangeParallelCallback();
        });
        this.once( 'hideComplete', function() {
            isHideComplete = true;
            arrangeParallelCallback();
        });
        this.once( 'revealComplete', function() {
            isRevealComplete = true;
            arrangeParallelCallback();
        });
    };

    // -------------------------- filter -------------------------- //

    proto._filter = function( items ) {
        var filter = this.options.filter;
        filter = filter || '*';
        var matches = [];
        var hiddenMatched = [];
        var visibleUnmatched = [];

        var test = this._getFilterTest( filter );

        // test each item
        for ( var i=0; i < items.length; i++ ) {
            var item = items[i];
            if ( item.isIgnored ) {
                continue;
            }
            // add item to either matched or unmatched group
            var isMatched = test( item );
            // item.isFilterMatched = isMatched;
            // add to matches if its a match
            if ( isMatched ) {
                matches.push( item );
            }
            // add to additional group if item needs to be hidden or revealed
            if ( isMatched && item.isHidden ) {
                hiddenMatched.push( item );
            } else if ( !isMatched && !item.isHidden ) {
                visibleUnmatched.push( item );
            }
        }

        // return collections of items to be manipulated
        return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched
        };
    };

    // get a jQuery, function, or a matchesSelector test given the filter
    proto._getFilterTest = function( filter ) {
        if ( jQuery && this.options.isJQueryFiltering ) {
            // use jQuery
            return function( item ) {
                return jQuery( item.element ).is( filter );
            };
        }
        if ( typeof filter == 'function' ) {
            // use filter as function
            return function( item ) {
                return filter( item.element );
            };
        }
        // default, use filter as selector string
        return function( item ) {
            return matchesSelector( item.element, filter );
        };
    };

    // -------------------------- sorting -------------------------- //

    /**
     * @params {Array} elems
     * @public
     */
    proto.updateSortData = function( elems ) {
        // get items
        var items;
        if ( elems ) {
            elems = utils.makeArray( elems );
            items = this.getItems( elems );
        } else {
            // update all items if no elems provided
            items = this.items;
        }

        this._getSorters();
        this._updateItemsSortData( items );
    };

    proto._getSorters = function() {
        var getSortData = this.options.getSortData;
        for ( var key in getSortData ) {
            var sorter = getSortData[ key ];
            this._sorters[ key ] = mungeSorter( sorter );
        }
    };

    /**
     * @params {Array} items - of Isotope.Items
     * @private
     */
    proto._updateItemsSortData = function( items ) {
        // do not update if no items
        var len = items && items.length;

        for ( var i=0; len && i < len; i++ ) {
            var item = items[i];
            item.updateSortData();
        }
    };

    // ----- munge sorter ----- //

    // encapsulate this, as we just need mungeSorter
    // other functions in here are just for munging
    var mungeSorter = ( function() {
        // add a magic layer to sorters for convienent shorthands
        // `.foo-bar` will use the text of .foo-bar querySelector
        // `[foo-bar]` will use attribute
        // you can also add parser
        // `.foo-bar parseInt` will parse that as a number
        function mungeSorter( sorter ) {
            // if not a string, return function or whatever it is
            if ( typeof sorter != 'string' ) {
                return sorter;
            }
            // parse the sorter string
            var args = trim( sorter ).split(' ');
            var query = args[0];
            // check if query looks like [an-attribute]
            var attrMatch = query.match( /^\[(.+)\]$/ );
            var attr = attrMatch && attrMatch[1];
            var getValue = getValueGetter( attr, query );
            // use second argument as a parser
            var parser = Isotope.sortDataParsers[ args[1] ];
            // parse the value, if there was a parser
            sorter = parser ? function( elem ) {
                return elem && parser( getValue( elem ) );
            } :
                // otherwise just return value
                function( elem ) {
                    return elem && getValue( elem );
                };

            return sorter;
        }

        // get an attribute getter, or get text of the querySelector
        function getValueGetter( attr, query ) {
            // if query looks like [foo-bar], get attribute
            if ( attr ) {
                return function getAttribute( elem ) {
                    return elem.getAttribute( attr );
                };
            }

            // otherwise, assume its a querySelector, and get its text
            return function getChildText( elem ) {
                var child = elem.querySelector( query );
                return child && child.textContent;
            };
        }

        return mungeSorter;
    })();

    // parsers used in getSortData shortcut strings
    Isotope.sortDataParsers = {
        'parseInt': function( val ) {
            return parseInt( val, 10 );
        },
        'parseFloat': function( val ) {
            return parseFloat( val );
        }
    };

    // ----- sort method ----- //

    // sort filteredItem order
    proto._sort = function() {
        var sortByOpt = this.options.sortBy;
        if ( !sortByOpt ) {
            return;
        }
        // concat all sortBy and sortHistory
        var sortBys = [].concat.apply( sortByOpt, this.sortHistory );
        // sort magic
        var itemSorter = getItemSorter( sortBys, this.options.sortAscending );
        this.filteredItems.sort( itemSorter );
        // keep track of sortBy History
        if ( sortByOpt != this.sortHistory[0] ) {
            // add to front, oldest goes in last
            this.sortHistory.unshift( sortByOpt );
        }
    };

    // returns a function used for sorting
    function getItemSorter( sortBys, sortAsc ) {
        return function sorter( itemA, itemB ) {
            // cycle through all sortKeys
            for ( var i = 0; i < sortBys.length; i++ ) {
                var sortBy = sortBys[i];
                var a = itemA.sortData[ sortBy ];
                var b = itemB.sortData[ sortBy ];
                if ( a > b || a < b ) {
                    // if sortAsc is an object, use the value given the sortBy key
                    var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
                    var direction = isAscending ? 1 : -1;
                    return ( a > b ? 1 : -1 ) * direction;
                }
            }
            return 0;
        };
    }

    // -------------------------- methods -------------------------- //

    // get layout mode
    proto._mode = function() {
        var layoutMode = this.options.layoutMode;
        var mode = this.modes[ layoutMode ];
        if ( !mode ) {
            // TODO console.error
            throw new Error( 'No layout mode: ' + layoutMode );
        }
        // HACK sync mode's options
        // any options set after init for layout mode need to be synced
        mode.options = this.options[ layoutMode ];
        return mode;
    };

    proto._resetLayout = function() {
        // trigger original reset layout
        Outlayer.prototype._resetLayout.call( this );
        this._mode()._resetLayout();
    };

    proto._getItemLayoutPosition = function( item  ) {
        return this._mode()._getItemLayoutPosition( item );
    };

    proto._manageStamp = function( stamp ) {
        this._mode()._manageStamp( stamp );
    };

    proto._getContainerSize = function() {
        return this._mode()._getContainerSize();
    };

    proto.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
    };

    // -------------------------- adding & removing -------------------------- //

    // HEADS UP overwrites default Outlayer appended
    proto.appended = function( elems ) {
        var items = this.addItems( elems );
        if ( !items.length ) {
            return;
        }
        // filter, layout, reveal new items
        var filteredItems = this._filterRevealAdded( items );
        // add to filteredItems
        this.filteredItems = this.filteredItems.concat( filteredItems );
    };

    // HEADS UP overwrites default Outlayer prepended
    proto.prepended = function( elems ) {
        var items = this._itemize( elems );
        if ( !items.length ) {
            return;
        }
        // start new layout
        this._resetLayout();
        this._manageStamps();
        // filter, layout, reveal new items
        var filteredItems = this._filterRevealAdded( items );
        // layout previous items
        this.layoutItems( this.filteredItems );
        // add to items and filteredItems
        this.filteredItems = filteredItems.concat( this.filteredItems );
        this.items = items.concat( this.items );
    };

    proto._filterRevealAdded = function( items ) {
        var filtered = this._filter( items );
        this.hide( filtered.needHide );
        // reveal all new items
        this.reveal( filtered.matches );
        // layout new items, no transition
        this.layoutItems( filtered.matches, true );
        return filtered.matches;
    };

    /**
     * Filter, sort, and layout newly-appended item elements
     * @param {Array or NodeList or Element} elems
     */
    proto.insert = function( elems ) {
        var items = this.addItems( elems );
        if ( !items.length ) {
            return;
        }
        // append item elements
        var i, item;
        var len = items.length;
        for ( i=0; i < len; i++ ) {
            item = items[i];
            this.element.appendChild( item.element );
        }
        // filter new stuff
        var filteredInsertItems = this._filter( items ).matches;
        // set flag
        for ( i=0; i < len; i++ ) {
            items[i].isLayoutInstant = true;
        }
        this.arrange();
        // reset flag
        for ( i=0; i < len; i++ ) {
            delete items[i].isLayoutInstant;
        }
        this.reveal( filteredInsertItems );
    };

    var _remove = proto.remove;
    proto.remove = function( elems ) {
        elems = utils.makeArray( elems );
        var removeItems = this.getItems( elems );
        // do regular thing
        _remove.call( this, elems );
        // bail if no items to remove
        var len = removeItems && removeItems.length;
        // remove elems from filteredItems
        for ( var i=0; len && i < len; i++ ) {
            var item = removeItems[i];
            // remove item from collection
            utils.removeFrom( this.filteredItems, item );
        }
    };

    proto.shuffle = function() {
        // update random sortData
        for ( var i=0; i < this.items.length; i++ ) {
            var item = this.items[i];
            item.sortData.random = Math.random();
        }
        this.options.sortBy = 'random';
        this._sort();
        this._layout();
    };

    /**
     * trigger fn without transition
     * kind of hacky to have this in the first place
     * @param {Function} fn
     * @param {Array} args
     * @returns ret
     * @private
     */
    proto._noTransition = function( fn, args ) {
        // save transitionDuration before disabling
        var transitionDuration = this.options.transitionDuration;
        // disable transition
        this.options.transitionDuration = 0;
        // do it
        var returnValue = fn.apply( this, args );
        // re-enable transition for reveal
        this.options.transitionDuration = transitionDuration;
        return returnValue;
    };

    // ----- helper methods ----- //

    /**
     * getter method for getting filtered item elements
     * @returns {Array} elems - collection of item elements
     */
    proto.getFilteredItemElements = function() {
        return this.filteredItems.map( function( item ) {
            return item.element;
        });
    };

    // -----  ----- //

    return Isotope;

}));

/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
    $.fn.appear = function(fn, options) {
        var settings = $.extend({
            //arbitrary data to pass to fn
            data: undefined,
            //call fn only on the first appear?
            one: true,
            // X & Y accuracy
            accX: 0,
            accY: 0
        }, options);

        return this.each(function() {
            var t = $(this);
            //whether the element is currently visible
            t.appeared = false;
            if (!fn) {
                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }
            var w = $(window);
            //fires the appear event when appropriate

            var check = function() {
                //is the element hidden?
                if (!t.is(':visible')) {
                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {
                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);
                } else {
                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function() {
                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {
                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);
            //check whenever the window scrolls
            w.scroll(check);
            //check whenever the dom changes
            $.fn.appear.checks.push(check);
            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        //process the queue
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) {
                if (typeof $.fn.appear.checks[length] == 'function')
                    ($.fn.appear.checks[length])();
            }
        },
        //check the queue asynchronously
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });
})(jQuery);

/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.4
 **/
(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    }
    else if(typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    }
    else {
        factory(root.jQuery);
    }
}(this, function($) {

/**
 * Renderer to render the chart on a canvas object
 * @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
 * @param {object}     options options object of the plugin
 */
var CanvasRenderer = function(el, options) {
	var cachedBackground;
	var canvas = document.createElement('canvas');
	el.appendChild(canvas);
	if (typeof(G_vmlCanvasManager) !== 'undefined') {
		G_vmlCanvasManager.initElement(canvas);
	}
	var ctx = canvas.getContext('2d');
	canvas.width = canvas.height = options.size;
	// canvas on retina devices
	var scaleBy = 1;

	if (window.devicePixelRatio > 1) {
		scaleBy = window.devicePixelRatio;
		canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
		canvas.width = canvas.height = options.size * scaleBy;
		ctx.scale(scaleBy, scaleBy);
	}

	// move 0,0 coordinates to the center
	ctx.translate(options.size / 2, options.size / 2);
	// rotate canvas -90deg
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);
	var radius = (options.size - options.lineWidth) / 2;
	if (options.scaleColor && options.scaleLength) {
		radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
	}

	// IE polyfill for Date
	Date.now = Date.now || function() {
		return +(new Date());
	};

	/**
	 * Draw a circle around the center of the canvas
	 * @param {strong} color     Valid CSS color string
	 * @param {number} lineWidth Width of the line in px
	 * @param {number} percent   Percentage to draw (float between -1 and 1)
	 */
	var drawCircle = function(color, lineWidth, percent) {

		percent = Math.min(Math.max(-1, percent || 0), 1);

		var isNegative = percent <= 0 ? true : false;

		ctx.beginPath();

		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);

		ctx.strokeStyle = color;

		ctx.lineWidth = lineWidth;

		ctx.stroke();

	};

	/**

	 * Draw the scale of the chart

	 */

	var drawScale = function() {

		var offset;

		var length;

		ctx.lineWidth = 1;

		ctx.fillStyle = options.scaleColor;

		ctx.save();

		for (var i = 24; i > 0; --i) {

			if (i % 6 === 0) {

				length = options.scaleLength;

				offset = 0;

			} else {

				length = options.scaleLength * 0.6;

				offset = options.scaleLength - length;

			}

			ctx.fillRect(-options.size/2 + offset, 0, length, 1);

			ctx.rotate(Math.PI / 12);

		}

		ctx.restore();

	};

	/**

	 * Request animation frame wrapper with polyfill

	 * @return {function} Request animation frame method or timeout fallback

	 */

	var reqAnimationFrame = (function() {

		return  window.requestAnimationFrame ||

				window.webkitRequestAnimationFrame ||

				window.mozRequestAnimationFrame ||

				function(callback) {

					window.setTimeout(callback, 1000 / 60);

				};

	}());

	/**

	 * Draw the background of the plugin including the scale and the track

	 */

	var drawBackground = function() {

		if(options.scaleColor) drawScale();

		if(options.trackColor) drawCircle(options.trackColor, options.lineWidth, 1);

	};

  /**

    * Canvas accessor

   */

  this.getCanvas = function() {

    return canvas;

  };

  

  /**

    * Canvas 2D context 'ctx' accessor

   */

  this.getCtx = function() {

    return ctx;

  };

	/**

	 * Clear the complete canvas

	 */

	this.clear = function() {

		ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);

	};

	/**

	 * Draw the complete chart

	 * @param {number} percent Percent shown by the chart between -100 and 100

	 */

	this.draw = function(percent) {

		// do we need to render a background

		if (!!options.scaleColor || !!options.trackColor) {

			// getImageData and putImageData are supported

			if (ctx.getImageData && ctx.putImageData) {

				if (!cachedBackground) {

					drawBackground();

					cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);

				} else {

					ctx.putImageData(cachedBackground, 0, 0);

				}

			} else {

				this.clear();

				drawBackground();

			}

		} else {

			this.clear();

		}

		ctx.lineCap = options.lineCap;

		// if barcolor is a function execute it and pass the percent as a value

		var color;

		if (typeof(options.barColor) === 'function') {

			color = options.barColor(percent);

		} else {

			color = options.barColor;

		}

		// draw bar

		drawCircle(color, options.lineWidth, percent / 100);

	}.bind(this);

	/**

	 * Animate from some percent to some other percentage

	 * @param {number} from Starting percentage

	 * @param {number} to   Final percentage

	 */

	this.animate = function(from, to) {

		var startTime = Date.now();

		options.onStart(from, to);

		var animation = function() {

			var process = Math.min(Date.now() - startTime, options.animate.duration);

			var currentValue = options.easing(this, process, from, to - from, options.animate.duration);

			this.draw(currentValue);

			options.onStep(from, to, currentValue);

			if (process >= options.animate.duration) {

				options.onStop(from, to);

			} else {

				reqAnimationFrame(animation);

			}

		}.bind(this);

		reqAnimationFrame(animation);

	}.bind(this);

};

var EasyPieChart = function(el, opts) {

	var defaultOptions = {

		barColor: '#ef1e25',

		trackColor: '#f9f9f9',

		scaleColor: '#dfe0e0',

		scaleLength: 5,

		lineCap: 'round',

		lineWidth: 3,

		size: 110,

		rotate: 0,

		animate: {

			duration: 1000,

			enabled: true

		},

		easing: function (x, t, b, c, d) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/

			t = t / (d/2);

			if (t < 1) {

				return c / 2 * t * t + b;

			}

			return -c/2 * ((--t)*(t-2) - 1) + b;

		},

		onStart: function(from, to) {

			return;

		},

		onStep: function(from, to, currentValue) {

			return;

		},

		onStop: function(from, to) {

			return;

		}

	};

	// detect present renderer

	if (typeof(CanvasRenderer) !== 'undefined') {

		defaultOptions.renderer = CanvasRenderer;

	} else if (typeof(SVGRenderer) !== 'undefined') {

		defaultOptions.renderer = SVGRenderer;

	} else {

		throw new Error('Please load either the SVG- or the CanvasRenderer');

	}

	var options = {};

	var currentValue = 0;

	/**

	 * Initialize the plugin by creating the options object and initialize rendering

	 */

	var init = function() {

		this.el = el;

		this.options = options;

		// merge user options into default options

		for (var i in defaultOptions) {

			if (defaultOptions.hasOwnProperty(i)) {

				options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];

				if (typeof(options[i]) === 'function') {

					options[i] = options[i].bind(this);

				}

			}

		}

		// check for jQuery easing

		if (typeof(options.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[options.easing])) {

			options.easing = jQuery.easing[options.easing];

		} else {

			options.easing = defaultOptions.easing;

		}

		// process earlier animate option to avoid bc breaks

		if (typeof(options.animate) === 'number') {

			options.animate = {

				duration: options.animate,

				enabled: true

			};

		}

		if (typeof(options.animate) === 'boolean' && !options.animate) {

			options.animate = {

				duration: 1000,

				enabled: options.animate

			};

		}

		// create renderer

		this.renderer = new options.renderer(el, options);

		// initial draw

		this.renderer.draw(currentValue);

		// initial update

		if (el.dataset && el.dataset.percent) {

			this.update(parseFloat(el.dataset.percent));

		} else if (el.getAttribute && el.getAttribute('data-percent')) {

			this.update(parseFloat(el.getAttribute('data-percent')));

		}

	}.bind(this);

	/**

	 * Update the value of the chart

	 * @param  {number} newValue Number between 0 and 100

	 * @return {object}          Instance of the plugin for method chaining

	 */

	this.update = function(newValue) {

		newValue = parseFloat(newValue);

		if (options.animate.enabled) {

			this.renderer.animate(currentValue, newValue);

		} else {

			this.renderer.draw(newValue);

		}

		currentValue = newValue;

		return this;

	}.bind(this);

	/**

	 * Disable animation

	 * @return {object} Instance of the plugin for method chaining

	 */

	this.disableAnimation = function() {

		options.animate.enabled = false;

		return this;

	};

	/**

	 * Enable animation

	 * @return {object} Instance of the plugin for method chaining

	 */

	this.enableAnimation = function() {

		options.animate.enabled = true;

		return this;

	};

	init();

};

$.fn.easyPieChart = function(options) {

	return this.each(function() {

		var instanceOptions;

		if (!$.data(this, 'easyPieChart')) {

			instanceOptions = $.extend({}, options, $(this).data());

			$.data(this, 'easyPieChart', new EasyPieChart(this, instanceOptions));

		}

	});

};

}));

/*global jQuery */

/*jshint browser:true */

/*!

* FitVids 1.1

*

* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com

* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/

* Released under the WTFPL license - http://sam.zoy.org/wtfpl/

*

*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {

    var settings = {

      customSelector: null

    };

    if(!document.getElementById('fit-vids-style')) {

      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js

      var head = document.head || document.getElementsByTagName('head')[0];

      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';

      var div = document.createElement('div');

      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';

      head.appendChild(div.childNodes[1]);

    }

    if ( options ) {

      $.extend( settings, options );

    }

    return this.each(function(){

      var selectors = [

        "iframe[src*='player.vimeo.com']",

        "iframe[src*='youtube.com']",

        "iframe[src*='youtube-nocookie.com']",

        "iframe[src*='kickstarter.com'][src*='video.html']",

        "object",

        "embed"

      ];

      if (settings.customSelector) {

        selectors.push(settings.customSelector);

      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){

        var $this = $(this);

        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }

        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),

            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),

            aspectRatio = height / width;

        if(!$this.attr('id')){

          var videoID = 'fitvid' + Math.floor(Math.random()*999999);

          $this.attr('id', videoID);

        }

        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");

        $this.removeAttr('height').removeAttr('width');

      });

    });

  };

// Works with either jQuery or Zepto

})( window.jQuery || window.Zepto );

/*

 *	jQuery elevateZoom 3.0.8

 *	Demo's and documentation:

 *	www.elevateweb.co.uk/image-zoom

 *

 *	Copyright (c) 2012 Andrew Eades

 *	www.elevateweb.co.uk

 *

 *	Dual licensed under the GPL and MIT licenses.

 *	http://en.wikipedia.org/wiki/MIT_License

 *	http://en.wikipedia.org/wiki/GNU_General_Public_License

 *

/*

 *	jQuery elevateZoom 3.0.3

 *	Demo's and documentation:

 *	www.elevateweb.co.uk/image-zoom

 *

 *	Copyright (c) 2012 Andrew Eades

 *	www.elevateweb.co.uk

 *

 *	Dual licensed under the GPL and MIT licenses.

 *	http://en.wikipedia.org/wiki/MIT_License

 *	http://en.wikipedia.org/wiki/GNU_General_Public_License

 */

if ( typeof Object.create !== 'function' ) {

	Object.create = function( obj ) {

		function F() {};

		F.prototype = obj;

		return new F();

	};

}

(function( $, window, document, undefined ) {

	var ElevateZoom = {

			init: function( options, elem ) {

				var self = this;

				self.elem = elem;

				self.$elem = $( elem );

                

				self.imageSrc = self.$elem.data("zoom-image") ? self.$elem.data("zoom-image") : self.$elem.attr("src");

				self.options = $.extend( {}, $.fn.elevateZoom.options, options );

				//TINT OVERRIDE SETTINGS

				if(self.options.tint) {

					self.options.lensColour = "none", //colour of the lens background

					self.options.lensOpacity =  "1" //opacity of the lens

				}

				//INNER OVERRIDE SETTINGS

				if(self.options.zoomType == "inner") {self.options.showLens = false;}

                // INIT CONTAINER

                if (self.options.zoomContainer)

                    self.$container = $( self.options.zoomContainer );

                else

                    self.$container = $( 'body' );

				//Remove alt on hover

				self.$elem.parent().removeAttr('title').removeAttr('alt');

				self.zoomImage = self.imageSrc;

				self.refresh( 1 );



				//Create the image swap from the gallery 

				$('#'+self.options.gallery + ' a').click( function(e) { 

					//Set a class on the currently active gallery image

					if(self.options.galleryActiveClass){

						$('#'+self.options.gallery + ' a').removeClass(self.options.galleryActiveClass);

						$(this).addClass(self.options.galleryActiveClass);

					}

					//stop any link on the a tag from working

					e.preventDefault();

					//call the swap image function            

					if($(this).data("zoom-image")){self.zoomImagePre = $(this).data("zoom-image")}

					else{self.zoomImagePre = $(this).data("image");}

					self.swaptheimage($(this).data("image"), self.zoomImagePre);

					return false;

				});

			},

			refresh: function( length ) {

				var self = this;

				setTimeout(function() {

					self.fetch(self.imageSrc);

				}, length || self.options.refresh );

			},

			fetch: function(imgsrc) {

				//get the image

				var self = this;

				var newImg = new Image();

				newImg.onload = function() {

					//set the large image dimensions - used to calculte ratio's

					self.largeWidth = newImg.width;

					self.largeHeight = newImg.height;

					//once image is loaded start the calls

					self.startZoom();

					self.currentImage = self.imageSrc;

					//let caller know image has been loaded

					self.options.onZoomedImageLoaded(self.$elem);

				}

				newImg.src = imgsrc; // this must be done AFTER setting onload

				return;

			},

			startZoom: function( ) {

				var self = this;

				//get dimensions of the non zoomed image

				self.nzWidth = self.$elem.width();

				self.nzHeight = self.$elem.height();

				//activated elements

				self.isWindowActive = false;

				self.isLensActive = false;

				self.isTintActive = false;

				self.overWindow = false;    

				//CrossFade Wrappe

				if(self.options.imageCrossfade){

					self.zoomWrap = self.$elem.wrap('<div style="height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;" class="zoomWrapper" />');        

					self.$elem.css('position', 'absolute'); 

				}

				self.zoomLock = 1;

				self.scrollingLock = false;

				self.changeBgSize = false;

				self.currentZoomLevel = self.options.zoomLevel;

				//get offset of the non zoomed image

				self.nzOffset = self.$elem.offset();

                //get offset of the container

                self.ctOffset = self.$container.offset();

				//calculate the width ratio of the large/small image

				self.widthRatio = (self.largeWidth/self.currentZoomLevel) / self.nzWidth;

				self.heightRatio = (self.largeHeight/self.currentZoomLevel) / self.nzHeight; 

				//if window zoom        

				if(self.options.zoomType == "window") {

					self.zoomWindowStyle = "overflow: hidden;"

						+ "background-position: 0px 0px;text-align:center;"  

						+ "background-color: " + String(self.options.zoomWindowBgColour)            

						+ ";width: " + String(self.options.zoomWindowWidth) + "px;"

						+ "height: " + String(self.options.zoomWindowHeight)

						+ "px;float: left;"

						+ "background-size: "+ self.largeWidth/self.currentZoomLevel+ "px " +self.largeHeight/self.currentZoomLevel + "px;"

						+ "display: none;z-index:100;"

						+ "border: " + String(self.options.borderSize) 

						+ "px solid " + self.options.borderColour 

						+ ";background-repeat: no-repeat;"

						+ "position: absolute;";

				}    

				//if inner  zoom    

				if(self.options.zoomType == "inner") {

					//has a border been put on the image? Lets cater for this

					var borderWidth = self.$elem.css("border-left-width");

					self.zoomWindowStyle = "overflow: hidden;"

						+ "margin-left: -" + String(self.options.borderSize) + "px;" 

						+ "margin-top: -" + String(self.options.borderSize) + "px;"         

						+ "background-position: 0px 0px;"

						+ "width: " + String(self.nzWidth) + "px;"

						+ "height: " + String(self.nzHeight)

						+ "px;float: left;"

						+ "display: none;"

						+ "cursor:"+(self.options.cursor)+";"

                        + "border: " + String(self.options.borderSize)

						+ "px solid " + self.options.borderColour 

						+ ";background-repeat: no-repeat;"

						+ "position: absolute;";

				}    



				//lens style for window zoom

				if(self.options.zoomType == "window") {

					// adjust images less than the window height

					if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){

						lensHeight = self.nzHeight;              

					}

					else{

						lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))

					}

					if(self.largeWidth < self.options.zoomWindowWidth){

						lensWidth = self.nzWidth;

					}       

					else{

						lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);

					}

					self.lensStyle = "background-position: 0px 0px;width: " + String((self.options.zoomWindowWidth)/self.widthRatio) + "px;height: " + String((self.options.zoomWindowHeight)/self.heightRatio)

					+ "px;float: right;display: none;"

					+ "overflow: hidden;"

					+ "z-index: 999;"   

					+ "-webkit-transform: translateZ(0);"               

					+ "opacity:"+(self.options.lensOpacity)+";filter: alpha(opacity = "+(self.options.lensOpacity*100)+"); zoom:1;"

					+ "width:"+lensWidth+"px;"

					+ "height:"+lensHeight+"px;"

					+ "background-color:"+(self.options.lensColour)+";"					

					+ "cursor:"+(self.options.cursor)+";"

					+ "border: "+(self.options.lensBorderSize)+"px" +

					" solid "+(self.options.lensBorderColour)+";background-repeat: no-repeat;position: absolute;";

				} 

				//tint style

				self.tintStyle = "display: block;"

					+ "position: absolute;"

					+ "background-color: "+self.options.tintColour+";"	

					+ "filter:alpha(opacity=0);"		

					+ "opacity: 0;"	

					+ "width: " + self.nzWidth + "px;"

					+ "height: " + self.nzHeight + "px;"

					;

				//lens style for lens zoom with optional round for modern browsers

				self.lensRound = '';

				if(self.options.zoomType == "lens") {

					self.lensStyle = "background-position: 0px 0px;"

						+ "float: left;display: none;"

						+ "border: " + String(self.options.borderSize) + "px solid " + self.options.borderColour+";"

						+ "width:"+ String(self.options.lensSize) +"px;"

						+ "height:"+ String(self.options.lensSize)+"px;"

						+ "background-repeat: no-repeat;position: absolute;";

				}

				//does not round in all browsers

				if(self.options.lensShape == "round") {

					self.lensRound = "border-top-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;"

					+ "border-top-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;"

					+ "border-bottom-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;"

					+ "border-bottom-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;";

				}

				//create the div's                                                + ""

				//self.zoomContainer = $('<div/>').addClass('zoomContainer').css({"position":"relative", "height":self.nzHeight, "width":self.nzWidth});

                if (typeof self.ctOffset == 'undefined')

                    return;

                if (self.$container.find('.zoomContainer').length)

                    self.$container.find('.zoomContainer').remove();

				self.zoomContainer = $('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+(self.nzOffset.left-self.ctOffset.left)+'px;top:'+(self.nzOffset.top-self.ctOffset.top)+'px;height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;"></div>');

				self.$container.append(self.zoomContainer);	

				//this will add overflow hidden and contrain the lens on lens mode       

				if(self.options.containLensZoom && self.options.zoomType == "lens"){

					self.zoomContainer.css("overflow", "hidden");

				}

				if(self.options.zoomType != "inner") {

					self.zoomLens = $("<div class='zoomLens' style='" + self.lensStyle + self.lensRound +"'>&nbsp;</div>")

					.appendTo(self.zoomContainer)

					.click(function () {

						self.$elem.trigger('click');

					});

					if(self.options.tint) {

						self.tintContainer = $('<div/>').addClass('tintContainer');	

						self.zoomTint = $("<div class='zoomTint' style='"+self.tintStyle+"'></div>");

						self.zoomLens.wrap(self.tintContainer);

						self.zoomTintcss = self.zoomLens.after(self.zoomTint);	

						//if tint enabled - set an image to show over the tint

						self.zoomTintImage = $('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+self.nzWidth+'px; height: '+self.nzHeight+'px;" src="'+self.imageSrc+'">')

						.appendTo(self.zoomLens)

						.click(function () {

							self.$elem.trigger('click');

						});

					}          

				}

				//create zoom window 

				if(isNaN(self.options.zoomWindowPosition)){

					self.zoomWindow = $("<div style='z-index:999;left:"+(self.windowOffsetLeft)+"px;top:"+(self.windowOffsetTop)+"px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>")

					.appendTo(self.$container)

					.click(function () {

						self.$elem.trigger('click');

					});

				}else{

					self.zoomWindow = $("<div style='z-index:999;left:"+(self.windowOffsetLeft)+"px;top:"+(self.windowOffsetTop)+"px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>")

					.appendTo(self.zoomContainer)

					.click(function () {

						self.$elem.trigger('click');

					});

				}              

				self.zoomWindowContainer = $('<div/>').addClass('zoomWindowContainer').css("width",self.options.zoomWindowWidth);

				self.zoomWindow.wrap(self.zoomWindowContainer);

				//  self.captionStyle = "text-align: left;background-color: black;color: white;font-weight: bold;padding: 10px;font-family: sans-serif;font-size: 11px";                                                           

				// self.zoomCaption = $('<div class="elevatezoom-caption" style="'+self.captionStyle+'display: block; width: 280px;">INSERT ALT TAG</div>').appendTo(self.zoomWindow.parent());

				if(self.options.zoomType == "lens") {

					self.zoomLens.css({ backgroundImage: "url('" + self.imageSrc + "')" }); 

				}

				if(self.options.zoomType == "window") {

					self.zoomWindow.css({ backgroundImage: "url('" + self.imageSrc + "')" }); 

				}

				if(self.options.zoomType == "inner") {

					self.zoomWindow.css({ backgroundImage: "url('" + self.imageSrc + "')" }); 

				}

				/*-------------------END THE ZOOM WINDOW AND LENS----------------------------------*/

				//touch events

				self.$elem.bind('touchmove', function(e){    

					e.preventDefault();

					var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];  

					self.setPosition(touch);

				});  

				self.zoomContainer.bind('touchmove', function(e){ 

					if(self.options.zoomType == "inner") {

						self.showHideWindow("show");

					}

					e.preventDefault();

					var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];  

					self.setPosition(touch); 

				});  	

				self.zoomContainer.bind('touchend', function(e){ 

					self.showHideWindow("hide");

					if(self.options.showLens) {self.showHideLens("hide");}

					if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("hide");}

				});  	

				self.$elem.bind('touchend', function(e){ 

					self.showHideWindow("hide");

					if(self.options.showLens) {self.showHideLens("hide");}

					if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("hide");}

				});  	

				if(self.options.showLens) {

					self.zoomLens.bind('touchmove', function(e){ 

						e.preventDefault();

						var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];  

						self.setPosition(touch); 

					});    

					self.zoomLens.bind('touchend', function(e){ 

						self.showHideWindow("hide");

						if(self.options.showLens) {self.showHideLens("hide");}

						if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("hide");}

					});  

				}

				//Needed to work in IE

				self.$elem.bind('mousemove', function(e){   

					if(self.overWindow == false){self.setElements("show");}

					//make sure on orientation change the setposition is not fired

					if(self.lastX !== e.clientX || self.lastY !== e.clientY){

						self.setPosition(e);

						self.currentLoc = e;

					}   

					self.lastX = e.clientX;

					self.lastY = e.clientY;    

				});  	

				self.zoomContainer.bind('mousemove', function(e){ 

					if(self.overWindow == false){self.setElements("show");} 

					//make sure on orientation change the setposition is not fired 

					if(self.lastX !== e.clientX || self.lastY !== e.clientY){

						self.setPosition(e);

						self.currentLoc = e;

					}   

					self.lastX = e.clientX;

					self.lastY = e.clientY;    

				});  	

				if(self.options.zoomType != "inner") {

					self.zoomLens.bind('mousemove', function(e){      

						//make sure on orientation change the setposition is not fired

						if(self.lastX !== e.clientX || self.lastY !== e.clientY){

							self.setPosition(e);

							self.currentLoc = e;

						}   

						self.lastX = e.clientX;

						self.lastY = e.clientY;    

					});

				}

				if(self.options.tint && self.options.zoomType != "inner") {

					self.zoomTint.bind('mousemove', function(e){ 

						//make sure on orientation change the setposition is not fired

						if(self.lastX !== e.clientX || self.lastY !== e.clientY){

							self.setPosition(e);

							self.currentLoc = e;

						}   

						self.lastX = e.clientX;

						self.lastY = e.clientY;    

					});

				}

				if(self.options.zoomType == "inner") {

					self.zoomWindow.bind('mousemove', function(e) {

						//self.overWindow = true;

						//make sure on orientation change the setposition is not fired

						if(self.lastX !== e.clientX || self.lastY !== e.clientY){

							self.setPosition(e);

							self.currentLoc = e;

						}   

						self.lastX = e.clientX;

						self.lastY = e.clientY;    

					});

				}

				//  lensFadeOut: 500,  zoomTintFadeIn

				self.zoomContainer.add(self.$elem).mouseenter(function(){

					if(self.overWindow == false){self.setElements("show");} 

				}).mouseleave(function(){

					if(!self.scrollLock){

						self.setElements("hide");

					}

				});

				//end ove image

				if(self.options.zoomType != "inner") {

					self.zoomWindow.mouseenter(function(){

						self.overWindow = true;   

						self.setElements("hide");                  

					}).mouseleave(function(){

						self.overWindow = false;

					});

				}

				//end ove image

                //	var delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);

				//  $(this).empty();    

				//  return false;

				//fix for initial zoom setting

				if (self.options.zoomLevel != 1){

					//	self.changeZoomLevel(self.currentZoomLevel);

				}

				//set the min zoomlevel

				if(self.options.minZoomLevel){

					self.minZoomLevel = self.options.minZoomLevel;

				}

				else{

					self.minZoomLevel = self.options.scrollZoomIncrement * 2;

				}

				if(self.options.scrollZoom){

					self.zoomContainer.add(self.$elem).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e){

//						in IE there is issue with firing of mouseleave - So check whether still scrolling

//						and on mouseleave check if scrolllock          

						self.scrollLock = true;

						clearTimeout($.data(this, 'timer'));

						$.data(this, 'timer', setTimeout(function() {

							self.scrollLock = false;

							//do something

						}, 250));

						var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail*-1

						//this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;

						//   e.preventDefault();

						e.stopImmediatePropagation();

						e.stopPropagation();

						e.preventDefault();

						if(theEvent /120 > 0) {

							//scrolling up

							if(self.currentZoomLevel >= self.minZoomLevel){ 

								self.changeZoomLevel(self.currentZoomLevel-self.options.scrollZoomIncrement);        

							}

						}

						else{

							//scrolling down

							if(self.options.maxZoomLevel){

								if(self.currentZoomLevel <= self.options.maxZoomLevel){           

									self.changeZoomLevel(parseFloat(self.currentZoomLevel)+self.options.scrollZoomIncrement);

								}

							}

							else{

								//andy 

								self.changeZoomLevel(parseFloat(self.currentZoomLevel)+self.options.scrollZoomIncrement);

							}

						}

						return false;

					});

				}

			},

			setElements: function(type) {

				var self = this;

        if(!self.options.zoomEnabled){return false;}

				if(type=="show"){

					if(self.isWindowSet){

						if(self.options.zoomType == "inner") {self.showHideWindow("show");}

						if(self.options.zoomType == "window") {self.showHideWindow("show");}

						if(self.options.showLens) {self.showHideLens("show");}

						if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("show");

						}

					}

				}

				if(type=="hide"){

					if(self.options.zoomType == "window") {self.showHideWindow("hide");}

					if(!self.options.tint) {self.showHideWindow("hide");}

					if(self.options.showLens) {self.showHideLens("hide");}

					if(self.options.tint) {	self.showHideTint("hide");}

				}   

			},

			setPosition: function(e) {

      

				var self = this;

        

        if(!self.options.zoomEnabled){return false;}

				//recaclc offset each time in case the image moves

				//this can be caused by other on page elements

				self.nzHeight = self.$elem.height();

				self.nzWidth = self.$elem.width();

				self.nzOffset = self.$elem.offset();

                self.ctOffset = self.$container.offset();

				if(self.options.tint && self.options.zoomType != "inner") {

					self.zoomTint.css({ top: 0});

					self.zoomTint.css({ left: 0});

				}

				//set responsive       

				//will checking if the image needs changing before running this code work faster?

				if(self.options.responsive && !self.options.scrollZoom){

					if(self.options.showLens){ 

						if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){

							lensHeight = self.nzHeight;              

						}

						else{

							lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))

						}

						if(self.largeWidth < self.options.zoomWindowWidth){

							lensWidth = self.nzWidth;

						}       

						else{

							lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);

						}

						self.widthRatio = self.largeWidth / self.nzWidth;

						self.heightRatio = self.largeHeight / self.nzHeight;        

						if(self.options.zoomType != "lens") {

							//possibly dont need to keep recalcalculating

							//if the lens is heigher than the image, then set lens size to image size

							if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){

								lensHeight = self.nzHeight;  

							}

							else{

								lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))

							}

							if(self.options.zoomWindowWidth < self.options.zoomWindowWidth){

								lensWidth = self.nzWidth;

							}       

							else{

								lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);

							}            

							self.zoomLens.css('width', lensWidth);    

							self.zoomLens.css('height', lensHeight); 

							if(self.options.tint){    

								self.zoomTintImage.css('width', self.nzWidth);    

								self.zoomTintImage.css('height', self.nzHeight); 

							}

						}                     

						if(self.options.zoomType == "lens") {  

							self.zoomLens.css({ width: String(self.options.lensSize) + 'px', height: String(self.options.lensSize) + 'px' })      

						}        

						//end responsive image change

					}

				}

				//container fix

				self.zoomContainer.css({ top: self.nzOffset.top - self.ctOffset.top});

				self.zoomContainer.css({ left: self.nzOffset.left - self.ctOffset.left});

				self.mouseLeft = parseInt(e.pageX - self.nzOffset.left);

				self.mouseTop = parseInt(e.pageY - self.nzOffset.top);

				//calculate the Location of the Lens

				//calculate the bound regions - but only if zoom window

				if(self.options.zoomType == "window") {

					self.Etoppos = (self.mouseTop < (self.zoomLens.height()/2));

					self.Eboppos = (self.mouseTop > self.nzHeight - (self.zoomLens.height()/2)-(self.options.lensBorderSize*2));

					self.Eloppos = (self.mouseLeft < 0+((self.zoomLens.width()/2))); 

					self.Eroppos = (self.mouseLeft > (self.nzWidth - (self.zoomLens.width()/2)-(self.options.lensBorderSize*2)));  

				}

				//calculate the bound regions - but only for inner zoom

				if(self.options.zoomType == "inner"){ 

					self.Etoppos = (self.mouseTop < ((self.nzHeight/2)/self.heightRatio) );

					self.Eboppos = (self.mouseTop > (self.nzHeight - ((self.nzHeight/2)/self.heightRatio)));

					self.Eloppos = (self.mouseLeft < 0+(((self.nzWidth/2)/self.widthRatio)));

					self.Eroppos = (self.mouseLeft > (self.nzWidth - (self.nzWidth/2)/self.widthRatio-(self.options.lensBorderSize*2)));  

				}

				// if the mouse position of the slider is one of the outerbounds, then hide  window and lens

				if (self.mouseLeft <= 0 || self.mouseTop < 0 || self.mouseLeft > self.nzWidth || self.mouseTop > self.nzHeight ) {				          

					self.setElements("hide");

					return;

				}

				//else continue with operations

				else {

					//lens options

					if(self.options.showLens) {

						//		self.showHideLens("show");

						//set background position of lens

						self.lensLeftPos = String(self.mouseLeft - self.zoomLens.width() / 2);

						self.lensTopPos = String(self.mouseTop - self.zoomLens.height() / 2);

					}

					//adjust the background position if the mouse is in one of the outer regions 

					//Top region

					if(self.Etoppos){

						self.lensTopPos = 0;

					}

					//Left Region

					if(self.Eloppos){

						self.windowLeftPos = 0;

						self.lensLeftPos = 0;

						self.tintpos=0;

					}     

					//Set bottom and right region for window mode

					if(self.options.zoomType == "window") {

						if(self.Eboppos){

							self.lensTopPos = Math.max( (self.nzHeight)-self.zoomLens.height()-(self.options.lensBorderSize*2), 0 );

						} 

						if(self.Eroppos){

							self.lensLeftPos = (self.nzWidth-(self.zoomLens.width())-(self.options.lensBorderSize*2));

						}  

					}  

					//Set bottom and right region for inner mode

					if(self.options.zoomType == "inner") {

						if(self.Eboppos){

							self.lensTopPos = Math.max( ((self.nzHeight)-(self.options.lensBorderSize*2)), 0 );

						} 

						if(self.Eroppos){

							self.lensLeftPos = (self.nzWidth-(self.nzWidth)-(self.options.lensBorderSize*2));

						}  

					}

					//if lens zoom

					if(self.options.zoomType == "lens") {  

						self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomLens.width() / 2) * (-1));   

						self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomLens.height() / 2) * (-1));

						self.zoomLens.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });

						if(self.changeBgSize){  

							if(self.nzHeight>self.nzWidth){  

								if(self.options.zoomType == "lens"){       

									self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });

								}   

								self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });

							}

							else{     

								if(self.options.zoomType == "lens"){       

									self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });

								}   

								self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });            

							}

							self.changeBgSize = false;

						}    

						self.setWindowPostition(e);  

					}

					//if tint zoom   

					if(self.options.tint && self.options.zoomType != "inner") {

						self.setTintPosition(e);

					}

					//set the css background position 

					if(self.options.zoomType == "window") {

						self.setWindowPostition(e);   

					}

					if(self.options.zoomType == "inner") {

						self.setWindowPostition(e);   

					}

					if(self.options.showLens) {

						if(self.fullwidth && self.options.zoomType != "lens"){

							self.lensLeftPos = 0;

						}

						self.zoomLens.css({ left: self.lensLeftPos + 'px', top: self.lensTopPos + 'px' })  

					}

				} //end else



			},

			showHideWindow: function(change) {

				var self = this;              

				if(change == "show"){      

					if(!self.isWindowActive){

						if(self.options.zoomWindowFadeIn){

							self.zoomWindow.stop(true, true, false).fadeIn(self.options.zoomWindowFadeIn);

						}

						else{self.zoomWindow.show();}

						self.isWindowActive = true;

					}            

				}

				if(change == "hide"){

					if(self.isWindowActive){

						if(self.options.zoomWindowFadeOut){

							self.zoomWindow.stop(true, true).fadeOut(self.options.zoomWindowFadeOut);

						}

						else{self.zoomWindow.hide();}

						self.isWindowActive = false;        

					}      

				}

			},

			showHideLens: function(change) {
				var self = this;

				if(change == "show"){
					if(!self.isLensActive){
						if(self.options.lensFadeIn){
							self.zoomLens.stop(true, true, false).fadeIn(self.options.lensFadeIn);
						}
						else{self.zoomLens.show();}

						self.isLensActive = true;
					}
				}

				if(change == "hide"){
					if(self.isLensActive){
						if(self.options.lensFadeOut){
							self.zoomLens.stop(true, true).fadeOut(self.options.lensFadeOut);
						}
						else{self.zoomLens.hide();}

						self.isLensActive = false;
					}
				}
			},
			showHideTint: function(change) {
				var self = this;
				if(change == "show"){
					if(!self.isTintActive){
						if(self.options.zoomTintFadeIn){
							self.zoomTint.css({opacity:self.options.tintOpacity}).animate().stop(true, true).fadeIn("slow");
						}
						else{
							self.zoomTint.css({opacity:self.options.tintOpacity}).animate();
							self.zoomTint.show();
						}
						self.isTintActive = true;
					}
				}
				if(change == "hide"){
					if(self.isTintActive){ 
						if(self.options.zoomTintFadeOut){
							self.zoomTint.stop(true, true).fadeOut(self.options.zoomTintFadeOut);
						}
						else{self.zoomTint.hide();}
						self.isTintActive = false;
					}
				}
			},
			setLensPostition: function( e ) {
			},
			setWindowPostition: function( e ) {
				//return obj.slice( 0, count );
				var self = this;
				if(!isNaN(self.options.zoomWindowPosition)){
					switch (self.options.zoomWindowPosition) { 
					case 1: //done
						self.windowOffsetTop = (self.options.zoomWindowOffety);//DONE - 1
						self.windowOffsetLeft =(+self.nzWidth); //DONE 1, 2, 3, 4, 16
						break;
					case 2:
						if(self.options.zoomWindowHeight > self.nzHeight){ //positive margin
							self.windowOffsetTop = ((self.options.zoomWindowHeight/2)-(self.nzHeight/2))*(-1);
							self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
						}
						else{ //negative margin
						}
						break;
					case 3: //done
						self.windowOffsetTop = (self.nzHeight - self.zoomWindow.height() - (self.options.borderSize*2)); //DONE 3,9
						self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
						break;
					case 4: //done
						self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
						self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
						break;
					case 5: //done
						self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
						self.windowOffsetLeft =(self.nzWidth-self.zoomWindow.width()-(self.options.borderSize*2)); //DONE - 5,15
						break;
					case 6:
						if(self.options.zoomWindowHeight > self.nzHeight){ //positive margin
							self.windowOffsetTop = (self.nzHeight);  //DONE - 4,5,6,7,8
							self.windowOffsetLeft =((self.options.zoomWindowWidth/2)-(self.nzWidth/2)+(self.options.borderSize*2))*(-1);  
						}
						else{ //negative margin
						}
						break;
					case 7: //done
						self.windowOffsetTop = (self.nzHeight);  //DONE - 4,5,6,7,8
						self.windowOffsetLeft = 0; //DONE 7, 13
						break;
					case 8: //done
						self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
						self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
						break;
					case 9:  //done
						self.windowOffsetTop = (self.nzHeight - self.zoomWindow.height() - (self.options.borderSize*2)); //DONE 3,9
						self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
						break;
					case 10:
						if(self.options.zoomWindowHeight > self.nzHeight){ //positive margin
							self.windowOffsetTop = ((self.options.zoomWindowHeight/2)-(self.nzHeight/2))*(-1);
							self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
						}
						else{ //negative margin
						}
						break;
					case 11: 
						self.windowOffsetTop = (self.options.zoomWindowOffety);
						self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
						break;
					case 12: //done
						self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13,14,15,16
						self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
						break;
					case 13: //done
						self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13,14,15,16
						self.windowOffsetLeft =(0); //DONE 7, 13
						break;
					case 14: 
						if(self.options.zoomWindowHeight > self.nzHeight){ //positive margin
							self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13,14,15,16
							self.windowOffsetLeft =((self.options.zoomWindowWidth/2)-(self.nzWidth/2)+(self.options.borderSize*2))*(-1);  
						}
						else{ //negative margin
						}
						break;
					case 15://done
						self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13,14,15,16
						self.windowOffsetLeft =(self.nzWidth-self.zoomWindow.width()-(self.options.borderSize*2)); //DONE - 5,15
						break;
					case 16:  //done
						self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13,14,15,16
						self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
						break;
					default: //done
						self.windowOffsetTop = (self.options.zoomWindowOffety);//DONE - 1
					self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
					}
				} //end isNAN
				else{
					//WE CAN POSITION IN A CLASS - ASSUME THAT ANY STRING PASSED IS
					self.externalContainer = $('#'+self.options.zoomWindowPosition);
					self.externalContainerWidth = self.externalContainer.width();
					self.externalContainerHeight = self.externalContainer.height();
					self.externalContainerOffset = self.externalContainer.offset();
					self.windowOffsetTop = self.externalContainerOffset.top;//DONE - 1
					self.windowOffsetLeft =self.externalContainerOffset.left; //DONE 1, 2, 3, 4, 16
				}

				self.isWindowSet = true;
				self.windowOffsetTop = self.windowOffsetTop + self.options.zoomWindowOffety;
				self.windowOffsetLeft = self.windowOffsetLeft + self.options.zoomWindowOffetx;
				self.zoomWindow.css({ top: self.windowOffsetTop});
				self.zoomWindow.css({ left: self.windowOffsetLeft});
				if(self.options.zoomType == "inner") {
					self.zoomWindow.css({ top: 0});
					self.zoomWindow.css({ left: 0});
				}

				self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1));   
				self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));

				if(self.Etoppos){self.windowTopPos = 0;}
				if(self.Eloppos){self.windowLeftPos = 0;}
				if(self.Eboppos){self.windowTopPos = (self.largeHeight/self.currentZoomLevel-self.zoomWindow.height())*(-1);  } 
				if(self.Eroppos){self.windowLeftPos = ((self.largeWidth/self.currentZoomLevel-self.zoomWindow.width())*(-1));}    
				//stops micro movements
				if(self.fullheight){
					self.windowTopPos = 0;
				}

				if(self.fullwidth){
					self.windowLeftPos = 0;
				}

				//set the css background position 
				if(self.options.zoomType == "window" || self.options.zoomType == "inner") {
					if(self.zoomLock == 1){
						//overrides for images not zoomable
						if(self.widthRatio <= 1){
							self.windowLeftPos = 0;
						}

						if(self.heightRatio <= 1){ 
							self.windowTopPos = 0;
						}
					}

					// adjust images less than the window height
					if(self.largeHeight < self.options.zoomWindowHeight){
						self.windowTopPos = 0;
					}

					if(self.largeWidth < self.options.zoomWindowWidth){
						self.windowLeftPos = 0;
					}

					//set the zoomwindow background position
					if (self.options.easing){
						//     if(self.changeZoom){
						//           clearInterval(self.loop);
						//           self.changeZoom = false;
						//           self.loop = false;
						//            }
						//set the pos to 0 if not set
						if(!self.xp){self.xp = 0;}
						if(!self.yp){self.yp = 0;}  
						//if loop not already started, then run it 
						if (!self.loop){
							self.loop = setInterval(function(){
								//using zeno's paradox    
								self.xp += (self.windowLeftPos  - self.xp) / self.options.easingAmount; 
								self.yp += (self.windowTopPos  - self.yp) / self.options.easingAmount;

								if(self.scrollingLock){
									clearInterval(self.loop);
									self.xp = self.windowLeftPos;
									self.yp = self.windowTopPos            
									self.xp = ((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1);

									self.yp = (((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));                         

									if(self.changeBgSize){    

										if(self.nzHeight>self.nzWidth){  

											if(self.options.zoomType == "lens"){      

												self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });

											}   

											self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });

										}

										else{   

											if(self.options.zoomType != "lens"){      

												self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvalueheight + 'px' });

											}            

											self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });            

										}

										/*

             if(!self.bgxp){self.bgxp = self.largeWidth/self.newvalue;}

						if(!self.bgyp){self.bgyp = self.largeHeight/self.newvalue ;}  

                 if (!self.bgloop){   

                 	self.bgloop = setInterval(function(){   

                 self.bgxp += (self.largeWidth/self.newvalue  - self.bgxp) / self.options.easingAmount; 

								self.bgyp += (self.largeHeight/self.newvalue  - self.bgyp) / self.options.easingAmount;

           self.zoomWindow.css({ "background-size": self.bgxp + 'px ' + self.bgyp + 'px' });

                  }, 16);

                 }

										 */

										self.changeBgSize = false;

									}

									self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });

									self.scrollingLock = false;

									self.loop = false;

								}

								else{

									if(self.changeBgSize){    

										if(self.nzHeight>self.nzWidth){ 

											if(self.options.zoomType == "lens"){      

												self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });

											}         

											self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });

										}

										else{                 

											if(self.options.zoomType != "lens"){     

												self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });

											}      

											self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });            

										}

										self.changeBgSize = false;

									}                   

									self.zoomWindow.css({ backgroundPosition: self.xp + 'px ' + self.yp + 'px' });

								}       

							}, 16);

						}

					}   

					else{    

						if(self.changeBgSize){  

							if(self.nzHeight>self.nzWidth){  

								if(self.options.zoomType == "lens"){      

									self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });

								} 

								self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });

							}

							else{     

								if(self.options.zoomType == "lens"){      

									self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });

								} 

								if((self.largeHeight/self.newvaluewidth) < self.options.zoomWindowHeight){ 

									self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });            

								}

								else{

									self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });   

								}

							}

							self.changeBgSize = false;

						}     

						self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });       

					}

				} 

			},

			setTintPosition: function(e){

				var self = this;

				self.nzOffset = self.$elem.offset();

				self.tintpos = String(((e.pageX - self.nzOffset.left)-(self.zoomLens.width() / 2)) * (-1)); 

				self.tintposy = String(((e.pageY - self.nzOffset.top) - self.zoomLens.height() / 2) * (-1));	

				if(self.Etoppos){

					self.tintposy = 0;

				}

				if(self.Eloppos){

					self.tintpos=0;

				}     

				if(self.Eboppos){

					self.tintposy = (self.nzHeight-self.zoomLens.height()-(self.options.lensBorderSize*2))*(-1);

				} 

				if(self.Eroppos){

					self.tintpos = ((self.nzWidth-self.zoomLens.width()-(self.options.lensBorderSize*2))*(-1));

				}    

				if(self.options.tint) {

					//stops micro movements

					if(self.fullheight){

						self.tintposy = 0;

					}

					if(self.fullwidth){ 

						self.tintpos = 0;

					}   

					self.zoomTintImage.css({'left': self.tintpos+'px'});

					self.zoomTintImage.css({'top': self.tintposy+'px'});

				}

			},

			swaptheimage: function(smallimage, largeimage){

				var self = this;

				var newImg = new Image(); 

				if(self.options.loadingIcon){

					self.spinner = $('<div style="background: url(\''+self.options.loadingIcon+'\') no-repeat center;height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>');

					self.$elem.after(self.spinner);

				}

				self.options.onImageSwap(self.$elem);

				newImg.onload = function() {

					self.largeWidth = newImg.width;

					self.largeHeight = newImg.height;

					self.zoomImage = largeimage;

                    if (typeof self.zoomWindow == 'undefined') return;

					self.zoomWindow.css({ "background-size": self.largeWidth + 'px ' + self.largeHeight + 'px' });

					self.zoomWindow.css({ "background-size": self.largeWidth + 'px ' + self.largeHeight + 'px' });

					self.swapAction(smallimage, largeimage);

					return;              

				}          

				newImg.src = largeimage; // this must be done AFTER setting onload

			},

			swapAction: function(smallimage, largeimage){

				var self = this;    

				var newImg2 = new Image(); 

				newImg2.onload = function() {

					//re-calculate values

					self.nzHeight = newImg2.height;

					self.nzWidth = newImg2.width;

					self.options.onImageSwapComplete(self.$elem);

					self.doneCallback();  

					return;      

				}          

				newImg2.src = smallimage; 

				//reset the zoomlevel to that initially set in options

				self.currentZoomLevel = self.options.zoomLevel;

				self.options.maxZoomLevel = false;

				//swaps the main image

				//self.$elem.attr("src",smallimage);

				//swaps the zoom image     

				if(self.options.zoomType == "lens") {

					self.zoomLens.css({ backgroundImage: "url('" + largeimage + "')" }); 

				}

				if(self.options.zoomType == "window") {

					self.zoomWindow.css({ backgroundImage: "url('" + largeimage + "')" }); 

				}

				if(self.options.zoomType == "inner") {

					self.zoomWindow.css({ backgroundImage: "url('" + largeimage + "')" }); 

				} 



				self.currentImage = largeimage;

				if(self.options.imageCrossfade){

					var oldImg = self.$elem;

					var newImg = oldImg.clone();         

					self.$elem.attr("src",smallimage)

					self.$elem.after(newImg);

					newImg.stop(true).fadeOut(self.options.imageCrossfade, function() {

						$(this).remove();         

					});

					//       				if(self.options.zoomType == "inner"){

					//remove any attributes on the cloned image so we can resize later

					self.$elem.width("auto").removeAttr("width");

					self.$elem.height("auto").removeAttr("height");

					//   }

					oldImg.fadeIn(self.options.imageCrossfade);

					if(self.options.tint && self.options.zoomType != "inner") {

						var oldImgTint = self.zoomTintImage;

						var newImgTint = oldImgTint.clone();         

						self.zoomTintImage.attr("src",largeimage)

						self.zoomTintImage.after(newImgTint);

						newImgTint.stop(true).fadeOut(self.options.imageCrossfade, function() {

							$(this).remove();         

						});



						oldImgTint.fadeIn(self.options.imageCrossfade);

						//self.zoomTintImage.attr("width",elem.data("image"));

						//resize the tint window

						self.zoomTint.css({ height: self.$elem.height()});

						self.zoomTint.css({ width: self.$elem.width()});

					}    

					self.zoomContainer.css("height", self.$elem.height());

					self.zoomContainer.css("width", self.$elem.width());

					if(self.options.zoomType == "inner"){ 

						if(!self.options.constrainType){

							self.zoomWrap.parent().css("height", self.$elem.height());

							self.zoomWrap.parent().css("width", self.$elem.width());

							self.zoomWindow.css("height", self.$elem.height());

							self.zoomWindow.css("width", self.$elem.width());

						}

					} 

					if(self.options.imageCrossfade){  

						self.zoomWrap.css("height", self.$elem.height());

						self.zoomWrap.css("width", self.$elem.width());

					} 

				}

				else{

					self.$elem.attr("src",smallimage); 

					if(self.options.tint) {

						self.zoomTintImage.attr("src",largeimage);

						//self.zoomTintImage.attr("width",elem.data("image"));

						self.zoomTintImage.attr("height",self.$elem.height());

						//self.zoomTintImage.attr('src') = elem.data("image");

						self.zoomTintImage.css({ height: self.$elem.height()}); 

						self.zoomTint.css({ height: self.$elem.height()});

					}

					self.zoomContainer.css("height", self.$elem.height());

					self.zoomContainer.css("width", self.$elem.width());

					if(self.options.imageCrossfade){  

						self.zoomWrap.css("height", self.$elem.height());

						self.zoomWrap.css("width", self.$elem.width());

					} 

				}              

				if(self.options.constrainType){     

					//This will contrain the image proportions

					if(self.options.constrainType == "height"){ 

						self.zoomContainer.css("height", self.options.constrainSize);

						self.zoomContainer.css("width", "auto");

						if(self.options.imageCrossfade){  

							self.zoomWrap.css("height", self.options.constrainSize);

							self.zoomWrap.css("width", "auto"); 

							self.constwidth = self.zoomWrap.width();

						}

						else{                  

							self.$elem.css("height", self.options.constrainSize);

							self.$elem.css("width", "auto");

							self.constwidth = self.$elem.width();

						} 

						if(self.options.zoomType == "inner"){

							self.zoomWrap.parent().css("height", self.options.constrainSize);

							self.zoomWrap.parent().css("width", self.constwidth);   

							self.zoomWindow.css("height", self.options.constrainSize);

							self.zoomWindow.css("width", self.constwidth);    

						}        

						if(self.options.tint){

							self.tintContainer.css("height", self.options.constrainSize);

							self.tintContainer.css("width", self.constwidth);

							self.zoomTint.css("height", self.options.constrainSize);

							self.zoomTint.css("width", self.constwidth);

							self.zoomTintImage.css("height", self.options.constrainSize);

							self.zoomTintImage.css("width", self.constwidth); 

						} 

					}

					if(self.options.constrainType == "width"){       

						self.zoomContainer.css("height", "auto");

						self.zoomContainer.css("width", self.options.constrainSize);

						if(self.options.imageCrossfade){

							self.zoomWrap.css("height", "auto");

							self.zoomWrap.css("width", self.options.constrainSize);

							self.constheight = self.zoomWrap.height();

						}

						else{            

							self.$elem.css("height", "auto");

							self.$elem.css("width", self.options.constrainSize); 

							self.constheight = self.$elem.height();              

						} 

						if(self.options.zoomType == "inner"){

							self.zoomWrap.parent().css("height", self.constheight);

							self.zoomWrap.parent().css("width", self.options.constrainSize);   

							self.zoomWindow.css("height", self.constheight);

							self.zoomWindow.css("width", self.options.constrainSize);    

						} 

						if(self.options.tint){

							self.tintContainer.css("height", self.constheight);

							self.tintContainer.css("width", self.options.constrainSize);

							self.zoomTint.css("height", self.constheight);

							self.zoomTint.css("width", self.options.constrainSize);

							self.zoomTintImage.css("height", self.constheight);

							self.zoomTintImage.css("width", self.options.constrainSize); 

						}   

					}        

				}

			},

			doneCallback: function(){

				var self = this;

				if(self.options.loadingIcon){

					self.spinner.hide();     

				}   

				self.nzOffset = self.$elem.offset();

				self.nzWidth = self.$elem.width();

				self.nzHeight = self.$elem.height();

				// reset the zoomlevel back to default

				self.currentZoomLevel = self.options.zoomLevel;

				//ratio of the large to small image

				self.widthRatio = self.largeWidth / self.nzWidth;

				self.heightRatio = self.largeHeight / self.nzHeight; 

				//NEED TO ADD THE LENS SIZE FOR ROUND

				// adjust images less than the window height

				if(self.options.zoomType == "window") {

					if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){

						lensHeight = self.nzHeight;  

					}

					else{

						lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))

					}

					if(self.options.zoomWindowWidth < self.options.zoomWindowWidth){

						lensWidth = self.nzWidth;

					}       

					else{

						lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);

					}

					if(self.zoomLens){

						self.zoomLens.css('width', lensWidth);    

						self.zoomLens.css('height', lensHeight); 

					}

				}

			},

			getCurrentImage: function(){

				var self = this;  

				return self.zoomImage; 

			}, 

			getGalleryList: function(){

				var self = this;   

				//loop through the gallery options and set them in list for fancybox

				self.gallerylist = [];

				if (self.options.gallery){ 

					$('#'+self.options.gallery + ' a').each(function() {

						var img_src = '';

						if($(this).data("zoom-image")){

							img_src = $(this).data("zoom-image");

						}

						else if($(this).data("image")){

							img_src = $(this).data("image");

						}			

						//put the current image at the start

						if(img_src == self.zoomImage){

							self.gallerylist.unshift({

								href: ''+img_src+'',

								title: $(this).find('img').attr("title")

							});	

						}

						else{

							self.gallerylist.push({

								href: ''+img_src+'',

								title: $(this).find('img').attr("title")

							});

						}

					});

				}                                                       

				//if no gallery - return current image

				else{

					self.gallerylist.push({

						href: ''+self.zoomImage+'',

						title: $(this).find('img').attr("title")

					}); 

				}

				return self.gallerylist;

			},

			changeZoomLevel: function(value){

				var self = this;   

				//flag a zoom, so can adjust the easing during setPosition     

				self.scrollingLock = true;   

				//round to two decimal places

				self.newvalue = parseFloat(value).toFixed(2);

				newvalue = parseFloat(value).toFixed(2);



				//maxwidth & Maxheight of the image

				maxheightnewvalue = self.largeHeight/((self.options.zoomWindowHeight / self.nzHeight) * self.nzHeight);     

				maxwidthtnewvalue = self.largeWidth/((self.options.zoomWindowWidth / self.nzWidth) * self.nzWidth);   	



				//calculate new heightratio

				if(self.options.zoomType != "inner")

				{

					if(maxheightnewvalue <= newvalue){

						self.heightRatio = (self.largeHeight/maxheightnewvalue) / self.nzHeight;

						self.newvalueheight = maxheightnewvalue;

						self.fullheight = true;

					}

					else{

						self.heightRatio = (self.largeHeight/newvalue) / self.nzHeight; 

						self.newvalueheight = newvalue;

						self.fullheight = false;

					}

//					calculate new width ratio

					if(maxwidthtnewvalue <= newvalue){

						self.widthRatio = (self.largeWidth/maxwidthtnewvalue) / self.nzWidth;

						self.newvaluewidth = maxwidthtnewvalue;

						self.fullwidth = true;

					}

					else{

						self.widthRatio = (self.largeWidth/newvalue) / self.nzWidth; 

						self.newvaluewidth = newvalue;

						self.fullwidth = false;

					}

					if(self.options.zoomType == "lens"){

						if(maxheightnewvalue <= newvalue){

							self.fullwidth = true;

							self.newvaluewidth = maxheightnewvalue;

						} else{

							self.widthRatio = (self.largeWidth/newvalue) / self.nzWidth; 

							self.newvaluewidth = newvalue;

							self.fullwidth = false;

						}}

				}



				if(self.options.zoomType == "inner")

				{

					maxheightnewvalue = parseFloat(self.largeHeight/self.nzHeight).toFixed(2);     

					maxwidthtnewvalue = parseFloat(self.largeWidth/self.nzWidth).toFixed(2);      

					if(newvalue > maxheightnewvalue){

						newvalue = maxheightnewvalue;

					}

					if(newvalue > maxwidthtnewvalue){

						newvalue = maxwidthtnewvalue;

					}      

					if(maxheightnewvalue <= newvalue){

						self.heightRatio = (self.largeHeight/newvalue) / self.nzHeight; 

						if(newvalue > maxheightnewvalue){

							self.newvalueheight = maxheightnewvalue;

						}else{

							self.newvalueheight = newvalue;

						}

						self.fullheight = true;

					}

					else{



						self.heightRatio = (self.largeHeight/newvalue) / self.nzHeight; 

						if(newvalue > maxheightnewvalue){

							self.newvalueheight = maxheightnewvalue;

						}else{

							self.newvalueheight = newvalue;

						}

						self.fullheight = false;

					}



					if(maxwidthtnewvalue <= newvalue){   

						self.widthRatio = (self.largeWidth/newvalue) / self.nzWidth; 

						if(newvalue > maxwidthtnewvalue){

							self.newvaluewidth = maxwidthtnewvalue;

						}else{

							self.newvaluewidth = newvalue;

						}

						self.fullwidth = true;

					}

					else{  

						self.widthRatio = (self.largeWidth/newvalue) / self.nzWidth; 

						self.newvaluewidth = newvalue;

						self.fullwidth = false;

					}        

				} //end inner

				scrcontinue = false;

				if(self.options.zoomType == "inner"){

					if(self.nzWidth > self.nzHeight){

						if( self.newvaluewidth <= maxwidthtnewvalue){

							scrcontinue = true;

						}

						else{

							scrcontinue = false;

							self.fullheight = true;

							self.fullwidth = true;

						}

					}

					if(self.nzHeight > self.nzWidth){     

						if( self.newvaluewidth <= maxwidthtnewvalue){

							scrcontinue = true;

						}

						else{

							scrcontinue = false;  

							self.fullheight = true;

							self.fullwidth = true;

						}

					}

				}

				if(self.options.zoomType != "inner"){

					scrcontinue = true;

				}

				if(scrcontinue){



					self.zoomLock = 0;

					self.changeZoom = true;

					//if lens height is less than image height

					if(((self.options.zoomWindowHeight)/self.heightRatio) <= self.nzHeight){

						self.currentZoomLevel = self.newvalueheight; 

						if(self.options.zoomType != "lens" && self.options.zoomType != "inner") {

							self.changeBgSize = true;

							self.zoomLens.css({height: String((self.options.zoomWindowHeight)/self.heightRatio) + 'px' }) 

						}

						if(self.options.zoomType == "lens" || self.options.zoomType == "inner") {  

							self.changeBgSize = true;  

						}	

					} 



					if((self.options.zoomWindowWidth/self.widthRatio) <= self.nzWidth){



						if(self.options.zoomType != "inner"){

							if(self.newvaluewidth > self.newvalueheight)   {

								self.currentZoomLevel = self.newvaluewidth;                 

							}

						}

						if(self.options.zoomType != "lens" && self.options.zoomType != "inner") {

							self.changeBgSize = true;

							self.zoomLens.css({width: String((self.options.zoomWindowWidth)/self.widthRatio) + 'px' })

						}

						if(self.options.zoomType == "lens" || self.options.zoomType == "inner") {  

							self.changeBgSize = true;

						}	

					}

					if(self.options.zoomType == "inner"){

						self.changeBgSize = true;  

						if(self.nzWidth > self.nzHeight){

							self.currentZoomLevel = self.newvaluewidth;

						}

						if(self.nzHeight > self.nzWidth){

							self.currentZoomLevel = self.newvaluewidth;

						}

					}

				}      //under

				//sets the boundry change, called in setWindowPos

				self.setPosition(self.currentLoc);

				//

			},

			closeAll: function(){

				if(self.zoomWindow){self.zoomWindow.hide();}

				if(self.zoomLens){self.zoomLens.hide();}

				if(self.zoomTint){self.zoomTint.hide();}

			},

			changeState: function(value){

      	var self = this;

				if(value == 'enable'){self.options.zoomEnabled = true;}

				if(value == 'disable'){self.options.zoomEnabled = false;}

			}

	};



	$.fn.elevateZoom = function( options ) {

		return this.each(function() {

			var elevate = Object.create( ElevateZoom );

			elevate.init( options, this );

			$.data( this, 'elevateZoom', elevate );

		});

	};

	$.fn.elevateZoom.options = {

			zoomActivation: "hover", // Can also be click (PLACEHOLDER FOR NEXT VERSION)

      zoomEnabled: true, //false disables zoomwindow from showing

			preloading: 1, //by default, load all the images, if 0, then only load images after activated (PLACEHOLDER FOR NEXT VERSION)

			zoomLevel: 1, //default zoom level of image

			scrollZoom: false, //allow zoom on mousewheel, true to activate

			scrollZoomIncrement: 0.1,  //steps of the scrollzoom

			minZoomLevel: false,

			maxZoomLevel: false,

			easing: false,

			easingAmount: 12,

			lensSize: 200,

			zoomWindowWidth: 400,

			zoomWindowHeight: 400,

			zoomWindowOffetx: 0,

			zoomWindowOffety: 0,

			zoomWindowPosition: 1,

			zoomWindowBgColour: "#fff",

			lensFadeIn: false,

			lensFadeOut: false,

			debug: false,

			zoomWindowFadeIn: false,

			zoomWindowFadeOut: false,

			zoomWindowAlwaysShow: false,

			zoomTintFadeIn: false,

			zoomTintFadeOut: false,

			borderSize: 4,

			showLens: true,

			borderColour: "#888",

			lensBorderSize: 1,

			lensBorderColour: "#000",

			lensShape: "square", //can be "round"

			zoomType: "window", //window is default,  also "lens" available -

			containLensZoom: false,

			lensColour: "white", //colour of the lens background

			lensOpacity: 0.4, //opacity of the lens

			lenszoom: false,

			tint: false, //enable the tinting

			tintColour: "#333", //default tint color, can be anything, red, #ccc, rgb(0,0,0)

			tintOpacity: 0.4, //opacity of the tint

			gallery: false,

			galleryActiveClass: "zoomGalleryActive",

			imageCrossfade: false,

			constrainType: false,  //width or height

			constrainSize: false,  //in pixels the dimensions you want to constrain on

			loadingIcon: false, //http://www.example.com/spinner.gif

			cursor:"default", // user should set to what they want the cursor as, if they have set a click function

			responsive:true,

			onComplete: $.noop,

			onZoomedImageLoaded: function() {},

			onImageSwap: $.noop,

			onImageSwapComplete: $.noop,

            zoomContainer: 'body' // will be body

	};

})( jQuery, window, document );

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));


/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

;(function (window, document, $, undefined) {
    "use strict";

    var H = $("html"),
        W = $(window),
        D = $(document),
        F = $.fancybox = function () {
            F.open.apply( this, arguments );
        },
        IE =  navigator.userAgent.match(/msie/i),
        didUpdate	= null,
        isTouch		= document.createTouch !== undefined,

        isQuery	= function(obj) {
            return obj && obj.hasOwnProperty && obj instanceof $;
        },
        isString = function(str) {
            return str && $.type(str) === "string";
        },
        isPercentage = function(str) {
            return isString(str) && str.indexOf('%') > 0;
        },
        isScrollable = function(el) {
            return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
        },
        getScalar = function(orig, dim) {
            var value = parseInt(orig, 10) || 0;

            if (dim && isPercentage(orig)) {
                value = F.getViewport()[ dim ] / 100 * value;
            }

            return Math.ceil(value);
        },
        getValue = function(value, dim) {
            return getScalar(value, dim) + 'px';
        };

    $.extend(F, {
        // The current version of fancyBox
        version: '2.1.5',

        defaults: {
            padding : 15,
            margin  : 20,

            width     : 800,
            height    : 600,
            minWidth  : 100,
            minHeight : 100,
            maxWidth  : 9999,
            maxHeight : 9999,
            pixelRatio: 1, // Set to 2 for retina display support

            autoSize   : true,
            autoHeight : false,
            autoWidth  : false,

            autoResize  : true,
            autoCenter  : !isTouch,
            fitToView   : true,
            aspectRatio : false,
            topRatio    : 0.5,
            leftRatio   : 0.5,

            scrolling : 'auto', // 'auto', 'yes' or 'no'
            wrapCSS   : '',

            arrows     : true,
            closeBtn   : true,
            closeClick : false,
            nextClick  : false,
            mouseWheel : true,
            autoPlay   : false,
            playSpeed  : 3000,
            preload    : 3,
            modal      : false,
            loop       : true,

            ajax  : {
                dataType : 'html',
                headers  : { 'X-fancyBox': true }
            },
            iframe : {
                scrolling : 'auto',
                preload   : true
            },
            swf : {
                wmode: 'transparent',
                allowfullscreen   : 'true',
                allowscriptaccess : 'always'
            },

            keys  : {
                next : {
                    13 : 'left', // enter
                    34 : 'up',   // page down
                    39 : 'left', // right arrow
                    40 : 'up'    // down arrow
                },
                prev : {
                    8  : 'right',  // backspace
                    33 : 'down',   // page up
                    37 : 'right',  // left arrow
                    38 : 'down'    // up arrow
                },
                close  : [27], // escape key
                play   : [32], // space - start/stop slideshow
                toggle : [70]  // letter "f" - toggle fullscreen
            },

            direction : {
                next : 'left',
                prev : 'right'
            },

            scrollOutside  : true,

            // Override some properties
            index   : 0,
            type    : null,
            href    : null,
            content : null,
            title   : null,

            // HTML templates
            tpl: {
                wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image    : '<img class="fancybox-image" src="{href}" alt="" />',
                iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                loading  : '<div id="fancybox-loading"><div></div></div>'
            },

            // Properties for each animation type
            // Opening fancyBox
            openEffect  : 'fade', // 'elastic', 'fade' or 'none'
            openSpeed   : 250,
            openEasing  : 'swing',
            openOpacity : true,
            openMethod  : 'zoomIn',

            // Closing fancyBox
            closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
            closeSpeed   : 250,
            closeEasing  : 'swing',
            closeOpacity : true,
            closeMethod  : 'zoomOut',

            // Changing next gallery item
            nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
            nextSpeed  : 250,
            nextEasing : 'swing',
            nextMethod : 'changeIn',

            // Changing previous gallery item
            prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
            prevSpeed  : 250,
            prevEasing : 'swing',
            prevMethod : 'changeOut',

            // Enable default helpers
            helpers : {
                overlay : true,
                title   : true
            },

            // Callbacks
            onCancel     : $.noop, // If canceling
            beforeLoad   : $.noop, // Before loading
            afterLoad    : $.noop, // After loading
            beforeShow   : $.noop, // Before changing in current item
            afterShow    : $.noop, // After opening
            beforeChange : $.noop, // Before changing gallery item
            beforeClose  : $.noop, // Before closing
            afterClose   : $.noop  // After closing
        },

        //Current state
        group    : {}, // Selected group
        opts     : {}, // Group options
        previous : null,  // Previous element
        coming   : null,  // Element being loaded
        current  : null,  // Currently loaded element
        isActive : false, // Is activated
        isOpen   : false, // Is currently open
        isOpened : false, // Have been fully opened at least once

        wrap  : null,
        skin  : null,
        outer : null,
        inner : null,

        player : {
            timer    : null,
            isActive : false
        },

        // Loaders
        ajaxLoad   : null,
        imgPreload : null,

        // Some collections
        transitions : {},
        helpers     : {},

        /*
         *	Static methods
         */

        open: function (group, opts) {
            if (!group) {
                return;
            }

            if (!$.isPlainObject(opts)) {
                opts = {};
            }

            // Close if already active
            if (false === F.close(true)) {
                return;
            }

            // Normalize group
            if (!$.isArray(group)) {
                group = isQuery(group) ? $(group).get() : [group];
            }

            // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
            $.each(group, function(i, element) {
                var obj = {},
                    href,
                    title,
                    content,
                    type,
                    rez,
                    hrefParts,
                    selector;

                if ($.type(element) === "object") {
                    // Check if is DOM element
                    if (element.nodeType) {
                        element = $(element);
                    }

                    if (isQuery(element)) {
                        obj = {
                            href    : element.data('fancybox-href') || element.attr('href'),
                            title   : $('<div/>').text( element.data('fancybox-title') || element.attr('title') || '' ).html(),
                            isDom   : true,
                            element : element
                        };

                        if ($.metadata) {
                            $.extend(true, obj, element.metadata());
                        }

                    } else {
                        obj = element;
                    }
                }

                href  = opts.href  || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';

                content = opts.content || obj.content;
                type    = content ? 'html' : (opts.type  || obj.type);

                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');

                    if (!type) {
                        rez  = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null;
                    }
                }

                if (isString(href)) {
                    // Try to guess the content type
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image';

                        } else if (F.isSWF(href)) {
                            type = 'swf';

                        } else if (href.charAt(0) === '#') {
                            type = 'inline';

                        } else if (isString(element)) {
                            type    = 'html';
                            content = element;
                        }
                    }

                    // Split url into two pieces with source url and content selector, e.g,
                    // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href      = hrefParts.shift();
                        selector  = hrefParts.shift();
                    }
                }

                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

                        } else if (obj.isDom) {
                            content = element;
                        }

                    } else if (type === 'html') {
                        content = href;

                    } else if (!type && !href && obj.isDom) {
                        type    = 'inline';
                        content = element;
                    }
                }

                $.extend(obj, {
                    href     : href,
                    type     : type,
                    content  : content,
                    title    : title,
                    selector : selector
                });

                group[ i ] = obj;
            });

            // Extend the defaults
            F.opts = $.extend(true, {}, F.defaults, opts);

            // All options are merged recursive except keys
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
            }

            F.group = group;

            return F._start(F.opts.index);
        },

        // Cancel image loading or abort ajax request
        cancel: function () {
            var coming = F.coming;

            if (coming && false === F.trigger('onCancel')) {
                return;
            }

            F.hideLoading();

            if (!coming) {
                return;
            }

            if (F.ajaxLoad) {
                F.ajaxLoad.abort();
            }

            F.ajaxLoad = null;

            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null;
            }

            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger('onReset').remove();
            }

            F.coming = null;

            // If the first item has been canceled, then clear everything
            if (!F.current) {
                F._afterZoomOut( coming );
            }
        },

        // Start closing animation if is open; remove immediately if opening/closing
        close: function (event) {
            F.cancel();

            if (false === F.trigger('beforeClose')) {
                return;
            }

            F.unbindEvents();

            if (!F.isActive) {
                return;
            }

            if (!F.isOpen || event === true) {
                $('.fancybox-wrap').stop(true).trigger('onReset').remove();

                F._afterZoomOut();

            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;

                $('.fancybox-item, .fancybox-nav').remove();

                F.wrap.stop(true, true).removeClass('fancybox-opened');

                F.transitions[ F.current.closeMethod ]();
            }
        },

        // Manage slideshow:
        //   $.fancybox.play(); - toggle slideshow
        //   $.fancybox.play( true ); - start
        //   $.fancybox.play( false ); - stop
        play: function ( action ) {
            var clear = function () {
                    clearTimeout(F.player.timer);
                },
                set = function () {
                    clear();

                    if (F.current && F.player.isActive) {
                        F.player.timer = setTimeout(F.next, F.current.playSpeed);
                    }
                },
                stop = function () {
                    clear();

                    D.unbind('.player');

                    F.player.isActive = false;

                    F.trigger('onPlayEnd');
                },
                start = function () {
                    if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                        F.player.isActive = true;

                        D.bind({
                            'onCancel.player beforeClose.player' : stop,
                            'onUpdate.player'   : set,
                            'beforeLoad.player' : clear
                        });

                        set();

                        F.trigger('onPlayStart');
                    }
                };

            if (action === true || (!F.player.isActive && action !== false)) {
                start();
            } else {
                stop();
            }
        },

        // Navigate to next gallery item
        next: function ( direction ) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next;
                }

                F.jumpto(current.index + 1, direction, 'next');
            }
        },

        // Navigate to previous gallery item
        prev: function ( direction ) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev;
                }

                F.jumpto(current.index - 1, direction, 'prev');
            }
        },

        // Navigate to gallery item by index
        jumpto: function ( index, direction, router ) {
            var current = F.current;

            if (!current) {
                return;
            }

            index = getScalar(index);

            F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
            F.router    = router || 'jumpto';

            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + (index % current.group.length);
                }

                index = index % current.group.length;
            }

            if (current.group[ index ] !== undefined) {
                F.cancel();

                F._start(index);
            }
        },

        // Center inside viewport and toggle position type to fixed or absolute if needed
        reposition: function (e, onlyAbsolute) {
            var current = F.current,
                wrap    = current ? current.wrap : null,
                pos;

            if (wrap) {
                pos = F._getPosition(onlyAbsolute);

                if (e && e.type === 'scroll') {
                    delete pos.position;

                    wrap.stop(true, true).animate(pos, 200);

                } else {
                    wrap.css(pos);

                    current.pos = $.extend({}, current.dim, pos);
                }
            }
        },

        update: function (e) {
            var type = (e && e.originalEvent && e.originalEvent.type),
                anyway = !type || type === 'orientationchange';

            if (anyway) {
                clearTimeout(didUpdate);

                didUpdate = null;
            }

            if (!F.isOpen || didUpdate) {
                return;
            }

            didUpdate = setTimeout(function() {
                var current = F.current;

                if (!current || F.isClosing) {
                    return;
                }

                F.wrap.removeClass('fancybox-tmp');

                if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                    F._setDimension();
                }

                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e);
                }

                F.trigger('onUpdate');

                didUpdate = null;

            }, (anyway && !isTouch ? 0 : 300));
        },

        // Shrink content to fit inside viewport or restore if resized
        toggle: function ( action ) {
            if (F.isOpen) {
                F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

                // Help browser to restore document dimensions
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');

                    F.trigger('onUpdate');
                }

                F.update();
            }
        },

        hideLoading: function () {
            D.unbind('.loading');

            $('#fancybox-loading').remove();
        },

        showLoading: function () {
            var el, viewport;

            F.hideLoading();

            el = $(F.opts.tpl.loading).click(F.cancel).appendTo('body');

            // If user will press the escape-button, the request will be canceled
            D.bind('keydown.loading', function(e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();

                    F.cancel();
                }
            });

            if (!F.defaults.fixed) {
                viewport = F.getViewport();

                el.css({
                    position : 'absolute',
                    top  : (viewport.h * 0.5) + viewport.y,
                    left : (viewport.w * 0.5) + viewport.x
                });
            }

            F.trigger('onLoading');
        },

        getViewport: function () {
            var locked = (F.current && F.current.locked) || false,
                rez    = {
                    x: W.scrollLeft(),
                    y: W.scrollTop()
                };

            if (locked && locked.length) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight;

            } else {
                // See http://bugs.jquery.com/ticket/6724
                rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
            }

            return rez;
        },

        // Unbind the keyboard / clicking actions
        unbindEvents: function () {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb');
            }

            D.unbind('.fb');
            W.unbind('.fb');
        },

        bindEvents: function () {
            var current = F.current,
                keys;

            if (!current) {
                return;
            }

            // Changing document height on iOS devices triggers a 'resize' event,
            // that can change document height... repeating infinitely
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

            keys = current.keys;

            if (keys) {
                D.bind('keydown.fb', function (e) {
                    var code   = e.which || e.keyCode,
                        target = e.target || e.srcElement;

                    // Skip esc key if loading, because showLoading will cancel preloading
                    if (code === 27 && F.coming) {
                        return false;
                    }

                    // Ignore key combinations and key events within form elements
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                        $.each(keys, function(i, val) {
                            if (current.group.length > 1 && val[ code ] !== undefined) {
                                F[ i ]( val[ code ] );

                                e.preventDefault();
                                return false;
                            }

                            if ($.inArray(code, val) > -1) {
                                F[ i ] ();

                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }

            if ($.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
                    var target = e.target || null,
                        parent = $(target),
                        canScroll = false;

                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break;
                        }

                        canScroll = isScrollable( parent[0] );
                        parent    = $(parent).parent();
                    }

                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev( deltaY > 0 ? 'down' : 'left' );

                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next( deltaY < 0 ? 'up' : 'right' );
                            }

                            e.preventDefault();
                        }
                    }
                });
            }
        },

        trigger: function (event, o) {
            var ret, obj = o || F.coming || F.current;

            if (obj) {
                if ($.isFunction( obj[event] )) {
                    ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
                }

                if (ret === false) {
                    return false;
                }

                if (obj.helpers) {
                    $.each(obj.helpers, function (helper, opts) {
                        if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                            F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                        }
                    });
                }
            }

            D.trigger(event);
        },

        isImage: function (str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },

        isSWF: function (str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },

        _start: function (index) {
            var coming = {},
                obj,
                href,
                type,
                margin,
                padding;

            index = getScalar( index );
            obj   = F.group[ index ] || null;

            if (!obj) {
                return false;
            }

            coming = $.extend(true, {}, F.opts, obj);

            // Convert margin and padding properties to array - top, right, bottom, left
            margin  = coming.margin;
            padding = coming.padding;

            if ($.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin];
            }

            if ($.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding];
            }

            // 'modal' propery is just a shortcut
            if (coming.modal) {
                $.extend(true, coming, {
                    closeBtn   : false,
                    closeClick : false,
                    nextClick  : false,
                    arrows     : false,
                    mouseWheel : false,
                    keys       : null,
                    helpers: {
                        overlay : {
                            closeClick : false
                        }
                    }
                });
            }

            // 'autoSize' property is a shortcut, too
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true;
            }

            if (coming.width === 'auto') {
                coming.autoWidth = true;
            }

            if (coming.height === 'auto') {
                coming.autoHeight = true;
            }

            /*
             * Add reference to the group, so it`s possible to access from callbacks, example:
             * afterLoad : function() {
             *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
             * }
             */

            coming.group  = F.group;
            coming.index  = index;

            // Give a chance for callback or helpers to update coming item (type, title, etc)
            F.coming = coming;

            if (false === F.trigger('beforeLoad')) {
                F.coming = null;

                return;
            }

            type = coming.type;
            href = coming.href;

            if (!type) {
                F.coming = null;

                //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;

                    return F[ F.router ]( F.direction );
                }

                return false;
            }

            F.isActive = true;

            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling  = 'visible';
            }

            if (type === 'image') {
                coming.aspectRatio = true;
            }

            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll';
            }

            // Build the neccessary markup
            coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

            $.extend(coming, {
                skin  : $('.fancybox-skin',  coming.wrap),
                outer : $('.fancybox-outer', coming.wrap),
                inner : $('.fancybox-inner', coming.wrap)
            });

            $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
            });

            F.trigger('onReady');

            // Check before try to load; 'inline' and 'html' types need content, others - href
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error( 'content' );
                }

            } else if (!href) {
                return F._error( 'href' );
            }

            if (type === 'image') {
                F._loadImage();

            } else if (type === 'ajax') {
                F._loadAjax();

            } else if (type === 'iframe') {
                F._loadIframe();

            } else {
                F._afterLoad();
            }
        },

        _error: function ( type ) {
            $.extend(F.coming, {
                type       : 'html',
                autoWidth  : true,
                autoHeight : true,
                minWidth   : 0,
                minHeight  : 0,
                scrolling  : 'no',
                hasError   : type,
                content    : F.coming.tpl.error
            });

            F._afterLoad();
        },

        _loadImage: function () {
            // Reset preload image so it is later possible to check "complete" property
            var img = F.imgPreload = new Image();

            img.onload = function () {
                this.onload = this.onerror = null;

                F.coming.width  = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;

                F._afterLoad();
            };

            img.onerror = function () {
                this.onload = this.onerror = null;

                F._error( 'image' );
            };

            img.src = F.coming.href;

            if (img.complete !== true) {
                F.showLoading();
            }
        },

        _loadAjax: function () {
            var coming = F.coming;

            F.showLoading();

            F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                url: coming.href,
                error: function (jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error( 'ajax', jqXHR );

                    } else {
                        F.hideLoading();
                    }
                },
                success: function (data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;

                        F._afterLoad();
                    }
                }
            }));
        },

        _loadIframe: function() {
            var coming = F.coming,
                iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                    .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
                    .attr('src', coming.href);

            // This helps IE
            $(coming.wrap).bind('onReset', function () {
                try {
                    $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                } catch (e) {}
            });

            if (coming.iframe.preload) {
                F.showLoading();

                iframe.one('load', function() {
                    $(this).data('ready', 1);

                    // iOS will lose scrolling if we resize
                    if (!isTouch) {
                        $(this).bind('load.fb', F.update);
                    }

                    // Without this trick:
                    //   - iframe won't scroll on iOS devices
                    //   - IE7 sometimes displays empty iframe
                    $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

                    F._afterLoad();
                });
            }

            coming.content = iframe.appendTo( coming.inner );

            if (!coming.iframe.preload) {
                F._afterLoad();
            }
        },

        _preloadImages: function() {
            var group   = F.group,
                current = F.current,
                len     = group.length,
                cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
                item,
                i;

            for (i = 1; i <= cnt; i += 1) {
                item = group[ (current.index + i ) % len ];

                if (item.type === 'image' && item.href) {
                    new Image().src = item.href;
                }
            }
        },

        _afterLoad: function () {
            var coming   = F.coming,
                previous = F.current,
                placeholder = 'fancybox-placeholder',
                current,
                content,
                type,
                scrolling,
                href,
                embed;

            F.hideLoading();

            if (!coming || F.isActive === false) {
                return;
            }

            if (false === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(true).trigger('onReset').remove();

                F.coming = null;

                return;
            }

            if (previous) {
                F.trigger('beforeChange', previous);

                previous.wrap.stop(true).removeClass('fancybox-opened')
                    .find('.fancybox-item, .fancybox-nav')
                    .remove();
            }

            F.unbindEvents();

            current   = coming;
            content   = coming.content;
            type      = coming.type;
            scrolling = coming.scrolling;

            $.extend(F, {
                wrap  : current.wrap,
                skin  : current.skin,
                outer : current.outer,
                inner : current.inner,
                current  : current,
                previous : previous
            });

            href = current.href;

            switch (type) {
                case 'inline':
                case 'ajax':
                case 'html':
                    if (current.selector) {
                        content = $('<div>').html(content).find(current.selector);

                    } else if (isQuery(content)) {
                        if (!content.data(placeholder)) {
                            content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
                        }

                        content = content.show().detach();

                        current.wrap.bind('onReset', function () {
                            if ($(this).find(content).length) {
                                content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
                            }
                        });
                    }
                    break;

                case 'image':
                    content = current.tpl.image.replace(/\{href\}/g, href);
                    break;

                case 'swf':
                    content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                    embed   = '';

                    $.each(current.swf, function(name, val) {
                        content += '<param name="' + name + '" value="' + val + '"></param>';
                        embed   += ' ' + name + '="' + val + '"';
                    });

                    content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                    break;
            }

            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append( content );
            }

            // Give a chance for helpers or callbacks to update elements
            F.trigger('beforeShow');

            // Set scrolling before calculating dimensions
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

            // Set initial dimensions and start position
            F._setDimension();

            F.reposition();

            F.isOpen = false;
            F.coming = null;

            F.bindEvents();

            if (!F.isOpened) {
                $('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

            } else if (previous.prevMethod) {
                F.transitions[ previous.prevMethod ]();
            }

            F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

            F._preloadImages();
        },

        _setDimension: function () {
            var viewport   = F.getViewport(),
                steps      = 0,
                canShrink  = false,
                canExpand  = false,
                wrap       = F.wrap,
                skin       = F.skin,
                inner      = F.inner,
                current    = F.current,
                width      = current.width,
                height     = current.height,
                minWidth   = current.minWidth,
                minHeight  = current.minHeight,
                maxWidth   = current.maxWidth,
                maxHeight  = current.maxHeight,
                scrolling  = current.scrolling,
                scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
                margin     = current.margin,
                wMargin    = getScalar(margin[1] + margin[3]),
                hMargin    = getScalar(margin[0] + margin[2]),
                wPadding,
                hPadding,
                wSpace,
                hSpace,
                origWidth,
                origHeight,
                origMaxWidth,
                origMaxHeight,
                ratio,
                width_,
                height_,
                maxWidth_,
                maxHeight_,
                iframe,
                body;

            // Reset dimensions so we could re-check actual size
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

            wPadding = getScalar(skin.outerWidth(true)  - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());

            // Any space between content and viewport (margin, padding, border, title)
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;

            origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

            if (current.type === 'iframe') {
                iframe = current.content;

                if (current.autoHeight && iframe && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width( origWidth ).height(9999);

                            body = iframe.contents().find('body');

                            if (scrollOut) {
                                body.css('overflow-x', 'hidden');
                            }

                            origHeight = body.outerHeight(true);
                        }

                    } catch (e) {}
                }

            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass( 'fancybox-tmp' );

                // Set width or height in case we need to calculate only one dimension
                if (!current.autoWidth) {
                    inner.width( origWidth );
                }

                if (!current.autoHeight) {
                    inner.height( origHeight );
                }

                if (current.autoWidth) {
                    origWidth = inner.width();
                }

                if (current.autoHeight) {
                    origHeight = inner.height();
                }

                inner.removeClass( 'fancybox-tmp' );
            }

            width  = getScalar( origWidth );
            height = getScalar( origHeight );

            ratio  = origWidth / origHeight;

            // Calculations for the content
            minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

            // These will be used to determine if wrap can fit in the viewport
            origMaxWidth  = maxWidth;
            origMaxHeight = maxHeight;

            if (current.fitToView) {
                maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            }

            maxWidth_  = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;

            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width  = maxWidth;
                    height = getScalar(width / ratio);
                }

                if (height > maxHeight) {
                    height = maxHeight;
                    width  = getScalar(height * ratio);
                }

                if (width < minWidth) {
                    width  = minWidth;
                    height = getScalar(width / ratio);
                }

                if (height < minHeight) {
                    height = minHeight;
                    width  = getScalar(height * ratio);
                }

            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));

                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width( width );

                    height = inner.height();
                }

                height = Math.max(minHeight, Math.min(height, maxHeight));
            }

            // Try to fit inside viewport (including the title)
            if (current.fitToView) {
                inner.width( width ).height( height );

                wrap.width( width + wPadding );

                // Real wrap dimensions
                width_  = wrap.width();
                height_ = wrap.height();

                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break;
                        }

                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width  = getScalar(height * ratio);

                        if (width < minWidth) {
                            width  = minWidth;
                            height = getScalar(width / ratio);
                        }

                        if (width > maxWidth) {
                            width  = maxWidth;
                            height = getScalar(width / ratio);
                        }

                        inner.width( width ).height( height );

                        wrap.width( width + wPadding );

                        width_  = wrap.width();
                        height_ = wrap.height();
                    }

                } else {
                    width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                }
            }

            if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                width += scrollOut;
            }

            inner.width( width ).height( height );

            wrap.width( width + wPadding );

            width_  = wrap.width();
            height_ = wrap.height();

            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

            $.extend(current, {
                dim : {
                    width	: getValue( width_ ),
                    height	: getValue( height_ )
                },
                origWidth  : origWidth,
                origHeight : origHeight,
                canShrink  : canShrink,
                canExpand  : canExpand,
                wPadding   : wPadding,
                hPadding   : hPadding,
                wrapSpace  : height_ - skin.outerHeight(true),
                skinSpace  : skin.height() - height
            });

            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto');
            }
        },

        _getPosition: function (onlyAbsolute) {
            var current  = F.current,
                viewport = F.getViewport(),
                margin   = current.margin,
                width    = F.wrap.width()  + margin[1] + margin[3],
                height   = F.wrap.height() + margin[0] + margin[2],
                rez      = {
                    position: 'absolute',
                    top  : margin[0],
                    left : margin[3]
                };

            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed';

            } else if (!current.locked) {
                rez.top  += viewport.y;
                rez.left += viewport.x;
            }

            rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
            rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

            return rez;
        },

        _afterZoomIn: function () {
            var current = F.current;

            if (!current) {
                return;
            }

            F.isOpen = F.isOpened = true;

            F.wrap.css('overflow', 'visible').addClass('fancybox-opened').hide().show(0);

            F.update();

            // Assign a click event
            if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
                    if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                        e.preventDefault();

                        F[ current.closeClick ? 'close' : 'next' ]();
                    }
                });
            }

            // Create a close button
            if (current.closeBtn) {
                $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
                    e.preventDefault();

                    F.close();
                });
            }

            // Create navigation arrows
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                }

                if (current.loop || current.index < F.group.length - 1) {
                    $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                }
            }

            F.trigger('afterShow');

            // Stop the slideshow if this is the last item
            if (!current.loop && current.index === current.group.length - 1) {

                F.play( false );

            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;

                F.play(true);
            }
        },

        _afterZoomOut: function ( obj ) {
            obj = obj || F.current;

            $('.fancybox-wrap').trigger('onReset').remove();

            $.extend(F, {
                group  : {},
                opts   : {},
                router : false,
                current   : null,
                isActive  : false,
                isOpened  : false,
                isOpen    : false,
                isClosing : false,
                wrap   : null,
                skin   : null,
                outer  : null,
                inner  : null
            });

            F.trigger('afterClose', obj);
        }
    });

    /*
     *	Default transitions
     */

    F.transitions = {
        getOrigPosition: function () {
            var current  = F.current,
                element  = current.element,
                orig     = current.orig,
                pos      = {},
                width    = 50,
                height   = 50,
                hPadding = current.hPadding,
                wPadding = current.wPadding,
                viewport = F.getViewport();

            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');

                if (!orig.length) {
                    orig = element;
                }
            }

            if (isQuery(orig)) {
                pos = orig.offset();

                if (orig.is('img')) {
                    width  = orig.outerWidth();
                    height = orig.outerHeight();
                }

            } else {
                pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
            }

            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top  -= viewport.y;
                pos.left -= viewport.x;
            }

            pos = {
                top     : getValue(pos.top  - hPadding * current.topRatio),
                left    : getValue(pos.left - wPadding * current.leftRatio),
                width   : getValue(width  + wPadding),
                height  : getValue(height + hPadding)
            };

            return pos;
        },

        step: function (now, fx) {
            var ratio,
                padding,
                value,
                prop       = fx.prop,
                current    = F.current,
                wrapSpace  = current.wrapSpace,
                skinSpace  = current.skinSpace;

            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                if (F.isClosing) {
                    ratio = 1 - ratio;
                }

                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value   = now - padding;

                F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
                F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
            }
        },

        zoomIn: function () {
            var current  = F.current,
                startPos = current.pos,
                effect   = current.openEffect,
                elastic  = effect === 'elastic',
                endPos   = $.extend({opacity : 1}, startPos);

            // Remove "position" property that breaks older IE
            delete endPos.position;

            if (elastic) {
                startPos = this.getOrigPosition();

                if (current.openOpacity) {
                    startPos.opacity = 0.1;
                }

            } else if (effect === 'fade') {
                startPos.opacity = 0.1;
            }

            F.wrap.css(startPos).animate(endPos, {
                duration : effect === 'none' ? 0 : current.openSpeed,
                easing   : current.openEasing,
                step     : elastic ? this.step : null,
                complete : F._afterZoomIn
            });
        },

        zoomOut: function () {
            var current  = F.current,
                effect   = current.closeEffect,
                elastic  = effect === 'elastic',
                endPos   = {opacity : 0.1};

            if (elastic) {
                endPos = this.getOrigPosition();

                if (current.closeOpacity) {
                    endPos.opacity = 0.1;
                }
            }

            F.wrap.animate(endPos, {
                duration : effect === 'none' ? 0 : current.closeSpeed,
                easing   : current.closeEasing,
                step     : elastic ? this.step : null,
                complete : F._afterZoomOut
            });
        },

        changeIn: function () {
            var current   = F.current,
                effect    = current.nextEffect,
                startPos  = current.pos,
                endPos    = { opacity : 1 },
                direction = F.direction,
                distance  = 200,
                field;

            startPos.opacity = 0.1;

            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                if (direction === 'down' || direction === 'right') {
                    startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
                    endPos[ field ]   = '+=' + distance + 'px';

                } else {
                    startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
                    endPos[ field ]   = '-=' + distance + 'px';
                }
            }

            // Workaround for http://bugs.jquery.com/ticket/12273
            if (effect === 'none') {
                F._afterZoomIn();

            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration : current.nextSpeed,
                    easing   : current.nextEasing,
                    complete : F._afterZoomIn
                });
            }
        },

        changeOut: function () {
            var previous  = F.previous,
                effect    = previous.prevEffect,
                endPos    = { opacity : 0.1 },
                direction = F.direction,
                distance  = 200;

            if (effect === 'elastic') {
                endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
            }

            previous.wrap.animate(endPos, {
                duration : effect === 'none' ? 0 : previous.prevSpeed,
                easing   : previous.prevEasing,
                complete : function () {
                    $(this).trigger('onReset').remove();
                }
            });
        }
    };

    /*
     *	Overlay helper
     */

    F.helpers.overlay = {
        defaults : {
            closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
            speedOut   : 200,       // duration of fadeOut animation
            showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
            css        : {},        // custom CSS properties
            locked     : !isTouch,  // if true, the content will be locked into overlay
            fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
        },

        overlay : null,      // current handle
        fixed   : false,     // indicates if the overlay has position "fixed"
        el      : $('html'), // element that contains "the lock"

        // Public methods
        create : function(opts) {
            var parent;

            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.close();
            }

            parent = F.coming ? F.coming.parent : opts.parent;

            this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( parent && parent.length ? parent : 'body' );
            this.fixed   = false;

            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');

                this.fixed = true;
            }
        },

        open : function(opts) {
            var that = this;

            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto');

            } else {
                this.create(opts);
            }

            if (!this.fixed) {
                W.bind('resize.overlay', $.proxy( this.update, this) );

                this.update();
            }

            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function(e) {
                    if ($(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close();
                        } else {
                            that.close();
                        }

                        return false;
                    }
                });
            }

            this.overlay.css( opts.css ).show();
        },

        close : function() {
            W.unbind('resize.overlay');

            if (this.el.hasClass('fancybox-lock')) {
                $('.fancybox-margin').removeClass('fancybox-margin');

                this.el.removeClass('fancybox-lock');

                W.scrollTop( this.scrollV ).scrollLeft( this.scrollH );
            }

            $('.fancybox-overlay').remove().hide();

            $.extend(this, {
                overlay : null,
                fixed   : false
            });
        },

        // Private, callbacks

        update : function () {
            var width = '100%', offsetWidth;

            // Reset width/height so it will not mess
            this.overlay.width(width).height('100%');

            // jQuery does not return reliable result for IE
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                if (D.width() > offsetWidth) {
                    width = D.width();
                }

            } else if (D.width() > W.width()) {
                width = D.width();
            }

            this.overlay.width(width).height(D.height());
        },

        // This is where we can manipulate DOM, because later it would cause iframes to reload
        onReady : function (opts, obj) {
            var overlay = this.overlay;

            $('.fancybox-overlay').stop(true, true);

            if (!overlay) {
                this.create(opts);
            }

            if (opts.locked && this.fixed && obj.fixed) {
                obj.locked = this.overlay.append( obj.wrap );
                obj.fixed  = false;
            }

            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },

        beforeShow : function(opts, obj) {
            if (obj.locked && !this.el.hasClass('fancybox-lock')) {
                if (this.fixPosition !== false) {
                    $('*:not(object)').filter(function(){
                        return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
                    }).addClass('fancybox-margin');
                }

                this.el.addClass('fancybox-margin');

                this.scrollV = W.scrollTop();
                this.scrollH = W.scrollLeft();

                this.el.addClass('fancybox-lock');

                W.scrollTop( this.scrollV ).scrollLeft( this.scrollH );
            }

            this.open(opts);
        },

        onUpdate : function() {
            if (!this.fixed) {
                this.update();
            }
        },

        afterClose: function (opts) {
            // Remove overlay if exists and fancyBox is not opening
            // (e.g., it is not being open using afterClose callback)
            if (this.overlay && !F.coming) {
                this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
            }
        }
    };

    /*
     *	Title helper
     */

    F.helpers.title = {
        defaults : {
            type     : 'float', // 'float', 'inside', 'outside' or 'over',
            position : 'bottom' // 'top' or 'bottom'
        },

        beforeShow: function (opts) {
            var current = F.current,
                text    = current.title,
                type    = opts.type,
                title,
                target;

            if ($.isFunction(text)) {
                text = text.call(current.element, current);
            }

            if (!isString(text) || $.trim(text) === '') {
                return;
            }

            title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

            switch (type) {
                case 'inside':
                    target = F.skin;
                    break;

                case 'outside':
                    target = F.wrap;
                    break;

                case 'over':
                    target = F.inner;
                    break;

                default: // 'float'
                    target = F.skin;

                    title.appendTo('body');

                    if (IE) {
                        title.width( title.width() );
                    }

                    title.wrapInner('<span class="child"></span>');

                    //Increase bottom margin so this title will also fit into viewport
                    F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
                    break;
            }

            title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
        }
    };

    // jQuery plugin initialization
    $.fn.fancybox = function (options) {
        var index,
            that     = $(this),
            selector = this.selector || '',
            run      = function(e) {
                var what = $(this).blur(), idx = index, relType, relVal;

                if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                    relType = options.groupAttr || 'data-fancybox-group';
                    relVal  = what.attr(relType);

                    if (!relVal) {
                        relType = 'rel';
                        relVal  = what.get(0)[ relType ];
                    }

                    if (relVal && relVal !== '' && relVal !== 'nofollow') {
                        what = selector.length ? $(selector) : that;
                        what = what.filter('[' + relType + '="' + relVal + '"]');
                        idx  = what.index(this);
                    }

                    options.index = idx;

                    // Stop an event from bubbling if everything is fine
                    if (F.open(what, options) !== false) {
                        e.preventDefault();
                    }
                }
            };

        options = options || {};
        index   = options.index || 0;

        if (!selector || options.live === false) {
            that.unbind('click.fb-start').bind('click.fb-start', run);

        } else {
            D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
        }

        this.filter('[data-fancybox-start=1]').trigger('click');

        return this;
    };

    // Tests that need a body at doc ready
    D.ready(function() {
        var w1, w2;

        if ( $.scrollbarWidth === undefined ) {
            // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
            $.scrollbarWidth = function() {
                var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                    child  = parent.children(),
                    width  = child.innerWidth() - child.height( 99 ).innerWidth();

                parent.remove();

                return width;
            };
        }

        if ( $.support.fixedPosition === undefined ) {
            $.support.fixedPosition = (function() {
                var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                    fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

                elem.remove();

                return fixed;
            }());
        }

        $.extend(F.defaults, {
            scrollbarWidth : $.scrollbarWidth(),
            fixed  : $.support.fixedPosition,
            parent : $('body')
        });

        //Get real width of page scroll-bar
        w1 = $(window).width();

        H.addClass('fancybox-lock-test');

        w2 = $(window).width();

        H.removeClass('fancybox-lock-test');

        $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    });

}(window, document, jQuery));

//** jQuery Scroll to Top Control script- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com.
//** Available/ usage terms at http://www.dynamicdrive.com (March 30th, 09')
//** v1.1 (April 7th, 09'):
//** 1) Adds ability to scroll to an absolute position (from top of page) or specific element on the page instead.
//** 2) Fixes scroll animation not working in Opera. 


var scrolltotop={
	//startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
	//scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).
	setting: {startline:100, scrollto: 0, scrollduration:1000, fadeduration:[500, 100]},
	controlHTML: '<img src="assets/img/up.png" style="width:40px; height:40px" />', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
	controlattrs: {offsetx:10, offsety:10}, //offset of control relative to right/ bottom of window corner
	anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links

	state: {isvisible:false, shouldvisible:false},

	scrollup:function(){
		if (!this.cssfixedsupport) //if control is positioned using JavaScript
			this.$control.css({opacity:0}); //hide control immediately after clicking it
		var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto);
		if (typeof dest=="string" && jQuery('#'+dest).length==1) //check element set by string exists
			dest=jQuery('#'+dest).offset().top;
		else
			dest=0;
		this.$body.animate({scrollTop: dest}, this.setting.scrollduration);
	},

	keepfixed:function(){
		var $window=jQuery(window);
		var controlx=$window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx;
		var controly=$window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety;
		this.$control.css({left:controlx+'px', top:controly+'px'})
	},

	togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop();
		if (!this.cssfixedsupport)
			this.keepfixed();
		this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false;
		if (this.state.shouldvisible && !this.state.isvisible){
			this.$control.stop().animate({opacity:1}, this.setting.fadeduration[0]);
			this.state.isvisible=true
		}
		else if (this.state.shouldvisible==false && this.state.isvisible){
			this.$control.stop().animate({opacity:0}, this.setting.fadeduration[1]);
			this.state.isvisible=false
		}
	},
	
	init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop;
			var iebrws=document.all;
			mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode
			mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body');
			mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>')
				.css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:mainobj.controlattrs.offsety, opacity:0, cursor:'pointer'})
				.attr({title:''})
				.click(function(){mainobj.scrollup(); return false})
				.appendTo('body');
			if (document.all && !window.XMLHttpRequest && mainobj.$control.text()!='') //loose check for IE6 and below, plus whether control contains any text
				mainobj.$control.css({width:mainobj.$control.width()}); //IE6- seems to require an explicit width on a DIV containing text
			mainobj.togglecontrol();
			$('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
				mainobj.scrollup();
				return false
			});
			$(window).bind('scroll resize', function(e){
				mainobj.togglecontrol();
			});
		})
	}
};

//scrolltotop.init()

/**
* jquery.matchHeight.js master
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display') === 'inline-block' ? 'inline-block' : 'block';

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        display = $that.css('display') === 'inline-block' ? 'inline-block' : 'block';

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert display block
                    $that.css('display', '');
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, targetHeight - verticalPadding);
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // update heights on load and resize events
    $(window).bind('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window).bind('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

})(jQuery);


/* Modernizr (Custom Build) | MIT & BSD

 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-touch-shiv-load-cssclasses-prefixed-teststyles-testprops-testallprops-prefixes-domprefixes-mq-respond

 */

;window.Modernizr=function(e,t,n){function C(e){f.cssText=e}function k(e,t){return C(h.join(e+";")+(t||""))}function L(e,t){return typeof e===t}function A(e,t){return!!~(""+e).indexOf(t)}function O(e,t){for(var r in e){var i=e[r];if(!A(i,"-")&&f[i]!==n)return t=="pfx"?i:!0}return!1}function M(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:L(s,"function")?s.bind(r||t):s}return!1}function _(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+d.join(r+" ")+r).split(" ");return L(t,"string")||L(t,"undefined")?O(i,t):(i=(e+" "+v.join(r+" ")+r).split(" "),M(i,t,n))}var r="2.8.3",i={},s=!0,o=t.documentElement,u="modernizr",a=t.createElement(u),f=a.style,l,c={}.toString,h=" -webkit- -moz- -o- -ms- ".split(" "),p="Webkit Moz O ms",d=p.split(" "),v=p.toLowerCase().split(" "),m={},g={},y={},b=[],w=b.slice,E,S=function(e,n,r,i){var s,a,f,l,c=t.createElement("div"),h=t.body,p=h||t.createElement("body");if(parseInt(r,10))while(r--)f=t.createElement("div"),f.id=i?i[r]:u+(r+1),c.appendChild(f);return s=["&#173;",'<style id="s',u,'">',e,"</style>"].join(""),c.id=u,(h?c:p).innerHTML+=s,p.appendChild(c),h||(p.style.background="",p.style.overflow="hidden",l=o.style.overflow,o.style.overflow="hidden",o.appendChild(p)),a=n(c,e),h?c.parentNode.removeChild(c):(p.parentNode.removeChild(p),o.style.overflow=l),!!a},x=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return S("@media "+t+" { #"+u+" { position: absolute; } }",function(t){r=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle)["position"]=="absolute"}),r},T={}.hasOwnProperty,N;!L(T,"undefined")&&!L(T.call,"undefined")?N=function(e,t){return T.call(e,t)}:N=function(e,t){return t in e&&L(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(typeof n!="function")throw new TypeError;var r=w.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e,o=n.apply(s,r.concat(w.call(arguments)));return Object(o)===o?o:s}return n.apply(t,r.concat(w.call(arguments)))};return i}),m.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:S(["@media (",h.join("touch-enabled),("),u,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=e.offsetTop===9}),n},m.csstransforms3d=function(){var e=!!_("perspective");return e&&"webkitPerspective"in o.style&&S("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=t.offsetLeft===9&&t.offsetHeight===3}),e},m.csstransitions=function(){return _("transition")};for(var D in m)N(m,D)&&(E=D.toLowerCase(),i[E]=m[D](),b.push((i[E]?"":"no-")+E));return i.addTest=function(e,t){if(typeof e=="object")for(var r in e)N(e,r)&&i.addTest(r,e[r]);else{e=e.toLowerCase();if(i[e]!==n)return i;t=typeof t=="function"?t():t,typeof s!="undefined"&&s&&(o.className+=" "+(t?"":"no-")+e),i[e]=t}return i},C(""),a=l=null,function(e,t){function c(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function h(){var e=y.elements;return typeof e=="string"?e.split(" "):e}function p(e){var t=f[e[u]];return t||(t={},a++,e[u]=a,f[a]=t),t}function d(e,n,r){n||(n=t);if(l)return n.createElement(e);r||(r=p(n));var o;return r.cache[e]?o=r.cache[e].cloneNode():s.test(e)?o=(r.cache[e]=r.createElem(e)).cloneNode():o=r.createElem(e),o.canHaveChildren&&!i.test(e)&&!o.tagUrn?r.frag.appendChild(o):o}function v(e,n){e||(e=t);if(l)return e.createDocumentFragment();n=n||p(e);var r=n.frag.cloneNode(),i=0,s=h(),o=s.length;for(;i<o;i++)r.createElement(s[i]);return r}function m(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?d(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function g(e){e||(e=t);var n=p(e);return y.shivCSS&&!o&&!n.hasCSS&&(n.hasCSS=!!c(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||m(e,n),e}var n="3.7.0",r=e.html5||{},i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,s=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,o,u="_html5shiv",a=0,f={},l;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e,l=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){o=!0,l=!0}})();var y={elements:r.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:n,shivCSS:r.shivCSS!==!1,supportsUnknownElements:l,shivMethods:r.shivMethods!==!1,type:"default",shivDocument:g,createElement:d,createDocumentFragment:v};e.html5=y,g(t)}(this,t),i._version=r,i._prefixes=h,i._domPrefixes=v,i._cssomPrefixes=d,i.mq=x,i.testProp=function(e){return O([e])},i.testAllProps=_,i.testStyles=S,i.prefixed=function(e,t,n){return t?_(e,t,n):_(e,"pfx")},o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+b.join(" "):""),i}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/**
 * jquery.flipshow.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {

	'use strict';

	// ======================= imagesLoaded Plugin ===============================
	// https://github.com/desandro/imagesloaded

	// $('#my-container').imagesLoaded(myFunction)
	// execute a callback when all images have loaded.
	// needed because .load() doesn't work on cached images

	// callback function gets image collection as argument
	//  this is the container

	// original: mit license. paul irish. 2010.
	// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

	// blank image data-uri bypasses webkit log warning (thx doug jones)
	// blank image data-uri bypasses webkit log warning (thx doug jones)
	var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

	$.fn.imagesLoaded = function( callback ) {
		var $this = this,
			deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
			hasNotify = $.isFunction(deferred.notify),
			$images = $this.find('img').add( $this.filter('img') ),
			loaded = [],
			proper = [],
			broken = [];

		// Register deferred callbacks
		if ($.isPlainObject(callback)) {
			$.each(callback, function (key, value) {
				if (key === 'callback') {
					callback = value;
				} else if (deferred) {
					deferred[key](value);
				}
			});
		}

		function doneLoading() {
			var $proper = $(proper),
				$broken = $(broken);

			if ( deferred ) {
				if ( broken.length ) {
					deferred.reject( $images, $proper, $broken );
				} else {
					deferred.resolve( $images );
				}
			}

			if ( $.isFunction( callback ) ) {
				callback.call( $this, $images, $proper, $broken );
			}
		}

		function imgLoadedHandler( event ) {
			imgLoaded( event.target, event.type === 'error' );
		}

		function imgLoaded( img, isBroken ) {
			// don't proceed if BLANK image, or image is already loaded
			if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
				return;
			}

			// store element in loaded images array
			loaded.push( img );

			// keep track of broken and properly loaded images
			if ( isBroken ) {
				broken.push( img );
			} else {
				proper.push( img );
			}

			// cache image and its state for future calls
			$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

			// trigger deferred progress method if present
			if ( hasNotify ) {
				deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
			}

			// call doneLoading and clean listeners if all images are loaded
			if ( $images.length === loaded.length ) {
				setTimeout( doneLoading );
				$images.unbind( '.imagesLoaded', imgLoadedHandler );
			}
		}

		// if no images, trigger immediately
		if ( !$images.length ) {
			doneLoading();
		} else {
			$images.bind( 'load.imagesLoaded error.imagesLoaded', imgLoadedHandler )
			.each( function( i, el ) {
				var src = el.src;

				// find out if this image has been already checked for status
				// if it was, and src has not changed, call imgLoaded on it
				var cached = $.data( el, 'imagesLoaded' );
				if ( cached && cached.src === src ) {
					imgLoaded( el, cached.isBroken );
					return;
				}

				// if complete is true and browser supports natural sizes, try
				// to check for image status manually
				if ( el.complete && el.naturalWidth !== undefined ) {
					imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
					return;
				}

				// cached images don't fire load sometimes, so we reset src, but only when
				// dealing with IE, or image is complete (loaded) and failed manual check
				// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
				if ( el.readyState || el.complete ) {
					el.src = BLANK;
					el.src = src;
				}
			});
		}

		return deferred ? deferred.promise( $this ) : $this;
	};

	// global
	var Modernizr = window.Modernizr;

	$.Flipshow = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	// the options
	$.Flipshow.defaults = {
		// default transition speed (ms)
		speed : 700,
		// default transition easing
		easing : 'ease-out'
	};

	$.Flipshow.prototype = {
		_init : function( options ) {

			// options
			this.options = $.extend( true, {}, $.Flipshow.defaults, options );
			// support for CSS Transitions & 3D transforms
			this.support = Modernizr.csstransitions && Modernizr.csstransforms3d && !(/MSIE (\d+\.\d+);/.test(navigator.userAgent));
			// transition end event name and transform name
			var transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				},
				transformNames = {
					'WebkitTransform' : '-webkit-transform',
					'MozTransform' : '-moz-transform',
					'OTransform' : '-o-transform',
					'msTransform' : '-ms-transform',
					'transform' : 'transform'
				};

			if( this.support ) {
				this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ] + '.cbpFWSlider';
				this.transformName = transformNames[ Modernizr.prefixed( 'transform' ) ];
			}
			this.transitionProperties = this.transformName + ' ' + this.options.speed + 'ms ' + this.options.easing;

			// the list of items
			this.$listItems = this.$el.children( 'ul.fc-slides' );
			// the items
			this.$items = this.$listItems.children( 'li' ).hide();
			// total number of items
			this.itemsCount = this.$items.length;
			// current item´s index
			this.current = 0;
			this.$listItems.imagesLoaded( $.proxy( function() {
				// show first item
				this.$items.eq( this.current ).show();
				// add navigation and flipping structure
				if( this.itemsCount > 0 ) {
					this._addNav();
					if( this.support ) {
						this._layout();
					}
				}
			}, this ) );

		},
		_addNav : function() {

			var self = this,
				$navLeft = $( '<div class="fc-left"><span></span><span></span><span></span><i class="fa fa-arrow-left"></i></div>' ),
				$navRight = $( '<div class="fc-right"><span></span><span></span><span></span><i class="fa fa-arrow-right"></i></div>' );

			$( '<nav></nav>' ).append( $navLeft, $navRight ).appendTo( this.$el );

			$navLeft.find( 'span' ).on( 'click.flipshow touchstart.flipshow', function() {
				self._navigate( $( this ), 'left' );
			} );

			$navRight.find( 'span' ).on( 'click.flipshow touchstart.flipshow', function() {
				self._navigate( $( this ), 'right' );
			} );

		},
		_layout : function( $current, $next ) {

			this.$flipFront = $( '<div class="fc-front"><div></div></div>' );
			this.$frontContent = this.$flipFront.children( 'div:first' );
			this.$flipBack = $( '<div class="fc-back"><div></div></div>' );
			this.$backContent = this.$flipBack.children( 'div:first' );
			this.$flipEl = $( '<div class="fc-flip"></div>' ).append( this.$flipFront, this.$flipBack ).hide().appendTo( this.$el );

		},
		_navigate : function( $nav, dir ) {

			if( this.isAnimating && this.support ) {
				return false;
			}
			this.isAnimating = true;

			var $currentItem = this.$items.eq( this.current ).hide();

			if( dir === 'right' ) {
				this.current < this.itemsCount - 1 ? ++this.current : this.current = 0;
			}
			else if( dir === 'left' ) {
				this.current > 0 ? --this.current : this.current = this.itemsCount - 1;
			}

			var $nextItem = this.$items.eq( this.current );

			if( this.support ) {
				this._flip( $currentItem, $nextItem, dir, $nav.index() );
			}
			else {
				$nextItem.show();
			}

		},
		_flip : function( $currentItem, $nextItem, dir, angle ) {

			var transformProperties = '',
				// overlays
				$overlayLight = $( '<div class="fc-overlay-light"></div>' ),
				$overlayDark = $( '<div class="fc-overlay-dark"></div>' );

            if (typeof this.$flipEl == 'undefined')
                return;

			this.$flipEl.css( 'transition', this.transitionProperties );

			this.$flipFront.find( 'div.fc-overlay-light, div.fc-overlay-dark' ).remove();
			this.$flipBack.find( 'div.fc-overlay-light, div.fc-overlay-dark' ).remove();

			if( dir === 'right' ) {
				this.$flipFront.append( $overlayLight );
				this.$flipBack.append( $overlayDark );
				$overlayDark.css( 'opacity', 1 );
			}
			else if( dir === 'left' ) {
				this.$flipFront.append( $overlayDark );
				this.$flipBack.append( $overlayLight );
				$overlayLight.css( 'opacity', 1 );
			}
			var overlayStyle = { transition : 'opacity ' + ( this.options.speed / 1.3 ) + 'ms' };
			$overlayLight.css( overlayStyle );
			$overlayDark.css( overlayStyle );

			switch( angle ) {
				case 0 :
					transformProperties = dir === 'left' ? 'rotate3d(-1,1,0,-179deg) rotate3d(-1,1,0,-1deg)' : 'rotate3d(1,1,0,180deg)';
					break;
				case 1 :
					transformProperties = dir === 'left' ? 'rotate3d(0,1,0,-179deg) rotate3d(0,1,0,-1deg)' : 'rotate3d(0,1,0,180deg)';
					break;
				case 2 :
					transformProperties = dir === 'left' ? 'rotate3d(1,1,0,-179deg) rotate3d(1,1,0,-1deg)' : 'rotate3d(-1,1,0,179deg) rotate3d(-1,1,0,1deg)';
					break;
			}

			this.$flipBack.css( 'transform', transformProperties );

			this.$frontContent.empty().html( $currentItem.html() );
			this.$backContent.empty().html( $nextItem.html() );
			this.$flipEl.show();

			var self = this;
			setTimeout( function() {

				self.$flipEl.css( 'transform', transformProperties );
				$overlayLight.css( 'opacity', dir === 'right' ? 1 : 0 );
				$overlayDark.css( 'opacity', dir === 'right' ? 0 : 1 );
				self.$flipEl.on( self.transEndEventName, function( event ) {
					if( event.target.className === 'fc-overlay-light' || event.target.className === 'fc-overlay-dark' ) return;
					self._ontransitionend( $nextItem );
				} );

			}, 25 );

		},
		_ontransitionend : function( $nextItem ) {
			$nextItem.show();
			this.$flipEl.off( this.transEndEventName ).css( {
				transition : 'none',
				transform : 'none'
			} ).hide();
			this.isAnimating = false;
		}
	};

	var logError = function( message ) {
		if ( window.console ) {
			window.console.error( message );
		}
	};

	$.fn.flipshow = function( options ) {
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				var instance = $.data( this, 'flipshow' );
				if ( !instance ) {
					logError( "cannot call methods on flipshow prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for flipshow instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		}
		else {
			this.each(function() {
				var instance = $.data( this, 'flipshow' );
				if ( instance ) {
					instance._init();
				}
				else {
					instance = $.data( this, 'flipshow', new $.Flipshow( options, this ) );
				}
			});
		}
		return this;
	};

} )( jQuery, window );

/*! Magnific Popup - v1.1.0 - 2016-02-20

* http://dimsemenov.com/plugins/magnific-popup/

* Copyright (c) 2016 Dmitry Semenov; */

;(function (factory) { 

if (typeof define === 'function' && define.amd) { 

 // AMD. Register as an anonymous module. 

 define(['jquery'], factory); 

 } else if (typeof exports === 'object') { 

 // Node/CommonJS 

 factory(require('jquery')); 

 } else { 

 // Browser globals 

 factory(window.jQuery || window.Zepto); 

 } 

 }(function($) { 

/*>>core*/

/**

 * 

 * Magnific Popup Core JS file

 * 

 */

/**

 * Private static constants

 */

var CLOSE_EVENT = 'Close',

	BEFORE_CLOSE_EVENT = 'BeforeClose',

	AFTER_CLOSE_EVENT = 'AfterClose',

	BEFORE_APPEND_EVENT = 'BeforeAppend',

	MARKUP_PARSE_EVENT = 'MarkupParse',

	OPEN_EVENT = 'Open',

	CHANGE_EVENT = 'Change',

	NS = 'mfp',

	EVENT_NS = '.' + NS,

	READY_CLASS = 'mfp-ready',

	REMOVING_CLASS = 'mfp-removing',

	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';

/**

 * Private vars 

 */

/*jshint -W079 */

var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'

	MagnificPopup = function(){},

	_isJQ = !!(window.jQuery),

	_prevStatus,

	_window = $(window),

	_document,

	_prevContentType,

	_wrapClasses,

	_currPopupType;

/**

 * Private functions

 */

var _mfpOn = function(name, f) {

		mfp.ev.on(NS + name + EVENT_NS, f);

	},

	_getEl = function(className, appendTo, html, raw) {

		var el = document.createElement('div');

		el.className = 'mfp-'+className;

		if(html) {

			el.innerHTML = html;

		}

		if(!raw) {

			el = $(el);

			if(appendTo) {

				el.appendTo(appendTo);

			}

		} else if(appendTo) {

			appendTo.appendChild(el);

		}

		return el;

	},

	_mfpTrigger = function(e, data) {

		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {

			// converts "mfpEventName" to "eventName" callback and triggers it if it's present

			e = e.charAt(0).toLowerCase() + e.slice(1);

			if(mfp.st.callbacks[e]) {

				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);

			}

		}

	},

	_getCloseBtn = function(type) {

		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {

			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );

			_currPopupType = type;

		}

		return mfp.currTemplate.closeBtn;

	},

	// Initialize Magnific Popup only when called at least once

	_checkInstance = function() {

		if(!$.magnificPopup.instance) {

			/*jshint -W020 */

			mfp = new MagnificPopup();

			mfp.init();

			$.magnificPopup.instance = mfp;

		}

	},

	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr

	supportsTransitions = function() {

		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist

			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {

			return true; 

		}

			

		while( v.length ) {

			if( v.pop() + 'Transition' in s ) {

				return true;

			}

		}

				

		return false;

	};



/**

 * Public functions

 */

MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**

	 * Initializes Magnific Popup plugin. 

	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed

	 */

	init: function() {

		var appVersion = navigator.appVersion;

		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;

		mfp.isAndroid = (/android/gi).test(appVersion);

		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);

		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.

		// If you know a better way of detecting this - let me know.

		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );

		_document = $(document);

		mfp.popupsCache = {};

	},

	/**

	 * Opens popup

	 * @param  data [description]

	 */

	open: function(data) {

		var i;

		if(data.isObj === false) { 

			// convert jQuery collection to array to avoid conflicts later

			mfp.items = data.items.toArray();

			mfp.index = 0;

			var items = data.items,

				item;

			for(i = 0; i < items.length; i++) {

				item = items[i];

				if(item.parsed) {

					item = item.el[0];

				}

				if(item === data.el[0]) {

					mfp.index = i;

					break;

				}

			}

		} else {

			mfp.items = $.isArray(data.items) ? data.items : [data.items];

			mfp.index = data.index || 0;

		}

		// if popup is already opened - we just update the content

		if(mfp.isOpen) {

			mfp.updateItemHTML();

			return;

		}

		

		mfp.types = []; 

		_wrapClasses = '';

		if(data.mainEl && data.mainEl.length) {

			mfp.ev = data.mainEl.eq(0);

		} else {

			mfp.ev = _document;

		}

		if(data.key) {

			if(!mfp.popupsCache[data.key]) {

				mfp.popupsCache[data.key] = {};

			}

			mfp.currTemplate = mfp.popupsCache[data.key];

		} else {

			mfp.currTemplate = {};

		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 

		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {

			mfp.st.closeOnContentClick = false;

			mfp.st.closeOnBgClick = false;

			mfp.st.showCloseBtn = false;

			mfp.st.enableEscapeKey = false;

		}

		

		// Building markup

		// main containers are created only once

		if(!mfp.bgOverlay) {

			// Dark overlay

			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {

				mfp.close();

			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {

				if(mfp._checkIfClose(e.target)) {

					mfp.close();

				}

			});

			mfp.container = _getEl('container', mfp.wrap);

		}

		mfp.contentContainer = _getEl('content');

		if(mfp.st.preloader) {

			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);

		}

		// Initializing modules

		var modules = $.magnificPopup.modules;

		for(i = 0; i < modules.length; i++) {

			var n = modules[i];

			n = n.charAt(0).toUpperCase() + n.slice(1);

			mfp['init'+n].call(mfp);

		}

		_mfpTrigger('BeforeOpen');

		if(mfp.st.showCloseBtn) {

			// Close button

			if(!mfp.st.closeBtnInside) {

				mfp.wrap.append( _getCloseBtn() );

			} else {

				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {

					values.close_replaceWith = _getCloseBtn(item.type);

				});

				_wrapClasses += ' mfp-close-btn-in';

			}

		}

		if(mfp.st.alignTop) {

			_wrapClasses += ' mfp-align-top';

		}

	

		if(mfp.fixedContentPos) {

			mfp.wrap.css({

				overflow: mfp.st.overflowY,

				overflowX: 'hidden',

				overflowY: mfp.st.overflowY

			});

		} else {

			mfp.wrap.css({ 

				top: _window.scrollTop(),

				position: 'absolute'

			});

		}

		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {

			mfp.bgOverlay.css({

				height: _document.height(),

				position: 'absolute'

			});

		}

		

		if(mfp.st.enableEscapeKey) {

			// Close on ESC key

			_document.on('keyup' + EVENT_NS, function(e) {

				if(e.keyCode === 27) {

					mfp.close();

				}

			});

		}

		_window.on('resize' + EVENT_NS, function() {

			mfp.updateSize();

		});

		if(!mfp.st.closeOnContentClick) {

			_wrapClasses += ' mfp-auto-cursor';

		}

		

		if(_wrapClasses)

			mfp.wrap.addClass(_wrapClasses);

		// this triggers recalculation of layout, so we get it once to not to trigger twice

		var windowHeight = mfp.wH = _window.height();

		

		var windowStyles = {};

		if( mfp.fixedContentPos ) {

            if(mfp._hasScrollBar(windowHeight)){

                var s = mfp._getScrollbarSize();

                if(s) {

                    if ($('html').hasClass('browser-rtl'))

                        windowStyles.marginLeft = s;

                    else

                        windowStyles.marginRight = s;

                }

            }

        }

		if(mfp.fixedContentPos) {

			if(!mfp.isIE7) {

				windowStyles.overflow = 'hidden';

			} else {

				// ie7 double-scroll bug

				$('body, html').css('overflow', 'hidden');

			}

		}

		

		

		var classesToadd = mfp.st.mainClass;

		if(mfp.isIE7) {

			classesToadd += ' mfp-ie7';

		}

		if(classesToadd) {

			mfp._addClassToMFP( classesToadd );

		}

		// add content

		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c

		$('html').css(windowStyles);

		

		// add everything to DOM

		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element

		mfp._lastFocusedEl = document.activeElement;

		

		// Wait for next cycle to allow CSS transition

		setTimeout(function() {

			

			if(mfp.content) {

				mfp._addClassToMFP(READY_CLASS);

				mfp._setFocus();

			} else {

				// if content is not defined (not loaded e.t.c) we add class only for BG

				mfp.bgOverlay.addClass(READY_CLASS);

			}

			

			// Trap the focus in popup

			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;

		mfp.updateSize(windowHeight);

		_mfpTrigger(OPEN_EVENT);

		return data;

	},

	/**

	 * Closes the popup

	 */

	close: function() {

		if(!mfp.isOpen) return;

		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;

		// for CSS3 animation

		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {

			mfp._addClassToMFP(REMOVING_CLASS);

			setTimeout(function() {

				mfp._close();

			}, mfp.st.removalDelay);

		} else {

			mfp._close();

		}

	},

	/**

	 * Helper for close() function

	 */

	_close: function() {

		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();

		mfp.wrap.detach();

		mfp.container.empty();

		if(mfp.st.mainClass) {

			classesToRemove += mfp.st.mainClass + ' ';

		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {

            var windowStyles;

            if ($('html').hasClass('browser-rtl'))

                windowStyles = {marginLeft: ''};

            else

                windowStyles = {marginRight: ''};

			if(mfp.isIE7) {

				$('body, html').css('overflow', '');

			} else {

				windowStyles.overflow = '';

			}

			$('html').css(windowStyles);

		}

		

		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);

		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed

		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');

		mfp.bgOverlay.attr('class', 'mfp-bg');

		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element

		if(mfp.st.showCloseBtn &&

		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {

			if(mfp.currTemplate.closeBtn)

				mfp.currTemplate.closeBtn.detach();

		}

		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {

			$(mfp._lastFocusedEl).focus(); // put tab focus back

		}

		mfp.currItem = null;	

		mfp.content = null;

		mfp.currTemplate = null;

		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);

	},

	

	updateSize: function(winHeight) {

		if(mfp.isIOS) {

			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2

			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;

			var height = window.innerHeight * zoomLevel;

			mfp.wrap.css('height', height);

			mfp.wH = height;

		} else {

			mfp.wH = winHeight || _window.height();

		}

		// Fixes #84: popup incorrectly positioned with position:relative on body

		if(!mfp.fixedContentPos) {

			mfp.wrap.css('height', mfp.wH);

		}

		_mfpTrigger('Resize');

	},

	/**

	 * Set content of popup based on current index

	 */

	updateItemHTML: function() {

		var item = mfp.items[mfp.index];

		// Detach and perform modifications

		mfp.contentContainer.detach();

		if(mfp.content)

			mfp.content.detach();

		if(!item.parsed) {

			item = mfp.parseEl( mfp.index );

		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);

		// BeforeChange event works like so:

		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {

			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup

			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {

				mfp.currTemplate[type] = $(markup);

			} else {

				// if there is no markup found we just define that template is parsed

				mfp.currTemplate[type] = true;

			}

		}

		if(_prevContentType && _prevContentType !== item.type) {

			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');

		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);

		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);

		_prevContentType = item.type;

		// Append container back after its content changed

		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');

	},

	/**

	 * Set HTML content of popup

	 */

	appendContent: function(newContent, type) {

		mfp.content = newContent;

		if(newContent) {

			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&

				mfp.currTemplate[type] === true) {

				// if there is no markup, we just append close button element inside

				if(!mfp.content.find('.mfp-close').length) {

					mfp.content.append(_getCloseBtn());

				}

			} else {

				mfp.content = newContent;

			}

		} else {

			mfp.content = '';

		}

		_mfpTrigger(BEFORE_APPEND_EVENT);

		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);

	},

	/**

	 * Creates Magnific Popup data object based on given data

	 * @param  {int} index Index of item to parse

	 */

	parseEl: function(index) {

		var item = mfp.items[index],

			type;

		if(item.tagName) {

			item = { el: $(item) };

		} else {

			type = item.type;

			item = { data: item, src: item.src };

		}

		if(item.el) {

			var types = mfp.types;

			// check for 'mfp-TYPE' class

			for(var i = 0; i < types.length; i++) {

				if( item.el.hasClass('mfp-'+types[i]) ) {

					type = types[i];

					break;

				}

			}

			item.src = item.el.attr('data-mfp-src');

			if(!item.src) {

				item.src = item.el.attr('href');

			}

		}

		item.type = type || mfp.st.type || 'inline';

		item.index = index;

		item.parsed = true;

		mfp.items[index] = item;

		_mfpTrigger('ElementParse', item);

		return mfp.items[index];

	},

	/**

	 * Initializes single popup or a group of popups

	 */

	addGroup: function(el, options) {

		var eHandler = function(e) {

			e.mfpEl = this;

			mfp._openClick(e, el, options);

		};

		if(!options) {

			options = {};

		}

		var eName = 'click.magnificPopup';

		options.mainEl = el;

		if(options.items) {

			options.isObj = true;

			el.off(eName).on(eName, eHandler);

		} else {

			options.isObj = false;

			if(options.delegate) {

				el.off(eName).on(eName, options.delegate , eHandler);

			} else {

				options.items = el;

				el.off(eName).on(eName, eHandler);

			}

		}

	},

	_openClick: function(e, el, options) {

		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;

		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {

			return;

		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {

			if($.isFunction(disableOn)) {

				if( !disableOn.call(mfp) ) {

					return true;

				}

			} else { // else it's number

				if( _window.width() < disableOn ) {

					return true;

				}

			}

		}

		if(e.type) {

			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened

			if(mfp.isOpen) {

				e.stopPropagation();

			}

		}

		options.el = $(e.mfpEl);

		if(options.delegate) {

			options.items = el.find(options.delegate);

		}

		mfp.open(options);

	},

	/**

	 * Updates text on preloader

	 */

	updateStatus: function(status, text) {

		if(mfp.preloader) {

			if(_prevStatus !== status) {

				mfp.container.removeClass('mfp-s-'+_prevStatus);

			}

			if(!text && status === 'loading') {

				text = mfp.st.tLoading;

			}

			var data = {

				status: status,

				text: text

			};

			// allows to modify status

			_mfpTrigger('UpdateStatus', data);

			status = data.status;

			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {

				e.stopImmediatePropagation();

			});

			mfp.container.addClass('mfp-s-'+status);

			_prevStatus = status;

		}

	},

	/*

		"Private" helpers that aren't private at all

	 */

	// Check to close popup or not

	// "target" is an element that was clicked

	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {

			return;

		}

		var closeOnContent = mfp.st.closeOnContentClick;

		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {

			return true;

		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.

			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {

				return true;

			}

			// if click is outside the content

			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {

				if(closeOnBg) {

					// last check, if the clicked element is in DOM, (in case it's removed onclick)

					if( $.contains(document, target) ) {

						return true;

					}

				}

			} else if(closeOnContent) {

				return true;

			}

		}

		return false;

	},

	_addClassToMFP: function(cName) {

		mfp.bgOverlay.addClass(cName);

		mfp.wrap.addClass(cName);

	},

	_removeClassFromMFP: function(cName) {

		this.bgOverlay.removeClass(cName);

		mfp.wrap.removeClass(cName);

	},

	_hasScrollBar: function(winHeight) {

		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );

	},

	_setFocus: function() {

		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();

	},

	_onFocusIn: function(e) {

		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {

			mfp._setFocus();

			return false;

		}

	},

	_parseMarkup: function(template, values, item) {

		var arr;

		if(item.data) {

			values = $.extend(item.data, values);

		}

		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {

			if(value === undefined || value === false) {

				return true;

			}

			arr = key.split('_');

			if(arr.length > 1) {

				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {

					var attr = arr[1];

					if(attr === 'replaceWith') {

						if(el[0] !== value[0]) {

							el.replaceWith(value);

						}

					} else if(attr === 'img') {

						if(el.is('img')) {

							el.attr('src', value);

						} else {

							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );

						}

					} else {

						el.attr(arr[1], value);

					}

				}

			} else {

				template.find(EVENT_NS + '-'+key).html(value);

			}

		});

	},

	_getScrollbarSize: function() {

		// thx David

		if(mfp.scrollbarSize === undefined) {

			var scrollDiv = document.createElement("div");

			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';

			document.body.appendChild(scrollDiv);

			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;

			document.body.removeChild(scrollDiv);

		}

		return mfp.scrollbarSize;

	}

}; /* MagnificPopup core prototype end */



/**

 * Public static functions

 */

$.magnificPopup = {

	instance: null,

	proto: MagnificPopup.prototype,

	modules: [],

	open: function(options, index) {

		_checkInstance();

		if(!options) {

			options = {};

		} else {

			options = $.extend(true, {}, options);

		}

		options.isObj = true;

		options.index = index || 0;

		return this.instance.open(options);

	},

	close: function() {

		return $.magnificPopup.instance && $.magnificPopup.instance.close();

	},

	registerModule: function(name, module) {

		if(module.options) {

			$.magnificPopup.defaults[name] = module.options;

		}

		$.extend(this.proto, module.proto);

		this.modules.push(name);

	},

	defaults: {

		// Info about options is in docs:

		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}

};



$.fn.magnificPopup = function(options) {

	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string

	if (typeof options === "string" ) {

		if(options === 'open') {

			var items,

				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,

				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {

				items = itemOpts.items[index];

			} else {

				items = jqEl;

				if(itemOpts.delegate) {

					items = items.find(itemOpts.delegate);

				}

				items = items.eq( index );

			}

			mfp._openClick({mfpEl:items}, jqEl, itemOpts);

		} else {

			if(mfp.isOpen)

				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));

		}

	} else {

		// clone options obj

		options = $.extend(true, {}, options);

		/*

		 * As Zepto doesn't support .data() method for objects

		 * and it works only in normal browsers

		 * we assign "options" object directly to the DOM element. FTW!

		 */

		if(_isJQ) {

			jqEl.data('magnificPopup', options);

		} else {

			jqEl[0].magnificPopup = options;

		}

		mfp.addGroup(jqEl, options);

	}

	return jqEl;

};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',

	_hiddenClass,

	_inlinePlaceholder,

	_lastInlineElement,

	_putInlineElementsBack = function() {

		if(_lastInlineElement) {

			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();

			_lastInlineElement = null;

		}

	};

$.magnificPopup.registerModule(INLINE_NS, {

	options: {

		hiddenClass: 'hide', // will be appended with `mfp-` prefix

		markup: '',

		tNotFound: 'Content not found'

	},

	proto: {

		initInline: function() {

			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {

				_putInlineElementsBack();

			});

		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {

				var inlineSt = mfp.st.inline,

					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed

					var parent = el[0].parentNode;

					if(parent && parent.tagName) {

						if(!_inlinePlaceholder) {

							_hiddenClass = inlineSt.hiddenClass;

							_inlinePlaceholder = _getEl(_hiddenClass);

							_hiddenClass = 'mfp-'+_hiddenClass;

						}

						// replace target inline element with placeholder

						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);

					}

					mfp.updateStatus('ready');

				} else {

					mfp.updateStatus('error', inlineSt.tNotFound);

					el = $('<div>');

				}

				item.inlineElement = el;

				return el;

			}

			mfp.updateStatus('ready');

			mfp._parseMarkup(template, {}, item);

			return template;

		}

	}

});

/*>>inline*/

/*>>ajax*/

var AJAX_NS = 'ajax',

	_ajaxCur,

	_removeAjaxCursor = function() {

		if(_ajaxCur) {

			$(document.body).removeClass(_ajaxCur);

		}

	},

	_destroyAjaxRequest = function() {

		_removeAjaxCursor();

		if(mfp.req) {

			mfp.req.abort();

		}

	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {

		settings: null,

		cursor: 'mfp-ajax-cur',

		tError: '<a href="%url%">The content</a> could not be loaded.'

	},

	proto: {

		initAjax: function() {

			mfp.types.push(AJAX_NS);

			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);

			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);

		},

		getAjax: function(item) {

			if(_ajaxCur) {

				$(document.body).addClass(_ajaxCur);

			}

			mfp.updateStatus('loading');

			var opts = $.extend({

				url: item.src,

				success: function(data, textStatus, jqXHR) {

					var temp = {

						data:data,

						xhr:jqXHR

					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {

						mfp.wrap.addClass(READY_CLASS);

					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');

				},

				error: function() {

					_removeAjaxCursor();

					item.finished = item.loadError = true;

					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));

				}

			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';

		}

	}

});

/*>>ajax*/

/*>>image*/

var _imgInterval,

	_getTitle = function(item) {

		if(item.data && item.data.title !== undefined)

			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {

			if($.isFunction(src)) {

				return src.call(mfp, item);

			} else if(item.el) {

				return item.el.attr(src) || '';

			}

		}

		return '';

	};

$.magnificPopup.registerModule('image', {

	options: {

		markup: '<div class="mfp-figure">'+

					'<div class="mfp-close"></div>'+

					'<figure>'+

						'<div class="mfp-img"></div>'+

						'<figcaption>'+

							'<div class="mfp-bottom-bar">'+

								'<div class="mfp-title"></div>'+

								'<div class="mfp-counter"></div>'+

							'</div>'+

						'</figcaption>'+

					'</figure>'+

				'</div>',

		cursor: 'mfp-zoom-out-cur',

		titleSrc: 'title',

		verticalFit: true,

		tError: '<a href="%url%">The image</a> could not be loaded.'

	},

	proto: {

		initImage: function() {

			var imgSt = mfp.st.image,

				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {

				if(mfp.currItem.type === 'image' && imgSt.cursor) {

					$(document.body).addClass(imgSt.cursor);

				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {

				if(imgSt.cursor) {

					$(document.body).removeClass(imgSt.cursor);

				}

				_window.off('resize' + EVENT_NS);

			});

			_mfpOn('Resize'+ns, mfp.resizeImage);

			if(mfp.isLowIE) {

				_mfpOn('AfterChange', mfp.resizeImage);

			}

		},

		resizeImage: function() {

			var item = mfp.currItem;

			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {

				var decr = 0;

				// fix box-sizing in ie7/8

				if(mfp.isLowIE) {

					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);

				}

				item.img.css('max-height', mfp.wH-decr);

			}

		},

		_onImageHasSize: function(item) {

			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {

					clearInterval(_imgInterval);

				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {

					if(mfp.content)

						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;

				}

			}

		},

		/**

		 * Function that loops until the image has size to display elements that rely on it asap

		 */

		findImageSize: function(item) {

			var counter = 0,

				img = item.img[0],

				mfpSetInterval = function(delay) {

					if(_imgInterval) {

						clearInterval(_imgInterval);

					}

					// decelerating interval that checks for size of an image

					_imgInterval = setInterval(function() {

						if(img.naturalWidth > 0) {

							mfp._onImageHasSize(item);

							return;

						}

						if(counter > 200) {

							clearInterval(_imgInterval);

						}

						counter++;

						if(counter === 3) {

							mfpSetInterval(10);

						} else if(counter === 40) {

							mfpSetInterval(50);

						} else if(counter === 100) {

							mfpSetInterval(500);

						}

					}, delay);

				};

			mfpSetInterval(1);

		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler

				onLoadComplete = function() {

					if(item) {

						if (item.img[0].complete) {

							item.img.off('.mfploader');

							if(item === mfp.currItem){

								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');

							}

							item.hasSize = true;

							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}

						else {

							// if image complete check fails 200 times (20 sec), we assume that there was an error.

							guard++;

							if(guard < 200) {

								setTimeout(onLoadComplete,100);

							} else {

								onLoadError();

							}

						}

					}

				},

				// image error handler

				onLoadError = function() {

					if(item) {

						item.img.off('.mfploader');

						if(item === mfp.currItem){

							mfp._onImageHasSize(item);

							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );

						}

						item.hasSize = true;

						item.loaded = true;

						item.loadError = true;

					}

				},

				imgSt = mfp.st.image;

			var el = template.find('.mfp-img');

			if(el.length) {

				var img = document.createElement('img');

				img.className = 'mfp-img';

				if(item.el && item.el.find('img').length) {

					img.alt = item.el.find('img').attr('alt');

				}

				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);

				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG

				// TODO: find a way to avoid such cloning

				if(el.is('img')) {

					item.img = item.img.clone();

				}

				img = item.img[0];

				if(img.naturalWidth > 0) {

					item.hasSize = true;

				} else if(!img.width) {

					item.hasSize = false;

				}

			}

			mfp._parseMarkup(template, {

				title: _getTitle(item),

				img_replaceWith: item.img

			}, item);

			mfp.resizeImage();

			if(item.hasSize) {

				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {

					template.addClass('mfp-loading');

					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );

				} else {

					template.removeClass('mfp-loading');

					mfp.updateStatus('ready');

				}

				return template;

			}

			mfp.updateStatus('loading');

			item.loading = true;

			if(!item.hasSize) {

				item.imgHidden = true;

				template.addClass('mfp-loading');

				mfp.findImageSize(item);

			}

			return template;

		}

	}

});

/*>>image*/

/*>>zoom*/

var hasMozTransform,

	getHasMozTransform = function() {

		if(hasMozTransform === undefined) {

			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;

		}

		return hasMozTransform;

	};

$.magnificPopup.registerModule('zoom', {

	options: {

		enabled: false,

		easing: 'ease-in-out',

		duration: 300,

		opener: function(element) {

			return element.is('img') ? element : element.find('img');

		}

	},

	proto: {

		initZoom: function() {

			var zoomSt = mfp.st.zoom,

				ns = '.zoom',

				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {

				return;

			}

			var duration = zoomSt.duration,

				getElToAnimate = function(image) {

					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),

						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,

						cssObj = {

							position: 'fixed',

							zIndex: 9999,

							left: 0,

							top: 0,

							'-webkit-backface-visibility': 'hidden'

						},

						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);

					return newImg;

				},

				showMainContent = function() {

					mfp.content.css('visibility', 'visible');

				},

				openTimeout,

				animatedImg;

			_mfpOn('BuildControls'+ns, function() {

				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {

						showMainContent();

						return;

					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {

						animatedImg.css( mfp._getOffset( true ) );

						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {

								animatedImg.remove();

								image = animatedImg = null;

								_mfpTrigger('ZoomAnimationEnded');

							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation

					// Lots of timeouts...

				}

			});

			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {

				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {

						image = mfp._getItemToZoom();

						if(!image) {

							return;

						}

						animatedImg = getElToAnimate(image);

					}

					animatedImg.css( mfp._getOffset(true) );

					mfp.wrap.append(animatedImg);

					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {

						animatedImg.css( mfp._getOffset() );

					}, 16);

				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {

				if(mfp._allowZoom()) {

					showMainContent();

					if(animatedImg) {

						animatedImg.remove();

					}

					image = null;

				}

			});

		},

		_allowZoom: function() {

			return mfp.currItem.type === 'image';

		},

		_getItemToZoom: function() {

			if(mfp.currItem.hasSize) {

				return mfp.currItem.img;

			} else {

				return false;

			}

		},

		// Get element postion relative to viewport

		_getOffset: function(isLarge) {

			var el;

			if(isLarge) {

				el = mfp.currItem.img;

			} else {

				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);

			}

			var offset = el.offset();

			var paddingTop = parseInt(el.css('padding-top'),10);

			var paddingBottom = parseInt(el.css('padding-bottom'),10);

			offset.top -= ( $(window).scrollTop() - paddingTop );

			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */

			var obj = {

				width: el.width(),

				// fix Zepto height+padding issue

				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop

			};

			// I hate to do this, but there is no another option

			if( getHasMozTransform() ) {

				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';

			} else {

				obj.left = offset.left;

				obj.top = offset.top;

			}

			return obj;

		}

	}

});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',

	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {

		if(mfp.currTemplate[IFRAME_NS]) {

			var el = mfp.currTemplate[IFRAME_NS].find('iframe');

			if(el.length) {

				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug

				if(!isShowing) {

					el[0].src = _emptyPage;

				}

				// IE8 black screen bug fix

				if(mfp.isIE8) {

					el.css('display', isShowing ? 'block' : 'none');

				}

			}

		}

	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {

		markup: '<div class="mfp-iframe-scaler">'+

					'<div class="mfp-close"></div>'+

					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+

				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default

		patterns: {

			youtube: {

				index: 'youtube.com',

				id: 'v=',

				src: '//www.youtube.com/embed/%id%?autoplay=1'

			},

			vimeo: {

				index: 'vimeo.com/',

				id: '/',

				src: '//player.vimeo.com/video/%id%?autoplay=1'

			},

			gmaps: {

				index: '//maps.google.',

				src: '%id%&output=embed'

			}

		}

	},

	proto: {

		initIframe: function() {

			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {

				if(prevType !== newType) {

					if(prevType === IFRAME_NS) {

						_fixIframeBugs(); // iframe if removed

					} else if(newType === IFRAME_NS) {

						_fixIframeBugs(true); // iframe is showing

					}

				}// else {

					// iframe source is switched, don't do anything

				//}

			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {

				_fixIframeBugs();

			});

		},

		getIframe: function(item, template) {

			var embedSrc = item.src;

			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {

				if(embedSrc.indexOf( this.index ) > -1) {

					if(this.id) {

						if(typeof this.id === 'string') {

							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);

						} else {

							embedSrc = this.id.call( this, embedSrc );

						}

					}

					embedSrc = this.src.replace('%id%', embedSrc );

					return false; // break;

				}

			});

			var dataObj = {};

			if(iframeSt.srcAction) {

				dataObj[iframeSt.srcAction] = embedSrc;

			}

			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;

		}

	}

});



/*>>iframe*/

/*>>gallery*/

/**

 * Get looped index depending on number of slides

 */

var _getLoopedId = function(index) {

		var numSlides = mfp.items.length;

		if(index > numSlides - 1) {

			return index - numSlides;

		} else  if(index < 0) {

			return numSlides + index;

		}

		return index;

	},

	_replaceCurrTotal = function(text, curr, total) {

		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);

	};

$.magnificPopup.registerModule('gallery', {

	options: {

		enabled: false,

		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',

		preload: [0,2],

		navigateByImgClick: true,

		arrows: true,

		tPrev: 'Previous (Left arrow key)',

		tNext: 'Next (Right arrow key)',

		tCounter: '%curr% of %total%'

	},

	proto: {

		initGallery: function() {

			var gSt = mfp.st.gallery,

				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {

					mfp.wrap.on('click'+ns, '.mfp-img', function() {

						if(mfp.items.length > 1) {

							mfp.next();

							return false;

						}

					});

				}

				_document.on('keydown'+ns, function(e) {

					if (e.keyCode === 37) {

						mfp.prev();

					} else if (e.keyCode === 39) {

						mfp.next();

					}

				});

			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {

				if(data.text) {

					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);

				}

			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {

				var l = mfp.items.length;

				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';

			});

			_mfpOn('BuildControls' + ns, function() {

				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {

					var markup = gSt.arrowMarkup,

						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),

						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {

						mfp.prev();

					});

					arrowRight.click(function() {

						mfp.next();

					});

					mfp.container.append(arrowLeft.add(arrowRight));

				}

			});

			_mfpOn(CHANGE_EVENT+ns, function() {

				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {

					mfp.preloadNearbyImages();

					mfp._preloadTimeout = null;

				}, 16);

			});

			_mfpOn(CLOSE_EVENT+ns, function() {

				_document.off(ns);

				mfp.wrap.off('click'+ns);

				mfp.arrowRight = mfp.arrowLeft = null;

			});

		},

		next: function() {

			mfp.direction = true;

			mfp.index = _getLoopedId(mfp.index + 1);

			mfp.updateItemHTML();

		},

		prev: function() {

			mfp.direction = false;

			mfp.index = _getLoopedId(mfp.index - 1);

			mfp.updateItemHTML();

		},

		goTo: function(newIndex) {

			mfp.direction = (newIndex >= mfp.index);

			mfp.index = newIndex;

			mfp.updateItemHTML();

		},

		preloadNearbyImages: function() {

			var p = mfp.st.gallery.preload,

				preloadBefore = Math.min(p[0], mfp.items.length),

				preloadAfter = Math.min(p[1], mfp.items.length),

				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {

				mfp._preloadItem(mfp.index+i);

			}

			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {

				mfp._preloadItem(mfp.index-i);

			}

		},

		_preloadItem: function(index) {

			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {

				return;

			}

			var item = mfp.items[index];

			if(!item.parsed) {

				item = mfp.parseEl( index );

			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {

				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {

					item.hasSize = true;

				}).on('error.mfploader', function() {

					item.hasSize = true;

					item.loadError = true;

					_mfpTrigger('LazyLoadError', item);

				}).attr('src', item.src);

			}

			item.preloaded = true;

		}

	}

});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {

	options: {

		replaceSrc: function(item) {

			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });

		},

		ratio: 1 // Function or number.  Set to 1 to disable.

	},

	proto: {

		initRetina: function() {

			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,

					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {

					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {

						item.img.css({

							'max-width': item.img[0].naturalWidth / ratio,

							'width': '100%'

						});

					});

					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {

						item.src = st.replaceSrc(item, ratio);

					});

				}

			}

		}

	}

});

/*>>retina*/

 _checkInstance(); }));

/*!
 *         ,/
 *       ,'/
 *     ,' /
 *   ,'  /_____,
 * .'____    ,'
 *      /  ,'
 *     / ,'
 *    /,'
 *   /'
 *
 * Selectric ϟ v1.9.6 (Mar 24 2016) - http://lcdsantos.github.io/jQuery-Selectric/
 *
 * Copyright (c) 2016 Leonardo Santos; MIT License
 *
 */

(function(factory) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    'use strict';

    var pluginName = 'selectric',
        classList = 'Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll Group GroupLabel',
        bindSufix = '.sl',
        defaults = {
            onChange: function(elm) { $(elm).change(); },
            maxHeight: 300,
            keySearchTimeout: 500,
            arrowButtonMarkup: '<b class="button">&#x25be;</b>',
            disableOnMobile: true,
            openOnHover: false,
            hoverIntentTimeout: 500,
            expandToItemText: false,
            responsive: false,
            preventWindowScroll: true,
            inheritOriginalWidth: false,
            allowWrap: true,
            customClass: {
                prefix: pluginName,
                camelCase: false
            },
            optionsItemBuilder: '{text}', // function(itemData, element, index)
            labelBuilder: '{text}' // function(currItem)
        },
        hooks = {
            add: function(callbackName, hookName, fn) {
                if ( !this[callbackName] )
                    this[callbackName] = {};

                this[callbackName][hookName] = fn;
            },
            remove: function(callbackName, hookName) {
                delete this[callbackName][hookName];
            }
        },
        _utils = {
            // Replace diacritics
            replaceDiacritics: function(s) {
                // /[\340-\346]/g, // a
                // /[\350-\353]/g, // e
                // /[\354-\357]/g, // i
                // /[\362-\370]/g, // o
                // /[\371-\374]/g, // u
                // /[\361]/g,      // n
                // /[\347]/g,      // c
                // /[\377]/g       // y
                var d = '40-46 50-53 54-57 62-70 71-74 61 47 77'.replace(/\d+/g, '\\3$&').split(' '),
                    k = d.length;

                while (k--)
                    s = s.toLowerCase().replace(RegExp('[' + d[k] + ']', 'g'), 'aeiouncy'.charAt(k));

                return s;
            },
            // https://gist.github.com/atesgoral/984375
            format: function(f) {var a=arguments;return(""+f).replace(/{(\d+|(\w+))}/g,function(s,i,p) {return p&&a[1]?a[1][p]:a[i]})},
            nextEnabledItem: function(selectItems, selected) {
                while ( selectItems[ selected = (selected + 1) % selectItems.length ].disabled ) {}
                return selected;
            },
            previousEnabledItem: function(selectItems, selected) {
                while ( selectItems[ selected = (selected > 0 ? selected : selectItems.length) - 1 ].disabled ) {}
                return selected;
            },
            toDash: function(str) {
                return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            },
            triggerCallback: function(fn, scope) {
                var elm = scope.element,
                    func = scope.options['on' + fn];

                if ( $.isFunction(func) )
                    func.call(elm, elm, scope);

                if ( hooks[fn] ) {
                    $.each(hooks[fn], function() {
                        this.call(elm, elm, scope);
                    });
                }

                $(elm).trigger(pluginName + '-' + _utils.toDash(fn), scope);
            }
        },
        $doc = $(document),
        $win = $(window),
        Selectric = function(element, opts) {
            var _this = this,
                $original = $(element),
                $input, $items, $itemsScroll, $wrapper, $label, $outerWrapper, $li,
                isOpen = false,
                isEnabled = false,
                selected,
                currValue,
                itemsHeight,
                itemsInnerHeight,
                finalWidth,
                optionsLength,
                eventTriggers,
                isMobile = /android|ip(hone|od|ad)/i.test(navigator.userAgent),
                tabindex = $original.prop('tabindex'),
                labelBuilder;

            function _init(opts) {
                _this.options = $.extend(true, {}, defaults, _this.options, opts);
                _this.classes = {};
                _this.element = element;

                _utils.triggerCallback('BeforeInit', _this);

                // Disable on mobile browsers
                if ( _this.options.disableOnMobile && isMobile ) {
                    _this.disableOnMobile = true;
                    return;
                }

                // Preserve data
                _destroy(true);

                // Generate classNames for elements
                var customClass   = _this.options.customClass,
                    postfixes     = classList.split(' '),
                    originalWidth = $original.width();

                $.each(postfixes, function(i, currClass) {
                    var c = customClass.prefix + currClass;
                    _this.classes[currClass.toLowerCase()] = customClass.camelCase ? c : _utils.toDash(c);
                });

                $input        = $('<input/>', { 'class': _this.classes.input, 'readonly': isMobile });
                $items        = $('<div/>',   { 'class': _this.classes.items, 'tabindex': -1 });
                $itemsScroll  = $('<div/>',   { 'class': _this.classes.scroll });
                $wrapper      = $('<div/>',   { 'class': customClass.prefix, 'html': _this.options.arrowButtonMarkup });
                $label        = $('<p class="label"/>');
                $outerWrapper = $original.wrap('<div>').parent().append($wrapper.prepend($label), $items, $input);

                eventTriggers = {
                    open    : _open,
                    close   : _close,
                    destroy : _destroy,
                    refresh : _refresh,
                    init    : _init
                };

                $original.on(eventTriggers).wrap('<div class="' + _this.classes.hideselect + '">');
                $.extend(_this, eventTriggers);

                labelBuilder = _this.options.labelBuilder;

                if ( _this.options.inheritOriginalWidth && originalWidth > 0 )
                    $outerWrapper.width(originalWidth);

                _populate();
            }

            // Generate options markup and event binds
            function _populate() {
                _this.items = [];

                var $options = $original.children(),
                    _$li = '<ul>',
                    $justOptions = $original.find('option'),
                    selectedIndex = $justOptions.index($justOptions.filter(':selected')),
                    currIndex = 0;

                currValue = (selected = ~selectedIndex ? selectedIndex : 0);

                if ( optionsLength = $options.length ) {
                    // Build options markup
                    $options.each(function() {
                        var $elm = $(this);

                        if ( $elm.is('optgroup') ) {
                            var groupDisabled = $elm.prop('disabled'),
                                $children = $elm.children();

                            _$li += _utils.format('<ul class="{1}"><li class="{2}">{3}</li>',
                                $.trim([_this.classes.group, groupDisabled ? 'disabled' : '', $elm.prop('class')].join(' ')),
                                _this.classes.grouplabel,
                                $elm.prop('label')
                            );

                            if ( groupDisabled ) {
                                $children.prop('disabled', true);
                            }

                            $children.each(buildOption);

                            _$li += '</ul>';
                        } else {
                            buildOption.call($elm);
                        }

                        function buildOption() {
                            var $elm = $(this),
                                optionText = $elm.html(),
                                selectDisabled = $elm.prop('disabled'),
                                itemBuilder = _this.options.optionsItemBuilder;

                            _this.items[currIndex] = {
                                element  : $elm,
                                value    : $elm.val(),
                                text     : optionText,
                                slug     : _utils.replaceDiacritics(optionText),
                                disabled : selectDisabled
                            };

                            _$li += _utils.format('<li data-index="{1}" class="{2}">{3}</li>',
                                currIndex,
                                $.trim([currIndex == currValue ? 'selected' : '', currIndex == optionsLength - 1 ? 'last' : '', selectDisabled ? 'disabled' : ''].join(' ')),
                                $.isFunction(itemBuilder) ? itemBuilder(_this.items[currIndex], $elm, currIndex) : _utils.format(itemBuilder, _this.items[currIndex])
                            );

                            currIndex++;
                        }
                    });

                    $items.append( $itemsScroll.html(_$li + '</ul>') );

                    $label.html(
                        $.isFunction(labelBuilder) ? labelBuilder(_this.items[currValue]) : _utils.format(labelBuilder, _this.items[currValue])
                    )
                }

                $wrapper.add($original).add($outerWrapper).add($input).off(bindSufix);

                $outerWrapper.prop('class', [
                    _this.classes.wrapper,
                    $original.prop('class').replace(/\S+/g, _this.options.customClass.prefix + '-$&'),
                    _this.options.responsive ? _this.classes.responsive : ''
                ].join(' '));

                if ( !$original.prop('disabled') ) {
                    isEnabled = true;

                    // Not disabled, so... Removing disabled class and bind hover
                    $outerWrapper.removeClass(_this.classes.disabled).on('mouseenter' + bindSufix + ' mouseleave' + bindSufix, function(e) {
                        $(this).toggleClass(_this.classes.hover);

                        // Delay close effect when openOnHover is true
                        if ( _this.options.openOnHover ) {
                            clearTimeout(_this.closeTimer);
                            e.type == 'mouseleave' ? _this.closeTimer = setTimeout(_close, _this.options.hoverIntentTimeout) : _open();
                        }
                    });

                    // Toggle open/close
                    $wrapper.on('click' + bindSufix, function(e) {
                        isOpen ? _close() : _open(e);
                    });

                    $input
                        .prop({
                            tabindex: tabindex,
                            disabled: false
                        })
                        .on('keypress' + bindSufix, _handleSystemKeys)
                        .on('keydown' + bindSufix, function(e) {
                            _handleSystemKeys(e);

                            // Clear search
                            clearTimeout(_this.resetStr);
                            _this.resetStr = setTimeout(function() {
                                $input.val('');
                            }, _this.options.keySearchTimeout);

                            var key = e.keyCode || e.which;

                            // If it's a directional key
                            // 37 => Left
                            // 38 => Up
                            // 39 => Right
                            // 40 => Down
                            if ( key > 36 && key < 41 ) {
                                if ( !_this.options.allowWrap ) {
                                    if ( (key < 39 && selected == 0) || (key > 38 && (selected + 1) == _this.items.length) ) {
                                        return;
                                    }
                                }

                                _select(_utils[(key < 39 ? 'previous' : 'next') + 'EnabledItem'](_this.items, selected));
                            }
                        })
                        .on('focusin' + bindSufix, function(e) {
                            isOpen || _open(e);
                        })
                        .on('oninput' in $input[0] ? 'input' : 'keyup', function() {
                            if ( $input.val().length ) {
                                // Search in select options
                                $.each(_this.items, function(i, elm) {
                                    if ( RegExp('^' + $input.val(), 'i').test(elm.slug) && !elm.disabled ) {
                                        _select(i);
                                        return false;
                                    }
                                });
                            }
                        });

                    $original.prop('tabindex', false);

                    // Remove styles from items box
                    // Fix incorrect height when refreshed is triggered with fewer options
                    $li = $('li', $items.removeAttr('style')).on({
                        // Prevent <input> blur on Chrome
                        mousedown: function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                        },
                        click: function() {
                            // The second parameter is to close the box after click
                            _select($(this).data('index'), true);

                            // Chrome doesn't close options box if select is wrapped with a label
                            // We need to 'return false' to avoid that
                            return false;
                        }
                    }).filter('[data-index]');
                } else {
                    $outerWrapper.addClass(_this.classes.disabled);
                    $input.prop('disabled', true);
                }

                _utils.triggerCallback('Init', _this);
            }

            function _refresh() {
                _utils.triggerCallback('Refresh', _this);
                _populate();
            }

            // Behavior when system keys is pressed
            function _handleSystemKeys(e) {
                var key = e.keyCode || e.which;

                if ( key == 13 ) {
                    e.preventDefault();
                }

                // Tab / Enter / ESC
                if ( /^(9|13|27)$/.test(key) ) {
                    e.stopPropagation();
                    _select(selected, true);
                }
            }

            // Set options box width/height
            function _calculateOptionsDimensions() {
                // Calculate options box height
                // Set a temporary class on the hidden parent of the element
                var hiddenChildren = $items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow),
                    maxHeight = _this.options.maxHeight,
                    itemsWidth = $items.outerWidth(),
                    wrapperWidth = $wrapper.outerWidth() - (itemsWidth - $items.width());

                // Set the dimensions, minimum is wrapper width, expand for long items if option is true
                if ( !_this.options.expandToItemText || wrapperWidth > itemsWidth )
                    finalWidth = wrapperWidth;
                else {
                    // Make sure the scrollbar width is included
                    $items.css('overflow', 'scroll');

                    // Set a really long width for $outerWrapper
                    $outerWrapper.width(9e4);
                    finalWidth = $items.width();
                    // Set scroll bar to auto
                    $items.css('overflow', '');
                    $outerWrapper.width('');
                }

                $items.width(finalWidth).height() > maxHeight && $items.height(maxHeight);

                // Remove the temporary class
                hiddenChildren.removeClass(_this.classes.tempshow);
            }

            // Open the select options box
            function _open(e) {
                _utils.triggerCallback('BeforeOpen', _this);

                if ( e ) {
                    e.preventDefault();
                    e.stopPropagation();
                }

                if ( isEnabled ) {
                    _calculateOptionsDimensions();

                    // Find any other opened instances of select and close it
                    $('.' + _this.classes.hideselect, '.' + _this.classes.open).children()[pluginName]('close');

                    isOpen = true;
                    itemsHeight = $items.outerHeight();
                    itemsInnerHeight = $items.height();

                    // Toggle options box visibility
                    $outerWrapper.addClass(_this.classes.open);

                    // Give dummy input focus
                    $input.val('');
                    e && e.type !== 'focusin' && $input.focus();

                    $doc.on('click' + bindSufix, _close).on('scroll' + bindSufix, _isInViewport);
                    _isInViewport();

                    // Prevent window scroll when using mouse wheel inside items box
                    if ( _this.options.preventWindowScroll ) {
                        $doc.on('mousewheel' + bindSufix + ' DOMMouseScroll' + bindSufix, '.' + _this.classes.scroll, function(e) {
                            var orgEvent = e.originalEvent,
                                scrollTop = $(this).scrollTop(),
                                deltaY = 0;

                            if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1; }
                            if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;  }
                            if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY; }
                            if ( 'deltaY'      in orgEvent ) { deltaY = orgEvent.deltaY * -1; }

                            if ( scrollTop == (this.scrollHeight - itemsInnerHeight) && deltaY < 0 || scrollTop == 0 && deltaY > 0 ) {
                                e.preventDefault();
                            }
                        });
                    }

                    _detectItemVisibility(selected);

                    _utils.triggerCallback('Open', _this);
                }
            }

            // Detect is the options box is inside the window
            function _isInViewport() {
                var scrollTop = $win.scrollTop();
                var winHeight = $win.height();
                var uiPosX = $outerWrapper.offset().top;
                var uiHeight = $outerWrapper.outerHeight();

                var fitsDown = (uiPosX + uiHeight + itemsHeight) <= (scrollTop + winHeight);
                var fitsAbove = (uiPosX - itemsHeight) > scrollTop;

                // If it does not fit below, only render it
                // above it fit's there.
                // It's acceptable that the user needs to
                // scroll the viewport to see the cut off UI
                var renderAbove = !fitsDown && fitsAbove;

                $outerWrapper.toggleClass(_this.classes.above, renderAbove);
            }

            // Close the select options box
            function _close() {
                _utils.triggerCallback('BeforeClose', _this);

                if ( currValue != selected ) {
                    _utils.triggerCallback('BeforeChange', _this);

                    var text = _this.items[selected].text;

                    // Apply changed value to original select
                    $original
                        .prop('selectedIndex', currValue = selected)
                        .data('value', text);

                    // Change label text
                    $label.html(
                        $.isFunction(labelBuilder) ? labelBuilder(_this.items[selected]) : _utils.format(labelBuilder, _this.items[selected])
                    )

                    _utils.triggerCallback('Change', _this);
                }

                // Remove custom events on document
                $doc.off(bindSufix);

                // Remove visible class to hide options box
                $outerWrapper.removeClass(_this.classes.open);

                isOpen = false;

                _utils.triggerCallback('Close', _this);
            }

            // Select option
            function _select(index, close) {
                // Parameter index is required
                if ( index == undefined ) {
                    return;
                }

                // If element is disabled, can't select it
                if ( !_this.items[index].disabled ) {
                    // If 'close' is false (default), the options box won't close after
                    // each selected item, this is necessary for keyboard navigation
                    $li
                        .removeClass('selected')
                        .eq(selected = index)
                        .addClass('selected');

                    _detectItemVisibility(index);
                    close && _close();
                }
            }

            // Detect if currently selected option is visible and scroll the options box to show it
            function _detectItemVisibility(index) {
                var liHeight = $li.eq(index).outerHeight(),
                    liTop = $li[index].offsetTop,
                    itemsScrollTop = $itemsScroll.scrollTop(),
                    scrollT = liTop + liHeight * 2;

                $itemsScroll.scrollTop(
                    scrollT > itemsScrollTop + itemsHeight ? scrollT - itemsHeight :
                        liTop - liHeight < itemsScrollTop ? liTop - liHeight :
                            itemsScrollTop
                );
            }

            // Unbind and remove
            function _destroy(preserveData) {
                if ( isEnabled ) {
                    $items.add($wrapper).add($input).remove();
                    !preserveData && $original.removeData(pluginName).removeData('value');
                    $original.prop('tabindex', tabindex).off(bindSufix).off(eventTriggers).unwrap().unwrap();
                    isEnabled = false;
                }
            }

            _init(opts);
        };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(args) {
        return this.each(function() {
            var data = $.data(this, pluginName);

            if ( data && !data.disableOnMobile )
                (''+args === args && data[args]) ? data[args]() : data.init(args);
            else
                $.data(this, pluginName, new Selectric(this, args));
        });
    };

    $.fn[pluginName].hooks = hooks;

}));

/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : false,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);

/*
 *  Vide - v0.5.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(root.jQuery);
  }
})(this, function($) {

  'use strict';

  /**
   * Name of the plugin
   * @private
   * @const
   * @type {String}
   */
  var PLUGIN_NAME = 'vide';

  /**
   * Default settings
   * @private
   * @const
   * @type {Object}
   */
  var DEFAULTS = {
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    position: '50% 50%',
    posterType: 'detect',
    resizing: true,
    bgColor: 'transparent',
    className: ''
  };

  /**
   * Not implemented error message
   * @private
   * @const
   * @type {String}
   */
  var NOT_IMPLEMENTED_MSG = 'Not implemented';

  /**
   * Parse a string with options
   * @private
   * @param {String} str
   * @returns {Object|String}
   */
  function parseOptions(str) {
    var obj = {};
    var delimiterIndex;
    var option;
    var prop;
    var val;
    var arr;
    var len;
    var i;

    // Remove spaces around delimiters and split
    arr = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',').split(',');

    // Parse a string
    for (i = 0, len = arr.length; i < len; i++) {
      option = arr[i];

      // Ignore urls and a string without colon delimiters
      if (
        option.search(/^(http|https|ftp):\/\//) !== -1 ||
        option.search(':') === -1
      ) {
        break;
      }

      delimiterIndex = option.indexOf(':');
      prop = option.substring(0, delimiterIndex);
      val = option.substring(delimiterIndex + 1);

      // If val is an empty string, make it undefined
      if (!val) {
        val = undefined;
      }

      // Convert a string value if it is like a boolean
      if (typeof val === 'string') {
        val = val === 'true' || (val === 'false' ? false : val);
      }

      // Convert a string value if it is like a number
      if (typeof val === 'string') {
        val = !isNaN(val) ? +val : val;
      }

      obj[prop] = val;
    }

    // If nothing is parsed
    if (prop == null && val == null) {
      return str;
    }

    return obj;
  }

  /**
   * Parse a position option
   * @private
   * @param {String} str
   * @returns {Object}
   */
  function parsePosition(str) {
    str = '' + str;

    // Default value is a center
    var args = str.split(/\s+/);
    var x = '50%';
    var y = '50%';
    var len;
    var arg;
    var i;

    for (i = 0, len = args.length; i < len; i++) {
      arg = args[i];

      // Convert values
      if (arg === 'left') {
        x = '0%';
      } else if (arg === 'right') {
        x = '100%';
      } else if (arg === 'top') {
        y = '0%';
      } else if (arg === 'bottom') {
        y = '100%';
      } else if (arg === 'center') {
        if (i === 0) {
          x = '50%';
        } else {
          y = '50%';
        }
      } else {
        if (i === 0) {
          x = arg;
        } else {
          y = arg;
        }
      }
    }

    return { x: x, y: y };
  }

  /**
   * Search a poster
   * @private
   * @param {String} path
   * @param {Function} callback
   */
  function findPoster(path, callback) {
    var onLoad = function() {
      callback(this.src);
    };

    $('<img src="' + path + '.gif">').on('load', onLoad);
    $('<img src="' + path + '.jpg">').on('load', onLoad);
    $('<img src="' + path + '.jpeg">').on('load', onLoad);
    $('<img src="' + path + '.png">').on('load', onLoad);
  }

  /**
   * Vide constructor
   * @param {HTMLElement} element
   * @param {Object|String} path
   * @param {Object|String} options
   * @constructor
   */
  function Vide(element, path, options) {
    this.$element = $(element);

    // Parse path
    if (typeof path === 'string') {
      path = parseOptions(path);
    }

    // Parse options
    if (!options) {
      options = {};
    } else if (typeof options === 'string') {
      options = parseOptions(options);
    }

    // Remove an extension
    if (typeof path === 'string') {
      path = path.replace(/\.\w*$/, '');
    } else if (typeof path === 'object') {
      for (var i in path) {
        if (path.hasOwnProperty(i)) {
          path[i] = path[i].replace(/\.\w*$/, '');
        }
      }
    }

    this.settings = $.extend({}, DEFAULTS, options);
    this.path = path;

    // https://github.com/VodkaBears/Vide/issues/110
    try {
      this.init();
    } catch (e) {
      if (e.message !== NOT_IMPLEMENTED_MSG) {
        throw e;
      }
    }
  }

  /**
   * Initialization
   * @public
   */
  Vide.prototype.init = function() {
    var vide = this;
    var path = vide.path;
    var poster = path;
    var sources = '';
    var $element = vide.$element;
    var settings = vide.settings;
    var position = parsePosition(settings.position);
    var posterType = settings.posterType;
    var $video;
    var $wrapper;

    // Set styles of a video wrapper
    $wrapper = vide.$wrapper = $('<div>')
      .addClass(settings.className)
      .css({
        position: 'absolute',
        'z-index': -1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover',
        'background-color': settings.bgColor,
        'background-repeat': 'no-repeat',
        'background-position': position.x + ' ' + position.y
      });

    // Get a poster path
    if (typeof path === 'object') {
      if (path.poster) {
        poster = path.poster;
      } else {
        if (path.mp4) {
          poster = path.mp4;
        } else if (path.webm) {
          poster = path.webm;
        } else if (path.ogv) {
          poster = path.ogv;
        }
      }
    }

    // Set a video poster
    if (posterType === 'detect') {
      findPoster(poster, function(url) {
        $wrapper.css('background-image', 'url(' + url + ')');
      });
    } else if (posterType !== 'none') {
      $wrapper.css('background-image', 'url(' + poster + '.' + posterType + ')');
    }

    // If a parent element has a static position, make it relative
    if ($element.css('position') === 'static') {
      $element.css('position', 'relative');
    }

    $element.prepend($wrapper);

    if (typeof path === 'object') {
      if (path.mp4) {
        sources += '<source src="' + path.mp4 + '.mp4" type="video/mp4">';
      }

      if (path.webm) {
        sources += '<source src="' + path.webm + '.webm" type="video/webm">';
      }

      if (path.ogv) {
        sources += '<source src="' + path.ogv + '.ogv" type="video/ogg">';
      }

      $video = vide.$video = $('<video>' + sources + '</video>');
    } else {
      $video = vide.$video = $('<video>' +
        '<source src="' + path + '.mp4" type="video/mp4">' +
        '<source src="' + path + '.webm" type="video/webm">' +
        '<source src="' + path + '.ogv" type="video/ogg">' +
        '</video>');
    }

    // https://github.com/VodkaBears/Vide/issues/110
    try {
      $video

        // Set video properties
        .prop({
          autoplay: settings.autoplay,
          loop: settings.loop,
          volume: settings.volume,
          muted: settings.muted,
          defaultMuted: settings.muted,
          playbackRate: settings.playbackRate,
          defaultPlaybackRate: settings.playbackRate
        });
    } catch (e) {
      throw new Error(NOT_IMPLEMENTED_MSG);
    }

    // Video alignment
    $video.css({
      margin: 'auto',
      position: 'absolute',
      'z-index': -1,
      top: position.y,
      left: position.x,
      '-webkit-transform': 'translate(-' + position.x + ', -' + position.y + ')',
      '-ms-transform': 'translate(-' + position.x + ', -' + position.y + ')',
      '-moz-transform': 'translate(-' + position.x + ', -' + position.y + ')',
      transform: 'translate(-' + position.x + ', -' + position.y + ')',

      // Disable visibility, while loading
      visibility: 'hidden',
      opacity: 0
    })

    // Resize a video, when it's loaded
    .one('canplaythrough.' + PLUGIN_NAME, function() {
      vide.resize();
    })

    // Make it visible, when it's already playing
    .one('playing.' + PLUGIN_NAME, function() {
      $video.css({
        visibility: 'visible',
        opacity: 1
      });
      $wrapper.css('background-image', 'none');
    });

    // Resize event is available only for 'window'
    // Use another code solutions to detect DOM elements resizing
    $element.on('resize.' + PLUGIN_NAME, function() {
      if (settings.resizing) {
        vide.resize();
      }
    });

    // Append a video
    $wrapper.append($video);
  };

  /**
   * Get a video element
   * @public
   * @returns {HTMLVideoElement}
   */
  Vide.prototype.getVideoObject = function() {
    return this.$video[0];
  };

  /**
   * Resize a video background
   * @public
   */
  Vide.prototype.resize = function() {
    if (!this.$video) {
      return;
    }

    var $wrapper = this.$wrapper;
    var $video = this.$video;
    var video = $video[0];

    // Get a native video size
    var videoHeight = video.videoHeight;
    var videoWidth = video.videoWidth;

    // Get a wrapper size
    var wrapperHeight = $wrapper.height();
    var wrapperWidth = $wrapper.width();

    if (wrapperWidth / videoWidth > wrapperHeight / videoHeight) {
      $video.css({

        // +2 pixels to prevent an empty space after transformation
        width: wrapperWidth + 2,
        height: 'auto'
      });
    } else {
      $video.css({
        width: 'auto',

        // +2 pixels to prevent an empty space after transformation
        height: wrapperHeight + 2
      });
    }
  };

  /**
   * Destroy a video background
   * @public
   */
  Vide.prototype.destroy = function() {
    delete $[PLUGIN_NAME].lookup[this.index];
    this.$video && this.$video.off(PLUGIN_NAME);
    this.$element.off(PLUGIN_NAME).removeData(PLUGIN_NAME);
    this.$wrapper.remove();
  };

  /**
   * Special plugin object for instances.
   * @public
   * @type {Object}
   */
  $[PLUGIN_NAME] = {
    lookup: []
  };

  /**
   * Plugin constructor
   * @param {Object|String} path
   * @param {Object|String} options
   * @returns {JQuery}
   * @constructor
   */
  $.fn[PLUGIN_NAME] = function(path, options) {
    var instance;

    this.each(function() {
      instance = $.data(this, PLUGIN_NAME);

      // Destroy the plugin instance if exists
      instance && instance.destroy();

      // Create the plugin instance
      instance = new Vide(this, path, options);
      instance.index = $[PLUGIN_NAME].lookup.push(instance) - 1;
      $.data(this, PLUGIN_NAME, instance);
    });

    return this;
  };

  $(document).ready(function() {
    var $window = $(window);

    // Window resize event listener
    $window.on('resize.' + PLUGIN_NAME, function() {
      for (var len = $[PLUGIN_NAME].lookup.length, i = 0, instance; i < len; i++) {
        instance = $[PLUGIN_NAME].lookup[i];

        if (instance && instance.settings.resizing) {
          instance.resize();
        }
      }
    });

    // https://github.com/VodkaBears/Vide/issues/68
    $window.on('unload.' + PLUGIN_NAME, function() {
      return false;
    });

    // Auto initialization
    // Add 'data-vide-bg' attribute with a path to the video without extension
    // Also you can pass options throw the 'data-vide-options' attribute
    // 'data-vide-options' must be like 'muted: false, volume: 0.5'
    $(document).find('[data-' + PLUGIN_NAME + '-bg]').each(function(i, element) {
      var $element = $(element);
      var options = $element.data(PLUGIN_NAME + '-options');
      var path = $element.data(PLUGIN_NAME + '-bg');

      $element[PLUGIN_NAME](path, options);
    });
  });

});
if (typeof countUp == "undefined") {
  /*
      countUp.js
      by @inorganik
      v 1.1.0
  */
  function countUp(target, startVal, endVal, decimals, duration, options) {
      // default options
      this.options = options || {
          useEasing : true, // toggle easing
          useGrouping : true, // 1,000,000 vs 1000000
          separator : ',', // character to use as a separator
          decimal : '.' // character to use as a decimal
      }
      // make sure requestAnimationFrame and cancelAnimationFrame are defined
      // polyfill for browsers without native support
      // by Opera engineer Erik Möller
      var lastTime = 0;
      var vendors = ['webkit', 'moz', 'ms'];
      for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
          window.cancelAnimationFrame =
            window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
      }
      if (!window.requestAnimationFrame) {
          window.requestAnimationFrame = function(callback, element) {
              var currTime = new Date().getTime();
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
              lastTime = currTime + timeToCall;
              return id;
          }
      }
      if (!window.cancelAnimationFrame) {
          window.cancelAnimationFrame = function(id) {
              clearTimeout(id);
          }
      }
      var self = this;
      this.d = (typeof target === 'string') ? document.getElementById(target) : target;
      this.startVal = Number(startVal);
      this.endVal = Number(endVal);
      this.countDown = (this.startVal > this.endVal) ? true : false;
      this.startTime = null;
      this.timestamp = null;
      this.remaining = null;
      this.frameVal = this.startVal;
      this.rAF = null;
      this.decimals = Math.max(0, decimals || 0);
      this.dec = Math.pow(10, this.decimals);
      this.duration = duration * 1000 || 2000;
      // Robert Penner's easeOutExpo
      this.easeOutExpo = function(t, b, c, d) {
          return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
      }
      this.count = function(timestamp) {
          if (self.startTime === null) self.startTime = timestamp;
          self.timestamp = timestamp;
          var progress = timestamp - self.startTime;
          self.remaining = self.duration - progress;
          // to ease or not to ease
          if (self.options.useEasing) {
              if (self.countDown) {
                  var i = self.easeOutExpo(progress, 0, self.startVal - self.endVal, self.duration);
                  self.frameVal = self.startVal - i;
              } else {
                  self.frameVal = self.easeOutExpo(progress, self.startVal, self.endVal - self.startVal, self.duration);
              }
          } else {
              if (self.countDown) {
                  var i = (self.startVal - self.endVal) * (progress / self.duration);
                  self.frameVal = self.startVal - i;
              } else {
                  self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
              }
          }
          // decimal
          self.frameVal = Math.round(self.frameVal*self.dec)/self.dec;
          // don't go past endVal since progress can exceed duration in the last frame
          if (self.countDown) {
              self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal;
          } else {
              self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal;
          }
          // format and print value
          self.d.innerHTML = self.formatNumber(self.frameVal.toFixed(self.decimals));
          // whether to continue
          if (progress < self.duration) {
              self.rAF = requestAnimationFrame(self.count);
          } else {
              if (self.callback != null) self.callback();
          }
      }  
      this.start = function(callback) {
          self.callback = callback;
          // make sure values are valid
          if (!isNaN(self.endVal) && !isNaN(self.startVal)) {
              self.rAF = requestAnimationFrame(self.count);
          } else {
              console.log('countUp error: startVal or endVal is not a number');
              self.d.innerHTML = '--';
          }
          return false;
      }
      this.stop = function() {
          cancelAnimationFrame(self.rAF);
      }
      this.reset = function() {
          self.startTime = null;
          cancelAnimationFrame(self.rAF);
          self.d.innerHTML = self.formatNumber(self.startVal.toFixed(self.decimals));
      }
      this.resume = function() {
          self.startTime = null;
          self.duration = self.remaining;
          self.startVal = self.frameVal;
          requestAnimationFrame(self.count);
      }
      this.formatNumber = function(nStr) {
          nStr += '';
          var x, x1, x2, rgx;
          x = nStr.split('.');
          x1 = x[0];
          x2 = x.length > 1 ? self.options.decimal + x[1] : '';
          rgx = /(\d+)(\d{3})/;
          if (self.options.useGrouping) {
              while (rgx.test(x1)) {
                  x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
              }
          }
          return x1 + x2;
      }
      // format startVal on initialization
      self.d.innerHTML = self.formatNumber(self.startVal.toFixed(self.decimals));
  }
}

(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a)};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);
/* http://keith-wood.name/countdown.html
   Countdown for jQuery v2.0.0.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. 
   Please attribute the author if you use it. */
(function($) { // Hide scope, no $ conflict
  var pluginName = 'porto_countdown';
  var Y = 0; // Years
  var O = 1; // Months
  var W = 2; // Weeks
  var D = 3; // Days
  var H = 4; // Hours
  var M = 5; // Minutes
  var S = 6; // Seconds
  $.JQPlugin.createPlugin({
    /** The name of the plugin. */
    name: pluginName,
    defaultOptions: {
      until: null,
      since: null,
      timezone: null,
      serverSync: null,
      format: 'dHMS',
      layout: '',
      compact: false,
      padZeroes: false,
      significant: 0,
      description: '',
      expiryUrl: '',
      expiryText: '',
      alwaysExpire: false,
      onExpiry: null,
      onTick: null,
      tickInterval: 1
    },
    regionalOptions: { // Available regional settings, indexed by language/country code
      '': { // Default regional settings - English/US
    labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
    labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
        compactLabels: ['y', 'm', 'w', 'd'],
        whichLabels: null,
        digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        timeSeparator: ':',
        isRTL: false
      }
    },
    /** Names of getter methods - those that can't be chained. */
    _getters: ['getTimes'],
    /* Class name for the right-to-left marker. */
    _rtlClass: pluginName + '-rtl',
    /* Class name for the countdown section marker. */
    _sectionClass: pluginName + '-section',
    /* Class name for the period amount marker. */
    _amountClass: pluginName + '-amount',
    /* Class name for the period name marker. */
    _periodClass: pluginName + '-period',
    /* Class name for the countdown row marker. */
    _rowClass: pluginName + '-row',
    /* Class name for the holding countdown marker. */
    _holdingClass: pluginName + '-holding',
    /* Class name for the showing countdown marker. */
    _showClass: pluginName + '-show',
    /* Class name for the description marker. */
    _descrClass: pluginName + '-descr',
    /* List of currently active countdown elements. */
    _timerElems: [],
    /** Additional setup for the countdown.
      Apply default localisations.
      Create the timer. */
    _init: function() {
      var self = this;
      this._super();
  this._serverSyncs = [];
  var now = (typeof Date.now == 'function' ? Date.now :
    function() { return new Date().getTime(); });
  var perfAvail = (window.performance && typeof window.performance.now == 'function');
  // Shared timer for all countdowns
  function timerCallBack(timestamp) {
    var drawStart = (timestamp < 1e12 ? // New HTML5 high resolution timer
      (perfAvail ? (performance.now() + performance.timing.navigationStart) : now()) :
      // Integer milliseconds since unix epoch
      timestamp || now());
    if (drawStart - animationStartTime >= 1000) {
          self._updateElems();
      animationStartTime = drawStart;
    }
    requestAnimationFrame(timerCallBack);
  }
  var requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
    // This is when we expect a fall-back to setInterval as it's much more fluid
  var animationStartTime = 0;
  if (!requestAnimationFrame || $.noRequestAnimationFrame) {
    $.noRequestAnimationFrame = null;
        setInterval(function() { self._updateElems(); }, 980); // Fall back to good old setInterval
  }
  else {
    animationStartTime = window.animationStartTime ||
      window.webkitAnimationStartTime || window.mozAnimationStartTime ||
      window.oAnimationStartTime || window.msAnimationStartTime || now();
    requestAnimationFrame(timerCallBack);
  }
    },
  UTCDate: function(tz, year, month, day, hours, mins, secs, ms) {
    if (typeof year == 'object' && year.constructor == Date) {
      ms = year.getMilliseconds();
      secs = year.getSeconds();
      mins = year.getMinutes();
      hours = year.getHours();
      day = year.getDate();
      month = year.getMonth();
      year = year.getFullYear();
    }
    var d = new Date();
    d.setUTCFullYear(year);
    d.setUTCDate(1);
    d.setUTCMonth(month || 0);
    d.setUTCDate(day || 1);
    d.setUTCHours(hours || 0);
    d.setUTCMinutes((mins || 0) - (Math.abs(tz) < 30 ? tz * 60 : tz));
    d.setUTCSeconds(secs || 0);
    d.setUTCMilliseconds(ms || 0);
    return d;
  },
    /** Convert a set of periods into seconds.
     Averaged for months and years.
      @param periods {number[]} The periods per year/month/week/day/hour/minute/second.
      @return {number} The corresponding number of seconds.
      @example var secs = $.countdown.periodsToSeconds(periods) */
  periodsToSeconds: function(periods) {
    return periods[0] * 31557600 + periods[1] * 2629800 + periods[2] * 604800 +
      periods[3] * 86400 + periods[4] * 3600 + periods[5] * 60 + periods[6];
  },
    _instSettings: function(elem, options) {
      return {_periods: [0, 0, 0, 0, 0, 0, 0]};
  },
    /** Add an element to the list of active ones.
      @private
      @param elem {Element} The countdown element. */
    _addElem: function(elem) {
      if (!this._hasElem(elem)) {
        this._timerElems.push(elem);
    }
  },
    /** See if an element is in the list of active ones.
      @private
      @param elem {Element} The countdown element.
      @return {boolean} True if present, false if not. */
    _hasElem: function(elem) {
      return ($.inArray(elem, this._timerElems) > -1);
  },
    /** Remove an element from the list of active ones.
      @private
      @param elem {Element} The countdown element. */
    _removeElem: function(elem) {
      this._timerElems = $.map(this._timerElems,
        function(value) { return (value == elem ? null : value); }); // delete entry
  },
    /** Update each active timer element.
      @private */
    _updateElems: function() {
      for (var i = this._timerElems.length - 1; i >= 0; i--) {
        this._updateCountdown(this._timerElems[i]);
    }
  },
    _optionsChanged: function(elem, inst, options) {
    if (options.layout) {
      options.layout = options.layout.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    }
    this._resetExtraLabels(inst.options, options);
    var timezoneChanged = (inst.options.timezone != options.timezone);
    $.extend(inst.options, options);
      this._adjustSettings(elem, inst,
      options.until != null || options.since != null || timezoneChanged);
    var now = new Date();
    if ((inst._since && inst._since < now) || (inst._until && inst._until > now)) {
        this._addElem(elem[0]);
    }
      this._updateCountdown(elem, inst);
  },
    /** Redisplay the countdown with an updated display.
      @private
      @param elem {Element|jQuery} The containing division.
      @param inst {object} The current settings for this instance. */
    _updateCountdown: function(elem, inst) {
      elem = elem.jquery ? elem : $(elem);
      inst = inst || elem.data(this.name);
    if (!inst) {
      return;
    }
      elem.html(this._generateHTML(inst)).toggleClass(this._rtlClass, inst.options.isRTL);
    if ($.isFunction(inst.options.onTick)) {
      var periods = inst._hold != 'lap' ? inst._periods :
        this._calculatePeriods(inst, inst._show, inst.options.significant, new Date());
      if (inst.options.tickInterval == 1 ||
          this.periodsToSeconds(periods) % inst.options.tickInterval == 0) {
          inst.options.onTick.apply(elem[0], [periods]);
      }
    }
    var expired = inst._hold != 'pause' &&
      (inst._since ? inst._now.getTime() < inst._since.getTime() :
      inst._now.getTime() >= inst._until.getTime());
    if (expired && !inst._expiring) {
      inst._expiring = true;
        if (this._hasElem(elem[0]) || inst.options.alwaysExpire) {
          this._removeElem(elem[0]);
        if ($.isFunction(inst.options.onExpiry)) {
            inst.options.onExpiry.apply(elem[0], []);
        }
        if (inst.options.expiryText) {
          var layout = inst.options.layout;
          inst.options.layout = inst.options.expiryText;
            this._updateCountdown(elem[0], inst);
          inst.options.layout = layout;
        }
        if (inst.options.expiryUrl) {
          window.location = inst.options.expiryUrl;
        }
      }
      inst._expiring = false;
    }
    else if (inst._hold == 'pause') {
        this._removeElem(elem[0]);
    }
  },
    /** Reset any extra labelsn and compactLabelsn entries if changing labels.
      @private
      @param base {object} The options to be updated.
      @param options {object} The new option values. */
  _resetExtraLabels: function(base, options) {
    var changingLabels = false;
    for (var n in options) {
      if (n != 'whichLabels' && n.match(/[Ll]abels/)) {
        changingLabels = true;
        break;
      }
    }
    if (changingLabels) {
      for (var n in base) { // Remove custom numbered labels
        if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {
          base[n] = null;
        }
      }
    }
  },
    /** Calculate internal settings for an instance.
      @private
      @param elem {jQuery} The containing division.
      @param inst {object} The current settings for this instance.
      @param recalc {boolean} True if until or since are set. */
    _adjustSettings: function(elem, inst, recalc) {
    var now;
    var serverOffset = 0;
    var serverEntry = null;
    for (var i = 0; i < this._serverSyncs.length; i++) {
      if (this._serverSyncs[i][0] == inst.options.serverSync) {
        serverEntry = this._serverSyncs[i][1];
        break;
      }
    }
    if (serverEntry != null) {
      serverOffset = (inst.options.serverSync ? serverEntry : 0);
      now = new Date();
    }
    else {
      var serverResult = ($.isFunction(inst.options.serverSync) ?
          inst.options.serverSync.apply(elem[0], []) : null);
      now = new Date();
      serverOffset = (serverResult ? now.getTime() - serverResult.getTime() : 0);
      this._serverSyncs.push([inst.options.serverSync, serverOffset]);
    }
    var timezone = inst.options.timezone;
    timezone = (timezone == null ? -now.getTimezoneOffset() : timezone);
    if (recalc || (!recalc && inst._until == null && inst._since == null)) {
      inst._since = inst.options.since;
      if (inst._since != null) {
        inst._since = this.UTCDate(timezone, this._determineTime(inst._since, null));
        if (inst._since && serverOffset) {
          inst._since.setMilliseconds(inst._since.getMilliseconds() + serverOffset);
        }
      }
      inst._until = this.UTCDate(timezone, this._determineTime(inst.options.until, now));
      if (serverOffset) {
        inst._until.setMilliseconds(inst._until.getMilliseconds() + serverOffset);
      }
    }
    inst._show = this._determineShow(inst);
  },
    /** Remove the countdown widget from a div.
      @param elem {jQuery} The containing division.
      @param inst {object} The current instance object. */
    _preDestroy: function(elem, inst) {
      this._removeElem(elem[0]);
      elem.empty();
  },
    /** Pause a countdown widget at the current time.
     Stop it running but remember and display the current time.
      @param elem {Element} The containing division.
      @example $(selector).countdown('pause') */
    pause: function(elem) {
      this._hold(elem, 'pause');
  },
    /** Pause a countdown widget at the current time.
     Stop the display but keep the countdown running.
      @param elem {Element} The containing division.
      @example $(selector).countdown('lap') */
    lap: function(elem) {
      this._hold(elem, 'lap');
    },
    /** Resume a paused countdown widget.
      @param elem {Element} The containing division.
      @example $(selector).countdown('resume') */
    resume: function(elem) {
      this._hold(elem, null);
    },
    /** Toggle a paused countdown widget.
      @param elem {Element} The containing division.
      @example $(selector).countdown('toggle') */
    toggle: function(elem) {
      var inst = $.data(elem, this.name) || {};
      this[!inst._hold ? 'pause' : 'resume'](elem);
    },
    /** Toggle a lapped countdown widget.
      @param elem {Element} The containing division.
      @example $(selector).countdown('toggleLap') */
    toggleLap: function(elem) {
      var inst = $.data(elem, this.name) || {};
      this[!inst._hold ? 'lap' : 'resume'](elem);
    },
    /** Pause or resume a countdown widget.
      @private
      @param elem {Element} The containing division.
      @param hold {string} The new hold setting. */
    _hold: function(elem, hold) {
      var inst = $.data(elem, this.name);
    if (inst) {
      if (inst._hold == 'pause' && !hold) {
        inst._periods = inst._savePeriods;
        var sign = (inst._since ? '-' : '+');
        inst[inst._since ? '_since' : '_until'] =
          this._determineTime(sign + inst._periods[0] + 'y' +
            sign + inst._periods[1] + 'o' + sign + inst._periods[2] + 'w' +
            sign + inst._periods[3] + 'd' + sign + inst._periods[4] + 'h' + 
            sign + inst._periods[5] + 'm' + sign + inst._periods[6] + 's');
          this._addElem(elem);
      }
      inst._hold = hold;
      inst._savePeriods = (hold == 'pause' ? inst._periods : null);
        $.data(elem, this.name, inst);
        this._updateCountdown(elem, inst);
    }
  },
    /** Return the current time periods.
      @param elem {Element} The containing division.
      @return {number[]} The current periods for the countdown.
      @example var periods = $(selector).countdown('getTimes') */
    getTimes: function(elem) {
      var inst = $.data(elem, this.name);
    return (!inst ? null : (inst._hold == 'pause' ? inst._savePeriods : (!inst._hold ? inst._periods :
      this._calculatePeriods(inst, inst._show, inst.options.significant, new Date()))));
  },
    /** A time may be specified as an exact value or a relative one.
      @private
      @param setting {string|number|Date} The date/time value as a relative or absolute value.
      @param defaultTime {Date} The date/time to use if no other is supplied.
      @return {Date} The corresponding date/time. */
  _determineTime: function(setting, defaultTime) {
      var self = this;
    var offsetNumeric = function(offset) { // e.g. +300, -2
      var time = new Date();
      time.setTime(time.getTime() + offset * 1000);
      return time;
    };
    var offsetString = function(offset) { // e.g. '+2d', '-4w', '+3h +30m'
      offset = offset.toLowerCase();
      var time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth();
      var day = time.getDate();
      var hour = time.getHours();
      var minute = time.getMinutes();
      var second = time.getSeconds();
      var pattern = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
      var matches = pattern.exec(offset);
      while (matches) {
        switch (matches[2] || 's') {
          case 's': second += parseInt(matches[1], 10); break;
          case 'm': minute += parseInt(matches[1], 10); break;
          case 'h': hour += parseInt(matches[1], 10); break;
          case 'd': day += parseInt(matches[1], 10); break;
          case 'w': day += parseInt(matches[1], 10) * 7; break;
          case 'o':
            month += parseInt(matches[1], 10); 
              day = Math.min(day, self._getDaysInMonth(year, month));
            break;
          case 'y':
            year += parseInt(matches[1], 10);
              day = Math.min(day, self._getDaysInMonth(year, month));
            break;
        }
        matches = pattern.exec(offset);
      }
      return new Date(year, month, day, hour, minute, second, 0);
    };
    var time = (setting == null ? defaultTime :
      (typeof setting == 'string' ? offsetString(setting) :
      (typeof setting == 'number' ? offsetNumeric(setting) : setting)));
    if (time) time.setMilliseconds(0);
    return time;
  },
    /** Determine the number of days in a month.
      @private
      @param year {number} The year.
      @param month {number} The month.
      @return {number} The days in that month. */
  _getDaysInMonth: function(year, month) {
    return 32 - new Date(year, month, 32).getDate();
  },
    /** Default implementation to determine which set of labels should be used for an amount.
      Use the <code>labels</code> attribute with the same numeric suffix (if it exists).
      @private
      @param num {number} The amount to be displayed.
      @return {number} The set of labels to be used for this amount. */
  _normalLabels: function(num) {
    return num;
  },
    /** Generate the HTML to display the countdown widget.
      @private
      @param inst {object} The current settings for this instance.
      @return {string} The new HTML for the countdown display. */
  _generateHTML: function(inst) {
    var self = this;
    // Determine what to show
    inst._periods = (inst._hold ? inst._periods :
      this._calculatePeriods(inst, inst._show, inst.options.significant, new Date()));
    // Show all 'asNeeded' after first non-zero value
    var shownNonZero = false;
    var showCount = 0;
    var sigCount = inst.options.significant;
    var show = $.extend({}, inst._show);
    for (var period = Y; period <= S; period++) {
      shownNonZero |= (inst._show[period] == '?' && inst._periods[period] > 0);
      show[period] = (inst._show[period] == '?' && !shownNonZero ? null : inst._show[period]);
      showCount += (show[period] ? 1 : 0);
      sigCount -= (inst._periods[period] > 0 ? 1 : 0);
    }
    var showSignificant = [false, false, false, false, false, false, false];
    for (var period = S; period >= Y; period--) { // Determine significant periods
      if (inst._show[period]) {
        if (inst._periods[period]) {
          showSignificant[period] = true;
        }
        else {
          showSignificant[period] = sigCount > 0;
          sigCount--;
        }
      }
    }
    var labels = (inst.options.compact ? inst.options.compactLabels : inst.options.labels);
    var whichLabels = inst.options.whichLabels || this._normalLabels;
    var showCompact = function(period) {
      var labelsNum = inst.options['compactLabels' + whichLabels(inst._periods[period])];
      return (show[period] ? self._translateDigits(inst, inst._periods[period]) +
        (labelsNum ? labelsNum[period] : labels[period]) + ' ' : '');
    };
    var minDigits = (inst.options.padZeroes ? 2 : 1);
    var showFull = function(period) {
      var labelsNum = inst.options['labels' + whichLabels(inst._periods[period])];
      return ((!inst.options.significant && show[period]) ||
        (inst.options.significant && showSignificant[period]) ?
          '<span class="' + self._sectionClass + '">' +
          //SID EDIT
          '<span class="porto_time-mid">' +
          '<span class="' + self._amountClass + '">' +
        self._minDigits(inst, inst._periods[period], minDigits) + '</span>' +
        '<span class="' + self._periodClass + '">' +
        (labelsNum ? labelsNum[period] : labels[period]) + '</span></span></span>' : '');
    };
    return (inst.options.layout ? this._buildLayout(inst, show, inst.options.layout,
      inst.options.compact, inst.options.significant, showSignificant) :
      ((inst.options.compact ? // Compact version
      '<span class="' + this._rowClass + ' ' + this._amountClass +
      (inst._hold ? ' ' + this._holdingClass : '') + '">' + 
      showCompact(Y) + showCompact(O) + showCompact(W) + showCompact(D) + 
      (show[H] ? this._minDigits(inst, inst._periods[H], 2) : '') +
      (show[M] ? (show[H] ? inst.options.timeSeparator : '') +
      this._minDigits(inst, inst._periods[M], 2) : '') +
      (show[S] ? (show[H] || show[M] ? inst.options.timeSeparator : '') +
      this._minDigits(inst, inst._periods[S], 2) : '') :
      // Full version
      '<span class="' + this._rowClass + ' ' + this._showClass + (inst.options.significant || showCount) +
      (inst._hold ? ' ' + this._holdingClass : '') + '">' +
      showFull(Y) + showFull(O) + showFull(W) + showFull(D) +
      showFull(H) + showFull(M) + showFull(S)) + '</span>' +
      (inst.options.description ? '<span class="' + this._rowClass + ' ' + this._descrClass + '">' +
      inst.options.description + '</span>' : '')));
  },
    /** Construct a custom layout.
      @private
      @param inst {object} The current settings for this instance.
      @param show {boolean[]} Flags indicating which periods are requested.
      @param layout {string} The customised layout.
      @param compact {boolean} True if using compact labels.
      @param significant {number} The number of periods with values to show, zero for all.
      @param showSignificant {boolean[]} Other periods to show for significance.
      @return {string} The custom HTML. */
  _buildLayout: function(inst, show, layout, compact, significant, showSignificant) {
    var labels = inst.options[compact ? 'compactLabels' : 'labels'];
    var whichLabels = inst.options.whichLabels || this._normalLabels;
    var labelFor = function(index) {
      return (inst.options[(compact ? 'compactLabels' : 'labels') +
        whichLabels(inst._periods[index])] || labels)[index];
    };
    var digit = function(value, position) {
      return inst.options.digits[Math.floor(value / position) % 10];
    };
    var subs = {desc: inst.options.description, sep: inst.options.timeSeparator,
      yl: labelFor(Y), yn: this._minDigits(inst, inst._periods[Y], 1),
      ynn: this._minDigits(inst, inst._periods[Y], 2),
      ynnn: this._minDigits(inst, inst._periods[Y], 3), y1: digit(inst._periods[Y], 1),
      y10: digit(inst._periods[Y], 10), y100: digit(inst._periods[Y], 100),
      y1000: digit(inst._periods[Y], 1000),
      ol: labelFor(O), on: this._minDigits(inst, inst._periods[O], 1),
      onn: this._minDigits(inst, inst._periods[O], 2),
      onnn: this._minDigits(inst, inst._periods[O], 3), o1: digit(inst._periods[O], 1),
      o10: digit(inst._periods[O], 10), o100: digit(inst._periods[O], 100),
      o1000: digit(inst._periods[O], 1000),
      wl: labelFor(W), wn: this._minDigits(inst, inst._periods[W], 1),
      wnn: this._minDigits(inst, inst._periods[W], 2),
      wnnn: this._minDigits(inst, inst._periods[W], 3), w1: digit(inst._periods[W], 1),
      w10: digit(inst._periods[W], 10), w100: digit(inst._periods[W], 100),
      w1000: digit(inst._periods[W], 1000),
      dl: labelFor(D), dn: this._minDigits(inst, inst._periods[D], 1),
      dnn: this._minDigits(inst, inst._periods[D], 2),
      dnnn: this._minDigits(inst, inst._periods[D], 3), d1: digit(inst._periods[D], 1),
      d10: digit(inst._periods[D], 10), d100: digit(inst._periods[D], 100),
      d1000: digit(inst._periods[D], 1000),
      hl: labelFor(H), hn: this._minDigits(inst, inst._periods[H], 1),
      hnn: this._minDigits(inst, inst._periods[H], 2),
      hnnn: this._minDigits(inst, inst._periods[H], 3), h1: digit(inst._periods[H], 1),
      h10: digit(inst._periods[H], 10), h100: digit(inst._periods[H], 100),
      h1000: digit(inst._periods[H], 1000),
      ml: labelFor(M), mn: this._minDigits(inst, inst._periods[M], 1),
      mnn: this._minDigits(inst, inst._periods[M], 2),
      mnnn: this._minDigits(inst, inst._periods[M], 3), m1: digit(inst._periods[M], 1),
      m10: digit(inst._periods[M], 10), m100: digit(inst._periods[M], 100),
      m1000: digit(inst._periods[M], 1000),
      sl: labelFor(S), sn: this._minDigits(inst, inst._periods[S], 1),
      snn: this._minDigits(inst, inst._periods[S], 2),
      snnn: this._minDigits(inst, inst._periods[S], 3), s1: digit(inst._periods[S], 1),
      s10: digit(inst._periods[S], 10), s100: digit(inst._periods[S], 100),
      s1000: digit(inst._periods[S], 1000)};
    var html = layout;
    // Replace period containers: {p<}...{p>}
    for (var i = Y; i <= S; i++) {
      var period = 'yowdhms'.charAt(i);
      var re = new RegExp('\\{' + period + '<\\}([\\s\\S]*)\\{' + period + '>\\}', 'g');
      html = html.replace(re, ((!significant && show[i]) ||
        (significant && showSignificant[i]) ? '$1' : ''));
    }
    // Replace period values: {pn}
    $.each(subs, function(n, v) {
      var re = new RegExp('\\{' + n + '\\}', 'g');
      html = html.replace(re, v);
    });
    return html;
  },
    /** Ensure a numeric value has at least n digits for display.
      @private
      @param inst {object} The current settings for this instance.
      @param value {number} The value to display.
      @param len {number} The minimum length.
      @return {string} The display text. */
  _minDigits: function(inst, value, len) {
    value = '' + value;
    if (value.length >= len) {
      return this._translateDigits(inst, value);
    }
    value = '0000000000' + value;
    return this._translateDigits(inst, value.substr(value.length - len));
  },
    /** Translate digits into other representations.
      @private
      @param inst {object} The current settings for this instance.
      @param value {string} The text to translate.
      @return {string} The translated text. */
  _translateDigits: function(inst, value) {
    return ('' + value).replace(/[0-9]/g, function(digit) {
        return inst.options.digits[digit];
      });
  },
    /** Translate the format into flags for each period.
      @private
      @param inst {object} The current settings for this instance.
      @return {string[]} Flags indicating which periods are requested (?) or
          required (!) by year, month, week, day, hour, minute, second. */
  _determineShow: function(inst) {
    var format = inst.options.format;
    var show = [];
    show[Y] = (format.match('y') ? '?' : (format.match('Y') ? '!' : null));
    show[O] = (format.match('o') ? '?' : (format.match('O') ? '!' : null));
    show[W] = (format.match('w') ? '?' : (format.match('W') ? '!' : null));
    show[D] = (format.match('d') ? '?' : (format.match('D') ? '!' : null));
    show[H] = (format.match('h') ? '?' : (format.match('H') ? '!' : null));
    show[M] = (format.match('m') ? '?' : (format.match('M') ? '!' : null));
    show[S] = (format.match('s') ? '?' : (format.match('S') ? '!' : null));
    return show;
  },
    /** Calculate the requested periods between now and the target time.
      @private
      @param inst {object} The current settings for this instance.
      @param show {string[]} Flags indicating which periods are requested/required.
      @param significant {number} The number of periods with values to show, zero for all.
      @param now {Date} The current date and time.
      @return {number[]} The current time periods (always positive)
          by year, month, week, day, hour, minute, second. */
  _calculatePeriods: function(inst, show, significant, now) {
    // Find endpoints
    inst._now = now;
    inst._now.setMilliseconds(0);
    var until = new Date(inst._now.getTime());
    if (inst._since) {
      if (now.getTime() < inst._since.getTime()) {
        inst._now = now = until;
      }
      else {
        now = inst._since;
      }
    }
    else {
      until.setTime(inst._until.getTime());
      if (now.getTime() > inst._until.getTime()) {
        inst._now = now = until;
      }
    }
    // Calculate differences by period
    var periods = [0, 0, 0, 0, 0, 0, 0];
    if (show[Y] || show[O]) {
      // Treat end of months as the same
        var lastNow = this._getDaysInMonth(now.getFullYear(), now.getMonth());
        var lastUntil = this._getDaysInMonth(until.getFullYear(), until.getMonth());
      var sameDay = (until.getDate() == now.getDate() ||
        (until.getDate() >= Math.min(lastNow, lastUntil) &&
        now.getDate() >= Math.min(lastNow, lastUntil)));
      var getSecs = function(date) {
        return (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds();
      };
      var months = Math.max(0,
        (until.getFullYear() - now.getFullYear()) * 12 + until.getMonth() - now.getMonth() +
        ((until.getDate() < now.getDate() && !sameDay) ||
        (sameDay && getSecs(until) < getSecs(now)) ? -1 : 0));
      periods[Y] = (show[Y] ? Math.floor(months / 12) : 0);
      periods[O] = (show[O] ? months - periods[Y] * 12 : 0);
      // Adjust for months difference and end of month if necessary
      now = new Date(now.getTime());
      var wasLastDay = (now.getDate() == lastNow);
        var lastDay = this._getDaysInMonth(now.getFullYear() + periods[Y],
        now.getMonth() + periods[O]);
      if (now.getDate() > lastDay) {
        now.setDate(lastDay);
      }
      now.setFullYear(now.getFullYear() + periods[Y]);
      now.setMonth(now.getMonth() + periods[O]);
      if (wasLastDay) {
        now.setDate(lastDay);
      }
    }
    var diff = Math.floor((until.getTime() - now.getTime()) / 1000);
    var extractPeriod = function(period, numSecs) {
      periods[period] = (show[period] ? Math.floor(diff / numSecs) : 0);
      diff -= periods[period] * numSecs;
    };
    extractPeriod(W, 604800);
    extractPeriod(D, 86400);
    extractPeriod(H, 3600);
    extractPeriod(M, 60);
    extractPeriod(S, 1);
    if (diff > 0 && !inst._since) { // Round up if left overs
      var multiplier = [1, 12, 4.3482, 7, 24, 60, 60];
      var lastShown = S;
      var max = 1;
      for (var period = S; period >= Y; period--) {
        if (show[period]) {
          if (periods[lastShown] >= max) {
            periods[lastShown] = 0;
            diff = 1;
          }
          if (diff > 0) {
            periods[period]++;
            diff = 0;
            lastShown = period;
            max = 1;
          }
        }
        max *= multiplier[period];
      }
    }
    if (significant) { // Zero out insignificant periods
      for (var period = Y; period <= S; period++) {
        if (significant && periods[period]) {
          significant--;
        }
        else if (!significant) {
          periods[period] = 0;
        }
      }
    }
    return periods;
  }
  });
})(jQuery);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
