import * as React from 'react';
import styles from './Board.module.scss';
import List from '../components/List/List';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import { IconPlusMark } from '../resources/svg/Icons';
import { NONAME } from 'dns';


class Board extends React.Component {
    deleteBoard(){
        const { BoardFunctions, boardKey } = this.props;
        BoardFunctions.fnDeleteBoard(boardKey);
    }

    render() {
        const { board, BoardFunctions, boardKey} = this.props;
        return (
            <div className={styles.main}>

                <div className={styles.board_name}>
                    <span className={styles.name_title}>
                        {board.title} 
                        <span className={styles.board_counter }>
                            ( {board.items.length} elementos)
                        </span>
                    </span>
                    <Button label={"X"} onClick={this.deleteBoard} className={styles.close_board_button}/>
                </div>
                <div className={styles.container_add}>
                    <Input tipo="text" input={board.input} onChange={BoardFunctions.onInputChange} boardKey={boardKey}></Input>
                    <Button label={''} onClick={()=>BoardFunctions.onAddButtonClick(boardKey)} icon={<IconPlusMark className={styles.plus_icon}/>} />
                </div>
                <List items={board.items} index={board.index} board={board.name} onDeleteItem={BoardFunctions.onDeleteItem} boardKey={boardKey}/>
                {/* <Button style={styles.button_green} label={"Siguiente"} onClick={onButtonClick}  /> */}
            </div>
        );
    }
}
export default Board;