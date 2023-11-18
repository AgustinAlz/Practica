import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Space } from 'antd';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                  <nav>

                    <Link to="/">
                        Notas
                    </Link>
                    <button type="button">
                    </button>
                </nav>
                <div>
                    <Space direction="horizontal">
                        <ul>
                            <li>
                                <Link to="/">Lista de Nota</Link>
                            </li>
                            <li>
                                <Link to="/create">Crear Nota</Link>
                            </li>
                            <li>
                                <Link to="/user">Crear Usuario</Link>
                            </li>
                        </ul>
                    </Space>
                </div>
            </div>
        )
    }
}
