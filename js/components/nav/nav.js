/**
 * 
 */
Vue.component('comp-nav', {
	props: ['params'],
	computed: {
		getUserInfo: function() {
			return this.params;
		},
	},
	mounted: function() {
		console.log(this.params)
		$.sidebarMenu($('.sidebar-menu'));
	},
	methods: {
		showLeftMenu: function() {
			if(this.getUserInfo.auth == true){
				$('.animate-menu-left').toggleClass('animate-menu-open');
			}
		}
	},
	template: '\
		<div>\
			<nav class="navbar-static-top navbar-default navbar-fixed-top navbar-cdhy" role="navigation">\
				<div class="container">\
					<div class="navbar-header">\
					    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">\
					        <span class="icon-bar"></span>\
					        <span class="icon-bar"></span>\
					        <span class="icon-bar"></span>\
				        </button>\
				        <a class="navbar-brand glyphicon glyphicon-th-list" v-on:click="showLeftMenu" role="menu"></a>\
				        <span class="navbar-brand navbar-title">沪友电子发票平台</span>\
				    </div>\
				    <div class="collapse navbar-collapse" id="navbar-collapse-1">\
						<ul class="nav navbar-nav navbar-right">\
					        <li>\
					        	<a>{{getUserInfo.user}}</a>\
					        </li>\
					        <li>\
					        	<a title="修改密码" class="cpointer"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> 修改密码</a>\
					        </li>\
					        <li>\
					        	<a title="帮助" class="cpointer"><span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span> 帮助</a>\
					        </li>\
					        <li>\
					        	<a title="退出" class="cpointer"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> 退出</a>\
					        </li>\
				        </ul>\
					</div>\
				</div>\
			</nav>\
			\
			  <nav class="animate-menu animate-menu-left">\
			    <ul class="sidebar-menu">\
			      <li class="sidebar-header" role="menu">导航菜单</li>\
			      <li>\
			        <a href="#">\
			          <i class="fa fa-dashboard"></i> <span>Dashboard</span> <i class="fa fa-angle-left pull-right"></i>\
			        </a>\
			        <ul class="sidebar-submenu" role="menu">\
			          <li><router-link to="/warehouse"><i class="fa fa-circle-o"></i><span>啊实打实</span></router-link></li>\
			          <li><a href="#/index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>\
			        </ul>\
			      </li>\
				      <li>\
				        <a href="#">\
				          <i class="fa fa-files-o"></i>\
				          <span>Layout Options</span>\
				          <i class="fa fa-angle-left pull-right"></i>\
				        </a>\
				        <ul class="sidebar-submenu" style="display: none;">\
				          <li><a href="top-nav.html"><i class="fa fa-circle-o"></i> Top Navigation</a></li>\
				          <li><a href="boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>\
				          <li><a href="fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>\
				          <li class=""><a href="collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a>\
				          </li>\
				        </ul>\
				      </li>\
				      \
				      <li>\
				        <a href="#">\
				          <i class="fa fa-files-o"></i>\
				          <span>Layout Options</span>\
				          <span class="label label-primary pull-right">4</span>\
				        </a>\
				        <ul class="sidebar-submenu" style="display: none;">\
				          <li><a href="top-nav.html"><i class="fa fa-circle-o"></i> Top Navigation</a></li>\
				          <li><a href="boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>\
				          <li><a href="fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>\
				          <li class=""><a href="collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a>\
				          </li>\
				        </ul>\
				      </li>\
				      <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>\
				      <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>\
				      <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>\
				    </ul>\
				  </nav>\
				  \
		</div>'

});