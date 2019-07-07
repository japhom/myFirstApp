import * as React from 'react';
import styles from './Summary.module.scss';
import summaryHeaders from '../../resources/jsons/summaryHeaders.json';
import summaryData from '../../resources/jsons/summaryData.json';
import Table from './../../components/Table/Table';
import { IconTable, IconChart } from '../../resources/svg/Icons';
import produce from 'immer/dist/immer';

export default (class Summary extends React.PureComponent {
    state = {
        selected: {
            table: true,
            chart: false
        }
    };

    componentDidMount() { }

    onHandleIcon = (item) => {
        const nextState = produce(this.state, (draft) => {
            draft.selected.table = false;
            draft.selected.chart = false;
            draft.selected[item] = true;
        });
        this.setState(nextState);
    };

    render() {
        const headers = summaryHeaders;
        const data = summaryData;
        const {total} = this.state;
        const { selected } = this.state;
        return (
            <div className={styles.table_container}>
                <label>
                    El total es:{total}
                </label>

                <div className={styles.icons}>
                    <div className={styles.container_icon} onClick={() => this.onHandleIcon('table')}>
                        <IconTable className={selected.table ? styles.icon_selected : styles.icon} />
                    </div>
                    <div className={styles.container_icon} onClick={() => this.onHandleIcon('chart')}>
                        <IconChart className={selected.chart ? styles.icon_selected : styles.icon} />
                    </div>
                </div>
                { selected.table && (
                    <div>
                    { data.map((el,index)=>{
                        return <Table headers={headers} data = {el} key={index}></Table>
                    })}
                    </div>
                )
                }
                {
                    selected.chart && <div className={styles.chart}>Gráfica</div>
                }
            </div>
        );
    }
});
