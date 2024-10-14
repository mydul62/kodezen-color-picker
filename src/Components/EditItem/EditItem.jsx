import { CiSearch } from "react-icons/ci";
import { RxDragHandleDots2 } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { PiPencilThin } from "react-icons/pi";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HexColorPicker } from "react-colorful";
import React, { useState } from "react";
// import { arrayMoveImmutable } from "array-move";
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd"
import "./Design.css"
const DesignSystem = () => {
  const [show, setShow] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [editDrawer, setEditDrawer] = useState(true);
  const [color, setColor] = useState("#aabbcc");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColorName, setSelectedColorName] = useState("Black"); // New state for selected color name
  const [newColorValue, setNewColorValue] = useState(color); // New state for new color value

  const [colors, setColors] = useState([
    { id: 1, name: "Black", value: "#000000" },
    { id: 2, name: "Color 100", value: "#FFFFFF" },
    { id: 3, name: "Primary", value: "#1568ED" },
    { id: 4, name: "Secondary", value: "#ED1976" }
  ]);

  const handleDelete = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  const handleDuplicate = (id) => {
    const colorToDuplicate = colors.find((color) => color.id === id);
    setColors([
      ...colors,
      {
        ...colorToDuplicate,
        id: colors.length + 1,
        name: `${colorToDuplicate.name}`,
      },
    ]);
  };

  const handleSaveNewColor = () => {
    const newColor = {
      id: colors.length + 1,
      name: selectedColorName,
      value: newColorValue,
    };
    setColors([...colors, newColor]);
    setDrawer(false); // Close the drawer after saving
    setNewColorValue(color); // Reset the new color value
    setSelectedColorName("Black"); // Reset the selected color name
  };
  
  //  const handleSetDrower=()=>{
  //    setDrawer(!drawer)
  //  }
  return (
    <div className="kzui-settings">
      <div className="kzui-sidebar">
        <div className="">
        Menu
        </div>
        <div className="kzui-menu-item">General</div>
        <div className="kzui-menu-item kzui-menu-item--selected">
          Design System
        </div>
        <div className="kzui-menu-item">Integration</div>
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
          <div className="kzui-List-title">
            <p>Colors</p>
            <p>Value</p>
          </div>
        </div>
    <DragDropContext  onDragEnd={()=>{
     console.log("drag drop event")
    }}>
        <Draggable droppableId="ROOT" type="group" className="kzui-color-list">
          {(provided) => (
           <div>
             {colors.map((color) => (
            <div key={color.id} className="kzui-color-item-box">
              <div>
                <RxDragHandleDots2 />
              </div>
              <div className="kzui-color-item">
                <span className="kzui-color-name">{color.name}</span>
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
                    <button onClick={()=>setEditDrawer(true)}>
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
          ))}
           </div>
          )}
        </Draggable>
        </DragDropContext>
        <button onClick={() => setDrawer(true)} className="kzui-add-color">
          + Add Color
        </button>
        <div className={`kzui-add-colors ${drawer ? "showdrower" : "hidedrower"}`}>
        {/* <EditItem drawer={editDrawer} handleSetDrower={handleSetDrower} ></EditItem> */}
          <div>
            <h6 className="kzui-color-name-title">Name</h6>
            <select
              className="kzui-color-name-selectbox"
              value={selectedColorName}
              onChange={(e) => setSelectedColorName(e.target.value)}
            >
              <option value="Black">Black</option>
              <option value="Color 100">Color 100</option>
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Title Text">Title Text</option>
              <option value="Supporting Text">Supporting Text</option>
            </select>
            <div className="kzui-color-code">
              <h6 className="kzui-color-name-title">Value</h6>
            </div>
            <div className="kzui-color-code">
              <p>Color</p>
              <div
                onMouseOut={() => setShowColorPicker(false)}
                onMouseOver={() => setShowColorPicker(true)}
                className="kzui-color-input"
              >
                <div
                  style={{
                    backgroundColor: newColorValue,
                  }}
                  className="kzui-color-box"
                >
                  {showColorPicker && (
                    <HexColorPicker
                      style={{ marginTop: "25px" }}
                      color={newColorValue}
                      onChange={setNewColorValue}
                    />
                  )}
                </div>
                <input
                  type="text"
                  readOnly
                  value={newColorValue}
                  className="kzui-color-code"
                />
              </div>
            </div>
          </div>
          <div className="kzui-action-btns">
            <button onClick={() => setDrawer(false)} className="kzui-btn-white">
              Cancel
            </button>
            <button onClick={handleSaveNewColor} className="kzui-btn-black">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;
