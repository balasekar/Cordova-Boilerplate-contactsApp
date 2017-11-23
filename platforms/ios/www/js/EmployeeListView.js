var EmployeeListView = function () {

    var employees;

    this.render = function () {
        this.$el.html(this.template(employees));
        return this;
    };

    this.setEmployees = function (list) {
        employees = list;
        this.render();
    }

    this.initialize = function () {
        this.$el = $('<div/>');
        this.render();
    };
    this.initialize();

}