// Dados iniciais: profissões (top 50 mais concorridos no Brasil), descrição do curso, matérias para vestibular e currículo
const professions = [
  { id: 'medicina', title: 'Medicina', short: 'Formação para atuar na saúde, diagnóstico e tratamento de pacientes.', description: 'Curso de Medicina — duração média 6 anos. Formação prática e teórica com estágios e residência médica após a graduação.', vestibularFocus: ['Biologia','Química','Física','Redação'], curriculum: ['Anatomia','Fisiologia','Bioquímica','Microbiologia','Semiologia','Clínica Médica'] },
  { id: 'direito', title: 'Direito', short: 'Formação para atuação jurídica: advocacia, magistratura e consultoria.', description: 'Curso de Direito — duração média 5 anos. Preparação para carreiras jurídicas e exame da OAB.', vestibularFocus: ['História','Geografia','Atualidades','Redação'], curriculum: ['Direito Constitucional','Direito Civil','Direito Penal','Direito Administrativo'] },
  { id: 'eng_civil', title: 'Engenharia Civil', short: 'Projetos e construção de obras civis e infraestrutura.', description: 'Engenharia Civil — geralmente 5 anos, com matemática, física e projeto estrutural.', vestibularFocus: ['Matemática','Física','Química','Redação'], curriculum: ['Cálculo','Mecânica dos Sólidos','Materiais de Construção','Topografia'] },
  { id: 'eng_mecanica', title: 'Engenharia Mecânica', short: 'Projetos e manutenção de sistemas mecânicos e máquinas.', description: 'Engenharia Mecânica — 5 anos, com ênfase em mecânica, termodinâmica e projetos.', vestibularFocus: ['Matemática','Física','Química','Redação'], curriculum: ['Mecânica dos Fluidos','Termodinâmica','Mecânica Aplicada','Desenho Técnico'] },
  { id: 'eng_eletrica', title: 'Engenharia Elétrica', short: 'Projetos e manutenção de sistemas elétricos e eletrônicos.', description: 'Engenharia Elétrica — 5 anos, eletricidade, circuitos e controle.', vestibularFocus: ['Matemática','Física','Química','Redação'], curriculum: ['Circuitos Elétricos','Sistemas de Potência','Eletrônica','Controle'] },
  { id: 'eng_producao', title: 'Engenharia de Produção', short: 'Otimização de processos produtivos e gestão industrial.', description: 'Engenharia de Produção — foco em gestão, logística e otimização.', vestibularFocus: ['Matemática','Física','Redação','Atualidades'], curriculum: ['Pesquisa Operacional','Gestão da Produção','Logística','Qualidade'] },
  { id: 'eng_quimica', title: 'Engenharia Química', short: 'Processos químicos industriais e controle de produção.', description: 'Engenharia Química — processos, reações e produção industrial.', vestibularFocus: ['Química','Matemática','Física','Redação'], curriculum: ['Termodinâmica Química','Operações Unitárias','Química Industrial'] },
  { id: 'eng_ambiental', title: 'Engenharia Ambiental', short: 'Gestão ambiental, saneamento e sustentabilidade.', description: 'Engenharia Ambiental — soluções para sustentabilidade e saneamento.', vestibularFocus: ['Biologia','Química','Geografia','Redação'], curriculum: ['Saneamento','Gestão Ambiental','Química Ambiental'] },
  { id: 'eng_comp', title: 'Engenharia de Computação', short: 'Integra hardware e software para sistemas embarcados e computação.', description: 'Engenharia de Computação — mistura de engenharia elétrica e ciência da computação.', vestibularFocus: ['Matemática','Física','Redação','Lógica'], curriculum: ['Sistemas Digitais','Arquitetura de Computadores','Sistemas Embarcados'] },
  { id: 'eng_controle', title: 'Engenharia de Controle e Automação', short: 'Automação industrial, robótica e controle de sistemas.', description: 'Engenharia de Controle e Automação — foco em controles, sensores e robótica.', vestibularFocus: ['Matemática','Física','Redação'], curriculum: ['Controle Linear','Automação','Robótica','Instrumentação'] },
  { id: 'cc', title: 'Ciência da Computação', short: 'Desenvolvimento de software, algoritmos e sistemas computacionais.', description: 'Ciência da Computação — 4 anos, algoritmos, IA e sistemas.', vestibularFocus: ['Matemática','Lógica','Redação'], curriculum: ['Programação','Algoritmos','Estruturas de Dados','IA'] },
  { id: 'si', title: 'Sistemas de Informação', short: 'Aplicações empresariais, banco de dados e infraestrutura de TI.', description: 'Sistemas de Informação — 3-4 anos, foco em TI aplicada a negócios.', vestibularFocus: ['Matemática','Atualidades','Redação'], curriculum: ['Banco de Dados','Análise de Sistemas','Redes'] },
  { id: 'ads', title: 'Análise e Desenvolvimento de Sistemas', short: 'Formação prática em desenvolvimento de software.', description: 'ADS — curso tecnológico com foco em programação, 2-3 anos.', vestibularFocus: ['Lógica','Matemática','Redação'], curriculum: ['Programação','Banco de Dados','Engenharia de Software'] },
  { id: 'arquitetura', title: 'Arquitetura e Urbanismo', short: 'Projeto arquitetônico, urbanismo e espaço construído.', description: 'Arquitetura — 5 anos, projeto, história e tecnologia da construção.', vestibularFocus: ['Desenho','História','Redação'], curriculum: ['Desenho Arquitetônico','Projeto','História da Arquitetura'] },
  { id: 'odontologia', title: 'Odontologia', short: 'Formação para atuar na saúde bucal: prevenção e tratamentos.', description: 'Odontologia — 5 anos, clínica e laboratórios odontológicos.', vestibularFocus: ['Biologia','Química','Redação'], curriculum: ['Anatomia Oral','Periodontia','Endodontia'] },
  { id: 'psicologia', title: 'Psicologia', short: 'Estudo do comportamento e saúde mental.', description: 'Psicologia — 5 anos, teoria, pesquisa e estágios clínicos.', vestibularFocus: ['Biologia','Filosofia','Sociologia','Redação'], curriculum: ['Psicologia Geral','Psicopatologia','Avaliação Psicológica'] },
  { id: 'enfermagem', title: 'Enfermagem', short: 'Cuidados diretos ao paciente e gestão em saúde.', description: 'Enfermagem — 4-5 anos, práticas clínicas e gestão de enfermagem.', vestibularFocus: ['Biologia','Química','Redação'], curriculum: ['Fundamentos de Enfermagem','Semiologia','Saúde Coletiva'] },
  { id: 'administracao', title: 'Administração', short: 'Gestão, finanças e negócios.', description: 'Administração — 4 anos, gestão empresarial e empreendedorismo.', vestibularFocus: ['Matemática','Atualidades','Redação'], curriculum: ['Administração Geral','Marketing','Finanças'] },
  { id: 'economia', title: 'Economia', short: 'Análise de mercados, políticas e finanças públicas.', description: 'Economia — teoria econômica, econometria e políticas públicas.', vestibularFocus: ['Matemática','Atualidades','Redação'], curriculum: ['Microeconomia','Macroeconomia','Econometria'] },
  { id: 'contabeis', title: 'Ciências Contábeis', short: 'Contabilidade, auditoria e legislação tributária.', description: 'Ciências Contábeis — 4 anos, contabilidade empresarial e auditoria.', vestibularFocus: ['Matemática','Atualidades','Redação'], curriculum: ['Contabilidade Geral','Auditoria','Legislação Tributária'] },
  { id: 'farmacia', title: 'Farmácia', short: 'Desenvolvimento e dispensação de medicamentos e análises clínicas.', description: 'Farmácia — 4-5 anos, farmacologia e análises laboratoriais.', vestibularFocus: ['Química','Biologia','Redação'], curriculum: ['Farmacologia','Farmacotécnica','Análises Clínicas'] },
  { id: 'nutricao', title: 'Nutrição', short: 'Alimentação, nutrição clínica e saúde pública.', description: 'Nutrição — formação em dietética, clínica e saúde coletiva.', vestibularFocus: ['Biologia','Química','Redação'], curriculum: ['Nutrição Clínica','Alimentos e Nutrição','Saúde Coletiva'] },
  { id: 'fisioterapia', title: 'Fisioterapia', short: 'Reabilitação motora e fisiologia do movimento.', description: 'Fisioterapia — práticas clínicas e reabilitação.', vestibularFocus: ['Biologia','Física','Redação'], curriculum: ['Cinesiologia','Fisioterapia Respiratória','Fisioterapia Ortopédica'] },
  { id: 'med_veterinaria', title: 'Medicina Veterinária', short: 'Saúde animal, clínica e produção animal.', description: 'Medicina Veterinária — clínica, diagnóstico e sanidade animal.', vestibularFocus: ['Biologia','Química','Redação'], curriculum: ['Anatomia Animal','Patologia','Medicina Preventiva'] },
  { id: 'biomedicina', title: 'Biomedicina', short: 'Pesquisa em saúde, análises clínicas e biotecnologia.', description: 'Biomedicina — laboratórios, análises e pesquisa biomédica.', vestibularFocus: ['Biologia','Química','Redação'], curriculum: ['Biologia Molecular','Microbiologia','Imunologia'] },
  { id: 'jornalismo', title: 'Jornalismo', short: 'Comunicação, apuração e produção de conteúdo jornalístico.', description: 'Jornalismo — técnicas de reportagem, investigação e mídias.', vestibularFocus: ['Língua Portuguesa','Atualidades','Redação'], curriculum: ['Redação','Reportagem','Ética Jornalística'] },
  { id: 'publicidade', title: 'Publicidade e Propaganda', short: 'Criação, marketing e comunicação publicitária.', description: 'Publicidade — criação, mídia e estratégias de comunicação.', vestibularFocus: ['Língua Portuguesa','Atualidades','Redação'], curriculum: ['Criação Publicitária','Planejamento de Mídia','Marketing'] },
  { id: 'ri', title: 'Relações Internacionais', short: 'Política internacional, comércio exterior e diplomacia.', description: 'Relações Internacionais — políticas globais e economia internacional.', vestibularFocus: ['Geografia','História','Redação'], curriculum: ['Política Internacional','Economia Internacional','Diplomacia'] },
  { id: 'servico_social', title: 'Serviço Social', short: 'Atuação em políticas sociais e assistência comunitária.', description: 'Serviço Social — intervenção em políticas públicas e assistência social.', vestibularFocus: ['Sociologia','História','Redação'], curriculum: ['Políticas Públicas','Sociologia','Estágio Supervisionado'] },
  { id: 'pedagogia', title: 'Pedagogia', short: 'Formação para ensino e práticas educativas.', description: 'Pedagogia — formação de professores e gestão educacional.', vestibularFocus: ['Língua Portuguesa','História','Redação'], curriculum: ['Didática','Psicologia da Educação','Prática de Ensino'] },
  { id: 'educacao_fisica', title: 'Educação Física', short: 'Esportes, promoção da saúde e treinamento.', description: 'Educação Física — atuação em escolas, clubes e academias.', vestibularFocus: ['Biologia','Física','Redação'], curriculum: ['Cinesiologia','Treinamento Desportivo','Fisiologia do Exercício'] },
  { id: 'letras', title: 'Letras', short: 'Linguística, literatura e formação de docentes em língua.', description: 'Letras — estudo de línguas, literaturas e técnicas de ensino.', vestibularFocus: ['Língua Portuguesa','Literatura','Redação'], curriculum: ['Linguística','Literatura','Metodologia de Ensino'] },
  { id: 'matematica', title: 'Matemática', short: 'Teoria matemática, ensino e aplicações.', description: 'Matemática — formação teórica e aplicável ao ensino e pesquisa.', vestibularFocus: ['Matemática','Lógica','Redação'], curriculum: ['Cálculo','Álgebra','Análise'] },
  { id: 'fisica', title: 'Física', short: 'Estudo da física teórica e aplicada.', description: 'Física — formação em teoria e experimentos, com aplicações tecnológicas.', vestibularFocus: ['Matemática','Física','Redação'], curriculum: ['Mecânica','Eletromagnetismo','Física Moderna'] },
  { id: 'quimica', title: 'Química', short: 'Química teórica e aplicada, pesquisa e indústria.', description: 'Química — laboratório, síntese e análise de materiais.', vestibularFocus: ['Química','Matemática','Redação'], curriculum: ['Química Orgânica','Química Inorgânica','Físico-Química'] },
  { id: 'estatistica', title: 'Estatística', short: 'Análise de dados, probabilidade e modelagem estatística.', description: 'Estatística — análise de dados aplicada a diversos setores.', vestibularFocus: ['Matemática','Raciocínio Lógico','Redação'], curriculum: ['Probabilidade','Inferência Estatística','Modelagem'] },
  { id: 'design_grafico', title: 'Design Gráfico', short: 'Criação visual, tipografia e comunicação visual.', description: 'Design Gráfico — projeto visual para mídias impressas e digitais.', vestibularFocus: ['Desenho','Atualidades','Redação'], curriculum: ['Composição Visual','Tipografia','Ferramentas Digitais'] },
  { id: 'moda', title: 'Design de Moda', short: 'Criação, produção e mercado da moda.', description: 'Design de Moda — desenvolvimento de produtos, tendências e produção.', vestibularFocus: ['Desenho','Atualidades','Redação'], curriculum: ['Desenho de Moda','Modelagem','História da Moda'] },
  { id: 'gastronomia', title: 'Gastronomia', short: 'Cozinha profissional, técnicas culinárias e gestão de serviços.', description: 'Gastronomia — ênfase prática em técnicas e gestão de restaurantes.', vestibularFocus: ['Atualidades','Química Básica','Redação'], curriculum: ['Técnicas Culinárias','Higiene e Segurança','Gestão de Alimentos'] },
  { id: 'turismo', title: 'Turismo', short: 'Gestão de viagens, hotelaria e experiências turísticas.', description: 'Turismo — gestão de serviços, hospitalidade e planejamento turístico.', vestibularFocus: ['Geografia','Atualidades','Redação'], curriculum: ['Gestão de Turismo','Hotelaria','Planejamento Turístico'] },
  { id: 'ciencias_biologicas', title: 'Ciências Biológicas', short: 'Biologia, ecologia e pesquisa científica.', description: 'Ciências Biológicas — pesquisa e ensino em biologia e ecologia.', vestibularFocus: ['Biologia','Química','Redação'], curriculum: ['Biologia Geral','Ecologia','Genética'] },
  { id: 'historia', title: 'História', short: 'Estudo histórico e formação docente.', description: 'História — pesquisa, ensino e preservação do patrimônio cultural.', vestibularFocus: ['História','Língua Portuguesa','Redação'], curriculum: ['Historiografia','História do Brasil','Metodologia'] },
  { id: 'geografia', title: 'Geografia', short: 'Estudo do espaço, ambiente e geopolítica.', description: 'Geografia — análise territorial, cartografia e meio ambiente.', vestibularFocus: ['Geografia','Atualidades','Redação'], curriculum: ['Cartografia','Geografia Humana','Geografia Física'] },
  { id: 'eng_materiais', title: 'Engenharia de Materiais', short: 'Desenvolvimento e aplicação de materiais em engenharia.', description: 'Engenharia de Materiais — ciência e aplicação de materiais avançados.', vestibularFocus: ['Química','Física','Matemática','Redação'], curriculum: ['Ciência dos Materiais','Processamento','Caracterização'] },
  { id: 'eng_petroleo', title: 'Engenharia de Petróleo', short: 'Exploração e produção de petróleo e gás.', description: 'Engenharia de Petróleo — exploração, perfuração e produção offshore/onshore.', vestibularFocus: ['Matemática','Física','Química','Redação'], curriculum: ['Reservatórios','Perfuração','Produção'] },
  { id: 'marketing', title: 'Marketing', short: 'Estratégias de mercado, comportamento do consumidor e marcas.', description: 'Marketing — planejamento de produto, preço, promoção e distribuição.', vestibularFocus: ['Atualidades','Língua Portuguesa','Redação'], curriculum: ['Pesquisa de Mercado','Estratégias de Marketing','Comportamento do Consumidor'] },
  { id: 'biotecnologia', title: 'Biotecnologia', short: 'Aplicações biológicas em saúde, indústria e ambiente.', description: 'Biotecnologia — engenharia genética, bioprocessos e pesquisa aplicada.', vestibularFocus: ['Biologia','Química','Redação'], curriculum: ['Biologia Molecular','Bioprocessos','Genética'] },
  { id: 'ciencias_atuariais', title: 'Ciências Atuariais', short: 'Risco, estatística e finanças atuariais.', description: 'Ciências Atuariais — cálculos atuariais, probabilidade e seguros.', vestibularFocus: ['Matemática','Estatística','Redação'], curriculum: ['Cálculo Financeiro','Probabilidade','Modelagem Atuarial'] }
];

