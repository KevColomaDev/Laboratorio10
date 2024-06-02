export const testModel = {
  async getAllTestModel () {
    const peticion = await fetch('http://localhost:4000/test')
    return peticion.json()
  },
  async createDataTestModel (newData) {
    const url = 'http://localhost:4000/test'
    const peticion = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: { 'Content-type': 'application/json' }
    })
    return peticion.json()
  }
}
