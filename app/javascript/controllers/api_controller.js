import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="api"
export default class extends Controller {
  static targets = ["form", "list"]

  connect() {
    // console.log("Connect API controller");

  }

  search(event) {
    event.preventDefault();
    const url = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/CB74DL"
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

          restaurant_list += `<div class='col-4'>
                                  <div class='card mb-3 p-3 pt-4 resto-card'>`
          restaurant_list += `<h3>Name: ${name}</h3>`
          restaurant_list += "<p>Cuisines: <ul>"
          cuisines.forEach((cuisine) => {
            const cuisineName = cuisine.name;
            restaurant_list += `<li>${cuisineName}</li>`
          })
          restaurant_list += "</ul></p>"
          restaurant_list += `<p>Rating: ${rating}</p>`
          restaurant_list += `<p>Address: ${address}, ${city}</p>`


          restaurant_list += `</div></div>`
        })
        this.listTarget.innerHTML = restaurant_list
      })
  }

}
