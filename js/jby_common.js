/**
 * Created by wl on 2016/8/26.
 */

(function (window, $) {

	var jby = {
		/***ȫ�ֳ���***/
		global: {
		},
		/***ҳ���ʼ��***/
		init: function () {

			this.resizeFirstScreen();

			$(window).resize(function () {
				jby.resizeFirstScreen();
			});

			this.jbyTabChange();

		},
		/***����Ӧ����***/
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
		/***�жϹ���������***/
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
		/***TAB�л�***/
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

	/***����ӿ�����***/
	window.jby = jby;

})(window, jQuery);