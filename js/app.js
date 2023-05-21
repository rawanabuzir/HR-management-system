'use strict';
const employee_Array = [];
const mainSec = document.createElement("main");



function calculateSalary(level) {

    switch (level) {
        case "Senior":
            let seniorSalary = Math.floor(1500 + Math.random() * 500);
            // let seniorSalary = Math.floor(Math.random() * (2000 - 1500) + 1500);
            console.log(seniorSalary);
            return Math.round(seniorSalary - (seniorSalary * 0.075));

        case "Mid-Senior":
            let midSeniorSalary = Math.floor(1000 + Math.random() * 500);
            // let midSeniorSalary = Math.floor(Math.random() * (1500 - 1000) + 1000);
            return Math.round(midSeniorSalary - (midSeniorSalary * 0.075));
        case "Junior":
            let juniorSalary = Math.floor(500 + Math.random() * 500);
            // let juniorSalary = Math.floor(Math.random() * (1000 - 500) + 500);
            return Math.round(juniorSalary - (juniorSalary * 0.075));

        default:
            console.log(level);
            return 0;
    }
};
function id() {
    Math.floor(1000 + Math.random() * 9000)
};

const gazi = {
    id: id(),
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    img: "./assets/img1.png",
    salary: 0,
    // calculateSalary: function () {
    //     return calculateSalary(this.level);
    // },
    renderInfo: function () {
        document.write("Employee name: " + this.fullName);
        document.write('<br>');
        document.write("Employee salary: " + this.salary);
        document.write('<br>');
        document.write('<br>');
    }
}; gazi.salary = calculateSalary(gazi.level);
let lana = {
    id: id(),
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    img: "./assets/img2.png",
    salary: 0,
    // salary: calculateSalary(this.level),
    renderInfo: function () {
        document.write("Employee name: " + this.fullName);
        document.write('<br>');
        document.write("Employee salary: " + this.salary);
        console.log(this.level);
        document.write('<br>');
        document.write('<br>');
    }
};
lana.salary = calculateSalary(lana.level);
const tamara = {
    id: id(),
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior",
    img: "./assets/img3.png",
    salary: 0,
    // calculateSalary: function () {
    //     return calculateSalary(this.level);
    // },
    renderInfo: function () {
        document.write("Employee name: " + this.fullName);
        document.write('<br>');
        document.write("Employee salary: " + this.salary);
        document.write('<br>');
        document.write('<br>');
    }
};
tamara.salary = calculateSalary(tamara.level);

const safi = {
    id: id(),
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    img: "./assets/img4.png",
    salary: 0,
    // calculateSalary: function () {
    //     return calculateSalary(this.level);
    // },
    renderInfo: function () {
        document.write("Employee name: " + this.fullName);
        document.write('<br>');
        document.write("Employee salary: " + this.salary);
        document.write('<br>');
        document.write('<br>');
    }
}; safi.salary = calculateSalary(safi.level);
const omar = {
    id: id(),
    fullName: "Omar Ziad",
    department: "Development",
    level: "Senior",
    img: "./assets/img5.png",
    salary: 0,
    // calculateSalary: function () {
    //     return calculateSalary(this.level);
    // },
    renderInfo: function () {
        document.write("Employee name: " + this.fullName);
        document.write('<br>');
        document.write("Employee salary: " + this.salary);
        document.write('<br>');
        document.write('<br>');
    }
}; omar.salary = calculateSalary(omar.level);

const Rana = {
    id: id(),
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
    img: "./assets/img6.png",
    salary: 0,
    // calculateSalary: function () {
    //     return calculateSalary(this.level);
    // },
    renderInfo: function () {
        document.write("Employee name: " + this.fullName);
        document.write('<br>');
        document.write("Employee salary: " + this.salary);
        document.write('<br>');
        document.write('<br>');
    }
}; //1005	Rana Saleh	Development	Junior
Rana.salary = calculateSalary(Rana.level);
const Hadi = {
    id: id(),
    fullName: "Hadi Ahmad	",
    department: "Finance",
    level: "Mid-Senior",
    img: "./assets/img7.png",
    salary: 0,
    // calculateSalary: function () {
    //     return calculateSalary(this.level);
    // },
    renderInfo: function () {
        document.write("Employee name: " + this.fullName);
        document.write('<br>');
        document.write("Employee salary: " + this.salary);
        document.write('<br>');
        document.write('<br>');
    }
};
Hadi.salary = calculateSalary(Hadi.level);


// 1006	Hadi Ahmad	Finance	Mid-Senior

employee_Array.push(gazi, lana, tamara, safi, omar, Rana, Hadi);

function renderHomePage() {
    for (let i = 0; i < employee_Array.length; i++) {
        employee_Array[i].renderInfo();
        console.log("salary ", employee_Array[i].salary);
    }
}
renderHomePage();