function displayPetCards(){
    const petsDiv = document.getElementById("pets");
    petsDiv.innerHTML=``;
    //travel the array of pets
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        //create template
        let tmp=`
        <div class="pet">
            <p><b>Name:</b> ${pet.name}</p>
            <p><b>Age:</b>${pet.age}</p>
            <p><b>Gender:</b> ${pet.gender}</p>
            <p><b>Breed:</b> ${pet.breed}</p>
            <p><b>Service:</b> ${pet.service}</p>
            <p><b>Owner's name:</b> ${pet.owner}</p>
            <p><b>Contact phone:</b> ${pet.phone}</p>
        </div>`;
        //insert template into html
        petsDiv.innerHTML+=tmp;
    }
   
}

function displayPetTable(){

}