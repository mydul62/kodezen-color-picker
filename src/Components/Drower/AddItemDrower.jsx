import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const AddItemDrower = () => {
  const [drawer, setDrawer] = useState(false);
  const [color, setColor] = useState("#aabbcc");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColorName, setSelectedColorName] = useState("Black"); 
  const [newColorValue, setNewColorValue] = useState(color); 
  return (
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
  );
};

export default AddItemDrower;