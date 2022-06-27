import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { IOtrasConsultas, otrasConsultas } from '../../../data/OtrasConsultas'
import './otrasConsultasStyle.css'

interface IState {
    otrasConsultas: IOtrasConsultas[]
}

class OtrasConsultasPage extends React.Component<{}, IState> {
    public constructor (props: {}) {
        super(props)
        this.state = {
            otrasConsultas: []
        }        
    }

    public componentDidMount() {
        this.setState({otrasConsultas})
    }
    public render() {
        return (
            <div className='pageContainer'>
                <ul className='product-list'>
                    {this.state.otrasConsultas.map(consulta => (
                        <Link to={`${consulta.id}`} style={{textDecoration: 'none'}}>
                            <li key={consulta.id} 
                            className='product-list-item'>
                                {consulta.title}
                        </li>
                        </Link>
                        
                    ))}
                </ul>
                <Outlet/>
            </div>
        )
    }
}

export default OtrasConsultasPage;
