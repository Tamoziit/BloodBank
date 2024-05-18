// eslint-disable-next-line react/prop-types
const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className="label container">
                    <span className="label-text">Male</span>
                    <input type="checkbox" className={`checkbox ${selectedGender === "Male" ? "selected" : ""}`}
                        checked={selectedGender === "Male"}
                        onChange={() => onCheckboxChange("Male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label container">
                    <span className="label-text">Female</span>
                    <input type="checkbox" className={`checkbox ${selectedGender === "Female" ? "selected" : ""}`}
                        checked={selectedGender === "Female"}
                        onChange={() => onCheckboxChange("Female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox;