import React, { PureComponent } from 'react';
import styles from './Dates.module.scss';
import Button from'./../../components/Button/Button';
import Input from'./../../components/Input/Input';
import Calendario from './../../components/Calendar/Caldendar';
import Table from './../../components/Table/Table';
import produce from 'immer/dist/immer';
import Board from "./../../Board/Board";
import SimpleBarChart from './../Chart/Chart';

export default class Dates extends PureComponent {
    state = {
        data:{
            headers:[{name:"X",value:"name"},{name:"Y1",value:"y1"},{name:"Y2",value:"y2"}],
            rows:{summary:[]}
        },
        inputs:{
            one:"",
            two:"",
            three:""
        },
        boards:[
            {
                items: [],
                input: "",
                title: 'XAxis',
            },
            {
                items: [],
                input: "",
                title: 'Y1-Axis',
            },
            {
                items: [],
                input: "",
                title: 'Y2-Axis',
            }
        ]
    };
    onInputChange(event,wich){
        const value = event.target.value;
        const nextState = produce(this.state, (draft) => {
            switch (wich) {
                case "one":
                    draft.inputs.one = value;
                    break;
                case "two":
                    draft.inputs.two = value;
                    break;
                case "three":
                    draft.inputs.three = value;
                    break;
                default:
                    return false;
            }
        });
        this.setState(nextState);
        console.log(this.state.inputs);
    }
    onAddData = ()=>{
        const inputs = this.state.inputs;
        if ( inputs.one ==="" || inputs.two ==="" ||  inputs.three ==="") {
            return false;
        }
        const nextState = produce(this.state, (draft) => {
            let data = {name:this.state.inputs.one,y1:this.state.inputs.two,y2:this.state.inputs.three};
            draft.data.rows.summary = draft.data.rows.summary.concat(data);
            draft.boards[0].items = draft.boards[0].items.concat(this.state.inputs.one);
            draft.boards[1].items = draft.boards[1].items.concat(this.state.inputs.two);
            draft.boards[2].items = draft.boards[2].items.concat(this.state.inputs.three);
            draft.inputs.one = "";
            draft.inputs.two = "";
            draft.inputs.three = "";

        });
        this.setState(nextState);
        console.log(this.state.data.rows);
    }
    onDateChange = (date)=>{
        const nextState = produce(this.state, (draft) => {
            draft.inputs.one = date;
        });
        this.setState(nextState);
    }
    onDeleteItem = (boardKey,item) =>{
        console.log("borrando elemento");
    }
    render() {
        const boardFunctions = {
            onDeleteItem:this.onDeleteItem
        };
        
        return (
            <div className={styles.main_container}>
                <div className={styles.caption}>Graficas</div>
                <div className={styles.first_container}>

                    <div className={styles.inputs}>
                        <div>Mis Datos</div><br/><br/>
                        <Input onChange={()=>{}  }   input = {this.state.inputs.one}   label={"X"} />
                        <Input onChange={(event) => this.onInputChange(event, "two")}   input={this.state.inputs.two}   label={"Y1"} pattern={"[0-9]*"} />
                        <Input onChange={(event) => this.onInputChange(event, "three")} input={this.state.inputs.three} label={"Y2"} pattern={"[0-9]*"}/>
                        <Button onClick={this.onAddData} label={'Agregar'}/>

                    </div>
                    <div className={styles.calendar}>
                        <Calendario onDateChange={ this.onDateChange } />
                    </div>
                    <div className={styles.export_buttons}>
                        <Button onClick={()=>{}}   label={'PDF'}/>
                        <Button onClick={() => { }} label={"EXCEL"} />
                    </div>
                </div>
                <div className={styles.second_container}>
                    {
                        this.state.boards.map((board,index) =>(
                            <div key={index}>
                                <Board board={board} boardFunctions={boardFunctions} addItem={true} boardKey={index}  />
                            </div>
                        ))
                    }
                </div>
                <div className={styles.tercer_contenedor}>
                    <div>
                        <Table headers={this.state.data.headers} 
                            data={this.state.data.rows} caption={"Tabla de contenidos"} 
                        />
                    </div>
                    <div>
                        <SimpleBarChart newData={this.state.data.rows.summary} 
                            label={"name"} llaves={["y1", "y2"]} 
                            fill={["rgba(200,0,0,.3)", "rgba(0, 200, 0, .3)"]} 
                            alto={200} ancho={600} />
                    </div>
                </div>

            </div>

        );
    }
}
