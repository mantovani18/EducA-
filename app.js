// Conteúdo por faixa etária (dados expandidos com ~10 quizzes cada)
const CONTENT = {
  child: {
    title: 'Criança (<=12)',
    lessons: [
      'O que é um computador e um smartphone (linguagem simples).',
      'Como usar a internet com segurança (não falar com estranhos, pedir ajuda).',
      'O que é uma senha e por que não dividir com amigos.',
      'Como pedir ajuda a um adulto quando algo parecer estranho.'
    ],
    activities: [
      {type: 'info', text: 'Atividade: Desenhe como você imagina a internet e converse com um adulto sobre segurança.'}
    ],
    quizzes: [
      {q:'Recebeu mensagem de um número desconhecido pedindo sua senha. O que fazer?', options:['Responder a mensagem','Não responder e pedir ajuda a um adulto','Enviar a senha'], a:1},
      {q:'Você deve compartilhar sua senha com seu amigo de escola?', options:['Sim','Não'], a:1},
      {q:'O que é seguro ao encontrar algo assustador online?', options:['Fechar e contar a um adulto','Salvar e mostrar para todos'], a:0},
      {q:'Se um jogo pede que você pague com cartão sem seus pais saberem?', options:['Pedir permissão aos pais','Fazer sozinho'], a:0},
      {q:'É certo aceitar pedido de amizade de um estranho?', options:['Sim','Não'], a:1},
      {q:'Devo clicar em links estranhos?', options:['Sim','Não'], a:1},
      {q:'Se alguém pedir sua foto, você deve?', options:['Enviar imediatamente','Pedir ajuda a um adulto'], a:1},
      {q:'Guardamos senhas em papel e mostramos?', options:['Não mostrar','Mostrar sempre'], a:0},
      {q:'O que é um adulto confiável online?', options:['Um estranho com perfil bonito','Um responsável que você conhece'], a:1},
      {q:'Se algo parecer um golpe, o que fazer?', options:['Ignorar e contar a um adulto','Participar'], a:0}
    ]
  },
  teen: {
    title: 'Adolescente (13-19)',
    lessons: [
      'Como usar tecnologia para estudar: organização, mapas mentais, apps de flashcards.',
      'Boas práticas para pesquisar fontes confiáveis (autoridade, data, múltiplas fontes).',
      'Privacidade: configurações de redes sociais e limites saudáveis.'
    ],
    activities: [
      {type:'exercise', text:'Exercício: transforme um tópico do vestibular em 5 flashcards.'}
    ],
    quizzes: [
      {q:'Como verificar se um artigo é confiável?', options:['Checar autor e fonte','Compartilhar sem ler','Apenas olhar título'], a:0},
      {q:'Você recebe link prometendo gabarito do vestibular. O que fazer?', options:['Baixar e executar','Desconfiar e não abrir'], a:1},
      {q:'Uma pessoa pede foto íntima. O que fazer?', options:['Enviar','Negar e contar a alguém de confiança'], a:1},
      {q:'Como proteger conta de redes sociais?', options:['Senha forte e 2FA','Usar a mesma senha em tudo'], a:0},
      {q:'O que é phishing?', options:['Mensagem para roubar dados','Aplicativo de fotos'], a:0},
      {q:'Quando pesquisar, é melhor usar:', options:['Uma única fonte','Múltiplas fontes confiáveis'], a:1},
      {q:'Compartilhar notícias sem checar pode causar:', options:['Desinformação','Fama imediata'], a:0},
      {q:'Ferramenta útil para estudo colaborativo?', options:['Documentos online','Somente papel'], a:0},
      {q:'Como recuperar conta comprometida?', options:['Mudar senha, ativar 2FA e contactar suporte','Ignorar'], a:0},
      {q:'Ao estudar online, gerencie seu tempo com:', options:['Técnica Pomodoro','Assistir sem pausa'], a:0}
    ]
  },
  adult: {
    title: 'Adulto (20-59)',
    lessons: [
      'Produtividade: uso de ferramentas (calendário, e-mail, armazenamento em nuvem).',
      'Segurança: senhas fortes, autenticação de dois fatores, reconhecer e-mails de phishing.',
      'Noções básicas de privacidade e proteção de dados pessoais.'
    ],
    activities: [
      {type:'exercise', text:'Exercício: ative 2FA em uma conta e atualize uma senha fraca.'}
    ],
    quizzes: [
      {q:'Um e-mail pede para clicar em um link e confirmar dados bancários. O que fazer?', options:['Clicar e informar','Entrar diretamente no site do banco'], a:1},
      {q:'Como criar senha forte?', options:['Combinação de frases longas e símbolos','Data de nascimento'], a:0},
      {q:'O que é autenticação de dois fatores (2FA)?', options:['Camada extra de segurança','Mesmo que senha'], a:0},
      {q:'Como reconhecer phishing?', options:['Verificar remetente e links','Assumir que é legítimo'], a:0},
      {q:'Usar Wi-Fi público sem cuidados é:', options:['Seguro sempre','Risco para dados pessoais'], a:1},
      {q:'Backup é importante para:', options:['Proteger seus arquivos','Perder espaço'], a:0},
      {q:'Armazenamento em nuvem é útil para:', options:['Compartilhar e acessar arquivos','Nunca fazer backup local'], a:0},
      {q:'Ao receber anexo suspeito, você:', options:['Abrir imediatamente','Verificar antes de abrir'], a:1},
      {q:'Negócio online pedindo pagamento via transferência desconhecida é:', options:['Modelo comum de golpe','100% seguro'], a:0},
      {q:'Um site seguro começa com:', options:['http://','https://'], a:1}
    ]
  },
  senior: {
    title: 'Idoso (60+)',
    lessons: [
      'Por que aprender o básico (comunicação com família, informação, serviços).',
      'Como identificar golpes comuns e mensagens falsas.',
      'Como usar telefone e serviços online com segurança.'
    ],
    activities: [
      {type:'practice', text:'Atividade prática: peça ajuda para configurar contato de emergência no telefone.'}
    ],
    quizzes: [
      {q:'Uma mensagem diz que você ganhou um prêmio e pede seus dados. O que fazer?', options:['Enviar dados','Ignorar e verificar com a empresa oficial'], a:1},
      {q:'Se alguém liga dizendo ser banco e pede senha, você:', options:['Dar a senha','Ligar ao número oficial do banco'], a:1},
      {q:'Ao receber link desconhecido no WhatsApp, você:', options:['Clicar','Perguntar a alguém de confiança'], a:1},
      {q:'É seguro instalar aplicativos de origem desconhecida?', options:['Sim','Não'], a:1},
      {q:'Devo compartilhar códigos que chegam por SMS?', options:['Não compartilhar','Compartilhar com quem pedir'], a:0},
      {q:'Como confirmar se um e-mail é real?', options:['Checar o remetente e procurar informações','Acreditar somente no assunto'], a:0},
      {q:'Se algo parecer confuso online, o melhor é:', options:['Pedir ajuda a alguém de confiança','Seguir instruções sem pensar'], a:0},
      {q:'Mantenha backups de fotos e documentos para:', options:['Segurança e acesso','Perder tudo'], a:0},
      {q:'Ao conversar com familiares, use tecnologia para:', options:['Compartilhar fotos e mensagens','Nunca usar'], a:0},
      {q:'Antes de pagar por algo online, verifique:', options:['Avaliações e site oficial','Apenas preço baixo'], a:0}
    ]
  }
};

