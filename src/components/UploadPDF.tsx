import React, { useState } from 'react';
import API from '../services/api';

const UploadPDF = ({ token }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Select a file first");
    const formData = new FormData();
    formData.append("pdf", file);

    try {
      await API.post('/pdf/upload', formData, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      alert("PDF uploaded successfully");
    } catch (err) {
      alert("Upload failed");
    }
  };

  return (
    <div>
      <h2>Upload PDF</h2>
      <input type="file" accept="application/pdf" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadPDF;
