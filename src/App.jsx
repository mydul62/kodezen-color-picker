import { CiSearch } from "react-icons/ci";
import { RxDragHandleDots2 } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { PiPencilThin } from "react-icons/pi";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./App.css";
import React, { useState } from "react";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";

const ColorTab = () => {
  const [show, setShow] = useState(false);
  const [drower, setDrower] = useState(false);
  const [colors, setColors] = useState([
    { id: 1, name: "Black", value: "#000000" },
    { id: 2, name: "Color 100", value: "#FFFFFF" },
    { id: 3, name: "Primary", value: "#1568ED" },
    { id: 4, name: "Secondary", value: "#ED1976" },
    { id: 5, name: "Title Text", value: "#000000" },
    { id: 6, name: "Supporting Text", value: "#595959" },
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
        name: `${colorToDuplicate.name} Copy`,
      },
    ]);
  };

  return (
    <div className="kzui-settings">
      <div className="kzui-sidebar">
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
            <div className=" kzui-search">
              <CiSearch />
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className=" kzui-List-title-box">
          <div className=" kzui-List-title">
            <p>Colors</p>
            <p>Value</p>
          </div>
        </div>

        <div className="kzui-color-list">
          {colors.map((color) => (
            <div key={color.id} className="kzui-color-item-box">
              <div>
                <RxDragHandleDots2 />
              </div>
              <div className="kzui-color-item">
                <span className="kzui-color-name">{color.name}</span>
                <input
                  className="kzui-color-value"
                  value={color.value}
                  readOnly
                />
                <div className="kzui-color-actions">
                  <button
                    onClick={() => setShow(true)}
                    className="kzui-three-dots"
                  >
                    <BsThreeDots size={14} />{" "}
                  </button>
                  <div className={`kzui-dropdown `}>
                    <button>
                      <PiPencilThin /> <span>Edit</span>
                    </button>
                    <button onClick={() => handleDuplicate(color.id)}>
                      {" "}
                      <HiOutlineDuplicate size={14} /> <span>Duplicate</span>
                    </button>
                    <button onClick={() => handleDelete(color.id)}>
                      <RiDeleteBin6Line size={14} />
                      <span>Delete</span>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="kzui-add-color">+ Add Color</button>
        <div className="kzui-add-colors">
          <h6 className="kzui-color-name-title">Name</h6>
          <div>
            <select name="" id="" className="kzui-color-name-selectbox ">
              <option value="">Black</option>
              <option value="">Color 100</option>
              <option value="">Primary</option>
              <option value="">Secondary</option>
              <option value="">Title Text</option>
              <option value="">Supporting Text</option>
            </select>
            <div className=" kzui-color-code">
              <h6 className="kzui-color-name-title">Value</h6>
            
            </div>
            <div className=" kzui-color-code">
              <p>Color</p>
              <div className="kzui-color-input">
                <div className="kzui-color-box"></div>
                <input
                  type="text"
                  value="#3891FA"
                  readOnly
                  className="kzui-color-code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorTab;
