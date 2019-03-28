(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-oss-rules-oss-rules-module"],{

/***/ "./node_modules/ngx-page-scroll-core/fesm5/ngx-page-scroll-core.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-page-scroll-core/fesm5/ngx-page-scroll-core.js ***!
  \*************************************************************************/
/*! exports provided: NgxPageScrollCoreModule, NGXPS_CONFIG, defaultPageScrollConfig, PageScrollService, PageScrollInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPageScrollCoreModule", function() { return NgxPageScrollCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXPS_CONFIG", function() { return NGXPS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPageScrollConfig", function() { return defaultPageScrollConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageScrollService", function() { return PageScrollService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageScrollInstance", function() { return PageScrollInstance; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Represents a scrolling action
 */
var  /**
 * Represents a scrolling action
 */
PageScrollInstance = /** @class */ (function () {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {@link PageScrollService#create}
     */
    function PageScrollInstance(pageScrollOptions) {
        /**
         * These properties will be set/manipulated if the scroll animation starts
         */
        /* The initial value of the scrollTop or scrollLeft position when the animation starts */
        this.startScrollPosition = 0;
        /* Whether an interrupt listener is attached to the body or not */
        this.interruptListenersAttached = false;
        /* References to the timer instance that is used to perform the scroll animation to be
           able to clear it on animation end*/
        this.timer = null;
        if (!pageScrollOptions.scrollViews || pageScrollOptions.scrollViews.length === 0) {
            pageScrollOptions.scrollViews = [
                pageScrollOptions.document.documentElement,
                pageScrollOptions.document.body,
                pageScrollOptions.document.body.parentNode,
            ];
            this.isInlineScrolling = false;
        }
        else {
            this.isInlineScrolling = true;
        }
        this.pageScrollOptions = pageScrollOptions;
    }
    /**
     * @private
     * @param {?} pageScrollOptions
     * @param {?} scrollTargetElement
     * @return {?}
     */
    PageScrollInstance.getScrollingTargetPosition = /**
     * @private
     * @param {?} pageScrollOptions
     * @param {?} scrollTargetElement
     * @return {?}
     */
    function (pageScrollOptions, scrollTargetElement) {
        /** @type {?} */
        var body = pageScrollOptions.document.body;
        /** @type {?} */
        var docEl = pageScrollOptions.document.documentElement;
        /** @type {?} */
        var windowPageYOffset = pageScrollOptions.document.defaultView &&
            pageScrollOptions.document.defaultView.pageYOffset || undefined;
        /** @type {?} */
        var windowPageXOffset = pageScrollOptions.document.defaultView &&
            pageScrollOptions.document.defaultView.pageXOffset || undefined;
        /** @type {?} */
        var scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        /** @type {?} */
        var scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        /** @type {?} */
        var clientTop = docEl.clientTop || body.clientTop || 0;
        /** @type {?} */
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (scrollTargetElement === undefined || scrollTargetElement === null) {
            // No element found, so return the current position to not cause any change in scroll position
            return { top: scrollTop, left: scrollLeft };
        }
        /** @type {?} */
        var box = scrollTargetElement.getBoundingClientRect();
        /** @type {?} */
        var top = box.top + scrollTop - clientTop;
        /** @type {?} */
        var left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };
    /**
     * @private
     * @param {?} pageScrollOptions
     * @param {?} scrollTargetElement
     * @return {?}
     */
    PageScrollInstance.getInlineScrollingTargetPosition = /**
     * @private
     * @param {?} pageScrollOptions
     * @param {?} scrollTargetElement
     * @return {?}
     */
    function (pageScrollOptions, scrollTargetElement) {
        /** @type {?} */
        var position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
        if (pageScrollOptions.advancedInlineOffsetCalculation && pageScrollOptions.scrollViews.length === 1) {
            /** @type {?} */
            var accumulatedParentsPos = { top: 0, left: 0 };
            // not named window to make sure we're not getting the global window variable by accident
            /** @type {?} */
            var theWindow = scrollTargetElement.ownerDocument.defaultView;
            /** @type {?} */
            var parentFound = false;
            // Start parent is the immediate parent
            /** @type {?} */
            var parent_1 = scrollTargetElement.parentElement;
            // Iterate upwards all parents
            while (!parentFound && parent_1 !== undefined && parent_1 !== null) {
                if (theWindow.getComputedStyle(parent_1).getPropertyValue('position') === 'relative') {
                    accumulatedParentsPos.top += parent_1.offsetTop;
                    accumulatedParentsPos.left += parent_1.offsetLeft;
                }
                // Next iteration
                parent_1 = parent_1.parentElement;
                parentFound = parent_1 === pageScrollOptions.scrollViews[0];
            }
            if (parentFound) {
                // Only use the results if we found the parent, otherwise we accumulated too much anyway
                position.top += accumulatedParentsPos.top;
                position.left += accumulatedParentsPos.left;
            }
        }
        return position;
    };
    /**
     * @param {?} scrollingView
     * @return {?}
     */
    PageScrollInstance.prototype.getScrollPropertyValue = /**
     * @param {?} scrollingView
     * @return {?}
     */
    function (scrollingView) {
        if (!this.pageScrollOptions.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    };
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     */
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    PageScrollInstance.prototype.extractScrollTargetPosition = /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollTargetElement = this.getScrollTargetElement();
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            // Scroll target not found
            return { top: NaN, left: NaN };
        }
        if (this.isInlineScrolling) {
            return PageScrollInstance.getInlineScrollingTargetPosition(this.pageScrollOptions, scrollTargetElement);
        }
        return PageScrollInstance.getScrollingTargetPosition(this.pageScrollOptions, scrollTargetElement);
    };
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     */
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     * @return {?}
     */
    PageScrollInstance.prototype.getCurrentOffset = /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     * @return {?}
     */
    function () {
        return this.pageScrollOptions.scrollOffset;
    };
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollViews to the provided value
     * @return true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    PageScrollInstance.prototype.setScrollPosition = /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    function (position) {
        var _this = this;
        // Set the new scrollTop/scrollLeft to all scrollViews elements
        return this.pageScrollOptions.scrollViews.reduce((/**
         * @param {?} oneAlreadyWorked
         * @param {?} scrollingView
         * @return {?}
         */
        function (oneAlreadyWorked, scrollingView) {
            /** @type {?} */
            var startScrollPropertyValue = _this.getScrollPropertyValue(scrollingView);
            if (scrollingView && startScrollPropertyValue !== undefined && startScrollPropertyValue !== null) {
                /** @type {?} */
                var scrollDistance = Math.abs(startScrollPropertyValue - position);
                // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"
                /** @type {?} */
                var isSmallMovement = scrollDistance < _this.pageScrollOptions._minScrollDistance;
                if (!_this.pageScrollOptions.verticalScrolling) {
                    scrollingView.scrollLeft = position;
                }
                else {
                    scrollingView.scrollTop = position;
                }
                // Return true if setting the new scrollTop/scrollLeft value worked
                // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
                // desired scrollTop/scrollLeft than before (it might not be exactly the value we
                // set due to dpi or rounding irregularities)
                if (isSmallMovement || scrollDistance > Math.abs(_this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }), false);
    };
    /**
     * Trigger firing a animation finish event
     * @param value Whether the animation finished at the target (true) or got interrupted (false)
     */
    /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    PageScrollInstance.prototype.fireEvent = /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    function (value) {
        if (this.pageScrollOptions.scrollFinishListener) {
            this.pageScrollOptions.scrollFinishListener.emit(value);
        }
    };
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     */
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     * @param {?} interruptReporter
     * @return {?}
     */
    PageScrollInstance.prototype.attachInterruptListeners = /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     * @param {?} interruptReporter
     * @return {?}
     */
    function (interruptReporter) {
        var _this = this;
        if (this.interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this.interruptListener = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            interruptReporter.report(event, _this);
        });
        this.pageScrollOptions.interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.pageScrollOptions.document.body.addEventListener(event, _this.interruptListener); }));
        this.interruptListenersAttached = true;
    };
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     */
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    PageScrollInstance.prototype.detachInterruptListeners = /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    function () {
        var _this = this;
        this.pageScrollOptions.interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.pageScrollOptions.document.body.removeEventListener(event, _this.interruptListener); }));
        this.interruptListenersAttached = false;
    };
    /**
     * @private
     * @return {?}
     */
    PageScrollInstance.prototype.getScrollTargetElement = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.pageScrollOptions.scrollTarget === 'string') {
            /** @type {?} */
            var targetSelector = (/** @type {?} */ (this.pageScrollOptions.scrollTarget));
            if (targetSelector.match(/^#[^\s]+$/g) !== null) {
                // It's an id selector and a valid id, as it does not contain any white space characters
                return this.pageScrollOptions.document.getElementById(targetSelector.substr(1));
            }
            return (/** @type {?} */ (this.pageScrollOptions.document.querySelector(targetSelector)));
        }
        return (/** @type {?} */ (this.pageScrollOptions.scrollTarget));
    };
    return PageScrollInstance;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGXPS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ngxps_config');
