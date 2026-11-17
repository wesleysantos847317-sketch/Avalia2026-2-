# Projeto #28: Livro de Receitas Colaborativo com Escalonador de Porções

- **Modalidade:** Projeto Oficial Sorteado (Valendo 100 pontos)
- **Estudante:** WESLEY DOS SANTOS DE SOUZA
- **E-mail:** wesleysouza8473@gmail.com
- **E-mail github:** wesleysouza847317@gmail.com
- **Turma:** 2ESBN
- **RA:** 2025104728
- **Chave Única:** `P26-2B-8983-AF39-E3CF-C0B3`
- **URL_CLOUDFLARE:** `https://p26-2b-8983-af39-e3cf-c0b3.pages.dev`

> O frontend está publicado em produção e o binding D1 `DB` está configurado no Pages. O envio manual pelo painel publicou os arquivos estáticos, mas não ativou as Cloudflare Functions: `/api/*` ainda precisa ser implantado via Wrangler com acesso à conta Cloudflare correta. Configure também `DISCORD_CLIENT_ID` e `DISCORD_CLIENT_SECRET` como secrets de produção antes de habilitar o OAuth.

## Revisão de conformidade e estado atual

| Requisito do trabalho | Estado no código |
| Catálogo com receitas estruturadas, ingredientes em quantidade/unidade e preparo sequencial | Atendido para as receitas de demonstração incluídas no frontend. |
| Busca por nome, ingrediente e tempo de preparo | Atendido no catálogo. |
| Redimensionamento matemático de porções em tempo real | Atendido com campo numérico e controle deslizante. |
| Favoritos pessoais persistidos no Cloudflare D1 | Parcial: existe rota D1, mas a interface mantém cópia local e a identidade enviada pelo navegador ainda não é validada pelo servidor. |
| Usuários autenticados compartilham/publicam receitas | Pendente: as receitas atuais são dados de demonstração no JavaScript; não há formulário nem rota/tabela de publicação de receitas. |
| Discord OAuth2 e Pages Functions em produção | Pendente de configurar `DISCORD_CLIENT_SECRET` e implantar as Functions no projeto Pages. |
| Infraestrutura D1 | O binding está no painel, mas a migração/rotas precisam ser verificadas na conta correta após habilitar Functions. |

O catálogo visual contém 69 receitas (as 9 originais e mais 60 receitas estruturadas em `public/recipes.js`). As imagens específicas de receitas têm crédito e licença vinculados junto à foto; as demais fotografias são carregadas do Unsplash. A busca ignora acentos e combina termos de nome, ingrediente, categoria, dificuldade e duração; os filtros incluem tempo, categoria, dificuldade, favoritos e ordenação. O modo de preparo tem etapas marcáveis e indicador de progresso. As imagens precisam de conexão com a internet; os cartões mantêm um fundo ilustrado se uma imagem não carregar. A interface local não deve ser apresentada como colaboração multiusuário até que a publicação de receitas e a autenticação persistida estejam ligadas ao backend.

---

## Especificação do Projeto

Construa um catálogo gastronômico no qual usuários logados pelo Discord compartilham receitas estruturadas em lista de ingredientes (com quantidade numérica e unidade de medida separadas) e modo de preparo sequencial. O sistema deve permitir busca por nome do prato, tempo de preparo ou ingrediente específico.

No frontend em JavaScript vanilla, implemente um controle numérico de porções: ao alterar o rendimento desejado (ex: de 2 para 5 pessoas), o script recalcula matematicamente todas as quantidades de ingredientes exibidas no DOM em tempo real. Os usuários também podem favoritar receitas no Cloudflare D1 para montar um livro de receitas pessoal de acesso rápido.

---

## Como Publicar esta Subpasta no Cloudflare Pages + D1 + Discord OAuth2

1. No painel da Cloudflare (**Workers & Pages** → **Create** → **Pages** → **Connect to Git**), selecione o seu fork do repositório `Avalia2026-2`.
2. Configure os parâmetros de build apontando para esta subpasta:
   - **Root directory (Diretório raiz):** `P26-2B-8983-AF39-E3CF-C0B3`
   - **Build command:** *(deixe em branco — HTML/CSS/JS puro)*
   - **Build output directory:** `public`
3. Crie o banco de dados D1 e aplique a migração inicial (no terminal do laboratório usando Scoop):
   ```powershell
   cd P26-2B-8983-AF39-E3CF-C0B3
   npx.cmd wrangler d1 create db-p26-2b-8983-af39-e3cf-c0b3
   # Copie o database_id gerado para o arquivo wrangler.jsonc e execute:
   npx.cmd wrangler d1 migrations apply DB --remote
   ```
4. **Vincule o Banco D1 ao seu Cloudflare Pages (Obrigatório para ativar env.DB):**
   - No painel da Cloudflare: acesse seu projeto Pages → **Settings** → **Functions** → **D1 database bindings**.
   - Clique em **Add binding**:
     - **Variable name:** `DB`
     - **D1 database:** selecione o banco que você criou (`db-p26-2b-8983-af39-e3cf-c0b3`).
5. **Configuração do Discord OAuth2 (Obrigatório para autenticação real):**
   - Aplicativo criado: **Livro de Receitas P26-2B-8983-AF39-E3CF-C0B3** (Client ID: `1572255558730252339`).
   - Na aba **OAuth2**:
     - Em **Redirects**, mantenha a URL exata do deploy:
       `https://p26-2b-8983-af39-e3cf-c0b3.pages.dev/api/auth/discord/callback`
   - O `DISCORD_CLIENT_ID` já está declarado como variável pública em `wrangler.jsonc`.
   - **Pendente:** configure `DISCORD_CLIENT_SECRET` como Secret (Production) no painel Cloudflare Pages; nunca o salve no repositório ou compartilhe em mensagens.
   - **Pendente:** implantar as Cloudflare Pages Functions com Wrangler. O deploy manual de assets não publica as rotas OAuth nem `/api/*`.
6. Atualize o campo **URL_CLOUDFLARE** no topo deste `README.md` com o endereço público gerado pela Cloudflare.
7. Na raiz do repositório, execute `node validar-local.mjs P26-2B-8983-AF39-E3CF-C0B3` para validar todos os critérios antes de fazer o commit e abrir o Pull Request.
