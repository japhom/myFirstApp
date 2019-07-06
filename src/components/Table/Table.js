import * as React from 'react';
import styles from './Table.module.scss';



export default (class Summary extends React.PureComponent {
    state = { };

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
        const { headers, data } = this.props;
        return (
            <div className={styles.table_container}>
                <table className={styles.table} boder="0" cellSpacing="0">
                    <caption>{data.date} {data.name}</caption>
                    <thead>
                        <tr>
                            {headers.map((element, m) => {
                                return (
                                    <th key={m}>
                                        {element.name}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.summary.map((item, i) => {
                                item.quantity = (parseFloat(item["courtesies"]) + parseFloat(item["sold"]) + parseFloat(item["promos"]));
                                return (
                                    <tr key={i}>
                                        {
                                            headers.map((header, n) => {
                                                return (
                                                    <td key={n} className={styles[header.format]}>
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
                                    <td key={i} className={styles[header.format]}>
                                        <span>
                                            {this.calculateFooter(data.summary, header)}
                                        </span>
                                    </td>);
                            })}
                        </tr>
                    </tfoot>
                </table>

            );
                
            </div>
        );
    }
});
