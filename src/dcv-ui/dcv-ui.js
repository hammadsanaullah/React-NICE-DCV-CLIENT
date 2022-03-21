import e from "../dcvjs-esm/dcv";
import t, { useEffect as n, useRef as r } from "react";
import {
  applyMode as o,
  Mode as i,
  applyDensity as a,
  Density as s,
} from "@awsui/global-styles";
import c from "prop-types";
import l from "@awsui/components-react/container";
import u from "@awsui/components-react/box";
import d from "@awsui/components-react/space-between";
import m from "@awsui/components-react/spinner";
import p from "@awsui/components-react/button";
import f from "@awsui/components-react/modal";
import h from "@awsui/components-react/textarea";
import g from "@awsui/components-react/popover";
import y from "@awsui/components-react/status-indicator";
import b from "@awsui/components-react/button-dropdown";
import v from "@awsui/components-react/tabs";
import w from "@awsui/components-react/link";
import E from "@awsui/components-react/grid";
import S from "@awsui/components-react/toggle";
import x from "@awsui/components-react/column-layout";
import M from "@awsui/components-react/radio-group";
import O from "@babel/runtime/helpers/extends";
import C from "@awsui/components-react/select";
import k from "@awsui/components-react/alert";
import I from "@awsui/components-react/line-chart";
import A from "@awsui/components-react/header";
import {
  colorChartsPaletteCategorical1 as F,
  colorChartsPaletteCategorical2 as R,
  colorChartsPaletteCategorical3 as T,
  colorBackgroundContainerHeader as B,
  colorBorderDividerDefault as P,
  colorBackgroundContainerContent as _,
} from "@awsui/design-tokens";
import L from "@awsui/components-react/badge";
import N from "@awsui/components-react/progress-bar";
import D from "@awsui/components-react/icon";
import j from "@awsui/components-react/input";
import U from "@awsui/components-react/breadcrumb-group";
import W from "@awsui/components-react/table";
import z from "@awsui/components-react/pagination";
import V from "react-dom";
var q =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  H = function (e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
  $ = !H(function () {
    var e = function () {}.bind();
    return "function" != typeof e || e.hasOwnProperty("prototype");
  }),
  Y = $,
  Q = Function.prototype,
  G = Q.apply,
  K = Q.call,
  J =
    ("object" == typeof Reflect && Reflect.apply) ||
    (Y
      ? K.bind(G)
      : function () {
          return K.apply(G, arguments);
        }),
  Z = $,
  X = Function.prototype.call,
  ee = Z
    ? X.bind(X)
    : function () {
        return X.apply(X, arguments);
      },
  te = $,
  ne = Function.prototype,
  re = ne.bind,
  oe = ne.call,
  ie = te && re.bind(oe, oe),
  ae = te
    ? function (e) {
        return e && ie(e);
      }
    : function (e) {
        return (
          e &&
          function () {
            return oe.apply(e, arguments);
          }
        );
      },
  se = function (e) {
    return e && e.Math == Math && e;
  },
  ce =
    se("object" == typeof globalThis && globalThis) ||
    se("object" == typeof window && window) ||
    se("object" == typeof self && self) ||
    se("object" == typeof q && q) ||
    (function () {
      return this;
    })() ||
    Function("return this")(),
  le = {},
  ue = !H(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  de = {},
  me = {}.propertyIsEnumerable,
  pe = Object.getOwnPropertyDescriptor,
  fe = pe && !me.call({ 1: 2 }, 1);
de.f = fe
  ? function (e) {
      var t = pe(this, e);
      return !!t && t.enumerable;
    }
  : me;
var he,
  ge,
  ye = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t,
    };
  },
  be = ae,
  ve = be({}.toString),
  we = be("".slice),
  Ee = function (e) {
    return we(ve(e), 8, -1);
  },
  Se = ae,
  xe = H,
  Me = Ee,
  Oe = ce.Object,
  Ce = Se("".split),
  ke = xe(function () {
    return !Oe("z").propertyIsEnumerable(0);
  })
    ? function (e) {
        return "String" == Me(e) ? Ce(e, "") : Oe(e);
      }
    : Oe,
  Ie = ce.TypeError,
  Ae = function (e) {
    if (null == e) throw Ie("Can't call method on " + e);
    return e;
  },
  Fe = ke,
  Re = Ae,
  Te = function (e) {
    return Fe(Re(e));
  },
  Be = function (e) {
    return "function" == typeof e;
  },
  Pe = Be,
  _e = function (e) {
    return "object" == typeof e ? null !== e : Pe(e);
  },
  Le = ce,
  Ne = Be,
  De = function (e) {
    return Ne(e) ? e : void 0;
  },
  je = function (e, t) {
    return arguments.length < 2 ? De(Le[e]) : Le[e] && Le[e][t];
  },
  Ue = ae({}.isPrototypeOf),
  We = je("navigator", "userAgent") || "",
  ze = ce,
  Ve = We,
  qe = ze.process,
  He = ze.Deno,
  $e = (qe && qe.versions) || (He && He.version),
  Ye = $e && $e.v8;
Ye && (ge = (he = Ye.split("."))[0] > 0 && he[0] < 4 ? 1 : +(he[0] + he[1])),
  !ge &&
    Ve &&
    (!(he = Ve.match(/Edge\/(\d+)/)) || he[1] >= 74) &&
    (he = Ve.match(/Chrome\/(\d+)/)) &&
    (ge = +he[1]);
var Qe = ge,
  Ge = Qe,
  Ke = H,
  Je =
    !!Object.getOwnPropertySymbols &&
    !Ke(function () {
      var e = Symbol();
      return (
        !String(e) ||
        !(Object(e) instanceof Symbol) ||
        (!Symbol.sham && Ge && Ge < 41)
      );
    }),
  Ze = Je && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  Xe = je,
  et = Be,
  tt = Ue,
  nt = Ze,
  rt = ce.Object,
  ot = nt
    ? function (e) {
        return "symbol" == typeof e;
      }
    : function (e) {
        var t = Xe("Symbol");
        return et(t) && tt(t.prototype, rt(e));
      },
  it = ce.String,
  at = function (e) {
    try {
      return it(e);
    } catch (e) {
      return "Object";
    }
  },
  st = Be,
  ct = at,
  lt = ce.TypeError,
  ut = function (e) {
    if (st(e)) return e;
    throw lt(ct(e) + " is not a function");
  },
  dt = ut,
  mt = function (e, t) {
    var n = e[t];
    return null == n ? void 0 : dt(n);
  },
  pt = ee,
  ft = Be,
  ht = _e,
  gt = ce.TypeError,
  yt = { exports: {} },
  bt = ce,
  vt = Object.defineProperty,
  wt = function (e, t) {
    try {
      vt(bt, e, { value: t, configurable: !0, writable: !0 });
    } catch (n) {
      bt[e] = t;
    }
    return t;
  },
  Et = wt,
  St = ce["__core-js_shared__"] || Et("__core-js_shared__", {}),
  xt = St;
