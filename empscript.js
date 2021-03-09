// const lst = [];
var table = document.getElementById("table");
function add() {
    var name = document.getElementById('name').value;
    var empid = document.getElementById('empid').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phn').value;
    if (name != "" && empid != "" && email != "" && phone != "")
    {
        var newRow = table.insertRow(1);
        var c1 = newRow.insertCell(0);
        var c2 = newRow.insertCell(1);
        var c3 = newRow.insertCell(2);
        var c4 = newRow.insertCell(3);
        c1.innerHTML = name;
        c2.innerHTML = empid;
        c3.innerHTML = email;
        c4.innerHTML = phone;
        document.getElementById("name").value="";
        document.getElementById("empid").value="";
        document.getElementById("email").value="";
        document.getElementById("phn").value="";
        document.getElementById("formtable").style.display ='none';
    }
    else {
      alert("There are empty fields");
    }


//     if (typeof(Storage) !== "undefined") {
//         // Store
//         localStorage.setItem("name", name);
//         localStorage.setItem("empid", empid);
//         localStorage.setItem("email", email);
//         localStorage.setItem("phone", phone);
//         lst.push(localStorage.name);
//         lst.push(localStorage.empid);
//         lst.push(localStorage.email);
//         lst.push(localStorage.phone);
//         // Retrieve
//         key = 0;
//         document.getElementById("tabl").innerHTML = `<tr>
//         <td>${lst}</td>
//         <td>${localStorage.getItem("empid")}</td>
//         <td>${localStorage.getItem("email")}</td>
//         <td>${localStorage.getItem("phone")}</td></tr>`;
//         alert("Successfully Added");
//         document.write(lst);

//       } else {
//         document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
// }
}


function hidefunction() {
    var x = document.getElementById("formtable");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
