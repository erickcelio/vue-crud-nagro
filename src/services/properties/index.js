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

export {
  getProperties
}
