import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Board from "./Board/Board";

import produce from 'immer/dist/immer';

class App extends React.PureComponent {
  state ={
      family:{
      items: ['Adriana', 'Gemma', 'Laura', 'Esmeralda', 'Nancy'],
      index:0,
      input:''
    },
      sports:{
      items: ['Fucho', 'Pinball', 'basquetbol', 'baseball', 'Natacion'],
      index:0,
      input: ''
    },
    food:{
      items: ['Tlayudas', 'Tacos', 'Tortas Ahogadas', 'Hamburguesa', 'Flautas','Sopa aguada'],
      index:0,
      input: ''
    },
    beverage:{
      items: ['Tequila', 'Ron', 'Brandy', 'Mezcal'],
      index:0,
      input:''
    }
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
  onAddButtonClick = (object) => {
    const { input } = this.state[object].input;
    const nextState = produce(this.state, (draft) => {
      draft[object].items = draft[object].items.concat(input);
      
    });
    this.setState(nextState);
  };

  onInputChange = (event) => {
    const value = event.target.value;
    console.log('TCL: App -> onInputChange -> value', value);
    const nextState = produce(this.state, (draft) => {
      draft.input = value;
    });
    this.setState(nextState);
  };
    render (){
      const { family, sports, food, beverage} = this.state;
        return (
        <div>

          <p className={styles.title}>¡Bienvenidos al curso de programación de cómputo móvil!</p>
          
          
          
          
          <div className={styles.container_boards}>
            <Board input={family.input} items={family.items} index ={family.index} label={'Siguiente'} 
                onButtonClick={() => this.onHandleButton("family")} onAddButtonClick={()=>this.onAddButtonClick("family")} />

            <Board input={sports.input} items={sports.items} index ={sports.index} label={'Siguiente'} 
                onButtonClick={() => this.onHandleButton("sports")} onAddButtonClick={() => this.onAddButtonClick("sports")} />

            <Board input={food.input} items={food.items} index ={food.index} label={'Siguiente'} 
                onButtonClick={() => this.onHandleButton("comida")} onAddButtonClick={() => this.onAddButtonClick("food")}/>

            <Board input={beverage.input} items={beverage.items} index={beverage.index} label={'Siguiente'} 
                onButtonClick={() => this.onHandleButton("beverage")} onAddButtonClick={() => this.onAddButtonClick("beverage")}/>
           
            <p className={styles.result}>El nombre seleccionado es  &nbsp;<span className={styles.onlyname}>{family.items[family.index]}</span> y
              le gusta como deporte <span className={styles.onlyname}>{sports.items[sports.index]}</span> y
              le gusta comer <span className={styles.onlyname}>{food.items[food.index]}</span> y
              le gusta emborracharse con  <span className={styles.onlyname}>{beverage.items[food.index]}</span> 
              </p>
          </div>
        </div>
        );
  }
}

export default App;
