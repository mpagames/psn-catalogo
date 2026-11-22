/* =====================================================================
   CATÁLOGO PSN — DADOS DOS PRODUTOS
   Para mudar preço, nome, descrição, fotos ou cores, mude SÓ este arquivo.
   Preços: use ponto no lugar da vírgula (ex.: 13.5 = R$ 13,50).
   ===================================================================== */

const LOJA = {
  nome: 'PSN',
  whatsapp: '5548992253957',          // número que recebe os pedidos (55 + DDD + número)
  instagram: 'psn.camada3d',           // sem @. Em branco = não mostra
  frase: 'Peças impressas em 3D, feitas com carinho, camada por camada.',
  precosDeTeste: false                 // true = mostra o aviso "preços de teste". Mude para false quando os preços forem os reais
};

/* SEÇÕES = as abas grandes do catálogo.
   emBreve: true = a aba aparece com um aviso "em breve" enquanto não tiver produtos. */
const SECOES = [
  { id: 'chaveiros', nome: 'Monte seu chaveiro', icone: '🔑', capa: 'capa-chaveiros.jpg' },
  { id: 'natal', nome: 'Especial de Natal', icone: '🎄', capa: 'capa-natal.jpg' },
  { id: 'religiosos', nome: 'Religiosos', icone: '🙏', emBreve: true,
    textoEmBreve: 'Estamos preparando imagens religiosas impressas em 3D. Quer ser avisado(a) quando chegarem?' }
];

/* CATEGORIAS = os filtros dentro de cada seção */
const CATEGORIAS = [
  { id: 'kits', nome: 'Chaveiro com nome', secao: 'chaveiros' },
  { id: 'chaveiros', nome: 'Chaveiro com nome', secao: 'chaveiros' },
  { id: 'clickers', nome: 'Bichinhos clickers', secao: 'chaveiros', capa: 'capa-clickers.jpg', capaInteira: true },
  { id: 'articulados', nome: 'Bichinhos articulados', secao: 'chaveiros', capa: 'capa-articulados.jpg' },
  { id: 'natal-kits', nome: 'Natal', secao: 'natal' },
  { id: 'cordoes', nome: 'Cordinhas', secao: 'chaveiros' }
];

