import "./about.css";

const highlights = [
  { label: "Formação", title: "Sistemas para Internet", detail: "IFRN" },
  { label: "Atuação atual", title: "Estagiário", detail: "Luxem" },
  { label: "Experiência", title: "SaaS", detail: "Energia solar" },
];

export default function About() {
  return (
    <section className="about container-fluid" id="about">
      <div className="about-inner reveal">
        <div className="about-copy">
          <span className="about-eyebrow">Sobre mim</span>
          <h2>Software, IA e visão de produto</h2>
          <p>
            Sou desenvolvedor de software e estudante de Sistemas para Internet
            no IFRN. Atualmente, faço estágio na Luxem e tenho experiência
            desenvolvendo SaaS para o mercado de energia solar, como o Sunner.
            Uno engenharia de software, IA e experiência do usuário para criar
            produtos que ajudam negócios a crescer.
          </p>
        </div>

        <div className="about-highlights" aria-label="Formação e experiência">
          {highlights.map(({ label, title, detail }) => (
            <article className="about-highlight" key={label}>
              <span className="about-highlight-label">{label}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
