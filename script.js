var selectedRow = null
var Data = [{
        'id': 1,
        'Brand': 'Chevrolet',
        'Model': 'Aveo',
        'Color': 'Silver',
        'Year': '2020',
        'Price': 235000,
    },
    {
        'id': 2,
        'Brand': 'Nissan',
        'Model': 'Aveo',
        'Color': 'Silver',
        'Year': '2021',
        'Price': 235000,

    },
    {
        'id': 3,
        'Brand': 'Nissa',
        'Model': 'Versa',
        'Color': 'Blue',
        'Year': '2020',
        'Price': 275000,

    },
    {
        'id': 4,
        'Brand': 'KIA',
        'Model': 'Forte',
        'Color': 'Black',
        'Year': '2020',
        'Price': 275000,

    },
    {
        'id': 5,
        'Brand': 'TOYOTA',
        'Model': 'Corolla',
        'Color': 'Gree',
        'Year': '2020',
        'Price': 325000,

    }
];

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        console.log(formData)
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {

    var formData = {};
    formData["Brand"] = document.getElementById("Brand").value;
    formData["Model"] = document.getElementById("Model").value;
    formData["Color"] = document.getElementById("Color").value;
    formData["Year"] = document.getElementById("Year").value;
    formData["Price"] = document.getElementById("Price").value;
    return formData;
}

function insertNewRecord(data) {

    var table = document.getElementById("CarList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Brand;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Model;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Color;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Year;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Price;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)"><button type="button" class="btn  btn-dark">Edit</button> </a>
                       <a onClick="onDelete(this)"><button type="button" class="btn btn-dark ">Delete</button></a>`;
}

function resetForm() {
    document.getElementById("Brand").value = "";
    document.getElementById("Model").value = "";
    document.getElementById("Color").value = "";
    document.getElementById("Year").value = "";
    document.getElementById("Price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Brand").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Model").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Color").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Year").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("CarList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("Brand").value == "") {
        isValid = false;
        document.getElementById("Error").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("Error").classList.contains("hide"))
            document.getElementById("Error").classList.add("hide");
    }
    return isValid;
}

function main() {
    Data.forEach((element) => insertNewRecord(element));
}

main();