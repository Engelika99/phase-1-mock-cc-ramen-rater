
const API = "http://localhost:3000/ramens";
el('new-ramen').addEventListener("submit", createNewRamen);
// load in ramen from API
fetch(API)
.then((res) => res.json())
.then(renderRamens);
function renderRamens(ramens) {
    ramens.forEach(renderRamen);
}
// iterate through the ramens
// display each ramen in an image tag in the ramen-menu div
function renderRamen(ramen) {
    const ramenMenuDiv = el("ramen-menu");
    const ramenImage = document.createElement("img");
    ramenImage.src = ramen.image;
    ramenMenuDiv.append(ramenImage);

    ramenImage.addEventListener("click", (e) => renderDetails(ramen))
}
function renderDetails(ramen) {
const detailImage = el("detail-image")
const ramenName = el("ramen-name")
const restaurantName = el("restaurant-name")
const ratingDisplay = el("rating-display")
const commentDisplay = el("comment-display")

detailImage.src = ramen.image;
detailImage.alt = ramen.name;
ramenName.textContent = ramen.name;
restaurantName.textContent = ramen.restaurant;
ratingDisplay.textContent = ramen.rating;
commentDisplay.textContent = ramen.comment;
}
function createNewRamen(e) {
    e.preventDefault();
    
    const newRaman = {
name: e.target.name.value,
rating: e.target.rating.value,
restaurant: e.target.restaurant.value,
comment: e.target['new-comment'].value,
image: e.target.image.value,
    };
    renderRamen(newRaman);
    e.target.reset();
}
function el(elementName) {
    return document.getElementById(elementName);
}
