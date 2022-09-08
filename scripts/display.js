function displayPetTable(){
    const petsDiv = document.getElementById("pets-table");
    petsDiv.innerHTML=`
    <thead class="table-dark">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Breed</th>
            <th>Service</th>
            <th>Owner's name</th>
            <th>Contact phone</th>
            <th>Actions</th>
        </tr>
    </thead>
    `;
    //travel the array of pets
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        //create template
        let tmp=`
        
        <tr class="pet" id="${pet.id}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.owner}</td>
            <td>${pet.phone}</td>
            <td> <button class="delete-btn" onclick="deletePet(${pet.id})"><i class="fa-solid fa-trash"></i></button></td>
        </tr>`;
        //insert template into html
        petsDiv.innerHTML+=tmp;
    }
   
}
