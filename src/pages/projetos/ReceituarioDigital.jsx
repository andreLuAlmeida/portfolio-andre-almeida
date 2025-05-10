import React from 'react';

export default function ReceituarioDigital() {
  return (
    <main className="pt-5">
      {/* Seção de Introdução */}
      <section
      id="inicio"
      className="container-fluid d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: "url('/imagens/receituario-digital/principal.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        position: 'relative',
        color: 'white'
      }}
      >
        {/* Sombreamento escuro */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // escurece a imagem
            zIndex: 1,
          }}
        ></div>

        {/* Título centralizado */}
        <div style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold">Receituário Digital</h1>
        </div>
      </section>


      {/* Seção de Detalhes do Projeto */}
      <section className="container py-5">
        <h2 className="mb-4 text-center">Sobre o Projeto</h2>
        <div className="row">
          <div className="col-md-12">
            <p>
              O <strong>Receituário Digital</strong> foi o projeto que desenvolvi como Trabalho de Conclusão do curso Técnico em Informática, com o objetivo de modernizar o processo de prescrição e dispensa de medicamentos por meio de uma plataforma web segura e eficiente.
            </p>
            <p>
              A aplicação foi pensada para três perfis de usuário: médico, farmácia e administrador. Os médicos podem cadastrar pacientes e emitir receitas digitais autenticadas por QR code, enquanto as farmácias realizam a leitura e confirmação da dispensa. Já o administrador é responsável pela gestão de cadastros e pelo controle do sistema.
            </p>
            <p>
              Durante o desenvolvimento, optei por construir um <strong>MVP (Produto Mínimo Viável)</strong>, priorizando as funcionalidades técnicas essenciais. A aplicação foi implementada com o <strong>framework Laravel</strong>, utilizando <strong>MySQL</strong> como banco de dados relacional. A interface do usuário foi baseada em um dashboard da Creative Tim e estilizada com <strong>Bootstrap</strong> e <strong>Laravel Blade</strong>. Para recursos interativos e geração de QR codes, utilizei <strong>jQuery</strong> e as bibliotecas <strong>QRCode.js</strong> e <strong>printThis</strong>.
            </p>
            <p>
              A metodologia <strong>Scrum</strong> foi adaptada para organizar o fluxo de trabalho, com Sprints semanais e um Product Backlog claro. Cada etapa — da modelagem do banco de dados ao envio automatizado de e-mails e tokens de autenticação — exigiu planejamento, testes e integração entre diferentes camadas da aplicação.
            </p>

            <h4 className="mt-4">Tecnologias e Ferramentas</h4>
            <ul>
              <li>Laravel (PHP) – Framework principal</li>
              <li>MySQL – Banco de dados relacional</li>
              <li>Bootstrap e Blade – Estilização e templates</li>
              <li>jQuery, QRCode.js, printThis – Funcionalidades interativas e QR Code</li>
              <li>Scrum – Metodologia ágil adaptada</li>
            </ul>

            <h4 className="mt-4">O que aprendi</h4>
            <p>
              Este projeto representou uma evolução significativa nas minhas habilidades como desenvolvedor. Aprendi a integrar diferentes tecnologias web, gerenciar múltiplos perfis de usuário, automatizar processos por meio de tokens e autenticação, além de planejar e conduzir um projeto completo, da concepção à entrega.
            </p>
            <p>
              Foi a minha primeira experiência prática com um sistema de autenticação via QR code e com o uso de templates administrativos prontos, o que me ensinou a adaptar soluções existentes às necessidades específicas do projeto. O <strong>Receituário Digital</strong> também me mostrou a importância da usabilidade, segurança e escalabilidade em sistemas que lidam com informações sensíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Imagens do Projeto */}
      <section className="container py-5 bg-light">
        <h2 className="mb-4 text-center">Imagens do Projeto</h2>
        <hr className="my-4" />

        <div className="row">
          <div className="col-md-12 mb-4">
            <img
              src="/imagens/receituario-digital/login.png"
              alt="Tela de Login"
              className="img-fluid rounded"
            />
          </div>
          <hr className="my-4" />

          <div className="col-md-12 mb-4">
            <img
              src="/imagens/receituario-digital/gerenciamento.png"
              alt="Tela de gerenciamento"
              className="img-fluid rounded"
            />
          </div>
          <hr className="my-4" />
          <div className="col-md-12 mb-4">
            <img
              src="/imagens/receituario-digital/cadastramentode.png"
              alt="Tela de cadastro de paciente"
              className="img-fluid rounded"
            />
          </div>
          <hr className="my-4" />
          <div className="col-md-12 mb-4">
            <img
              src="/imagens/receituario-digital/receita.png"
              alt="Receita para impressão"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      {/* Seção de Link para o Repositório */}
      <section className="container py-5 text-center">
        <a
          href="https://github.com/andreLuAlmeida/TCC---Receituario-Digital.git"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Código no GitHub <i className="bi bi-github me-2"></i> 
        </a>
      </section>

    </main>
  );
}
