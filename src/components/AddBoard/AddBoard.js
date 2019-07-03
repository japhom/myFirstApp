import * as React from 'react';
import styles from './AddBoard.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { IconPlusMark } from '../../resources/svg/Icons';

export default class AddBoard extends React.Component {
    onAddButtonClick() {
        console.log("nada");
    }
    componentDidMount(){};
    render() {
        return (
            <div className={styles.add_board_container}>
                <Input tipo="text" />
                <Button label={"Agregar Tablero "} className={styles.addBoard_button}
                    onClick={this.onAddButtonClick}
                    icon={<IconPlusMark className={styles.plus_icon} />}    
                />
            </div>
        );
    }
}