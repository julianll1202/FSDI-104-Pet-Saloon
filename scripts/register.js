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

//constructor
function Pet(name,age,gender,breed,service,ownersName,contactPhone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner = ownersName;
    this.phone = contactPhone;
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
        displayPetCards();
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

function init(){
    console.log("Registering");
    let scooby=new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy","666-666-666");
    let oreo=new Pet("Oreo",1,"Male","American Shorthair","Grooming","Julian","666-567-384");
    let sammy=new Pet("Sammy",17,"Male","Cairn Terrier","Grooming","Martha","686-183-441");
    petSalon.pets.push(scooby);
    petSalon.pets.push(oreo);
    petSalon.pets.push(sammy);
    displayPetCards();
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