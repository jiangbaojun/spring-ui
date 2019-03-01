/**
 * 核心js
 * base on github:https://github.com/almasaeed2010/AdminLTE.git
 */
if (typeof jQuery === 'undefined') {
	throw new Error('jQuery is required');
}

/**
 * 布局
 */
+function ($) {
  'use strict';
  var DataKey = 'lte.layout';
  
  var Default = {
	slimscroll : true,
	resetHeight: true
  };
  var Selector = {
    wrapper       : '.wrapper',
    contentWrapper: '.content-wrapper',
    layoutBoxed   : '.layout-boxed',
    mainFooter    : '.main-footer',
    mainHeader    : '.main-header',
    sidebar       : '.sidebar',
    fixed         : '.fixed',
    sidebarMenu   : '.sidebar-menu',
    logo          : '.main-header .logo'
  };

  var ClassName = {
    fixed         : 'fixed',
    holdTransition: 'hold-transition'
  };

  var Layout = function (options) {
    this.options      = options;
    this.bindedResize = false;
    this.activate();
  };

  Layout.prototype.activate = function () {
    this.fix();
    this.fixSidebar();
    $('body').removeClass(ClassName.holdTransition);
    if (this.options.resetHeight) {
      $('body, html, ' + Selector.wrapper).css({
        'height'    : 'auto',
        'min-height': '100%'
      });
    }
    if (!this.bindedResize) {
      $(window).resize(function () {
        this.fix();
        this.fixSidebar();
      }.bind(this));
      this.bindedResize = true;
    }
  };

  Layout.prototype.fix = function () {
    $(Selector.layoutBoxed + ' > ' + Selector.wrapper).css('overflow', 'hidden');
    var footerHeight = $(Selector.mainFooter).outerHeight() || 0;
    var headerHeight  = $(Selector.mainHeader).outerHeight() || 0;
    var neg           = headerHeight + footerHeight;
    var windowHeight  = $(window).height();
    var sidebarHeight = $(Selector.sidebar).height() || 0;
    if ($('body').hasClass(ClassName.fixed)) {
    	$(Selector.contentWrapper).css('min-height', windowHeight - footerHeight);
        $(Selector.contentWrapper).css('height', windowHeight - footerHeight);
    } else {
      var postSetHeight;
      if (windowHeight >= sidebarHeight + headerHeight) {
    	  $(Selector.contentWrapper).css('min-height', windowHeight - neg);
          $(Selector.contentWrapper).css('height', windowHeight - neg);
          postSetHeight = windowHeight - neg;
      } else {
    	  $(Selector.contentWrapper).css('min-height', sidebarHeight);
          $(Selector.contentWrapper).css('height', sidebarHeight);
          postSetHeight = sidebarHeight;
      }
    }
  };
  Layout.prototype.fixSidebar = function () {
    if (!$('body').hasClass(ClassName.fixed)) {
      if (typeof $.fn.slimScroll !== 'undefined') {
        $(Selector.sidebar).slimScroll({ destroy: true }).height('auto');
      }
      return;
    }
	if (typeof $.fn.slimScroll !== 'undefined') {
	    $(Selector.sidebar).slimScroll({
	      size: "4px",
	      height: ($(window).height() - $(Selector.mainHeader).height()) + 'px'
	    });
	}
  };

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data  = $this.data(DataKey);
      if (!data) {
        var options = $.extend({}, Default, $this.data(), typeof option === 'object' && option);
        $this.data(DataKey, (data = new Layout(options)));
      }
      if (typeof option === 'string') {
        if (typeof data[option] === 'undefined') {
          throw new Error('No method named ' + option);
        }
        data[option]();
      }
    });
  }

  $.fn.layout            = Plugin;
  $.fn.layout.Constuctor = Layout;
  $.fn.Layout = Layout.prototype; 

  $(window).on('load', function () {
    Plugin.call($('body'));
  });
}(jQuery);


/**
 * 菜单边栏折叠
 */
