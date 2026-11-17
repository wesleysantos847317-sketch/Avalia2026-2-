const CHAVE_PROJETO = "P26-2B-8983-AF39-E3CF-C0B3";
const recipeSeed = [
  {
    id: "salada-mediterranea",
    name: "Salada Mediterrânea",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=960&q=85",
    time: 15,
    category: "Vegetariana",
    difficulty: "Fácil",
    servings: 2,
    tags: ["leve", "veg", "rápida"],
    ingredients: [
      { qty: 150, unit: "g", item: "tomate cereja" },
      { qty: 1, unit: "unidade", item: "pepino" },
      { qty: 40, unit: "g", item: "azeitona preta" },
      { qty: 1, unit: "colher", item: "oregano" },
      { qty: 2, unit: "colheres", item: "azeite" },
      { qty: 1, unit: "unidade", item: "limão" }
    ],
    steps: [
      "Lave e corte os tomates e o pepino em pedaços uniformes.",
      "Misture em uma tigela com as azeitonas e tempere com o azeite, o limão e o oregano.",
      "Sirva imediatamente em duas porções ou conserve por até 1 dia na geladeira."
    ]
  },
  {
    id: "risoto-abobora",
    name: "Risoto de Abóbora",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=960&q=85",
    time: 40,
    category: "Vegetariana",
    difficulty: "Médio",
    servings: 4,
    tags: ["cremoso", "inverno", "principal"],
    ingredients: [
      { qty: 250, unit: "g", item: "arroz arbóreo" },
      { qty: 400, unit: "g", item: "abóbora em cubos" },
      { qty: 1, unit: "litro", item: "caldo de legumes" },
      { qty: 1, unit: "unidade", item: "cebola picada" },
      { qty: 2, unit: "colheres", item: "manteiga" },
      { qty: 80, unit: "g", item: "parmesão ralado" }
    ],
    steps: [
      "Refogue a cebola em manteiga até ficar translúcida.",
      "Adicione o arroz e mexa até absorver o sabor do refogado.",
      "Inclua a abóbora aos poucos com o caldo, mexendo até o arroz ficar cremoso.",
      "Finalize com parmesão e sirva em porções quentes."
    ]
  },
  {
    id: "tacos-frango",
    name: "Tacos de Frango com Coentro",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=960&q=85",
    time: 30,
    category: "Almoço e jantar",
    difficulty: "Fácil",
    servings: 3,
    tags: ["saboroso", "rápido", "familia"],
    ingredients: [
      { qty: 500, unit: "g", item: "frango desfiado" },
      { qty: 8, unit: "unidades", item: "tortilhas" },
      { qty: 1, unit: "xícara", item: "alface picada" },
      { qty: 1, unit: "xícara", item: "tomate picado" },
      { qty: 1, unit: "colher", item: "cominho" },
      { qty: 2, unit: "colheres", item: "salsa" }
    ],
    steps: [
      "Tempere o frango com cominho e cozinhe em fogo médio até ficar macio.",
      "Aqueça as tortilhas e recheie com o frango e os legumes frescos.",
      "Finalize com salsa e sirva imediatamente em porções quentes."
    ]
  },
  {
    id: "pasta-tomate-manjericao",
    name: "Massa ao Tomate e Manjericão",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=960&q=85",
    time: 25,
    category: "Vegetariana",
    difficulty: "Fácil",
    servings: 4,
    tags: ["massa", "vegetariana", "rápida"],
    ingredients: [
      { qty: 350, unit: "g", item: "massa seca" },
      { qty: 400, unit: "g", item: "tomate pelado" },
      { qty: 2, unit: "dentes", item: "alho" },
      { qty: 2, unit: "colheres", item: "azeite" },
      { qty: 1, unit: "punhado", item: "manjericão fresco" },
      { qty: 40, unit: "g", item: "parmesão ralado" }
    ],
    steps: [
      "Cozinhe a massa em água fervente com sal até ficar al dente.",
      "Doure o alho no azeite, junte o tomate e cozinhe por 10 minutos.",
      "Misture a massa ao molho, finalize com manjericão e parmesão e sirva."
    ]
  },
  {
    id: "sopa-lentilha",
    name: "Sopa de Lentilha",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=960&q=85",
    time: 45,
    category: "Sopas",
    difficulty: "Fácil",
    servings: 4,
    tags: ["sopa", "vegana", "conforto"],
    ingredients: [
      { qty: 250, unit: "g", item: "lentilha seca" },
      { qty: 1, unit: "unidade", item: "cenoura em cubos" },
      { qty: 1, unit: "unidade", item: "cebola picada" },
      { qty: 2, unit: "dentes", item: "alho" },
      { qty: 1, unit: "litro", item: "caldo de legumes" },
      { qty: 1, unit: "colher", item: "azeite" }
    ],
    steps: [
      "Refogue a cebola, o alho e a cenoura no azeite por alguns minutos.",
      "Acrescente a lentilha e o caldo; cozinhe em fogo baixo até ficar macia.",
      "Acerte o sal e sirva quente, com ervas frescas se desejar."
    ]
  },
  {
    id: "panqueca-banana",
    name: "Panqueca de Banana e Aveia",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=960&q=85",
    time: 15,
    category: "Café da manhã",
    difficulty: "Fácil",
    servings: 2,
    tags: ["café da manhã", "doce", "rápida"],
    ingredients: [
      { qty: 2, unit: "unidades", item: "bananas maduras" },
      { qty: 2, unit: "unidades", item: "ovos" },
      { qty: 4, unit: "colheres", item: "aveia em flocos" },
      { qty: 1, unit: "colher", item: "canela em pó" },
      { qty: 1, unit: "colher", item: "óleo para untar" }
    ],
    steps: [
      "Amasse as bananas e misture com os ovos, a aveia e a canela.",
      "Aqueça uma frigideira untada e despeje pequenas porções da massa.",
      "Doure dos dois lados e sirva com frutas ou mel."
    ]
  },
  {
    id: "bruschetta-tomate",
    name: "Bruschetta de Tomate",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=960&q=85",
    time: 20,
    category: "Lanches e entradas",
    difficulty: "Fácil",
    servings: 4,
    tags: ["entrada", "vegetariana", "rápida"],
    ingredients: [
      { qty: 1, unit: "unidade", item: "pão italiano" },
      { qty: 3, unit: "unidades", item: "tomates maduros" },
      { qty: 1, unit: "dente", item: "alho" },
      { qty: 2, unit: "colheres", item: "azeite" },
      { qty: 1, unit: "punhado", item: "manjericão fresco" }
    ],
    steps: [
      "Corte o pão em fatias e doure no forno ou em uma frigideira.",
      "Pique os tomates e misture com azeite, manjericão e uma pitada de sal.",
      "Esfregue o alho no pão ainda quente, cubra com o tomate e sirva."
    ]
  },
  {
    id: "bowl-grao-de-bico",
    name: "Bowl de Grão-de-bico",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=960&q=85",
    time: 30,
    category: "Vegetariana",
    difficulty: "Fácil",
    servings: 2,
    tags: ["vegano", "leve", "almoço"],
    ingredients: [
      { qty: 300, unit: "g", item: "grão-de-bico cozido" },
      { qty: 1, unit: "unidade", item: "pepino" },
      { qty: 150, unit: "g", item: "tomate-cereja" },
      { qty: 1, unit: "unidade", item: "abacate" },
      { qty: 2, unit: "colheres", item: "suco de limão" },
      { qty: 2, unit: "colheres", item: "azeite" }
    ],
    steps: [
      "Escorra o grão-de-bico e tempere com limão, azeite, sal e pimenta.",
      "Corte o pepino, os tomates e o abacate em pedaços.",
      "Distribua tudo em tigelas e sirva em seguida."
    ]
  },
  {
    id: "pizza-legumes",
    name: "Pizza de Legumes",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=960&q=85",
    time: 40,
    category: "Vegetariana",
    difficulty: "Médio",
    servings: 4,
    tags: ["forno", "vegetariana", "jantar"],
    ingredients: [
      { qty: 1, unit: "unidade", item: "massa de pizza" },
      { qty: 150, unit: "g", item: "molho de tomate" },
      { qty: 200, unit: "g", item: "muçarela" },
      { qty: 1, unit: "unidade", item: "abobrinha fatiada" },
      { qty: 1, unit: "unidade", item: "pimentão" },
      { qty: 1, unit: "colher", item: "azeite" }
    ],
    steps: [
      "Aqueça o forno conforme as instruções da massa.",
      "Espalhe o molho sobre a massa e distribua a muçarela e os legumes.",
      "Regue com azeite e asse até a borda dourar e o queijo derreter."
    ]
  }
].concat(window.additionalRecipes || []);

