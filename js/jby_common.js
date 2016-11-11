/**
 * Created by wl on 2016/8/26.
 */

(function (window, $) {

	var jby = {
		/***全局常量***/
		global: {
		},
		/***页面初始化***/
		init: function () {

			this.resizeFirstScreen();

			$(window).resize(function () {
				jby.resizeFirstScreen();
			});

			this.jbyTabChange();

		},
		/***自适应首屏***/
		resizeFirstScreen: function () {

			var screenHeight = $(window).outerHeight(),
				headerHeight = 0,
				firstBgHeight = 0;

			setTimeout(function () {

				headerHeight = $(".jby-header").outerHeight();
				firstBgHeight = screenHeight - headerHeight;
				$(".jby-menu").height(headerHeight);
				$(".jby-menu li").height(headerHeight);
				$(".first-main").height(firstBgHeight);
				$(".jby-first").css("marginTop", headerHeight + "px");

			}, 10)

		},
		/***判断滚动条方向***/
		scrollDirect: function (fn) {

			var beforeScrollTop = $(document).scrollTop();
			var fn = fn || function () {};

			$(window).on("scroll", function (e) {

				var afterScrollTop = $(document).scrollTop();
				var delta = afterScrollTop - beforeScrollTop;
				beforeScrollTop = afterScrollTop;

				if (Math.abs(delta) < 10) {
					return false;
				}
				fn(delta > 0 ? "down" : "up");

			});

		},
		/***TAB切换***/
		jbyTabChange: function () {

			$(".jby-tabBox").hide();
			$($(".jby-tabBox").get(0)).show();

			$(".title-nav-tab").on("click", function () {

				$(".title-nav-tab").removeClass("active");
				$(this).addClass("active");

				$(".jby-tabBox").hide();
				$($(".jby-tabBox").get($(this).index())).fadeIn();

			})

		}
	};

	/***对外接口命名***/
	window.jby = jby;

})(window, jQuery);