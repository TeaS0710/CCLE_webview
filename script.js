const byId = (id) => document.getElementById(id);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const EMBEDDED_DATA = {
  person: {
    slug: 'cecile-vergne',
    display_name: 'Cécile Vergne',
    headline: "Entrepreneure et spécialiste des opérations, de la logistique et de l'import-export",
    summary: "Entrepreneure avec une solide expérience en import-export, distribution alimentaire, gestion de boutique et gestion opérationnelle de petites structures. A fondé et dirigé deux entreprises actives en France, en Europe, au Royaume-Uni et aux États-Unis. Compétences en ventes, logistique, relations fournisseurs, gestion des stocks, administration et service client. Habituée à travailler en autonomie, à gérer plusieurs tâches en même temps et à s’adapter rapidement.",
    job_search: {
      formats: ['temps partiel', 'freelance', 'temps plein'],
      preferred_structures: ['petite structure'],
      preferred_sectors: ['alimentaire', 'vins', 'boutique', 'distribution', 'événements']
    },
    location: { city: 'Saint-Maur-des-Fossés', display: 'Saint-Maur-des-Fossés, 94100, France' },
    contact: { phone: '+33 7 60 40 44 59', email: 'teasources@live.fr' },
    personal: { driving_licence: 'Permis B', nationality: 'française' },
    languages: [
      { language: 'Français', level: 'langue maternelle' },
      { language: 'Anglais', level: 'courant' }
    ],
    tools: ['Windows', 'Linux', 'Excel', 'Word', 'PowerPoint', 'Outils en ligne', 'Outils IA']
  },
  experiences: [
    {
      id: 'paradise-superfoods',
      role: 'Fondatrice',
      company: 'Paradise Superfoods',
      sector: 'Boutique alimentaire premium',
      location: 'Région du Mont-Blanc',
      start_year: 2015,
      end_year: 2020,
      description: [
        'Gestion complète de la boutique : ventes, stocks, fournisseurs, service client.',
        'Sourcing de produits d’Amérique du Sud et d’Afrique.',
        'Organisation de dégustations, ateliers et événements.',
        'Fidélisation de la clientèle et gestion administrative.',
        'Fermeture liée au contexte économique du secteur alimentaire.'
      ],
      tags: ['vente', 'gestion de boutique', 'stocks', 'fournisseurs', 'service client', 'événementiel', 'sourcing']
    },
    {
      id: 'teasources-europe',
      role: 'Fondatrice',
      company: 'Teasources Europe',
      sector: 'Import-export',
      location: 'France / Europe / Royaume-Uni / États-Unis',
      start_year: 2008,
      end_year: 2015,
      description: [
        'Importation de produits de Chine, d’Amérique du Sud, de Turquie et d’Afrique.',
        'Distribution en Europe, au Royaume-Uni et aux États-Unis.',
        'Gestion logistique : douanes, transport, expéditions petites quantités.',
        'Relations B2B avec boutiques, restaurants et distributeurs.',
        'Gestion complète : administration, ventes, sourcing, opérations.',
        'Arrêt d’activité dû à la crise du secteur pour les petites structures.'
      ],
      tags: ['import-export', 'logistique', 'douanes', 'transport', 'B2B', 'distribution', 'administration', 'opérations']
    },
    {
      id: 'gmti',
      role: 'Logistique terrain',
      company: 'GMTI',
      sector: 'Exploration pétrolière',
      location: 'Philippines / Turquie / France',
      start_year: 2005,
      end_year: 2007,
      description: [
        'Logistique terrain, déplacements, matériel, coordination sur site.',
        'Travail autonome dans des environnements difficiles.',
        'Organisation, réactivité et résolution de problèmes.'
      ],
      tags: ['terrain', 'coordination', 'matériel', 'déplacements', 'autonomie', 'résolution de problèmes']
    },
    {
      id: 'hotellerie-haut-de-gamme',
      role: 'Service client / réception / supervision housekeeping',
      company: 'Hilton, Sofitel, Riverside',
      sector: 'Hôtellerie haut de gamme (5 étoiles)',
      location: 'France / Suisse / Chine',
      start_year: 1995,
      end_year: 2000,
      description: [
        'Service client, réception, supervision housekeeping.',
        'Standards élevés et gestion de la relation client.'
      ],
      tags: ['hospitalité', 'réception', 'relation client', 'qualité de service']
    },
    {
      id: 'attic-tour',
      role: 'Service client / réservations / opérations en ligne',
      company: 'ATTIC Tour',
      sector: 'Agence de voyages en ligne',
      location: 'Séoul',
      start_year: 2000,
      end_year: 2004,
      description: ['Service client, réservations, opérations en ligne.'],
      tags: ['tourisme', 'réservations', 'opérations', 'service client']
    }
  ],
  skills: {
    core_competencies: ['ventes', 'logistique', 'relations fournisseurs', 'gestion des stocks', 'administration', 'service client', 'sourcing international', 'gestion opérationnelle', 'coordination terrain', 'organisation d’événements'],
    sectors: ['import-export', 'distribution alimentaire', 'boutique premium', 'hôtellerie haut de gamme', 'tourisme', 'exploration pétrolière'],
    working_style: ['autonomie', 'polyvalence', 'adaptation rapide', 'gestion multitâche', 'fiabilité', 'réactivité']
  },
  education: [
    { title: 'IUP ESTHUA – Management du tourisme et de l’hôtellerie', institution: 'Université d’Angers' },
    { title: 'DEUG MASS – Mathématiques appliquées et sciences sociales', institution: 'Paris XII' },
    { title: 'Baccalauréat ES – Option mathématiques', institution: null },
    { title: 'Formations complémentaires', institution: null, details: ['NEGOCIA', 'CNED anglais niveau IV'] }
  ],
  endorsement: {
    source: 'Message d’introduction de Luigi Clavareau',
    key_points: [
      'Cécile est décrite comme très fiable et très solide.',
      'Elle a géré la logistique terrain aux Philippines, en Turquie et en France.',
      'Elle est présentée comme capable d’apporter de la valeur en ventes, relation clients, logistique, opérations et soutien au quotidien.'
    ]
  }
};

