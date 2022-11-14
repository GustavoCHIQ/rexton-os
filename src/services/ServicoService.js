import Api from "./Api";


const listarServico = () => Api.get('/servico')
    .then(response => response.data.data);

const buscarPorId = (id) => Api.get(`/servico/${id}`)
    .then(response => response.data.data);

const atualizarServico = (id) => Api.put(`/servico/${id}`)
    .then(response => response.data.data);

const deletarServico = (id) => Api.delete(`/servico/${id}`)
    .then(response => response.data.data);

const criarServico = (servico) => Api.post('/servico', servico)
    .then(response => response.data.data);

export { listarServico, atualizarServico, deletarServico, criarServico, buscarPorId };
