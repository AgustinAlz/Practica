import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Card, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Divider} from 'antd';
import axios from 'axios';
import '../styles/NoteList.css'

export default class NoteList extends Component {
state = {
    notes: []
}

async componentDidMount(){
    this.getNotes();
}

async getNotes() {
    const res = await axios.get('http://localhost:4000/api/notes');
    this.setState({notes: res.data});
}

deleteNote = async (id) => {
    const res = await axios.delete('http://localhost:4000/api/notes/' + id);
    console.log(res);
    this.getNotes();
}

editNote = async (id) => {
    window.location.href = "/edit/" + id
    console.log("Editar")
}

    render(){
        return (
            <Space wrap>
                {
                    this.state.notes.map(note => (
                        <Card className="card" 
                        title={note.title} 
                        key={note._id}
                        extra={new Date(note.date).toLocaleDateString()}
                        >
                            <div className="container">
                                <h4 className="card-author">{note.author}</h4>
                                <div className="card-note" key={note._id}>
                                    {note.content}
                                </div>
                            </div>
                            <div className="bottom-card">
                                <Divider className="divider-full" />
                                <div className="border d-table w-100">
                                    <div className="d-table-cell">
                                        <Button type="primary" icon={<EditOutlined />} onClick={ () => this.editNote(note._id)}>
                                        
                                                Editar
                                  
                                        </Button>
                                        
                                    </div>
                                    <div className="d-table-cell tar">
                                        <Button icon={<DeleteOutlined />} onClick={ () => this.deleteNote(note._id)} >
                                            Eliminar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))
                }
            </Space>
        )
    }
}