const THEMES = {
  all: { label: 'Tout', bar: 'theme-corporate-bar' },
  corporate: { label: 'Opérations', bar: 'theme-corporate-bar' },
  logistics: { label: 'Import-export', bar: 'theme-corporate-bar' },
  bio: { label: 'Bio / boutique', bar: 'theme-bio-bar' },
  hotel: { label: 'Hôtellerie', bar: 'theme-hotel-bar' },
  tourism: { label: 'Tourisme', bar: 'theme-hotel-bar' },
  energy: { label: 'Terrain', bar: 'theme-energy-bar' }
};

const state = { data: EMBEDDED_DATA, activeFilter: 'all', experiences: [] };

function detectTheme(exp) {
  const hay = `${exp.sector || ''} ${(exp.tags || []).join(' ')} ${exp.company || ''}`.toLowerCase();
  if (/(pétrol|terrain|exploration|gmti)/.test(hay)) return 'energy';
  if (/(hôt|housekeeping|hospitalité|réception)/.test(hay)) return 'hotel';
  if (/(tourisme|voyage|réservation|attic)/.test(hay)) return 'tourism';
  if (/(aliment|bio|superfoods|boutique premium)/.test(hay)) return 'bio';
  if (/(import-export|douane|transport|logistique|distribution internationale|teasources)/.test(hay)) return 'logistics';
  return 'corporate';
}

function uniq(arr) { return [...new Set((arr || []).filter(Boolean))]; }
function cap(str) { return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''; }

function normalise() {
  state.experiences = [...state.data.experiences]
    .map(exp => ({ ...exp, theme: detectTheme(exp) }))
    .sort((a, b) => (b.end_year || b.start_year) - (a.end_year || a.start_year));
}

