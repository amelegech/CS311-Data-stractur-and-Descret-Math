/* eslint-disable require-jsdoc */
"use strict";

/**
 * Employee class
 */
class Employee {
    /**
     * 
     * @param {String} name name of employee
     * @param {Number} salary monthly salary
     * @param {Number} year hired on year
     * @param {Number} month hired on month
     * @param {Number} day hired on day
     */
    constructor(name, salary, year, month, day) {
        this.name = name;
        this.salary = salary;
        this.hireDate = new Date(year, month - 1, day);
    }
}

let employees = [
    new Employee("George", 40000, 1996, 11, 5),
    new Employee("Dave", 50000, 2000, 1, 3),
    new Employee("Richard", 45000, 2001, 2, 7)
];

/**
 * Function to compare Employees by name
 * 
 * @param {Employee} empA one employee to compare
 * @param {Employee} empB other employee that is compared with
 * @returns {Number} Greater than zero if empA is 'bigger' less than zero if empB is bigger
 */
function nameComparator(empA, empB) {
    if (empA.name > empB.name) {
        return 1;
    }
    if (empA.name < empB.name) {
        return -1;
    }
    return 0;
}

employees.sort(nameComparator);

function salaryComparator(salaryA, salaryB) {
    if (salaryA.salery > salaryB.salary) {
        return 1;
    }
    if (salaryA.salary < salaryB.salary) {
        return -1;
    }
    return 0;
}

employees.sort(salaryComparator);

function hireDateComparator(hireDateA, hireDateB) {
    if (hireDateA.hireDate > hireDateB.hireDate) {
        return 1;
    }
    if (hireDateA.hireDate < hireDateB.hireDate) {
        return -1;
    }
    return 0;
}

employees.sort(hireDateComparator);