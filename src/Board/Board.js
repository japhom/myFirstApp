import * as React from 'react';
import styles from './Board.module.scss';
import List from '../components/List/List';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';



class Board extends React.Component {
    state = {};

    componentDidMount() { };
    render() {
        const { items, index, label, onButtonClick ,input,object,erease,
            onAddButtonClick, onInputChange, onDeleteItem
        } = this.props;
        return (
            <div className={styles.main}>
                <div className={styles.container_add}>
                    <Input tipo="text" input={input} onChange={onInputChange} object={object} type={"input"}></Input>
                    <Button label={'Agregar'} onClick={onAddButtonClick} />
                </div>


                <List items={items} index={index} />
                <Button style={styles.button_green} label={label} onClick={onButtonClick} />

                <div className={styles.container_add}>
                    <Input tipo="number" input={erease} onChange={onInputChange} object={object} type={"erease"} ></Input>
                    <Button label={'-'} onClick={onDeleteItem} />
                </div>
            </div>
        );
    }
}
export default Board;