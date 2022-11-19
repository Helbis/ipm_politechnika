function addUser(event){
  event.preventDefault();

  const formElements = document.getElementById("newUserData");
  
  const request = db.transaction(["client"], "readwrite")
                    .objectStore("client")
                    .add({
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value
  });
}


let db;
let request = window.indexedDB.open("newDatabase", 1);

request.onupgradeneeded = () => {
  const logMsg = "indexedDB update needed";
  alert(logMsg);
  console.log(logMsg);
  
  let db = event.target.result;
  let objectStore = db.createObjectStore("client", { autoIncrement: true });
  
  objectStore.createIndex("fname", "fname", { unique: false });
  objectStore.createIndex("lname", "lname", { unique: false });
  objectStore.createIndex("email", "email", { unique: false });
}

request.onsuccess = () => {
  const logMsg = "indexedDB: DataBase " + db + " loaded successfully!";
  alert(logMsg);
  console.log(logMsg);
  
  db = request.result;
}

request.onerror = (e) => {
  const errMsg = "indexedDB errro: database not loaded";
  console.error(errMsg);
  alert(errMsg);
}
