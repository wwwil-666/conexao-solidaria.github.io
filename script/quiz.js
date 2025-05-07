class Quiz {
    constructor(perguntas) {
        this.perguntas = perguntas;
        this.indiceAtual = 0;
        this.pontos = 0;
    }

    mostrarPergunta() {
        const progressoDiv = document.getElementById("progresso");
        const perguntaDiv = document.getElementById("pergunta");
        const opcoesDiv = document.getElementById("opcoes");
        const resultadoDiv = document.getElementById("resultado");
        


        resultadoDiv.textContent = '';
        progressoDiv.textContent =   `Pergunta ${this.indiceAtual + 1} de ${this.perguntas.length}`;

        perguntaDiv.textContent = this.perguntas[this.indiceAtual].pergunta;

        opcoesDiv.innerHTML = '';
        this.perguntas[this.indiceAtual].opcoes.forEach((opcao, index) => {
            const button = document.createElement('button');
            button.textContent = opcao;
            button.onclick = () => this.verificarResposta(index);
            opcoesDiv.appendChild(button);
        });


        resultadoDiv.textContent = '';
        resultadoDiv.classList.remove('show'); 
    }

    verificarResposta(opcaoEscolhida) {
        const respostaCorreta = this.perguntas[this.indiceAtual].resposta;
        const resultadoDiv = document.getElementById("resultado");

        if (opcaoEscolhida === respostaCorreta) {
            this.pontos++;
            resultadoDiv.textContent = "✓ Correto! " + (this.perguntas[this.indiceAtual].explicacao || "");
            resultadoDiv.style.color = "#28a745";
        } else {
            resultadoDiv.textContent = "✗ Incorreto. A resposta correta é: " + 
                this.perguntas[this.indiceAtual].opcoes[respostaCorreta] + 
                (this.perguntas[this.indiceAtual].explicacao ? ". " + this.perguntas[this.indiceAtual].explicacao : "");
            resultadoDiv.style.color = "#dc3545";
        }

        this.indiceAtual++;

        if (this.indiceAtual < this.perguntas.length) {
            setTimeout(() => {
                this.mostrarPergunta();
            }, 5000);
        } else {
            setTimeout(() => {
                this.mostrarResultado();
            }, 5000);
        }


        resultadoDiv.classList.add('show');
    }

    mostrarResultado() {
        const perguntaDiv = document.getElementById("pergunta");
        const opcoesDiv = document.getElementById("opcoes");
        const resultadoDiv = document.getElementById("resultado");
        const progressoDiv = document.getElementById("progresso");
        const divMensagemConclusao = document.getElementById("divMensagemConclusao");


        progressoDiv.textContent = '';
        perguntaDiv.textContent = '';
        opcoesDiv.innerHTML = '';
        
        let mensagem = `Você acertou ${this.pontos} de ${this.perguntas.length} perguntas! `;
        const percentual = Math.round((this.pontos / this.perguntas.length) * 100);


        

        
        if (percentual >= 80) {
            mensagem += "Excelente! Você conhece bem o ODS 2.";
        } else if (percentual >= 60) {
            mensagem += "Bom trabalho! Mas ainda pode aprender mais sobre o tema.";
        } else {
            mensagem += "Continue estudando sobre o ODS 2 para melhorar seu conhecimento.";
        }
        
        resultadoDiv.textContent = mensagem;
        resultadoDiv.style.color = "#007bff";


        //visibilidade do background-color de resultado
        resultadoDiv.classList.add('show');
        

        //visibilidade da divMensagemConclusao
        divMensagemConclusao.style.display = "block";
    }

    iniciar() {
        this.mostrarPergunta();
    }
}

