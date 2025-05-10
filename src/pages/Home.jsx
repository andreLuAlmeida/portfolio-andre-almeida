import ContactForm from '../components/ContactForm';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return (
    //Corpo da página
    <main className="pt-5">
      {/*Seção Inicial*/}
      <section id="inicio" className="container-fluid mt-5">
        <div className="container-fluid my-5">
          <div className="row align-items-center">
            <div className="col-md-6 pb-3 text-center">
             <h1 className="display-5 text-center">
               <span className="d-block fs-4">Olá, sou André Almeida</span>
                 Desenvolvedor Full-Stack <br />
                 <span className="d-block fs-5">Transformando ideias em experiências digitais</span>
               </h1>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="../public/imagens/andre-portfolio.jpg"
                alt="Foto de André"
                className="img-fluid rounded"
                style={{ maxWidth: '300px' }}
              />
            </div>
          </div>
        </div>
        <div className="my-5 pt-5 align-items-center">
          <div className="container text-center">
          <h1><strong>Sobre</strong><br />
          <span className="d-block fs-6 display-6">Propósito profissional e área de atuação</span>
            </h1>
          </div>
          <div className="container text-center py-3 col-8">
            <p>Sou Desenvolvedor Full-Stack com formação técnica em Informática pelo IFMG – Campus Formiga 
              e atualmente curso Ciência da Computação na UFSJ. Tenho experiência com ferramentas de 
              desenvolvimento web e mobile, além de grande interesse por lógica de programação e 
              resolução de problemas. Busco constantemente evoluir por meio de cursos, palestras e 
              projetos, e acredito que desafios reais são a melhor forma de crescimento profissional. 
              Estou sempre pronto para transformar ideias em soluções digitais completas e funcionais.</p>
          </div>
          <div className="py-3 pb-5 align-items-center">
            <div className="text-center mb-3">
              <h6 className="fw-bold">Baixe meu currículo e conheça mais sobre <br />minhas habilidades e trajetória acadêmica :</h6>
            </div>
            <div className="row justify-content-center">
              <div className="col-2 d-grid">
                <a href="/downloads/curriculo-andre.pdf" download className="btn btn-primary">
                  <strong>Download <i class="bi bi-file-earmark-arrow-down"></i></strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/*Seção Cards de Projetos --> Ao clicar em um dos cards, você será direcionado
     para a página do projeto contendo fotos e informações sobre ele*/}
     <section id="projetos" className="container py-5 bg-light">
        <h2 className="mb-4 text-center">Projetos</h2>
        <div className="row">

          <div className="col-md-6 mb-4">
            <a href="/projetos/receituario-digital" className="text-decoration-none text-dark">
              <div className="card h-100 project-card">
                <img src="/imagens/receituario-digital/principal.png" className="card-img-top" alt="Projeto 1" />
                <div className="card-body">
                  <h5 className="card-title">Receituário Digital</h5>
                  <p className="card-text"> Plataforma web para prescrição e dispensa de receitas médicas digitais, com autenticação via QR Code e controle de acesso por perfis de usuário (médico, farmácia e administrador).</p>
                  <p class="small text-muted"><strong>Tecnologias:</strong> Laravel, MySQL, Bootstrap, Blade, jQuery, QRCode.js, printThis.</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-6 mb-4">
            <a href="/projetos/app-tarefas" className="text-decoration-none text-dark">
              <div className="card h-100 project-card">
                <img src="/imagens/app-tarefas.png" className="card-img-top" alt="Projeto 2" />
                <div className="card-body">
                  <h5 className="card-title">App de Tarefas</h5>
                  <p className="card-text">Aplicativo web para gerenciar tarefas diárias com React e Firebase.</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-6 mb-4">
            <a href="/projetos/loja-online" className="text-decoration-none text-dark">
              <div className="card h-100 project-card">
                <img src="/imagens/loja-online.png" className="card-img-top" alt="Projeto 3" />
                <div className="card-body">
                  <h5 className="card-title">Loja Online</h5>
                  <p className="card-text">E-commerce fictício com frontend em React e integração com API REST.</p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* Seção Habilidades */}
      <section id="habilidades" className="container py-5">
        <h2 className="mb-4 text-center">Habilidades</h2>
        <div className="row">
          {/* Competências Técnicas */}
          <div className="col-md-6 mb-5">
            <h4 className="text-center pb-3">Competências Técnicas</h4>
            <div className="row text-center">
              {[
                { nome: 'HTML', icone: '/icons/html-5.png' },
                { nome: 'CSS', icone: '/icons/css-3.png' },
                { nome: 'JavaScript', icone: '/icons/js.png' },
                { nome: 'PHP', icone: '/icons/php.png' },
                { nome: 'Laravel', icone: '/icons/laravel.svg' },
                { nome: 'React (básico)', icone: '/icons/react.svg' },
                { nome: 'Flutter', icone: '/icons/flutter.svg' },
                { nome: 'Java', icone: '/icons/java.svg' },
                { nome: 'C', icone: '/icons/letra-c.png' },
                { nome: 'Bootstrap', icone: '/icons/bootstrap.png' },
                { nome: 'MySQL', icone: '/icons/mysql-original-wordmark.svg' },
                { nome: 'Git/GitHub', icone: '/icons/github.png' },
              ].map((item, idx) => (
                <div className="col-4 mb-4" key={idx}>
                  <img
                    src={item.icone}
                    alt={`Ícone de ${item.nome}`}
                    style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                    className="mb-2"
                  />
                  <div>{item.nome}</div>
                </div>
              ))}
            </div>
          </div>
            
          {/* Competências Profissionais */}
          <div className="col-md-6">
            <h4 className="text-center pb-3">Competências Profissionais</h4>
            <ul>
              <li>Metodologias Ágeis (Scrum e Kanban)</li>
              <li>Trabalho em equipe — com prática desenvolvida em projetos técnicos no IFMG</li>
              <li>Organização e gestão de tarefas</li>
              <li>Comunicação eficaz em projetos</li>
              <li>Capacidade de adaptação e aprendizado contínuo</li>
            </ul>
          </div>
        </div>
      </section>

      {/*Seção Contato --> Formulário de contato*/}
      <section id="contato" className="container pt-5 bg-light" style={{ minHeight: '100vh' }}>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <div className="col-6 col-md-6">
            <h2 className="text-center mb-4">Contato</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
