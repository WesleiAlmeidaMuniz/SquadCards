import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

    const times = [
        {
          nome: 'Programação',
          corPrimaria: '#D9F7E9',
          corSecundaria: '#57C278'
        },
        {
          nome: 'Fortnite',
          corPrimaria: '#E8F8FF',
          corSecundaria: '#82CFFA'
        },
        {
          nome: 'Data Science',
          corPrimaria: '#F0F8E2',
          corSecundaria: '#A6D157'
        },
        {
          nome: 'Devops',
          corPrimaria: '#FDE7E8',
          corSecundaria: '#E06B69'
        },
        {
          nome: 'UX e Design',
          corPrimaria: '#FAE9F5',
          corSecundaria: '#DB6EBF'
        },
        {
          nome: 'Mobile',
          corPrimaria: '#FFF5D9',
          corSecundaria: '#FFBA05'
        },
        {
          nome: 'Inovação e Gestão',
          corPrimaria: '#FFEEDF',
          corSecundaria: '#FF8A29'
        },
    ]

    let timeantigo = [
        {
            id: uuidv4(),    
            cargo: "Dozeiro",
            imagem: "https://github.com/wesleialmeidamuniz.png",
            nome: "Shadowkin",
            time: "Fortnite"
        },
        {
            id: uuidv4(),
            cargo: "Canhão de Vidro",
            imagem: "https://i.ibb.co/3YnpFtK/Imagem-do-Whats-App-de-2023-04-15-s-19-15-36.jpg",
            nome: "Horizon Lest",
            time: "Fortnite"
        },
        {
            id: uuidv4(),
            cargo: "Atiradora de Elite",
            imagem: "https://i.ibb.co/vxZYyBK/dani.png",
            nome: "The Darkness",
            time: "Fortnite"
        },
        {
            id: uuidv4(),
            cargo: "Rushador",
            imagem: "https://i.ibb.co/6X4t778/kok.png",
            nome: "Los Kok",
            time: "Fortnite"
        }
    ]
    
    //Este Loop recupera os dados salvos no LocalStorage
    for(var i = 0; i < localStorage.length; i++){
        console.log(localStorage.getItem(localStorage.key(i)))
        //Este .Push joga os dados do localStorage para a var Timeantigo, irá renderizar na pagina com os times padrão.
        timeantigo.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    
    const [colaboradores, setColaboradores] = useState(timeantigo)

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
        //Este .setItem salva o dado do colaborador criado no localStorage
        localStorage.setItem(colaborador.id, JSON.stringify(colaborador))
        
    }

    function deletarColaborador(id){
       setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
        //Este .removeItem remove os dados salvos no LocalStorage
       localStorage.removeItem(id);
    }

    return (
        <div className="App">
            <Banner />
            <Formulario
                times={times.map(time => time.nome)}
                aoColaboradorCadastrado={colaborador => 
                aoNovoColaboradorAdicionado(colaborador)}
            />

            {times.map((time, indice) => 
                <Time 
                    key={indice} 
                    time={time}
                    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                    aoDeletar={deletarColaborador}
                />
            )}

            <Rodape />
        </div>
    );
}

export default App;
