// Particles.js - Lightweight JavaScript library for creating particles
// Source: https://github.com/VincentGarreau/particles.js/
// This is a minified version for the portfolio
!(function (a, b) {
  "use strict";
  function c() {
    var a,
      c,
      d,
      e = navigator.userAgent,
      f = navigator.appName,
      g = "" + parseFloat(navigator.appVersion),
      h = parseInt(navigator.appVersion, 10);
    (c = e.indexOf("Opera")) != -1
      ? ((f = "Opera"),
        (g = e.substring(c + 6)),
        (c = e.indexOf("Version")) != -1 && (g = e.substring(c + 8)))
      : (c = e.indexOf("MSIE")) != -1
      ? ((f = "Microsoft Internet Explorer"), (g = e.substring(c + 5)))
      : (c = e.indexOf("Chrome")) != -1
      ? ((f = "Chrome"), (g = e.substring(c + 7)))
      : (c = e.indexOf("Safari")) != -1
      ? ((f = "Safari"),
        (g = e.substring(c + 7)),
        (c = e.indexOf("Version")) != -1 && (g = e.substring(c + 8)))
      : (c = e.indexOf("Firefox")) != -1
      ? ((f = "Firefox"), (g = e.substring(c + 8)))
      : (a = e.lastIndexOf(" ") + 1) < (c = e.lastIndexOf("/")) &&
        ((f = e.substring(a, c)),
        (g = e.substring(c + 1)),
        f.toLowerCase() == f.toUpperCase() && (f = navigator.appName)),
      (d = g.indexOf(";")) != -1 && (g = g.substring(0, d)),
      (d = g.indexOf(" ")) != -1 && (g = g.substring(0, d)),
      (h = parseInt("" + g, 10)),
      isNaN(h) &&
        ((g = "" + parseFloat(navigator.appVersion)),
        (h = parseInt(navigator.appVersion, 10)));
    var i = new Object();
    return (
      (i.browserName = f),
      (i.fullVersion = g),
      (i.majorVersion = h),
      (i.appName = navigator.appName),
      (i.userAgent = navigator.userAgent),
      (i.platform = navigator.platform),
      i
    );
  }
  function d(a, b) {
    var c = document.createElement("canvas");
    (c.className = "pg-canvas"),
      (c.style.display = "block"),
      a.insertBefore(c, b),
      (c.width = a.offsetWidth),
      (c.height = a.offsetHeight),
      c;
  }
  function e() {
    var a = this;
    a.defaults = {
      particles: {
        number: { value: 100, density: { enable: !0, value_area: 800 } },
        color: { value: "#fff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#ff0000" },
          polygon: { nb_sides: 5 },
          image: { src: "", width: 100, height: 100 },
        },
        opacity: {
          value: 1,
          random: !1,
          anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
        },
        size: {
          value: 20,
          random: !1,
          anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
        },
        line_linked: {
          enable: !0,
          distance: 100,
          color: "#fff",
          opacity: 1,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 2,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
        },
        array: [],
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !0, mode: "grab" },
          onclick: { enable: !0, mode: "push" },
          resize: !0,
        },
        modes: {
          grab: { distance: 100, line_linked: { opacity: 1 } },
          bubble: { distance: 200, size: 80, duration: 0.4 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
        mouse: {},
      },
      retina_detect: !1,
      fn: { interact: {}, modes: {}, vendors: {} },
      tmp: {},
    };
    var b = this.defaults;
    if (
      ((this.pJS = {
        canvas: { el: null, w: 0, h: 0 },
        particles: {
          number: { value: 400, density: { enable: !0, value_area: 800 } },
          color: { value: "#fff" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#ff0000" },
            polygon: { nb_sides: 5 },
            image: { src: "", width: 100, height: 100 },
          },
          opacity: {
            value: 1,
            random: !1,
            anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
          },
          size: {
            value: 20,
            random: !1,
            anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
          },
          line_linked: {
            enable: !0,
            distance: 100,
            color: "#fff",
            opacity: 1,
            width: 1,
          },
          move: {
            enable: !0,
            speed: 2,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
          },
          array: [],
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: !0, mode: "grab" },
            onclick: { enable: !0, mode: "push" },
            resize: !0,
          },
          modes: {
            grab: { distance: 100, line_linked: { opacity: 1 } },
            bubble: { distance: 200, size: 80, duration: 0.4 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
          mouse: {},
        },
        retina_detect: !1,
        fn: { interact: {}, modes: {}, vendors: {} },
        tmp: {},
      }),
      a)
    ) {
      var c = a;
      if (c) {
        if (c.particles) {
          var d = c.particles;
          if (d) {
            for (var e in b.particles) {
              var f = b.particles[e];
              if (void 0 !== d[e])
                if ("object" == typeof d[e])
                  for (var g in f) void 0 !== d[e][g] && (f[g] = d[e][g]);
                else f = d[e];
            }
          }
        }
        if (c.interactivity) {
          var h = c.interactivity;
          if (h) {
            for (var i in b.interactivity) {
              var j = b.interactivity[i];
              if (void 0 !== h[i])
                if ("object" == typeof h[i])
                  for (var k in j) void 0 !== h[i][k] && (j[k] = h[i][k]);
                else j = h[i];
            }
          }
        }
      }
    }
    (this.pJS.tmp.obj = {
      size_value: this.pJS.particles.size.value,
      size_anim_speed: this.pJS.particles.size.anim.speed,
      move_speed: this.pJS.particles.move.speed,
      line_linked_distance: this.pJS.particles.line_linked.distance,
      line_linked_width: this.pJS.particles.line_linked.width,
      mode_grab_distance: this.pJS.interactivity.modes.grab.distance,
      mode_bubble_distance: this.pJS.interactivity.modes.bubble.distance,
      mode_bubble_size: this.pJS.interactivity.modes.bubble.size,
      mode_repulse_distance: this.pJS.interactivity.modes.repulse.distance,
    }),
      (this.pJS.fn.retinaInit = function () {
        this.pJS.retina_detect && window.devicePixelRatio > 1
          ? ((this.pJS.canvas.pxratio = window.devicePixelRatio),
            (this.pJS.tmp.retina = !0))
          : ((this.pJS.canvas.pxratio = 1), (this.pJS.tmp.retina = !1)),
          (this.pJS.canvas.w =
            this.pJS.canvas.el.offsetWidth * this.pJS.canvas.pxratio),
          (this.pJS.canvas.h =
            this.pJS.canvas.el.offsetHeight * this.pJS.canvas.pxratio),
          (this.pJS.particles.size.value =
            this.pJS.tmp.obj.size_value * this.pJS.canvas.pxratio),
          (this.pJS.particles.size.anim.speed =
            this.pJS.tmp.obj.size_anim_speed * this.pJS.canvas.pxratio),
          (this.pJS.particles.move.speed =
            this.pJS.tmp.obj.move_speed * this.pJS.canvas.pxratio),
          (this.pJS.particles.line_linked.distance =
            this.pJS.tmp.obj.line_linked_distance * this.pJS.canvas.pxratio),
          (this.pJS.interactivity.modes.grab.distance =
            this.pJS.tmp.obj.mode_grab_distance * this.pJS.canvas.pxratio),
          (this.pJS.interactivity.modes.bubble.distance =
            this.pJS.tmp.obj.mode_bubble_distance * this.pJS.canvas.pxratio),
          (this.pJS.particles.line_linked.width =
            this.pJS.tmp.obj.line_linked_width * this.pJS.canvas.pxratio),
          (this.pJS.interactivity.modes.bubble.size =
            this.pJS.tmp.obj.mode_bubble_size * this.pJS.canvas.pxratio),
          (this.pJS.interactivity.modes.repulse.distance =
            this.pJS.tmp.obj.mode_repulse_distance * this.pJS.canvas.pxratio);
      }),
      (this.pJS.fn.canvasInit = function () {
        this.pJS.canvas.ctx = this.pJS.canvas.el.getContext("2d");
      }),
      (this.pJS.fn.canvasSize = function () {
        (this.pJS.canvas.el.width = this.pJS.canvas.w),
          (this.pJS.canvas.el.height = this.pJS.canvas.h),
          this &&
            this.pJS.interactivity.events.resize &&
            window.addEventListener(
              "resize",
              function () {
                (this.pJS.canvas.w = this.pJS.canvas.el.offsetWidth),
                  (this.pJS.canvas.h = this.pJS.canvas.el.offsetHeight),
                  this.pJS.tmp.retina &&
                    ((this.pJS.canvas.w *= this.pJS.canvas.pxratio),
                    (this.pJS.canvas.h *= this.pJS.canvas.pxratio)),
                  (this.pJS.canvas.el.width = this.pJS.canvas.w),
                  (this.pJS.canvas.el.height = this.pJS.canvas.h),
                  this.pJS.particles.move.enable ||
                    (this.pJS.fn.particlesEmpty(),
                    this.pJS.fn.particlesCreate(),
                    this.pJS.fn.particlesDraw(),
                    this.pJS.fn.vendors.densityAutoParticles()),
                  this.pJS.fn.vendors.densityAutoParticles();
              }.bind(this)
            );
      }),
      (this.pJS.fn.canvasPaint = function () {
        this.pJS.canvas.ctx.fillRect(
          0,
          0,
          this.pJS.canvas.w,
          this.pJS.canvas.h
        );
      }),
      (this.pJS.fn.canvasClear = function () {
        this.pJS.canvas.ctx.clearRect(
          0,
          0,
          this.pJS.canvas.w,
          this.pJS.canvas.h
        );
      }),
      (this.pJS.fn.particle = function (a, b, c) {
        if (this.pJS.particles.color.rgb)
          var d =
            "rgba(" +
            this.pJS.particles.color.rgb.r +
            "," +
            this.pJS.particles.color.rgb.g +
            "," +
            this.pJS.particles.color.rgb.b +
            "," +
            c +
            ")";
        else
          var d =
            "hsla(" +
            this.pJS.particles.color.hsl.h +
            "," +
            this.pJS.particles.color.hsl.s +
            "%," +
            this.pJS.particles.color.hsl.l +
            "%," +
            c +
            ")";
        if (this.pJS.particles.shape.type == "circle")
          var e = {
            x: a,
            y: b,
            radius: this.pJS.particles.size.value,
            color: d,
            opacity: this.pJS.particles.opacity.value,
            velocity: { x: 0, y: 0 },
          };
        else if (this.pJS.particles.shape.type == "edge")
          var e = {
            x: a,
            y: b,
            width: this.pJS.particles.size.value,
            height: this.pJS.particles.size.value,
            color: d,
            opacity: this.pJS.particles.opacity.value,
            velocity: { x: 0, y: 0 },
          };
        else if (this.pJS.particles.shape.type == "triangle")
          var e = {
            x: a,
            y: b,
            width: this.pJS.particles.size.value,
            height: this.pJS.particles.size.value,
            color: d,
            opacity: this.pJS.particles.opacity.value,
            velocity: { x: 0, y: 0 },
          };
        else if (this.pJS.particles.shape.type == "polygon")
          var e = {
            x: a,
            y: b,
            width: this.pJS.particles.size.value,
            height: this.pJS.particles.size.value,
            sides: this.pJS.particles.shape.polygon.nb_sides,
            color: d,
            opacity: this.pJS.particles.opacity.value,
            velocity: { x: 0, y: 0 },
          };
        else if (this.pJS.particles.shape.type == "star")
          var e = {
            x: a,
            y: b,
            width: this.pJS.particles.size.value,
            height: this.pJS.particles.size.value,
            sides: this.pJS.particles.shape.polygon.nb_sides,
            color: d,
            opacity: this.pJS.particles.opacity.value,
            velocity: { x: 0, y: 0 },
          };
        else if (this.pJS.particles.shape.type == "image") {
          var f = new Image();
          f.src = this.pJS.particles.shape.image.src;
          var e = {
            x: a,
            y: b,
            width: this.pJS.particles.size.value,
            height: this.pJS.particles.size.value,
            img: f,
            opacity: this.pJS.particles.opacity.value,
            velocity: { x: 0, y: 0 },
          };
        }
        return e;
      }),
      (this.pJS.fn.particlesCreate = function () {
        for (var a = 0; a < this.pJS.particles.number.value; a++)
          this.pJS.particles.array.push(
            this.pJS.fn.particle(
              this.pJS.canvas.w * Math.random(),
              this.pJS.canvas.h * Math.random(),
              this.pJS.particles.opacity.value
            )
          );
      }),
      (this.pJS.fn.particlesUpdate = function () {
        for (var a = 0; a < this.pJS.particles.array.length; a++) {
          var b = this.pJS.particles.array[a];
          if (this.pJS.particles.move.enable) {
            var c = { x: 0, y: 0 };
            if (this.pJS.particles.move.straight)
              c = {
                x: this.pJS.particles.move.speed * Math.cos(b.velocity.x),
                y: this.pJS.particles.move.speed * Math.sin(b.velocity.y),
              };
            else {
              var d = Math.random() * Math.PI * 2,
                e = Math.random() * this.pJS.particles.move.speed;
              c = { x: e * Math.cos(d), y: e * Math.sin(d) };
            }
            (b.velocity.x = c.x), (b.velocity.y = c.y);
          }
          var f = this.pJS.particles.move.out_mode;
          if ("bounce" == f) {
            var g = {
              x_left: b.radius,
              x_right: this.pJS.canvas.w,
              y_top: b.radius,
              y_bottom: this.pJS.canvas.h,
            };
            b.x - b.radius > this.pJS.canvas.w && (b.x = g.x_left),
              b.x + b.radius < 0 && (b.x = g.x_right),
              b.y - b.radius > this.pJS.canvas.h && (b.y = g.y_top),
              b.y + b.radius < 0 && (b.y = g.y_bottom);
          } else {
            if ("out" == f) {
              var g = {
                x_left: -b.radius,
                x_right: this.pJS.canvas.w + b.radius,
                y_top: -b.radius,
                y_bottom: this.pJS.canvas.h + b.radius,
              };
              b.x - b.radius > this.pJS.canvas.w && (b.x = g.x_left),
                b.x + b.radius < 0 && (b.x = g.x_right),
                b.y - b.radius > this.pJS.canvas.h && (b.y = g.y_top),
                b.y + b.radius < 0 && (b.y = g.y_bottom);
            }
          }
          if (isNaN(b.x) || isNaN(b.y)) continue;
          (b.x += b.velocity.x), (b.y += b.velocity.y);
        }
      }),
      (this.pJS.fn.particlesDraw = function () {
        this.pJS.canvas.ctx.clearRect(
          0,
          0,
          this.pJS.canvas.w,
          this.pJS.canvas.h
        ),
          this.pJS.fn.particlesUpdate();
        for (var a = 0; a < this.pJS.particles.array.length; a++) {
          var b = this.pJS.particles.array[a];
          this.pJS.fn.drawParticle(b.x, b.y, b.radius, b.color, b.opacity);
        }
      }),
      (this.pJS.fn.drawParticle = function (a, b, c, d, e) {
        if (this.pJS.particles.shape.type == "circle")
          this.pJS.canvas.ctx.beginPath(),
            this.pJS.canvas.ctx.arc(a, b, c, 0, 2 * Math.PI, !1),
            (this.pJS.canvas.ctx.fillStyle = d),
            this.pJS.canvas.ctx.fill();
        else if (this.pJS.particles.shape.type == "edge")
          this.pJS.canvas.ctx.beginPath(),
            this.pJS.canvas.ctx.rect(a - c, b - c, 2 * c, 2 * c),
            (this.pJS.canvas.ctx.fillStyle = d),
            this.pJS.canvas.ctx.fill();
        else if (this.pJS.particles.shape.type == "triangle")
          this.pJS.canvas.ctx.beginPath(),
            this.pJS.canvas.ctx.moveTo(a, b - c),
            this.pJS.canvas.ctx.lineTo(a + c, b + c),
            this.pJS.canvas.ctx.lineTo(a - c, b + c),
            this.pJS.canvas.ctx.closePath(),
            (this.pJS.canvas.ctx.fillStyle = d),
            this.pJS.canvas.ctx.fill();
        else if (this.pJS.particles.shape.type == "polygon") {
          var f = this.pJS.particles.shape.polygon.nb_sides,
            g = (2 * Math.PI) / f,
            h = (Math.PI / 180) * this.pJS.particles.shape.polygon.angle;
          this.pJS.canvas.ctx.beginPath();
          for (var i = 0; i < f; i++)
            this.pJS.canvas.ctx.lineTo(
              a + c * Math.cos(h + i * g),
              b + c * Math.sin(h + i * g)
            );
          this.pJS.canvas.ctx.closePath(),
            (this.pJS.canvas.ctx.fillStyle = d),
            this.pJS.canvas.ctx.fill();
        } else if (this.pJS.particles.shape.type == "star") {
          var f = this.pJS.particles.shape.polygon.nb_sides * 2,
            g = (2 * Math.PI) / f,
            h = (Math.PI / 180) * this.pJS.particles.shape.polygon.angle;
          this.pJS.canvas.ctx.beginPath();
          for (var i = 0; i < f; i++)
            i % 2 == 0
              ? this.pJS.canvas.ctx.lineTo(
                  a + c * Math.cos(h + i * g),
                  b + c * Math.sin(h + i * g)
                )
              : this.pJS.canvas.ctx.lineTo(
                  a + (c / 2) * Math.cos(h + i * g),
                  b + (c / 2) * Math.sin(h + i * g)
                );
          this.pJS.canvas.ctx.closePath(),
            (this.pJS.canvas.ctx.fillStyle = d),
            this.pJS.canvas.ctx.fill();
        } else if (this.pJS.particles.shape.type == "image") {
          var j = new Image();
          j.src = this.pJS.particles.shape.image.src;
          var k = this.pJS.canvas.ctx;
          j.onload = function () {
            k.drawImage(j, a - c, b - c, 2 * c, 2 * c);
          };
        }
      }),
      (this.pJS.fn.particlesEmpty = function () {
        this.pJS.particles.array = [];
      }),
      (this.pJS.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(this.pJS.fn.checkAnimFrame),
          cancelRequestAnimFrame(this.pJS.fn.drawAnimFrame),
          (this.pJS.tmp.source_svg = void 0),
          (this.pJS.tmp.img_obj = void 0),
          (this.pJS.tmp.count_svg = 0),
          this.pJS.fn.particlesEmpty(),
          this.pJS.fn.canvasClear(),
          this.pJS.fn.vendors.start();
      }),
      (this.pJS.fn.interact.linkParticles = function (a, b) {
        var c = a.x - b.x,
          d = a.y - b.y,
          e = Math.sqrt(c * c + d * d);
        if (e <= this.pJS.particles.line_linked.distance) {
          var f =
            this.pJS.particles.line_linked.opacity -
            e /
              (1 / this.pJS.particles.line_linked.opacity) /
              this.pJS.particles.line_linked.distance;
          if (f > 0) {
            var g = this.pJS.particles.line_linked.color_rgb_line;
            (this.pJS.canvas.ctx.strokeStyle =
              "rgba(" + g.r + "," + g.g + "," + g.b + "," + f + ")"),
              (this.pJS.canvas.ctx.lineWidth =
                this.pJS.particles.line_linked.width),
              this.pJS.canvas.ctx.beginPath(),
              this.pJS.canvas.ctx.moveTo(a.x, a.y),
              this.pJS.canvas.ctx.lineTo(b.x, b.y),
              this.pJS.canvas.ctx.stroke(),
              this.pJS.canvas.ctx.closePath();
          }
        }
      }),
      (this.pJS.fn.interact.attractParticles = function (a, b) {
        var c = a.x - b.x,
          d = a.y - b.y,
          e = Math.sqrt(c * c + d * d);
        if (e <= this.pJS.particles.line_linked.distance) {
          var f = c / (1e3 * this.pJS.particles.move.attract.rotateX),
            g = d / (1e3 * this.pJS.particles.move.attract.rotateY);
          (a.vx -= f), (a.vy -= g), (b.vx += f), (b.vy += g);
        }
      }),
      (this.pJS.fn.interact.bounceParticles = function (a, b) {
        var c = a.x - b.x,
          d = a.y - b.y,
          e = Math.sqrt(c * c + d * d),
          f = a.radius + b.radius;
        e <= f &&
          ((a.vx = -a.vx), (a.vy = -a.vy), (b.vx = -b.vx), (b.vy = -b.vy));
      }),
      (this.pJS.fn.modes.pushParticles = function (a, b) {
        this.pJS.tmp.pushing = !0;
        for (var c = 0; c < a; c++)
          this.pJS.particles.array.push(
            this.pJS.fn.particle(
              this.pJS.particles.color,
              this.pJS.particles.opacity.value,
              {
                x: b ? b.pos_x : Math.random() * this.pJS.canvas.w,
                y: b ? b.pos_y : Math.random() * this.pJS.canvas.h,
              }
            )
          ),
            c == a - 1 &&
              (this.pJS.particles.move.enable || this.pJS.fn.particlesDraw(),
              (this.pJS.tmp.pushing = !1));
      }),
      (this.pJS.fn.modes.removeParticles = function (a) {
        this.pJS.particles.array.splice(0, a),
          this.pJS.particles.move.enable || this.pJS.fn.particlesDraw();
      }),
      (this.pJS.fn.vendors.eventsListeners = function () {
        this.pJS.interactivity.detect_on == "window"
          ? (this.pJS.interactivity.el = window)
          : this.pJS.interactivity.detect_on == "parent" &&
            (this.pJS.interactivity.el = this.pJS.canvas.el.parentNode),
          this.pJS.interactivity.events.onhover.enable &&
            (this.pJS.interactivity.el.addEventListener(
              "mousemove",
              function (a) {
                if (this.pJS.interactivity.el == window)
                  var b = a.clientX,
                    c = a.clientY;
                else
                  var b = a.offsetX || a.clientX,
                    c = a.offsetY || a.clientY;
                (this.pJS.interactivity.mouse.pos_x = b),
                  (this.pJS.interactivity.mouse.pos_y = c),
                  this.pJS.tmp.retina &&
                    ((this.pJS.interactivity.mouse.pos_x *=
                      this.pJS.canvas.pxratio),
                    (this.pJS.interactivity.mouse.pos_y *=
                      this.pJS.canvas.pxratio)),
                  (this.pJS.interactivity.status = "mousemove");
              }.bind(this)
            ),
            this.pJS.interactivity.el.addEventListener(
              "mouseleave",
              function (a) {
                (this.pJS.interactivity.mouse.pos_x = null),
                  (this.pJS.interactivity.mouse.pos_y = null),
                  (this.pJS.interactivity.status = "mouseleave");
              }.bind(this)
            )),
          this.pJS.interactivity.events.onclick.enable &&
            this.pJS.interactivity.el.addEventListener(
              "click",
              function () {
                if (
                  ((this.pJS.interactivity.mouse.click_pos_x =
                    this.pJS.interactivity.mouse.pos_x),
                  (this.pJS.interactivity.mouse.click_pos_y =
                    this.pJS.interactivity.mouse.pos_y),
                  (this.pJS.interactivity.mouse.click_time =
                    new Date().getTime()),
                  this.pJS.interactivity.events.onclick.enable)
                )
                  switch (this.pJS.interactivity.events.onclick.mode) {
                    case "push":
                      this.pJS.particles.move.enable
                        ? this.pJS.fn.modes.pushParticles(
                            this.pJS.interactivity.modes.push.particles_nb,
                            this.pJS.interactivity.mouse
                          )
                        : this.pJS.interactivity.modes.push.particles_nb == 1
                        ? this.pJS.fn.modes.pushParticles(
                            this.pJS.interactivity.modes.push.particles_nb,
                            this.pJS.interactivity.mouse
                          )
                        : this.pJS.interactivity.modes.push.particles_nb > 1 &&
                          this.pJS.fn.modes.pushParticles(
                            this.pJS.interactivity.modes.push.particles_nb
                          );
                      break;
                    case "remove":
                      this.pJS.fn.modes.removeParticles(
                        this.pJS.interactivity.modes.remove.particles_nb
                      );
                      break;
                    case "bubble":
                      this.pJS.tmp.bubble_clicking = !0;
                      break;
                    case "repulse":
                      (this.pJS.tmp.repulse_clicking = !0),
                        (this.pJS.tmp.repulse_count = 0),
                        (this.pJS.tmp.repulse_finish = !1),
                        setTimeout(
                          function () {
                            this.pJS.tmp.repulse_clicking = !1;
                          }.bind(this),
                          1e3 * this.pJS.interactivity.modes.repulse.duration
                        );
                  }
              }.bind(this)
            );
      }),
      (this.pJS.fn.vendors.densityAutoParticles = function () {
        if (this.pJS.particles.number.density.enable) {
          var a = (this.pJS.canvas.el.width * this.pJS.canvas.el.height) / 1e3;
          this.pJS.tmp.retina && (a /= 2 * this.pJS.canvas.pxratio);
          var b =
              (a * this.pJS.particles.number.value) /
              this.pJS.particles.number.density.value_area,
            c = this.pJS.particles.array.length - b;
          c < 0
            ? this.pJS.fn.modes.pushParticles(Math.abs(c))
            : this.pJS.fn.modes.removeParticles(c);
        }
      }),
      (this.pJS.fn.vendors.checkOverlap = function (a, b) {
        for (var c = 0; c < this.pJS.particles.array.length; c++) {
          var d = this.pJS.particles.array[c],
            e = a.x - d.x,
            f = a.y - d.y,
            g = Math.sqrt(e * e + f * f);
          g <= a.radius + d.radius &&
            ((a.x = b ? b.x : Math.random() * this.pJS.canvas.w),
            (a.y = b ? b.y : Math.random() * this.pJS.canvas.h),
            this.pJS.fn.vendors.checkOverlap(a));
        }
      }),
      (this.pJS.fn.vendors.createSvgImg = function (a) {
        var b = this.pJS.tmp.source_svg,
          c = /#([0-9A-F]{3,6})/gi,
          d = b.replace(c, function (b, c) {
            if (a.color.rgb)
              var d =
                "rgba(" +
                a.color.rgb.r +
                "," +
                a.color.rgb.g +
                "," +
                a.color.rgb.b +
                "," +
                a.opacity +
                ")";
            else
              var d =
                "hsla(" +
                a.color.hsl.h +
                "," +
                a.color.hsl.s +
                "%," +
                a.color.hsl.l +
                "%," +
                a.opacity +
                ")";
            return d;
          }),
          e = new Blob([d], { type: "image/svg+xml;charset=utf-8" }),
          f = window.URL || window.webkitURL || window,
          g = f.createObjectURL(e),
          h = new Image();
        h.addEventListener(
          "load",
          function () {
            (a.img.obj = h),
              (a.img.loaded = !0),
              f.revokeObjectURL(g),
              this.pJS.tmp.count_svg++;
          }.bind(this)
        ),
          (h.src = g);
      }),
      (this.pJS.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(this.pJS.fn.drawAnimFrame),
          this.pJS.canvas.el.remove();
      }),
      (this.pJS.fn.vendors.drawShape = function (a, b, c, d, e, f) {
        var g = e * f,
          h = e / f,
          i = (180 * (h - 2)) / h,
          j = Math.PI - (Math.PI * i) / 180;
        a.save(), a.beginPath(), a.translate(b, c), a.moveTo(0, 0);
        for (var k = 0; k < g; k++)
          a.lineTo(d, 0), a.translate(d, 0), a.rotate(j);
        a.fill(), a.restore();
      }),
      (this.pJS.fn.vendors.exportImg = function () {
        window.open(this.pJS.canvas.el.toDataURL("image/png"), "_blank");
      }),
      (this.pJS.fn.vendors.loadImg = function (a) {
        if (
          ((this.pJS.tmp.img_error = void 0),
          this.pJS.particles.shape.type == "image")
        ) {
          var b = new Image();
          if (
            (b.addEventListener(
              "load",
              function () {
                (this.pJS.tmp.img_obj = b),
                  this.pJS.fn.vendors.checkBeforeDraw();
              }.bind(this)
            ),
            (b.src = this.pJS.particles.shape.image.src),
            (b.width = 0))
          )
            this.pJS.tmp.img_error = !0;
        }
      }),
      (this.pJS.fn.vendors.draw = function () {
        this.pJS.particles.shape.type == "image"
          ? this.pJS.tmp.img_type == "svg"
            ? this.pJS.tmp.count_svg >= this.pJS.particles.number.value
              ? (this.pJS.fn.particlesDraw(),
                this.pJS.particles.move.enable
                  ? (this.pJS.fn.drawAnimFrame = requestAnimFrame(
                      this.pJS.fn.vendors.draw.bind(this)
                    ))
                  : cancelRequestAnimFrame(this.pJS.fn.drawAnimFrame))
              : this.pJS.tmp.img_error ||
                (this.pJS.fn.drawAnimFrame = requestAnimFrame(
                  this.pJS.fn.vendors.draw.bind(this)
                ))
            : this.pJS.tmp.img_obj != void 0
            ? (this.pJS.fn.particlesDraw(),
              this.pJS.particles.move.enable
                ? (this.pJS.fn.drawAnimFrame = requestAnimFrame(
                    this.pJS.fn.vendors.draw.bind(this)
                  ))
                : cancelRequestAnimFrame(this.pJS.fn.drawAnimFrame))
            : this.pJS.tmp.img_error ||
              (this.pJS.fn.drawAnimFrame = requestAnimFrame(
                this.pJS.fn.vendors.draw.bind(this)
              ))
          : (this.pJS.fn.particlesDraw(),
            this.pJS.particles.move.enable
              ? (this.pJS.fn.drawAnimFrame = requestAnimFrame(
                  this.pJS.fn.vendors.draw.bind(this)
                ))
              : cancelRequestAnimFrame(this.pJS.fn.drawAnimFrame));
      }),
      (this.pJS.fn.vendors.checkBeforeDraw = function () {
        this.pJS.particles.shape.type == "image"
          ? this.pJS.tmp.img_type == "svg" && this.pJS.tmp.source_svg == void 0
            ? (this.pJS.tmp.checkAnimFrame = requestAnimFrame(check.bind(this)))
            : (cancelRequestAnimFrame(this.pJS.tmp.checkAnimFrame),
              this.pJS.tmp.img_error ||
                (this.pJS.fn.vendors.init(), this.pJS.fn.vendors.draw()))
          : (this.pJS.fn.vendors.init(), this.pJS.fn.vendors.draw());
      }),
      (this.pJS.fn.vendors.init = function () {
        this.pJS.fn.retinaInit(),
          this.pJS.fn.canvasInit(),
          this.pJS.fn.canvasSize(),
          this.pJS.fn.canvasPaint(),
          this.pJS.fn.particlesCreate(),
          this.pJS.fn.vendors.densityAutoParticles(),
          (this.pJS.particles.line_linked.color_rgb_line = hexToRgb(
            this.pJS.particles.line_linked.color
          ));
      }),
      (this.pJS.fn.vendors.start = function () {
        isInArray("image", this.pJS.particles.shape.type)
          ? ((this.pJS.tmp.img_type = this.pJS.particles.shape.image.src.substr(
              this.pJS.particles.shape.image.src.length - 3
            )),
            this.pJS.fn.vendors.loadImg(this.pJS.tmp.img_type))
          : this.pJS.fn.vendors.checkBeforeDraw();
      }),
      this.pJS.fn.vendors.eventsListeners(),
      this.pJS.fn.vendors.start();
  }
  function hexToRgb(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, c, d) {
      return b + b + c + c + d + d;
    });
    var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    return b
      ? { r: parseInt(b[1], 16), g: parseInt(b[2], 16), b: parseInt(b[3], 16) }
      : null;
  }
  function clamp(a, b, c) {
    return Math.min(Math.max(a, b), c);
  }
  function isInArray(a, b) {
    return b.indexOf(a) > -1;
  }
  function extend(a, b) {
    for (var c in b) a[c] = b[c];
    return a;
  }
  function launchParticlesJS(a, b) {
    var c = document.querySelector("#" + a + " > .particles-js-canvas-el");
    this.pJS = {
      canvas: { el: c, w: c.offsetWidth, h: c.offsetHeight },
      particles: {
        number: { value: 400, density: { enable: !0, value_area: 800 } },
        color: { value: "#fff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#ff0000" },
          polygon: { nb_sides: 5 },
          image: { src: "", width: 100, height: 100 },
        },
        opacity: {
          value: 1,
          random: !1,
          anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
        },
        size: {
          value: 20,
          random: !1,
          anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
        },
        line_linked: {
          enable: !0,
          distance: 100,
          color: "#fff",
          opacity: 1,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 2,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
        },
        array: [],
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !0, mode: "grab" },
          onclick: { enable: !0, mode: "push" },
          resize: !0,
        },
        modes: {
          grab: { distance: 100, line_linked: { opacity: 1 } },
          bubble: { distance: 200, size: 80, duration: 0.4 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
        mouse: {},
      },
      retina_detect: !1,
      fn: { interact: {}, modes: {}, vendors: {} },
      tmp: {},
    };
    var d = this.pJS;
    b && Object.deepExtend(d, b),
      (d.tmp.obj = {
        size_value: d.particles.size.value,
        size_anim_speed: d.particles.size.anim.speed,
        move_speed: d.particles.move.speed,
        line_linked_distance: d.particles.line_linked.distance,
        line_linked_width: d.particles.line_linked.width,
        mode_grab_distance: d.interactivity.modes.grab.distance,
        mode_bubble_distance: d.interactivity.modes.bubble.distance,
        mode_bubble_size: d.interactivity.modes.bubble.size,
        mode_repulse_distance: d.interactivity.modes.repulse.distance,
      }),
      (d.fn.retinaInit = function () {
        d.retina_detect && window.devicePixelRatio > 1
          ? ((d.canvas.pxratio = window.devicePixelRatio), (d.tmp.retina = !0))
          : ((d.canvas.pxratio = 1), (d.tmp.retina = !1)),
          (d.canvas.w = d.canvas.el.offsetWidth * d.canvas.pxratio),
          (d.canvas.h = d.canvas.el.offsetHeight * d.canvas.pxratio),
          (d.particles.size.value = d.tmp.obj.size_value * d.canvas.pxratio),
          (d.particles.size.anim.speed =
            d.tmp.obj.size_anim_speed * d.canvas.pxratio),
          (d.particles.move.speed = d.tmp.obj.move_speed * d.canvas.pxratio),
          (d.particles.line_linked.distance =
            d.tmp.obj.line_linked_distance * d.canvas.pxratio),
          (d.interactivity.modes.grab.distance =
            d.tmp.obj.mode_grab_distance * d.canvas.pxratio),
          (d.interactivity.modes.bubble.distance =
            d.tmp.obj.mode_bubble_distance * d.canvas.pxratio),
          (d.particles.line_linked.width =
            d.tmp.obj.line_linked_width * d.canvas.pxratio),
          (d.interactivity.modes.bubble.size =
            d.tmp.obj.mode_bubble_size * d.canvas.pxratio),
          (d.interactivity.modes.repulse.distance =
            d.tmp.obj.mode_repulse_distance * d.canvas.pxratio);
      }),
      (d.fn.canvasInit = function () {
        d.canvas.ctx = d.canvas.el.getContext("2d");
      }),
      (d.fn.canvasSize = function () {
        (d.canvas.el.width = d.canvas.w),
          (d.canvas.el.height = d.canvas.h),
          d &&
            d.interactivity.events.resize &&
            window.addEventListener("resize", function () {
              (d.canvas.w = d.canvas.el.offsetWidth),
                (d.canvas.h = d.canvas.el.offsetHeight),
                d.tmp.retina &&
                  ((d.canvas.w *= d.canvas.pxratio),
                  (d.canvas.h *= d.canvas.pxratio)),
                (d.canvas.el.width = d.canvas.w),
                (d.canvas.el.height = d.canvas.h),
                d.particles.move.enable ||
                  (d.fn.particlesEmpty(),
                  d.fn.particlesCreate(),
                  d.fn.particlesDraw(),
                  d.fn.vendors.densityAutoParticles()),
                d.fn.vendors.densityAutoParticles();
            });
      }),
      (d.fn.canvasPaint = function () {
        d.canvas.ctx.fillRect(0, 0, d.canvas.w, d.canvas.h);
      }),
      (d.fn.canvasClear = function () {
        d.canvas.ctx.clearRect(0, 0, d.canvas.w, d.canvas.h);
      }),
      (d.fn.particle = function (a, b, c) {
        if (
          ((this.radius =
            (d.particles.size.random ? Math.random() : 1) *
            d.particles.size.value),
          d.particles.size.anim.enable &&
            ((this.size_status = !1),
            (this.vs = d.particles.size.anim.speed / 100),
            d.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
          (this.x = c ? c.x : Math.random() * d.canvas.w),
          (this.y = c ? c.y : Math.random() * d.canvas.h),
          this.x > d.canvas.w - 2 * this.radius
            ? (this.x = this.x - this.radius)
            : this.x < 2 * this.radius && (this.x = this.x + this.radius),
          this.y > d.canvas.h - 2 * this.radius
            ? (this.y = this.y - this.radius)
            : this.y < 2 * this.radius && (this.y = this.y + this.radius),
          d.particles.move.bounce && d.fn.vendors.checkOverlap(this, c),
          (this.color = {}),
          "object" == typeof a.value)
        )
          if (a.value instanceof Array) {
            var e =
              a.value[
                Math.floor(Math.random() * d.particles.color.value.length)
              ];
            this.color.rgb = hexToRgb(e);
          } else
            void 0 != a.value.r &&
              void 0 != a.value.g &&
              void 0 != a.value.b &&
              (this.color.rgb = { r: a.value.r, g: a.value.g, b: a.value.b }),
              void 0 != a.value.h &&
                void 0 != a.value.s &&
                void 0 != a.value.l &&
                (this.color.hsl = { h: a.value.h, s: a.value.s, l: a.value.l });
        else
          "random" == a.value
            ? (this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0,
              })
            : "string" == typeof a.value &&
              ((this.color = a), (this.color.rgb = hexToRgb(this.color.value)));
        (this.opacity =
          (d.particles.opacity.random ? Math.random() : 1) *
          d.particles.opacity.value),
          d.particles.opacity.anim.enable &&
            ((this.opacity_status = !1),
            (this.vo = d.particles.opacity.anim.speed / 100),
            d.particles.opacity.anim.sync ||
              (this.vo = this.vo * Math.random()));
        var f = {};
        switch (d.particles.move.direction) {
          case "top":
            f = { x: 0, y: -1 };
            break;
          case "top-right":
            f = { x: 0.5, y: -0.5 };
            break;
          case "right":
            f = { x: 1, y: -0 };
            break;
          case "bottom-right":
            f = { x: 0.5, y: 0.5 };
            break;
          case "bottom":
            f = { x: 0, y: 1 };
            break;
          case "bottom-left":
            f = { x: -0.5, y: 1 };
            break;
          case "left":
            f = { x: -1, y: 0 };
            break;
          case "top-left":
            f = { x: -0.5, y: -0.5 };
            break;
          default:
            f = { x: 0, y: 0 };
        }
        d.particles.move.straight
          ? ((this.vx = f.x),
            (this.vy = f.y),
            d.particles.move.random &&
              ((this.vx = this.vx * Math.random()),
              (this.vy = this.vy * Math.random())),
            (this.vx_i = this.vx),
            (this.vy_i = this.vy))
          : ((this.vx = f.x + Math.random() - 0.5),
            (this.vy = f.y + Math.random() - 0.5)),
          (this.vx_i = this.vx),
          (this.vy_i = this.vy);
        var g = d.particles.shape.type;
        if ("object" == typeof g) {
          if (g instanceof Array) {
            var h = g[Math.floor(Math.random() * g.length)];
            this.shape = h;
          }
        } else this.shape = g;
        if ("image" == this.shape) {
          var i = d.particles.shape;
          (this.img = {
            src: i.image.src,
            ratio: i.image.width / i.image.height,
          }),
            this.img.ratio || (this.img.ratio = 1),
            "svg" == d.tmp.img_type &&
              void 0 != d.tmp.source_svg &&
              (d.fn.vendors.createSvgImg(this),
              d.tmp.pushing && (this.img.loaded = !1));
        }
      }),
      (d.fn.particle.prototype.draw = function () {
        function a() {
          d.canvas.ctx.drawImage(
            g,
            b.x - c,
            b.y - c,
            2 * c,
            (2 * c) / b.img.ratio
          );
        }
        var b = this;
        if (void 0 != b.radius_bubble) var c = b.radius_bubble;
        else var c = b.radius;
        if (void 0 != b.opacity_bubble) var e = b.opacity_bubble;
        else var e = b.opacity;
        if (b.color.rgb)
          var f =
            "rgba(" +
            b.color.rgb.r +
            "," +
            b.color.rgb.g +
            "," +
            b.color.rgb.b +
            "," +
            e +
            ")";
        else
          var f =
            "hsla(" +
            b.color.hsl.h +
            "," +
            b.color.hsl.s +
            "%," +
            b.color.hsl.l +
            "%," +
            e +
            ")";
        switch (
          ((d.canvas.ctx.fillStyle = f), d.canvas.ctx.beginPath(), b.shape)
        ) {
          case "circle":
            d.canvas.ctx.arc(b.x, b.y, c, 0, 2 * Math.PI, !1);
            break;
          case "edge":
            d.canvas.ctx.rect(b.x - c, b.y - c, 2 * c, 2 * c);
            break;
          case "triangle":
            d.fn.vendors.drawShape(
              d.canvas.ctx,
              b.x - c,
              b.y + c / 1.66,
              2 * c,
              3,
              2
            );
            break;
          case "polygon":
            d.fn.vendors.drawShape(
              d.canvas.ctx,
              b.x - c / (d.particles.shape.polygon.nb_sides / 3.5),
              b.y - c / 0.76,
              (2.66 * c) / (d.particles.shape.polygon.nb_sides / 3),
              d.particles.shape.polygon.nb_sides,
              1
            );
            break;
          case "star":
            d.fn.vendors.drawShape(
              d.canvas.ctx,
              b.x - (2 * c) / (d.particles.shape.polygon.nb_sides / 4),
              b.y - c / 1.52,
              (2 * c * 2.66) / (d.particles.shape.polygon.nb_sides / 3),
              d.particles.shape.polygon.nb_sides,
              2
            );
            break;
          case "image":
            if ("svg" == d.tmp.img_type) var g = b.img.obj;
            else var g = d.tmp.img_obj;
            g && a();
        }
        d.canvas.ctx.closePath(),
          d.particles.shape.stroke.width > 0 &&
            ((d.canvas.ctx.strokeStyle = d.particles.shape.stroke.color),
            (d.canvas.ctx.lineWidth = d.particles.shape.stroke.width),
            d.canvas.ctx.stroke()),
          d.canvas.ctx.fill();
      }),
      (d.fn.particlesCreate = function () {
        for (var a = 0; a < d.particles.number.value; a++)
          d.particles.array.push(
            new d.fn.particle(d.particles.color, d.particles.opacity.value)
          );
      }),
      (d.fn.particlesUpdate = function () {
        for (var a = 0; a < d.particles.array.length; a++) {
          var b = d.particles.array[a];
          if (d.particles.move.enable) {
            var c = d.particles.move.speed / 2;
            (b.x += b.vx * c), (b.y += b.vy * c);
          }
          if (
            (d.particles.opacity.anim.enable &&
              (1 == b.opacity_status
                ? (b.opacity >= d.particles.opacity.value &&
                    (b.opacity_status = !1),
                  (b.opacity += b.vo))
                : (b.opacity <= d.particles.opacity.anim.opacity_min &&
                    (b.opacity_status = !0),
                  (b.opacity -= b.vo)),
              b.opacity < 0 && (b.opacity = 0)),
            d.particles.size.anim.enable &&
              (1 == b.size_status
                ? (b.radius >= d.particles.size.value && (b.size_status = !1),
                  (b.radius += b.vs))
                : (b.radius <= d.particles.size.anim.size_min &&
                    (b.size_status = !0),
                  (b.radius -= b.vs)),
              b.radius < 0 && (b.radius = 0)),
            "bounce" == d.particles.move.out_mode)
          )
            var e = {
              x_left: b.radius,
              x_right: d.canvas.w,
              y_top: b.radius,
              y_bottom: d.canvas.h,
            };
          else
            var e = {
              x_left: -b.radius,
              x_right: d.canvas.w + b.radius,
              y_top: -b.radius,
              y_bottom: d.canvas.h + b.radius,
            };
          switch (
            (b.x - b.radius > d.canvas.w
              ? ((b.x = e.x_left), (b.y = Math.random() * d.canvas.h))
              : b.x + b.radius < 0 &&
                ((b.x = e.x_right), (b.y = Math.random() * d.canvas.h)),
            b.y - b.radius > d.canvas.h
              ? ((b.y = e.y_top), (b.x = Math.random() * d.canvas.w))
              : b.y + b.radius < 0 &&
                ((b.y = e.y_bottom), (b.x = Math.random() * d.canvas.w)),
            d.particles.move.out_mode)
          ) {
            case "bounce":
              b.x + b.radius > d.canvas.w
                ? (b.vx = -b.vx)
                : b.x - b.radius < 0 && (b.vx = -b.vx),
                b.y + b.radius > d.canvas.h
                  ? (b.vy = -b.vy)
                  : b.y - b.radius < 0 && (b.vy = -b.vy);
          }
          if (
            (isInArray("grab", d.interactivity.events.onhover.mode) &&
              d.fn.modes.grabParticle(b),
            (isInArray("bubble", d.interactivity.events.onhover.mode) ||
              isInArray("bubble", d.interactivity.events.onclick.mode)) &&
              d.fn.modes.bubbleParticle(b),
            (isInArray("repulse", d.interactivity.events.onhover.mode) ||
              isInArray("repulse", d.interactivity.events.onclick.mode)) &&
              d.fn.modes.repulseParticle(b),
            d.particles.line_linked.enable || d.particles.move.attract.enable)
          )
            for (var f = a + 1; f < d.particles.array.length; f++) {
              var g = d.particles.array[f];
              d.particles.line_linked.enable &&
                d.fn.interact.linkParticles(b, g),
                d.particles.move.attract.enable &&
                  d.fn.interact.attractParticles(b, g),
                d.particles.move.bounce && d.fn.interact.bounceParticles(b, g);
            }
        }
      }),
      (d.fn.particlesDraw = function () {
        d.canvas.ctx.clearRect(0, 0, d.canvas.w, d.canvas.h),
          d.fn.particlesUpdate();
        for (var a = 0; a < d.particles.array.length; a++) {
          var b = d.particles.array[a];
          b.draw();
        }
      }),
      (d.fn.particlesEmpty = function () {
        d.particles.array = [];
      }),
      (d.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(d.fn.checkAnimFrame),
          cancelRequestAnimFrame(d.fn.drawAnimFrame),
          (d.tmp.source_svg = void 0),
          (d.tmp.img_obj = void 0),
          (d.tmp.count_svg = 0),
          d.fn.particlesEmpty(),
          d.fn.canvasClear(),
          d.fn.vendors.start();
      }),
      (d.fn.interact.linkParticles = function (a, b) {
        var c = a.x - b.x,
          e = a.y - b.y,
          f = Math.sqrt(c * c + e * e);
        if (f <= d.particles.line_linked.distance) {
          var g =
            d.particles.line_linked.opacity -
            f /
              (1 / d.particles.line_linked.opacity) /
              d.particles.line_linked.distance;
          if (g > 0) {
            var h = d.particles.line_linked.color_rgb_line;
            (d.canvas.ctx.strokeStyle =
              "rgba(" + h.r + "," + h.g + "," + h.b + "," + g + ")"),
              (d.canvas.ctx.lineWidth = d.particles.line_linked.width),
              d.canvas.ctx.beginPath(),
              d.canvas.ctx.moveTo(a.x, a.y),
              d.canvas.ctx.lineTo(b.x, b.y),
              d.canvas.ctx.stroke(),
              d.canvas.ctx.closePath();
          }
        }
      }),
      (d.fn.interact.attractParticles = function (a, b) {
        var c = a.x - b.x,
          e = a.y - b.y,
          f = Math.sqrt(c * c + e * e);
        if (f <= d.particles.line_linked.distance) {
          var g = c / (1e3 * d.particles.move.attract.rotateX),
            h = e / (1e3 * d.particles.move.attract.rotateY);
          (a.vx -= g), (a.vy -= h), (b.vx += g), (b.vy += h);
        }
      }),
      (d.fn.interact.bounceParticles = function (a, b) {
        var c = a.x - b.x,
          d = a.y - b.y,
          e = Math.sqrt(c * c + d * d),
          f = a.radius + b.radius;
        f >= e &&
          ((a.vx = -a.vx), (a.vy = -a.vy), (b.vx = -b.vx), (b.vy = -b.vy));
      }),
      (d.fn.modes.pushParticles = function (a, b) {
        d.tmp.pushing = !0;
        for (var c = 0; a > c; c++)
          d.particles.array.push(
            new d.fn.particle(d.particles.color, d.particles.opacity.value, {
              x: b ? b.pos_x : Math.random() * d.canvas.w,
              y: b ? b.pos_y : Math.random() * d.canvas.h,
            })
          ),
            c == a - 1 &&
              (d.particles.move.enable || d.fn.particlesDraw(),
              (d.tmp.pushing = !1));
      }),
      (d.fn.modes.removeParticles = function (a) {
        d.particles.array.splice(0, a),
          d.particles.move.enable || d.fn.particlesDraw();
      }),
      (d.fn.modes.bubbleParticle = function (a) {
        function c() {
          (a.opacity_bubble = a.opacity), (a.radius_bubble = a.radius);
        }
        function e() {
          a.radius_bubble > d.particles.size.value && (a.radius_bubble -= b),
            a.radius_bubble < 0 && (a.radius_bubble = 0),
            a.opacity_bubble > d.particles.opacity.value &&
              (a.opacity_bubble -= g),
            a.opacity_bubble < 0 && (a.opacity_bubble = 0);
        }
        if (
          d.interactivity.events.onhover.enable &&
          isInArray("bubble", d.interactivity.events.onhover.mode)
        ) {
          var f = a.x - d.interactivity.mouse.pos_x,
            g = a.y - d.interactivity.mouse.pos_y,
            h = Math.sqrt(f * f + g * g),
            i = 1 - h / d.interactivity.modes.bubble.distance;
          if (h <= d.interactivity.modes.bubble.distance) {
            if (i >= 0 && "mousemove" == d.interactivity.status) {
              if (d.interactivity.modes.bubble.size != d.particles.size.value)
                if (
                  d.interactivity.modes.bubble.size > d.particles.size.value
                ) {
                  var j = a.radius + d.interactivity.modes.bubble.size * i;
                  j >= 0 && (a.radius_bubble = j);
                } else {
                  var k = a.radius - d.interactivity.modes.bubble.size,
                    j = a.radius - k * i;
                  j > 0 ? (a.radius_bubble = j) : (a.radius_bubble = 0);
                }
              if (
                d.interactivity.modes.bubble.opacity !=
                d.particles.opacity.value
              )
                if (
                  d.interactivity.modes.bubble.opacity >
                  d.particles.opacity.value
                ) {
                  var l = d.interactivity.modes.bubble.opacity * i;
                  l > a.opacity &&
                    l <= d.interactivity.modes.bubble.opacity &&
                    (a.opacity_bubble = l);
                } else {
                  var l =
                    a.opacity -
                    (d.particles.opacity.value -
                      d.interactivity.modes.bubble.opacity) *
                      i;
                  l < a.opacity &&
                    l >= d.interactivity.modes.bubble.opacity &&
                    (a.opacity_bubble = l);
                }
            }
          } else c();
          "mouseleave" == d.interactivity.status && c();
        } else if (
          d.interactivity.events.onclick.enable &&
          isInArray("bubble", d.interactivity.events.onclick.mode)
        ) {
          if (d.tmp.bubble_clicking) {
            var f = a.x - d.interactivity.mouse.click_pos_x,
              g = a.y - d.interactivity.mouse.click_pos_y,
              h = Math.sqrt(f * f + g * g),
              m =
                (new Date().getTime() - d.interactivity.mouse.click_time) / 1e3;
            m > d.interactivity.modes.bubble.duration &&
              (d.tmp.bubble_duration_end = !0),
              m > 2 * d.interactivity.modes.bubble.duration &&
                ((d.tmp.bubble_clicking = !1),
                (d.tmp.bubble_duration_end = !1));
          }
          d.tmp.bubble_clicking &&
            ((b = (d.interactivity.modes.bubble.size * d.canvas.pxratio) / h),
            (g = d.interactivity.modes.bubble.opacity / h),
            (function () {
              (a.opacity_bubble = a.opacity), (a.radius_bubble = a.radius);
            })(),
            d.tmp.bubble_duration_end
              ? void 0 === d.interactivity.modes.bubble.opacity
                ? c()
                : d.tmp.bubble_opacity > d.particles.opacity.value
                ? ((b = d.tmp.bubble_opacity * i),
                  b < a.opacity &&
                    b > d.interactivity.modes.bubble.opacity &&
                    (a.opacity_bubble = b))
                : ((b =
                    a.opacity -
                    (d.particles.opacity.value -
                      d.interactivity.modes.bubble.opacity) *
                      i),
                  b > a.opacity &&
                    b < d.interactivity.modes.bubble.opacity &&
                    (a.opacity_bubble = b))
              : h <= d.interactivity.modes.bubble.distance
              ? (void 0 !== d.interactivity.modes.bubble.size &&
                  ((j = d.interactivity.modes.bubble.size * d.canvas.pxratio),
                  void 0 === d.interactivity.modes.bubble.size ||
                    j < d.particles.size.value) &&
                  (a.radius_bubble = j),
                void 0 !== d.interactivity.modes.bubble.opacity &&
                  ((l = d.interactivity.modes.bubble.opacity),
                  void 0 === d.interactivity.modes.bubble.opacity ||
                    l > a.opacity) &&
                  (a.opacity_bubble = l))
              : e());
        }
      }),
      (d.fn.modes.repulseParticle = function (a) {
        function c() {
          var c = Math.atan2(p, n);
          if (
            ((a.vx = q * Math.cos(c)),
            (a.vy = q * Math.sin(c)),
            "bounce" == d.particles.move.out_mode)
          ) {
            var e = { x: a.x + a.vx, y: a.y + a.vy };
            e.x + a.radius > d.canvas.w
              ? (a.vx = -a.vx)
              : e.x - a.radius < 0 && (a.vx = -a.vx),
              e.y + a.radius > d.canvas.h
                ? (a.vy = -a.vy)
                : e.y - a.radius < 0 && (a.vy = -a.vy);
          }
        }
        if (
          d.interactivity.events.onhover.enable &&
          isInArray("repulse", d.interactivity.events.onhover.mode) &&
          "mousemove" == d.interactivity.status
        ) {
          var e = a.x - d.interactivity.mouse.pos_x,
            f = a.y - d.interactivity.mouse.pos_y,
            g = Math.sqrt(e * e + f * f),
            h = { x: e / g, y: f / g },
            i = d.interactivity.modes.repulse.distance,
            j = 100,
            k = clamp((1 / i) * (-1 * Math.pow(g / i, 2) + 1) * i * j, 0, 50),
            l = { x: a.x + h.x * k, y: a.y + h.y * k };
          "bounce" == d.particles.move.out_mode
            ? (l.x - a.radius > 0 && l.x + a.radius < d.canvas.w && (a.x = l.x),
              l.y - a.radius > 0 && l.y + a.radius < d.canvas.h && (a.y = l.y))
            : ((a.x = l.x), (a.y = l.y));
        } else if (
          d.interactivity.events.onclick.enable &&
          isInArray("repulse", d.interactivity.events.onclick.mode)
        )
          if (
            (d.tmp.repulse_finish ||
              (d.tmp.repulse_count++,
              d.tmp.repulse_count == d.particles.array.length &&
                (d.tmp.repulse_finish = !0)),
            d.tmp.repulse_clicking)
          ) {
            var i = Math.pow(d.interactivity.modes.repulse.distance / 6, 3),
              m = d.interactivity.mouse.click_pos_x - a.x,
              n = d.interactivity.mouse.click_pos_y - a.y,
              o = m * m + n * n,
              p = m / o,
              q = n / o,
              r = (i / o) * -1;
            o <= i && c();
          } else
            0 == d.tmp.repulse_clicking && ((a.vx = a.vx_i), (a.vy = a.vy_i));
      }),
      (d.fn.modes.grabParticle = function (a) {
        if (
          d.interactivity.events.onhover.enable &&
          "mousemove" == d.interactivity.status
        ) {
          var b = a.x - d.interactivity.mouse.pos_x,
            c = a.y - d.interactivity.mouse.pos_y,
            e = Math.sqrt(b * b + c * c);
          if (e <= d.interactivity.modes.grab.distance) {
            var f =
              d.interactivity.modes.grab.line_linked.opacity -
              e /
                (1 / d.interactivity.modes.grab.line_linked.opacity) /
                d.interactivity.modes.grab.distance;
            if (f > 0) {
              var g = d.particles.line_linked.color_rgb_line;
              (d.canvas.ctx.strokeStyle =
                "rgba(" + g.r + "," + g.g + "," + g.b + "," + f + ")"),
                (d.canvas.ctx.lineWidth = d.particles.line_linked.width),
                d.canvas.ctx.beginPath(),
                d.canvas.ctx.moveTo(a.x, a.y),
                d.canvas.ctx.lineTo(
                  d.interactivity.mouse.pos_x,
                  d.interactivity.mouse.pos_y
                ),
                d.canvas.ctx.stroke(),
                d.canvas.ctx.closePath();
            }
          }
        }
      }),
      (d.fn.vendors.eventsListeners = function () {
        "window" == d.interactivity.detect_on
          ? (d.interactivity.el = window)
          : (d.interactivity.el = d.canvas.el),
          (d.interactivity.events.onhover.enable ||
            d.interactivity.events.onclick.enable) &&
            (d.interactivity.el.addEventListener("mousemove", function (a) {
              if (d.interactivity.el == window)
                var b = a.clientX,
                  c = a.clientY;
              else
                var b = a.offsetX || a.clientX,
                  c = a.offsetY || a.clientY;
              (d.interactivity.mouse.pos_x = b),
                (d.interactivity.mouse.pos_y = c),
                d.tmp.retina &&
                  ((d.interactivity.mouse.pos_x *= d.canvas.pxratio),
                  (d.interactivity.mouse.pos_y *= d.canvas.pxratio)),
                (d.interactivity.status = "mousemove");
            }),
            d.interactivity.el.addEventListener("mouseleave", function (a) {
              (d.interactivity.mouse.pos_x = null),
                (d.interactivity.mouse.pos_y = null),
                (d.interactivity.status = "mouseleave");
            })),
          d.interactivity.events.onclick.enable &&
            d.interactivity.el.addEventListener("click", function () {
              if (
                ((d.interactivity.mouse.click_pos_x =
                  d.interactivity.mouse.pos_x),
                (d.interactivity.mouse.click_pos_y =
                  d.interactivity.mouse.pos_y),
                (d.interactivity.mouse.click_time = new Date().getTime()),
                d.interactivity.events.onclick.enable)
              )
                switch (d.interactivity.events.onclick.mode) {
                  case "push":
                    d.particles.move.enable
                      ? d.fn.modes.pushParticles(
                          d.interactivity.modes.push.particles_nb,
                          d.interactivity.mouse
                        )
                      : 1 == d.interactivity.modes.push.particles_nb
                      ? d.fn.modes.pushParticles(
                          d.interactivity.modes.push.particles_nb,
                          d.interactivity.mouse
                        )
                      : d.interactivity.modes.push.particles_nb > 1 &&
                        d.fn.modes.pushParticles(
                          d.interactivity.modes.push.particles_nb
                        );
                    break;
                  case "remove":
                    d.fn.modes.removeParticles(
                      d.interactivity.modes.remove.particles_nb
                    );
                    break;
                  case "bubble":
                    d.tmp.bubble_clicking = !0;
                    break;
                  case "repulse":
                    (d.tmp.repulse_clicking = !0),
                      (d.tmp.repulse_count = 0),
                      (d.tmp.repulse_finish = !1),
                      setTimeout(function () {
                        d.tmp.repulse_clicking = !1;
                      }, 1e3 * d.interactivity.modes.repulse.duration);
                }
            });
      }),
      (d.fn.vendors.densityAutoParticles = function () {
        if (d.particles.number.density.enable) {
          var a = (d.canvas.el.width * d.canvas.el.height) / 1e3;
          d.tmp.retina && (a /= 2 * d.canvas.pxratio);
          var b =
              (a * d.particles.number.value) /
              d.particles.number.density.value_area,
            c = d.particles.array.length - b;
          0 > c
            ? d.fn.modes.pushParticles(Math.abs(c))
            : d.fn.modes.removeParticles(c);
        }
      }),
      (d.fn.vendors.checkOverlap = function (a, b) {
        for (var c = 0; c < d.particles.array.length; c++) {
          var e = d.particles.array[c],
            f = a.x - e.x,
            g = a.y - e.y,
            h = Math.sqrt(f * f + g * g);
          h <= a.radius + e.radius &&
            ((a.x = b ? b.x : Math.random() * d.canvas.w),
            (a.y = b ? b.y : Math.random() * d.canvas.h),
            d.fn.vendors.checkOverlap(a));
        }
      }),
      (d.fn.vendors.createSvgImg = function (a) {
        var b = d.tmp.source_svg,
          c = /#([0-9A-F]{3,6})/gi,
          e = b.replace(c, function (b, c) {
            if (a.color.rgb)
              var d =
                "rgba(" +
                a.color.rgb.r +
                "," +
                a.color.rgb.g +
                "," +
                a.color.rgb.b +
                "," +
                a.opacity +
                ")";
            else
              var d =
                "hsla(" +
                a.color.hsl.h +
                "," +
                a.color.hsl.s +
                "%," +
                a.color.hsl.l +
                "%," +
                a.opacity +
                ")";
            return d;
          }),
          f = new Blob([e], { type: "image/svg+xml;charset=utf-8" }),
          g = window.URL || window.webkitURL || window,
          h = g.createObjectURL(f),
          i = new Image();
        i.addEventListener("load", function () {
          (a.img.obj = i),
            (a.img.loaded = !0),
            g.revokeObjectURL(h),
            d.tmp.count_svg++;
        }),
          (i.src = h);
      }),
      (d.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(d.fn.drawAnimFrame), c.remove(), (pJSDom = null);
      }),
      (d.fn.vendors.drawShape = function (a, b, c, d, e, f) {
        var g = e * f,
          h = e / f,
          i = (180 * (h - 2)) / h,
          j = Math.PI - (Math.PI * i) / 180;
        a.save(), a.beginPath(), a.translate(b, c), a.moveTo(0, 0);
        for (var k = 0; g > k; k++)
          a.lineTo(d, 0), a.translate(d, 0), a.rotate(j);
        a.fill(), a.restore();
      }),
      (d.fn.vendors.exportImg = function () {
        window.open(d.canvas.el.toDataURL("image/png"), "_blank");
      }),
      (d.fn.vendors.loadImg = function (a) {
        if (((d.tmp.img_error = void 0), "" != d.particles.shape.image.src))
          if ("svg" == a) {
            var b = new XMLHttpRequest();
            b.open("GET", d.particles.shape.image.src),
              (b.onreadystatechange = function (a) {
                4 == b.readyState &&
                  (200 == b.status
                    ? ((d.tmp.source_svg = a.currentTarget.response),
                      d.fn.vendors.checkBeforeDraw())
                    : (console.log("Error pJS - Image not found"),
                      (d.tmp.img_error = !0)));
              }),
              b.send();
          } else {
            var c = new Image();
            c.addEventListener("load", function () {
              (d.tmp.img_obj = c), d.fn.vendors.checkBeforeDraw();
            }),
              (c.src = d.particles.shape.image.src);
          }
        else console.log("Error pJS - No image.src"), (d.tmp.img_error = !0);
      }),
      (d.fn.vendors.draw = function () {
        "image" == d.particles.shape.type
          ? "svg" == d.tmp.img_type
            ? d.tmp.count_svg >= d.particles.number.value
              ? (d.fn.particlesDraw(),
                d.particles.move.enable
                  ? (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw))
                  : cancelRequestAnimFrame(d.fn.drawAnimFrame))
              : d.tmp.img_error ||
                (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw))
            : void 0 != d.tmp.img_obj
            ? (d.fn.particlesDraw(),
              d.particles.move.enable
                ? (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw))
                : cancelRequestAnimFrame(d.fn.drawAnimFrame))
            : d.tmp.img_error ||
              (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw))
          : (d.fn.particlesDraw(),
            d.particles.move.enable
              ? (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw))
              : cancelRequestAnimFrame(d.fn.drawAnimFrame));
      }),
      (d.fn.vendors.checkBeforeDraw = function () {
        "image" == d.particles.shape.type
          ? "svg" == d.tmp.img_type && void 0 == d.tmp.source_svg
            ? (d.tmp.checkAnimFrame = requestAnimFrame(check))
            : (cancelRequestAnimFrame(d.tmp.checkAnimFrame),
              d.tmp.img_error || (d.fn.vendors.init(), d.fn.vendors.draw()))
          : (d.fn.vendors.init(), d.fn.vendors.draw());
      }),
      (d.fn.vendors.init = function () {
        d.fn.retinaInit(),
          d.fn.canvasInit(),
          d.fn.canvasSize(),
          d.fn.canvasPaint(),
          d.fn.particlesCreate(),
          d.fn.vendors.densityAutoParticles(),
          (d.particles.line_linked.color_rgb_line = hexToRgb(
            d.particles.line_linked.color
          ));
      }),
      (d.fn.vendors.start = function () {
        isInArray("image", d.particles.shape.type)
          ? ((d.tmp.img_type = d.particles.shape.image.src.substr(
              d.particles.shape.image.src.length - 3
            )),
            d.fn.vendors.loadImg(d.tmp.img_type))
          : d.fn.vendors.checkBeforeDraw();
      }),
      d.fn.vendors.eventsListeners(),
      d.fn.vendors.start();
  }
  function hexToRgb(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, c, d) {
      return b + b + c + c + d + d;
    });
    var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    return b
      ? { r: parseInt(b[1], 16), g: parseInt(b[2], 16), b: parseInt(b[3], 16) }
      : null;
  }
  function clamp(a, b, c) {
    return Math.min(Math.max(a, b), c);
  }
  function isInArray(a, b) {
    return b.indexOf(a) > -1;
  }
  function extend(a, b) {
    for (var c in b) a[c] = b[c];
    return a;
  }
  (window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (a) {
        window.setTimeout(a, 1e3 / 60);
      }
    );
  })()),
    (window.cancelRequestAnimFrame = (function () {
      return (
        window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout
      );
    })()),
    (window.pJSDom = []),
    (window.particlesJS = function (a, b) {
      "string" != typeof a && ((b = a), (a = "particles-js")),
        a || (a = "particles-js");
      var c = document.getElementById(a),
        d = "particles-js-canvas-el",
        e = c.getElementsByClassName(d);
      if (e.length) for (; e.length > 0; ) c.removeChild(e[0]);
      var f = document.createElement("canvas");
      (f.className = d), (f.style.width = "100%"), (f.style.height = "100%");
      var g = document.getElementById(a).appendChild(f);
      null != g && pJSDom.push(new launchParticlesJS(a, b));
    }),
    (window.particlesJS.load = function (a, b, c) {
      var d = new XMLHttpRequest();
      d.open("GET", b),
        (d.onreadystatechange = function (b) {
          if (4 == d.readyState)
            if (200 == d.status) {
              var e = JSON.parse(b.currentTarget.response);
              window.particlesJS(a, e), c && c();
            } else
              console.log("Error pJS - XMLHttpRequest status: " + d.status),
                console.log("Error pJS - File config not found");
        }),
        d.send();
    }),
    (Object.deepExtend = function (a, b) {
      for (var c in b)
        b[c] && b[c].constructor && b[c].constructor === Object
          ? ((a[c] = a[c] || {}), arguments.callee(a[c], b[c]))
          : (a[c] = b[c]);
      return a;
    });
})(window, document);

