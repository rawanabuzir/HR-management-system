'use strict';

const employeeArray = [];
const main = document.createElement("main");

function EmployeeInfo(fullName, department, level, img) {
    this.id = id();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img;
    this.salary = this.calculateSalary();
    employeeArray.push(this);
}

function id() {
    return Math.floor(1000 + Math.random() * 9000);
}

EmployeeInfo.prototype.calculateSalary = function () {
    switch (this.level) {
        case "senior":
            return Math.floor((Math.floor(1500 + Math.random() * 500)) * 0.925);
        case "mid-senior":
            return Math.floor((Math.floor(1000 + Math.random() * 500)) * 0.925);
        case "junior":
            return Math.floor((Math.floor(500 + Math.random() * 500)) * 0.925);
    }
};

EmployeeInfo.prototype.renderInfo = function () {

    let departmentdiv = document.getElementById(this.department);
    if (departmentdiv != this.department) {
        const neww = document.createElement("div");
        neww.id = this.department;
        neww.style.fontSize = "20px";
        main.appendChild(neww);
    }

    const section = document.getElementById(this.department);
    const mainDiv = document.createElement("div");
    const imgElement = document.createElement("img");
    const nameEl = document.createElement("h4");
    const departInfo = document.createElement("p");
    const salaryInfo = document.createElement("p");


    departInfo.textContent = this.department;
    salaryInfo.textContent = this.salary;
    nameEl.textContent = this.fullName;
    imgElement.src = this.img;
    imgElement.alt = this.fullName;


    mainDiv.appendChild(imgElement);
    mainDiv.appendChild(nameEl);
    mainDiv.appendChild(departInfo);
    mainDiv.appendChild(salaryInfo);
    section.appendChild(mainDiv);


    //style :
    departInfo.style.fontSize = "20px";
    departInfo.style.color = "#37388E";
    salaryInfo.style.color = "#37388E";
    salaryInfo.style.fontSize = "20px";
    nameEl.style.color = "#37388E";
    nameEl.style.fontSize = "20px";
    imgElement.style.width = "25%";
    mainDiv.style.border = "2px solid black";
    mainDiv.style.borderColor = "#37388E";
    mainDiv.style.marginBottom = "20px";
    mainDiv.style.paddingTop = "20px";
    mainDiv.style.textAlign = "center";

};

const gazi = new EmployeeInfo("Ghazi Samer", "Administration", "senior", "./assets/Ghazi.jpg");
const safi = new EmployeeInfo("Safi Walid", "Administration", "mid-senior", "./assets/Safi.jpg");
const lana = new EmployeeInfo("Lana Ali", "Finance", "senior", "./assets/Lana.jpg");
const hadi = new EmployeeInfo("Hadi Ahmad", "Finance", "mid-senior", "./assets/Hadi.jpg");
const tamara = new EmployeeInfo("Tamara Ayoub", "Marketing", "senior", "./assets/Tamara.jpg");
const omar = new EmployeeInfo("Omar Ziad", "Development", "senior", "./assets/Omar.jpg");
const rana = new EmployeeInfo("Rana Saleh", "Development", "junior", "./assets/Rana.jpg");

function renderHomePage() {
    document.body.appendChild(main);

    for (let i = 0; i < employeeArray.length; i++) {
        employeeArray[i].renderInfo();
    }
}

renderHomePage();