const PRODUTOS = [
  {
    id: 'chaveiro', cat: 'chaveiros', tipo: 'nome', descontoPix: true, oculto: true,   // agora é montado dentro do "Monte seu chaveiro"
    formato: 'retrato',
    nome: 'Chaveiro com nome',
    descricao: 'Cada letra vem numa caixeta com switch: dá para apertar, faz “clique”! As caixetas se encaixam formando o nome. Escolha as cores e veja a prévia.',
    preco: 7.5, unidade: 'letra',
    fotos: ["letrinhas-rosa-com-letra-dourada.jpg", "letrinhas-rosa-com-letra-azul.jpg", "letrinhas-amarelo-com-letra-azul.jpg", "letrinhas-verde-com-letra-rosa.jpg", "letrinhas-lilas-com-letra-dourada.jpg", "letrinhas-preto-com-letra-azul.jpg", "caixeta-rosa.jpg", "caixeta-rosa-perolado.jpg", "caixeta-lilas.jpg", "caixeta-roxo.jpg", "caixeta-violeta.jpg", "caixeta-azul-claro-1.jpg", "caixeta-azul-claro-2.jpg", "caixeta-azul-metalico.jpg", "caixeta-turquesa.jpg", "caixeta-verde.jpg", "caixeta-amarelo-claro.jpg", "caixeta-amarelo.jpg", "caixeta-laranja.jpg", "caixeta-branco.jpg", "caixeta-preto.jpg", "caixeta-lisa-pedro.jpg", "chaveiro-ana.jpg", "kit-helena.jpg"],
    // cores da letrinha (teclinha + letra em relevo)
    cores: [
      {"nome": "Rosa com letra dourada", "base": "#F0B2D2", "letra": "#D9A21B", "foto": "letrinhas-rosa-com-letra-dourada.jpg"},
      {"nome": "Rosa com letra azul lavanda", "base": "#F0B2D2", "letra": "#C9CBF0", "foto": "letrinhas-rosa-com-letra-azul.jpg"},
      {"nome": "Amarelo pastel com letra azul", "base": "#EFEB9E", "letra": "#2F55C9", "foto": "letrinhas-amarelo-com-letra-azul.jpg"},
      {"nome": "Verde limão com letra rosa", "base": "#A6E6B2", "letra": "#E8559A", "foto": "letrinhas-verde-com-letra-rosa.jpg"},
      {"nome": "Azul lavanda com letra dourada", "base": "#C9CBF0", "letra": "#D9A21B", "foto": "letrinhas-lilas-com-letra-dourada.jpg"},
      {"nome": "Preto com letra azul", "base": "#2A2A2A", "letra": "#3D6BFF", "foto": "letrinhas-preto-com-letra-azul.jpg"}
    ],
    // modelos de caixeta: Ondulada (cor por letra, usa a "Cor da caixeta" abaixo) e Lisa (peça única, uma cor, até 10 letras). Mesmo preço.
    modelos: [
      { nome: 'Ondulada', descricao: 'Cada letra numa caixeta, e dá para escolher uma cor para cada letra.' },
      { nome: 'Lisa', descricao: 'Modelo mais simples, numa peça só e na mesma cor para o nome todo. Vai até 10 letras.', pecaUnica: true, maxLetras: 10,
        foto: 'caixeta-lisa-pedro.jpg', cores: [{ nome: 'Preto', cor: '#2A2A2A' }] }
    ],
    // cor da caixeta (o cliente pode escolher uma cor para cada letra)
    opcoes: [{ nome: 'Cor da caixeta', valores: [
      {"nome": "Rosa", "cor": "#F0B2D2", "foto": "caixeta-rosa.jpg"},
      {"nome": "Rosa perolado", "cor": "#EED3E8", "foto": "caixeta-rosa-perolado.jpg"},
      {"nome": "Azul lavanda", "cor": "#C9CBF0", "foto": "caixeta-lilas.jpg"},
      {"nome": "Roxo", "cor": "#8763D2", "foto": "caixeta-roxo.jpg"},
      {"nome": "Violeta", "cor": "#6B3FE0", "foto": "caixeta-violeta.jpg"},
      {"nome": "Azul claro", "cor": "#9CCDF0", "foto": "caixeta-azul-claro-1.jpg"},
      {"nome": "Azul perolado", "cor": "#52AEDB", "foto": "caixeta-azul-metalico.jpg"},
      {"nome": "Azul turquesa", "cor": "#4FC4DB", "foto": "caixeta-turquesa.jpg"},
      {"nome": "Verde limão", "cor": "#A6E6B2", "foto": "caixeta-verde.jpg"},
      {"nome": "Amarelo pastel", "cor": "#EFEB9E", "foto": "caixeta-amarelo-claro.jpg"},
      {"nome": "Amarelo", "cor": "#F7BC00", "foto": "caixeta-amarelo.jpg"},
      {"nome": "Laranja", "cor": "#F68650", "foto": "caixeta-laranja.jpg"},
      {"nome": "Branco", "cor": "#FFFFFF", "foto": "caixeta-branco.jpg"},
      {"nome": "Preto", "cor": "#2A2A2A", "foto": "caixeta-preto.jpg"}
    ] }]
  },
  {
    id: 'clicker', cat: 'clickers', descontoPix: true, formato: 'retrato',
    nome: 'Bichinho clicker no baldinho',
    descricao: 'Faz “clique” dentro do baldinho. Escolha o bichinho e a cor.',
    preco: 15,
    fotos: ["capa-clickers.jpg", "pinguim-baldinho-branco-2.jpg", "pinguim-baldinho-amarelo.jpg", "pinguim-baldinho-rosa.jpg", "pinguim-baldinho-bege.jpg", "pinguim-baldinho-verde-agua.jpg", "pinguim-baldinho-verde-claro.jpg", "pinguim-baldinho-lavanda.jpg", "pinguim-baldinho-lilas.jpg", "pinguim-baldinho-lilas-rosado.jpg", "raposinha-baldinho-branco.jpg", "raposinha-baldinho-amarelo.jpg", "raposinha-baldinho-rosa.jpg", "raposinha-baldinho-bege-2.jpg", "raposinha-baldinho-verde-agua.jpg", "raposinha-baldinho-verde-claro.jpg", "raposinha-baldinho-lavanda.jpg", "raposinha-baldinho-lilas.jpg", "raposinha-baldinho-lilas-rosado.jpg", "clk-coelhinho-branco.jpg", "clk-coelhinho-amarelo.jpg", "clk-coelhinho-rosa.jpg", "clk-coelhinho-bege.jpg", "clk-coelhinho-verde-agua.jpg", "clk-coelhinho-verde-claro.jpg", "clk-coelhinho-lavanda.jpg", "clk-coelhinho-lilas.jpg", "clk-coelhinho-lilas-rosado.jpg", "sapinho-baldinho-branco.jpg", "sapinho-baldinho-amarelo.jpg", "sapinho-baldinho-rosa.jpg", "sapinho-baldinho-bege.jpg", "sapinho-baldinho-verde-agua.jpg", "sapinho-baldinho-verde-claro.jpg", "sapinho-baldinho-lavanda.jpg", "sapinho-baldinho-lilas.jpg", "sapinho-baldinho-lilas-rosado.jpg", "lobo-baldinho-branco.jpg", "lobo-baldinho-amarelo.jpg", "lobo-baldinho-rosa.jpg", "lobo-baldinho-bege.jpg", "lobo-baldinho-verde-agua.jpg", "lobo-baldinho-verde-claro.jpg", "lobo-baldinho-lavanda.jpg", "lobo-baldinho-lilas.jpg", "lobo-baldinho-lilas-rosado.jpg", "urso-branco-baldinho-branco.jpg", "urso-branco-baldinho-amarelo.jpg", "urso-branco-baldinho-rosa.jpg", "urso-branco-baldinho-bege.jpg", "urso-branco-baldinho-verde-agua.jpg", "urso-branco-baldinho-verde-claro.jpg", "urso-branco-baldinho-lavanda.jpg", "urso-branco-baldinho-lilas.jpg", "urso-branco-baldinho-lilas-rosado.jpg", "urso-creme-baldinho-branco.jpg", "urso-creme-baldinho-amarelo.jpg", "urso-creme-baldinho-rosa.jpg", "urso-creme-baldinho-bege.jpg", "urso-creme-baldinho-verde-agua.jpg", "urso-creme-baldinho-verde-claro.jpg", "urso-creme-baldinho-lavanda.jpg", "urso-creme-baldinho-lilas.jpg", "urso-creme-baldinho-lilas-rosado.jpg"],
    opcoes: [
      { nome: 'Bichinho', valores: [
        {"nome": "Pinguim", "foto": "pinguim-baldinho-rosa.jpg"},
        {"nome": "Raposinha", "foto": "raposinha-baldinho-rosa.jpg"},
        {"nome": "Coelhinho", "foto": "clk-coelhinho-rosa.jpg"},
        {"nome": "Sapinho", "foto": "sapinho-baldinho-rosa.jpg"},
        {"nome": "Lobo", "foto": "lobo-baldinho-rosa.jpg"},
        {"nome": "Urso branco", "foto": "urso-branco-baldinho-rosa.jpg"},
        {"nome": "Urso creme", "foto": "urso-creme-baldinho-rosa.jpg"}
      ] },
      { nome: 'Baldinho', valores: [
        {"nome": "Branco", "cor": "#FFFFFF"},
        {"nome": "Amarelo pastel", "cor": "#EFEB9E"},
        {"nome": "Rosa", "cor": "#EDA9CB"},
        {"nome": "Bege", "cor": "#D8C3A0"},
        {"nome": "Azul pastel", "cor": "#A2DDF0"},
        {"nome": "Verde pastel", "cor": "#CDEBC4"},
        {"nome": "Azul lavanda", "cor": "#C9CBF0"},
        {"nome": "Lilás", "cor": "#C2B6EC"},
        {"nome": "Lilás rosa", "cor": "#E7B5EF"}
      ] }
    ],
    // foto de cada combinação "Bichinho|Baldinho"
    fotosCombo: {"Pinguim|Branco": "pinguim-baldinho-branco-2.jpg", "Pinguim|Amarelo pastel": "pinguim-baldinho-amarelo.jpg", "Pinguim|Rosa": "pinguim-baldinho-rosa.jpg", "Pinguim|Bege": "pinguim-baldinho-bege.jpg", "Pinguim|Azul pastel": "pinguim-baldinho-verde-agua.jpg", "Pinguim|Verde pastel": "pinguim-baldinho-verde-claro.jpg", "Pinguim|Azul lavanda": "pinguim-baldinho-lavanda.jpg", "Pinguim|Lilás": "pinguim-baldinho-lilas.jpg", "Pinguim|Lilás rosa": "pinguim-baldinho-lilas-rosado.jpg", "Raposinha|Branco": "raposinha-baldinho-branco.jpg", "Raposinha|Amarelo pastel": "raposinha-baldinho-amarelo.jpg", "Raposinha|Rosa": "raposinha-baldinho-rosa.jpg", "Raposinha|Bege": "raposinha-baldinho-bege-2.jpg", "Raposinha|Azul pastel": "raposinha-baldinho-verde-agua.jpg", "Raposinha|Verde pastel": "raposinha-baldinho-verde-claro.jpg", "Raposinha|Azul lavanda": "raposinha-baldinho-lavanda.jpg", "Raposinha|Lilás": "raposinha-baldinho-lilas.jpg", "Raposinha|Lilás rosa": "raposinha-baldinho-lilas-rosado.jpg", "Coelhinho|Branco": "clk-coelhinho-branco.jpg", "Coelhinho|Amarelo pastel": "clk-coelhinho-amarelo.jpg", "Coelhinho|Rosa": "clk-coelhinho-rosa.jpg", "Coelhinho|Bege": "clk-coelhinho-bege.jpg", "Coelhinho|Azul pastel": "clk-coelhinho-verde-agua.jpg", "Coelhinho|Verde pastel": "clk-coelhinho-verde-claro.jpg", "Coelhinho|Azul lavanda": "clk-coelhinho-lavanda.jpg", "Coelhinho|Lilás": "clk-coelhinho-lilas.jpg", "Coelhinho|Lilás rosa": "clk-coelhinho-lilas-rosado.jpg", "Sapinho|Branco": "sapinho-baldinho-branco.jpg", "Sapinho|Amarelo pastel": "sapinho-baldinho-amarelo.jpg", "Sapinho|Rosa": "sapinho-baldinho-rosa.jpg", "Sapinho|Bege": "sapinho-baldinho-bege.jpg", "Sapinho|Azul pastel": "sapinho-baldinho-verde-agua.jpg", "Sapinho|Verde pastel": "sapinho-baldinho-verde-claro.jpg", "Sapinho|Azul lavanda": "sapinho-baldinho-lavanda.jpg", "Sapinho|Lilás": "sapinho-baldinho-lilas.jpg", "Sapinho|Lilás rosa": "sapinho-baldinho-lilas-rosado.jpg", "Lobo|Branco": "lobo-baldinho-branco.jpg", "Lobo|Amarelo pastel": "lobo-baldinho-amarelo.jpg", "Lobo|Rosa": "lobo-baldinho-rosa.jpg", "Lobo|Bege": "lobo-baldinho-bege.jpg", "Lobo|Azul pastel": "lobo-baldinho-verde-agua.jpg", "Lobo|Verde pastel": "lobo-baldinho-verde-claro.jpg", "Lobo|Azul lavanda": "lobo-baldinho-lavanda.jpg", "Lobo|Lilás": "lobo-baldinho-lilas.jpg", "Lobo|Lilás rosa": "lobo-baldinho-lilas-rosado.jpg", "Urso branco|Branco": "urso-branco-baldinho-branco.jpg", "Urso branco|Amarelo pastel": "urso-branco-baldinho-amarelo.jpg", "Urso branco|Rosa": "urso-branco-baldinho-rosa.jpg", "Urso branco|Bege": "urso-branco-baldinho-bege.jpg", "Urso branco|Azul pastel": "urso-branco-baldinho-verde-agua.jpg", "Urso branco|Verde pastel": "urso-branco-baldinho-verde-claro.jpg", "Urso branco|Azul lavanda": "urso-branco-baldinho-lavanda.jpg", "Urso branco|Lilás": "urso-branco-baldinho-lilas.jpg", "Urso branco|Lilás rosa": "urso-branco-baldinho-lilas-rosado.jpg", "Urso creme|Branco": "urso-creme-baldinho-branco.jpg", "Urso creme|Amarelo pastel": "urso-creme-baldinho-amarelo.jpg", "Urso creme|Rosa": "urso-creme-baldinho-rosa.jpg", "Urso creme|Bege": "urso-creme-baldinho-bege.jpg", "Urso creme|Azul pastel": "urso-creme-baldinho-verde-agua.jpg", "Urso creme|Verde pastel": "urso-creme-baldinho-verde-claro.jpg", "Urso creme|Azul lavanda": "urso-creme-baldinho-lavanda.jpg", "Urso creme|Lilás": "urso-creme-baldinho-lilas.jpg", "Urso creme|Lilás rosa": "urso-creme-baldinho-lilas-rosado.jpg"}
  },
  {
    id: 'gatinho', cat: 'articulados', descontoPix: true, formato: 'retrato',
    nome: 'Gatinho articulado',
    descricao: 'Gatinho com chifrinho, todo articulado: mexe patinhas, corpo e rabo.',
    preco: 15,
    fotos: ["artic-gatinho-azul-2.jpg", "artic-gatinho-azul-3.jpg", "artic-gatinho-rosa-1.jpg", "artic-gatinho-rosa-2.jpg"],
    opcoes: [{ nome: 'Cor', valores: [{ "nome": "Azul", "cor": "#BFE6E6", "foto": "artic-gatinho-azul-2.jpg" }, { "nome": "Rosa", "cor": "#F4B6CF", "foto": "artic-gatinho-rosa-1.jpg" }] }]
  },
  {
    id: 'dalmata', cat: 'articulados', descontoPix: true, formato: 'retrato',
    nome: 'Dálmata bombeiro',
    descricao: 'Filhote de dálmata com capacete e roupa de bombeiro, articulado.',
    preco: 15,
    fotos: ["artic-dalmata-bombeiro-1.jpg", "artic-dalmata-bombeiro-2.jpg"],
  },
  {
    id: 'foquinha', cat: 'articulados', descontoPix: true, formato: 'retrato',
    nome: 'Foquinha aviadora',
    descricao: 'Foquinha com gorro e óculos de aviador, toda articulada.',
    preco: 15,
    fotos: ["artic-foquinha-aviadora-1.jpg", "artic-foquinha-aviadora-2.jpg"],
  },
  {
    id: 'hipopotamo', cat: 'articulados', descontoPix: true, formato: 'retrato',
    nome: 'Hipopótamo',
    descricao: 'Hipopótamo articulado de olhões, anda, deita e faz pose. Escolha a cor.',
    preco: 15,
    fotos: ["artic-hipopotamo-azul-1.jpg", "artic-hipopotamo-azul-2.jpg", "artic-hipopotamo-marrom-1.jpg", "artic-hipopotamo-marrom-2.jpg"],
    opcoes: [{ nome: 'Cor', valores: [{ "nome": "Azul", "cor": "#BFE3E0", "foto": "artic-hipopotamo-azul-1.jpg" }, { "nome": "Marrom", "cor": "#8A5530", "foto": "artic-hipopotamo-marrom-1.jpg" }] }]
  },
  {
    id: 'cordao', cat: 'cordoes', oculto: true, formato: 'retrato',   // oculto = não aparece sozinho no catálogo, só dentro do kit
    nome: 'Cordinha',
    descricao: 'Cordão trançado com mosquetão, para pendurar o seu chaveiro na bolsa, mochila ou chave. Escolha a cor.',
    preco: 10,
    fotos: ["painel-de-cordinhas.jpg", "cordinhas-cores.jpg", "cordao-azul.jpg"],
    // cores tiradas da foto do painel de cordinhas (nomes podem ser trocados)
    opcoes: [{ nome: 'Cor da cordinha', valores: [
      { nome: 'Branco', cor: '#FFFFFF' },
      { nome: 'Off-white', cor: '#EFE4CF' },
      { nome: 'Amarelo bebê', cor: '#F3E3A0' },
      { nome: 'Amarelo', cor: '#F5C400' },
      { nome: 'Laranja', cor: '#F07A1A' },
      { nome: 'Vermelho', cor: '#C8102E' },
      { nome: 'Rosa claro', cor: '#F4A6BE' },
      { nome: 'Pink', cor: '#E8457A' },
      { nome: 'Lilás', cor: '#B9A3D6' },
      { nome: 'Azul bebê', cor: '#A9C9E8' },
      { nome: 'Azul claro', cor: '#5CC8EE' },
      { nome: 'Azul royal', cor: '#1446B8' },
      { nome: 'Verde claro', cor: '#CDEBA8' },
      { nome: 'Verde limão', cor: '#7CC832' },
      { nome: 'Bege', cor: '#D9BF94' },
      { nome: 'Cáqui', cor: '#B39B7B' },
      { nome: 'Caramelo', cor: '#B98A58' },
      { nome: 'Marrom', cor: '#8E5D38' },
      { nome: 'Preto', cor: '#1B1B1B' }
    ] }]
  },
  {
    // preco: null = "preço sob consulta". Pendente: árvore de Natal (ainda não impressa) e talvez vela junto.
    id: 'kit-natal', cat: 'natal-kits', formato: 'retrato',
    nome: 'Kit Natal Sagrada Família',
    descricao: 'Sagrada Família (José, Maria e o Menino Jesus na manjedoura) com bandeja e porta-velas canelado, nas cores bege e marrom. Lindo para a decoração de Natal.',
    preco: null,
    fotos: ["natal-presepio-sagrada-familia-frente.jpg", "natal-presepio-sagrada-familia-costas.jpg", "natal-porta-velas-1.jpg", "natal-porta-velas-2.jpg", "natal-sagrada-familia.jpg"]
  }
,
  {
    // preco: null = "preço sob consulta"
    id: 'sagrada-familia-pe', cat: 'natal-kits', formato: 'retrato',
    nome: 'Sagrada Família em pé',
    descricao: 'José e Maria abraçados com o Menino Jesus no colo, em bege. Uma peça delicada para o Natal.',
    preco: null,
    fotos: ["sagrada-familia-em-pe-1.jpg", "sagrada-familia-em-pe-3.jpg"]
  }
];

