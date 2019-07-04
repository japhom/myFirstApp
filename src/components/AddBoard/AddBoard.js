import * as React from 'react';
import styles from './AddBoard.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { IconPlusMark } from '../../resources/svg/Icons';

export default class AddBoard extends React.Component {
    componentDidMount(){};
    render() {
        const { onInputChange, addNewBoard, inputValue  } = this.props;
        return (
            <div className={styles.add_board_container}>
                <Input tipo="text" 
                    onChange={onInputChange}
                    value={inputValue}
                />
                <Button label={"Agregar Tablero "} className={styles.addBoard_button}
                    onClick={addNewBoard}
                    icon={<IconPlusMark className={styles.plus_icon} />}    
                />
            </div>
        );
    }
}