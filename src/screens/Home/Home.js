import * as React from 'react';
import styles from './Home.module.scss';
import WebServices from '../../WebServices/WebServices';
import produce from 'immer/dist/immer';

export default (class Home extends React.PureComponent {
    state = {datos:{
        aliases:[]
    }};

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const character = '583';
            const response = await WebServices.getCharacter({
                character
            });
            console.log('TCL: Home -> fetchData -> response', response);
            const nextState = produce(this.state, (draft) => {
                draft.datos = response;
            });
            this.setState(nextState);
        } catch (e) {
            console.log('TCL: Home -> fetchData -> e', e);
        }
    };

    render() {
        const {datos} = this.state;
        return <div className={styles.main}>

            Nombre : {datos.name}<br/>
            Actor : {datos.playedBy}<br />
            Apodos:<ul>
                    {
                        datos.aliases.map((alias,i)=>{
                            return <li key={i}>{alias}</li>;
                        })
                    }        
                </ul> 
            </div>;
    }
});
