
jQuery(function (a) {
    (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && "use strict", a(".kswr-row-element-back").each(function () {
      var b = a(this).children(".kswr-row-ver-separator-container-top"),
        c = a(this).children(".kswr-row-ver-separator-container-bottom");
      a(this).children(".kswr-row-ver-separator-container").remove();
      var d = a(this).attr("style"),
        e = a(this)[0].outerHTML,
        f = a(this).attr("data-classes");
      a(this).prevAll("div.vc_row:first").addClass(f).prepend(e), 0 < b.length && a(b[0].outerHTML).insertBefore(a(this).prevAll("div.vc_row:first")), 0 < c.length && a(c[0].outerHTML).insertAfter(a(this).prevAll("div.vc_row:first")), a(this).remove()
    }), a(".kswr-column-settings").each(function () {
      var b = a(this).attr("data-classes"),
        c = a(this).attr("data-isminheight");
      if ("on" == c) {
        var d = a(this).attr("data-minheight");
        console.log(d), a(this).prevAll("div.wpb_column:first").children(".vc_column-inner").css({
          "min-height": d
        })
      }
      a(this).prevAll("div.wpb_column:first").addClass(b), a(this).remove()
    }), a(document).ready(function () {
      a(".kswr-fancyicbox-ctn[data-3d-enabled=\"yes\"]").tilt({
        maxTilt: 20,
        perspective: 1e3,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 400,
        transition: !0,
        axis: null,
        reset: !0,
        glare: !1,
        maxGlare: 1,
        scale: 1.1
      }), a(".kswr-shape-divider").show(), a(window).load(function () {
        a(".kswr-animationblock").on("inview", function (b) {
          var c = a(this),
            d = c.attr("data-animation");
          b && c.addClass("animated " + d)
        })
      }), a("[class^=\"kswr\"] a").click(function () {
        var b = a(this).attr("href"),
          c = window.location.href;
        if (0 == b.indexOf("#") || kswr_return_url(b) + "/" === kswr_return_url(c)) return b = 0 == b.indexOf("#") ? b : "#" + kswr_return_url_tag(b), a("html, body").animate({
          scrollTop: a(b).offset().top
        }, 1e3), !1
      }), a(".syn-isotope-filter-container").each(function () {
        var b = a(this),
          c = b.attr("data-columns");
        b.find(".syn-isotope-item").each(function (b, d) {
          a(d).addClass("kswr-tr-" + (b % c + 1) + "ads")
        })
      }), a(".kswr-intcar-ctn").each(function (b, c) {
        c = a(c);
        var d = c.attr("data-nav-enabled"),
          e = c.attr("data-btn-enabled");
        c.append("<div class=\"kswr-intcar-navigation\"></div>"), "yes" == e && c.find(".kswr-intcar-navigation").append("<div class=\"kswr-intcar-btn kswr-intcar-btnnext\" onclick=\"kswr_move_slide_next(this)\"></div><div class=\"kswr-intcar-btn kswr-intcar-btnprev\" onclick=\"kswr_move_slide_previous(this,'false')\"></div>"), "yes" == d && c.find(".kswr-intcar-navigation").append("<div class=\"kswr-intcar-nav\"><div class=\"kswr-intcar-nav-ins\"><div class=\"kswr-intcar-nav-btns\"></div></div></div>");
        var f = c.attr("data-direction"),
          g = c.find(".kswr-intcar-items");
        g.css({
          "-webkit-transform": "translateX(0%)",
          transform: "translateX(0%)"
        });
        var h = c.find(".kswr-intcar-items").find(".kswr-intcar-item");
        c.attr({
          "data-slidesnumber": h.length,
          "data-currentslide": "1"
        }), 0 < h.length && h.each(function (b, e) {
          e = a(e), b += 1, 1 == b && e.css({
            left: "0%"
          }), 2 == b && e.css({
            left: "95%"
          }), e.attr("data-slide", b);
          var f = 1 == b ? "data-situation=\"active\"" : "data-situation=\"inactive\"";
          "yes" == d && c.find(".kswr-intcar-nav-btns").append("<div class=\"kswr-intcar-navbtn\" " + f + " data-slide=\"" + b + "\" onclick=\"kswr_move_slide_btn(this)\"></div>")
        }), c.find(".kswr-intcar-items").find(".kswr-intcar-item[data-slide=\"1\"]").addClass("kswr-intcar-selected")
      }), a(".kswr-intcar-items").on("mousedown", function (b) {
        var c = a(this).parents(".kswr-intcar-ctn "),
          d = parseInt(c.attr("data-slidesnumber")),
          e = c.outerWidth(),
          f = b.touches ? b.touches[0] : b,
          g = a(document).width();
        c.attr("data-moving", "yes"), jQuery(".kswr-intcar-item").removeClass("kswr-intcar-trans"), a(document).on("mouseup", function () {
          kswr_mouse_up(c)
        }), c.on("mouseup", function () {
          kswr_mouse_up(c)
        }), a(document).on("mousemove", function (a) {
          var b = a.touches ? a.touches[0] : a,
            h = parseInt(c.attr("data-currentslide")),
            i = f.screenX - b.screenX;
          if (f.screenX > b.screenX && "yes" == c.attr("data-moving")) {
            c.attr({
              "data-moving-direction": "left"
            });
            var j = h,
              k = h == d ? 1 : j + 1,
              l = 95 * e / 100 - i,
              m = c.find(".kswr-intcar-item[data-slide=\"" + j + "\"]"),
              n = c.find(".kswr-intcar-item[data-slide=\"" + k + "\"]"),
              o = c.find(".kswr-intcar-item[data-slide=\"" + (k + 1) + "\"]"),
              p = (g - m.offset().left) / (e + 100),
              q = (g - m.offset().left) / e,
              r = (f.screenX - b.screenX) / 20;
            if (n.offset().left - c.offset().left < 32 * e / 100) c.attr("data-moving", "no"), kswr_move_slide_next(m), kswr_mouse_up(c), c.attr({
              "data-moving-direction": "none"
            });
            else {
              m.css({
                "z-index": "2",
                left: i / 2.3 + "px",
                opacity: p,
                transform: "perspective(1000px) scale(" + q + ") rotateY(" + r + "deg)  translateZ(0)"
              }), n.css({
                left: l + "px"
              });
              var s = parseInt(185 * e / 100) - (o.outerWidth() - l);
              o.css({
                left: s + "px"
              })
            }
          } else {
            c.attr({
              "data-moving-direction": "right"
            });
            var j = h,
              t = 1 == h ? d : j - 1,
              u = h == d ? 1 : j + 1,
              v = c.find(".kswr-intcar-item[data-slide=\"" + j + "\"]"),
              w = c.find(".kswr-intcar-item[data-slide=\"" + t + "\"]"),
              x = c.find(".kswr-intcar-item[data-slide=\"" + u + "\"]"),
              y = b.screenX - f.screenX,
              z = 1 - (g - 1.3 * v.offset().left) / (e + 100),
              A = 1 - (g - 1.3 * v.offset().left) / e,
              B = (e + (f.screenX - b.screenX)) / 4,
              C = 40 - parseInt((b.screenX - f.screenX) / 20),
              D = 0 > C ? 0 : C,
              q = 1 < A ? 1 : A,
              E = 0 > B ? 0 : B,
              p = 0 > z ? 0 : z;
            v.offset().left - c.offset().left > 50 * e / 100 ? (c.attr("data-moving", "no"), kswr_move_slide_previous(v, "true"), kswr_mouse_up(c), c.attr({
              "data-moving-direction": "none"
            })) : (v.css({
              left: y + "px"
            }), x.css({
              left: 95 * e / 100 + y + "px"
            }), w.css({
              "z-index": "2",
              "-webkit-transform": "perspective(1000px) scale(" + q + ") rotateY(" + D + ") translateZ(0)",
              transform: "perspective(1000px) scale(" + q + ") rotateY(" + D + "deg) translateZ(0)",
              opacity: p,
              left: E + "px"
            }))
          }
        })
      }), a("[data-tilt]").tilt({
        maxTilt: 20,
        perspective: 1e3,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: 1,
        speed: 100,
        transition: !0,
        axis: null,
        reset: !0,
        glare: !1,
        maxGlare: 1
      }), a(".syn-parallaxf-container").on("mousemove", function (b) {
        var c = a(this),
          d = c.offset(),
          e = 100 * (b.pageX - d.left) / c.width(),
          f = 100 * (b.pageY - d.top) / c.height(),
          g = c.find(".syn-parallaxf-item[data-parallax-move=\"enabled\"]");
        g.each(function (b, c) {
          var c = a(c),
            d = c.attr("data-parallax-sensitive");
          (a.trim(d) == null || "" == a.trim(d)) && (d = 1), c.css({
            "-webkit-transform": "translate(" + e * -d + "px, " + f * -d + "px)",
            transform: "translate(" + e * -d + "px, " + f * -d + "px)"
          })
        })
      }), a(".syn-hotspot-container").find(".syn-hotspot-insider").sayenhotspot(), a(".km-twentytwenty-container[data-orientation!='vertical']").twentytwenty(), a(".km-twentytwenty-container[data-orientation='vertical']").twentytwenty({
        orientation: "vertical"
      }), kmfc7_svg_adder_plugin(), a(".kswr-countdown-container").each(function () {
        var b = a(this).attr("data-deadline"),
          c = a(this),
          d = a(this).attr("data-countdown");
        kswr_countdown_elements(d);
        countdown(new Date(Date.parse(b.replace(/-/g, "/"))), function (a) {
          kswr_countdown_updater(c, a)
        }, kswr_countdown_elements(d))
      }), a(".km-item-bind-view").bind("inview", function (b) {
        b ? a(this).removeClass("km-item-bind-hidden").addClass("km-item-bind-shown") : a(this).unbind("inview")
      }), a(".kswr-vc-ctn-element-reaveal").bind("inview", function (b) {
        if (b) {
          var c = a(this),
            d = c.attr("data-hold");
          setTimeout(function () {
            c.attr({
              "data-content-animated": "yes"
            })
          }, 1e3 * (d - .2)), c.attr({
            "data-reveal-animated": "yes"
          })
        } else a(this).unbind("inview")
      }), kswr_animationblock_trigger(), a(".kswr-situation-bind").bind("inview", function (b) {
        var c = a(this);
        if (b) {
          var d = c.attr("data-delay");
          typeof d != typeof void 0 && !1 !== d ? setTimeout(function () {
            c.attr({
              "data-situation": "shown"
            })
          }, d) : c.attr({
            "data-situation": "shown"
          })
        } else a(this).unbind("inview")
      }), 930 >= a(window).width() && a(".pp-tableCell").addClass("ppkswr-responsive"), a(".kswr-piling-container").each(function () {
        var b = a(this);
        b.find(".vc_row").css({
          width: b.parents(".vc_row").width(),
          margin: "auto"
        });
        var c = parseInt(b.attr("data-speed")),
          d = sayen_elements_to_bool(b.attr("data-css3")),
          e = sayen_elements_to_bool(b.attr("data-looptop")),
          f = sayen_elements_to_bool(b.attr("data-loopbottom")),
          g = b.attr("data-navbulletcolor"),
          h = b.attr("data-navbulletcoloractive"),
          i = b.attr("data-navtooltipcolor"),
          j = b.attr("data-navposition"),
          k = b.attr("data-nav-style"),
          l = b.attr("data-nav-bg"),
          m = b.attr("data-nav-bxsh-enabled"),
          n = b.attr("data-nav-bxsh"),
          o = b.attr("data-navradius"),
          p = b.attr("data-transanimation"),
          q = sayen_elements_to_bool(b.attr("data-verticalcentered")),
          r = [];
        b.children(".kswr-piling-section").each(function () {
          "" != a.trim(a(this).attr("data-tooltip")) && r.push(a(this).attr("data-tooltip"))
        }), b.pagepiling({
          verticalCentered: q,
          scrollingSpeed: c,
          easing: "swing",
          loopBottom: f,
          loopTop: e,
          css3: d,
          navigation: {
            position: j,
            tooltips: r
          },
          normalScrollElements: ".pp-tableCell.ppkswr-responsive",
          animateAnchor: !0,
          touchSensitivity: 5,
          keyboardScrolling: !0,
          sectionSelector: ".kswr-piling-section",
          onLeave: function (a, c, d) {
            var e = b.children(".kswr-piling-section:nth-of-type(" + a + ")"),
              f = b.children(".kswr-piling-section:nth-of-type(" + c + ")"),
              g = b.children(".kswr-piling-section:nth-of-type(" + parseInt(a - 1) + ")");
            "down" == d && ("normal" == p && (f.addClass("no-transition").css({
              transform: "translate3d(0px, 0px, 0px)",
              "-webkit-transform": "translate3d(0px, 0px, 0px)"
            }), b.children(".kswr-piling-section:not(.kswr-piling-section:nth-of-type(" + c + "))").removeClass("no-transition").css({
              transform: "translate3d(0px, -100%, 0px)",
              "-webkit-transform": "translate3d(0px, -100%, 0px)"
            })), "scale" == p && (f.addClass("no-transition").css({
              transform: "translate3d(0px, 0px, 0px) scale(1)",
              "-webkit-transform": "translate3d(0px, 0px, 0px) scale(1)"
            }), b.children(".kswr-piling-section:not(.kswr-piling-section:nth-of-type(" + c + "))").removeClass("no-transition").css({
              transform: "translate3d(0px, -100%, 0px) scale(.85)",
              "-webkit-transform": "translate3d(0px, -100%, 0px) scale(.85)"
            })), "modern" == p && (e.attr({
              style: "transform:scale(.85) !important;-webkit-transform:scale(.85) !important; z-index:1!important; transform-origin: center bottom !important;"
            }), f.attr({
              style: "z-index:2!important; transform:translate3d(0px, 0px, 0px)!important;-webkit-transform: translate3d(0px, 0px, 0px)!important; "
            })), "parallax" == p && (f.removeClass("small-transition").attr({
              style: "z-index:2!important; transform:translate3d(0px, 0px, 0px)!important;-webkit-transform: translate3d(0px, 0px, 0px)!important; "
            }), e.addClass("small-transition").attr({
              style: "transform:translate3d(0px, -70%, 0px)!important;-webkit-transform:translate3d(0px, -70%, 0px)!important; z-index:1!important;"
            }))), "up" == d && ("normal" == p && f.css({
              transform: "translate3d(0px, 0px, 0px)",
              "-webkit-transform": "translate3d(0px, 0px, 0px)"
            }), "scale" == p && f.css({
              transform: "translate3d(0px, 0px, 0px) scale(1)",
              "-webkit-transform": "translate3d(0px, 0px, 0px) scale(1)"
            }), "parallax" == p && (f.removeClass("small-transition").attr({
              style: "z-index:2!important; transform:translate3d(0px, 0%, 0px)!important;-webkit-transform:translate3d(0px, 0%, 0px)!important;"
            }), e.addClass("small-transition").attr({
              style: " z-index:1!important; transform::translate3d(0px, 70%, 0px)!important;-webkit-transform:translate3d(0px, 70%, 0px)!important;"
            })), "modern" == p && (f.attr({
              style: "z-index:2!important; transform:translate3d(0px, 0px, 0px)!important;-webkit-transform: translate3d(0px, 0px, 0px)!important;"
            }), e.attr({
              style: " z-index:1!important; transform:scale(.85) !important;-webkit-transform:scale(.85) !important; transform-origin: center top!important;"
            }))), kswr_reanimate_block(g), kswr_reanimate_block(f)
          },
          afterLoad: function (a, c) {
            var d = b.children(".kswr-piling-section:nth-of-type(" + c + ")"),
              e = b.children(".kswr-piling-section:nth-of-type(" + parseInt(c - 1) + ")"),
              f = b.children(".kswr-piling-section:nth-of-type(" + parseInt(c + 1) + ")");
            "normal" == p && (d.addClass("no-transition").css({
              transform: "translate3d(0px, 0px, 0px)",
              "-webkit-transform": "translate3d(0px, 0px, 0px)"
            }), b.children(".kswr-piling-section:not(.kswr-piling-section:nth-of-type(" + c + "))").removeClass("no-transition").css({
              transform: "translate3d(0px, -100%, 0px)",
              "-webkit-transform": "translate3d(0px, -100%, 0px)"
            })), "modern" == p && (e.attr({
              style: " z-index:1!important; transform:translate3d(0px, -100%, 0px) scale(1) !important;-webkit-transform:translate3d(0px, -100%, 0px) scale(1) !important; "
            }), f.attr({
              style: " z-index:1!important; transform:translate3d(0px, 100%, 0px) scale(1) !important;-webkit-transform:translate3d(0px, 100%, 0px) scale(1) !important;"
            })), "parallax" == p && (e.removeClass("small-transition").attr({
              style: " z-index:1!important; transform:translate3d(0px, -100%, 0px)!important;-webkit-transform:translate3d(0px, -100%, 0px)!important; "
            }), f.removeClass("small-transition").attr({
              style: " z-index:1!important; transform:translate3d(0px, 100%, 0px)!important;-webkit-transform:translate3d(0px, 100%, 0px)!important;"
            }))
          },
          afterRender: function () {}
        }), a("#pp-nav").addClass("kswr-nav-fscreen"), a("#pp-nav").attr({
          style: "background:" + l + ";--nav-blt-clr:" + g + ";--nav-blt-clr-actv:" + h + ";--box-shadow:" + n + ";"
        }), a("#pp-nav").attr({
          "data-radius": o,
          "data-nav-style": k,
          "data-box-shadow-enabled": m
        })
      }), a(window).scroll(function () {
        kswr_animationblock_trigger(), a(".kswr-row-parallax[data-parallaxtype=\"vertical_prlx\"] .kswr-element-back-overlay, .kswr-row-parallax[data-parallaxtype=\"horizontal_prlx\"] .kswr-element-back-overlay").each(function () {
          var b = a(this).parent(".kswr-row-parallax"),
            c = a(this),
            d = b.attr("data-parallaxtype"),
            e = b.attr("data-parallaxspeed"),
            f = window.pageYOffset,
            g = c.css("backgroundPosition").split(" "),
            h = b.visible("partial");
          if ("vertical_prlx" == a.trim(d)) {
            ("" == b.attr("data-ypos-start") || b.attr("data-ypos-start") == null) && b.attr("data-ypos-start", g[1]);
            var i = parseFloat(g[1]) * parseFloat(b.css("height")) / 100;
            ("" == b.attr("data-ypos") || b.attr("data-ypos") == null) && b.attr("data-ypos", i), "100%" == g[1] && (i = -i);
            var j = window.pageYOffset * +e - parseFloat(b.attr("data-ypos")) + "px";
            "0%" == b.attr("data-ypos-start") && (j = parseFloat(b.attr("data-ypos")) - window.pageYOffset * +e + "px"), "50%" == b.attr("data-ypos-start") && (j = "calc(50% + " + window.pageYOffset * +e + "px)"), c.css("background-position-y", j)
          }
          if ("horizontal_prlx" == a.trim(d)) {
            ("" == b.attr("data-xpos-start") || null == b.attr("data-xpos-start")) && b.attr("data-xpos-start", g[0]);
            var k = parseFloat(g[0]) * parseFloat(b.css("width")) / 100;
            ("" == b.attr("data-xpos") || null == b.attr("data-xpos")) && b.attr("data-xpos", k), "100%" == g[0] && (k = -k);
            var l = window.pageYOffset * +e - parseFloat(b.attr("data-xpos")) + "px";
            "0%" == b.attr("data-xpos-start") && (l = parseFloat(b.attr("data-xpos")) - window.pageYOffset * +e + "px"), "50%" == b.attr("data-xpos-start") && (l = "calc(50% - " + .5 * (window.pageYOffset * +e) + "px)"), c.css("background-position-x", l)
          }
        }), kswr_row_back_anim()
      }), a(".kswr-row-parallax[data-parallaxtype=\"vertical_move\"] .kswr-element-back-overlay, .kswr-row-parallax[data-parallaxtype=\"horizontal_move\"] .kswr-element-back-overlay").each(function () {
        var b = a(this).parent(".kswr-row-parallax"),
          c = a(this),
          d = b.attr("data-parallaxtype"),
          e = b.attr("data-parallaxautospeed");
        e = 100 - e;
        var f = 0;
        if ("horizontal_move" == a.trim(d)) {
          var g = b.attr("data-horizmoveto");
          setInterval(function () {
            "left" == g ? f -= 1 : f += 1, c.css("background-position-x", f + "px")
          }, e)
        }
        if ("vertical_move" == a.trim(d)) {
          var g = b.attr("data-vertmoveto");
          setInterval(function () {
            "top" == g ? f -= 1 : f += 1, c.css("background-position-y", f + "px")
          }, e)
        }
      }), a(".vc_row").mousemove(function (b) {
        var c = a(this).find(".kswr-row-parallax[data-parallaxtype=\"follow_mouse\"] .kswr-row-parallax-followmouse"),
          d = c.children(".kswr-element-back-overlay");
        if (c != null && "" != c) {
          (c.attr("data-theX") == null || "" == c.attr("data-theX")) && c.attr("data-theX", d.css("background-position-x")), (c.attr("data-theY") == null || "" == c.attr("data-theY")) && c.attr("data-theY", d.css("background-position-y"));
          var e = c.attr("data-theX"),
            f = c.attr("data-theY"),
            g = 50,
            h = g / a(window).height(),
            i = g / a(window).width(),
            j = b.pageX - a(window).width() / 2,
            k = b.pageY - a(window).height() / 2;
          e != null && f != null && d.css("background-position", "calc(" + e + " + " + (-1 * (i * j) - 25) + "px) calc(" + f + " + " + (-1 * (h * k) - 50) + "px)")
        }
      }), a(".kswr-slickslider-container").each(function () {
        var b = a(this).attr("data-vertical"),
          c = a(this).attr("data-slidestoshow-desk"),
          d = a(this).attr("data-slidestoscroll-desk"),
          e = a(this).attr("data-slidestoshow-tablet"),
          f = a(this).attr("data-slidestoscroll-tablet"),
          g = a(this).attr("data-slidestoshow-mobile"),
          h = a(this).attr("data-slidestoscroll-mobile"),
          i = a(this).attr("data-speed"),
          j = kswr_return_bool(a(this).attr("data-infinite")),
          k = kswr_return_bool(a(this).attr("data-autoplay")),
          l = a(this).attr("data-autoplayspeed"),
          m = kswr_return_bool(a(this).attr("data-adaptiveheight")),
          n = kswr_return_bool(a(this).attr("data-centermode")),
          o = a(this).attr("data-centerpadding"),
          p = a(this).attr("data-centerpaddingtablet"),
          q = a(this).attr("data-centerpaddingmobile"),
          r = kswr_return_bool(a(this).attr("data-dots")),
          s = kswr_return_bool(a(this).attr("data-arrows")),
          t = a(this).attr("data-tabletbreakpoint"),
          u = a(this).attr("data-phonebreakpoint");
        a(this).slick({
          prevArrow: "<div class=\"slick-prev pull-left\"><div class=\"slick-btn-arrow\"></div></div>",
          nextArrow: "<div class=\"slick-next pull-right\"><div class=\"slick-btn-arrow\"></div></div>",
          slidesToShow: parseInt(c),
          slidesToScroll: parseInt(d),
          speed: parseInt(i),
          infinite: j,
          dots: r,
          arrows: s,
          autoplay: k,
          autoplaySpeed: parseInt(l),
          adaptiveHeight: m,
          centerMode: n,
          centerPadding: o,
          responsive: [{
            breakpoint: parseInt(u),
            settings: {
              slidesToShow: parseInt(g),
              centerPadding: q,
              slidesToScroll: parseInt(h)
            }
          }],
          responsive: [{
            breakpoint: parseInt(t),
            settings: {
              slidesToShow: parseInt(e),
              centerPadding: p,
              slidesToScroll: parseInt(f)
            }
          }]
        })
      }), a(window).keydown(function (a) {
        27 == a.keyCode && kswr_close_modalwindow(event)
      }), a(".kswr-imcgal-container").each(function () {
        var b = a(this);
        b.find(".kswr-imcgal-fakeone").html(b.find(".kswr-imcgal-item:first-of-type").html())
      }), a(".kswr-fancytext").each(function () {
        var b = a(this),
          c = b.attr("data-style"),
          d = {
            content: ""
          };
        "" != a.trim(b.attr("data-words")) && (d = JSON.parse(b.attr("data-words")));
        var e = [];
        for (var f in d) "" != a.trim(d[f]) && e.push({
          content: d[f]
        });
        var g = {
          cursor: kswr_return_bool(b.attr("data-cursor")),
          holdTime: b.attr("data-holdtime"),
          words: e
        };
        "typing" == a.trim(c) && (g.typing = !0, g.typeSpeed = b.attr("data-typespeed"), g.typeAnimation = b.attr("data-typeanimation")), a(this).sayenft(g)
      }), jQuery(".kswr-vc-ctn-element[data-ctn-animation=\"enabled\"][data-ctn-animated=\"no\"]").on("inview", function (b) {
        var c = a(this);
        b && c.attr("data-ctn-animated", "yes")
      }), a(".kswr-counter-value,.kswr-counter").bind("inview", function (b) {
        if (b) {
          var c = a(this);
          if ("done" != c.attr("data-done")) {
            var d = {
              endVal: c.attr("data-endVal"),
              options: {
                separator: c.attr("data-separator"),
                decimal: c.attr("data-decimal"),
                duration: c.attr("data-duration")
              }
            };
            c.kaswaracount(d), c.attr("data-done", "done")
          }
        } else a(this).unbind("inview")
      }), a(".kswr-vsklbr-container").bind("inview", function (b) {
        if (b) {
          var c = a(this).attr("data-percent");
          a(this).find(".kswr-vsklbr-bar-value").animate({
            height: c + "%"
          }, 1)
        } else a(this).unbind("inview")
      });
      var b = a(".syn-isotope-container");
      b.each(function (b, c) {
        var c = a(c);
        sayen_isotope_options(c)
      }), a(".km-progressbar-container").bind("inview", function (b) {
        if (b) {
          var c = a(this).attr("data-percent"),
            d = a(this).attr("data-style");
          "style_1" == d && a(this).find(".km-progressbar-tooltip").css({
            left: "calc( " + c + "% - 35px )"
          }), a(this).find(".km-progressbar-thebar").css({
            width: c + "%"
          })
        } else a(this).unbind("inview")
      }), a(".km-radial-progressbar").bind("inview", function (b) {
        var c = a(this);
        if (b) {
          setTimeout(function () {
            c.attr("data-progress", parseInt(c.attr("data-value")))
          }, 200);
          var d = 0,
            e = parseInt(c.attr("data-value")),
            f = function () {
              if (parseInt(c.find(".perc-value").html()) != e) setTimeout(function () {
                c.find(".perc-value").html(d), d < e && f(), d += 1
              }, 30)
            };
          f()
        } else a(this).unbind("inview")
      }), a(".km-line-sep-container").bind("inview", function (b) {
        b ? a(this).addClass("km-line-shown") : a(this).unbind("inview")
      });
      var c = a(".syp-items-wrapper, .syp-items-wrapper-post");
      c.each(function (b, c) {
        var c = a(c),
          d = {
            itemSelector: ".syp-item",
            transitionDuration: 0,
            percentPosition: !0,
            masonry: {
              columnWidth: ".syp-item",
              gutter: parseInt(c.attr("data-gutter"))
            }
          };
        imagesLoaded(c, function () {
          c.isotope(d), c.css({
            opacity: "1"
          })
        })
      }), a(".km-masonry-item").bind("inview", function (b) {
        b ? a(this).removeClass("km-masonry-item-hidden").addClass("km-masonry-item-shown") : a(this).unbind("inview")
      }), a(".km-filteri-items-list,.km-portfolio-loop,.syp-items-wrapper").each(function () {
        var b = a(this),
          c = b.attr("data-columns"),
          d = 0,
          e = 1,
          f = 1;
        b.children(".km-masonry-item,.portfolio-item").each(function (b) {
          b += 1, f += 2, d = "." + f + "s", a(this).css({
            "-webkit-transition": "all .4s ease-in-out " + d + ", box-shadow .3s ease-in-out",
            transition: "all .4s ease-in-out " + d + ", box-shadow .3s ease-in-out"
          }), b == c * e && (e += 1, f = 1)
        })
      });
      var d = a(".km-filteri-items-list");
      d.each(function (b, c) {
        var c = a(c),
          d = {
            itemSelector: ".km-filteri-item",
            transitionDuration: 0,
            percentPosition: !0,
            masonry: {
              columnWidth: ".km-filteri-item",
              gutter: 25
            }
          };
        imagesLoaded(c, function () {
          c.isotope(d), c.css({
            opacity: "1"
          })
        })
      }), a(".km-filteri-cats").children(".km-filteri-link").click(function () {
        var b = a(this),
          c = b.parent(".km-filteri-cats").next(".km-filteri-items-list, .rhs-isotope-container, .syn-isotope-container");
        b.parent(".km-filteri-cats").children(".km-filteri-link").attr({
          "data-active": "false"
        }), b.attr({
          "data-active": "true"
        });
        var d = b.attr("data-filter");
        c.isotope({
          filter: d
        })
      }), kswr_repsponsive_size_manager(), a(window).resize(function () {
        930 >= a(window).width() ? a(".pp-tableCell").addClass("ppkswr-responsive") : a(".pp-tableCell").removeClass("ppkswr-responsive"), a(".kswr-piling-container").find(".vc_row").css({
          width: a(".kswr-piling-container").parents(".vc_row").width(),
          margin: "auto"
        }), kswr_repsponsive_size_manager()
      }), sayen_isotope_show()
    })
  });
  
  
  function kswr_cards_gallery(a) {
    a = jQuery(a);
    var b = a.parent(".kswr-imcgal-insider"),
      c = b.children(".kswr-imcgal-item:first-of-type"),
      d = b.children(".kswr-imcgal-item:nth-of-type(2)");
    a.is(":first-child") || (b.addClass("changed"), setTimeout(function () {
      c.remove(), b.append(c), b.removeClass("changed")
    }, 400))
  }
  
  
  