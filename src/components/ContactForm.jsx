import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>Nome</label>
          <input className="form-control" {...register("name", { required: true })} />
          {errors.name && <small className="text-danger">Nome é obrigatório</small>}
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" {...register("email", { required: true })} />
          {errors.email && <small className="text-danger">Email é obrigatório</small>}
        </div>

        <div className="mb-3">
          <label>Mensagem</label>
          <textarea className="form-control" rows="4" {...register("message", { required: true })}></textarea>
          {errors.message && <small className="text-danger">Mensagem é obrigatória</small>}
        </div>

        <button className="btn btn-primary col-12 mb-3" type="submit">Enviar</button>
      </form>

      <div className="d-flex gap-2 justify-content-center mt-3">
        <a
          href="https://www.linkedin.com/in/andrelucascunhadealmeida"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
        >
          <i className="bi bi-linkedin me-2"></i> LinkedIn
        </a>
        <a
          href="https://github.com/andreLuAlmeida"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark"
        >
          <i className="bi bi-github me-2"></i> GitHub
        </a>
      </div>
    </>
  );
}