// Elementos do DOM
const ageSection = document.getElementById('age-select');
const contentSection = document.getElementById('content');
const lessonsEl = document.getElementById('lessons');
const activityEl = document.getElementById('activity');
const contentTitle = document.getElementById('content-title');
const backBtn = document.getElementById('back');
const quizArea = document.getElementById('quiz-area');
const quizTitle = document.getElementById('quiz-title');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const nextQuizBtn = document.getElementById('next-quiz');

let currentAgeKey = null;
let currentQuizIndex = 0;
let builderState = null;

// Navegação
ageSection.addEventListener('click', e => {
  const btn = e.target.closest('button[data-age]');
  if (!btn) return;
  const key = btn.dataset.age;
  openForAge(key);
});
backBtn.addEventListener('click', () => {
  contentSection.classList.add('hidden');
  quizArea.classList.add('hidden');
  ageSection.classList.remove('hidden');
  currentAgeKey = null;
});

function openForAge(key){
  currentAgeKey = key;
  const data = CONTENT[key];
  contentTitle.textContent = data.title;
  lessonsEl.innerHTML = '';
  const ul = document.createElement('ul');
  data.lessons.forEach(l => { const li = document.createElement('li'); li.textContent = l; ul.appendChild(li)});
  lessonsEl.appendChild(ul);

  activityEl.innerHTML = '';
  data.activities.forEach(a => {
    const d = document.createElement('div'); d.className = 'card';
    const h = document.createElement('strong'); h.textContent = a.type === 'info' ? 'Atividade' : 'Exercício';
    const p = document.createElement('p'); p.textContent = a.text;
    d.appendChild(h); d.appendChild(p);
    activityEl.appendChild(d);
  });

  ageSection.classList.add('hidden');
  contentSection.classList.remove('hidden');

  // Preparar quiz
  currentQuizIndex = 0;
  prepareQuizFor(data.quizzes);

  // Preparar builder (atividade prática)
  prepareBuilderFor(key);
}

