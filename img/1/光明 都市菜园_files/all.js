(function(name, context, definition) {
	if (typeof module !== "undefined" && module.exports) {
		module.exports = definition()
	} else {
			context[name] = definition()
	}

	var account, CDomain, uid, sid, wa = "_adwq_m", l = "length", w = window, sc = screen, na = navigator, ud = undefined, d = document, ec = encodeURIComponent;
	function getEMDomain() {
		return ("https:" == location["protocol"] ? "https:" : "http:")
				+ "//fp.emarbox.com"
	}
	function mc() {
		var rnd = "";
		for (var i = 0; i < 10; i++) {
			rnd += Math.floor(Math.random() * 10)
		}
		return rnd
	}
	function lensplit(s, n) {
		var l = 0;
		var es = "";
		var a = s.split("");
		for (var i = 0; i < a.length; i++) {
			if (a[i].charCodeAt(0) < 299) {
				l++
			} else {
				l += 2
			}
			es += a[i];
			if (l >= n) {
				break
			}
		}
		return es
	}
	var browser = {
		lh : function() {
			return ec(d.location.href)
		},
		re : function() {
			return ec(d.referrer)
		},
		charset : function() {
			return d.characterSet ? d.characterSet : d.charset
		}
	};
	var createImg = function(url) {
		var img = new Image(1, 1);
		img.onload = function() {
			img.onload = null
		};
		img.src = url
	};
	var ourl = "", aurl = "", curl = "";
	var _setAction = function(actID, attr) {
		attr = !attr ? "" : lensplit(attr, 150);
		aurl = getEMDomain(account) + "/_adwa2.gif" + "?adwactid=" + actID
				+ "&attr=" + ec(attr) + "&adwmc=" + mc() + "&adwa=" + account
				+ "&encoding=" + browser.charset() + "&adwlh=" + browser.lh();
		new createImg(aurl)
	};
	var _dataType = "order", _customer = "", _rid = "", _page_groups_id = "", _page_url = "";
	var _setOrder = function(on, op, attr) {
		attr = !attr ? "" : lensplit(attr, 150);
		ourl = "&on=" + ec(on) + "&op=" + op + "&attr=" + ec(attr)
	};
	var items = new Array();
	var _setItem = function(pn, pna, pp, ta, ct, ctn, opp, mi, st, purl, pet,
			brid, brna) {
		items.push([ pn, pna, pp, ta, ct, ctn, opp, mi, st, purl, pet, brid,
				brna ])
	};
	var _setDataType = function(dataType) {
		_dataType = dataType
	};
	var _setCustomer = function(customer) {
		_customer = customer
	};
	var log = {
		sendlog : function() {
			var mf = new MyFinger();
			var mf1 = new MyFinger({
				canvas : true
			});
			var url = "?adwmc=" + mc() + "&adwlh=" + browser.lh() + "&adwr="
					+ browser.re() + "&adwa=" + account + "&encoding="
					+ browser.charset() + "&fp=" + mf.get() + "," + mf1.get()
					+ "&keys=" + mf.mobile_keys;
			url = getEMDomain(account) + "/m_adw.gif" + url;
			new createImg(url)
		}
	};
	var tracker = {
		_initData : function() {
			log.sendlog()
		}
	};
	var _setDomainName = function(Domain) {
		CDomain = Domain
	};
	var _setAccount = function(a) {
		account = a
	};
	var _trackPageview = function() {
		tracker._initData()
	};
	var Fa = function() {
		var i = this;
		i.push = function() {
			var args = arguments, m = 0;
			for (var j = 0; j < args[l]; j++) {
				try {
					if (typeof args[j] === "function") {
						args[j]()
					} else {
						var o = args[j][0];
						eval(o).apply(w, args[j].slice(1))
					}
				} catch (d) {
					alert(d);
					var errDomain = getEMDomain();
					new createImg(errDomain + "/_adwerr.gif?adwa=" + account
							+ "&url=" + browser.lh() + "&referer="
							+ browser.re())
				}
			}
			return m
		}
	};
	var adwq = w[wa];
	if (adwq == ud) {
		window._adwq = new Array();
		adwq = w[wa]
	}
	var Ea = new Fa;
	if (adwq && typeof adwq.push == "function") {
		if (adwq.constructor === Array) {
			w[wa] = Ea;
			for (var j = 0; j < adwq[l]; ++j) {
				Ea.push(adwq[j])
			}
		}
	}
})
		(
				"MyFinger",
				this,
				function() {
					var MyFinger = function(options) {
						var nativeForEach, nativeMap;
						nativeForEach = Array.prototype.forEach;
						nativeMap = Array.prototype.map;
						this.each = function(obj, iterator, context) {
							if (obj === null) {
								return
							}
							if (nativeForEach && obj.forEach === nativeForEach) {
								obj.forEach(iterator, context)
							} else {
								if (obj.length === +obj.length) {
									for (var i = 0, l = obj.length; i < l; i++) {
										if (iterator.call(context, obj[i], i,
												obj) === {}) {
											return
										}
									}
								} else {
									for ( var key in obj) {
										if (obj.hasOwnProperty(key)) {
											if (iterator.call(context,
													obj[key], key, obj) === {}) {
												return
											}
										}
									}
								}
							}
						};
						this.map = function(obj, iterator, context) {
							var results = [];
							if (obj == null) {
								return results
							}
							if (nativeMap && obj.map === nativeMap) {
								return obj.map(iterator, context)
							}
							this.each(obj, function(value, index, list) {
								results[results.length] = iterator.call(
										context, value, index, list)
							});
							return results
						};
						if (typeof options == "object") {
							this.hasher = options.hasher;
							this.screen_resolution = options.screen_resolution;
							this.screen_orientation = options.screen_orientation;
							this.canvas = options.canvas;
							this.ie_activex = options.ie_activex
						} else {
							if (typeof options == "function") {
								this.hasher = options
							}
						}
					};
					var mobile_keys;
					MyFinger.prototype = {
						get : function() {
							var keys = [];
							var ua = navigator.userAgent;
							if (ua.indexOf("Mem") > -1) {
								ua = ua.substring(0, ua.indexOf("Mem") - 1)
							}
							if (ua.indexOf("NetType") > -1) {
								ua = ua.replace("NetType/WIFI", "");
								ua = ua.replace("NetType/ctnet", "");
								ua = ua.replace("NetType/ctwap", "");
								ua = ua.replace("NetType/cmwap", "");
								ua = ua.replace("NetType/cmnet", "");
								ua = ua.replace("NetType/3G+", "");
								ua = ua.replace("NetType/3G", "");
								ua = ua.replace("NetType/4G", "");
								ua = ua.replace("NetType/2G", "")
							}
							keys.push(ua);
							keys.push(navigator.language);
							keys.push(screen.colorDepth);
							if (this.screen_resolution) {
								var resolution = this.getScreenResolution();
								if (typeof resolution !== "undefined") {
									keys.push(resolution.join("x"))
								}
							}
							keys.push(new Date().getTimezoneOffset());
							keys.push(this.hasSessionStorage());
							keys.push(this.hasLocalStorage());
							keys.push(!!window.indexedDB);
							if (document.body) {
								keys.push(typeof (document.body.addBehavior))
							} else {
								keys.push(typeof undefined)
							}
							keys.push(typeof (window.openDatabase));
							keys.push(navigator.cpuClass);
							keys.push(navigator.platform);
							keys.push(navigator.doNotTrack);
							keys.push(this.getPluginsString());
							this.mobile_keys = keys;
							if (this.canvas && this.isCanvasSupported()) {
								keys.push(this.getCanvasFingerprint())
							}
							if (this.hasher) {
								return this.hasher(keys.join("###"), 31)
							} else {
								return this.murmurhash3_32_gc(keys.join("###"),
										31)
							}
						},
						murmurhash3_32_gc : function(key, seed) {
							var remainder, bytes, h1, h1b, c1, c2, k1, i;
							remainder = key.length & 3;
							bytes = key.length - remainder;
							h1 = seed;
							c1 = 3432918353;
							c2 = 461845907;
							i = 0;
							while (i < bytes) {
								k1 = ((key.charCodeAt(i) & 255))
										| ((key.charCodeAt(++i) & 255) << 8)
										| ((key.charCodeAt(++i) & 255) << 16)
										| ((key.charCodeAt(++i) & 255) << 24);
								++i;
								k1 = ((((k1 & 65535) * c1) + ((((k1 >>> 16) * c1) & 65535) << 16))) & 4294967295;
								k1 = (k1 << 15) | (k1 >>> 17);
								k1 = ((((k1 & 65535) * c2) + ((((k1 >>> 16) * c2) & 65535) << 16))) & 4294967295;
								h1 ^= k1;
								h1 = (h1 << 13) | (h1 >>> 19);
								h1b = ((((h1 & 65535) * 5) + ((((h1 >>> 16) * 5) & 65535) << 16))) & 4294967295;
								h1 = (((h1b & 65535) + 27492) + ((((h1b >>> 16) + 58964) & 65535) << 16))
							}
							k1 = 0;
							switch (remainder) {
							case 3:
								k1 ^= (key.charCodeAt(i + 2) & 255) << 16;
							case 2:
								k1 ^= (key.charCodeAt(i + 1) & 255) << 8;
							case 1:
								k1 ^= (key.charCodeAt(i) & 255);
								k1 = (((k1 & 65535) * c1) + ((((k1 >>> 16) * c1) & 65535) << 16)) & 4294967295;
								k1 = (k1 << 15) | (k1 >>> 17);
								k1 = (((k1 & 65535) * c2) + ((((k1 >>> 16) * c2) & 65535) << 16)) & 4294967295;
								h1 ^= k1
							}
							h1 ^= key.length;
							h1 ^= h1 >>> 16;
							h1 = (((h1 & 65535) * 2246822507) + ((((h1 >>> 16) * 2246822507) & 65535) << 16)) & 4294967295;
							h1 ^= h1 >>> 13;
							h1 = ((((h1 & 65535) * 3266489909) + ((((h1 >>> 16) * 3266489909) & 65535) << 16))) & 4294967295;
							h1 ^= h1 >>> 16;
							return h1 >>> 0
						},
						hasLocalStorage : function() {
							try {
								return !!window.localStorage
							} catch (e) {
								return true
							}
						},
						hasSessionStorage : function() {
							try {
								return !!window.sessionStorage
							} catch (e) {
								return true
							}
						},
						isCanvasSupported : function() {
							var elem = document.createElement("canvas");
							return !!(elem.getContext && elem.getContext("2d"))
						},
						isIE : function() {
							if (navigator.appName === "Microsoft Internet Explorer") {
								return true
							} else {
								if (navigator.appName === "Netscape"
										&& /Trident/.test(navigator.userAgent)) {
									return true
								}
							}
							return false
						},
						getPluginsString : function() {
							if (this.isIE() && this.ie_activex) {
								return this.getIEPluginsString()
							} else {
								return this.getRegularPluginsString()
							}
						},
						getRegularPluginsString : function() {
							return this.map(
									navigator.plugins,
									function(p) {
										var mimeTypes = this.map(
												p,
												function(mt) {
													return [ mt.type,
															mt.suffixes ]
															.join("~")
												}).join(",");
										return [ p.name, p.description,
												mimeTypes ].join("::")
									}, this).join(";")
						},
						getIEPluginsString : function() {
							if (window.ActiveXObject) {
								var names = [
										"ShockwaveFlash.ShockwaveFlash",
										"AcroPDF.PDF",
										"PDF.PdfCtrl",
										"QuickTime.QuickTime",
										"rmocx.RealPlayer G2 Control",
										"rmocx.RealPlayer G2 Control.1",
										"RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
										"RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
										"RealPlayer", "SWCtl.SWCtl",
										"WMPlayer.OCX", "AgControl.AgControl",
										"Skype.Detection" ];
								return this.map(names, function(name) {
									try {
										new ActiveXObject(name);
										return name
									} catch (e) {
										return null
									}
								}).join(";")
							} else {
								return ""
							}
						},
						getScreenResolution : function() {
							var resolution;
							if (this.screen_orientation) {
								resolution = (screen.height > screen.width) ? [
										screen.height, screen.width ] : [
										screen.width, screen.height ]
							} else {
								resolution = [ screen.height, screen.width ]
							}
							return resolution
						},
						getCanvasFingerprint : function() {
							var canvas = document.createElement("canvas");
							var ctx = canvas.getContext("2d");
							var txt = "http://valve.github.io";
							ctx.textBaseline = "top";
							ctx.font = "14px 'Arial'";
							ctx.textBaseline = "alphabetic";
							ctx.fillStyle = "#f60";
							ctx.fillRect(125, 1, 62, 20);
							ctx.fillStyle = "#069";
							ctx.fillText(txt, 2, 15);
							ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
							ctx.fillText(txt, 4, 17);
							return canvas.toDataURL()
						}
					};
					return MyFinger
				});
