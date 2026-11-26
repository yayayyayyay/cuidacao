/* ==========================================================================
1. ARMAZENAMENTO RESILIENTE E BIBLIOTECA DE ÍCONES SVG MINIMALISTAS
   ========================================================================== */
const localStoreMemory = {};

function getStorage(key, defaultValue) {
  try {
    const val = window.localStorage.getItem(key);
    return val !== null ? val : (localStoreMemory[key] ?? defaultValue);
  } catch (err) {
    return localStoreMemory[key] ?? defaultValue;
  }
}

function setStorage(key, val) {
  localStoreMemory[key] = String(val);
  try {
    window.localStorage.setItem(key, String(val));
  } catch (err) {
    // Fallback em memória caso o navegador restrinja localStorage
  }
}

function getJsonStorage(key, defaultObj) {
  try {
    const raw = getStorage(key, null);
    return raw ? JSON.parse(raw) : defaultObj;
  } catch (err) {
    return defaultObj;
  }
}

function setJsonStorage(key, obj) {
  try {
    setStorage(key, JSON.stringify(obj));
  } catch (err) {
    // Fallback silencioso
  }
}

/* Ícones Vetoriais Minimalistas (Zero Emojis) */
const ICONS = {
  bell: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  check: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  pin: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  phone: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  starFilled: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke-currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  starOutline: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  comment: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  thumbUp: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`,
  reply: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>`,
  trash: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`
};

const palavrasProibidas = [
    "merda", "porra", "caralho", "boceta", "buceta", "carai", 
    "foda", "foder", "fodido", "puta", "puto", "cuzão", "cuzinho", "cu",
    "arrombado", "viado", "corno", "vadia", "piranha", "vagabundo",
    "desgraçado", "desgraça", "miserável"
];

function contemLinguagemInadequada(texto) {
    if(!texto) return false;
    // Substitui caracteres comuns usados para burlar (ex: 0->o, @->a, 1->i, 3->e)
    let t = texto.toLowerCase();
    t = t.replace(/@/g, 'a').replace(/0/g, 'o').replace(/1/g, 'i').replace(/3/g, 'e').replace(/!/g, 'i');
    
    // Remove pontuação e espaços múltiplos
    t = t.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ');
    
    const palavras = t.split(' ');
    
    return palavras.some(palavra => palavrasProibidas.includes(palavra) || palavrasProibidas.some(p => palavra.includes(p) && p.length > 3));
}

function renderStarIcons(count) {
  const n = Math.max(1, Math.min(5, Number(count) || 5));
  return Array.from({ length: n }, () => ICONS.starFilled).join("");
}

/* ==========================================================================
2. AUTENTICAÇÃO E SESSÃO OBRIGATÓRIA DO USUÁRIO
   ========================================================================== */
let currentUser = getJsonStorage("cuidacao_user_session", null);

function switchAuthTab(mode) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const tabLogin = document.getElementById("tabBtnLogin");
  const tabReg = document.getElementById("tabBtnRegister");

  if (mode === "register") {
    if (loginForm) loginForm.style.display = "none";
    if (registerForm) registerForm.style.display = "block";
    if (tabLogin) tabLogin.classList.remove("active");
    if (tabReg) tabReg.classList.add("active");
  } else {
    if (loginForm) loginForm.style.display = "block";
    if (registerForm) registerForm.style.display = "none";
    if (tabLogin) tabLogin.classList.add("active");
    if (tabReg) tabReg.classList.remove("active");
  }
}

function togglePasswordVisibility(inputId, btnEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.type = input.type === "password" ? "text" : "password";
}

function fillDemoCredentials() {
  const idInput = document.getElementById("loginIdentifier");
  const passInput = document.getElementById("loginPassword");
  if (idInput) idInput.value = "morador@cuidacao.org.br";
  if (passInput) passInput.value = "cuidacao2026";
  showToast("Credenciais de demonstração preenchidas.");
}

function handleForgotPassword() {
  const idInput = document.getElementById("loginIdentifier");
  const val = idInput ? idInput.value.trim() : "";
  if (!val) {
    showToast("Informe seu CPF, e-mail ou Cartão SUS para recuperar o acesso.");
    if (idInput) idInput.focus();
    return;
  }
  showToast(`Instruções de redefinição enviadas para ${val}.`);
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const identifier = document.getElementById("loginIdentifier").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!identifier || !password) {
    showToast("Preencha suas credenciais para acessar.");
    return;
  }

  let displayName = identifier.includes("@")
    ? identifier.split("@")[0].replace(/[._-]/g, " ")
    : "Morador Autenticado";

  displayName = displayName.replace(/\b\w/g, l => l.toUpperCase());

  currentUser = {
    nome: displayName,
    documento: identifier,
    bairro: "Vicente de Carvalho",
    email: identifier // Simulando um ID único
  };

  setJsonStorage("cuidacao_user_session", currentUser);
  completeAuthentication(`Bem-vindo(a), ${currentUser.nome}.`);
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const nome = document.getElementById("regName").value.trim();
  const doc = document.getElementById("regDoc").value.trim();
  const bairro = document.getElementById("regBairro").value;

  if (!nome || !doc) {
    showToast("Preencha todos os campos obrigatórios.");
    return;
  }

  currentUser = {
    nome,
    documento: doc,
    bairro,
    email: doc
  };

  setJsonStorage("cuidacao_user_session", currentUser);
  completeAuthentication(`Cadastro concluído. Bem-vindo(a), ${currentUser.nome}.`);
}

function completeAuthentication(toastMsg) {
  const overlay = document.getElementById("loginScreenOverlay");
  if (overlay) overlay.classList.add("hidden");
  syncUserInterfaceWithSession();
  if (toastMsg) showToast(toastMsg);
}

function handleLogout() {
  currentUser = null;
  setStorage("cuidacao_user_session", "");
  const overlay = document.getElementById("loginScreenOverlay");
  if (overlay) overlay.classList.remove("hidden");
  switchAuthTab("login");
  showToast("Sessão encerrada com segurança.");
}

function syncUserInterfaceWithSession() {
  const overlay = document.getElementById("loginScreenOverlay");
  if (!currentUser) {
    if (overlay) overlay.classList.remove("hidden");
    return;
  }

  if (overlay) overlay.classList.add("hidden");

  const firstName = currentUser.nome.split(" ")[0];
  const welcomeEl = document.getElementById("welcomeHeaderTitle");
  if (welcomeEl) {
    welcomeEl.innerHTML = `Olá, ${firstName}! Como podemos<br>cuidar de você hoje?`;
  }

  const initials = currentUser.nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(p => p[0].toUpperCase())
    .join("");

  const avatarEl = document.getElementById("settingsUserAvatar");
  const nameEl = document.getElementById("settingsUserName");
  const metaEl = document.getElementById("settingsUserMeta");

  if (avatarEl) avatarEl.textContent = initials || "MC";
  if (nameEl) nameEl.textContent = currentUser.nome;
  if (metaEl) metaEl.textContent = `${currentUser.bairro} • Doc: ${currentUser.documento}`;

  const postAutorInput = document.getElementById("postAutor");
  if (postAutorInput) {
    postAutorInput.value = currentUser.nome;
  }
}

function toggleQuickThemeFromLogin() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  setAppTheme(next);
}

/* ==========================================================================
3. SISTEMA DE NOTIFICAÇÕES DE CHEGADA DE MEDICAMENTOS
   ========================================================================== */
const defaultNotifications = [
  {
    id: 501,
    tipo: "medicamento",
    medicamento: "Losartana Potássica 50 mg",
    farmacia: "Farmácia Polo Vicente de Carvalho",
    mensagem: "O medicamento solicitado chegou ao estoque e encontra-se disponível para retirada gratuita mediante apresentação de receita e Cartão SUS.",
    data: "Hoje, 09:40",
    lida: false,
    targetScreen: "saude"
  },
  {
    id: 502,
    tipo: "medicamento",
    medicamento: "Cloridrato de Metformina 850 mg",
    farmacia: "Farmácia Básica Vila Maia",
    mensagem: "Reposição confirmada na unidade. Compareça com documento oficial com foto e receita atualizada.",
    data: "Ontem, 16:15",
    lida: false,
    targetScreen: "saude"
  },
  {
    id: 503,
    tipo: "fiscalizacao",
    medicamento: "",
    farmacia: "Fiscalização Ambiental",
    mensagem: "Protocolo #DEN-482103 atualizado: Equipe técnica acionada para vistoria e remoção de resíduos no Paecara.",
    data: "27 Out",
    lida: true,
    targetScreen: "denuncias"
  }
];

let notificationsList = getJsonStorage("cuidacao_notifications", defaultNotifications);
let subscribedMedAlerts = getJsonStorage("cuidacao_med_alerts", [1]);
let currentNotifFilter = "todas";

function saveNotificationsState() {
  setJsonStorage("cuidacao_notifications", notificationsList);
  setJsonStorage("cuidacao_med_alerts", subscribedMedAlerts);
  updateNotificationBadge();
}

function updateNotificationBadge() {
  const badge = document.getElementById("notifBadge");
  if (!badge) return;
  const unreadCount = notificationsList.filter(n => !n.lida).length;
  badge.style.display = unreadCount > 0 ? "block" : "none";
}

function renderNotificationsList() {
  const container = document.getElementById("notificationsListContainer");
  const summary = document.getElementById("notifSheetSummary");
  if (!container) return;

  const unreadCount = notificationsList.filter(n => !n.lida).length;
  if (summary) {
    summary.textContent = unreadCount > 0
      ? `${unreadCount} notificação(ões) pendente(s) de leitura`
      : "Todas as notificações foram lidas";
  }

  const filtered = currentNotifFilter === "naolidas"
    ? notificationsList.filter(n => !n.lida)
    : notificationsList;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="app-card" style="text-align:center; padding:18px 12px;">
        <p style="font-size:calc(0.8rem * var(--font-scale)); font-weight:600; color:var(--text-secondary);">
          Nenhuma notificação ${currentNotifFilter === "naolidas" ? "não lida" : ""} registrada.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(notif => {
    const isMed = notif.tipo === "medicamento";
    return `
      <div class="app-card notif-card ${notif.lida ? 'read' : 'unread'}">
        <div style="display:flex; align-items:center; justify-content:space-between; gap:6px; margin-bottom:4px;">
          <span class="badge-pill" style="margin:0;">${notif.farmacia}</span>
          <span style="font-size:calc(0.68rem * var(--font-scale)); font-weight:600; color:${notif.lida ? 'var(--text-muted)' : 'var(--brand-primary)'};">
            ${notif.lida ? 'Lida' : 'Nova'} • ${notif.data}
          </span>
        </div>

        ${isMed ? `
          <h4 style="font-size:calc(0.84rem * var(--font-scale)); font-weight:700; color:var(--text-primary); margin-top:4px;">
            Medicamento: ${notif.medicamento}
          </h4>
          <p style="font-size:calc(0.74rem * var(--font-scale)); font-weight:600; color:var(--brand-primary); margin-top:2px;">
            Unidade: ${notif.farmacia}
          </p>
        ` : ''}

        <p style="font-size:calc(0.75rem * var(--font-scale)); color:var(--text-secondary); margin-top:4px; line-height:1.4;">
          ${notif.mensagem}
        </p>

        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-top:10px;">
          <button
            type="button"
            class="pill-btn"
            style="padding:4px 10px; font-size:calc(0.7rem * var(--font-scale));"
            onclick="closeNotificationsSheet(); openAppScreen('${notif.targetScreen || 'saude'}');"
          >
            Acessar seção
          </button>

          ${!notif.lida ? `
            <button
              type="button"
              class="pill-btn active"
              style="padding:4px 10px; font-size:calc(0.7rem * var(--font-scale));"
              onclick="markNotificationAsRead(${notif.id})"
            >
              ${ICONS.check}
              <span>Marcar como lida</span>
            </button>
          ` : `
            <span style="font-size:calc(0.69rem * var(--font-scale)); color:var(--text-muted); font-weight:600;">Visualizada</span>
          `}
        </div>
      </div>
    `;
  }).join("");
}

function setNotifFilter(filter) {
  currentNotifFilter = filter;
  const btnAll = document.getElementById("notifFilterAll");
  const btnUnread = document.getElementById("notifFilterUnread");
  if (btnAll) btnAll.classList.toggle("active", filter === "todas");
  if (btnUnread) btnUnread.classList.toggle("active", filter === "naolidas");
  renderNotificationsList();
}

function markNotificationAsRead(id) {
  const item = notificationsList.find(n => n.id === id);
  if (item && !item.lida) {
    item.lida = true;
    saveNotificationsState();
    renderNotificationsList();
    showToast("Notificação marcada como lida.");
  }
}

function markAllNotificationsRead() {
  let changed = false;
  notificationsList.forEach(n => {
    if (!n.lida) {
      n.lida = true;
      changed = true;
    }
  });
  saveNotificationsState();
  renderNotificationsList();
  showToast(changed ? "Todas as notificações foram marcadas como lidas." : "Não há notificações pendentes.");
}

function toggleMedArrivalAlert(medId) {
  const med = medicamentosData.find(m => m.id === medId);
  if (!med) return;

  const idx = subscribedMedAlerts.indexOf(medId);
  if (idx === -1) {
    subscribedMedAlerts.push(medId);
    const farmaciaUnidade = med.locais.split(" e ")[0] || "Farmácia Polo Municipal";

    notificationsList.unshift({
      id: Date.now(),
      tipo: "medicamento",
      medicamento: `${med.nome} (${med.dosagem})`,
      farmacia: farmaciaUnidade,
      mensagem: `Chegada confirmada: O medicamento ${med.nome} solicitado está disponível para retirada na unidade ${farmaciaUnidade}.`,
      data: "Agora mesmo",
      lida: false,
      targetScreen: "saude"
    });

    saveNotificationsState();
    renderMedicamentosList();
    renderNotificationsList();
    showToast(`Alerta ativado e notificação enviada para ${med.nome}.`);
  } else {
    subscribedMedAlerts.splice(idx, 1);
    saveNotificationsState();
    renderMedicamentosList();
    showToast(`Alerta desativado para ${med.nome}.`);
  }
}

function requestCustomMedNotification(medName) {
  const cleanName = (medName || "").trim();
  if (!cleanName) return;

  notificationsList.unshift({
    id: Date.now(),
    tipo: "medicamento",
    medicamento: cleanName,
    farmacia: "Farmácia Polo Vicente de Carvalho",
    mensagem: `O medicamento monitorado (${cleanName}) foi recebido na Farmácia Polo Vicente de Carvalho. Apresente documento com foto, Cartão SUS e receita médica.`,
    data: "Agora mesmo",
    lida: false,
    targetScreen: "saude"
  });

  saveNotificationsState();
  renderNotificationsList();
  showToast(`Monitoramento registrado para "${cleanName}". Verifique as notificações.`);
}

/* ==========================================================================
4. CATÁLOGO OFICIAL: GUIA DE MEDICAMENTOS (RENAME / REMUME)
   ========================================================================== */
const medicamentosData = [
  {
    id: 1,
    nome: "Losartana Potássica",
    dosagem: "50 mg (Comprimido)",
    categoria: "pressao",
    receita: "Receita Comum (1 via) — Validade: 180 dias para uso contínuo",
    docs: "Documento oficial com foto e Cartão Nacional de Saúde (SUS)",
    locais: "Farmácia Polo Vicente de Carvalho e UBS do município"
  },
  {
    id: 2,
    nome: "Cloridrato de Metformina",
    dosagem: "850 mg (Comprimido)",
    categoria: "diabetes",
    receita: "Receita Comum (1 via) — Validade: 180 dias para uso contínuo",
    docs: "Documento original com foto e Cartão SUS",
    locais: "Farmácia Polo Vicente de Carvalho e todas as UBS"
  },
  {
    id: 3,
    nome: "Amoxicilina",
    dosagem: "500 mg (Cápsula)",
    categoria: "antibiotico",
    receita: "Receita de Controle Especial em 2 vias (1 via retida) — Validade: 10 dias",
    docs: "RG/CNH do paciente e do responsável, e receita em 2 vias dentro do prazo",
    locais: "Farmácia Básica Vila Maia e Farmácia Polo Vicente de Carvalho"
  },
  {
    id: 4,
    nome: "Dipirona Monoidratada",
    dosagem: "500 mg (Comprimido ou Solução Oral)",
    categoria: "dor",
    receita: "Receita Comum (1 via) — Validade: 30 dias",
    docs: "Documento oficial com foto e Cartão SUS",
    locais: "Todas as UBSs e Unidades de Pronto Atendimento"
  },
  {
    id: 5,
    nome: "Omeprazol",
    dosagem: "20 mg (Cápsula)",
    categoria: "dor",
    receita: "Receita Comum (1 via) — Validade: 60 dias",
    docs: "Documento oficial com foto e Cartão SUS",
    locais: "Farmácia Básica Vila Maia e Farmácias das UBSs"
  },
  {
    id: 6,
    nome: "Glibenclamida",
    dosagem: "5 mg (Comprimido)",
    categoria: "diabetes",
    receita: "Receita Comum (1 via) — Validade: 180 dias para uso contínuo",
    docs: "Documento com foto, Cartão SUS e Receita Médica",
    locais: "UBS Vila Baiana e todas as UBS do município"
  },
  {
    id: 7,
    nome: "Cefalexina",
    dosagem: "500 mg (Cápsula)",
    categoria: "antibiotico",
    receita: "Receita de Controle Especial em 2 vias (1 via retida) — Validade: 10 dias",
    docs: "Documento do paciente e comprador, receita em 2 vias legível",
    locais: "Farmácia Polo Vicente de Carvalho e UBS Vila Maia"
  },
  {
    id: 8,
    nome: "Hidroclorotiazida",
    dosagem: "25 mg (Comprimido)",
    categoria: "pressao",
    receita: "Receita Comum (1 via) — Validade: 180 dias",
    docs: "Documento com foto e Cartão Nacional de Saúde (SUS)",
    locais: "Farmácia Central e Farmácias das UBSs"
  }
];

let currentMedCat = "todos";
let currentMedQuery = "";

function renderMedicamentosList() {
  const container = document.getElementById("medicamentosListContainer");
  if (!container) return;

  const filtered = medicamentosData.filter(m => {
    const catMatch = currentMedCat === "todos" || m.categoria === currentMedCat;
    const q = currentMedQuery.toLowerCase().trim();
    const queryMatch = !q || m.nome.toLowerCase().includes(q) || m.dosagem.toLowerCase().includes(q);
    return catMatch && queryMatch;
  });

  if (filtered.length === 0) {
    const safeQuery = currentMedQuery.replace(/"/g, "&quot;");
    container.innerHTML = `
      <div class="app-card" style="text-align:center; padding:20px 14px;">
        <p style="font-size:calc(0.83rem * var(--font-scale)); font-weight:700; color:var(--text-secondary); margin-bottom:4px;">
          Nenhum item localizado para "${safeQuery}".
        </p>
        <span style="font-size:calc(0.74rem * var(--font-scale)); color:var(--text-muted); display:block; margin-bottom:12px;">
          Solicite o monitoramento abaixo para receber um aviso assim que o medicamento chegar à rede municipal.
        </span>
        <button type="button" class="btn-main" onclick="requestCustomMedNotification('${safeQuery.replace(/'/g, "\\'")}')">
          Notificar chegada de "${safeQuery}"
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(med => {
    const isSubscribed = subscribedMedAlerts.includes(med.id);
    return `
      <article class="med-card">
        <div class="med-header">
          <div>
            <h3 class="med-name">${med.nome}</h3>
            <span class="med-dose">${med.dosagem}</span>
          </div>
          <span class="badge-pill">SUS / RENAME</span>
        </div>

        <div class="med-meta-box">
          <div class="med-row">
            <strong>Receituário:</strong>
            <span>${med.receita}</span>
          </div>
          <div class="med-row">
            <strong>Documentos:</strong>
            <span>${med.docs}</span>
          </div>
          <div class="med-row">
            <strong>Unidades:</strong>
            <span>${med.locais}</span>
          </div>
        </div>

        <div class="med-actions-bar">
          <span class="status-indicator">
            <span class="status-dot"></span>
            <span>Disponível na rede</span>
          </span>
          <button
            type="button"
            class="pill-btn ${isSubscribed ? 'active' : ''}"
            onclick="toggleMedArrivalAlert(${med.id})"
          >
            ${isSubscribed ? ICONS.check : ICONS.bell}
            <span>${isSubscribed ? 'Alerta de chegada ativo' : 'Receber aviso de chegada'}</span>
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function searchMedicamentos(query) {
  currentMedQuery = query;
  renderMedicamentosList();
}

function filterMedByCategory(cat, btnEl) {
  currentMedCat = cat;
  document.querySelectorAll("[data-medfilter]").forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  renderMedicamentosList();
}

function switchSaudeSubTab(tab) {
  const catView = document.getElementById("saudeCatalogoView");
  const popView = document.getElementById("saudeFarmaciaPopularView");
  const btnCat = document.getElementById("subTabMedCatalogo");
  const btnPop = document.getElementById("subTabFarmaciaPop");

  if (tab === "popular") {
    if (catView) catView.style.display = "none";
    if (popView) popView.style.display = "block";
    if (btnCat) btnCat.classList.remove("active");
    if (btnPop) btnPop.classList.add("active");
    renderFarmaciaPopularResults();
  } else {
    if (catView) catView.style.display = "block";
    if (popView) popView.style.display = "none";
    if (btnCat) btnCat.classList.add("active");
    if (btnPop) btnPop.classList.remove("active");
  }
}

/* ==========================================================================
5. BUSCA POR FARMÁCIA POPULAR (API VIACEP + REDE CREDENCIADA)
   ========================================================================== */
const farmaciaPopularData = [
  {
    id: 201,
    nome: "Drogaria São Paulo — Unidade Credenciada",
    endereco: "Av. Puglisi, 430 — Pitangueiras",
    bairro: "Pitangueiras",
    cidade: "Guarujá",
    uf: "SP",
    cep: "11410-001",
    telefone: "(13) 3386-2100",
    horario: "Todos os dias, 07h às 23h",
    coords: [-23.9932, -46.2568],
    beneficios: "Elenco oficial gratuito (Hipertensão, Diabetes, Asma, Osteoporose) e subsidiado"
  },
  {
    id: 202,
    nome: "Droga Raia — Aqui Tem Farmácia Popular",
    endereco: "Av. Dom Pedro I, 1210 — Enseada",
    bairro: "Enseada",
    cidade: "Guarujá",
    uf: "SP",
    cep: "11440-001",
    telefone: "(13) 3355-4410",
    horario: "Seg a Dom, 07h às 22h",
    coords: [-23.9828, -46.2294],
    beneficios: "Dispensação gratuita mediante CPF, documento com foto e receita médica"
  },
  {
    id: 203,
    nome: "Farma Conde — Unidade Vicente de Carvalho",
    endereco: "Av. Thiago Ferreira, 685 — Vicente de Carvalho",
    bairro: "Vicente de Carvalho",
    cidade: "Guarujá",
    uf: "SP",
    cep: "11450-001",
    telefone: "(13) 3342-1980",
    horario: "Seg a Sáb, 08h às 21h",
    coords: [-23.9401, -46.2882],
    beneficios: "Atendimento completo do Programa Farmácia Popular e Dignidade Menstrual"
  },
  {
    id: 204,
    nome: "Drogasil — Unidade Farmácia Popular Vila Maia",
    endereco: "Av. Adhemar de Barros, 1540 — Vila Maia",
    bairro: "Vila Maia",
    cidade: "Guarujá",
    uf: "SP",
    cep: "11430-003",
    telefone: "(13) 3387-5090",
    horario: "Atendimento 24h",
    coords: [-23.9895, -46.2635],
    beneficios: "Medicamentos gratuitos para hipertensão, diabetes e descontos de até 90%"
  },
  {
    id: 205,
    nome: "Drogaria Pague Menos — Unidade Paecara",
    endereco: "Av. Santos Dumont, 920 — Paecara",
    bairro: "Paecara",
    cidade: "Guarujá",
    uf: "SP",
    cep: "11460-002",
    telefone: "(13) 3352-8800",
    horario: "Seg a Sáb, 07h às 22h",
    coords: [-23.9378, -46.2840],
    beneficios: "Credenciada para dispensação gratuita com receita do SUS ou particular"
  },
  {
    id: 206,
    nome: "Drogaria Bifarma — Unidade Regional Gonzaga",
    endereco: "Av. Ana Costa, 482 — Gonzaga",
    bairro: "Gonzaga",
    cidade: "Santos",
    uf: "SP",
    cep: "11060-002",
    telefone: "(13) 3284-1122",
    horario: "Seg a Dom, 07h às 23h",
    coords: [-23.9665, -46.3328],
    beneficios: "Cobertura regional na Baixada Santista pelo Programa Farmácia Popular"
  }
];

let currentFpQuery = "";
let dynamicCepUnit = null;

function renderFarmaciaPopularResults() {
  const container = document.getElementById("farmaciaPopularResultsContainer");
  const countLabel = document.getElementById("fpCountLabel");
  if (!container) return;

  const q = currentFpQuery.toLowerCase().trim();
  const cleanDigits = q.replace(/\D/g, "");

  let sourceList = [...farmaciaPopularData];
  if (dynamicCepUnit) {
    sourceList = [dynamicCepUnit, ...sourceList];
  }

  const filtered = sourceList.filter(item => {
    if (!q) return true;
    const itemCepDigits = item.cep.replace(/\D/g, "");
    const textMatch = (
      item.nome + " " +
      item.endereco + " " +
      item.bairro + " " +
      item.cidade + " " +
      item.cep
    ).toLowerCase().includes(q);

    const cepPrefixMatch = cleanDigits.length >= 4 && itemCepDigits.startsWith(cleanDigits.slice(0, 5));
    return textMatch || cepPrefixMatch;
  });

  if (countLabel) {
    countLabel.textContent = `${filtered.length} unidade(s)`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="app-card" style="text-align:center; padding:18px 12px;">
        <p style="font-size:calc(0.8rem * var(--font-scale)); font-weight:600; color:var(--text-secondary);">
          Nenhuma unidade localizada para "${currentFpQuery}".
        </p>
        <span style="font-size:calc(0.72rem * var(--font-scale)); color:var(--text-muted);">
          Informe um CEP válido de 8 dígitos, bairro ou município.
        </span>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(fp => `
    <div class="app-card">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:6px; margin-bottom:4px;">
        <span class="badge-pill" style="margin:0;">Farmácia Popular Credenciada</span>
        <span style="font-size:calc(0.69rem * var(--font-scale)); font-weight:600; color:var(--text-muted);">CEP ${fp.cep}</span>
      </div>
      <h3 style="font-size:calc(0.86rem * var(--font-scale)); font-weight:700; color:var(--text-primary); margin-top:4px;">
        ${fp.nome}
      </h3>
      <div class="ong-meta-list">
        <div class="ong-meta-row">
          ${ICONS.pin}
          <span>${fp.endereco} — ${fp.cidade}/${fp.uf}</span>
        </div>
        <div class="ong-meta-row">
          ${ICONS.clock}
          <span>${fp.horario}</span>
        </div>
        <div class="ong-meta-row">
          ${ICONS.phone}
          <span>${fp.telefone}</span>
        </div>
      </div>
      <p style="font-size:calc(0.72rem * var(--font-scale)); color:var(--brand-primary); font-weight:600; margin-top:8px;">
        ${fp.beneficios}
      </p>
      <div style="display:flex; justify-content:flex-end; margin-top:10px;">
        <button
          type="button"
          class="pill-btn active"
          onclick="focusFarmaciaPopularOnMap(${fp.id})"
        >
          ${ICONS.pin}
          <span>Visualizar no Mapa</span>
        </button>
      </div>
    </div>
  `).join("");
}

async function lookupCepViaApi(cepDigits) {
  const statusBox = document.getElementById("fpCepApiStatus");
  if (!statusBox) return;

  statusBox.style.display = "block";
  statusBox.textContent = "Consultando CEP na base oficial (ViaCEP)...";

  try {
    const resp = await fetch(`https://viacep.com.br/ws/${cepDigits}/json/`);
    const data = await resp.json();

    if (data && !data.erro) {
      const bairro = data.bairro || "Centro";
      const cidade = data.localidade || "Guarujá";
      const logradouro = data.logradouro || "Região consultada";

      statusBox.innerHTML = `
        <strong>Logradouro identificado (${data.cep}):</strong><br>
        ${logradouro} — ${bairro}, ${cidade}/${data.uf}
      `;

      const hasLocalMatch = farmaciaPopularData.some(
        f => f.cidade.toLowerCase() === cidade.toLowerCase() || f.bairro.toLowerCase() === bairro.toLowerCase()
      );

      if (!hasLocalMatch) {
        dynamicCepUnit = {
          id: 999,
          nome: `Unidade Credenciada Farmácia Popular — ${bairro}`,
          endereco: `Atendimento próximo a ${logradouro} — ${bairro}`,
          bairro: bairro,
          cidade: cidade,
          uf: data.uf || "SP",
          cep: data.cep,
          telefone: "136 (Ouvidoria SUS)",
          horario: "Seg a Sáb, 08h às 20h",
          coords: [-23.9750, -46.2550],
          beneficios: "Unidade localizada por CEP para dispensação com CPF e receita médica"
        };
      } else {
        dynamicCepUnit = null;
        currentFpQuery = bairro;
      }

      renderFarmaciaPopularResults();
    } else {
      statusBox.textContent = "CEP não localizado na base nacional. Verifique os números informados.";
    }
  } catch (err) {
    statusBox.textContent = "Exibindo unidades credenciadas compatíveis com o CEP informado.";
  }
}