function yearsCoverage(experiences) {
  const starts = experiences.map(e => e.start_year).filter(Boolean);
  const ends = experiences.map(e => e.end_year || e.start_year).filter(Boolean);
  return starts.length && ends.length ? Math.max(...ends) - Math.min(...starts) : 0;
}

function buildHero() {
  const p = state.data.person;
  byId('hero-name').textContent = p.display_name;
  byId('hero-manifest').textContent = 'Entrepreneuriat, flux internationaux, service direct et exécution quotidienne.';
  byId('hero-summary').textContent = p.summary;

  const stats = [
    ['Structures fondées', String(state.experiences.filter(x => /fondatrice/i.test(x.role)).length)],
    ['Univers couverts', String(uniq(state.experiences.map(x => x.theme)).length)],
    ['Amplitude', `${yearsCoverage(state.experiences)} ans`],
    ['Base', p.location.city]
  ];
  const root = byId('hero-stats');
  root.innerHTML = '';
  stats.forEach(([label, value]) => {
    const el = document.createElement('div');
    el.className = 'stat';
    el.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    root.appendChild(el);
  });

  byId('hero-focus-title').textContent = 'Polyvalence utile, tenue opérationnelle, autonomie réelle.';
  byId('hero-focus-text').textContent = 'Le parcours montre surtout une capacité à tenir plusieurs fonctions à la fois : vente, fournisseurs, stocks, transport, service client, administration et coordination terrain.';

  const ribbon = [
    ['Entrepreneuriat', 'Deux structures montées et tenues sur plusieurs années.'],
    ['International', 'Europe, Royaume-Uni, États-Unis, Chine, Turquie, Philippines.'],
    ['Flux', 'Sourcing, douanes, petites quantités, transport, distribution.'],
    ['Formats visés', p.job_search.formats.join(' · ')]
  ];
  const ribbonRoot = byId('hero-ribbon');
  ribbonRoot.innerHTML = '';
  ribbon.forEach(([label, text]) => {
    const el = document.createElement('div');
    el.className = 'ribbon-card';
    el.innerHTML = `<small>${label}</small><strong>${text}</strong>`;
    ribbonRoot.appendChild(el);
  });

}

function buildTrajectory() {
  byId('trajectory-lead').textContent = 'Créer une activité, faire circuler des produits, représenter une structure au contact du client, rester opérante dans des contextes mobiles : ce sont ces lignes qui reviennent tout au long du parcours.';
  const logistics = state.experiences.find(x => x.theme === 'logistics');
  const field = state.experiences.find(x => x.theme === 'energy');
  const service = state.experiences.find(x => ['hotel', 'tourism'].includes(x.theme));
  const retail = state.experiences.find(x => x.theme === 'bio');

  const blocks = [
    ['Créer et faire tenir une activité', 'Le noyau fort du parcours est entrepreneurial : vente, achats, stocks, fournisseurs, administratif, suivi client et continuité de l’activité.', [logistics?.company, retail?.company].filter(Boolean).join(' · ')],
    ['Faire circuler des produits et des informations', 'Import-export, sourcing, expéditions de petites quantités, douanes, transport et distribution : la logique de flux est centrale et concrète.', logistics?.location || 'Europe · Royaume-Uni · États-Unis'],
    ['Assurer la qualité de service en contact direct', 'Réception, réservations, boutique et service client montrent une capacité à représenter l’activité au quotidien, avec constance.', service?.company || 'Hôtellerie · agence de voyages'],
    ['Rester solide en contexte mobile ou technique', 'Les séquences terrain ajoutent autonomie, réactivité, coordination pratique et capacité à travailler dans des environnements moins confortables.', field?.location || 'Turquie · Philippines · France']
  ];

  const root = byId('trajectory-grid');
  root.innerHTML = '';
  blocks.forEach(([title, text, detail], i) => {
    const card = document.createElement('article');
    card.className = 'trajectory-card reveal';
    card.dataset.index = `0${i + 1}`;
    card.innerHTML = `<h3>${title}</h3><p>${text}</p><p class="detail">${detail}</p>`;
    root.appendChild(card);
  });
}

