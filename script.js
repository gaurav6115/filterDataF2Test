import data from "./data.json" assert{type: 'json'};
// console.log(data);

let inputArea = document.getElementById("inputArea");

let searchBtn = document.getElementById("searchBtn");

let sortAsen = document.getElementById("sortAsen");
let sortDecn = document.getElementById("sortDecn");
let sortByMarks = document.getElementById("sortByMarks");
let sortByPass = document.getElementById("sortByPass");
let sortByClass = document.getElementById("sortByClass");
let sortByGender = document.getElementById("sortByGender");

let table = document.getElementById("table");


searchBtn.addEventListener("click", searchData);
sortAsen.addEventListener("click", SortInAssending);
sortDecn.addEventListener("click", sortInDecending);
sortByMarks.addEventListener("click", sortWithMarks);
sortByPass.addEventListener("click", sortingByPassing);
sortByClass.addEventListener("click", sortWithClass);
sortByGender.addEventListener("click", sortWithGender);

//ADD THE DATA ON THE PAGE
function jsondata(data) {
    table.innerHTML = "";

    let headRow = document.createElement("tr");
    headRow.innerHTML = `<th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Class</th>
                        <th>Marks</th>
                        <th>Passing</th>
                        <th>Email</th>`
    table.append(headRow);
    data.map((item) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${item.id}</td>
            <td><img src="${item.img_src}"></img>&nbsp;&nbsp;${item.first_name} ${item.last_name}</td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? "Passed" : "Failed"}</td>
            <td>${item.email}</td>`
        table.append(row);
    })

}
jsondata(data);



//SEARCH THE DATA BY FIRST NAME, LAST NAME AND EMAIL
function searchData() {
    let inputSearch = inputArea.value;
    let searchItem = data.filter((item) => {
        return item.first_name.toLowerCase().includes(inputSearch.toLowerCase()) ||
            item.last_name.toLowerCase().includes(inputSearch.toLowerCase()) ||
            item.email.toLowerCase().includes(inputSearch.toLowerCase());
    })
    jsondata(searchItem);

}

// SORT BY A->Z
function SortInAssending() {
    let sortData = data.sort((a, b) => {
        if (a.first_name > b.first_name) return 1
        else if (a.first_name < b.first_name) return -1
        else return 0;
    })
    jsondata(sortData);
}

// SORT BY Z->A
function sortInDecending() {
    let sortData = data.sort((a, b) => {
        if (a.first_name < b.first_name) return 1
        else if (a.first_name > b.first_name) return -1
        else return 0;
    })
    jsondata(sortData);
}

//SORT THE DATA BY MARKS IN ASCENDING ORDER
function sortWithMarks() {
    let marksData = data.sort((a, b) => {
        if (a.marks > b.marks) return 1
        else if (a.marks < b.marks) return -1
        else return 0;
    })
    jsondata(marksData);
}

//SORT THE DATA WITH PASSING STUDENT
function sortingByPassing() {
    let passedStudent = data.filter((item) => {
        return item.passing;
    })
    jsondata(passedStudent);
}

//SORT THE DATA BY CLASS IN ASCENDING ORDER
function sortWithClass() {
    let classWise = data.sort((a, b) => {
        if (a.class > b.class) return 1
        else if (a.class < b.class) return -1
        else return 0;
    })
    jsondata(classWise);
}

//SORT THE DATA BY GENDER
// function sortWithGender() {
//     let genderData = data.sort((a, b) => {
//         if (a.gender > b.gender) return 1
//         else if (a.gender < b.gender) return -1
//         else return 0;
//     })
//     jsondata(genderData);
// }


//DATA SORT BY GENDER
function sortWithGender() {
    filteredMaleData();
    filteredfeMaleData();
}
//MALE FILTER
function filteredMaleData(){
    let maleSort = data.filter((item) => {
        if(item.gender == "Male"){
             return item.gender;
        }
    })
    jsondata(maleSort);
}

//EXCEPT MALE filter
function filteredfeMaleData(){
    let feMaleSort = data.filter((item) => {
        if(item.gender !== "Male"){
             return item.gender;
        }
    })
    gData(feMaleSort);
}

function gData(data) {

    let headRow = document.createElement("tr");
    headRow.innerHTML = `<th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Class</th>
                        <th>Marks</th>
                        <th>Passing</th>
                        <th>Email</th>`
    table.append(headRow);
    data.map((item) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${item.id}</td>
            <td><img src="${item.img_src}"></img>&nbsp;&nbsp;${item.first_name} ${item.last_name}</td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? "Passed" : "Failed"}</td>
            <td>${item.email}</td>`
        table.append(row);
    })

}
gData(data);