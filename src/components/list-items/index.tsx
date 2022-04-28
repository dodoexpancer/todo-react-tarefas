import * as D from './styles'
import {Item} from "../../types/Item";
import {useState} from "react";

type Props = {
    item: Item;
}

export const ListItem = ({item}: Props) => {
    const [isChecked, setchecked] = useState(item.concluido)
    return (
        <D.Container done={isChecked}>
            <input onChange={e => setchecked(e.target.checked)}
                   checked={isChecked}
                   type='checkbox'/>
            <label>{item.name}</label>
        </D.Container>
    )
}