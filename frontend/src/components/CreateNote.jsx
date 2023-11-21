import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { DatePicker, Space, Form, Select, Button, Input, Typography } from 'antd';
import { LanguageContext } from "../context/LanguageContext";
import noteService from "../services/note";
import userService from "../services/user";
import "../styles/CreateNote.css"


function CreateNote() {
    const [users, setUsers] = useState([]);
    const [note, setNote] = useState({
        _id: "",
        author: "",
        title: "",
        content: "",
        date: moment(),
        editing: false
    });
    const { Title } = Typography;
    const dateFormat = 'DD/MM/YYYY';
    const { id } = useParams();
    const [form] = Form.useForm();

    useEffect(() => {
        async function fetchData() {
            const response = await userService.getUsers()
            setUsers(response);
            setNote({
                ...note,
                author: response[0].username
            });
            const noteId = id;

            if (noteId) {
                const res = await noteService.getNoteById(noteId);
                setNote({
                    _id: noteId,
                    title: res.title,
                    content: res.content,
                    author: res.author,
                    date: moment(res.date),
                    editing: true
                });
            }
        }
        fetchData();
    }, []);

    const onDateChange = (date, dateString) => {
        setNote({
            ...note,
            date, date
        });
    };

    const onSubmit = async e => {
        if (note.editing) {
            await noteService.updateNoteById(note._id, note);
        } else {
            await noteService.createNote(note);
        }
        window.location.href = '/';
    };


    const selectUser = (e) => {
        setNote({
            ...note,
            author: e
        });
    };
      
    const handleChange = (e) => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <Title>Crear Nota</Title>
            <Space className="crud">
                <Form form={form} onFinish={onSubmit}>
                    <Form.Item>
                        <Select
                            name="author"
                            showSearch
                            onChange={selectUser}
                            value={note.author}
                        >
                            {users.map((user) => {
                                return (
                                    <Select.Option key={user._id} value={user.username}>
                                        {user.username}
                                    </Select.Option>
                                );
                            })};
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            type="text"
                            placeholder="Titulo"
                            name="title"
                            onChange={handleChange}
                            value={note.title}
                            required>
                        </Input>
                    </Form.Item>
                    <Form.Item>
                        <Input.TextArea
                            name="content"
                            placeholder='Contenido'
                            onChange={handleChange}
                            value={note.content}
                            required
                        >
                        </Input.TextArea>
                    </Form.Item>
                    <Form.Item>
                        <DatePicker
                            value={note.date}
                            format={dateFormat}
                            onChange={onDateChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Guardar
                        </Button>
                    </Form.Item>
                </Form>
            </Space>
        </div>
    )
}

export default CreateNote;
