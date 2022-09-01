const API_BASE_URL = "https://rickandmortyapi.com/api/location"

class Service {

  getAllLocations() {
    console.log(API_BASE_URL);
    return fetch(API_BASE_URL, {
      method: "GET"
    })
  }
}

export default new Service;