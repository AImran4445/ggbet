window.onload = function() {
    var s, e = $("html"),
        n = $(".preloader"),
        t = $(".curr_lang"),
        o = $("#wheel-spinner").data("path"),
        a = localStorage.lang,
        l = ["en", "de", "ru", "pl", "no", "dk", "cz", "ro", "ee", "lv", "lt", "el", "hu", "jp", "pt", "es", "th", "vi"],
        c = new URLSearchParams(window.location.search).get("lang"),
        r = (new URLSearchParams(window.location.search).get("cc") || "").toLowerCase(),
        i = new URLSearchParams(window.location.search).get("pop"),
        d = $(".popup_overlay"),
        _ = $("#popup_window_1"),
        u = $("#popup_window_2"),
        h = $("#popup_window_3");
    if ("on" === i && (_.fadeIn(), d.fadeIn()), "en" === a || "en" === c || !a) {
        for (s = 0; s < l.length; s++) e.removeClass(l[s]);
        e.addClass("en"), a = "en"
    }
    if ("ru" === a || "ru" === c || !a) {
        for (s = 0; s < l.length; s++) e.removeClass(l[s]);
        e.addClass("ru"), a = "ru"
    }
    for (p = 0; p < l.length; p++)
        if (a === l[p] || c === l[p]) {
            for (s = 0; s < l.length; s++) e.removeClass(l[s]);
            e.addClass(l[p]), a = l[p]
        }
    for (var g = 0, p = 0; p < l.length; p++) a === l[p] && (g = 1);
    if (0 === g && (e.addClass("en"), a = "en"), "cl" === r && "es" === a) {
        for (s = 0; s < l.length; s++) e.removeClass(l[s]);
        e.addClass("es cur_cl")
    }
    if ("ar" === r && "es" === a) {
        for (s = 0; s < l.length; s++) e.removeClass(l[s]);
        e.addClass("es cur_ar")
    }
    if ("pe" === r && "es" === a) {
        for (s = 0; s < l.length; s++) e.removeClass(l[s]);
        e.addClass("es cur_pe")
    }
    if ("br" === r && "pt" === a) {
        for (s = 0; s < l.length; s++) e.removeClass(l[s]);
        e.addClass("pt cur_br")
    }
    if ("ph" === r && "en" === a) {
        for (s = 0; s < l.length; s++) e.removeClass(l[s]);
        e.addClass("en cur_ph")
    }
    document.getElementById("wheel-spinner-img").src = o + "/wheel-" + a + ".png", l.forEach(function(s) {
        e.removeClass(s).addClass(a)
    }), $('.lang_list_item[data-lang="' + a + '"]').addClass("curr").siblings().removeClass("curr"), t.html($('.lang_list_item[data-lang="' + a + '"]').html()), setTimeout(function() {
        n.fadeOut(), setTimeout(function() {
            e.addClass("hide")
        }, 200)
    }, 200);
    var f = $(".wheel_btn"),
        m = $(".wheel_spinner");
    f.click(function() {
        f.hasClass("spin") && (f.removeClass("spin").addClass("disabled"), m.addClass("wheel_spinner_animated_1").removeClass("wheel_spinner_animated"), setTimeout(function() {
            localStorage.currentSpin = "94284_spin", $(".bonus_1").fadeIn(), d.fadeIn(), u.fadeIn()
        }, 4500))
    }), "94284_spin" === localStorage.currentSpin && ($(".bonus_1").fadeIn(), d.fadeIn(), u.fadeIn(), m.removeClass("wheel_spinner_animated").css("transform", "rotate(675deg)"), f.removeClass("spin").addClass("disabled")), "94284_game_2" === localStorage.is_game_2 && (d.fadeIn(), u.fadeIn(), $("#game_1").css("display", "none"), $("#game_2").css("display", "block"), $(".bonus_1").fadeIn(), _.css("display", "none")), "94284_true" === localStorage.pre_final_step && (_.css("display", "none"), u.css("display", "none"), d.css("display", "none"), $("#game_1").css("display", "none"), $("#game_2").css("display", "block"), $(".bonus_1").fadeIn()), "94284_true" === localStorage.final_step && (localStorage.is_game_2 = "", localStorage.currentSpin = "", d.fadeIn(), h.fadeIn(), _.css("display", "none"), u.css("display", "none"), $("#game_1").css("display", "none"), $("#game_2").css("display", "block"), $(".bonus_1").fadeIn(), $(".bonus_2").fadeIn()), "true" === localStorage.scratch_1_bonus_94284 && $("#scratch_1").addClass("used").siblings().addClass("scratch_outer_second_bonus"), "true" === localStorage.scratch_2_bonus_94284 && $("#scratch_2").addClass("used").siblings().addClass("scratch_outer_second_bonus"), "true" === localStorage.scratch_3_bonus_94284 && $("#scratch_3").addClass("used").siblings().addClass("scratch_outer_second_bonus"), "true" === localStorage.scratch_4_bonus_94284 && $("#scratch_4").addClass("used").siblings().addClass("scratch_outer_second_bonus");
    var C = $(".lang_switcher"),
        b = $(".lang_list"),
        r = $(".lang_list_item");
    C.click(function() {
        b.toggleClass("act")
    }), r.click(function() {
        n.fadeIn(), e.removeClass("hide"), setTimeout(function() {
            n.fadeOut(), e.addClass("hide")
        }, 200);
        var s = $(this).data("lang"),
            a = $(".lang_list_item").map(function(s, a) {
                return $(a).data("lang")
            }).toArray().join(" ");
        e.removeClass(a).addClass(s), localStorage.lang = s, $('.lang_list_item[data-lang="' + s + '"]').addClass("curr").siblings().removeClass("curr"), t.html($(this).html()), document.getElementById("wheel-spinner-img").src = o + "/wheel-" + s + ".png"
    }), $(document).mouseup(function(s) {
        C.is(s.target) || 0 !== C.has(s.target).length || b.removeClass("act")
    }), $("#popup_btn_1").click(function() {
        _.fadeOut(), d.fadeOut()
    }), $("#popup_btn_2").click(function() {
        u.fadeOut(), d.fadeOut(), $("#popup_window_2").fadeOut(), $("#game_1").css("display", "none"), $("#game_2").css("display", "block"), localStorage.is_game_2 = "94284_game_2"
    }), $(".scratch_outer").mouseenter(function() {
        $(this).addClass("scratch_outer_hover")
    }), $(".scratch_outer").mouseleave(function() {
        $(this).removeClass("scratch_outer_hover"), $(this).find(".scratch_hover").addClass("scratch_hover_mouseleave")
    }), $(".scratch_outer").click(function() {
        $(this).addClass("scratch_outer_action_1");
        var s = $(this).find(".scratch_action").attr("src") + "?a=" + Math.random();
        $(this).find(".scratch_action").attr("src", s), _.css("display", "none"), u.css("display", "none"), localStorage.is_game_2 = "", localStorage.currentSpin = "", localStorage.pre_final_step = "94284_true", $(this).siblings().addClass("scratch_outer_second_bonus"), $(this).hasClass("scratch_outer_second_bonus") && ($(this).css("pointer-events", "none").siblings().css("pointer-events", "none"), setTimeout(function() {
            $(".bonus_2").fadeIn(), d.fadeIn(), h.fadeIn()
        }, 1500), localStorage.final_step = "94284_true")
    }), $("#scratch_1").click(function() {
        localStorage.scratch_1_bonus_94284 = "true"
    }), $("#scratch_2").click(function() {
        localStorage.scratch_2_bonus_94284 = "true"
    }), $("#scratch_3").click(function() {
        localStorage.scratch_3_bonus_94284 = "true"
    }), $("#scratch_4").click(function() {
        localStorage.scratch_4_bonus_94284 = "true"
    })
};