import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Board from "./Board/Board";

import produce from 'immer/dist/immer';

class App extends React.PureComponent {
    state =
    {
    family:{
        items: ['Adriana', 'Gemma', 'Laura', 'Esmeralda', 'Nancy'],
        index:0,
        input:'',
        erease:'',
        title:'Familia'
    },
    sports:{
        items: ['Fucho', 'Pinball', 'basquetbol', 'baseball', 'Natacion'],
        index:0,
        input: '',
        erease: '',
        title: 'deportes'
    },
    food:{
        items: ['Tlayudas', 'Tacos', 'Tortas Ahogadas', 'Hamburguesa', 'Flautas','Sopa aguada'],
        index:0,
        input: '',
        erease: '',
        title: 'Comidas'

    },
    beverage:{
        items: ['Tequila', 'Ron', 'Brandy', 'Mezcal'],
        index:0,
        input:'',
        erease: '',
        title: 'Bebidas'
    }
    }
    componentWillMount()
    {

    }
    onHandleButton = (object) => {
        const nextState = produce(this.state, (draft) => {
            if (draft[object].items.length > draft[object].index + 1){
                draft[object].index = draft[object].index + 1;
            } else  {
                draft[object].index = 0;
            }
    });
        this.setState(nextState);
    };


    onDeleteItem = (object)=>{
    const value = this.state[object].erease;
    console.log(value);
    const nextState = produce(this.state, (draft) => {
        draft[object].items.splice(value,1);
        draft[object].erease = '';
    });
    this.setState(nextState);

  };


  onAddButtonClick = (object) => {
    if (this.state[object].input == "") {
      return false;
    }
    const nextState = produce(this.state, (draft) => {
      draft[object].items = draft[object].items.concat(draft[object].input);
      draft[object].input = "";
    });
    console.log(this.state[object].input);
    this.setState(nextState);
  };

  onInputChange = (object,type,event) => {
    const value = event.target.value;
    const nextState = produce(this.state, (draft) => {
      draft[object][type] = value;
    });
    this.setState(nextState);
  };
  render (){
    const { family, sports, food, beverage} = this.state;
      return (
      <div>

        <div className={styles.main_title}>
            <p className={styles.title}>¡Bienvenidos al curso de programación de cómputo móvil!</p>
        </div>

        <div className={styles.add_board_container}>
        </div>

        <div className={styles.container_boards}>
            <Board object={family}
                input={family.input} items={family.items} index ={family.index} label={'Siguiente'}
                onButtonClick={() => this.onHandleButton("family")} onAddButtonClick={()=>this.onAddButtonClick("family")}
                onInputChange = {this.onInputChange} 
                onDeleteItem={()=>this.onDeleteItem("family")}
                erease={family.erease}
            />
        <p className={styles.result}>El nombre seleccionado es  &nbsp;<span className={styles.onlyname}>{family.items[family.index]}</span> y
            le gusta como deporte <span className={styles.onlyname}>{sports.items[sports.index]}</span> y
            le gusta comer <span className={styles.onlyname}>{food.items[food.index]}</span> y
            le gusta emborracharse con  <span className={styles.onlyname}>{beverage.items[beverage.index]}</span>
            </p>
        </div>
      </div>
      );
  }
}

export default App;
