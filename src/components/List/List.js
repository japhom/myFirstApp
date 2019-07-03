import * as React from 'react';
import styles from './List.module.scss';
import { IconXMark } from '../../resources/svg/Icons';


class List extends React.Component {

    onClose = (index) => {
        const { onDeleteItem ,board} = this.props;
        onDeleteItem(board,index);
    };
    componentDidMount(){};
    render(){
        const { items,index} =this.props;
        return (
            <div className={styles.main}>
                
                <ul className={styles.list}>
                    {items.map((item,i) => 
                        <li key={i}className={index == i ? styles.item_selected:styles.item} >
                            <p className={styles.item_name}>
                                {item}
                            </p>
                            <p className={styles.item_svg} onClick={() => this.onClose(i)}>
                                <IconXMark className={styles.icon_mark}/>
                            </p>
                        </li>)}
                </ul>
            </div>
        );
    }
    
}
export default List;