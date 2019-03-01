/**
 * 主页面js
 */
var menuData = [];
$(function(){
    menuData = [
    	{id:"A001", parentId: "0", title:"仪表盘",subTitle:"Dashboard Preview", type:1, iconClass: "fa fa-dashboard",url: "", orderNum: 1 },
        {id:"A002", parentId: "0", title:"窗口部件",subTitle:"Widgets Preview", type:2, iconClass: "fa fa-th",url: "https://baidu.com",label:[{text:"2",color:"#f39c12 "}], orderNum: 2 },
        {id:"A003", parentId: "0", title:"图表",subTitle:"Charts Preview", type:1, iconClass: "fa fa-pie-chart",url: "",orderNum: 3 },
        {id:"A004", parentId: "0", title:"界面元素",subTitle:"UI Elements Preview", type:1, iconClass: "fa fa-laptop",url: "", label:[{text:"6",color:"green"}],orderNum: 4 },
        {id:"A005", parentId: "0", title:"表单",subTitle:"Form Preview", type:1, iconClass: "fa fa-edit",url: "", orderNum: 5 },
        {id:"A006", parentId: "0", title:"表格",subTitle:"Table Preview", type:1, iconClass: "fa fa-table",url: "", orderNum: 6 },
        {id:"A008", parentId: "0", title:"邮箱",subTitle:"Mailbox Preview", type:2, iconClass: "fa fa-envelope",url: "pagesSimple/mailbox/mailbox.html", label:[{text:"new",color:"#dd4b39 "}], orderNum: 7 },
        {id:"A007", parentId: "0", title:"日历",subTitle:"Calendar Preview", type:2, iconClass: "fa fa-calendar",url: "pagesSimple/calendar.html", orderNum: 8 },
        {id:"A009", parentId: "0", title:"小示例",subTitle:"Examples Preview", type:1, iconClass: "fa fa-folder",url: "", orderNum: 9 },
        {id:"A010", parentId: "0", title:"多级菜单",subTitle:"", type:1, iconClass: "fa fa-folder",url: "", orderNum: 10 },
        {id:"A001-B001", parentId: "A001", title:"Dashboard v1",subTitle:"Dashboard v1 Preview", type:2, iconSrc:"images/icon/10.png", iconClass: "fa fa-circle-o",url: "pagesSimple/dashboard/dashboardv1.html", orderNum: 1 },
        {id:"A001-B002", parentId: "A001", title:"Dashboard v2",subTitle:"Dashboard v2 Preview", type:2, iconSrc:"images/icon/11.png", iconClass: "fa fa-circle-o",url: "pagesSimple/dashboard/dashboardv2.html", orderNum: 2 },
        {id:"A001-B003", parentId: "A001", title:"Dashboard v3",subTitle:"Dashboard v3 Preview", type:2, iconSrc:"images/icon/11.png", iconClass: "fa fa-circle-o",url: "pagesSimple/dashboard/dashboardv3.html", orderNum: 3 },
        {id:"A003-B003", parentId: "A003", title:"ChartJS",subTitle:"ChartJS Preview", type:2, iconSrc:"images/icon/12.png", iconClass: "fa fa-circle-o",url: "pagesSimple/charts/chartjs.html", orderNum: 1 },
        {id:"A003-B004", parentId: "A003", title:"Morris",subTitle:"Morris Preview", type:2, iconSrc:"images/icon/13.png", iconClass: "fa fa-circle-o",url: "pagesSimple/charts/morris.html", orderNum: 2 },
        {id:"A003-B005", parentId: "A003", title:"Flot",subTitle:"Flot Preview", type:2, iconSrc:"images/icon/14.png", iconClass: "fa fa-circle-o",url: "pagesSimple/charts/flot.html", orderNum: 3 },
        {id:"A003-B006", parentId: "A003", title:"Inline",subTitle:"Inline Preview", type:2, iconSrc:"images/icon/15.png", iconClass: "fa fa-circle-o",url: "pagesSimple/charts/inline.html", orderNum: 4 },
        {id:"A003-B007", parentId: "A003", title:"OrgChart",subTitle:"OrgChart Preview", type:2, iconSrc:"images/icon/16.png", iconClass: "fa fa-circle-o",url: "pagesSimple/charts/orgCharts.html", orderNum: 5 },
        {id:"A003-B008", parentId: "A003", title:"eCharts",subTitle:"eCharts Preview", type:2, iconSrc:"images/icon/37.png", iconClass: "fa fa-circle-o",url: "pagesSimple/charts/eCharts.html", orderNum: 6 },
        {id:"A004-B008", parentId: "A004", title:"General",subTitle:"General Preview", type:2, iconSrc:"images/icon/17.png", iconClass: "fa fa-circle-o",url: "pagesSimple/UI/general.html", orderNum: 1 },
        {id:"A004-B009", parentId: "A004", title:"Icons",subTitle:"Icons Preview", type:2, iconSrc:"images/icon/18.png", iconClass: "fa fa-circle-o",url: "pagesSimple/UI/icons.html", orderNum: 2 },
        {id:"A004-B010", parentId: "A004", title:"Buttons",subTitle:"Buttons Preview", type:2, iconSrc:"images/icon/19.png", iconClass: "fa fa-circle-o",url: "pagesSimple/UI/buttons.html", orderNum: 3 },
        {id:"A004-B011", parentId: "A004", title:"Sliders",subTitle:"Sliders Preview", type:2, iconSrc:"images/icon/20.png", iconClass: "fa fa-circle-o",url: "pagesSimple/UI/sliders.html", orderNum: 4 },
        {id:"A004-B012", parentId: "A004", title:"Timeline",subTitle:"Timeline Preview", type:2, iconSrc:"images/icon/21.png", iconClass: "fa fa-circle-o",url: "pagesSimple/UI/timeline.html", orderNum: 5 },
        {id:"A004-B013", parentId: "A004", title:"Modals",subTitle:"Modals Preview", type:2, iconSrc:"images/icon/22.png", iconClass: "fa fa-circle-o",url: "pagesSimple/UI/modals.html", orderNum: 6 },
        {id:"A005-B014", parentId: "A005", title:"General Elements",subTitle:"General Elements Preview", type:2, iconSrc:"images/icon/23.png", iconClass: "fa fa-circle-o",url: "pagesSimple/forms/general.html", orderNum: 1 },
        {id:"A005-B015", parentId: "A005", title:"Advanced Elements",subTitle:"Advanced Elements Preview", type:2, iconSrc:"images/icon/24.png", iconClass: "fa fa-circle-o",url: "pagesSimple/forms/advanced.html", orderNum: 2 },
        {id:"A005-B016", parentId: "A005", title:"Editors",subTitle:"Editors Preview", type:2, iconSrc:"images/icon/25.png", iconClass: "fa fa-circle-o",url: "pagesSimple/forms/editors.html", orderNum: 3 },
        {id:"A006-B0181", parentId: "A006", title:"基础表格",subTitle:"table one", type:2, iconSrc:"images/icon/27.png", iconClass: "fa fa-circle-o",url: "pages/table/table-basic.jsp",label:[{text:"new",color:"#00a65a"}], orderNum: 1 },
        {id:"A006-B0182", parentId: "A006", title:"表格导出",subTitle:"table two", type:2, iconSrc:"images/icon/27.png", iconClass: "fa fa-circle-o",url: "pages/table/table-export.jsp", orderNum: 2 },
        {id:"A006-B0183", parentId: "A006", title:"表格编辑",subTitle:"table three", type:2, iconSrc:"images/icon/27.png", iconClass: "fa fa-circle-o",url: "pages/table/table-edit.jsp", orderNum: 3 },
        {id:"A006-B0184", parentId: "A006", title:"树形表格",subTitle:"table four", type:2, iconSrc:"images/icon/27.png", iconClass: "fa fa-circle-o",url: "pages/table/table-tree.jsp", orderNum: 4 },
        {id:"A009-B019", parentId: "A009", title:"Invoice",subTitle:"Invoice Preview", type:2, iconSrc:"images/icon/28.png", iconClass: "fa fa-circle-o",url: "pagesSimple/examples/invoice.html", orderNum: 1 },
        {id:"A009-B020", parentId: "A009", title:"Profile",subTitle:"Profile Preview", type:2, iconSrc:"images/icon/29.png", iconClass: "fa fa-circle-o",url: "pagesSimple/examples/profile.html", orderNum: 2 },
        {id:"A009-B021", parentId: "A009", title:"Login",subTitle:"Login Preview", type:2, iconSrc:"images/icon/30.png", iconClass: "fa fa-circle-o",url: "pagesSimple/examples/login.html", orderNum: 3 },
        {id:"A009-B022", parentId: "A009", title:"Register",subTitle:"Register Preview", type:2, iconSrc:"images/icon/31.png", iconClass: "fa fa-circle-o",url: "pagesSimple/examples/register.html", orderNum: 4 },
        {id:"A009-B023", parentId: "A009", title:"Lockscreen",subTitle:"Lockscreen Preview", type:2, iconSrc:"images/icon/32.png", iconClass: "fa fa-circle-o",url: "pagesSimple/examples/lockscreen.html", orderNum: 5},
        {id:"A009-B024", parentId: "A009", title:"Error404",subTitle:"Error404 Preview", type:2, iconSrc:"images/icon/33.png", iconClass: "fa fa-circle-o",url: "pagesSimple/examples/404.html", orderNum: 6 },
        {id:"A009-B025", parentId: "A009", title:"Error500",subTitle:"Error500 Preview", type:2, iconSrc:"images/icon/34.png", iconClass: "fa fa-circle-o",url: "pagesSimple/examples/500.html", orderNum: 7 },
        {id:"A009-B026", parentId: "A009", title:"Blank Page",subTitle:"Blank Page Preview", type:2, iconSrc:"images/icon/35.png", iconClass: "fa fa-circle-o",url: "pagesSimple/examples/blank.html", orderNum: 8 },
        {id:"A009-B027", parentId: "A009", title:"Pace Page",subTitle:"Pace Page Preview", type:2, iconSrc:"images/icon/36.png", iconClass: "fa fa-circle-o",url: "pagesSimple/examples/pace.html", orderNum: 9 },
        {id:"A010-B001", parentId: "A010", title:"A-B001",subTitle:"", type:1, iconSrc:"images/icon/36.png", iconClass: "fa fa-circle-o",url: "", orderNum: 1 },
        {id:"A010-B002", parentId: "A010", title:"A-B002",subTitle:"", type:2, iconSrc:"images/icon/36.png", iconClass: "fa fa-circle-o",url: "", orderNum: 2 },
        {id:"B001-C001", parentId: "A010-B001", title:"B-C001",subTitle:"", type:2, iconSrc:"images/icon/36.png", iconClass: "fa fa-circle-o",url: "", orderNum: 1 },
        {id:"B001-C002", parentId: "A010-B001", title:"B-C002",subTitle:"", type:1, iconSrc:"images/icon/36.png", iconClass: "fa fa-circle-o",url: "", orderNum: 2 },
        {id:"C002-D001", parentId: "B001-C002", title:"C-D001",subTitle:"", type:2, iconSrc:"images/icon/36.png", iconClass: "fa fa-circle-o",url: "",label:[{text:"new",color:"#00a65a"}], orderNum: 1 },
        {id:"C002-D002", parentId: "B001-C002", title:"C-D002",subTitle:"", type:1, iconSrc:"images/icon/36.png", iconClass: "fa fa-circle-o",url: "", orderNum: 2 },
        {id:"D002-E001", parentId: "C002-D002", title:"D-E001",subTitle:"", type:2, iconSrc:"images/icon/36.png", iconClass: "fa fa-circle-o",url: "", orderNum: 1 },
        {id:"D002-E002", parentId: "C002-D002", title:"D-E002",subTitle:"", type:2, iconSrc:"images/icon/36.png", iconClass: "fa fa-circle-o",url: "", orderNum: 2 },
        {id:"D002-E003", parentId: "C002-D002", title:"D-E003",subTitle:"", type:2, iconSrc:"images/icon/36.png", iconClass: "fa fa-circle-o",url: "", orderNum: 3 }
    ];
    $("#sidebarMenu").mrkMenu({
    	menuData:menuData,
    	menuRootId:0,
    	hoverAct:"float", //菜单边栏折叠时，鼠标放入响应动作{expand:展开, float:浮动}
    	onComplete: function(){
    		console.log("menu created");
    	},
    	onClickMenu: function(data){
    		console.log(data);
    		if(data.isModule){
    			var node = data.data;
    			//预览标题
    			$("#viewTitle").text(node.title);
    			$("#viewSubTitle").text(node.subTitle);
    			//生成面包屑
    			Breadcrumb.createBreadcrumb($("#breadcrumb"),node.parentId,node.title);
    			//页面展示
    			if(node.url){
    				$("#mainContent").html('<iframe marginwidth="0" marginheight="0" id="mainContentIframe" name="mainContentIframe" class="main-content-frame" src="'+node.url+'"></iframe>');
    			}
    		}
    	},
    	onClickContextMenu: function(data){
    		console.log(data);
    	}
    });

    //窗口控制
    //全屏
    $("#windowCtrlBox .full").click(function(){
        $("#mainContentIframe").fullScreen(true);
    });
    //全屏事件
    $("#mainContentIframe").on("fullscreenchange", function() {
        if($("#mainContentIframe").fullScreen()){
            // 全屏
            $("#windowCtrlBox").hide();
            $("#mainContentIframe").addClass("win-full");
            $("#windowCtrlBox .box-restore").show();
        }else{
            // 取消全屏
            $("#windowCtrlBox").show();
            $("#mainContentIframe").removeClass("win-full");
            $("#windowCtrlBox .box-restore").hide();
        }
    });
    //最大化
    $("#windowCtrlBox .maximize").click(function(){
        $("#mainContentIframe").addClass("win-full");
        $("#windowCtrlBox").addClass("win-max-box");
        $("#windowCtrlBox .maximize").hide();
        $("#windowCtrlBox .box-restore").show();
        $("#windowCtrlBox .box-origin").hide();
        $(document).bind('keydown.esc',function (evt){
            restoreIframe();
        });
    });
    //还原
    $("#windowCtrlBox .restore").click(function(){
        restoreIframe();
        return false;
    });
    initListener();
    // 添加标记
    addTags();
  //临时处理
    temp();
});

