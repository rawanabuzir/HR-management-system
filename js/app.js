'use strict';
const employee_Array = [];
const mainSec = document.createElement("main");
function calculateSalary(level) {
    switch (level) {
        case "Senior":
            let seniorSalary = Math.floor(1500 + Math.random() * 500);
            return Math.round(seniorSalary - (seniorSalary * 0.075));
        case "Mid-Senior":
            let midSeniorSalary = Math.floor(1000 + Math.random() * 500);
            return Math.round(midSeniorSalary - (midSeniorSalary * 0.075));
        case "Junior":
            let juniorSalary = Math.floor(500 + Math.random() * 500);
            return Math.round(juniorSalary - (juniorSalary * 0.075));
        default:
            return 0;
    }
};
const gazi = {
    id: Math.floor(1000 + Math.random() * 9000),
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    img: "https://ghazi.jpg",
    calculateSalary: function () {
        return calculateSalary(this.level);
    },
    renderInfo: function () {
        document.write("Employee name: " + this.fullName);
        document.write('<br>');
        document.write("Employee salary: " + this.calculateSalary());
        document.write('<br>');
        document.write('<br>');
    }
};
const lana = {
    id: Math.floor(1000 + Math.random() * 9000),
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    img: "https://lana.jpg",
    calculateSalary: function () {
        return calculateSalary(this.level);
    },
    renderInfo: function () {
        document.write("Employee name: " + this.fullName);
        document.write('<br>');
        document.write("Employee salary: " + this.calculateSalary());
        document.write('<br>');
        document.write('<br>');
    }
};
const tamara = {
    id: Math.floor(1000 + Math.random() * 9000),
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior",
    img: "https:/tamara.jpg",
    calculateSalary: function () {
        return calculateSalary(this.level);
    },
    renderInfo: function () {
        document.write("Employee name: " + this.fullName);
        document.write('<br>');
        document.write("Employee salary: " + this.calculateSalary());
        document.write('<br>');
        document.write('<br>');
    }
};
const safi = {
    id: Math.floor(1000 + Math.random() * 9000),
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    img: "https://Safi.jpg",
    calculateSalary: function () {
        return calculateSalary(this.level);
    },
    renderInfo: function () {
        document.write("Employee name: " + this.fullName);
        document.write('<br>');
        document.write("Employee salary: " + this.calculateSalary());
        document.write('<br>');
        document.write('<br>');
    }
};
const omar = {
    id: Math.floor(1000 + Math.random() * 9000),
    fullName: "Omar Ziad",
    department: "Development",
    level: "Senior",
    img: "https://omar.jpg",
    calculateSalary: function () {
        return calculateSalary(this.level);
    },
    renderInfo: function () {
        document.write("Employee name: " + this.fullName);
        document.write('<br>');
        document.write("Employee salary: " + this.calculateSalary());
        document.write('<br>');
        document.write('<br>');
    }
};
employee_Array.push(gazi, lana, tamara, safi, omar);

function renderHomePage() {
    for (let i = 0; i < employee_Array.length; i++) {
        employee_Array[i].renderInfo();
    }
}
renderHomePage();