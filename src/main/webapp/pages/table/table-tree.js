$(function() {
	initTable();
});

/**
 * 初始化表格
 */
function initTable() {
	var $table = $('#myTable');
	$table.bootstrapTable({
		url : 'json/treegrid.json',
		striped : true,
		sidePagination : 'server',
		idField : 'id',
		treeShowField : 'name',
		parentIdField : 'pid',
		columns : [ {
			field : 'ck',
			checkbox : true
		}, {
			field : 'name',
			title : '名称'
		}, {
			field : 'status',
			title : '状态',
			sortable : true,
			align : 'center',
			formatter : 'statusFormatter'
		}, {
			field : 'permissionValue',
			title : '权限值'
		} ],
		onLoadSuccess : function(data) {
			$table.treegrid({
				treeColumn : 1,
				onChange : function() {
					$table.bootstrapTable('resetWidth')
				}
			})
		}
	});
}
function typeFormatter(value, row, index) {
	if (value === 'menu') {
		return '菜单'
	}
	if (value === 'button') {
		return '按钮'
	}
	if (value === 'api') {
		return '接口'
	}
	return '-'
}

function statusFormatter(value, row, index) {
	if (value === 1) {
		return '<span class="label label-success">正常</span>'
	}
	return '<span class="label label-default">锁定</span>'
}
