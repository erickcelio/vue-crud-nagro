import axios from 'axios'

const getGrowers = async () => {
  let growers = []
  try {
    growers = await axios.get('https://my-json-server.typicode.com/pedroskakum/fake-api/grower')
  } catch (e) {
    console.log('Error on getGrowers =>', e)
  }
  return growers
}

export {
  getGrowers
}
