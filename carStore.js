const enviarEmail = require('./enviar-email');

const cadastro = [
  { nome: "José", email: "jose@email.com.br", flag: true },
  { nome: "Luciana", email: "luciana@email.com.br", flag: true },
  { nome: "Carlos", email: "carlos@email.com.br", flag: false },
  { nome: "Ronaldo", email: "ronaldo@email.com.br", flag: true },
  { nome: "Marta", email: "marta@email.com.br", flag: false },
];

let cadastroValidado = [];

function validarFlag() {
  for (let i = 0; i < cadastro.length; i++) {
    if (cadastro[i].flag === true) {   
      cadastroValidado.push(cadastro[i]);
    }
  }    
}  
validarFlag();

function diaDaSemana() {
  const hoje = new Date();
  const segundaFeira = hoje.getDay();
  return segundaFeira === 1;
}

function enviarEmailSegunda() {
  const segundaFeira = diaDaSemana();
  
  if (segundaFeira) {
    const novosVeiculos = ["Polo GTS", "Golf TSI", "T-Cross TSI"];
    const maisVendidos = ["Voyage Comfortline", "Polo Track", "Fox Rock in Rio"];

    for (const cliente of cadastroValidado) {
    const emailStatus = enviarEmail(cliente.email, "Ofertas Especiais Para Clientes Especiais", `
    Olá ${cliente.nome}! Está pronto(a) para uma aventura emocionante na CarStore? Temos o prazer de apresentar nossas ofertas irresistíveis em novos veículos e nos mais vendidos, cada um representando uma fusão única de estilo e desempenho que vai te deixar sem fôlego.

    
    Descubra os mais recentes modelos que acabaram de chegar
    Novos veículos: ${novosVeiculos.join(", ")}

    E não se esqueça de conferir nossos campeões de vendas
    Mais vendidos: ${maisVendidos.join(", ")}
      

    São esses carros que têm encantado nossos clientes e conquistado as estradas com sua performance excepcional.

    Então, o que você está esperando? Junte-se a nós nesta jornada emocionante rumo à estrada dos seus sonhos. Visite-nos hoje mesmo e deixe-nos ajudá-lo a encontrar o carro perfeito para você.
    
    Mal podemos esperar para fazer parte da sua história automotiva!
    
    `);
    console.log(emailStatus);
    }
  } else {
    console.log("Como não é segunda-feira, não enviaremos nenhum e-mail.");
  }
}
enviarEmailSegunda();