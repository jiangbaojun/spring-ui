<%@ page language="java" pageEncoding="UTF-8"%>

<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
	+ request.getServerName() + ":" + request.getServerPort()
	+ path + "/";
%>
<script type="text/javascript">
	var basePath = '<%=basePath%>';
	var path = '<%=path%>';
</script>
<base href="<%=basePath%>">

<link rel="stylesheet" href="<%=basePath%>plugins/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="<%=basePath%>plugins/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="<%=basePath%>plugins/table/jquery-treegrid/css/jquery.treegrid.css">
<link rel="stylesheet" href="<%=basePath%>plugins/table/bt/bootstrap-table.min.css">
<link rel="stylesheet" href="<%=basePath%>plugins/jQuery-contextMenu/jquery.contextMenu.min.css">
<link rel="stylesheet" href="<%=basePath%>dist/css/AdminLTE.css">
<link rel="stylesheet" href="<%=basePath%>dist/css/skins/skin-blue.css">
<script type="text/javascript" src="<%=basePath%>js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/corejs/core.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/slimScroll/jquery.slimscroll.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/fullscreen/jquery.fullscreen-min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/jQuery-contextMenu/jquery.contextMenu.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/jQuery-contextMenu/jquery.ui.position.min.js"></script>
<script type="text/javascript" src="<%=basePath%>dist/js/adminlte.js"></script>
<!-- 表格相关 -->
<script type="text/javascript" src="<%=basePath%>plugins/table/bt/bootstrap-table.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/table/bt/locale/bootstrap-table-zh-CN.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/table/bt/extensions/treegrid/bootstrap-table-treegrid.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/table/bt/extensions/print/bootstrap-table-print.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/table/bt/extensions/export/bootstrap-table-export.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/table/jquery-treegrid/js/jquery.treegrid.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/table/tableExport.jquery/FileSaver/FileSaver.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/table/tableExport.jquery/js-xlsx/xlsx.core.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/table/tableExport.jquery/jsPDF/jspdf.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/table/tableExport.jquery/jsPDF-AutoTable/jspdf.plugin.autotable.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/table/tableExport.jquery/es6-promise/es6-promise.auto.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/table/tableExport.jquery/html2canvas/html2canvas.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugins/table/tableExport.jquery/tableExport.min.js"></script>


</script>
