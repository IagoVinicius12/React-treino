import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Input from '@mui/material/Input';
import Criandodivs from './Criandodivs';

const Adicionar = () => {
    const [tarefa, setTarefa] = useState('');
    const [tasks,setTasks]=useState()
    const printtask = async () => {
        try {
            const resposta = await fetch('http://localhost:5000/tasks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (resposta.ok) {
                // Tarefa adicionada com sucesso
                const tasksdata = await resposta.json();
                setTasks(tasksdata)
                console.log(tasksdata) // Extrai o conteúdo JSON da resposta
                // Mostra as tarefas no console
                // Atualizar o estado ou fazer outra ação, se necessário
            } else {
                // Lida com erros de requisição
                console.error('Failed to add task');
            }
        } catch (error) {
            // Lida com erros durante a requisição
            console.error('Error:', error);
        }
    };
    const addTask = async (taskData) => {
        try {
            const response = await fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(taskData),
            });

            if (response.ok) {
                // Tarefa adicionada com sucesso
                console.log('Task added successfully');
                // Atualizar o estado ou fazer outra ação, se necessário
            } else {
                // Lida com erros de requisição
                console.error('Failed to add task');
            }
        } catch (error) {
            // Lida com erros durante a requisição
            console.error('Error:', error);
        }
    };

    const handleSubmit = () => {
        // Chama a função addTask passando os dados da nova tarefa
        addTask({ description: tarefa, completed: false });
        // Limpa o campo após adicionar a tarefa
        setTarefa('');
    };
    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", backgroundColor: "black" }}>
            <div style={{ width: "600px", height: "100%", justifyContent: "center", backgroundColor: "grey", display: "block", paddingTop: "60px" }}>
                <div style={{display:"block"}}>
                    <Input defaultValue="" placeholder="Digite sua tarefa" style={{ width: "400px", height: "40px" }} value={tarefa} onChange={(e) => setTarefa(e.target.value)} />
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "blue", marginLeft: "10px", height: "40px" ,width:"100px"}}
                        onClick={(e) => {
                            handleSubmit();
                            printtask();
                        }} >
                        Adicionar
                    </Button>
                </div>
                <div style={{display:"block", marginTop:"40px"}}>
                    <Criandodivs tasks={tasks} printtask={printtask}></Criandodivs>
                </div>
            </div>
        </div>
    )
}
export default Adicionar
