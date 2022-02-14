import { SetStateAction, useEffect, useState } from 'react';
import { Button, Space, Table, Input } from 'antd';
import 'antd/dist/antd.css';
import * as S from './styles';
import { toast } from 'react-toastify';
import api from '../../service/api';
import { useHistory } from 'react-router-dom';


export default function TableSimuled() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [trigger, setTrigger] = useState(0)
    const [nome, setParams] = useState("")
    const { Search } = Input;

    let history = useHistory();

    function Acess(id) {
        // history.push(`/acessar/${id}`)
        const win = window.open(`/acessar/${id}`, "_blank");
            win.focus();
    }

    const columns = [
        {
            title: 'Cliente',
            dataIndex: 'img',
            key: 'img',
            width: 150,
            render: (img) => (<img style={{ width: '100px' }} src={"data:image/png;base64," + img} alt="logo" />
            )
        },
        {
            title: 'Nome Do Grupo',
            dataIndex: 'nomeDoGrupo',
            key: 'nomeDoGrupo',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 300,
        },
        {
            title: 'Senha',
            dataIndex: 'password',
            key: 'password',
            width: 100,
        },
        {
            title: '',
            dataIndex: 'id',
            key: 'id',
            width: '20%',
            render: (id) => (
                <>
                        <Button
                            onClick={() => Acess(id)}
                            type="primary"
                            style={{ margin: "2px", borderRadius: "4px" }}
                        >Acessar
                        </Button>
                    <Button
                        onClick={() => DeleteSimulated(id)}
                        type="primary"
                        style={{ margin: "2px", borderRadius: "4px" }}
                        danger
                    >Deletar
                    </Button>
                </>
            )
        },

    ];

    async function DeleteSimulated(id) {
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
                    console.log({ response })
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

    useEffect(() => {
        async function getSimulateds() {
            await api.get(`api/cliente/filter`, {
                params: { filter: nome }
            }).then(function (response) {
                console.log("params", response)
                setData(response.data);
                setIsLoading(false)
            })
                .catch(function (error) {
                    setIsLoading(false)
                });
        }
        getSimulateds()
    }, [nome])


    function onSearchEnter(e: any) {
        console.log("teste")
        e.preventDefault();
        setIsLoading(true)
        setParams(e.target.value)
    }

    const onSearch = (value) => { setParams(value) };

    return (<>
        <S.Tools />
        <S.DivTable>
            <S.Tools>
                <S.SearchContainer>
                    <Space direction="vertical">
                        <Search placeholder="Pesquisar" onPressEnter={e => onSearchEnter(e)} onSearch={onSearch} enterButton />
                    </Space>
                </S.SearchContainer>
            </S.Tools>
            <Table pagination={{ pageSize: 20 }} loading={isLoading} columns={columns} dataSource={data} scroll={{ y: 430 }} />
        </S.DivTable>
    </>
    )
}
