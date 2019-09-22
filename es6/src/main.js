import api from './githubAPI.js';

class Usuarios{
	constructor(){
		this.repoUsuarios = [];
	}

	async addUsuario(nome){

		if (nome.length === 0) {return;}

		this.mostrarCarregando();

		try {
			const usuarioGit = await api.get(`/users/${nome}`);
			const { login, public_repos } = usuarioGit.data;
			this.repoUsuarios.push({login, public_repos});
			this.renderUsuarios();

		} catch(err) {
			alert("Usuario inexistente");
			console.warn(err);
		}
		
		this.mostrarCarregando(false);
	}

	mostrarCarregando(isCarregando = true){
		let formColetarUsuarios = document.getElementById('form-coletar-usuarios');

		if (isCarregando) {
			let elementoSpan = document.createElement("span");
			elementoSpan.setAttribute('id', 'span-carregando');
			elementoSpan.appendChild(document.createTextNode('Carregando...'));
			formColetarUsuarios.appendChild(elementoSpan);
		} else {
			document.getElementById('span-carregando').remove();
		}
		
	}

	renderUsuarios(){
		let usuariosElementoUl = document.querySelector('#app ul');
		usuariosElementoUl.innerHTML = "";

		this.repoUsuarios.forEach(value => {
			let novoElementoLi = document.createElement("li");
			novoElementoLi.appendChild(document.createTextNode(`login: ${value.login} | repos: ${value.public_repos}`));
			usuariosElementoUl.appendChild(novoElementoLi);
		});
	}
}

const objUsuarios = new Usuarios();

document.getElementById('btn-coletar').onclick = event => {
	event.preventDefault();
	
	const inputUsuario = document.querySelector('input[name=inpt-usuario]');
	objUsuarios.addUsuario(inputUsuario.value);
	inputUsuario.value = "";

	console.log(objUsuarios.repoUsuarios);
}


