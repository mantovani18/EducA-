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

	// controls: gerar plano de estudo
	const ctrlWrap = document.createElement('div');
	ctrlWrap.style.marginTop = '14px';
	const label = document.createElement('label');
	label.textContent = 'Duração do plano: ';
	label.style.marginRight = '8px';
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
	btn.className = 'card';
	btn.addEventListener('click', ()=> {
		const months = parseInt(select.value,10);
		const plan = generateStudyPlan(p, months);
		renderPlan(plan, months);
	});
	ctrlWrap.appendChild(label);
	ctrlWrap.appendChild(select);
	ctrlWrap.appendChild(btn);
	detailsEl.appendChild(ctrlWrap);

	// container for the generated plan
	const planContainer = document.createElement('div');
	planContainer.id = 'plan-container';
	planContainer.style.marginTop = '14px';
	detailsEl.appendChild(planContainer);
}

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

function renderPlan(plan, months){
	const container = document.getElementById('plan-container');
	container.innerHTML = '';
	const h = document.createElement('h3');
	h.textContent = `Plano de estudo completo — ${plan.profession} (${plan.months} meses)`;
	container.appendChild(h);

	plan.phases.forEach(ph => {
		const sec = document.createElement('section');
		sec.style.marginTop = '10px';
		const th = document.createElement('h4');
		th.textContent = `${ph.title} — ${ph.durationWeeks} semana(s)`;
		sec.appendChild(th);
		if(ph.goals){
			const ul = document.createElement('ul');
			ph.goals.forEach(g => { const li = document.createElement('li'); li.textContent = g; ul.appendChild(li); });
			sec.appendChild(ul);
		}
		if(ph.weeklyRoutine){
			const p = document.createElement('p');
			p.className = 'muted';
			p.textContent = 'Rotina sugerida por matéria:';
			sec.appendChild(p);
			const wrap = document.createElement('div');
			ph.weeklyRoutine.forEach(r => {
				const chip = document.createElement('span');
				chip.className = 'chip';
				chip.textContent = `${r.subject} — ${r.percent}%`;
				wrap.appendChild(chip);
			});
			sec.appendChild(wrap);
		}
		container.appendChild(sec);
	});

	// sample weekly schedule
	const sample = document.createElement('div');
	sample.style.marginTop = '12px';
	const sh = document.createElement('h4');
	sh.textContent = 'Exemplo de semana (divisão diária)';
	sample.appendChild(sh);
	const days = ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
	const ul = document.createElement('ul');
	for(let d=0; d<7; d++){
		const li = document.createElement('li');
		li.textContent = `${days[d]}: 2h matéria principal / 1h exercício / 30-60min redação ou revisão`;
		ul.appendChild(li);
	}
	sample.appendChild(ul);
	container.appendChild(sample);

	// tips
	const tips = document.createElement('div');
	tips.style.marginTop = '12px';
	const th = document.createElement('h4'); th.textContent = 'Dicas finais';
	tips.appendChild(th);
	const tlist = document.createElement('ul');
	['Durma bem e mantenha alimentação saudável','Faça simulados cronometrados regularmente','Revise erros com foco','Mantenha constância: pequenas metas diárias são melhores que longas sessões esporádicas'].forEach(t => { const li = document.createElement('li'); li.textContent = t; tlist.appendChild(li); });
	tips.appendChild(tlist);
	container.appendChild(tips);
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

