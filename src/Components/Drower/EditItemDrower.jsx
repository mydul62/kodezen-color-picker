import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const EditItemDrower = ({drawer,handleSetDrower,colors,setColors,itemId,selectedColorName,setSelectedColorName,newColorValue,setNewColorValue}) => {
  const id = parseInt(itemId-1)
  console.log(id)
  const [showColorPicker, setShowColorPicker] = useState(false);

    
     const handleSaveChangeColor = () => {
      const newColor = [...colors]
       newColor[id].value = newColorValue;
       newColor[id].name = selectedColorName;
      setColors([...newColor])
     };
  return (
    <div className={`kzui-add-colors ${drawer ? "showdrower" : "hidedrower"}`}>
          <div>
            <h6 className="kzui-color-name-title">Name</h6>
            <select
              className="kzui-color-name-selectbox"
              value={selectedColorName}
              onChange={(e) => setSelectedColorName(e.target.value)}
            >
              <option value="Black">Black</option>
              <option value="Color 100">Color</option>
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
            <button onClick={() => handleSetDrower()} className="kzui-btn-white">
              Cancel
            </button>
            <button 
            onClick={handleSaveChangeColor}
            className="kzui-btn-black">
              Save Changes
            </button>
          </div>
        </div>
  );
};

export default EditItemDrower;