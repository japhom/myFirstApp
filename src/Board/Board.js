import * as React from 'react';
import styles from './Board.module.scss';
import List from '../components/List/List';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import { IconPlusMark } from '../resources/svg/Icons';

class Board extends React.Component {
    deleteBoard = ()=>{
        const { boardFunctions, boardKey } = this.props;
        if (window.confirm("confirme el borrado del Tablero")){
            boardFunctions.fnDeleteBoard(boardKey);
        }
    }
    render() {
        const { board, boardFunctions, boardKey, addItem} = this.props;
        return (
            <div className={styles.main}>

                <div className={styles.board_name}>
                    <span className={styles.name_title}>
                        {board.title} 
                        <span className={styles.board_counter }>
                            ( {board.items.length} elementos)
                        </span>
                    </span>
                    <Button label={"X"} 
                        onClick={this.deleteBoard} 
                        className={styles.close_board_button}>
                    </Button>
                </div>
                {addItem === undefined ? (
                    <div className={styles.container_add}>
                        <Input tipo="text" input={board.input} onChange={(event)=>boardFunctions.onInputChange(event,boardKey)}></Input>
                        <Button label={''} onClick={()=>boardFunctions.onAddButtonClick(boardKey)} icon={<IconPlusMark className={styles.plus_icon}/>} />
                    </div>):''
                }
                <List items={board.items} index={board.index} board={board.name} onDeleteItem={boardFunctions.onDeleteItem} boardKey={boardKey}/>
                {/* <Button style={styles.button_green} label={"Siguiente"} onClick={onButtonClick}  /> */}
            </div>
        );
    }
}
export default Board;