(function(jQuery, undefined) {
    jQuery(document).ready(function() {
        function getNext() {
            var next = jQuery("a[id=\"article-nav-newer\"]");
            next = next.length ? next : jQuery("#page-nav a[rel=\"next\"]");

            return next.length ? next : void 0;
        }

        function getPrev() {
            var prev = jQuery("a[id=\"article-nav-older\"]");
            prev = prev.length ? prev : jQuery("#page-nav a[rel=\"prev\"]");

            return prev.length ? prev : void 0;
        }

        if (jQuery(".article-type-post").length) {
            jQuery("#container")
                .swipe({
//                    tap:function(event, target) {
//                        console.log("tap from callback");
//                    },
//                    hold:function(event, target) {
//                        console.log("hold from callback");
//                    },
//                    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
//                        console.log("swipe from callback");
//                    },
//                    swipeLeft:function(event, distance, duration, fingerCount, fingerData) {
//                        var next = getNext();
//                        if (next) {
//                            window.location.href = next.attr("href");
//                        }
//                        return false;
//                    },
//                    swipeRight:function(event, distance, duration, fingerCount, fingerData) {
//                        var prev = getPrev();
//                        if (prev) {
//                            window.location.href = prev.attr("href");
//                        }
//                        return false;
//                    },
//                    swipeUp:function(event, distance, duration, fingerCount, fingerData) {
//                        console.log("swipeUp from callback");
//                    },
//                    swipeDown:function(event, distance, duration, fingerCount, fingerData) {
//                        console.log("swipeDown from callback");
//                    },
                    swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData) {
                        if (jQuery.fn.swipe.directions.LEFT === direction) {
                            if (jQuery.fn.swipe.phases.PHASE_MOVE === phase &&
                                1000 > duration) {
                                if (getNext()) {
                                    jQuery(".swipe-next").fadeIn(200);

                                    setTimeout(function() {
                                        jQuery(".swipe-next").fadeOut(200);
                                    }, 1000)
                                }
                            }
                            else if (jQuery.fn.swipe.phases.PHASE_CANCEL === phase) {
                                jQuery(".swipe-navigation").fadeOut(200);
                            }
                            else if (jQuery.fn.swipe.phases.PHASE_END === phase) {
                                jQuery(".swipe-next").fadeOut(200);
                                if (jQuery.fn.swipe.phases.PHASE_END === phase) {
                                    var next = getNext();
                                    if (next) {
                                        window.location.href = next.attr("href");
                                    }
                                }
                            }
                        }
                        else if (jQuery.fn.swipe.directions.RIGHT === direction) {
                            if (jQuery.fn.swipe.phases.PHASE_MOVE === phase &&
                                1000 > duration) {
                                if (getPrev()) {
                                    jQuery(".swipe-prev").fadeIn(200);

                                    setTimeout(function() {
                                        jQuery(".swipe-prev").fadeOut(200);
                                    }, 1000)
                                }
                            }
                            else if (jQuery.fn.swipe.phases.PHASE_CANCEL === phase) {
                                jQuery(".swipe-navigation").fadeOut(200);
                            }
                            else if (jQuery.fn.swipe.phases.PHASE_END === phase) {
                                jQuery(".swipe-prev").fadeOut(200);
                                if (jQuery.fn.swipe.phases.PHASE_END === phase) {
                                    var prev = getPrev();
                                    if (prev) {
                                        window.location.href = prev.attr("href");
                                    }
                                }
                            }
                        }
                    },
//                    pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom, fingerData) {
//                        console.log("pinchIn from callback");
//                    },
//                    pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom, fingerData) {
//                        console.log("pinchOut from callback");
//                    },
//                    pinchStatus:function(event, phase, direction, distance , duration , fingerCount, pinchZoom, fingerData) {
//                        console.log("pinchStatus from callback");
//                    },
                    fingers: jQuery.fn.swipe.fingers.ALL,
                    allowPageScroll: jQuery.fn.swipe.pageScroll.AUTO,
                    threshold: 150,
                    cancelThreshold: 20,
                    maxTimeThreshold: 4000
                });
        }
    });
})(jQuery);
