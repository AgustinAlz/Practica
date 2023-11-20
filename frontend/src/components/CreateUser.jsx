//import React, { Component } from 'react'
import { useState, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import userService from '../services/user';

function CreateUser(){
    const [users, setUsers] = useState([]);
    const [nombre, setNombre] = useState("");
    const {language} = useContext(LanguageContext);

    useEffect(() => {
        async function fetchData () {
            setUsers(await userService.getUsers());
        }
        fetchData();
    }, [])

    const onChangeUsername = (e) =>{
        setNombre (e.target.value)
    }

    const onSubmit = async e => {
        e.preventDefault();
        console.log(nombre)
        const res = await userService.createUser({
            username: nombre
        });
        console.log(res);
        setUsers(await userService.getUsers());
    }

    const deleteUser = (async (id) => {
        await userService.deleteUserById(id);
        setUsers(oldUsers => {
            return oldUsers.filter(user => user._id !== id);
        });
    
        //const response = await userService.getUsers();
        //setUsers(response);
    });

    return (
        <div>
            <div>
                <h3>
                    Crear un nuevo usuario
                </h3>
                <form onSubmit={onSubmit}>
                {/* onSubmit={onSubmit}> */}
                    <input 
                        type="text"
                        value={nombre}
                        onChange={onChangeUsername}
                     />
                    <button type="submit">Guardar</button>
                </form>
            </div>
            <div>   
                <ul>
                    {
                        users.map(user => (
                        <li key={user.username}>
                            {user.username}
                            <button onClick={() => deleteUser(user._id)}>Eliminar</button>
                        </li>)
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default CreateUser;

/*export default class CreateUser extends Component {
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
}*/
