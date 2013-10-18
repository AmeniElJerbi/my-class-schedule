//來源: http://www.zhangxinxu.com/wordpress/2010/11/js%E9%A1%B5%E9%9D%A2%E6%BB%9A%E5%8A%A8%E6%97%B6%E5%B1%82%E6%99%BA%E8%83%BD%E6%B5%AE%E5%8A%A8%E5%AE%9A%E4%BD%8D%E5%AE%9E%E7%8E%B0jquerymootools/

$.fn.smartFloat = function() {
    var position = function(element) {
        var top = element.position().top, pos = element.css("position");
        $(window).scroll(function() {
            var scrolls = $(this).scrollTop();
            if (scrolls > top) {
                if (window.XMLHttpRequest) {
                    element.css({
                        position: "fixed",
                        top: 0
                    });    
                } else {
                    element.css({
                        top: scrolls
                    });    
                }
            }else {
                element.css({
                    position: "absolute",
                    top: top
                });    
            }
        });
    };
    return $(this).each(function() {
        position($(this));                         
    });
};
