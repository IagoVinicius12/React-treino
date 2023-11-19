import React, { useState , useEffect} from "react";
import Button from 'react-bootstrap/Button'
import Input from '@mui/material/Input';

const Criandodivs = (props) => {
    const [tasks,setTasks]=useState(props)
    useEffect(() => {
        setTasks(props);
        // renderTasks(); // Atualiza o estado local sempre que props.tasks mudar
    }, [props]); // Observa a mudança em props.tasks

    if (!props.tasks || !Array.isArray(props.tasks)) {
        return null; // Retorna null ou um componente de carregamento, dependendo do caso
    }
    const deleteid = async (taskId) => {
        try {
            const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Task deleted successfully');
                props.printtask()
                // Se a exclusão for bem-sucedida, pode ser que não precise fazer nada aqui,
                // já que useEffect atualizará automaticamente o estado e, consequentemente, o componente
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const renderTasks = () => {
        return props.tasks.map((task, index) => (
            <div key={index} style={{marginTop:"20px"}}>
                <Input
                    defaultValue=""
                    placeholder="Digite sua tarefa"
                    style={{ width: "400px", height: "40px" }}
                    value={task.description}
                />
                <Button
                    variant="contained"
                    style={{ backgroundColor: "green", marginLeft: "10px", height: "40px", width:"100px" }}
                    onClick={()=>{deleteid(task.id)
                    }}
                >
                    Completa?
                </Button>
            </div>
        ));
    };

    return (
        <div>
            {props.tasks.length >= 1 && renderTasks()}
        </div>
    );
};

export default Criandodivs;
