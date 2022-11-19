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


let request = window.indexedDB.open("newDatabase", 1);

request.onupgradeneeded = () => {
  alert("indexedDB update needed");
}

request.onsuccess = () => {
  alert("indexedDB: DataBase loaded successfully!");
}

request.onerror = (e) => {
  console.error("indexedDB error");
  alert("indexedDB errro: database not loaded");
}