// Main JavaScript for John Carlo E. Abigania's Portfolio
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Initialize variables
  const body = document.body;
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const themeToggle = document.getElementById("theme-toggle");
  const spotlightToggle = document.getElementById("spotlight-toggle");
  const spotlight = document.getElementById("spotlight");
  const spotlightCircle = document.querySelector(".spotlight-circle");
  const preloader = document.querySelector(".preloader");
  const sections = document.querySelectorAll("section[id]");
  const skillProgress = document.querySelectorAll(".skill-progress");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");
  const inspiredByToggle = document.getElementById("inspired-by-toggle");
  const inspiredByPopup = document.getElementById("inspired-by-popup");
  const popupClose = document.getElementById("popup-close");
  const popupMessage = document.getElementById("popup-message");
  const statNumbers = document.querySelectorAll(".stat-number");
  const contactForm = document.getElementById("contact-form");
  const currentYear = document.getElementById("current-year");
  const dynamicText = document.getElementById("dynamic-text");
  const resumeBtn = document.getElementById("resume-btn");
  const aboutResumeBtn = document.getElementById("about-resume-btn");

  // Set current year in footer
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Create a simple particle background instead of using particles.js
  if (document.getElementById("particles-js")) {
    // Create a simple particle background with canvas
    const particlesContainer = document.getElementById("particles-js");
    const canvas = document.createElement("canvas");
    canvas.width = particlesContainer.offsetWidth;
    canvas.height = particlesContainer.offsetHeight;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    particlesContainer.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const particles = [];
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: "#4361ee",
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
      });
    }

    // Animation function
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
          );

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(67, 97, 238, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    }

    // Handle window resize
    window.addEventListener("resize", function () {
      canvas.width = particlesContainer.offsetWidth;
      canvas.height = particlesContainer.offsetHeight;
    });

    // Start animation
    animateParticles();
  }

  // Preloader code removed

  // Dynamic typing effect in hero section
  if (dynamicText) {
    const roles = [
      "Web Developer",
      "UI/UX Designer",
      "Frontend Engineer",
      "Creative Coder",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeText() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        dynamicText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        dynamicText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next word
      }

      setTimeout(typeText, typingSpeed);
    }

    // Start the typing effect
    setTimeout(typeText, 1000);
  }

  // Header scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navMenu.classList.toggle("active");
      body.classList.toggle("no-scroll");
    });
  }

  // Close mobile menu when clicking on a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });

  // Theme toggle functionality
  if (themeToggle) {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-theme");
    }

    themeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-theme");

      // Save theme preference
      if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Function to check if device is mobile/tablet
  function isMobileOrTablet() {
    return window.innerWidth <= 991; // Matches the tablet breakpoint in CSS
  }

  // Spotlight cursor mode
  if (spotlightToggle && spotlight && spotlightCircle) {
    // Function to check if device is mobile/tablet
    function isMobileOrTablet() {
      return window.innerWidth <= 991; // Matches the tablet breakpoint in CSS
    }

    // Initial check and disable if needed
    if (isMobileOrTablet()) {
      spotlightToggle.style.display = "none";
    }

    // Listen for window resize
    window.addEventListener("resize", function () {
      if (isMobileOrTablet()) {
        spotlightToggle.style.display = "none";
        spotlight.classList.remove("active");
        document.body.classList.remove("spotlight-mode");
        document.removeEventListener("mousemove", moveSpotlight);
      } else {
        spotlightToggle.style.display = "flex";
      }
    });

    spotlightToggle.addEventListener("click", function () {
      if (!isMobileOrTablet()) {
        spotlight.classList.toggle("active");
        document.body.classList.toggle("spotlight-mode");

        if (spotlight.classList.contains("active")) {
          document.addEventListener("mousemove", moveSpotlight);
        } else {
          document.removeEventListener("mousemove", moveSpotlight);
        }
      }
    });

    function moveSpotlight(e) {
      if (!isMobileOrTablet()) {
        requestAnimationFrame(function () {
          const x = e.clientX;
          const y = e.clientY;

          // Update CSS variables for the mask position
          spotlight.style.setProperty("--x", x + "px");
          spotlight.style.setProperty("--y", y + "px");

          // Move the spotlight circle
          spotlightCircle.style.left = x + "px";
          spotlightCircle.style.top = y + "px";
        });
      }
    }
  }

  // Active navigation link based on scroll position
  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav-link[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".nav-link[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", scrollActive);

  // Initialize ScrollReveal
  window.addEventListener("DOMContentLoaded", function () {
    // Scroll reveal animation
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      mobile: true,
      desktop: true,
      reset: false,
      useDelay: "onload",
      viewFactor: 0.1,
      viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    });

    // Apply reveal animations
    sr.reveal(".hero-text", {});
    sr.reveal(".hero-image", { delay: 400 });
    sr.reveal(".section-header", {});
    sr.reveal(".about-image", { origin: "left" });
    sr.reveal(".about-text", { origin: "right", delay: 400 });
    sr.reveal(".skill-item", { interval: 100 });
    sr.reveal(".project-card", { interval: 200 });
    sr.reveal(".certification-item", { interval: 200 });
    sr.reveal(".gallery-item", { interval: 100 });
    sr.reveal(".contact-card", { interval: 200 });
    sr.reveal(".contact-form-container", { delay: 400 });
  });

  // Animate skill progress bars when in viewport
  function animateSkills() {
    skillProgress.forEach((progress) => {
      const progressValue = progress.getAttribute("data-progress") + "%";
      progress.style.width = progressValue;
    });
  }

  // Initialize Intersection Observer for skill animations
  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkills();
            skillsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillsObserver.observe(skillsSection);
  }

  // Tabs functionality
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      // Hide all tab panes
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      // Show the corresponding tab pane
      const target = this.getAttribute("data-target");
      document.getElementById(target).classList.add("active");
    });
  });

  // Filter functionality for projects and gallery
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      // Filter projects
      if (projectCards.length > 0) {
        projectCards.forEach((card) => {
          if (
            filterValue === "all" ||
            card.getAttribute("data-category") === filterValue
          ) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      }

      // Filter gallery
      if (galleryItems.length > 0) {
        galleryItems.forEach((item) => {
          if (
            filterValue === "all" ||
            item.getAttribute("data-category") === filterValue
          ) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      }
    });
  });

  // Lightbox functionality for gallery
  if (lightbox && lightboxImg && lightboxCaption) {
    let currentIndex = 0;
    const galleryImages = document.querySelectorAll(".gallery-item img"); // Select the images directly

    // Open lightbox when gallery item is clicked
    if (galleryItems.length > 0) {
      galleryItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
          currentIndex = index;
          updateLightbox();
          lightbox.classList.add("active");
        });
      });
    }

    // Close lightbox
    lightboxClose.addEventListener("click", function () {
      lightbox.classList.remove("active");
    });

    // Navigate to previous image
    lightboxPrev.addEventListener("click", function () {
      currentIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      updateLightbox();
    });

    // Navigate to next image
    lightboxNext.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      updateLightbox();
    });

    // Update lightbox content
    function updateLightbox() {
      const item = galleryImages[currentIndex];
      const imgSrc = item.src; // Get src directly from the image
      const caption = item.alt; // Get alt text as caption

      lightboxImg.src = imgSrc;
      lightboxCaption.textContent = caption;
    }

    // Close lightbox when clicking outside the content
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });

    // Close lightbox with Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("active")) {
        lightbox.classList.remove("active");
      }
    });
  }

  // Inspired By popup functionality
  if (inspiredByToggle && inspiredByPopup && popupClose && popupMessage) {
    inspiredByToggle.addEventListener("click", function () {
      inspiredByPopup.classList.add("active");
      // Add a slight delay before animating message for better effect
      setTimeout(function () {
        popupMessage.style.opacity = "1";
      }, 100);
    });

    popupClose.addEventListener("click", function () {
      inspiredByPopup.classList.remove("active");
      popupMessage.style.opacity = "0"; // Reset opacity when closing
    });

    // Close popup when clicking outside the content
    inspiredByPopup.addEventListener("click", function (e) {
      if (e.target === inspiredByPopup) {
        inspiredByPopup.classList.remove("active");
        popupMessage.style.opacity = "0"; // Reset opacity when closing
      }
    });
  }

  // Animate stats counter
  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-count"));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      el.textContent = Math.floor(current);

      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      }
    }, 16);
  }

  // Initialize Intersection Observer for stats animations
  const statsSection = document.querySelector(".about-stats");
  if (statsSection && statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statNumbers.forEach((stat) => {
              animateCounter(stat);
            });
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statsObserver.observe(statsSection);
  }

  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Validate form data
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Simulate form submission
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        alert("Thank you for your message! I will get back to you soon.");
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }

  // Resume download functionality
  if (resumeBtn) {
    resumeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert(
        "Resume download functionality will be implemented with actual file."
      );
    });
  }

  if (aboutResumeBtn) {
    aboutResumeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert(
        "Resume download functionality will be implemented with actual file."
      );
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Tilt effect for project cards
  const tiltCards = document.querySelectorAll(".project-card, .contact-card");
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const cardRect = this.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;

      const rotateX = mouseY * -0.05;
      const rotateY = mouseX * 0.05;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });
  });

  // Initialize AOS (Animate On Scroll) for additional animations
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Initialize AOS (Animate On Scroll)
  document.addEventListener("DOMContentLoaded", function () {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: "ease-in-out",
        delay: 100,
        mirror: false,
        anchorPlacement: "top-bottom",
      });
    }
  });
});
