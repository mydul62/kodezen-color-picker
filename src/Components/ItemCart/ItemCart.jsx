import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TbFolderPlus } from "react-icons/tb";

const ItemCart = ({count,handleCreateGroup,setSelectedColors}) => {

  return (
    <div className={` kzui-cart ${count ? "showdrower" : "hidedrower"} `}>
    <div className="kzui-cart-left">
    <span  onClick={()=>setSelectedColors([])} ><RxCross2 /></span>
    <div className="kzui-item-selected"><p className="kzui-item-count">{count}</p> <p>Item selected</p> </div>
    </div>
     <div onClick={()=>handleCreateGroup()} className="kzui-group-add"><TbFolderPlus /><span>Group</span></div>
     </div>
  );
};

export default ItemCart;