+function ($) {
  'use strict';
  var DataKey = 'lte.pushmenu';

  var Default = {
    collapseScreenSize   : 767,
    expandTransitionDelay: 200
  };

  var Selector = {
    collapsed     : '.sidebar-collapse',
    open          : '.sidebar-open',
    mainSidebar   : '.main-sidebar',
    contentWrapper: '.content-wrapper',
    searchInput   : '.sidebar-form .form-control',
    button        : '[data-toggle="push-menu"]',
    mini          : '.sidebar-mini',
    expanded      : '.sidebar-expanded-on-hover',
    layoutFixed   : '.fixed'
  };

  var ClassName = {
    collapsed    : 'sidebar-collapse',
    open         : 'sidebar-open',
    mini         : 'sidebar-mini',
    expanded     : 'sidebar-expanded-on-hover',
    expandFeature: 'sidebar-mini-expand-feature',
    layoutFixed  : 'fixed'
  };
  var PushMenu = function (options) {
	this.options = options;
	PushMenu.prototype.options = options;
    this.init();
  };

  PushMenu.prototype.init = function () {
	if($('body').hasClass("act-expand")){
	  this.expandOnHover();
	}
    if (($('body').is(Selector.mini + Selector.layoutFixed))) {
      $('body').addClass(ClassName.expandFeature);
    }

    $(Selector.contentWrapper).click(function () {
      if ($(window).width() <= this.options.collapseScreenSize && $('body').hasClass(ClassName.open)) {
        this.close();
      }
    }.bind(this));

    $(Selector.searchInput).click(function (e) {
      e.stopPropagation();
    });
  };

  PushMenu.prototype.toggle = function () {
    var windowWidth = $(window).width();
    var isOpen      = !$('body').hasClass(ClassName.collapsed);
    if (windowWidth <= this.options.collapseScreenSize) {
      isOpen = $('body').hasClass(ClassName.open);
    }
    if (!isOpen) {
      this.open();
    } else {
      this.close();
    }
  };

  PushMenu.prototype.open = function () {
    var windowWidth = $(window).width();
    if (windowWidth > this.options.collapseScreenSize) {
      $('body').removeClass(ClassName.collapsed);
    } else {
      $('body').addClass(ClassName.open);
    }
  };

  PushMenu.prototype.close = function () {
    var windowWidth = $(window).width();
    if (windowWidth > this.options.collapseScreenSize) {
      $('body').addClass(ClassName.collapsed);
    } else {
      $('body').removeClass(ClassName.open + ' ' + ClassName.collapsed);
    }
  };

  PushMenu.prototype.expandOnHover = function () {
    $(Selector.mainSidebar).hover(function () {
      if ($('body').is(Selector.mini + Selector.collapsed)
        && $(window).width() > this.options.collapseScreenSize) {
        this.expand();
      }
    }.bind(this), function () {
      if ($('body').is(Selector.expanded)) {
        this.collapse();
      }
    }.bind(this));
  };

  PushMenu.prototype.expand = function () {
    setTimeout(function () {
      $('body').removeClass(ClassName.collapsed)
        .addClass(ClassName.expanded);
    }, this.options.expandTransitionDelay);
  };

  PushMenu.prototype.collapse = function () {
    setTimeout(function () {
      $('body').removeClass(ClassName.expanded)
        .addClass(ClassName.collapsed);
    }, this.options.expandTransitionDelay);
  };

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data  = $this.data(DataKey);
      if (!data) {
        var options = $.extend({}, Default, $this.data(), typeof option == 'object' && option);
        $this.data(DataKey, (data = new PushMenu(options)));
      }
      if (option === 'toggle') data.toggle();
    });
  }

  $.fn.pushMenu             = Plugin;
  $.fn.pushMenu.Constructor = PushMenu;
  $.fn.PushMenu = PushMenu;

  $(document).on('click', Selector.button, function (e) {
    e.preventDefault();
    Plugin.call($(this), 'toggle');
  });
  $(window).on('load', function () {
    Plugin.call($(Selector.button));
  });
}(jQuery);

/**
 * 菜单生成	
 */