function searchFarmaciaPopularLive(val) {
  currentFpQuery = val;
  const statusBox = document.getElementById("fpCepApiStatus");
  const digits = val.replace(/\D/g, "");

  if (digits.length === 8) {
    lookupCepViaApi(digits);
  } else {
    dynamicCepUnit = null;
    if (statusBox) statusBox.style.display = "none";
  }

  renderFarmaciaPopularResults();
}

function handleFarmaciaPopularSearch(e) {
  e.preventDefault();
  const input = document.getElementById("fpSearchInput");
  if (!input) return;
  searchFarmaciaPopularLive(input.value);
}

function quickFilterFarmaciaPopular(term, btnEl) {
  dynamicCepUnit = null;
  currentFpQuery = term;
  const input = document.getElementById("fpSearchInput");
  if (input) input.value = term;
  const statusBox = document.getElementById("fpCepApiStatus");
  if (statusBox) statusBox.style.display = "none";

  document.querySelectorAll("[data-fpquick]").forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  renderFarmaciaPopularResults();
}

function focusFarmaciaPopularOnMap(id) {
  const allUnits = dynamicCepUnit ? [dynamicCepUnit, ...farmaciaPopularData] : farmaciaPopularData;
  const unit = allUnits.find(u => u.id === id);
  if (!unit) return;

  openAppScreen("mapa");
  const popFilterBtn = document.querySelector('[data-mapfilter="popular"]');
  filterMapPoints("popular", popFilterBtn);

  setTimeout(() => {
    if (leafletMapInstance && unit.coords) {
      leafletMapInstance.setView(unit.coords, 15, { animate: true });
    }
    showToast(`Localização destacada: ${unit.nome}`);
  }, 220);
}

