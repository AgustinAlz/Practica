import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {
    state = {
        users: [],
        username: ""
    }

    async componentDidMount(){
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        //console.log(res);
        this.setState({users: res.data});        
    }

    onChangeUsername = (e) =>{
        
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async e => {
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        })
        this.getUsers();        
    }

    deleteUser = async (id) => {
        const rest = await axios.delete('http://localhost:4000/api/users/' + id);
        this.getUsers();
    }

    render(){
        return (
            <div>
                <div>
                    <h3>
                        Crear un nuevo usuario
                    </h3>
                    <form onSubmit={this.onSubmit}>
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                         />
                        <button type="submit">Guardar</button>
                    </form>
                </div>
                <div>   
                    <ul>
                        {
                            this.state.users.map(user => (
                            <li key={user.username}>
                                {user.username}
                                <button onClick={() => this.deleteUser(user._id)}>Eliminar</button>
                            </li>)
                            )
                        }
                    </ul>
                </div>
                Contenido: Crear Usuario
            </div>
        )
    }
}