function buildSectors() {
  const groups = ['bio', 'logistics', 'energy', 'hotel', 'tourism']
    .map(key => ({ key, items: state.experiences.filter(x => x.theme === key) }))
    .filter(g => g.items.length);
  const spans = ['wide', 'regular', 'tall', 'regular', 'wide'];
  const root = byId('sector-grid');
  root.innerHTML = '';

  groups.forEach((group, i) => {
    const companies = uniq(group.items.map(x => x.company)).join(' · ');
    const summary = group.items.flatMap(x => x.description).slice(0, 2).join(' ');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'sector-card reveal';
    btn.dataset.span = spans[i % spans.length];
    btn.innerHTML = `<p class="eyebrow">${THEMES[group.key].label}</p><h3>${companies}</h3><p>${summary}</p><p class="sector-link">Voir les expériences liées</p>`;
    btn.addEventListener('click', () => {
      setFilter(group.key);
      byId('experience').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    root.appendChild(btn);
  });
}

function buildFilters() {
  const keys = ['all', ...uniq(state.experiences.map(x => x.theme))];
  const root = byId('filters');
  root.innerHTML = '';
  keys.forEach(key => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `filter-chip${state.activeFilter === key ? ' active' : ''}`;
    btn.textContent = THEMES[key].label;
    btn.addEventListener('click', () => setFilter(key));
    root.appendChild(btn);
  });
}

function renderExperiences() {
  const root = byId('experience-list');
  root.innerHTML = '';
  const list = state.activeFilter === 'all' ? state.experiences : state.experiences.filter(x => x.theme === state.activeFilter);

  list.forEach(exp => {
    const card = document.createElement('article');
    card.className = 'experience-card reveal';
    const endLabel = exp.end_year || 'auj.';
    const themeBar = THEMES[exp.theme]?.bar || 'theme-corporate-bar';
    const tags = (exp.tags || []).slice(0, 8).map(t => `<span class="tag">${cap(t)}</span>`).join('');
    const bullets = (exp.description || []).map(line => `<p>${line}</p>`).join('');
    card.innerHTML = `
      <div class="experience-meta">
        <div class="theme-bar ${themeBar}"></div>
        <div class="experience-period"><span class="year">${exp.start_year}</span><span class="period-line"></span><span class="year">${endLabel}</span></div>
        <div class="experience-place">${exp.location || ''}</div>
      </div>
      <div class="experience-body">
        <div class="experience-head">
          <h3>${exp.role}</h3>
          <span class="company">${exp.company}</span>
        </div>
        <p class="experience-place">${exp.sector || ''}</p>
        ${bullets}
        <div class="tags">${tags}</div>
      </div>
    `;
    root.appendChild(card);
  });

  revealRefresh();
}

function setFilter(key) {
  state.activeFilter = key;
  buildFilters();
  renderExperiences();
}

function makeCapCard(title, items) {
  const el = document.createElement('article');
  el.className = 'cap-card reveal';
  el.innerHTML = `<h3>${title}</h3><ul>${items.map(x => `<li>${x}</li>`).join('')}</ul>`;
  return el;
}

function buildCapabilities() {
  const main = byId('capability-main');
  const side = byId('capability-side');
  main.innerHTML = '';
  side.innerHTML = '';

  main.appendChild(makeCapCard('Conduite de petite structure', [
    'Tenue d’une activité légère de bout en bout : vente, achats, stocks, fournisseurs, service et administratif.',
    'Capacité à absorber plusieurs fonctions simultanément sans casser la continuité.',
    'Habitude des contextes où l’exécution compte davantage que la spécialisation étroite.'
  ]));
  main.appendChild(makeCapCard('Import-export et flux', [
    'Sourcing international et relation fournisseurs.',
    'Gestion des douanes, du transport et des envois de petites quantités.',
    'Distribution vers boutiques, restaurants et interlocuteurs B2B.'
  ]));
  main.appendChild(makeCapCard('Relation client et service', [
    'Réception, réservations, service client et représentation quotidienne de l’activité.',
    'Capacité à maintenir un niveau de qualité stable en contexte haut de gamme comme en structure plus légère.'
  ]));

  side.appendChild(makeCapCard('Terrain et coordination', [
    'Déplacements, matériel, coordination pratique et autonomie sur site.',
    'Réactivité face aux imprévus et sens de l’organisation.'
  ]));
  side.appendChild(makeCapCard('Style de travail', state.data.skills.working_style.map(cap)));

  const utility = byId('utility-band');
  utility.innerHTML = '';
  uniq([...state.data.skills.core_competencies, ...state.data.person.tools]).slice(0, 12).forEach(item => {
    const pill = document.createElement('span');
    pill.className = 'utility-pill';
    pill.textContent = cap(item);
    utility.appendChild(pill);
  });
}

function buildDetails() {
  const edu = byId('education-list');
  edu.innerHTML = '';
  state.data.education.forEach(entry => {
    const li = document.createElement('li');
    const parts = [entry.title, entry.institution, entry.details?.length ? entry.details.join(' · ') : ''].filter(Boolean);
    li.textContent = parts.join(' · ');
    edu.appendChild(li);
  });

  const practical = [
    `Base · ${state.data.person.location.display}`,
    `Langues · ${state.data.person.languages.map(l => `${l.language} (${l.level})`).join(' · ')}`,
    `Permis · ${state.data.person.personal.driving_licence}`,
    `Nationalité · ${cap(state.data.person.personal.nationality)}`,
    `Formats recherchés · ${state.data.person.job_search.formats.join(' · ')}`,
    `Secteurs visés · ${state.data.person.job_search.preferred_sectors.join(' · ')}`
  ];
  const practicalRoot = byId('practical-list');
  practicalRoot.innerHTML = '';
  practical.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    practicalRoot.appendChild(li);
  });

  byId('endorsement-text').textContent = state.data.endorsement.key_points.join(' ');
  byId('endorsement-source').textContent = state.data.endorsement.source;
}

