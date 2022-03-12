import React, { useState, useEffect } from 'react';

function FileUpload() {
  const [img, setImage] = useState(null);
  const onChange = (e) => {
    alert('onChange');
  };
  const onClick = () => {
    alert('onClick');
  };

  return (
    <>
      <input type="img" onChange={onChange} />
      <button onClick={onClick}>제출</button>
    </>
  );
}

export default FileUpload;
