import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="api"
export default class extends Controller {
  static targets = ["form", "list"]

  connect() {
    // console.log("Connect API controller");
  }

  search() {
    console.log("searching");
  }

}
