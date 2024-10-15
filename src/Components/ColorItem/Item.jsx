
const Item = () => {
  return (
    <div key={color.id} className="kzui-item-continer" >
    <div className="kzui-drag_icon"><RxDragHandleDots2  /></div>
     
     <div className="kzui-color-item-box">
       
       <div className="kzui-color-item">
       <div className="kzui-color-title">
         
         <span className="kzui-color-plet"><IoColorPaletteOutline />
         <input
                 type="checkbox"
                 value={color.id}
                 onChange={() => handleCheckboxChange(color.id)}
                 checked={selectedColors.includes(color.id)}
               />
         </span>
         <span className="kzui-color-name">{color.name}</span>
       </div>                      
         <div className="kzui-color-input">
           <div
             style={{
               backgroundColor: color.value,
             }}
             className="kzui-color-box"
           ></div>
           <input
             type="text"
             value={color.value}
             readOnly
             className="kzui-color-code"
           />
         </div>
         <div className="kzui-color-actions">
           <button 
             onClick={() => setShow(true)}
             className="kzui-three-dots"
           >
             <BsThreeDots size={14} />
           </button>
           <div className={`kzui-dropdown`}>
             <button onClick={()=>{
             setEditDrawer(true)
             setItemId(color.id)
             setNewColorValue(color.value)
             console.log(color.value)
             setSelectedColorName(color.name)
             
             console.log(color.name)
             }}>
               <PiPencilThin /> <span>Edit</span>
             </button>
             <button onClick={() => handleDuplicate(color.id)}>
               <HiOutlineDuplicate size={14} /> <span>Duplicate</span>
             </button>
             <button onClick={() => handleDelete(color.id)}>
               <RiDeleteBin6Line size={14} />
               <span>Delete</span>
             </button>
           </div>
         </div>
       </div>
     </div>
    </div>
  );
};

export default Item;