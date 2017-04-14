const
	router = new VueRouter({
		routes: [{
			name: 'comp-index',
			path: '/',
			component: 'comp-index',
			meta: {
				libPaths: ['components/index/index']
			}
		}, {
			name: 'p404',
			path: '/404',
			component: {
				template: '<div class="text-center">this is 404!!!</div>'
			}
		}]
	});
//
router.beforeEach(function(to, from, next) {
	if(to['name'] == null) {
		next('/404');
	} else if(to['meta']['deps'] && to['meta']['deps'].length > 0) {
		require(to['meta']['deps'], function() {
			if(to['meta']['libPaths'] && to['meta']['libPaths'].length > 0) {
				require(to['meta']['libPaths'], function() {
					next();
				});
			} else {
				next();
			}
		});
	} else {
		if(to['meta']['libPaths'] && to['meta']['libPaths'].length > 0) {
			require(to['meta']['libPaths'], function() {
				next();
			});
		} else {
			next();
		}
	}
	$('.animate-menu-left').removeClass('animate-menu-open');
});