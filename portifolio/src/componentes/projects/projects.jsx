import './projects.css'
import CardProject from './cardproject/cardproject'
import sunnerCover from '../../assets/sunner-cover.svg'
import clinisisCover from '../../assets/clinisis-cover.svg'
import protocolCover from '../../assets/jesus-protocol-cover.svg'

export default function Projects() {
    return (
        <section className='project d-flex flex-column justify-content-center align-items-center py-5' id='projects'>
            <div className='container reveal d-flex flex-column justify-content-around align-items-center text-center'>
                <h1 className='text-white mb-5'>Meus Projetos</h1>
                <div className='project-container d-flex flex-row flex-wrap gap-3 px-5 justify-content-center'>
                    <div className="project-content col-12 col-md-6 col-lg-4">
                        <CardProject
                            img={sunnerCover}
                            title="Sunner"
                            description="SaaS desenvolvido para o mercado de energia solar, conectando tecnologia às necessidades de empresas e profissionais do setor."
                            link="https://sunner.com.br"
                            button="Acessar site"
                        />
                    </div>
                    <div className="project-content col-12 col-md-6 col-lg-4">
                        <CardProject
                            img={clinisisCover}
                            title="Clinisis"
                            description="Sistema para gestão de clínicas, pensado para apoiar a organização das rotinas e do atendimento."
                            link="https://github.com/CarlosMateusDeveloper?tab=repositories"
                            button="Ver no GitHub"
                        />
                    </div>
                    <div className='project-content col-12 col-md-6 col-lg-4'>
                        <CardProject
                            img={protocolCover}
                            title="Jesus Protocol"
                            description="Protocolo de proveniência digital que usa a rede Bitcoin para ajudar a comprovar a autenticidade de imagens."
                            link="https://github.com/CarlosMateusDeveloper/jesusProtocol"
                            button="Ver no GitHub"
                        />
                    </div>
                </div>
            </div> 
            
        </section>
    )
}

