console.log("registering...");

//object literal
let petSalon ={
    name: "Beautiful Pets",
    phone: "686 554 6753",
    address:{
        state:"Baja California",
        city:"Mexicali",
        street:"Rio Aros",
        zip:"21576"
    },
    pets:[]
}
let c=0;
//constructor
function Pet(name,age,gender,breed,service,ownersName,contactPhone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner = ownersName;
    this.phone = contactPhone;
    this.id=c++;
}
function displaySalonInfo() {
    document.getElementById("contact-info").innerHTML+=`
        <p><span>Name:</span> ${petSalon.name}</p>
        <p><span>Phone:</span> ${petSalon.phone}</p>
        <p><span>Address:</span> ${petSalon.address.street}, ${petSalon.address.zip}, ${petSalon.address.city}, ${petSalon.address.state}  </p>
    `;
}

let nameInput = document.getElementById("petName");
let ageInput = document.getElementById("petAge");
let genderInput = document.getElementById("petGender");
let breedInput = document.getElementById("petBreed");
let serviceSelect = document.getElementById("petService");
let ownersName = document.getElementById("petOwner");
let contactPhone = document.getElementById("contactPhone");

function isValid(aPet){
    let valid=true;
    if(aPet.name=="" || aPet.phone=="" || aPet.service==""){
        valid=false;
    }
    return valid;
}
function register(){
    console.log(nameInput.value,ageInput.value,breedInput.value,genderInput.value);
    let newPet = new Pet(nameInput.value,ageInput.value,genderInput.value,breedInput.value, serviceSelect.value, ownersName.value, contactPhone.value);
    if(isValid(newPet)){
        petSalon.pets.push(newPet);
        console.log(petSalon.pets);
        clearInputs();
        displayPetTable();
    }else{
        alert("Please fill all the form");
    }
    
}

function clearInputs(){
    nameInput.value = "";
    ageInput.value = "";
    genderInput.value = "";
    breedInput.value = "";
    serviceSelect.value = "";
    ownersName.value = "";
    contactPhone.value = "";
}

function deletePet(petId){
    let removeIndex;
    
    console.log("Deleting pet " + petId);
    for(let i =0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];       
        if(pet.id==petId){
            removeIndex = i;
        }
    }
    //Fixes id numbering on elements after the deleted one
    for(let j=removeIndex;j<petSalon.pets.length;j++){
        let pet = petSalon.pets[j];
        pet.id--;    
    }
    document.getElementById(petId).remove();
    petSalon.pets.splice(removeIndex,1);
    c--; //Continues index numbering by going one step back
}

function search(){
    let searchPet= document.getElementById("petSearch");
    let searchIndex;
    console.log("Searching for "+searchPet.value);
    for(let i =0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];       
        if(pet.name==searchPet.value){
            console.log("Pet found!");
            searchIndex = i;

            let selectedPet = petSalon.pets[searchIndex];
            console.log(searchIndex);
            
            displayPetTable();
            let tmp=`
                <tr class="table" id="${selectedPet.id}">
                    <td class="table-warning">${selectedPet.name}</td>
                    <td class="table-warning">${selectedPet.age}</td>
                    <td class="table-warning">${selectedPet.gender}</td>
                    <td class="table-warning">${selectedPet.breed}</td>
                    <td class="table-warning">${selectedPet.service}</td>
                    <td class="table-warning">${selectedPet.owner}</td>
                    <td class="table-warning">${selectedPet.phone}</td>
                    <td class="table-warning"> <button class="delete-btn" onclick="deletePet(${selectedPet.id})"><i class="fa-solid fa-trash"></i></button></td>
                </tr>`;
    
            document.getElementById(searchIndex).innerHTML = tmp;
        }
    }

    
}
function init(){
    console.log("Registering");
    let scooby=new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy","666-666-666");
    let oreo=new Pet("Oreo",1,"Male","American Shorthair","Grooming","Julian","666-567-384");
    let sammy=new Pet("Sammy",17,"Male","Cairn Terrier","Grooming","Martha","686-183-441");
    petSalon.pets.push(scooby);
    petSalon.pets.push(oreo);
    petSalon.pets.push(sammy);
    displayPetTable();
    displaySalonInfo();
}



window.onload=init;

/*
function displayPetNames(){
    alert(`There are ${petSalon.pets.length} pets registered`);
    for(let i=0; i<petSalon.pets.length; i++){
        console.log(petSalon.pets[i].name);
        document.getElementById("registered-pets").innerHTML += `
            <p>Name: ${petSalon.pets[i].name}</p>
        `;
       
    }
}

displaySalonInfo();
displayPetNames();
*/