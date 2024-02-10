import React, { useState } from 'react';
import supabase from "../config/supabaseClient";


function TestImg() {
  const [file, setFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Function to upload the file to Supabase Storage
  const uploadFile = async () => {
    if (!file) {
      console.log("No file selected!");
      return;
    }

    try {
      const { data, error } = await supabase
        .from('title-media')
        .upload(`images/${file.name}`, file, { cacheControl: '3600' });

      if (error) {
        console.error('Error uploading image:', error.message);
      } else {
        console.log('File uploaded successfully:', data);
      }
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Submit</button>
    </div>
  );
}

export default TestImg;
