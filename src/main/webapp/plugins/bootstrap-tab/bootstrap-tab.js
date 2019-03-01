/**
 * 标签页布局 	
 * inspiration bootstrap-tab
 */
(function ($, window, document, undefined) {
    'use strict';

    var pluginName = 'tabs';

    /**
     * 入口方法
     */
    $.fn[pluginName] = function (options,params) {
        var self = $(this);
        if (this == null)
            return null;
        var data = this.data(pluginName);
        if (!data) {
            data = new BaseTab(this, options);
            self.data(pluginName, data);
        }
       //扩展方法
        if (typeof options == "string") {
        	data[options];
            var method = data[options];
            if (method) return method(data, params);
        }
        return data;
    };

    /**
     * 主类
     */
    var BaseTab = function (element, options) {
        this.$element = $(element);
        this.options = $.extend(true, {}, this.default, options);
        this.init();
        this.initListener(this);
    }

    /**
     * 默认配置
     */
    BaseTab.prototype.default = {
    	//选择标签事件
    	onSelect:function(){}
    }
    
    /**
     * 初始化事件
     */
    BaseTab.prototype.initListener = function(self){
    	//窗口改变事件
    	$(window).on("resize",function(){
    		if(document.body.clientWidth<400){ 
    			window.resizeTo(400,document.body.clientHeight); 
    		}
    		//优化标签位置
            self.optimizeTabPosition(self);
    	});
    	//鼠标右键事件
    	$.contextMenu({
             selector: 'li.tab-item',
             events: {
                 show : function(options){
                	 var li = $(options.$trigger);
                	 var href = li.find(">a").attr("href");
                	 var curId = href.substring(1);
                	 self.showTab(self,curId);
                	 if(li.hasClass("close-able")){
                		 options.items.close.disabled = false;
                	 }else{
                		 options.items.close.disabled = true;
                	 }
                 }
             },
             callback: function(key, options) {
            	 var li = $(options.$trigger);
            	 var href = li.find(">a").attr("href");
            	 var curId = href.substring(1);
                 if(key=="close"){
                	 if(li.hasClass("close-able")){
                		 self.remove(self,curId);
                		 self.showTabFirst(self);
                	 }
                 }else if(key=="reload"){
                	 self.reload(self,curId);
                 }else if(key=="closeOther"){
                	 var lis = li.parents("ul.nav-tabs:first").find("li.tab-item.close-able");
                	 lis.each(function(){
                		 var href = $(this).find(">a").attr("href");
                    	 var id = href.substring(1);
                    	 if(id!=curId){
                    		 self.remove(self,id);
                    	 }
                	 });
                 }else if(key=="closeAll"){
                	 var lis = li.parents("ul.nav-tabs:first").find("li.tab-item.close-able");
                	 lis.each(function(i){
                		 var href = $(this).find(">a").attr("href");
                    	 var id = href.substring(1);
                		 self.remove(self,id);
                		 if(i==lis.length-1){
                			 //选择第一个
                			 self.showTabFirst(self);
                		 }
                	 });
                 }
             },
             items: {
                 "close": {name: "关闭", icon: "fa-close"},
                 "reload": {name: "重载", icon: "fa-refresh"},
                 "sep1": "------",
                 "closeOther": {name: "关闭其他", icon: "fa-window-close-o"},
                 "closeAll": {name: "关闭所有", icon: "fa-window-close"}
             }
        });
    }

    /**
     * 结构模板
     */
    BaseTab.prototype.template = {
        ul_nav: '<ul id="tabHead"  class="nav nav-tabs"></ul>',
        ul_li: '<li class="tab-item"><a href="#{0}" data-toggle="tab"><span class="tab-title">{1}</span></a></li>',
        ul_li_hide: '<li class="tab-item" class="active" style="display:none"><a href="#" data-toggle="tab"><span class="tab-title">{0}</span></a></li>',
        ul_li_drop: '<li class="dropdown" id="tabDropdownLi"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bars" aria-hidden="true"></i> <b class="caret"></b></a><ul id="tabDropdownUl" class="dropdown-menu"></ul></li>',
        ul_li_close: '<i class="fa fa-remove closeable" style="cursor:pointer;padding-left:3px;" title="关闭"></i>',
        div_content: '<div id="tabContent" class="tab-content"></div>',
        div_content_panel: '<div class="tab-pane fade" id="{0}"></div>'
    }

    /**
     * 初始化
     */
    BaseTab.prototype.init = function () {
        //清除原来的tab页
        this.$element.html("");
        this.builder();
    }

    /**
     * 使用模板搭建页面结构
     */
    BaseTab.prototype.builder = function () {
        var ul_nav = $(this.template.ul_nav);
        var div_content = $(this.template.div_content);
        this.$element.append(ul_nav);
        this.$element.append(div_content);
    }

    /**
     * 新增一个tab页
     */
    BaseTab.prototype.addTab=function (self,obj) {
    	if(self.$element.find(".nav-tabs li a[href='#" + obj.id + "']").length>0){
    		self.$element.find(".nav-tabs li a[href='#" + obj.id + "']").tab("show");
    		return;
    	}
        //添加tab标题部分
        var ul_li = $(self.template.ul_li.format(obj.id, obj.text));
        ul_li.data("data",obj);
        //如果可关闭,插入关闭图标，并绑定关闭事件
        if (obj.closeable) {
        	ul_li.addClass("close-able");
            var ul_li_close = $(self.template.ul_li_close);
            ul_li.find("a").append(ul_li_close);
            ul_li.find("a").append("&nbsp;");
        }
        //li添加事件，确保只有一个选择
        ul_li.click(function(e){
        	var activeId = self.getCurrentTabId(self);
        	var href = $(this).find(">a").attr("href");
        	var curId = href.substring(1);
        	self.options.onSelect.call(this,$(this).data("data"));
        	//点击当前活动标签不做处理
        	if(activeId==curId){
        		e.preventDefault();
     	        e.stopPropagation();
        		return;
        	}
        	self.$element.find(".nav-tabs:eq(0)").find("li.tab-item").removeClass("active");
        	self.$element.find(".nav-tabs:eq(0)").find("li.tab-item>a").attr("aria-expanded","false");
        	$(this).find(">a").tab("show");
        	//折叠更多下拉
        	self.$element.find("li#tabDropdownLi").removeClass("open");
        	self.$element.find("li#tabDropdownLi>a").attr("aria-expanded","false");
        	e.preventDefault();
 	        e.stopPropagation();
        });
        //本次添加tab溢出边界
        if(self.isOverstepBoundary(self,obj.text,null,true)){
        	if(self.$element.find(".nav-tabs:eq(0) #tabDropdownLi").length<1){
        		var dropLi = $(self.template.ul_li_drop);
        		self.$element.find(".nav-tabs:eq(0)").append(dropLi);
        	}
        	self.$element.find(".nav-tabs:eq(0) #tabDropdownUl").prepend(ul_li);
        }else{
        	var dropLi = self.$element.find(".nav-tabs:eq(0) #tabDropdownLi");
        	if(dropLi.length>0){
        		dropLi.before(ul_li);
        	}else{
        		self.$element.find(".nav-tabs:eq(0)").append(ul_li);
        	}
        }
        
        //添加tab内容部分
        var div_content_panel = $(self.template.div_content_panel.format(obj.id));
        self.$element.find(".tab-content:eq(0)").append(div_content_panel);
        if(obj.url){
        	$(div_content_panel).html('<iframe marginwidth="0" marginheight="0" name="mainContentIframe" class="main-content-frame" src="'+obj.url+'"></iframe>');
        }else{
        	var textContent = obj.html?obj.html:"";
        	$(div_content_panel).html('<div class="text-content">'+textContent+'</div>');
        }
        //关闭事件
        if(obj.closeable){
            self.$element.find(".nav-tabs li a[href='#" + obj.id + "'] i.closeable").click(function (e) {
                var href = $(this).parents("a").attr("href").substring(1);
                if(self.getCurrentTabId(self)==href){
                	//关闭的是当前活动标签，显示第一个
                	setTimeout(function(){
                		self.showTabFirst(self);
                	},100);
                }
                //删除当前标签
                $(this).parent().parent("li.tab-item").remove();
                self.$element.find(".tab-content #" + href).remove();
                //最后更多标签，删除更多
                if(self.$element.find("ul#tabDropdownUl").find(">li").length<1){
                	self.$element.find("li#tabDropdownLi").remove();
                }
                //优化标签位置
                self.optimizeTabPosition(self);
                e.preventDefault();
    	        e.stopPropagation();
            });
        }
        self.$element.find(".nav-tabs a[href='#" + obj.id + "']").tab("show");
    }

    /**
     * tab标签部分是否超出边界
     * {text:新加标签文本，removeId:移除标签id,forceCalcMore：没有more强制计算一个more标签宽度}
     */
    BaseTab.prototype.isOverstepBoundary=function (self,text,removeId,forceCalcMore) {
    	var tabHead = self.$element.find(".nav-tabs:eq(0)");
    	//标签容器总宽度
    	var tabHeadWidth = tabHead.width()-4;
    	//更多标签li宽度
    	var tabMoreWidth = 0;
    	if(self.$element.find(".nav-tabs:eq(0) #tabDropdownLi").length==1 || forceCalcMore){
    		var tempLi= $(self.template.ul_li_drop);
    		self.$element.find(".nav-tabs:eq(0)").append(tempLi);
    		tabMoreWidth = tempLi.outerWidth();
    		tempLi.remove();
    	}
    	//计算再次添加标签的宽度
    	var tabAddWidth = 0;
    	if(text){
    		var tempLi= $(self.template.ul_li_hide.format(text));
    		self.$element.find(".nav-tabs:eq(0)").append(tempLi);
    		tabAddWidth = tempLi.outerWidth()+15;
    		tempLi.remove();
    	}
    	//计算移除标签宽度
    	var tabRemoveWidth = 0;
    	var removeLi = self.$element.find("li.tab-item >a[href='#"+removeId+"']").parent("li");
    	if(removeLi.length==1){
    		tabRemoveWidth = removeLi.outerWidth();
    	}
    	//计算现有标签总宽度
    	var liWidthCount = 0;
    	var headLis = tabHead.find(">li:not(#tabDropdownLi)")
    	if(headLis.length>0){
    		headLis.each(function(){
    			liWidthCount += $(this).outerWidth();
    		});
    	}
    	//标签是否溢出tabhead
		if(tabHeadWidth<(liWidthCount-tabRemoveWidth+tabAddWidth+tabMoreWidth)){
			return true;
		}
    	return false;
    }
    
    /**
     * 优化标签位置（更多和直接显示）
     */
    BaseTab.prototype.optimizeTabPosition=function (self) {
    	var dropLi = self.$element.find(".nav-tabs:eq(0) #tabDropdownLi");
    	if(self.isOverstepBoundary(self)){
    		//当前已经溢出，做正向调整（直接显示移动到更多）
    		var headLis = self.$element.find(".nav-tabs:eq(0) >li:not(#tabDropdownLi)");
    		if(dropLi.length<1){
    			dropLi = $(self.template.ul_li_drop);
        		self.$element.find(".nav-tabs:eq(0)").append(dropLi);
    		}
    		//先处理一次
    		dropLi.find(">ul").prepend(headLis.last());
			for(var i=headLis.length-2;i>=0;i--){
				var curLi = headLis.eq(i);
				if(curLi.length>0){
					if(self.isOverstepBoundary(self)){
						dropLi.find(">ul").prepend(curLi);
					}else{
						return;
					}
				}
			}
    	}else{
    		//当前还没有溢出，做反向调整（更多移动到直接显示）
    		if(dropLi.length<1){
    			return;
    		}
    		var dropLis = dropLi.find(">ul>li");
        	var length = dropLis.length;
        	if(length>0){
        		dropLis.each(function(i){
        			var curText = $(this).find("a>span.tab-title").text();
        			if(!self.isOverstepBoundary(self,curText)){
    					dropLi.before($(this));
    					if(i==length-1 && dropLi.find("li.tab-item").length<1){
    						//最后一个more内部调整标签，删除more标签
    						dropLi.remove();
    					}
    				}else{
    					return;
    				}
        		});
        	}
    	}
    }
    
    /**
     * 根据id获取标签名
     */
    BaseTab.prototype.find=function (self,tabId) {
        return self.$element.find(".nav-tabs li a[href='#" + tabId + "']").text();
    }
    
    /**
     * 根据id删除标签
     */
    BaseTab.prototype.remove=function (self,tabId) {
        $("#" + tabId).remove();
        self.$element.find(".nav-tabs li a[href='#" + tabId + "']").parents("li").remove();
    }
    
    /**
     * 刷新标签页内容
     */
    BaseTab.prototype.reload=function (self,tabId) {
    	var iframe = $("#" + tabId).find("iframe:first");
    	iframe.attr('src', iframe.attr('src'));
    }

    /**
     * 根据id设置活动标签（显示指定标签）
     */
    BaseTab.prototype.showTab=function (self,tabId) {
    	self.$element.find(".nav-tabs li a[href='#" + tabId + "']").tab("show");
    }
    
    /**
     * 显示第一个标签
     */
    BaseTab.prototype.showTabFirst=function (self) {
    	self.$element.find(".nav-tabs li.tab-item:eq(0) a").tab("show");
    }

    /**
     * 获取当前活动标签页的ID
     */
    BaseTab.prototype.getCurrentTabId=function (self) {
        var href=self.$element.find(".nav-tabs li.tab-item.active a").attr("href");
        href=href.substring(1);
        return href;
    }

    String.prototype.format = function () {
        if (arguments.length == 0) return this;
        for (var s = this, i = 0; i < arguments.length; i++)
            s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
        return s;
    };
})(jQuery, window, document)
