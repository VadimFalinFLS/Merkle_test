(function (t) {
  function e(e) {
    for (
      var n, a, s = e[0], u = e[1], i = e[2], f = 0, m = [];
      f < s.length;
      f++
    )
      (a = s[f]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && m.push(o[a][0]),
        (o[a] = 0);
    for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
    l && l(e);
    while (m.length) m.shift()();
    return c.push.apply(c, i || []), r();
  }
  function r() {
    for (var t, e = 0; e < c.length; e++) {
      for (var r = c[e], n = !0, s = 1; s < r.length; s++) {
        var u = r[s];
        0 !== o[u] && (n = !1);
      }
      n && (c.splice(e--, 1), (t = a((a.s = r[0]))));
    }
    return t;
  }
  var n = {},
    o = { app: 0 },
    c = [];
  function a(e) {
    if (n[e]) return n[e].exports;
    var r = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
  }
  (a.m = t),
    (a.c = n),
    (a.d = function (t, e, r) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (a.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (a.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          a.d(
            r,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return r;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "/");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = s.push.bind(s);
  (s.push = e), (s = s.slice());
  for (var i = 0; i < s.length; i++) e(s[i]);
  var l = u;
  c.push([0, "chunk-vendors"]), r();
})({
  0: function (t, e, r) {
    t.exports = r("cd49");
  },
  1685: function (t, e, r) {
    "use strict";
    r("cb0c");
  },
  "30d9": function (t, e, r) {},
  "968c": function (t, e, r) {
    "use strict";
    r("cc29");
  },
  a36f: function (t, e, r) {
    "use strict";
    r("30d9");
  },
  cb0c: function (t, e, r) {},
  cc29: function (t, e, r) {},
  cd49: function (t, e, r) {
    "use strict";
    r.r(e);
    r("e260"), r("e6cf"), r("cca6"), r("a79d");
    var n = r("7a23"),
      o = { class: "stories" };
    function c(t, e, r, c, a, s) {
      var u = Object(n["j"])("StoryItem");
      return (
        Object(n["h"])(),
        Object(n["d"])("div", o, [
          (Object(n["h"])(!0),
          Object(n["d"])(
            n["a"],
            null,
            Object(n["i"])(t.storyItems, function (t) {
              return (
                Object(n["h"])(),
                Object(n["c"])(u, { key: t.id, storyItem: t }, null, 8, [
                  "storyItem",
                ])
              );
            }),
            128
          )),
        ])
      );
    }
    var a = r("2909"),
      s = r("1da1"),
      u =
        (r("96cf"),
        r("d3b7"),
        r("6062"),
        r("3ca3"),
        r("ddb0"),
        r("a630"),
        r("d81d"),
        r("99af"),
        r("4e82"),
        r("bc3a")),
      i = r.n(u),
      l = ["href"],
      f = ["src", "alt"],
      m = { class: "storyItem_content" },
      p = { class: "storyItem_date" },
      b = { class: "storyItem_score" },
      d = { class: "storyItem_authorKarma" },
      h = { class: "storyItem_title" };
    function y(t, e, r, o, c, a) {
      return (
        Object(n["h"])(),
        Object(n["d"])(
          "a",
          { href: t.storyItem.url, class: "storyItem" },
          [
            Object(n["e"])(
              "img",
              {
                src: t.storyItem.imageUrl,
                alt: t.storyItem.title,
                class: "storyItem_img",
              },
              null,
              8,
              f
            ),
            Object(n["e"])("div", m, [
              Object(n["e"])(
                "span",
                p,
                Object(n["k"])(t.getDate(t.storyItem.time)),
                1
              ),
              Object(n["e"])(
                "p",
                b,
                "Score: " + Object(n["k"])(t.storyItem.score),
                1
              ),
              Object(n["e"])("p", null, [
                Object(n["f"])(
                  " Author: " + Object(n["k"])(t.storyItem.authorId) + " ",
                  1
                ),
                Object(n["e"])(
                  "span",
                  d,
                  "(" + Object(n["k"])(t.storyItem.authorKarma) + ")",
                  1
                ),
              ]),
              Object(n["e"])("h3", h, Object(n["k"])(t.storyItem.title), 1),
            ]),
          ],
          8,
          l
        )
      );
    }
    var j = Object(n["g"])({
      name: "StoryItem",
      props: { storyItem: { type: Object, required: !0 } },
      methods: {
        getDate: function (t) {
          return new Date(1e3 * t).toLocaleDateString("en-US");
        },
      },
    });
    r("1685");
    j.render = y;
    var O = j;
    i.a.defaults.baseURL = "https://hacker-news.firebaseio.com/v0";
    var g = Object(n["g"])({
      name: "App",
      components: { StoryItem: O },
      data: function () {
        return {
          storyItems: [],
          baseImageUrl: "https://source.unsplash.com/random/300x200",
        };
      },
      methods: {
        getStories: function () {
          var t = this;
          return Object(s["a"])(
            regeneratorRuntime.mark(function e() {
              var r, n, o, c, u;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), i.a.get("topstories.json");
                    case 2:
                      if (((r = e.sent), (n = r.data), n.length > 10)) {
                        c = new Set();
                        while (c.size < 10)
                          c.add(n[Math.floor(Math.random() * n.length)]);
                        o = Array.from(c);
                      } else o = Object(a["a"])(n);
                      return (
                        (e.next = 7),
                        Promise.all(
                          o.map(
                            (function () {
                              var e = Object(s["a"])(
                                regeneratorRuntime.mark(function e(r, n) {
                                  var o, c, a, s;
                                  return regeneratorRuntime.wrap(function (e) {
                                    while (1)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            i.a.get("item/".concat(r, ".json"))
                                          );
                                        case 2:
                                          return (
                                            (o = e.sent),
                                            (c = o.data),
                                            (e.next = 6),
                                            i.a.get(
                                              "user/".concat(c.by, ".json")
                                            )
                                          );
                                        case 6:
                                          return (
                                            (a = e.sent),
                                            (s = a.data),
                                            e.abrupt(
                                              "return",
                                              Promise.resolve({
                                                title: c.title,
                                                url: c.url,
                                                time: c.time,
                                                score: c.score,
                                                authorId: c.by,
                                                authorKarma: s.karma,
                                                imageUrl: ""
                                                  .concat(
                                                    t.baseImageUrl,
                                                    "?sig="
                                                  )
                                                  .concat(n),
                                              })
                                            )
                                          );
                                        case 9:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (t, r) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        )
                      );
                    case 7:
                      (u = e.sent),
                        (t.storyItems = u.sort(function (t, e) {
                          return t.score - e.score;
                        }));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
      },
      mounted: function () {
        this.getStories();
      },
    });
    r("a36f"), r("968c");
    g.render = c;
    var v = g;
    Object(n["b"])(v).mount("#app");
  },
});
//# sourceMappingURL=app.141acaed.js.map