(yt.exports = function (e, t) {
  return xt[e] || (xt[e] = void 0 !== t ? t : {});
})("versions", []).push({
  version: "3.20.3",
  mode: "global",
  copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",
  source: "https://github.com/zloirock/core-js",
});
var Mt = Ae,
  Ot = ce.Object,
  Ct = function (e) {
    return Ot(Mt(e));
  },
  kt = Ct,
  It = ae({}.hasOwnProperty),
  At =
    Object.hasOwn ||
    function (e, t) {
      return It(kt(e), t);
    },
  Ft = ae,
  Rt = 0,
  Tt = Math.random(),
  Bt = Ft((1).toString),
  Pt = function (e) {
    return "Symbol(" + (void 0 === e ? "" : e) + ")_" + Bt(++Rt + Tt, 36);
  },
  _t = ce,
  Lt = yt.exports,
  Nt = At,
  Dt = Pt,
  jt = Je,
  Ut = Ze,
  Wt = Lt("wks"),
  zt = _t.Symbol,
  Vt = zt && zt.for,
  qt = Ut ? zt : (zt && zt.withoutSetter) || Dt,
  Ht = function (e) {
    if (!Nt(Wt, e) || (!jt && "string" != typeof Wt[e])) {
      var t = "Symbol." + e;
      jt && Nt(zt, e) ? (Wt[e] = zt[e]) : (Wt[e] = Ut && Vt ? Vt(t) : qt(t));
    }
    return Wt[e];
  },
  $t = ee,
  Yt = _e,
  Qt = ot,
  Gt = mt,
  Kt = function (e, t) {
    var n, r;
    if ("string" === t && ft((n = e.toString)) && !ht((r = pt(n, e)))) return r;
    if (ft((n = e.valueOf)) && !ht((r = pt(n, e)))) return r;
    if ("string" !== t && ft((n = e.toString)) && !ht((r = pt(n, e)))) return r;
    throw gt("Can't convert object to primitive value");
  },
  Jt = Ht,
  Zt = ce.TypeError,
  Xt = Jt("toPrimitive"),
  en = function (e, t) {
    if (!Yt(e) || Qt(e)) return e;
    var n,
      r = Gt(e, Xt);
    if (r) {
      if ((void 0 === t && (t = "default"), (n = $t(r, e, t)), !Yt(n) || Qt(n)))
        return n;
      throw Zt("Can't convert object to primitive value");
    }
    return void 0 === t && (t = "number"), Kt(e, t);
  },
  tn = ot,
  nn = function (e) {
    var t = en(e, "string");
    return tn(t) ? t : t + "";
  },
  rn = _e,
  on = ce.document,
  an = rn(on) && rn(on.createElement),
  sn = function (e) {
    return an ? on.createElement(e) : {};
  },
  cn = sn,
  ln =
    !ue &&
    !H(function () {
      return (
        7 !=
        Object.defineProperty(cn("div"), "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  un = ue,
  dn = ee,
  mn = de,
  pn = ye,
  fn = Te,
  hn = nn,
  gn = At,
  yn = ln,
  bn = Object.getOwnPropertyDescriptor;
le.f = un
  ? bn
  : function (e, t) {
      if (((e = fn(e)), (t = hn(t)), yn))
        try {
          return bn(e, t);
        } catch (e) {}
      if (gn(e, t)) return pn(!dn(mn.f, e, t), e[t]);
    };
var vn = {},
  wn =
    ue &&
    H(function () {
      return (
        42 !=
        Object.defineProperty(function () {}, "prototype", {
          value: 42,
          writable: !1,
        }).prototype
      );
    }),
  En = ce,
  Sn = _e,
  xn = En.String,
  Mn = En.TypeError,
  On = function (e) {
    if (Sn(e)) return e;
    throw Mn(xn(e) + " is not an object");
  },
  Cn = ue,
  kn = ln,
  In = wn,
  An = On,
  Fn = nn,
  Rn = ce.TypeError,
  Tn = Object.defineProperty,
  Bn = Object.getOwnPropertyDescriptor;
vn.f = Cn
  ? In
    ? function (e, t, n) {
        if (
          (An(e),
          (t = Fn(t)),
          An(n),
          "function" == typeof e &&
            "prototype" === t &&
            "value" in n &&
            "writable" in n &&
            !n.writable)
        ) {
          var r = Bn(e, t);
          r &&
            r.writable &&
            ((e[t] = n.value),
            (n = {
              configurable:
                "configurable" in n ? n.configurable : r.configurable,
              enumerable: "enumerable" in n ? n.enumerable : r.enumerable,
              writable: !1,
            }));
        }
        return Tn(e, t, n);
      }
    : Tn
  : function (e, t, n) {
      if ((An(e), (t = Fn(t)), An(n), kn))
        try {
          return Tn(e, t, n);
        } catch (e) {}
      if ("get" in n || "set" in n) throw Rn("Accessors not supported");
      return "value" in n && (e[t] = n.value), e;
    };
var Pn = vn,
  _n = ye,
  Ln = ue
    ? function (e, t, n) {
        return Pn.f(e, t, _n(1, n));
      }
    : function (e, t, n) {
        return (e[t] = n), e;
      },
  Nn = { exports: {} },
  Dn = Be,
  jn = St,
  Un = ae(Function.toString);
Dn(jn.inspectSource) ||
  (jn.inspectSource = function (e) {
    return Un(e);
  });
var Wn,
  zn,
  Vn,
  qn = jn.inspectSource,
  Hn = Be,
  $n = qn,
  Yn = ce.WeakMap,
  Qn = Hn(Yn) && /native code/.test($n(Yn)),
  Gn = yt.exports,
  Kn = Pt,
  Jn = Gn("keys"),
  Zn = function (e) {
    return Jn[e] || (Jn[e] = Kn(e));
  },
  Xn = {},
  er = Qn,
  tr = ce,
  nr = ae,
  rr = _e,
  or = Ln,
  ir = At,
  ar = St,
  sr = Zn,
  cr = Xn,
  lr = tr.TypeError,
  ur = tr.WeakMap;
if (er || ar.state) {
  var dr = ar.state || (ar.state = new ur()),
    mr = nr(dr.get),
    pr = nr(dr.has),
    fr = nr(dr.set);
  (Wn = function (e, t) {
    if (pr(dr, e)) throw new lr("Object already initialized");
    return (t.facade = e), fr(dr, e, t), t;
  }),
    (zn = function (e) {
      return mr(dr, e) || {};
    }),
    (Vn = function (e) {
      return pr(dr, e);
    });
} else {
  var hr = sr("state");
  (cr[hr] = !0),
    (Wn = function (e, t) {
      if (ir(e, hr)) throw new lr("Object already initialized");
      return (t.facade = e), or(e, hr, t), t;
    }),
    (zn = function (e) {
      return ir(e, hr) ? e[hr] : {};
    }),
    (Vn = function (e) {
      return ir(e, hr);
    });
}
var gr = {
    set: Wn,
    get: zn,
    has: Vn,
    enforce: function (e) {
      return Vn(e) ? zn(e) : Wn(e, {});
    },
    getterFor: function (e) {
      return function (t) {
        var n;
        if (!rr(t) || (n = zn(t)).type !== e)
          throw lr("Incompatible receiver, " + e + " required");
        return n;
      };
    },
  },
  yr = ue,
  br = At,
  vr = Function.prototype,
  wr = yr && Object.getOwnPropertyDescriptor,
  Er = br(vr, "name"),
  Sr = {
    EXISTS: Er,
    PROPER: Er && "something" === function () {}.name,
    CONFIGURABLE: Er && (!yr || (yr && wr(vr, "name").configurable)),
  },
  xr = ce,
  Mr = Be,
  Or = At,
  Cr = Ln,
  kr = wt,
  Ir = qn,
  Ar = Sr.CONFIGURABLE,
  Fr = gr.get,
  Rr = gr.enforce,
  Tr = String(String).split("String");
(Nn.exports = function (e, t, n, r) {
  var o,
    i = !!r && !!r.unsafe,
    a = !!r && !!r.enumerable,
    s = !!r && !!r.noTargetGet,
    c = r && void 0 !== r.name ? r.name : t;
  Mr(n) &&
    ("Symbol(" === String(c).slice(0, 7) &&
      (c = "[" + String(c).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
    (!Or(n, "name") || (Ar && n.name !== c)) && Cr(n, "name", c),
    (o = Rr(n)).source || (o.source = Tr.join("string" == typeof c ? c : ""))),
    e !== xr
      ? (i ? !s && e[t] && (a = !0) : delete e[t], a ? (e[t] = n) : Cr(e, t, n))
      : a
      ? (e[t] = n)
      : kr(t, n);
})(Function.prototype, "toString", function () {
  return (Mr(this) && Fr(this).source) || Ir(this);
});
var Br = {},
  Pr = Math.ceil,
  _r = Math.floor,
  Lr = function (e) {
    var t = +e;
    return t != t || 0 === t ? 0 : (t > 0 ? _r : Pr)(t);
  },
  Nr = Lr,
  Dr = Math.max,
  jr = Math.min,
  Ur = function (e, t) {
    var n = Nr(e);
    return n < 0 ? Dr(n + t, 0) : jr(n, t);
  },
  Wr = Lr,
  zr = Math.min,
  Vr = function (e) {
    return e > 0 ? zr(Wr(e), 9007199254740991) : 0;
  },
  qr = Vr,
  Hr = function (e) {
    return qr(e.length);
  },
  $r = Te,
  Yr = Ur,
  Qr = Hr,
  Gr = function (e) {
    return function (t, n, r) {
      var o,
        i = $r(t),
        a = Qr(i),
        s = Yr(r, a);
      if (e && n != n) {
        for (; a > s; ) if ((o = i[s++]) != o) return !0;
      } else
        for (; a > s; s++) if ((e || s in i) && i[s] === n) return e || s || 0;
      return !e && -1;
    };
  },
  Kr = { includes: Gr(!0), indexOf: Gr(!1) },
  Jr = At,
  Zr = Te,
  Xr = Kr.indexOf,
  eo = Xn,
  to = ae([].push),
  no = function (e, t) {
    var n,
      r = Zr(e),
      o = 0,
      i = [];
    for (n in r) !Jr(eo, n) && Jr(r, n) && to(i, n);
    for (; t.length > o; ) Jr(r, (n = t[o++])) && (~Xr(i, n) || to(i, n));
    return i;
  },
  ro = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  oo = no,
  io = ro.concat("length", "prototype");
Br.f =
  Object.getOwnPropertyNames ||
  function (e) {
    return oo(e, io);
  };
var ao = {};
ao.f = Object.getOwnPropertySymbols;
var so = je,
  co = Br,
  lo = ao,
  uo = On,
  mo = ae([].concat),
  po =
    so("Reflect", "ownKeys") ||
    function (e) {
      var t = co.f(uo(e)),
        n = lo.f;
      return n ? mo(t, n(e)) : t;
    },
  fo = At,
  ho = po,
  go = le,
  yo = vn,
  bo = H,
  vo = Be,
  wo = /#|\.prototype\./,
  Eo = function (e, t) {
    var n = xo[So(e)];
    return n == Oo || (n != Mo && (vo(t) ? bo(t) : !!t));
  },
  So = (Eo.normalize = function (e) {
    return String(e).replace(wo, ".").toLowerCase();
  }),
  xo = (Eo.data = {}),
  Mo = (Eo.NATIVE = "N"),
  Oo = (Eo.POLYFILL = "P"),
  Co = Eo,
  ko = ce,
  Io = le.f,
  Ao = Ln,
  Fo = Nn.exports,
  Ro = wt,
  To = function (e, t, n) {
    for (var r = ho(t), o = yo.f, i = go.f, a = 0; a < r.length; a++) {
      var s = r[a];
      fo(e, s) || (n && fo(n, s)) || o(e, s, i(t, s));
    }
  },
  Bo = Co,
  Po = function (e, t) {
    var n,
      r,
      o,
      i,
      a,
      s = e.target,
      c = e.global,
      l = e.stat;
    if ((n = c ? ko : l ? ko[s] || Ro(s, {}) : (ko[s] || {}).prototype))
      for (r in t) {
        if (
          ((i = t[r]),
          (o = e.noTargetGet ? (a = Io(n, r)) && a.value : n[r]),
          !Bo(c ? r : s + (l ? "." : "#") + r, e.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          To(i, o);
        }
        (e.sham || (o && o.sham)) && Ao(i, "sham", !0), Fo(n, r, i, e);
      }
  },
  _o = {};
_o[Ht("toStringTag")] = "z";
var Lo = ce,
  No = "[object z]" === String(_o),
  Do = Be,
  jo = Ee,
  Uo = Ht("toStringTag"),
  Wo = Lo.Object,
  zo =
    "Arguments" ==
    jo(
      (function () {
        return arguments;
      })()
    ),
  Vo = No
    ? jo
    : function (e) {
        var t, n, r;
        return void 0 === e
          ? "Undefined"
          : null === e
          ? "Null"
          : "string" ==
            typeof (n = (function (e, t) {
              try {
                return e[t];
              } catch (e) {}
            })((t = Wo(e)), Uo))
          ? n
          : zo
          ? jo(t)
          : "Object" == (r = jo(t)) && Do(t.callee)
          ? "Arguments"
          : r;
      },
  qo = Vo,
  Ho = ce.String,
  $o = function (e) {
    if ("Symbol" === qo(e))
      throw TypeError("Cannot convert a Symbol value to a string");
    return Ho(e);
  },
  Yo = On,
  Qo = H,
  Go = ce.RegExp,
  Ko = Qo(function () {
    var e = Go("a", "y");
    return (e.lastIndex = 2), null != e.exec("abcd");
  }),
  Jo =
    Ko ||
    Qo(function () {
      return !Go("a", "y").sticky;
    }),
  Zo = {
    BROKEN_CARET:
      Ko ||
      Qo(function () {
        var e = Go("^r", "gy");
        return (e.lastIndex = 2), null != e.exec("str");
      }),
    MISSED_STICKY: Jo,
    UNSUPPORTED_Y: Ko,
  },
  Xo = {},
  ei = no,
  ti = ro,
  ni =
    Object.keys ||
    function (e) {
      return ei(e, ti);
    },
  ri = ue,
  oi = wn,
  ii = vn,
  ai = On,
  si = Te,
  ci = ni;
Xo.f =
  ri && !oi
    ? Object.defineProperties
    : function (e, t) {
        ai(e);
        for (var n, r = si(t), o = ci(t), i = o.length, a = 0; i > a; )
          ii.f(e, (n = o[a++]), r[n]);
        return e;
      };
var li,
  ui = je("document", "documentElement"),
  di = On,
  mi = Xo,
  pi = ro,
  fi = Xn,
  hi = ui,
  gi = sn,
  yi = Zn("IE_PROTO"),
  bi = function () {},
  vi = function (e) {
    return "<script>" + e + "</script>";
  },
  wi = function (e) {
    e.write(vi("")), e.close();
    var t = e.parentWindow.Object;
    return (e = null), t;
  },
  Ei = function () {
    try {
      li = new ActiveXObject("htmlfile");
    } catch (e) {}
    var e, t;
    Ei =
      "undefined" != typeof document
        ? document.domain && li
          ? wi(li)
          : (((t = gi("iframe")).style.display = "none"),
            hi.appendChild(t),
            (t.src = String("javascript:")),
            (e = t.contentWindow.document).open(),
            e.write(vi("document.F=Object")),
            e.close(),
            e.F)
        : wi(li);
    for (var n = pi.length; n--; ) delete Ei.prototype[pi[n]];
    return Ei();
  };
fi[yi] = !0;
var Si,
  xi,
  Mi =
    Object.create ||
    function (e, t) {
      var n;
      return (
        null !== e
          ? ((bi.prototype = di(e)),
            (n = new bi()),
            (bi.prototype = null),
            (n[yi] = e))
          : (n = Ei()),
        void 0 === t ? n : mi.f(n, t)
      );
    },
  Oi = H,
  Ci = ce.RegExp,
  ki = Oi(function () {
    var e = Ci(".", "s");
    return !(e.dotAll && e.exec("\n") && "s" === e.flags);
  }),
  Ii = H,
  Ai = ce.RegExp,
  Fi = Ii(function () {
    var e = Ai("(?<a>b)", "g");
    return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
  }),
  Ri = ee,
  Ti = ae,
  Bi = $o,
  Pi = function () {
    var e = Yo(this),
      t = "";
    return (
      e.global && (t += "g"),
      e.ignoreCase && (t += "i"),
      e.multiline && (t += "m"),
      e.dotAll && (t += "s"),
      e.unicode && (t += "u"),
      e.sticky && (t += "y"),
      t
    );
  },
  _i = Zo,
  Li = yt.exports,
  Ni = Mi,
  Di = gr.get,
  ji = ki,
  Ui = Fi,
  Wi = Li("native-string-replace", String.prototype.replace),
  zi = RegExp.prototype.exec,
  Vi = zi,
  qi = Ti("".charAt),
  Hi = Ti("".indexOf),
  $i = Ti("".replace),
  Yi = Ti("".slice),
  Qi =
    ((xi = /b*/g),
    Ri(zi, (Si = /a/), "a"),
    Ri(zi, xi, "a"),
    0 !== Si.lastIndex || 0 !== xi.lastIndex),
  Gi = _i.BROKEN_CARET,
  Ki = void 0 !== /()??/.exec("")[1];
(Qi || Ki || Gi || ji || Ui) &&
  (Vi = function (e) {
    var t,
      n,
      r,
      o,
      i,
      a,
      s,
      c = this,
      l = Di(c),
      u = Bi(e),
      d = l.raw;
    if (d)
      return (
        (d.lastIndex = c.lastIndex),
        (t = Ri(Vi, d, u)),
        (c.lastIndex = d.lastIndex),
        t
      );
    var m = l.groups,
      p = Gi && c.sticky,
      f = Ri(Pi, c),
      h = c.source,
      g = 0,
      y = u;
    if (
      (p &&
        ((f = $i(f, "y", "")),
        -1 === Hi(f, "g") && (f += "g"),
        (y = Yi(u, c.lastIndex)),
        c.lastIndex > 0 &&
          (!c.multiline || (c.multiline && "\n" !== qi(u, c.lastIndex - 1))) &&
          ((h = "(?: " + h + ")"), (y = " " + y), g++),
        (n = new RegExp("^(?:" + h + ")", f))),
      Ki && (n = new RegExp("^" + h + "$(?!\\s)", f)),
      Qi && (r = c.lastIndex),
      (o = Ri(zi, p ? n : c, y)),
      p
        ? o
          ? ((o.input = Yi(o.input, g)),
            (o[0] = Yi(o[0], g)),
            (o.index = c.lastIndex),
            (c.lastIndex += o[0].length))
          : (c.lastIndex = 0)
        : Qi && o && (c.lastIndex = c.global ? o.index + o[0].length : r),
      Ki &&
        o &&
        o.length > 1 &&
        Ri(Wi, o[0], n, function () {
          for (i = 1; i < arguments.length - 2; i++)
            void 0 === arguments[i] && (o[i] = void 0);
        }),
      o && m)
    )
      for (o.groups = a = Ni(null), i = 0; i < m.length; i++)
        a[(s = m[i])[0]] = o[s[1]];
    return o;
  });
var Ji = Vi;
Po({ target: "RegExp", proto: !0, forced: /./.exec !== Ji }, { exec: Ji });
var Zi = ae,
  Xi = Nn.exports,
  ea = Ji,
  ta = H,
  na = Ht,
  ra = Ln,
  oa = na("species"),
  ia = RegExp.prototype,
  aa = ae,
  sa = Lr,
  ca = $o,
  la = Ae,
  ua = aa("".charAt),
  da = aa("".charCodeAt),
  ma = aa("".slice),
  pa = function (e) {
    return function (t, n) {
      var r,
        o,
        i = ca(la(t)),
        a = sa(n),
        s = i.length;
      return a < 0 || a >= s
        ? e
          ? ""
          : void 0
        : (r = da(i, a)) < 55296 ||
          r > 56319 ||
          a + 1 === s ||
          (o = da(i, a + 1)) < 56320 ||
          o > 57343
        ? e
          ? ua(i, a)
          : r
        : e
        ? ma(i, a, a + 2)
        : o - 56320 + ((r - 55296) << 10) + 65536;
    };
  },
  fa = { codeAt: pa(!1), charAt: pa(!0) }.charAt,
  ha = ae,
  ga = Ct,
  ya = Math.floor,
  ba = ha("".charAt),
  va = ha("".replace),
  wa = ha("".slice),
  Ea = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  Sa = /\$([$&'`]|\d{1,2})/g,
  xa = ee,
  Ma = On,
  Oa = Be,
  Ca = Ee,
  ka = Ji,
  Ia = ce.TypeError,
  Aa = J,
  Fa = ee,
  Ra = ae,
  Ta = function (e, t, n, r) {
    var o = na(e),
      i = !ta(function () {
        var t = {};
        return (
          (t[o] = function () {
            return 7;
          }),
          7 != ""[e](t)
        );
      }),
      a =
        i &&
        !ta(function () {
          var t = !1,
            n = /a/;
          return (
            "split" === e &&
              (((n = {}).constructor = {}),
              (n.constructor[oa] = function () {
                return n;
              }),
              (n.flags = ""),
              (n[o] = /./[o])),
            (n.exec = function () {
              return (t = !0), null;
            }),
            n[o](""),
            !t
          );
        });
    if (!i || !a || n) {
      var s = Zi(/./[o]),
        c = t(o, ""[e], function (e, t, n, r, o) {
          var a = Zi(e),
            c = t.exec;
          return c === ea || c === ia.exec
            ? i && !o
              ? { done: !0, value: s(t, n, r) }
              : { done: !0, value: a(n, t, r) }
            : { done: !1 };
        });
      Xi(String.prototype, e, c[0]), Xi(ia, o, c[1]);
    }
    r && ra(ia[o], "sham", !0);
  },
  Ba = H,
  Pa = On,
  _a = Be,
  La = Lr,
  Na = Vr,
  Da = $o,
  ja = Ae,
  Ua = function (e, t, n) {
    return t + (n ? fa(e, t).length : 1);
  },
  Wa = mt,
  za = function (e, t, n, r, o, i) {
    var a = n + e.length,
      s = r.length,
      c = Sa;
    return (
      void 0 !== o && ((o = ga(o)), (c = Ea)),
      va(i, c, function (i, c) {
        var l;
        switch (ba(c, 0)) {
          case "$":
            return "$";
          case "&":
            return e;
          case "`":
            return wa(t, 0, n);
          case "'":
            return wa(t, a);
          case "<":
            l = o[wa(c, 1, -1)];
            break;
          default:
            var u = +c;
            if (0 === u) return i;
            if (u > s) {
              var d = ya(u / 10);
              return 0 === d
                ? i
                : d <= s
                ? void 0 === r[d - 1]
                  ? ba(c, 1)
                  : r[d - 1] + ba(c, 1)
                : i;
            }
            l = r[u - 1];
        }
        return void 0 === l ? "" : l;
      })
    );
  },
  Va = function (e, t) {
    var n = e.exec;
    if (Oa(n)) {
      var r = xa(n, e, t);
      return null !== r && Ma(r), r;
    }
    if ("RegExp" === Ca(e)) return xa(ka, e, t);
    throw Ia("RegExp#exec called on incompatible receiver");
  },
  qa = Ht("replace"),
  Ha = Math.max,
  $a = Math.min,
  Ya = Ra([].concat),
  Qa = Ra([].push),
  Ga = Ra("".indexOf),
  Ka = Ra("".slice),
  Ja = "$0" === "a".replace(/./, "$0"),
  Za = !!/./[qa] && "" === /./[qa]("a", "$0");
Ta(
  "replace",
  function (e, t, n) {
    var r = Za ? "$" : "$0";
    return [
      function (e, n) {
        var r = ja(this),
          o = null == e ? void 0 : Wa(e, qa);
        return o ? Fa(o, e, r, n) : Fa(t, Da(r), e, n);
      },
      function (e, o) {
        var i = Pa(this),
          a = Da(e);
        if ("string" == typeof o && -1 === Ga(o, r) && -1 === Ga(o, "$<")) {
          var s = n(t, i, a, o);
          if (s.done) return s.value;
        }
        var c = _a(o);
        c || (o = Da(o));
        var l = i.global;
        if (l) {
          var u = i.unicode;
          i.lastIndex = 0;
        }
        for (var d = []; ; ) {
          var m = Va(i, a);
          if (null === m) break;
          if ((Qa(d, m), !l)) break;
          "" === Da(m[0]) && (i.lastIndex = Ua(a, Na(i.lastIndex), u));
        }
        for (var p, f = "", h = 0, g = 0; g < d.length; g++) {
          for (
            var y = Da((m = d[g])[0]),
              b = Ha($a(La(m.index), a.length), 0),
              v = [],
              w = 1;
            w < m.length;
            w++
          )
            Qa(v, void 0 === (p = m[w]) ? p : String(p));
          var E = m.groups;
          if (c) {
            var S = Ya([y], v, b, a);
            void 0 !== E && Qa(S, E);
            var x = Da(Aa(o, void 0, S));
          } else x = za(y, a, b, v, E, o);
          b >= h && ((f += Ka(a, h, b) + x), (h = b + y.length));
        }
        return f + Ka(a, h);
      },
    ];
  },
  !!Ba(function () {
    var e = /./;
    return (
      (e.exec = function () {
        var e = [];
        return (e.groups = { a: "7" }), e;
      }),
      "7" !== "".replace(e, "$<a>")
    );
  }) ||
    !Ja ||
    Za
);
var Xa = { exports: {} };
!(function (e) {
  var t = Object.prototype.hasOwnProperty,
    n = "~";
  function r() {}
  function o(e, t, n) {
    (this.fn = e), (this.context = t), (this.once = n || !1);
  }
  function i(e, t, r, i, a) {
    if ("function" != typeof r)
      throw new TypeError("The listener must be a function");
    var s = new o(r, i || e, a),
      c = n ? n + t : t;
    return (
      e._events[c]
        ? e._events[c].fn
          ? (e._events[c] = [e._events[c], s])
          : e._events[c].push(s)
        : ((e._events[c] = s), e._eventsCount++),
      e
    );
  }
  function a(e, t) {
    0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
  }
  function s() {
    (this._events = new r()), (this._eventsCount = 0);
  }
  Object.create &&
    ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
    (s.prototype.eventNames = function () {
      var e,
        r,
        o = [];
      if (0 === this._eventsCount) return o;
      for (r in (e = this._events)) t.call(e, r) && o.push(n ? r.slice(1) : r);
      return Object.getOwnPropertySymbols
        ? o.concat(Object.getOwnPropertySymbols(e))
        : o;
    }),
    (s.prototype.listeners = function (e) {
      var t = n ? n + e : e,
        r = this._events[t];
      if (!r) return [];
      if (r.fn) return [r.fn];
      for (var o = 0, i = r.length, a = new Array(i); o < i; o++)
        a[o] = r[o].fn;
      return a;
    }),
    (s.prototype.listenerCount = function (e) {
      var t = n ? n + e : e,
        r = this._events[t];
      return r ? (r.fn ? 1 : r.length) : 0;
    }),
    (s.prototype.emit = function (e, t, r, o, i, a) {
      var s = n ? n + e : e;
      if (!this._events[s]) return !1;
      var c,
        l,
        u = this._events[s],
        d = arguments.length;
      if (u.fn) {
        switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
          case 1:
            return u.fn.call(u.context), !0;
          case 2:
            return u.fn.call(u.context, t), !0;
          case 3:
            return u.fn.call(u.context, t, r), !0;
          case 4:
            return u.fn.call(u.context, t, r, o), !0;
          case 5:
            return u.fn.call(u.context, t, r, o, i), !0;
          case 6:
            return u.fn.call(u.context, t, r, o, i, a), !0;
        }
        for (l = 1, c = new Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
        u.fn.apply(u.context, c);
      } else {
        var m,
          p = u.length;
        for (l = 0; l < p; l++)
          switch (
            (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d)
          ) {
            case 1:
              u[l].fn.call(u[l].context);
              break;
            case 2:
              u[l].fn.call(u[l].context, t);
              break;
            case 3:
              u[l].fn.call(u[l].context, t, r);
              break;
            case 4:
              u[l].fn.call(u[l].context, t, r, o);
              break;
            default:
              if (!c)
                for (m = 1, c = new Array(d - 1); m < d; m++)
                  c[m - 1] = arguments[m];
              u[l].fn.apply(u[l].context, c);
          }
      }
      return !0;
    }),
    (s.prototype.on = function (e, t, n) {
      return i(this, e, t, n, !1);
    }),
    (s.prototype.once = function (e, t, n) {
      return i(this, e, t, n, !0);
    }),
    (s.prototype.removeListener = function (e, t, r, o) {
      var i = n ? n + e : e;
      if (!this._events[i]) return this;
      if (!t) return a(this, i), this;
      var s = this._events[i];
      if (s.fn)
        s.fn !== t || (o && !s.once) || (r && s.context !== r) || a(this, i);
      else {
        for (var c = 0, l = [], u = s.length; c < u; c++)
          (s[c].fn !== t || (o && !s[c].once) || (r && s[c].context !== r)) &&
            l.push(s[c]);
        l.length ? (this._events[i] = 1 === l.length ? l[0] : l) : a(this, i);
      }
      return this;
    }),
    (s.prototype.removeAllListeners = function (e) {
      var t;
      return (
        e
          ? ((t = n ? n + e : e), this._events[t] && a(this, t))
          : ((this._events = new r()), (this._eventsCount = 0)),
        this
      );
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.addListener = s.prototype.on),
    (s.prefixed = n),
    (s.EventEmitter = s),
    (e.exports = s);
})(Xa);
const es = new (0, Xa.exports)(),
  ts = {
    on: (e, t) => es.on(e, t),
    once: (e, t) => es.once(e, t),
    off: (e, t) => es.off(e, t),
    emit: function (e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return es.emit(e, ...n);
    },
  };
Object.freeze(ts);
var ns,
  rs,
  os,
  is = { exports: {} };
(rs = q),
  (os = function () {
    var e = function () {},
      t = "undefined",
      n =
        typeof window !== t &&
        typeof window.navigator !== t &&
        /Trident\/|MSIE /.test(window.navigator.userAgent),
      r = ["trace", "debug", "info", "warn", "error"];
    function o(e, t) {
      var n = e[t];
      if ("function" == typeof n.bind) return n.bind(e);
      try {
        return Function.prototype.bind.call(n, e);
      } catch (t) {
        return function () {
          return Function.prototype.apply.apply(n, [e, arguments]);
        };
      }
    }
    function i() {
      console.log &&
        (console.log.apply
          ? console.log.apply(console, arguments)
          : Function.prototype.apply.apply(console.log, [console, arguments])),
        console.trace && console.trace();
    }
    function a(r) {
      return (
        "debug" === r && (r = "log"),
        typeof console !== t &&
          ("trace" === r && n
            ? i
            : void 0 !== console[r]
            ? o(console, r)
            : void 0 !== console.log
            ? o(console, "log")
            : e)
      );
    }
    function s(t, n) {
      for (var o = 0; o < r.length; o++) {
        var i = r[o];
        this[i] = o < t ? e : this.methodFactory(i, t, n);
      }
      this.log = this.debug;
    }
    function c(e, n, r) {
      return function () {
        typeof console !== t &&
          (s.call(this, n, r), this[e].apply(this, arguments));
      };
    }
    function l(e, t, n) {
      return a(e) || c.apply(this, arguments);
    }
    function u(e, n, o) {
      var i,
        a = this;
      n = null == n ? "WARN" : n;
      var c = "loglevel";
      function u() {
        var e;
        if (typeof window !== t && c) {
          try {
            e = window.localStorage[c];
          } catch (e) {}
          if (typeof e === t)
            try {
              var n = window.document.cookie,
                r = n.indexOf(encodeURIComponent(c) + "=");
              -1 !== r && (e = /^([^;]+)/.exec(n.slice(r))[1]);
            } catch (e) {}
          return void 0 === a.levels[e] && (e = void 0), e;
        }
      }
      "string" == typeof e
        ? (c += ":" + e)
        : "symbol" == typeof e && (c = void 0),
        (a.name = e),
        (a.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5,
        }),
        (a.methodFactory = o || l),
        (a.getLevel = function () {
          return i;
        }),
        (a.setLevel = function (n, o) {
          if (
            ("string" == typeof n &&
              void 0 !== a.levels[n.toUpperCase()] &&
              (n = a.levels[n.toUpperCase()]),
            !("number" == typeof n && n >= 0 && n <= a.levels.SILENT))
          )
            throw "log.setLevel() called with invalid level: " + n;
          if (
            ((i = n),
            !1 !== o &&
              (function (e) {
                var n = (r[e] || "silent").toUpperCase();
                if (typeof window !== t && c) {
                  try {
                    return void (window.localStorage[c] = n);
                  } catch (e) {}
                  try {
                    window.document.cookie =
                      encodeURIComponent(c) + "=" + n + ";";
                  } catch (e) {}
                }
              })(n),
            s.call(a, n, e),
            typeof console === t && n < a.levels.SILENT)
          )
            return "No console available for logging";
        }),
        (a.setDefaultLevel = function (e) {
          (n = e), u() || a.setLevel(e, !1);
        }),
        (a.resetLevel = function () {
          a.setLevel(n, !1),
            (function () {
              if (typeof window !== t && c) {
                try {
                  return void window.localStorage.removeItem(c);
                } catch (e) {}
                try {
                  window.document.cookie =
                    encodeURIComponent(c) +
                    "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                } catch (e) {}
              }
            })();
        }),
        (a.enableAll = function (e) {
          a.setLevel(a.levels.TRACE, e);
        }),
        (a.disableAll = function (e) {
          a.setLevel(a.levels.SILENT, e);
        });
      var d = u();
      null == d && (d = n), a.setLevel(d, !1);
    }
    var d = new u(),
      m = {};
    d.getLogger = function (e) {
      if (("symbol" != typeof e && "string" != typeof e) || "" === e)
        throw new TypeError("You must supply a name when creating a logger.");
      var t = m[e];
      return t || (t = m[e] = new u(e, d.getLevel(), d.methodFactory)), t;
    };
    var p = typeof window !== t ? window.log : void 0;
    return (
      (d.noConflict = function () {
        return typeof window !== t && window.log === d && (window.log = p), d;
      }),
      (d.getLoggers = function () {
        return m;
      }),
      (d.default = d),
      d
    );
  }),
  (ns = is).exports ? (ns.exports = os()) : (rs.log = os());
var as = is.exports,
  ss = { exports: {} },
  cs = Ht("iterator"),
  ls = !1;
try {
  var us = 0,
    ds = {
      next: function () {
        return { done: !!us++ };
      },
      return: function () {
        ls = !0;
      },
    };
  (ds[cs] = function () {
    return this;
  }),
    Array.from(ds, function () {
      throw 2;
    });
} catch (e) {}
var ms,
  ps,
  fs,
  hs = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
  gs = !H(function () {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    );
  }),
  ys = ce,
  bs = At,
  vs = Be,
  ws = Ct,
  Es = gs,
  Ss = Zn("IE_PROTO"),
  xs = ys.Object,
  Ms = xs.prototype,
  Os = Es
    ? xs.getPrototypeOf
    : function (e) {
        var t = ws(e);
        if (bs(t, Ss)) return t[Ss];
        var n = t.constructor;
        return vs(n) && t instanceof n
          ? n.prototype
          : t instanceof xs
          ? Ms
          : null;
      },
  Cs = ce,
  ks = Be,
  Is = Cs.String,
  As = Cs.TypeError,
  Fs = ae,
  Rs = On,
  Ts = function (e) {
    if ("object" == typeof e || ks(e)) return e;
    throw As("Can't set " + Is(e) + " as a prototype");
  },
  Bs =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var e,
            t = !1,
            n = {};
          try {
            (e = Fs(
              Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set
            ))(n, []),
              (t = n instanceof Array);
          } catch (e) {}
          return function (n, r) {
            return Rs(n), Ts(r), t ? e(n, r) : (n.__proto__ = r), n;
          };
        })()
      : void 0),
  Ps = hs,
  _s = ue,
  Ls = ce,
  Ns = Be,
  Ds = _e,
  js = At,
  Us = Vo,
  Ws = at,
  zs = Ln,
  Vs = Nn.exports,
  qs = vn.f,
  Hs = Ue,
  $s = Os,
  Ys = Bs,
  Qs = Ht,
  Gs = Pt,
  Ks = Ls.Int8Array,
  Js = Ks && Ks.prototype,
  Zs = Ls.Uint8ClampedArray,
  Xs = Zs && Zs.prototype,
  ec = Ks && $s(Ks),
  tc = Js && $s(Js),
  nc = Object.prototype,
  rc = Ls.TypeError,
  oc = Qs("toStringTag"),
  ic = Gs("TYPED_ARRAY_TAG"),
  ac = Gs("TYPED_ARRAY_CONSTRUCTOR"),
  sc = Ps && !!Ys && "Opera" !== Us(Ls.opera),
  cc = !1,
  lc = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8,
  },
  uc = { BigInt64Array: 8, BigUint64Array: 8 },
  dc = function (e) {
    if (!Ds(e)) return !1;
    var t = Us(e);
    return js(lc, t) || js(uc, t);
  };
for (ms in lc)
  (fs = (ps = Ls[ms]) && ps.prototype) ? zs(fs, ac, ps) : (sc = !1);
for (ms in uc) (fs = (ps = Ls[ms]) && ps.prototype) && zs(fs, ac, ps);
if (
  (!sc || !Ns(ec) || ec === Function.prototype) &&
  ((ec = function () {
    throw rc("Incorrect invocation");
  }),
  sc)
)
  for (ms in lc) Ls[ms] && Ys(Ls[ms], ec);
if ((!sc || !tc || tc === nc) && ((tc = ec.prototype), sc))
  for (ms in lc) Ls[ms] && Ys(Ls[ms].prototype, tc);
if ((sc && $s(Xs) !== tc && Ys(Xs, tc), _s && !js(tc, oc)))
  for (ms in ((cc = !0),
  qs(tc, oc, {
    get: function () {
      return Ds(this) ? this[ic] : void 0;
    },
  }),
  lc))
    Ls[ms] && zs(Ls[ms], ic, ms);
var mc = {
    NATIVE_ARRAY_BUFFER_VIEWS: sc,
    TYPED_ARRAY_CONSTRUCTOR: ac,
    TYPED_ARRAY_TAG: cc && ic,
    aTypedArray: function (e) {
      if (dc(e)) return e;
      throw rc("Target is not a typed array");
    },
    aTypedArrayConstructor: function (e) {
      if (Ns(e) && (!Ys || Hs(ec, e))) return e;
      throw rc(Ws(e) + " is not a typed array constructor");
    },
    exportTypedArrayMethod: function (e, t, n, r) {
      if (_s) {
        if (n)
          for (var o in lc) {
            var i = Ls[o];
            if (i && js(i.prototype, e))
              try {
                delete i.prototype[e];
              } catch (n) {
                try {
                  i.prototype[e] = t;
                } catch (e) {}
              }
          }
        (tc[e] && !n) || Vs(tc, e, n ? t : (sc && Js[e]) || t, r);
      }
    },
    exportTypedArrayStaticMethod: function (e, t, n) {
      var r, o;
      if (_s) {
        if (Ys) {
          if (n)
            for (r in lc)
              if ((o = Ls[r]) && js(o, e))
                try {
                  delete o[e];
                } catch (e) {}
          if (ec[e] && !n) return;
          try {
            return Vs(ec, e, n ? t : (sc && ec[e]) || t);
          } catch (e) {}
        }
        for (r in lc) !(o = Ls[r]) || (o[e] && !n) || Vs(o, e, t);
      }
    },
    isView: function (e) {
      if (!Ds(e)) return !1;
      var t = Us(e);
      return "DataView" === t || js(lc, t) || js(uc, t);
    },
    isTypedArray: dc,
    TypedArray: ec,
    TypedArrayPrototype: tc,
  },
  pc = ce,
  fc = H,
  hc = function (e, t) {
    if (!t && !ls) return !1;
    var n = !1;
    try {
      var r = {};
      (r[cs] = function () {
        return {
          next: function () {
            return { done: (n = !0) };
          },
        };
      }),
        e(r);
    } catch (e) {}
    return n;
  },
  gc = mc.NATIVE_ARRAY_BUFFER_VIEWS,
  yc = pc.ArrayBuffer,
  bc = pc.Int8Array,
  vc =
    !gc ||
    !fc(function () {
      bc(1);
    }) ||
    !fc(function () {
      new bc(-1);
    }) ||
    !hc(function (e) {
      new bc(), new bc(null), new bc(1.5), new bc(e);
    }, !0) ||
    fc(function () {
      return 1 !== new bc(new yc(2), 1, void 0).length;
    }),
  wc = Nn.exports,
  Ec = Ue,
  Sc = ce.TypeError,
  xc = function (e, t) {
    if (Ec(t, e)) return e;
    throw Sc("Incorrect invocation");
  },
  Mc = Lr,
  Oc = Vr,
  Cc = ce.RangeError,
  kc = function (e) {
    if (void 0 === e) return 0;
    var t = Mc(e),
      n = Oc(t);
    if (t !== n) throw Cc("Wrong length or index");
    return n;
  },
  Ic = ce.Array,
  Ac = Math.abs,
  Fc = Math.pow,
  Rc = Math.floor,
  Tc = Math.log,
  Bc = Math.LN2,
  Pc = {
    pack: function (e, t, n) {
      var r,
        o,
        i,
        a = Ic(n),
        s = 8 * n - t - 1,
        c = (1 << s) - 1,
        l = c >> 1,
        u = 23 === t ? Fc(2, -24) - Fc(2, -77) : 0,
        d = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
        m = 0;
      for (
        (e = Ac(e)) != e || e === 1 / 0
          ? ((o = e != e ? 1 : 0), (r = c))
          : ((r = Rc(Tc(e) / Bc)),
            e * (i = Fc(2, -r)) < 1 && (r--, (i *= 2)),
            (e += r + l >= 1 ? u / i : u * Fc(2, 1 - l)) * i >= 2 &&
              (r++, (i /= 2)),
            r + l >= c
              ? ((o = 0), (r = c))
              : r + l >= 1
              ? ((o = (e * i - 1) * Fc(2, t)), (r += l))
              : ((o = e * Fc(2, l - 1) * Fc(2, t)), (r = 0)));
        t >= 8;

      )
        (a[m++] = 255 & o), (o /= 256), (t -= 8);
      for (r = (r << t) | o, s += t; s > 0; )
        (a[m++] = 255 & r), (r /= 256), (s -= 8);
      return (a[--m] |= 128 * d), a;
    },
    unpack: function (e, t) {
      var n,
        r = e.length,
        o = 8 * r - t - 1,
        i = (1 << o) - 1,
        a = i >> 1,
        s = o - 7,
        c = r - 1,
        l = e[c--],
        u = 127 & l;
      for (l >>= 7; s > 0; ) (u = 256 * u + e[c--]), (s -= 8);
      for (n = u & ((1 << -s) - 1), u >>= -s, s += t; s > 0; )
        (n = 256 * n + e[c--]), (s -= 8);
      if (0 === u) u = 1 - a;
      else {
        if (u === i) return n ? NaN : l ? -1 / 0 : 1 / 0;
        (n += Fc(2, t)), (u -= a);
      }
      return (l ? -1 : 1) * n * Fc(2, u - t);
    },
  },
  _c = Ct,
  Lc = Ur,
  Nc = Hr,
  Dc = nn,
  jc = vn,
  Uc = ye,
  Wc = Ur,
  zc = Hr,
  Vc = function (e, t, n) {
    var r = Dc(t);
    r in e ? jc.f(e, r, Uc(0, n)) : (e[r] = n);
  },
  qc = ce.Array,
  Hc = Math.max,
  $c = function (e, t, n) {
    for (
      var r = zc(e),
        o = Wc(t, r),
        i = Wc(void 0 === n ? r : n, r),
        a = qc(Hc(i - o, 0)),
        s = 0;
      o < i;
      o++, s++
    )
      Vc(a, s, e[o]);
    return (a.length = s), a;
  },
  Yc = vn.f,
  Qc = At,
  Gc = Ht("toStringTag"),
  Kc = ce,
  Jc = ae,
  Zc = ue,
  Xc = hs,
  el = Sr,
  tl = Ln,
  nl = function (e, t, n) {
    for (var r in t) wc(e, r, t[r], n);
    return e;
  },
  rl = H,
  ol = xc,
  il = Lr,
  al = Vr,
  sl = kc,
  cl = Pc,
  ll = Os,
  ul = Bs,
  dl = Br.f,
  ml = vn.f,
  pl = function (e) {
    for (
      var t = _c(this),
        n = Nc(t),
        r = arguments.length,
        o = Lc(r > 1 ? arguments[1] : void 0, n),
        i = r > 2 ? arguments[2] : void 0,
        a = void 0 === i ? n : Lc(i, n);
      a > o;

    )
      t[o++] = e;
    return t;
  },
  fl = $c,
  hl = function (e, t, n) {
    e && !n && (e = e.prototype),
      e && !Qc(e, Gc) && Yc(e, Gc, { configurable: !0, value: t });
  },
  gl = el.PROPER,
  yl = el.CONFIGURABLE,
  bl = gr.get,
  vl = gr.set,
  wl = Kc.ArrayBuffer,
  El = wl,
  Sl = El && El.prototype,
  xl = Kc.DataView,
  Ml = xl && xl.prototype,
  Ol = Object.prototype,
  Cl = Kc.Array,
  kl = Kc.RangeError,
  Il = Jc(pl),
  Al = Jc([].reverse),
  Fl = cl.pack,
  Rl = cl.unpack,
  Tl = function (e) {
    return [255 & e];
  },
  Bl = function (e) {
    return [255 & e, (e >> 8) & 255];
  },
  Pl = function (e) {
    return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
  },
  _l = function (e) {
    return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
  },
  Ll = function (e) {
    return Fl(e, 23, 4);
  },
  Nl = function (e) {
    return Fl(e, 52, 8);
  },
  Dl = function (e, t) {
    ml(e.prototype, t, {
      get: function () {
        return bl(this)[t];
      },
    });
  },
  jl = function (e, t, n, r) {
    var o = sl(n),
      i = bl(e);
    if (o + t > i.byteLength) throw kl("Wrong index");
    var a = bl(i.buffer).bytes,
      s = o + i.byteOffset,
      c = fl(a, s, s + t);
    return r ? c : Al(c);
  },
  Ul = function (e, t, n, r, o, i) {
    var a = sl(n),
      s = bl(e);
    if (a + t > s.byteLength) throw kl("Wrong index");
    for (
      var c = bl(s.buffer).bytes, l = a + s.byteOffset, u = r(+o), d = 0;
      d < t;
      d++
    )
      c[l + d] = u[i ? d : t - d - 1];
  };
if (Xc) {
  var Wl = gl && "ArrayBuffer" !== wl.name;
  if (
    rl(function () {
      wl(1);
    }) &&
    rl(function () {
      new wl(-1);
    }) &&
    !rl(function () {
      return new wl(), new wl(1.5), new wl(NaN), Wl && !yl;
    })
  )
    Wl && yl && tl(wl, "name", "ArrayBuffer");
  else {
    (El = function (e) {
      return ol(this, Sl), new wl(sl(e));
    }).prototype = Sl;
    for (var zl, Vl = dl(wl), ql = 0; Vl.length > ql; )
      (zl = Vl[ql++]) in El || tl(El, zl, wl[zl]);
    Sl.constructor = El;
  }
  ul && ll(Ml) !== Ol && ul(Ml, Ol);
  var Hl = new xl(new El(2)),
    $l = Jc(Ml.setInt8);
  Hl.setInt8(0, 2147483648),
    Hl.setInt8(1, 2147483649),
    (!Hl.getInt8(0) && Hl.getInt8(1)) ||
      nl(
        Ml,
        {
          setInt8: function (e, t) {
            $l(this, e, (t << 24) >> 24);
          },
          setUint8: function (e, t) {
            $l(this, e, (t << 24) >> 24);
          },
        },
        { unsafe: !0 }
      );
} else
  (Sl = (El = function (e) {
    ol(this, Sl);
    var t = sl(e);
    vl(this, { bytes: Il(Cl(t), 0), byteLength: t }),
      Zc || (this.byteLength = t);
  }).prototype),
    (Ml = (xl = function (e, t, n) {
      ol(this, Ml), ol(e, Sl);
      var r = bl(e).byteLength,
        o = il(t);
      if (o < 0 || o > r) throw kl("Wrong offset");
      if (o + (n = void 0 === n ? r - o : al(n)) > r) throw kl("Wrong length");
      vl(this, { buffer: e, byteLength: n, byteOffset: o }),
        Zc || ((this.buffer = e), (this.byteLength = n), (this.byteOffset = o));
    }).prototype),
    Zc &&
      (Dl(El, "byteLength"),
      Dl(xl, "buffer"),
      Dl(xl, "byteLength"),
      Dl(xl, "byteOffset")),
    nl(Ml, {
      getInt8: function (e) {
        return (jl(this, 1, e)[0] << 24) >> 24;
      },
      getUint8: function (e) {
        return jl(this, 1, e)[0];
      },
      getInt16: function (e) {
        var t = jl(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
        return (((t[1] << 8) | t[0]) << 16) >> 16;
      },
      getUint16: function (e) {
        var t = jl(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
        return (t[1] << 8) | t[0];
      },
      getInt32: function (e) {
        return _l(jl(this, 4, e, arguments.length > 1 ? arguments[1] : void 0));
      },
      getUint32: function (e) {
        return (
          _l(jl(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
        );
      },
      getFloat32: function (e) {
        return Rl(
          jl(this, 4, e, arguments.length > 1 ? arguments[1] : void 0),
          23
        );
      },
      getFloat64: function (e) {
        return Rl(
          jl(this, 8, e, arguments.length > 1 ? arguments[1] : void 0),
          52
        );
      },
      setInt8: function (e, t) {
        Ul(this, 1, e, Tl, t);
      },
      setUint8: function (e, t) {
        Ul(this, 1, e, Tl, t);
      },
      setInt16: function (e, t) {
        Ul(this, 2, e, Bl, t, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint16: function (e, t) {
        Ul(this, 2, e, Bl, t, arguments.length > 2 ? arguments[2] : void 0);
      },
      setInt32: function (e, t) {
        Ul(this, 4, e, Pl, t, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint32: function (e, t) {
        Ul(this, 4, e, Pl, t, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat32: function (e, t) {
        Ul(this, 4, e, Ll, t, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat64: function (e, t) {
        Ul(this, 8, e, Nl, t, arguments.length > 2 ? arguments[2] : void 0);
      },
    });
hl(El, "ArrayBuffer"), hl(xl, "DataView");
var Yl = { ArrayBuffer: El, DataView: xl },
  Ql = _e,
  Gl = Math.floor,
  Kl =
    Number.isInteger ||
    function (e) {
      return !Ql(e) && isFinite(e) && Gl(e) === e;
    },
  Jl = Lr,
  Zl = ce.RangeError,
  Xl = function (e) {
    var t = Jl(e);
    if (t < 0) throw Zl("The argument can't be less than 0");
    return t;
  },
  eu = ce.RangeError,
  tu = function (e, t) {
    var n = Xl(e);
    if (n % t) throw eu("Wrong offset");
    return n;
  },
  nu = ut,
  ru = $,
  ou = ae(ae.bind),
  iu = function (e, t) {
    return (
      nu(e),
      void 0 === t
        ? e
        : ru
        ? ou(e, t)
        : function () {
            return e.apply(t, arguments);
          }
    );
  },
  au = ae,
  su = H,
  cu = Be,
  lu = Vo,
  uu = qn,
  du = function () {},
  mu = [],
  pu = je("Reflect", "construct"),
  fu = /^\s*(?:class|function)\b/,
  hu = au(fu.exec),
  gu = !fu.exec(du),
  yu = function (e) {
    if (!cu(e)) return !1;
    try {
      return pu(du, mu, e), !0;
    } catch (e) {
      return !1;
    }
  },
  bu = function (e) {
    if (!cu(e)) return !1;
    switch (lu(e)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return gu || !!hu(fu, uu(e));
    } catch (e) {
      return !0;
    }
  };
bu.sham = !0;
var vu =
    !pu ||
    su(function () {
      var e;
      return (
        yu(yu.call) ||
        !yu(Object) ||
        !yu(function () {
          e = !0;
        }) ||
        e
      );
    })
      ? bu
      : yu,
  wu = vu,
  Eu = at,
  Su = ce.TypeError,
  xu = {},
  Mu = Vo,
  Ou = mt,
  Cu = xu,
  ku = Ht("iterator"),
  Iu = function (e) {
    if (null != e) return Ou(e, ku) || Ou(e, "@@iterator") || Cu[Mu(e)];
  },
  Au = ee,
  Fu = ut,
  Ru = On,
  Tu = at,
  Bu = Iu,
  Pu = ce.TypeError,
  _u = xu,
  Lu = Ht("iterator"),
  Nu = Array.prototype,
  Du = iu,
  ju = ee,
  Uu = function (e) {
    if (wu(e)) return e;
    throw Su(Eu(e) + " is not a constructor");
  },
  Wu = Ct,
  zu = Hr,
  Vu = function (e, t) {
    var n = arguments.length < 2 ? Bu(e) : t;
    if (Fu(n)) return Ru(Au(n, e));
    throw Pu(Tu(e) + " is not iterable");
  },
  qu = Iu,
  Hu = function (e) {
    return void 0 !== e && (_u.Array === e || Nu[Lu] === e);
  },
  $u = mc.aTypedArrayConstructor,
  Yu = Ee,
  Qu = ce,
  Gu =
    Array.isArray ||
    function (e) {
      return "Array" == Yu(e);
    },
  Ku = vu,
  Ju = _e,
  Zu = Ht("species"),
  Xu = Qu.Array,
  ed = function (e) {
    var t;
    return (
      Gu(e) &&
        ((t = e.constructor),
        ((Ku(t) && (t === Xu || Gu(t.prototype))) ||
          (Ju(t) && null === (t = t[Zu]))) &&
          (t = void 0)),
      void 0 === t ? Xu : t
    );
  },
  td = iu,
  nd = ke,
  rd = Ct,
  od = Hr,
  id = function (e, t) {
    return new (ed(e))(0 === t ? 0 : t);
  },
  ad = ae([].push),
  sd = function (e) {
    var t = 1 == e,
      n = 2 == e,
      r = 3 == e,
      o = 4 == e,
      i = 6 == e,
      a = 7 == e,
      s = 5 == e || i;
    return function (c, l, u, d) {
      for (
        var m,
          p,
          f = rd(c),
          h = nd(f),
          g = td(l, u),
          y = od(h),
          b = 0,
          v = d || id,
          w = t ? v(c, y) : n || a ? v(c, 0) : void 0;
        y > b;
        b++
      )
        if ((s || b in h) && ((p = g((m = h[b]), b, f)), e))
          if (t) w[b] = p;
          else if (p)
            switch (e) {
              case 3:
                return !0;
              case 5:
                return m;
              case 6:
                return b;
              case 2:
                ad(w, m);
            }
          else
            switch (e) {
              case 4:
                return !1;
              case 7:
                ad(w, m);
            }
      return i ? -1 : r || o ? o : w;
    };
  },
  cd = {
    forEach: sd(0),
    map: sd(1),
    filter: sd(2),
    some: sd(3),
    every: sd(4),
    find: sd(5),
    findIndex: sd(6),
    filterReject: sd(7),
  },
  ld = je,
  ud = vn,
  dd = ue,
  md = Ht("species"),
  pd = Be,
  fd = _e,
  hd = Bs,
  gd = Po,
  yd = ce,
  bd = ee,
  vd = ue,
  wd = vc,
  Ed = mc,
  Sd = Yl,
  xd = xc,
  Md = ye,
  Od = Ln,
  Cd = Kl,
  kd = Vr,
  Id = kc,
  Ad = tu,
  Fd = nn,
  Rd = At,
  Td = Vo,
  Bd = _e,
  Pd = ot,
  _d = Mi,
  Ld = Ue,
  Nd = Bs,
  Dd = Br.f,
  jd = function (e) {
    var t,
      n,
      r,
      o,
      i,
      a,
      s = Uu(this),
      c = Wu(e),
      l = arguments.length,
      u = l > 1 ? arguments[1] : void 0,
      d = void 0 !== u,
      m = qu(c);
    if (m && !Hu(m))
      for (a = (i = Vu(c, m)).next, c = []; !(o = ju(a, i)).done; )
        c.push(o.value);
    for (
      d && l > 2 && (u = Du(u, arguments[2])),
        n = zu(c),
        r = new ($u(s))(n),
        t = 0;
      n > t;
      t++
    )
      r[t] = d ? u(c[t], t) : c[t];
    return r;
  },
  Ud = cd.forEach,
  Wd = function (e) {
    var t = ld(e),
      n = ud.f;
    dd &&
      t &&
      !t[md] &&
      n(t, md, {
        configurable: !0,
        get: function () {
          return this;
        },
      });
  },
  zd = vn,
  Vd = le,
  qd = function (e, t, n) {
    var r, o;
    return (
      hd &&
        pd((r = t.constructor)) &&
        r !== n &&
        fd((o = r.prototype)) &&
        o !== n.prototype &&
        hd(e, o),
      e
    );
  },
  Hd = gr.get,
  $d = gr.set,
  Yd = zd.f,
  Qd = Vd.f,
  Gd = Math.round,
  Kd = yd.RangeError,
  Jd = Sd.ArrayBuffer,
  Zd = Jd.prototype,
  Xd = Sd.DataView,
  em = Ed.NATIVE_ARRAY_BUFFER_VIEWS,
  tm = Ed.TYPED_ARRAY_CONSTRUCTOR,
  nm = Ed.TYPED_ARRAY_TAG,
  rm = Ed.TypedArray,
  om = Ed.TypedArrayPrototype,
  im = Ed.aTypedArrayConstructor,
  am = Ed.isTypedArray,
  sm = function (e, t) {
    im(e);
    for (var n = 0, r = t.length, o = new e(r); r > n; ) o[n] = t[n++];
    return o;
  },
  cm = function (e, t) {
    Yd(e, t, {
      get: function () {
        return Hd(this)[t];
      },
    });
  },
  lm = function (e) {
    var t;
    return (
      Ld(Zd, e) || "ArrayBuffer" == (t = Td(e)) || "SharedArrayBuffer" == t
    );
  },
  um = function (e, t) {
    return am(e) && !Pd(t) && t in e && Cd(+t) && t >= 0;
  },
  dm = function (e, t) {
    return (t = Fd(t)), um(e, t) ? Md(2, e[t]) : Qd(e, t);
  },
  mm = function (e, t, n) {
    return (
      (t = Fd(t)),
      !(um(e, t) && Bd(n) && Rd(n, "value")) ||
      Rd(n, "get") ||
      Rd(n, "set") ||
      n.configurable ||
      (Rd(n, "writable") && !n.writable) ||
      (Rd(n, "enumerable") && !n.enumerable)
        ? Yd(e, t, n)
        : ((e[t] = n.value), e)
    );
  };
vd
  ? (em ||
      ((Vd.f = dm),
      (zd.f = mm),
      cm(om, "buffer"),
      cm(om, "byteOffset"),
      cm(om, "byteLength"),
      cm(om, "length")),
    gd(
      { target: "Object", stat: !0, forced: !em },
      { getOwnPropertyDescriptor: dm, defineProperty: mm }
    ),
    (ss.exports = function (e, t, n) {
      var r = e.match(/\d+$/)[0] / 8,
        o = e + (n ? "Clamped" : "") + "Array",
        i = "get" + e,
        a = "set" + e,
        s = yd[o],
        c = s,
        l = c && c.prototype,
        u = {},
        d = function (e, t) {
          Yd(e, t, {
            get: function () {
              return (function (e, t) {
                var n = Hd(e);
                return n.view[i](t * r + n.byteOffset, !0);
              })(this, t);
            },
            set: function (e) {
              return (function (e, t, o) {
                var i = Hd(e);
                n && (o = (o = Gd(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o),
                  i.view[a](t * r + i.byteOffset, o, !0);
              })(this, t, e);
            },
            enumerable: !0,
          });
        };
      em
        ? wd &&
          ((c = t(function (e, t, n, o) {
            return (
              xd(e, l),
              qd(
                Bd(t)
                  ? lm(t)
                    ? void 0 !== o
                      ? new s(t, Ad(n, r), o)
                      : void 0 !== n
                      ? new s(t, Ad(n, r))
                      : new s(t)
                    : am(t)
                    ? sm(c, t)
                    : bd(jd, c, t)
                  : new s(Id(t)),
                e,
                c
              )
            );
          })),
          Nd && Nd(c, rm),
          Ud(Dd(s), function (e) {
            e in c || Od(c, e, s[e]);
          }),
          (c.prototype = l))
        : ((c = t(function (e, t, n, o) {
            xd(e, l);
            var i,
              a,
              s,
              u = 0,
              m = 0;
            if (Bd(t)) {
              if (!lm(t)) return am(t) ? sm(c, t) : bd(jd, c, t);
              (i = t), (m = Ad(n, r));
              var p = t.byteLength;
              if (void 0 === o) {
                if (p % r) throw Kd("Wrong length");
                if ((a = p - m) < 0) throw Kd("Wrong length");
              } else if ((a = kd(o) * r) + m > p) throw Kd("Wrong length");
              s = a / r;
            } else (s = Id(t)), (i = new Jd((a = s * r)));
            for (
              $d(e, {
                buffer: i,
                byteOffset: m,
                byteLength: a,
                length: s,
                view: new Xd(i),
              });
              u < s;

            )
              d(e, u++);
          })),
          Nd && Nd(c, rm),
          (l = c.prototype = _d(om))),
        l.constructor !== c && Od(l, "constructor", c),
        Od(l, tm, c),
        nm && Od(l, nm, o),
        (u[o] = c),
        gd({ global: !0, forced: c != s, sham: !em }, u),
        "BYTES_PER_ELEMENT" in c || Od(c, "BYTES_PER_ELEMENT", r),
        "BYTES_PER_ELEMENT" in l || Od(l, "BYTES_PER_ELEMENT", r),
        Wd(o);
    }))
  : (ss.exports = function () {}),
  (0, ss.exports)("Uint8", function (e) {
    return function (t, n, r) {
      return e(this, t, n, r);
    };
  });
var pm = Hr,
  fm = Lr,
  hm = mc.aTypedArray;
(0, mc.exportTypedArrayMethod)("at", function (e) {
  var t = hm(this),
    n = pm(t),
    r = fm(e),
    o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? void 0 : t[o];
});
var gm = ce,
  ym = ee,
  bm = mc,
  vm = Hr,
  wm = tu,
  Em = Ct,
  Sm = H,
  xm = gm.RangeError,
  Mm = gm.Int8Array,
  Om = Mm && Mm.prototype,
  Cm = Om && Om.set,
  km = bm.aTypedArray,
  Im = bm.exportTypedArrayMethod,
  Am = !Sm(function () {
    var e = new Uint8ClampedArray(2);
    return ym(Cm, e, { length: 1, 0: 3 }, 1), 3 !== e[1];
  }),
  Fm =
    Am &&
    bm.NATIVE_ARRAY_BUFFER_VIEWS &&
    Sm(function () {
      var e = new Mm(2);
      return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1];
    });
Im(
  "set",
  function (e) {
    km(this);
    var t = wm(arguments.length > 1 ? arguments[1] : void 0, 1),
      n = Em(e);
    if (Am) return ym(Cm, this, n, t);
    var r = this.length,
      o = vm(n),
      i = 0;
    if (o + t > r) throw xm("Wrong length");
    for (; i < o; ) this[t + i] = n[i++];
  },
  !Am || Fm
);
var Rm = $c,
  Tm = Math.floor,
  Bm = function (e, t) {
    var n = e.length,
      r = Tm(n / 2);
    return n < 8 ? Pm(e, t) : _m(e, Bm(Rm(e, 0, r), t), Bm(Rm(e, r), t), t);
  },
  Pm = function (e, t) {
    for (var n, r, o = e.length, i = 1; i < o; ) {
      for (r = i, n = e[i]; r && t(e[r - 1], n) > 0; ) e[r] = e[--r];
      r !== i++ && (e[r] = n);
    }
    return e;
  },
  _m = function (e, t, n, r) {
    for (var o = t.length, i = n.length, a = 0, s = 0; a < o || s < i; )
      e[a + s] =
        a < o && s < i
          ? r(t[a], n[s]) <= 0
            ? t[a++]
            : n[s++]
          : a < o
          ? t[a++]
          : n[s++];
    return e;
  },
  Lm = Bm,
  Nm = We.match(/firefox\/(\d+)/i),
  Dm = !!Nm && +Nm[1],
  jm = /MSIE|Trident/.test(We),
  Um = We.match(/AppleWebKit\/(\d+)\./),
  Wm = !!Um && +Um[1],
  zm = ce,
  Vm = ae,
  qm = H,
  Hm = ut,
  $m = Lm,
  Ym = mc,
  Qm = Dm,
  Gm = jm,
  Km = Qe,
  Jm = Wm,
  Zm = zm.Array,
  Xm = Ym.aTypedArray,
  ep = Ym.exportTypedArrayMethod,
  tp = zm.Uint16Array,
  np = tp && Vm(tp.prototype.sort),
  rp = !(
    !np ||
    (qm(function () {
      np(new tp(2), null);
    }) &&
      qm(function () {
        np(new tp(2), {});
      }))
  ),
  op =
    !!np &&
    !qm(function () {
      if (Km) return Km < 74;
      if (Qm) return Qm < 67;
      if (Gm) return !0;
      if (Jm) return Jm < 602;
      var e,
        t,
        n = new tp(516),
        r = Zm(516);
      for (e = 0; e < 516; e++)
        (t = e % 4), (n[e] = 515 - e), (r[e] = e - 2 * t + 3);
      for (
        np(n, function (e, t) {
          return ((e / 4) | 0) - ((t / 4) | 0);
        }),
          e = 0;
        e < 516;
        e++
      )
        if (n[e] !== r[e]) return !0;
    });
function ip(e) {
  return "function" == typeof e;
}
function ap(e) {
  return null == e;
}
function sp(e) {
  return !ap(e) && "object" == typeof e && !Array.isArray(e);
}
function cp(e) {
  return e < 1e3
    ? e.toFixed(1) + " bps"
    : e < 1e6
    ? (e / 1e3).toFixed(1) + " kbps"
    : (e / 1e6).toFixed(1) + " Mbps";
}
function lp(e) {
  return "string" == typeof e || e instanceof String;
}
function up(e) {
  return btoa(
    (function (e) {
      let t,
        n = [];
      for (t = 0; t < e.length; t += 32768)
        n.push(String.fromCharCode.apply(null, e.subarray(t, t + 32768)));
      return n.join("");
    })(new Uint8Array(e))
  );
}
function dp(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function mp(e, n, r) {
  let o = n || "20px",
    i = r || "0";
  return t.createElement("div", { style: { padding: i + " " + o } }, e);
}
function pp(e, n) {
  return t.createElement("div", { title: e }, n);
}
function fp(e) {
  return (e || window).document.documentElement.clientHeight;
}
function hp(e) {
  return -1 !== ["available", "active"].indexOf(e);
}
function gp(e) {
  return -1 !== ["available", "attached", "streaming"].indexOf(e);
}
ep(
  "sort",
  function (e) {
    return (
      void 0 !== e && Hm(e),
      op
        ? np(this, e)
        : $m(
            Xm(this),
            (function (e) {
              return function (t, n) {
                return void 0 !== e
                  ? +e(t, n) || 0
                  : n != n
                  ? -1
                  : t != t
                  ? 1
                  : 0 === t && 0 === n
                  ? 1 / t > 0 && 1 / n < 0
                    ? 1
                    : -1
                  : t > n;
              };
            })(e)
          )
    );
  },
  !op || rp
);
const yp = "Auto-hide toolbar",
  bp =
    "Automatically hide the toolbar and display it only moving the mouse to the top border.",
  vp = "Auto-hide toolbar only in fullscreen",
  wp = "Fix the bar on the top only in windowed mode.",
  Ep = "Always display the toolbar",
  Sp = "Fix the bar on the top.",
  xp = {
    label: "Best responsiveness",
    description: "Provide most fluid experience.",
    minQuality: 20,
    maxQuality: 90,
  },
  Mp = {
    label: "Best quality",
    description: "Provide best image quality.",
    minQuality: 70,
    maxQuality: 90,
  },
  Op = "adaptive",
  Cp = "current",
  kp = [
    { width: 1920, height: 1080 },
    { width: 1440, height: 900 },
    { width: 1024, height: 768 },
    { width: 800, height: 600 },
  ];
let Ip;
function Ap() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)") &&
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener &&
    window.matchMedia("(prefers-color-scheme: dark)").removeEventListener
  );
}
function Fp() {
  return Ip;
}
Ap() && (Ip = window.matchMedia("(prefers-color-scheme: dark)"));
const Rp = (e, t) => {
    o(e.matches ? i.Dark : i.Light, t);
  },
  Tp = (e, t) => {
    switch (e) {
      case "System default":
        Ip && Rp(Ip, t);
        break;
      case "Light mode":
        o(i.Light, t);
        break;
      case "Dark mode":
        o(i.Dark, t);
    }
  };
as.getLogger("settings");
let Bp = {
  sessionId: "",
  authToken: "",
  promptReconnect: !0,
  logLevel: "info",
  wss: !0,
  enabledChannels: [],
  customChannels: [],
  displayCodecs: [],
  enableQU: !0,
  minQuality: 30,
  maxQuality: 0,
  maxDisplayWidth: 0,
  maxDisplayHeight: 0,
  minDisplayWidth: 640,
  minDisplayHeight: 480,
  debugLayer: !1,
  clientHiDpiScaling: !0,
  enableWebCodecs: !0,
  losslessColorspace: "rgb",
  dynamicResolution: !0,
  enableShortcutEditor: !1,
  scaleToFit: !1,
  volume: 100,
  microphone: !1,
  webcam: !1,
  macOptionToAlt: !0,
  macCommandToControl: !1,
  appearanceMode: Ap() ? "System default" : "Light mode",
  toolbarBehavior: vp,
  displayQuality: xp.label,
  metricsEnabled: !1,
  selectedResolution: Op,
  selectedWebcamId: null,
  highColorAccuracy: !1,
  forceKeyboardCombinations: !1,
};
function Pp() {
  localStorage.setItem("dcv-settings", JSON.stringify(Bp));
}
let _p,
  Lp,
  Np = {},
  Dp = [];
function jp(e) {
  Lp.queryFeature(e)
    .then((t) => {
      ip(Np[e]) && Np[e](t);
    })
    .catch((t) => {
      _p.info(
        "[UI][Feature handler] Query for " +
          e +
          " denied with message: " +
          t.message
      );
    });
}
function Up(e) {
  e.length > 0 &&
    (function (e) {
      e.forEach((e) => {
        -1 !== Object.keys(Np).indexOf(e)
          ? jp(e)
          : (Dp.push(e),
            _p &&
              _p.info(
                "[UI][Feature handler] No callback for feature " +
                  e +
                  " adding to pending."
              ));
      });
    })(e);
}
function Wp(e, t) {
  e && ip(t)
    ? ((Np[e] = t),
      _p.info("[UI] Added feature listener for: " + e),
      _p.debug("[UI] Callbacks " + Object.keys(Np)),
      _p.debug("[UI][Feature] Pending updates " + Dp),
      -1 !== Dp.indexOf(e) && (jp(e), Dp.splice(Dp.indexOf(e), 1)))
    : _p.warn("[UI] Wrong parameters for addFeatureListener");
}
const zp = {
    "Amazon Silk": "amazon_silk",
    "Android Browser": "android",
    Bada: "bada",
    BlackBerry: "blackberry",
    Chrome: "chrome",
    Chromium: "chromium",
    Electron: "electron",
    Epiphany: "epiphany",
    Firefox: "firefox",
    Focus: "focus",
    Generic: "generic",
    "Google Search": "google_search",
    Googlebot: "googlebot",
    "Internet Explorer": "ie",
    "K-Meleon": "k_meleon",
    Maxthon: "maxthon",
    "Microsoft Edge": "edge",
    "MZ Browser": "mz",
    "NAVER Whale Browser": "naver",
    Opera: "opera",
    "Opera Coast": "opera_coast",
    PhantomJS: "phantomjs",
    Puffin: "puffin",
    QupZilla: "qupzilla",
    QQ: "qq",
    QQLite: "qqlite",
    Safari: "safari",
    Sailfish: "sailfish",
    "Samsung Internet for Android": "samsung_internet",
    SeaMonkey: "seamonkey",
    Sleipnir: "sleipnir",
    Swing: "swing",
    Tizen: "tizen",
    "UC Browser": "uc",
    Vivaldi: "vivaldi",
    "WebOS Browser": "webos",
    WeChat: "wechat",
    "Yandex Browser": "yandex",
    Roku: "roku",
  },
  Vp = {
    amazon_silk: "Amazon Silk",
    android: "Android Browser",
    bada: "Bada",
    blackberry: "BlackBerry",
    chrome: "Chrome",
    chromium: "Chromium",
    electron: "Electron",
    epiphany: "Epiphany",
    firefox: "Firefox",
    focus: "Focus",
    generic: "Generic",
    googlebot: "Googlebot",
    google_search: "Google Search",
    ie: "Internet Explorer",
    k_meleon: "K-Meleon",
    maxthon: "Maxthon",
    edge: "Microsoft Edge",
    mz: "MZ Browser",
    naver: "NAVER Whale Browser",
    opera: "Opera",
    opera_coast: "Opera Coast",
    phantomjs: "PhantomJS",
    puffin: "Puffin",
    qupzilla: "QupZilla",
    qq: "QQ Browser",
    qqlite: "QQ Browser Lite",
    safari: "Safari",
    sailfish: "Sailfish",
    samsung_internet: "Samsung Internet for Android",
    seamonkey: "SeaMonkey",
    sleipnir: "Sleipnir",
    swing: "Swing",
    tizen: "Tizen",
    uc: "UC Browser",
    vivaldi: "Vivaldi",
    webos: "WebOS Browser",
    wechat: "WeChat",
    yandex: "Yandex Browser",
  },
  qp = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" },
  Hp = {
    WindowsPhone: "Windows Phone",
    Windows: "Windows",
    MacOS: "macOS",
    iOS: "iOS",
    Android: "Android",
    WebOS: "WebOS",
    BlackBerry: "BlackBerry",
    Bada: "Bada",
    Tizen: "Tizen",
    Linux: "Linux",
    ChromeOS: "Chrome OS",
    PlayStation4: "PlayStation 4",
    Roku: "Roku",
  },
  $p = {
    EdgeHTML: "EdgeHTML",
    Blink: "Blink",
    Trident: "Trident",
    Presto: "Presto",
    Gecko: "Gecko",
    WebKit: "WebKit",
  };
class Yp {
  static getFirstMatch(e, t) {
    const n = t.match(e);
    return (n && n.length > 0 && n[1]) || "";
  }
  static getSecondMatch(e, t) {
    const n = t.match(e);
    return (n && n.length > 1 && n[2]) || "";
  }
  static matchAndReturnConst(e, t, n) {
    if (e.test(t)) return n;
  }
  static getWindowsVersionName(e) {
    switch (e) {
      case "NT":
        return "NT";
      case "XP":
      case "NT 5.1":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  static getMacOSVersionName(e) {
    const t = e
      .split(".")
      .splice(0, 2)
      .map((e) => parseInt(e, 10) || 0);
    if ((t.push(0), 10 === t[0]))
      switch (t[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
  }
  static getAndroidVersionName(e) {
    const t = e
      .split(".")
      .splice(0, 2)
      .map((e) => parseInt(e, 10) || 0);
    if ((t.push(0), !(1 === t[0] && t[1] < 5)))
      return 1 === t[0] && t[1] < 6
        ? "Cupcake"
        : 1 === t[0] && t[1] >= 6
        ? "Donut"
        : 2 === t[0] && t[1] < 2
        ? "Eclair"
        : 2 === t[0] && 2 === t[1]
        ? "Froyo"
        : 2 === t[0] && t[1] > 2
        ? "Gingerbread"
        : 3 === t[0]
        ? "Honeycomb"
        : 4 === t[0] && t[1] < 1
        ? "Ice Cream Sandwich"
        : 4 === t[0] && t[1] < 4
        ? "Jelly Bean"
        : 4 === t[0] && t[1] >= 4
        ? "KitKat"
        : 5 === t[0]
        ? "Lollipop"
        : 6 === t[0]
        ? "Marshmallow"
        : 7 === t[0]
        ? "Nougat"
        : 8 === t[0]
        ? "Oreo"
        : 9 === t[0]
        ? "Pie"
        : void 0;
  }
  static getVersionPrecision(e) {
    return e.split(".").length;
  }
  static compareVersions(e, t, n = !1) {
    const r = Yp.getVersionPrecision(e),
      o = Yp.getVersionPrecision(t);
    let i = Math.max(r, o),
      a = 0;
    const s = Yp.map([e, t], (e) => {
      const t = i - Yp.getVersionPrecision(e),
        n = e + new Array(t + 1).join(".0");
      return Yp.map(
        n.split("."),
        (e) => new Array(20 - e.length).join("0") + e
      ).reverse();
    });
    for (n && (a = i - Math.min(r, o)), i -= 1; i >= a; ) {
      if (s[0][i] > s[1][i]) return 1;
      if (s[0][i] === s[1][i]) {
        if (i === a) return 0;
        i -= 1;
      } else if (s[0][i] < s[1][i]) return -1;
    }
  }
  static map(e, t) {
    const n = [];
    let r;
    if (Array.prototype.map) return Array.prototype.map.call(e, t);
    for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
    return n;
  }
  static find(e, t) {
    let n, r;
    if (Array.prototype.find) return Array.prototype.find.call(e, t);
    for (n = 0, r = e.length; n < r; n += 1) {
      const r = e[n];
      if (t(r, n)) return r;
    }
  }
  static assign(e, ...t) {
    const n = e;
    let r, o;
    if (Object.assign) return Object.assign(e, ...t);
    for (r = 0, o = t.length; r < o; r += 1) {
      const e = t[r];
      if ("object" == typeof e && null !== e) {
        Object.keys(e).forEach((t) => {
          n[t] = e[t];
        });
      }
    }
    return e;
  }
  static getBrowserAlias(e) {
    return zp[e];
  }
  static getBrowserTypeByAlias(e) {
    return Vp[e] || "";
  }
}
const Qp = /version\/(\d+(\.?_?\d+)+)/i,
  Gp = [
    {
      test: [/googlebot/i],
      describe(e) {
        const t = { name: "Googlebot" },
          n =
            Yp.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) ||
            Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/opera/i],
      describe(e) {
        const t = { name: "Opera" },
          n =
            Yp.getFirstMatch(Qp, e) ||
            Yp.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/opr\/|opios/i],
      describe(e) {
        const t = { name: "Opera" },
          n =
            Yp.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) ||
            Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/SamsungBrowser/i],
      describe(e) {
        const t = { name: "Samsung Internet for Android" },
          n =
            Yp.getFirstMatch(Qp, e) ||
            Yp.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/Whale/i],
      describe(e) {
        const t = { name: "NAVER Whale Browser" },
          n =
            Yp.getFirstMatch(Qp, e) ||
            Yp.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/MZBrowser/i],
      describe(e) {
        const t = { name: "MZ Browser" },
          n =
            Yp.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) ||
            Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/focus/i],
      describe(e) {
        const t = { name: "Focus" },
          n =
            Yp.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) ||
            Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/swing/i],
      describe(e) {
        const t = { name: "Swing" },
          n =
            Yp.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) ||
            Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/coast/i],
      describe(e) {
        const t = { name: "Opera Coast" },
          n =
            Yp.getFirstMatch(Qp, e) ||
            Yp.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/opt\/\d+(?:.?_?\d+)+/i],
      describe(e) {
        const t = { name: "Opera Touch" },
          n =
            Yp.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) ||
            Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/yabrowser/i],
      describe(e) {
        const t = { name: "Yandex Browser" },
          n =
            Yp.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) ||
            Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/ucbrowser/i],
      describe(e) {
        const t = { name: "UC Browser" },
          n =
            Yp.getFirstMatch(Qp, e) ||
            Yp.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/Maxthon|mxios/i],
      describe(e) {
        const t = { name: "Maxthon" },
          n =
            Yp.getFirstMatch(Qp, e) ||
            Yp.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/epiphany/i],
      describe(e) {
        const t = { name: "Epiphany" },
          n =
            Yp.getFirstMatch(Qp, e) ||
            Yp.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/puffin/i],
      describe(e) {
        const t = { name: "Puffin" },
          n =
            Yp.getFirstMatch(Qp, e) ||
            Yp.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/sleipnir/i],
      describe(e) {
        const t = { name: "Sleipnir" },
          n =
            Yp.getFirstMatch(Qp, e) ||
            Yp.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/k-meleon/i],
      describe(e) {
        const t = { name: "K-Meleon" },
          n =
            Yp.getFirstMatch(Qp, e) ||
            Yp.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/micromessenger/i],
      describe(e) {
        const t = { name: "WeChat" },
          n =
            Yp.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) ||
            Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/qqbrowser/i],
      describe(e) {
        const t = {
            name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser",
          },
          n =
            Yp.getFirstMatch(
              /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
              e
            ) || Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/msie|trident/i],
      describe(e) {
        const t = { name: "Internet Explorer" },
          n = Yp.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/\sedg\//i],
      describe(e) {
        const t = { name: "Microsoft Edge" },
          n = Yp.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/edg([ea]|ios)/i],
      describe(e) {
        const t = { name: "Microsoft Edge" },
          n = Yp.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/vivaldi/i],
      describe(e) {
        const t = { name: "Vivaldi" },
          n = Yp.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/seamonkey/i],
      describe(e) {
        const t = { name: "SeaMonkey" },
          n = Yp.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/sailfish/i],
      describe(e) {
        const t = { name: "Sailfish" },
          n = Yp.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/silk/i],
      describe(e) {
        const t = { name: "Amazon Silk" },
          n = Yp.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/phantom/i],
      describe(e) {
        const t = { name: "PhantomJS" },
          n = Yp.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/slimerjs/i],
      describe(e) {
        const t = { name: "SlimerJS" },
          n = Yp.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
      describe(e) {
        const t = { name: "BlackBerry" },
          n =
            Yp.getFirstMatch(Qp, e) ||
            Yp.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/(web|hpw)[o0]s/i],
      describe(e) {
        const t = { name: "WebOS Browser" },
          n =
            Yp.getFirstMatch(Qp, e) ||
            Yp.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/bada/i],
      describe(e) {
        const t = { name: "Bada" },
          n = Yp.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/tizen/i],
      describe(e) {
        const t = { name: "Tizen" },
          n =
            Yp.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) ||
            Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/qupzilla/i],
      describe(e) {
        const t = { name: "QupZilla" },
          n =
            Yp.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) ||
            Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/firefox|iceweasel|fxios/i],
      describe(e) {
        const t = { name: "Firefox" },
          n = Yp.getFirstMatch(
            /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
            e
          );
        return n && (t.version = n), t;
      },
    },
    {
      test: [/electron/i],
      describe(e) {
        const t = { name: "Electron" },
          n = Yp.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/MiuiBrowser/i],
      describe(e) {
        const t = { name: "Miui" },
          n = Yp.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/chromium/i],
      describe(e) {
        const t = { name: "Chromium" },
          n =
            Yp.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) ||
            Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/chrome|crios|crmo/i],
      describe(e) {
        const t = { name: "Chrome" },
          n = Yp.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/GSA/i],
      describe(e) {
        const t = { name: "Google Search" },
          n = Yp.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test(e) {
        const t = !e.test(/like android/i),
          n = e.test(/android/i);
        return t && n;
      },
      describe(e) {
        const t = { name: "Android Browser" },
          n = Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/playstation 4/i],
      describe(e) {
        const t = { name: "PlayStation 4" },
          n = Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/safari|applewebkit/i],
      describe(e) {
        const t = { name: "Safari" },
          n = Yp.getFirstMatch(Qp, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/.*/i],
      describe(e) {
        const t =
          -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
        return {
          name: Yp.getFirstMatch(t, e),
          version: Yp.getSecondMatch(t, e),
        };
      },
    },
  ];
var Kp = [
    {
      test: [/Roku\/DVP/],
      describe(e) {
        const t = Yp.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
        return { name: Hp.Roku, version: t };
      },
    },
    {
      test: [/windows phone/i],
      describe(e) {
        const t = Yp.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
        return { name: Hp.WindowsPhone, version: t };
      },
    },
    {
      test: [/windows /i],
      describe(e) {
        const t = Yp.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
          n = Yp.getWindowsVersionName(t);
        return { name: Hp.Windows, version: t, versionName: n };
      },
    },
    {
      test: [/Macintosh(.*?) FxiOS(.*?)\//],
      describe(e) {
        const t = { name: Hp.iOS },
          n = Yp.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/macintosh/i],
      describe(e) {
        const t = Yp.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(
            /[_\s]/g,
            "."
          ),
          n = Yp.getMacOSVersionName(t),
          r = { name: Hp.MacOS, version: t };
        return n && (r.versionName = n), r;
      },
    },
    {
      test: [/(ipod|iphone|ipad)/i],
      describe(e) {
        const t = Yp.getFirstMatch(
          /os (\d+([_\s]\d+)*) like mac os x/i,
          e
        ).replace(/[_\s]/g, ".");
        return { name: Hp.iOS, version: t };
      },
    },
    {
      test(e) {
        const t = !e.test(/like android/i),
          n = e.test(/android/i);
        return t && n;
      },
      describe(e) {
        const t = Yp.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
          n = Yp.getAndroidVersionName(t),
          r = { name: Hp.Android, version: t };
        return n && (r.versionName = n), r;
      },
    },
    {
      test: [/(web|hpw)[o0]s/i],
      describe(e) {
        const t = Yp.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
          n = { name: Hp.WebOS };
        return t && t.length && (n.version = t), n;
      },
    },
    {
      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
      describe(e) {
        const t =
          Yp.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) ||
          Yp.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) ||
          Yp.getFirstMatch(/\bbb(\d+)/i, e);
        return { name: Hp.BlackBerry, version: t };
      },
    },
    {
      test: [/bada/i],
      describe(e) {
        const t = Yp.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
        return { name: Hp.Bada, version: t };
      },
    },
    {
      test: [/tizen/i],
      describe(e) {
        const t = Yp.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
        return { name: Hp.Tizen, version: t };
      },
    },
    { test: [/linux/i], describe: () => ({ name: Hp.Linux }) },
    { test: [/CrOS/], describe: () => ({ name: Hp.ChromeOS }) },
    {
      test: [/PlayStation 4/],
      describe(e) {
        const t = Yp.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
        return { name: Hp.PlayStation4, version: t };
      },
    },
  ],
  Jp = [
    {
      test: [/googlebot/i],
      describe: () => ({ type: "bot", vendor: "Google" }),
    },
    {
      test: [/huawei/i],
      describe(e) {
        const t = Yp.getFirstMatch(/(can-l01)/i, e) && "Nova",
          n = { type: qp.mobile, vendor: "Huawei" };
        return t && (n.model = t), n;
      },
    },
    {
      test: [/nexus\s*(?:7|8|9|10).*/i],
      describe: () => ({ type: qp.tablet, vendor: "Nexus" }),
    },
    {
      test: [/ipad/i],
      describe: () => ({ type: qp.tablet, vendor: "Apple", model: "iPad" }),
    },
    {
      test: [/Macintosh(.*?) FxiOS(.*?)\//],
      describe: () => ({ type: qp.tablet, vendor: "Apple", model: "iPad" }),
    },
    {
      test: [/kftt build/i],
      describe: () => ({
        type: qp.tablet,
        vendor: "Amazon",
        model: "Kindle Fire HD 7",
      }),
    },
    {
      test: [/silk/i],
      describe: () => ({ type: qp.tablet, vendor: "Amazon" }),
    },
    { test: [/tablet(?! pc)/i], describe: () => ({ type: qp.tablet }) },
    {
      test(e) {
        const t = e.test(/ipod|iphone/i),
          n = e.test(/like (ipod|iphone)/i);
        return t && !n;
      },
      describe(e) {
        const t = Yp.getFirstMatch(/(ipod|iphone)/i, e);
        return { type: qp.mobile, vendor: "Apple", model: t };
      },
    },
    {
      test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
      describe: () => ({ type: qp.mobile, vendor: "Nexus" }),
    },
    { test: [/[^-]mobi/i], describe: () => ({ type: qp.mobile }) },
    {
      test: (e) => "blackberry" === e.getBrowserName(!0),
      describe: () => ({ type: qp.mobile, vendor: "BlackBerry" }),
    },
    {
      test: (e) => "bada" === e.getBrowserName(!0),
      describe: () => ({ type: qp.mobile }),
    },
    {
      test: (e) => "windows phone" === e.getBrowserName(),
      describe: () => ({ type: qp.mobile, vendor: "Microsoft" }),
    },
    {
      test(e) {
        const t = Number(String(e.getOSVersion()).split(".")[0]);
        return "android" === e.getOSName(!0) && t >= 3;
      },
      describe: () => ({ type: qp.tablet }),
    },
    {
      test: (e) => "android" === e.getOSName(!0),
      describe: () => ({ type: qp.mobile }),
    },
    {
      test: (e) => "macos" === e.getOSName(!0),
      describe: () => ({ type: qp.desktop, vendor: "Apple" }),
    },
    {
      test: (e) => "windows" === e.getOSName(!0),
      describe: () => ({ type: qp.desktop }),
    },
    {
      test: (e) => "linux" === e.getOSName(!0),
      describe: () => ({ type: qp.desktop }),
    },
    {
      test: (e) => "playstation 4" === e.getOSName(!0),
      describe: () => ({ type: qp.tv }),
    },
    {
      test: (e) => "roku" === e.getOSName(!0),
      describe: () => ({ type: qp.tv }),
    },
  ],
  Zp = [
    {
      test: (e) => "microsoft edge" === e.getBrowserName(!0),
      describe(e) {
        if (/\sedg\//i.test(e)) return { name: $p.Blink };
        const t = Yp.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
        return { name: $p.EdgeHTML, version: t };
      },
    },
    {
      test: [/trident/i],
      describe(e) {
        const t = { name: $p.Trident },
          n = Yp.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: (e) => e.test(/presto/i),
      describe(e) {
        const t = { name: $p.Presto },
          n = Yp.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test(e) {
        const t = e.test(/gecko/i),
          n = e.test(/like gecko/i);
        return t && !n;
      },
      describe(e) {
        const t = { name: $p.Gecko },
          n = Yp.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
    {
      test: [/(apple)?webkit\/537\.36/i],
      describe: () => ({ name: $p.Blink }),
    },
    {
      test: [/(apple)?webkit/i],
      describe(e) {
        const t = { name: $p.WebKit },
          n = Yp.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n), t;
      },
    },
  ];
class Xp {
  constructor(e, t = !1) {
    if (null == e || "" === e)
      throw new Error("UserAgent parameter can't be empty");
    (this._ua = e), (this.parsedResult = {}), !0 !== t && this.parse();
  }
  getUA() {
    return this._ua;
  }
  test(e) {
    return e.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    const e = Yp.find(Gp, (e) => {
      if ("function" == typeof e.test) return e.test(this);
      if (e.test instanceof Array) return e.test.some((e) => this.test(e));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.browser = e.describe(this.getUA())),
      this.parsedResult.browser
    );
  }
  getBrowser() {
    return this.parsedResult.browser
      ? this.parsedResult.browser
      : this.parseBrowser();
  }
  getBrowserName(e) {
    return e
      ? String(this.getBrowser().name).toLowerCase() || ""
      : this.getBrowser().name || "";
  }
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  parseOS() {
    this.parsedResult.os = {};
    const e = Yp.find(Kp, (e) => {
      if ("function" == typeof e.test) return e.test(this);
      if (e.test instanceof Array) return e.test.some((e) => this.test(e));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.os = e.describe(this.getUA())),
      this.parsedResult.os
    );
  }
  getOSName(e) {
    const { name: t } = this.getOS();
    return e ? String(t).toLowerCase() || "" : t || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform
      ? this.parsedResult.platform
      : this.parsePlatform();
  }
  getPlatformType(e = !1) {
    const { type: t } = this.getPlatform();
    return e ? String(t).toLowerCase() || "" : t || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    const e = Yp.find(Jp, (e) => {
      if ("function" == typeof e.test) return e.test(this);
      if (e.test instanceof Array) return e.test.some((e) => this.test(e));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.platform = e.describe(this.getUA())),
      this.parsedResult.platform
    );
  }
  getEngine() {
    return this.parsedResult.engine
      ? this.parsedResult.engine
      : this.parseEngine();
  }
  getEngineName(e) {
    return e
      ? String(this.getEngine().name).toLowerCase() || ""
      : this.getEngine().name || "";
  }
  parseEngine() {
    this.parsedResult.engine = {};
    const e = Yp.find(Zp, (e) => {
      if ("function" == typeof e.test) return e.test(this);
      if (e.test instanceof Array) return e.test.some((e) => this.test(e));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.engine = e.describe(this.getUA())),
      this.parsedResult.engine
    );
  }
  parse() {
    return (
      this.parseBrowser(),
      this.parseOS(),
      this.parsePlatform(),
      this.parseEngine(),
      this
    );
  }
  getResult() {
    return Yp.assign({}, this.parsedResult);
  }
  satisfies(e) {
    const t = {};
    let n = 0;
    const r = {};
    let o = 0;
    if (
      (Object.keys(e).forEach((i) => {
        const a = e[i];
        "string" == typeof a
          ? ((r[i] = a), (o += 1))
          : "object" == typeof a && ((t[i] = a), (n += 1));
      }),
      n > 0)
    ) {
      const e = Object.keys(t),
        n = Yp.find(e, (e) => this.isOS(e));
      if (n) {
        const e = this.satisfies(t[n]);
        if (void 0 !== e) return e;
      }
      const r = Yp.find(e, (e) => this.isPlatform(e));
      if (r) {
        const e = this.satisfies(t[r]);
        if (void 0 !== e) return e;
      }
    }
    if (o > 0) {
      const e = Object.keys(r),
        t = Yp.find(e, (e) => this.isBrowser(e, !0));
      if (void 0 !== t) return this.compareVersion(r[t]);
    }
  }
  isBrowser(e, t = !1) {
    const n = this.getBrowserName().toLowerCase();
    let r = e.toLowerCase();
    const o = Yp.getBrowserTypeByAlias(r);
    return t && o && (r = o.toLowerCase()), r === n;
  }
  compareVersion(e) {
    let t = [0],
      n = e,
      r = !1;
    const o = this.getBrowserVersion();
    if ("string" == typeof o)
      return (
        ">" === e[0] || "<" === e[0]
          ? ((n = e.substr(1)),
            "=" === e[1] ? ((r = !0), (n = e.substr(2))) : (t = []),
            ">" === e[0] ? t.push(1) : t.push(-1))
          : "=" === e[0]
          ? (n = e.substr(1))
          : "~" === e[0] && ((r = !0), (n = e.substr(1))),
        t.indexOf(Yp.compareVersions(o, n, r)) > -1
      );
  }
  isOS(e) {
    return this.getOSName(!0) === String(e).toLowerCase();
  }
  isPlatform(e) {
    return this.getPlatformType(!0) === String(e).toLowerCase();
  }
  isEngine(e) {
    return this.getEngineName(!0) === String(e).toLowerCase();
  }
  is(e, t = !1) {
    return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
  }
  some(e = []) {
    return e.some((e) => this.is(e));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */ const ef = class {
    static getParser(e, t = !1) {
      if ("string" != typeof e) throw new Error("UserAgent should be a string");
      return new Xp(e, t);
    }
    static parse(e) {
      return new Xp(e).getResult();
    }
    static get BROWSER_MAP() {
      return Vp;
    }
    static get ENGINE_MAP() {
      return $p;
    }
    static get OS_MAP() {
      return Hp;
    }
    static get PLATFORMS_MAP() {
      return qp;
    }
  }.getParser(window.navigator.userAgent),
  tf =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0,
  nf = ef.getOSName(!0);
function rf() {
  return !("tablet" !== ef.getPlatformType(!0) && !of());
}
function of() {
  return !!ef.satisfies({ macos: { safari: ">=13" } }) && tf;
}
function af() {
  return ef;
}
function sf() {
  return "mobile" === ef.getPlatformType(!0);
}
function cf() {
  return "macos" === nf;
}
function lf() {
  return "ios" === nf;
}
const uf = cf() || lf() ? "⌘" : "CTRL",
  df = "Press [" + uf + "+C] to copy content from remote clipboard.",
  mf = "Press [" + uf + "+V] to paste content to remote clipboard.";
let pf = "",
  ff = "",
  hf = !1,
  gf = as.getLogger("UI Clipboard");
function yf(e) {
  const [r, o] = t.useState(!1),
    [i, a] = t.useState(""),
    [s, c] = t.useState({}),
    [l, m] = t.useState({}),
    b = () => {
      o(!1), e.connection.captureClipboardEvents(!1, e.window);
    },
    v = (t, n) => {
      r
        ? (c({ status: t, message: n }),
          e.window.document.getElementById("modal-popover-trigger").click())
        : (m({ status: t, message: n }),
          e.window.document.getElementById("icon-popover-trigger").click());
    },
    w = () => {
      hf || (v("success", "Clipboard synced"), lp(pf) && a(pf));
    },
    E = () => {
      hf || (v("success", "Clipboard synced"), lp(ff) && a(ff));
    },
    S = () => {
      v("error", "The clipboard data is too large to be transferred"),
        (hf = !0);
    },
    x = (e) => {
      switch (
        (gf.info("[UI][Clipboard] Received clipboard event " + e.name), e.name)
      ) {
        case "established":
          break;
        case "copy":
        case "autoCopyDone":
          w();
          break;
        case "paste":
        case "autoPasteDone":
          E();
          break;
        case "dataSizeAlert":
          S();
          break;
        case "remoteError":
          "dataSizeAlert" === e.error && S();
          break;
        case "newDataAvailable":
          e.autoCopy ||
            v("info", "Use the clipboard to copy data locally or remotely."),
            (pf = e.clipboardData["text/plain"]),
            (hf = !1);
          break;
        case "pasteAvailableData":
          (ff = e.clipboardData), (hf = !1);
          break;
        default:
          gf.info("[UI][Clipboard] Unknown clipboard event.");
      }
    };
  return (
    n(
      () => (
        ts.on("clipboard", x),
        () => {
          ts.off("clipboard", x);
        }
      ),
      [e.window, r]
    ),
    t.createElement(
      "div",
      null,
      t.createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          },
        },
        t.createElement(
          "div",
          { style: { height: 0 } },
          t.createElement(
            g,
            {
              dismissButton: !1,
              position: "bottom",
              size: "large",
              triggerType: "custom",
              content: t.createElement(y, { type: l.status }, l.message),
            },
            t.createElement("div", { id: "icon-popover-trigger" })
          )
        ),
        pp(
          "Clipboard",
          t.createElement(p, {
            iconName: "copy",
            variant: "icon",
            onClick: () => {
              o(!0), a(""), e.connection.captureClipboardEvents(!0, e.window);
            },
          })
        )
      ),
      t.createElement(
        f,
        {
          onDismiss: b,
          visible: r,
          size: "large",
          header: "Copy and paste",
          footer: t.createElement(
            u,
            { float: "right" },
            t.createElement(p, { variant: "primary", onClick: b }, "Done")
          ),
          modalRoot: e.window.document.body,
        },
        t.createElement(
          d,
          { size: "xl" },
          t.createElement(
            u,
            null,
            e.copyEnabled && t.createElement(u, { variant: "p" }, df),
            e.pasteEnabled && t.createElement(u, { variant: "p" }, mf)
          ),
          t.createElement(
            u,
            { variant: "p", margin: { bottom: "xs" } },
            "Content preview"
          )
        ),
        t.createElement(
          "div",
          { style: { margin: "auto", width: "1px", height: 0 } },
          t.createElement(
            g,
            {
              dismissButton: !1,
              position: "top",
              size: "large",
              triggerType: "custom",
              content: t.createElement(y, { type: s.status }, s.message),
            },
            t.createElement("div", {
              id: "modal-popover-trigger",
              style: { marginTop: "19.5px" },
            })
          )
        ),
        t.createElement(h, {
          controlId: "textarea",
          value:
            ((M = i),
            M.substring(0, 5e3)
              .replace(/\0/g, "")
              .concat(M.length > 5e3 ? " ..." : "")),
          readOnly: !0,
          rows: 10,
        })
      )
    )
  );
  var M;
}
yf.propTypes = {
  connection: c.object,
  copyEnabled: c.bool,
  pasteEnabled: c.bool,
  window: c.object,
};
const bf =
  "OS: " +
  (of()
    ? "iOS " +
      af().getBrowserVersion() +
      "(Desktop Mode on iOS Safari detected, estimating version from Safari)"
    : af().getOSName() + " " + af().getOSVersion()) +
  "\nBrowser version: " +
  af().getBrowserName() +
  " " +
  af().getBrowserVersion() +
  " with " +
  af().getEngineName() +
  " engine\nPlatform: " +
  (of()
    ? " Tablet (Desktop Mode on iOS Safari detected)"
    : af().getPlatformType()) +
  "\nWeb SDK version: " +
  e.version.versionStr;
function vf(e) {
  const [r, o] = t.useState(""),
    [i, a] = t.useState("");
  return (
    n(() => {
      null !== e.connection &&
        (o(wf(e.connection.getServerInfo())),
        fetch("third-party-licenses.txt")
          .then((e) => e.text())
          .then((e) => a(e)));
    }, [e.connection]),
    t.createElement(
      f,
      {
        onDismiss: e.onDismiss,
        visible: e.visible,
        size: "large",
        header: "About NICE DCV",
        modalRoot: window.document.body,
        disableContentPaddings: !0,
        footer: t.createElement(
          E,
          { gridDefinition: [{ colspan: 7 }, { colspan: 5 }] },
          t.createElement(
            u,
            null,
            "Copyright © 2017-2022, NICE s.r.l. All rights reserved."
          ),
          t.createElement(
            u,
            { float: "right" },
            t.createElement(
              w,
              {
                external: !0,
                externalIconAriaLabel: "Opens in a new tab",
                href: "EULA.txt",
              },
              "End User License Agreement"
            )
          )
        ),
      },
      t.createElement(v, {
        tabs: [
          {
            label: "Client",
            id: "about-client",
            content: mp(
              t.createElement(h, { rows: 10, readOnly: !0, value: bf })
            ),
          },
          {
            label: "Server",
            id: "about-server",
            content: mp(
              t.createElement(h, { rows: 10, readOnly: !0, value: r })
            ),
          },
          {
            label: "Third party notices",
            id: "third-party-notices",
            content: mp(
              t.createElement(h, { rows: 10, readOnly: !0, value: i })
            ),
          },
        ],
      })
    )
  );
}
function wf(e, t) {
  let n = "";
  return (
    Object.keys(e).forEach((r) => {
      "version" === r
        ? (n +=
            dp(r) +
            ": " +
            e[r].major +
            "." +
            e[r].minor +
            "." +
            e[r].revision +
            "\n")
        : sp(e[r])
        ? (n += wf(e[r], dp(r)))
        : (n += t
            ? t + "-" + r + ": " + e[r] + "\n"
            : dp(r) + ": " + e[r] + "\n");
    }),
    n
  );
}
function Ef() {
  return (
    (Ef =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ef.apply(this, arguments)
  );
}
vf.propTypes = { connection: c.object, visible: c.bool, onDismiss: c.func };
var Sf = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    Ef(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      n
    ),
    t.createElement("path", {
      d: "M15 6h-5V1M1 6h5V1M1 10h5v5M15 10h-5v5M1 1l5 5M15 1l-5 5M6 10l-5 5M10 10l5 5",
    })
  );
const xf = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "mozfullscreenchange",
  "MSFullscreenChange",
];
function Mf(e) {
  const [r, o] = t.useState(!1),
    i = () => {
      let t = Of(e.document);
      o(t), e.setFullscreen(t);
    },
    a = () =>
      e.document.fullscreenEnabled ||
      e.document.webkitFullscreenEnabled ||
      e.document.mozFullScreenEnabled ||
      e.document.msFullscreenEnabled;
  return (
    n(
      () => (
        a() && xf.forEach((t) => e.document.addEventListener(t, i)),
        () => {
          a() && xf.forEach((t) => e.document.removeEventListener(t, i));
        }
      ),
      [e.document, e.setFullscreen]
    ),
    pp(
      "Fullscreen",
      t.createElement(
        p,
        O(
          {},
          r ? { iconSvg: t.createElement(Sf, null) } : { iconName: "expand" },
          {
            variant: "icon",
            onClick: () => {
              Of(e.document)
                ? e.document.exitFullscreen
                  ? e.document.exitFullscreen()
                  : e.document.mozCancelFullScreen
                  ? e.document.mozCancelFullScreen()
                  : e.document.webkitExitFullscreen
                  ? e.document.webkitExitFullscreen()
                  : e.document.msExitFullscreen && e.document.msExitFullscreen()
                : (() => {
                    let t = e.document.documentElement;
                    t.requestFullscreen
                      ? t.requestFullscreen()
                      : t.mozRequestFullScreen
                      ? t.mozRequestFullScreen()
                      : t.webkitRequestFullscreen
                      ? t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                      : t.msRequestFullscreen && t.msRequestFullscreen();
                  })();
            },
          }
        )
      )
    )
  );
}
function Of(e) {
  return Boolean(
    e.fullscreenElement ||
      e.mozFullScreenElement ||
      e.webkitFullscreenElement ||
      e.msFullscreenElement
  );
}
Mf.propTypes = { setFullscreen: c.func, document: c.object };
let Cf,
  kf,
  If,
  Af = as.getLogger("UI Display Layout"),
  Ff = {},
  Rf = {};
function Tf() {
  return kf;
}
function Bf(e) {
  return (
    Bp.dynamicResolution &&
    Tf() &&
    Bp.selectedResolution === Op &&
    (e || (Cf && Cf.length > 1))
  );
}
function Pf(e, t, n) {
  let r, o;
  if (Cf && Cf.length > 0)
    1 === Cf.length || n
      ? ((r = Cf[0].rect.width), (o = Cf[0].rect.height))
      : Cf.length > 1 &&
        !n &&
        ((r = Cf[1].rect.width), (o = Cf[1].rect.height));
  else {
    let e = t.document.getElementById("dcv-display");
    e
      ? ((r = e.getBoundingClientRect().width),
        (o = e.getBoundingClientRect().height))
      : ((r = t.innerWidth), (o = t.innerHeight));
  }
  Bf(n)
    ? (Ff[n] && (clearTimeout(Ff[n]), (Ff[n] = null)),
      (Ff[n] = setTimeout(() => {
        !(function (e, t, n) {
          let r = Df(t),
            o = Nf(t);
          (r = Math.min(r, Bp.maxDisplayWidth || r)),
            (r = Math.max(r, Bp.minDisplayWidth || r)),
            (o = Math.min(o, Bp.maxDisplayHeight || o)),
            (o = Math.max(o, Bp.minDisplayHeight || o));
          (() => {
            const e = (e) =>
              Math.abs(Rf[n].width - r) > e || Math.abs(Rf[n].height - o) > e;
            return (
              (!Of(t.document) && !t.fullScreen) ||
              (function (e) {
                for (const t in e)
                  if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                return !0;
              })(Rf[n]) ||
              e(2)
            );
          })()
            ? ((Rf[n] = { width: r, height: o }), qf(e, r, o, n))
            : jf(t.document.getElementById("dcv-display-frame"), "hidden");
        })(e, t, n),
          (Ff[n] = null);
      }, 500)))
    : Wf(e, r, o, t, n);
}
function _f(e, t) {
  return e + "x" + t;
}
function Lf(e) {
  return e.split("x");
}
function Nf(e) {
  let t = 0,
    n = e.document.getElementById("dcv-container"),
    r = e.document.getElementById("dcv-display-frame");
  return n && r
    ? ((t = r.getBoundingClientRect().top - n.getBoundingClientRect().top),
      n.getBoundingClientRect().height - t)
    : fp(e);
}
function Df(e) {
  let t = e.document.getElementById("dcv-container");
  return t ? t.getBoundingClientRect().width : e.innerWidth;
}
function jf(e, t) {
  e && (e.style.overflow = t);
}
function Uf(e) {
  let t = e.document.getElementById("dcv-display"),
    n = e.document.getElementById("dcv-display-frame");
  t &&
    n &&
    ((() => {
      let r = Nf(e),
        o = t.getBoundingClientRect().height,
        i = o ? Math.max(0, (r - o) / 2).toString() + "px" : 0;
      (t.style.marginTop = i), (n.style.height = r.toString() + "px");
    })(),
    (() => {
      let r = Df(e),
        o = t.getBoundingClientRect().width,
        i = o ? Math.max(0, (r - o) / 2).toString() + "px" : 0;
      (t.style.marginLeft = i), (n.style.width = r.toString() + "px");
    })());
}
function Wf(e, t, n, r, o) {
  let i = 1,
    a = 1,
    s = 1;
  const c = Df(r),
    l = Nf(r);
  if (
    (Uf(r),
    jf(
      r.document.getElementById("dcv-display-frame"),
      Bp.scaleToFit ? "hidden" : "auto"
    ),
    Bf(o) || (Rf[o] = {}),
    Bp.scaleToFit)
  ) {
    if (
      ((a = c / t),
      (s = l / n),
      (i = Math.max(0, Math.floor(100 * Math.min(1, a, s)) / 100)),
      !i)
    )
      return;
    Af.info("[UI] Requesting a display scaling factor of " + i),
      Vf(i, r.document)
        ? e
            .setDisplayScale(i, 0)
            .then(() => {
              Uf(r);
            })
            .catch((e) => {
              Af.warn(
                "Failed to request scaling factor of " + i + ": " + e.message
              ),
                Vf(1, r.document);
            })
        : Af.info("[UI] CSS scaling or zoom unsupported!");
  }
}
function zf(e) {
  Cf = e;
}
function Vf(e, t) {
  let n = "scale(" + e + ")",
    r = t.getElementById("dcv-display"),
    o = t.getElementById("dcv-container");
  return (
    If ||
      (If = (function () {
        let e = (window.CSS && window.CSS.supports) || window.supportsCSS;
        if (e && e("( transform: scale(1) )")) return "transform";
        if (e && e("( zoom: 0.8 )")) return "zoom";
        return "no-scale";
      })()),
    "transform" === If
      ? ((r.style.transform = n),
        (r.style.transformOrigin = "0 0"),
        (o.style.overflow = "hidden"),
        !0)
      : "zoom" === If
      ? ((r.style.zoom = e), (o.style.overflow = "hidden"), !0)
      : ((o.style.overflow = "auto"), !1)
  );
}
function qf(e, t, n, r) {
  let o,
    i,
    a = r ? Cf[0].name : Cf[1].name,
    s = r ? 0 : Cf[0].rect.width;
  return Cf && Cf.length > 1
    ? ((o = { name: a, rect: { x: s, y: 0, width: t, height: n }, primary: r }),
      (i = r ? [o, Cf[1]] : [Cf[0], o]),
      zf(i),
      e.requestDisplayLayout(i))
    : e.requestResolution(t, n);
}
function Hf(e) {
  const [r, o] = t.useState(Bp.macOptionToAlt),
    [i, a] = t.useState(Bp.macCommandToControl),
    s = (t) => {
      t
        ? ((Bp.macOptionToAlt = r),
          (Bp.macCommandToControl = i),
          Pp(),
          e.connection.setKeyboardQuirks({
            macOptionToAlt: r,
            macCommandToControl: i,
            forceKeyboardCombinations: Bp.forceKeyboardCombinations,
          }))
        : (o(Bp.macOptionToAlt), a(Bp.macCommandToControl));
    };
  return (
    n(
      () => (
        ts.on("close-preferences", s),
        () => {
          ts.off("close-preferences", s);
        }
      ),
      [r, i]
    ),
    t.createElement(
      d,
      { size: "xxl" },
      t.createElement(
        u,
        null,
        t.createElement(u, { margin: { bottom: "s" } }, "Option key setting"),
        t.createElement(M, {
          onChange: (e) => {
            let { detail: t } = e;
            return o(t.value);
          },
          value: r,
          items: [
            { value: !0, label: "Use Option (⌥) as remote Alt key" },
            { value: !1, label: "Use Option (⌥) as local modifier" },
          ],
        })
      ),
      t.createElement(
        u,
        null,
        t.createElement(u, { margin: { bottom: "s" } }, "Command key setting"),
        t.createElement(M, {
          onChange: (e) => {
            let { detail: t } = e;
            return a(t.value);
          },
          value: i,
          items: [
            { value: !0, label: "Use Command (⌘) as remote Control key" },
            { value: !1, label: "Use Command (⌘) as remote Meta key" },
          ],
        })
      )
    )
  );
}
Hf.propTypes = { connection: c.object };
const $f = {
  ERROR: { status: "error", color: "red", importance: 3 },
  WARNING: { status: "warning", color: "red", importance: 2 },
  SUCCESS: { status: "success", color: "green", importance: 1 },
  INFO: { status: "info", color: "blue", importance: 1 },
};
let Yf = 0,
  Qf = [];
function Gf(e, t) {
  let n,
    r = ((e) => ({
      id: Yf++,
      level: ap(e.level) ? $f.INFO : e.level,
      header: ap(e.header) ? "" : e.header,
      description: ap(e.description) ? null : e.description,
      progress: ap(e.progress) ? null : e.progress,
      actions: ap(e.actions) ? {} : e.actions,
      timestamp: Date.now(),
    }))(e),
    o = -1;
  return (
    ap(t) || (o = Qf.findIndex((e) => e.id === t)),
    -1 === o
      ? (n = [r].concat(Qf.map((e) => ({ ...e }))))
      : ((n = Qf.map((e) => ({ ...e }))), (n[o] = r)),
    (Qf = n),
    ts.emit("notifications-update", Qf),
    r.id
  );
}
function Kf(e) {
  let t = Qf.map((e) => ({ ...e })).filter((t) => t.id !== e);
  (Qf = t), ts.emit("notifications-update", Qf);
}
let Jf = as.getLogger("UI CameraSelect"),
  Zf = null;
function Xf(e) {
  const [o, i] = t.useState(),
    [a, s] = t.useState([]),
    [c, l] = t.useState(),
    m = r(!0),
    f = (e) => {
      Gf(
        {
          level: $f.ERROR,
          header: "Error getting devices.",
          description: e.message,
          actions: { dismissable: !0 },
        },
        null
      );
    },
    h = (e) => {
      let t = [];
      e
        .filter((e) => "videoinput" === e.kind)
        .forEach((e, n) => {
          t.push({ label: e.label || "Camera " + (n + 1), value: e.deviceId });
        }),
        s(t);
    },
    g = () => {
      e.connection.getConnectedDevices().then(h).catch(f);
    },
    y = () => {
      navigator.permissions
        .query({ name: "camera" })
        .then((t) => {
          Zf && (Zf.onchange = null),
            (Zf = t),
            o || ((t.onchange = y), g()),
            i(t.state),
            "granted" === t.state && gp(e.webcamStatus) && g();
        })
        .catch((e) => {
          e instanceof TypeError ? Jf.info(e.message) : Jf.warn(e.message);
        });
    },
    b = (t) => {
      t
        ? c && (e.setWebcamId(c), (Bp.selectedWebcamId = c), Pp())
        : l(Bp.selectedWebcamId);
    },
    v = () =>
      t.createElement(
        p,
        {
          iconAlign: "right",
          href: "https://docs.aws.amazon.com/dcv/latest/userguide/using-webcam.html",
          target: "_blank",
          iconName: "external",
        },
        "Read more"
      );
  n(() => {
    a.filter((t) => e.webcamId === t.value).length
      ? l(e.webcamId)
      : a.length && (l(a[0].value), e.setWebcamId(a[0].value));
  }, [e.webcamId, o, a]),
    n(() => {
      e.webcamStatus &&
        (Jf.info("Webcam enabled. Status: " + e.webcamStatus),
        m.current && (y(), (m.current = !1)));
    }, [e.webcamStatus]),
    n(
      () => (
        ts.on("close-preferences", b),
        ts.on("device-change", g),
        () => {
          ts.off("close-preferences", b), ts.off("device-change", g);
        }
      ),
      [e.connection, e.setWebcamId, c]
    );
  const [w, E, S, x] = (() => {
    let n = "",
      r = null,
      i = "info",
      a = !0;
    if ("busy" === e.webcamStatus)
      (n =
        "Camera not available. Another user is already sharing a camera within the session."),
        (r = v()),
        (i = "warning");
    else
      switch (o) {
        case "prompt":
          (n = "Camera not available. Grant camera permission to use it."),
            (r = t.createElement(
              p,
              {
                onClick: () =>
                  navigator.mediaDevices.getUserMedia({ video: !0 }),
              },
              "Allow detection"
            )),
            (i = "info");
          break;
        case "denied":
          (n = "Camera not available. Grant camera permission to use it."),
            (r = v()),
            (i = "warning");
          break;
        case "granted":
          "streaming" === e.webcamStatus
            ? ((n =
                "The selected camera cannot be changed while the streaming is active."),
              (r = v()),
              (i = "warning"))
            : ((n =
                "Camera available. Check the browser settings to change this site's camera permission."),
              (r = v()),
              (i = "info"),
              (a = !1));
      }
    return [n, r, i, a];
  })();
  return t.createElement(
    d,
    { size: "l" },
    t.createElement(k, { action: E, type: S }, w),
    t.createElement(
      "div",
      null,
      t.createElement(u, null, "Camera"),
      t.createElement(
        u,
        {
          color: "text-body-secondary",
          fontSize: "body-s",
          margin: { bottom: "s" },
        },
        "Select which camera to activate."
      ),
      t.createElement(
        "div",
        { style: { width: "70%" } },
        t.createElement(C, {
          selectedOption: ((e) => {
            let t = a.filter((t) => e === t.value);
            return t.length ? t[0] : null;
          })(c),
          onChange: (e) => {
            let { detail: t } = e;
            return l(t.selectedOption.value);
          },
          options: a,
          selectedAriaLabel: "Selected",
          disabled: x,
        })
      )
    )
  );
}
Xf.propTypes = {
  connection: c.object,
  webcamStatus: c.string,
  webcamId: c.string,
  setWebcamId: c.func,
};
let eh = as.getLogger("UI Preferences");
function th(e) {
  const [r, o] = t.useState("general"),
    [i, a] = t.useState(Bp.selectedResolution),
    [s, c] = t.useState(Bp.metricsEnabled),
    [l, m] = t.useState(!1),
    [h, g] = t.useState(!1),
    [y, b] = t.useState(Bp.displayQuality),
    [w, E] = t.useState(Bp.appearanceMode),
    [O, C] = t.useState(Bp.toolbarBehavior),
    [k, I] = t.useState(260);
  return (
    n(() => {
      e.connection &&
        Wp("high-color-accuracy", (e) => {
          m(e.available),
            g(e.enabled),
            I(e.available ? 350 : 260),
            e.available && ((Bp.highColorAccuracy = e.enabled), Pp());
        });
    }, [e.connection]),
    t.createElement(
      f,
      {
        onDismiss: () => {
          ts.emit("close-preferences", !1),
            a(Bp.selectedResolution),
            b(Bp.displayQuality),
            E(Bp.appearanceMode),
            C(Bp.toolbarBehavior),
            c(Bp.metricsEnabled),
            g(Bp.highColorAccuracy),
            e.onDismiss();
        },
        visible: e.visible,
        size: "large",
        header: "Preferences",
        modalRoot: window.document.body,
        disableContentPaddings: !0,
        footer: t.createElement(
          u,
          { float: "right" },
          t.createElement(
            d,
            { direction: "horizontal", size: "xs" },
            t.createElement(
              p,
              { variant: "link", onClick: e.onDismiss },
              "Cancel"
            ),
            t.createElement(
              p,
              {
                variant: "primary",
                onClick: () => {
                  ts.emit("close-preferences", !0),
                    (() => {
                      let t;
                      y !== Bp.displayQuality &&
                        ((t = y === xp.label ? xp : Mp),
                        e.connection.setDisplayQuality(
                          t.minQuality,
                          t.maxQuality
                        ),
                        eh.info(`Switching to ${y} display mode`),
                        (Bp.displayQuality = y));
                    })(),
                    w !== Bp.appearanceMode &&
                      ((Bp.appearanceMode = w),
                      e.submitAppearanceModePreferences(w)),
                    O !== Bp.toolbarBehavior &&
                      ((Bp.toolbarBehavior = O),
                      e.submitToolbarBehaviorPreferences(O)),
                    s !== Bp.metricsEnabled &&
                      ((Bp.metricsEnabled = s), e.submitMetricsPreferences(s)),
                    (() => {
                      if (!l) return;
                      let n = h ? "enable" : "disable";
                      e.connection.requestDisplayConfig(h).catch((e) => {
                        Gf({
                          level: $f.WARNING,
                          header: "Display config error.",
                          description: t.createElement(
                            "div",
                            null,
                            "Failed to ",
                            n,
                            " high color accuracy.",
                            t.createElement("br", null),
                            "Error: ",
                            e.message,
                            " (code: ",
                            e.code,
                            ")"
                          ),
                          actions: { dismissable: !0 },
                        });
                      });
                    })(),
                    i !== Bp.selectedResolution &&
                      ((Bp.selectedResolution = i === Op ? Op : Cp),
                      e.submitResolutionPreferences(i),
                      a(Bp.selectedResolution)),
                    Pp(),
                    e.onDismiss();
                },
              },
              "Save"
            )
          )
        ),
      },
      t.createElement(
        "div",
        { style: { height: k } },
        t.createElement(v, {
          activeTabId: r,
          onChange: (e) => {
            let { detail: t } = e;
            return o(t.activeTabId);
          },
          tabs: [
            {
              label: "General",
              id: "general",
              content: mp(
                t.createElement(
                  x,
                  { columns: 2 },
                  t.createElement(
                    "div",
                    null,
                    t.createElement(
                      u,
                      { margin: { bottom: "s" } },
                      "Appearance"
                    ),
                    t.createElement(M, {
                      onChange: (e) => {
                        let { detail: t } = e;
                        return E(t.value);
                      },
                      value: w,
                      items: [
                        ...(Ap()
                          ? [
                              {
                                value: "System default",
                                label:
                                  "System default" +
                                  (e.systemDefaultAppearanceMode
                                    ? " (" +
                                      dp(e.systemDefaultAppearanceMode) +
                                      ")"
                                    : ""),
                              },
                            ]
                          : []),
                        { value: "Light mode", label: "Light mode" },
                        { value: "Dark mode", label: "Dark mode" },
                      ],
                    })
                  ),
                  t.createElement(
                    "div",
                    null,
                    t.createElement(
                      u,
                      { margin: { bottom: "s" } },
                      "Toolbar behavior"
                    ),
                    t.createElement(M, {
                      onChange: (e) => {
                        let { detail: t } = e;
                        return C(t.value);
                      },
                      value: O,
                      items: [
                        { value: yp, label: yp, description: bp },
                        { value: vp, label: vp, description: wp },
                        { value: Ep, label: Ep, description: Sp },
                      ],
                    })
                  )
                )
              ),
            },
            {
              label: "Display",
              id: "display",
              content: mp(
                t.createElement(
                  x,
                  { columns: 2 },
                  t.createElement(
                    d,
                    { size: "xxl" },
                    t.createElement(
                      u,
                      null,
                      t.createElement(
                        u,
                        { margin: { bottom: "s" } },
                        "Streaming mode"
                      ),
                      t.createElement(M, {
                        onChange: (e) => {
                          let { detail: t } = e;
                          return b(t.value);
                        },
                        value: y,
                        items: [
                          {
                            value: xp.label,
                            label: xp.label,
                            description: xp.description,
                          },
                          {
                            value: Mp.label,
                            label: Mp.label,
                            description: Mp.description,
                          },
                        ],
                      })
                    ),
                    l &&
                      t.createElement(
                        u,
                        null,
                        t.createElement(
                          u,
                          { margin: { bottom: "s" } },
                          "High color accuracy (YUV 4:4:4)"
                        ),
                        t.createElement(
                          S,
                          {
                            onChange: (e) => {
                              let { detail: t } = e;
                              return g(t.checked);
                            },
                            checked: h,
                            description:
                              "Streaming performance could be affected.",
                          },
                          h ? "Enabled" : "Disabled"
                        )
                      ),
                    t.createElement(
                      u,
                      null,
                      t.createElement(
                        u,
                        { margin: { bottom: "s" } },
                        "Streaming metrics in the toolbar"
                      ),
                      t.createElement(
                        S,
                        {
                          onChange: (e) => {
                            let { detail: t } = e;
                            return c(t.checked);
                          },
                          checked: s,
                        },
                        s ? "Enabled" : "Disabled"
                      )
                    )
                  ),
                  Tf()
                    ? t.createElement(
                        u,
                        null,
                        t.createElement(
                          u,
                          { margin: { bottom: "s" } },
                          "Display resolution"
                        ),
                        t.createElement(M, {
                          onChange: (e) => {
                            let { detail: t } = e;
                            return a(t.value);
                          },
                          value: i,
                          items: [
                            { value: Op, label: "Adapt automatically" },
                            {
                              value: Cp,
                              label: e.currentResolution + " (Current)",
                            },
                            ...((A = e.currentResolution),
                            kp
                              .filter((e) => {
                                let t = !0;
                                if (
                                  (Bp.minDisplayWidth &&
                                    (t = e.width >= Bp.minDisplayWidth),
                                  t &&
                                    Bp.maxDisplayWidth &&
                                    (t = e.width <= Bp.maxDisplayWidth),
                                  t &&
                                    Bp.minDisplayHeight &&
                                    (t = e.height >= Bp.minDisplayHeight),
                                  t &&
                                    Bp.maxDisplayWidth &&
                                    (t = e.height <= Bp.maxDisplayHeight),
                                  t)
                                ) {
                                  let n = Lf(A);
                                  e.width.toString() === n[0] &&
                                    e.height.toString() === n[1] &&
                                    (t = !1);
                                }
                                return t;
                              })
                              .map((e) => ({
                                value: _f(e.width, e.height),
                                label: _f(e.width, e.height),
                              }))),
                          ],
                        })
                      )
                    : null
                )
              ),
            },
            ...(cf()
              ? [
                  {
                    label: "Keyboard",
                    id: "keyboard",
                    content: mp(
                      t.createElement(Hf, { connection: e.connection })
                    ),
                  },
                ]
              : []),
            ...(e.webcamStatus && "not-available" !== e.webcamStatus
              ? [
                  {
                    label: "Camera",
                    id: "camera",
                    content: mp(
                      t.createElement(Xf, {
                        connection: e.connection,
                        webcamStatus: e.webcamStatus,
                        webcamId: e.webcamId,
                        setWebcamId: e.setWebcamId,
                      })
                    ),
                  },
                ]
              : []),
          ],
        })
      )
    )
  );
  var A;
}
th.propTypes = {
  connection: c.object,
  visible: c.bool,
  onDismiss: c.func,
  submitResolutionPreferences: c.func,
  currentResolution: c.string,
  submitMetricsPreferences: c.func,
  submitAppearanceModePreferences: c.func,
  submitToolbarBehaviorPreferences: c.func,
  webcamStatus: c.string,
  webcamId: c.string,
  setWebcamId: c.func,
  systemDefaultAppearanceMode: c.oneOf([i.Light, i.Dark]),
};
let nh,
  rh = as.getLogger("UI Dropdown");
function oh(e) {
  const [r, o] = t.useState(""),
    [i, a] = t.useState(!1),
    [s, c] = t.useState(!1),
    l = (n) => {
      switch (n) {
        case "relativeMouseMode":
          e.connection.enterRelativeMouseMode();
          break;
        case "SAS":
          e.connection.sendKeyboardShortcut([
            { key: "Control", location: KeyboardEvent.DOM_KEY_LOCATION_LEFT },
            { key: "Alt", location: KeyboardEvent.DOM_KEY_LOCATION_LEFT },
            {
              key: "Delete",
              location: KeyboardEvent.DOM_KEY_LOCATION_STANDARD,
            },
          ]);
          break;
        case "preferences":
          c(!0);
          break;
        case "screenshot":
          !(function (e) {
            let n = (e) => {
              rh.error("Failed to capture screenshot: " + e.message),
                Gf({
                  level: $f.ERROR,
                  header: "Screenshot error",
                  description: t.createElement(
                    "div",
                    null,
                    "Failed to capture screenshot.",
                    t.createElement("br", null),
                    "Error: ",
                    e.message
                  ),
                  actions: { dismissable: !0 },
                });
            };
            (nh = setTimeout(() => {
              rh.warn("No response to the screenshot request"),
                n({ message: "Timeout" }),
                (nh = null);
            }, 2e4)),
              e.getScreenshot().catch((e) => {
                nh && clearTimeout(nh), n(e);
              });
          })(e.connection);
          break;
        case "aboutDCV":
          a(!0);
          break;
        case "disconnection":
          e.connection.disconnect();
      }
    };
  return (
    n(() => {
      null !== e.connection && o(e.connection.getServerInfo().hostname);
    }, [e.connection]),
    n(
      () => (
        ts.on("screenshot", ih),
        () => {
          ts.off("screenshot", ih);
        }
      ),
      []
    ),
    t.createElement(
      "div",
      { title: "More" },
      t.createElement(
        b,
        {
          onItemClick: (e) => {
            let { detail: t } = e;
            return l(t.id);
          },
          items: [
            ...(e.relativeMouseModeEnabled
              ? [
                  {
                    text: "Use relative mouse [Ctrl + Shift + F8]",
                    id: "relativeMouseMode",
                  },
                ]
              : []),
            ...(e.sasEnabled
              ? [{ text: "Send Ctrl + Alt + Del", id: "SAS" }]
              : []),
            ...(e.screenshotEnabled
              ? [{ text: "Save Screenshot", id: "screenshot" }]
              : []),
            { text: "Preferences", id: "preferences" },
            { text: "About NICE DCV", id: "aboutDCV" },
            { text: "Disconnect", id: "disconnection" },
          ],
        },
        r
      ),
      t.createElement(vf, {
        connection: e.connection,
        visible: i,
        onDismiss: () => {
          a(!1);
        },
      }),
      t.createElement(th, {
        connection: e.connection,
        currentResolution: e.currentResolution,
        submitResolutionPreferences: e.submitResolutionPreferences,
        visible: s,
        onDismiss: () => {
          c(!1);
        },
        submitMetricsPreferences: e.submitMetricsPreferences,
        submitAppearanceModePreferences: e.submitAppearanceModePreferences,
        submitToolbarBehaviorPreferences: e.submitToolbarBehaviorPreferences,
        webcamStatus: e.webcamStatus,
        webcamId: e.webcamId,
        setWebcamId: e.setWebcamId,
        systemDefaultAppearanceMode: e.systemDefaultAppearanceMode,
      })
    )
  );
}
function ih(e) {
  nh && clearTimeout(nh),
    null !== e
      ? (rh.info("[UI] Retrieved screenshot"),
        Gf({
          level: $f.INFO,
          header: "Screenshot captured.",
          description: "Screenshot ready to be downloaded.",
          actions: {
            accept: {
              text: "Download",
              download: "data: image/png;base64," + up(e),
              downloadFilename: "connection.png",
              remove: !0,
            },
            decline: { text: "Decline", callback: function () {}, remove: !0 },
          },
        }))
      : (rh.warn("Failed to capture screenshot"),
        Gf({
          level: $f.ERROR,
          header: "Screenshot error.",
          description: "Failed to capture screenshot.",
          actions: { dismissable: !0 },
        }));
}
function ah() {
  return (
    (ah =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    ah.apply(this, arguments)
  );
}
oh.propTypes = {
  connection: c.object,
  relativeMouseModeEnabled: c.bool,
  sasEnabled: c.bool,
  screenshotEnabled: c.bool,
  currentResolution: c.string,
  submitResolutionPreferences: c.func,
  submitMetricsPreferences: c.func,
  submitAppearanceModePreferences: c.func,
  submitToolbarBehaviorPreferences: c.func,
  webcamStatus: c.string,
  webcamId: c.string,
  setWebcamId: c.func,
  systemDefaultAppearanceMode: c.oneOf([i.Light, i.Dark]),
};
var sh = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    ah(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      n
    ),
    t.createElement("rect", {
      x: "4",
      y: "1",
      width: "4",
      height: "8",
      rx: "2",
    }),
    t.createElement("path", {
      d: "M1 6v1a5 5 0 008 4M6 12v3M1 15h10M15.12 5.75l-4.5 4.5M15.12 10.25l-4.5-4.5",
    })
  );
let ch = as.getLogger("UI Microphone");
function lh(e) {
  const [n, r] = t.useState(!1);
  return pp(
    "Microphone",
    t.createElement(
      p,
      O(
        {},
        "active" === e.status
          ? { iconName: "microphone" }
          : { iconSvg: t.createElement(sh, null) },
        {
          variant: "icon",
          onClick: () => {
            var t;
            n ||
              ((Bp.microphone = !Bp.microphone),
              ch.debug(
                "[Audio][UI] Setting microphone to " +
                  (Bp.microphone ? "enabled" : "disabled")
              ),
              (t = Bp.microphone),
              r(t),
              e.connection
                .setMicrophone(t)
                .catch((e) => {
                  let n =
                    "Failed to " + (t ? "enable" : "disable") + " microphone.";
                  ch.warn(
                    n +
                      " Disabling microphone. Error (code: " +
                      e.code +
                      "): " +
                      e.message
                  ),
                    (Bp.microphone = !1),
                    Gf({
                      level: $f.ERROR,
                      header: "Microphone error.",
                      description: n,
                      actions: { dismissable: !0 },
                    });
                })
                .finally(() => {
                  r(!1);
                }));
          },
        }
      )
    )
  );
}
function uh() {
  return (
    (uh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    uh.apply(this, arguments)
  );
}
lh.propTypes = { connection: c.object, status: c.string };
var dh = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    uh(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      n
    ),
    t.createElement("path", {
      d: "M7 15V1L1 6v4l6 5zM15.01 5.75l-4.5 4.5M15.01 10.25l-4.5-4.5",
    })
  );
function mh() {
  return (
    (mh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    mh.apply(this, arguments)
  );
}
var ph = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    mh(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      n
    ),
    t.createElement("path", { d: "M7 15V1L1 6v4l6 5zM11 5v6" })
  );
function fh() {
  return (
    (fh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    fh.apply(this, arguments)
  );
}
var hh = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    fh(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      n
    ),
    t.createElement("path", { d: "M7 15V1L1 6v4l6 5zM15 3v10M11 5v6" })
  );
let gh = as.getLogger("UI Audio");
function yh(e) {
  const [n, r] = t.useState(Bp.volume),
    [o, i] = t.useState(Bp.volume),
    a = (t) => {
      r(t),
        (Bp.volume = t),
        Pp(),
        e.connection.setVolume(t),
        gh.debug("[UI] Client volume level set to " + t);
    };
  return t.createElement(
    g,
    {
      position: "bottom",
      size: "large",
      triggerType: "custom",
      header: "Volume",
      dismissButton: !1,
      content: t.createElement(
        d,
        { direction: "horizontal", size: "s" },
        t.createElement(p, {
          iconSvg: bh(n),
          variant: "icon",
          onClick: () => {
            a(n ? 0 : o);
          },
        }),
        t.createElement("input", {
          type: "range",
          style: { verticalAlign: "middle", width: "150px", height: "100%" },
          orient: "horizontal",
          min: "0",
          max: "100",
          step: "1",
          value: o,
          onChange: (e) => {
            return (t = Number(e.target.value)), i(t), void a(t);
            var t;
          },
        }),
        t.createElement(
          "div",
          {
            style: {
              display: "flex",
              width: "3ch",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            },
          },
          t.createElement("output", null, o)
        )
      ),
    },
    pp("Audio", t.createElement(p, { iconSvg: bh(n), variant: "icon" }))
  );
}
function bh(e) {
  return e <= 0
    ? t.createElement(dh, null)
    : e <= 50
    ? t.createElement(ph, null)
    : t.createElement(hh, null);
}
yh.propTypes = { connection: c.object };
let vh = null,
  wh = [];
function Eh(e) {
  const [o, i] = t.useState(0),
    [a, s] = t.useState(0),
    [c, l] = t.useState(0),
    [m, h] = t.useState(""),
    [g, y] = t.useState(""),
    [b, v] = t.useState([]),
    [S, x] = t.useState(!1),
    M = r();
  M.current = S;
  const O = () => {
    let t,
      n,
      r = e.connection.getStats(),
      o = 0;
    if (wh.length > 60) {
      for (t = [], n = 0; n < wh.length - 1; n++) t.push(wh[n]);
      wh = t;
    }
    for (
      0 === wh.length
        ? wh.push({ x: 0, y: r.traffic })
        : (wh.forEach((e) => {
            e.x++;
          }),
          wh.unshift({ x: 0, y: r.traffic })),
        n = 0;
      n < wh.length;
      n++
    )
      o += wh[n].y;
    (o /= wh.length),
      M.current && (v(wh), i(r.traffic), s(o), l(r.peakTraffic)),
      h(r.latency > 999 ? "> 1 s" : Math.round(r.latency) + " ms"),
      y(r.fps + " fps"),
      (vh = setTimeout(O, 1e3));
  };
  return (
    n(
      () => (
        null !== e.connection && O(),
        () => {
          clearTimeout(vh);
        }
      ),
      [e.connection]
    ),
    t.createElement(
      "div",
      null,
      pp(
        "Metrics",
        t.createElement(
          p,
          { variant: "link", onClick: () => x(!0) },
          t.createElement(
            d,
            { direction: "horizontal", size: "m" },
            t.createElement(u, { fontWeight: "bold", color: "inherit" }, g),
            t.createElement(u, { fontWeight: "bold", color: "inherit" }, m)
          )
        )
      ),
      S &&
        t.createElement(
          f,
          {
            onDismiss: () => {
              x(!1);
            },
            visible: S,
            size: "medium",
            header: "Streaming metrics",
            footer: t.createElement(
              E,
              {
                gridDefinition: [
                  { colspan: 4 },
                  { colspan: 4 },
                  { colspan: 4 },
                ],
              },
              t.createElement(Sh, { label: "Current usage", color: F }, cp(o)),
              t.createElement(Sh, { label: "Average usage", color: R }, cp(a)),
              t.createElement(Sh, { label: "Peak usage", color: T }, cp(c))
            ),
          },
          t.createElement(
            d,
            { size: "xl" },
            t.createElement(
              E,
              { gridDefinition: [{ colspan: 6 }, { colspan: 6 }] },
              t.createElement(Sh, { label: "Framerate" }, g),
              t.createElement(Sh, { label: "Network latency" }, m)
            ),
            t.createElement(
              A,
              {
                variant: "h3",
                actions: t.createElement(
                  w,
                  {
                    external: !0,
                    externalIconAriaLabel: "Opens in a new tab",
                    href: "https://docs.aws.amazon.com/dcv/latest/userguide/using-streaming.html#using-streaming-metrics",
                  },
                  "Learn more"
                ),
              },
              "Download bandwidth"
            ),
            t.createElement(I, {
              series: [
                {
                  title: "Current usage",
                  type: "line",
                  data: b,
                  color: F,
                  valueFormatter: cp,
                },
                {
                  title: "Average usage",
                  type: "threshold",
                  y: a,
                  color: R,
                  valueFormatter: cp,
                },
                ...(b.some((e) => e.y >= 0.8 * c)
                  ? [
                      {
                        title: "Peak usage",
                        type: "threshold",
                        y: c,
                        color: T,
                        valueFormatter: cp,
                      },
                    ]
                  : []),
              ],
              i18nStrings: {
                xTickFormatter: (e) => e + " s",
                yTickFormatter: cp,
              },
              xDomain: [60, 0],
              hideFilter: !0,
              hideLegend: !0,
              ariaLabel: "Single data series line chart",
              height: 200,
              empty: t.createElement(
                u,
                { textAlign: "center", color: "inherit" },
                t.createElement("b", null, "No data available"),
                t.createElement(
                  u,
                  { variant: "p", color: "inherit" },
                  "There is no data available"
                )
              ),
            })
          )
        )
    )
  );
}
const Sh = (e) => {
    let { label: n, color: r, children: o } = e;
    return t.createElement(
      "div",
      null,
      t.createElement(
        u,
        { margin: { bottom: "xxxs" } },
        t.createElement(
          d,
          { direction: "horizontal", size: "xxs" },
          r && t.createElement(xh, { color: r }),
          t.createElement(u, { color: "text-label" }, n)
        )
      ),
      t.createElement("div", null, o)
    );
  },
  xh = (e) => {
    let { color: n } = e;
    return t.createElement(
      "svg",
      { width: "12", height: "12" },
      t.createElement("rect", {
        width: "12",
        height: "12",
        style: { fill: n, strokeWidth: "1", stroke: "rgb(0,0,0)" },
      })
    );
  };
function Mh() {
  return (
    (Mh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Mh.apply(this, arguments)
  );
}
(Eh.propTypes = { connection: c.object }),
  (Sh.propTypes = { label: c.string, color: c.string, children: c.node }),
  (xh.propTypes = { color: c.string });
var Oh = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    Mh(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      n
    ),
    t.createElement("path", { d: "M8 12v3M3 15h10" }),
    t.createElement("circle", { cx: "8", cy: "6.56", r: "5.38" }),
    t.createElement("path", { d: "M10.25 4.25l-4.5 4.5M10.25 8.75l-4.5-4.5" })
  );
function Ch() {
  return (
    (Ch =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ch.apply(this, arguments)
  );
}
var kh = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    Ch(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      n
    ),
    t.createElement("path", { d: "M8 12v3M3 15h10" }),
    t.createElement("circle", { cx: "8", cy: "6.56", r: "5.38" }),
    t.createElement("path", { d: "M5 6.5h6" })
  );
function Ih() {
  return (
    (Ih =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ih.apply(this, arguments)
  );
}
var Ah = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    Ih(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      n
    ),
    t.createElement("path", { d: "M8 12v3M3 15h10" }),
    t.createElement("circle", { cx: "8", cy: "6.56", r: "5.38" }),
    t.createElement("circle", { cx: "8", cy: "6.5", r: "2" })
  );
let Fh = as.getLogger("UI Webcam");
function Rh(e) {
  const o = r(!1),
    i = () => {
      var t;
      Fh.debug(
        "[Webcam][UI] Setting camera to " + (Bp.webcam ? "disabled" : "enabled")
      ),
        (t = !Bp.webcam),
        e.connection
          .setWebcam(t, e.selectedWebcam)
          .then((n) => {
            t && e.setSelectedWebcam(n);
          })
          .catch((e) => {
            let n = "Failed to " + (t ? "enable" : "disable") + " camera.";
            Fh.warn(
              n +
                " Disabling camera. Error (code: " +
                e.code +
                "): " +
                e.message
            ),
              Gf({
                level: $f.ERROR,
                header: "Camera error.",
                description: n,
                actions: { dismissable: !0 },
              });
          });
    };
  return (
    n(() => {
      "attached" === e.status && (i(), (o.current = !0));
    }, [e.selectedWebcam]),
    n(() => {
      "available" === e.status && o.current && (i(), (o.current = !1));
    }, [e.status]),
    pp(
      "Camera",
      t.createElement(p, { iconSvg: Th(e.status), variant: "icon", onClick: i })
    )
  );
}
function Th(e) {
  switch (e) {
    case "available":
      return t.createElement(Oh, null);
    case "attached":
      return t.createElement(kh, null);
    case "streaming":
      return t.createElement(Ah, null);
    default:
      throw new Error("Illegal camera serviceStatus: " + e);
  }
}
Rh.propTypes = {
  connection: c.object,
  status: c.string,
  selectedWebcam: c.string,
  setSelectedWebcam: c.func,
};
const Bh = "download" in document.createElement("a"),
  Ph = { MINUTE: 60 };
(Ph.HOUR = Ph.MINUTE ** 2), (Ph.DAY = 24 * Ph.HOUR);
const _h = (e, t) => Math.floor(e / t),
  Lh = {
    just_now: { limit: 10, updateInterval: 1, text: (e) => "now" },
    less_than_min: {
      limit: Ph.MINUTE,
      updateInterval: 1,
      text: (e) => "< 1m ago",
    },
    n_min_ago: {
      limit: Ph.HOUR,
      updateInterval: 30,
      text: (e) => `${_h(e, Ph.MINUTE)}m ago`,
    },
    n_hours_ago: {
      limit: Ph.DAY,
      updateInterval: 15 * Ph.MINUTE,
      text: (e) => `${_h(e, Ph.HOUR)}h ago`,
    },
    n_days_ago: { text: (e) => `${_h(e, Ph.DAY)}d ago` },
  };
function Nh() {
  const [e, r] = t.useState([]),
    o = t.useRef(),
    i = (e) =>
      (function (e, t, n) {
        return Number.isFinite(e) && e >= t && e <= n;
      })(e, 0, 100)
        ? t.createElement(N, { value: e })
        : null;
  return (
    n(() => {
      const e = (e) => r(Array.isArray(e) ? e : []);
      return (
        ts.on("notifications-update", e),
        () => {
          ts.off("notifications-update", e);
        }
      );
    }, []),
    t.createElement(
      g,
      {
        position: "bottom",
        size: "medium",
        fixedWidth: !0,
        triggerType: "custom",
        dismissButton: !1,
        content: e.length
          ? t.createElement(
              "div",
              {
                style: {
                  maxHeight: Math.floor(0.8 * window.innerHeight),
                  overflow: "auto",
                },
              },
              t.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "2px 0",
                  },
                },
                t.createElement(
                  u,
                  {
                    fontSize: "heading-s",
                    fontWeight: "normal",
                    variant: "h2",
                  },
                  "Notifications"
                ),
                t.createElement(
                  p,
                  {
                    onClick: () => {
                      e.forEach((e) => {
                        e.actions &&
                          (e.actions.decline &&
                            (e.actions.decline.callback(),
                            e.actions.decline.remove && Kf(e.id)),
                          e.actions.dismissable && Kf(e.id));
                      });
                    },
                  },
                  "Clear all"
                )
              ),
              Object.values($f)
                .map((e) => e.importance)
                .sort((e, t) => t - e)
                .filter((e, t, n) => !t || e !== n[t - 1])
                .map((n) =>
                  e
                    .filter((e) => e.level.importance === n)
                    .map((e) =>
                      t.createElement(
                        u,
                        {
                          margin: { horizontal: "xxxs", vertical: "m" },
                          key: e.id,
                        },
                        t.createElement(
                          l,
                          null,
                          t.createElement(
                            u,
                            null,
                            ((e) => {
                              const n = t.createElement(
                                y,
                                { type: e.level.status },
                                e.header || dp(e.level.status)
                              );
                              return "dismissable" in e.actions
                                ? t.createElement(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                      },
                                    },
                                    n,
                                    t.createElement(
                                      "div",
                                      { style: { paddingLeft: "10px" } },
                                      t.createElement(p, {
                                        variant: "icon",
                                        iconName: "close",
                                        iconAlign: "right",
                                        onClick: () => Kf(e.id),
                                      })
                                    )
                                  )
                                : n;
                            })(e)
                          ),
                          e.timestamp &&
                            t.createElement(Dh, { timestamp: e.timestamp }),
                          e.description &&
                            t.createElement(
                              u,
                              { margin: { top: "xxs" } },
                              e.description
                            ),
                          null !== e.progress &&
                            t.createElement(
                              u,
                              { margin: { top: "s" } },
                              i(e.progress)
                            ),
                          ("decline" in e.actions || "accept" in e.actions) &&
                            t.createElement(
                              u,
                              { margin: { top: "s" } },
                              ((e) => {
                                let n = {};
                                e.actions.accept &&
                                  (e.actions.accept.download ||
                                    e.actions.accept.link) &&
                                  (e.actions.accept.download
                                    ? ((n.href = e.actions.accept.download),
                                      e.actions.accept.downloadFilename &&
                                        Bh &&
                                        (n.download =
                                          e.actions.accept.downloadFilename))
                                    : e.actions.accept.link &&
                                      (n.href = e.actions.accept.link));
                                const r = Object.keys(e.actions).filter(
                                    (e) =>
                                      -1 !== ["accept", "decline"].indexOf(e)
                                  ).length,
                                  i = 1 === r ? "flex-start" : "space-between";
                                return t.createElement(
                                  "div",
                                  {
                                    style: {
                                      display: "flex",
                                      justifyContent: i,
                                    },
                                  },
                                  "decline" in e.actions &&
                                    t.createElement(
                                      p,
                                      {
                                        onClick: () => {
                                          e.actions.decline.callback(),
                                            e.actions.decline.remove &&
                                              Kf(e.id);
                                        },
                                      },
                                      e.actions.decline.text
                                    ),
                                  "accept" in e.actions &&
                                    t.createElement(
                                      "div",
                                      null,
                                      t.createElement(
                                        p,
                                        {
                                          variant: "primary",
                                          onClick: () => o.current.click(),
                                        },
                                        e.actions.accept.text
                                      ),
                                      t.createElement(
                                        "a",
                                        O(
                                          {
                                            ref: o,
                                            style: { display: "none" },
                                            target: "_blank",
                                          },
                                          n,
                                          {
                                            onClick: () => {
                                              e.actions.decline &&
                                                e.actions.decline.remove &&
                                                Kf(e.id);
                                            },
                                          }
                                        )
                                      )
                                    )
                                );
                              })(e)
                            )
                        )
                      )
                    )
                )
            )
          : t.createElement(
              u,
              {
                padding: { horizontal: "xxl", vertical: "m" },
                variant: "p",
                color: "text-status-inactive",
                textAlign: "center",
              },
              "No notifications to display"
            ),
      },
      pp(
        "Notifications",
        t.createElement(
          L,
          {
            color: (() => {
              let t = "grey",
                n = -1;
              return (
                e.forEach((e) => {
                  e.level.importance > n &&
                    ((n = e.level.importance), (t = e.level.color));
                }),
                t
              );
            })(),
          },
          e.length
        )
      )
    )
  );
}
function Dh(e) {
  const [r, o] = t.useState((Date.now() - e.timestamp) / 1e3),
    i = (e) => Object.values(Lh).find((t) => !("limit" in t) || e < t.limit),
    a = (e) => {
      o((Date.now() - e) / 1e3);
    };
  return (
    n(() => {
      const t = i(r).updateInterval;
      let n = null;
      return (
        t && (n = setInterval(a, 1e3 * t, e.timestamp)),
        () => {
          n && (clearInterval(n), (n = null));
        }
      );
    }, []),
    t.createElement(
      u,
      {
        variant: "small",
        textAlign: "right",
        display: "block",
        fontWeight: "light",
      },
      i((s = r)).text(s)
    )
  );
  var s;
}
function jh() {
  return (
    (jh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    jh.apply(this, arguments)
  );
}
Dh.propTypes = { timestamp: c.number };
var Uh = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    jh({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" }, n),
    t.createElement(
      "g",
      { stroke: "#545b64", strokeWidth: "2" },
      t.createElement("path", {
        d: "M12 8h0a3 3 0 013 3v3.14a.86.86 0 01-.86.86H9.86a.86.86 0 01-.86-.86V11a3 3 0 013-3z",
        strokeLinejoin: "round",
        fill: "none",
      }),
      t.createElement("circle", {
        cx: "12",
        cy: "3.5",
        r: "2.5",
        strokeMiterlimit: "10",
        fill: "none",
      }),
      t.createElement("circle", {
        cx: "4",
        cy: "3.5",
        r: "2.5",
        fill: "#545b64",
        strokeMiterlimit: "10",
      }),
      t.createElement("path", {
        d: "M4 8h0a3 3 0 013 3v3.14a.86.86 0 01-.86.86H1.86a.86.86 0 01-.86-.86V11a3 3 0 013-3z",
        fill: "#545b64",
        strokeLinejoin: "round",
      })
    )
  );
function Wh() {
  return (
    (Wh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Wh.apply(this, arguments)
  );
}
var zh = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    Wh({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" }, n),
    t.createElement(
      "g",
      { fill: "none", stroke: "#545b64", strokeWidth: "2" },
      t.createElement("circle", {
        cx: "8",
        cy: "3.5",
        r: "2.5",
        strokeMiterlimit: "10",
      }),
      t.createElement("path", {
        d: "M8 8h0a3 3 0 013 3v3.14a.86.86 0 01-.86.86H5.86a.86.86 0 01-.86-.86V11a3 3 0 013-3z",
        strokeLinejoin: "round",
      })
    )
  );
let Vh = [];
const qh = (e) => {
  if (0 !== Vh.length) {
    const t = e.map((e) => e.connectionId),
      n = Vh.map((e) => e.connectionIds).flat();
    ((e) => {
      let t, n;
      e.forEach((e) => {
        const r = Vh.find((t) => t.connectionIds.includes(e));
        (n = r.owner ? "Session owner" : "Collaborator"),
          (t = n + " '" + r.username + "' has disconnected from this session."),
          Gf({
            level: $f.INFO,
            header: "Client disconnected.",
            description: t,
            actions: { dismissable: !0 },
          });
      });
    })(n.filter((e) => !t.some((t) => e === t)));
    const r = e.filter((e) => !n.some((t) => e.connectionId === t));
    ((e) => {
      let t, n;
      e.forEach((e) => {
        (n = e.owner ? "Session owner" : "Collaborator"),
          (t = n + " '" + e.username + "' has joined this session."),
          Gf({
            level: $f.INFO,
            header: "New client connected.",
            description: t,
            actions: { dismissable: !0 },
          });
      });
    })(r);
  }
};
function Hh(e) {
  ((e) => {
    ts.emit("collaboration-status-update", e.length > 1);
  })(e),
    qh(e),
    ((e) => {
      Vh = [];
      const t = e.length;
      for (let r = 0; r < t; r++) {
        let t = Vh.find((t) => t.username === e[r].username);
        t
          ? t.connectionIds.push(e[r].connectionId)
          : Vh.push({
              username: (n = e[r]).username,
              connectionIds: [n.connectionId],
              owner: n.owner,
            });
      }
      var n;
      Vh.sort((e, t) => (e.username < t.username ? -1 : 1));
    })(e),
    $h();
}
function $h() {
  ts.emit("collaborator-list-update", Vh);
}
function Yh(e, t) {
  t.forEach((t) => {
    t !== e.id && e.disconnectCollaborator(t);
  });
}
function Qh(e) {
  const [r, o] = t.useState([]),
    [i, a] = t.useState(!1);
  return (
    n(() => {
      const t = (t) => {
        a(t.some((t) => t.owner && t.connectionIds.includes(e.connection.id))),
          o(t);
      };
      return (
        ts.on("collaborator-list-update", t),
        $h(),
        () => {
          ts.off("collaborator-list-update", t);
        }
      );
    }, []),
    t.createElement(
      g,
      {
        position: "bottom",
        size: "medium",
        triggerType: "custom",
        dismissButton: !1,
        content: r.length
          ? t.createElement(
              "div",
              {
                style: {
                  maxHeight: Math.floor(0.8 * window.innerHeight),
                  overflow: "auto",
                },
              },
              t.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "2px 0 15px",
                  },
                },
                t.createElement(
                  u,
                  {
                    fontSize: "heading-s",
                    fontWeight: "normal",
                    variant: "h2",
                  },
                  "Collaborators"
                ),
                i &&
                  r.length > 2 &&
                  t.createElement(
                    "div",
                    { style: { marginLeft: "30px" } },
                    t.createElement(
                      p,
                      {
                        onClick: () => {
                          return (
                            (t = e.connection),
                            void Vh.forEach((e) => Yh(t, e.connectionIds))
                          );
                          var t;
                        },
                      },
                      "Disconnect all"
                    )
                  )
              ),
              t.createElement(
                l,
                null,
                r.map(
                  (n) =>
                    n.username &&
                    ((n) => {
                      const r =
                        (n.connectionIds.length > 1 &&
                          n.connectionIds.includes(e.connection.id)) ||
                        (i &&
                          n.connectionIds.includes(e.connection.id) &&
                          n.connectionIds.length > 1) ||
                        (i && !n.connectionIds.includes(e.connection.id));
                      return t.createElement(
                        u,
                        { key: n.username },
                        t.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              justifyContent: "space-between",
                              minWidth: "150px",
                            },
                          },
                          t.createElement(
                            "div",
                            {
                              style: { display: "flex", alignItems: "center" },
                            },
                            t.createElement(D, {
                              svg: t.createElement(zh, null),
                              size: "small",
                            }),
                            t.createElement(
                              "div",
                              { style: { maxWidth: "200px" } },
                              t.createElement(
                                u,
                                {
                                  fontSize: "body-m",
                                  fontWeight: "normal",
                                  variant: "p",
                                  margin: { left: "xs", right: "s" },
                                },
                                `${n.username}${
                                  n.connectionIds.length > 1
                                    ? ` (${n.connectionIds.length} clients)`
                                    : ""
                                }`
                              )
                            )
                          ),
                          r &&
                            t.createElement(p, {
                              variant: "icon",
                              iconName: "close",
                              onClick: () => Yh(e.connection, n.connectionIds),
                            })
                        )
                      );
                    })(n)
                )
              )
            )
          : t.createElement(
              u,
              {
                padding: { horizontal: "xxl", vertical: "m" },
                variant: "p",
                color: "text-status-inactive",
                textAlign: "center",
              },
              "No collaborators to display"
            ),
      },
      pp(
        "Collaborators",
        t.createElement(D, { svg: t.createElement(Uh, null) })
      )
    )
  );
}
function Gh() {
  return (
    (Gh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Gh.apply(this, arguments)
  );
}
Qh.propTypes = { connection: c.object };
var Kh = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    Gh(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      n
    ),
    t.createElement("path", {
      d: "M14 6.5l-3-3-3 3M11 4v10M8 9.5l-3 3-3-3M5 2v10",
    })
  );
const Jh = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: !0,
  }),
  Zh = { text: "Storage", href: null },
  Xh = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
let eg,
  tg = as.getLogger("UI Filestorage"),
  ng = !1;
function rg(e) {
  const [o, i] = t.useState(!1),
    [a, s] = t.useState(!0),
    [c, l] = t.useState([]),
    [m, h] = t.useState([Zh]),
    [g, y] = t.useState(1),
    [v, E] = t.useState(Zh.href),
    [S, x] = t.useState([]),
    [M, O] = t.useState(""),
    [C, k] = t.useState(""),
    [I, A] = t.useState(!1),
    [F, R] = t.useState(!1),
    T = r(null),
    B = r(null),
    P = () => Math.max(5, Math.floor((window.innerHeight - 320 - 77) / 40)),
    _ = () => S.slice((g - 1) * P(), g * P()),
    L = (e, n) =>
      t.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", height: "100%" } },
        t.createElement(D, { name: e }),
        n && t.createElement("span", { style: { marginLeft: "5px" } }, n)
      ),
    N = (e) => {
      let n,
        r = e && "/" !== e && "Storage" !== e ? e : "",
        o = [];
      tg.debug("[File Storage UI] Changing to directory " + r),
        (n = eg.list(r)),
        n
          .on("error", (e) => {
            1 === e.code || 2 === e.code
              ? tg.info("[File Storage UI] Aborted listing of " + r + " folder")
              : (tg.warn(
                  "[File Storage UI] Failed to list " +
                    r +
                    " folder (" +
                    e.message +
                    ")"
                ),
                Gf({
                  level: $f.ERROR,
                  header: "File storage error.",
                  description: t.createElement(
                    "div",
                    null,
                    "Failed to list files in ",
                    r,
                    " folder.",
                    t.createElement("br", null),
                    "Error: ",
                    e.message,
                    " (code: ",
                    e.code,
                    ")"
                  ),
                  actions: { dismissable: !0 },
                }),
                N());
          })
          .on("success", () => {
            tg.debug("[File Storage UI] List files succeeded"),
              x(o),
              e !== v && l([]),
              ((e) => {
                let t = e.split("/"),
                  n = [Zh],
                  r = "";
                t
                  .filter((e) => "" !== e)
                  .forEach((e) => {
                    (r += "/" + e), n.push({ text: e, path: r, href: null });
                  }),
                  h(n),
                  E(e),
                  y(1);
              })(r);
          })
          .on("newItems", (e) => {
            tg.debug("[File Storage UI] New items " + e.length),
              tg.debug("[File Storage UI] update list folders " + v),
              (o = e);
          })
          .run();
    },
    V = () => {
      ng ? N(v) : N();
    },
    q = (e) => {
      let n, r;
      (r = Gf({
        level: $f.INFO,
        header: "Upload in progress.",
        description: "File " + e.name + " is uploading to Storage" + v,
        progress: 0,
        actions: {
          decline: {
            text: "Stop uploading",
            callback: () => n.cancel(),
            remove: !0,
          },
        },
      })),
        (n = eg.storeFile(e, v)),
        n
          .on("error", (n) => {
            1 !== n.code &&
              Gf(
                {
                  level: $f.ERROR,
                  header: "Upload error.",
                  description: t.createElement(
                    "div",
                    null,
                    "Failed to upload ",
                    e.name,
                    " to Storage",
                    v,
                    ".",
                    t.createElement("br", null),
                    "Error: ",
                    n.message,
                    " (code: ",
                    n.code,
                    ")"
                  ),
                  actions: { dismissable: !0 },
                },
                r
              );
          })
          .on("progress", (e, t) => {
            !(function (e, t) {
              if (!ap(t)) {
                let n = Qf.findIndex((e) => e.id === t);
                if (-1 !== n) {
                  let t = Qf.map((e) => ({ ...e }));
                  (t[n].progress = e),
                    (Qf = t),
                    ts.emit("notifications-update", Qf);
                }
              }
            })(Math.floor((100 * e) / t), r);
          })
          .on("success", () => {
            Gf(
              {
                level: $f.SUCCESS,
                header: "File uploaded.",
                description:
                  "File " + e.name + " successfully uploaded to Storage" + v,
                actions: { dismissable: !0 },
              },
              r
            ),
              (ng = !0),
              V();
          })
          .run();
    },
    H = (e) => {
      eg.retrieveFile(e)
        .on("error", (n) => {
          Gf({
            level: $f.ERROR,
            header: "Download error.",
            description: t.createElement(
              "div",
              null,
              "Impossible to download file ",
              e,
              ".",
              t.createElement("br", null),
              "Error: ",
              n.message,
              " (code: ",
              n.code,
              ")"
            ),
            actions: { dismissable: !0 },
          });
        })
        .on("success", () => {
          Gf({
            level: $f.SUCCESS,
            header: "File ready for download.",
            description:
              "File " + e + " ready to be downloaded to your device.",
            actions: { dismissable: !0 },
          });
        })
        .run();
    },
    $ = () => {
      M.length > 0 &&
        M !== C &&
        ((() => {
          let e,
            n = "folder" === c[0].type,
            r = c[0].displayName,
            o = v + "/" + r,
            i = v + "/" + M;
          (e = n ? eg.renameDirectory(o, i) : eg.renameFile(o, i)),
            e
              .on("error", (e) => {
                Gf({
                  level: $f.ERROR,
                  header: "Rename error.",
                  description: t.createElement(
                    "div",
                    null,
                    "Failed to rename ",
                    (n ? "folder " : "file ") + r,
                    " to ",
                    M,
                    ".",
                    t.createElement("br", null),
                    "Error: ",
                    e.message,
                    " (code: ",
                    e.code,
                    ")"
                  ),
                  actions: { dismissable: !0 },
                });
              })
              .on("success", () => {
                tg.debug("[File Storage UI] Rename succeeded."),
                  Gf({
                    level: $f.SUCCESS,
                    header: (n ? "Folder" : "File") + " renamed.",
                    description:
                      (n ? "Folder" : "File") +
                      " successfully renamed from " +
                      r +
                      " to " +
                      M +
                      ".",
                    actions: { dismissable: !0 },
                  }),
                  (ng = !0),
                  V();
              })
              .run();
        })(),
        l([])),
        R(!1),
        O("");
    },
    Y = () => {
      let e = S.map((e) => ({ ...e }));
      e.shift(), x(e);
    },
    Q = () => {
      M.length > 0
        ? eg
            .createDirectory(v + "/" + M)
            .on("error", (e) => {
              Y(),
                Gf({
                  level: $f.ERROR,
                  header: "Folder creation error.",
                  description: t.createElement(
                    "div",
                    null,
                    "Failed to create folder ",
                    M,
                    ".",
                    t.createElement("br", null),
                    "Error: ",
                    e.message,
                    " (code: ",
                    e.code,
                    ")"
                  ),
                  actions: { dismissable: !0 },
                });
            })
            .on("success", () => {
              tg.debug("[File Storage UI] Mkdir succeeded"),
                Gf({
                  level: $f.SUCCESS,
                  header: "Folder created.",
                  description: "Folder " + M + " successfully created.",
                  actions: { dismissable: !0 },
                }),
                (ng = !0),
                V();
            })
            .run()
        : Y(),
        A(!1),
        O("");
    },
    G = (e) => {
      switch (e) {
        case "download":
          H(v + "/" + c[0].displayName);
          break;
        case "open":
          N(v + "/" + c[0].displayName);
          break;
        case "rename":
          k(c[0].displayName), O(c[0].displayName), R(!0);
          break;
        case "delete":
          eg.deleteFile(v + "/" + c[0].displayName)
            .on("error", (e) => {
              Gf({
                level: $f.ERROR,
                header: "Deletion error.",
                description: t.createElement(
                  "div",
                  null,
                  "Failed to delete file ",
                  c[0].displayName,
                  ".",
                  t.createElement("br", null),
                  "Error: ",
                  e.message,
                  " (code: ",
                  e.code,
                  ")"
                ),
                actions: { dismissable: !0 },
              });
            })
            .on("success", () => {
              tg.debug("Remove succeeded"),
                Gf({
                  level: $f.SUCCESS,
                  header: "File deleted.",
                  description:
                    "File " + c[0].displayName + " successfully deleted.",
                  actions: { dismissable: !0 },
                }),
                (ng = !0),
                V();
            })
            .run();
          break;
        default:
          tg.warn("Invalid dropdown action selected");
      }
    },
    K = t.createElement(
      "div",
      { style: { display: "flex", justifyContent: "space-between" } },
      t.createElement(
        d,
        { direction: "horizontal", size: "s" },
        t.createElement(
          b,
          {
            disabled: !c.length,
            onItemClick: (e) => {
              let { detail: t } = e;
              return G(t.id);
            },
            items: [
              ...(e.downloadEnabled
                ? [
                    {
                      text: "Download",
                      id: "download",
                      disabled: c.length && "file" !== c[0].type,
                    },
                  ]
                : []),
              {
                text: "Rename",
                id: "rename",
                disabled:
                  c.length &&
                  !_().filter((e) => e.displayName === c[0].displayName).length,
              },
            ],
          },
          "Actions"
        ),
        e.uploadEnabled &&
          t.createElement(
            p,
            { onClick: () => T.current.click() },
            t.createElement("input", {
              style: { display: "none" },
              type: "file",
              ref: T,
              onChange: (e) => {
                let t = e.target.files;
                t && t.length > 0
                  ? (tg.debug(
                      "[File Storage UI] A file to upload has been selected."
                    ),
                    q(t[0]))
                  : tg.debug(
                      "[File Storage UI] No file to upload has been selected."
                    );
              },
              onClick: (e) => {
                e.target.value = "";
              },
            }),
            "Upload file"
          ),
        t.createElement(
          p,
          {
            onClick: () => {
              x(
                [{ displayName: null, type: "folder" }].concat(
                  S.map((e) => ({ ...e }))
                )
              ),
                l([]),
                A(!0),
                y(1);
            },
          },
          "Create folder"
        )
      ),
      t.createElement(z, {
        currentPageIndex: g,
        onChange: (e) => {
          let { detail: t } = e;
          return y(t.currentPageIndex);
        },
        pagesCount: Math.ceil(S.length / P()),
        ariaLabels: {
          nextPageLabel: "Next page",
          previousPageLabel: "Previous page",
          pageLabel: (e) => `Page ${e}`,
        },
      })
    ),
    J = [
      {
        id: "name",
        header: "Name",
        cell: function (n) {
          return L(
            n.type,
            ((n) => {
              const r = (e, n) =>
                t.createElement(j, {
                  ref: B,
                  onChange: (e) => {
                    let { detail: t } = e;
                    return O(t.value);
                  },
                  onBlur: e,
                  onKeyUp: (t) => {
                    let { detail: n } = t;
                    13 === n.keyCode && e();
                  },
                  value: M,
                  placeholder: n,
                  disableBrowserAutocorrect: !0,
                  inputMode: "text",
                });
              return F && n.displayName === c[0].displayName
                ? r($, n.displayName)
                : I && null === n.displayName
                ? r(Q, "New folder")
                : "file" === n.type
                ? e.downloadEnabled
                  ? t.createElement(
                      w,
                      {
                        ariaLabel: "Download",
                        onFollow: () => H(v + "/" + n.displayName),
                      },
                      n.displayName
                    )
                  : n.displayName
                : t.createElement(
                    w,
                    {
                      ariaLabel: "Open",
                      onFollow: () => N(v + "/" + n.displayName),
                    },
                    n.displayName
                  );
            })(n)
          );
        },
        width: 400,
      },
      {
        id: "lastModified",
        header: "Last modified",
        cell: function (e) {
          return t.createElement(
            u,
            { variant: "p" },
            e.displayName && e.lastModified
              ? Jh.format(new Date(e.lastModified))
              : "-"
          );
        },
        width: 200,
      },
      {
        id: "size",
        header: "Size",
        cell: function (e) {
          return t.createElement(
            u,
            { variant: "p" },
            "file" === e.type
              ? (function (e) {
                  if (ap(e)) return "-";
                  if (0 === e) return `0 ${Xh[0]}`;
                  const t = Math.floor(Math.log(e) / Math.log(1024));
                  return (
                    parseFloat((e / Math.pow(1024, t)).toFixed(2)) + " " + Xh[t]
                  );
                })(e.size)
              : "-"
          );
        },
        width: 100,
      },
    ],
    Z = (t) => {
      let n,
        r,
        o = t.url.replace(/\?token=.*?(&|$)/, "?").replace(/\?$/, "");
      e.downloadEnabled &&
        ((n = document.createElement("form")),
        n.setAttribute("id", "resourceForm"),
        n.setAttribute("action", o),
        n.setAttribute("method", "post"),
        n.setAttribute("target", "_blank"),
        (r = document.createElement("input")),
        r.setAttribute("type", "hidden"),
        r.setAttribute("name", "token"),
        r.setAttribute("value", t.token),
        n.appendChild(r),
        document.getElementById("dcv-resource").appendChild(n),
        n.submit(),
        document.getElementById("dcv-resource").removeChild(n));
    };
  return (
    n(
      () => () => {
        (ng = !1), (eg = null);
      },
      []
    ),
    n(() => {
      (F || I) && (B.current.focus(), F && B.current.select());
    }, [F, I]),
    n(
      () => (
        ts.on("file-download", Z),
        () => {
          ts.off("file-download", Z);
        }
      ),
      [e.downloadEnabled]
    ),
    t.createElement(
      "div",
      null,
      pp(
        "Filestorage",
        t.createElement(p, {
          variant: "icon",
          iconSvg: t.createElement(Kh, null),
          onClick: () => {
            i(!0),
              e.connection
                .getFileExplorer()
                .then((t) => {
                  (eg = t), V(), e.connection.setUploadBandwidth(51200);
                })
                .catch(() => {
                  s(!1);
                });
          },
        })
      ),
      t.createElement(
        f,
        {
          onDismiss: () => {
            i(!1), e.connection.setUploadBandwidth(1024), (ng = !1);
          },
          visible: o,
          header: "File storage",
          size: "large",
          modalRoot: window.document.body,
        },
        a
          ? t.createElement(
              d,
              { size: "xxs" },
              t.createElement(
                d,
                { direction: "horizontal", size: "s" },
                L("folder-open", ""),
                t.createElement(U, {
                  items: m,
                  onClick: (e) => {
                    let { detail: t } = e;
                    return N(t.item.path);
                  },
                })
              ),
              t.createElement(
                "div",
                { style: { height: 40 * P() + 77 } },
                t.createElement(W, {
                  resizableColumns: !0,
                  loadingText: "Loading resources",
                  selectionType: "single",
                  columnDefinitions: J,
                  items: _(),
                  selectedItems: c,
                  onSelectionChange: (e) => {
                    let { detail: t } = e;
                    return l(t.selectedItems);
                  },
                  header: K,
                  empty: t.createElement(
                    u,
                    { textAlign: "center", color: "inherit", variant: "h5" },
                    "Folder ",
                    m[m.length - 1].text,
                    " is empty"
                  ),
                })
              )
            )
          : t.createElement(
              u,
              { textAlign: "center", color: "inherit", variant: "h5" },
              "File storage is not available"
            )
      )
    )
  );
}
function og() {
  return (
    (og =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    og.apply(this, arguments)
  );
}
rg.propTypes = {
  connection: c.object,
  downloadEnabled: c.bool,
  uploadEnabled: c.bool,
};
var ig = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    og(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      n
    ),
    t.createElement("path", {
      d: "M1 2h14v12H1zM4 11h8M4 5h2M7 5h2M10 5h2M4 8h2M7 8h2M10 8h2",
    })
  );
let ag;
function sg(e) {
  const [r, o] = t.useState(!1),
    i = () => {
      o(!0),
        ag.focus(),
        (lf() || of()) &&
          (ag.click(),
          window.scrollTo(0, 0),
          (document.body.scrollTop = 0),
          (document.scrollingElement.scrollTop = 0));
    },
    a = () => {
      (ag = document.getElementById("dcv-softkbd-hid-input")), ag && i();
    },
    s = () => {
      let e = document.createElement("input");
      e.setAttribute("id", "dcv-softkbd-hid-input"),
        e.setAttribute("type", "text"),
        (e.style.caretColor = "transparent"),
        (e.style.color = "transparent"),
        (e.style.background = "transparent"),
        (e.style.border = "none"),
        (e.style.fontSize = "1pt"),
        (e.style.height = "1px"),
        (e.style.width = "1px"),
        (e.value = ""),
        (ag = e);
    };
  return (
    n(() => {
      var t;
      return (
        r &&
          ((t = e.connection.sendKeyboardEvent.bind(e.connection)),
          (ag = document.getElementById("dcv-softkbd-hid-input")),
          ag &&
            (ag.addEventListener("focusout", a),
            ag.addEventListener("keydown", t),
            ag.addEventListener("keyup", t),
            ag.addEventListener("keypress", t))),
        () =>
          ((e) => {
            (ag = document.getElementById("dcv-softkbd-hid-input")),
              ag &&
                (ag.removeEventListener("focusout", a),
                ag.removeEventListener("keydown", e),
                ag.removeEventListener("keyup", e),
                ag.removeEventListener("keypress", e));
          })(e.connection.sendKeyboardEvent.bind(e.connection))
      );
    }, [e.connection, r]),
    n(
      () => (
        s(),
        () => {
          (ag = null), o(!1);
        }
      ),
      []
    ),
    pp(
      "Virtual keyboard",
      t.createElement(p, {
        iconSvg: t.createElement(ig, null),
        variant: "icon",
        onClick: () => {
          r
            ? ((ag = document.getElementById("dcv-softkbd-hid-input")),
              ag &&
                (ag.blur(),
                document.getElementById("soft-kbd-div").removeChild(ag)),
              o(!1))
            : ((ag = document.getElementById("dcv-softkbd-hid-input")),
              ag || s(),
              document.getElementById("soft-kbd-div").appendChild(ag),
              i());
        },
      })
    )
  );
}
function cg(e, t) {
  return (
    (cg =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      }),
    cg(e, t)
  );
}
function lg(e) {
  return (
    (lg =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    lg(e)
  );
}
function ug(e, t) {
  if (t && ("object" === lg(t) || "function" == typeof t)) return t;
  if (void 0 !== t)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return (function (e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  })(e);
}
function dg(e) {
  return (
    (dg = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    dg(e)
  );
}
sg.propTypes = { connection: c.object };
var mg = { exports: {} },
  pg = {};
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ Object.defineProperty(pg, "__esModule", { value: !0 });
var fg = "function" == typeof Symbol && Symbol.for,
  hg = fg ? Symbol.for("react.element") : 60103,
  gg = fg ? Symbol.for("react.portal") : 60106,
  yg = fg ? Symbol.for("react.fragment") : 60107,
  bg = fg ? Symbol.for("react.strict_mode") : 60108,
  vg = fg ? Symbol.for("react.profiler") : 60114,
  wg = fg ? Symbol.for("react.provider") : 60109,
  Eg = fg ? Symbol.for("react.context") : 60110,
  Sg = fg ? Symbol.for("react.async_mode") : 60111,
  xg = fg ? Symbol.for("react.concurrent_mode") : 60111,
  Mg = fg ? Symbol.for("react.forward_ref") : 60112,
  Og = fg ? Symbol.for("react.suspense") : 60113,
  Cg = fg ? Symbol.for("react.memo") : 60115,
  kg = fg ? Symbol.for("react.lazy") : 60116;
function Ig(e) {
  if ("object" == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case hg:
        switch ((e = e.type)) {
          case Sg:
          case xg:
          case yg:
          case vg:
          case bg:
          case Og:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case Eg:
              case Mg:
              case wg:
                return e;
              default:
                return t;
            }
        }
      case kg:
      case Cg:
      case gg:
        return t;
    }
  }
}
function Ag(e) {
  return Ig(e) === xg;
}
function Fg() {}
function Rg() {}
(pg.typeOf = Ig),
  (pg.AsyncMode = Sg),
  (pg.ConcurrentMode = xg),
  (pg.ContextConsumer = Eg),
  (pg.ContextProvider = wg),
  (pg.Element = hg),
  (pg.ForwardRef = Mg),
  (pg.Fragment = yg),
  (pg.Lazy = kg),
  (pg.Memo = Cg),
  (pg.Portal = gg),
  (pg.Profiler = vg),
  (pg.StrictMode = bg),
  (pg.Suspense = Og),
  (pg.isValidElementType = function (e) {
    return (
      "string" == typeof e ||
      "function" == typeof e ||
      e === yg ||
      e === xg ||
      e === vg ||
      e === bg ||
      e === Og ||
      ("object" == typeof e &&
        null !== e &&
        (e.$$typeof === kg ||
          e.$$typeof === Cg ||
          e.$$typeof === wg ||
          e.$$typeof === Eg ||
          e.$$typeof === Mg))
    );
  }),
  (pg.isAsyncMode = function (e) {
    return Ag(e) || Ig(e) === Sg;
  }),
  (pg.isConcurrentMode = Ag),
  (pg.isContextConsumer = function (e) {
    return Ig(e) === Eg;
  }),
  (pg.isContextProvider = function (e) {
    return Ig(e) === wg;
  }),
  (pg.isElement = function (e) {
    return "object" == typeof e && null !== e && e.$$typeof === hg;
  }),
  (pg.isForwardRef = function (e) {
    return Ig(e) === Mg;
  }),
  (pg.isFragment = function (e) {
    return Ig(e) === yg;
  }),
  (pg.isLazy = function (e) {
    return Ig(e) === kg;
  }),
  (pg.isMemo = function (e) {
    return Ig(e) === Cg;
  }),
  (pg.isPortal = function (e) {
    return Ig(e) === gg;
  }),
  (pg.isProfiler = function (e) {
    return Ig(e) === vg;
  }),
  (pg.isStrictMode = function (e) {
    return Ig(e) === bg;
  }),
  (pg.isSuspense = function (e) {
    return Ig(e) === Og;
  }),
  !(function () {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
      for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
      var r = Object.getOwnPropertyNames(t).map(function (e) {
        return t[e];
      });
      if ("0123456789" !== r.join("")) return !1;
      var o = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (e) {
          o[e] = e;
        }),
        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
      );
    } catch (e) {
      return !1;
    }
  })() || Object.assign,
  Function.call.bind(Object.prototype.hasOwnProperty),
  (Rg.resetWarningCache = Fg),
  (mg.exports = (function () {
    function e(e, t, n, r, o, i) {
      if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== i) {
        var a = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ((a.name = "Invariant Violation"), a);
      }
    }
    function t() {
      return e;
    }
    e.isRequired = e;
    var n = {
      array: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: Rg,
      resetWarningCache: Fg,
    };
    return (n.PropTypes = n), n;
  })());
