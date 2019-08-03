import * as React from 'react';
import styles from './Home.module.scss';
import WebServices from '../../WebServices/WebServices';
import produce from 'immer/dist/immer';
import City from './City';
export default (class Home extends React.PureComponent {
    state = {datos:{
        aliases:[]
    },
    city:{main:{}}
    };

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
    getCityInfo = async (cityId) =>{
        try {
            const response = await WebServices.getWheater({
                cityId
            });
            console.log('TCL: Home -> fetchData -> response', response);
            const nextState = produce(this.state, (draft) => {
                draft.city = response;
            });
            this.setState(nextState);
        } catch (e) {
            console.log('TCL: Home -> fetchData -> e', e);
        }
        
    }
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
                <ul>
                    <li onClick={()=> this.getCityInfo(3522509)}>Oaxaca </li>
                    <li onClick={()=>this.getCityInfo(3981609)}>Tijuana </li>
                    <li onClick={()=>this.getCityInfo(3632308)}>Merida </li>
                    <li onClick={()=>this.getCityInfo(3985604)}>San Luis Rio Colorado </li>
                    <li onClick={()=>this.getCityInfo(3532617)}>Atlacomulco Estado de Mexico </li>
                </ul>
                <City data={this.state.city}  />
            </div>;
    }
});
