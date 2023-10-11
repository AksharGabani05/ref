import React, { useRef } from 'react';

function Ref() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Ref;