var Tg = mg.exports;
function Bg(e) {
  var t = (function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function () {
    var n,
      r = dg(e);
    if (t) {
      var o = dg(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return ug(this, n);
  };
}
var Pg,
  _g,
  Lg,
  Ng = (function (e) {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && cg(e, t);
    })(o, t.PureComponent);
    var n,
      r = Bg(o);
    function o(e) {
      var t;
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, o),
        ((t = r.call(this, e)).container = null),
        (t.window = null),
        (t.windowCheckerInterval = null),
        (t.released = !1),
        (t.state = { mounted: !1 }),
        t
      );
    }
    return (
      (n = [
        {
          key: "render",
          value: function () {
            return this.state.mounted
              ? V.createPortal(this.props.children, this.container)
              : null;
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            this.openChild(), this.setState({ mounted: !0 });
          },
        },
        {
          key: "openChild",
          value: function () {
            var e,
              t = this,
              n = this.props,
              r = n.url,
              o = n.title,
              i = n.name,
              a = n.features,
              s = n.onBlock,
              c = n.onOpen,
              l = n.center;
            if (
              "string" != typeof l ||
              (void 0 !== a.width && void 0 !== a.height)
            ) {
              if ("parent" === l)
                (a.left =
                  window.top.outerWidth / 2 + window.top.screenX - a.width / 2),
                  (a.top =
                    window.top.outerHeight / 2 +
                    window.top.screenY -
                    a.height / 2);
              else if ("screen" === l) {
                var u =
                    void 0 !== window.screenLeft
                      ? window.screenLeft
                      : window.screen.left,
                  d =
                    void 0 !== window.screenTop
                      ? window.screenTop
                      : window.screen.top,
                  m = window.innerWidth
                    ? window.innerWidth
                    : document.documentElement.clientWidth
                    ? document.documentElement.clientWidth
                    : window.screen.width,
                  p = window.innerHeight
                    ? window.innerHeight
                    : document.documentElement.clientHeight
                    ? document.documentElement.clientHeight
                    : window.screen.height;
                (a.left = m / 2 - a.width / 2 + u),
                  (a.top = p / 2 - a.height / 2 + d);
              }
            } else
              console.warn(
                "width and height window features must be present when a center prop is provided"
              );
            if (
              ((this.window = window.open(
                r,
                i,
                ((e = a),
                Object.keys(e)
                  .reduce(function (t, n) {
                    var r = e[n];
                    return (
                      "boolean" == typeof r
                        ? t.push("".concat(n, "=").concat(r ? "yes" : "no"))
                        : t.push("".concat(n, "=").concat(r)),
                      t
                    );
                  }, [])
                  .join(","))
              )),
              (this.container = this.window.document.createElement("div")),
              (this.windowCheckerInterval = setInterval(function () {
                (t.window && !t.window.closed) || t.release();
              }, 50)),
              this.window)
            ) {
              if (
                ((this.window.document.title = o),
                (this.container = this.window.document.getElementById(
                  "new-window-container"
                )),
                null === this.container)
              )
                (this.container = this.window.document.createElement("div")),
                  this.container.setAttribute("id", "new-window-container"),
                  this.window.document.body.appendChild(this.container);
              else {
                var f = this.window.document.getElementById(
                  "new-window-container-static"
                );
                this.window.document.body.removeChild(f);
              }
              this.props.copyStyles &&
                setTimeout(function () {
                  return (
                    (e = document),
                    (n = t.window.document),
                    (r = n.createDocumentFragment()),
                    Array.from(e.styleSheets).forEach(function (e) {
                      var t;
                      try {
                        t = e.cssRules;
                      } catch (e) {
                        console.error(e);
                      }
                      if (t) {
                        var o = [];
                        Array.from(e.cssRules).forEach(function (e) {
                          var t = e.type;
                          if (t !== CSSRule.UNKNOWN_RULE) {
                            var n;
                            (n =
                              t === CSSRule.KEYFRAMES_RULE
                                ? (function (e) {
                                    var t = ["@keyframes", e.name, "{"];
                                    return (
                                      Array.from(e.cssRules).forEach(function (
                                        e
                                      ) {
                                        t.push(
                                          e.keyText,
                                          "{",
                                          e.style.cssText,
                                          "}"
                                        );
                                      }),
                                      t.push("}"),
                                      t.join(" ")
                                    );
                                  })(e)
                                : [
                                    CSSRule.IMPORT_RULE,
                                    CSSRule.FONT_FACE_RULE,
                                  ].includes(t)
                                ? (function (e) {
                                    return e.cssText
                                      .split("url(")
                                      .map(function (e) {
                                        return "/" === e[1]
                                          ? ""
                                              .concat(e.slice(0, 1))
                                              .concat(window.location.origin)
                                              .concat(e.slice(1))
                                          : e;
                                      })
                                      .join("url(");
                                  })(e)
                                : e.cssText),
                              o.push(n);
                          }
                        });
                        var i = n.createElement("style");
                        (i.textContent = o.join("\n")), r.appendChild(i);
                      } else if (e.href) {
                        var a = n.createElement("link");
                        (a.rel = "stylesheet"),
                          (a.href = e.href),
                          r.appendChild(a);
                      }
                    }),
                    void n.head.appendChild(r)
                  );
                  var e, n, r;
                }, 0),
                "function" == typeof c && c(this.window),
                this.window.addEventListener("beforeunload", function () {
                  return t.release();
                });
            } else
              "function" == typeof s
                ? s(null)
                : console.warn(
                    "A new window could not be opened. Maybe it was blocked."
                  );
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            if (this.window)
              if (this.props.closeOnUnmount) this.window.close();
              else if (this.props.children) {
                var e = this.container.cloneNode(!0);
                e.setAttribute("id", "new-window-container-static"),
                  this.window.document.body.appendChild(e);
              }
          },
        },
        {
          key: "release",
          value: function () {
            if (!this.released) {
              (this.released = !0), clearInterval(this.windowCheckerInterval);
              var e = this.props.onUnload;
              "function" == typeof e && e(null);
            }
          },
        },
      ]) &&
        (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        })(o.prototype, n),
      o
    );
  })();