function prepareQuizFor(quizzes){
  if (!quizzes || quizzes.length === 0){ quizArea.classList.add('hidden'); return; }
  quizArea.classList.remove('hidden');
  showQuizQuestion(quizzes, 0);
}

function showQuizQuestion(quizzes, idx){
  const q = quizzes[idx];
  quizQuestion.textContent = q.q;
  quizOptions.innerHTML = '';
  quizFeedback.textContent = '';
  nextQuizBtn.classList.add('hidden');
  q.options.forEach((opt,i) => {
    const b = document.createElement('button'); b.className = 'quiz-option'; b.textContent = opt; b.dataset.i = i;
    b.addEventListener('click', ()=> handleQuizAnswer(b, i, q.a));
    quizOptions.appendChild(b);
  });
}

function handleQuizAnswer(buttonEl, chosenIndex, correctIndex){
  // bloquear opções
  Array.from(quizOptions.children).forEach(ch => ch.disabled = true);
  if (chosenIndex === correctIndex){
    buttonEl.classList.add('correct');
    quizFeedback.textContent = 'Correto! Boa resposta.';
  } else {
    buttonEl.classList.add('wrong');
    // mostrar qual era a correta
    const correct = Array.from(quizOptions.children).find(c => Number(c.dataset.i) === correctIndex);
    if (correct) correct.classList.add('correct');
    quizFeedback.textContent = 'Resposta incorreta. Veja a opção correta destacada.';
  }
  nextQuizBtn.classList.remove('hidden');
  nextQuizBtn.onclick = () => {
    const quizzes = CONTENT[currentAgeKey].quizzes;
    const next = (currentQuizIndex + 1);
    if (next < quizzes.length){ currentQuizIndex = next; showQuizQuestion(quizzes, next); }
    else { quizFeedback.textContent = 'Fim do quiz. Volte às lições ou escolha outra faixa etária.'; nextQuizBtn.classList.add('hidden'); }
  }
}

// Acessibilidade mínima: permitir selecionar idade por teclado (enter)
document.querySelectorAll('.age-buttons button').forEach(b => {
  b.addEventListener('keyup', e => { if (e.key === 'Enter') b.click(); });
});

// Dica: o conteúdo é facilmente expansível alterando o objeto CONTENT no topo do arquivo.
console.log('ConectaTech carregado');

