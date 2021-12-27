import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';
import * as S from './styles';
import axios from 'axios';
import { toast } from 'react-toastify';

export type DataTable = {
    email: string
    senha: string
    powerBi: string
    id: number
}

export default function TableSimuled() {
    const [data, setData] = useState<DataTable[]>()

    let fakeData = [
        {
            email: 'EMAIL FAKE',
            senha: "SENHA FAKE",
            powerBi: `<S.Iframe title="Dashboard_Brasbol_Recuperado 2" src="https://app.powerbi.com/view?r=eyJrIjoiMjRmZDVlZDYtZDM0MS00ODI1LTgxZTYtYjc2YWVjYWIyYzFhIiwidCI6IjQ2NTg4OGU5LWQzMjUtNDc5MC05ZTU3LTE1NGVhOWJhMWYxYiJ9&pageName=ReportSection" frameBorder="0" allowFullScreen={true} />`,
            id: 1
        },
        {
            email: 'EMAIL FAKE 2',
            senha: "SENHA FAKE 2",
            powerBi: `<S.Iframe title="Dashboard_Brasbol_Recuperado 2" src="https://app.powerbi.com/view?r=eyJrIjoiMjRmZDVlZDYtZDM0MS00ODI1LTgxZTYtYjc2YWVjYWIyYzFhIiwidCI6IjQ2NTg4OGU5LWQzMjUtNDc5MC05ZTU3LTE1NGVhOWJhMWYxYiJ9&pageName=ReportSection" frameBorder="0" allowFullScreen={true} />`,
            id: 2
        },
    ]

    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Senha',
            dataIndex: 'senha',
            key: 'senha',
        },
        {
            title: 'Power bi',
            dataIndex: 'powerBi',
            key: 'author',
        },
        {
            title: '',
            dataIndex: 'id',
            key: 'id',
            width: '20%',
            render: (id: number) => (
                <>
                    <Button
                        onClick={() => DeleteSimulated(id)}
                        type="primary"
                        danger
                    >Deletar
                    </Button>
                </>
            )
        },

    ];

    async function DeleteSimulated(id: number) {
        console.log(id)
        // await axios.delete(`${id}`, {
        // })
        //     .then(function (response) {
        //         toast.success('Simulado Deletado com sucesso')
        //         getSimuleds()

        //     })
        //     .catch(function (error) {
        //         toast.error(`Um erro inesperado aconteceu ${error.response.status}`)


        //     });
    }

    useEffect(() => {

        getSimuleds()
    }, [])

    async function getSimuleds() {
        await axios.get('https://bynem-app.herokuapp.com/api/Simulado')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
            });
    }
    return (<>
        <S.Tools>
        </S.Tools>
        <S.DivTable>
            <Table pagination={{ pageSize: 6 }} columns={columns} dataSource={fakeData} scroll={{ y: 430 }} />
        </S.DivTable>
    </>
    )
}
