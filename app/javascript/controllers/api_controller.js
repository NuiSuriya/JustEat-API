import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="api"
export default class extends Controller {
  connect() {
    console.log("Connect API controller");
  }
}
