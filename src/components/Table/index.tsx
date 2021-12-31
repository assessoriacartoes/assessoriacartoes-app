import { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';
import * as S from './styles';
import { toast } from 'react-toastify';
import api from '../../service/api';

export type DataTable = {
    email: string
    senha: string
    powerBi: string
    id: number
}
// conciliador: null
// email: "implantacao@assessoriacartoes.com.br"
// extensaoLogo: null
// id: 1
// img: null
// nomeArquivoLogo: null
// password: "lg182030"
// powerBi: null
// tipoDeUsuario: 1

export default function TableSimuled() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [trigger, setTrigger] = useState(0)

    // let fakeData = [
    //     {
    //         email: 'EMAIL FAKE',
    //         senha: "SENHA FAKE",
    //         powerBi: `<S.Iframe title="Dashboard_Brasbol_Recuperado 2" src="https://app.powerbi.com/view?r=eyJrIjoiMjRmZDVlZDYtZDM0MS00ODI1LTgxZTYtYjc2YWVjYWIyYzFhIiwidCI6IjQ2NTg4OGU5LWQzMjUtNDc5MC05ZTU3LTE1NGVhOWJhMWYxYiJ9&pageName=ReportSection" frameBorder="0" allowFullScreen={true} />`,
    //         id: 1
    //     },
    //     {
    //         email: 'EMAIL FAKE 2',
    //         senha: "SENHA FAKE 2",
    //         powerBi: `<S.Iframe title="Dashboard_Brasbol_Recuperado 2" src="https://app.powerbi.com/view?r=eyJrIjoiMjRmZDVlZDYtZDM0MS00ODI1LTgxZTYtYjc2YWVjYWIyYzFhIiwidCI6IjQ2NTg4OGU5LWQzMjUtNDc5MC05ZTU3LTE1NGVhOWJhMWYxYiJ9&pageName=ReportSection" frameBorder="0" allowFullScreen={true} />`,
    //         id: 2
    //     },
    // ]

    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Senha',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Power bi',
            dataIndex: 'powerBi',
            key: 'powerBi',
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
        setIsLoading(true)
        setTrigger(trigger + 1)
        await api.delete(`/api/cliente/${id}`)
            .then(function (response) {
                setIsLoading(false)

                toast.success('Cliente Deletado com sucesso')
            })
            .catch(function (error) {
                setIsLoading(false)

                toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
            });
    }

    useEffect(() => {
        async function getSimuleds() {
            await api.get(`/api/cliente`)
                .then(function (response) {
                    setIsLoading(false)
                    setData(response.data);
                })
                .catch(function (error) {
                    setIsLoading(false)
                    toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
                });
        }
        getSimuleds()
    }, [trigger])


    return (<>
        <S.Tools>
        </S.Tools>
        <S.DivTable>
            <Table pagination={{ pageSize: 6 }} loading={isLoading} columns={columns} dataSource={data} scroll={{ y: 430 }} />
        </S.DivTable>
    </>
    )
}
