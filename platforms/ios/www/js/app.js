// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
    EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());
    var service = new EmployeeService();
    var slider = new PageSlider($('body'));    
    service.initialize().done(function () {
        router.addRoute('', function() {
            slider.slidePage(new HomeView(service).render().$el);
        });
        router.addRoute('employees/:id', function (id) {
            service.findById(parseInt(id)).done(function (employee) {
                slider.slidePage(new EmployeeView(employee).render().$el);
            });
        });
        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */

    /* ---------------------------------- Local Functions ---------------------------------- */

    document.addEventListener('deviceready', function () {
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
        FastClick.attach(document.body);
        StatusBar.overlaysWebView(false);
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();
    }, false);
}());