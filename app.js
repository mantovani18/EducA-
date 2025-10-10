// Dados iniciais: profissões, descrição do curso, matérias para vestibular e currículo
const professions = [
	{
		id: 'medicina',
		title: 'Medicina',
		short: 'Formação para atuar na saúde, diagnóstico e tratamento de pacientes.',
		description: 'Curso de Medicina — duração média 6 anos. Formação prática e teórica com estágios e residência médica após a graduação.',
		vestibularFocus: ['Biologia', 'Química', 'Física', 'Redação'],
		curriculum: ['Anatomia', 'Fisiologia', 'Bioquímica', 'Microbiologia', 'Semiologia', 'Clínica Médica', 'Pediatria', 'Ginecologia e Obstetrícia']
	},
	{
		id: 'engenharia',
		title: 'Engenharia (diversas áreas)',
		short: 'Projetar, construir e otimizar sistemas, estruturas e processos.',
		description: 'Cursos de Engenharia (Civil, Mecânica, Elétrica, de Produção, etc.) geralmente duram 5 anos e combinam matemática, física e tecnologia.',
		vestibularFocus: ['Matemática', 'Física', 'Química', 'Redação'],
		curriculum: ['Cálculo', 'Álgebra Linear', 'Física Aplicada', 'Materiais de Engenharia', 'Desenho Técnico', 'Mecânica dos Fluidos', 'Projetos']
	},
	{
		id: 'direito',
		title: 'Direito',
		short: 'Formação para atuação jurídica: advocacia, magistratura, carreira pública e consultoria.',
		description: 'O curso de Direito costuma durar 5 anos e prepara para o exame da ordem (OAB) após a conclusão.',
		vestibularFocus: ['História', 'Geografia', 'Atualidades', 'Redação'],
		curriculum: ['Introdução ao Estudo do Direito', 'Direito Constitucional', 'Direito Civil', 'Direito Penal', 'Direito Administrativo', 'Direito Processual']
	},
	{
		id: 'computacao',
		title: 'Ciência da Computação / Sistemas',
		short: 'Desenvolvimento de software, algoritmos e sistemas computacionais.',
		description: 'Cursos na área de computação duram em média 4 anos. Envolvem programação, lógica, estruturas de dados e matemática discreta.',
		vestibularFocus: ['Matemática', 'Física (opcional)', 'Redação', 'Lógica'],
		curriculum: ['Programação', 'Estruturas de Dados', 'Algoritmos', 'Sistemas Operacionais', 'Banco de Dados', 'Inteligência Artificial']
	}
,
	{
		id: 'odontologia',
		title: 'Odontologia',
		short: 'Formação para atuação na saúde bucal: prevenção, diagnóstico e tratamento odontológico.',
		description: 'Curso de Odontologia — duração média 5 anos. Combina teoria e prática em laboratórios e atendimentos clínicos.',
		vestibularFocus: ['Biologia', 'Química', 'Redação'],
		curriculum: ['Anatomia Oral', 'Periodontia', 'Prótese Dentária', 'Endodontia', 'Cirurgia Bucomaxilofacial', 'Odontopediatria']
	},
	{
		id: 'psicologia',
		title: 'Psicologia',
		short: 'Estudo do comportamento e processos mentais, com aplicações clínicas, organizacionais e educacionais.',
		description: 'Curso de Psicologia — duração média 5 anos. Envolve teoria, métodos de pesquisa e estágios em diversas áreas de atuação.',
		vestibularFocus: ['Biologia', 'Filosofia', 'Sociologia', 'Redação'],
		curriculum: ['Psicologia Geral', 'Psicologia do Desenvolvimento', 'Psicopatologia', 'Psicologia Social', 'Avaliação Psicológica', 'Estágio Supervisionado']
	},
	{
		id: 'enfermagem',
		title: 'Enfermagem',
		short: 'Formação para cuidado direto ao paciente e gestão de serviços de enfermagem.',
		description: 'Curso de Enfermagem — duração média 4-5 anos. Alta demanda no mercado de trabalho e diversidade de áreas de atuação.',
		vestibularFocus: ['Biologia', 'Química', 'Redação'],
		curriculum: ['Fundamentos de Enfermagem', 'Semiologia', 'Saúde Coletiva', 'Enfermagem Médico-Cirúrgica', 'Estágio Supervisionado']
	},
	{
		id: 'administracao',
		title: 'Administração',
		short: 'Formação em gestão, negócios e processos organizacionais.',
		description: 'Curso de Administração — duração média 4 anos. Prepara para áreas como finanças, recursos humanos, logística e empreendedorismo.',
		vestibularFocus: ['Matemática', 'Geografia', 'Atualidades', 'Redação'],
		curriculum: ['Administração Geral', 'Economia', 'Contabilidade', 'Marketing', 'Gestão de Pessoas', 'Logística']
	},
	{
		id: 'educacao_fisica',
		title: 'Educação Física',
		short: 'Formação para atuação em esportes, treinamento e promoção da saúde.',
		description: 'Curso de Educação Física — duração média 4 anos. Prepara para atuar em escolas, clubes, academias e programas de saúde.',
		vestibularFocus: ['Biologia', 'Física', 'Redação'],
		curriculum: ['Cinesiologia', 'Treinamento Desportivo', 'Biomecânica', 'Fisiologia do Exercício', 'Psicologia do Esporte']
	},
	{
		id: 'contabeis',
		title: 'Ciências Contábeis',
		short: 'Formação em contabilidade, auditoria e gestão financeira.',
		description: 'Curso de Ciências Contábeis — duração média 4 anos. Prepara para atuação em empresas, auditorias e serviços contábeis.',
		vestibularFocus: ['Matemática', 'Atualidades', 'Redação'],
		curriculum: ['Contabilidade Geral', 'Contabilidade de Custos', 'Auditoria', 'Legislação Tributária', 'Finanças']
	}
];

const listEl = document.getElementById('profession-list');
const detailsEl = document.getElementById('details');
const searchEl = document.getElementById('search');

function renderList(items){
	listEl.innerHTML = '';
	items.forEach(p => {
		const card = document.createElement('button');
		card.className = 'card';
		card.setAttribute('role','listitem');
		card.innerHTML = `<h3>${p.title}</h3><p>${p.short}</p>`;
		card.addEventListener('click', ()=> showDetails(p.id));
		listEl.appendChild(card);
	});
}

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
}

function init(){
	renderList(professions);
	searchEl.addEventListener('input', e => {
		const q = e.target.value.trim().toLowerCase();
		if(!q) return renderList(professions);
		const filtered = professions.filter(p => (p.title + ' ' + p.short + ' ' + p.description).toLowerCase().includes(q));
		renderList(filtered);
	});
}

document.addEventListener('DOMContentLoaded', init);

