import './Rodape.css'

const Rodape = () => {

    const excluir = () => {
        window.alert('Voce tem certeza?')
        let confirmação = window.prompt('Para Confirmar digite sim')

        if(confirmação.toLowerCase() === 'sim'){
            localStorage.clear()
            window.location.reload(false)
        } else {
            window.alert('Confirmação falhou')
        }

    }

    return(
        <footer className='rodape'>
            <section>
                <ul>
                    <li>
                        <a href='https://facebook.com' target='_blank'>
                            <img src='./imagens/fb.png' alt='Logo Facebook' />
                        </a>
                    </li>
                    <li>
                        <a href='https:/twitter.com' target='_blank'>
                            <img src='./imagens/tw.png' alt='Logo Twitter' />
                        </a>
                    </li>
                    <li>
                        <a href='https:/instagram.com' target='_blank'>
                            <img src='./imagens/ig.png' alt='Logo Instagram' />
                        </a>
                    </li>
                </ul>
            </section>
            <section className='logosquadcards'>
                <img src='./imagens/logopequeno.png' alt='Logo SquadCards'/>
            </section>
            <section className='desenvolvido'>
                <h6>Desenvolvido por <a href="https://www.linkedin.com/in/wesleialmeidamuniz/" target='_blank'>Weslei Almeida Muniz</a>.</h6>
                <button className='botaoexcluir' onClick={excluir}>Excluir Mesa</button>
            </section>
        </footer>
    )
}

export default Rodape