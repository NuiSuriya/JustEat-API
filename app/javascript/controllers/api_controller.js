import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="api"
export default class extends Controller {
  static targets = ["form", "list"]

  connect() {
    // console.log("Connect API controller");

  }

  search() {
    const url = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/CB74DL"
    const proxyUrl = "https://cors-anywhere.herokuapp.com/" + url; // Using cors-anywhere as a proxy
    fetch(proxyUrl)
      .then(response => response.json())
      .then((data) => {
        const restaurants = data.restaurants.slice(0,10) // Get first 10
        restaurants.forEach((restaurant) => {
          const name = restaurant.name
          const cuisines = restaurant.cuisines
          const rating = restaurant.rating.starRating
          const city = restaurant.address.city
          const address = restaurant.address.firstLine
        })

      })
  }

}
