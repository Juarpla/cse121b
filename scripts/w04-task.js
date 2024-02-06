/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Juan Arturo Plasencia",
    photo: "images/profile.png",
    favoriteFoods: [
        "Lomo Saltado",
        "Ceviche",
        "Pollo a la Brasa"
    ],
    hobbies: [
        "swimming",
        "cycling",
        "singing",
        "dancing"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    place: "Lima, Peru",
    length: "4 years"
}, {
    place: "Asuncion, Paraguay",
    length: "2 years"
}, {
    place: "Trujillo, Peru",
    length: "23 years"
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
let imagenElement = document.querySelector("#photo");
imagenElement.src = myProfile.photo;
imagenElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
    let dtElement = document.createElement("dt");
    let ddElement = document.createElement("dd");

    dtElement.textContent = placeLived.place;
    ddElement.textContent = placeLived.length;

    let dlContainer = document.querySelector("#places-lived");
    dlContainer.appendChild(dtElement);
    dlContainer.appendChild(ddElement);
});

