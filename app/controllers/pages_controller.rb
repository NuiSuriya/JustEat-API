class PagesController < ApplicationController
  def home
    @end_point = fetch_api
  end

  def fetch_api
    postcode = params[:query]
    end_point = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/#{postcode}"

    # @end_point
    # file = URI.open(end_point).read
    # doc = JSON.parse(file)

  end
end
