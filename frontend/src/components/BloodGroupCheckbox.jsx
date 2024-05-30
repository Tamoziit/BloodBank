// eslint-disable-next-line react/prop-types
const BloodGroupCheckbox = ({ onCheckboxChange, selectedGroup }) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className="label container">
                    <span className="label-text">A+</span>
                    <input type="checkbox" className={`checkbox ${selectedGroup === "A+" ? "selected" : ""}`}
                        checked={selectedGroup === "A+"}
                        onChange={() => onCheckboxChange("A+")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label container">
                    <span className="label-text">A-</span>
                    <input type="checkbox" className={`checkbox ${selectedGroup === "A-" ? "selected" : ""}`}
                        checked={selectedGroup === "A-"}
                        onChange={() => onCheckboxChange("A-")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label container">
                    <span className="label-text">B+</span>
                    <input type="checkbox" className={`checkbox ${selectedGroup === "B+" ? "selected" : ""}`}
                        checked={selectedGroup === "B+"}
                        onChange={() => onCheckboxChange("B+")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label container">
                    <span className="label-text">B-</span>
                    <input type="checkbox" className={`checkbox ${selectedGroup === "B-" ? "selected" : ""}`}
                        checked={selectedGroup === "B-"}
                        onChange={() => onCheckboxChange("B-")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label container">
                    <span className="label-text">AB+</span>
                    <input type="checkbox" className={`checkbox ${selectedGroup === "AB+" ? "selected" : ""}`}
                        checked={selectedGroup === "AB+"}
                        onChange={() => onCheckboxChange("AB+")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label container">
                    <span className="label-text">AB-</span>
                    <input type="checkbox" className={`checkbox ${selectedGroup === "AB-" ? "selected" : ""}`}
                        checked={selectedGroup === "AB-"}
                        onChange={() => onCheckboxChange("AB-")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label container">
                    <span className="label-text">O+</span>
                    <input type="checkbox" className={`checkbox ${selectedGroup === "O+" ? "selected" : ""}`}
                        checked={selectedGroup === "O+"}
                        onChange={() => onCheckboxChange("O+")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label container">
                    <span className="label-text">O-</span>
                    <input type="checkbox" className={`checkbox ${selectedGroup === "O-" ? "selected" : ""}`}
                        checked={selectedGroup === "O-"}
                        onChange={() => onCheckboxChange("O-")}
                    />
                </label>
            </div>
        </div>
    )
}

export default BloodGroupCheckbox;