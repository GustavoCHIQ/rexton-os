import Api from "./Api";

const listarOrdemDeServico = () => Api.get('/ordemdeservico')
    .then(response => response.data);

const listarOrdemDeServicoPorId = (id) => Api.get(`/ordemdeservico/${id}`)
    .then(response => response.data.data);

const criarOrdemDeServico = (ordemdeservico) => Api.post('/ordemdeservico', ordemdeservico)
    .then(response => response.data.data);

const atualizarOrdemDeServico = (id) => Api.put(`/ordemdeservico/${id}`)
    .then(response => response.data);

const deletarOrdemDeServico = (id) => Api.delete(`/ordemdeservico/${id}`)
    .then(response => response.data);

export { listarOrdemDeServico, listarOrdemDeServicoPorId, atualizarOrdemDeServico, deletarOrdemDeServico, criarOrdemDeServico };