/** @type {?} */
var defaultPageScrollConfig = {
    _interval: 10,
    _minScrollDistance: 2,
    _logLevel: 1,
    namespace: 'default',
    verticalScrolling: true,
    duration: 1250,
    scrollOffset: 0,
    advancedInlineOffsetCalculation: false,
    interruptEvents: ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove'],
    interruptKeys: [' ', 'Escape', 'Tab', 'Enter', 'PageUp', 'PageDown', 'Home', 'End', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown'],
    interruptible: true,
    easingLogic: (/**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        // Linear easing
        return c * t / d + b;
    }),
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageScrollService = /** @class */ (function () {
    function PageScrollService(customConfig) {
        var _this = this;
        this.runningInstances = [];
        this.onInterrupted = {
            report: (/**
             * @param {?} event
             * @param {?} pageScrollInstance
             * @return {?}
             */
            function (event, pageScrollInstance) {
                if (!pageScrollInstance.pageScrollOptions.interruptible) {
                    // Non-interruptible anyway, so do not stop anything
                    return;
                }
                /** @type {?} */
                var shouldStop = true;
                if (event.type === 'keyup') {
                    // Only stop if specific keys have been pressed, for all others don't stop anything
                    if (_this.config.interruptKeys.indexOf(((/** @type {?} */ (event))).key) === -1) {
                        // The pressed key is not in the list of interrupting keys
                        shouldStop = false;
                    }
                }
                else if (event.type === 'mousedown') {
                    // For mousedown events we only stop the scroll animation of the mouse has
                    // been clicked inside the scrolling container
                    if (!pageScrollInstance.pageScrollOptions.scrollViews.some((/**
                     * @param {?} scrollingView
                     * @return {?}
                     */
                    function (scrollingView) { return scrollingView.contains((/** @type {?} */ (event.target))); }))) {
                        // Mouse clicked an element which is not inside any of the the scrolling containers
                        shouldStop = false;
                    }
                }
                if (shouldStop) {
                    _this.stopAll(pageScrollInstance.pageScrollOptions.namespace);
                }
            }),
        };
        this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultPageScrollConfig, customConfig);
        if (PageScrollService.instanceCounter > 0 &&
            (this.config._logLevel >= 2 || (this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()))) {
            console.warn('An instance of PageScrollService already exists, usually ' +
                'including one provider should be enough, so double check.');
        }
        PageScrollService.instanceCounter++;
    }
    /**
     * @private
     * @param {?} interrupted
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.stopInternal = /**
     * @private
     * @param {?} interrupted
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (interrupted, pageScrollInstance) {
        /** @type {?} */
        var index = this.runningInstances.indexOf(pageScrollInstance);
        if (index >= 0) {
            this.runningInstances.splice(index, 1);
        }
        if (pageScrollInstance.interruptListenersAttached) {
            pageScrollInstance.detachInterruptListeners();
        }
        if (pageScrollInstance.timer) {
            // Clear/Stop the timer
            clearInterval(pageScrollInstance.timer);
            // Clear the reference to this timer
            pageScrollInstance.timer = undefined;
            pageScrollInstance.fireEvent(!interrupted);
            return true;
        }
        return false;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PageScrollService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return new PageScrollInstance((/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.config, options))));
    };
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     */
    // tslint:disable-next-line:cyclomatic-complexity
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     * @param {?} pageScrollInstance
     * @return {?}
     */
    // tslint:disable-next-line:cyclomatic-complexity
    PageScrollService.prototype.start = /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     * @param {?} pageScrollInstance
     * @return {?}
     */
    // tslint:disable-next-line:cyclomatic-complexity
    function (pageScrollInstance) {
        var _this = this;
        // Merge the default options in the pageScrollInstance options
        pageScrollInstance.pageScrollOptions = (/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.config, pageScrollInstance.pageScrollOptions)));
        // Stop all possibly running scroll animations in the same namespace
        this.stopAll(pageScrollInstance.pageScrollOptions.namespace);
        if (pageScrollInstance.pageScrollOptions.scrollViews === null || pageScrollInstance.pageScrollOptions.scrollViews.length === 0) {
            // No scrollViews specified, thus we can't animate anything
            if (this.config._logLevel >= 2 || (this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])())) {
                console.warn('No scrollViews specified, thus ngx-page-scroll does not know which DOM elements to scroll');
            }
            return;
        }
        /** @type {?} */
        var startScrollPositionFound = false;
        // Reset start scroll position to 0. If any of the scrollViews has a different one, it will be extracted next
        pageScrollInstance.startScrollPosition = 0;
        // Get the start scroll position from the scrollViews (e.g. if the user already scrolled down the content)
        pageScrollInstance.pageScrollOptions.scrollViews.forEach((/**
         * @param {?} scrollingView
         * @return {?}
         */
        function (scrollingView) {
            if (scrollingView === undefined || scrollingView === null) {
                return;
            }
            // Get the scrollTop or scrollLeft value of the first scrollingView that returns a value for its "scrollTop"
            // or "scrollLeft" property that is not undefined and unequal to 0
            /** @type {?} */
            var scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);
            if (!startScrollPositionFound && scrollPosition) {
                // We found a scrollingView that does not have scrollTop or scrollLeft 0
                // Return the scroll position value, as this will be our startScrollPosition
                pageScrollInstance.startScrollPosition = scrollPosition;
                startScrollPositionFound = true;
            }
        }));
        /** @type {?} */
        var pageScrollOffset = pageScrollInstance.getCurrentOffset();
        // Calculate the target position that the scroll animation should go to
        /** @type {?} */
        var scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
        pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.pageScrollOptions.verticalScrolling ? scrollTargetPosition.top : scrollTargetPosition.left) - pageScrollOffset);
        // Calculate the distance we need to go in total
        pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;
        if (isNaN(pageScrollInstance.distanceToScroll)) {
            // We weren't able to find the target position, maybe the element does not exist?
            if (this.config._logLevel >= 2 || (this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])())) {
                console.log('Scrolling not possible, as we can\'t find the specified target');
            }
            pageScrollInstance.fireEvent(false);
            return;
        }
        // We're at the final destination already
        // OR we need to scroll down but are already at the end
        // OR we need to scroll up but are at the top already
        /** @type {?} */
        var allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < pageScrollInstance.pageScrollOptions._minScrollDistance;
        // Check how long we need to scroll if a speed option is given
        // Default executionDuration is the specified duration
        pageScrollInstance.executionDuration = pageScrollInstance.pageScrollOptions.duration;
        // Maybe we need to pay attention to the speed option?
        if ((pageScrollInstance.pageScrollOptions.speed !== undefined && pageScrollInstance.pageScrollOptions.speed !== null) &&
            (pageScrollInstance.pageScrollOptions.duration === undefined || pageScrollInstance.pageScrollOptions.duration === null)) {
            // Speed option is set and no duration => calculate duration based on speed and scroll distance
            pageScrollInstance.executionDuration =
                Math.abs(pageScrollInstance.distanceToScroll) / pageScrollInstance.pageScrollOptions.speed * 1000;
        }
        // We should go there directly, as our "animation" would have one big step
        // only anyway and this way we save the interval stuff
        /** @type {?} */
        var tooShortInterval = pageScrollInstance.executionDuration <= pageScrollInstance.pageScrollOptions._interval;
        if (allReadyAtDestination || tooShortInterval) {
            if (this.config._logLevel >= 2 || (this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])())) {
                if (allReadyAtDestination) {
                    console.log('Scrolling not possible, as we can\'t get any closer to the destination');
                }
                else {
                    console.log('Scroll duration shorter that interval length, jumping to target');
                }
            }
            pageScrollInstance.setScrollPosition(pageScrollInstance.targetScrollPosition);
            pageScrollInstance.fireEvent(true);
            return;
        }
        // Register the interrupt listeners if we want an interruptible scroll animation
        if (pageScrollInstance.pageScrollOptions.interruptible) {
            pageScrollInstance.attachInterruptListeners(this.onInterrupted);
        }
        // Let's get started, get the start time...
        pageScrollInstance.startTime = new Date().getTime();
        // .. and calculate the end time (when we need to finish at last)
        pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.executionDuration;
        pageScrollInstance.timer = setInterval((/**
         * @param {?} _pageScrollInstance
         * @return {?}
         */
        function (_pageScrollInstance) {
            // Take the current time
            /** @type {?} */
            var currentTime = new Date().getTime();
            // Determine the new scroll position
            /** @type {?} */
            var newScrollPosition;
            /** @type {?} */
            var stopNow = false;
            if (_pageScrollInstance.endTime <= currentTime) {
                // We're over the time already, so go the targetScrollPosition (aka destination)
                newScrollPosition = _pageScrollInstance.targetScrollPosition;
                stopNow = true;
            }
            else {
                // Calculate the scroll position based on the current time using the easing function
                newScrollPosition = Math.round(_pageScrollInstance.pageScrollOptions.easingLogic(currentTime - _pageScrollInstance.startTime, _pageScrollInstance.startScrollPosition, _pageScrollInstance.distanceToScroll, _pageScrollInstance.executionDuration));
            }
            if (_this.config._logLevel >= 5 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
                console.warn('Scroll Position: ' + newScrollPosition);
            }
            // Set the new scrollPosition to all scrollViews elements
            if (!_pageScrollInstance.setScrollPosition(newScrollPosition)) {
                // Setting the new scrollTop/scrollLeft value failed for all ScrollViews
                // early stop the scroll animation to save resources
                stopNow = true;
            }
            // At the end do the internal stop maintenance and fire the pageScrollFinish event
            // (otherwise the event might arrive at "too early")
            if (stopNow) {
                _this.stopInternal(false, _pageScrollInstance);
            }
        }), this.config._interval, pageScrollInstance);
        // Register the instance as running one
        this.runningInstances.push(pageScrollInstance);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PageScrollService.prototype.scroll = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.start(this.create(options));
    };
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     */
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     * @param {?=} namespace
     * @return {?}
     */
    PageScrollService.prototype.stopAll = /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     * @param {?=} namespace
     * @return {?}
     */
    function (namespace) {
        if (this.runningInstances.length > 0) {
            /** @type {?} */
            var stoppedSome = false;
            for (var i = 0; i < this.runningInstances.length; ++i) {
                /** @type {?} */
                var pageScrollInstance = this.runningInstances[i];
                if (!namespace || pageScrollInstance.pageScrollOptions.namespace === namespace) {
                    stoppedSome = true;
                    this.stopInternal(true, pageScrollInstance);
                    // Decrease the counter, as we removed an item from the array we iterate over
                    i--;
                }
            }
            return stoppedSome;
        }
        return false;
    };
    /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.stop = /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    };
    PageScrollService.instanceCounter = 0;
    PageScrollService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PageScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NGXPS_CONFIG,] }] }
    ]; };
    /** @nocollapse */ PageScrollService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function PageScrollService_Factory() { return new PageScrollService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(NGXPS_CONFIG)); }, token: PageScrollService, providedIn: "root" });
    return PageScrollService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = {};