/* ==========================================================================
6. UPLOAD E PRÉVIA DE IMAGENS DA GALERIA
   ========================================================================== */
function handleImageFileSelect(inputEl, wrapId, imgId) {
  const file = inputEl.files && inputEl.files[0];
  const wrap = document.getElementById(wrapId);
  const img = document.getElementById(imgId);

  if (!file || !wrap || !img) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    img.src = evt.target.result;
    img.setAttribute("data-attached", evt.target.result);
    wrap.style.display = "block";
    showToast("Imagem carregada com sucesso.");
  };
  reader.readAsDataURL(file);
}

function clearSelectedImage(inputId, wrapId, imgId) {
  const inputEl = document.getElementById(inputId);
  const wrap = document.getElementById(wrapId);
  const img = document.getElementById(imgId);

  if (inputEl) inputEl.value = "";
  if (img) {
    img.src = "";
    img.removeAttribute("data-attached");
  }
  if (wrap) wrap.style.display = "none";
}

/* ==========================================================================
7. NOTÍCIAS, COMUNIDADE, SISTEMA DE APOIO E FEEDBACKS
   ========================================================================== */
const newsData = [
  {
    id: 1,
    tag: "Campanha de Vacinação",
    title: "Mutirão de atualização vacinal nas UBS do município",
    date: "27 Out 2026",
    desc: "Horários ampliados para imunização contra gripe e vacinas de rotina em todas as unidades.",
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=420&q=80",
    fullText: "A Secretaria de Saúde ampliou o atendimento das salas de vacina em todas as UBS do município. O comparecimento pode ser feito com caderneta de vacinação e Cartão SUS para atualização das doses contra a gripe, hepatite e reforço contra a dengue."
  },
  {
    id: 2,
    tag: "Prevenção de Endemias",
    title: "Combate integrado a focos do mosquito Aedes aegypti",
    date: "25 Out 2026",
    desc: "Vistoria nos bairros e orientação sobre descarte seguro de recipientes.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=420&q=80",
    fullText: "Ações conjuntas entre agentes ambientais e de saúde percorrem os bairros para eliminação de criadouros. A população pode acionar as ONGs parceiras e os pontos de coleta municipais para descarte adequado de materiais recicláveis."
  },
  {
    id: 3,
    tag: "Proteção Animal",
    title: "Feira de adoção responsável e agendamento de castração",
    date: "23 Out 2026",
    desc: "ONGs parceiras e rede municipal oferecem atendimento e orientações de guarda responsável.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=420&q=80",
    fullText: "Animais acolhidos e reabilitados por ONGs de proteção animal estarão disponíveis para adoção consciente neste sábado, com cadastro para mutirão gratuito de castração e microchipagem."
  }
];

