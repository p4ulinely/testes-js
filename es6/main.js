var listaTodosHp = document.querySelector('#meus-todos ul');

class Todolist {
	constructor(){
		this.todos = [];
	}

	addTodo(todo){
		(todo == "") ? this.todos.push('Novo todo') : this.todos.push(todo);
	}

	preecherTodos(){
		listaTodosHp.innerHTML = "";

		for(let val of this.todos){
			let meuLi = document.createElement('li');

			meuLi.appendChild(document.createTextNode(val));
			listaTodosHp.appendChild(meuLi);
		}

		console.log(this.todos);
	}
}

const meusTodos = new Todolist();

document.getElementById('btn-adicionar').onclick = function () {
	let novoTodo = document.getElementById('inpt-todo').value;
	meusTodos.addTodo(novoTodo);
	meusTodos.preecherTodos();
}