var NgxPageScrollCoreModule = /** @class */ (function () {
    function NgxPageScrollCoreModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgxPageScrollCoreModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgxPageScrollCoreModule,
            providers: [PageScrollService, { provide: NGXPS_CONFIG, useValue: config }],
        };
    };
    NgxPageScrollCoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    providers: [
                        PageScrollService,
                        { provide: NGXPS_CONFIG, useValue: ɵ0 },
                    ],
                },] }
    ];
    return NgxPageScrollCoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-page-scroll-core.js.map

/***/ }),

/***/ "./node_modules/ngx-page-scroll/fesm5/ngx-page-scroll.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-page-scroll/fesm5/ngx-page-scroll.js ***!
  \***************************************************************/
/*! exports provided: NgxPageScrollModule, NgxPageScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPageScrollModule", function() { return NgxPageScrollModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPageScrollDirective", function() { return NgxPageScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/fesm5/ngx-page-scroll-core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPageScrollDirective = /** @class */ (function () {
    function NgxPageScrollDirective(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.pageScrollAdjustHash = false;
        this.pageScrollFinish = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.document = (/** @type {?} */ (document));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxPageScrollDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Some inputs changed, reset the pageScrollInstance
        this.pageScrollInstance = undefined;
    };
    /**
     * @return {?}
     */
    NgxPageScrollDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxPageScrollDirective.prototype.generatePageScrollInstance = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.pageScrollInstance === undefined || this.pageScrollInstance === null) {
            /** @type {?} */
            var options = {
                document: this.document,
                scrollTarget: this.pageScrollTarget || this.href,
            };
            if (this.pageScroll) {
                options.namespace = this.pageScroll;
            }
            if (this.pageScrollHorizontal !== undefined && this.pageScrollHorizontal !== null) {
                options.verticalScrolling = !this.pageScrollHorizontal;
            }
            if (this.pageScrollOffset !== undefined && this.pageScrollOffset !== null) {
                options.scrollOffset = this.pageScrollOffset;
            }
            if (this.pageScrollInterruptible !== undefined && this.pageScrollInterruptible !== null) {
                options.interruptible = this.pageScrollInterruptible;
            }
            if (this.pageScrollEasing) {
                options.easingLogic = this.pageScrollEasing;
            }
            if (this.pageScrollDuration !== undefined && this.pageScrollDuration !== null) {
                options.duration = this.pageScrollDuration;
            }
            if (this.pageScrollSpeed !== undefined && this.pageScrollSpeed !== null) {
                options.speed = this.pageScrollSpeed;
            }
            if (this.pageScrollFinish) {
                options.scrollFinishListener = this.pageScrollFinish;
            }
            this.pageScrollInstance = this.pageScrollService.create(options);
        }
        return this.pageScrollInstance;
    };
    /**
     * @private
     * @return {?}
     */
    NgxPageScrollDirective.prototype.pushRouterState = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.pageScrollAdjustHash && typeof this.pageScrollInstance.pageScrollOptions.scrollTarget === 'string'
            && ((/** @type {?} */ (this.pageScrollInstance.pageScrollOptions.scrollTarget))).substr(0, 1) === '#') {
            // "Navigate" to the current route again and this time set the fragment/hash
            this.router.navigate([], {
                fragment: ((/** @type {?} */ (this.pageScrollInstance.pageScrollOptions.scrollTarget))).substr(1),
                preserveQueryParams: true,
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxPageScrollDirective.prototype.scroll = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pageScrollInstance = this.generatePageScrollInstance();
        this.pushRouterState();
        this.pageScrollService.start(pageScrollInstance);
    };
    /**
     * @param {?} clickEvent
     * @return {?}
     */
    NgxPageScrollDirective.prototype.handleClick = /**
     * @param {?} clickEvent
     * @return {?}
     */
    function (clickEvent) {
        var _this = this;
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            /** @type {?} */
            var urlTree = void 0;
            if (typeof this.routerLink === 'string') {
                urlTree = this.router.parseUrl(this.routerLink);
            }
            else {
                urlTree = this.router.createUrlTree(this.routerLink);
            }
            if (!this.router.isActive(urlTree, true)) {
                // We need to navigate their first.
                // Navigation is handled by the routerLink directive
                // so we only need to listen for route change
                /** @type {?} */
                var subscription_1 = (/** @type {?} */ (this.router.events.subscribe((/**
                 * @param {?} routerEvent
                 * @return {?}
                 */
                function (routerEvent) {
                    if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                        subscription_1.unsubscribe();
                        // use a timeout to start scrolling as soon as the stack is cleared
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.scroll();
                        }), 0);
                    }
                    else if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
                        subscription_1.unsubscribe();
                    }
                }))));
                return false; // to preventDefault()
            }
        }
        this.scroll();
        return false; // to preventDefault()
    };
    NgxPageScrollDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[pageScroll]',
                    host: {
                        '(click)': 'handleClick($event)',
                    },
                },] }
    ];
    /** @nocollapse */
    NgxPageScrollDirective.ctorParameters = function () { return [
        { type: ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_3__["PageScrollService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    NgxPageScrollDirective.propDecorators = {
        routerLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageScrollTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageScrollHorizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageScrollOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageScrollDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageScrollSpeed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageScrollEasing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageScrollInterruptible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageScrollAdjustHash: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageScrollFinish: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgxPageScrollDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPageScrollModule = /** @class */ (function () {
    function NgxPageScrollModule() {
    }
    NgxPageScrollModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        NgxPageScrollDirective,
                    ],
                    imports: [
                        ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_3__["NgxPageScrollCoreModule"],
                    ],
                    exports: [
                        NgxPageScrollDirective,
                    ],
                },] }
    ];
    return NgxPageScrollModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-page-scroll.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/+oss-rules/oss-rules.doc.md":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/+oss-rules/oss-rules.doc.md ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "## OSS Rules and MetaUI Application\n\nIn this section we will extend our application from the [getting started guide][1] where a simple \npage was generated and also cover more advanced aspect behind but before we get into how to use OSS, \nlets start with a [quick overview of the syntax][6] and its similarities and differences to other \nsyntaxes you may know already. \n\n\n\n* [Overview of the OSS syntax][6]\n* [Extend MetaUI Applications](#extend-metaui-applications)\n* [Rules](#rules)\n* [Context and Properties](#context-and-properties)\n* [Chaining](#chaining)\n* [Built-in Rules](#built-in-rules)\n* [Application Rules](#application-rules)\n* [Rule Loading](#rule-loading)\n* [Rule Ranking](#rule-ranking)\n* [Visibility](#visibility)\n* [Validation](#validation)\n* [Editibility](#editibility)\n* [Actions](#actions) \n* [Layouts](#layouts)\n* [Other Areas to Explore](#other-areas-to-explore)\n\n\n#### Extend MetaUI Applications\n\nLet's add two more fields on the `User.ts` object from the getting started guide:\n\n```ts\n\nconstructor(public uniqueName?: string, public name?: string,\n              public description?: string, public created?: Date,\n              public age?: number, public isAngularDeveloper: boolean = false) {\n  }\n\n\n```\n\nWe want to keep it relatively simple so we added fields `age` and `isAngularDeveloper`. Let's also add type definition so \nrules can properly introspect these fields.\n\n\n```ts\n\n  getTypes(): any {\n    return {\n      uniqueName: String,\n      name: Number,\n      description: String,\n      created: Date,\n      age: Number,\n      isAngularDeveloper: Boolean\n    };\n```\n\nand extend our rule file `app/rules/User.oss` which tells the framework how and where these new fields \nshould be rendered. Let's show these field in `create` operation and default one which is `view`\n\n```ts\n\n  class=User {\n  \n        field=uniqueName {\n             label:\"Id\"\n        }\n  \n         field=name {\n             label:\"Name\"\n         }\n  \n         field=description {\n             trait:longtext;\n         }\n  \n         zNone => *;\n         zLeft => uniqueName => name => description => created => age => isAngularDeveloper;\n  }\n  \n  /*\n    Sample definition for operations edit and create\n  \n  */\n  class= User {\n     operation=(edit, create) {\n        zNone => *;\n        zLeft => name => description;\n     }\n  \n    operation=(create) {\n        zNone => *;\n        zLeft => name => description => created => isAngularDeveloper;\n     }\n  \n  }\n```\n\nand also extend a component constructor where we instantiate `User`\n```typescript\n\n this.object = new User('R0001', 'Frank Kolar', 'This is my user record', new Date(),  20, true);\n\n```\n \n\nlet's recompile and look at the application again\n\n```ts\n  npm run compile:oss\n  ng serve \n\n```\nYou can also run `npm run watch:oss` that monitors any `oss` changes and recompile automatically.\n\n\n### Rules\n\nHere we are getting to the first topic the **Rules**. As you can see to add additional two fields we did not do much. \nYou extend only the domain object `User` and update a rule file just like you do with your css.\n\nA _Rule_ defines a map of properties that should apply in the event that a set of Selectors are matched. \nGiven a rule base Meta and a set of asserted values Context a list of matching rules can be computed \n(by matching their selectors against the values) and by successively (in rank / priority order) \napplying (merging) their property maps, a set of effective properties can be computed. \n\n\nEach rule can be stated like this:\n\n```ts\nIf selectors [__,__,...] match the current context values,\nthen apply the properties [__,__,...].\n```\n\nThese rules can come from a variety of sources:\n\n* **Runtime introspection of Typescript classes**\n    \n    These rules declare the available properties (fields)  along with their data types. \n    \n    _Example: \"What are the fields in the `User` class?\" In rules term:_\n    \n\n```ts\n  If selectors [class=User, declare=field]\n      match the current context values,\n  then apply the properties\n      [field:name]\n  \n  \n  If selectors [class=User, declare=field]\n      match the current context values,\n  then apply the properties\n      [field:isAngularDeveloper]\n            \n  ...    \n```    \n\n  Since typescript (javascript) does not offer proper reflection support so we can introspect a class \n  the `getTypes()` method exists.\n\n\n* **Built-in rules**\n\n  MetaUI includes a base set of rules (`WidgetsRuels.oss`) to describe, for instance, a mapping from field \n  data type to UI component. Example: \"If it's a Boolean (`isAngularDeveloper`) and we're editing, use \n  the Checkbox component.\" \n  \n  In rules term:\n  \n\n```ts\n  If selectors [field=any, type=Boolean, editable=true]\n      match the current context values,\n  then apply the properties\n      [component:CheckboxComponent]\n```  \n\n\n* **Application provided rules**\n\n  Applications may provide explicit rules via \"object style sheet (oss) files\" (`User.oss`). These are a convenient \n  place to express presentation-oriented rules that really don't belong in (UI agnostic) domain classes. \n \n  \n  Example: \"The description field should appear after name field.\" In rules term:\n  \n```ts\n  If selectors [class=User, field=description]\n      match the current context values,\n  then apply the properties\n      [after:name]\n```  \n\nIn our example you could see OSS syntax in form of (description goes after name):\n\n```ts\nzLeft => uniqueName => name => description => created => age => isAngularDeveloper;\n```\n\nor can be expressed as:\n\n```ts\nclass=User {\n     field=description {\n         after: name;\n     }\n```\n\n* **Other Sources of Meta Data**\n\n  Many applications have other external sources of information about the application's \n  domain classes. For instance, an application may have meta data comming from Rest API \n  that provide additional information about classes and fields that should be taken into account\n  when creating user interfaces (e.g. \"is this field an owned to-many relationship?\"). MetaUI provides generic \n  hooks for integrating such sources of metadata (in fact, the metadata sources above \n  integrate via these same hooks).\n      \n  \nWe'll go into more details for each type of rules, but for now let's take a look at context and properties...\n\n   \n   \n### Context and Properties\n\nContext represents a stack of assignments (e.g. [object]=\"user\", operation=\"create\", layout=\"Inspect\"). \nThe current values are run against the Meta rule set to compute the effective property map.\nThe property map holds property key/value pairs that directly affects the UI (eg, component=\"CheckboxComponent\", editable=\"false\")\n\nThis is similar to how CSS works. HTML elements can have classes to provide context. For example:\n\n```html\n\n  <div class=\"box\">\n      <h1>Hey</h1>\n  </div>\n  \n  <div class=\"X\">\n   <div class=\"box\">\n      <h1>There</h1>\n   </div>\n  </div>\n```\nThen you have rules that depending on the context and how they are nested, you get different styling properties:\n\n```css\n\n  .box {\n     border:1px solid red;\n     width:100px;\n     float:left;\n     color:green;\n  }\n  /*\n     if an element with class \"box\" that is contained\n     in an element with class \"X\",\n     then applies these properties\n  */\n  .X .box {\n      border:3px solid blue;\n      background-color:yellow;\n  }\n  /*\n     if a h1 element is contained\n     in an element with class \"box\" that is contained\n     in an element with class \"X\",\n     then applies these properties\n  */\n  .X .box h1 {\n      color:orange;\n  }\n```\n\n\nIf multiples rules match, properties are merged and overridden. In this example,the \"There\" element \nmerged the width and float properties, but overrode the border and color properties from more specific rules.\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/css-rule.png \"CSS Rule Example\")\n\n\nIn MetaUI, context values are set using `MetaContextComponent`:\n\n```html\n  <m-context [object]=\"user\" operation=\"create\" layout=\"Inspect\">\n      <m-include-component></m-include-component>\n  </m-context>\n\n\n  <m-context [object]=\"user\" operation=\"view\" layout=\"Inspect\">\n        <m-include-component></m-include-component>\n  </m-context>\n```\n\nThen you have rules that depending on the context and how they are nested, you get different UI properties:\n\n```ts\n  If selectors [operation=create, field=any]\n      match the current context values,\n  then apply the properties\n      [editing:true]\n  \n  If selectors [operation=view, field=any]\n      match the current context values,\n  then apply the properties\n      [editing:false]\n\n```\n\n`MetaIncludeComponent` and various Meta components takes the effective property map to generate \nprogramatically the UI.\n\n<img width=\"600\" height=\"385\" title=\"Create operation\" src=\"https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/meta-create.png\" >\n\n\nand view operation: \n\n\n<img width=\"400\" height=\"305\" title=\"view operation\" src=\"https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/meta-view.png\" >\n\n\n\n##### Here are some interesting context keys:\n\n* **module**: Global nav tab\n* **layout**: Define a named layout (e.g. \"Inspect\", \"SearchForm\")\n* **operation**: \"view\", \"edit\", \"create\", \"search\", \"list\"\n* **class**:  Class name\n* **object**: Object instance (e.g. a User object)\n* **action**: An action (e.g. could be fired from a button)\n* **field**: Current field of class\n* **elementType**: If type is collection, the type of its elements\n* **editing**: Currently editing? Derived from operation\n* **trait**: Current traits in effect (like CSS classes)\n\n##### Here are some interesting property keys:\n\n###### General\n\n* **trait**: List of traits to apply\n* **after**: Name of item (or zone) that this item should follow (for layout order)\n* **visible**: Should current item be shown\n* **component**: Component name to use for display\n* **bindings**: Map of bindings to pass to component\n* **wrapperComponent**: Name of component to wrap around this component (also, wrapperBindings)\n\n\n###### Class\n\n* **fieldsByZone**: Map of List<Fields> for the layout zones (e.g. \"zTop\", \"zLeft\", )\n* **zonePath**: Zone key path for sub map to render\n* **zNone**: Special zone which makes field invisible\n* **zLeft**: Specific named zone that renders fields in the Left zone (the same applies for other zones: zRight, zBottom, zMiddle, zTop)\n\n\n###### Layout, Module, Field, Action\n\n* **label**: Display key \n \n###### Field\n\n* **editable**: Should current field be editable\n* **valid**: Is current value valid\n\n\n###### Layout\n\n* **layoutsByZone**: List of sub-layout names grouped by zone (zTop, zLeft, )\n\n\n###### Action\n\n* **actionResults**: Executes js code that can fire any action\n\n\n\nHere are some of the interesting context keys that are explicitly set into the context:\n\n* **field**: set by MetaFormTableComponent\n* **action**: set by MetaActionListComponent\n* **actionCategory**: set by MetaActionListComponent\n* **class**: set by MetaFormTableComponent\n* **object**: set by MetaFormTableComponent\n* **layout**: set by MetaFormTableComponent MetaSectionComponent, MetaDashboardLayoutComponent\n* **module**: set by MetaHomePage\n\n\nHowever, some are implicitly set by the MetaUI engine. It's time to talk about chaining...\n\n\n### Chaining\n\nChaining is when some properties resulting from one rule are fed back as new context assignments, \nresulting in new matches.\n\nThese context assignments are \"implied\" by the current assignments are applied, (resulting in a revised \ncomputation of the current property map, and possible further chaining).\n\nReferring to the rules listed below, we can see how this particular chaining sequence happens:\n\n* The `field=isAngularDeveloper` value is assigned into the context by MetaFormTableComponent and activates rules 1 - 5.\n* The `type` property from rule 1 is chained/implicitly assigned backed into the context and activates rules 4 and 5.\n* The `editing` property from 2 is chained/implicitly assigned backed into the context and activates rule 3.\n* The `editable` property from 3 is chained/implicitly assigned backed into the context and activates rule 4.\n\n\n```ts\n1) If selectors [class=User, field=isAngularDeveloper]\n       match the current context values,\n   then apply the properties\n       [type:Boolean]\n\n\n2) If selectors [operation=create, field=any]\n       match the current context values,\n    then apply the properties\n        [editing:true]\n\n\n3) If selectors [field=any,editing=true]\n       match the current context values,\n   then apply the properties\n       [editable:true]\n\n\n4) If selectors [field=any, type=Boolean, editable=any]\n       match the current context values,\n   then apply the properties\n       [component:CheckboxComponent]\n\n\n5) If selectors [field=any, type=Boolean]\n       match the current context values,\n   then apply the properties\n       [bindings: {value=value}]\n\n```\n\nNot all properties are chained. The following are some of the interesting properties that are chained:\n\n* class\n* type\n* elementType\n* trait\n* editable\n* editing\n* layout\n* component\n\nYou should now have a sense of the power of rule based UI. Most of the rules to generate the UI are \nalready available from the domain object, or are conventions that are redundant to repeat. We don't need \nto worry about updating all the areas every time we add/remove/change a field.\n\n**Let's extend our example**\n\nLet's add proper label _\"Full name\"_ for `name` field like this in the `User.oss`:\n\n```ts\nclass=User {\n\n  field=name {\n     label:\"Full name\"\n  }\n  ...\n```\n\n\n```\nNote: Don't forget to run \"npm run compile:oss\" when you modify OSS rule file unless you launched in the other \nterminal \"npm run watch:oss\" command\n```\n\n\n\nWe just defined new selectors for [class=className, field=fieldName]. So in our example, this rule was created:\n\n```ts\nIf selectors [class=User, field=name]\n    match the current context values,\nthen apply the properties\n    [label:\"Full name\"]\n```\n\n\n\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/full-name.png \"Updated label\")\n\n\n\nWe can similarly add `trait` properties like this:\n\n```ts\nclass=User {\n\n  field=name {\n     label:\"Full name\";\n     trait:required;\n  }    \n  field=description {     \n       trait:longtext;\n  }  \n  ...\n```\n\n\nThe following rule is created:\n\n```ts\n  If selectors [class=User, field=name]\n      match the current context values,\n  then apply the properties\n      [trait:required]\n      \n  If selectors [class=User, field=description]\n      match the current context values,\n  then apply the properties\n      [trait:longtext]    \n\n```\n\nNow the _name_ field is required and description changed from simple text text field to text area.\n\n\n<p width=\"10px\">\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/trait-longtext.png \"Trait required\")\n\n</p>\nWe've discussed how `MetaIncludeComponent` switches in the right component with the \ncomponent property through chaining. As mentioned, the trait property is chained \nback to the context, but where are the rest of rules involved? This takes us to \nthe MetaUI built-in rules.\n\n\n\n### Built-in Rules\n\nAn important source of built-in rules are specified in `WidgetsRules.oss`. In this file, \nyou will find many useful rules for data type, decoration, trait, operation, layout, action, \nand module in OSS. In particular, you will find these nested OSS rules:\n\n```ts\nfield {\n     type=java.lang.String {\n        @trait=longtext {\n           after:zBottom;\n           editable { component:TextAreaComponent;\n             bindings:{cols:60; rows:10} }\n           ....\n       }\n```\n\nWe'll cover the OSS syntax in more details in a different tutorial, but this is one of the rules:\n\n```ts\n  If selectors [field=any, type=String,\n                trait=longtext, editable=true]\n      match the current context values,\n  then apply the properties\n      [component:TextAreaComponent]\n```\n\n\n### Application Rules\n\nSince we have already `User.oss` in the `app/rules` directory we are going to add following\n\n```ts\n       field=age  editable=false {\n          component:AgeRatingComponent;\n          bindings: {\n            value:$value;\n          }\n       }\n```\n\nThe `AgeRatingComponent` might look like this\n\n\n```ts\n  import {Component, Input, OnInit} from '@angular/core';\n  import {BaseComponent, Environment} from '@ngx-metaui/rules';\n  \n  \n  @Component({\n    selector: 'app-age-rating',\n    template: `\n      <span class=\"w-string-field\">\n        {{rating}}\n      </span>\n    `\n  })\n  export class AgeRatingComponent extends BaseComponent implements OnInit {\n  \n    @Input()\n    value: any;\n  \n    rating: string;\n  \n    constructor(protected environment: Environment) {\n      super(environment);\n    }\n  \n    ngOnInit(): void {\n      this.rating = (!this.value) ? 'N/A' : ((this.value && this.value <= 20) ? 'Young' : 'Good');\n    }\n  }\n```\n\nAnd dont forget to add this into your module `declarations` as well as `entryComponents` since all is assembled \nprogrammatically\n\n```ts\n  @NgModule({\n    declarations: [\n      AppComponent,\n      UserDetailComponent,\n      AgeRatingComponent\n    ],\n    imports: [\n      BrowserModule,\n      BrowserAnimationsModule,\n      MetaUIRulesModule.forRoot({})\n    ],\n    entryComponents: [AgeRatingComponent],\n    providers: [],\n    bootstrap: [AppComponent]\n})\n\n```\n\nTo help the introspection when MetaUI tries to instantiate `AgeRatingComponent`the type must be known. For this\nwe are going to add export into `user-rules.oss`\n\n\n```ts\n/**\n * Export generated TS files from ./ts directory\n */\n\nexport * from './ts/DummyOSS';\n\n/** Auto generated  export */\nexport * from './ts/UserOSS';\n\nexport * from '../age-rating/user-detail.component';\n```\n\n\n\nRecompile oss, serve and let's change age from 20 to 30\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/metaui-age-edit.png \"Add age 30\")\n\nand in read-only mode the value renders as _Good_\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/metaui-age-view.png \"Custom component for age field\")\n\n\nAnd with that, we just overrode the default component property. To see how MetaUI determine how \nproperties from multiple rules are applied, we need to understand how rules are loaded and ranked...\n\n\n### Rule Loading\n\nOn application initialization:\n\n* Built-in `WidgetsRules.oss` rules are loaded. Build-in rules are already precompiled and are part of the _@ngx-metaui/rules_\n* If global application rule exists the `Application.oss` then its loaded  and there can only be one for the entire application.  \n* On first reference to class name in the MetaUI context:\n  * Introspection rules are created and they are loaded from `app/rules/[EntityNamne].oss`\n  \nTo load rules the `RuleLoaderService` is used.  \n  \n\n\n### Rule Ranking\n\n* Matching rules are applied in rank order to build the property map.\n* Rules from system (default rules) have lowest rank, then introspection rules, then application `.oss` rules.\n* Rank is (roughly) the order of appearance in the .oss file (later == higher rank)\n* When multiple rules update the same property, type and key-specific merge rules are applied:\n  * Maps and trait lists are merged\n  * visible, editable, and valid expressions are chained with AND semantics (except if override value is used - `e.g. visible=true!`)\n  * Other values are overridden\n  \n\n### Visibility\n\nLet's continue by adding some advanced rules. We want to hide the description field when we are not editing and \nisAngularDeveloper is false with the visibility property\n\n\n```ts\nfield=description {\n     trait:longtext;\n\n     editing=false {\n        visible: ${object.isAngularDeveloper};\n     }\n}\n```\n\nwhich creates this rule:    \n    \n```ts\nIf selectors [class=User, field=description, editing=false]\n    match the current context values,\nthen apply the properties\n    [visible:${object.isAngularDeveloper}]\n```    \n\nExpressions are wrapped in `${}` and when used in property value, the \"this\" is the Context object - key\npaths reference assignments in context\n\n\n**The context also has special keys for the following:**\n\n* **object**: The current object instance set on the context by the object context key\n* **value**: The field value from evaluating the current field on the current object in the context\n* **properties**: The current property map access as `properties.get('<property name>')`\n\n\n### Validation\n\nNext we add a validation on the `created` field to ensure that it's not a future with the `Validation` condition:\n\n\n```ts\n   field=created {\n      valid:${ object.isValidCreateDate() ? true : \"The date cannot be in the future\" };\n   }\n```\n\n\nand let's add our validation method to domain object `user.ts`:\n\n```typescript\n  isValidCreateDate(): boolean {\n    const dateNow = new Date();\n    return (this.created && this.created < dateNow);\n  }\n```\n\nwhich creates this rule:\n\n```ts\n  If selectors [class=user, field=created]\n      match the current context values,\n  then apply the properties\n      [valid:${object.isValidCreateDate()}]\n```\n\n\nWhen you select future date our custom error message appears\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/validity-created.png \"Validate for future date\")\n\n\n\n\n\n### Editibility\n\nLet's add a rule to prevent the editing the `name` field if the value `isAngularDeveloper` is  not true. \n\n```ts\n     field=name {\n         label:\"Full name\";\n         trait:required;\n         editable: ${object.isAngularDeveloper};\n     }\n```\n\nwhich creates this rule:\n\n```ts\nIf selectors [class=User, field=name]\n    match the current context values,\nthen apply the properties\n    [editable:${object.isAngularDeveloper}]\n```\n\nSelect _create_ operation and uncheck `isAngularDeveloper` and we see that it the `name` (Full name) is not editable.\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/editable.png \"Editable if Angular developer\")\n\n\n### Actions\n\nAction is the way how to add some logic into your MetaUI. For example:\n\n* Show a message dialog\n* Trigger routing\n* Or run some typescript/javascript code\n\nLet's add an action on the `User.oss` that shows only in editing mode and  when clicked it opens an alert \nwith the `object.name`:\n\n```ts\n  class {   \n    @action=Save  {\n         label: \"Save\";\n         actionResults:${ alert(\"Record saved : \" + object.name) };\n         visible: ${properties.get(\"editing\")};\n         buttonStyle:info;\n    }\n  }\n\n```\n\nTo be able to see the action let's change our `layout` binding to the `InspectWithActions` inside our\n`user-detail.component.html`, so it could\nlook like this:\n\n```html\n  <m-context [object]=\"object\" [operation]=\"operation\" layout=\"InspectWithActions\">\n    <m-include-component></m-include-component>\n  </m-context>\n```\n\nYou can define different variety of layouts but more about this in the next section.\n\nwhich creates this rule:\n\n```ts\nIf selectors [class=User declare=action]\n    match the current context values,\nthen apply the properties\n    [action:Save]\n\nIf selectors [class=User, action=Save]\n    match the current context values,\nthen apply the properties\n   [actionResults:${\n           /*\n              - Run JS code that shows alert\n              - Use an object to access a name              \n           */\n           }\n       ]\n\n```\n\nWhen in editing mode the actions appears under action button placeholder.\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/action-save-1.png \"Action Save shows in editing mode\")\n     \n\nWhen clicked our message appears in alert dialog:\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/action-save-2.png \"Action Save shows in editing mode\")\n\nOther way to insert an `Action` we don't necessary need to change the layout we can keep the existing `Inspect` layout\nand use other `m-context` element and render actions like this:\n\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/action-links.png \"Custom links with new m-context element\")\n\n\nLet's extend our rules to:\n\n\n```ts\n/*\n  Sample definition for operations edit and create\n\n*/\n class= User {\n   operation=edit {\n      zNone => *;\n      zLeft  => name => description => age;\n   }\n\n  operation=create {\n      zNone => *;\n      zLeft => name => description => created => isAngularDeveloper;\n   }\n\n   @action=Save  {\n        label: \"Save\";\n        actionResults:${ alert(\"Record saved !\") };\n        visible: ${properties.get(\"editing\")};\n        buttonStyle:info;\n   }\n\n   @action=Discard  {\n         label: \"Discard Changes\";\n         actionResults:${ alert(\"All cleared !\") };\n         visible: ${properties.get(\"editing\")};\n         buttonStyle:info;\n   }\n}\n```\n\nWe just defined 2 actions on the class user and we can insert them to the page this \nlike this:\n\n```html\n  <span style=\"float: right\">\n    Actions: [\n    <m-context [object]=\"object\"  layout=\"Links\">\n      <m-include-component></m-include-component>\n    </m-context>\n  ]\n\n  </span>\n\n\n  <m-context [object]=\"object\" [operation]=\"operation\" layout=\"Inspect\">\n    <m-include-component></m-include-component>\n  </m-context>\n```\n\n\nWhen discard is clicked:\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/action-links-clicked.png \"Custom links with new m-context element\")\n\n### Layouts\n\nSo far we discussed how domain objects are rendered, we covered some advanced topics like conditions and \nactions and all this is nothing without layouts. \n\nLayouts are a like containers in MetaUI and they form high level structure in which you place your content.\nEven our form from above is backed up by layout:\n\n```ts\nclass layout=Inspect { \n  trait:Form; \n  label:${UIMeta.beautifyClassName(values.class)}; \n}\n\n@trait=Form { visible:true; component:MetaFormComponent }\n```\n\nIn MetaUI we have two types of containers:\n* module\n* layout\n\n`Module` is just another container that can use multiple layouts to assemble actual page and it used\nto generate top level navigation menu where each menu have its own content\n\n\nLet's define 3 tabs:\n \n```ts\n@module=Home {\n    label:\"My Home\";\n    pageTitle:\"You are now on Homepage\";\n\n    @layout=Today {\n       after:zTop;\n       label: \"Sales Graph\";\n       component:SalesGraphComponent;\n    }\n\n    @layout=Sport {\n       after:Today;\n       label: \"Sport today!\";\n       component:StringComponent;\n       bindings:{value:\" ...... \" }\n    }\n\n\n     @layout=Tech {\n           after:Sport;\n           label: \"Tech News\";\n           component:StringComponent;\n           bindings:{value:\" ...... \" }\n     }\n\n     @layout=MessageBoard {\n        after:zBottom;\n        label: \"Message Board\";\n        component:StringComponent;\n        portletWidth:large\n        bindings:{value:\" ...... \" }\n     }\n\n}\n\n\n\n@module=Products {\n    pageTitle:\"You are now on Products\";\n    homePage:ProductContentComponent;\n}\n\n\n@module=Sources {\n    label:\"Sources for Module\";\n    homePage:SourcesComponent;\n\n}\n```\n\n\nModule is defined like this:\n\n```ts\nmodule {\n    homePage:MetaHomePageComponent;\n    component:MetaDashboardLayoutComponent;\n    layout { visible:true }   \n}\n```\n\nEvery module is rendered on top of the `component` property (in this case `MetaDashboardLayoutComponent`) \nand uses `homePage`to render given content. In `@module=Home` we defined 4 layouts and distributed\nthem to different zones which are implemented by `MetaDashboardLayoutComponent`.\nOther tabs overrode `homePage` and added regular angular component.\n\nLayouts can in turn contain other layouts or object layouts and action layouts. Like our example from above where\nchanged layout binding to `InspectWithActions` because we needed to have a container that can hold and render actions:\n\n```ts\nlayout=InspectWithActions {\n    trait:Stack;\n    @layout=Actions#ActionMenu;\n    @layout=Inspect#Form;\n}\n```\n\nIn above build-in rule  we defined a layout `InspectWithActions` with `trait` Stack, which adds additional properties such `component`\nthat knows how to render its content in actual _stack_. And we have two named `@layout` where one creates a container \nfor actions and another renders a Form.\n\nSimilar way you can construct any kinds of layouts. Here is an example from different context. Let's create a generic\nlayout for `Invoice` class where we want to have expandable sections and each section will have its own content.\n\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/section-expanded.png \"Custom links with new m-context element\")\n\n\nall defined with the rule:\n\n```ts\nlayout=InvoicePage#Sections {\n    @layout=Header#Form {\n        zonePath:Header;\n        title:\"Label for header section\";\n        description:$object.itemDescription;\n        opened:false;\n    }\n\n    @layout=Participant {\n        title:\"Label for Participant section\";\n        visible:true;\n        canEdit:true;\n        component:Section2Component;\n        editing {\n            bindings:{\n                oper:'editx';\n            }\n        }\n        editing=false {\n            bindings:{\n                oper:'vieaaa';\n            }\n        }\n    }\n\n     @layout=Lines {\n        title:\"Label for Line Item section\";\n        visible:true;\n        canEdit:true;\n        editMode:\"external\";\n        actionIcon:\"icon-positive\";\n        component:Section3Component;\n        bindings:{\n            oper:${properties.get(\"operation\")}\n        }\n    }\n    @layout=Footer#Form {\n        title:\"Label for footer section\";\n        zonePath:Footer;\n    }\n}\n```\n\n\nwith html code like this:\n\n```html\n  <m-context [object]=\"myRequest\" operation=\"view\" layout=\"InvoicePage\"\n                   (onAction)=\"onActionHandler($event)\">\n        <m-include-component></m-include-component>\n   </m-context>\n```\n\nFields are \"zoned\" by setting their predecessor with a dotted path (e.g. \"header.zRight\") that \nis establish as the \"zonePath\" for the nested form in the above ` @layout=Header#Form`\n\nThe application rule to render actual _Invoice_ could look like this:\n\n```\nclass=Invoice {\n    layout {\n        trait:labelsOnTop;\n    }\n    Header.zLeft => uniqueName => itemPrice;\n    Header.zRight => supplier => requestor;\n    Footer.zBottom => itemDescription;\n}\n```\n\n\n### Other Areas to Explore\n\nSo you've seen how `MetaUI` works with domain objects to generate various user interfaces derived from rules. The next steps could be \nto give it a chance and try it out and also look at the following:\n\n* [Build-in rules][2]: Default rules where you can learn various oss constructions.\n* [MetaContext][3]: Angular component `m-context` responsible for setting context and communicating with the rule engine.\n* [MetaIncludeComponent][4]: Key component for reading final evaluated properties and rendering programatically UI.\n* [Meta][5]: Base class rule engine implementation.  \n* [OSS Grammar Tutorial][6]: Introduction to oss syntax  \n\n\n[1]: ../GETTING-STARTED.md\n[2]: https://github.com/ngx-meta/rules/tree/master/libs/rules/src/lib/metaui/core/oss\n[3]: https://github.com/ngx-meta/rules/blob/master/libs/rules/src/lib/metaui/core/meta-context/meta-context.component.ts\n[4]: https://github.com/ngx-meta/rules/blob/master/libs/rules/src/lib/metaui/layout/meta-include.directive.ts\n[5]: https://github.com/ngx-meta/rules/blob/master/libs/rules/src/lib/metaui/core/meta.ts\n[6]: https://github.com/ngx-meta/rules/blob/master/docs/oss-syntax.md\n"

/***/ }),

