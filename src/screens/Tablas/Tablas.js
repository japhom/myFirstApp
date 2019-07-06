import * as React from 'react';
import styles from './Tablas.module.scss';
import cashoutHeader from '../../resources/jsons/cashoutHeader.json';
import cashoutData from '../../resources/jsons/cashoutData.json';


export default (class Tablas extends React.PureComponent {
    state = {};

    componentDidMount() { }
    calculateFooter = (data, item) => {
        switch (item.footer) {
            case 'sum':
                return data.reduce((acc, row) => (acc += parseFloat(row[item.value])), 0);
            default:
                return item.footer;
        }
    };

    render() {
        const headers = cashoutHeader;
        const data = cashoutData[0].cashout;
        return (
            <div className={styles.table_container}> 
                <table className={styles.table} boder="0" cellSpacing="0">
                    <thead>
                        <tr>
                            {headers.map((element,i)=>{
                                return(
                                    <th key={i}>
                                        {element.name}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,i)=>{
                            return(
                                <tr key={i}>
                                    {headers.map((header,n)=>{
                                        return(
                                            <td key={n} className={styles[header.format]}> 
                                                <span>
                                                    {item[header.value] }
                                                </span>
                                            </td>
                                        );
                                    })

                                    }
                                </tr>
                            );
                        })

                        }
                    </tbody>
                    <tfoot>
                        <tr className={styles.footer_row}>
                            {headers.map((header, i) => {
                                return (
                                    <td className={styles[header.format]}>
                                        <span>
                                            {this.calculateFooter(data, header)}
                                        </span>
                                    </td>);
                            })}
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
});
