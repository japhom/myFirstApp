import * as React from 'react';
import styles from './Board.module.scss';
import List from '../components/List/List';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';



class Board extends React.Component {
    state = {};
    componentDidMount() { };
    render() {
        const { items, index, label, onButtonClick ,input,onAddButtonClick } = this.props;
        return (
            <div className={styles.main}>
                <div className={styles.container_add}>
                    <Input value={input}></Input>
                    <Button label={'Agregar'} onClick={onAddButtonClick} />
                </div>


                <List items={items} index={index} />
                <Button style={styles.button_green} label={label} onClick={onButtonClick} />
            </div>
        );
    }
}
export default Board;