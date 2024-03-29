// DropdownComponent.js
import React from "react";
import { useSelector } from "react-redux";

const DropdownComponent = () => {
  const submissions = useSelector((state) => state.form.submissions);

  return (
    <div>
      <select>
        {submissions.map((submission, index) => (
          <option key={index} value={submission.name}>
            {submission.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
