const catchFullName = document.getElementById("fname");
const catchRank = document.getElementById("rank");
const catchPosition = document.getElementById("position");
const catchPlatoon = document.getElementById("platoon");
const catchTime = document.getElementById("time");
const catchStatus = document.getElementById("status");
const catchSubmitButton = document.getElementById("submitbutton");
const catchTable = document.getElementById("table");

let currentPersonelName = null;

catchSubmitButton.addEventListener("click", addPersonel);
function addPersonel(event) {
    event.preventDefault();
    const getFullName = catchFullName.value.trim();
    const getRank = catchRank.value.trim();
    const getPosition = catchPosition.value.trim();
    const getPlatoon = catchPlatoon.value.trim();
    const getTime = catchTime.value.trim();
    const getStatus = catchStatus.value.trim();
    
    addPersonelToTable(getFullName,getRank,getPosition,getPlatoon,getTime,getStatus);
    savePersonelToLocalStorage(getFullName,getRank,getPosition,getPlatoon,getTime,getStatus);
    FormData.clear();
  }
  
  function addPersonelToTable(name,rank,position,platoon,status) {
    const newRow = document.createElement("tr");
    const nameField = document.createElement("td");
    nameField.textContent = name;
    const rankField = document.createElement("td");
    rankField.textContent = rank;
    const positionField = document.createElement("td");
    positionField.textContent = position;
    const platoonField = document.createElement("td");
    platoonField.textContent = platoon;
    const statusField = document.createElement("td");
    statusField.textContent = status;
    const actionsField = document.createElement("td");
    
    
  
    const removeButton = document.createElement("button");
    const missionButton = document.createElement("button");
    const editButton = document.createElement("button");
  
    removeButton.className = "button";
    missionButton.className = "button";
    editButton.className = "button";

    removeButton.innerText = "Remove"; 
    missionButton.innerText = "Mission";    
    editButton.innerText = "Edit";

    removeButton.addEventListener("click", function () {
        let personels = JSON.parse(localStorage.getItem("personels")) || [];
        const updatePersonels = personels.filter((personel) => personel.name !== name);
        localStorage.setItem("personels", JSON.stringify(updatePersonels));
        catchTable.removeChild(this.closest("tr"));
      });
    
    missionButton.addEventListener("click", function () {
      if (completedField.innerText === "לא") {
        completedField.innerText = "כן";
        completedButton.innerText = "בטל סיום";
        completedButton.style.backgroundColor = "#70BF73";
        updateMissionStatusInLocalStorage(id, "כן");
      } else {
        completedField.innerText = "לא";
        completedButton.innerText = "סמן כהושלם";
        completedButton.style.backgroundColor = "#FFAD33";
        updateMissionStatusInLocalStorage(id, "לא");
      }
    });
  
    editButton.addEventListener("click", function () {
      openEditModal(name,rank,position,platoon,status);
    });
  
    
  
    actionsField.appendChild(removeButton);
    actionsField.appendChild(missionButton);
    actionsField.appendChild(editButton);
  
    newRow.appendChild(nameField);
    newRow.appendChild(rankField);
    newRow.appendChild(positionField);
    newRow.appendChild(platoonField);
    newRow.appendChild(statusField);
  
    catchTable.appendChild(newRow);
  }

  function openEditModal(name,rank,position,platoon,status) {
    currentPersonelName = name;
    editName.value = name;
    editRank.value = rank;
    editPosition.value = position;
    editplatoon.value = platoon;
    editStatus.value = status;
    editModal.style.display = "block";
  }

  function saveEdit() {
    const newName = editName.value.trim();
    
    let personels = JSON.parse(localStorage.getItem("personels")) || [];
    personels = personels.map((personel) => {
      if (personel.name === currentPersonelName) {
        personel.personel = newName;
      }
      return personel;
    });
    localStorage.setItem("personels", JSON.stringify(personels));
    clearTable();
    loadPersonelsFromLocalStorage();
    closeModal.click();
  }
  
  closeModal.addEventListener("click", function () {
    editModal.style.display = "none";
  });
  
  window.onclick = function (event) {
    if (event.target === editModal) {
      editModal.style.display = "none";
    }
  };
  
  saveEditButton.addEventListener("click", saveEdit);
  

  function savePersonelToLocalStorage(name,rank,position,platoon,status) {
    let personels = JSON.parse(localStorage.getItem("missions")) || [];
    personels.push({ name,rank,position,platoon,status });
    localStorage.setItem("personels", JSON.stringify(personels));
  }

  function clearTable() {
    while (catchTable.firstChild) {
      catchTable.removeChild(catchTable.firstChild);
    }
  }
  

  function loadpersonelsFromLocalStorage() {
    const personels = JSON.parse(localStorage.getItem("personels")) || [];
    personels.forEach((personel) => {
        addPersonelToTable(personel.name, personel.rank, personel.position, personel.platoon, personel.status);
    });
  }
  
  document.addEventListener("DOMContentLoaded", loadpersonelsFromLocalStorage);
  
 
  