function buildContact() {
  const p = state.data.person;
  const email = p.contact.email;
  const phone = p.contact.phone;
  const mailto = `mailto:${email}`;
  const tel = `tel:${phone.replace(/\s+/g, '')}`;

  byId('contact-copy').textContent = `Disponible pour des formats ${p.job_search.formats.join(', ')}, avec une affinité pour les petites structures où ventes, flux, service et autonomie doivent tenir ensemble.`;
  const dockMail = byId('dock-mail');
  if (dockMail) dockMail.href = mailto;
  byId('email-cta').href = mailto;
  byId('email-link').href = mailto;
  byId('email-link').textContent = email;
  byId('phone-cta').href = tel;
  byId('phone-link').href = tel;
  byId('phone-link').textContent = phone;
  byId('contact-location').textContent = p.location.display;
  byId('contact-languages').textContent = p.languages.map(x => x.language).join(' · ');
}

const MOBILE_NAV_BREAKPOINT = 750;

function setupNav() {
  const links = $$('.rail-nav a, .mobile-nav a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      const nav = byId('mobile-nav');
      if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) {
        nav.hidden = true;
        byId('mobile-toggle').setAttribute('aria-expanded', 'false');
      }
    });
  });

  const sections = $$('main .section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
        entry.target.classList.add('is-active');
      }
    });
  }, { rootMargin: '-35% 0px -45% 0px', threshold: 0.02 });
  sections.forEach(section => observer.observe(section));
}

let revealObserver;
function revealRefresh() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.1 });
  $$('.reveal').forEach(el => revealObserver.observe(el));
}

function setupMobile() {
  const toggle = byId('mobile-toggle');
  const nav = byId('mobile-nav');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.hidden = expanded;
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > MOBILE_NAV_BREAKPOINT) {
      nav.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function boot() {
  normalise();
  buildHero();
  buildTrajectory();
  buildSectors();
  buildFilters();
  renderExperiences();
  buildCapabilities();
  buildDetails();
  buildContact();
  setupNav();
  setupMobile();
  revealRefresh();
}

document.addEventListener('DOMContentLoaded', boot);