// small emoji map for professions
const emojiMap = {
	medicina: '🩺',
	direito: '⚖️',
	eng_civil: '🏗️',
	eng_mecanica: '🔧',
	eng_eletrica: '⚡',
	cc: '💻',
	psicologia: '🧠',
	enfermagem: '🩺',
	administracao: '📊',
	economia: '💹',
	jornalismo: '📰',
	publicidade: '🎨',
	gastronomia: '🍽️'
};

// color palette (green/blue/white accents) used for generated SVGs and banners
const palette = ['#0ea5a4','#06b6d4','#2dd4bf','#60a5fa','#3b82f6','#e6f7ff'];

const listEl = document.getElementById('profession-list');
const detailsEl = document.getElementById('details');
const searchEl = document.getElementById('search');
// last filtered results (keeps state for 'Voltar pesquisa')
let lastFiltered = null;

// Render the list of professions as cards. Restores functionality when missing.
function renderList(items){
	// clear
	listEl.innerHTML = '';
	items.forEach(p => {
		const card = document.createElement('div');
		card.className = 'card box-border';
		card.setAttribute('data-id', p.id);

		const color = palette[professions.indexOf(p) % palette.length];
		const svg = svgDataUri(p.title, color);
		const stored = localStorage.getItem('educa_image_' + p.id);
		const thumb = document.createElement('div'); thumb.className = 'card-thumb';
		if(stored) thumb.style.backgroundImage = `url('${stored}')`; else { findLocalImage(p.id, (url)=>{ thumb.style.backgroundImage = `url('${url || `images/${p.id}.jpg` || svg}')`; }); }
		card.appendChild(thumb);

		const body = document.createElement('div'); body.className = 'card-body';
		const h = document.createElement('h3'); h.textContent = (emojiMap[p.id] ? emojiMap[p.id] + ' ' : '') + p.title; body.appendChild(h);
		const s = document.createElement('p'); s.textContent = p.short; body.appendChild(s);

		// show small purchased badge if user already bought a personalized plan
		try{
			const bought = localStorage.getItem(`educa_purchased_${p.id}`);
			if(bought){ const pb = document.createElement('span'); pb.className = 'chip small purchased'; pb.textContent = 'Plano ✓'; body.appendChild(pb); }
		}catch(e){}

		// add quick buy button on the card to open purchase chatbot
		const buyBtn = document.createElement('button');
		buyBtn.className = 'btn-ghost small buy-card-btn';
		buyBtn.textContent = 'Comprar plano';
		buyBtn.style.marginLeft = '8px';
		buyBtn.addEventListener('click', (ev)=>{ ev.stopPropagation(); openChatbotForPurchase(p.id); });
		body.appendChild(buyBtn);
		card.appendChild(body);

		card.addEventListener('click', ()=>{
			// when clicked show details on the right panel and hide others for focus
			showOnlySelected(p.id);
			showDetailsRight(p.id);
		});

		listEl.appendChild(card);
		});
	}

