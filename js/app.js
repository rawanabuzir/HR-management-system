'use strict';
const employee_Array = [];
const mainSec = document.createElement("main");

function Employee_Info(fullName, depatment, level, img) {
    this.id = Math.floor(1000 + Math.random() * 9000);
    this.fullName = fullName;
    this.depatment = depatment;
    this.level = level;
    this.img = img;
    employee_Array.push(this);
}
Employee_Info.prototype.calculateSalary = function () {
    switch (this.level) {
        case "senior":
            let seniorSalary = Math.floor((Math.floor(1500 + (Math.random() * 500))) * 0.925);
            return seniorSalary;

            break;
        case "mid-senior":
            let midSeniorSalary = Math.floor((Math.floor(1000 + (Math.random() * 500))) * 0.925);
            return midSeniorSalary;
            break;
        case "junior":
            let juniorSalary = Math.floor((Math.floor(500 + (Math.random() * 500))) * 0.925);
            return juniorSalary;
            break;
    }
}

Employee_Info.prototype.renderInfo = function () {
    document.write("Employee name: " + this.fullName + "<br>");
    document.write("Department: " + this.depatment + "<br>");
    document.write("Employee salary: " + this.calculateSalary());
    document.write("<br> <br>");
};
const gazi = new Employee_Info("Ghazi Samer", "Administration", "senior", "./assets/img3.jpg");
const lana = new Employee_Info("Lana Ali", "Finance", "senior", "./assets/img4.jpg");
const tamara = new Employee_Info("Tamara Ayoub", "Marketing", "senior", "./assets/img2.jpg");
const safi = new Employee_Info("Safi Walid", "Administration", "mid-senior", "./assets/img5.jpg");
const omar = new Employee_Info("Omar Ziad", "Development", "senior", "./assets/img3.jpg");
const rana = new Employee_Info("Rana Saleh", "Development", "junior", "./assets/img2.jpg");
const hadi = new Employee_Info("Hadi Ahmad", "Finance", "mid-senior", "./assets/img4.jpg");

function renderHomePage() {
    for (let i = 0; i < employee_Array.length; i++) {
        employee_Array[i].renderInfo();
    }
}
renderHomePage();

//////////////////////////////////////////////


// const gazi = {
//     id: id(),
//     fullName: "Ghazi Samer",
//     department: "Administration",
//     level: "Senior",
//     img: "./assets/img1.png",
//     salary: 0,
//     // calculateSalary: function () {
//     //     return calculateSalary(this.level);
//     // },
//     renderInfo: function () {
//         document.write("Employee name: " + this.fullName);
//         document.write('<br>');
//         document.write("Employee salary: " + this.salary);
//         document.write('<br>');
//         document.write('<br>');
//     }
// }; gazi.salary = calculateSalary(gazi.level);
// let lana = {
//     id: id(),
//     fullName: "Lana Ali",
//     department: "Finance",
//     level: "Senior",
//     img: "./assets/img2.png",
//     salary: 0,
//     // salary: calculateSalary(this.level),
//     renderInfo: function () {
//         document.write("Employee name: " + this.fullName);
//         document.write('<br>');
//         document.write("Employee salary: " + this.salary);
//         console.log(this.level);
//         document.write('<br>');
//         document.write('<br>');
//     }
// };
// lana.salary = calculateSalary(lana.level);
// const tamara = {
//     id: id(),
//     fullName: "Tamara Ayoub",
//     department: "Marketing",
//     level: "Senior",
//     img: "./assets/img3.png",
//     salary: 0,
//     // calculateSalary: function () {
//     //     return calculateSalary(this.level);
//     // },

//     renderInfo: function () {
//         document.write("Employee name: " + this.fullName);
//         document.write('<br>');
//         document.write("Employee salary: " + this.salary);
//         document.write('<br>');
//         document.write('<br>');
//     }
// };

// tamara.salary = calculateSalary(tamara.level);

// const safi = {
//     id: id(),
//     fullName: "Safi Walid",
//     department: "Administration",
//     level: "Mid-Senior",
//     img: "./assets/img4.png",
//     salary: 0,
//     // calculateSalary: function () {
//     //     return calculateSalary(this.level);
//     // },
//     renderInfo: function () {
//         document.write("Employee name: " + this.fullName);
//         document.write('<br>');
//         document.write("Employee salary: " + this.salary);
//         document.write('<br>');
//         document.write('<br>');
//     }
// }; safi.salary = calculateSalary(safi.level);
// const omar = {
//     id: id(),
//     fullName: "Omar Ziad",
//     department: "Development",
//     level: "Senior",
//     img: "./assets/img5.png",
//     salary: 0,
//     // calculateSalary: function () {
//     //     return calculateSalary(this.level);
//     // },
//     renderInfo: function () {
//         document.write("Employee name: " + this.fullName);
//         document.write('<br>');
//         document.write("Employee salary: " + this.salary);
//         document.write('<br>');
//         document.write('<br>');
//     }
// }; omar.salary = calculateSalary(omar.level);

// const Rana = {
//     id: id(),
//     fullName: "Rana Saleh",
//     department: "Development",
//     level: "Junior",
//     img: "./assets/img6.png",
//     salary: 0,
//     // calculateSalary: function () {
//     //     return calculateSalary(this.level);
//     // },
//     renderInfo: function () {
//         document.write("Employee name: " + this.fullName);
//         document.write('<br>');
//         document.write("Employee salary: " + this.salary);
//         document.write('<br>');
//         document.write('<br>');
//     }
// }; //1005	Rana Saleh	Development	Junior
// Rana.salary = calculateSalary(Rana.level);
// const Hadi = {
//     id: id(),
//     fullName: "Hadi Ahmad	",
//     department: "Finance",
//     level: "Mid-Senior",
//     img: "./assets/img7.png",
//     salary: 0,
//     // calculateSalary: function () {
//     //     return calculateSalary(this.level);
//     // },
//     renderInfo: function () {
//         document.write("Employee name: " + this.fullName);
//         document.write('<br>');
//         document.write("Employee salary: " + this.salary);
//         document.write('<br>');
//         document.write('<br>');
//     }
// };
// Hadi.salary = calculateSalary(Hadi.level);
// 1006	Hadi Ahmad	Finance	Mid-Senior

// employee_Array.push(gazi, lana, tamara, safi, omar, Rana, Hadi);
// function salaryy() {
//     employee_salary = calculateSalary(this.level);
//     return employee_salary;
// };
