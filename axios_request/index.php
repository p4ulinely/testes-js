<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>testeJS</title>
</head>
<body>
	<div id="app">

		<p align="right">coleta repositorios no git, limpa a lista UL e adiciona os repos como LIs.</p>
		<input id="user" type="text" value="paulinelymorgan">
		<button onclick="coletarRepos()">coletar</button>
		<br>
		<ul>
			<li>nenhum repo</li>
		</ul>
	</div>
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
	<script type="text/javascript" src="axios.js"></script>
	
</body>
</html>