// Small database of example universities per profession (used by createUniversityChips)
const universityData = {
  ads: ['IFSP', 'FATEC', 'UNIVAP', 'IFPR', 'IFPE'],
  arquitetura: ['USP', 'UNICAMP', 'UFRJ', 'UFRGS', 'UFPR'],
  odontologia: ['USP', 'UNESP', 'UFMG', 'UFRJ', 'UFPR'],
  psicologia: ['USP', 'UFRJ', 'UFMG', 'UNB', 'UFPR'],
  enfermagem: ['USP', 'UFRJ', 'UFMG', 'UNB', 'UFPA'],
  administracao: ['FGV', 'USP', 'UFMG', 'UNICAMP', 'PUC-SP'],
  economia: ['USP', 'FGV', 'UNICAMP', 'UFRJ', 'UFRGS'],
  contabeis: ['USP', 'FUCAP', 'UFMG', 'UNESP', 'UFSCAR'],
  farmacia: ['USP', 'UNESP', 'UFMG', 'UFRJ', 'UFPR'],
  nutricao: ['USP', 'UNICAMP', 'UFRJ', 'UFMG', 'UFPR'],
  fisioterapia: ['USP', 'UFRJ', 'UFMG', 'UNESP', 'UFPR'],
  med_veterinaria: ['UFMG', 'USP', 'UNESP', 'UFRRJ', 'UFV'],
  biomedicina: ['UNIFESP', 'USP', 'UFMG', 'UFRJ', 'UFPR'],
  jornalismo: ['USP', 'UFRJ', 'UFMG', 'UNISC', 'PUC-RJ'],
  publicidade: ['ESPM', 'FAAP', 'USP', 'PUC-SP', 'UFG'],
  ri: ['USP', 'UNESP', 'UFMG', 'UFSC', 'UFRJ'],
  servico_social: ['USP', 'UFRJ', 'UFMG', 'UNB', 'UFSC'],
  pedagogia: ['USP', 'UFRJ', 'UFMG', 'UNB', 'UFPR'],
  educacao_fisica: ['USP', 'UFRJ', 'UFMG', 'UNICAMP', 'UNB'],
  letras: ['USP', 'UFRJ', 'UNICAMP', 'UFMG', 'UERJ'],
  matematica: ['USP', 'UNICAMP', 'UFRJ', 'UFMG', 'UFRGS'],
  fisica: ['USP', 'UNICAMP', 'UFRJ', 'UFMG', 'UFRGS'],
  quimica: ['USP', 'UNICAMP', 'UFRJ', 'UFMG', 'UFRGS'],
  estatistica: ['USP', 'UFMG', 'UNICAMP', 'UFRJ', 'UFRGS'],
  design_grafico: ['FAAP', 'UNESP', 'USP', 'UFMG'],
  moda: ['FAAP', 'UNICAMP', 'USP', 'IFF', 'UFRJ'],
  gastronomia: ['UNISINOS', 'SENAC', 'UNESP', 'UFMG', 'IFPB'],
  turismo: ['UNESP', 'UFPR', 'UFRJ', 'UFG', 'UFC'],
  ciencias_biologicas: ['USP', 'UFRJ', 'UFMG', 'UNICAMP', 'UFRGS'],
  historia: ['USP', 'UFRJ', 'UNICAMP', 'UFMG', 'UNB'],
  geografia: ['USP', 'UFRJ', 'UNICAMP', 'UFMG', 'UFRGS'],
  eng_materiais: ['UNICAMP', 'USP', 'UFRGS', 'UFMG', 'UFRJ'],
  eng_petroleo: ['UFRJ', 'UFPE', 'UENF', 'UFRGS', 'UFPR'],
  marketing: ['FGV', 'USP', 'ESPM', 'UFMG', 'PUC-SP'],
  biotecnologia: ['UNICAMP', 'USP', 'UFRJ', 'UFMG', 'UNIFESP'],
  ciencias_atuariais: { public: ['USP - SP', 'UFMG - MG'], private: ['UNESP - SP', 'UFPE - PE', 'UFRGS - RS'] }
};

