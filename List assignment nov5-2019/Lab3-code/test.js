"use strict";
/* global describe */
/* global it */
/* global assert */
/* global Employee */
/* global nameComparator */

describe("nameComparator", function() {
    it("Compares Employees by name", function() {
        assert.equal(employees.sort(nameComparator)[0].name, "Dave")
    });
});
describe("salaryComparator", function() {
    it("Compares Employees by name", function() {
        assert.equal(employees.sort(salaryComparator)[0].salary, "40000")
    });
});
describe("salaryComparator", function() {
    it("Compares Employees by name", function() {
        assert.equal(employees.sort(hireDateComparator)[0].name, "George")
    });
});