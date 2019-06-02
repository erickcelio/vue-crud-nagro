import axios from 'axios'

const getGrowers = async () => {
  let growers = []
  try {
    const { data } = await axios.get('https://my-json-server.typicode.com/pedroskakum/fake-api/grower')
    growers = data
  } catch (e) {
    console.log('Error on getGrowers =>', e)
  }
  growers.map((grower) => { grower.cpf = formatCpf(grower.cpf) })
  return growers
}

const getGrower = async (id) => {
  let grower = null
  try {
    const { data } = await axios.get(`https://my-json-server.typicode.com/pedroskakum/fake-api/grower/${id}`)
    data.cpf = formatCpf(data.cpf)
    grower = data
  } catch (e) {
    console.log('Error on getGrower =>', e)
  }
  return grower
}

const deleteGrower = async (id) => {
  try {
    await axios.delete(`https://my-json-server.typicode.com/pedroskakum/fake-api/grower/${id}`)
  } catch (e) {
    console.log('Error on deleteGrower =>', e)
  }
}

const updateGrower = async (data) => {
  let grower = {}
  try {
    const request = await axios.put(`https://my-json-server.typicode.com/pedroskakum/fake-api/grower/${data.id}`, data)
    grower = request.data
  } catch (e) {
    console.log('Error on updateGrower =>', e)
    grower = null
  }
  return grower
}

const newGrower = async (data) => {
  let grower = {}
  try {
    const request = await axios.post(`https://my-json-server.typicode.com/pedroskakum/fake-api/grower`, data)
    request.data.cpf = formatCpf(request.data.cpf)
    grower = request.data
  } catch (e) {
    console.log('Error on newGrower =>', e)
    grower = null
  }
  return grower
}

function formatCpf (value) {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4")
}

export {
  getGrowers,
  getGrower,
  deleteGrower,
  updateGrower,
  newGrower
}