const defaultCommunityData = [
  {
    id: 102,
    autor: "Rede Proteção Animal Litoral",
    autorEmail: "rede@animal.org",
    tema: "Proteção Animal",
    texto: "Mutirão de castração gratuita com inscrições abertas para tutores cadastrados. Confira a documentação necessária e apoie a divulgação no bairro.",
    imagem: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80",
    curtidas: 68,
    apoiadores: ["morador@cuidacao.org.br"],
    feedbacks: [
      {
        id: 9001,
        autor: "Mariana Santos",
        autorEmail: "mariana@teste.com",
        nota: 5,
        texto: "Realizei o procedimento na semana passada, equipe veterinária extremamente atenciosa e organizada.",
        data: "Há 2h",
        likes: 4,
        liked: false
      }
    ]
  },
  {
    id: 101,
    autor: "Associação de Moradores Vila Maia",
    autorEmail: "vila@maia.org",
    tema: "Preservação Ambiental",
    texto: "Neste sábado às 08h realizaremos o plantio coletivo de 40 mudas nativas da Mata Atlântica e limpeza da praça central.",
    imagem: "",
    curtidas: 42,
    apoiadores: [],
    feedbacks: [
      {
        id: 9002,
        autor: "Carlos Eduardo",
        autorEmail: "carlos@teste.com",
        nota: 5,
        texto: "Excelente iniciativa para o bairro. Levarei sacos de coleta seletiva e luvas extras.",
        data: "Há 5h",
        likes: 2,        
        liked: false
      }
    ]
  }
];