/* =====================================================================
   DESCONTO NO PIX OU DINHEIRO (automático, pelo valor do pedido)
   Vale para os produtos marcados com  descontoPix: true  (hoje: todos) e para os kits.
   Itens que NÃO devem ganhar (ex.: decoração de Natal): não coloque  descontoPix: true  neles.
   ===================================================================== */
const DESCONTO_PIX = {
  formas: ['Pix', 'Dinheiro'],          // formas de pagamento que ganham o desconto
  faixas: [                             // compras ACIMA de X reais → Y% de desconto
    { acima: 50, porcento: 10 }
  ],
  valeParaKits: true                    // true = kits também entram na conta do desconto
};

/* =====================================================================
   KITS
   preco: valor do kit com 1 letra.  letraAdicional: quanto soma cada letra a mais.
   inclui: o que vem no kit (aparece no site e na mensagem).
   pecas: o que o cliente monta. 'chaveiro' = letra(s) com caixeta.
          { escolha: [...], rotulo: '...', opcional: true } = o cliente pode escolher um desses produtos (soma o preço dele).
   ===================================================================== */
/* Fotos que não podem ser cortadas no celular (peças altas ou fotos antigas). Aceita * no fim: 'natal-*' = todas que começam com natal- */
const FOTOS_INTEIRAS = ['kit-helena.jpg', 'kit-m-azul.jpg', 'natal-*', 'sagrada-familia-*'];

