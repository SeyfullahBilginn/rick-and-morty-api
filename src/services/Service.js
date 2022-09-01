const API_BASE_URL = "https://rickandmortyapi.com/api/location"

class Service {

  getAllLocations(activePage) {
    return fetch(`${API_BASE_URL}/?page=${activePage}`, {
      method: "GET"
    })
  }
}

export default new Service;