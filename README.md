<!-- Improved compatibility of Voltar ao topo link: See: https://github.com/guilhermediniz1/octopus/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/guilhermediniz1/octopus">
    <img src="src/assets/images/logo-octo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Octopus Financial</h3>

  <p align="center">
    Tenha o controle sobre a entrada e saída do seu dinheiro.
    <br />
    <br />
    <a href="https://octopus-financial.netlify.app/">Versão para uso</a>
    ·
    <a href="https://github.com/guilhermediniz1/octopus/issues">Reportar Erro</a>
    ·
    <a href="https://github.com/guilhermediniz1/octopus/issues">Sugerir Melhoria</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Conteúdos</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#tecnologias-utilizadas">Tecnologias Utilziadas</a></li>
      </ul>
    </li>
    <li><a href="#preparando-o-ambiente">Preparando o ambiente</a></li>
    <li><a href="#novas-funcionalidades">Novas Funcionalidades</a></li>
    <li><a href="#contribuindo">Contribuindo</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o Projeto

[![Tela de Autenticação][product-screenshot]](https://octopus-financial.netlify.app/)

Este projeto foi desenvolvido com o intuito de auxiliar os usuários a administrarem a entrada e saída de dinheiro no dia a dia. No momento, ele contém algumas funcionalidades básicas e trivais, porém, sugestões de melhoria sempre serão bem vindas.

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>



### Tecnologias utilizadas

As tecnologias utilizadas para o desenvolvimento deste projeto foram as seguintes: 

*  [Vue.js][Vue-url]
*  [Firebase][Firebase-url]
*  [Chart.js][Chart-url]
*  [Netlify][Netlify-url]


<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

### Preparando o ambiente

Aqui vão os primeiros passos para executar este projeto localmente.

1. Clone o repositório
   ```sh
   git clone https://github.com/guilhermediniz1/octopus.git
   ```
2. Instale as dependências
   ```sh
   npm install
   # ou
   yarn install
   ```
3. Configure seu arquivo <code>.env</code> locamente com as seguintes variáveis (as informações necessárias são geradas após criar uma aplicação no [Firebase][Firebase-console-url])
    ```
    VITE_FIREBASE_API_KEY=
    VITE_FIREBASE_AUTH_DOMAIN=
    VITE_FIREBASE_PROJECT_ID=
    VITE_FIREBASE_STORAGE_BUCKET=
    VITE_FIREBASE_MESSAGING_SENDER_ID=
    VITE_FIREBASE_APP_ID=
    VITE_FIREBASE_MEASUREMENT_ID=
    ```

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>


<!-- ROADMAP -->
## Novas funcionalidades
Estas são as funcionalidades que serão implementadas em breve: 

- [ ] Design exclusivo para dispositivos maiores
- [ ] Geração de relatórios por período temporal
- [ ] Suporte para outros Idiomas
    - [ ] Inglês

Veja as [issues em aberto](https://github.com/guilhermediniz1/octopus/issues) para uma lista mais completa de funcionalidades a serem implementadas (e problemas a serem resolvidos).

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>



<!-- CONTRIBUTING -->
## Contribuindo

As contribuições são um dos melhores meios de se evoluir um projeto, e aprender com o conhecimento de outros.**Todo auxílio sempre é bem-vindo**.

Se você possui uma sugestão que ajudaria este projeto, faça um _fork_ deste repositório e crie um _pull request_ com a tag de <code>melhoria</code>.

Não se esqueça de deixar sua estrela para o projeto. Desde já, agradeço.

1. Faça um <code>fork</code> do projeto
2. Crie sua branch de <code>feature</code> (`git checkout -b feature/AmazingFeature`)
3. Dê o <code>commit</code> com suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Dê o `push` (`git push origin feature/AmazingFeature`)
5. Abra um `pull request`

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>


<!-- CONTACT -->
## Contato

Guilherme Diniz - [@guilhermedinizl](https://www.instagram.com/guilhermedinizl/) - email@example.com

Meu portfólio: [https://gdiniz.net/](https://gdiniz.net/)

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/guilhermediniz1/octopus/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/guilhermediniz1/octopus/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/guilhermediniz1/octopus/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/guilhermediniz1/octopus/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/guilhermediniz1/octopus/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/guilhermedinizl/
[product-screenshot]: src/assets/images/ipad-login.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Chart-url]: https://www.chartjs.org/
[Firebase-url]: https://firebase.google.com/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Firebase-console-url]: https://console.firebase.google.com/
[Netlify-url]: https://www.netlify.com/
