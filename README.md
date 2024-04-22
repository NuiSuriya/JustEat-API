# Overview

This project provides a solution to display four data points(Name, Cuisines, Rating - as a number and Address)from the provided API of JUSTEAT takeaway.com. The solution is presented through a web interface built using Ruby on Rails.

# Building, Compiling, and Running the Solution
## Prerequisites
Before running the application, ensure you have the following software installed on your machine:
1. **Ruby**: Version 3.0.0 or higher
   - Installation instructions can be found [here](https://www.ruby-lang.org/en/documentation/installation/).
2. **Rails**: Version 7.0.0 or higher
   - Installation instructions can be found [here](https://rubyonrails.org/).

## Building the Solution
1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.

## Running the Solution
1. Run the following command to install dependencies:
   ```
   bundle install
   ```
2. Start the Rails server by running:
   ```
   rails server
   ```
3. Open your web browser and navigate to`http://localhost:3000` to view the application.

## Alternative Solution running on production [here](https://justeat-api-763c4accc2cd.herokuapp.com)

## Assumptions and Clarifications
- During development, I encountered an issue with accessing an API from Stimulus, a JavaScript framework used in Ruby on Rails, on `http://localhost:3000`. The browser threw an error about access permissions, which did not occur when I accessed the same API using open-uri in Ruby. After investigation, I discovered that this issue was caused by security restrictions known as CORS (Cross-Origin Resource Sharing) implemented by the browser. To bypass this restriction and allow my application to access the API, I chose to use a proxy server as an intermediary. By routing my API requests through the proxy server, I could avoid the CORS restrictions and successfully retrieve the data. While resolving this issue, I found the concept of CORS and its implications on web development to be interesting and worth exploring further.


## Potential Improvements
- Implement a Model to store data in the database, allowing for better organization and management of restaurant information.
- Develop a Show Page to display additional data for each restaurant, providing users with more detailed information.
- Improve the safer and better solution to handle the security restriction when API fetching
- Implement error handling for cases where the API request fails or returns unexpected data.
- Add pagination functionality for cases where there are a large number of results from the API.
- Enhance the user interface with styling and additional features for better usability and aesthetics.


