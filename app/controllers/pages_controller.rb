class PagesController < ApplicationController
  def home
    data = fetch_api["restaurants"].first(10)

    data.each do |restaurant|
      @name = restaurant["name"]
      @cuisines = restaurant["cuisines"]
      @rating = restaurant["rating"]["starRating"]
      @city = restaurant["address"]["city"]
      @address = restaurant["address"]["firstLine"]
      @logo = restaurant["logoUrl"]
    end
  end

  private

  def fetch_api
    if params[:query].present?
      postcode = params[:query].gsub(/\s+/, "")
      end_point = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/#{postcode}"
      response = RestClient.get(end_point)
      JSON.parse(response.body)
    else
      render :home
    end
  end
end
