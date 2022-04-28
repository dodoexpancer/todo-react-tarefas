import * as C from './app.style';
import {useState} from 'react';
import {Item} from './types/Item';
import {ListItem} from './components/list-items'
import {AddArea} from "./components/add-items";

const App = () => {
    const [list, setList] = useState<Item[]>([])
    const handleAddTask = (taskName: string) => {
        let newList = [...list];
        newList.push({
            id: list.length + 1,
            name: taskName,
            concluido: false
        });
        setList(newList);
    }

    return (
        <C.Container>
            <C.Area>
                <C.Header>Lista de Tarefas</C.Header>
                {<AddArea onEnter={handleAddTask}/>
                }
                {list.map((item, index) => (
                    <ListItem key={index} item={item}/>
                ))}


            </C.Area>
        </C.Container>
    );
}

export default App;