/* ---------------- Builder (drag-and-drop) ---------------- */
const COMPONENTS_DEFS = [
  {id:'motherboard', label:'Placa-mãe', slot:'motherboard'},
  {id:'psu', label:'Fonte', slot:'psu'},
  {id:'ram', label:'Memória RAM', slot:'ram'},
  {id:'storage', label:'HD/SSD', slot:'storage'},
  {id:'cpu', label:'Processador (CPU)', slot:'cpu'},
  {id:'gpu', label:'Placa de vídeo (GPU)', slot:'gpu'},
  {id:'network', label:'Cabo de rede', slot:'network'},
  {id:'monitor', label:'Monitor', slot:'peripherals'},
  {id:'keyboard', label:'Teclado', slot:'peripherals'},
  {id:'mouse', label:'Mouse', slot:'peripherals'}
];

const builderArea = document.getElementById('builder-area');
const componentsContainer = document.getElementById('components');
const pcSkeleton = document.getElementById('pc-skeleton');
const builderFeedback = document.getElementById('builder-feedback');
const resetBuilderBtn = document.getElementById('reset-builder');

function prepareBuilderFor(ageKey){
  // mostrar área
  builderArea.classList.remove('hidden');
  componentsContainer.innerHTML = '';
  builderFeedback.textContent = '';
  builderState = {placed: {}, ageKey};

  // ordem e dicas por faixa etária — crianças: menos componentes, tutoriais visíveis
  let defs = COMPONENTS_DEFS.slice();
  if (ageKey === 'child') defs = defs.filter(c => ['motherboard','psu','ram','monitor'].includes(c.id));
  if (ageKey === 'senior') defs = defs.filter(c => ['motherboard','psu','monitor','keyboard','mouse','network'].includes(c.id));

  // render components as draggable items
  defs.forEach(def => {
    const d = document.createElement('div'); d.className = 'component';
    d.draggable = true; d.id = `comp-${def.id}`; d.textContent = def.label; d.dataset.slot = def.slot;
    d.setAttribute('role','button'); d.setAttribute('tabindex','0');
    d.addEventListener('dragstart', onDragStart);
    d.addEventListener('keydown', (e)=>{ if(e.key==='Enter') tryKeyboardPlace(def.slot, d); });
    componentsContainer.appendChild(d);
  });

  // limpar slots
  Array.from(pcSkeleton.querySelectorAll('.slot')).forEach(s => {
    s.classList.remove('correct','wrong'); s.dataset.filled = '';
    // adicionar descrição de acordo com a faixa etária (dica para onde colocar)
    const slotKey = s.dataset.slot;
  // mostrar apenas a descrição (lado direito)
  s.innerHTML = `<div class="slot-desc">${slotDescriptionFor(slotKey, ageKey)}</div>`;
    s.ondragover = onDragOver; s.ondrop = onDrop;
  });

  resetBuilderBtn.onclick = resetBuilder;
}

function onDragStart(e){
  e.dataTransfer.setData('text/plain', e.target.id);
  e.target.setAttribute('aria-grabbed','true');
}
function onDragOver(e){ e.preventDefault(); }
function onDrop(e){
  e.preventDefault();
  const id = e.dataTransfer.getData('text/plain');
  const dragged = document.getElementById(id);
  if (!dragged) return;
  const target = e.currentTarget;
  const expected = target.dataset.slot;
  const provided = dragged.dataset.slot;
  // aceitar colocar: só aceita se o componente bate com a descrição esperada
  target.dataset.filled = provided;
  // atualizar conteúdo visual mantendo a descrição
  target.querySelector('.slot-desc').textContent = `Colocado: ${dragged.textContent}`;
  if (expected === provided){ target.classList.add('correct'); target.classList.remove('wrong'); builderFeedback.textContent = 'Item colocado corretamente.'; }
  else { target.classList.add('wrong'); target.classList.remove('correct'); builderFeedback.textContent = 'Item colocado no lugar errado.'; }
  // remover item da lista (simula que foi colocado)
  dragged.remove();
}

