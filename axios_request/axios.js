function coletarRepos() {
	
	console.log('requisitando...');

	var usuario = document.getElementById('user').value;
	var elementosUl = document.querySelector('#app ul');
	elementosUl.innerHTML = "";

	axios.get('https://api.github.com/users/' + usuario + '/repos')
		.then(function(response) {

			for(res of response.data){
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