import * as React from 'react';
import styles from './Board.module.scss';
import List from '../components/List/List';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import {IconAddMark} from '../resources/svg/Icons';


class Board extends React.Component {
    state = {};

    componentDidMount() { };
    render() {
        const { items, index, label, onButtonClick ,input,object,erease,title,
            onAddButtonClick, onInputChange, onDeleteItem
        } = this.props;
        return (
            <div className={styles.main}>
                <div className={styles.titulo}>
                    {object.title}
                </div>
                <div className={styles.container_add}>
                    <Input tipo="text" input={input} onChange={onInputChange} object={object} type={"input"}></Input>
                    <Button label={''} onClick={onAddButtonClick} 
                        icon={<IconAddMark className={styles.icon} /> }  
                    />
                </div>

                <List items={items} index={index} onDeleteItem={onDeleteItem}/>
                
            </div>
        );
    }
}
export default Board;