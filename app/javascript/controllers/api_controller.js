import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="api"
export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
    // console.log("Connect API controller");

  }

  search(event) {
    event.preventDefault();
    const postCode = this.inputTarget.value
    const url = `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postCode}`
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/" + url; // Using cors-anywhere as a proxy
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        const restaurants = data.restaurants.slice(0, 10) // Get first 10
        let restaurantHtml = ""
        restaurants.forEach((restaurant) => {
          const name = restaurant.name
          const cuisines = restaurant.cuisines
          const rating = restaurant.rating.starRating
          const city = restaurant.address.city
          const address = restaurant.address.firstLine
          const logo = restaurant.logoUrl

          restaurantHtml += buildHtml(logo, name, rating, address, city, cuisines);
        })
        this.listTarget.innerHTML = restaurantHtml
      })

    const buildHtml = (logo, name, rating, address, city, cuisines) => {
      let restaurantHtml = `<div class='col-4'>
                                  <div class='card mb-3 py-3 px-3 resto-card'>`;
      restaurantHtml += `<div class="d-flex">
                                <img  src='${logo}' alt="logo" class="logo me-4">`;
      restaurantHtml += `<h3 class="align-self-center">${name}</h3></div>`;
      restaurantHtml += `<p class="mt-3 icon ms-3 mt-4"><i class='fa-solid fa-star'></i> ${rating}</p>`;
      restaurantHtml += `<p><span class="icon pe-2 ms-3"><i class="fa-regular fa-location-dot"></i></span> ${address}, ${city}</p>`;
      restaurantHtml += "<ul>";
      cuisines.forEach((cuisine) => {
        const cuisineName = cuisine.name;
        restaurantHtml += `<li><span class='icon-dark me-2'><i class="fa-solid fa-bowl-food"></i></span>${cuisineName}</li>`;
      });
      restaurantHtml += "</ul></p>";

      return restaurantHtml += `</div></div>`;
    }
  }

}
