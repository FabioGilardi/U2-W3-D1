// EXERCISE 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge(userToCompare) {
    if (this.age > userToCompare.age) {
      return console.log(
        `${this.firstName} è più vecchio di ${userToCompare.firstName}`
      );
    } else if (this.age < userToCompare.age) {
      return console.log(
        `${userToCompare.firstName} è piu vecchio di ${this.firstName}`
      );
    }
    return console.log(
      `${this.firstName} e ${userToCompare.firstName} hanno la stessa età`
    );
  }
}

const fabio = new User("Fabio", "Gilardi", 22, "Lecco");

const mario = new User("Mario", "Rossi", 30, "Milano");

console.log(fabio, mario);

fabio.compareAge(mario);

// EXERCISE 2

const petNameInput = document.getElementById("petName");
const petOwnerInput = document.getElementById("petOwner");
const petSpeciesInput = document.getElementById("petSpecies");
const petBreedInput = document.getElementById("petBreed");
const formInput = document.getElementsByTagName("form")[0];
const row = document.getElementsByClassName("row")[1];

const pets = [];

class Pets {
  constructor(_petName, _petOwner, _petSpecies, _petBreed) {
    this.petName = _petName;
    this.petOwner = _petOwner;
    this.petSpecies = _petSpecies;
    this.petBreed = _petBreed;
  }
}

const createCard = function () {
  pets.forEach((pet) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
    <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title mb-3">${pet.petName}</h5>
      <p class="card-text mb-2">
        Pet Owner: ${pet.petOwner}
      </p>
      <p class="card-text mb-2">
        Pet species: ${pet.petSpecies}
      </p>
      <p class="card-text mb-2">
        Pet Breed: ${pet.petBreed}
      </p>
    </div>
    </div>`;
    row.appendChild(newDiv);
  });
};

const cleanForm = function () {
  petNameInput.value = "";
  petOwnerInput.value = "";
  petSpeciesInput.value = "";
  petBreedInput.value = "";
};

formInput.addEventListener("submit", function (e) {
  e.preventDefault();

  row.innerHTML = ``;

  const pet = new Pets(
    petNameInput.value,
    petOwnerInput.value,
    petSpeciesInput.value,
    petBreedInput.value
  );

  pets.push(pet);

  createCard();

  cleanForm();
});
