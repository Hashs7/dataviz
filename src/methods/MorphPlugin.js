const MorphPlugin =
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var y = Math.PI, E = y / 180, w = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        _ = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, a = /(^[#\.][a-z]|[a-y][a-z])/gi, x = /[achlmqstvz]/gi,
        A = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, N = 2 * y, u = _gsScope._gsDefine.globals.TweenLite, P = "MorphSVGPlugin",
        z = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        T = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
        L = function (t) {
            for (var e = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== t.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), r = [z, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), String.fromCharCode(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), String.fromCharCode(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 105, 101, 114, 46, 105, 111), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], o = r.length; -1 < --o;) if (-1 !== t.indexOf(r[o])) return !0;
            return e && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + P + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), e
        }(window ? window.location.host : ""), D = function (t) {
            _gsScope.console && console.log(t)
        }, G = function (t, e, r, o, n, i, a, h, s) {
            if (t !== h || e !== s) {
                r = Math.abs(r), o = Math.abs(o);
                var l = Math.sqrt, f = Math.cos, g = Math.sin, u = 2 * Math.PI, c = n % 360 * E, p = f(c), d = g(c),
                    m = (t - h) / 2, C = (e - s) / 2, S = p * m + d * C, v = -d * m + p * C, b = S * S, M = v * v,
                    w = b / (r * r) + M / (o * o);
                1 < w && (r = l(w) * r, o = l(w) * o);
                var A = r * r, y = o * o, _ = (A * y - A * M - y * b) / (A * M + y * b);
                _ < 0 && (_ = 0);
                var x = (i === a ? -1 : 1) * l(_), N = x * (r * v / o), P = x * (-o * S / r),
                    z = (t + h) / 2 + (p * N - d * P), T = (e + s) / 2 + (d * N + p * P), L = (S - N) / r, D = (v - P) / o,
                    G = (-S - N) / r, I = (-v - P) / o, Y = L * L + D * D, R = (D < 0 ? -1 : 1) * Math.acos(L / l(Y)),
                    q = (L * I - D * G < 0 ? -1 : 1) * Math.acos((L * G + D * I) / l(Y * (G * G + I * I)));
                !a && 0 < q ? q -= u : a && q < 0 && (q += u), R %= u, q %= u;
                var B, V = Math.ceil(Math.abs(q) / (u / 4)), X = [], O = q / V, j = 4 / 3 * g(O / 2) / (1 + f(O / 2)),
                    F = p * r, H = d * r, Q = d * -o, U = p * o;
                for (B = 0; B < V; B++) S = f(n = R + B * O), v = g(n), L = f(n += O), D = g(n), X.push(S - j * v, v + j * S, L + j * D, D - j * L, L, D);
                for (B = 0; B < X.length; B += 2) S = X[B], v = X[B + 1], X[B] = S * F + v * Q + z, X[B + 1] = S * H + v * U + T;
                return X[B - 2] = h, X[B - 1] = s, X
            }
        }, I = function (t) {
            var e, r, o, n, i, a, h, s, l, f, g, u, c, p = (t + "").replace(A, function (t) {
                    var e = +t;
                    return e < 1e-4 && -1e-4 < e ? 0 : e
                }).match(w) || [], d = [], m = 0, C = 0, S = p.length, v = 0, b = "ERROR: malformed path: " + t,
                M = function (t, e, r, o) {
                    f = (r - t) / 3, g = (o - e) / 3, h.push(t + f, e + g, r - f, o - g, r, o)
                };
            if (!t || !isNaN(p[0]) || isNaN(p[1])) return console.log(b), d;
            for (e = 0; e < S; e++) if (c = i, isNaN(p[e]) ? a = (i = p[e].toUpperCase()) !== p[e] : e--, o = +p[e + 1], n = +p[e + 2], a && (o += m, n += C), e || (s = o, l = n), "M" === i) h && (h.length < 8 ? d.length -= 1 : v += h.length), m = s = o, C = l = n, h = [o, n], d.push(h), e += 2, i = "L"; else if ("C" === i) h || (h = [0, 0]), a || (m = C = 0), h.push(o, n, m + 1 * p[e + 3], C + 1 * p[e + 4], m += 1 * p[e + 5], C += 1 * p[e + 6]), e += 6; else if ("S" === i) f = m, g = C, "C" !== c && "S" !== c || (f += m - h[h.length - 4], g += C - h[h.length - 3]), a || (m = C = 0), h.push(f, g, o, n, m += 1 * p[e + 3], C += 1 * p[e + 4]), e += 4; else if ("Q" === i) f = m + 2 / 3 * (o - m), g = C + 2 / 3 * (n - C), a || (m = C = 0), m += 1 * p[e + 3], C += 1 * p[e + 4], h.push(f, g, m + 2 / 3 * (o - m), C + 2 / 3 * (n - C), m, C), e += 4; else if ("T" === i) f = m - h[h.length - 4], g = C - h[h.length - 3], h.push(m + f, C + g, o + 2 / 3 * (m + 1.5 * f - o), n + 2 / 3 * (C + 1.5 * g - n), m = o, C = n), e += 2; else if ("H" === i) M(m, C, m = o, C), e += 1; else if ("V" === i) M(m, C, m, C = o + (a ? C - m : 0)), e += 1; else if ("L" === i || "Z" === i) "Z" === i && (o = s, n = l, h.closed = !0), ("L" === i || .5 < Math.abs(m - o) || .5 < Math.abs(C - n)) && (M(m, C, o, n), "L" === i && (e += 2)), m = o, C = n; else if ("A" === i) {
                if (u = G(m, C, +p[e + 1], +p[e + 2], +p[e + 3], +p[e + 4], +p[e + 5], (a ? m : 0) + 1 * p[e + 6], (a ? C : 0) + 1 * p[e + 7])) for (r = 0; r < u.length; r++) h.push(u[r]);
                m = h[h.length - 2], C = h[h.length - 1], e += 7
            } else console.log(b);
            return e = h.length, h[0] === h[e - 2] && h[1] === h[e - 1] && (h.closed = !0), d.totalPoints = v + e, d
        }, M = function (t, e) {
            var r, o, n, i, a, h, s, l, f, g, u, c, p, d, m = 0, C = t.length, S = e / ((C - 2) / 6);
            for (p = 2; p < C; p += 6) for (m += S; .999999 < m;) r = t[p - 2], o = t[p - 1], n = t[p], i = t[p + 1], a = t[p + 2], h = t[p + 3], s = t[p + 4], l = t[p + 5], f = r + (n - r) * (d = 1 / (Math.floor(m) + 1)), f += ((u = n + (a - n) * d) - f) * d, u += (a + (s - a) * d - u) * d, g = o + (i - o) * d, g += ((c = i + (h - i) * d) - g) * d, c += (h + (l - h) * d - c) * d, t.splice(p, 4, r + (n - r) * d, o + (i - o) * d, f, g, f + (u - f) * d, g + (c - g) * d, u, c, a + (s - a) * d, h + (l - h) * d), p += 6, C += 6, m--;
            return t
        }, Y = function (t) {
            var e, r, o, n = "", i = t.length;
            for (r = 0; r < t.length; r++) {
                for (i = (o = t[r]).length, n += "M" + o[0] + " " + o[1] + " C", e = 2; e < i; e++) n += (100 * o[e] | 0) / 100 + " ";
                o.closed && (n += "z")
            }
            return n
        }, R = function (t) {
            for (var e = [], r = t.length - 1, o = 0; -1 < --r;) e[o++] = t[r], e[o++] = t[r + 1], r--;
            for (r = 0; r < o; r++) t[r] = e[r];
            t.reversed = !t.reversed
        }, c = function (t) {
            var e, r = t.length, o = 0, n = 0;
            for (e = 0; e < r; e++) o += t[e++], n += t[e];
            return [o / (r / 2), n / (r / 2)]
        }, q = function (t) {
            var e, r, o, n = t.length, i = t[0], a = i, h = t[1], s = h;
            for (o = 6; o < n; o += 6) i < (e = t[o]) ? i = e : e < a && (a = e), h < (r = t[o + 1]) ? h = r : r < s && (s = r);
            return t.centerX = (i + a) / 2, t.centerY = (h + s) / 2, t.size = (i - a) * (h - s)
        }, B = function (t) {
            for (var e, r, o, n, i, a = t.length, h = t[0][0], s = h, l = t[0][1], f = l; -1 < --a;) for (e = (i = t[a]).length, n = 6; n < e; n += 6) h < (r = i[n]) ? h = r : r < s && (s = r), l < (o = i[n + 1]) ? l = o : o < f && (f = o);
            return t.centerX = (h + s) / 2, t.centerY = (l + f) / 2, t.size = (h - s) * (l - f)
        }, V = function (t, e) {
            return e.length - t.length
        }, X = function (t, e) {
            var r = t.size || q(t), o = e.size || q(e);
            return Math.abs(o - r) < (r + o) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : o - r
        }, O = function (t, e) {
            var r, o, n = t.slice(0), i = t.length, a = i - 2;
            for (e |= 0, r = 0; r < i; r++) o = (r + e) % a, t[r++] = n[o], t[r] = n[o + 1]
        }, p = function (t, e, r, o, n) {
            var i, a, h, s, l = t.length, f = 0, g = l - 2;
            for (r *= 6, a = 0; a < l; a += 6) s = t[i = (a + r) % g] - (e[a] - o), h = t[i + 1] - (e[a + 1] - n), f += Math.sqrt(h * h + s * s);
            return f
        }, j = function (t, e, r) {
            var o, n, i, a = t.length, h = c(t), s = c(e), l = s[0] - h[0], f = s[1] - h[1], g = p(t, e, 0, l, f), u = 0;
            for (i = 6; i < a; i += 6) (n = p(t, e, i / 6, l, f)) < g && (g = n, u = i);
            if (r) for (o = t.slice(0), R(o), i = 6; i < a; i += 6) (n = p(o, e, i / 6, l, f)) < g && (g = n, u = -i);
            return u / 6
        }, F = function (t, e, r) {
            for (var o, n, i, a, h, s, l = t.length, f = 99999999999, g = 0, u = 0; -1 < --l;) for (s = (o = t[l]).length, h = 0; h < s; h += 6) n = o[h] - e, i = o[h + 1] - r, (a = Math.sqrt(n * n + i * i)) < f && (f = a, g = o[h], u = o[h + 1]);
            return [g, u]
        }, H = function (t, e, r, o, n, i) {
            var a, h, s, l, f = e.length, g = 0, u = Math.min(t.size || q(t), e[r].size || q(e[r])) * o, c = 999999999999,
                p = t.centerX + n, d = t.centerY + i;
            for (a = r; a < f && !((e[a].size || q(e[a])) < u); a++) h = e[a].centerX - p, s = e[a].centerY - d, (l = Math.sqrt(h * h + s * s)) < c && (g = a, c = l);
            return l = e[g], e.splice(g, 1), l
        }, Q = function (t, e, r, o) {
            var n, i, a, h, s, l, f, g = e.length - t.length, u = 0 < g ? e : t, c = 0 < g ? t : e, p = 0,
                d = "complexity" === o ? V : X, m = "position" === o ? 0 : "number" == typeof o ? o : .8, C = c.length,
                S = "object" == typeof r && r.push ? r.slice(0) : [r], v = "reverse" === S[0] || S[0] < 0, b = "log" === r;
            if (c[0]) {
                if (1 < u.length && (t.sort(d), e.sort(d), u.size || B(u), c.size || B(c), l = u.centerX - c.centerX, f = u.centerY - c.centerY, d === X)) for (C = 0; C < c.length; C++) u.splice(C, 0, H(c[C], u, C, m, l, f));
                if (g) for (g < 0 && (g = -g), u[0].length > c[0].length && M(c[0], (u[0].length - c[0].length) / 6 | 0), C = c.length; p < g;) u[C].size || q(u[C]), h = (a = F(c, u[C].centerX, u[C].centerY))[0], s = a[1], c[C++] = [h, s, h, s, h, s, h, s], c.totalPoints += 8, p++;
                for (C = 0; C < t.length; C++) n = e[C], i = t[C], (g = n.length - i.length) < 0 ? M(n, -g / 6 | 0) : 0 < g && M(i, g / 6 | 0), v && !i.reversed && R(i), (r = S[C] || 0 === S[C] ? S[C] : "auto") && (i.closed || Math.abs(i[0] - i[i.length - 2]) < .5 && Math.abs(i[1] - i[i.length - 1]) < .5 ? "auto" === r || "log" === r ? (S[C] = r = j(i, n, 0 === C), r < 0 && (v = !0, R(i), r = -r), O(i, 6 * r)) : "reverse" !== r && (C && r < 0 && R(i), O(i, 6 * (r < 0 ? -r : r))) : !v && ("auto" === r && Math.abs(n[0] - i[0]) + Math.abs(n[1] - i[1]) + Math.abs(n[n.length - 2] - i[i.length - 2]) + Math.abs(n[n.length - 1] - i[i.length - 1]) > Math.abs(n[0] - i[i.length - 2]) + Math.abs(n[1] - i[i.length - 1]) + Math.abs(n[n.length - 2] - i[0]) + Math.abs(n[n.length - 1] - i[1]) || r % 2) ? (R(i), S[C] = -1, v = !0) : "auto" === r ? S[C] = 0 : "reverse" === r && (S[C] = -1), i.closed !== n.closed && (i.closed = n.closed = !1));
                return b && D("shapeIndex:[" + S.join(",") + "]"), S
            }
        }, U = function (t, e, r, o) {
            var n = I(t[0]), i = I(t[1]);
            Q(n, i, e || 0 === e ? e : "auto", r) && (t[0] = Y(n), t[1] = Y(i), "log" !== o && !0 !== o || D('precompile:["' + t[0] + '","' + t[1] + '"]'))
        }, n = function (t, e) {
            var r, o, n, i, a, h, s, l = 0, f = parseFloat(t[0]), g = parseFloat(t[1]), u = f + "," + g + " ";
            for (r = .5 * e / (.5 * (n = t.length) - 1), o = 0; o < n - 2; o += 2) {
                if (l += r, h = parseFloat(t[o + 2]), s = parseFloat(t[o + 3]), .999999 < l) for (a = 1 / (Math.floor(l) + 1), i = 1; .999999 < l;) u += (f + (h - f) * a * i).toFixed(2) + "," + (g + (s - g) * a * i).toFixed(2) + " ", l--, i++;
                u += h + "," + s + " ", f = h, g = s
            }
            return u
        }, r = function (t) {
            var e = t[0].match(_) || [], r = t[1].match(_) || [], o = r.length - e.length;
            0 < o ? t[0] = n(e, o) : t[1] = n(r, -o)
        }, W = function (e) {
            return isNaN(e) ? r : function (t) {
                r(t), t[1] = function (t, e) {
                    if (!e) return t;
                    var r, o, n, i = t.match(_) || [], a = i.length, h = "";
                    for ("reverse" === e ? (o = a - 1, r = -2) : (o = (2 * (parseInt(e, 10) || 0) + 1 + 100 * a) % a, r = 2), n = 0; n < a; n += 2) h += i[o - 1] + "," + i[o] + " ", o = (o + r) % a;
                    return h
                }(t[1], parseInt(e, 10))
            }
        }, h = function (t, e) {
            var r, o, n, i, a, h, s, l, f, g, u, c, p, d, m, C, S, v, b, M, w, A = t.tagName.toLowerCase(),
                y = .552284749831;
            return "path" !== A && t.getBBox ? (h = function (t, e) {
                var r, o = _gsScope.document.createElementNS("http://www.w3.org/2000/svg", "path"),
                    n = Array.prototype.slice.call(t.attributes), i = n.length;
                for (e = "," + e + ","; -1 < --i;) r = n[i].nodeName.toLowerCase(), -1 === e.indexOf("," + r + ",") && o.setAttributeNS(null, r, n[i].nodeValue);
                return o
            }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === A ? (i = +t.getAttribute("rx") || 0, a = +t.getAttribute("ry") || 0, o = +t.getAttribute("x") || 0, n = +t.getAttribute("y") || 0, g = (+t.getAttribute("width") || 0) - 2 * i, u = (+t.getAttribute("height") || 0) - 2 * a, r = i || a ? "M" + (C = (d = (p = o + i) + g) + i) + "," + (v = n + a) + " V" + (b = v + u) + " C" + [C, M = b + a * y, m = d + i * y, w = b + a, d, w, d - (d - p) / 3, w, p + (d - p) / 3, w, p, w, c = o + i * (1 - y), w, o, M, o, b, o, b - (b - v) / 3, o, v + (b - v) / 3, o, v, o, S = n + a * (1 - y), c, n, p, n, p + (d - p) / 3, n, d - (d - p) / 3, n, d, n, m, n, C, S, C, v].join(",") + "z" : "M" + (o + g) + "," + n + " v" + u + " h" + -g + " v" + -u + " h" + g + "z") : "circle" === A || "ellipse" === A ? ("circle" === A ? l = (i = a = +t.getAttribute("r") || 0) * y : (i = +t.getAttribute("rx") || 0, l = (a = +t.getAttribute("ry") || 0) * y), r = "M" + ((o = +t.getAttribute("cx") || 0) + i) + "," + (n = +t.getAttribute("cy") || 0) + " C" + [o + i, n + l, o + (s = i * y), n + a, o, n + a, o - s, n + a, o - i, n + l, o - i, n, o - i, n - l, o - s, n - a, o, n - a, o + s, n - a, o + i, n - l, o + i, n].join(",") + "z") : "line" === A ? r = Y(I("M" + (t.getAttribute("x1") || 0) + "," + (t.getAttribute("y1") || 0) + " L" + (t.getAttribute("x2") || 0) + "," + (t.getAttribute("y2") || 0))) : "polyline" !== A && "polygon" !== A || (r = "M" + (o = (f = (t.getAttribute("points") + "").match(_) || []).shift()) + "," + (n = f.shift()) + " L" + f.join(","), "polygon" === A && (r += "," + o + "," + n + "z")), h.setAttribute("d", r), e && t.parentNode && (t.parentNode.insertBefore(h, t), t.parentNode.removeChild(t)), h) : t
        }, Z = function (t, e, r) {
            var o, n, i = "string" == typeof t;
            return (!i || a.test(t) || (t.match(_) || []).length < 3) && ((o = i ? u.selector(t) : t && t[0] ? t : [t]) && o[0] ? (n = (o = o[0]).nodeName.toUpperCase(), e && "PATH" !== n && (o = h(o, !1), n = "PATH"), t = o.getAttribute("PATH" === n ? "d" : "points") || "", o === r && (t = o.getAttributeNS(null, "data-original") || t)) : (D("WARNING: invalid morph to: " + t), t = !1)), t
        }, k = function (t) {
            for (var e, r, o, n, i, a, h, s, l, f, g = t.length; -1 < --g;) for (l = (r = t[g]).isSmooth = r.isSmooth || [0, 0, 0, 0], f = r.smoothData = r.smoothData || [0, 0, 0, 0], l.length = 4, s = r.length - 2, h = 6; h < s; h += 6) o = r[h] - r[h - 2], n = r[h + 1] - r[h - 1], i = r[h + 2] - r[h], a = r[h + 3] - r[h + 1], (e = Math.abs(n / o - a / i) < .06) && (f[h - 2] = f[h + 2] = Math.atan2(n, o), f[h - 1] = Math.sqrt(o * o + n * n), f[h + 3] = Math.sqrt(i * i + a * a)), l.push(e, e, 0, 0, e, e);
            return t
        }, J = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
        K = _gsScope._gsDefine.plugin({
            propName: "morphSVG",
            API: 2,
            global: !0,
            version: "0.9.0",
            init: function (t, e, r, o) {
                var n, i, a, h, s, l, f, g, u, c, p, d, m, C;
                if ("function" != typeof t.setAttribute) return !1;
                if ("function" == typeof e && (e = e(o, t)), !L) return window.location.href = "http://" + z + T + "?plugin=" + P + "&source=codepen", !1;
                if (s = "POLYLINE" === (n = t.nodeName.toUpperCase()) || "POLYGON" === n, "PATH" !== n && !s) return D("WARNING: cannot morph a <" + n + "> SVG element. " + J), !1;
                if (i = "PATH" === n ? "d" : "points", ("string" == typeof e || e.getBBox || e[0]) && (e = {shape: e}), h = Z(e.shape || e.d || e.points || "", "d" === i, t), s && x.test(h)) return D("WARNING: a <" + n + "> cannot accept path data. " + J), !1;
                if (l = e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto", f = e.map || K.defaultMap, h) {
                    if ((this._target = t).getAttributeNS(null, "data-original") || t.setAttributeNS(null, "data-original", t.getAttribute(i)), this._smooth = u = !!e.smooth, this._tween = r, u || "function" == typeof e.render) {
                        var S, v, b, M, w = I(t.getAttribute(i)), A = I(h);
                        if (!Q(w, A, l, f)) return !1;
                        for (u && (w = k(w), A = k(A)), v = w.length; -1 < --v;) for (b = w[v], M = A[v], c = b.isSmooth || [], p = M.isSmooth || [], S = 0; S < b.length; S++) (g = M[S] - b[S]) && (u && c[S] && p[S] ? (g = M.smoothData[S] - b.smoothData[S], S % 2 || g === g % y || (g += g < 0 ? N : -N), a = this._addTween(b.smoothData, S, b.smoothData[S], b.smoothData[S] + g)) : (c[S] = !1, a = this._addTween(b, S, b[S], b[S] + g)));
                        this._rawPath = w, this._render = e.render, t._gsRawPath = w
                    } else a = this._addTween(t, "setAttribute", t.getAttribute(i) + "", h + "", "morphSVG", !1, i, "object" == typeof e.precompile ? function (t) {
                        t[0] = e.precompile[0], t[1] = e.precompile[1]
                    } : "d" === i ? (d = l, m = f, C = e.precompile, m || C || d || 0 === d ? function (t) {
                        U(t, d, m, C)
                    } : U) : W(l));
                    a && (this._overwriteProps.push("morphSVG"), a.end = h, a.endProp = i)
                }
                return !0
            },
            set: function (t) {
                var e;
                if (this._super.setRatio.call(this, t), 1 !== t || this._render) {
                    if (this._rawPath) {
                        var r, o, n, i, a, h, s, l, f = this._rawPath, g = 100, u = "";
                        for (h = 0; h < f.length; h++) {
                            if (o = (r = f[h]).length - 2, this._smooth) for (s = r.isSmooth, l = r.smoothData, a = 2; a < o; a += 6) s[a] && (n = l[a], i = l[a + 1], r[a] = ((r[a - 2] + Math.cos(n) * i) * g | 0) / g, r[a + 1] = ((r[a - 1] + Math.sin(n) * i) * g | 0) / g), s[a + 2] && (n = l[a + 2], i = l[a + 3], r[a + 2] = ((r[a + 4] - Math.cos(n) * i) * g | 0) / g, r[a + 3] = ((r[a + 5] - Math.sin(n) * i) * g | 0) / g);
                            if (!this._render) for (o += 2, u += "M" + r[0] + " " + r[1] + " C", a = 2; a < o; a++) u += (r[a] * g | 0) / g + " "
                        }
                        this._render ? this._render.call(this._tween, f) : this._target.setAttribute("d", u)
                    }
                } else for (e = this._firstPT; e;) e.end && this._target.setAttribute(e.endProp, e.end), e = e._next
            }
        });
    K.pathFilter = U, K.pointsFilter = r, K.subdivideRawBezier = M, K.rawPathToString = Y, K.defaultMap = "size", K.stringToRawPath = K.pathDataToRawBezier = function (t) {
        return I(Z(t, !0))
    }, K.equalizeSegmentQuantity = Q, K.convertToPath = function (t, e) {
        "string" == typeof t && (t = u.selector(t));
        for (var r = t && 0 !== t.length ? t.length && t[0] && t[0].nodeType ? Array.prototype.slice.call(t, 0) : [t] : [], o = r.length; -1 < --o;) r[o] = h(r[o], !1 !== e);
        return r
    }, K.pathDataToBezier = function (t, e) {
        var r, o, n, i, a, h, s, l, f = I(Z(t, !0))[0] || [], g = 0;
        if (l = (e = e || {}).align || e.relative, i = e.matrix || [1, 0, 0, 1, 0, 0], a = e.offsetX || 0, h = e.offsetY || 0, "relative" === l || !0 === l ? (a -= f[0] * i[0] + f[1] * i[2], h -= f[0] * i[1] + f[1] * i[3], g = "+=") : (a += i[4], h += i[5], l && (l = "string" == typeof l ? u.selector(l) : l && l[0] ? l : [l]) && l[0] && (a -= (s = l[0].getBBox() || {
            x: 0,
            y: 0
        }).x, h -= s.y)), r = [], n = f.length, i && "1,0,0,1,0,0" !== i.join(",")) for (o = 0; o < n; o += 2) r.push({
            x: g + (f[o] * i[0] + f[o + 1] * i[2] + a),
            y: g + (f[o] * i[1] + f[o + 1] * i[3] + h)
        }); else for (o = 0; o < n; o += 2) r.push({x: g + (f[o] + a), y: g + (f[o + 1] + h)});
        return r
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t) {
    "use strict";
    var e = function () {
        return (_gsScope.GreenSockGlobals || _gsScope).MorphSVGPlugin
    };
    "undefined" != typeof module && module.exports ? (require("../TweenLite.js"), module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e)
}();

export default MorphPlugin;
