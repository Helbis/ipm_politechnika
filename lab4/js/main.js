function addUser(event){
  event.preventDefault();

  const formElements = document.getElementById("newUserData");
}


let request = window.indexedDB.open("newDatabase", 1);

request.onupgradeneeded = () => {
  alert("indexedDB update needed");
}

request.onsuccess = () => {
  alert("indexedDB: DataBase loaded successfully!");
}
