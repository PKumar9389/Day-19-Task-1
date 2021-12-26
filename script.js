"use strict";
document.getElementById("add").addEventListener("click", function () {
  let first_name = document.getElementById("First_name");
  let last_name = document.getElementById("Last_Name");
  let address = document.getElementById("Address");
  let pincode = document.getElementById("PINcode");
  let gender = document.getElementById("Gender");
  let food = document.getElementById("Food");
  let state = document.getElementById("State");

  let table = document.getElementById("table_of_information");
  let row_count = table.rows.length;
  let row = table.insertRow(row_count);
  row.insertCell(0).innerHTML =
    '<input type="button" value="Del" onClick="delete_row(this)">';
  row.insertCell(1).innerHTML = first_name.value;
  row.insertCell(2).innerHTML = last_name.value;
  row.insertCell(3).innerHTML = address.value;
  row.insertCell(4).innerHTML = pincode.value;
  row.insertCell(5).innerHTML = gender.value;
  row.insertCell(6).innerHTML = food.value;
  row.insertCell(7).innerHTML = state.value;
});

function delete_row() {
  document.getElementById("table_of_information").deleteRow(1);
}
