function coletarRepos() {
	
	console.log('requisitando...');

	var usuario = document.getElementById('user').value;
	var elementosUl = document.querySelector('#app ul');
	elementosUl.innerHTML = "";

	apiGit(usuario)
		.then(function(response) {

			for(res of response){
				var meuLi = document.createElement('li');
				var meuRepo = document.createTextNode(res.name);

				meuLi.appendChild(meuRepo);
				elementosUl.appendChild(meuLi);
			}
		})
		.catch(function (err) {
			alert("erro");
			console.warn(err);
		})
}

function apiGit(user) {
	return new Promise(function (resolve, reject) {
		var url = 'https://api.github.com/users/' + user + '/repos';
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send(null);

		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4){
				if (xhr.status === 200){
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject(JSON.stringify({erro: 'Erro na requisicao'}));
				}
			}
		}
	})

}