const state = {
  recipes: recipeSeed,
  selectedId: recipeSeed[0].id,
  searchTerm: "",
  maxMinutes: "all",
  category: "all",
  difficulty: "all",
  sortBy: "relevance",
  onlyFavorites: false,
  user: null,
  favorites: loadFavorites(),
  completedSteps: {}
};

function getSelectedRecipe() {
  return state.recipes.find((recipe) => recipe.id === state.selectedId) || state.recipes[0];
}

function loadFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem("favoriteRecipes") || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function persistFavorites() {
  localStorage.setItem("favoriteRecipes", JSON.stringify(state.favorites));
}

async function syncFavoriteServer(recipeId, shouldAdd) {
  const userId = state.user?.userId || "manual-user";
  if (!recipeId || !userId) return;

  try {
    await fetch("/api/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        recipeId,
        recipeName: state.recipes.find((recipe) => recipe.id === recipeId)?.name || recipeId,
        action: shouldAdd ? "add" : "remove"
      })
    });
  } catch {
    // fallback local-only em ambientes sem deploy Cloudflare
  }
}

function formatQuantity(value) {
  if (!Number.isFinite(value)) return value;
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

function renderDiscordHeader() {
  const el = document.getElementById("discordUserText");
  if (!el) return;
  if (state.user) {
    const safeName = state.user.username || "Usuário do Discord";
    const safeId = state.user.userId || "local-user";
    el.textContent = `Discord: ${safeName} (${safeId})`;
    return;
  }
  el.textContent = "Entrar com Discord OAuth2";
}

function normalizeText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function getVisibleRecipes() {
  const terms = normalizeText(state.searchTerm).split(/\s+/).filter(Boolean);
  const filtered = state.recipes.filter((recipe) => {
    const searchable = normalizeText([
      recipe.name,
      recipe.category,
      recipe.difficulty,
      ...recipe.tags,
      ...recipe.ingredients.map((ingredient) => ingredient.item),
      `${recipe.time} min minutos`,
      `${recipe.servings} porcoes`
    ].join(" "));
    const matchesTerms = terms.every((term) => searchable.includes(term));
    const matchesTime = state.maxMinutes === "all" || recipe.time <= Number(state.maxMinutes);
    const matchesCategory = state.category === "all" || recipe.category === state.category;
    const matchesDifficulty = state.difficulty === "all" || recipe.difficulty === state.difficulty;
    const matchesFavorites = !state.onlyFavorites || state.favorites.includes(recipe.id);
    return matchesTerms && matchesTime && matchesCategory && matchesDifficulty && matchesFavorites;
  });

  if (state.sortBy === "time") filtered.sort((a, b) => a.time - b.time || a.name.localeCompare(b.name, "pt-BR"));
  if (state.sortBy === "name") filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  if (state.sortBy === "popular") {
    filtered.sort((a, b) => Number(state.favorites.includes(b.id)) - Number(state.favorites.includes(a.id)) || a.name.localeCompare(b.name, "pt-BR"));
  }
  if (state.sortBy === "relevance" && terms.length) {
    const score = (recipe) => {
      const name = normalizeText(recipe.name);
      const category = normalizeText(recipe.category);
      const ingredients = normalizeText(recipe.ingredients.map((ingredient) => ingredient.item).join(" "));
      const tags = normalizeText(recipe.tags.join(" "));
      return terms.reduce((total, term) =>
        total + (name.includes(term) ? 8 : 0) +
          (category.includes(term) ? 4 : 0) +
          (ingredients.includes(term) ? 3 : 0) +
          (tags.includes(term) ? 2 : 0), 0);
    };
    filtered.sort((a, b) => score(b) - score(a) || a.name.localeCompare(b.name, "pt-BR"));
  }
  return filtered;
}

function renderMetrics() {
  const recipeCount = document.getElementById("metricRecipes");
  const favoriteCount = document.getElementById("metricFavorites");
  if (recipeCount) recipeCount.textContent = String(state.recipes.length);
  if (favoriteCount) favoriteCount.textContent = String(state.favorites.length);
}

function renderRecipeGrid() {
  const container = document.getElementById("recipeGrid");
  if (!container) return;

  const visible = getVisibleRecipes();
  const count = document.getElementById("visibleRecipeCount");
  if (count) count.textContent = `${visible.length} ${visible.length === 1 ? "receita" : "receitas"}`;
  if (visible.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhuma receita encontrada para os filtros atuais.</div>';
    return;
  }

  container.innerHTML = visible.map((recipe) => {
    const isActive = recipe.id === state.selectedId;
    const isFavorite = state.favorites.includes(recipe.id);
    return `
      <article class="recipe-card ${isActive ? "active" : ""}" data-id="${recipe.id}">
        <button class="recipe-select-button" data-id="${recipe.id}" type="button" aria-pressed="${isActive}">
          <div class="recipe-image">
            <img src="${recipe.image}" alt="" loading="lazy">
            <span class="image-time">${recipe.time} min</span>
          </div>
          <div class="recipe-card-top">
            <div>
              <h3>${recipe.name}</h3>
              <div class="meta">${recipe.time} min · ${recipe.difficulty}</div>
            </div>
          </div>
          <div class="meta">Serve ${recipe.servings} pessoas</div>
          <div class="tag-list">
            ${recipe.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </button>
        ${recipe.imageCreditUrl ? `<a class="photo-credit" href="${recipe.imageCreditUrl}" target="_blank" rel="noopener noreferrer">Foto: ${recipe.imageCredit}</a>` : ""}
        <button class="favorite-button" data-favorite-id="${recipe.id}" type="button" aria-label="Favoritar ${recipe.name}">
          ${isFavorite ? "★" : "☆"}
        </button>
      </article>
    `;
  }).join("");

  container.querySelectorAll(".recipe-select-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.id;
      renderRecipeGrid();
      renderRecipeDetail();
    });
  });

  container.querySelectorAll(".recipe-image img").forEach((image) => {
    image.addEventListener("error", () => image.parentElement.classList.add("image-fallback"), { once: true });
  });

  container.querySelectorAll(".favorite-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(button.dataset.favoriteId);
    });
  });
}