let communityData = getJsonStorage("cuidacao_community_posts", defaultCommunityData);
let openFeedbackPanels = {};

function saveCommunityState() {
  setJsonStorage("cuidacao_community_posts", communityData);
}

function renderNewsCards(searchQuery = "") {
  const container = document.getElementById("homeNewsList");
  if (!container) return;

  const filtered = newsData.filter(item => {
    if (!searchQuery) return true;
    return (item.title + " " + item.tag + " " + item.desc).toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="app-card" style="text-align:center; color:var(--text-secondary); font-size:calc(0.76rem * var(--font-scale));">Nenhuma notícia correspondente encontrada.</div>`;
    return;
  }

  container.innerHTML = filtered.map(n => `
    <article class="focus-card" onclick="openNewsDetail(${n.id})">
      <img class="focus-img" src="${n.img}" alt="${n.title}" onerror="this.src='https://placehold.co/240x200/159947/ffffff?text=cuidACAO'" />
      <div class="focus-body">
        <span class="focus-tag">${n.tag}</span>
        <h3 class="focus-title">${n.title}</h3>
        <span class="focus-date">${n.date}</span>
      </div>
    </article>
  `).join("");
}

function openNewsDetail(id) {
  const n = newsData.find(item => item.id === id);
  if (!n) return;
  document.getElementById("detailNewsCat").textContent = n.tag;
  document.getElementById("detailNewsImg").src = n.img;
  document.getElementById("detailNewsTitle").textContent = n.title;
  document.getElementById("detailNewsDate").textContent = n.date;
  document.getElementById("detailNewsText").textContent = n.fullText;
  document.getElementById("newsDetailSheet").classList.add("open");
}

function closeNewsDetailSheet() {
  document.getElementById("newsDetailSheet").classList.remove("open");
}

function renderCommunityFeed() {
  const homePreview = document.getElementById("homeCommunityPreview");
  const fullList = document.getElementById("communityFeedList");

  // Ordenação automática decrescente por quantidade de apoios
  communityData.sort((a, b) => b.curtidas - a.curtidas);

  const defaultAuthorName = currentUser ? currentUser.nome : "";
  const userEmail = currentUser ? currentUser.email : "";

  const buildPostCard = (post, isPreview = false) => {
    // Garante que apoiadores seja um array
    if (!post.apoiadores) post.apoiadores = [];
    
    const isSupported = post.apoiadores.includes(userEmail);
    const feedbacks = Array.isArray(post.feedbacks) ? post.feedbacks : [];
    const isPanelOpen = !!openFeedbackPanels[post.id];
    const isAuthor = userEmail === post.autorEmail;

    const avgRating = feedbacks.length > 0
      ? (feedbacks.reduce((acc, f) => acc + (Number(f.nota) || 5), 0) / feedbacks.length).toFixed(1)
      : null;

    return `
      <div class="app-card" id="post-${post.id}">
        <div style="display:flex; align-items:center; justify-content:space-between; gap:6px;">
          <span class="badge-pill">${post.tema}</span>
          <div style="display:flex; gap: 8px; align-items: center;">
              ${avgRating ? `
                <span class="rating-badge">
                  <span style="color:var(--brand-primary); display:inline-flex;">${ICONS.starFilled}</span>
                  <span>${avgRating} (${feedbacks.length})</span>
                </span>
              ` : ""}
              ${isAuthor && !isPreview ? `
                <button type="button" class="btn-outline" style="padding: 2px 6px; width: auto; color: #dc2626; border-color: #fca5a5;" onclick="deletePost(${post.id})" title="Excluir publicação">
                    ${ICONS.trash}
                </button>
              ` : ""}
          </div>
        </div>

        <h3 style="font-size:calc(0.86rem * var(--font-scale)); font-weight:700; margin-bottom:4px;">${post.autor}</h3>
        <p style="font-size:calc(0.77rem * var(--font-scale)); color:var(--text-secondary); line-height:1.42;">${post.texto}</p>

        ${post.imagem ? `
          <img src="${post.imagem}" alt="Imagem anexada à publicação de ${post.autor}" class="attached-media-img" />
        ` : ""}

        <div class="post-actions-row">
          <button
            type="button"
            onclick="${isPreview ? "openAppScreen('comunidade')" : `toggleFeedbackSection(${post.id})`}"
            class="pill-btn ${isPanelOpen && !isPreview ? 'active' : ''}"
            style="padding:5px 11px;"
          >
            ${ICONS.comment}
            <span>Feedbacks (${feedbacks.length})</span>
          </button>

          <button
            type="button"
            onclick="toggleLikePost(${post.id})"
            class="pill-btn ${isSupported ? 'active' : ''}"
            style="padding:5px 11px;"
            title="${isSupported ? 'Remover apoio' : 'Apoiar publicação'}"
          >
            ${isSupported ? ICONS.starFilled : ICONS.starOutline}
            <span>${isSupported ? 'Apoiado' : 'Apoiar'} (${post.curtidas})</span>
          </button>
        </div>

        ${!isPreview && isPanelOpen ? `
          <div class="feedback-section">
            <h4 style="font-size:calc(0.76rem * var(--font-scale)); font-weight:700; margin-bottom:8px;">
              Avaliações e Comentários
            </h4>

            ${feedbacks.length === 0 ? `
              <p style="font-size:calc(0.73rem * var(--font-scale)); color:var(--text-muted); margin-bottom:8px;">
                Nenhum comentário registrado. Envie o primeiro feedback abaixo.
              </p>
            ` : feedbacks.map(fb => `
              <div class="feedback-item">
                <div class="feedback-item-header">
                  <span class="feedback-author">${fb.autor}</span>
                  <div style="display:flex; gap: 8px; align-items:center;">
                      <span class="feedback-stars" aria-label="Nota ${fb.nota} de 5">${renderStarIcons(fb.nota)}</span>
                      ${fb.autorEmail === userEmail ? `
                        <button type="button" style="background: none; border: none; color: #dc2626; cursor: pointer;" onclick="deleteFeedback(${post.id}, ${fb.id})" title="Excluir comentário">
                            ${ICONS.trash}
                        </button>
                      ` : ''}
                  </div>
                </div>
                <p class="feedback-text">${fb.texto}</p>
                <div class="feedback-meta-actions">
                  <span style="font-size:calc(0.66rem * var(--font-scale)); color:var(--text-muted);">${fb.data || 'Hoje'}</span>
                  <button type="button" class="feedback-mini-btn" onclick="likeFeedbackComment(${post.id}, ${fb.id})">
                    ${ICONS.thumbUp}
                    <span>Útil (${fb.likes || 0})</span>
                  </button>
                  <button type="button" class="feedback-mini-btn" onclick="replyToFeedback(${post.id}, '${fb.autor.replace(/'/g, "\\'")}')">
                    ${ICONS.reply}
                    <span>Responder</span>
                  </button>
                </div>
              </div>
            `).join("")}

            <form class="feedback-form" onsubmit="handleFeedbackSubmit(event, ${post.id})">
              <div style="display:flex; gap:6px;">
                <input
                  type="text"
                  id="fbAutor-${post.id}"
                  class="form-input"
                  style="padding:7px 10px; font-size:calc(0.75rem * var(--font-scale));"
                  placeholder="Seu nome"
                  value="${defaultAuthorName.replace(/"/g, '&quot;')}"
                  required
                  disabled
                />
                <select
                  id="fbNota-${post.id}"
                  class="form-input"
                  style="width:125px; padding:7px 8px; font-size:calc(0.74rem * var(--font-scale));"
                  aria-label="Avaliação"
                >
                  <option value="5">Nota 5 — Excelente</option>
                  <option value="4">Nota 4 — Muito bom</option>
                  <option value="3">Nota 3 — Regular</option>
                  <option value="2">Nota 2 — Baixa</option>
                  <option value="1">Nota 1 — Crítica</option>
                </select>
              </div>
              <div style="display:flex; gap:6px;">
                <input
                  type="text"
                  id="fbTexto-${post.id}"
                  class="form-input"
                  style="padding:7px 10px; font-size:calc(0.75rem * var(--font-scale));"
                  placeholder="Escreva seu comentário ou avaliação..."
                  required
                  maxlength="200"
                />
                <button type="submit" class="btn-main" style="width:auto; padding:0 12px; font-size:calc(0.75rem * var(--font-scale));">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        ` : ""}
      </div>
    `;
  };

  if (homePreview && communityData.length > 0) {
    homePreview.innerHTML = buildPostCard(communityData[0], true);
  }
  if (fullList) {
    fullList.innerHTML = communityData.map(p => buildPostCard(p, false)).join("");
  }
}

function toggleLikePost(id) {
  if (!currentUser) {
      showToast("Faça login para apoiar.");
      return;
  }
  const p = communityData.find(item => item.id === id);
  if (!p) return;

  if (!p.apoiadores) p.apoiadores = [];

  const userEmail = currentUser.email;
  const index = p.apoiadores.indexOf(userEmail);

  if (index > -1) {
    // Remover apoio
    p.apoiadores.splice(index, 1);
    p.curtidas -= 1;
    showToast("Apoio removido.");
  } else {
    // Adicionar apoio
    p.apoiadores.push(userEmail);
    p.curtidas += 1;
    showToast("Apoio contabilizado.");
  }

  saveCommunityState();
  renderCommunityFeed();
}

function toggleFeedbackSection(postId) {
  openFeedbackPanels[postId] = !openFeedbackPanels[postId];
  renderCommunityFeed();
}

function deletePost(postId) {
    if (!currentUser) return;
    const postIndex = communityData.findIndex(item => item.id === postId);
    if (postIndex === -1) return;
    
    if (communityData[postIndex].autorEmail !== currentUser.email) {
        showToast("Você não tem permissão para excluir esta publicação.");
        return;
    }

    if (confirm("Tem certeza que deseja excluir esta publicação? Essa ação não pode ser desfeita.")) {
        communityData.splice(postIndex, 1);
        saveCommunityState();
        renderCommunityFeed();
        showToast("Publicação excluída com sucesso.");
    }
}

function deleteFeedback(postId, fbId) {
    if (!currentUser) return;
    const post = communityData.find(item => item.id === postId);
    if (!post || !Array.isArray(post.feedbacks)) return;

    const fbIndex = post.feedbacks.findIndex(f => f.id === fbId);
    if (fbIndex === -1) return;

    if (post.feedbacks[fbIndex].autorEmail !== currentUser.email) {
        showToast("Você não tem permissão para excluir este comentário.");
        return;
    }

    if (confirm("Tem certeza que deseja excluir seu comentário?")) {
        post.feedbacks.splice(fbIndex, 1);
        saveCommunityState();
        renderCommunityFeed();
        showToast("Comentário excluído.");
    }
}


function handleFeedbackSubmit(e, postId) {
  e.preventDefault();
  if(!currentUser) {
      showToast("Faça login para comentar.");
      return;
  }

  const post = communityData.find(item => item.id === postId);
  if (!post) return;

  const notaInput = document.getElementById(`fbNota-${postId}`);
  const textoInput = document.getElementById(`fbTexto-${postId}`);

  const nota = notaInput ? parseInt(notaInput.value, 10) : 5;
  const texto = textoInput ? textoInput.value.trim() : "";

  if (!texto) return;

  if (contemLinguagemInadequada(texto)) {
      showToast("Ops! Linguagem inadequada detectada. Por favor, mantenha o respeito.");
      return;
  }

  if (!Array.isArray(post.feedbacks)) {
    post.feedbacks = [];
  }

  post.feedbacks.push({
    id: Date.now(),
    autor: currentUser.nome,
    autorEmail: currentUser.email,
    nota,
    texto,
    data: "Agora mesmo",
    likes: 0,
    liked: false
  });

  openFeedbackPanels[postId] = true;
  saveCommunityState();
  renderCommunityFeed();
  showToast("Feedback registrado na publicação.");
}

function likeFeedbackComment(postId, fbId) {
  const post = communityData.find(item => item.id === postId);
  if (!post || !Array.isArray(post.feedbacks)) return;

  const fb = post.feedbacks.find(f => f.id === fbId);
  if (!fb) return;

  if (fb.liked) {
    showToast("Avaliação de comentário já registrada.");
    return;
  }

  fb.liked = true;
  fb.likes = (fb.likes || 0) + 1;
  saveCommunityState();
  renderCommunityFeed();
}

function replyToFeedback(postId, authorName) {
  openFeedbackPanels[postId] = true;
  renderCommunityFeed();
  setTimeout(() => {
    const input = document.getElementById(`fbTexto-${postId}`);
    if (input) {
      input.value = `@${authorName} `;
      input.focus();
    }
  }, 50);
}

function handlePostSubmit(e) {
  e.preventDefault();
  if (!currentUser) return;

  const tema = document.getElementById("postTema").value;
  const texto = document.getElementById("postTexto").value.trim();
  const imgPreview = document.getElementById("postImgPreview");
  const imagem = imgPreview ? (imgPreview.getAttribute("data-attached") || "") : "";

  if(!texto) return;

  if (contemLinguagemInadequada(texto)) {
      showToast("Ops! Linguagem inadequada detectada. Por favor, mantenha o respeito.");
      return;
  }

  const newPostId = Date.now();
  communityData.unshift({
    id: newPostId,
    autor: currentUser.nome,
    autorEmail: currentUser.email,
    tema,
    texto,
    imagem,
    curtidas: 0,
    apoiadores: [],
    feedbacks: []
  });

  saveCommunityState();
  renderCommunityFeed();
  e.target.reset();
  if (currentUser) {
    document.getElementById("postAutor").value = currentUser.nome;
  }
  clearSelectedImage("postImagemInput", "postImgPreviewWrap", "postImgPreview");
  updateMuralCounter(); // Reset do contador
  showToast("Comunicado publicado no mural comunitário.");
}

/* ==========================================================================
8. DENÚNCIAS AMBIENTAIS E DE PROTEÇÃO ANIMAL (COM ANEXO DE IMAGEM)
   ========================================================================== */
const denunciaTypes = {
  ambiental: [
    "Descarte irregular de resíduos sólidos ou entulho",
    "Queimada urbana ou foco de incêndio em vegetação",
    "Lançamento de efluentes em rios, canais ou praias",
    "Supressão ou poda predatória de vegetação nativa"
  ],
  animal: [
    "Abandono de animal em via pública ou imóvel desocupado",
    "Maus-tratos físicos ou privação de água e alimento",
    "Animal ferido em via pública necessitando de resgate",
    "Confinamento inadequado ou insalubridade severa"
  ]
};

const defaultDenunciasHistory = [
  {
    id: 1,
    protocolo: "DEN-482103",
    categoria: "Ambiental",
    tipo: "Descarte irregular de resíduos sólidos ou entulho",
    local: "R. Brg. Eduardo Gomes, próx. nº 480 — Paecara",
    descricao: "Acúmulo de resíduos de construção civil obstruindo a drenagem pluvial e o passeio público.",
    imagem: "",
    status: "Equipe técnica acionada",
    autorEmail: "sistema"
  },
  {
    id: 2,
    protocolo: "DEN-319502",
    categoria: "Proteção Animal",
    tipo: "Abandono de animal em via pública ou imóvel desocupado",
    local: "Praça central — Vila Maia",
    descricao: "Animal de porte médio sem tutor identificado necessitando de acolhimento e triagem veterinária.",
    imagem: "",
    status: "Em análise técnica",
    autorEmail: "sistema"
  }
];

let denunciasHistory = getJsonStorage("cuidacao_denuncias", defaultDenunciasHistory);

function selectDenunciaType(type) {
  openAppScreen("denuncias");
  const catInput = document.getElementById("denunciaCatInput");
  const select = document.getElementById("denunciaSelectTipo");
  const pillAmb = document.getElementById("pillDenAmbiental");
  const pillAni = document.getElementById("pillDenAnimal");

  if (type === "animal") {
    catInput.value = "Proteção Animal";
    pillAni.classList.add("active");
    pillAmb.classList.remove("active");
    select.innerHTML = denunciaTypes.animal.map(opt => `<option value="${opt}">${opt}</option>`).join("");
  } else {
    catInput.value = "Ambiental";
    pillAmb.classList.add("active");
    pillAni.classList.remove("active");
    select.innerHTML = denunciaTypes.ambiental.map(opt => `<option value="${opt}">${opt}</option>`).join("");
  }
}

function useGpsLocation() {
  const locInput = document.getElementById("denunciaLocalInput");
  if (locInput) {
    if (navigator.geolocation) {
        showToast("Obtendo localização...");
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toFixed(5);
            const lng = position.coords.longitude.toFixed(5);
            locInput.value = `Lat: ${lat}, Lng: ${lng} (GPS)`;
            showToast("Localização capturada com sucesso.");
        }, (error) => {
            locInput.value = "Localização GPS não disponível";
            showToast("Erro ao obter GPS. Digite manualmente.");
        });
    } else {
        locInput.value = "Localização via navegador não suportada";
    }
  }
}

function renderDenunciasHistory() {
  const container = document.getElementById("denunciasHistoryList");
  if (!container) return;

  const userEmail = currentUser ? currentUser.email : "";

  container.innerHTML = denunciasHistory.map(d => `
    <div class="app-card">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:6px; margin-bottom:4px;">
        <span class="badge-pill" style="margin:0;">Protocolo #${d.protocolo}</span>
        <div style="display:flex; gap: 8px; align-items: center;">
            <span style="font-size:calc(0.68rem * var(--font-scale)); font-weight:600; color:var(--text-muted);">${d.categoria}</span>
            ${d.autorEmail === userEmail ? `
              <button type="button" class="btn-outline" style="padding: 2px 6px; width: auto; color: #dc2626; border-color: #fca5a5;" onclick="deleteDenuncia(${d.id})" title="Excluir denúncia">
                  ${ICONS.trash}
              </button>
            ` : ""}
        </div>
      </div>
      <h3 style="font-size:calc(0.84rem * var(--font-scale)); font-weight:700;">${d.tipo}</h3>
      <div class="ong-meta-row" style="margin-top:4px; font-size:calc(0.75rem * var(--font-scale)); color:var(--text-secondary);">
        ${ICONS.pin}
        <span>${d.local}</span>
      </div>
      ${d.descricao ? `<p style="font-size:calc(0.74rem * var(--font-scale)); color:var(--text-secondary); margin-top:5px; line-height:1.38;">${d.descricao}</p>` : ""}
      ${d.imagem ? `<img src="${d.imagem}" alt="Evidência fotográfica do protocolo ${d.protocolo}" class="attached-media-img" />` : ""}
      <div style="margin-top:8px; padding-top:6px; border-top:1px solid var(--border-color); display:flex; align-items:center; justify-content:space-between;">
        <span class="status-indicator">
          <span class="status-dot"></span>
          <span>Status: ${d.status}</span>
        </span>
      </div>
    </div>
  `).join("");
}

function deleteDenuncia(id) {
    if (!currentUser) return;
    const index = denunciasHistory.findIndex(d => d.id === id);
    if (index === -1) return;

    if (denunciasHistory[index].autorEmail !== currentUser.email) {
        showToast("Você não tem permissão para excluir esta denúncia.");
        return;
    }

    if (confirm("Tem certeza que deseja excluir esta denúncia? O protocolo será cancelado.")) {
        denunciasHistory.splice(index, 1);
        setJsonStorage("cuidacao_denuncias", denunciasHistory);
        renderDenunciasHistory();
        showToast("Denúncia excluída com sucesso.");
    }
}

function handleDenunciaSubmit(e) {
  e.preventDefault();
  if (!currentUser) {
      showToast("Faça login para registrar uma ocorrência.");
      return;
  }
  const cat = document.getElementById("denunciaCatInput").value;
  const tipo = document.getElementById("denunciaSelectTipo").value;
  const local = document.getElementById("denunciaLocalInput").value.trim();
  const descricao = document.getElementById("denunciaDescInput").value.trim();
  const imgPreview = document.getElementById("denunciaImgPreview");
  const imagem = imgPreview ? (imgPreview.getAttribute("data-attached") || "") : "";

  if(!descricao || !local) return;

  if (contemLinguagemInadequada(descricao)) {
      showToast("Ops! Linguagem inadequada detectada. Por favor, seja objetivo e respeitoso no relato.");
      return;
  }

  const protocoloNum = Math.floor(100000 + Math.random() * 900000);
  const protocolo = `DEN-${protocoloNum}`;

  denunciasHistory.unshift({
    id: Date.now(),
    protocolo,
    categoria: cat,
    tipo,
    local,
    descricao,
    imagem,
    status: "Protocolo Registrado",
    autorEmail: currentUser.email
  });

  setJsonStorage("cuidacao_denuncias", denunciasHistory);
  renderDenunciasHistory();
  document.getElementById("denunciaLocalInput").value = "";
  document.getElementById("denunciaDescInput").value = "";
  clearSelectedImage("denunciaImagemInput", "denunciaImgPreviewWrap", "denunciaImgPreview");
  updateDenunciaCounter();
  showToast(`Ocorrência registrada sob o protocolo #${protocolo}.`);
}

// Contadores de Caracteres
function setupCharacterCounters() {
    const textDenuncia = document.getElementById('denunciaDescInput');
    const countDenuncia = document.getElementById('contadorCaracteresDenuncia');
    
    if (textDenuncia && countDenuncia) {
        textDenuncia.addEventListener('input', () => {
            countDenuncia.textContent = `${textDenuncia.value.length} / 300`;
        });
    }

    const textMural = document.getElementById('postTexto');
    const countMural = document.getElementById('contadorCaracteresMural');
    
    if (textMural && countMural) {
        textMural.addEventListener('input', () => {
            countMural.textContent = `${textMural.value.length} / 400`;
        });
    }
}

function updateDenunciaCounter() {
    const count = document.getElementById('contadorCaracteresDenuncia');
    if (count) count.textContent = `0 / 300`;
}

function updateMuralCounter() {
    const count = document.getElementById('contadorCaracteresMural');
    if (count) count.textContent = `0 / 400`;
}


/* ==========================================================================
9. MAPA INTERATIVO DE ONGs (SAÚDE PÚBLICA, MEIO AMBIENTE E PROTEÇÃO ANIMAL)
   ========================================================================== */
const ongsLocations = [
  {
    id: 1,
    name: "Instituto Vida & Saúde Comunitária do Litoral",
    type: "saude",
    badge: "ONG — Saúde Pública",
    color: "#159947",
    coords: [-23.9918, -46.2575],
    atuacao: "Orientação farmacêutica, prevenção de hipertensão e diabetes, apoio a pacientes acamados e encaminhamento ao SUS.",
    address: "R. Washington, 310 — Centro / Pitangueiras, Guarujá - SP",
    contact: "(13) 3384-6210 • contato@vidasaucelitoral.org.br",
    hours: "Seg a Sex, 08h às 17h"
  },
  {
    id: 2,
    name: "Rede Solidária de Saúde e Acolhimento Vicente de Carvalho",
    type: "saude",
    badge: "ONG — Saúde Pública",
    color: "#159947",
    coords: [-23.9425, -46.2860],
    atuacao: "Apoio nutricional, banco de cadeiras de rodas, aferição de pressão arterial e educação em saúde comunitária.",
    address: "Av. Thiago Ferreira, 412 — Vicente de Carvalho, Guarujá - SP",
    contact: "(13) 3352-1940 • atendimento@redesolidariavc.org.br",
    hours: "Seg a Sáb, 08h30 às 17h30"
  },
  {
    id: 3,
    name: "Associação Guardiões da Restinga e Manguezais (AGRM)",
    type: "ambiental",
    badge: "ONG — Preservação Ambiental",
    color: "#0d9488",
    coords: [-23.9810, -46.2320],
    atuacao: "Recuperação de áreas degradadas de Mata Atlântica, mutirões de limpeza costeira, coleta seletiva e educação ambiental.",
    address: "Av. Dom Pedro I, 1890 — Enseada, Guarujá - SP",
    contact: "(13) 3355-7830 • ambiental@guardioesrestinga.org.br",
    hours: "Ter a Dom, 08h às 16h"
  },
  {
    id: 4,
    name: "Instituto EcoMar de Conservação Costeira",
    type: "ambiental",
    badge: "ONG — Meio Ambiente",
    color: "#0d9488",
    coords: [-24.0012, -46.2695],
    atuacao: "Monitoramento de qualidade das águas, reabilitação de fauna marinha e oficinas de reciclagem comunitária.",
    address: "Av. General Monteiro de Barros, 640 — Astúrias, Guarujá - SP",
    contact: "(13) 3387-3390 • contato@institutoecohar.org.br",
    hours: "Seg a Sex, 09h às 18h"
  },
  {
    id: 5,
    name: "ONG Amparo Animal Guarujá — Resgate e Adoção",
    type: "animal",
    badge: "ONG — Proteção Animal",
    color: "#d97706",
    coords: [-23.9865, -46.2510],
    atuacao: "Resgate de animais vítimas de maus-tratos, mutirões de castração gratuita, atendimento veterinário solidário e adoção responsável.",
    address: "Av. Adhemar de Barros, 890 — Santo Antônio, Guarujá - SP",
    contact: "(13) 99714-8820 • resgate@amparoanimalguaruja.org.br",
    hours: "Seg a Sáb, 09h às 17h"
  },
  {
    id: 6,
    name: "Projeto Patas do Litoral — Bem-Estar e Castração",
    type: "animal",
    badge: "ONG — Proteção Animal",
    color: "#d97706",
    coords: [-23.9388, -46.2815],
    atuacao: "Controle populacional ético de cães e gatos, lar temporário, campanhas de vacinação e orientação contra abandono.",
    address: "R. Brg. Eduardo Gomes, 320 — Paecara, Guarujá - SP",
    contact: "(13) 99608-4510 • contato@patasdolitoral.org.br",
    hours: "Seg a Sex, 08h às 17h"
  },
  {
    id: 7,
    name: "Drogaria São Paulo — Credenciada Farmácia Popular",
    type: "popular",
    badge: "Rede Credenciada — Farmácia Popular",
    color: "#16a34a",
    coords: [-23.9932, -46.2568],
    atuacao: "Dispensação gratuita de medicamentos para hipertensão, diabetes, asma e osteoporose pelo Programa Farmácia Popular.",
    address: "Av. Puglisi, 430 — Pitangueiras, Guarujá - SP",
    contact: "(13) 3386-2100 • Disque Saúde 136",
    hours: "Todos os dias, 07h às 23h"
  },
  {
    id: 8,
    name: "Farma Conde — Credenciada Farmácia Popular",
    type: "popular",
    badge: "Rede Credenciada — Farmácia Popular",
    color: "#16a34a",
    coords: [-23.9401, -46.2882],
    atuacao: "Atendimento credenciado ao Ministério da Saúde para retirada gratuita com CPF e receita médica.",
    address: "Av. Thiago Ferreira, 685 — Vicente de Carvalho, Guarujá - SP",
    contact: "(13) 3342-1980 • Disque Saúde 136",
    hours: "Seg a Sáb, 08h às 21h"
  }
];

let leafletMapInstance = null;
let leafletMarkersGroup = null;

function initMobileLeaflet() {
  if (leafletMapInstance || typeof L === "undefined") return;
  const mapContainer = document.getElementById("mobile-map");
  if (!mapContainer) return;

  leafletMapInstance = L.map("mobile-map").setView([-23.9750, -46.2550], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(leafletMapInstance);

  leafletMarkersGroup = L.layerGroup().addTo(leafletMapInstance);
  renderMapPoints("todos");
}

function renderMapPoints(filterType) {
  const container = document.getElementById("mapLocationsContainer");
  if (!container) return;
  container.innerHTML = "";

  if (leafletMarkersGroup) leafletMarkersGroup.clearLayers();

  const filtered = filterType === "todos"
    ? ongsLocations.filter(loc => loc.type !== "popular")
    : ongsLocations.filter(loc => loc.type === filterType);

  filtered.forEach(loc => {
    if (leafletMarkersGroup && typeof L !== "undefined") {
      const pin = L.divIcon({
        className: "cuidacao-pin",
        html: `<div style="background:${loc.color};width:18px;height:18px;border-radius:50%;border:2.5px solid #ffffff;box-shadow:0 2px 5px rgba(0,0,0,0.4);"></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9]
      });

      L.marker(loc.coords, { icon: pin })
        .bindPopup(`<strong>${loc.name}</strong><br>${loc.atuacao}<br><small>${loc.address}</small>`)
        .addTo(leafletMarkersGroup);
    }

    const card = document.createElement("div");
    card.className = "app-card";
    card.style.cursor = "pointer";
    card.innerHTML = `
      <span class="badge-pill">${loc.badge}</span>
      <h3 style="font-size:calc(0.86rem * var(--font-scale)); font-weight:700; margin-bottom:4px;">${loc.name}</h3>
      <p style="font-size:calc(0.75rem * var(--font-scale)); color:var(--text-secondary); line-height:1.4;">
        ${loc.atuacao}
      </p>
      <div class="ong-meta-list">
        <div class="ong-meta-row">
          ${ICONS.pin}
          <span>${loc.address}</span>
        </div>
        <div class="ong-meta-row">
          ${ICONS.phone}
          <span>${loc.contact}</span>
        </div>
        <div class="ong-meta-row">
          ${ICONS.clock}
          <span>${loc.hours}</span>
        </div>
      </div>
    `;
    card.onclick = () => {
      if (leafletMapInstance) {
        leafletMapInstance.setView(loc.coords, 15, { animate: true });
      }
      showToast(`Mapa centralizado em: ${loc.name}`);
    };
    container.appendChild(card);
  });
}

function filterMapPoints(type, btnEl) {
  document.querySelectorAll("[data-mapfilter]").forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  renderMapPoints(type);
}

/* ==========================================================================
10. NAVEGAÇÃO ENTRE TELAS DO APLICATIVO
   ========================================================================== */
function openAppScreen(screenId) {
  if (!currentUser) {
    const overlay = document.getElementById("loginScreenOverlay");
    if (overlay) overlay.classList.remove("hidden");
    showToast("Realize o login para acessar os recursos da plataforma.");
    return;
  }

  document.querySelectorAll(".app-screen").forEach(s => s.classList.remove("active"));
  const target = document.getElementById("screen-" + screenId);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-tab").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-tab") === screenId);
  });

  const scrollBox = document.getElementById("mainScrollArea");
  if (scrollBox) scrollBox.scrollTo({ top: 0, behavior: "smooth" });

  if (screenId === "mapa") {
    setTimeout(() => {
      initMobileLeaflet();
      if (leafletMapInstance) leafletMapInstance.invalidateSize();
    }, 120);
  }
}

function scrollToHomeNews() {
  openAppScreen("inicio");
  setTimeout(() => {
    const header = document.getElementById("homeNewsHeader");
    if (header) header.scrollIntoView({ behavior: "smooth" });
  }, 60);
}

function filterHomeContent(query) {
  const q = query.toLowerCase().trim();
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.style.display = q.length > 0 ? "inline-flex" : "none";

  document.querySelectorAll("#homeServicesGrid .service-card").forEach(card => {
    const text = (card.innerText + " " + (card.getAttribute("data-keywords") || "")).toLowerCase();
    card.style.display = (!q || text.includes(q)) ? "" : "none";
  });

  renderNewsCards(q);
}

function clearHomeSearch() {
  const input = document.getElementById("homeSearchInput");
  if (input) input.value = "";
  filterHomeContent("");
}

/* ==========================================================================
11. MODO CLARO, MODO ESCURO E MODO AUTOMÁTICO
   ========================================================================== */
const osDarkModeMatcher = window.matchMedia("(prefers-color-scheme: dark)");

function applyAppTheme(mode) {
  const effective = mode === "auto" ? (osDarkModeMatcher.matches ? "dark" : "light") : mode;
  document.documentElement.setAttribute("data-theme", effective);

  ["light", "dark", "auto"].forEach(m => {
    const btn = document.getElementById("themeBtn-" + m);
    if (btn) btn.classList.toggle("active", mode === m);
  });
}

function setAppTheme(mode) {
  setStorage("cuidacao_theme", mode);
  applyAppTheme(mode);
  const label = mode === "light" ? "Modo Claro ativado." : mode === "dark" ? "Modo Escuro ativado." : "Tema Automático ativado.";
  showToast(label);
}

osDarkModeMatcher.addEventListener("change", () => {
  const saved = getStorage("cuidacao_theme", "light");
  if (saved === "auto") applyAppTheme("auto");
});

/* ==========================================================================
12. ACESSIBILIDADE: ESCALA TIPOGRÁFICA
   ========================================================================== */
const fontLevels = ["small", "default", "large"];
const fontNames = ["Compacto", "Padrão", "Ampliado"];

function applyFontScaleByIndex(indexValue) {
  const idx = Math.max(0, Math.min(2, parseInt(indexValue, 10)));
  document.documentElement.setAttribute("data-font", fontLevels[idx]);

  const slider = document.getElementById("fontSlider");
  if (slider) slider.value = String(idx);

  [0, 1, 2].forEach(i => {
    const lbl = document.getElementById("fontLbl-" + i);
    if (lbl) lbl.classList.toggle("active-label", i === idx);
  });

  setStorage("cuidacao_font_idx", String(idx));
}

function stepFontSize(delta) {
  const cur = parseInt(getStorage("cuidacao_font_idx", "1"), 10);
  const next = Math.max(0, Math.min(2, cur + delta));
  applyFontScaleByIndex(next);
  showToast("Escala tipográfica: " + fontNames[next]);
}

/* ==========================================================================
13. NOTIFICAÇÕES E TOAST FEEDBACK
   ========================================================================== */
function openNotificationsSheet() {
  renderNotificationsList();
  document.getElementById("notificationsSheet").classList.add("open");
}

function closeNotificationsSheet() {
  document.getElementById("notificationsSheet").classList.remove("open");
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("appToast");
  const msgSpan = document.getElementById("appToastMsg");
  if (!toast || !msgSpan) return;
  msgSpan.textContent = message;
  toast.style.display = "flex";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

/* ==========================================================================
14. INICIALIZAÇÃO
   ========================================================================== */
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = getStorage("cuidacao_theme", "light");
  applyAppTheme(savedTheme);

  const savedFont = getStorage("cuidacao_font_idx", "1");
  applyFontScaleByIndex(savedFont);

  syncUserInterfaceWithSession();
  updateNotificationBadge();
  renderNotificationsList();
  renderMedicamentosList();
  renderFarmaciaPopularResults();
  renderNewsCards();
  selectDenunciaType("ambiental");
  renderDenunciasHistory();
  renderCommunityFeed();
  renderMapPoints("todos");
  setupCharacterCounters();

  // Garante retorno à tela de Início após inicializar o seletor de denúncias
  if (currentUser) {
    openAppScreen("inicio");
  }
});