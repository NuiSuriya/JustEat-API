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
    const proxyUrl = "https://cors-anywhere.herokuapp.com/" + url; // Using cors-anywhere as a proxy
    fetch(proxyUrl)
      .then(response => response.json())
      .then((data) => {
        const restaurants = data.restaurants.slice(0,10) // Get first 10
        let restaurant_list = ""
        restaurants.forEach((restaurant) => {
          const name = restaurant.name
          const cuisines = restaurant.cuisines
          const rating = restaurant.rating.starRating
          const city = restaurant.address.city
          const address = restaurant.address.firstLine
          const logo = restaurant.logoUrl
          console.log(logo);

          restaurant_list += `<div class='col-4'>
                                  <div class='card mb-3 py-3 px-3 resto-card'>`
          restaurant_list += `<div class="d-flex">
                                <img  src='${logo}' alt="logo" class="logo me-4">`
          restaurant_list += `<h3 class="align-self-center">${name}</h3></div>`
          restaurant_list += `<p class="mt-3 icon ms-3 mt-4"><i class='fa-solid fa-star'></i> ${rating}</p>`
          restaurant_list += `<p><span class="icon pe-2 ms-3"><i class="fa-regular fa-location-dot"></i></span> ${address}, ${city}</p>`
          restaurant_list += "<ul>"
          cuisines.forEach((cuisine) => {
            const cuisineName = cuisine.name;
            restaurant_list += `<li><span class='icon-dark me-2'><i class="fa-solid fa-bowl-food"></i></span>${cuisineName}</li>`
          })
          restaurant_list += "</ul></p>"


          restaurant_list += `</div></div>`
        })
        this.listTarget.innerHTML = restaurant_list
      })
  }

}
