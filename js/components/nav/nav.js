/**
 * 
 */
Vue.component('comp-nav', {
	data: function(){
		return {
			userInfo : {
				user : '',
				pwd : '',
				imgcode : '',
				auth : false,
				authMsg : ''
			}
		};
	},
	mounted:function () {
		$.sidebarMenu($('.sidebar-menu'));
		//$('.animate-menu-left').removeClass('animate-menu-open');
	},
	methods : {
		authUserShow : function() {
			$('#auth-Modal').modal('show');
			this.userInfo.authMsg = '';
		},
		flushImgcode :function(event){
			$(event.target).attr('src','http://192.168.0.248/ei_access/randCodeImage?t='+new Date().getTime());
		},
		authUser:function(event){
			var _this = this;
			var data = {
					user:_this.userInfo.user,
					pwd:_this.userInfo.pwd,
					randCode:_this.userInfo.imgcode
			};
			_this.$parent.post({
				url : 'access/login.do',
				data : data,
				lock:function(){
					$(event.target).button('loading');
				},
				unlock:function(){
					$(event.target).button('reset');
				},
				success:function(res){
					_this.userInfo.auth = true;
					_this.userInfo.pwd = '';
					$('#auth-Modal').modal('hide');
				},
				error:function(res){
					_this.userInfo.authMsg = res;
				}
			});
		},
		showLeftMenu:function(){
			$('.animate-menu-left').toggleClass('animate-menu-open');
		}
	},
	template:'\
		<div>\
			<nav class="navbar-static-top navbar-default navbar-fixed-top" role="navigation">\
				<div class="container-fluid">\
					<div class="navbar-header">\
				        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse-1" aria-expanded="false">\
				           <span class="sr-only">Toggle navigation</span>\
				           <span class="icon-bar"></span>\
				           <span class="icon-bar"></span>\
				           <span class="icon-bar"></span>\
				        </button>\
				        <a class="navbar-brand glyphicon glyphicon-th-list" v-on:click="showLeftMenu" role="menu"></a>\
				    </div>\
				    <div class="collapse navbar-collapse" id="bs-navbar-collapse-1">\
						<ul class="nav navbar-nav">\
							<li class="dropdown">\
								<a  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">基本信息 <span class="caret"></span></a>\
								<ul class="dropdown-menu">\
									<li><router-link to="/warehouse">组织架构</router-link></li>\
									<li><router-link to="/purchase">用户管理</router-link></li>\
								</ul>\
							</li>\
							<li class="dropdown">\
								<a  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">企业管理 <span class="caret"></span></a>\
								<ul class="dropdown-menu">\
									<li><router-link to="/warehouse">企业信息管理</router-link></li>\
									<li><router-link to="/purchase">企业证人审核</router-link></li>\
									<li><router-link to="/purchase">税控设备审核</router-link></li>\
									<li><router-link to="/purchase">CA签章审核</router-link></li>\
									<li><router-link to="/purchase">企业信息变更</router-link></li>\
								</ul>\
							</li>\
						</ul>\
						<ul class="nav navbar-nav navbar-right">\
					        <li>\
					        	<a v-on:click="authUserShow" v-if="userInfo.auth==false">登录</a>\
					        	<a v-if="userInfo.auth==true">{{userInfo.user}}</a>\
					        </li>\
				        </ul>\
					</div>\
				</div>\
			</nav>\
			\
  <nav class="animate-menu animate-menu-left">\
    <ul class="sidebar-menu">\
      <li class="sidebar-header" role="menu">MAIN NAVIGATION</li>\
      <li>\
        <a href="#">\
          <i class="fa fa-dashboard"></i> <span>Dashboard</span> <i class="fa fa-angle-left pull-right"></i>\
        </a>\
        <ul class="sidebar-submenu" role="menu">\
          <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>\
          <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>\
        </ul>\
      </li>\
      <li role="menu">\
        <a href="#" >\
          <i class="fa fa-files-o"></i>\
          <span>Layout Options</span>\
          <span class="label label-primary pull-right">4</span>\
        </a>\
        <ul class="sidebar-submenu" style="display: none;">\
          <li role="menu"><a href="top-nav.html"><i class="fa fa-circle-o"></i> Top Navigation</a></li>\
          <li role="menu"><a href="boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>\
          <li role="menu"><a href="fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>\
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
							          <li><a href="collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a>\
							          </li>\
							        </ul>\
							      </li>\
			        </ul>\
			      </li>\
        </ul>\
      </li>\
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
      <li>\
        <a href="../widgets.html">\
          <i class="fa fa-th"></i> <span>Widgets</span>\
          <small class="label pull-right label-info">new</small>\
        </a>\
      </li>\
      <li><a href="../../documentation/index.html"><i class="fa fa-book"></i> <span>Documentation</span></a></li>\
      <li class="sidebar-header">LABELS</li>\
      <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>\
      <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>\
      <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>\
    </ul>\
  </nav>\
			\
			<div class="modal fade" tabindex="-1" role="dialog" id="auth-Modal">\
			  <div class="modal-dialog" role="document">\
			    <div class="modal-content">\
			      <div class="modal-header">\
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
			        <h4 class="modal-title">Auth</h4>\
			      </div>\
			      <div class="modal-body">\
		      			<div class="form-group">\
		      				<label for="userInfo-user">Name</label>\
						    <input class="form-control" id="userInfo-user" v-model="userInfo.user" placeholder="your Username"/>\
						</div>\
						<div class="form-group">\
							<label for="userInfo-pwd">Password</label>\
						    <input type="password" class="form-control" id="userInfo-pwd" v-model="userInfo.pwd" placeholder="your Password"/>\
						</div>\
						<div class="form-group">\
					     	<label for="userInfo-imgcode">Imgcode</label>\
					    	<input class="form-control" id="userInfo-imgcode" v-model="userInfo.imgcode" placeholder="your Img Code"/>\
					    	<img src="http://192.168.0.248/ei_access/randCodeImage" v-on:click="flushImgcode">\
						</div>\
			      </div>\
			      <div class="modal-footer">\
			      	<span style="color:red;margin-right:30px;">{{userInfo.authMsg}}</span>\
			        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
			        <button type="button" class="btn btn-primary" v-on:click="authUser">Auth DO</button>\
			      </div>\
			    </div>\
			  </div>\
			</div>\
		</div>'

});
