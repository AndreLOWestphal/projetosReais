import { ServicoDeTarefa } from "./service/ServicoDeTarefa";

const servicoDeTarefa  = new ServicoDeTarefa();

const tarefa1 = servicoDeTarefa.criarTarefa({titulo: 'Aprender TS', concluida: false});
const tarefa2 = servicoDeTarefa.criarTarefa({titulo: 'Praticar CRUD', descricao:'Fatorar CRUD para TS', concluida: false})

console.log("Tarefas Criadas:", servicoDeTarefa.listarTarefas());

servicoDeTarefa.atualizarTarefa(tarefa1.id, { concluida: true });
console.log("Tarefa Atualizada:", servicoDeTarefa.buscarTarefaPorId(tarefa1.id));

servicoDeTarefa.excluirTarefa(tarefa2.id);
console.log("Tarefas Após Exclusão:", servicoDeTarefa.listarTarefas());