**Cenários Automatizados**

**1. Login**

* Acessar o site [**saucedemo.com**](https://www.saucedemo.com/)
* Fazer login com as credenciais padrão:

  ```
  Usuário: standard_user
  Senha: secret_sauce
  ```

---

**2. Navegação e Pesquisa de Produtos**

* Acessar a página de produtos
* Realizar uma pesquisa por um produto específico *(ou validar a lista de produtos disponíveis)*

---

**3. Validação das Informações do Produto**

* Selecionar um produto
* Verificar as seguintes informações:

  *  **Título do produto**
  *  **Preço do produto**
  *  **Descrição do produto**

---

**4. Adicionar Produto ao Carrinho e Ir para o Checkout**

* Adicionar o produto ao carrinho
*  Acessar o carrinho de compras
* Clicar no botão **Checkout** para iniciar o processo de pagamento

---

**5. Finalização do Pedido**

Preencher os dados do comprador:

* Nome
* Sobrenome
* Código Postal

✅ Finalizar o pedido
✅ Validar a **mensagem de sucesso da compra**

---

**Estrutura Completa do Projeto (Arquitetura Page Object Model – POM)**

```
📂 playwright-auvo-poc
 ┣ 📂 tests
 ┃ ┗ 📜 purchaseFlow.spec.js
 ┣ 📂 pages
 ┃ ┣ 📜 LoginPage.js
 ┃ ┣ 📜 ProductsPage.js
 ┃ ┣ 📜 CartPage.js
 ┃ ┣ 📜 CheckoutPage.js
 ┃ ┗ 📜 ConfirmationPage.js
 ┣ 📜 playwright.config.ts
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

**Pré-requisitos para Execução do Projeto**

Antes de executar o projeto, certifique-se de ter instalado as seguintes ferramentas no ambiente:

| Ferramenta                     | Versão Requerida         |
| ------------------------------ | ------------------------ |
| [Node.js](https://nodejs.org/) | Versão 18 ou superior    |
| [npm](https://www.npmjs.com/)  | Última versão disponível |
| [Git](https://git-scm.com/)    | Última versão disponível |

---

**Passo a Passo para Instalação do Projeto**

**1️⃣ Clone o repositório:**

```bash
git clone
```

**2️⃣ Acesse a pasta do projeto:**

```bash
cd desafio-auvo-playwright
```

**3️⃣ Instale as dependências do projeto:**

```bash
npm install
```

**4️⃣ Instale os navegadores necessários do Playwright:**

```bash
npx playwright install
```

---
 cd ./parodify-playwright
**Comandos para Execução dos Testes Automatizados**

| Comando                          | Descrição                                                  |
| -------------------------------- | ---------------------------------------------------------- |
| `./parodify-playwright`          | Acessar a pasta onde está os arquivos para execução        |
| `npx playwright test`            | Executa todos os testes automatizados                      |
| `npx playwright test --ui`       | Executa os testes com interface interativa                 |
| `npx playwright test --headless` | Executa os testes em modo headless (sem interface gráfica) |
| `npx playwright show-report`     | Gera e abre o relatório de execução dos testes             |

---


**Tecnologias e Ferramentas Utilizadas**

| Tecnologia                            | Descrição                                            |
| ------------------------------------- | ---------------------------------------------------- |
| [Playwright](https://playwright.dev/) | Framework para automação de testes web               |
| JavaScript                            | Linguagem de programação utilizada                   |
| Node.js                               | Ambiente de execução do JavaScript                   |
| Page Object Model (POM)               | Padrão de arquitetura utilizado no projeto           |
| GitHub                                | Plataforma para versionamento e publicação do código |

---

**Fontes e Referências Utilizadas**

* [Documentação Oficial do Playwright](https://playwright.dev/docs/intro)
* [Site SauceDemo](https://www.saucedemo.com/)
* [Padrão Page Object Model (POM)](https://martinfowler.com/bliki/PageObject.html)

---

**Autora do Projeto**

**Andreza Dias**
💼 Analista de Testes Automatizados
📧 andreza.dias18@hotmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/andreza-dias-3186a3146/)

---

