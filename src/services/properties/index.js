import axios from 'axios'

const getProperties = async () => {
  let properties = []
  try {
    const { data } = await axios.get('https://my-json-server.typicode.com/pedroskakum/fake-api/properties')
    properties = data
  } catch (e) {
    console.log('Error on getProperties =>', e)
  }
  return properties
}

const getProperty = async (id) => {
  let property = null
  try {
    const { data } = await axios.get(`https://my-json-server.typicode.com/pedroskakum/fake-api/properties/${id}`)
    property = data
  } catch (e) {
    console.log('Error on getProperty =>', e)
  }
  return property
}

const deleteProperty = async (id) => {
  try {
    await axios.delete(`https://my-json-server.typicode.com/pedroskakum/fake-api/properties/${id}`)
  } catch (e) {
    console.log('Error on deleteProperty =>', e)
  }
}

const updateProperty = async (data) => {
  let property = {}
  try {
    const request = await axios.put(`https://my-json-server.typicode.com/pedroskakum/fake-api/properties/${data.id}`, data)
    property = request.data
  } catch (e) {
    console.log('Error on updateProperty =>', e)
    property = null
  }
  return property
}

const newProperty = async (data) => {
  let property = {}
  try {
    const request = await axios.post(`https://my-json-server.typicode.com/pedroskakum/fake-api/properties`, data)
    property = request.data
  } catch (e) {
    console.log('Error on newProperty =>', e)
    property = null
  }
  return property
}

export {
  getProperties,
  deleteProperty,
  getProperty,
  newProperty,
  updateProperty
}
