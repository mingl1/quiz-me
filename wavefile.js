/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/wavefile@11.0.0/dist/wavefile.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
try {
  if (!Uint8Array.prototype.slice)
    Object.defineProperty(Uint8Array.prototype, "slice", {
      value: function (begin, end) {
        return new Uint8Array(Array.prototype.slice.call(this, begin, end));
      },
    });
} catch (err) {}
var ka =
    "function" == typeof Object.create
      ? Object.create
      : function (n) {
          function m() {}
          m.prototype = n;
          return new m();
        },
  D;
if ("function" == typeof Object.setPrototypeOf) D = Object.setPrototypeOf;
else {
  var K;
  a: {
    var la = { D: !0 },
      N = {};
    try {
      N.__proto__ = la;
      K = N.D;
      break a;
    } catch (n) {}
    K = !1;
  }
  D = K
    ? function (n, m) {
        n.__proto__ = m;
        if (n.__proto__ !== m) throw new TypeError(n + " is not extensible");
        return n;
      }
    : null;
}
var O = D;
function P(n, m) {
  n.prototype = ka(m.prototype);
  n.prototype.constructor = n;
  if (O) O(n, m);
  else
    for (var l in m)
      if ("prototype" != l)
        if (Object.defineProperties) {
          var p = Object.getOwnPropertyDescriptor(m, l);
          p && Object.defineProperty(n, l, p);
        } else n[l] = m[l];
}
var ma =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (n, m, l) {
          n != Array.prototype && n != Object.prototype && (n[m] = l.value);
        },
  na =
    "undefined" != typeof window && window === this
      ? this
      : "undefined" != typeof global && null != global
      ? global
      : this;
function Q(n, m) {
  if (m) {
    for (var l = na, p = n.split("."), y = 0; y < p.length - 1; y++) {
      var v = p[y];
      v in l || (l[v] = {});
      l = l[v];
    }
    p = p[p.length - 1];
    y = l[p];
    v = m(y);
    v != y &&
      null != v &&
      ma(l, p, { configurable: !0, writable: !0, value: v });
  }
}
Q("Object.is", function (n) {
  return n
    ? n
    : function (m, l) {
        return m === l ? 0 !== m || 1 / m === 1 / l : m !== m && l !== l;
      };
});
Q("Array.prototype.includes", function (n) {
  return n
    ? n
    : function (m, l) {
        var p = this;
        p instanceof String && (p = String(p));
        var y = p.length,
          v = l || 0;
        for (0 > v && (v = Math.max(v + y, 0)); v < y; v++) {
          var w = p[v];
          if (w === m || Object.is(w, m)) return !0;
        }
        return !1;
      };
});
Q("String.prototype.codePointAt", function (n) {
  return n
    ? n
    : function (m) {
        if (null == this)
          throw new TypeError(
            "The 'this' value for String.prototype.codePointAt must not be null or undefined"
          );
        var l = this.length;
        m = Number(m) || 0;
        if (0 <= m && m < l) {
          m |= 0;
          var p = this.charCodeAt(m);
          if (55296 > p || 56319 < p || m + 1 === l) return p;
          m = this.charCodeAt(m + 1);
          return 56320 > m || 57343 < m ? p : 1024 * (p - 55296) + m + 9216;
        }
      };
});
var oa =
  "function" == typeof Object.assign
    ? Object.assign
    : function (n, m) {
        for (var l = 1; l < arguments.length; l++) {
          var p = arguments[l];
          if (p)
            for (var y in p)
              Object.prototype.hasOwnProperty.call(p, y) && (n[y] = p[y]);
        }
        return n;
      };