(function ($) {
	'use strict';
    $.fn.mrkMenu = function (options, params) {
    	if($(this).length<1){
    		return;
    	}
    	//扩展方法
        if (typeof options == "string") {
            var method = $.fn.mrkMenu.methods[options];
            if (method) return method(this, params);
        }
    	//扩展默认配置选项数据
    	extendDefault(this, options);
        //初始化控件
    	init(this, params);
    };
    /**
     * 控件暴露方法
     * @ignore
     */
    $.fn.mrkMenu.methods = {
		/**
		 *根据菜单id，添加label
		 * 参数 {id:"A007",data:[{text:"6",color:"#f39c12 "}]}
		 */
		"addLabel": function(target, obj){
			if(!obj ||!obj.id || !obj.data){
				return "error parameter"
			}
			var rightContainer = $(target).find("a[menuid='"+obj.id+"'] span.pull-right-container");
			if(rightContainer && rightContainer.length==1){
				var labels = obj.data;
				for(var i=0;i<labels.length;i++){
					var text = labels[i]["text"];
					var color = labels[i]["color"];
					if(text && color){
						$('<small class="label pull-right" label-text="'+text+'" style="background-color:'+color+'">'+text+'</small>').appendTo(rightContainer);
					}
				}
			}
		},
		/**
		 *根据菜单id和label文本内容，删除label
		 * 参数 {id:"A007",text:"2"}
		 */
		"removeLabel": function(target, obj){
			if(!obj ||!obj.id || !obj.text){
				return "error parameter"
			}
			var rightContainer = $(target).find("a[menuid='"+obj.id+"'] span.pull-right-container");
			var label = rightContainer.find(">small.label[label-text='"+obj.text+"']");
			if(label.length>0){
				label.remove();
			}
		},
		/**
		 *根据菜单id，删除所有label
		 */
		"removeAllLabel": function(target, id){
			if(!id){
				return "error parameter"
			}
			var labels = $(target).find("a[menuid='"+id+"'] span.pull-right-container >small.label");
			if(labels.length>0){
				labels.remove();
			}
		}
	};
    /**
     * 控件默认配置选项
     * @ignore
     */
    $.fn.mrkMenu.defaultOptions = {
        menuData:[],
        menuRootId:0,
        hoverAct:"float",
        autoFix:true,
        onComplete: function(target){},
        onClickMenu: function(target){},
        onClickContextMenu: function(target){}
    };
    var activeOptions = $.fn.mrkMenu.defaultOptions;
    
    /**
     * 扩展默认配置选项数据
     * @param options   初始化配置选项，用于替换控件默认配置选项
     */
    function extendDefault(target, options){
    	//不可自定义默认配置
    	var innerDefaultOptions = {
    		animateSpeed: 300
    	};
        //扩展自定义配置
        var opts = $.extend({}, $.fn.mrkMenu.defaultOptions);
        activeOptions = $.extend(true, opts, options, innerDefaultOptions);
    }
    
    /**
     * 初始化
     */
    function init(target, params){
    	$("body").addClass("act-"+activeOptions.hoverAct);
    	if(activeOptions.autoFix){
    		$("body").addClass("auto-fix");
    	}
    	createMenuDom(target, params);
    	completeAct();
    }
    
    /**
     * 菜单创建完成
     */
    function completeAct(){
    	activeOptions.onComplete.call(this);
    	//浮动菜单hover事件
    	if(activeOptions.hoverAct=="float"){
    		$(".sidebar-menu>li").hover(function () {
    			if($("body").hasClass("sidebar-collapse")){
    				$(this).addClass("active-float");
    				calculateFloatOffset($(this));
    			}
    		},function(){
    			$(this).removeClass("active-float");
    			$(this).find(">a>span.pull-right-container").css("top","50%");
    		});
    	}
    }
    
    /**
     * 计算浮动位置
     */
    function calculateFloatOffset(target){
    	if(target.hasClass("active-float")){
			var top = target.offset().top;
			var titleHeight = target.height();
			var ulHeight = target.find(">ul.treeview-menu").height();
			var windowHeight = $(window).height();
			//判断浮动内容是否超出边界
			if((windowHeight-top)<(ulHeight+titleHeight)){
				top = windowHeight-(ulHeight+titleHeight);
				//如果窗口高度过小，靠下浮动依然展示不开，使用靠上浮动
				if(top<50){
					top = 50;
				}
			}
			target.find(">ul.treeview-menu").css("top",(top+titleHeight)+"px");
			target.find(">a>span.menu-text").css("top",top+"px");
			target.find(">a>span.pull-right-container").css("top",top+"px");
			
			$(".main-sidebar .slimScrollBar").hide();
		}
    }
    
    /**
     * 创建菜单dom
     * @param target    目标菜单容器
     * @param params    暴露方法参数
     */
    function createMenuDom(target, id, j){
    	if(target===undefined||target==null){
	      return;
	    }
    	if(!id){
    		id = activeOptions.menuRootId;
    	}
    	if(!j){
    		j = 1;
    	}
	    if(j==1){
	      target.addClass('sidebar-menu');
		  target.addClass('treeview-level-'+j++);
	      target.html("");
	      target.append('<li class="header">主菜单</li>');
	    }
	    var data=activeOptions.menuData;
	    var rootMenu = $.grep(data, function (n) {
	      if (n.parentId == id)
	        return true;
	    });
	    if(!rootMenu.length) return;
	    //sort(排序)
	    rootMenu.sort(function (a, b) {
	      return a.orderNum - b.orderNum;
	    });
	    //add menu node（插入同级菜单节点）
	    $.each(rootMenu, function () {
	      var that = this;
	      var li = $('<li />').appendTo(target);
	      var li_a = $('<a/>').attr({"href": this.url || "#", "menuId": this.id})
	          .addClass(this.url === '' ? '' : 'menu-item')
	          .appendTo(li);
	      // 菜单前的图标优先使用图片
	      if(this.iconSrc){
	        $("<img/>").attr("src",this.iconSrc).addClass("menu-icon").appendTo(li_a);
	      }else{
	        $('<i/>').addClass(this.iconClass || "").appendTo(li_a);
	      }
	      // title
	      $('<span class="menu-text" />').text(this.title).appendTo(li_a);

	      var childrenUL = $('<ul class="treeview-menu" />');
	      createMenuDom(childrenUL, that.id, j+1);
	      var isModule = false; //是否为模块（没有子节点）
	      var rightContainer=$('<span class="pull-right-container" />').appendTo(li_a);
	      if(childrenUL.children().length){
			li.addClass("treeview");
			isModule = false;
			childrenUL.addClass('treeview-level-'+j);
			childrenUL.appendTo(li);
			li_a.attr('href','#');
			li_a.removeClass('menu-item');
			//添加arrows
			$('<i class="fa fa-angle-left pull-right" />').appendTo(rightContainer);
	      }else{
			  if(that.type=="2"){
				  isModule = true;
			  }
			  li.addClass("direct-menu");
	      }
	    //添加label
		if(that.label&&that.label.length>0){
			var labels = that.label;
			for(var i=0;i<labels.length;i++){
				var text = labels[i]["text"];
				var color = labels[i]["color"];
				if(text && color){
					$('<small class="label pull-right" label-text="'+text+'" style="background-color:'+color+'">'+text+'</small>').appendTo(rightContainer);
				}
			}
		}
	      
	      //添加事件-鼠标右键
	      li.on('contextmenu', function (e) {
	    	if($(e.target).is("ul")){
	    		return;
	      	}
	    	activeOptions.onClickContextMenu.call(li, {isModule:isModule, data:that, e:e});
	    	e.preventDefault();
	        e.stopPropagation();
	      });
	      
	      //添加鼠标滑过事件
	      li.hover(function () {
	    	  li.removeClass("active");
	      },function(){
	    	  li.removeClass("active");
	      });
	      
	      //添加事件-鼠标左键
	      li.on('click', function (e) {
	    	if($(e.target).is("ul")){
          		return;
          	}
	    	//目录or模块
	    	if (!$(this).hasClass("direct-menu")) {
	    		//当走侧菜单没有整体折叠,或者浮动出来的菜单还有子级时，操作节点折叠、展开
	    		if (!$("body").hasClass("sidebar-collapse") || $('body').hasClass("sidebar-open") || $(this).parents(".treeview.active-float").length>0) {
		    		//是否已经展开
					if (!$(this).hasClass("menu-open")) {
						$(this).parent("ul").find(">li.treeview").removeClass("menu-open");
						$(this).parent("ul").find(">li.treeview >ul.treeview-menu").slideUp(activeOptions.animateSpeed);
						$(this).addClass("menu-open");
						$(this).find(">ul.treeview-menu").slideDown(activeOptions.animateSpeed,function(){
							//如果当前是浮动状态，计算调整浮动位置
							if($(this).parents("li.active-float").length>0){
								calculateFloatOffset($(this).parents("li.active-float"));
							}
						});
					} else {
						$(this).removeClass("menu-open");
						$(this).find(">ul.treeview-menu").slideUp(activeOptions.animateSpeed,function(){
							//如果当前是浮动状态，计算调整浮动位置
							if($(this).parents("li.active-float").length>0){
								calculateFloatOffset($(this).parents("li.active-float"));
							}
						});
					}
	    		}
	    		if(activeOptions.autoFix){
	    			window.setTimeout(function(){
	    				$.fn.Layout.fix();
	    				$.fn.Layout.fixSidebar();
	    			},activeOptions.animateSpeed+100);
	    		}
	    	}
	    	if(isModule){
	    		//小屏幕下，点击模块隐藏菜单
				var windowWidth = $(window).width();
				if (windowWidth < $.fn.PushMenu.prototype.options.collapseScreenSize) {
					$.fn.PushMenu.prototype.toggle();
				}
	    	}
	    	e.preventDefault();
	    	e.stopPropagation();
	    	activeOptions.onClickMenu.call(li, {isModule:isModule, data:that, e:e});
	      });
	   });
    }
})(jQuery);
