<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>表格导出</title>
	<%@ include file="/common/meta.jsp"%>
	
	<script src="pages/table/table-export.js"></script>
	<style type="text/css">
	 	#myTable tbody tr:nth-child(even){
			background: #fafafa;
		}
		.bootstrap-table .fixed-table-header{
			background: #fafafa;
		}
	</style>
</head>

<body class="hold-transition skin-blue sidebar-mini">
    <section class="content">
	    <div id="toolbar">
			<select class="form-control">
			    <option value="basic">当前页数据</option>
			    <option value="all">所有数据</option>
			    <option value="selected">已选中数据</option>
			</select>
		</div>
        <table id="myTable"></table>
    </section>
</body>
</html>
