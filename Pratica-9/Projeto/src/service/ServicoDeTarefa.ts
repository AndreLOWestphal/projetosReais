import { Tarefa } from "../models/Tarefa";

export class ServicoDeTarefa {
    private tarefas: Tarefa[] = [];

    //cria tarefa
    criarTarefa(tarefa: Omit<Tarefa, "id">): Tarefa { 
    const novaTarefa: Tarefa = {...tarefa,id:this.tarefas.length +1}
    this.tarefas.push(novaTarefa);
    return novaTarefa;
    }

    //listar tarefas, todas
    listarTarefas(){
        return this.tarefas;
    }

    //buscar tarefa por id
    buscarTarefaPorId(id: number): Tarefa | undefined {
        return this.tarefas.find((tarefa) => tarefa.id === id);
      }

    //Atualizar tarefa
    atualizarTarefa(id: number, camposAtualizados: Partial<Omit<Tarefa, "id">>): Tarefa | null{
        const indice = this.tarefas.findIndex((tarefa) => tarefa.id === id);
        if(indice === -1){
            return null;
        }
        this.tarefas[indice] = {...this.tarefas[indice],...camposAtualizados};
        return this.tarefas[indice];
    }

    //Excluir tarefa
    excluirTarefa(id:number): boolean {
        const tamanhoInicial = this.tarefas.length;
        this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
        return this.tarefas.length < tamanhoInicial;
    }
}