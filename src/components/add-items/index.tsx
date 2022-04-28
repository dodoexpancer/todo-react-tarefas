import * as V from './styles'
import {KeyboardEvent, useState} from "react";

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('');
    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }
    return (
        <V.Container>
            <div className='image'>➕</div>
            <input
                type={"text"}
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder={"Adicone uma Tarefa"}
                onKeyUp={handleKeyUp}
            />
        </V.Container>
    )


}
