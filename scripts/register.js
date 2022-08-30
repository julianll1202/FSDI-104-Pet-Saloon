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
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owners:"Shaggy",
            phone:"686 907 6542"
        },
        {
            name:"Scrappy",
            age:12,
            gender:"Male",
            breed:"Shiba Inu",
            service:"Grooming",
            owners:"Shaggy",
            phone:"686 437 6542"
        },
        {
            name:"Sammy",
            age:16,
            gender:"Male",
            breed:"Cairn Terrier",
            service:"Grooming",
            owners:"Julian",
            phone:"686 573 8531"
        },
        {
            name:"Oreo",
            age:1,
            gender:"Male",
            breed:"Bengal",
            service:"Grooming",
            owners:"Julian",
            phone:"686 265 8702"
        }
    ]
}

console.log(petSalon.pets);

function displaySalonInfo() {
    document.getElementById("contact-info").innerHTML=`
        <p>Name: ${petSalon.name}</p>
        <p>Phone: ${petSalon.phone}</p>
        <p>Address: ${petSalon.address.street}, ${petSalon.address.zip}, ${petSalon.address.city}, ${petSalon.address.state}  </p>
    `;
}

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