function renderRecipeDetail() {
  const detail = document.getElementById("recipeDetail");
  if (!detail) return;
  const recipe = getSelectedRecipe();
  if (!recipe) {
    detail.innerHTML = '<p>Selecione uma receita.</p>';
    return;
  }

  const currentServings = Number(document.getElementById("portionInput")?.value || recipe.servings);
  const scale = currentServings / recipe.servings;
  const completed = state.completedSteps[recipe.id] || [];

  detail.innerHTML = `
    <div class="detail-header">
      <div>
        <span class="detail-eyebrow">Receita selecionada</span>
        <h2>${recipe.name}</h2>
      </div>
      <button class="favorite-button" data-favorite-id="${recipe.id}" type="button" aria-label="Favoritar ${recipe.name}">
        ${state.favorites.includes(recipe.id) ? "★" : "☆"}
      </button>
    </div>
    <div class="detail-image">
      <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
    </div>
    ${recipe.imageCreditUrl ? `<a class="photo-credit detail-photo-credit" href="${recipe.imageCreditUrl}" target="_blank" rel="noopener noreferrer">Foto: ${recipe.imageCredit}</a>` : ""}
    <div class="detail-meta">
      <span class="meta-pill">${recipe.time} min</span>
      <span class="meta-pill">${recipe.difficulty}</span>
      <span class="meta-pill">${recipe.tags.join(" · ")}</span>
    </div>

    <div class="portion-box">
      <label for="portionInput">Porções</label>
      <input id="portionInput" type="number" min="1" max="30" step="1" value="${currentServings}" aria-label="Número de porções desejadas">
      <input id="portionRange" type="range" min="1" max="30" step="1" value="${currentServings}" aria-label="Ajustar porções com controle deslizante">
      <strong id="portionCount">${currentServings}</strong>
    </div>

    <h3>Ingredientes</h3>
    <ul class="ingredient-list">
      ${recipe.ingredients.map((item) => `
        <li>
          <span>${item.item}</span>
          <span class="qty" data-base-qty="${item.qty}" data-unit="${item.unit}">${formatQuantity(item.qty * scale)} ${item.unit}</span>
        </li>
      `).join("")}
    </ul>

    <section class="preparation-section" aria-labelledby="preparationTitle">
      <div class="preparation-heading">
        <div>
          <span class="detail-eyebrow">Passo a passo</span>
          <h3 id="preparationTitle">Modo de preparo</h3>
        </div>
        <button class="reset-steps" type="button" ${completed.length ? "" : "disabled"}>Reiniciar</button>
      </div>
      <div class="step-progress" aria-live="polite">
        <div class="step-progress-label">
          <span class="step-progress-count">${completed.length} de ${recipe.steps.length} etapas</span>
          <span class="step-progress-percent">${Math.round((completed.length / recipe.steps.length) * 100)}%</span>
        </div>
        <progress class="step-progress-bar" max="${recipe.steps.length}" value="${completed.length}" aria-label="Progresso do modo de preparo"></progress>
      </div>
      <ol class="step-list">
        ${recipe.steps.map((step, index) => `
          <li class="step-item ${completed.includes(index) ? "is-complete" : ""}">
            <label>
              <input class="step-checkbox" type="checkbox" data-step-index="${index}" ${completed.includes(index) ? "checked" : ""}>
              <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
              <span class="step-copy">${step}</span>
            </label>
          </li>
        `).join("")}
      </ol>
    </section>
  `;

  const input = document.getElementById("portionInput");
  const range = document.getElementById("portionRange");
  const updateServings = (event) => {
    const desired = Math.min(30, Math.max(1, Number(event.target.value) || 1));
    const scale = desired / recipe.servings;
    if (input) input.value = String(desired);
    if (range) range.value = String(desired);
    document.getElementById("portionCount").textContent = String(desired);
    detail.querySelectorAll(".ingredient-list .qty").forEach((quantity) => {
      quantity.textContent = `${formatQuantity(Number(quantity.dataset.baseQty) * scale)} ${quantity.dataset.unit}`;
    });
  };
  input?.addEventListener("input", updateServings);
  range?.addEventListener("input", updateServings);

  const updateStepProgress = () => {
    const checks = [...detail.querySelectorAll(".step-checkbox")];
    const done = checks.filter((checkbox) => checkbox.checked).map((checkbox) => Number(checkbox.dataset.stepIndex));
    state.completedSteps[recipe.id] = done;
    checks.forEach((checkbox) => checkbox.closest(".step-item").classList.toggle("is-complete", checkbox.checked));
    detail.querySelector(".step-progress-bar").value = done.length;
    detail.querySelector(".step-progress-count").textContent = `${done.length} de ${recipe.steps.length} etapas`;
    detail.querySelector(".step-progress-percent").textContent = `${Math.round((done.length / recipe.steps.length) * 100)}%`;
    detail.querySelector(".reset-steps").disabled = done.length === 0;
  };
  detail.querySelectorAll(".step-checkbox").forEach((checkbox) => checkbox.addEventListener("change", updateStepProgress));
  detail.querySelector(".reset-steps")?.addEventListener("click", () => {
    state.completedSteps[recipe.id] = [];
    renderRecipeDetail();
  });

  detail.querySelector(".favorite-button")?.addEventListener("click", () => {
    toggleFavorite(recipe.id);
    renderRecipeGrid();
    renderRecipeDetail();
  });
  detail.querySelector(".detail-image img")?.addEventListener("error", (event) => {
    event.currentTarget.parentElement.classList.add("image-fallback");
  }, { once: true });
}

