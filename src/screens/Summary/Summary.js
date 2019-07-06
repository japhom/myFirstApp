import * as React from 'react';
import styles from './Summary.module.scss';
import cashoutHeader from '../../resources/jsons/summaryHeaders.json';
import cashoutData from '../../resources/jsons/summaryData.json';


export default (class Summary extends React.PureComponent {
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
        const data = cashoutData;
        return (
            <div className={styles.table_container}>
                {data.map((elemento,i)=>{
                    return(
                    <table className={styles.table} boder="0" cellSpacing="0">
                        <caption>{elemento.date} {elemento.name}</caption>
                        <thead>
                            <tr>
                                {headers.map((element, i) => {
                                    return (
                                        <th key={i}>
                                            {element.name}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {elemento.summary.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        {headers.map((header, i) => {
                                            return (
                                                <td className={styles[header.format]}>
                                                    <span>
                                                        {item[header.value]}
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
                                                {this.calculateFooter(elemento.summary, header)}
                                            </span>
                                        </td>);
                                })}
                            </tr>
                        </tfoot>
                    </table>
                    
                    );
                    })
                    }
            </div>
        );
    }
});
