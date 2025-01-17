# Amigo Secreto 🎉

Este projeto é uma aplicação simples de sorteio de **Amigo Secreto**, criada para fortalecer habilidades em lógica de programação e manipulação do DOM com JavaScript.

## 🚀 Acesse o Projeto

Confira o funcionamento do projeto clicando no link abaixo:

👉 [Amigo Secreto](https://amigo-secreto-zeta-ten.vercel.app/)

---

## 📋 Funcionalidades

1. **Adicionar Amigos:**
   - O usuário pode adicionar nomes à lista de amigos.
   - O campo é limpo automaticamente após a adição.
   - Caso o campo esteja vazio, uma mensagem de alerta será exibida.

2. **Sortear Amigo:**
   - Realiza o sorteio de um amigo aleatório da lista.
   - Exige um mínimo de 3 amigos na lista antes de permitir o sorteio.
   - Exibe o nome do amigo sorteado na tela.

---

## 🛠️ Tecnologias Utilizadas

- **HTML:** Estrutura da página.
- **CSS:** Estilização do layout.
- **JavaScript:** Lógica de programação e manipulação do DOM.

---

## 📂 Estrutura do Código

### 1. Adicionar Amigos

O método `adicionarAmigo`:
- Captura o valor do campo de entrada.
- Valida se o campo não está vazio.
- Adiciona o nome à lista de amigos e atualiza o DOM.
- Limpa o campo de entrada após a adição.

```javascript
function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let amigo = amigoInput.value;

    if (amigo == '') {
        alert('Digite um nome');
        return;
    }

    amigos.push(amigo);
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
    amigoInput.value = '';
}
```

### 2. Sortear Amigo

O método `sortearAmigo`:
- Verifica se há pelo menos 3 amigos na lista.
- Realiza o sorteio de um amigo aleatório.
- Exibe o resultado na tela.

```javascript
function sortearAmigo() {
    if (amigos.length < 3) {
        alert('Adicione mais amigos, minimo 3!');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<h3>${amigoSorteado}</h3>`;
}
```

---

## 🎨 Estilização

O projeto pode incluir um design simples e funcional para oferecer uma experiência agradável ao usuário.

### Exemplos de melhorias no estilo:
- Realçar o nome sorteado com cores vibrantes.
- Estilizar a lista de amigos para ficar mais organizada.

---

## 🧪 Teste o Projeto Localmente

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/amigo-secreto.git
```

2. Navegue até a pasta do projeto:

```bash
cd amigo-secreto
```

3. Abra o arquivo `index.html` em seu navegador.

---


### 📧 Contato

Se tiver dúvidas ou sugestões, entre em contato:
- **Email:** ricschonfelder@gmail.com
- **GitHub:** [seu-usuario](https://github.com/RicSchonfelder)

---

Feito por **RicSchonfelder**

