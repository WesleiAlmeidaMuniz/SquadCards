import { Fragment, useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const [mostrarFormulario, setMostrarFormulario] = useState('block')
    const [textoBotao, setTextoBotao] = useState('Esconder Formulário')
    const [margemForm, setMargem] = useState('80px 0')

    const mostrarEsconder = (evento) => {
        if(mostrarFormulario === 'block'){
            setMostrarFormulario('none')
            setTextoBotao('Mostrar Formulário')
            setMargem('0')
        } else {
            setMostrarFormulario('block')
            setTextoBotao('Esconder Formulário')
            setMargem('80px 0')
        }
    }

    return (
        <Fragment>
            <section className="formulario" style={{margin: margemForm}}>
                <form onSubmit={aoSalvar} style={{display: mostrarFormulario}}>
                    <h2 className='tituloformulario'>Preencha os dados para criar o card.</h2>
                    <CampoTexto 
                        obrigatorio={true} 
                        label="Nome" 
                        placeholder="Digite seu nickname"
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <CampoTexto 
                        obrigatorio={true} 
                        label="Posição" 
                        placeholder="Digite sua posição no Squad"
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />
                    <CampoTexto 
                        label="Imagem" 
                        placeholder="Digite o endereço da imagem"
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa 
                        obrigatorio={true}
                        label="Time"
                        itens={props.times}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                    />
                    <Botao>
                        Criar Card
                    </Botao>
                </form>
            </section>
            <button 
            className='botaomostraresconder' 
            onClick={mostrarEsconder}> {textoBotao}
            </button>
    </Fragment>
    )
}

export default Formulario