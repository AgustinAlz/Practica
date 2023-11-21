import { useState, useEffect, useContext } from "react";
import { Space, Menu } from 'antd';
import { FileTextOutlined, FileAddOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

function Navigation() {
    const menuOptions = [
        {
            label: "Lista de Nota",
            key: "mail",
            icon: <FileTextOutlined />
        },
        {
            label: "Crear Nota",
            key: "createNote",
            icon: <FileAddOutlined />
        }, 
        {
            label: "Crear Usuario",
            key: "createUser",
            icon: <UserAddOutlined />
        }];

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuOptions} />
           <Link></Link>
            <ul>
                        <li>
                        <Link to="/">Lista de Nota</Link>
                        </li>
                        <li>
                            <a href="/create">Crear Nota</a>
                        </li>
                        <li>
                            <a href="/user">Crear Usuario</a>
                        </li>
                    </ul>
        </div>
    )
}
export default Navigation;
/*
export default class Navigation extends Component {
    render() {
        return (
            <div>
                  <nav>

                    <a href="/">
                        Notas
                    </a>
                    <button type="button">
                    </button>
                </nav>
                <div>
                    <Space direction="horizontal">
                        <ul>
                            <li>
                                <a href="/">Lista de Nota</a>
                            </li>
                            <li>
                                <a href="/create">Crear Nota</a>
                            </li>
                            <li>
                                <a href="/user">Crear Usuario</a>
                            </li>
                        </ul>
                    </Space>
                </div>
            </div>
        )
    }
}
*/