// generate a simple SVG data URI as fallback when no image is available
function svgDataUri(title, bg){
	const txt = (title || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
	const w = 800, h = 400;
	const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><rect width='100%' height='100%' fill='${bg||"#cfe8ff"}' rx='12'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='36' fill='#05386b'>${txt}</text></svg>`;
	return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// attempt to find a local image file by probing common extensions; callback receives URL or null
function findLocalImage(id, cb){
	const exts = ['webp','png','jpg','jpeg','svg'];
	let found = null;
	let remaining = exts.length;
	exts.forEach(ext => {
		const url = `images/${id}.${ext}`;
		// create a temporary image to check load
		const img = new Image();
		img.onload = ()=>{ if(!found){ found = url; cb(found); } };
		img.onerror = ()=>{ remaining--; if(remaining===0 && !found) cb(null); };
		img.src = url;
	});
}
// Render universities as chips or grouped lists. Accepts either an array of strings or an object { public: [], private: [] }.
function createUniversityChips(unis, limit){
	const wrap = document.createElement('div');
	wrap.className = 'university-chips';
	if(!unis) return wrap;
	// grouped
	if(typeof unis === 'object' && !Array.isArray(unis) && (unis.public || unis.private)){
		if(unis.public && unis.public.length){
			const ph = document.createElement('div'); ph.className='uni-group'; const h = document.createElement('strong'); h.textContent='Públicas: '; ph.appendChild(h);
			unis.public.slice(0, limit || 6).forEach(u => { const s=document.createElement('span'); s.className='chip small'; s.textContent=u; ph.appendChild(s); });
			wrap.appendChild(ph);
		}
		if(unis.private && unis.private.length){
			const ph = document.createElement('div'); ph.className='uni-group'; const h = document.createElement('strong'); h.textContent='Particulares: '; ph.appendChild(h);
			unis.private.slice(0, limit || 6).forEach(u => { const s=document.createElement('span'); s.className='chip small'; s.textContent=u; ph.appendChild(s); });
			wrap.appendChild(ph);
		}
		return wrap;
	}

	// array
	const arr = Array.isArray(unis) ? unis : [];
	arr.slice(0, limit || 8).forEach(u => { const s=document.createElement('span'); s.className='chip small'; s.textContent=u; wrap.appendChild(s); });
	return wrap;
}
// helper: restore the list, placeholders and remove any inline preview/details
function restoreAll(){
	const cards = Array.from(listEl.querySelectorAll('.card'));
	cards.forEach(c => c.style.display = '');
	const restore = document.getElementById('restore-btn');
	if(restore) restore.remove();
	// remove single preview if present
	const single = document.getElementById('single-preview');
	if(single) single.remove();
	// remove inline details if present
	const inline = document.getElementById('inline-details');
	if(inline) inline.remove();
	// remove left descriptions if present
	const leftDesc = document.getElementById('left-descriptions'); if(leftDesc) leftDesc.remove();
	// re-render full list of professions
	renderList(professions);
	// restore right panel placeholder
	detailsEl.innerHTML = '';
	const placeholder = document.createElement('div');
	placeholder.className = 'details-sticky';
	placeholder.innerHTML = `<div class="empty"><h2>Comece escolhendo uma profissão</h2><p>Ao selecionar uma profissão, você verá: descrição do curso, matérias que deve focar para o vestibular e o currículo do curso.</p></div>`;
	detailsEl.appendChild(placeholder);
}

// helper: hide other cards and highlight the selected one
function showOnlySelected(id){
	const cards = Array.from(listEl.querySelectorAll('.card'));
	cards.forEach(c => {
		if(c.getAttribute('data-id') === id) { c.style.display = ''; c.classList.add('selected'); }
		else { c.style.display = 'none'; c.classList.remove('selected'); }
	});
	// add a restore button near search to go back
	ensureBackButton();
}

// ensure a persistent back/search-restore button exists
function ensureBackButton(){
	let btn = document.getElementById('back-search-btn');
	if(!btn){
		btn = document.createElement('button');
		btn.id = 'back-search-btn';
		btn.textContent = 'Voltar pesquisa';
		btn.className = 'btn-ghost';
		btn.style.marginLeft = '8px';
		// place near search input if present
		if(searchEl && searchEl.parentNode) searchEl.parentNode.appendChild(btn);
		else document.body.appendChild(btn);
		btn.addEventListener('click', ()=>{
			// restore previous filtered list or full list
			if(lastFiltered && lastFiltered.length) renderList(lastFiltered);
			else renderList(professions);
			// remove selected visuals
			const cards = Array.from(listEl.querySelectorAll('.card'));
			cards.forEach(c => { c.style.display = ''; c.classList.remove('selected'); });
			btn.style.display = 'none';
		});
	}
	return btn;
}

function showDetailsInline(id){
	// remove previous inline details
	const existing = document.getElementById('inline-details');
	if(existing) existing.remove();

	const p = professions.find(x => x.id === id);
	if(!p) return;

	// find the visible card
	const card = listEl.querySelector(`.card[data-id="${id}"]`);
	if(!card) return;

		// build full inline details element (centered)
		const wrap = document.createElement('div');
		wrap.id = 'inline-details';
		wrap.className = 'inline-details';

		// banner
		const detailColor = palette[professions.indexOf(p) % palette.length];
		const banner = document.createElement('div'); banner.className = 'detail-banner';
		const stored = localStorage.getItem('educa_image_' + p.id);
		const svgUri = svgDataUri(p.title, detailColor);
		if(stored){ banner.style.backgroundImage = `url('${stored}')`; }
		else {
			findLocalImage(p.id, (url)=>{ const imageUri = url || `images/${p.id}.jpg` || svgUri; banner.style.backgroundImage = `url('${imageUri}')`; });
		}
		wrap.appendChild(banner);

		// content column
		const content = document.createElement('div');
	const titleEl = document.createElement('h3'); titleEl.textContent = (emojiMap[p.id] ? emojiMap[p.id] + ' ' : '') + p.title; content.appendChild(titleEl);
		const descEl = document.createElement('p'); descEl.textContent = p.description; content.appendChild(descEl);
	// universities
	const unisInline = universityData[p.id];
	if(unisInline){
		const ut = document.createElement('h4'); ut.textContent = 'Exemplos de universidades que oferecem este curso'; content.appendChild(ut);
		content.appendChild(createUniversityChips(unisInline, 8));
	}

		const hFocus = document.createElement('h4'); hFocus.textContent = 'Matérias para focar no vestibular'; content.appendChild(hFocus);
		const focusWrap = document.createElement('div'); p.vestibularFocus.forEach(m=>{ const chip=document.createElement('span'); chip.className='chip'; chip.textContent=m; focusWrap.appendChild(chip); }); content.appendChild(focusWrap);

		const hCurr = document.createElement('h4'); hCurr.textContent = 'Disciplinas do curso'; content.appendChild(hCurr);
		const ul = document.createElement('ul'); p.curriculum.forEach(c=>{ const li=document.createElement('li'); li.textContent=c; ul.appendChild(li); }); content.appendChild(ul);

		// image controls
	const imgControls = document.createElement('div'); imgControls.className='img-controls'; imgControls.style.marginTop='12px';
	const fileInput = document.createElement('input'); fileInput.type='file'; fileInput.accept='image/*';
	// hide native file input UI to avoid browser 'No file chosen' text
	fileInput.style.display = 'none';
	fileInput.addEventListener('change', ev=>{ const f = ev.target.files && ev.target.files[0]; if(!f) return; const reader = new FileReader(); reader.onload=()=>{ localStorage.setItem('educa_image_'+p.id, reader.result); banner.style.backgroundImage=`url('${reader.result}')`; renderList(professions); }; reader.readAsDataURL(f); }); imgControls.appendChild(fileInput);
		const removeBtn = document.createElement('button'); removeBtn.className='btn-ghost'; removeBtn.textContent='Remover imagem personalizada'; removeBtn.addEventListener('click', ()=>{ localStorage.removeItem('educa_image_'+p.id); banner.style.backgroundImage=`url('${svgUri}')`; renderList(professions); }); imgControls.appendChild(removeBtn);
		content.appendChild(imgControls);

		// plan controls and area
		const ctrl = document.createElement('div'); ctrl.className='controls-row';
		const sel = document.createElement('select'); [3,6,12].forEach(m=>{ const o=document.createElement('option'); o.value=m; o.textContent=`${m} meses`; if(m===6) o.selected=true; sel.appendChild(o); });
		const genBtn = document.createElement('button'); genBtn.className='btn-primary'; genBtn.textContent='Gerar Prévia do Plano'; genBtn.addEventListener('click', ()=>{ const months=parseInt(sel.value,10); const plan = generateStudyPlan(p, months); // render full-width at bottom
			renderPlan(plan, months, true);
		});
		ctrl.appendChild(sel); ctrl.appendChild(genBtn);
		content.appendChild(ctrl);

		const planArea = document.createElement('div'); planArea.className='plan-area'; planArea.id='plan-container-inline'; content.appendChild(planArea);

		wrap.appendChild(content);

		// insert centered after the card
		if(card.parentNode === listEl){
			if(card.nextSibling) listEl.insertBefore(wrap, card.nextSibling);
			else listEl.appendChild(wrap);
		} else {
			listEl.appendChild(wrap);
		}

		// clear right panel content while showing inline
		detailsEl.innerHTML = '';
}

// Show details in the right-side panel (original requested behavior)
function showDetailsRight(id){
	const p = professions.find(x => x.id === id);
	if(!p) return;
	// clear right panel
	detailsEl.innerHTML = '';

	const wrapper = document.createElement('div'); wrapper.className = 'details-content';

	const detailColor = palette[professions.indexOf(p) % palette.length];
	const banner = document.createElement('div'); banner.className = 'detail-banner';
	const stored = localStorage.getItem('educa_image_' + p.id);
	const svgUri = svgDataUri(p.title, detailColor);
	if(stored) banner.style.backgroundImage = `url('${stored}')`; else findLocalImage(p.id, (url)=>{ const imageUri = url || `images/${p.id}.jpg` || svgUri; banner.style.backgroundImage = `url('${imageUri}')`; });
	wrapper.appendChild(banner);

	const content = document.createElement('div'); content.className = 'details-body';
	const titleEl = document.createElement('h2'); titleEl.textContent = (emojiMap[p.id] ? emojiMap[p.id] + ' ' : '') + p.title; content.appendChild(titleEl);
	const descEl = document.createElement('p'); descEl.textContent = p.description; content.appendChild(descEl);

	const unisInline = universityData[p.id];
	if(unisInline){ const ut = document.createElement('h4'); ut.textContent = 'Exemplos de universidades que oferecem este curso'; content.appendChild(ut); content.appendChild(createUniversityChips(unisInline, 8)); }

	const hFocus = document.createElement('h4'); hFocus.textContent = 'Matérias para focar no vestibular'; content.appendChild(hFocus);
	const focusWrap = document.createElement('div'); p.vestibularFocus.forEach(m=>{ const chip=document.createElement('span'); chip.className='chip'; chip.textContent=m; focusWrap.appendChild(chip); }); content.appendChild(focusWrap);

	const hCurr = document.createElement('h4'); hCurr.textContent = 'Disciplinas do curso'; content.appendChild(hCurr);
	const ul = document.createElement('ul'); p.curriculum.forEach(c=>{ const li=document.createElement('li'); li.textContent=c; ul.appendChild(li); }); content.appendChild(ul);

	// image controls (visible choose button)
	const imgControls = document.createElement('div'); imgControls.className='img-controls'; imgControls.style.marginTop='12px';
	const fileInput = document.createElement('input'); fileInput.type='file'; fileInput.accept='image/*'; fileInput.style.display='none';
	fileInput.addEventListener('change', ev=>{ const f = ev.target.files && ev.target.files[0]; if(!f) return; const reader = new FileReader(); reader.onload=()=>{ localStorage.setItem('educa_image_'+p.id, reader.result); banner.style.backgroundImage=`url('${reader.result}')`; renderList(professions); }; reader.readAsDataURL(f); }); imgControls.appendChild(fileInput);
	const chooseBtn = document.createElement('button'); chooseBtn.className='btn-ghost'; chooseBtn.textContent='Escolher imagem'; chooseBtn.addEventListener('click', ()=> fileInput.click()); imgControls.appendChild(chooseBtn);
	const removeBtn = document.createElement('button'); removeBtn.className='btn-ghost'; removeBtn.textContent='Remover imagem personalizada'; removeBtn.addEventListener('click', ()=>{ localStorage.removeItem('educa_image_'+p.id); banner.style.backgroundImage=`url('${svgUri}')`; renderList(professions); }); imgControls.appendChild(removeBtn);
	content.appendChild(imgControls);

	// plan controls and area (non-fullwidth)
	const ctrl = document.createElement('div'); ctrl.className='controls-row';
	const sel = document.createElement('select'); [3,6,12].forEach(m=>{ const o=document.createElement('option'); o.value=m; o.textContent=`${m} meses`; if(m===6) o.selected=true; sel.appendChild(o); });
	const genBtn = document.createElement('button'); genBtn.className='btn-primary'; genBtn.textContent='Gerar Prévia do Plano'; genBtn.addEventListener('click', ()=>{ const months=parseInt(sel.value,10); const plan = generateStudyPlan(p, months); renderPlan(plan, months, false); });
	ctrl.appendChild(sel); ctrl.appendChild(genBtn);
	content.appendChild(ctrl);
	const planArea = document.createElement('div'); planArea.className='plan-area'; planArea.id='plan-container'; content.appendChild(planArea);

	// if user already purchased personalized plan, show quick access
	const purchaseRecord = localStorage.getItem(`educa_purchased_${p.id}`);
	if(purchaseRecord){
		try{
			const rec = JSON.parse(purchaseRecord);
			const badge = document.createElement('div'); badge.className='purchased-badge'; badge.textContent='Plano comprado'; badge.style.marginTop='10px'; badge.style.fontWeight='700'; content.appendChild(badge);
			const viewBtn = document.createElement('button'); viewBtn.className='btn-primary'; viewBtn.textContent='Ver plano personalizado'; viewBtn.style.marginLeft='8px';
			viewBtn.addEventListener('click', ()=>{
				// regenerate using stored answers
				const answers = rec.answers || {};
				const months = 6;
				const basePlan = generateStudyPlan(p, months);
				const daily = parseFloat(answers.dailyHours) || 2;
				const fixedWeek = parseFloat(answers.fixedCommitments) || 0;
				const availablePerWeek = Math.max(5, Math.round(daily * 7 - fixedWeek));
				const subj = p.vestibularFocus || basePlan.vestibularFocus || [];
				const totalPct = 100 - 15 - 10;
				const perSubjPct = Math.max(5, Math.round(totalPct / (subj.length || 1)));
				basePlan.phases.forEach(ph => { if(ph.weeklyRoutine) ph.weeklyRoutine = subj.map(s=>({subject:s, percent: perSubjPct})); });
				const detailed = createDetailedPlanFromBase(basePlan, answers, availablePerWeek);
				detailed.personalizedFull = true; detailed.personalization = answers;
				renderPlan(detailed, months, true);
			});
			content.appendChild(viewBtn);
		}catch(e){ console.error('Invalid purchase record', e); }
	}

	wrapper.appendChild(content);
	detailsEl.appendChild(wrapper);
}

// create a larger horizontal preview under the visible card when single selected
function renderSinglePreview(id){
	// Redirect single-preview requests to the right panel to avoid inserting into the cards list
	showDetailsRight(id);
}

function openDetailInTab(p){
	// determine image uri (localStorage image > images/<id>.jpg > svg)
	const stored = localStorage.getItem('educa_image_' + p.id);
	const color = palette[professions.indexOf(p) % palette.length];
	const svgUri = svgDataUri(p.title, color);
	const imageUri = stored || `images/${p.id}.jpg` || svgUri;

	const win = window.open('', '_blank');
	if(!win) return; // popup blocked

	const badge = emojiMap[p.id] ? emojiMap[p.id] + ' ' : '';
	// build universities HTML safely to avoid nested template expression issues
	let universitiesHtml = '<h4>Exemplos de universidades</h4><div class="chips">';
	const udata = universityData[p.id];
	if(udata){
		if(udata.public && udata.public.length) universitiesHtml += (udata.public||[]).slice(0,6).map(u=>`<span class="chip">${u}</span>`).join('');
		if(udata.private && udata.private.length) universitiesHtml += '<br/>' + (udata.private||[]).slice(0,6).map(u=>`<span class="chip">${u}</span>`).join('');
	}
	universitiesHtml += '</div>';

	const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${p.title} — EducA+</title>`+
		`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet">`+
		`<style>
			body{font-family:Inter,Arial,sans-serif;margin:0;background:#f7f9fc;color:#0f172a}
			.banner{height:260px;background-image:url('${imageUri}');background-size:cover;background-position:center;display:flex;align-items:flex-end;padding:20px;position:relative}
			.banner .preview-badge{position:absolute;left:16px;top:16px;background:rgba(15,23,42,0.85);color:#fff;padding:6px 10px;border-radius:999px;font-size:13px;font-weight:700;z-index:6;box-shadow:0 6px 18px rgba(2,6,23,0.12)}
			.banner .title{color:#000;font-family:Roboto Slab, serif;font-size:28px}
			.container{max-width:900px;margin:16px auto;padding:18px}
			.muted{color:#6b7280}
			.chips{margin:10px 0}
			.chip{display:inline-block;background:#eef6ff;padding:6px 10px;border-radius:999px;margin:6px 8px 6px 0;font-size:13px}
			#planArea{margin-top:18px;background:#fff;padding:14px;border-radius:8px;box-shadow:0 6px 20px rgba(11,18,49,0.04)}
			button{cursor:pointer}
			.btn-primary{background:linear-gradient(90deg,#2b6cb0,#4f46e5);color:#fff;padding:8px 12px;border-radius:8px;border:none}
			.btn-ghost{background:transparent;border:1px solid rgba(15,23,42,0.06);padding:8px 10px;border-radius:8px}
		</style></head><body>`+
			`<div class="banner"><div class="preview-badge">${badge}Prévia</div><div class="title">${badge}${p.title}</div></div>`+
		`<div class="container">`+
			`<h2>${p.title}</h2><p class="muted">${p.description}</p>`+
			+ universitiesHtml +
			`<h3>Matérias para focar no vestibular</h3><div class="chips">`+
				p.vestibularFocus.map(m=>`<span class="chip">${m}</span>`).join('')+
			`</div>`+
			`<h3>Disciplinas do curso</h3><ul>`+
				p.curriculum.map(c=>`<li>${c}</li>`).join('')+
			`</ul>`+
			`<div id="planArea">`+
				`<div>Gerar plano rápido: <button id="b3" class="btn-ghost">3 meses</button> <button id="b6" class="btn-ghost">6 meses</button> <button id="b12" class="btn-ghost">12 meses</button></div>`+
				`<div style="margin-top:12px"><label>Duração: <select id="sel"><option value="3">3 meses</option><option value="6" selected>6 meses</option><option value="12">12 meses</option></select> <button id="gen" class="btn-primary">Gerar plano completo</button></div>`+
				`<div id="planOut" style="margin-top:12px"></div>`+
			`</div>`+
			`<div style="margin-top:12px"><button id="dlTxt" class="btn-primary">Baixar TXT</button> <button id="dlPdf" class="btn-primary">Imprimir/PDF</button></div>`+
		`</div>`+
			`<script>
				window.generateStudyPlan = ${generateStudyPlan.toString()};
			function renderOut(plan){
				const out = document.getElementById('planOut'); out.innerHTML = '';
				const h = document.createElement('h3'); h.textContent = 'Plano — '+plan.months+' meses'; out.appendChild(h);
				plan.phases.forEach(ph=>{ const s=document.createElement('section'); const th=document.createElement('h4'); th.textContent=ph.title+' — '+ph.durationWeeks+' semana(s)'; s.appendChild(th); if(ph.goals){const ul=document.createElement('ul'); ph.goals.forEach(g=>{const li=document.createElement('li'); li.textContent=g; ul.appendChild(li)}); s.appendChild(ul)} out.appendChild(s)});
			}
			document.getElementById('b3').addEventListener('click',()=>{ renderOut(window.generateStudyPlan(${JSON.stringify(p)},3)) });
			document.getElementById('b6').addEventListener('click',()=>{ renderOut(window.generateStudyPlan(${JSON.stringify(p)},6)) });
			document.getElementById('b12').addEventListener('click',()=>{ renderOut(window.generateStudyPlan(${JSON.stringify(p)},12)) });
			document.getElementById('gen').addEventListener('click',()=>{ const m=parseInt(document.getElementById('sel').value,10); renderOut(window.generateStudyPlan(${JSON.stringify(p)},m)); });
			// JSON download removed by request
			document.getElementById('dlTxt').addEventListener('click',()=>{ const plan=window.generateStudyPlan(${JSON.stringify(p)},parseInt(document.getElementById('sel').value,10)); const text=plan.phases.map(ph=>ph.title+'\n'+(ph.goals||[]).map(g=>' - '+g).join('\n')).join('\n\n'); const blob=new Blob([text],{type:'text/plain'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=plan.profession.replace(/\s+/g,'_')+'_'+plan.months+'m_plan.txt'; a.click(); URL.revokeObjectURL(url); const w=window.open('','_blank'); w.document.write('<html><head><meta charset="utf-8"><title>Plano</title></head><body>'); plan.phases.forEach(ph=>{ w.document.write('<h3>'+ph.title+' — '+ph.durationWeeks+' semanas</h3><ul>'); (ph.goals||[]).forEach(g=> w.document.write('<li>'+g+'</li>')); w.document.write('</ul>'); }); w.document.write('</body></html>'); w.document.close(); w.focus(); setTimeout(()=> w.print(),600); });
			document.getElementById('dlPdf').addEventListener('click',()=>{ const plan=window.generateStudyPlan(${JSON.stringify(p)},parseInt(document.getElementById('sel').value,10)); const w=window.open('','_blank'); w.document.write('<html><head><meta charset="utf-8"><title>Plano</title></head><body>'); plan.phases.forEach(ph=>{ w.document.write('<h3>'+ph.title+' — '+ph.durationWeeks+' semanas</h3><ul>'); (ph.goals||[]).forEach(g=> w.document.write('<li>'+g+'</li>')); w.document.write('</ul>'); }); w.document.write('</body></html>'); w.document.close(); w.focus(); setTimeout(()=> w.print(),600); });
		<\/script>`;

	win.document.write(html);
	win.document.close();
}

	// create persistent back button (hidden) next to search controls so we can show it later
	try{ ensureBackButton(); const b = document.getElementById('back-search-btn'); if(b) b.style.display = 'none'; }catch(e){}

function showDetails(id){
	const p = professions.find(x => x.id === id);
	if(!p) return;
	detailsEl.innerHTML = '';

	const title = document.createElement('h2');
	title.textContent = p.title;

	const desc = document.createElement('p');
	desc.textContent = p.description;

	const hFocus = document.createElement('h3');
	hFocus.textContent = 'Matérias para focar no vestibular';

	const focusWrap = document.createElement('div');
	p.vestibularFocus.forEach(m => {
		const chip = document.createElement('span');
		chip.className = 'chip';
		chip.textContent = m;
		focusWrap.appendChild(chip);
	});

	const hCurr = document.createElement('h3');
	hCurr.textContent = 'Disciplinas que você verá no curso';

	const ul = document.createElement('ul');
	ul.className = 'list';
	p.curriculum.forEach(c => {
		const li = document.createElement('li');
		li.textContent = c;
		ul.appendChild(li);
	});

		// banner for the details with larger generated image
		const banner = document.createElement('div');
		banner.className = 'detail-banner';
		// add preview badge
		const badge = document.createElement('div');
		badge.className = 'preview-badge';
		badge.textContent = 'Prévia';
		banner.appendChild(badge);
	const detailColor = palette[professions.indexOf(p) % palette.length];
	const svgUri = svgDataUri(p.title, detailColor);
	const storedImg = localStorage.getItem('educa_image_' + p.id);
	if(storedImg) banner.style.backgroundImage = `url('${storedImg}')`;
	else findLocalImage(p.id, (url)=>{ const imageUri = url || svgUri; banner.style.backgroundImage = `url('${imageUri}')`; });
		banner.style.height = '120px';
		banner.style.borderRadius = '10px';
		banner.style.marginBottom = '12px';
		detailsEl.appendChild(banner);

		detailsEl.appendChild(title);
	detailsEl.appendChild(desc);
	detailsEl.appendChild(hFocus);
	detailsEl.appendChild(focusWrap);
	detailsEl.appendChild(hCurr);
	detailsEl.appendChild(ul);

	// optional: quick study plan
	const planH = document.createElement('h3');
	planH.textContent = 'Plano rápido de estudo';
	const planP = document.createElement('p');
	planP.className = 'muted';
	planP.textContent = `Dedique 60-70% do tempo às matérias listadas acima, reserve 20% para redação e 10-20% para revisões e simulados.`;
		detailsEl.appendChild(planH);
		detailsEl.appendChild(planP);

		// botão para gerar plano de estudo
		const planActions = document.createElement('div');
		planActions.style.marginTop = '12px';
		const planLabel = document.createElement('div');
		planLabel.textContent = 'Gerar plano de estudo:';
		planLabel.style.marginBottom = '8px';
		planActions.appendChild(planLabel);

		['3','6','12'].forEach(months => {
			const b = document.createElement('button');
			b.className = 'btn-ghost';
			b.textContent = months + ' meses';
			b.style.cursor = 'pointer';
			b.addEventListener('click', ()=>{
				const plan = generateStudyPlan(p, parseInt(months,10));
				renderPlan(plan);
			});
			planActions.appendChild(b);
		});

				detailsEl.appendChild(planActions);

				// upload de imagem para o curso (usar como fundo) e botão para remover
				const imgControls = document.createElement('div');
				imgControls.className = 'img-controls';
				imgControls.style.marginTop = '12px';
				const imgLabel = document.createElement('div');
				imgLabel.style.marginBottom = '8px';
				imgControls.appendChild(imgLabel);

				const fileInput = document.createElement('input');
				fileInput.type = 'file';
				fileInput.accept = 'image/*';
				// hide native file input to avoid browser 'No file chosen' text
				fileInput.style.display = 'none';
				fileInput.addEventListener('change', async (ev)=>{
					const f = ev.target.files && ev.target.files[0];
					if(!f) return;
					const reader = new FileReader();
					reader.onload = () => {
						try{
							localStorage.setItem('educa_image_' + p.id, reader.result);
							// update banner and cards
							banner.style.backgroundImage = `url('${reader.result}')`;
							renderList(professions);
						}catch(e){
							console.error('Erro salvando imagem', e);
						}
					};
					reader.readAsDataURL(f);
				});
				imgControls.appendChild(fileInput);

				const removeBtn = document.createElement('button');
				removeBtn.className = 'btn-ghost';
				removeBtn.style.marginTop = '8px';
				removeBtn.addEventListener('click', ()=>{
					localStorage.removeItem('educa_image_' + p.id);
					// restore banner to svg
					const detailColor = palette[professions.indexOf(p) % palette.length];
					banner.style.backgroundImage = `url('${svgDataUri(p.title, detailColor)}')`;
					renderList(professions);
				});
				imgControls.appendChild(removeBtn);
				detailsEl.appendChild(imgControls);

				// botão para abrir detalhes em nova aba (opcional)
				// 'Abrir em nova aba' removed as requested

				// controls: gerar plano de estudo
				const ctrlWrap = document.createElement('div');
				ctrlWrap.style.marginTop = '14px';
				const ctrlLabel = document.createElement('label');
				ctrlLabel.textContent = 'Duração do plano: ';
				ctrlLabel.style.marginRight = '8px';
	const select = document.createElement('select');
	[3,6,12].forEach(m => {
		const opt = document.createElement('option');
		opt.value = m;
		opt.textContent = `${m} meses`;
		if(m===6) opt.selected = true;
		select.appendChild(opt);
	});
	const btn = document.createElement('button');
	btn.textContent = 'Gerar plano completo';
	btn.style.marginLeft = '10px';
	btn.className = 'btn-primary';
	btn.addEventListener('click', ()=> {
		const months = parseInt(select.value,10);
		const plan = generateStudyPlan(p, months);
		renderPlan(plan, months, true);
	});
	ctrlWrap.appendChild(ctrlLabel);
	ctrlWrap.appendChild(select);
	ctrlWrap.appendChild(btn);
	detailsEl.appendChild(ctrlWrap);

		// container for the generated plan
		const planContainer = document.createElement('div');
		planContainer.id = 'plan-container';
		planContainer.style.marginTop = '14px';
		detailsEl.appendChild(planContainer);

		// premium: gerar plano personalizado via chatbot (pago)
		const premiumWrap = document.createElement('div');
		premiumWrap.style.marginTop = '12px';
		const buyBtn = document.createElement('button');
		buyBtn.className = 'btn-primary';
		buyBtn.textContent = 'Gerar plano personalizado (Pago)';
		buyBtn.addEventListener('click', ()=> openChatbotForPurchase(id));
		premiumWrap.appendChild(buyBtn);
		detailsEl.appendChild(premiumWrap);
}

// --- Chatbot + purchase flow (client-side simulation) ---
function openChatbotForPurchase(professionId){
	// create modal backdrop
	const backdrop = document.createElement('div'); backdrop.className = 'modal-backdrop'; backdrop.id = 'chatback';
	const box = document.createElement('div'); box.className = 'chatbot';
	box.innerHTML = `<div class="header">Assistente EducA+ — Plano Personalizado</div><div class="messages" id="chat-messages"></div><div class="small-note">Este serviço gera um plano adaptado à sua rotina (pagamento único).</div><div class="input-row"><input id="chat-input" type="text" placeholder="Responda aqui..." /><button id="chat-send" class="btn-primary">Enviar</button></div>`;
	backdrop.appendChild(box);
	document.body.appendChild(backdrop);

	const msgs = document.getElementById('chat-messages');
	const input = document.getElementById('chat-input');
	const send = document.getElementById('chat-send');

	const state = { step:0, answers: {}, professionId };

	function bot(text){ const d = document.createElement('div'); d.className='msg bot'; d.innerHTML = `<div class="bubble">${text}</div>`; msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight; }
	function user(text){ const d = document.createElement('div'); d.className='msg user'; d.innerHTML = `<div class="bubble">${text}</div>`; msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight; }

	// question flow
	const questions = [
		{k:'name', q:'Qual seu nome? (apenas para personalizar o plano)'} ,
		{k:'dailyHours', q:'Quantas horas por dia você pode estudar em média? (ex: 2)'} ,
		{k:'fixedCommitments', q:'Tem compromissos fixos semanais (trabalho, treino)? Informe quantas horas por semana ocupam (ex: 10) ou 0.'},
		{k:'preferredDays', q:'Quais dias da semana você prefere estudar? Separe por vírgula (ex: Seg,Ter,Qua,Qui,Sex) ou deixe em branco para todos.'},
		{k:'dayHours', q:'Para melhor personalização, informe quantas horas por dia você tem disponíveis (formato: Seg(2),Ter(1.5),Qua(0)). Pode deixar em branco para usar média.'}
	];

	function nextQuestion(){
		if(state.step < questions.length){ bot(questions[state.step].q); }
		else { bot('Ótimo — agora confirme o pagamento único de R$49 para gerar seu plano personalizado. Clique em PAGAR para prosseguir.'); showPayButton(); }
	}

	function showPayButton(){
		const note = document.createElement('div'); note.style.padding='12px'; note.style.display='flex'; note.style.justifyContent='space-between';
		const t = document.createElement('div'); t.textContent = 'Pagamento único: R$49'; t.style.fontWeight='700';
		const pay = document.createElement('button'); pay.className='btn-pay'; pay.textContent='PAGAR';
		pay.addEventListener('click', ()=>{
			pay.textContent='Processando...'; pay.disabled = true;
			setTimeout(()=>{
				pay.textContent='Pago ✓';
				bot('Pagamento confirmado. Gerando seu plano personalizado...');
				// mark purchased in localStorage
				const key = `educa_purchased_${state.professionId}`;
				// store answers so the personalized plan can be regenerated later
				localStorage.setItem(key, JSON.stringify({professionId: state.professionId, name: state.answers.name||'', answers: state.answers, dayHours: state.answers.dayHours||'', date: new Date().toISOString()}));
				setTimeout(()=>{
					// generate adjusted plan
					const profession = professions.find(p=>p.id===state.professionId);
					const months = 6; // default
					const basePlan = generateStudyPlan(profession, months);
					// prefer explicit per-day hours if provided
					function parseDayHoursStr(str){
						if(!str) return null;
						const map = {};
						const dayNameMap = { 'seg':0,'ter':1,'qua':2,'qui':3,'sex':4,'sáb':5,'sab':5,'dom':6 };
						str.split(',').map(s=>s.trim()).forEach(token=>{
							if(!token) return;
							// find day letters
							const mDay = token.match(/([A-Za-zçãéóÀ-ú]+)\s*(?:\(|:)?/i);
							const dayPart = mDay ? mDay[1].toLowerCase().slice(0,3) : null;
							// try time range like 19-21
							const mRange = token.match(/(\d{1,2})\s*-\s*(\d{1,2})/);
							let hours = null;
							if(mRange){ hours = Math.max(0, parseInt(mRange[2],10) - parseInt(mRange[1],10)); }
							else{
								const mNum = token.match(/(\d+[\.,]?\d*)/);
								if(mNum) hours = parseFloat(mNum[1].replace(',','.'));
							}
							if(dayPart && dayNameMap.hasOwnProperty(dayPart) && hours !== null) map[dayNameMap[dayPart]] = hours;
						});
						return Object.keys(map).length ? map : null;
					}

					const dayMap = parseDayHoursStr(state.answers.dayHours);
					let availablePerWeek;
					if(dayMap){ availablePerWeek = Object.values(dayMap).reduce((a,b)=>a+b,0); }
					else{
						const daily = parseFloat(state.answers.dailyHours) || 2;
						const fixedWeek = parseFloat(state.answers.fixedCommitments) || 0;
						availablePerWeek = Math.max(5, Math.round(daily * 7 - fixedWeek));
					}
					// scale percentages: compute minutes per week per subject
					const subj = profession.vestibularFocus;
					const totalPct = 100 - 15 - 10; // keep redação/revisão
					const perSubjPct = Math.max(5, Math.round(totalPct / (subj.length || 1)));
					basePlan.phases.forEach(ph => { if(ph.weeklyRoutine) ph.weeklyRoutine = subj.map(s=>({subject:s, percent: perSubjPct})); });
					// include user preferred days in sampleWeek display
					basePlan.sampleWeek = function(){
						const preferred = (state.answers.preferredDays && state.answers.preferredDays.split(',').map(d=>d.trim())) || ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
						const days = [];
						for(let i=0;i<7;i++){
							const ds = preferred[i % preferred.length] || preferred[0];
							days.push(ds);
						}
						// if dayMap exists, show specific hours per day
						if(dayMap){
							return days.map((d,idx)=>`${d}: ${dayMap[idx]||0}h disponível`);
						}
						return days.map((d,idx)=>`${d}: ${Math.max(1, Math.round(availablePerWeek/(preferred.length||7)))}h estudo total (dividido entre matérias)`);
					};

					// create a more detailed plan structure for paid users
					const detailed = createDetailedPlanFromBase(basePlan, state.answers, availablePerWeek);
					detailed.personalizedFull = true;
					detailed.personalization = state.answers;
					// render personalized plan to fullwidth
					renderPlan(detailed, months, true);
					bot('Seu plano personalizado foi gerado e está disponível na parte inferior da página. Você pode baixar o TXT ou imprimir em PDF.');
					// close modal after short delay
					setTimeout(()=>{ const b=document.getElementById('chatback'); if(b) b.remove(); }, 1200);
				},800);
			},1200);
		});
		note.appendChild(t); note.appendChild(pay); msgs.appendChild(note); msgs.scrollTop = msgs.scrollHeight;
	}

	send.addEventListener('click', ()=>{ const v = input.value && input.value.trim(); if(!v) return; user(v); const q = questions[state.step]; if(q){ state.answers[q.k] = v; state.step++; input.value=''; setTimeout(nextQuestion, 400); } else { input.value=''; } });
	input.addEventListener('keypress', (e)=>{ if(e.key==='Enter'){ send.click(); e.preventDefault(); } });

	// start
	setTimeout(()=> bot('Olá! Vou te fazer algumas perguntas rápidas para montar seu plano de estudo personalizado.'),200);
	setTimeout(nextQuestion,900);
}

// expose small helper to check purchase status
function hasPurchasedPlan(professionId){ return !!localStorage.getItem(`educa_purchased_${professionId}`); }

function generateStudyPlan(profession, months=6){
	// phases: diagnóstico, fundações, prática, simulados, revisão
	const weeks = months * 4; // approx 4 semanas por mês
	const subjects = profession.vestibularFocus;

	// percentual allocation (baseline)
	const alloc = {};
	const base = Math.floor(80 / subjects.length); // reserve 10-20% for redação/revisão
	subjects.forEach(s => alloc[s] = base);

	// ensure totals: we'll reserve 15% for redação and 10% revisão if possible
	const redaoPct = 15;
	const revisPct = 10;

	// normalize allocation to sum to 100 - redação - revisão
	const subjectsTotal = 100 - redaoPct - revisPct;
	const sumBase = subjects.length * base;
	const scale = subjectsTotal / (sumBase || 1);
	subjects.forEach(s => alloc[s] = Math.max(5, Math.round(alloc[s] * scale)));

	// build weekly plan outline
	const plan = {
		profession: profession.title,
		professionId: profession.id,
		// keep the subjects list for later personalized plan generation
		vestibularFocus: subjects,
		months,
		weeks,
		phases: []
	};

	// diagnóstico (1 semana)
	plan.phases.push({
		title: 'Diagnóstico e organização',
		durationWeeks: 1,
		goals: ['Avaliar seu nível por matéria (simulado curto)', 'Montar rotina de estudo', 'Definir metas semanais e material']
	});

	// fundações (50% of weeks)
	const foundationWeeks = Math.max(2, Math.floor(weeks * 0.5));
	plan.phases.push({
		title: 'Fundações (conteúdo principal)',
		durationWeeks: foundationWeeks,
		goals: subjects.map(s => `Estudar conceitos fundamentais de ${s}`),
		weeklyRoutine: subjects.map(s => ({subject: s, percent: alloc[s]}))
	});

	// redação contínua
	const redacaoWeeks = Math.max(2, Math.floor(weeks * 0.15));
	plan.phases.push({
		title: 'Prática de Redação',
		durationWeeks: redacaoWeeks,
		goals: ['Produzir redações semanais com correção', 'Aprender estrutura e repertório', 'Simular tempo de prova']
	});

	// prática e exercícios (30% weeks)
	const practiceWeeks = Math.max(2, Math.floor(weeks * 0.25));
	plan.phases.push({
		title: 'Prática intensiva e resolução de questões',
		durationWeeks: practiceWeeks,
		goals: ['Resolver questões por assunto', 'Fazer listas de erros e revisar diariamente', 'Treinar tempo por questão']
	});

	// simulados e revisão final (remaining weeks)
	const used = 1 + foundationWeeks + redacaoWeeks + practiceWeeks;
	const remaining = Math.max(1, weeks - used);
	plan.phases.push({
		title: 'Simulados e revisão final',
		durationWeeks: remaining,
		goals: ['Fazer simulados completos a cada 1-2 semanas', 'Revisar pontos fracos', 'Gerir sono e alimentação pré-prova']
	});

	// weekly sample template
	plan.sampleWeek = function(weekIndex){
		return subjects.map(s => `${alloc[s]}% estudo: ${s}`)
			.concat([`${redaoPct}%: Redação`, `${revisPct}%: Revisões e simulados curtos`]);
	};

	return plan;
}

// create a more detailed week-by-week plan for paid users
function createDetailedPlanFromBase(basePlan, answers, availablePerWeek){
	// deep clone base to avoid mutating original
	const plan = JSON.parse(JSON.stringify(basePlan));
	plan.weekByWeek = [];

	const totalWeeks = plan.weeks || (plan.months * 4) || 24;

	// determine subject weights (prefer 'Fundações' phase weeklyRoutine)
	let subjects = (plan.phases.find(p=>/Funda/i.test(p.title))||{}).weeklyRoutine || [];
	if(!subjects || !subjects.length){
		// fallback: derive from vestibularFocus if weeklyRoutine missing
		subjects = (plan.vestibularFocus||[]).map(s => ({ subject: s, percent: Math.round(100/(plan.vestibularFocus.length||1)) }));
	}

	// normalize percents
	let totalPct = subjects.reduce((s,x)=> s + (x.percent||0), 0);
	if(totalPct === 0){ subjects.forEach(s=> s.percent = Math.round(100/subjects.length)); totalPct = 100; }

	// parse preferred days from answers (e.g., 'Seg,Ter,Qua')
	const rawDays = (answers && answers.preferredDays) ? answers.preferredDays.split(',').map(d=>d.trim()).filter(Boolean) : [];
	const dayNameMap = { 'seg':0,'ter':1,'qua':2,'qui':3,'sex':4,'sáb':5,'sab':5,'dom':6 };
	let studyDayIndices = [];
	if(rawDays.length){
		rawDays.forEach(d => {
			const key = d.toLowerCase().slice(0,3);
			if(dayNameMap.hasOwnProperty(key)) studyDayIndices.push(dayNameMap[key]);
			else {
				// try Portuguese full names
				const lowered = d.toLowerCase();
				Object.keys(dayNameMap).forEach(k => { if(k.indexOf(lowered.slice(0,2))===0) studyDayIndices.push(dayNameMap[k]); });
			}
		});
		// dedupe
		studyDayIndices = Array.from(new Set(studyDayIndices)).sort();
	}
	if(!studyDayIndices.length) studyDayIndices = [0,1,2,3,4,5,6]; // default all days

	const perWeekHours = Math.max(1, Math.round(availablePerWeek || ((answers && parseFloat(answers.dailyHours) || 2) * studyDayIndices.length)));
	const hoursPerStudyDay = Math.max(0.5, Math.round((perWeekHours / studyDayIndices.length)*10)/10);

	// helper: determine which phase the given week belongs to (by cumulative durations)
	function phaseForWeek(w){
		let acc = 0;
		for(const ph of plan.phases){
			acc += (ph.durationWeeks || 0);
			if(w < acc) return ph;
		}
		return plan.phases[plan.phases.length-1];
	}

	const dayLabels = ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];

	for(let w=0; w<totalWeeks; w++){
		const weekObj = { week: w+1, days: [] };
		const currentPhase = phaseForWeek(w);

		// adjust subject intensity depending on phase
		const phaseMultiplier = /Fund|Funda/i.test(currentPhase.title) ? 1.0 : (/Prática|Pratic/i.test(currentPhase.title) ? 0.95 : (/Simulados|revis/i.test(currentPhase.title) ? 0.85 : 1.0));

		for(let d=0; d<7; d++){
			const dayLabel = dayLabels[d];
			// if this day is a study day
			if(studyDayIndices.includes(d)){
				const slots = [];
				// compute total study minutes available this day
				const totalMinutes = Math.max(30, Math.round(hoursPerStudyDay * 60));

				// allocate per subject proportionally
				let allocated = 0;
				subjects.forEach((s, idx) => {
					const pct = (s.percent || 0) / (totalPct || subjects.length);
					// vary allocation slightly by phase
					const mins = Math.max(15, Math.round(totalMinutes * pct * phaseMultiplier));
					if(mins > 0){ slots.push({ subject: s.subject, minutes: mins }); allocated += mins; }
				});

				// reserve time for redação and revisão: 15% and 10% of the day's minutes (rounded)
				const redaoMins = Math.max(15, Math.round(totalMinutes * 0.15));
				const revMins = Math.max(10, Math.round(totalMinutes * 0.10));
				slots.push({ subject: 'Redação', minutes: redaoMins });
				slots.push({ subject: 'Revisão', minutes: revMins });
				allocated += redaoMins + revMins;

				// if rounding left some minutes, append to the largest-subject slot
				const extra = Math.max(0, totalMinutes - allocated);
				if(extra > 0 && slots.length){ slots[0].minutes += extra; }

				weekObj.days.push({ day: dayLabel, totalHours: +(totalMinutes/60).toFixed(1), slots });
			} else {
				// non-study day: light review or rest
				weekObj.days.push({ day: dayLabel, totalHours: 0, slots: [{ subject: 'Descanso / Revisão leve', minutes: 30 }] });
			}
		}

		// compute weekly summary (top subjects by minutes)
		const subjTotals = {};
		weekObj.days.forEach(d => d.slots.forEach(s => { subjTotals[s.subject] = (subjTotals[s.subject]||0) + s.minutes; }));
		const topSubjects = Object.keys(subjTotals).sort((a,b)=> subjTotals[b]-subjTotals[a]).slice(0,5);
		weekObj.summary = { topSubjects, totalStudyMinutes: Object.values(subjTotals).reduce((a,b)=>a+b,0) };

		plan.weekByWeek.push(weekObj);
	}

	// richer resources and personalized guidance
	plan.resources = plan.resources || {};
	plan.resources.books = plan.resources.books || [];
	plan.resources.online = plan.resources.online || [];
	plan.resources.studyTips = plan.resources.studyTips || [];
	// add a few targeted recommendations
	plan.resources.books.unshift('Guia de fundamentos e exercícios por disciplina (coleções vestibulares)');
	plan.resources.online.push('Aulas específicas por matéria (Descomplica / Me Salva! / Khan Academy PT)');
	plan.resources.studyTips.push('Use técnicas de revisão espaçada (Anki) e registre erros em um caderno de revisão.');

	// sampleWeek uses preferred days and hours to show a human-friendly example
	plan.sampleWeek = function(){
		const sample = [];
		const firstWeek = plan.weekByWeek[0] || { days: [] };
		firstWeek.days.forEach(d => {
			const slotsText = (d.slots||[]).map(s => `${s.subject} (${Math.round(s.minutes)}min)`).join(' • ');
			sample.push(`${d.day}: ${slotsText}`);
		});
		return sample;
	};

	return plan;
}


// helpers to render a plan as plain text or HTML for downloads/print
function planToText(plan, compact=false){
	const lines = [];
	lines.push(`Plano — ${plan.profession} (${plan.months} meses)`);
	lines.push('');
	if(compact){
		// compact single-line per phase
		plan.phases.forEach(ph => {
			const goals = (ph.goals||[]).slice(0,3).map(g=>g.replace(/\n/g,' ')).join(' ; ');
			lines.push(`${ph.title} (${ph.durationWeeks} sem): ${goals}`);
		});
		lines.push('');
		lines.push('Recursos recomendados:');
		lines.push('Livros: livros didáticos e coletâneas de exercícios por disciplina (ex.: livros-texto de Física, Química, Biologia e Coleções de Matemática para vestibular).');
		lines.push('Aulas online: Khan Academy (pt), Descomplica, Me Salva!, Stoodi, Coursera/edX para fundamentos.');
		lines.push('Pesquisa: consulte editais e provas anteriores da universidade alvo; resolva simulados recentes e acompanhe listas de erros.');
		lines.push('');
		lines.push('Dicas rápidas: treine redação semanal, faça revisões espaçadas e mantenha simulados periódicos.');
		return lines.join('\n');
	}

	plan.phases.forEach(ph => {
		lines.push(`${ph.title} — ${ph.durationWeeks} semana(s)`);
		if(ph.goals && ph.goals.length){
			ph.goals.forEach(g => lines.push(` - ${g}`));
		}
		if(ph.weeklyRoutine){
			lines.push(' Rotina sugerida:');
			ph.weeklyRoutine.forEach(r => lines.push(`   * ${r.subject} — ${r.percent}%`));
		}
		lines.push('');
	});
	if(typeof plan.sampleWeek === 'function'){
		lines.push('Exemplo de semana:');
		lines.push(...plan.sampleWeek(0).map(s=>` - ${s}`));
		lines.push('');
	}
	lines.push('Dicas finais:');
	lines.push(' - Durma bem e mantenha alimentação saudável');
	lines.push(' - Faça simulados cronometrados regularmente');
	lines.push(' - Revise erros com foco');
	lines.push(' - Mantenha constância: pequenas metas diárias são melhores que longas sessões esporádicas');
	// resources
	lines.push('');
	lines.push('Recursos recomendados:');
	lines.push('- Plataformas: Khan Academy (pt), Descomplica, Me Salva!, Stoodi, Coursera, edX');
	lines.push('- Livros: livros-texto por disciplina (Física: Halliday/Resnick; Química: Atkins/Química Geral; Matemática: livros de ensino médio e coleções vestibulares) e coletâneas de exercícios.');
	lines.push('- Pesquisa: edições/passadas das provas da universidade alvo, grupos de estudo e fóruns de questões.');
	return lines.join('\n');
}

function planToHTML(plan, compact=false){
	// compact mode creates an A4-friendly single-page layout
	if(compact){
		let html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>@page{size:A4;margin:18mm}body{font-family:Inter,Arial,sans-serif;font-size:12px;line-height:1.15;color:#0b1220}h1{font-size:16px;margin-bottom:6px}h2{font-size:13px;margin:6px 0}ul{margin:4px 0 8px 18px;padding:0}li{margin-bottom:3px}</style></head><body>`;
		html += `<h1>Plano — ${plan.profession} (${plan.months} meses)</h1>`;
		// compact phases: one-line summaries
		html += '<div style="display:flex;flex-direction:column;gap:4px">';
		plan.phases.forEach(ph => {
			const goals = (ph.goals||[]).slice(0,3).map(g=>g.replace(/<[^>]*>/g,'')).join(' • ');
			html += `<div><strong>${ph.title} (${ph.durationWeeks} sem)</strong>: ${goals}</div>`;
		});
		html += '</div>';
		// resources
		html += '<h2>Recursos recomendados</h2>';
		html += '<ul>';
		html += '<li><strong>Livros</strong>: livros-texto por disciplina e coletâneas de exercícios (consulte listas de leitura para vestibular/ENEM).</li>';
		html += '<li><strong>Aulas online</strong>: Khan Academy (português), Descomplica, Me Salva!, Stoodi, Coursera e edX (fundamentos).</li>';
		html += '<li><strong>Pesquisas</strong>: leia editais e provas anteriores da universidade alvo; resolva provas antigas e monte lista de erros.</li>';
		html += '</ul>';
		html += '<h2>Como começar</h2>';
		html += '<ol><li>Avalie seu nível por matéria com um simulado curto.</li><li>Monte rotina semanal simples (priorize 2-3 matérias por dia).</li><li>Reserve tempo para redação semanal e revisões espaçadas.</li></ol>';
		html += '</body></html>';
		return html;
	}

	let html = `<h1>Plano — ${plan.profession} (${plan.months} meses)</h1>`;
	plan.phases.forEach(ph => {
		html += `<h3>${ph.title} — ${ph.durationWeeks} semana(s)</h3>`;
		if(ph.goals && ph.goals.length){ html += '<ul>'; ph.goals.forEach(g => { html += `<li>${g}</li>` }); html += '</ul>'; }
		if(ph.weeklyRoutine){ html += '<p><strong>Rotina sugerida:</strong></p><ul>'; ph.weeklyRoutine.forEach(r => { html += `<li>${r.subject} — ${r.percent}%</li>` }); html += '</ul>'; }
	});
	if(typeof plan.sampleWeek === 'function'){
		html += '<h3>Exemplo de semana</h3><ul>' + plan.sampleWeek(0).map(s=>`<li>${s}</li>`).join('') + '</ul>';
	}
	html += '<h3>Dicas finais</h3><ul>';
	['Durma bem e mantenha alimentação saudável','Faça simulados cronometrados regularmente','Revise erros com foco','Mantenha constância: pequenas metas diárias são melhores que longas sessões esporádicas'].forEach(t => html += `<li>${t}</li>`);
	html += '</ul>';
	html += '<h3>Recursos recomendados</h3><ul>';
	html += '<li><strong>Plataformas</strong>: Khan Academy (pt), Descomplica, Me Salva!, Stoodi, Coursera, edX</li>';
	html += '<li><strong>Livros</strong>: livros-texto por disciplina e coletâneas de exercícios (consulte listas de leitura vestibulares)</li>';
	html += '<li><strong>Pesquisa</strong>: edições/passadas das provas da universidade alvo; resolva provas antigas; acompanhe listas de erros</li>';
	html += '</ul>';
	return html;
}

function renderPlan(plan, months, fullWidth=false){
	if(!plan) return;
	const planEmoji = (plan.professionId && emojiMap[plan.professionId]) ? emojiMap[plan.professionId] + ' ' : '';

	// Helper: create download handlers
	const attachDownloads = (root)=>{
		const wrap = document.createElement('div'); wrap.style.marginTop = '10px';
		const btnTxt = document.createElement('button'); btnTxt.className='btn-primary'; btnTxt.style.marginRight='8px'; btnTxt.textContent='Baixar TXT';
		const btnPdf = document.createElement('button'); btnPdf.className='btn-primary'; btnPdf.textContent='Imprimir/PDF';
		btnTxt.addEventListener('click', ()=>{
			const text = planToText(plan);
			const blob = new Blob([text], {type: 'text/plain'});
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a'); a.href = url; a.download = `${plan.profession.replace(/\s+/g,'_')}_${plan.months}m_plan.txt`; a.click(); URL.revokeObjectURL(url);
			const w = window.open('','_blank'); w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Plano</title></head><body>'); w.document.write(planToHTML(plan)); w.document.write('</body></html>'); w.document.close(); w.focus(); setTimeout(()=> w.print(),400);
		});
		btnPdf.addEventListener('click', ()=>{ const w = window.open('','_blank'); w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Plano</title></head><body>'); w.document.write(planToHTML(plan)); w.document.write('</body></html>'); w.document.close(); w.focus(); setTimeout(()=> w.print(),400); });
		wrap.appendChild(btnTxt); wrap.appendChild(btnPdf);
		root.appendChild(wrap);
	};

	if(fullWidth){
		const outer = document.getElementById('fullwidth-plan');
		if(!outer) return;
		outer.innerHTML = '';
		const inner = document.createElement('div'); inner.className = 'plan-inner';
		const header = document.createElement('h3'); header.textContent = `Plano de estudo completo — ${planEmoji}${plan.profession} (${plan.months} meses)`; inner.appendChild(header);
		ensureBackButton();
		attachDownloads(inner);

		if(!plan.personalizedFull){
			// preview
			(plan.phases||[]).slice(0,2).forEach(ph=>{
				const sec = document.createElement('section'); sec.style.marginTop='10px'; const th = document.createElement('h4'); th.textContent = `${ph.title} — ${ph.durationWeeks} semana(s)`; sec.appendChild(th);
				if(ph.goals && ph.goals.length){ const list = document.createElement('ul'); (ph.goals||[]).slice(0,3).forEach(g=>{ const li=document.createElement('li'); li.textContent=g; list.appendChild(li); }); sec.appendChild(list); }
				inner.appendChild(sec);
			});
			const preview = document.createElement('div'); preview.style.marginTop='12px'; preview.innerHTML = '<p class="muted">Este é um preview compacto. Compre o Plano Personalizado para o plano completo e detalhado.</p>';
			const buyBtn = document.createElement('button'); buyBtn.className='btn-primary'; buyBtn.textContent='Comprar Plano Personalizado'; buyBtn.style.marginTop='8px'; buyBtn.addEventListener('click', ()=> openChatbotForPurchase(plan.professionId)); preview.appendChild(buyBtn);
			inner.appendChild(preview);
		} else {
			// full personalized rendering
			(plan.phases||[]).forEach(ph=>{
				const sec = document.createElement('section'); sec.style.marginTop='10px'; const th = document.createElement('h4'); th.textContent = `${ph.title} — ${ph.durationWeeks} semana(s)`; sec.appendChild(th);
				if(ph.goals && ph.goals.length){ const list=document.createElement('ul'); ph.goals.forEach(g=>{ const li=document.createElement('li'); li.textContent=g; list.appendChild(li); }); sec.appendChild(list); }
				if(ph.weeklyRoutine){ const p=document.createElement('p'); p.className='muted'; p.textContent='Rotina sugerida por matéria:'; sec.appendChild(p); const wrap=document.createElement('div'); ph.weeklyRoutine.forEach(r=>{ const chip=document.createElement('span'); chip.className='chip'; chip.textContent=`${r.subject} — ${r.percent}%`; wrap.appendChild(chip); }); sec.appendChild(wrap); }
				inner.appendChild(sec);
			});
			// week-by-week
			if(plan.weekByWeek && plan.weekByWeek.length){ const wsec=document.createElement('section'); wsec.style.marginTop='12px'; const wh=document.createElement('h4'); wh.textContent='Plano semana a semana (detalhado)'; wsec.appendChild(wh);
				plan.weekByWeek.slice(0, Math.min(plan.weekByWeek.length, 52)).forEach(wk=>{ const wdiv=document.createElement('div'); wdiv.style.marginTop='8px'; const ww=document.createElement('strong'); ww.textContent='Semana '+wk.week; wdiv.appendChild(ww); const list=document.createElement('ul'); wk.days.forEach(d=>{ const li=document.createElement('li'); li.textContent = `${d.day}: ${d.totalHours}h — ` + (d.slots||[]).map(s=>`${s.subject} (${Math.round(s.minutes)}min)`).join(' | '); list.appendChild(li); }); wdiv.appendChild(list); wsec.appendChild(wdiv); }); inner.appendChild(wsec); }
			// resources
			if(plan.resources){ const rsec=document.createElement('section'); rsec.style.marginTop='12px'; const rh=document.createElement('h4'); rh.textContent='Recursos recomendados'; rsec.appendChild(rh); const rlist=document.createElement('ul'); (plan.resources.books||[]).forEach(b=>{ const li=document.createElement('li'); li.textContent=b; rlist.appendChild(li); }); (plan.resources.online||[]).forEach(b=>{ const li=document.createElement('li'); li.textContent=b; rlist.appendChild(li); }); rsec.appendChild(rlist); inner.appendChild(rsec); }
			const tips = document.createElement('div'); tips.style.marginTop='12px'; const th = document.createElement('h4'); th.textContent='Dicas finais'; tips.appendChild(th); const tlist=document.createElement('ul'); ['Durma bem e mantenha alimentação saudável','Faça simulados cronometrados regularmente','Revise erros com foco','Mantenha constância: pequenas metas diárias são melhores que longas sessões esporádicas'].forEach(t=>{ const li=document.createElement('li'); li.textContent=t; tlist.appendChild(li); }); tips.appendChild(tlist); inner.appendChild(tips);
		}

		outer.appendChild(inner);
		setTimeout(()=> outer.scrollIntoView({behavior:'smooth', block:'end'}),120);
		return;
	}

	// non-full width rendering (right panel or dedicated container)
	const container = document.getElementById('plan-container') || detailsEl;
	container.innerHTML = '';
	const h = document.createElement('h3'); h.textContent = `Plano de estudo — ${planEmoji}${plan.profession} (${plan.months} meses)`; container.appendChild(h);
	ensureBackButton();
	attachDownloads(container);

	(plan.phases||[]).forEach(ph => {
		const sec = document.createElement('section'); sec.style.marginTop = '10px'; const th = document.createElement('h4'); th.textContent = `${ph.title} — ${ph.durationWeeks} semana(s)`; sec.appendChild(th);
		if(ph.goals){ const ul = document.createElement('ul'); ph.goals.forEach(g => { const li = document.createElement('li'); li.textContent = g; ul.appendChild(li); }); sec.appendChild(ul); }
		if(ph.weeklyRoutine){ const p = document.createElement('p'); p.className = 'muted'; p.textContent = 'Rotina sugerida por matéria:'; sec.appendChild(p); const wrap = document.createElement('div'); ph.weeklyRoutine.forEach(r => { const chip = document.createElement('span'); chip.className = 'chip'; chip.textContent = `${r.subject} — ${r.percent}%`; wrap.appendChild(chip); }); sec.appendChild(wrap); }
		container.appendChild(sec);
	});

	// sample week and tips
	if(typeof plan.sampleWeek === 'function'){
		const sample = document.createElement('div'); sample.style.marginTop = '12px'; const sh = document.createElement('h4'); sh.textContent = 'Exemplo de semana (divisão diária)'; sample.appendChild(sh);
		const ul = document.createElement('ul'); (plan.sampleWeek()||[]).forEach(s => { const li = document.createElement('li'); li.textContent = s; ul.appendChild(li); }); sample.appendChild(ul); container.appendChild(sample);
	}
	const tips = document.createElement('div'); tips.style.marginTop = '12px'; const th = document.createElement('h4'); th.textContent = 'Dicas finais'; tips.appendChild(th); const tlist = document.createElement('ul'); ['Durma bem e mantenha alimentação saudável','Faça simulados cronometrados regularmente','Revise erros com foco','Mantenha constância: pequenas metas diárias são melhores que longas sessões esporádicas'].forEach(t => { const li = document.createElement('li'); li.textContent = t; tlist.appendChild(li); }); tips.appendChild(tlist); container.appendChild(tips);
}

function init(){
	try{
		if(!listEl) throw new Error('Elemento #profession-list não encontrado');
		renderList(professions);
		// show a small status banner so the user can see JS ran
		try{ showRuntimeStatus(); }catch(e){}
		if(searchEl){
			searchEl.addEventListener('input', e => {
				const q = e.target.value.trim().toLowerCase();
				if(!q) return renderList(professions);
				const filtered = professions.filter(p => (p.title + ' ' + p.short + ' ' + p.description).toLowerCase().includes(q));
				lastFiltered = filtered.slice();
				renderList(filtered);
				// show back button so user can return to their previous search results
				ensureBackButton();
			});
		}
	}catch(err){
		console.error('Init error:', err);
		try{ alert('Erro no JavaScript: ' + err.message + '\nAbra o console para mais detalhes.'); }catch(e){}
	}
}

// small visible status banner for quick debugging (appears top-right)
function showRuntimeStatus(){
	const existing = document.getElementById('js-status-banner'); if(existing) existing.remove();
	const b = document.createElement('div'); b.id = 'js-status-banner';
	b.style.position = 'fixed'; b.style.right='12px'; b.style.top='12px'; b.style.padding='8px 10px'; b.style.background='rgba(0,0,0,0.7)'; b.style.color='#fff'; b.style.fontSize='12px'; b.style.zIndex=9999; b.style.borderRadius='6px';
	const count = Array.isArray(professions) ? professions.length : 0;
	document.body.appendChild(b);
}

document.addEventListener('DOMContentLoaded', init);

