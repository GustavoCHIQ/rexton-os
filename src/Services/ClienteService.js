import Api from "./Api";

const criarCliente = (cliente) => Api.post('/cliente', cliente)
    .then(response => response.data.data);

const listarCliente = () => Api.get('/cliente')
    .then(response => response.data.data);

const buscarPorId = (id) => Api.get(`/cliente/${id}`)
    .then(response => response.data.data);

const atualizarCliente = (id) => Api.put(`/cliente/${id}`)
    .then(response => response.data);

const deletarCliente = (id) => Api.delete(`/cliente/${id}`)
    .then(response => response.data);

export { listarCliente, atualizarCliente, deletarCliente, criarCliente, buscarPorId };