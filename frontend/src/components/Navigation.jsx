import React, { Component } from 'react'
import { Space } from 'antd';

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
