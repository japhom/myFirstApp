import React from 'react';
import styles from './App.module.scss';
import Board from "./Board/Board";
import AddBoard from './components/AddBoard/AddBoard';

import produce from 'immer/dist/immer';

class App extends React.PureComponent { 
    state = {
        "boards":[
            {
                items:['Adriana','Gema','Rosario','Martha'],
                input:{add:"",remove:""},
                index:0,
                title:'Familia',
                idBoard:0

            }
        ]
    }
    componentWillMount(){
        fetch('http://localhost:9090/api/boards')
        .then((response)=>{
            return response.json();
        }).then((boards)=>{
            const nextState = produce(this.state,(draft)=>{
                draft.boards = boards;
            });
            this.nextState(nextState);
        })
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

    onDeleteItem = (board,index)=>{
        const nextState = produce(this.state, (draft) => {
        draft[board].items.splice(index,1);
        });
        this.setState(nextState);
    };


    fnDeleteBoard(board) {
        const nextState = produce(this.state, (draft) => {
        delete draft[board];
        });
        this.setState(nextState);
    }

    onAddButtonClick = (object) => {
        if (this.state[object].input == "") {
            return false;
        }
        const nextState = produce(this.state, (draft) => {
            draft[object].items = draft[object].items.concat(draft[object].input);
            draft[object].input = "";
        });
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
        const BoardFunctions = {
            onInputChange:this.onInputChange,
            onButtonClick:this.onHandleButton,
            onAddButtonClick: this.onAddButtonClick,
            onDeleteItem : this.onDeleteItem,
            fnDeleteBoard : this.fnDeleteBoard
        };

        return (
            <div className={styles.main_container}>

                <p className={styles.title}>¡Bienvenidos al curso de programación de cómputo móvil!</p>
                
                <div className={styles.second_title}>
                    <span>Mis tableros</span>
                    <span>Total de Tableros: {this.state.boards.length}</span>

                </div>  
                <div className={styles.add_board_container}>
                    <AddBoard /> 
                </div>
                <div className={styles.container_boards}>
                    {this.state.boards.map((board, i)=>
                    <Board board ={ board } BoardFunctions = {BoardFunctions} key={i}  />
                )}
                
                </div>
                
                <div className={styles.result_container}>
                Resultados:...  
                </div>
            </div>    
        );
    }
}

export default App;
