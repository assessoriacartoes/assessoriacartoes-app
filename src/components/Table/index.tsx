import { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';
import * as S from './styles';
import { toast } from 'react-toastify';
import api from '../../service/api';
import { useHistory } from 'react-router-dom';

export type DataTable = {
    email: string
    senha: string
    powerBi: string
    id: number
}

export default function TableSimuled() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [trigger, setTrigger] = useState(0)
    console.log({ data })

    let history = useHistory();

    function Acess(id: number) {
        // history.push(`/acessar/${id}`)
        const win = window.open(`/acessar/${id}`, "_blank");
        if (win != null) {
            win.focus();
        }
    }

    const columns = [
        {
            title: 'Cliente',
            dataIndex: 'img',
            key: 'img',
            render: (img: string) => (<img style={{ width: '100px' }} src={"data:image/png;base64," + img} alt="logo" />
            )
        },
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
            title: '',
            dataIndex: 'id',
            key: 'id',
            width: '20%',
            render: (id: number) => (
                <a target="_blank" rel="noopener noreferrer" href="">
                    <Button
                        onClick={() => Acess(id)}
                        type="primary"
                    >Acessar
                    </Button>
                </a>
            )
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
                window.location.reload()
                toast.success('Cliente Deletado com sucesso')
            })
            .catch(function (error) {
                setIsLoading(false)
                window.location.reload()
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

    // < img src = { "data:image/png;base64," + currentUser?.img } alt = "logo" />

    return (<>
        <S.Tools>
        </S.Tools>
        <S.DivTable>
            <Table pagination={{ pageSize: 20 }} loading={isLoading} columns={columns} dataSource={data} scroll={{ y: 430 }} />
        </S.DivTable>
    </>
    )
}
