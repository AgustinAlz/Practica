import { useState, useEffect } from "react";
import { Space, Menu } from 'antd';
import { FileTextOutlined, FileAddOutlined, UserAddOutlined } from '@ant-design/icons';
import { useNavigate,useLocation } from "react-router-dom";

function Navigation() {
    const [current, setCurrent] = useState('listNote');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location) {
            if(location.pathname.startsWith("/edit")){
                setCurrent("/create");
            }
            else if( current !== location.pathname ) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);

    const createUser = () => {
        navigate("/user")
    }
    const menuOptions = [
        {
            label: "Lista de Nota",
            key: "/",
            icon: <FileTextOutlined />
        },
        {
            label: "Crear Nota",
            key: "/create",
            icon: <FileAddOutlined />
        },
        {
            label: "Crear Usuario",
            key: "/user",
            icon: <UserAddOutlined />
        }];

    const onClick = (e) => {
        setCurrent(e.key);
        switch (e.key) {
            case "/":
                navigate("/");
                break;
            case "/create":
                navigate("/create");
                break;
            case "/user":
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