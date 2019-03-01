<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>基础表格</title>
	<%@ include file="/common/meta.jsp"%>

	<script src="pages/table/table-basic.js"></script>
	<style type="text/css">
	 	#table1 tbody tr:nth-child(even){
			background: #fafafa;
		}
		.bootstrap-table .fixed-table-header{
			background: #fafafa;
		}
	</style>
</head>

<body class="hold-transition skin-blue sidebar-mini">
    <section class="content">
        <div class="panel panel-default">
            <div class="panel-heading">查询条件</div>
            <div class="panel-body">
                <form id="formSearch" class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-1" for="txt_search_departmentname">工号</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" id="text_search_workid">
                        </div>
                        <label class="control-label col-sm-1" for="txt_search_statu">姓名</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" id="text_search_name">
                        </div>
                        <div class="col-sm-4" style="text-align:left;">
                            <button type="button" style="margin-left:50px" id="btn_query" class="btn btn-primary">查询</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>       
    	<div id="toolbar" class="btn-group">
            <button id="btn_add" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
            </button>
            <button id="btn_edit" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
            </button>
            <button id="btn_delete" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
            </button>
        </div>
        <table id="table1"></table>
    </section>
</body>
</html>
