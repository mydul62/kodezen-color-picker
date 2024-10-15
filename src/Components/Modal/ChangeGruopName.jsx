/* eslint-disable react/prop-types */
import { useState } from "react";

const ChangeGroupName = ({ modal, handleCloseModal, setColorGroups, colorGroups,Id }) => {
  const [groupName, setGroupName] = useState("");
  
  const handleInputChange = (e) => {
    setGroupName(e.target.value); 
  };


  const handleSubmit = () => {
     console.log(groupName)
    const updatedGroups = colorGroups.map((group) => {
      if (group.groupId === Id) {
        return { ...group, groupName };
      }
      return group;
    });
    console.log(updatedGroups)
    setColorGroups(updatedGroups); 
    handleCloseModal(); 
  };

  return (
    <div className={` ${modal ? 'kzui-modal' : 'kzui-modal_hide'} `}>
      <div className="kzui-modal-content">
        <div className="kzui-modal-header">
          <h2>Rename Group</h2>
          <button onClick={handleCloseModal} className="kzui-close-btn">&times;</button>
        </div>
        <div className="kzui-modal-body">
          <label className="kzui-modal-label">Name</label>
          <input
            type="text"
            id="groupName"
            placeholder="Write new group name"
            className="kzui-modal-input"
            value={groupName}     
            onChange={handleInputChange} 
          />
        </div>
        <div className="kzui-modal-footer">
          <button onClick={handleCloseModal} className="kzui-btn kzui-btn-cancel">Cancel</button>
          <button onClick={handleSubmit} className="kzui-btn kzui-btn-confirm">Change Name</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeGroupName;
