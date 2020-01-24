/*class Computador extends React.Component {
    constructor(){
        super()
        this.state = {
            clicks:0
        }
    }
    render()
    {
        return(
        <div>
            <p>
                {this.state.clicks}
            </p>
            <button onClick = {() => this.setState({clicks: this.state.clicks+1})}>
                Oilá
            </button>
        </div>
        )
    }
}*/

class Cachorros extends React.Component{
    constructor(){
        super()
        this.state = { 
            cachorros:[
                {
                    nome: 'Georginho',
                    foto: 'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1127.jpg'
                },
                {
                    nome: 'Alfredo',
                    foto: 'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg'
                },     
                {
                    nome: 'Robervald',
                    foto: 'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1003.jpg'
                },
                {
                    nome: 'Zé',
                    foto: 'https://dog.ceo/img/dog.jpg'
                },
                {
                    nome: 'Zé II',
                    foto: 'https://images.dog.ceo/breeds/lhasa/n02098413_2974.jpg'
                },
                {
                    nome: 'Zé III',
                    foto: 'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1234.jpg'
                },
                {
                    nome: 'Primo do Zé',
                    foto: 'https://images.dog.ceo/breeds/lhasa/n02098413_5142.jpg'
                },
                {
                    nome: 'Albertinho',
                    foto: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3681.jpg'
                },
                {
                    nome: 'Outro Zé',
                    foto: 'https://images.dog.ceo/breeds/lhasa/n02098413_4592.jpg'
                },
                {
                    nome: 'Irmão do Zé II',
                    foto: 'https://images.dog.ceo/breeds/lhasa/n02098413_1480.jpg'
                },
                {
                    nome: 'Primo do Primo do Zé',
                    foto: 'https://images.dog.ceo/breeds/lhasa/n02098413_3741.jpg'
                },
            ]

        }
    }
    async componentDidMount (){
        const res = await fetch ('https://dog.ceo/api/breed/wolfhound/images')
        const cachorros = await res.json()
        this.setState({
            cachorros: cachorros.message.map(item => {
                return { foto: item }
            })
        })

    }
    render() {
        
        return (
            <div>
                {
                    this.state.cachorros.map ((cachorro)=> { 
                        return(
                            <Cachorro cachorro = {cachorro}/>
                        )
                    })
                }
            </div>
        )
    }
}


class Cachorro extends React.Component{
    render(){
        return(
        <div>
                <div className="cachorro"> {this.props.cachorro.nome != null
                    ? <h2>{this.props.cachorro.nome}</h2>
                    : null
                } 
                </div>


                <div className="cachorro"> {this.props.cachorro.foto != null
                    ?  <img src= {this.props.cachorro.foto} className='Doguinho'/>
                    :  <img src= 'https://kutt.it/6YHgD5'/>
                
                }

                </div>
           
        </div>
        )
    }
}

class App extends React.Component{
    render ()
    {
        return(
            <div>
                <Cachorros/>          
            </div>
        )

    }
}


ReactDOM.render(
    
    <App />,

    document.querySelector('#app')

)