/***/ "./src/app/components/+oss-rules/oss-rules-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/+oss-rules/oss-rules-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OssRulesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OssRulesRoutingModule", function() { return OssRulesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _oss_rules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oss-rules.component */ "./src/app/components/+oss-rules/oss-rules.component.ts");




var routes = [
    {
        path: '',
        component: _oss_rules_component__WEBPACK_IMPORTED_MODULE_3__["OssRulesComponent"]
    }
];
var OssRulesRoutingModule = /** @class */ (function () {
    function OssRulesRoutingModule() {
    }
    OssRulesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OssRulesRoutingModule);
    return OssRulesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/+oss-rules/oss-rules.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/+oss-rules/oss-rules.component.ts ***!
  \**************************************************************/
/*! exports provided: OssRulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OssRulesComponent", function() { return OssRulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OssRulesComponent = /** @class */ (function () {
    function OssRulesComponent() {
        this.content = __webpack_require__(/*! !raw-loader!./oss-rules.doc.md */ "./node_modules/raw-loader/index.js!./src/app/components/+oss-rules/oss-rules.doc.md");
    }
    OssRulesComponent.prototype.ngOnChanges = function () {
        setTimeout(function () {
            var a = document.getElementById('oss-rules-and-metaui-application');
            console.log(42, a);
        }, 1000);
        var b = document.getElementById('oss-rules-and-metaui-application');
        console.log(43, b);
    };
    OssRulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oss-rules',
            template: "<markdown class=\"variable-binding\" [data]=\"content\"></markdown>",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OssRulesComponent);
    return OssRulesComponent;
}());



/***/ }),

/***/ "./src/app/components/+oss-rules/oss-rules.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/+oss-rules/oss-rules.module.ts ***!
  \***********************************************************/
/*! exports provided: OssRulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OssRulesModule", function() { return OssRulesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _oss_rules_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oss-rules-routing.module */ "./src/app/components/+oss-rules/oss-rules-routing.module.ts");
/* harmony import */ var _oss_rules_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oss-rules.component */ "./src/app/components/+oss-rules/oss-rules.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/fesm5/ngx-page-scroll.js");








var OssRulesModule = /** @class */ (function () {
    function OssRulesModule() {
    }
    OssRulesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _oss_rules_component__WEBPACK_IMPORTED_MODULE_5__["OssRulesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _oss_rules_routing_module__WEBPACK_IMPORTED_MODULE_4__["OssRulesRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_page_scroll__WEBPACK_IMPORTED_MODULE_7__["NgxPageScrollModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forChild()
            ],
        })
    ], OssRulesModule);
    return OssRulesModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-oss-rules-oss-rules-module.js.map