<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>编辑表格</title>
	<%@ include file="/common/meta.jsp"%>
	
	<script src="plugins/table/bt/extensions/editable/bootstrap-table-editable.js"></script>
 	<script src="plugins/table/x.editable/bootstrap3-editable/js/bootstrap-editable.min.js"></script>
	<script src="pages/table/table-edit.js"></script>
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
        <table id="myTable"></table>
    </section>
</body>
</html>