function initListener(){
	$(window).on("resize",function(){
		if(document.body.clientWidth<400){ 
			window.resizeTo(400,document.body.clientHeight); 
		}
	});
}

function temp(){
    $(".direct-menu").click(function(){
        $("#windowCtrlBox").show();
    });
}

function restoreIframe(){
    $("#mainContentIframe").removeClass("win-full");
    $("#windowCtrlBox").removeClass("win-max-box");
    $("#windowCtrlBox .maximize").show();
    $("#windowCtrlBox .box-restore").hide();
    $("#windowCtrlBox .box-origin").show();
    $(document).unbind('keydown.esc');
}
function addTags(){
   var target = $("#sidebarMenu");
    target.append('<li class="header">自定义标记</li>');
    target.append('<li class="tag-item"><a href="pagesSimple/tags/tagPage.html"><i class="fa fa-circle-o text-red"></i> <span class="tag-text">Important</span></a></li>');
    target.append('<li class="tag-item"><a href="pagesSimple/tags/tagPage.html"><i class="fa fa-circle-o text-yellow"></i> <span class="tag-text">Warning</span></a></li>');
    target.append('<li class="tag-item"><a href="pagesSimple/tags/tagPage.html"><i class="fa fa-circle-o text-aqua"></i> <span class="tag-text">Information</span></a></li>');

    $(".tag-item").on('click', function (e) {
        var href=$(this).find("a").attr("href");
        $.AdminLTE.options.mainContent.html('<iframe marginwidth="0" marginheight="0" id="mainContentIframe" name="mainContentIframe" class="main-content-frame" src="'+href+'"></iframe>');
        e.preventDefault();
    });
}

var Breadcrumb = {
    /**
     * 创建面包屑
     * @param target 面包屑container
     * @param pid 当前节点（最后一层）的parentId
     * @param title 当前节点（最后一层）的title
     */
    createBreadcrumb: function (target, pid, title) {
      var _this = this;
      target.html("");
      _this.getMiddleBreadcrumb(target, pid);
      target.prepend('<li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>');
      target.append('<li class="active">'+title+'</li>');
    },
    getMiddleBreadcrumb: function (target, pid) {
      var _this = this;
      var data = menuData;
      for(var i=0;i<data.length;i++){
        var item=data[i];
        if(item.id==pid){
          target.prepend('<li><a href="#">'+item.title+'</a></li>');
          _this.getMiddleBreadcrumb(target,item.parentId);
        }
      }
    }
};