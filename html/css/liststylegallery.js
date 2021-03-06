(function (a)
{
    var b;
    a.fn.setTransition = function (c)
    {
        b.setTransition(c)
    };
    a.fn.setTextEffect = function (c)
    {
        b.setTextEffect(c)
    };
    a.fn.setNav = function (c)
    {
        b.setNav(c)
    };
    a.fn.setListAlign = function (c)
    {
        b.setListAlign(c)
    };
    a.fn.setPlayButton = function (c)
    {
        b.setPlayButton(c)
    };
    a.fn.setNumber = function (c)
    {
        b.setNumber(c)
    };
    a.fn.setTimerBar = function (c)
    {
        b.setTimerBar(c)
    };
    a.fn.setThumbs = function (c)
    {
        b.setThumbs(c)
    };
    a.fn.setScrollbar = function (c)
    {
        b.setScrollbar(c)
    };
    a.fn.setMouseoverPause = function (c)
    {
        b.setMouseoverPause(c)
    };
    a.fn.setMouseoverCP = function (c)
    {
        b.setMouseoverCP(c)
    };
    a.fn.setMouseoverText = function (c)
    {
        b.setMouseoverText(c)
    };
    a.fn.wtListRotator = function (d)
    {
        var G = "top";
        var C = "bottom";
        var w = "left";
        var N = "right";
        var z = "TL";
        var g = "TR";
        var k = "TC";
        var O = "BL";
        var E = "BR";
        var u = "BC";
        var I = "auto_adjust";
        var y = "update_text";
        var q = "update_buttons";
        var M = "update_number";
        var B = "show_scrollbar";
        var s = "hide_scrollbar";
        var f = "update_knob";
        var r = 
        {
            fade : 0, "block.top" : 1, "block.right" : 2, "block.bottom" : 3, "block.left" : 4, "block.drop" : 5, 
            "diag.fade" : 6, "diag.exp" : 7, "rev.diag.fade" : 8, "rev.diag.exp" : 9, "block.fade" : 10, 
            "block.exp" : 11, "block.top.zz" : 12, "block.bottom.zz" : 13, "block.left.zz" : 14, "block.right.zz" : 15, 
            "spiral.in" : 16, "spiral.out" : 17, "vert.tl" : 18, "vert.tr" : 19, "vert.bl" : 20, "vert.br" : 21, 
            "fade.left" : 22, "fade.right" : 23, "alt.left" : 24, "alt.right" : 25, "blinds.left" : 26, 
            "blinds.right" : 27, "horz.tl" : 28, "horz.tr" : 29, "horz.bl" : 30, "horz.br" : 31, "fade.top" : 32, 
            "fade.bottom" : 33, "alt.top" : 34, "alt.bottom" : 35, "blinds.top" : 36, "blinds.bottom" : 37, 
            none : 38, random : 39
        };
        var o = {
            fade : 0, down : 1, right : 2, none : 3
        };
        var e = 5000;
        var x = 800;
        var l = 300;
        var L = 600;
        var D = 0.1;
        var H = 4;
        var n = 600;
        function c(S, aa, Z, ac, Y, T, U)
        {
            var V;
            var Q;
            var X;
            var ab = null;
            var ad = function ()
            {
                X = Math.ceil(aa / ac);
                var af = "";
                for (var ae = 0; ae < X; ae++) {
                    af += "<div class='vpiece' id='" + ae + "'></div>"
                }
                S.addToScreen(af);
                V = a("div.vpiece", S.$el);
                Q = new Array(X);
                V.each(function (ag)
                {
                    a(this).css({
                        left : (ag * ac), height : Z
                    });
                    Q[ag] = a(this);
                })
            };
            this.clear = function ()
            {
                clearInterval(ab);
                V.stop(true).css({
                    "z-index" : 2, opacity : 0
                })
            };
            this.displayContent = function (ae, af)
            {
                P(ae, af);
                R(ae, af)
            };
            var P = function (ae, af)
            {
                switch (af)
                {
                    case r["vert.tl"]:
                    case r["vert.tr"]:
                        W(ae, - Z, 1, ac, false);
                        break;
                    case r["vert.bl"]:
                    case r["vert.br"]:
                        W(ae, Z, 1, ac, false);
                        break;
                    case r["alt.left"]:
                    case r["alt.right"]:
                        W(ae, 0, 1, ac, true);
                        break;
                    case r["blinds.left"]:
                    case r["blinds.right"]:
                        W(ae, 0, 1, 0, false);
                        break;
                    default:
                        W(ae, 0, 0, ac, false)
                }
            };
            var W = function (ae, ak, al, ag, aj)
            {
                var an = ae.attr("src");
                var am = (Z - ae.height()) / 2;
                var af = (aa - ae.width()) / 2;
                for (var ah = 0; ah < X; ah++)
                {
                    var ai = ((-ah * ac) + af);
                    if (aj) {
                        ak = (ah % 2) == 0 ?- Z : Z
                    }
                    a(V.get(ah)).css(
                    {
                        background : Y + " url('" + an + "') no-repeat", backgroundPosition : ai + "px " + am + "px", 
                        opacity : al, top : ak, width : ag, "z-index" : 3
                    })
                }
            };
            var R = function (ag, ah)
            {
                var aj, af, ai, ae;
                switch (ah)
                {
                    case r["vert.tl"]:
                    case r["vert.bl"]:
                    case r["fade.left"]:
                    case r["blinds.left"]:
                    case r["alt.left"]:
                        aj = 0;
                        af = X - 1;
                        ai = 1;
                        break;
                    default:
                        aj = X - 1;
                        af = 0;
                        ai =- 1
                }
                ab = setInterval(function ()
                {
                    a(V.get(aj)).animate({
                        top : 0, opacity : 1, width : ac
                    },
                    T, "", function ()
                    {
                        if (a(this).attr("id") == af) {
                            S.setComplete(ag)
                        }
                    });
                    if (aj == af) {
                        clearInterval(ab)
                    }
                    aj += ai
                }, U)
            };
            ad()
        }
        function t(S, aa, Z, ac, Y, T, U)
        {
            var V;
            var Q;
            var X;
            var ab = null;
            var ad = function ()
            {
                X = Math.ceil(Z / ac);
                var af = "";
                for (var ae = 0; ae < X; ae++) {
                    af += "<div class='hpiece' id='" + ae + "'><!-- --></div>"
                }
                S.addToScreen(af);
                V = a("div.hpiece", S.$el);
                Q = new Array(X);
                V.each(function (ag)
                {
                    a(this).css({
                        top : (ag * ac), width : aa
                    });
                    Q[ag] = a(this);
                })
            };
            this.clear = function ()
            {
                clearInterval(ab);
                V.stop(true).css({
                    "z-index" : 2, opacity : 0
                })
            };
            this.displayContent = function (ae, af)
            {
                P(ae, af);
                R(ae, af)
            };
            var P = function (ae, af)
            {
                switch (af)
                {
                    case r["horz.tr"]:
                    case r["horz.br"]:
                        W(ae, aa, 1, ac, false);
                        break;
                    case r["horz.tl"]:
                    case r["horz.bl"]:
                        W(ae, - aa, 1, ac, false);
                        break;
                    case r["alt.top"]:
                    case r["alt.bottom"]:
                        W(ae, 0, 1, ac, true);
                        break;
                    case r["blinds.top"]:
                    case r["blinds.bottom"]:
                        W(ae, 0, 1, 0, false);
                        break;
                    default:
                        W(ae, 0, 0, ac, false)
                }
            };
            var W = function (ae, ah, ak, am, aj)
            {
                var an = ae.attr("src");
                var al = (Z - ae.height()) / 2;
                var af = (aa - ae.width()) / 2;
                for (var ai = 0; ai < X; ai++)
                {
                    var ag = ((-ai * ac) + al);
                    if (aj) {
                        ah = (ai % 2) == 0 ?- aa : aa
                    }
                    a(V.get(ai)).css(
                    {
                        background : Y + " url('" + an + "') no-repeat", backgroundPosition : af + "px " + ag + "px", 
                        opacity : ak, left : ah, height : am, "z-index" : 3
                    })
                }
            };
            var R = function (af, ag)
            {
                var ai, ae, ah;
                switch (ag)
                {
                    case r["horz.tl"]:
                    case r["horz.tr"]:
                    case r["fade.top"]:
                    case r["blinds.top"]:
                    case r["alt.top"]:
                        ai = 0;
                        ae = X - 1;
                        ah = 1;
                        break;
                    default:
                        ai = X - 1;
                        ae = 0;
                        ah =- 1
                }
                ab = setInterval(function ()
                {
                    a(V.get(ai)).animate({
                        left : 0, opacity : 1, height : ac
                    },
                    T, "", function ()
                    {
                        if (a(this).attr("id") == ae) {
                            S.setComplete(af)
                        }
                    });
                    if (ai == ae) {
                        clearInterval(ab)
                    }
                    ai += ah
                }, U)
            };
            ad()
        }
        function v(Z, aa, V, ab, Y, P, ai)
        {
            var X;
            var Q;
            var ac;
            var U;
            var W;
            var ak;
            var aj;
            var ah = function ()
            {
                U = Math.ceil(V / ab);
                W = Math.ceil(aa / ab);
                ak = U * W;
                var ao = "";
                for (var an = 0; an < U; an++) {
                    for (var am = 0; am < W; am++) {
                        ao += "<div class='block' id='" + an + "-" + am + "'></div>"
                    }
                }
                Z.addToScreen(ao);
                Q = a("div.block", Z.$el);
                Q.data({
                    tlId : "0-0", trId : "0-" + (W - 1), blId : (U - 1) + "-0", brId : (U - 1) + "-" + (W - 1)
                });
                var al = 0;
                ac = new Array(ak);
                X = new Array(U);
                for (var an = 0; an < U; an++)
                {
                    X[an] = new Array(W);
                    for (var am = 0; am < W; am++) {
                        X[an][am] = ac[al++] = Q.filter("#" + (an + "-" + am)).data("top", an * ab);
                    }
                }
            };
            this.clear = function ()
            {
                clearInterval(aj);
                Q.stop(true).css({
                    "z-index" : 2, opacity : 0
                })
            };
            this.displayContent = function (al, am)
            {
                switch (am)
                {
                    case r["diag.fade"]:
                        ae(al, 0, ab, 0);
                        af(al, {
                            opacity : 1
                        }, false);
                        break;
                    case r["diag.exp"]:
                        ae(al, 0, 0, 0);
                        af(al, {
                            opacity : 1, width : ab, height : ab
                        }, false);
                        break;
                    case r["rev.diag.fade"]:
                        ae(al, 0, ab, 0);
                        af(al, {
                            opacity : 1
                        }, true);
                        break;
                    case r["rev.diag.exp"]:
                        ae(al, 0, 0, 0);
                        af(al, {
                            opacity : 1, width : ab, height : ab
                        }, true);
                        break;
                    case r["block.fade"]:
                        ae(al, 0, ab, 0);
                        R(al);
                        break;
                    case r["block.exp"]:
                        ae(al, 1, 0, 0);
                        R(al);
                        break;
                    case r["block.drop"]:
                        ae(al, 1, ab, - (U * ab));
                        R(al);
                        break;
                    case r["block.top.zz"]:
                    case r["block.bottom.zz"]:
                        ae(al, 0, ab, 0);
                        T(al, am);
                        break;
                    case r["block.left.zz"]:
                    case r["block.right.zz"]:
                        ae(al, 0, ab, 0);
                        ad(al, am);
                        break;
                    case r["spiral.in"]:
                        ae(al, 0, ab, 0);
                        ag(al, false);
                        break;
                    case r["spiral.out"]:
                        ae(al, 0, ab, 0);
                        ag(al, true);
                        break;
                    default:
                        ae(al, 1, 0, 0);
                        S(al, am)
                }
            };
            var ae = function (al, ar, aw, aq)
            {
                var at = (V - al.height()) / 2;
                var an = (aa - al.width()) / 2;
                var au = al.attr("src");
                for (var ap = 0; ap < U; ap++)
                {
                    for (var ao = 0; ao < W; ao++)
                    {
                        var av = ((-ap * ab) + at);
                        var am = ((-ao * ab) + an);
                        X[ap][ao].css(
                        {
                            background : Y + " url('" + au + "') no-repeat", backgroundPosition : am + "px " + av + "px", 
                            opacity : ar, top : (ap * ab) + aq, left : (ao * ab), width : aw, height : aw, 
                            "z-index" : 3
                        })
                    }
                }
            };
            var af = function (al, au, aq)
            {
                var at = new Array(ak);
                var am, ap, an, ao;
                var av = (U - 1) + (W - 1);
                if (aq) {
                    am = av;
                    ap =- 1;
                    an =- 1;
                    ao = Q.data("tlId")
                }
                else {
                    am = 0;
                    ap = av + 1;
                    an = 1;
                    ao = Q.data("brId")
                }
                var ar = 0;
                while (am != ap)
                {
                    i = Math.min(U - 1, am);
                    while (i >= 0) {
                        j = Math.abs(i - am);
                        if (j >= W) {
                            break
                        }
                        at[ar++] = X[i][j];
                        i--
                    }
                    am += an
                }
                ar = 0;
                aj = setInterval(function ()
                {
                    at[ar++].animate(au, P, "", function ()
                    {
                        if (a(this).attr("id") == ao) {
                            Z.setComplete(al)
                        }
                    });
                    if (ar == ak) {
                        clearInterval(aj)
                    }
                }, ai)
            };
            var ad = function (ao, ap)
            {
                var an = true;
                var am = 0, al, ar, aq;
                if (ap == r["block.left.zz"]) {
                    aq = (W % 2 == 0) ? Q.data("trId") : Q.data("brId");
                    al = 0;
                    ar = 1
                }
                else {
                    aq = (W % 2 == 0) ? Q.data("tlId") : Q.data("blId");
                    al = W - 1;
                    ar =- 1
                }
                aj = setInterval(function ()
                {
                    X[am][al].animate({
                        opacity : 1
                    },
                    P, "", function ()
                    {
                        if (a(this).attr("id") == aq) {
                            Z.setComplete(ao)
                        }
                    });
                    if (X[am][al].attr("id") == aq) {
                        clearInterval(aj)
                    }
                    (an ? am++: am--);
                    if (am == U || am < 0) {
                        an = !an;
                        am = (an ? 0 : U - 1);
                        al += ar
                    }
                }, ai)
            };
            var T = function (ao, ap)
            {
                var an = true;
                var am, al = 0, ar, aq;
                if (ap == r["block.top.zz"]) {
                    aq = (U % 2 == 0) ? Q.data("blId") : Q.data("brId");
                    am = 0;
                    ar = 1
                }
                else {
                    aq = (U % 2 == 0) ? Q.data("tlId") : Q.data("trId");
                    am = U - 1;
                    ar =- 1
                }
                aj = setInterval(function ()
                {
                    X[am][al].animate({
                        opacity : 1
                    },
                    P, "", function ()
                    {
                        if (a(this).attr("id") == aq) {
                            Z.setComplete(ao)
                        }
                    });
                    if (X[am][al].attr("id") == aq) {
                        clearInterval(aj)
                    }
                    (an ? al++: al--);
                    if (al == W || al < 0) {
                        an = !an;
                        al = (an ? 0 : W - 1);
                        am += ar
                    }
                }, ai)
            };
            var S = function (an, ao)
            {
                var aq = new Array(ak);
                var ar;
                var ap = 0;
                switch (ao)
                {
                    case r["block.left"]:
                        ar = Q.data("brId");
                        for (var al = 0; al < W; al++) {
                            for (var am = 0; am < U; am++) {
                                aq[ap++] = X[am][al];
                            }
                        }
                        break;
                    case r["block.right"]:
                        ar = Q.data("blId");
                        for (var al = W - 1; al >= 0; al--) {
                            for (var am = 0; am < U; am++) {
                                aq[ap++] = X[am][al];
                            }
                        }
                        break;
                    case r["block.top"]:
                        ar = Q.data("brId");
                        for (var am = 0; am < U; am++) {
                            for (var al = 0; al < W; al++) {
                                aq[ap++] = X[am][al];
                            }
                        }
                        break;
                    default:
                        ar = Q.data("trId");
                        for (var am = U - 1; am >= 0; am--) {
                            for (var al = 0; al < W; al++) {
                                aq[ap++] = X[am][al];
                            }
                        }
                }
                ap = 0;
                aj = setInterval(function ()
                {
                    aq[ap++].animate({
                        width : ab, height : ab
                    },
                    P, "", function ()
                    {
                        if (a(this).attr("id") == ar) {
                            Z.setComplete(an)
                        }
                    });
                    if (ap == ak) {
                        clearInterval(aj)
                    }
                }, ai)
            };
            var R = function (am)
            {
                p(ac);
                var al = 0;
                count = 0;
                aj = setInterval(function ()
                {
                    ac[al].animate({
                        top : ac[al].data("top"), width : ab, height : ab, opacity : 1
                    },
                    P, "", function ()
                    {
                        if (++count == ak) {
                            Z.setComplete(am)
                        }
                    });
                    al++;
                    if (al == ak) {
                        clearInterval(aj)
                    }
                }, ai)
            };
            var ag = function (al, au)
            {
                var at = 0, ar = 0;
                var ax = U - 1;
                var ay = W - 1;
                var an = 0;
                var aq = ay;
                var aw = new Array();
                while (ax >= 0 && ay >= 0)
                {
                    var av = 0;
                    while (true)
                    {
                        aw[aw.length] = X[at][ar];
                        if ((++av) > aq) {
                            break
                        }
                        switch (an) {
                            case 0:
                                ar++;
                                break;
                            case 1:
                                at++;
                                break;
                            case 2:
                                ar--;
                                break;
                            case 3:
                                at--
                        }
                    }
                    switch (an)
                    {
                        case 0:
                            an = 1;
                            aq = (--ax);
                            at++;
                            break;
                        case 1:
                            an = 2;
                            aq = (--ay);
                            ar--;
                            break;
                        case 2:
                            an = 3;
                            aq = (--ax);
                            at--;
                            break;
                        case 3:
                            an = 0;
                            aq = (--ay);
                            ar++
                    }
                }
                if (aw.length > 0)
                {
                    if (au) {
                        aw.reverse()
                    }
                    var ap = aw.length - 1;
                    var am = aw[ap].attr("id");
                    var ao = 0;
                    aj = setInterval(function ()
                    {
                        aw[ao].animate({
                            opacity : 1
                        },
                        P, "", function ()
                        {
                            if (a(this).attr("id") == am) {
                                Z.setComplete(al)
                            }
                        });
                        if (ao == ap) {
                            clearInterval(aj)
                        }
                        ao++
                    }, ai)
                }
            };
            ah()
        }
        function K(bA, bv)
        {
            var az = m(bv.screen_width, 600);
            var bp = m(bv.screen_height, 300);
            var ao = m(bv.item_width, 250);
            var bl = m(bv.item_height, 75);
            var a2 = m(bv.item_display, 4);
            var aV = bv.auto_start;
            var aF = m(bv.transition_speed, x);
            var aj = bv.display_arrow;
            var aG = bv.text_effect.toLowerCase();
            var bx = bv.text_sync;
            var af = bv.list_align.toLowerCase();
            var av = bv.move_one;
            var ar;
            var aC;
            var U;
            var ay;
            var a4;
            var aX;
            var bm;
            var S;
            var X;
            var aZ;
            var a9;
            var ax;
            var ag;
            var bh;
            var bw = null;
            var bg = null;
            var aq = a(".listStyleGallery", bA);
            var a6 = aq.find(".screen");
            var ba = aq.find(".thumbnails");
            var aQ = ba.find(">ul:first");
            var bB = aQ.find(">li");
            var Y;
            var aE;
            var a0;
            var ad;
            var Q;
            var R;
            var bd;
            var ae;
            var aa;
            var ap;
            var aD;
            var al;
            var am;
            var T;
            this.$el = bA;
            this.init = function ()
            {
                aC = 0;
                U =- 1;
                ar = bB.size();
                bm = 0;
                aX = ar - a2;
                ay = 0;
                a4 = aX;
                aY();
                bb();
                aS();
                aq.css({
                    width : az + ao, height : ba.height() > bp ? ba.height() : bp
                });
                if (bv.pause_mouseover) {
                    aq.hover(aU, ai)
                }
                var bC = a6.css("background-color");
                X = new c(this, az, bp, m(bv.vert_size, 50), bC, aF, m(bv.vstripe_delay, 90));
                aZ = new t(this, az, bp, m(bv.horz_size, 50), bC, aF, m(bv.hstripe_delay, 180));
                a9 = new v(this, az, bp, m(bv.block_size, 75), bC, aF, m(bv.block_delay, 35));
                be(0);
                aO(aC)
            };
            this.setComplete = function (bC)
            {
                P(bC)
            };
            this.addToScreen = function (bC)
            {
                aE.append(bC)
            };
            var aY = function ()
            {
                var bC = "<a href='#'></a>							   	<div id='preloader'></div>								<div id='timer'></div>							   	<div class='textbox'>							   		<div class='inner-bg'></div>									<div class='inner-text'></div>							   	</div>							   	<div class='cpanel'>							   		<div id='play-btn'></div>									<div id='num-info'></div>								</div>";
                a6.append(bC).css({
                    width : az, height : bp
                });
                aE = a6.find(">a:first");
                Q = a6.find("#preloader");
                aI();
                aW();
                bt()
            };
            var aI = function ()
            {
                Y = a6.find("#timer").data("pct", 1);
                if (bv.display_timer)
                {
                    Y.css(bv.timer_align.toLowerCase() == G ? "top" : "bottom", 0).css("visibility", "visible")
                }
                else {
                    Y.hide()
                }
            };
            var aW = function ()
            {
                a0 = a6.find(".textbox");
                ad = a0.find(".inner-text");
                if (bv.text_mouseover) {
                    a6.hover(an, au)
                }
                else {
                    aq.bind(y, bc)
                }
            };
            var bt = function ()
            {
                var bG = bv.display_playbutton;
                var bC = bv.display_number;
                R = a6.find(".cpanel");
                if (!bC && !bG) {
                    R.remove();
                    return
                }
                ae = R.find("#num-info");
                if (bC)
                {
                    var bE = J(ar);
                    var bF = "";
                    for (var bD = 0; bD < bE; bD++) {
                        bF += "0"
                    }
                    bF += " / " + bF;
                    ae.html(bF).width(ae.width()).html("");
                    aq.bind(M, function ()
                    {
                        ae.html((aC + 1) + " / " + ar)
                    })
                }
                else {
                    ae.remove()
                }
                bd = R.find("#play-btn");
                if (bG) {
                    bd.click(ak).toggleClass("pause", aV)
                }
                else {
                    bd.remove()
                }
                R.width(ae.outerWidth() + bd.width());
                switch (bv.cpanel_align.toUpperCase())
                {
                    case z:
                        R.css({
                            top : 0, left : 0
                        });
                        break;
                    case k:
                        R.css({
                            top : 0, left : Math.floor((az - R.outerWidth(true)) / 2)
                        });
                        break;
                    case g:
                        R.css({
                            top : 0, left : az - R.outerWidth(true)
                        });
                        break;
                    case O:
                        R.css({
                            top : bp - R.outerHeight(true), left : 0
                        });
                        break;
                    case u:
                        R.css({
                            top : bp - R.outerHeight(true), left : Math.floor((az - R.outerWidth(true)) / 2)
                        });
                        break;
                    default:
                        R.css({
                            top : bp - R.outerHeight(true), left : az - R.outerWidth(true)
                        })
                }
                if (bv.cpanel_mouseover) {
                    R.css("display", "none");
                    a6.hover(a1, aL)
                }
                R.css("visibility", "visible")
            };
            var a1 = function ()
            {
                R.stop(true, true).fadeIn(l)
            };
            var aL = function ()
            {
                R.stop(true, true).fadeOut(l)
            };
            var bb = function ()
            {
                var bC = bv.transition.toLowerCase();
                var bE = m(bv.delay, e);
                var bD = ad.outerHeight() - ad.height();
                bB.each(function (bG)
                {
                    var bF = a(this).find(">a:first");
                    a(this).data(
                    {
                        imgurl : bF.attr("href"), delay : m(a(this).attr("delay"), bE), effect : r[a(this).attr("effect")] != undefined ? r[a(this).attr("effect")] : r[bC]
                    });
                    bn(a(this), bD)
                });
                ad.html("").css({
                    width : "auto", height : "auto"
                });
                a0.css("visibility", "visible");
                if (bv.shuffle) {
                    W()
                }
                bB.hover(function ()
                {
                    if (aC != a(this).index()) {
                        a(this).addClass("item-over")
                    }
                },
                function ()
                {
                    a(this).removeClass("item-over")
                });
                ap = bB.find(">div.thumb");
                ap.css(af == w ? {
                    "float" : "left", "border-right-width" : 1
                }
                 : {
                    "float" : "right", "border-left-width" : 1
                });
                ap.css({
                    width : ao - (ap.outerWidth() - ap.width()), height : bl - (ap.outerHeight() - ap.height())
                }).mousedown(at);
                if (!bv.display_thumbs) {
                    ap.find(">img:first").hide()
                }
            };
            var aS = function ()
            {
                var bC = 0;
                if (aj)
                {
                    aa = a("<div>&nbsp;&nbsp;&nbsp;</div>").attr("id", af == N ? "left-arrow" : "right-arrow").height(bl);
                    a(bB.get(0)).append(aa);
                    bC = aa.width()
                }
                bB.css({
                    width : ao + bC, height : bl
                });
                aQ.height(ar * bB.outerHeight());
                ba.css({
                    width : bB.width(), height : a2 * bB.outerHeight()
                }).click(aH);
                ax = aQ.height() - ba.height();
                if (af == w) {
                    ba.css("left", 0);
                    a6.css("left", ao)
                }
                else {
                    a6.css("left", 0);
                    ba.css("left", az - bC)
                }
                switch (bv.scroll_type.toLowerCase())
                {
                    case "mouse_click":
                        bi();
                        aD.click(aK).find("#up-btn").css("cursor", "pointer");
                        al.click(aM).find("#down-btn").css("cursor", "pointer");
                        break;
                    case "mouse_over":
                        bi();
                        aD.hover(bu, aB);
                        al.hover(aN, aB);
                        break;
                    case "mouse_move":
                        ba.mousemove(ac)
                }
                if (bv.display_scrollbar) {
                    a8()
                }
                if (bv.auto_adjust) {
                    aq.bind(I, ah);
                    ba.hover(function ()
                    {
                        aq.unbind(I)
                    },
                    function ()
                    {
                        aq.bind(I, ah)
                    })
                }
            };
            var a8 = function ()
            {
                ba.append("<div id='scrollbar'><div id='knob'></div></div>");
                am = ba.find("#scrollbar");
                T = am.find("#knob");
                am.css("left", af == w ? 0 : ba.width() - am.width());
                T.height(Math.floor((a2 / ar) * am.height()));
                var bC = am.height() - T.height();
                var bD = bC / ax;
                am.data({
                    range : bC, ratio : bD
                });
                aq.bind(B, function ()
                {
                    am.stop(true, true).fadeIn(l)
                }).bind(s, function ()
                {
                    am.stop(true, true).fadeOut(l)
                }).bind(f, function ()
                {
                    T.stop(true).animate({
                        top : Math.round(-bm * bD)
                    }, bh)
                });
                am.hide().css("visibility", "visible")
            };
            var bi = function ()
            {
                ba.append("<div class='btn-pane'><div id='up-btn'></div></div>								    <div class='btn-pane'><div id='down-btn'></div></div>");
                var bC = ba.find(".btn-pane");
                bC.css({
                    opacity : 0, width : ao
                });
                bC.hover(bz, aT);
                if (aj && af == N) {
                    bC.css("left", aa.width())
                }
                aD = bC.has("#up-btn");
                al = bC.has("#down-btn");
                al.css("top", ba.height() - al.height());
                bC.css("visibility", "visible");
                aq.bind(q, ab).trigger(q)
            };
            var bz = function ()
            {
                a(this).stop(true, true).animate({
                    opacity : 1
                }, l)
            };
            var aT = function ()
            {
                a(this).stop(true, true).animate({
                    opacity : 0
                }, l)
            };
            var ab = function ()
            {
                bm < 0 ? aD.stop(true, true).fadeIn(l) : aD.stop(true, true).fadeOut(l);
                bm > -ax ? al.stop(true, true).fadeIn(l) : al.stop(true, true).fadeOut(l)
            };
            var aK = function ()
            {
                if (a4 < aX) {
                    var bC = av ? 1 : Math.min(aX - a4, a2);
                    a4 += bC;
                    ay -= bC;
                    bo()
                }
                return false;
            };
            var aM = function ()
            {
                if (ay < aX) {
                    var bC = av ? 1 : Math.min(aX - ay, a2);
                    ay += bC;
                    a4 -= bC;
                    bo()
                }
                return false;
            };
            var bu = function ()
            {
                al.stop(true, true).fadeIn(l);
                aq.trigger(B);
                bh =- aQ.stop(true).position().top * H;
                aQ.animate({
                    top : 0
                },
                bh, function ()
                {
                    aD.stop(true, true).fadeOut(l);
                    aq.trigger(s)
                });
                T.stop(true).animate({
                    top : 0
                }, bh)
            };
            var aN = function ()
            {
                aD.stop(true, true).fadeIn(l);
                aq.trigger(B);
                bh = (ax + aQ.stop(true).position().top) * H;
                aQ.animate({
                    top :- ax
                },
                bh, function ()
                {
                    al.stop(true, true).fadeOut(l);
                    aq.trigger(s)
                });
                T.stop(true).animate({
                    top : am.data("range")
                }, bh)
            };
            var aB = function ()
            {
                aQ.stop(true);
                try {
                    T.stop(true)
                }
                catch (bC) {}
                aq.trigger(s)
            };
            var ac = function (bD)
            {
                var bC = Math.round(((bD.pageY - ba.offset().top) / ba.height()) * 100) / 100;
                ag =- Math.round(ax * bC);
                if (bw == null && ag != aQ.position().top) {
                    aB();
                    aq.trigger(B);
                    bw = setInterval(aP, 30);
                }
            };
            var aP = function ()
            {
                var bE = aQ.stop(true).position().top;
                if (bE == ag) {
                    aA();
                    aq.trigger(s)
                }
                else
                {
                    var bC = (ag - bE) * D;
                    bm += bC < 0 ? Math.min(-1, Math.round(bC)) : Math.max(1, Math.round(bC));
                    aQ.css("top", bm);
                    try {
                        T.css("top", Math.round(-bm * am.data("ratio")))
                    }
                    catch (bD) {}
                }
            };
            var aA = function ()
            {
                clearInterval(bw);
                bw = null;
            };
            var ah = function ()
            {
                if (bw == null) {
                    var bC = Math.min(aC, aX);
                    ay = bC;
                    a4 = aX - ay;
                    bo()
                }
            };
            var bo = function ()
            {
                bm =- ay * bB.outerHeight();
                bh = Math.min(n, Math.abs(aQ.position().top - bm) * H);
                if (bh > 0) {
                    aq.trigger(B)
                }
                aQ.stop(true).animate({
                    top : bm
                },
                bh, function ()
                {
                    aq.trigger(q);
                    aq.trigger(s)
                });
                aq.trigger(f)
            };
            var bn = function (bC, bE)
            {
                var bD = bC.find(">div:hidden");
                var bG = m(parseInt(bD.css("width")) - bE, 300);
                var bF = m(parseInt(bD.css("height")) - bE, 0);
                ad.width(bG).html(bD.html());
                if (bF < ad.height()) {
                    bF = ad.height()
                }
                bC.data("textbox", 
                {
                    x : bD.css("left"), y : bD.css("top"), w : bG + bE, h : bF + bE, color : bD.css("color"), 
                    bgcolor : bD.css("background-color")
                })
            };
            var aH = function (bD)
            {
                var bC = a(bD.target).parents("li").index();
                if (bC >= 0 && bC != aC) {
                    bj();
                    U = aC;
                    aC = bC;
                    aO(aC)
                }
                return false;
            };
            var bq = function ()
            {
                bj();
                U = aC;
                aC = aC < ar - 1 ? aC + 1 : 0;
                aO(aC)
            };
            var ak = function ()
            {
                aV = !aV;
                a(this).toggleClass("pause", aV);
                aV ? a5() : V();
                return false;
            };
            var ai = function ()
            {
                aV = true;
                bd.toggleClass("pause", aV);
                a5()
            };
            var aU = function ()
            {
                aV = false;
                bd.toggleClass("pause", aV);
                V()
            };
            var bc = function (bD)
            {
                if (!a0.data("visible"))
                {
                    a0.data("visible", true);
                    var bE = a(bB.get(aC)).find(">div:hidden").html();
                    if (bE && bE.length > 0)
                    {
                        var bC = a(bB.get(aC)).data("textbox");
                        ad.css("color", bC.color);
                        a0.find(".inner-bg").css("background-color", bC.bgcolor);
                        switch (o[aG])
                        {
                            case o.fade:
                                a7(bE, bC);
                                break;
                            case o.down:
                                bk(bE, {
                                    display : "block", top : bC.y, left : bC.x, width : bC.w, height : 0
                                },
                                {
                                    height : bC.h
                                });
                                break;
                            case o.right:
                                bk(bE, {
                                    display : "block", top : bC.y, left : bC.x, width : 0, height : bC.h
                                },
                                {
                                    width : bC.w
                                });
                                break;
                            default:
                                by(bE, bC)
                        }
                    }
                }
            };
            var a7 = function (bD, bC)
            {
                ad.css("opacity", 1).html(bD);
                a0.css({
                    top : bC.y, left : bC.x, width : bC.w, height : bC.h
                }).stop(true, true).fadeIn(L, function ()
                {
                    if (jQuery.browser.msie) {
                        ad[0].style.removeAttribute("filter")
                    }
                })
            };
            var bk = function (bE, bD, bC)
            {
                ad.html("");
                a0.stop(true).css(bD).animate(bC, L, function ()
                {
                    ad.html(bE)
                })
            };
            var by = function (bD, bC)
            {
                a0.stop(true).css({
                    display : "block", top : bC.y, left : bC.x, width : bC.w, height : bC.h
                });
                ad.html(bD)
            };
            var an = function ()
            {
                aq.unbind(y).bind(y, bc).trigger(y)
            };
            var au = function ()
            {
                aq.unbind(y);
                br()
            };
            var aO = function (bE)
            {
                aq.trigger(I).trigger(M);
                var bG = a(bB.get(bE));
                bB.filter(".selected").removeClass("selected");
                bG.removeClass("item-over").addClass("selected").append(aa);
                S = bG.data("delay");
                br();
                if (!bx) {
                    aq.trigger(y)
                }
                var bF = bG.find(">a:last");
                var bC = bF.attr("href");
                if (bC)
                {
                    aE.unbind("click").css("cursor", "pointer").attr({
                        href : bC, target : bF.attr("target")
                    })
                }
                else {
                    aE.click(at).css("cursor", "default")
                }
                if (bG.data("img")) {
                    Q.hide();
                    aR(bG.data("img"))
                }
                else
                {
                    var bD = a("<img class='main-img'/>");
                    bD.attr("src", bG.data("imgurl"));
                    if (!bD[0].complete)
                    {
                        Q.show();
                        bD.load(function ()
                        {
                            Q.hide();
                            bs(bG, a(this));
                            aR(a(this))
                        }).error(function ()
                        {
                            alert("Error loading image")
                        })
                    }
                    else {
                        Q.hide();
                        bs(bG, bD);
                        aR(bD)
                    }
                }
            };
            var aR = function (bC)
            {
                X.clear();
                aZ.clear();
                a9.clear();
                aw();
                var bD = a(bB.get(aC)).data("effect");
                if (bD == r.none) {
                    P(bC);
                    return
                }
                if (bD == r.random) {
                    bD = Math.floor(Math.random() * 38)
                }
                if (bD == r.fade) {
                    bf(bC)
                }
                else
                {
                    if (bD < r["vert.tl"]) {
                        a9.displayContent(bC, bD)
                    }
                    else {
                        if (bD < r["horz.tl"]) {
                            X.displayContent(bC, bD)
                        }
                        else {
                            aZ.displayContent(bC, bD)
                        }
                    }
                }
            };
            var aw = function ()
            {
                if (U >= 0)
                {
                    var bD = a("img#curr-img").attr("src");
                    var bE = a(bB.get(U)).data("imgurl");
                    if (bD != bE)
                    {
                        a("img.main-img", aE).removeAttr("id").hide();
                        var bC = a("img.main-img", aE).filter(function ()
                        {
                            return a(this).attr("src") == bE;
                        });
                        a(bC.get(0)).show()
                    }
                }
            };
            var P = function (bC)
            {
                if (bx) {
                    aq.trigger(y)
                }
                a("img.main-img", aE).removeAttr("id").hide();
                bC.attr("id", "curr-img").show();
                a5()
            };
            var bf = function (bC)
            {
                a("img#curr-img", aE).stop(true, true);
                a("img.main-img", aE).removeAttr("id").css("z-index", 0);
                bC.attr("id", "curr-img").css("z-index", 1).stop(true, true).fadeIn(aF, function ()
                {
                    a("img.main-img:not('#curr-img')", aE).hide();
                    if (bx) {
                        aq.trigger(y)
                    }
                    a5()
                })
            };
            var be = function (bD)
            {
                var bC = a(bB.get(bD));
                var bE = a("<img class='main-img'/>");
                bE.attr("src", bC.data("imgurl"));
                bE.load(function ()
                {
                    if (!bC.data("img")) {
                        bs(bC, a(this))
                    }
                    bD++;
                    if (bD < ar) {
                        be(bD)
                    }
                }).error(function ()
                {
                    bD++;
                    if (bD < ar) {
                        be(bD)
                    }
                })
            };
            var bs = function (bE, bG)
            {
                aE.append(bG);
                var bJ = (bp - bG.height()) / 2;
                var bF = (az - bG.width()) / 2;
                var bI = 0, bH = 0, bD = 0, bC = 0;
                if (bJ > 0) {
                    bD = bJ
                }
                else {
                    if (bJ < 0) {
                        bI = bJ;
                    }
                }
                if (bF > 0) {
                    bC = bF
                }
                else {
                    if (bF < 0) {
                        bH = bF;
                    }
                }
                bG.css(
                {
                    top : bI, left : bH, "padding-top" : bD, "padding-bottom" : bD, "padding-left" : bC, 
                    "padding-right" : bC
                });
                bE.data("img", bG)
            };
            var a5 = function ()
            {
                if (aV && bg == null)
                {
                    var bC = Math.round(Y.data("pct") * S);
                    Y.animate({
                        width : Y.parent().width() + 1
                    }, bC);
                    bg = setTimeout(bq, bC);
                }
            };
            var bj = function ()
            {
                clearTimeout(bg);
                bg = null;
                Y.stop(true).width(0).data("pct", 1)
            };
            var V = function ()
            {
                clearTimeout(bg);
                bg = null;
                Y.stop(true).data("pct", 1 - (Y.width() / (Y.parent().width() + 1)))
            };
            var W = function ()
            {
                var bF = new Array(ar);
                for (var bE = 0; bE < ar; bE++) {
                    bF[bE] = a(bB.get(bE)).clone(true)
                }
                for (var bE = 0; bE < ar; bE++) {
                    var bC = Math.floor(Math.random() * ar);
                    var bD = bF[bE];
                    bF[bE] = bF[bC];
                    bF[bC] = bD
                }
                for (var bE = 0; bE < ar; bE++) {
                    a(bB.get(bE)).replaceWith(bF[bE])
                }
                bB = aQ.find(">li");
            };
            var at = function ()
            {
                return false;
            };
            var br = function ()
            {
                a0.data("visible", false).stop(true, true);
                switch (o[aG])
                {
                    case o.fade:
                        a0.css("display", "none");
                        break;
                    case o.down:
                        ad.html("");
                        a0.animate({
                            height : 0
                        }, L);
                        break;
                    case o.right:
                        ad.html("");
                        a0.animate({
                            width : 0
                        }, L);
                        break;
                    default:
                        a0.css("display", "none")
                }
            };
            this.setTransition = function (bC)
            {
                bB.data("effect", r[bC])
            };
            this.setTextEffect = function (bC)
            {
                aG = bC;
            };
            var Z = true;
            var a3 = true;
            this.setPlayButton = function (bC)
            {
                Z = bC;
                if (Z) {
                    bd.show();
                    R.width(a3 ? 67 : 22)
                }
                else {
                    bd.hide();
                    R.width(a3 ? 45 : 0)
                }
                R.css("left", az - R.outerWidth(true))
            };
            this.setNumber = function (bC)
            {
                a3 = bC;
                if (a3) {
                    ae.show();
                    R.width(Z ? 67 : 45)
                }
                else {
                    ae.hide();
                    R.width(Z ? 22 : 0)
                }
                R.css("left", az - R.outerWidth(true))
            };
            this.setTimerBar = function (bC)
            {
                if (bC) {
                    Y.css({
                        visibility : "visible"
                    })
                }
                else {
                    Y.css({
                        visibility : "hidden"
                    })
                }
            };
            this.setThumbs = function (bC)
            {
                if (bC) {
                    ap.find(">img:first").show()
                }
                else {
                    ap.find(">img:first").hide()
                }
            };
            this.setScrollbar = function (bC)
            {
                if (bC) {
                    am.css("visibility", "visible")
                }
                else {
                    am.css("visibility", "hidden")
                }
            };
            var aJ = function ()
            {
                aA();
                aQ.stop(true);
                T.stop(true);
                ba.unbind("mousemove", ac);
                aD.unbind("mouseenter", bu).unbind("mouseleave", aB).unbind("click", aK);
                al.unbind("mouseenter", aN).unbind("mouseleave", aB).unbind("click", aM);
                aq.unbind(q);
                ay =- Math.round(aQ.position().top / bB.outerHeight());
                a4 = aX - ay;
                bm =- ay * bB.outerHeight();
                aQ.stop(true).css({
                    top : bm
                });
                T.stop(true).css({
                    top : Math.round(-bm * am.data("ratio"))
                });
                aD.stop(true, true).fadeOut();
                al.stop(true, true).fadeOut()
            };
            this.setNav = function (bC)
            {
                aq.unbind(I);
                switch (bC)
                {
                    case "mouse_click":
                        if (!aD && !al) {
                            bi()
                        }
                        aJ();
                        aD.click(aK).find("#up-btn").css("cursor", "pointer");
                        al.click(aM).find("#down-btn").css("cursor", "pointer");
                        aq.unbind(q).bind(q, ab).trigger(q);
                        break;
                    case "mouse_over":
                        if (!aD && !al) {
                            bi()
                        }
                        aJ();
                        aD.hover(bu, aB).find("#up-btn").css("cursor", "default");
                        al.hover(aN, aB).find("#down-btn").css("cursor", "default");
                        aq.unbind(q).bind(q, ab).trigger(q);
                        break;
                    case "mouse_move":
                        aJ();
                        ba.mousemove(ac);
                        break
                }
                aq.bind(I, ah)
            };
            this.setListAlign = function (bC)
            {
                af = bC;
                if (af == w)
                {
                    ap.css({
                        "float" : "left", "border-left-width" : 0, "border-right-width" : 1
                    });
                    aa.attr("id", "right-arrow");
                    ba.css("left", 0);
                    a6.css("left", ao);
                    am.css("left", 0);
                    if (aD && al) {
                        aD.css("left", 0);
                        al.css("left", 0)
                    }
                }
                else
                {
                    ap.css({
                        "float" : "right", "border-left-width" : 1, "border-right-width" : 0
                    });
                    aa.attr("id", "left-arrow");
                    a6.css("left", 0);
                    ba.css("left", az - aa.width());
                    am.css("left", ba.width() - am.width());
                    if (aD && al) {
                        aD.css("left", aa.width());
                        al.css("left", aa.width())
                    }
                }
            };
            this.setMouseoverPause = function (bC)
            {
                if (bC) {
                    aq.bind("mouseenter", aU).bind("mouseleave", ai)
                }
                else {
                    aq.unbind("mouseenter", aU).unbind("mouseleave", ai)
                }
            };
            this.setMouseoverCP = function (bC)
            {
                if (bC) {
                    aL();
                    a6.hover(a1, aL)
                }
                else {
                    a1();
                    a6.unbind("mouseenter", a1).unbind("mouseleave", aL)
                }
            };
            this.setMouseoverText = function (bC)
            {
                if (bC) {
                    au();
                    a6.bind("mouseenter", an).bind("mouseleave", au)
                }
                else {
                    an();
                    a6.unbind("mouseenter", an).unbind("mouseleave", au)
                }
            }
        }
        var m = function (P, Q)
        {
            if (!isNaN(P) && P > 0) {
                return P
            }
            return Q;
        };
        var h = function (P, Q)
        {
            if (!isNaN(P) && P >= 0) {
                return P
            }
            return Q;
        };
        var p = function (P)
        {
            var T = P.length;
            for (var S = 0; S < T; S++) {
                var Q = Math.floor(Math.random() * T);
                var R = P[S];
                P[S] = P[Q];
                P[Q] = R;
            }
        };
        var J = function (P)
        {
            var Q = 1;
            P = Math.abs(P);
            P = parseInt(P / 10);
            while (P > 0) {
                Q++;
                P = parseInt(P / 10)
            }
            return Q;
        };
        var F = 
        {
            screen_width : 600, screen_height : 300, item_width : 250, item_height : 75, item_display : 4, 
            auto_start : true, delay : e, transition : "fade", transition_speed : x, display_playbutton : true, 
            display_number : true, display_timer : true, display_arrow : true, display_thumbs : true, 
            display_scrollbar : true, pause_mouseover : false, cpanel_mouseover : true, text_mouseover : false, 
            text_effect : "down", text_sync : true, scroll_type : "mouse_move", list_align : w, cpanel_align : g, 
            timer_align : C, move_one : false, auto_adjust : true, shuffle : false, block_size : 75, vert_size : 50, 
            horz_size : 50, block_delay : 35, vstripe_delay : 90, hstripe_delay : 180
        };
        var A = a.extend({}, F, d);
        return this.each(function ()
        {
            b = new K(a(this), A);
            b.init()
        })
    }
})(jQuery);


