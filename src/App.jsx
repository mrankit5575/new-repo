import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Naam likho" />
      <button onClick={handleFocus}>Focus Karo</button>
    </div>
  );
}

export default FocusInput;  

//nfw file 