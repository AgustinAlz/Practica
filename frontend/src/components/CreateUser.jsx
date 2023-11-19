import React, { Component } from 'react'
import userService from '../services/user';

export default class CreateUser extends Component {
    state = {
        users: [],
        username: ""
    }

    async componentDidMount(){
        this.getUsers();
    }

    getUsers = async () => {
        const res = await userService.getUsers();
        this.setState({users: res});        
    }

    onChangeUsername = (e) =>{
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async e => {
        e.preventDefault();
        const res =await userService.createUser({
            username: this.state.username
        });
        this.getUsers();        
    }

    deleteUser = async (id) => {
        await userService.deleteUserById(id);
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