Q("Object.assign", function (n) {
  return n || oa;
});
var V = this;
function W(n) {
  function m(a) {
    var b = l.call(this) || this;
    a && b.fromBuffer(a);
    return b;
  }
  function l() {
    return w.apply(this, arguments) || this;
  }
  function p(a, b, c) {
    for (var d = [], e = 0; e < a; e++)
      d.push(
        this.b({
          pa: b,
          oa: c,
          Q: 0.5 / Math.sin((Math.PI / (2 * a)) * (e + 0.5)),
        })
      );
    this.a = [];
    for (a = 0; a < d.length; a++)
      this.a[a] = {
        Ka: d[a].A[0],
        La: d[a].A[1],
        Ma: d[a].A[2],
        Ha: d[a].D[0],
        Ia: d[a].D[1],
        k: d[a].k,
        z: [0, 0],
      };
  }
  function y(a, b, c) {
    c = (2 * Math.PI * c) / b;
    b = 0;
    this.a = [];
    for (var d = 0; d <= a; d++)
      0 === d - a / 2
        ? (this.a[d] = c)
        : ((this.a[d] = Math.sin(c * (d - a / 2)) / (d - a / 2)),
          (this.a[d] *= 0.54 - 0.46 * Math.cos((2 * Math.PI * d) / a))),
        (b += this.a[d]);
    for (c = 0; c <= a; c++) this.a[c] /= b;
    this.z = this.b();
  }
  function v(a, b, c) {
    this.C = a;
    this.l = (a - 1) / b;
    this.M = this.I;
    "point" === c.method
      ? (this.M = this.H)
      : "linear" === c.method
      ? (this.M = this.G)
      : "cubic" === c.method && (this.M = this.B);
    this.J = 1 - Math.max(0, Math.min(1, c.tension || 0));
    this.v = c.sincFilterSize || 1;
    this.F = pa(c.sincWindow || qa);
  }
  function w() {
    return C.apply(this, arguments) || this;
  }
  function C() {
    return t.apply(this, arguments) || this;
  }
  function t() {
    var a = q.call(this) || this;
    a.bitDepth = "0";
    a.f = { h: 0, o: !1 };
    a.G = {
      4: 17,
      8: 1,
      "8a": 6,
      "8m": 7,
      16: 1,
      24: 1,
      32: 1,
      "32f": 3,
      64: 3,
    };
    return a;
  }
  function q() {
    return u.apply(this, arguments) || this;
  }
  function u() {
    var a = B.call(this) || this;
    a.Z.push("RF64");
    a.fmt = {
      chunkId: "",
      chunkSize: 0,
      audioFormat: 0,
      numChannels: 0,
      sampleRate: 0,
      byteRate: 0,
      blockAlign: 0,
      bitsPerSample: 0,
      cbSize: 0,
      validBitsPerSample: 0,
      dwChannelMask: 0,
      subformat: [],
    };
    a.fact = { chunkId: "", chunkSize: 0, dwSampleLength: 0 };
    a.cue = { chunkId: "", chunkSize: 0, dwCuePoints: 0, points: [] };
    a.smpl = {
      chunkId: "",
      chunkSize: 0,
      dwManufacturer: 0,
      dwProduct: 0,
      dwSamplePeriod: 0,
      dwMIDIUnityNote: 0,
      dwMIDIPitchFraction: 0,
      dwSMPTEFormat: 0,
      dwSMPTEOffset: 0,
      dwNumSampleLoops: 0,
      dwSamplerData: 0,
      loops: [],
    };
    a.bext = {
      chunkId: "",
      chunkSize: 0,
      description: "",
      originator: "",
      originatorReference: "",
      originationDate: "",
      originationTime: "",
      timeReference: [0, 0],
      version: 0,
      UMID: "",
      loudnessValue: 0,
      loudnessRange: 0,
      maxTruePeakLevel: 0,
      maxMomentaryLoudness: 0,
      maxShortTermLoudness: 0,
      reserved: "",
      codingHistory: "",
    };
    a.iXML = { chunkId: "", chunkSize: 0, value: "" };
    a.ds64 = {
      chunkId: "",
      chunkSize: 0,
      riffSizeHigh: 0,
      riffSizeLow: 0,
      dataSizeHigh: 0,
      dataSizeLow: 0,
      originationTime: 0,
      sampleCountHigh: 0,
      sampleCountLow: 0,
    };
    a.data = { chunkId: "", chunkSize: 0, samples: new Uint8Array(0) };
    a.LIST = [];
    a.junk = { chunkId: "", chunkSize: 0, chunkData: [] };
    a._PMX = { chunkId: "", chunkSize: 0, value: "" };
    a.g = { h: 16, o: !1, O: !1, R: !1 };
    return a;
  }
  function B() {
    this.container = "";
    this.chunkSize = 0;
    this.format = "";
    this.Y = null;
    this.c = 0;
    this.a = { h: 32, o: !1 };
    this.Z = ["RIFF", "RIFX"];
  }
  function H(a, b) {
    this.offset = Math.ceil((a + b) / 8);
    this.b = a;
    this.c = b;
    this.a = (1 << (a - 1)) - 1;
    this.f = Math.pow(2, this.a + 1);
    this.g = a + b;
    this.j = Math.pow(2, -(8 * this.offset - 1 - a));
  }
  function F(a, b) {
    this.h = a;
    this.offset = Math.ceil(a / 8);
    this.max = Math.pow(2, a) - 1;
    this.min = 0;
    this.S = this.a;
    if (void 0 === b ? 0 : b)
      (this.max = Math.pow(2, a) / 2 - 1),
        (this.min = -this.max - 1),
        (this.S = this.f);
  }
  function ra(a) {
    for (var b = new Uint8Array(256), c = 0; 64 > c; c++)
      b[
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(
          c
        )
      ] = c;
    c = 0.75 * a.length;
    "=" === a[a.length - 1] && (c--, "=" === a[a.length - 2] && c--);
    c = new Uint8Array(c);
    for (var d = 0, e = 0; d < a.length; d += 4) {
      var f = b[a.charCodeAt(d)],
        g = b[a.charCodeAt(d + 1)],
        k = b[a.charCodeAt(d + 2)],
        r = b[a.charCodeAt(d + 3)];
      c[e++] = (f << 2) | (g >> 4);
      c[e++] = ((g & 15) << 4) | (k >> 2);
      c[e++] = ((k & 3) << 6) | (r & 63);
    }
    return c;
  }
  function sa(a, b) {
    return (a =
      0 < a
        ? parseInt((a / b.ea) * b.ca, 10)
        : parseInt((a / b.fa) * b.da, 10));
  }
  function ta(a, b) {
    return parseInt(0 < a ? a * b.ca : a * b.da, 10);
  }
  function ua(a, b) {
    return 0 < a ? a / b.ea : a / b.fa;
  }
  function va(a, b) {
    function c(d) {
      return d;
    }
    a != b &&
      (c = ["32f", "64"].includes(a)
        ? ta
        : ["32f", "64"].includes(b)
        ? ua
        : sa);
    return c;
  }
  function X(a) {
    if (
      "32f" != a &&
      "64" != a &&
      ("8" > parseInt(a, 10) || "53" < parseInt(a, 10))
    )
      throw Error("Invalid bit depth.");
  }
  function Y(a, b, c) {
    if ("8" == a) {
      a = c ? -128 : 128;
      c = 0;
      for (var d = b.length; c < d; c++) b[c] = b[c] += a;
    }
  }
  function wa(a) {
    for (
      var b = { index: 0, i: 0, step: 7 },
        c = new Uint8Array(a.length),
        d = [],
        e = 0,
        f = 0,
        g = 0,
        k = a.length;
      g < k;
      g++
    )
      0 == g % 505 && 0 != g && (c.set(xa(d, b), e), (e += 256), (d = []), f++),
        d.push(a[g]);
    a = a.length / 2;
    a % 2 && a++;
    return c.slice(0, a + 512 + 4 * f);
  }
  function ya(a, b) {
    b = void 0 === b ? 256 : b;
    for (
      var c = { index: 0, i: 0, step: 7 },
        d = new Int16Array(2 * a.length),
        e = [],
        f = 0,
        g = 0,
        k = a.length;
      g < k;
      g++
    ) {
      if (0 == g % b && 0 != g) {
        var r = c,
          z = (e[1] << 8) | e[0];
        r.i = 32768 < z ? z - 65536 : z;
        r.index = e[2];
        r.step = R[r.index];
        z = [r.i, r.i];
        for (var I = 4, za = e.length; I < za; I++) {
          var Z = e[I],
            aa = Z >> 4;
          z.push(ba((aa << 4) ^ Z, r));
          z.push(ba(aa, r));
        }
        e = z;
        d.set(e, f);
        f += e.length;
        e = [];
      }
      e.push(a[g]);
    }
    return d;
  }
  function xa(a, b) {
    var c = a[0];
    S(c, b);
    var d = [];
    d.push(c & 255);
    d.push((c >> 8) & 255);
    d.push(b.index);
    d.push(0);
    c = 3;
    for (var e = a.length; c < e; c += 2) {
      var f = S(a[c], b),
        g = S(a[c + 1], b);
      d.push((g << 4) | f);
    }
    return d;
  }
  function S(a, b) {
    var c = a - b.i;
    if (0 <= c) var d = 0;
    else (d = 8), (c = -c);
    var e = R[b.index],
      f = e >> 3;
    c > e && ((d |= 4), (c -= e), (f += e));
    e >>= 1;
    c > e && ((d |= 2), (c -= e), (f += e));
    e >>= 1;
    c > e && ((d |= 1), (f += e));
    c = d;
    b.i = c & 8 ? b.i - f : b.i + f;
    -32768 > b.i ? (b.i = -32768) : 32767 < b.i && (b.i = 32767);
    b.index += ca[c & 7];
    0 > b.index ? (b.index = 0) : 88 < b.index && (b.index = 88);
    return d;
  }
  function ba(a, b) {
    var c = 0;
    a & 4 && (c += b.step);
    a & 2 && (c += b.step >> 1);
    a & 1 && (c += b.step >> 2);
    c += b.step >> 3;
    a & 8 && (c = -c);
    b.i += c;
    32767 < b.i ? (b.i = 32767) : -32767 > b.i && (b.i = -32767);
    b.index += ca[a];
    0 > b.index ? (b.index = 0) : 88 < b.index && (b.index = 88);
    b.step = R[b.index];
    return b.i;
  }
  function Aa(a) {
    for (var b = new Uint8Array(a.length), c = 0, d = a.length; c < d; c++) {
      var e = c;
      var f = a[c];
      f = -32768 == f ? -32767 : f;
      var g = (~f >> 8) & 128;
      g || (f *= -1);
      32635 < f && (f = 32635);
      if (256 <= f) {
        var k = Ba[(f >> 8) & 127];
        f = (k << 4) | ((f >> (k + 3)) & 15);
      } else f >>= 4;
      b[e] = f ^ g ^ 85;
    }
    return b;
  }
  function Ca(a) {
    for (var b = new Int16Array(a.length), c = 0, d = a.length; c < d; c++) {
      var e = c,
        f = a[c],
        g = 0;
      f ^= 85;
      0 !== (f & 128) && ((f &= -129), (g = -1));
      var k = ((f & 240) >> 4) + 4;
      f =
        4 != k
          ? (1 << k) | ((f & 15) << (k - 4)) | (1 << (k - 5))
          : (f << 1) | 1;
      b[e] = -8 * (0 === g ? f : -f);
    }
    return b;
  }
  function Da(a) {
    for (var b = new Uint8Array(a.length), c = 0, d = a.length; c < d; c++) {
      var e = c,
        f = a[c];
      var g = (f >> 8) & 128;
      0 != g && (f = -f);
      f += 132;
      32635 < f && (f = 32635);
      var k = Ea[(f >> 7) & 255];
      b[e] = ~(g | (k << 4) | ((f >> (k + 3)) & 15));
    }
    return b;
  }
  function Fa(a) {
    for (var b = new Int16Array(a.length), c = 0, d = a.length; c < d; c++) {
      var e = c,
        f = a[c];
      f = ~f;
      var g = (f >> 4) & 7;
      g = Ga[g] + ((f & 15) << (g + 3));
      0 != (f & 128) && (g = -g);
      b[e] = g;
    }
    return b;
  }
  function da(a, b, c, d) {
    d = void 0 === d ? a.length : d;
    for (c = void 0 === c ? 0 : c; c < d; c += b) {
      var e = a,
        f = b,
        g = c;
      f--;
      for (var k = 0; k < f; k++) {
        var r = e[g + k];
        e[g + k] = e[g + f];
        e[g + f] = r;
        f--;
      }
    }
  }
  function T(a, b, c) {
    c = void 0 === c ? 0 : c;
    for (var d = 0, e = a.length; d < e; ) {
      var f = a.codePointAt(d);
      if (128 > f) (b[c] = f), c++;
      else {
        var g = 0,
          k = 0;
        2047 >= f
          ? ((g = 1), (k = 192))
          : 65535 >= f
          ? ((g = 2), (k = 224))
          : 1114111 >= f && ((g = 3), (k = 240), d++);
        b[c] = (f >> (6 * g)) + k;
        for (c++; 0 < g; ) (b[c] = 128 | ((f >> (6 * (g - 1))) & 63)), c++, g--;
      }
      d++;
    }
    return c;
  }
  function U(a) {
    var b = Math.floor(a);
    a -= b;
    return 0.5 > a ? b : 0.5 < a ? b + 1 : b % 2 ? b + 1 : b;
  }
  function G(a, b, c) {
    c = void 0 === c ? a.length : c;
    var d = void 0 === b ? 0 : b;
    c = void 0 === c ? a.length : c;
    b = "";
    for (d = void 0 === d ? 0 : d; d < c; ) {
      var e = 128,
        f = 191,
        g = !1,
        k = a[d++];
      if (0 <= k && 127 >= k) b += String.fromCharCode(k);
      else {
        var r = 0;
        194 <= k && 223 >= k
          ? (r = 1)
          : 224 <= k && 239 >= k
          ? ((r = 2), 224 === a[d] && (e = 160), 237 === a[d] && (f = 159))
          : 240 <= k && 244 >= k
          ? ((r = 3), 240 === a[d] && (e = 144), 244 === a[d] && (f = 143))
          : (g = !0);
        k &= (1 << (8 - r - 1)) - 1;
        for (var z = 0; z < r; z++) {
          if (a[d] < e || a[d] > f) g = !0;
          k = (k << 6) | (a[d] & 63);
          d++;
        }
        g
          ? (b += String.fromCharCode(65533))
          : 65535 >= k
          ? (b += String.fromCharCode(k))
          : ((k -= 65536),
            (b += String.fromCharCode(
              ((k >> 10) & 1023) + 55296,
              (k & 1023) + 56320
            )));
      }
    }
    return b;
  }
  function x(a) {
    var b = [];
    T(a, b);
    return b;
  }
  function L(a, b, c, d) {
    d = void 0 === d ? 0 : d;
    b = b || {};
    for (
      var e = ea(b.h, b.R, b.O),
        f = Math.ceil(b.h / 8),
        g = 0,
        k = d,
        r = a.length;
      g < r;
      g++
    )
      d = e.ga(c, a[g], d);
    b.o && da(c, f, k, d);
    return d;
  }
  function E(a, b, c, d, e) {
    d = void 0 === d ? 0 : d;
    e = void 0 === e ? a.length : e;
    b = b || {};
    var f = ea(b.h, b.R, b.O);
    e -= (e - d) % f.offset;
    b.o
      ? ((a = new Uint8Array(a)),
        b.o && da(a, f.offset, d, e),
        fa(a, c, d, e, f))
      : fa(a, c, d, e, f);
  }
  function h(a, b) {
    var c = [];
    L([a], b, c, 0);
    return c;
  }
  function M(a, b, c) {
    c = void 0 === c ? 0 : c;
    var d = [];
    E(a, b, d, c, c + Math.ceil(b.h / 8));
    return d[0];
  }
  function fa(a, b, c, d, e) {
    for (var f = e.offset, g = 0; c < d; c += f, g++) b[g] = e.S(a, c);
  }
  function ea(a, b, c) {
    return b && 32 == a
      ? new H(8, 23)
      : b && 64 == a
      ? new H(11, 52)
      : new F(a, c);
  }
  function A(a, b) {
    for (var c = x(a), d = c.length; d < b; d++) c.push(0);
    return c;
  }
  function qa(a) {
    return Math.exp(((-a / 2) * a) / 2);
  }
  function pa(a) {
    return function (b) {
      return (0 === b ? 1 : Math.sin(Math.PI * b) / (Math.PI * b)) * a(b);
    };
  }
  function ha(a, b, c, d) {
    d = (void 0 === d ? null : d) || {};
    var e = new Float64Array(a.length * ((c - b) / b + 1));
    d.method = d.method || "cubic";
    var f = new v(a.length, e.length, {
      method: d.method,
      tension: d.tension || 0,
      sincFilterSize: d.sincFilterSize || 6,
      sincWindow: d.sincWindow || void 0,
      clip: d.clip || "mirror",
    });
    void 0 === d.LPF && (d.LPF = Ha[d.method]);
    if (d.LPF) {
      d.LPFType = d.LPFType || "IIR";
      var g = Ia[d.LPFType];
      if (c > b) {
        b = new g(d.LPForder || ia[d.LPFType], c, b / 2);
        c = 0;
        for (d = e.length; c < d; c++) e[c] = b.filter(f.M(c, a));
        b.reset();
        for (a = e.length - 1; 0 <= a; a--) e[a] = b.filter(e[a]);
      } else {
        b = new g(d.LPForder || ia[d.LPFType], b, c / 2);
        c = 0;
        for (d = a.length; c < d; c++) a[c] = b.filter(a[c]);
        b.reset();
        for (c = a.length - 1; 0 <= c; c--) a[c] = b.filter(a[c]);
        ja(a, e, f);
      }
    } else ja(a, e, f);
    return e;
  }
  function ja(a, b, c) {
    for (var d = 0, e = b.length; d < e; d++) b[d] = c.M(d, a);
  }
  function J(a, b) {
    var c = a / b;
    c % 2 && c++;
    return c;
  }
  var ca = [-1, -1, -1, -1, 2, 4, 6, 8, -1, -1, -1, -1, 2, 4, 6, 8],
    R = [
      7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 21, 23, 25, 28, 31, 34, 37, 41,
      45, 50, 55, 60, 66, 73, 80, 88, 97, 107, 118, 130, 143, 157, 173, 190,
      209, 230, 253, 279, 307, 337, 371, 408, 449, 494, 544, 598, 658, 724, 796,
      876, 963, 1060, 1166, 1282, 1411, 1552, 1707, 1878, 2066, 2272, 2499,
      2749, 3024, 3327, 3660, 4026, 4428, 4871, 5358, 5894, 6484, 7132, 7845,
      8630, 9493, 10442, 11487, 12635, 13899, 15289, 16818, 18500, 20350, 22385,
      24623, 27086, 29794, 32767,
    ],
    Ba = [
      1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
      6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      7, 7, 7,
    ],
    Ea = [
      0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
      6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
      6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
      6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      7, 7, 7, 7, 7, 7,
    ],
    Ga = [0, 132, 396, 924, 1980, 4092, 8316, 16764];
  F.prototype.ga = function (a, b, c) {
    c = void 0 === c ? 0 : c;
    b = this.b(Math.round(b));
    for (var d = 0, e = this.offset; d < e; d++)
      (a[c] = Math.floor(b / Math.pow(2, 8 * d)) & 255), c++;
    return c;
  };
  F.prototype.a = function (a, b) {
    b = void 0 === b ? 0 : b;
    for (var c = 0, d = 0; d < this.offset; d++)
      c += a[b + d] * Math.pow(256, d);
    return c;
  };
  F.prototype.f = function (a, b) {
    return this.c(this.a(a, void 0 === b ? 0 : b));
  };
  F.prototype.b = function (a) {
    return a > this.max ? this.max : a < this.min ? this.min : a;
  };
  F.prototype.c = function (a) {
    a > this.max && (a -= 2 * this.max + 2);
    return a;
  };
  H.prototype.ga = function (a, b, c) {
    Math.abs(b) > this.f - 2 * this.g && (b = 0 > b ? -Infinity : Infinity);
    var d = 0 > ((b = +b) || 1 / b) ? 1 : 0 > b ? 1 : 0;
    b = Math.abs(b);
    var e = Math.min(Math.floor(Math.log(b) / Math.LN2), 1023),
      f = U((b / Math.pow(2, e)) * Math.pow(2, this.c));
    b !== b
      ? ((f = Math.pow(2, this.c - 1)), (e = (1 << this.b) - 1))
      : 0 !== b &&
        (b >= Math.pow(2, 1 - this.a)
          ? (2 <= f / Math.pow(2, this.c) && ((e += 1), (f = 1)),
            e > this.a
              ? ((e = (1 << this.b) - 1), (f = 0))
              : ((e += this.a), (f = U(f) - Math.pow(2, this.c))))
          : ((f = U(b / Math.pow(2, 1 - this.a - this.c))), (e = 0)));
    return this.l(a, c, d, e, f);
  };
  H.prototype.S = function (a, b) {
    for (var c = (1 << this.b) - 1, d = "", e = this.offset - 1; 0 <= e; e--) {
      var f = a[e + b].toString(2);
      d += "00000000".substring(f.length) + f;
    }
    e = "1" == d.charAt(0) ? -1 : 1;
    d = d.substring(1);
    f = parseInt(d.substring(0, this.b), 2);
    d = d.substring(this.b);
    if (f == c) return 0 !== parseInt(d, 2) ? NaN : Infinity * e;
    0 === f ? ((f += 1), (c = parseInt(d, 2))) : (c = parseInt("1" + d, 2));
    return e * c * this.j * Math.pow(2, f - this.a);
  };
  H.prototype.l = function (a, b, c, d, e) {
    var f = [];
    f.push(c);
    for (c = this.b; 0 < c; --c)
      (f[c] = d % 2 ? 1 : 0), (d = Math.floor(d / 2));
    d = f.length;
    for (c = this.c; 0 < c; --c)
      (f[d + c] = e % 2 ? 1 : 0), (e = Math.floor(e / 2));
    e = f.join("");
    f = this.offset + b - 1;
    for (d = b; f >= b; )
      (a[f] = parseInt(e.substring(0, 8), 2)), (e = e.substring(8)), f--, d++;
    return d;
  };
  B.prototype.va = function (a) {
    this.c = 0;
    this.container = this.u(a, 4);
    if (-1 === this.Z.indexOf(this.container))
      throw Error("Not a supported format.");
    this.a.o = "RIFX" === this.container;
    this.chunkSize = this.b(a);
    this.format = this.u(a, 4);
    this.Y = {
      chunkId: this.container,
      chunkSize: this.chunkSize,
      format: this.format,
      subChunks: this.V(a),
    };
  };
  B.prototype.s = function (a, b) {
    b = void 0 === b ? !1 : b;
    for (var c = this.Y.subChunks, d = [], e = 0; e < c.length; e++)
      if (c[e].chunkId == a)
        if (b) d.push(c[e]);
        else return c[e];
    return "LIST" == a ? (d.length ? d : null) : null;
  };
  B.prototype.u = function (a, b) {
    var c = G(a, this.c, this.c + b);
    this.c += b;
    return c;
  };
  B.prototype.b = function (a) {
    a = M(a, this.a, this.c);
    this.c += 4;
    return a;
  };
  B.prototype.V = function (a) {
    for (var b = [], c = this.c; c <= a.length - 8; )
      b.push(this.$a(a, c)),
        (c += 8 + b[b.length - 1].chunkSize),
        (c = c % 2 ? c + 1 : c);
    return b;
  };
  B.prototype.$a = function (a, b) {
    var c = { chunkId: this.Ea(a, b), chunkSize: this.Fa(a, b) };
    "LIST" == c.chunkId
      ? ((c.format = G(a, b + 8, b + 12)),
        (this.c += 4),
        (c.subChunks = this.V(a)))
      : ((this.c = b + 8 + (c.chunkSize % 2 ? c.chunkSize + 1 : c.chunkSize)),
        (c.chunkData = { start: b + 8, end: this.c }));
    return c;
  };
  B.prototype.Ea = function (a, b) {
    this.c += 4;
    return G(a, b, b + 4);
  };
  B.prototype.Fa = function (a, b) {
    this.c += 4;
    return M(a, this.a, b + 4);
  };
  P(u, B);
  u.prototype.fromBuffer = function (a, b) {
    b = void 0 === b ? !0 : b;
    this.U();
    this.va(a);
    this.g.o = this.a.o;
    if ("WAVE" != this.format)
      throw Error('Could not find the "WAVE" format identifier');
    this.hb(a);
    this.jb(a);
    this.ib(a);
    this.eb(a);
    this.qa(a);
    this.fb(a);
    this.ma(a);
    this.gb(a, b);
    this.lb(a);
    this.ia(a);
    this.na(a);
  };
  u.prototype.U = function () {
    var a = new u();
    Object.assign(this.fmt, a.fmt);
    Object.assign(this.fact, a.fact);
    Object.assign(this.cue, a.cue);
    Object.assign(this.smpl, a.smpl);
    Object.assign(this.bext, a.bext);
    Object.assign(this.iXML, a.iXML);
    Object.assign(this.ds64, a.ds64);
    Object.assign(this.data, a.data);
    this.LIST = [];
    Object.assign(this.junk, a.junk);
    Object.assign(this._PMX, a._PMX);
  };
  u.prototype.jb = function (a) {
    var b = this.s("fmt ");
    if (b)
      (this.c = b.chunkData.start),
        (this.fmt.chunkId = b.chunkId),
        (this.fmt.chunkSize = b.chunkSize),
        (this.fmt.audioFormat = this.j(a)),
        (this.fmt.numChannels = this.j(a)),
        (this.fmt.sampleRate = this.b(a)),
        (this.fmt.byteRate = this.b(a)),
        (this.fmt.blockAlign = this.j(a)),
        (this.fmt.bitsPerSample = this.j(a)),
        this.kb(a);
    else throw Error('Could not find the "fmt " chunk');
  };
  u.prototype.kb = function (a) {
    16 < this.fmt.chunkSize &&
      ((this.fmt.cbSize = this.j(a)),
      18 < this.fmt.chunkSize &&
        ((this.fmt.validBitsPerSample = this.j(a)),
        20 < this.fmt.chunkSize &&
          ((this.fmt.dwChannelMask = this.b(a)),
          (this.fmt.subformat = [
            this.b(a),
            this.b(a),
            this.b(a),
            this.b(a),
          ]))));
  };
  u.prototype.ib = function (a) {
    var b = this.s("fact");
    b &&
      ((this.c = b.chunkData.start),
      (this.fact.chunkId = b.chunkId),
      (this.fact.chunkSize = b.chunkSize),
      (this.fact.dwSampleLength = this.b(a)));
  };
  u.prototype.fb = function (a) {
    var b = this.s("cue ");
    if (b)
      for (
        this.c = b.chunkData.start,
          this.cue.chunkId = b.chunkId,
          this.cue.chunkSize = b.chunkSize,
          this.cue.dwCuePoints = this.b(a),
          b = 0;
        b < this.cue.dwCuePoints;
        b++
      )
        this.cue.points.push({
          dwName: this.b(a),
          dwPosition: this.b(a),
          fccChunk: this.u(a, 4),
          dwChunkStart: this.b(a),
          dwBlockStart: this.b(a),
          dwSampleOffset: this.b(a),
        });
  };
  u.prototype.ma = function (a) {
    var b = this.s("smpl");
    if (b)
      for (
        this.c = b.chunkData.start,
          this.smpl.chunkId = b.chunkId,
          this.smpl.chunkSize = b.chunkSize,
          this.smpl.dwManufacturer = this.b(a),
          this.smpl.dwProduct = this.b(a),
          this.smpl.dwSamplePeriod = this.b(a),
          this.smpl.dwMIDIUnityNote = this.b(a),
          this.smpl.dwMIDIPitchFraction = this.b(a),
          this.smpl.dwSMPTEFormat = this.b(a),
          this.smpl.dwSMPTEOffset = this.b(a),
          this.smpl.dwNumSampleLoops = this.b(a),
          this.smpl.dwSamplerData = this.b(a),
          b = 0;
        b < this.smpl.dwNumSampleLoops;
        b++
      )
        this.smpl.loops.push({
          dwName: this.b(a),
          dwType: this.b(a),
          dwStart: this.b(a),
          dwEnd: this.b(a),
          dwFraction: this.b(a),
          dwPlayCount: this.b(a),
        });
  };
  u.prototype.gb = function (a, b) {
    var c = this.s("data");
    if (c)
      (this.data.chunkId = "data"),
        (this.data.chunkSize = c.chunkSize),
        b && (this.data.samples = a.slice(c.chunkData.start, c.chunkData.end));
    else throw Error('Could not find the "data" chunk');
  };
  u.prototype.eb = function (a) {
    var b = this.s("bext");
    b &&
      ((this.c = b.chunkData.start),
      (this.bext.chunkId = b.chunkId),
      (this.bext.chunkSize = b.chunkSize),
      (this.bext.description = this.u(a, 256)),
      (this.bext.originator = this.u(a, 32)),
      (this.bext.originatorReference = this.u(a, 32)),
      (this.bext.originationDate = this.u(a, 10)),
      (this.bext.originationTime = this.u(a, 8)),
      (this.bext.timeReference = [this.b(a), this.b(a)]),
      (this.bext.version = this.j(a)),
      (this.bext.UMID = this.u(a, 64)),
      (this.bext.loudnessValue = this.j(a)),
      (this.bext.loudnessRange = this.j(a)),
      (this.bext.maxTruePeakLevel = this.j(a)),
      (this.bext.maxMomentaryLoudness = this.j(a)),
      (this.bext.maxShortTermLoudness = this.j(a)),
      (this.bext.reserved = this.u(a, 180)),
      (this.bext.codingHistory = this.u(a, this.bext.chunkSize - 602)));
  };
  u.prototype.qa = function (a) {
    var b = this.s("iXML");
    b &&
      ((this.c = b.chunkData.start),
      (this.iXML.chunkId = b.chunkId),
      (this.iXML.chunkSize = b.chunkSize),
      (this.iXML.value = G(a, this.c, this.c + this.iXML.chunkSize)));
  };
  u.prototype.hb = function (a) {
    var b = this.s("ds64");
    if (b)
      (this.c = b.chunkData.start),
        (this.ds64.chunkId = b.chunkId),
        (this.ds64.chunkSize = b.chunkSize),
        (this.ds64.riffSizeHigh = this.b(a)),
        (this.ds64.riffSizeLow = this.b(a)),
        (this.ds64.dataSizeHigh = this.b(a)),
        (this.ds64.dataSizeLow = this.b(a)),
        (this.ds64.originationTime = this.b(a)),
        (this.ds64.sampleCountHigh = this.b(a)),
        (this.ds64.sampleCountLow = this.b(a));
    else if ("RF64" == this.container)
      throw Error('Could not find the "ds64" chunk');
  };
  u.prototype.ia = function (a) {
    var b = this.s("LIST", !0);
    if (null !== b)
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        this.LIST.push({
          chunkId: d.chunkId,
          chunkSize: d.chunkSize,
          format: d.format,
          subChunks: [],
        });
        for (var e = 0; e < d.subChunks.length; e++)
          this.ka(d.subChunks[e], d.format, a);
      }
  };
  u.prototype.ka = function (a, b, c) {
    "adtl" == b
      ? -1 < ["labl", "note", "ltxt"].indexOf(a.chunkId) && this.la(c, a)
      : "INFO" == b && this.ja(c, a);
  };
  u.prototype.la = function (a, b) {
    this.c = b.chunkData.start;
    var c = { chunkId: b.chunkId, chunkSize: b.chunkSize, dwName: this.b(a) };
    "ltxt" == b.chunkId
      ? ((c.dwSampleLength = this.b(a)),
        (c.dwPurposeID = this.b(a)),
        (c.dwCountry = this.j(a)),
        (c.dwLanguage = this.j(a)),
        (c.dwDialect = this.j(a)),
        (c.dwCodePage = this.j(a)),
        (c.value = ""))
      : (c.value = this.X(a, this.c));
    this.LIST[this.LIST.length - 1].subChunks.push(c);
  };
  u.prototype.ja = function (a, b) {
    this.c = b.chunkData.start;
    this.LIST[this.LIST.length - 1].subChunks.push({
      chunkId: b.chunkId,
      chunkSize: b.chunkSize,
      value: this.X(a, this.c),
    });
  };
  u.prototype.lb = function (a) {
    var b = this.s("junk");
    b &&
      (this.junk = {
        chunkId: b.chunkId,
        chunkSize: b.chunkSize,
        chunkData: [].slice.call(a.slice(b.chunkData.start, b.chunkData.end)),
      });
  };
  u.prototype.na = function (a) {
    var b = this.s("_PMX");
    b &&
      ((this.c = b.chunkData.start),
      (this._PMX.chunkId = b.chunkId),
      (this._PMX.chunkSize = b.chunkSize),
      (this._PMX.value = G(a, this.c, this.c + this._PMX.chunkSize)));
  };
  u.prototype.X = function (a, b) {
    for (
      var c = (b = void 0 === b ? 0 : b);
      c < a.length && (this.c++, 0 !== a[c]);
      c++
    );
    return G(a, b, this.c - 1);
  };
  u.prototype.j = function (a) {
    a = M(a, this.g, this.c);
    this.c += 2;
    return a;
  };
  P(q, u);
  q.prototype.toBuffer = function () {
    this.g.o = "RIFX" === this.container;
    this.a.o = this.g.o;
    for (
      var a = [
          this.Sa(),
          this.Oa(),
          this.Da(),
          this.bb(),
          this.Qa(),
          this.Pa(),
          x(this.data.chunkId),
          h(this.data.samples.length, this.a),
          this.data.samples,
          this.Ga(),
          this.Ya(),
          this.Ta(),
          this.ab(),
        ],
        b = 0,
        c = 0;
      c < a.length;
      c++
    )
      b += a[c].length;
    c = new Uint8Array(b + 12);
    var d = T(this.container, c, 0);
    d = L([b + 4], this.a, c, void 0 === d ? 0 : d);
    d = T(this.format, c, void 0 === d ? 0 : d);
    for (b = 0; b < a.length; b++) c.set(a[b], d), (d += a[b].length);
    return c;
  };
  q.prototype.Da = function () {
    var a = [];
    this.Ca();
    this.bext.chunkId &&
      ((this.bext.chunkSize = 602 + this.bext.codingHistory.length),
      (a = a.concat(
        x(this.bext.chunkId),
        h(602 + this.bext.codingHistory.length, this.a),
        A(this.bext.description, 256),
        A(this.bext.originator, 32),
        A(this.bext.originatorReference, 32),
        A(this.bext.originationDate, 10),
        A(this.bext.originationTime, 8),
        h(this.bext.timeReference[0], this.a),
        h(this.bext.timeReference[1], this.a),
        h(this.bext.version, this.g),
        A(this.bext.UMID, 64),
        h(this.bext.loudnessValue, this.g),
        h(this.bext.loudnessRange, this.g),
        h(this.bext.maxTruePeakLevel, this.g),
        h(this.bext.maxMomentaryLoudness, this.g),
        h(this.bext.maxShortTermLoudness, this.g),
        A(this.bext.reserved, 180),
        A(this.bext.codingHistory, this.bext.codingHistory.length)
      )));
    this.l(a);
    return a;
  };
  q.prototype.Ca = function () {
    for (var a in this.bext)
      if (this.bext.hasOwnProperty(a) && this.bext[a] && "timeReference" != a) {
        this.bext.chunkId = "bext";
        break;
      }
    if (this.bext.timeReference[0] || this.bext.timeReference[1])
      this.bext.chunkId = "bext";
  };
  q.prototype.bb = function () {
    var a = [];
    if (this.iXML.chunkId) {
      var b = x(this.iXML.value);
      this.iXML.chunkSize = b.length;
      a = a.concat(x(this.iXML.chunkId), h(this.iXML.chunkSize, this.a), b);
    }
    this.l(a);
    return a;
  };
  q.prototype.Oa = function () {
    var a = [];
    this.ds64.chunkId &&
      (a = a.concat(
        x(this.ds64.chunkId),
        h(this.ds64.chunkSize, this.a),
        h(this.ds64.riffSizeHigh, this.a),
        h(this.ds64.riffSizeLow, this.a),
        h(this.ds64.dataSizeHigh, this.a),
        h(this.ds64.dataSizeLow, this.a),
        h(this.ds64.originationTime, this.a),
        h(this.ds64.sampleCountHigh, this.a),
        h(this.ds64.sampleCountLow, this.a)
      ));
    this.l(a);
    return a;
  };
  q.prototype.Ga = function () {
    var a = [];
    if (this.cue.chunkId) {
      var b = this.Ja();
      a = a.concat(
        x(this.cue.chunkId),
        h(b.length + 4, this.a),
        h(this.cue.dwCuePoints, this.a),
        b
      );
    }
    this.l(a);
    return a;
  };
  q.prototype.Ja = function () {
    for (var a = [], b = 0; b < this.cue.dwCuePoints; b++)
      a = a.concat(
        h(this.cue.points[b].dwName, this.a),
        h(this.cue.points[b].dwPosition, this.a),
        x(this.cue.points[b].fccChunk),
        h(this.cue.points[b].dwChunkStart, this.a),
        h(this.cue.points[b].dwBlockStart, this.a),
        h(this.cue.points[b].dwSampleOffset, this.a)
      );
    return a;
  };
  q.prototype.Ya = function () {
    var a = [];
    if (this.smpl.chunkId) {
      var b = this.Za();
      a = a.concat(
        x(this.smpl.chunkId),
        h(b.length + 36, this.a),
        h(this.smpl.dwManufacturer, this.a),
        h(this.smpl.dwProduct, this.a),
        h(this.smpl.dwSamplePeriod, this.a),
        h(this.smpl.dwMIDIUnityNote, this.a),
        h(this.smpl.dwMIDIPitchFraction, this.a),
        h(this.smpl.dwSMPTEFormat, this.a),
        h(this.smpl.dwSMPTEOffset, this.a),
        h(this.smpl.dwNumSampleLoops, this.a),
        h(this.smpl.dwSamplerData, this.a),
        b
      );
    }
    this.l(a);
    return a;
  };
  q.prototype.Za = function () {
    for (var a = [], b = 0; b < this.smpl.dwNumSampleLoops; b++)
      a = a.concat(
        h(this.smpl.loops[b].dwName, this.a),
        h(this.smpl.loops[b].dwType, this.a),
        h(this.smpl.loops[b].dwStart, this.a),
        h(this.smpl.loops[b].dwEnd, this.a),
        h(this.smpl.loops[b].dwFraction, this.a),
        h(this.smpl.loops[b].dwPlayCount, this.a)
      );
    return a;
  };
  q.prototype.Pa = function () {
    var a = [];
    this.fact.chunkId &&
      (a = a.concat(
        x(this.fact.chunkId),
        h(this.fact.chunkSize, this.a),
        h(this.fact.dwSampleLength, this.a)
      ));
    this.l(a);
    return a;
  };
  q.prototype.Qa = function () {
    var a = [];
    if (this.fmt.chunkId)
      return (
        (a = a.concat(
          x(this.fmt.chunkId),
          h(this.fmt.chunkSize, this.a),
          h(this.fmt.audioFormat, this.g),
          h(this.fmt.numChannels, this.g),
          h(this.fmt.sampleRate, this.a),
          h(this.fmt.byteRate, this.a),
          h(this.fmt.blockAlign, this.g),
          h(this.fmt.bitsPerSample, this.g),
          this.Ra()
        )),
        this.l(a),
        a
      );
    throw Error('Could not find the "fmt " chunk');
  };
  q.prototype.Ra = function () {
    var a = [];
    16 < this.fmt.chunkSize && (a = a.concat(h(this.fmt.cbSize, this.g)));
    18 < this.fmt.chunkSize &&
      (a = a.concat(h(this.fmt.validBitsPerSample, this.g)));
    20 < this.fmt.chunkSize &&
      (a = a.concat(h(this.fmt.dwChannelMask, this.a)));
    24 < this.fmt.chunkSize &&
      (a = a.concat(
        h(this.fmt.subformat[0], this.a),
        h(this.fmt.subformat[1], this.a),
        h(this.fmt.subformat[2], this.a),
        h(this.fmt.subformat[3], this.a)
      ));
    return a;
  };
  q.prototype.Ta = function () {
    for (var a = [], b = 0; b < this.LIST.length; b++) {
      var c = this.Va(this.LIST[b].subChunks, this.LIST[b].format);
      a = a.concat(
        x(this.LIST[b].chunkId),
        h(c.length + 4, this.a),
        x(this.LIST[b].format),
        c
      );
    }
    this.l(a);
    return a;
  };
  q.prototype.Va = function (a, b) {
    for (var c = [], d = 0, e = a.length; d < e; d++)
      "INFO" == b
        ? (c = c.concat(this.Ua(a[d])))
        : "adtl" == b && (c = c.concat(this.Wa(a[d]))),
        this.l(c);
    return c;
  };
  q.prototype.Ua = function (a) {
    var b = [],
      c = A(a.value, a.value.length);
    b = b.concat(x(a.chunkId), h(c.length + 1, this.a), c);
    b.push(0);
    return b;
  };
  q.prototype.Wa = function (a) {
    var b = [];
    if (-1 < ["labl", "note"].indexOf(a.chunkId)) {
      var c = A(a.value, a.value.length);
      b = b.concat(
        x(a.chunkId),
        h(c.length + 5, this.a),
        h(a.dwName, this.a),
        c
      );
      b.push(0);
    } else "ltxt" == a.chunkId && (b = b.concat(this.Xa(a)));
    return b;
  };
  q.prototype.Xa = function (a) {
    return x(a.chunkId).concat(
      h(a.value.length + 20, this.a),
      h(a.dwName, this.a),
      h(a.dwSampleLength, this.a),
      h(a.dwPurposeID, this.a),
      h(a.dwCountry, this.g),
      h(a.dwLanguage, this.g),
      h(a.dwDialect, this.g),
      h(a.dwCodePage, this.g),
      A(a.value, a.value.length)
    );
  };
  q.prototype.ab = function () {
    var a = [];
    if (this._PMX.chunkId) {
      var b = x(this._PMX.value);
      this._PMX.chunkSize = b.length;
      a = a.concat(x(this._PMX.chunkId), h(this._PMX.chunkSize, this.a), b);
    }
    this.l(a);
    return a;
  };
  q.prototype.Sa = function () {
    var a = [];
    if (this.junk.chunkId)
      return a.concat(
        x(this.junk.chunkId),
        h(this.junk.chunkData.length, this.a),
        this.junk.chunkData
      );
    this.l(a);
    return a;
  };
  q.prototype.l = function (a) {
    a.length % 2 && a.push(0);
  };
  P(t, q);
  t.prototype.fromScratch = function (a, b, c, d, e) {
    e = e || {};
    this.U();
    this.W(a, b, c, d, e);
  };
  t.prototype.fromBuffer = function (a, b) {
    q.prototype.fromBuffer.call(this, a, void 0 === b ? !0 : b);
    this.ya();
    this.$();
  };
  t.prototype.toBuffer = function () {
    this.aa();
    return q.prototype.toBuffer.call(this);
  };
  t.prototype.getSamples = function (a, b) {
    a = void 0 === a ? !1 : a;
    b = void 0 === b ? Float64Array : b;
    var c = new b(this.data.samples.length / (this.f.h / 8));
    E(this.data.samples, this.f, c, 0, this.data.samples.length);
    if (!a && 1 < this.fmt.numChannels) {
      var d = this.fmt.numChannels,
        e = b;
      e = void 0 === e ? Float64Array : e;
      for (var f = [], g = 0; g < d; g++) f[g] = new e(c.length / d);
      for (e = 0; e < d; e++) {
        g = e;
        for (var k = 0; g < c.length; g += d, k++) f[e][k] = c[g];
      }
      c = f;
    }
    return c;
  };
  t.prototype.getSample = function (a) {
    a *= this.f.h / 8;
    if (a + this.f.h / 8 > this.data.samples.length) throw Error("Range error");
    return M(this.data.samples.slice(a, a + this.f.h / 8), this.f);
  };
  t.prototype.setSample = function (a, b) {
    a *= this.f.h / 8;
    if (a + this.f.h / 8 > this.data.samples.length) throw Error("Range error");
    L([b], this.f, this.data.samples, void 0 === a ? 0 : a);
  };
  t.prototype.getiXML = function () {
    return this.iXML.value;
  };
  t.prototype.setiXML = function (a) {
    if ("string" !== typeof a)
      throw new TypeError("iXML value must be a string.");
    this.iXML.value = a;
    this.iXML.chunkId = "iXML";
  };
  t.prototype.get_PMX = function () {
    return this._PMX.value;
  };
  t.prototype.set_PMX = function (a) {
    if ("string" !== typeof a)
      throw new TypeError("_PMX value must be a string.");
    this._PMX.value = a;
    this._PMX.chunkId = "_PMX";
  };
  t.prototype.W = function (a, b, c, d, e) {
    e.container || (e.container = "RIFF");
    this.container = e.container;
    this.bitDepth = c;
    var f = [];
    if (0 < d.length)
      if (d[0].constructor !== Number) {
        f = new Float64Array(d[0].length * d.length);
        for (var g = 0, k = d[0].length, r = 0; g < k; g++)
          for (var z = 0, I = d.length; z < I; z++, r++) f[r] = d[z][g];
      } else f = d;
    d = f;
    this.$();
    f = this.f.h / 8;
    this.data.samples = new Uint8Array(d.length * f);
    L(d, this.f, this.data.samples, 0);
    this.cb(c, a, b, f, this.data.samples.length, e);
    this.data.chunkId = "data";
    this.data.chunkSize = this.data.samples.length;
    this.aa();
  };
  t.prototype.cb = function (a, b, c, d, e, f) {
    "4" == a
      ? this.za(a, b, c, d, e, f)
      : "8a" == a || "8m" == a
      ? this.Aa(a, b, c, d, e, f)
      : -1 == Object.keys(this.G).indexOf(a) || 2 < b
      ? this.Ba(a, b, c, d, e, f)
      : this.F(a, b, c, d, e, f);
  };
  t.prototype.F = function (a, b, c, d, e, f) {
    this.container = f.container;
    this.chunkSize = 36 + e;
    this.format = "WAVE";
    this.bitDepth = a;
    this.fmt = {
      chunkId: "fmt ",
      chunkSize: 16,
      audioFormat: this.G[a] || 65534,
      numChannels: b,
      sampleRate: c,
      byteRate: b * d * c,
      blockAlign: b * d,
      bitsPerSample: parseInt(a, 10),
      cbSize: 0,
      validBitsPerSample: 0,
      dwChannelMask: 0,
      subformat: [],
    };
  };
  t.prototype.za = function (a, b, c, d, e, f) {
    this.F(a, b, c, d, e, f);
    this.chunkSize = 40 + e;
    this.fmt.chunkSize = 20;
    this.fmt.byteRate = 4055;
    this.fmt.blockAlign = 256;
    this.fmt.bitsPerSample = 4;
    this.fmt.cbSize = 2;
    this.fmt.validBitsPerSample = 505;
    this.fact = { chunkId: "fact", chunkSize: 4, dwSampleLength: 2 * e };
  };
  t.prototype.Ba = function (a, b, c, d, e, f) {
    this.F(a, b, c, d, e, f);
    this.chunkSize = 60 + e;
    this.fmt.chunkSize = 40;
    this.fmt.bitsPerSample = ((parseInt(a, 10) - 1) | 7) + 1;
    this.fmt.cbSize = 22;
    this.fmt.validBitsPerSample = parseInt(a, 10);
    a = this.fmt;
    c = 0;
    1 === b
      ? (c = 4)
      : 2 === b
      ? (c = 3)
      : 4 === b
      ? (c = 51)
      : 6 === b
      ? (c = 63)
      : 8 === b && (c = 1599);
    a.dwChannelMask = c;
    this.fmt.subformat = [1, 1048576, 2852126848, 1905997824];
  };
  t.prototype.Aa = function (a, b, c, d, e, f) {
    this.F(a, b, c, d, e, f);
    this.chunkSize = 40 + e;
    this.fmt.chunkSize = 20;
    this.fmt.cbSize = 2;
    this.fmt.validBitsPerSample = 8;
    this.fact = { chunkId: "fact", chunkSize: 4, dwSampleLength: e };
  };
  t.prototype.ya = function () {
    3 === this.fmt.audioFormat && 32 === this.fmt.bitsPerSample
      ? (this.bitDepth = "32f")
      : 6 === this.fmt.audioFormat
      ? (this.bitDepth = "8a")
      : 7 === this.fmt.audioFormat
      ? (this.bitDepth = "8m")
      : (this.bitDepth = this.fmt.bitsPerSample.toString());
  };
  t.prototype.wa = function () {
    if (
      !(
        this.G[this.bitDepth] ||
        (8 < parseInt(this.bitDepth, 10) && 54 > parseInt(this.bitDepth, 10))
      )
    )
      throw Error("Invalid bit depth.");
  };
  t.prototype.$ = function () {
    this.f = {
      h: ((parseInt(this.bitDepth, 10) - 1) | 7) + 1,
      R: "32f" == this.bitDepth || "64" == this.bitDepth,
      O: "8" != this.bitDepth,
      o: "RIFX" == this.container,
    };
    -1 < ["4", "8a", "8m"].indexOf(this.bitDepth) &&
      ((this.f.h = 8), (this.f.O = !1));
  };
  t.prototype.aa = function () {
    this.wa();
    var a = this.fmt.numChannels;
    if (1 > a || 65535 < (a * this.fmt.bitsPerSample) / 8)
      throw Error("Invalid number of channels.");
    a = this.fmt.sampleRate;
    if (
      1 > a ||
      4294967295 < (this.fmt.bitsPerSample / 8) * this.fmt.numChannels * a
    )
      throw Error("Invalid sample rate.");
  };
  P(C, t);
  C.prototype.getTag = function (a) {
    a = this.P(a);
    return null !== a.w ? this.LIST[a.LIST].subChunks[a.w].value : null;
  };
  C.prototype.setTag = function (a, b) {
    var c = a;
    if (c.constructor !== String) throw Error("Invalid tag name.");
    if (4 > c.length) for (var d = 0, e = 4 - c.length; d < e; d++) c += " ";
    a = c;
    c = this.P(a);
    null !== c.w
      ? ((this.LIST[c.LIST].subChunks[c.w].chunkSize = b.length + 1),
        (this.LIST[c.LIST].subChunks[c.w].value = b))
      : null !== c.LIST
      ? this.LIST[c.LIST].subChunks.push({
          chunkId: a,
          chunkSize: b.length + 1,
          value: b,
        })
      : (this.LIST.push({
          chunkId: "LIST",
          chunkSize: b.length + 9,
          format: "INFO",
          subChunks: [],
        }),
        this.LIST[this.LIST.length - 1].subChunks.push({
          chunkId: a,
          chunkSize: b.length + 1,
          value: b,
        }));
  };
  C.prototype.deleteTag = function (a) {
    a = this.P(a);
    return null !== a.w ? (this.LIST[a.LIST].subChunks.splice(a.w, 1), !0) : !1;
  };
  C.prototype.listTags = function () {
    var a = this.C("INFO"),
      b = {};
    if (null !== a)
      for (var c = 0, d = this.LIST[a].subChunks.length; c < d; c++)
        b[this.LIST[a].subChunks[c].chunkId] = this.LIST[a].subChunks[c].value;
    return b;
  };
  C.prototype.C = function (a) {
    for (var b = 0, c = this.LIST.length; b < c; b++)
      if (this.LIST[b].format == a) return b;
    return null;
  };
  C.prototype.P = function (a) {
    for (
      var b = { LIST: null, w: null }, c = 0, d = this.LIST.length;
      c < d;
      c++
    )
      if ("INFO" == this.LIST[c].format) {
        b.LIST = c;
        d = 0;
        for (var e = this.LIST[c].subChunks.length; d < e; d++)
          if (this.LIST[c].subChunks[d].chunkId == a) {
            b.w = d;
            break;
          }
        break;
      }
    return b;
  };
  P(w, C);
  w.prototype.listCuePoints = function () {
    for (var a = this.J(), b = 0, c = a.length; b < c; b++)
      (a[b].position = (a[b].dwSampleOffset / this.fmt.sampleRate) * 1e3),
        a[b].dwSampleLength
          ? ((a[b].end = (a[b].dwSampleLength / this.fmt.sampleRate) * 1e3),
            (a[b].end += a[b].position))
          : (a[b].end = null),
        delete a[b].value;
    return a;
  };
  w.prototype.setCuePoint = function (a) {
    this.cue.chunkId = "cue ";
    a.label || (a.label = "");
    var b = this.J();
    this.I();
    this.cue.points = [];
    a.dwSampleOffset = (a.position * this.fmt.sampleRate) / 1e3;
    a.dwSampleLength = 0;
    a.end &&
      (a.dwSampleLength =
        (a.end * this.fmt.sampleRate) / 1e3 - a.dwSampleOffset);
    0 === b.length ? this.B(a, 1) : this.ra(b, a);
    this.cue.dwCuePoints = this.cue.points.length;
  };
  w.prototype.deleteCuePoint = function (a) {
    this.cue.chunkId = "cue ";
    var b = this.J();
    this.I();
    var c = this.cue.points.length;
    this.cue.points = [];
    for (var d = 0; d < c; d++) d + 1 !== a && this.B(b[d], d + 1);
    this.cue.dwCuePoints = this.cue.points.length;
    this.cue.dwCuePoints
      ? (this.cue.chunkId = "cue ")
      : ((this.cue.chunkId = ""), this.I());
  };
  w.prototype.updateLabel = function (a, b) {
    var c = this.C("adtl");
    if (null !== c)
      for (var d = 0, e = this.LIST[c].subChunks.length; d < e; d++)
        this.LIST[c].subChunks[d].dwName == a &&
          (this.LIST[c].subChunks[d].value = b);
  };
  w.prototype.J = function () {
    for (var a = [], b = 0; b < this.cue.points.length; b++) {
      var c = this.cue.points[b],
        d = this.Na(c.dwName);
      d.label = d.value ? d.value : "";
      d.dwPosition = c.dwPosition;
      d.fccChunk = c.fccChunk;
      d.dwChunkStart = c.dwChunkStart;
      d.dwBlockStart = c.dwBlockStart;
      d.dwSampleOffset = c.dwSampleOffset;
      a.push(d);
    }
    return a;
  };
  w.prototype.Na = function (a) {
    var b = this.C("adtl"),
      c = {};
    null !== b && this.ha(c, b, a);
    return c;
  };
  w.prototype.ha = function (a, b, c) {
    for (var d = 0, e = this.LIST[b].subChunks.length; d < e; d++)
      if (this.LIST[b].subChunks[d].dwName == c) {
        var f = this.LIST[b].subChunks[d];
        a.value = f.value || a.value;
        a.dwName = f.dwName || 0;
        a.dwSampleLength = f.dwSampleLength || 0;
        a.dwPurposeID = f.dwPurposeID || 0;
        a.dwCountry = f.dwCountry || 0;
        a.dwLanguage = f.dwLanguage || 0;
        a.dwDialect = f.dwDialect || 0;
        a.dwCodePage = f.dwCodePage || 0;
      }
  };
  w.prototype.B = function (a, b) {
    this.cue.points.push({
      dwName: b,
      dwPosition: a.dwPosition ? a.dwPosition : 0,
      fccChunk: a.fccChunk ? a.fccChunk : "data",
      dwChunkStart: a.dwChunkStart ? a.dwChunkStart : 0,
      dwBlockStart: a.dwBlockStart ? a.dwBlockStart : 0,
      dwSampleOffset: a.dwSampleOffset,
    });
    this.ta(a, b);
  };
  w.prototype.ra = function (a, b) {
    for (var c = !1, d = 0; d < a.length; d++)
      a[d].dwSampleOffset > b.dwSampleOffset && !c
        ? (this.B(b, d + 1), this.B(a[d], d + 2), (c = !0))
        : this.B(a[d], c ? d + 2 : d + 1);
    c || this.B(b, this.cue.points.length + 1);
  };
  w.prototype.I = function () {
    for (var a = 0, b = this.LIST.length; a < b; a++)
      "adtl" == this.LIST[a].format && this.LIST.splice(a);
  };
  w.prototype.ta = function (a, b) {
    var c = this.C("adtl");
    null === c &&
      (this.LIST.push({
        chunkId: "LIST",
        chunkSize: 4,
        format: "adtl",
        subChunks: [],
      }),
      (c = this.LIST.length - 1));
    this.sa(c, a, b);
    a.dwSampleLength && this.ua(c, a, b);
  };
  w.prototype.sa = function (a, b, c) {
    this.LIST[a].subChunks.push({
      chunkId: "labl",
      chunkSize: 4,
      dwName: c,
      value: b.label,
    });
    this.LIST[a].chunkSize += 12;
  };
  w.prototype.ua = function (a, b, c) {
    this.LIST[a].subChunks.push({
      chunkId: "ltxt",
      chunkSize: 20,
      dwName: c,
      dwSampleLength: b.dwSampleLength,
      dwPurposeID: b.dwPurposeID || 0,
      dwCountry: b.dwCountry || 0,
      dwLanguage: b.dwLanguage || 0,
      dwDialect: b.dwDialect || 0,
      dwCodePage: b.dwCodePage || 0,
      value: b.label,
    });
    this.LIST[a].chunkSize += 28;
  };
  v.prototype.H = function (a, b) {
    return this.f(Math.round(this.l * a), b);
  };
  v.prototype.G = function (a, b) {
    a *= this.l;
    var c = Math.floor(a);
    a -= c;
    return (1 - a) * this.f(c, b) + a * this.f(c + 1, b);
  };
  v.prototype.B = function (a, b) {
    a *= this.l;
    var c = Math.floor(a),
      d = [this.m(c, b), this.m(c + 1, b)],
      e = [this.f(c, b), this.f(c + 1, b)];
    a -= c;
    c = a * a;
    var f = a * c;
    return (
      (2 * f - 3 * c + 1) * e[0] +
      (f - 2 * c + a) * d[0] +
      (-2 * f + 3 * c) * e[1] +
      (f - c) * d[1]
    );
  };
  v.prototype.I = function (a, b) {
    a *= this.l;
    var c = Math.floor(a),
      d = c + this.v,
      e = 0;
    for (c = c - this.v + 1; c <= d; c++) e += this.F(a - c) * this.f(c, b);
    return e;
  };
  v.prototype.m = function (a, b) {
    return (this.J * (this.f(a + 1, b) - this.f(a - 1, b))) / 2;
  };
  v.prototype.f = function (a, b) {
    return 0 <= a && a < this.C ? b[a] : 0;
  };
  y.prototype.filter = function (a) {
    this.z.L[this.z.N] = a;
    for (var b = (a = 0), c = this.z.L.length; b < c; b++)
      a += this.a[b] * this.z.L[(this.z.N + b) % this.z.L.length];
    this.z.N = (this.z.N + 1) % this.z.L.length;
    return a;
  };
  y.prototype.reset = function () {
    this.z = this.b();
  };
  y.prototype.b = function () {
    for (var a = [], b = 0; b < this.a.length - 1; b++) a.push(0);
    return { L: a, N: 0 };
  };
  p.prototype.filter = function (a) {
    for (var b = 0, c = this.a.length; b < c; b++) a = this.f(b, a);
    return a;
  };
  p.prototype.b = function (a) {
    var b = { D: [], A: [] };
    a = this.c(a, b);
    b.k = 1;
    b.A.push((1 - a.ba) / (2 * a.K));
    b.A.push(2 * b.A[0]);
    b.A.push(b.A[0]);
    return b;
  };
  p.prototype.c = function (a, b) {
    var c = {},
      d = (2 * Math.PI * a.oa) / a.pa;
    c.alpha = Math.sin(d) / (2 * a.Q);
    c.ba = Math.cos(d);
    c.K = 1 + c.alpha;
    b.K = c.K;
    b.D.push((-2 * c.ba) / c.K);
    b.k = 1;
    b.D.push((1 - c.alpha) / c.K);
    return c;
  };
  p.prototype.f = function (a, b) {
    var c =
        b * this.a[a].k -
        this.a[a].Ha * this.a[a].z[0] -
        this.a[a].Ia * this.a[a].z[1],
      d =
        this.a[a].Ka * c +
        this.a[a].La * this.a[a].z[0] +
        this.a[a].Ma * this.a[a].z[1];
    this.a[a].z[1] = this.a[a].z[0];
    this.a[a].z[0] = c;
    return d;
  };
  p.prototype.reset = function () {
    for (var a = 0; a < this.a.length; a++) this.a[a].z = [0, 0];
  };
  var Ha = { point: !1, linear: !1, cubic: !0, sinc: !0 },
    ia = { IIR: 16, FIR: 71 },
    Ia = { IIR: p, FIR: y };
  P(l, w);
  l.prototype.toRIFF = function () {
    var a = new Float64Array(J(this.data.samples.length, this.f.h / 8));
    E(this.data.samples, this.f, a, 0, this.data.samples.length);
    this.m(this.fmt.numChannels, this.fmt.sampleRate, this.bitDepth, a, {
      container: "RIFF",
    });
  };
  l.prototype.toRIFX = function () {
    var a = new Float64Array(J(this.data.samples.length, this.f.h / 8));
    E(this.data.samples, this.f, a, 0, this.data.samples.length);
    this.m(this.fmt.numChannels, this.fmt.sampleRate, this.bitDepth, a, {
      container: "RIFX",
    });
  };
  l.prototype.toIMAADPCM = function () {
    if (8e3 !== this.fmt.sampleRate)
      throw Error("Only 8000 Hz files can be compressed as IMA-ADPCM.");
    if (1 !== this.fmt.numChannels)
      throw Error("Only mono files can be compressed as IMA-ADPCM.");
    this.H();
    var a = new Int16Array(J(this.data.samples.length, 2));
    E(this.data.samples, this.f, a, 0, this.data.samples.length);
    this.m(this.fmt.numChannels, this.fmt.sampleRate, "4", wa(a), {
      container: this.v(),
    });
  };
  l.prototype.fromIMAADPCM = function (a) {
    a = void 0 === a ? "16" : a;
    this.m(
      this.fmt.numChannels,
      this.fmt.sampleRate,
      "16",
      ya(this.data.samples, this.fmt.blockAlign),
      { container: this.v() }
    );
    "16" != a && this.toBitDepth(a);
  };
  l.prototype.toALaw = function () {
    this.H();
    var a = new Int16Array(J(this.data.samples.length, 2));
    E(this.data.samples, this.f, a, 0, this.data.samples.length);
    this.m(this.fmt.numChannels, this.fmt.sampleRate, "8a", Aa(a), {
      container: this.v(),
    });
  };
  l.prototype.fromALaw = function (a) {
    a = void 0 === a ? "16" : a;
    this.m(
      this.fmt.numChannels,
      this.fmt.sampleRate,
      "16",
      Ca(this.data.samples),
      { container: this.v() }
    );
    "16" != a && this.toBitDepth(a);
  };
  l.prototype.toMuLaw = function () {
    this.H();
    var a = new Int16Array(J(this.data.samples.length, 2));
    E(this.data.samples, this.f, a, 0, this.data.samples.length);
    this.m(this.fmt.numChannels, this.fmt.sampleRate, "8m", Da(a), {
      container: this.v(),
    });
  };
  l.prototype.fromMuLaw = function (a) {
    a = void 0 === a ? "16" : a;
    this.m(
      this.fmt.numChannels,
      this.fmt.sampleRate,
      "16",
      Fa(this.data.samples),
      { container: this.v() }
    );
    "16" != a && this.toBitDepth(a);
  };
  l.prototype.toBitDepth = function (a, b) {
    var c = a,
      d = this.bitDepth;
    void 0 === b ||
      b ||
      ("32f" != a && (c = this.f.h.toString()), (d = "" + this.f.h));
    this.T();
    var e = this.getSamples(!0),
      f = new Float64Array(e.length),
      g = d;
    if (-1 < ["32f", "64"].indexOf(g) && -1 < ["32f", "64"].indexOf(c))
      f.set(e);
    else {
      X(g);
      X(c);
      d = va(g, c);
      var k = {
        fa: Math.pow(2, parseInt(g, 10)) / 2,
        da: Math.pow(2, parseInt(c, 10)) / 2,
        ea: Math.pow(2, parseInt(g, 10)) / 2 - 1,
        ca: Math.pow(2, parseInt(c, 10)) / 2 - 1,
      };
      Y(g, e, !0);
      g = 0;
      for (var r = e.length; g < r; g++) f[g] = d(e[g], k);
      Y(c, f, !1);
    }
    this.m(this.fmt.numChannels, this.fmt.sampleRate, a, f, {
      container: this.v(),
    });
  };
  l.prototype.toSampleRate = function (a, b) {
    this.xa(a);
    var c = this.getSamples(),
      d = [];
    if (c.constructor === Float64Array) d = ha(c, this.fmt.sampleRate, a, b);
    else
      for (var e = 0; e < c.length; e++)
        d.push(ha(c[e], this.fmt.sampleRate, a, b));
    this.m(this.fmt.numChannels, a, this.bitDepth, d, { container: this.v() });
  };
  l.prototype.xa = function (a) {
    if (
      1 > a ||
      4294967295 < (this.fmt.bitsPerSample / 8) * this.fmt.numChannels * a
    )
      throw Error("Invalid sample rate.");
    if (-1 < ["4", "8a", "8m"].indexOf(this.bitDepth))
      throw Error("wavefile can't change the sample rate of compressed files.");
  };
  l.prototype.H = function () {
    this.T();
    "16" != this.bitDepth && this.toBitDepth("16");
  };
  l.prototype.T = function () {
    "8a" == this.bitDepth
      ? this.fromALaw()
      : "8m" == this.bitDepth
      ? this.fromMuLaw()
      : "4" == this.bitDepth && this.fromIMAADPCM();
  };
  l.prototype.v = function () {
    return "RF64" == this.container ? "RIFF" : this.container;
  };
  l.prototype.m = function (a, b, c, d, e) {
    var f = new w();
    Object.assign(this.fmt, f.fmt);
    Object.assign(this.fact, f.fact);
    Object.assign(this.ds64, f.ds64);
    Object.assign(this.data, f.data);
    this.W(a, b, c, d, e);
  };
  P(m, l);
  m.prototype.fromBase64 = function (a) {
    this.fromBuffer(ra(a));
  };
  m.prototype.toBase64 = function () {
    for (var a = this.toBuffer(), b = "", c = 0; c < a.length; c += 3)
      (b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
        a[c] >> 2
      ]),
        (b +=
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
            ((a[c] & 3) << 4) | (a[c + 1] >> 4)
          ]),
        (b +=
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
            ((a[c + 1] & 15) << 2) | (a[c + 2] >> 6)
          ]),
        (b +=
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
            a[c + 2] & 63
          ]);
    2 === a.length % 3
      ? (b = b.substring(0, b.length - 1) + "=")
      : 1 === a.length % 3 && (b = b.substring(0, b.length - 2) + "==");
    return b;
  };
  m.prototype.toDataURI = function () {
    return "data:audio/wav;base64," + this.toBase64();
  };
  m.prototype.fromDataURI = function (a) {
    this.fromBase64(a.replace("data:audio/wav;base64,", ""));
  };
  n.WaveFile = m;
  Object.defineProperty(n, "__esModule", { value: !0 });
}
"object" === typeof exports && "undefined" !== typeof module
  ? W(exports)
  : "function" === typeof define && define.amd
  ? define(["exports"], W)
  : ((V = V || self), W((V.wavefile = {})));
