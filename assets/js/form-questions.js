!function(t) {
    var e = {};
    function n(o) {
        if (e[o])
            return e[o].exports;
        var i = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                n.d(o, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return o
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 2)
}({
    2: function(t, e) {
        function n(t, e) {
            var n = setInterval((function() {
                var o = t.split(":")
                  , i = parseInt(o[0], 10)
                  , r = parseInt(o[1], 10)
                  , a = parseInt(o[2], 10);
                r = --a < 0 && 0 !== r ? --r : r,
                r = a < 0 && r <= 0 ? 59 : r,
                a = (a = a < 0 ? 59 : a) < 10 ? "0" + a : a,
                i = 59 == (r = r < 10 ? "0" + r : r) && 59 == a ? --i : i,
                e.html("0" + i + ":" + r + ":" + a),
                r < 0 && clearInterval(n),
                0 == i && 0 == a && 0 == r && clearInterval(n),
                t = i + ":" + r + ":" + a
            }
            ), 1e3)
        }
        jQuery(document).ready((function(t) {
            var e = new URLSearchParams(document.location.search)
              , o = e.get("platform_redirect_url")
              , i = parseInt(e.get("platform_redirect_second"));
            o && i && setTimeout((function() {
                window.location = o
            }
            ), 1e3 * i),
            t("#calculationForm").submit((function(e) {
                e.preventDefault();
                var n = t("#numberInput").val().trim();
                if (isNaN(n))
                    t("#result").text("Invalid input. Please enter a valid number.");
                else {
                    var o = 1.785 * parseFloat(n);
                    t("#result").text(o.toFixed(3))
                }
            }
            )),
            setTimeout((function() {
                t(".non-branded-popup").addClass("show")
            }
            ), 1e4),
            t(".non-branded-close").on("click", (function() {
                t(this).parents(".non-branded-popup").removeClass("show")
            }
            )),
            t(".timer-countdown").length > 0 && n("2:00:01", t(".timer-countdown"));
            var r = t("[data-timer-countdown]");
            r.length > 0 && n(r.data("timer-countdown"), r);
            t(window).scroll((function() {
                t("#cta-button").length > 0 && (t(window).scrollTop() > t("#cta-button").position().top + t(window).height() / 1.3 ? t(".sticky-this-mobile").addClass("cta-sticky") : t(".sticky-this-mobile").removeClass("cta-sticky"))
            }
            )),
            t(window).scroll((function() {
                t("#bitcoin-sticky-button").length > 0 && (t(window).scrollTop() > t("#bitcoin-sticky-button").position().top ? t(".sticky-this-mobile").addClass("cta-sticky") : t(".sticky-this-mobile").removeClass("cta-sticky"))
            }
            )),
            t("#waiting-people").text(Math.floor(160 * Math.random() + 210)),
            t("#show-comment").click((function() {
                t(".hide-comment").css("display", "block"),
                t(this).css("display", "none")
            }
            ));
            var a = location.href
              , s = a.split("?");
            t(".button").click((function() {
                switch (t(this)[0].parentNode.classList[0]) {
                case "question1":
                    t(".question1").hide(),
                    t(".question2").show();
                    break;
                case "question2":
                    t(".question2").hide(),
                    t(".question3").show();
                    break;
                case "question3":
                    t(".question3").hide(),
                    t(".lastStep").show(),
                    t(".loader_container").show(),
                    setTimeout((function() {
                        t(".loader_container").show(),
                        t(".analyze").hide(),
                        t(".lastStep .search").show(),
                        setTimeout((function() {
                            t(".lastStep .search").hide(),
                            t(".congratulation").show(),
                            setTimeout((function() {
                                t(".congratulation").hide(),
                                void 0 !== s && a.indexOf("?") > -1 ? window.location.href = "/abdullah-mosleh/?" + s[1] : window.location.href = "/abdullah-mosleh/"
                            }
                            ), 4e3)
                        }
                        ), 2e3)
                    }
                    ), 2e3)
                }
            }
            ))
        }
        )),
        jQuery(".hide-column-btn a").click((function(t) {
            t.preventDefault(),
            jQuery(".hidden-column").css("display", "none"),
            jQuery(".show-form").css("display", "flex")
        }
        )),
        jQuery(".trigger-form").click((function(t) {
            t.preventDefault(),
            jQuery(".fixed-form-section").addClass("show")
        }
        )),
        jQuery(".close-icon").click((function(t) {
            t.preventDefault(),
            jQuery(".fixed-form-section").removeClass("show")
        }
        ));
        var o, i = function() {
            var t = document.getElementById("timer");
            if (t) {
                var e = parseInt(t.textContent);
                !isNaN(e) && e > 0 ? (e--,
                t.textContent = e + " ثواني") : clearInterval(o)
            }
        };
        document.addEventListener("DOMContentLoaded", (function() {
            o = setInterval(i, 1e3)
        }
        ))
    }
});
