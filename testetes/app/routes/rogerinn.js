module.exports = (app) => {
	app.get('/rogerinn', function (req, res) {
		var dados = [{
			nome: "Rogerio",
			endereco: {
				rua: 3610,
				numero: 233
			}
		}, {
			nome: "Adolho",
			endereco: {
				rua: "Blablabla",
				numero: 233
			}
		}, {
			nome: "Frango assado",
			endereco: {
				rua: "Granja",
				numero: 533
			}
		}, {
			nome: "Tetinha",
			endereco: {
				rua: "Abaixo do pescoço",
				numero: 533
			}
		}];

		res.send(JSON.stringify(dados));
	});
}