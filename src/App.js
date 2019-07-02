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
        erease:''
    },
    sports:{
        items: ['Fucho', 'Pinball', 'basquetbol', 'baseball', 'Natacion'],
        index:0,
        input: '',
        erease: ''
    },
    food:{
        items: ['Tlayudas', 'Tacos', 'Tortas Ahogadas', 'Hamburguesa', 'Flautas','Sopa aguada'],
        index:0,
        input: '',
        erease: ''
    },
    beverage:{
        items: ['Tequila', 'Ron', 'Brandy', 'Mezcal'],
        index:0,
        input:'',
        erease: ''
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

        <p className={styles.title}>¡Bienvenidos al curso de programación de cómputo móvil!</p>
        
        <div className={styles.container_boards}>
          <Board input={family.input} items={family.items} index ={family.index} label={'Siguiente'} 
              onButtonClick={() => this.onHandleButton("family")} onAddButtonClick={()=>this.onAddButtonClick("family")} 
              onInputChange = {this.onInputChange} object={"family"}
              onDeleteItem={()=>this.onDeleteItem("family")}
              erease={family.erease}
              />

          <Board input={sports.input} items={sports.items} index ={sports.index} label={'Siguiente'} 
              onButtonClick={() => this.onHandleButton("sports")} onAddButtonClick={() => this.onAddButtonClick("sports")} 
              onInputChange={this.onInputChange} object={"sports"}
              onDeleteItem={() => this.onDeleteItem("sports")}
              erease={sports.erease}
              />

          <Board input={food.input} items={food.items} index ={food.index} label={'Siguiente'} 
              onButtonClick={() => this.onHandleButton("food")} onAddButtonClick={() => this.onAddButtonClick("food")}
              onInputChange={this.onInputChange} object={"food"}
              onDeleteItem={() => this.onDeleteItem("food")}
              erease={food.erease}
              />

          <Board input={beverage.input} items={beverage.items} index={beverage.index} label={'Siguiente'} 
              onButtonClick={() => this.onHandleButton("beverage")} onAddButtonClick={() => this.onAddButtonClick("beverage")}
              onInputChange={this.onInputChange} object={"beverage"}
              onDeleteItem={() => this.onDeleteItem("beverage")}
              erease={beverage.erease}              
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
