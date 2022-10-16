var selectecRow = null;

function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();

    if(selectecRow === null){
        insertNewRecord(formData)
    }
    else{

    }
}

function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["dataDeNascimento"] = document.getElementById("dataDeNascimento").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name;

    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.email; 

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.dataDeNascimento;

    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button>Edit</button> <button>Delete</button>`;
}