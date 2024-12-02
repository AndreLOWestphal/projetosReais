"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoDeTarefa = void 0;
class ServicoDeTarefa {
    constructor() {
        this.tarefas = [];
    }
    //cria tarefa
    criarTarefa(tarefa) {
        const novaTarefa = Object.assign(Object.assign({}, tarefa), { id: this.tarefas.length + 1 });
        this.tarefas.push(novaTarefa);
        return novaTarefa;
    }
    //listar tarefas, todas
    listarTarefas() {
        return this.tarefas;
    }
    //buscar tarefa por id
    buscarTarefaPorId(id) {
        return this.tarefas.find((tarefa) => tarefa.id === id);
    }
    //Atualizar tarefa
    atualizarTarefa(id, camposAtualizados) {
        const indice = this.tarefas.findIndex((tarefa) => tarefa.id === id);
        if (indice === -1) {
            return null;
        }
        this.tarefas[indice] = Object.assign(Object.assign({}, this.tarefas[indice]), camposAtualizados);
        return this.tarefas[indice];
    }
    //Excluir tarefa
    excluirTarefa(id) {
        const tamanhoInicial = this.tarefas.length;
        this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
        return this.tarefas.length < tamanhoInicial;
    }
}
exports.ServicoDeTarefa = ServicoDeTarefa;