const perguntas = [
    {
        pergunta: "O que significa a sigla ODS?",
        opcoes: [
            "Objetivos de Desenvolvimento Social",
            "Objetivos de Desenvolvimento Sustentável",
            "Organização de Direitos Sociais",
            "Operações de Desenvolvimento Solidário"
        ],
        resposta: 1,
        explicacao: "ODS significa Objetivos de Desenvolvimento Sustentável, adotados por todos os Estados-Membros da ONU em 2015."
    },
    {
        pergunta: "Qual o objetivo principal do ODS 2?",
        opcoes: [
            "Acabar com a fome, alcançar a segurança alimentar e promover a agricultura sustentável",
            "Reduzir o consumo de carne no mundo",
            "Aumentar a produção industrial de alimentos",
            "Desenvolver tecnologias digitais para o agronegócio"
        ],
        resposta: 0,
        explicacao: "O ODS 2 visa acabar com todas as formas de fome e má nutrição até 2030, garantindo acesso a alimentos seguros, nutritivos e suficientes."
    },
    {
        pergunta: "Até que ano os ODS devem ser alcançados?",
        opcoes: ["2025", "2030", "2045", "2050"],
        resposta: 1,
        explicacao: "A Agenda 2030 estabelece que os 17 ODS devem ser implementados por todos os países até 2030."
    },
    {
        pergunta: "Qual prática está alinhada com o ODS 2?",
        opcoes: [
            "Uso excessivo de agrotóxicos",
            "Desmatamento para expansão agrícola",
            "Agricultura sustentável e familiar",
            "Monoculturas em grande escala"
        ],
        resposta: 2,
        explicacao: "A agricultura sustentável e familiar promove a diversificação de cultivos e o uso responsável dos recursos naturais."
    },
    {
        pergunta: "Qual problema afeta diretamente o alcance do ODS 2?",
        opcoes: [
            "Baixo índice de alfabetização",
            "Mudanças climáticas",
            "Falta de acesso à internet",
            "Crescimento urbano desordenado"
        ],
        resposta: 1,
        explicacao: "As mudanças climáticas afetam a produção agrícola com secas, inundações e outros eventos extremos."
    },
    {
        pergunta: "O que é segurança alimentar?",
        opcoes: [
            "Garantia de que os alimentos não serão roubados",
            "Disponibilidade de alimentos em quantidade suficiente para todos",
            "Uso de cadeados em depósitos de alimentos",
            "Controle governamental sobre toda a produção de alimentos"
        ],
        resposta: 1,
        explicacao: "Segurança alimentar significa que todas as pessoas tenham acesso físico e econômico a alimentos suficientes, seguros e nutritivos."
    },
    {
        pergunta: "O que são Bancos de Alimentos? ",
        opcoes: [
          "Locais que vendem comida gourmet",
          "Instituições que redistribuem alimentos excedentes para quem precisa",
          "Fazendas que produzem sementes transgênicas",
          "Supermercados de luxo",
          
        ],
        resposta: 1,
        explicacao:"Os Bancos de Alimentos são organizações que atuam como pontes entre o desperdício e a fome"
    },
    {
        pergunta: "O que é agricultura sustentável?",
        opcoes: [
            "Agricultura que usa apenas máquinas modernas",
            "Produção que atende às necessidades atuais sem comprometer as gerações futuras",
            "Cultivo apenas de produtos orgânicos",
            "Sistema que prioriza apenas o lucro econômico"
        ],
        resposta: 1,
        explicacao: "Agricultura sustentável busca equilibrar produtividade, cuidado ambiental e justiça social."
    },
    {
        pergunta: "Qual região do mundo concentra o maior número de pessoas subnutridas?",
        opcoes: [
            "América do Norte",
            "Europa",
            "Ásia",
            "África"
        ],
        resposta: 2,
        explicacao: "A Ásia concentra o maior número absoluto de pessoas com fome, embora a África tenha a maior prevalência proporcional."
    },
    {
        pergunta: "O que são sistemas alimentares?",
        opcoes: [
            "Apenas a produção agrícola",
            "Todas as etapas desde a produção até o consumo de alimentos",
            "Só a distribuição de alimentos",
            "Exclusivamente o comércio de produtos alimentícios"
        ],
        resposta: 1,
        explicacao: "Sistemas alimentares englobam produção, processamento, transporte, distribuição e consumo de alimentos."
    },
    {
        pergunta: "Qual destes é um dos alvos específicos do ODS 2?",
        opcoes: [
            "Dobrar a produtividade agrícola até 2030",
            "Acabar com todas as formas de desnutrição até 2025",
            "Garantir acesso universal a alimentos seguros e nutritivos até 2030",
            "Eliminar completamente o uso de agrotóxicos"
        ],
        resposta: 2,
        explicacao: "Entre os alvos do ODS 2 estão acabar com a fome e garantir acesso a alimentos seguros, nutritivos e suficientes para todos."
    },
    {
        pergunta: "O que é perda alimentar?",
        opcoes: [
            "Alimentos que estragam durante a colheita e transporte",
            "Comida que sobra no prato",
            "Produtos alimentícios que passam da validade",
            "Tudo o que é jogado fora pelo consumidor"
        ],
        resposta: 0,
        explicacao: "Perda alimentar ocorre nas etapas de produção, pós-colheita e processamento, diferente do desperdício que ocorre no varejo e consumo."
    },
    {
        pergunta: "Qual destas iniciativas contribui para o ODS 2?",
        opcoes: [
            "Banco de alimentos",
            "Fast food 24 horas",
            "Exportação de grãos em grande escala",
            "Cultivo intensivo de um único produto"
        ],
        resposta: 0,
        explicacao: "Bancos de alimentos ajudam a reduzir o desperdício e garantir acesso a alimentos para populações vulneráveis."
    },
    {
        pergunta: "Qual o papel da biodiversidade no ODS 2?",
        opcoes: [
            "Não tem relação direta",
            "É essencial para sistemas alimentares resilientes",
            "Só é importante para a preservação de espécies",
            "Apenas para fins turísticos"
        ],
        resposta: 1,
        explicacao: "A biodiversidade agrícola torna os sistemas alimentares mais resilientes às mudanças climáticas e pragas."
    },
    {
        pergunta: "Como a fome zero beneficia outros ODS?",
        opcoes: [
            "Não tem impacto em outros objetivos",
            "Pessoas bem nutridas têm melhor saúde e capacidade de aprendizado",
            "Aumenta apenas a produtividade no trabalho",
            "Só beneficia diretamente o ODS 3 (Saúde)"
        ],
        resposta: 1,
        explicacao: "Erradicar a fome contribui para saúde, educação, igualdade de gênero e redução de desigualdades, entre outros ODS."
    },
    {
        pergunta: "Qual tecnologia é aliada do ODS 2 para aumentar a produtividade sem danos ambientais?",
        opcoes:[
            "Queimadas controladas",
            "Desmatamento mecanizado",
            "Agricultura de precisão (uso de drones, sensores, etc)",
            "Uso indiscriminado de fertilizantes químicos",
        ],
        resposta:2,
        explicacao: "A agricultura de precisão utiliza tecnologia para aplicar água, fertilizantes e defensivos somente onde e quando são necessários, evitando desperdícios e poluição aumentando assim a produtividade, protegendo o meio ambiente e apoiando pequenos agricultores."
    },
    {   
        pergunta:"Por que o ODS 2 incentiva a conexão entre produtores rurais e consumidores urbanos?",
        opcoes:[
            "Para aumentar o preço dos alimentos",
            "Impedir a venda direta em feiras livres",
            "Subsidiar grandes redes de supermercado",
            "Reduzir intermediários e fortalecer economias locais"
        ],
        resposta:3,
        explicacao:" Canais curtos (como feiras orgânicas) melhoram a renda do agricultor e o acesso a alimentos frescos."
    },
    {
        pergunta: "Como o consumidor pode reduzir o desperdício de alimentos em casa?",
        opcoes:[
            "Planejar compras e aproveitar talos/cascas",
            "Cozinhar apenas enlatados",
            "Comer apenas fora de casa",
            "Ignorar datas de validade",
        ],
        resposta:0,
        explicacao: "No Brasil é desperdiçado 27 milhões de toneladas de comida/ano(EMBRAPA)"
    },
    {
        pergunta:"Qual o impacto do desperdício de alimentos no clima?",
        opcoes:[
            "Reduz as emissões de metano",
            "Se decomposto, gera gás metano (25x mais poluente que CO2)",
            "Melhora a qualidade do solo",
            "Não tem relação com o efeito estufa",
        ],
        resposta:1,
        explicacao: "8% das emissões globais vêm de alimentos descartados (ONU Meio Ambiente)"
    },
    {
        pergunta:"Se 1/3 de toda a comida produzida no mundo é desperdiçada, enquanto 828 Milhões passam fome, qual e a solução URGENTE proposta pelo ODS 2?",
        opcoes:[
            "Importar alimentos de paises ricos",
            "Ignorar o problema e focar em outras metas",
            "Importar alimentos de países ricos",
            "Transformar sistemas alimentares para reduzir perdas e garantir acesso equitativo",
        ],
        resposta:3,
        explicacao: "Não falta comida no mundo, falta justiça no sistema! O ODS 2 pressiona por políticas contra desperdício, apoio a agricultura familiar e tecnologias acessíveis. A fome é um crime político, não fracasso agrícola."
    },
];
        
const meuQuiz = new Quiz(perguntas);
meuQuiz.iniciar();