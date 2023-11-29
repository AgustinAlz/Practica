import { useState } from "react";
import { Space, Menu } from 'antd';
import { FileTextOutlined, FileAddOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate();

    const createUser = () => {
        navigate("/user")
    }
    const menuOptions = [
        {
            label: "Lista de Nota",
            key: "listNote",
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
        setCurrent(e.key);
        switch (e.key) {
            case "listNote":
                navigate("/");
                break;
            case "createNote":
                navigate("/create");
                break;
            case "createUser":
                navigate("/user");
                break;
        }

    };

    return (
        <div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuOptions} />
     
        </div>
    )
}
export default Navigation;