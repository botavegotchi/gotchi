(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [141],
    {
        88764: function (t, e, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/play",
                function () {
                    return a(65793);
                },
            ]);
        },
        82576: function (t, e) {
            "use strict";
            e.Z = {
                src: "/_next/static/media/pointer.bebd3961.png",
                height: 32,
                width: 32,
                blurDataURL:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXEKCgpMTExQUFAODg7y8vIUFBQWFhbo6OjT09NlZWUkJCSHh4cqKiocHBxnZ2cqKio3Nzd6enpvb2/IyMiKioq+vr5ubm6Tk5NKsnAIAAAAFHRSTlMAg/H7CP1QQP7+/IXpdcO0wdzJyAMhz14AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA/SURBVAiZHctJEoAgDADBYQkJuGtA//9SS/ve5ON8Yga0e5UNuHpLJgG6DDf3QnOzus4F3VMcC79QJ76H3govV9UCJOP8RZEAAAAASUVORK5CYII=",
            };
        },
        65793: function (t, e, a) {
            "use strict";
            a.r(e),
                a.d(e, {
                    default: function () {
                        return Ot;
                    },
                });
            var n = a(85893),
                o = a(67294),
                i = a(9008),
                r = a(34051),
                s = a.n(r),
                c = a(5152),
                l = a(53383),
                d = a(90730),
                u = a(20952);
            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n;
            }
            function m(t, e, a, n, o, i, r) {
                try {
                    var s = t[i](r),
                        c = s.value;
                } catch (l) {
                    return void a(l);
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o);
            }
            function h(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var a = null == t ? null : ("undefined" !== typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != a) {
                            var n,
                                o,
                                i = [],
                                r = !0,
                                s = !1;
                            try {
                                for (a = a.call(t); !(r = (n = a.next()).done) && (i.push(n.value), !e || i.length !== e); r = !0);
                            } catch (c) {
                                (s = !0), (o = c);
                            } finally {
                                try {
                                    r || null == a.return || a.return();
                                } finally {
                                    if (s) throw o;
                                }
                            }
                            return i;
                        }
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return p(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === a && t.constructor && (a = t.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(a);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return p(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            var g,
                f = (0, c.default)(
                    ((g = s().mark(function t() {
                        return s().wrap(function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (
                                            (t.next = 2),
                                            a
                                                .e(28)
                                                .then(a.bind(a, 2811))
                                                .then(function (t) {
                                                    return t.IonPhaser;
                                                })
                                        );
                                    case 2:
                                        return t.abrupt("return", t.sent);
                                    case 3:
                                    case "end":
                                        return t.stop();
                                }
                        }, t);
                    })),
                    function () {
                        var t = this,
                            e = arguments;
                        return new Promise(function (a, n) {
                            var o = g.apply(t, e);
                            function i(t) {
                                m(o, a, n, i, r, "next", t);
                            }
                            function r(t) {
                                m(o, a, n, i, r, "throw", t);
                            }
                            i(void 0);
                        });
                    }),
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [2811];
                            },
                        },
                        ssr: !1,
                    }
                ),
                _ = function (t) {
                    var e = t.gameScene,
                        i = h((0, d.$)(), 2),
                        r = i[0].currentAccount,
                        s = (i[1], h((0, u.D)(), 2)),
                        c = (s[0].performance, s[1]),
                        p = (0, o.useState)(void 0),
                        m = p[0],
                        g = p[1],
                        _ = (0, o.useState)(void 0),
                        x = _[0],
                        b = _[1];
                    return (
                        (0, o.useEffect)(function () {
                            var t = a(82260);
                            g(t);
                        }, []),
                        (0, o.useEffect)(
                            function () {
                                if ((l.Z.init(c), r && e && !x)) {
                                    var t = {
                                        initialize: !0,
                                        title: "Realm",
                                        game: {
                                            type: m ? m.AUTO : void 0,
                                            pixelArt: !0,
                                            roundPixels: !0,
                                            fps: { forceSetTimeOut: !0, target: 30 },
                                            scale: { width: window.innerWidth, height: window.innerHeight },
                                            parent: "game",
                                            scene: { preload: e.preload, create: e.create, init: e.init, update: e.update, physics: { default: !1 } },
                                        },
                                    };
                                    b(t);
                                }
                            },
                            [e]
                        ),
                        x ? (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(f, { game: x.game, initialize: !0 }) }) : (0, n.jsx)("div", { children: "Loading assets..." })
                    );
                };
            var x = a(34155);
            x.env.TURN_SERVER, x.env.TURN_USERNAME, x.env.TURN_PASSWORD;
            function b(t) {
                t;
            }
            var v,
                y = a(73784),
                w = a(85628),
                k = a(97164),
                j = a(86752),
                A = a(7001),
                S = a(73622),
                E = a(33638),
                N = a(26593),
                P = "";
            P = "https://verse-static.aavegotchi.com/";
            var D = { frameWidth: 128, frameHeight: 196 },
                H = { frameWidth: 256, frameHeight: 256 },
                I = { frameWidth: 320, frameHeight: 384 },
                T = { frameWidth: 768, frameHeight: 768 },
                O = {
                    initScene: function (t) {
                        v = t;
                    },
                    loadSpritesheet: function () {
                        v.load.spritesheet("deposit_crystal", "".concat(P, "animations/deposit_crystal.png"), { frameWidth: 128, frameHeight: 128 }),
                            v.load.spritesheet("deposit_vortex", "".concat(P, "animations/deposit_vortex.png"), { frameWidth: 384, frameHeight: 320 }),
                            v.load.spritesheet("poof", "".concat(P, "animations/poof.png"), { frameWidth: 64, frameHeight: 64 }),
                            v.load.spritesheet("shoot_heart", "".concat(P, "animations/shoot_heart.png"), { frameWidth: 32, frameHeight: 32 }),
                            v.load.spritesheet("death", "".concat(P, "animations/gotchi_death.png"), { frameWidth: 64, frameHeight: 64 }),
                            v.load.spritesheet("intro", "".concat(P, "animations/intro.png"), { frameWidth: 736, frameHeight: 160 }),
                            v.load.spritesheet("outro", "".concat(P, "animations/outtro.png"), { frameWidth: 640, frameHeight: 213 }),
                            v.load.spritesheet("chat", "".concat(P, "animations/chat.png"), { frameWidth: 32, frameHeight: 32 }),
                            v.load.spritesheet("alchemica_x3", "https://brokoviqscholarship.com.br/gotchi/png/69475c2ab42c4153ae60ed26.png", { frameWidth: 31, frameHeight: 39 }),
                            v.load.spritesheet("pad", "".concat(P, "animations/pad.png"), { frameWidth: 64, frameHeight: 128 }),
                            v.load.spritesheet("stars", "".concat(P, "images/parallax/sheet_stars.png"), { frameWidth: 256, frameHeight: 256 }),
                            v.load.spritesheet("pickup", "".concat(P, "animations/pickup.png"), { frameWidth: 32, frameHeight: 32 }),
                            v.load.spritesheet("shoot_muzzle", "".concat(P, "animations/shoot_muzzle1.png"), { frameWidth: 32, frameHeight: 32 }),
                            v.load.spritesheet("impact_heart", "".concat(P, "animations/impact_heart.png"), { frameWidth: 128, frameHeight: 128 }),
                            v.load.spritesheet("alchemica_deposit", "".concat(P, "animations/alchemica_deposited.png"), { frameWidth: 64, frameHeight: 64 }),
                            v.load.spritesheet("billow", "".concat(P, "animations/billow.png"), { frameWidth: 128, frameHeight: 224 }),
                            v.load.spritesheet("flame", "".concat(P, "animations/flame.png"), { frameWidth: 16, frameHeight: 32 }),
                            v.load.spritesheet("gotchi_spawn", "".concat(P, "animations/gotchi_spawn2.png"), { frameWidth: 64, frameHeight: 128 });
                    },
                    loadInstallation: function () {
                        v.load.spritesheet("aaltar", "".concat(P, "animations/installations/aaltar.png"), H),
                            v.load.spritesheet("aaltar_LE", "".concat(P, "animations/installations/aaltar_LE2.png"), { frameWidth: 192, frameHeight: 224 }),
                            v.load.spritesheet("destroyed1", "".concat(P, "animations/installations/destroyed1.png"), D),
                            v.load.spritesheet("destroyed2", "".concat(P, "animations/installations/destroyed2.png"), H),
                            v.load.spritesheet("destroyed5", "".concat(P, "animations/installations/destroyed5.png"), I),
                            v.load.spritesheet("harv_0", "".concat(P, "animations/installations/harv_FUD.png"), H),
                            v.load.spritesheet("harv_1", "".concat(P, "animations/installations/harv_FOMO.png"), H),
                            v.load.spritesheet("harv_2", "".concat(P, "animations/installations/harv_ALPHA.png"), H),
                            v.load.spritesheet("harv_3", "".concat(P, "animations/installations/harv_KEK.png"), H),
                            v.load.spritesheet("nft_large", "".concat(P, "animations/installations/nft_large.png"), H),
                            v.load.spritesheet("nft_smol", "".concat(P, "animations/installations/nft_smol.png"), H),
                            v.load.spritesheet("res_0", "".concat(P, "animations/installations/res_FUD.png"), H),
                            v.load.spritesheet("res_1", "".concat(P, "animations/installations/res_FOMO.png"), H),
                            v.load.spritesheet("res_2", "".concat(P, "animations/installations/res_ALPHA.png"), H),
                            v.load.spritesheet("res_3", "".concat(P, "animations/installations/res_KEK.png"), H),
                            v.load.spritesheet("wall", "".concat(P, "animations/installations/waall.png"), D),
                            v.load.spritesheet("lodge", "".concat(P, "animations/installations/lodge.png"), I),
                            v.load.spritesheet("land_wip", "".concat(P, "animations/installations/land_wip.png"), T),
                            v.load.spritesheet("equip", "".concat(P, "animations/installations/action_equip.png"), { frameWidth: 64, frameHeight: 64 }),
                            v.load.spritesheet("action_upgrade", "".concat(P, "animations/installations/action_upgrade.png"), { frameWidth: 128, frameHeight: 256 });
                    },
                    loadImage: function () {
                        v.load.image("equipBtn", "".concat(P, "images/equip-btn.png")),
                            v.load.image("closeBtn", "".concat(P, "images/close-btn.png")),
                            v.load.image("upgradeBtn", "".concat(P, "images/upgrade-btn.png")),
                            v.load.image("minimap", "".concat(P, "maps/mm_cr2.png")),
                            v.load.image("minimap-gotchi", "".concat(P, "maps/icon_player.png")),
                            v.load.image("H-owned", "".concat(P, "maps/images/parcels/humble_owned.png")),
                            v.load.image("H-unowned", "".concat(P, "maps/images/parcels/humble_unowned.png")),
                            v.load.image("P-owned", "".concat(P, "maps/images/parcels/paartner_owned.png")),
                            v.load.image("P-unowned", "".concat(P, "maps/images/parcels/paartner_unowned.png")),
                            v.load.image("R-owned", "".concat(P, "maps/images/parcels/reasonable_owned.png")),
                            v.load.image("R-unowned", "".concat(P, "maps/images/parcels/reasonable_unowned.png")),
                            v.load.image("U-owned", "".concat(P, "maps/images/parcels/spacious_u_owned.png")),
                            v.load.image("U-unowned", "".concat(P, "maps/images/parcels/spacious_u_unowned.png")),
                            v.load.image("V-owned", "".concat(P, "maps/images/parcels/spacious_v_owned.png")),
                            v.load.image("V-unowned", "".concat(P, "maps/images/parcels/spacious_v_unowned.png")),
                            v.load.image("guardian", "".concat(P, "maps/images/parcels/guardian.png")),
                            v.load.image("e_interact", "".concat(P, "images/e_interact_icon.png")),
                            v.load.image("vortex-glow", "".concat(P, "images/vortex_glow.png")),
                            v.load.image("large_starfield1", "".concat(P, "images/parallax/starfield_hires_sized_256.png")),
                            v.load.image("LE_tile_1", "".concat(P, "images/tiles/Tile_LE_1.png")),
                            v.load.image("LE_tile_2", "".concat(P, "images/tiles/Tile_LE_2.png")),
                            v.load.image("LE_tile_3", "".concat(P, "images/tiles/Tile_LE_3.png"));
                    },
                    loadPaartnerImages: function () {
                        v.load.image("ygg", "".concat(P, "images/paartner/487_ygg.png")),
                            v.load.image("blackpool", "".concat(P, "images/paartner/1235_blackpool.png")),
                            v.load.image("neon", "".concat(P, "images/paartner/3609_neon.png")),
                            v.load.image("ordengg", "".concat(P, "images/paartner/3682_ordengg.png")),
                            v.load.image("flamingo", "".concat(P, "images/paartner/5079_flamingo.png")),
                            v.load.image("cgu", "".concat(P, "images/paartner/13592_cgu.png")),
                            v.load.image("readyplayerdao", "".concat(P, "images/paartner/23881_readyplayerdao.png")),
                            v.load.image("metaguild", "".concat(P, "images/paartner/25029_metaguild.png")),
                            v.load.image("yggsea", "".concat(P, "images/paartner/40689_yggsea.png"));
                    },
                    loadAudio: function () {
                        v.load.audio("alchemica_deposited", "".concat(P, "sounds/alpha/alchemica_deposited.mp3")),
                            v.load.audio("alchemica_alpha", "".concat(P, "sounds/alpha/alchemica-ALPHA.mp3")),
                            v.load.audio("alchemica_fomo", "".concat(P, "sounds/alpha/alchemica-FOMO.mp3")),
                            v.load.audio("alchemica_fud", "".concat(P, "sounds/alpha/alchemica-FUD.mp3")),
                            v.load.audio("alchemica_kek", "".concat(P, "sounds/alpha/alchemica-KEK.mp3")),
                            v.load.audio("bump", "".concat(P, "sounds/alpha/bump.mp3")),
                            v.load.audio("cant_pickup", "".concat(P, "sounds/alpha/cant_pickup.mp3")),
                            v.load.audio("gotchi_spawn", "".concat(P, "sounds/alpha/gotchi_spawn.mp3")),
                            v.load.audio("gotchi_on_road", "".concat(P, "sounds/alpha/on_road.mp3")),
                            v.load.audio("pickup_alpha", "".concat(P, "sounds/alpha/pickup-ALPHA.mp3")),
                            v.load.audio("pickup_fomo", "".concat(P, "sounds/alpha/pickup-FOMO.mp3")),
                            v.load.audio("pickup_fud", "".concat(P, "sounds/alpha/pickup-FUD.mp3")),
                            v.load.audio("pickup_kek", "".concat(P, "sounds/alpha/pickup-KEK.mp3")),
                            v.load.audio("death", "".concat(P, "sounds/alpha/death.mp3")),
                            v.load.audio("impact_heart", "".concat(P, "sounds/alpha/impact_heart.mp3")),
                            v.load.audio("shoot_heart", "".concat(P, "sounds/alpha/shoot_heart.mp3")),
                            v.load.audio("round_begin", "".concat(P, "sounds/alpha/round_begin2.mp3")),
                            v.load.audio("round_ending", "".concat(P, "sounds/alpha/round_ending2.mp3")),
                            v.load.audio("noshoot", "".concat(P, "sounds/alpha/noshoot.mp3")),
                            v.load.audio("equip_sound", "".concat(P, "sounds/alpha/action_equip.ogg")),
                            v.load.audio("theme_citaadel", "".concat(P, "sounds/alpha/theme_citaadel_beatscribe.mp3")),
                            v.load.audio("theme_scramble", "".concat(P, "sounds/alpha/theme_scramble_beatscribe.ogg")),
                            v.load.audio("send", "".concat(P, "sounds/send.mp3")),
                            v.load.audio("check", "".concat(P, "sounds/click.mp3")),
                            v.load.audio("sending", "".concat(P, "sounds/sending.mp3")),
                            v.load.audio("statue", "".concat(P, "sounds/statue.mp3")),
                            v.load.audio("pickup_alpha_small", "".concat(P, "sounds/alpha/pickup_ALPHA_1.mp3")),
                            v.load.audio("pickup_alpha_medium", "".concat(P, "sounds/alpha/pickup_ALPHA_2.mp3")),
                            v.load.audio("pickup_alpha_large", "".concat(P, "sounds/alpha/pickup_ALPHA_3.mp3")),
                            v.load.audio("pickup_fomo_small", "".concat(P, "sounds/alpha/pickup_FOMO_1.mp3")),
                            v.load.audio("pickup_fomo_medium", "".concat(P, "sounds/alpha/pickup_FOMO_2.mp3")),
                            v.load.audio("pickup_fomo_large", "".concat(P, "sounds/alpha/pickup_FOMO_3.mp3")),
                            v.load.audio("pickup_fud_small", "".concat(P, "sounds/alpha/pickup_FUD_1.mp3")),
                            v.load.audio("pickup_fud_medium", "".concat(P, "sounds/alpha/pickup_FUD_2.mp3")),
                            v.load.audio("pickup_fud_large", "".concat(P, "sounds/alpha/pickup_FUD_3.mp3")),
                            v.load.audio("pickup_kek_small", "".concat(P, "sounds/alpha/pickup_KEK_1.mp3")),
                            v.load.audio("pickup_kek_medium", "".concat(P, "sounds/alpha/pickup_KEK_2.mp3")),
                            v.load.audio("pickup_kek_large", "".concat(P, "sounds/alpha/pickup_KEK_3.mp3"));
                    },
                    loadMap: function () {
                        v.load.json("master", "".concat(P, "maps/chunks/master.json")),
                            v.load.image("tower1", "".concat(P, "maps/sprites/tower1.png")),
                            v.load.image("tower2", "".concat(P, "maps/sprites/tower2.png")),
                            v.load.image("tower3", "".concat(P, "maps/sprites/tower3.png")),
                            v.load.image("tower4", "".concat(P, "maps/sprites/tower4.png")),
                            v.load.image("lights", "".concat(P, "maps/sprites/lights.png")),
                            v.load.image("unplayable", "".concat(P, "maps/sprites/unplayable.png")),
                            v.load.image("gate_north", "".concat(P, "maps/sprites/gate_north.png")),
                            v.load.image("gate_east", "".concat(P, "maps/sprites/gate_east.png")),
                            v.load.image("gate_south", "".concat(P, "maps/sprites/gate_south.png")),
                            v.load.image("gate_west", "".concat(P, "maps/sprites/gate_west.png")),
                            v.load.image("alchem", "".concat(P, "maps/sprites/alchem.png")),
                            v.load.image("roads", "".concat(P, "maps/sprites/roads.png")),
                            v.load.image("alchem_glow", "".concat(P, "maps/sprites/alchem_glow.png")),
                            v.load.image("statue_prince", "".concat(P, "maps/sprites/statue_prince.png")),
                            v.load.image("parcels", "".concat(P, "maps/sprites/parcels.png")),
                            v.load.image("statues", "".concat(P, "maps/sprites/statue_soldat_stone1_angles.png"));
                    },
                    createAudio: function () {
                        (v.itemSound = v.sound.add("send", { volume: 0.3 })),
                            (v.fireSound = v.sound.add("sending", { volume: 0.3 })),
                            (v.checkSound = v.sound.add("sending", { volume: 0.3 })),
                            (v.statueCollision = v.sound.add("statue", { volume: 0.3 })),
                            (v.alchemica_deposited_sound = v.sound.add("alchemica_deposited", { volume: 0.3 })),
                            (v.alchemica_alpha_sound = v.sound.add("alchemica_alpha", { volume: 0.16, loop: !0 })),
                            (v.alchemica_fomo_sound = v.sound.add("alchemica_fomo", { volume: 0.16, loop: !0 })),
                            (v.alchemica_fud_sound = v.sound.add("alchemica_fud", { volume: 0.16, loop: !0 })),
                            (v.alchemica_kek_sound = v.sound.add("alchemica_kek", { volume: 0.16, loop: !0 })),
                            (v.bump_sound = v.sound.add("bump", { volume: 0.4 })),
                            (v.cant_pickup_sound = v.sound.add("cant_pickup", { volume: 0.4 })),
                            (v.gotchi_spawn_sound = v.sound.add("gotchi_spawn", { volume: 0.3 })),
                            (v.on_road_sound = v.sound.add("gotchi_on_road", { volume: 0.4 })),
                            (v.on_road_loop = v.sound.add("alchemica_alpha", { volume: 0.4, loop: !0 })),
                            (v.pickup_alpha_sound = v.sound.add("pickup_alpha", { volume: 0.4 })),
                            (v.pickup_fomo_sound = v.sound.add("pickup_fomo", { volume: 0.4 })),
                            (v.pickup_fud_sound = v.sound.add("pickup_fud", { volume: 0.4 })),
                            (v.pickup_kek_sound = v.sound.add("pickup_kek", { volume: 0.4 })),
                            (v.death_sound = v.sound.add("death", { volume: 0.3 })),
                            (v.impact_heart_sound = v.sound.add("impact_heart", { volume: 0.3 })),
                            (v.shoot_heart_sound = v.sound.add("shoot_heart", { volume: 0.3 })),
                            (v.round_begin_sound = v.sound.add("round_begin", { volume: 0.3 })),
                            (v.round_ending_sound = v.sound.add("round_ending", { volume: 0.3 })),
                            (v.noshoot_sound = v.sound.add("noshoot", { volume: 1 })),
                            (v.citaadel_music = v.sound.add("theme_citaadel", { volume: 0.4, loop: !0 })),
                            (v.scramble_music = v.sound.add("theme_scramble", { volume: 0.4, loop: !0 })),
                            (v.pickup_alpha_sound_small = v.sound.add("pickup_alpha_small", { volume: 0.4 })),
                            (v.pickup_alpha_sound_medium = v.sound.add("pickup_alpha_medium", { volume: 0.4 })),
                            (v.pickup_alpha_sound_large = v.sound.add("pickup_alpha_large", { volume: 0.4 })),
                            (v.pickup_fomo_sound_small = v.sound.add("pickup_fomo_small", { volume: 0.4 })),
                            (v.pickup_fomo_sound_medium = v.sound.add("pickup_fomo_medium", { volume: 0.4 })),
                            (v.pickup_fomo_sound_large = v.sound.add("pickup_fomo_large", { volume: 0.4 })),
                            (v.pickup_fud_sound_small = v.sound.add("pickup_fud_small", { volume: 0.4 })),
                            (v.pickup_fud_sound_medium = v.sound.add("pickup_fud_medium", { volume: 0.4 })),
                            (v.pickup_fud_sound_large = v.sound.add("pickup_fud_large", { volume: 0.4 })),
                            (v.pickup_kek_sound_small = v.sound.add("pickup_kek_small", { volume: 0.4 })),
                            (v.pickup_kek_sound_medium = v.sound.add("pickup_kek_medium", { volume: 0.4 })),
                            (v.pickup_kek_sound_large = v.sound.add("pickup_kek_large", { volume: 0.4 })),
                            (v.equip_sound = v.sound.add("equip_sound", { volume: 0.4 }));
                    },
                },
                U = a(97001),
                M = a(35038),
                C = a(1787);
            function z(t, e, a, n, o, i, r) {
                try {
                    var s = t[i](r),
                        c = s.value;
                } catch (l) {
                    return void a(l);
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o);
            }
            function Z(t) {
                return function () {
                    var e = this,
                        a = arguments;
                    return new Promise(function (n, o) {
                        var i = t.apply(e, a);
                        function r(t) {
                            z(i, n, o, r, s, "next", t);
                        }
                        function s(t) {
                            z(i, n, o, r, s, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var L = a(15601),
                W = a(11163),
                F = a.n(W),
                K = a(87659),
                R = a(65988),
                X = a.n(R),
                B = { src: "/_next/static/media/gotchiverse_loading.45a92ae2.gif", height: 330, width: 280 },
                G = a(25675),
                q = a.n(G),
                $ = function () {
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: "jsx-d09f21998065f47f background-loading", children: (0, n.jsx)(q(), { src: B, height: 200, width: 330, objectFit: "contain" }) }),
                            (0, n.jsx)(X(), {
                                id: "d09f21998065f47f",
                                children:
                                    ".background-loading.jsx-d09f21998065f47f{position:absolute;top:0;left:0;right:0;bottom:0;background-color:black;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}",
                            }),
                        ],
                    });
                },
                Q = a(21454),
                V = a(86991),
                J = a(95801),
                Y = new String(
                    ".build-border.jsx-876ad0ccfa6baf71{position:absolute;pointer-events:none;width:100%;height:100%;top:0;left:0;border:2px solid var(--col-info-400);-webkit-box-shadow:inset 0px 0px 24px rgba(0,185,243,1);-moz-box-shadow:inset 0px 0px 24px rgba(0,185,243,1);box-shadow:inset 0px 0px 24px rgba(0,185,243,1)}.right-container.jsx-876ad0ccfa6baf71{position:absolute;right:0;top:12px;bottom:12px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.pending-toggle.jsx-876ad0ccfa6baf71{top:0;position:absolute;right:190px}.build-toggle.jsx-876ad0ccfa6baf71{position:absolute;bottom:12px;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}"
                );
            Y.__hash = "876ad0ccfa6baf71";
            var tt = Y,
                et = a(13990),
                at = a(19051),
                nt = a(63382),
                ot = a(61972),
                it = new String(
                    '.sidetray-content.jsx-37c5c65536abd0f{width:152px;height:100%;padding:0 12px 12px 8px}.loading-state.jsx-37c5c65536abd0f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;height:24px}.loading-state.jsx-37c5c65536abd0f p.jsx-37c5c65536abd0f{margin:0 4px;color:var(--col-info-400)}.scroll-wrapper.jsx-37c5c65536abd0f{position:relative;height:-webkit-calc(100% - 54px);height:-moz-calc(100% - 54px);height:calc(100% - 54px)}.scroll-wrapper.jsx-37c5c65536abd0f:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:54px;background:-webkit-linear-gradient(bottom,rgba(0,0,0,1),rgba(0,0,0,0));background:-moz-linear-gradient(bottom,rgba(0,0,0,1),rgba(0,0,0,0));background:-o-linear-gradient(bottom,rgba(0,0,0,1),rgba(0,0,0,0));background:linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0))}.scroll-container.jsx-37c5c65536abd0f{overflow:scroll;height:100%}.installation-wrapper.jsx-37c5c65536abd0f{cursor:url("/cursors/pointer.png"),pointer;margin-bottom:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.scroll-button.jsx-37c5c65536abd0f{margin:12px auto 0;display:block;position:relative;height:18px;width:32px;border:none;background-color:transparent}.scroll-button.jsx-37c5c65536abd0f:after{content:"";position:absolute;width:0;top:0;left:0;height:0;border-left:16px solid transparent;border-right:16px solid transparent;border-top:18px solid var(--col-info-400)}.pointer.jsx-37c5c65536abd0f{position:absolute;top:54px;left:-12px;z-index:1;-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation:drag 3e3ms;-moz-animation:drag 3e3ms;-o-animation:drag 3e3ms;animation:drag 3e3ms;-webkit-animation-delay:1e3ms;-moz-animation-delay:1e3ms;-o-animation-delay:1e3ms;animation-delay:1e3ms;opacity:0;pointer-events:none}@keyframes drag{0%{-webkit-transform:rotate(180deg)translateX(0);-moz-transform:rotate(180deg)translateX(0);-o-transform:rotate(180deg)translateX(0);transform:rotate(180deg)translateX(0);opacity:1}50%{-webkit-transform:rotate(180deg)translateX(32px);-moz-transform:rotate(180deg)translateX(32px);-o-transform:rotate(180deg)translateX(32px);transform:rotate(180deg)translateX(32px);opacity:1}51%{-webkit-transform:rotate(180deg)translateX(0);-moz-transform:rotate(180deg)translateX(0);-o-transform:rotate(180deg)translateX(0);transform:rotate(180deg)translateX(0);opacity:1}100%{-webkit-transform:rotate(180deg)translateX(32px);-moz-transform:rotate(180deg)translateX(32px);-o-transform:rotate(180deg)translateX(32px);transform:rotate(180deg)translateX(32px);opacity:1}}'
                );
            it.__hash = "37c5c65536abd0f";
            var rt = it,
                st = a(82576);
            function ct(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n;
            }
            function lt(t, e, a, n, o, i, r) {
                try {
                    var s = t[i](r),
                        c = s.value;
                } catch (l) {
                    return void a(l);
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o);
            }
            function dt(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var a = null == t ? null : ("undefined" !== typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != a) {
                            var n,
                                o,
                                i = [],
                                r = !0,
                                s = !1;
                            try {
                                for (a = a.call(t); !(r = (n = a.next()).done) && (i.push(n.value), !e || i.length !== e); r = !0);
                            } catch (c) {
                                (s = !0), (o = c);
                            } finally {
                                try {
                                    r || null == a.return || a.return();
                                } finally {
                                    if (s) throw o;
                                }
                            }
                            return i;
                        }
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return ct(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === a && t.constructor && (a = t.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(a);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return ct(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            var ut = function () {
                    var t = dt((0, nt.a)(), 2),
                        e = t[0].inventory,
                        a = t[1],
                        i = dt((0, d.$)(), 1)[0],
                        r = i.currentNetwork,
                        c = i.currentAccount,
                        l = i.globalProvider,
                        u = (0, o.useState)(!1),
                        p = u[0],
                        m = u[1],
                        h = (0, o.useRef)(null),
                        g = (function () {
                            var t = (function (t) {
                                return function () {
                                    var e = this,
                                        a = arguments;
                                    return new Promise(function (n, o) {
                                        var i = t.apply(e, a);
                                        function r(t) {
                                            lt(i, n, o, r, s, "next", t);
                                        }
                                        function s(t) {
                                            lt(i, n, o, r, s, "throw", t);
                                        }
                                        r(void 0);
                                    });
                                };
                            })(
                                s().mark(function t(e) {
                                    return s().wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return m(!0), (t.next = 3), (0, ot.e9)(e, a);
                                                case 3:
                                                    m(!1);
                                                case 4:
                                                case "end":
                                                    return t.stop();
                                            }
                                    }, t);
                                })
                            );
                            return function (e) {
                                return t.apply(this, arguments);
                            };
                        })();
                    return (
                        (0, o.useEffect)(
                            function () {
                                c && r && l && g({ provider: l, network: r, account: c });
                            },
                            [r, c, l]
                        ),
                        (0, n.jsxs)(et.LR, {
                            hideSides: { right: !0 },
                            borrowedColor: !0,
                            inheritHeight: !0,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: "jsx-".concat(rt.__hash) + " sidetray-content",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "jsx-".concat(rt.__hash) + " loading-state",
                                            children: p && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("p", { className: "jsx-".concat(rt.__hash), children: "Fetching..." }), (0, n.jsx)(et.aN, { size: 1.5 })] }),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: "jsx-".concat(rt.__hash) + " scroll-wrapper",
                                            children: [
                                                e && e.length > 0 && (0, n.jsx)("span", { className: "jsx-".concat(rt.__hash) + " pointer", children: (0, n.jsx)(q(), { src: st.Z }) }),
                                                (0, n.jsx)("div", {
                                                    ref: h,
                                                    className: "jsx-".concat(rt.__hash) + " scroll-container",
                                                    children:
                                                        null === e || void 0 === e
                                                            ? void 0
                                                            : e.map(function (t, e) {
                                                                  return (0, n.jsx)(
                                                                      "div",
                                                                      {
                                                                          onPointerDown: function () {
                                                                              return (e = t), void C.Z.toggleActive(e);
                                                                              var e;
                                                                          },
                                                                          onPointerUp: function () {},
                                                                          className: "jsx-".concat(rt.__hash) + " installation-wrapper",
                                                                          children: (0, n.jsx)(et.Gj, { quantity: t.quantity, installation: { name: t.name, level: t.level, rarity: "common", type: t.type, itemType: t.itemType, id: t.id } }),
                                                                      },
                                                                      e
                                                                  );
                                                              }),
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)("button", {
                                            onClick: function () {
                                                h.current.scrollBy({ top: 164, behavior: "smooth" });
                                            },
                                            className: "jsx-".concat(rt.__hash) + " scroll-button",
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(X(), { id: rt.__hash, children: rt }),
                            ],
                        })
                    );
                },
                pt = a(32034);
            function mt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n;
            }
            function ht(t, e, a, n, o, i, r) {
                try {
                    var s = t[i](r),
                        c = s.value;
                } catch (l) {
                    return void a(l);
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o);
            }
            function gt(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var a = null == t ? null : ("undefined" !== typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != a) {
                            var n,
                                o,
                                i = [],
                                r = !0,
                                s = !1;
                            try {
                                for (a = a.call(t); !(r = (n = a.next()).done) && (i.push(n.value), !e || i.length !== e); r = !0);
                            } catch (c) {
                                (s = !0), (o = c);
                            } finally {
                                try {
                                    r || null == a.return || a.return();
                                } finally {
                                    if (s) throw o;
                                }
                            }
                            return i;
                        }
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return mt(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === a && t.constructor && (a = t.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(a);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return mt(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            var ft = function () {
                    var t = gt((0, V.l)(), 2)[1],
                        e = gt((0, d.$)(), 1)[0],
                        a = e.globalProvider,
                        i = e.currentAccount,
                        r = e.currentNetwork,
                        c = gt((0, nt.a)(), 2),
                        l = c[0].ongoingUpgrades,
                        u = c[1],
                        p = (0, o.useState)(!1),
                        m = p[0],
                        h = p[1],
                        g = (0, o.useState)(0),
                        f = g[0],
                        _ = g[1],
                        x = (function () {
                            var t = (function (t) {
                                return function () {
                                    var e = this,
                                        a = arguments;
                                    return new Promise(function (n, o) {
                                        var i = t.apply(e, a);
                                        function r(t) {
                                            ht(i, n, o, r, s, "next", t);
                                        }
                                        function s(t) {
                                            ht(i, n, o, r, s, "throw", t);
                                        }
                                        r(void 0);
                                    });
                                };
                            })(
                                s().mark(function t(e) {
                                    var a;
                                    return s().wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (t.next = 2), e.getBlockNumber();
                                                case 2:
                                                    (a = t.sent), _(a);
                                                case 4:
                                                case "end":
                                                    return t.stop();
                                            }
                                    }, t);
                                })
                            );
                            return function (e) {
                                return t.apply(this, arguments);
                            };
                        })();
                    return (
                        (0, o.useEffect)(function () {
                            return (
                                M.Z.updateDisableKeyboard(!0),
                                E.Z.toggleMinimap(!1),
                                function () {
                                    M.Z.updateDisableKeyboard(!1), E.Z.toggleMinimap(!0);
                                }
                            );
                        }, []),
                        (0, o.useEffect)(
                            function () {
                                a && i && r && (0, ot.hB)({ provider: a, network: r, account: i }, u);
                            },
                            [a, i, r]
                        ),
                        (0, o.useEffect)(
                            function () {
                                if (a) {
                                    x(a);
                                    var t = setInterval(function () {
                                        x(a);
                                    }, 1e4);
                                    return function () {
                                        return clearInterval(t);
                                    };
                                }
                            },
                            [a]
                        ),
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(pt.k, { currentBlock: f }),
                                (0, n.jsx)(at.HZ, {}),
                                (0, n.jsx)(pt.n, {
                                    open: m,
                                    onClose: function () {
                                        return h(!1);
                                    },
                                    currentBlock: f,
                                }),
                                (0, n.jsx)("div", { className: "jsx-".concat(tt.__hash) + " build-border" }),
                                l &&
                                    l.length > 0 &&
                                    (0, n.jsx)("div", {
                                        className: "jsx-".concat(tt.__hash) + " pending-toggle",
                                        children: (0, n.jsx)(et.CD, {
                                            title: "Upgrading now",
                                            message: "".concat(l.length, " installations"),
                                            onClick: function () {
                                                return h(!0);
                                            },
                                        }),
                                    }),
                                (0, n.jsx)("div", { className: "jsx-".concat(tt.__hash) + " right-container", children: (0, n.jsx)(ut, {}) }),
                                (0, n.jsx)("div", {
                                    className: "jsx-".concat(tt.__hash) + " build-toggle",
                                    children: (0, n.jsx)(et.zx, {
                                        color: "info",
                                        onClick: function () {
                                            C.Z.toggleBuildMode(!1), t({ type: "UPDATE_HUD", hud: "PLAY" });
                                        },
                                        children: "Exit Build Mode",
                                    }),
                                }),
                                (0, n.jsx)(X(), { id: tt.__hash, children: tt }),
                            ],
                        })
                    );
                },
                _t = a(818),
                xt = new String(
                    ".top-left-container.jsx-d37251ce02ed68f2{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:0}.settings-menu-container.jsx-d37251ce02ed68f2{margin-left:16px;display:none;}.wallet-menu-container.jsx-d37251ce02ed68f2{margin-left:16px;display:none;}.pocket-container.jsx-d37251ce02ed68f2{position:absolute;top:0;right:300px;display:none;}.minimap-container.jsx-d37251ce02ed68f2{width:300px;height:300px;border:4px solid var(--col-pink-border);border-top:0;border-left:0}.top-right-container.jsx-d37251ce02ed68f2{position:absolute;top:0;right:0;display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;width:0}.users-health-container.jsx-d37251ce02ed68f2{margin-bottom:12px}.performance.jsx-d37251ce02ed68f2{position:absolute;padding:20px;padding-top:10px;top:0;right:380px;color:white;background:rgba(0,0,0,.4);-webkit-border-radius:0 10px 0 0;-moz-border-radius:0 10px 0 0;border-radius:0 10px 0 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:21px;line-height:24px;min-width:330px}.bottom-right-container.jsx-d37251ce02ed68f2{width:60px;position:absolute;bottom:32px;right:54px;display:none;}.bottom-left-container.jsx-d37251ce02ed68f2{position:absolute;bottom:0;left:0}.chat-container.jsx-d37251ce02ed68f2{margin-bottom:256px;display:none;}.action-button-container.jsx-d37251ce02ed68f2{position:absolute;bottom:12px;right:140px;gap:18px;display:none;}.shootingOnButton.jsx-d37251ce02ed68f2{display:block;width:60px;height:60px;background:url(images/hud/shoot_on.png);margin-left:10px;border:0px}.shootingOffButton.jsx-d37251ce02ed68f2{display:block;width:60px;height:60px;background:url(images/hud/shoot_off.png);margin-left:10px;border:0px}"
                );
            xt.__hash = "d37251ce02ed68f2";
            var bt,
                vt = xt,
                yt = a(20073),
                wt = a(93577),
                kt = a(61124);
            function jt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n;
            }
            function At(t, e, a, n, o, i, r) {
                try {
                    var s = t[i](r),
                        c = s.value;
                } catch (l) {
                    return void a(l);
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o);
            }
            function St(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var a = null == t ? null : ("undefined" !== typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != a) {
                            var n,
                                o,
                                i = [],
                                r = !0,
                                s = !1;
                            try {
                                for (a = a.call(t); !(r = (n = a.next()).done) && (i.push(n.value), !e || i.length !== e); r = !0);
                            } catch (c) {
                                (s = !0), (o = c);
                            } finally {
                                try {
                                    r || null == a.return || a.return();
                                } finally {
                                    if (s) throw o;
                                }
                            }
                            return i;
                        }
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return jt(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === a && t.constructor && (a = t.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(a);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return jt(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            var Et = function () {
                var t = (0, wt.Z)(),
                    e = t.click,
                    a = t.oops,
                    i = St((0, K.P)(), 2),
                    r = i[0],
                    c = r.alchemica,
                    l = r.selectedPlayer,
                    p = r.gotchiUrl,
                    m = r.playersHealth,
                    h = r.isAavegotchiLent,
                    g = r.escrow,
                    f = r.currentDistrict,
                    _ = (r.gameAlert, i[1]),
                    x = St((0, u.D)(), 2),
                    b = x[0],
                    v = b.host,
                    w = b.playersOnline,
                    k = b.scene,
                    j = b.performance,
                    A = b.roundTime,
                    S = b.toggleDebugConsole,
                    N = b.toggleMinimap,
                    P = b.playerPosition,
                    D = x[1],
                    H = St((0, Q.r)(), 1)[0],
                    I = H.allowMusic,
                    T = H.allowSound,
                    O = St((0, d.$)(), 1)[0].currentNetwork,
                    U = St((0, V.l)(), 2)[1],
                    M = (0, o.useState)(0),
                    z = M[0],
                    Z = M[1],
                    L = (0, o.useState)("00"),
                    W = (L[0], L[1]),
                    F = (0, o.useState)("00"),
                    R = (F[0], F[1]),
                    B = (0, o.useState)("00"),
                    G = (B[0], B[1]),
                    q = (0, o.useState)(!1),
                    $ = q[0],
                    J = q[1],
                    Y = (0, o.useState)(!1),
                    tt = Y[0],
                    nt = Y[1],
                    ot = (0, o.useState)(!1),
                    it = ot[0],
                    rt = ot[1];
                (0, o.useEffect)(function () {
                    D({ type: "UPDATE_ROUND_TIME", roundTime: 0 });
                }, []),
                    (0, o.useEffect)(
                        function () {
                            Z(A),
                                bt && clearInterval(bt),
                                (bt = setInterval(function () {
                                    Z(function (t) {
                                        return t - 1;
                                    });
                                }, 1e3));
                        },
                        [A]
                    ),
                    (0, o.useEffect)(
                        function () {
                            var t = Math.floor(z / 3600),
                                e = Math.floor((z - 60 * t) / 60),
                                a = z - 60 * e;
                            G(t.toString().padStart(2, "0")), W(e.toString().padStart(2, "0")), R(a.toString().padStart(2, "0")), z <= 0 && clearInterval(bt);
                        },
                        [z]
                    );
                var st = (function () {
                    var t = (function (t) {
                        return function () {
                            var e = this,
                                a = arguments;
                            return new Promise(function (n, o) {
                                var i = t.apply(e, a);
                                function r(t) {
                                    At(i, n, o, r, s, "next", t);
                                }
                                function s(t) {
                                    At(i, n, o, r, s, "throw", t);
                                }
                                r(void 0);
                            });
                        };
                    })(
                        s().mark(function t() {
                            return s().wrap(function (t) {
                                for (;;)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            return (t.next = 2), C.Z.toggleBuildMode(!0);
                                        case 2:
                                            t.sent ? (e(), U({ type: "UPDATE_HUD", hud: "BUILD" }), E.Z.toggleMinimap(!1)) : (a(), _({ type: "UPDATE_GAME_ALERT", gameAlert: "You cannot build here!" }));
                                        case 4:
                                        case "end":
                                            return t.stop();
                                    }
                            }, t);
                        })
                    );
                    return function () {
                        return t.apply(this, arguments);
                    };
                })();
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(at.dk, {}),
                        (0, n.jsx)(kt.N, {}),
                        (0, n.jsx)(at.yM, {
                            open: it,
                            onClose: function () {
                                return rt(!1);
                            },
                        }),
                        (0, n.jsx)(at.HZ, {}),
                        (0, n.jsx)(at.xY, {
                            open: tt,
                            onClose: function () {
                                return nt(!1);
                            },
                            userDetails: { address: (null === l || void 0 === l ? void 0 : l.owner) || "", network: O },
                        }),
                        (0, n.jsx)(at.xh, {
                            open: $,
                            onClose: function () {
                                return J(!1);
                            },
                            onQuit: function () {
                                window.history.back(), D({ type: "UPDATE_CONNECTED", connected: !1 });
                            },
                        }),
                        (0, n.jsx)(at.kI, { district: f }),
                        (0, n.jsx)(at.cS, {}),
                        (0, n.jsxs)("div", {
                            className: "jsx-".concat(vt.__hash) + " top-left-container",
                            children: [
                                N && (0, n.jsx)("div", { className: "jsx-".concat(vt.__hash) + " minimap-container" }),
                                (0, n.jsx)("div", {
                                    className: "jsx-".concat(vt.__hash) + " settings-menu-container",
                                    children: (0, n.jsx)(at.Tx, {
                                        musicOn: I,
                                        soundOn: T,
                                        onExit: function () {
                                            e(), J(!0);
                                        },
                                        onToggleMusic: function () {
                                            y.Z.toggleMusic(), e();
                                        },
                                        onToggleSound: function () {
                                            y.Z.toggleSound(), e();
                                        },
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: "jsx-".concat(vt.__hash) + " wallet-menu-container",
                                    children: (0, n.jsx)(at.hn, {
                                        onClick: function () {
                                            return nt(!0);
                                        },
                                        address: (null === l || void 0 === l ? void 0 : l.owner) || "",
                                        network: O,
                                    }),
                                }),
                            ],
                        }),
                        l && h && g && (0, n.jsx)("div", { className: "jsx-".concat(vt.__hash) + " pocket-container", children: (0, n.jsx)(at.vd, {}) }),
                        (0, n.jsxs)("div", {
                            className: "jsx-".concat(vt.__hash) + " top-right-container",
                            children: [
                                l &&
                                    p &&
                                    (0, n.jsx)("div", {
                                        className: "jsx-".concat(vt.__hash) + " users-health-container",
                                        children: (0, n.jsx)(at.vb, { name: l.name, health: { current: null !== m && void 0 !== m ? m : 100, max: 100 }, img: p.url, backgroundColor: k.backgroundColor }),
                                    }),
                                (0, n.jsx)("div", {
                                    className: "jsx-".concat(vt.__hash) + " pending-alchemica-container",
                                    children: (0, n.jsx)(at.zv, {
                                        alchemica: {
                                            fud: (null === c || void 0 === c ? void 0 : c.fud) || 0,
                                            fomo: (null === c || void 0 === c ? void 0 : c.fomo) || 0,
                                            alpha: (null === c || void 0 === c ? void 0 : c.alpha) || 0,
                                            kek: (null === c || void 0 === c ? void 0 : c.kek) || 0,
                                        },
                                        maxCapacity: _t.ALCHEMICA_MAX_CARRY_QUANTITY,
                                        total: (null === c || void 0 === c ? void 0 : c.total) || 0,
                                    }),
                                }),
                            ],
                        }),
                        S &&
                            (0, n.jsxs)("p", {
                                className: "jsx-".concat(vt.__hash) + " performance",
                                children: [
                                    "DEBUG CONSOLE:",
                                    v && (0, n.jsxs)("span", { className: "jsx-".concat(vt.__hash), children: ["Host: ", v, " "] }),
                                    P &&
                                        (0, n.jsxs)("span", {
                                            className: "jsx-".concat(vt.__hash),
                                            children: [
                                                " Map: ",
                                                (function () {
                                                    var t = "N",
                                                        e = Number(((P.y * _t.TILE_SIZE) / _t.CITAADEL_HEIGHT) * 90 * 2) - 19;
                                                    e > 90 && ((e -= 90), (t = "S")), "N" === t && (e = 90 - e);
                                                    var a = "W",
                                                        n = Number(((P.x * _t.TILE_SIZE) / _t.CITAADEL_WIDTH) * 90 * 2) - 12;
                                                    return (
                                                        n > 90 && ((n -= 90), (a = "E")),
                                                        "W" === a && (n = 90 - n),
                                                        ""
                                                            .concat(e.toFixed(1), "\xb0")
                                                            .concat(t, ", ")
                                                            .concat(n.toFixed(1), "\xb0")
                                                            .concat(a, " (")
                                                            .concat(P.x * _t.TILE_SIZE, ", ")
                                                            .concat(P.y * _t.TILE_SIZE)
                                                    );
                                                })(),
                                                ")",
                                            ],
                                        }),
                                    Object.keys(j || {}).map(function (t, e) {
                                        return (0, n.jsxs)("span", { style: { marginRight: 10, lineHeight: 1 }, children: [t.charAt(0).toUpperCase() + t.slice(1), ": ", j[t], "ms"] }, e);
                                    }),
                                    w && (0, n.jsxs)("span", { className: "jsx-".concat(vt.__hash), children: [" Online Players: ", w, " "] }),
                                ],
                            }),
                        (0, n.jsxs)("div", {
                            className: "jsx-".concat(vt.__hash) + " action-button-container",
                            children: [
                                (0, n.jsx)("div", { className: "jsx-".concat(vt.__hash) + " centered flex-row", children: (0, n.jsx)(et.Kk, { color: "info", img: yt.vV, onClick: st, disableSound: !0 }) }),
                                (0, n.jsxs)("div", {
                                    className: "jsx-".concat(vt.__hash) + " flex-row space-between",
                                    children: [
                                        (0, n.jsx)(et.Kk, {
                                            img: yt.tq,
                                            onClick: function () {
                                                return rt(!0);
                                            },
                                        }),
                                        (0, n.jsx)(at.as, {}),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", { className: "jsx-".concat(vt.__hash) + " bottom-right-container", children: (0, n.jsx)(at.zR, {}) }),
                        (0, n.jsx)("div", { className: "jsx-".concat(vt.__hash) + " bottom-left-container", children: (0, n.jsx)("div", { className: "jsx-".concat(vt.__hash) + " chat-container", children: (0, n.jsx)(at.rW, {}) }) }),
                        (0, n.jsx)(X(), { id: vt.__hash, children: vt }),
                    ],
                });
            };
            function Nt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n;
            }
            function Pt(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var a = null == t ? null : ("undefined" !== typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != a) {
                            var n,
                                o,
                                i = [],
                                r = !0,
                                s = !1;
                            try {
                                for (a = a.call(t); !(r = (n = a.next()).done) && (i.push(n.value), !e || i.length !== e); r = !0);
                            } catch (c) {
                                (s = !0), (o = c);
                            } finally {
                                try {
                                    r || null == a.return || a.return();
                                } finally {
                                    if (s) throw o;
                                }
                            }
                            return i;
                        }
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return Nt(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === a && t.constructor && (a = t.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(a);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Nt(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            var Dt = function () {
                    return "BUILD" === Pt((0, V.l)(), 1)[0].hud ? (0, n.jsx)(ft, {}) : (0, n.jsx)(Et, {});
                },
                Ht = a(79830);
            function It(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n;
            }
            function Tt(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var a = null == t ? null : ("undefined" !== typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != a) {
                            var n,
                                o,
                                i = [],
                                r = !0,
                                s = !1;
                            try {
                                for (a = a.call(t); !(r = (n = a.next()).done) && (i.push(n.value), !e || i.length !== e); r = !0);
                            } catch (c) {
                                (s = !0), (o = c);
                            } finally {
                                try {
                                    r || null == a.return || a.return();
                                } finally {
                                    if (s) throw o;
                                }
                            }
                            return i;
                        }
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return It(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === a && t.constructor && (a = t.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(a);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return It(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            var Ot = function () {
                var t,
                    e = Tt((0, d.$)(), 2),
                    a = e[0],
                    r = a.authToken,
                    c = a.currentAccount,
                    l = a.currentNetwork,
                    p = a.globalProvider,
                    m = a.secondaryNetwork,
                    h = a.secondaryProvider,
                    g = a.ethersSigner,
                    f = (e[1], Tt((0, K.P)(), 2)),
                    x = f[0],
                    v = x.selectedPlayer,
                    P = x.gotchiUrl,
                    D = x.backgroundColor,
                    H = x.ownedParcels,
                    I = x.isAavegotchiLent,
                    T = f[1],
                    z = Tt((0, u.D)(), 2),
                    W = z[0],
                    R = (W.gameShooting, W.maxZoomOut),
                    X = W.zoom,
                    B = W.connected,
                    G = z[1],
                    q = Tt((0, Q.r)(), 2),
                    Y = q[0],
                    tt = Y.allowMusic,
                    et = Y.allowSound,
                    at = q[1],
                    nt = Tt((0, V.l)(), 2)[1],
                    ot = Tt((0, J.R)(), 2)[1],
                    it = Tt((0, Ht.l)(), 2)[1],
                    rt = (0, o.useState)(void 0),
                    st = rt[0],
                    ct = rt[1],
                    lt = (0, o.useState)(!1),
                    dt = lt[0],
                    ut = lt[1],
                    pt = (0, o.useRef)(null),
                    mt = Tt((0, Q.r)(), 1)[0],
                    ht = mt.allowAnimatedTiles,
                    gt = mt.allowGotchiGlow,
                    ft = mt.allowInstallationAnimations,
                    _t = mt.allowPlayerAnimation,
                    xt = mt.allowStarField,
                    bt = mt.fadeGrid,
                    vt = (0, o.useState)(!1),
                    yt = vt[0],
                    wt = vt[1];
                return (
                    (0, o.useEffect)(
                        function () {
                            c && (l || (0, L.oB)(l)) ? "undefined" !== typeof window.navigator && (ut(!0), pt && b(pt)) : F().push("/");
                        },
                        ["object", "undefined" === typeof navigator ? "undefined" : ((t = navigator), t && "undefined" !== typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t), l, p, c, v, pt]
                    ),
                    (0, o.useEffect)(
                        function () {
                            c &&
                                v &&
                                P &&
                                ct(
                                    (function (t, e, a, n, o, i, r, c, l, d, u, p, m, h, g, f, _, x) {
                                        return {
                                            preload: Z(
                                                s().mark(function t() {
                                                    return s().wrap(
                                                        function (t) {
                                                            for (;;)
                                                                switch ((t.prev = t.next)) {
                                                                    case 0:
                                                                        this.cache.tilemap.events.on("add", function (t, e) {
                                                                            E.Z.displayChunk(e);
                                                                        }),
                                                                            O.loadMap(),
                                                                            O.loadAudio(),
                                                                            O.loadSpritesheet(),
                                                                            O.loadInstallation(),
                                                                            O.loadImage(),
                                                                            O.loadPaartnerImages(),
                                                                            this.load.scenePlugin("AnimatedTiles", "AnimatedTiles.js", "animatedTiles", "animatedTiles"),
                                                                            this.load.plugin("rexoutlinepipelineplugin", "rexoutlinepipelineplugin.min.js", !0),
                                                                            this.load.plugin("rexpinchplugin", "rexpinchplugin.min.js", !0),
                                                                            this.load.spritesheet(c.id, p.sprite, { frameWidth: 64, frameHeight: 64 }),
                                                                            void 0 !== c.leftHand && this.load.svg(c.leftHand.id, p.leftHand, { frameWidth: 32, frameHeight: 32 }),
                                                                            void 0 !== c.rightHand && this.load.svg(c.rightHand.id, p.rightHand, { frameWidth: 32, frameHeight: 32 }),
                                                                            this.load.image("gotchi-shadow", "images/gotchi_shadow.png"),
                                                                            this.load.on("complete", function () {
                                                                                x();
                                                                            });
                                                                    case 15:
                                                                    case "end":
                                                                        return t.stop();
                                                                }
                                                        },
                                                        t,
                                                        this
                                                    );
                                                })
                                            ),
                                            init: function () {
                                                (this.playersToLoad = []),
                                                    (this.loadedPlayers = []),
                                                    (this.itemsGroup = this.add.group().setDepth(100)),
                                                    (this.padsGroup = this.add.group()),
                                                    (this.uiGroup = this.add.group()),
                                                    (this.hudObjects = {}),
                                                    (this.currentItems = []),
                                                    (this.spawnedParcelsByIdMap = new Map()),
                                                    (this.installationGroup = new Map()),
                                                    (this.installationsWaiting = new Map()),
                                                    (this.lastUpdate = {}),
                                                    (this.inputActive = !0),
                                                    (this.localPlayerData = l),
                                                    (this.projectiles = {}),
                                                    (this.gameSettings = f),
                                                    (this.authToken = t),
                                                    (this.currentAccount = e),
                                                    (this.currentNetwork = a),
                                                    (this.secondaryProvider = i),
                                                    (this.ethersSigner = n),
                                                    (this.globalProvider = o),
                                                    (this.backgroundColor = u),
                                                    (this.secondaryNetwork = r),
                                                    (this.ownedParcels = d),
                                                    (this.realmDispatch = _.realmDispatch),
                                                    (this.phaserDispatch = _.phaserDispatch),
                                                    (this.settingsDispatch = _.settingsDispatch),
                                                    (this.uiDispatch = _.uiDispatch),
                                                    (this.chatDispatch = _.chatDispatch),
                                                    (this.notificationDispatch = _.notificationDispatch),
                                                    (this.maxZoomOut = m),
                                                    (this.zoom = h),
                                                    w.Z.init(this),
                                                    y.Z.initScene(this),
                                                    O.initScene(this),
                                                    U.Z.initScene(this),
                                                    k.Z.initScene(this),
                                                    j.Z.initScene(this),
                                                    A.Z.initScene(this),
                                                    S.Z.initScene(this),
                                                    C.Z.initScene(this),
                                                    _.phaserDispatch({ type: "UPDATE_SCENE", scene: this });
                                            },
                                            create: Z(
                                                s().mark(function t() {
                                                    var e;
                                                    return s().wrap(
                                                        function (t) {
                                                            for (;;)
                                                                switch ((t.prev = t.next)) {
                                                                    case 0:
                                                                        (this.outLinePlugin = this.plugins.get("rexoutlinepipelineplugin")),
                                                                            null === (e = this.outLinePlugin) || void 0 === e || e.setQuality(1),
                                                                            (this.dragPinch = this.plugins.get("rexpinchplugin").add(this)),
                                                                            O.createAudio(),
                                                                            U.Z.create(),
                                                                            k.Z.initPlayer(c),
                                                                            j.Z.initAlchemicaHUD(),
                                                                            this.gameSettings.allowStarField && (0, N.uP)(this),
                                                                            w.Z.socketConnect(_.realmDispatch, c);
                                                                    case 10:
                                                                    case "end":
                                                                        return t.stop();
                                                                }
                                                        },
                                                        t,
                                                        this
                                                    );
                                                })
                                            ),
                                            update: function (t, e) {
                                                M.Z.handleKeyboardMovement(), this.gameSettings.allowStarField && (0, N.$g)(this, c, e);
                                            },
                                        };
                                    })(
                                        r,
                                        c,
                                        l,
                                        g,
                                        p,
                                        h,
                                        m,
                                        v,
                                        { isAavegotchiLent: I, gotchiUrl: P, ownedParcels: H, backgroundColor: D },
                                        H,
                                        D,
                                        P,
                                        R,
                                        X,
                                        0,
                                        { allowAnimatedTiles: ht, allowGotchiGlow: gt, allowInstallationAnimations: ft, allowPlayerAnimation: _t, allowStarField: xt, fadeGrid: bt, allowSound: et, allowMusic: tt },
                                        { phaserDispatch: G, realmDispatch: T, settingsDispatch: at, uiDispatch: nt, chatDispatch: ot, notificationDispatch: it },
                                        function () {
                                            return wt(!0);
                                        }
                                    )
                                );
                        },
                        [c, v, P, tt]
                    ),
                    dt && st
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsxs)(i.default, { children: [(0, n.jsx)("title", { children: "Play | Gotchiverse" }), (0, n.jsx)("meta", { property: "og:title", content: "Play | Gotchiverse" }, "title")] }),
                                  (0, n.jsx)("div", { ref: pt }),
                                  (0, n.jsx)(_, { gameScene: st }),
                                  yt && B && (0, n.jsx)(Dt, {}),
                                  !yt && (0, n.jsx)($, {}),
                              ],
                          })
                        : (0, n.jsx)($, {})
                );
            };
        },
    },
    function (t) {
        t.O(0, [764, 85, 565, 152, 51, 88, 774, 888, 179], function () {
            return (e = 88764), t((t.s = e));
            var e;
        });
        var e = t.O();
        _N_E = e;
    },
]);
//# sourceMappingURL=play-0c727bb3bda24221.js.map