function renderFavorites() {
  const container = document.getElementById("favoritesList");
  if (!container) return;

  if (state.favorites.length === 0) {
    container.innerHTML = '<div class="empty-state">Você ainda não favoritou nenhuma receita. Escolha um prato e salve na aba do livro pessoal.</div>';
    return;
  }

  const favoriteRecipes = state.recipes.filter((recipe) => state.favorites.includes(recipe.id));
  container.innerHTML = favoriteRecipes.map((recipe) => `
    <button class="favorite-item" type="button" data-favorite-name="${recipe.id}">${recipe.name}</button>
  `).join("");

  container.querySelectorAll(".favorite-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.favoriteName;
      renderRecipeGrid();
      renderRecipeDetail();
    });
  });
}

function toggleFavorite(id) {
  const shouldAdd = !state.favorites.includes(id);
  if (shouldAdd) {
    state.favorites.push(id);
  } else {
    state.favorites = state.favorites.filter((favoriteId) => favoriteId !== id);
  }
  persistFavorites();
  syncFavoriteServer(id, shouldAdd);
  renderMetrics();
  renderRecipeGrid();
  renderRecipeDetail();
  renderFavorites();
}

async function carregarStatus() {
  const listEl = document.getElementById("recordsList");
  if (!listEl) return;

  try {
    const res = await fetch("/api/status");
    const data = await res.json();
    listEl.innerHTML = "";

    if (data.sessionUser) {
      state.user = {
        userId: data.sessionUser.userId,
        username: data.sessionUser.username,
        avatar: data.sessionUser.avatar || "https://cdn.discordapp.com/embed/avatars/0.png"
      };
      renderDiscordHeader();
      renderMetrics();
    }

    const items = Array.isArray(data.ultimosRegistros) ? data.ultimosRegistros : [];
    if (items.length === 0) {
      const li = document.createElement("li");
      li.textContent = `API online (${data.d1Connected ? "D1 conectado ✅" : "modo diagnóstico local ✅"}). Nenhum registro gravado ainda.`;
      listEl.appendChild(li);
      return;
    }

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `[${item.created_at || "agora"}] ${item.username} (${item.user_id}): ${item.conteudo}`;
      listEl.appendChild(li);
    });
  } catch {
    listEl.innerHTML = "<li>Modo estático local. Publique no Cloudflare Pages para ativar /api/status.</li>";
  }
}

