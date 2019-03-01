$(function () {
	initTable();
});

/**
 * 初始化表格
 */
function initTable() {
    $('#myTable').bootstrapTable({
        url: 'demo/selectList.do',         //请求后台的URL（*）
        method: 'get',                      //请求方式（*）
        toolbar: '#toolbar',                //工具按钮用哪个容器
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        queryParams : function(params) {	//上传服务器的参数
    		var temp = {
    			//每页显示数量
    			limit: params.limit, 
    			//数据起始索引
    			offset: params.offset,
    			//当前页码 
    			page: (params.offset / params.limit) + 1,
    			//排序字段
    			sort: params.sort,
    			//排序方式(desc,asc)
    			order: params.order
    		};
    		return temp;
    	},
    	pagination: true,                   //是否显示分页（*）
        sortable: true,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
    	onlyInfoPagination:false,			//是否仅仅显示分页信息，不显示分页导航
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber:1,                       //初始化加载第一页，默认第一页
        pageSize: 10,                       //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: false,
        searchOnEnterKey: true,				//回车触发search，否则自动
        showColumns: true,                  //是否显示所有的列
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        height: 410,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "workId",                 //每一行的唯一标识，一般为主键列
        showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                   //是否显示父子表
        editable: true,
        columns : [
        	{checkbox: true},
            {title:'工号', field:'workId', sortable:true},
            {title:'姓名', field:'xm',editable:{},sortable:true},
            {title:'手机', field:'sj',editable:{mode:"inline"}},
            {title:'入职日期', field:'rzrq', editable:{type:"date",format:"yyyy.mm.dd"},sortable:true}, 
            {title:'职务', field :'zw'},
            {title:'部门', field :'bm', editable:{
            	type:"select",
           	 	source: [
                    {value: 1, text: '财务部'},
                    {value: 2, text: '人力部'},
                    {value: 3, text: '市场部'},
                    {value: "研发部", text: '研发部'}
                ]
           }},
            {title:'操作', field :'_opt', formatter:format }
        ]
    });
}

function format(value, row, index){
	var opt = "<a href='javascript:void(0)'>添加  </a>"+
	"<a href='javascript:void(0)'>编辑  </a>"+
	"<a href='javascript:void(0)'>删除</a>";
	return opt;
}

