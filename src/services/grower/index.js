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

function formatCpf (value) {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4")
}

export {
  getGrowers
}
