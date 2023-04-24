import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const cssdiv = {
        backgroundColor: props.corSecundaria,
    }

    const cssh3 = {
        borderColor: props.corPrimaria,
        color: props.corPrimaria
    }

    return (
        (props.colaboradores.length > 0 || props.timeantigo.length > 0) ? <section className='time' style={cssdiv}>
            <h3 style={cssh3}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        key={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                    />
                )}
            </div>
        </section>
        : ''
    )
}

export default Time