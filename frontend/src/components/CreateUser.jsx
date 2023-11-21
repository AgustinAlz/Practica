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
        <Space align="start"className="FirstHalf" size="middle">
            <Space direction="vertical" size="small">
            <Title>
                Crear un nuevo usuario
            </Title>
            <Form onFinish={onSubmit}>
                <Form.Item>

                    <Input
                        type="text"
                        value={nombre}
                        onChange={onChangeUsername}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Guardar</Button>
                </Form.Item>
            </Form>
            </Space>
            <List
                header={<Text strong>Usuarios</Text>}
                bordered
            >
                {
                    users.map(user => (
                        <List.Item key={user.username}>
                            {user.username}
                            <button onClick={() => deleteUser(user._id)}>Eliminar</button>
                        </List.Item>)
                    )
                }
            </List>
        </Space >
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
