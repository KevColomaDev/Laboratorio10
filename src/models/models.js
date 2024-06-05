export const modelHole = {
  async getAllHole () {
    const peticion = await fetch('http://localhost:4000/test')
    return peticion.json()
  },
  async createHole (newData) {
    const url = 'http://localhost:4000/test'
    const peticion = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: { 'Content-type': 'application/json' }
    })
    return peticion.json()
  },
  async getHoleById (id) {
    const peticion = await fetch(`http://localhost:4000/test/${id}`)
    return peticion.json()
  },
  async deleteHole (id) {
    const url = `http://localhost:4000/test/${id}`
    const peticion = await fetch(url, {
      method: 'DELETE'
    })
    return peticion.json()
  },
  async updateHole (id, newData) {
    const url = `http://localhost:4000/test/${id}`
    const peticion = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(newData),
      headers: { 'Content-type': 'application/json' }
    })
    return peticion.json()
  }
}
