import { useState, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import noteService from "../services/note";
import { useNavigate } from "react-router-dom";
import { Card, Space, Button, Divider } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import '../styles/NoteList.css';



function NoteList() {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        async function fetchData() {
            setNotes(await noteService.getNotes());
            //const response = await noteService.getNotes();
            //setNotes(response);
        }
        fetchData();
    }, [])

    const editNote = async (id) => {
        navigate("/edit/" + id);
    }

    const deleteNote = (async (id) => {
        await noteService.deleteNoteById(id);
        setNotes(oldNotes => {
            return oldNotes.filter(note => note._id !== id)
        });

        //const response = await noteService.getNotes();
        //setNotes(response);
    })
    return (
        <Space wrap>
            {
                notes.map(note => (
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
                                    <Button type="primary" icon={<EditOutlined />} onClick={() => editNote(note._id)}>
                                        Editar
                                    </Button>
                                </div>
                                <div className="d-table-cell tar">
                                    <Button icon={<DeleteOutlined />} onClick={() => deleteNote(note._id)} >
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

export default NoteList;