function tryKeyboardPlace(slot, element){
  // encontrar primeiro slot vazio que corresponde ao slot preferido
  const slots = Array.from(pcSkeleton.querySelectorAll('.slot'));
  const target = slots.find(s => s.dataset.slot === slot && !s.dataset.filled) || slots.find(s => !s.dataset.filled);
  if (!target) { builderFeedback.textContent = 'Não há slot disponível.'; return; }
  target.textContent = `${target.dataset.slot}: ${element.textContent}`;
  target.dataset.filled = element.dataset.slot;
  // atualizar apenas a descrição área
  const desc = target.querySelector('.slot-desc'); if (desc) desc.textContent = `Colocado: ${element.textContent}`;
  if (target.dataset.slot === element.dataset.slot){ target.classList.add('correct'); builderFeedback.textContent = 'Item colocado corretamente (teclado).'; }
  else { target.classList.add('wrong'); builderFeedback.textContent = 'Item colocado no lugar errado (teclado).'; }
  element.remove();
}

function resetBuilder(){
  prepareBuilderFor(builderState.ageKey);
}

// helpers: descrições por slot e por faixa etária (linguagem simplificada para crianças)
function slotDescriptionFor(slotKey, ageKey){
  const base = {
    motherboard: 'Placa principal que conecta todos os componentes.',
    psu: 'Fonte de energia que alimenta o computador.',
    ram: 'Memória que ajuda o computador a rodar programas rapidamente.',
    storage: 'Onde ficam seus arquivos (HD/SSD).',
    cpu: 'O cérebro do computador, processa instruções.',
    gpu: 'Responsável por imagens e jogos (nem todo PC tem).',
    network: 'Cabo que conecta o computador à internet.',
    peripherals: 'Monitor, teclado e mouse — itens que você usa para ver e controlar.'
  };
  // adaptar por faixa etária
  if (ageKey === 'child'){
    const childHints = {
      motherboard: 'A placa grande onde os outros pedacinhos se encaixam.',
      psu: 'A caixa que dá energia (tem cabo grande).',
      ram: 'Pedacinhos finos que deixam o computador rápido.',
      storage: 'Lugar onde guardamos fotos e jogos.',
      cpu: 'É como o cérebro do computador.',
      gpu: 'Ajuda a mostrar jogos e vídeos bonitos.',
      network: 'Cabo que leva internet para o computador.',
      peripherals: 'Tela e os controles (teclado e mouse).'
    };
    return childHints[slotKey] || base[slotKey] || '';
  }
  if (ageKey === 'senior'){
    const seniorHints = {
      motherboard: 'Onde conectamos a maioria das peças; normalmente grande e retangular.',
      psu: 'Fornece energia (conecte o cabo de força).',
      ram: 'Módulos que ficam encaixados em ranhuras pequenas.',
      storage: 'Disco ou unidade onde ficam fotos e documentos.',
      cpu: 'Peça pequena que fica sobre a placa-mãe (normalmente com cooler).',
      gpu: 'Placa dedicada para imagens — pode ser grande.',
      network: 'Cabo com ponta semelhante à do telefone, mas maior (Ethernet).',
      peripherals: 'Monitor, teclado e mouse — conecte onde indicado.'
    };
    return seniorHints[slotKey] || base[slotKey] || '';
  }
  // padrão para teen/adult
  return base[slotKey] || '';
}

function prettySlotName(key){
  const map = {motherboard:'Placa-mãe', psu:'Fonte', ram:'Memória (RAM)', storage:'Armazenamento', cpu:'Processador (CPU)', gpu:'Placa de vídeo (GPU)', network:'Cabo de rede', peripherals:'Periféricos'};
  return map[key] || key;
}

// função para avaliar automaticamente quando todos componentes esperados forem colocados
function evaluateBuilder(){
  const slots = Array.from(pcSkeleton.querySelectorAll('.slot'));
  const expected = slots.filter(s => s.dataset.filled).length;
  if (expected === 0) return; // nada colocado
  let correctCount = 0, total = 0;
  slots.forEach(s => {
    // verificar se este slot deveria ser preenchido para a faixa etária
    const slotId = s.dataset.slot;
    // se preenchido
    if (s.dataset.filled){ total++; if (s.dataset.filled === slotId) correctCount++; }
  });
  builderFeedback.textContent = `Você acertou ${correctCount} de ${total} componentes colocados.`;
}

// verificar periodicamente se há mudanças para avaliar
setInterval(evaluateBuilder, 1500);
