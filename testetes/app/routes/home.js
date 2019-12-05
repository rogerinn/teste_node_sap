module.exports = (app) => {
	app.post("/post", (req, res) => {
		var name = req.body.name;
		if(name === "rogerio"){
		return res.status(201).send([{
				Nome: name,
				Assunto: "Viagem Navegantes-São Paulo",
				Empresa: "SociumIT",
				Número_do_Doc: 94572365,
				Validade: "25/12/2019",
				Prioridade: 1,
				Descrição: "Solicito aprovação para viagem entre Navegantes (SC) e São Paulo (SP) durante os dias 01/01/2020 e 20/01/2020"
			}, {
				Nome: name,
				Assunto: "Viagem Navegantes-São Paulo",
				Empresa: "SociumIT",
				Número_do_Doc: 94572365,
				Validade: "25/12/2019",
				Prioridade: 1,
				Descrição: "Solicito aprovação para viagem entre Navegantes (SC) e São Paulo (SP) durante os dias 01/01/2020 e 20/01/2020"
			}])
		} else {
		    return res.status(201).send("Escreve o nome direito porra")
		}
	})
}