document.getElementById("searchInput")?.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  renderRecipeGrid();
});

document.getElementById("timeFilter")?.addEventListener("change", (event) => {
  state.maxMinutes = event.target.value;
  renderRecipeGrid();
});

document.getElementById("categoryFilter")?.addEventListener("change", (event) => {
  state.category = event.target.value;
  renderRecipeGrid();
});

document.getElementById("difficultyFilter")?.addEventListener("change", (event) => {
  state.difficulty = event.target.value;
  renderRecipeGrid();
});

document.getElementById("sortFilter")?.addEventListener("change", (event) => {
  state.sortBy = event.target.value;
  renderRecipeGrid();
});

document.getElementById("favoritesOnlyFilter")?.addEventListener("change", (event) => {
  state.onlyFavorites = event.target.checked;
  renderRecipeGrid();
});

document.getElementById("resetFiltersBtn")?.addEventListener("click", () => {
  state.searchTerm = "";
  state.maxMinutes = "all";
  state.category = "all";
  state.difficulty = "all";
  state.sortBy = "relevance";
  state.onlyFavorites = false;
  const searchInput = document.getElementById("searchInput");
  const filters = ["timeFilter", "categoryFilter", "difficultyFilter", "sortFilter"];
  if (searchInput) searchInput.value = "";
  filters.forEach((id) => {
    const filter = document.getElementById(id);
    if (filter) filter.value = id === "sortFilter" ? "relevance" : "all";
  });
  const favoritesOnly = document.getElementById("favoritesOnlyFilter");
  if (favoritesOnly) favoritesOnly.checked = false;
  renderRecipeGrid();
});

document.getElementById("sendBtn")?.addEventListener("click", async () => {
  const input = document.getElementById("recordInput");
  const statusEl = document.getElementById("statusMessage");
  const conteudo = (input.value || "").trim();
  if (!conteudo) return;

  statusEl.textContent = "Enviando para nuvem...";
  try {
    const res = await fetch("/api/status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: state.user?.userId || "manual-user",
        username: state.user?.username || "Chef Local",
        conteudo
      })
    });

    if (res.ok) {
      input.value = "";
      statusEl.textContent = "✓ Registro persistido com sucesso.";
      await carregarStatus();
    } else {
      statusEl.textContent = "Erro ao gravar no D1.";
    }
  } catch {
    statusEl.textContent = "API disponível após o deploy no Cloudflare Pages.";
  }
});

renderDiscordHeader();
renderMetrics();
renderRecipeGrid();
renderRecipeDetail();
renderFavorites();
carregarStatus();
