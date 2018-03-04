$(function () {
    /* 城市下拉和选择 */
    (function () {
        var $city = $(".city");
        var $cityDown = $(".city_down");
        var $icon1 = $(".city").find(".icon1");
        var $cityChooseTab = $(".city_choose_tab");
        var $cityChooseTab1 = $cityChooseTab.find(".city_choose_tab1");
        var $cityChoose = $cityDown.find(".city_choose");
        var $Li1 = $cityChoose.find("li");

        var $chooseTab1 = $(".choose_option1").find(".choose_tab1");
        var $tabBox1 = $cityDown.find(".tab_box1");

        var $chooseTab2 = $(".choose_option2").find(".choose_tab2");
        var $tabBox2 = $cityDown.find(".tab_box2");

        var $li1 = $(".tab_box1").find(".tab1").find("li");
        var $li2 = $(".tab_box1").find(".tab2").find("li");
        var $li3 = $(".tab_box2").find(".tab1").find("li");
        var $li4 = $(".tab_box2").find(".tab2").find("li");

        $city.click(function () {
            if ($cityDown.css("display") == "none") {
                $cityDown.show(200);
                $(this).addClass("active");
            } else {
                $cityDown.hide(200);
                $(this).removeClass("active");
            }
        });

        $Li1.click(function () {
            $(this).addClass("active").siblings("li").removeClass("active");
            $cityChooseTab1.hide();
            $cityChooseTab1.eq($(this).index()).show();
        });

        $chooseTab1.click(function () {
            $(this).find("a").addClass("active").parent().siblings(".choose_tab1").find("a").removeClass("active");

            $tabBox1.find(".tab").hide();
            $tabBox1.find(".tab").eq($(this).index()).show();
        });

        $chooseTab2.click(function () {
            $(this).find("a").addClass("active").parent().siblings(".choose_tab2").find("a").removeClass("active");

            $tabBox2.find(".tab").hide();
            $tabBox2.find(".tab").eq($(this).index()).show();
        });

        $li1.click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $cityDown.hide();
            $city.removeClass("active");
        });
        $li2.click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $cityDown.hide();
            $city.removeClass("active");
        });
        $li3.click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $cityDown.hide();
            $city.removeClass("active");
        });
        $li4.click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $cityDown.hide();
            $city.removeClass("active");
        });
    })();


    /* 图片的收藏 */
    /*	 ( function(){
    		 $(".collection").click( function(){
    			 if( $(this).hasClass("active") ){
    				 $(this).removeClass("active");
    			 }else{
    				 $(this).addClass("active");
    			 }
    			 return false;
    		 } );
    	 } )();*/

    /* 头部下拉 */
    (function () {
        var $classify = $(".classify");
        var $getOne = $classify.find(".get_one");
        var $getTwo = $classify.find(".get_two");
        var $cell = $classify.find(".cell");
        var $sort = $(".p_sort").find(".sort");
        var $mask = $(".mask");

        var $sortChooseCell = $(".sort_choose_cell");
        var $sortTab = $(".sort_choose_tab").find(".sort_tab");
        var $pSort = $(".p_sort");

        var $li1 = $(".sort_tab1").find("li");
        var $li2 = $(".sort_tab2").find("li");

        var $li3 = $(".sort2").find("li");

        var $li4 = $(".sort3").find("li");


        $cell.click(function () {
            if ($(this).hasClass("active")) {
                $cell.removeClass("active");
                $mask.hide();
                $pSort.css("top", "-1000px");
                $sort.css("top", "-1000px");
                $("html,body").css({
                    "overflow": "auto",
                    "height": "auto"
                });
                $pSort.css("height", "320px");
            } else {
                $(this).addClass("active").siblings(".cell").removeClass("active");
                $mask.show();
                //$sortTab.hide();
                $pSort.css("top", "51px");
                $sort.eq($(this).index(".cell")).css("top", "0px").siblings(".sort").css("top", "-1000px");
                $("html,body").css({
                    "overflow": "hidden",
                    "height": "100%"
                });
                $pSort.css("height", "320px");
            };
        });
        $cell.eq(2).click(function () {
            $pSort.css("height", "120px");
        })
        $sortChooseCell.click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $sortTab.eq($(this).index(".sort_choose_cell")).show().siblings().hide();
        });

        $li1.click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $mask.hide();
            $sort.css("top", "-1000px");
            $cell.removeClass("active");
        });

        $li2.click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $mask.hide();
            $sort.css("top", "-1000px");
            $cell.removeClass("active");
        });

        $li3.click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $mask.hide();
            $sort.css("top", "-1000px");
            $cell.removeClass("active");
        });
        $li4.click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $mask.hide();
            $sort.css("top", "-1000px");
            $cell.removeClass("active");
        });
    })();
    /* 预定详情 */
    (function () {
        var $minu = $(".reserve_num").find(".minu");
        var $num = $(".reserve_num").find(".num");
        var $add = $(".reserve_num").find(".add");
        var $hidden = $("#num");

        var $choose1 = $(".text").find(".radio1").find("p");
        var $choose2 = $(".text").find(".radio2").find("p");

        $minu.click(function () {
            var $val = parseInt($num.html());
            $val--;
            if ($val < 1) {
                $val = 1
            }
            $num.html($val);
            $hidden.val($val);
        });
        $add.click(function () {
            var $val = parseInt($num.html());
            $val++;
            if ($val > 6) {
                $val = 6
            }
            $num.html($val);
            $hidden.val($val);

        });

        /*$choose1.click( function(){
			 $choose1.removeClass("active");
			 $(this).addClass("active");
		 } );*/

        $choose1.click(function () {
            $choose1.removeClass("active");
            $(this).addClass("active");
            $(".time").prop("checked", false);
            $(this).find("input").prop("checked", true);
        });


        /*		 $choose2.click( function(){
        			 $choose2.removeClass("active");
        			 $(this).addClass("active");
        		 } );*/
        $choose2.click(function () {
            $choose2.removeClass("active");
            $(this).addClass("active");
            $(".sex").prop("checked", false);
            $(this).find("input").prop("checked", true);
        });

    })();

    /* 个人资料 */
    /*	 ( function(){
    		 var $shareBtn = $(".share_btn");
    		 var $mask = $(".mask");
    	     var $share = $(".share");
    		 var $cancle = $(".share_cancel");

    	     $shareBtn.click( function(){
    			 $mask.show();
    			 $share.animate({"bottom":"0"},500);
    		 } );

    		 $cancle.click( function(){
    			 $mask.hide();
    			 $share.animate({"bottom":"-250"},500);
    		 } );
    	 } )();*/

    /* 我的订单 */
    (function () {
        var $Li = $(".order_choose").find("li");
        var $orderEdit = $(".order_edit");
        var $orderCancle = $(".order_cancle");

        $Li.click(function () {
            $(this).addClass("active").siblings().removeClass("active");
        });

        $orderEdit.click(function () {
            var $cancle = $(this).closest("li").find(".order_cancle");
            $orderCancle.animate({
                "height": "0"
            }, 500);
            if ($cancle.height() == 0) {
                $cancle.animate({
                    "height": "40"
                }, 500);
            } else {
                $cancle.animate({
                    "height": "0"
                }, 500);
            }

            return false;
        });

        $orderCancle.click(function () {
            $(this).closest("li").remove();
        });
    })();



    /* 底部导航 */
    (function () {
        var $footerNav = $("#footer_nav");
        var $Li = $footerNav.find("li");
        var $input = $("#top").find(".search_box").find("input");

        $Li.click(function () {
            $(this).addClass("active").siblings("li").removeClass("active");
        });

        /*		 $input.focus( function(){
        			 $footerNav.hide();
        		 } );

        		$input.blur( function(){
        			 $footerNav.show();
        		 } );*/
    })();

    /* 头部导航条获取焦点 */
    /* ( function(){
    	 var $top = $("#top");

    	 var $input = $("#top").find(".search_box").find("input");
    	 var $height = $(document).scrollTop();

    	 $input.focus( function(){
    		 if( $height > 0) {
    			 $top.css({
    				 "position":"absolute",
    				 "top":$height
    			 });
    		 }else{
    			 $top.css({
    				 "position":"fixed",
    				 "top":0
    			 });
    		 }

    		 $("body,html").css({
    			 "html":"100%",
    			 "body":"100%",
    			 "overflow":"hidden"
    		 })
    	 } );

    	 $input.blur( function(){
    		  /*$top.css({
    			 "position":"fixed",
    			 "top":0
    		 });*/
    /*
    			$("body,html").css({
    				 "html":"auto",
    				 "body":"auto",
    				 "overflow":"auto"
    			 })
    		 } );
    	 } )();*/


})
