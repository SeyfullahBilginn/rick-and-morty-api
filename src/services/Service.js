const API_BASE_URL = "https://rickandmortyapi.com/api/location"

class Service {

  getAllLocations(activePage) {
    const nextURL = `/?page=${activePage}`;
    window.history.pushState({}, "", nextURL);

    return fetch(`${API_BASE_URL}/?page=${activePage}`, {
      method: "GET"
    })
  }
  
  getResident(endpoint) {
    return fetch(endpoint, {
      method: "GET"
    })
  }

}

export default new Service;