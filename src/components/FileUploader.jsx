// components/FileUploader.jsx
import React, { useState, useRef } from 'react';
import '../styles/FileUploader.css';

const FileUploader = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const uploadedFile = e.dataTransfer.files[0];
      processFile(uploadedFile);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const uploadedFile = e.target.files[0];
      processFile(uploadedFile);
    }
  };
  
  const processFile = (uploadedFile) => {
    // Check if file is a PDF
    if (uploadedFile.type !== 'application/pdf') {
      alert('Please upload a PDF file');
      return;
    }
    
    setFile(uploadedFile);
    if (onFileUpload) onFileUpload(uploadedFile);
  };
  
  const openFileSelector = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="file-uploader">
      <div 
        className={`upload-area ${dragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileSelector}
      >
        <div className="upload-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </div>
        <h3>Upload PDF</h3>
        <p>Drag & drop your file here or</p>
        <label className="upload-button">
          Choose File
          <input type="file" accept=".pdf" onChange={handleFileSelect} ref={fileInputRef} />
        </label>
        {file && <p className="file-name">{file.name}</p>}
      </div>
    </div>
  );
};

export default FileUploader;