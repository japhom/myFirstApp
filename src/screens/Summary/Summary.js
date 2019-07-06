import * as React from 'react';
import styles from './Summary.module.scss';
import summaryHeaders from '../../resources/jsons/summaryHeaders.json';
import summaryData from '../../resources/jsons/summaryData.json';
import Table from './../../components/Table/Table';


export default (class Summary extends React.PureComponent {
    state = {total:0};

    componentDidMount() { }

    render() {
        const headers = summaryHeaders;
        const data = summaryData;
        const {total} = this.state;
        return (
            <div className={styles.table_container}>
                <label>
                    El total es:{total}
                </label>
                <div>
                { data.map((el,index)=>{
                    return <Table headers={headers} data = {el} ></Table>
                })}
                </div>
                
            </div>
        );
    }
});
