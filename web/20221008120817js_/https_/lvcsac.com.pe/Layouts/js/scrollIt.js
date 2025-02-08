var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
 * ScrollIt
 * ScrollIt.js(scroll•it•dot•js) makes it easy to make long, vertically scrolling pages.
 *
 * Latest version: https://github.com/cmpolis/scrollIt.js
 *
 * License <https://github.com/cmpolis/scrollIt.js/blob/master/LICENSE.txt>
 */
(function($) {
    'use strict';

    var pluginName = 'ScrollIt',
        pluginVersion = '1.0.3';

    /*
     * OPTIONS
     */
    var defaults = {
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset : 0
    };

    $.scrollIt = function(options) {

        /*
         * DECLARATIONS
         */
        var settings = $.extend(defaults, options),
            active = 0,
            lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

        /*
         * METHODS
         */

        /**
         * navigate
         *
         * sets up navigation animation
         */
        var navigate = function(ndx) {
            if(ndx < 0 || ndx > lastIndex) return;

            var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
            $('html,body').animate({
                scrollTop: targetTop,
                easing: settings.easing
            }, settings.scrollTime);
        };

        /**
         * doScroll
         *
         * runs navigation() when criteria are met
         */
        var doScroll = function (e) {
            var target = $(e.target).closest("[data-scroll-nav]").attr('data-scroll-nav') ||
            $(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
            navigate(parseInt(target));
        };

        /**
         * keyNavigation
         *
         * sets up keyboard navigation behavior
         */
        var keyNavigation = function (e) {
            var key = e.which;
            if($('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
                return false;
            }
            if(key == settings.upKey && active > 0) {
                navigate(parseInt(active) - 1);
                return false;
            } else if(key == settings.downKey && active < lastIndex) {
                navigate(parseInt(active) + 1);
                return false;
            }
            return true;
        };

        /**
         * updateActive
         *
         * sets the currently active item
         */
        var updateActive = function(ndx) {
            if(settings.onPageChange && ndx && (active != ndx)) settings.onPageChange(ndx);

            active = ndx;
            $('[data-scroll-nav]').removeClass(settings.activeClass);
            $('[data-scroll-nav=' + ndx + ']').addClass(settings.activeClass);
        };

        /**
         * watchActive
         *
         * watches currently active item and updates accordingly
         */
        var watchActive = function() {
            var winTop = $(window).scrollTop();

            var visible = $('[data-scroll-index]').filter(function(ndx, div) {
                return winTop >= $(div).offset().top + settings.topOffset &&
                winTop < $(div).offset().top + (settings.topOffset) + $(div).outerHeight()
            });
            var newActive = visible.first().attr('data-scroll-index');
            updateActive(newActive);
        };

        /*
         * runs methods
         */
        $(window).on('scroll',watchActive).scroll();

        $(window).on('keydown', keyNavigation);

        $('body').on('click','[data-scroll-nav], [data-scroll-goto]', function(e){
            e.preventDefault();
            doScroll(e);
        });

    };
}(jQuery));


}
/*
     FILE ARCHIVED ON 12:08:17 Oct 08, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:31:59 Feb 05, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.634
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.012
  esindex: 0.013
  cdx.remote: 23.083
  LoadShardBlock: 650.183 (3)
  PetaboxLoader3.datanode: 326.526 (5)
  load_resource: 171.287
  PetaboxLoader3.resolve: 112.011
  loaddict: 38.953
*/