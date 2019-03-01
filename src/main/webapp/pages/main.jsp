<%@ page language="java" pageEncoding="UTF-8"%>
<!doctype html>
<html>
<head>
	<title>主页</title>
	<%@ include file="/common/meta.jsp"%>
	
	<script src="pages/main.js"></script>
</head>

<!-- <body class="hold-transition skin-blue"> -->
<!-- <body class="hold-transition skin-blue sidebar-mini"> -->
<!-- <body class="hold-transition skin-blue sidebar-mini layout-boxed"> -->
<body class="hold-transition skin-blue sidebar-mini fixed">
<div class="wrapper">
  <!--顶部header-->
  <header class="main-header">
    <!-- Logo -->
    <a href="pages/main.jsp" class="logo">
      <span class="logo-mini"><b>A</b>LT</span>
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </a>
    
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- 折叠展开sidebar按钮-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
	  <!-- 右上导航header -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown messages-menu">
            <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              <span class="label label-success">4</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 4 messages</li>
            </ul>
          </li>
          
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">10</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 10 notifications</li>
              <li class="footer"><a href="#">View all</a></li>
            </ul>
          </li>
          
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag-o"></i>
              <span class="label label-danger">9</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 9 tasks</li>
              <li class="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>
          
          <li class="dropdown user user-menu">
            <a href="#">
              <span class="hidden-xs">Alexander Pierce</span>
            </a>
          </li>
          <!-- exit -->
          <li>
            <a href="#"><i class="fa fa-power-off"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  
  <!-- 左侧sidebar -->
  <aside class="main-sidebar">
    <section class="sidebar">
      <div class="user-panel">
        <div class="pull-left image">
          <img src="images/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- 菜单 -->
      <ul id="sidebarMenu"></ul>
    </section>
  </aside>

  <!-- 主页面内容 -->
  <div class="content-wrapper">
      <section class="content-header">
          <!-- 预览标题 -->
          <h1>
              <span id="viewTitle" class="title">Page Header</span>
              <small id="viewSubTitle">Optional description</small>
          </h1>
          <!--面包屑container-->
          <ol id="breadcrumb" class="breadcrumb"></ol>
      </section>

      <!-- 主页面 -->
      <section id="mainContent" class="content"></section>

      <!--窗口控制条-->
      <div id="windowCtrlBox" class="win-ctrl-box" style="display: none;">
        <div class="box-origin">
          <i class="box-item maximize fa fa-window-maximize" aria-hidden="true"></i>
          <i class="box-item full fa fa-arrows-alt" aria-hidden="true"></i>
        </div>
        <div class="box-restore win-max-box" style="display: none;">
          <i class="box-item restore fa fa-window-restore" aria-hidden="true" ></i>
        </div>
      </div>
  </div>
  
  <!-- 底部footer -->
  <footer class="main-footer">
    <div class="pull-right hidden-xs">
      <b>Version</b> 2.4.0
    </div>
    <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
    reserved.
  </footer>
</div>
</body>
</html>