/* Banner do topo: as capas passam sozinhas. Tocar leva para as peças daquele grupo. */
const BANNER = [
  { nome: 'Monte seu chaveiro', frase: 'Seu nome em letrinhas 3D, nas cores que você quiser.', capa: 'capa-chaveiros.jpg', fundo: '#EADDF8', secao: 'chaveiros', filtro: 'kits' },
  { nome: 'Bichinhos clickers', frase: 'Bichinhos fofos que fazem “clique” dentro do baldinho.', capa: 'capa-clickers.jpg', fundo: '#D6F0DC', secao: 'chaveiros', filtro: 'clickers' },
  { nome: 'Bichinhos articulados', frase: 'Mexem as patinhas, o corpo e o rabinho.', capa: 'capa-articulados.jpg', fundo: '#F9DDE9', secao: 'chaveiros', filtro: 'articulados' },
  { nome: 'Especial de Natal', frase: 'Sagrada Família e decoração, feitas camada por camada.', capa: 'capa-natal.jpg', fundo: '#F7EDC4', secao: 'natal' }
];

const KITS = [
  {
    id: 'kit-chaveiro', nome: 'Monte seu chaveiro', secao: 'chaveiros', formato: 'retrato',
    nomePedido: 'Chaveiro personalizado',   // nome que aparece no carrinho e na mensagem do WhatsApp
    // preços: só as letrinhas = precoLetra por letra; com cordinha + pingente = preco (já com 1 letra) + letraAdicional por letra a mais
    precoLetra: 7.5, preco: 15, letraAdicional: 7,
    descricao: 'Escreva o nome, escolha as cores e, se quiser, coloque cordinha com pingente e um bichinho.',
    rotuloInclui: 'Você escolhe',
    inclui: ['O nome em letrinhas com caixeta', 'Cordinha + pingente de brinde (se quiser)', 'Bichinho clicker e/ou articulado (se quiser)'],
    fotos: ["kit-chaveiro-com-sapinho-4.jpg", "kit-m-azul.jpg", "kit-helena.jpg", "painel-de-cordinhas.jpg"],
    pecas: [
      'chaveiro',
      // opcional: com cordinha o preço segue a regra do kit (R$ 15 com 1 letra + R$ 7 por letra a mais)
      { rotulo: 'Quer com cordinha e pingente?', opcional: true, cordinha: true, padrao: 'cordao', sem: 'Não, só as letrinhas', extra: 'pingente de brinde', escolha: ['cordao'] },
      // opcionais: soma o preço do bichinho escolhido (hoje R$ 15,00 cada)
      { rotulo: 'Quer um bichinho clicker junto?', opcional: true, sem: 'Não, sem clicker', escolha: ['clicker'] },
      { rotulo: 'Quer um bichinho articulado junto?', opcional: true, sem: 'Não, sem articulado', escolha: ['gatinho', 'dalmata', 'foquinha', 'hipopotamo'] }
    ]
  }
];
