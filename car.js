$(function() {
    $('#main-menu').each(function() {
        var iTms = $(this).find('.LinkList ul > li').children('a'),
            iLen = iTms.length;
        for (var i = 0; i < iLen; i++) {
            var i1 = iTms.eq(i),
                t1 = i1.text();
            if (t1.charAt(0) !== '_') {
                var i2 = iTms.eq(i + 1),
                    t2 = i2.text();
                if (t2.charAt(0) === '_') {
                    var l1 = i1.parent();
                    l1.append('<ul class="sub-menu m-sub"/>');
                }
            }
            if (t1.charAt(0) === '_') {
                i1.text(t1.replace('_', ''));
                i1.parent().appendTo(l1.children('.sub-menu'));
            }
        }
        for (var i = 0; i < iLen; i++) {
            var i3 = iTms.eq(i),
                t3 = i3.text();
            if (t3.charAt(0) !== '_') {
                var i4 = iTms.eq(i + 1),
                    t4 = i4.text();
                if (t4.charAt(0) === '_') {
                    var l2 = i3.parent();
                    l2.append('<ul class="sub-menu2 m-sub"/>');
                }
            }
            if (t3.charAt(0) === '_') {
                i3.text(t3.replace('_', ''));
                i3.parent().appendTo(l2.children('.sub-menu2'));
            }
        }
        $('#main-menu ul li ul').parent('li').addClass('has-sub');
        $('#main-menu .widget').addClass('show-menu');
    });
    $('#main-menu-nav').clone().appendTo('.mobile-menu');
    $('.mobile-menu .has-sub').append('<div class="submenu-toggle"/>');
    $('.slide-menu-toggle').on('click', function() {
        $('body').toggleClass('nav-active');
        $('.overlay').fadeToggle(170);
    });
    $('.mobile-menu ul li .submenu-toggle').on('click', function($this) {
        if ($(this).parent().hasClass('has-sub')) {
            $this.preventDefault();
            if (!$(this).parent().hasClass('show')) {
                $(this).parent().addClass('show').children('.m-sub').slideToggle(170);
            } else {
                $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170);
            }
        }
    });
    $('.show-search, .show-mobile-search').on('click', function() {
        $('#nav-search, .mobile-search-form').fadeIn(250).find('input').focus();
    });
    $('.hide-search, .hide-mobile-search').on('click', function() {
        $('#nav-search, .mobile-search-form').fadeOut(250).find('input').blur();
    });
    $('.Label a, a.b-label').attr('href', function($this, href) {
        return href.replace(href, href + '?&max-results=' + postPerPage);
    });
    $('.avatar-image-container img').attr('src', function($this, i) {
        i = i.replace('/s35-c/', '/s45-c/');
        i = i.replace('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png');
        return i;
    });
    $('.index-post .post-image-link img').attr('src', function($this, i) {
        i = i.replace('https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png', noThumbnail);
        return i;
    });
    $('.back-top').each(function() {
        var $this = $(this);
        $(window).on('scroll', function() {
            $(this).scrollTop() >= 100 ? $this.fadeIn(250) : $this.fadeOut(250)
        }), $this.click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        });
    });
   });
    function post_image(feed, i) {
        var n = feed[i].title.$t,
            p = feed[i].content.$t;
        if ('media$thumbnail' in feed[i]) {
            var src = feed[i].media$thumbnail.url,
                s1 = src.replace('/s72-c', '/w640'),
                s2 = src.replace('/s72-c', '/w280'),
                s3 = src.replace('/s72-c', '/w100');
            if (p.indexOf('youtube.com/embed') > -1) {
                s1 = src.replace('/default.', '/hqdefault.');
                s2 = src.replace('/default.', '/mqdefault.');
                s3 = src;
            }
        } else {
            s1 = noThumbnail;
            s2 = noThumbnail.replace('/s680', '/w280');
            s3 = noThumbnail.replace('/s680', '/w100');
        }
        var i1 = '<img class="post-thumb" alt="' + n + '" src="' + s1 + '"/>',
            i2 = '<img class="post-thumb" alt="' + n + '" src="' + s2 + '"/>',
            i3 = '<img class="post-thumb" alt="' + n + '" src="' + s3 + '"/>',
            code = [i1, i2, i3];
        return code;
    };
