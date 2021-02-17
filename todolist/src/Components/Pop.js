import React,{useState} from 'react';
import Popover from '@material-ui/core/Popover';
import { RiEdit2Fill } from 'react-icons/ri'


export default function SimplePopover(props) {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
 const [Update,setUpdate]=useState({id:props.id,name:props.name});

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
const hello =( <div>
<RiEdit2Fill className="pop" aria-describedby={id} variant="contained" color="primary" onClick={handleClick}/>
        

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <input className='input' type="text" onChange={(e)=> setUpdate({id:props.id,name:e.target.value})}></input>
        <button  classsName='update' onClick={()=>props.update(Update)}> update </button>
      </Popover>
</div>);
  return (
    <div>
      {hello}
     
    </div>
  );
}
