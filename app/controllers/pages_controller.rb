class PagesController < ApplicationController
  def home
    @restaurants = fetch_api["restaurants"].first(10) unless fetch_api["restaurants"].nil?
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
