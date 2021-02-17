import React, { Component } from 'react' 
import Forms from './Forms';
import { RiCloseCircleLine } from 'react-icons/ri';
import SimplePopover from './Pop';
import './View.css'

 class Eventadd extends Component {

state={
    list:[]
};
addHandler=(text)=>{
    console.log("text",text);
    const arrCopy=[...this.state.list]
    arrCopy.push({id:Math.round(Math.random()*1000),name:text})
    this.setState({list:arrCopy})
}
removeHandler=(text)=>{
    console.log("text",text);
    const arrCopy=[...this.state.list]
    const filter =arrCopy.filter((a)=>a.id !==text)
    this.setState({list:filter})

}
updateHandler=(text)=>{
    console.log(text);
    const arrCopy = [...this.state.list]
     arrCopy.forEach((e)=>{
        if(e.id === text.id){
         e.name=text.name
        }
     })
     console.log(arrCopy);
     this.setState({list:arrCopy})
    }

    render() {
        const items =this.state.list.map((a)=>{
            return (<div className='list' key={a.id}>
                {a.name}
                <RiCloseCircleLine  className ="button" onClick={() => {this.removeHandler(a.id)}} />
                <SimplePopover id={a.id} name={a.name} update={this.updateHandler}/>

        </div>)
        })
        return (
            <div >
             <Forms addItem={this.addHandler}/>
            {items}
             
            </div>
        )
    }
}
export default Eventadd;