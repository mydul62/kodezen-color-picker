import { CiSearch } from "react-icons/ci";
import { RxDragHandleDots2 } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { PiPencilThin } from "react-icons/pi";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoColorPaletteOutline } from "react-icons/io5";
import React, { useState } from "react";
import icongeneral from "../../../public/iconGenerel.svg";
import icondesign from "../../../public/iconDesign.svg";
import iconint from "../../../public/iconIntegration.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Design.css";
import AddItemDrower from "../Drower/AddItemDrower";
import EditItemDrower from "../Drower/EditItemDrower";
import ItemCart from "../ItemCart/ItemCart";

const DesignSystem = () => {
  const [colors, setColors] = useState([
    { id: "1", name: "Black", value: "#000000" },
    { id: "2", name: "Color 100", value: "#FFFFFF" },
    { id: "3", name: "Primary", value: "#1568ED" },
    { id: "4", name: "Secondary", value: "#ED1976" },
  ]);

  const [editDrawer, setEditDrawer] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [itemId, setItemId] = useState();
  const [selectedColorName, setSelectedColorName] = useState();
  const [newColorValue, setNewColorValue] = useState();
  const [selectedColors, setSelectedColors] = useState([]); 
  const [colorGroups, setColorGroups] = useState([]);
  const handleCheckboxChange = (id) => {
    if (selectedColors.includes(id)) {
      setSelectedColors(selectedColors.filter((colorId) => colorId !== id));
    } else {
      setSelectedColors([...selectedColors, id]);
    }
  };
  const handleCreateGroup = () => {
    const groupedColors = colors.filter((color) => selectedColors.includes(color.id));
    setColorGroups([...colorGroups, groupedColors]);
    setSelectedColors([]); 
  };
  const handleDelete = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  const handleDuplicate = (id) => {
    const colorToDuplicate = colors.find((color) => color.id === id);
    setColors([
      ...colors,
      {
        ...colorToDuplicate,
        id: (colors.length + 1).toString(),
        name: `${colorToDuplicate.name}`,
      },
    ]);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedColors = Array.from(colors);
    const [removed] = reorderedColors.splice(result.source.index, 1);
    reorderedColors.splice(result.destination.index, 0, removed);

    setColors(reorderedColors);
  };

  const handleSetDrower = () => {
    setDrawer(false);
  };

  const handleSetEditDrower = () => {
    setEditDrawer(false);
  };
  return (
    <div className="kzui-settings">
      <div className="kzui-sidebar">
        <div className="">
        Menu
        </div>
        <div className="kzui-menu-item">
        <img src={icongeneral} alt="" />
        General</div>
        <div className="kzui-menu-item kzui-menu-item--selected">
        <img src={icondesign} alt="" />
          Design System
        </div>
        <div className="kzui-menu-item">
        <img src={iconint} alt="" />
        Integration</div>
      </div>

      <div style={{ position: "relative" }} className="kzui-content">
        <div className="kzui-Title">
          <h2>Design System</h2>
        </div>
        <div>
          <div className="kzui-tabs-search">
            <div className="kzui-tabs">
              <button className="kzui-tab kzui-tab--active">Color</button>
              <button className="kzui-tab">Typography</button>
              <button className="kzui-tab">Shadow</button>
            </div>
            <div className="kzui-search">
              <CiSearch />
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="kzui-List-title-box">
          <div className="kzui-color-item">
            <p className="">Colors</p>
            <p>Value</p>
            <div></div>
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="colors">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="kzui-color-list">
                {colors.map((color, index) => (
                  <Draggable key={color.id} draggableId={color.id} index={index}>
                    {(provided) => (
                      <div
                        className="kzui-item-continer"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <div
                          className="kzui-drag_icon"
                          {...provided.dragHandleProps}
                        >
                          <RxDragHandleDots2 />
                        </div>

                        <div className="kzui-color-item-box">
                          <div className="kzui-color-item">
                            <div className="kzui-color-title">
                              <span className="kzui-color-plet">
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
                              <button className="kzui-three-dots">
                                <BsThreeDots size={14} />
                              </button>
                              <div className={`kzui-dropdown`}>
                                <button
                                  onClick={() => {
                                    setEditDrawer(true);
                                    setItemId(color.id);
                                    setNewColorValue(color.value);
                                    setSelectedColorName(color.name);
                                  }}
                                >
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
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button onClick={() => setDrawer(true)} className="kzui-add-color">
          + Add Color
        </button>
        {/* ------------------------- */}
        <div className="kzui-color-groups">
          {colorGroups.map((group, index) => (
            <div key={index} className="kzui-color-group">
             <div className="kzui-grupe-title">
             <h3>New Group</h3>
             <div className="kzui-color-grupe-edit">
                  <button 
                    className="kzui-group-dots "
                  >
                    <BsThreeDots size={14} />
                  </button>
                  <div className={`kzui-dropdown`}>
                    <button
                    // onClick={()=>{
                    // setEditDrawer(true)
                    // setItemId(color.id)
                    // setNewColorValue(color.value)
                    // console.log(color.value)
                    // setSelectedColorName(color.name)
                    
                    // console.log(color.name)
                    // }}
                    >
                      <PiPencilThin /> <span>Rename</span>
                    </button>
                    <button
                    // onClick={() => handleDuplicate(color.id)}
                    >
                      <HiOutlineDuplicate size={14} /> <span>Duplicate</span>
                    </button>
                    <button
                    // onClick={() => handleDelete(color.id)}
                    >
                      <RiDeleteBin6Line size={14} />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
             </div>
              {group.map((color) => (
                <div key={color.id} className="kzui-item-continer" >                 
                 <div className="kzui-color-item-box">
                   
                   <div className="kzui-color-item">
                   <div className="kzui-color-title">
                     
                     <span className="kzui-color-plet"><IoColorPaletteOutline />
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
              ))}
            </div>
          ))}
        </div>

        <AddItemDrower drawer={drawer} handleSetDrower={() => setDrawer(false)} colors={colors} setColors={setColors} />
        <EditItemDrower
          drawer={editDrawer}
          handleSetDrower={() => setEditDrawer(false)}
          colors={colors}
          setColors={setColors}
          itemId={itemId}
          newColorValue={newColorValue}
          setNewColorValue={setNewColorValue}
          selectedColorName={selectedColorName}
          setSelectedColorName={setSelectedColorName}
        />
        {/* ------------------------------ */}
        <AddItemDrower drawer={drawer} handleSetDrower={handleSetDrower} colors={colors} setColors={setColors}></AddItemDrower>
        <EditItemDrower drawer={editDrawer} handleSetDrower={handleSetEditDrower} colors={colors} setColors={setColors} itemId={itemId} setNewColorValue={setNewColorValue} newColorValue={newColorValue} setSelectedColorName={setSelectedColorName} selectedColorName={selectedColorName} ></EditItemDrower>
        <ItemCart count={selectedColors.length} setSelectedColors={setSelectedColors} handleCreateGroup={handleCreateGroup}  ></ItemCart>
      </div>
    </div>
  );
};

export default DesignSystem;
