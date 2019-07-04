import * as React from 'react';
import styles from './List.module.scss';
import { IconXMark } from '../../resources/svg/Icons';
import Button from '../Button/Button';

class List extends React.Component {

    onClose = (index) => {
        const { onDeleteItem, boardKey} = this.props;
        onDeleteItem(boardKey,index);
    };
    componentDidMount(){};
    render(){
        const { items} =this.props;
        return (
            <div className={styles.main}>
                
                <ul className={styles.list}>
                    {items.map((item,i) => 
                        <li key={i} className ={styles.item} >
                            
                            <p className={styles.item_name}>
                                {item}
                            </p>

                            <Button className={styles.list_item_button} 
                                onClick={() => this.onClose(i)} 
                                icon={<IconXMark className={styles.icon_mark}/> } >
                            </Button>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
    
}
export default List;