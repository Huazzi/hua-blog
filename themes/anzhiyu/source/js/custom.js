// 鼠标点击特效
//社会主义核心价值观
var a_idx = 0; jQuery(document).ready(function($) { $("body").click(function(e) { var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"); var $i = $("<span/>").text(a[a_idx]); a_idx = (a_idx + 1) % a.length; var x = e.pageX, y = e.pageY; let scrolly = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop; y = y - scrolly; $i.css({ "z-index": 999, "top": y - 20, "left": x, "position": "fixed", "font-weight": "bold", "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")" }); $("body").append($i); $i.animate({ "top": y - 180, "opacity": 0 }, 1500, function() { $i.remove(); });  }); });

// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/funny.ico");
		document.title = '╭(°A°`)╮ 页面崩溃~';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/favicon.ico");
		document.title = '(ฅ>ω<*ฅ) 噫又好啦~' + OriginTitle;
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});

// 纸飞机流光拖尾特效
(function() {
    // 核心控制函数
    const init = () => {
        setupListeners();
        startAnimation();
    };

    // 事件监听设置
    const setupListeners = () => {
        document.addEventListener("mousemove", trackPointer);
        document.addEventListener("touchmove", handleTouch);
        window.addEventListener("resize", handleResize);
    };

    // 响应式处理
    const handleResize = () => {
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
    };

    // 触摸事件处理
    const handleTouch = (e) => {
        if (e.touches.length > 0) {
            for (let touch of e.touches) {
                createParticle(touch.clientX, touch.clientY);
            }
        }
    };

    // 鼠标移动追踪
    const trackPointer = (e) => {
        pointerX = e.clientX;
        pointerY = e.clientY;
        createParticle(pointerX, pointerY);
    };

    // 粒子生成器
    const createParticle = (x, y) => {
        if (Date.now() - lastEmission > 15) { // 限制发射频率
            particles.push(new Particle(x, y));
            lastEmission = Date.now();
        }
    };

    // 动画循环
    const animate = () => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        particles.forEach((p, i) => {
            p.update();
            p.draw();
            if (p.alpha <= 0) particles.splice(i, 1);
        });
        requestAnimationFrame(animate);
    };

    // 粒子类
    class Particle {
        constructor(x, y) {
            this.x = x + Math.random() * 10 - 5; // 轻微位置扩散
            this.y = y + Math.random() * 10 - 5;
            this.size = Math.random() * 3 + 2;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.2;
            this.alpha = 1;
            this.color = `hsla(195, 100%, ${70 + Math.random() * 15}%, ${this.alpha})`;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.alpha -= 0.03; // 流畅的渐隐
            this.size *= 0.97;  // 逐渐缩小
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowColor = "rgba(135, 206, 235, 0.8)";
            ctx.shadowBlur = 15;
            ctx.fill();
        }
    }

    // 画布初始化
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    
    // 样式配置
    Object.assign(canvas.style, {
        position: "fixed",
        pointerEvents: "none",
        zIndex: "999999",
        top: "0",
        left: "0"
    });
    
    // 性能优化设置
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    document.body.appendChild(canvas);

    // 状态变量
    let pointerX = 0;
    let pointerY = 0;
    let particles = [];
    let lastEmission = 0;

    // 启动系统
    const startAnimation = () => {
        requestAnimationFrame(animate);
    };

    // 初始化
    init();
})();