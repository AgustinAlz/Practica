import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import userService from '../services/user';
import axios from 'axios';
import { DatePicker, Space } from 'antd';


export default class CreateNote extends Component {
    
    state={
        users:[],
        userSelected: "",
        title: '',
        content: '',
        date: new Date(),
        editing: false,
        _id: ''
    }

    async componentDidMount(){
        
        const res = await userService.getUsers();
        this.setState({
            users: res.map(user => user.username),
            userSelected: res[1].username,
        });
        
        console.log(res[0]._id);
        const foo= useParams();
        console.log(foo);
        //console.log(this.props.match.params);
        //const [ searchParams ] = useSearchParams();
        //console.log("test " + useParams());
        const noteId = ""; //Aca pong el id de la nota que viene por parametro de la url y no se como sacar
        
        if (noteId){
            const res = await axios.get('http:/localhost:4000/api/notes/' + noteId);
            console.log(res.data);
            this.setState({
                _id: noteId,
                title: res.data.title,
                content: res.data.content,
                userSelected: res.data.author,
                date: new Date(res.data.date),
                editing: true
                
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        }
        if(this.state.editing){
            await axios.put('http://localhost:4000/api/notes/' + this.state._id, newNote)
        } else {
            await axios.post('http://localhost:4000/api/notes', newNote);
        }
        //console.log(newNote);
        window.location.href = '/';
    }
    
    onInputChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    onDateChange = (date, dateString) => {
        this.setState({date});
      };

    render(){
        return (
            <div>
                <h4>Crear Nota</h4>
                <form onSubmit={this.onSubmit}>
                <div>
                    <select
                        name="userSelected"
                        onChange={this.onInputChange}
                        value={this.state.userSelected}
                    >
                        {this.state.users.map(user => 
                        <option key={user} value={user}>
                            {user}
                        </option>)}
                    </select>
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Titulo" 
                        name="title"
                        onChange={this.onInputChange}
                        value={this.state.title}
                        required>

                    </input>
                </div>
                <div>
                    <textarea
                        name="content"
                        placeholder='Contenido'
                        onChange={this.onInputChange}
                        value={this.state.content}
                        required
                        >

                    </textarea>
                </div>
                <div>
                    <DatePicker
                        selecected={this.state.date}
                        onChange={this.onDateChange}
                     />
                </div>
                
                <button type="submit">
                    Guardar
                </button>
                </form>
            </div>
        )
    }
}
