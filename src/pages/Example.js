import React, { useState } from 'react';

const Example = () => {
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = React.createRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="relative w-96 h-96 border border-dashed border-gray-300 rounded-lg cursor-pointer">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Image Preview"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <button
              className="text-gray-600 flex items-center justify-center h-full w-full h-full"
              onClick={() => fileInputRef.current.click()}
            >
              Click to select an image
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Example;