function Dg() {
  return (
    (Dg =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Dg.apply(this, arguments)
  );
}
(Lg = {
  url: "",
  name: "",
  title: "",
  features: { width: "600px", height: "640px" },
  onBlock: null,
  onOpen: null,
  onUnload: null,
  center: "parent",
  copyStyles: !0,
  closeOnUnmount: !0,
}),
  (_g = "defaultProps") in (Pg = Ng)
    ? Object.defineProperty(Pg, _g, {
        value: Lg,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
    : (Pg[_g] = Lg),
  (Ng.propTypes = {
    children: Tg.node,
    url: Tg.string,
    name: Tg.string,
    title: Tg.string,
    features: Tg.object,
    onUnload: Tg.func,
    onBlock: Tg.func,
    onOpen: Tg.func,
    center: Tg.oneOf(["parent", "screen"]),
    copyStyles: Tg.bool,
    closeOnUnmount: Tg.bool,
  });
var jg = ({ styles: e = {}, ...n }) =>
  t.createElement(
    "svg",
    Dg(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      n
    ),
    t.createElement("path", { d: "M5.5 12v3M.5 15h10M1 5h9v7H1z" }),
    t.createElement("path", { d: "M5 4V1h9v7h-4" })
  );
let Ug = as.getLogger("secondaryscreen");
function Wg(e) {
  const [r, o] = t.useState(!1),
    [i, a] = t.useState(null),
    s = () => {
      let t = ry();
      o(!1),
        t && e.connection && (ny(null), e.connection.detachDisplay(t)),
        i && !i.closed && (i.close(), a(null));
    };
  return (
    n(
      () => (
        ts.on("close-secondary-display", s),
        () => {
          ts.off("close-secondary-display", s);
        }
      ),
      [i, e.connection]
    ),
    t.createElement(
      "div",
      null,
      pp(
        "Multiple screens",
        t.createElement(p, {
          iconSvg: t.createElement(jg, null),
          variant: "icon",
          onClick: () => {
            r ? s() : o(!0);
          },
        })
      ),
      r &&
        t.createElement(
          Ng,
          {
            features: { height: window.innerHeight, width: window.innerWidth },
            name: "DCV Secondary Window",
            title: e.connection.getServerInfo().hostname + " - NICE DCV",
            onUnload: s,
            onBlock: s,
            onOpen: (t) => {
              (t.opener = null),
                a(t),
                ts.once("open-secondary-display", () =>
                  ((t) => {
                    t
                      ? e.pendingDisplays.length
                        ? (ny(e.pendingDisplays[0]),
                          e.connection
                            .attachDisplay(t, {
                              displayDivName: "dcv-display",
                              displayId: e.pendingDisplays[0],
                            })
                            .then((e) => ny(e))
                            .catch((e) => {
                              Ug.error(
                                "Cannot open secondary display (Error:" +
                                  e.code +
                                  " " +
                                  e.message +
                                  ")"
                              ),
                                s();
                            }))
                        : e.connection
                            .attachDisplay(t, { displayDivName: "dcv-display" })
                            .then((e) => ny(e))
                            .catch((e) => {
                              Ug.error(
                                "Cannot open secondary display (Error:" +
                                  e.code +
                                  " " +
                                  e.message +
                                  ")"
                              ),
                                s();
                            })
                      : s();
                  })(t)
                );
            },
            closeOnUnmount: !0,
          },
          t.createElement(Xg, {
            isPrimary: !1,
            connection: e.connection,
            copyEnabled: e.copyEnabled,
            pasteEnabled: e.pasteEnabled,
            window: i,
            appearanceMode: e.appearanceMode,
            toolbarBehavior: e.toolbarBehavior,
          })
        )
    )
  );
}
Wg.propTypes = {
  connection: c.object,
  copyEnabled: c.bool,
  pasteEnabled: c.bool,
  appearanceMode: c.oneOf(["System default", "Light mode", "Dark mode"]),
  toolbarBehavior: c.oneOf([yp, vp, Ep]),
  pendingDisplays: c.arrayOf(c.number),
};
const zg = { position: "relative", margin: "auto", outline: "none" },
  Vg = { height: "100%", overflow: "hidden", position: "relative" },
  qg = {
    position: "absolute",
    width: "100%",
    zIndex: 1e3,
    pointerEvents: "all",
  },
  Hg = {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    "--gap": "32px",
    marginLeft: "calc(var(--gap) / -2)",
    marginBottom: "calc(var(--gap) / -2)",
  },
  $g = {
    marginLeft: "calc(var(--gap) / 2)",
    marginBottom: "calc(var(--gap) / 2)",
  };
let Yg,
  Qg,
  Gg = as.getLogger("viewer"),
  Kg = [],
  Jg = null,
  Zg = null;
function Xg(e) {
  const [r, o] = t.useState(!0),
    [c, p] = t.useState(!1),
    [f, h] = t.useState(!1),
    [g, y] = t.useState(!1),
    [b, v] = t.useState(""),
    [w, E] = t.useState(""),
    [S, x] = t.useState(""),
    [M, O] = t.useState(""),
    [C, k] = t.useState(Bp.selectedWebcamId),
    [I, A] = t.useState(e.copyEnabled || !1),
    [F, R] = t.useState(!1),
    [T, L] = t.useState(e.pasteEnabled || !1),
    [N, D] = t.useState(Bp.metricsEnabled),
    [j, U] = t.useState(!1),
    [W, z] = t.useState(!1),
    [V, q] = t.useState(!1),
    [H, $] = t.useState(!1),
    [Y, Q] = t.useState(!1),
    [G, K] = t.useState(!1),
    [J, Z] = t.useState(!1),
    [X, ee] = t.useState(!1),
    [te, ne] = t.useState(null),
    [re, oe] = t.useState(Bp.appearanceMode),
    [ie, ae] = t.useState(Bp.toolbarBehavior),
    se = (t) =>
      !e.uiConfig ||
      !sp(e.uiConfig.toolbar) ||
      !(t in e.uiConfig.toolbar) ||
      e.uiConfig.toolbar[t],
    ce = () => {
      Pf(e.connection, e.window, e.isPrimary);
    },
    le = (t, n, r) => {
      (ap(r) || 0 === r) &&
        (p(n),
        e.connection.setDisplayQuality(Bp.minQuality, Bp.maxQuality),
        e.connection.setMaxDisplayResolution(
          Bp.maxDisplayWidth,
          Bp.maxDisplayHeight
        ),
        e.connection.setMinDisplayResolution(
          Bp.minDisplayWidth,
          Bp.minDisplayHeight
        ),
        (kf = t),
        e.connection.setKeyboardQuirks({
          macOptionToAlt: Bp.macOptionToAlt,
          macCommandToControl: Bp.macCommandToControl,
          forceKeyboardCombinations: Bp.forceKeyboardCombinations,
        })),
        e.isPrimary || Yg
          ? (Z(!0), ee(!0))
          : Gg.info("Received first frame for an unknown displayId: " + r);
    },
    ue = (t, n, r) => {
      let o = e.isPrimary || ap(r) || 1 === r.length ? t : r[1].rect.width,
        i = e.isPrimary || ap(r) || 1 === r.length ? n : r[1].rect.height;
      zf(r),
        -1 !== [Op, Cp].indexOf(Bp.selectedResolution)
          ? v(_f(o, i))
          : v(Bp.selectedResolution),
        Wf(e.connection, o, i, e.window, e.isPrimary);
    },
    de = (e) => {
      E(e.remote),
        (Bp.microphone = "active" === e.remote),
        "busy" === e.remote
          ? (Jg = Gf(
              {
                level: $f.WARNING,
                header: "Audio input unavailable.",
                description:
                  "This browser or session does not support audio input.",
                actions: { dismissable: !0 },
              },
              Jg
            ))
          : ey();
    },
    me = (e) => {
      x(e.remote),
        e.enabled
          ? null !== Zg && (Kf(Zg), (Zg = null))
          : ((Zg = Gf(
              {
                level: $f.WARNING,
                header: "Audio output unavailable.",
                description:
                  "This browser or session does not support audio output.",
                actions: { dismissable: !0 },
              },
              Zg
            )),
            ey());
    },
    pe = (e) => {
      O(e.serviceStatus),
        (Bp.webcam = -1 !== ["attached", "streaming"].indexOf(e.serviceStatus));
    },
    fe = (e) => {
      A(e.enabled);
    },
    he = (e) => {
      L(e.enabled);
    },
    ge = (e) => {
      p(e.enabled);
    },
    ye = (e) => {
      z(e.enabled);
    },
    be = (e) => {
      q(e.enabled);
    },
    ve = (e) => {
      y(e.enabled);
    },
    we = (t) => {
      let n = t.currentTarget.getBoundingClientRect();
      t.clientY === n.top &&
        (Z(!0), e.window.document.getElementById("dcv-display").blur());
    },
    Ee = () => {
      Z(!1);
    },
    Se = (t) => {
      if (!t.enabled) {
        let t = e.window.document.getElementById("dcv-softkbd-hid-input");
        t && e.window.document.getElementById("soft-kbd-div").removeChild(t);
      }
      $(t.enabled);
    },
    xe = (t) => {
      ne(t.matches ? i.Dark : i.Light),
        "System default" === re && Rp(t, e.window.document.body);
    },
    Me = () => {
      e.window.document.getElementById("dcv-container") &&
        e.window.document
          .getElementById("dcv-container")
          .removeEventListener("mousemove", we),
        e.window.document.getElementById("dcv-display") &&
          e.window.document
            .getElementById("dcv-display")
            .removeEventListener("focusin", Ee);
    },
    Oe = (e, t) => {
      let n = Kg.indexOf(e);
      t.closed
        ? (-1 !== n && Kg.splice(n, 1),
          e === Qg && ts.emit("close-secondary-display"))
        : t.enabled
        ? (Yg = e === Qg)
        : -1 === n && Kg.push(e);
    };
  return (
    n(() => a(s.Compact, e.window.document.body), []),
    n(
      () => (
        e.isPrimary && ts.on("filestorage-enabled", U),
        () => {
          e.isPrimary && ts.off("filestorage-enabled", U);
        }
      ),
      [e.isPrimary]
    ),
    n(() => {
      var t;
      return (
        e.connection &&
          (ts.on("first-frame", le),
          e.isPrimary
            ? ((t = e.connection),
              (_p = as.getLogger("featurehandler")),
              (Lp = t),
              ts.on("display-availability", Oe),
              Wp("audio-in", de),
              Wp("audio-out", me),
              Wp("webcam", pe),
              Wp("clipboard-copy", fe),
              Wp("clipboard-paste", he),
              Wp("relative-mouse", ge),
              Wp("file-download", ye),
              Wp("file-upload", be),
              Wp("display-multi", (e) => Q(e.enabled && !sf() && !rf())),
              Wp("keyboard-sas", (e) => h(e.enabled)),
              ef.satisfies({ ie: "=11" }) || Wp("screenshot", ve))
            : ts.emit("open-secondary-display")),
        () => {
          ts.off("first-frame", le),
            e.isPrimary && (ts.off("display-availability", Oe), (Np = {}));
        }
      );
    }, [e.connection, e.isPrimary]),
    n(() => {
      if (!r) {
        let t = () => Pf(e.connection, e.window, e.isPrimary);
        if (Yg && Kg.length) {
          let e = Kg.indexOf(Qg);
          -1 !== e && Kg.splice(e, 1), setTimeout(t, 500);
        } else t();
      }
    }, [r]),
    n(
      () => (
        ts.on("collaboration-status-update", R),
        () => {
          ts.off("collaboration-status-update", R);
        }
      )
    ),
    n(
      () => (
        ts.on("display-layout", ue),
        () => {
          ts.off("display-layout", ue);
        }
      ),
      [ie, e.connection, e.window, e.isPrimary]
    ),
    n(() => {
      e.connection && (sf() || rf()) && Wp("keyboard", Se);
    }, [e.connection, e.window]),
    n(
      () => (
        e.isPrimary &&
          e.window.addEventListener("beforeunload", () => {
            e.connection && e.connection.disconnect();
          }),
        () => {
          e.isPrimary &&
            e.window.removeEventListener("beforeunload", () => {
              e.connection && e.connection.disconnect();
            });
        }
      ),
      [e.connection, e.window, e.isPrimary]
    ),
    n(
      () => (
        X &&
          (e.window.addEventListener("resize", ce),
          (ie !== Ep && (ie !== vp || G)) || J
            ? (ie === yp || (ie === vp && G)) && J && Z(!1)
            : Z(!0),
          (G && ie === vp) || ie === yp
            ? (e.window.document.getElementById("dcv-container") &&
                e.window.document
                  .getElementById("dcv-container")
                  .addEventListener("mousemove", we),
              e.window.document.getElementById("dcv-display") &&
                e.window.document
                  .getElementById("dcv-display")
                  .addEventListener("focusin", Ee))
            : Me(),
          o(!1)),
        () => {
          e.window.removeEventListener("resize", ce), Me();
        }
      ),
      [X, ie, G, e.connection, e.isPrimary, e.window]
    ),
    n(() => {
      (r && !J) || Pf(e.connection, e.window, e.isPrimary);
    }, [ie, G]),
    n(() => {
      let t = Fp();
      return (
        Tp(re, e.window.document.body),
        t &&
          (ne(t.matches ? i.Dark : i.Light), t.addEventListener("change", xe)),
        () => {
          t && t.removeEventListener("change", xe);
        }
      );
    }, [re]),
    n(() => {
      e.appearanceMode && oe(e.appearanceMode);
    }, [e.appearanceMode]),
    n(() => {
      e.toolbarBehavior && ae(e.toolbarBehavior);
    }, [e.toolbarBehavior]),
    t.createElement(
      "div",
      { id: "dcv-container", style: Vg },
      r && !J
        ? t.createElement(
            l,
            { disableContentPaddings: !0 },
            t.createElement(
              "div",
              { style: { height: fp(e.window) - 1 } },
              t.createElement(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    WebkitTransform: "translate(-50%, -50%)",
                    msTransform: "translate(-50%, -50%)",
                  },
                },
                t.createElement(
                  d,
                  { size: "m" },
                  t.createElement(
                    "div",
                    { style: { display: "flex", justifyContent: "center" } },
                    t.createElement(m, { size: "large" })
                  ),
                  t.createElement(
                    u,
                    { fontWeight: "light", variant: "h1" },
                    "Connecting"
                  )
                )
              )
            )
          )
        : se("visible") &&
            t.createElement(
              "div",
              {
                id: "dcv-toolbar-container",
                style: {
                  backgroundColor: B,
                  borderBottom: "1px solid " + P,
                  ...(ie === yp || (G && ie === vp) ? qg : {}),
                },
              },
              t.createElement(
                u,
                {
                  display: J ? "block" : "none",
                  padding: { left: "s", right: "s", top: "xs", bottom: "xs" },
                },
                t.createElement(
                  "div",
                  {
                    style: { display: "flex", justifyContent: "space-between" },
                  },
                  t.createElement(
                    d,
                    { direction: "horizontal", size: "m" },
                    e.isPrimary &&
                      j &&
                      t.createElement(rg, {
                        connection: e.connection,
                        downloadEnabled: W,
                        uploadEnabled: V,
                      }),
                    (I || T) &&
                      t.createElement(yf, {
                        connection: e.connection,
                        copyEnabled: I,
                        pasteEnabled: T,
                        window: e.window,
                      }),
                    e.isPrimary &&
                      hp(w) &&
                      hp(S) &&
                      t.createElement(lh, {
                        connection: e.connection,
                        status: w,
                      }),
                    e.isPrimary &&
                      hp(S) &&
                      t.createElement(yh, { connection: e.connection }),
                    e.isPrimary &&
                      gp(M) &&
                      t.createElement(Rh, {
                        connection: e.connection,
                        status: M,
                        selectedWebcam: C,
                        setSelectedWebcam: k,
                      }),
                    e.isPrimary &&
                      Y &&
                      se("multimonitorButton") &&
                      t.createElement(Wg, {
                        connection: e.connection,
                        copyEnabled: I,
                        pasteEnabled: T,
                        appearanceMode: re,
                        toolbarBehavior: ie,
                        pendingDisplays: Kg,
                      }),
                    se("fullscreenButton") &&
                      t.createElement(Mf, {
                        setFullscreen: (e) => {
                          K(e), (ie === yp || (ie === vp && e)) && Z(!1);
                        },
                        document: e.window.document,
                      })
                  ),
                  e.isPrimary &&
                    N &&
                    t.createElement(
                      u,
                      { textAlign: "center" },
                      t.createElement(Eh, { connection: e.connection })
                    ),
                  e.isPrimary &&
                    t.createElement(
                      u,
                      { float: "right" },
                      t.createElement(
                        "div",
                        { style: Hg },
                        e.isPrimary &&
                          H &&
                          ty(t.createElement(sg, { connection: e.connection })),
                        e.isPrimary &&
                          F &&
                          ty(t.createElement(Qh, { connection: e.connection })),
                        ty(t.createElement(Nh, null)),
                        ty(
                          t.createElement(oh, {
                            connection: e.connection,
                            relativeMouseModeEnabled: c,
                            sasEnabled: f,
                            screenshotEnabled: g,
                            currentResolution: b,
                            submitResolutionPreferences: (t) => {
                              !(function (e, t, n, r) {
                                if (t === Op)
                                  (Bp.dynamicResolution = !0), Pf(e, n, r);
                                else if (
                                  ((Bp.dynamicResolution = !1), t !== Cp)
                                ) {
                                  const n = Lf(t);
                                  qf(e, n[0], n[1], r);
                                }
                                Pp();
                              })(e.connection, t, e.window, e.isPrimary);
                            },
                            submitMetricsPreferences: D,
                            submitAppearanceModePreferences: oe,
                            submitToolbarBehaviorPreferences: ae,
                            webcamStatus: M,
                            webcamId: C,
                            setWebcamId: k,
                            systemDefaultAppearanceMode: te,
                          })
                        )
                      )
                    )
                )
              )
            ),
      t.createElement(
        "div",
        { style: { display: r && !J ? "none" : "block", backgroundColor: _ } },
        t.createElement(
          "div",
          {
            id: "dcv-display-frame",
            style: {
              height: Nf(e.window),
              width: Df(e.window),
              overflow: Bp.scaleToFit ? "hidden" : "auto",
            },
          },
          t.createElement("div", { id: "dcv-display", style: zg })
        ),
        t.createElement("div", { id: "dcv-resource", tabIndex: "-1" }),
        t.createElement("div", {
          id: "soft-kbd-div",
          style: { position: "absolute", top: 0, zIndex: -1e3 },
        })
      )
    )
  );
}
function ey() {
  null !== Jg && (Kf(Jg), (Jg = null));
}
function ty(e) {
  return t.createElement("div", { style: $g }, e);
}
function ny(e) {
  if (null === e) {
    let e = Kg.indexOf(Qg);
    -1 !== e && Kg.splice(e, 1);
  }
  Qg = e;
}
function ry() {
  return Qg;
}
Xg.propTypes = {
  isPrimary: c.bool,
  connection: c.object,
  copyEnabled: c.bool,
  pasteEnabled: c.bool,
  window: c.object,
  appearanceMode: c.oneOf(["System default", "Light mode", "Dark mode"]),
  toolbarBehavior: c.oneOf([yp, vp, Ep]),
  uiConfig: c.exact({
    toolbar: c.exact({
      visible: c.bool,
      fullscreenButton: c.bool,
      multimonitorButton: c.bool,
    }),
  }),
};
let oy = as.getLogger("License Handler"),
  iy = null;
function ay(e) {
  let t = 365,
    n = "",
    r = {};
  e.licenses.forEach((e) => {
    e.isDemo &&
      oy.info(
        "License status: product '" +
          e.product +
          "' is using a demo license (" +
          e.leftDays +
          " days left)"
      ),
      e.leftDays > 0 && e.leftDays < t && ((t = e.leftDays), (n = e.product));
  }),
    0 === e.numUnlicensed
      ? (oy.debug(
          "License status: " + e.licenses.length + " products licensed"
        ),
        (r.level = $f.INFO),
        "demo" === e.licensingMode && t < 7
          ? (r.header = "DCV demo license.")
          : (r.header = "DCV license."),
        t < 7
          ? (oy.info(
              "License status: product '" +
                n +
                "' will expire in " +
                t +
                " days"
            ),
            (r.description =
              "License of '" + n + "' will expire in " + t + " days."))
          : "demo" === e.licensingMode &&
            (r.description = "DCV is running with a demo license."))
      : (oy.warn(
          "License error (mode: " +
            e.licensingMode +
            "), " +
            e.numUnlicensed +
            "/" +
            e.licenses.length +
            " products unlicensed: " +
            JSON.stringify(e.licenses)
        ),
        (r.header = "No license available."),
        "ec2" === e.licensingMode
          ? ((r.level = $f.WARNING),
            (r.description = "Please, check your EC2 configuration."),
            null !== e.documentationUrl &&
              "" !== e.documentationUrl &&
              ((r.actions = {}),
              (r.actions.accept = {
                text: "See documentation",
                link: e.documentationUrl,
              })))
          : ((r.level = $f.ERROR),
            (r.description = "Please, contact the administrator."))),
    r.description && (iy = Gf(r, iy));
}
let sy = as.getLogger("printer");
function cy(e) {
  Gf({
    level: $f.INFO,
    header: "File printed.",
    description: e.id + " has been converted in printable format.",
    actions: {
      accept: {
        text: "Download",
        download: e.url + "&disposition=attachment",
        downloadFilename: ef.isBrowser("safari", !0) ? e.id : "",
        remove: !0,
      },
      decline: {
        text: "Decline",
        callback: () => {
          return (
            (t = e),
            sy.debug("Removing print resource " + t.id),
            void t.decline()
          );
          var t;
        },
        remove: !0,
      },
    },
  }),
    sy.debug("Added printer notification for resource " + e.id);
}
let ly,
  uy,
  dy = as.getLogger("UI Main");
function my(r) {
  const [o, i] = t.useState(null),
    a = (e) => {
      ip(r.dcv.onDisconnect) && r.dcv.onDisconnect(e);
    },
    s = (e) => {
      let t;
      0 !== Bp.customChannels.length && -1 !== Bp.customChannels.indexOf(e.name)
        ? o
            .openChannel(e.name, e.authToken, {
              onMessageReceived: (e) => {
                dy.info(
                  "[UI] Custom channel: received message " +
                    new TextDecoder("utf-8").decode(e)
                ),
                  t(e);
              },
              onClose: () => dy.info("[UI] Echo: closed"),
            })
            .then((e) => {
              dy.info("[UI] Opened custom channel"),
                (t = (t) => {
                  e.sendMessage(t)
                    .then(() => {
                      dy.info("[UI] Success sending message.");
                    })
                    .catch((e) => {
                      dy.error("Failed to send message: " + JSON.stringify(e));
                    });
                });
            })
            .catch((e) => {
              dy.error("Failed to open custom channel: " + e.message);
            })
        : dy.info("[UI] Custom channel '" + e.name + "' not supported");
    },
    c = () => {
      dy.info("[UI][Main] Calling client.connect"),
        e
          .connect({
            url: r.dcv.serverUrl,
            sessionId: r.dcv.sessionId,
            authToken: r.dcv.authToken,
            enabledChannels: Bp.enabledChannels,
            displayCodecs: Bp.displayCodecs,
            divId: "dcv-display",
            showDebugLayer: Bp.debugLayer,
            clientHiDpiScaling: Bp.clientHiDpiScaling,
            enableWebCodecs: Bp.enableWebCodecs,
            highColorAccuracy: Bp.highColorAccuracy,
            losslessColorspace: Bp.losslessColorspace,
            baseUrl: r.dcv.baseUrl,
            resourceBaseUrl: r.dcv.resourceBaseUrl || "",
            volumeLevel: Bp.volume,
            audioBitrate: Bp.audioBitrate,
            fingerRadius: Bp.fingerRadius,
            clipboardAutoSync: !0,
            dynamicAudioTuning: !0,
            observers: {
              displayLayout: (e, t, n) => {
                ts.emit("display-layout", e, t, n);
              },
              firstFrame: (e, t, n) => {
                ts.emit("first-frame", e, t, n);
              },
              displayAvailability: (e, t) => {
                ts.emit("display-availability", e, t);
              },
              disconnect: a,
              licenseNotification: ay,
              idleWarningNotification: (e) => {
                !(function (e) {
                  let t;
                  e
                    ? ((t =
                        "DCV connection is idle and is going to be disconnected at " +
                        e.toString()),
                      dy.info(t),
                      (ly = Gf(
                        {
                          level: $f.WARNING,
                          header: "Idle timeout.",
                          description: t,
                          actions: { dismissable: !0 },
                        },
                        ly
                      )))
                    : ly && (Kf(ly), (ly = null));
                })(e);
              },
              dataChannel: (e) => {
                ts.emit("custom-channel", e);
              },
              filePrinted: (e) => {
                cy(e);
              },
              fileDownload: (e) => {
                ts.emit("file-download", e);
              },
              qualityIndicatorState: (e) => {
                dy.info("Quality Indicators: " + JSON.stringify(e)),
                  (function (e) {
                    let n = 0,
                      r = [],
                      o = "Quality status update.";
                    switch (
                      (e.indicators.forEach((e) => {
                        r.push(
                          t.createElement(
                            u,
                            { key: e.name },
                            e.name.replace("_", " ") + " status: " + e.status
                          )
                        ),
                          e.changed &&
                            dy.info(
                              "[UI] Indicator " +
                                e.name +
                                " has changed to status " +
                                e.status
                            ),
                          e.status > n && (n = e.status);
                      }),
                      dy.info(
                        "[UI] Current Quality Indicator overall alarm state: " +
                          n
                      ),
                      n)
                    ) {
                      case 1:
                        uy = Gf(
                          {
                            level: $f.WARNING,
                            header: o,
                            description: r,
                            actions: { dismissable: !0 },
                          },
                          uy
                        );
                        break;
                      case 2:
                        uy = Gf(
                          {
                            level: $f.ERROR,
                            header: o,
                            description: r,
                            actions: { dismissable: !0 },
                          },
                          uy
                        );
                        break;
                      default:
                        uy && (Kf(uy), (uy = null));
                    }
                  })(e);
              },
              filestorageEnabled: (e) => {
                ts.emit("filestorage-enabled", e);
              },
              clipboardEvent: (e) => {
                ts.emit("clipboard", e);
              },
              deviceChangeEvent: function () {
                ts.emit("device-change");
              },
              featuresUpdate: Up,
              screenshot: (e) => {
                ts.emit("screenshot", e);
              },
              collaboratorList: (e) => {
                Hh(e);
              },
            },
          })
          .then((e) => {
            i(e), (document.title = e.getServerInfo().hostname + " - NICE DCV");
          })
          .catch((e) => {
            dy.error(
              "[UI][Main] client.connect was rejected (" + e.message + ")"
            ),
              r.dcv.onDisconnect(e.message);
          });
    };
  return (
    n(() => {
      r.dcv.sessionId &&
        r.dcv.authToken &&
        !o &&
        (as.setLevel(r.dcv.logLevel), c());
    }, [r.dcv.sessionId, r.dcv.authToken]),
    n(
      () => (
        ts.on("custom-channel", s),
        () => {
          ts.off("custom-channel", s);
        }
      ),
      [o]
    ),
    t.createElement(Xg, {
      isPrimary: !0,
      connection: o,
      window: window,
      uiConfig: r.uiConfig,
    })
  );
}
my.propTypes = {
  dcv: c.exact({
    sessionId: c.string.isRequired,
    authToken: c.string.isRequired,
    serverUrl: c.string.isRequired,
    baseUrl: c.string.isRequired,
    resourceBaseUrl: c.string,
    onDisconnect: c.func,
    logLevel: c.oneOf(Object.values(as.levels)),
  }).isRequired,
  uiConfig: c.exact({
    toolbar: c.exact({
      visible: c.bool,
      fullscreenButton: c.bool,
      multimonitorButton: c.bool,
    }),
  }),
};
export { my as DCVViewer };
