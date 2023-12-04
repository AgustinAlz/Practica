import { useState, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { List, Space, Typography, Button, Input, Form } from "antd";
import userService from '../services/user';
import "../styles/CreateUser.css"

function CreateUser() {
    const [users, setUsers] = useState([]);
    const [nombre, setNombre] = useState("");
    const { language } = useContext(LanguageContext);
    const { Text, Link, Title } = Typography;

    useEffect(() => {
        async function fetchData() {
            setUsers(await userService.getUsers());
        }
        fetchData();
    }, [])

    const onChangeUsername = (e) => {
        setNombre(e.target.value)
    }

    const onSubmit = async e => {
        const res = await userService.createUser({
            username: nombre
        });
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
        <div className="create-user-form">
            <Title>
                Crear un nuevo usuario
            </Title>
            <Form onFinish={onSubmit}>
                <Form.Item>
                    <Input
                        type="text"
                        value={nombre}
                        onChange={onChangeUsername}
                        className="user-name-input"
                    />
                    <Button className="user-name-submit-button" type="primary" htmlType="submit">Guardar</Button>
                </Form.Item>
            </Form>
            <List
                header={<Text strong>Usuarios</Text>}
                bordered
            >
                {
                    users.map(user => (
                        <List.Item key={user.username}>
                            {user.username}
                            <Button className="delete-user-button" onClick={() => deleteUser(user._id)}>Eliminar</Button>
                        </List.Item>)
                    )
                }
            </List>
        </div>
    )
}

export default CreateUser;