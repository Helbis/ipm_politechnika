window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;

  window.IDBTransaction =
    window.IDBTransaction ||
    window.webkitIDBTransaction ||
    window.msIDBTransaction;
    window.IDBKeyRange =
    window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB.");
}

let db;
let request = window.indexedDB.open("newDatabase", 1);

request.onerror = function (event) {
  console.log("error: The database is opened failed");
};

request.onsuccess = function (event) {
  db = request.result;
  console.log("success: The database " + db + " is opened successfully");
  drawTable();
};

request.onupgradeneeded = function (event) {
  var db = event.target.result;
  var objectStore = db.createObjectStore("client", { autoIncrement: true, });

  objectStore.createIndex("fname", "fname", { unique: false });
  objectStore.createIndex("lname", "lname", { unique: false });
  objectStore.createIndex("email", "email", { unique: true });

  for (var i in clientData) {
      objectStore.add(clientData[i]);
    }
};

function add(event) {
  event.preventDefault();

  var formElements = document.getElementById("addForm");

  var request = db
    .transaction(["client"], "readwrite")
    .objectStore("client")
    .add({
      name: formElements[0].value,
      lastName: formElements[1].value,
      age: formElements[2].value,
      email: formElements[3].value,
      pesel: formElements[4].value,
      address: formElements[5].value,
      phoneNumber: formElements[6].value,
    });

    request.onsuccess = function (event) {
    console.log("Client added");
    drawTable();
};

request.onerror = function (event) {
    alert("Unable to add data\r\ user with that email aready exist in your database! ");
  };
}
