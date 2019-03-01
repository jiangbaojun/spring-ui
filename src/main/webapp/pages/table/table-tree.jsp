<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>树形表格</title>
	<%@ include file="/common/meta.jsp"%>
	
	<script src="pages/table/table-tree.js"></script>
	<style type="text/css">
	 	#myTable tbody tr:nth-child(even){
			background: #fafafa;
		}
		.bootstrap-table thead tr{
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
