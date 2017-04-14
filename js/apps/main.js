(function(win) {
	require.config({
		urlArgs: "bust=" + new Date().getTime(),
		baseUrl: 'js/',
		paths: {
			"jquery": "plugins/jquery/jquery.min",
			"jqueryQuery": "plugins/jquery/jquery.query",
			"jqueryForm": "plugins/jquery/jquery.form",
			"md5": "plugins/jquery/jquery.md5",
			"bootstrap": "plugins/bootstrap/bootstrap.min",
			"ztree": "plugins/zTree_v3/js/jquery.ztree.all-3.5.min",
			"highcharts": "plugins/highcharts/js/highcharts",
			"jquerySidebarMenu":"plugins/sidebar-menu-master/sidebar-menu"
		},
		map: {
			'*': {
				'css': 'plugins/require/css',
				'respond': 'plugins/require/respond',
				'text': 'plugins/require/text',
				'normalize': 'plugins/require/normalize',
			}
		},
		shim: {
			"jqueryQuery": {
				deps: ["jquery"],
				exports: "jqueryQuery"
			},
			"jqueryQuery": {
				deps: ["jquery"],
				exports: "jqueryQuery"
			},
			"md5": {
				deps: ["jquery"],
				exports: "md5"
			},
			"jqueryForm": {
				deps: ["jquery"],
				exports: "jqueryForm"
			},
			"bootstrap": {
				deps: ["jquery", "css!plugins/bootstrap/bootstrap.min.css"],
				exports: "bootstrap"
			},
			"ztree": {
				deps: ["css!plugins/zTree_v3/css/zTreeStyle/zTreeStyle.css"],
				exports: "ztree"
			},
			"highcharts": {
				deps: ["jquery"],
				exports: "highcharts"
			},
			"jquerySidebarMenu": {
				deps: ["jquery","css!plugins/sidebar-menu-master/sidebar-menu.css"],
				exports: "jquerySidebarMenu"
			}
		}
	});
	require(['jquery', 'bootstrap', 'apps/vue-route-config','jquerySidebarMenu', 'components/nav/nav'], function() {
		require(['apps/app', 'css!apps/css/app.css']);
	});
})(window);