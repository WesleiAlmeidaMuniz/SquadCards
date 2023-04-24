import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

    const times = [
        {
            nome: 'Valorant',
            corPrimaria: '#57C278',
            corSecundaria: '',
        },
        {
            nome: 'Fortnite',
            corPrimaria: '#82CFFA',
            corSecundaria: '',
        },
        {
            nome: 'League of Legends',
            corPrimaria: '#A6D157',
            corSecundaria: '',
        },
        {
            nome: 'CS GO',
            corPrimaria: '#E06B69',
            corSecundaria: '',
        },
        {
            nome: 'Ragnarok',
            corPrimaria: '#DB6EBF',
            corSecundaria: '',
        },
        {
            nome: 'Free Fire',
            corPrimaria: '#FFBA05',
            corSecundaria: '',
        },
        {
            nome: 'Call of Duty MW2',
            corPrimaria: '#FF8A29',
            corSecundaria: '',
        }
    ]

    let timeantigo = [
        {
        cargo: "Dozeiro",
        imagem: "https://github.com/wesleialmeidamuniz.png",
        nome: "Shadowkin",
        time: "Fortnite"
    },
    {
        cargo: "Canhão de Vidro",
        imagem: "https://i.ibb.co/3YnpFtK/Imagem-do-Whats-App-de-2023-04-15-s-19-15-36.jpg",
        nome: "Horizon Lest",
        time: "Fortnite"
    },
    {
        cargo: "Atiradora de Elite",
        imagem: "https://i.ibb.co/vxZYyBK/dani.png",
        nome: "The Darkness",
        time: "Fortnite"
    },
    {
        cargo: "Rushador",
        imagem: "https://i.ibb.co/6X4t778/kok.png",
        nome: "Los Kok",
        time: "Fortnite"
    }
]
    
    if(localStorage.hasOwnProperty('timesalvo')){
        timeantigo = JSON.parse(localStorage.getItem('timesalvo'))
    }

    const [colaboradores, setColaboradores] = useState(timeantigo , [])

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])

        if(localStorage.hasOwnProperty('timesalvo')){
            timeantigo = JSON.parse(localStorage.getItem('timesalvo'))
        }

        timeantigo.push(colaborador)

        localStorage.setItem('timesalvo', JSON.stringify(timeantigo))

    }

    return (
        <div className="App">
            <Banner />
            <Formulario
                times={times.map(time => time.nome)}
                aoColaboradorCadastrado={colaborador => 
                aoNovoColaboradorAdicionado(colaborador)}
            />

            {times.map(time => <Time 
                key={time.nome} 
                nome={time.nome} 
                corPrimaria={time.corPrimaria} 
                corSecundaria={time.corSecundaria}
                imagemDeFundo={time.imagemDeFundo}
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                timeantigo={timeantigo.filter(timeantigo => timeantigo.time === time.nome)}
            />)}

            <Rodape />
        </div>
    );
}

export default App;
