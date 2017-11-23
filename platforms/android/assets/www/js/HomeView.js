var HomeView = function (service) {

    var employeeListView;

    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', findByName);
        employeeListView = new EmployeeListView();

    };

    this.initialize();

    this.render = function () {
        this.$el.html(this.template());
        $('.content', this.$el).html(employeeListView.$el);
        return this;
    };

    function findByName() {
        service.findByName($('.search-key').val()).done(function (employees) {
            employeeListView.setEmployees(employees);
        });
    };

}