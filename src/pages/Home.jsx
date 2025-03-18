// pages/Home.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import FileUploader from '../components/FileUploader';
import AnalysisResults from '../components/AnalysisResults';
import '../styles/Home.css';

const Home = () => {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
    setResults(null); // Reset results when new file is uploaded
  };

  const analyzeFile = async () => {
    if (!file) return;
    
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock results
      const mockResults = {
        patientName: "John Doe",
        patientAge: "45",
        patientGender: "Male",
        diagnosis: "Sample diagnosis of chronic condition requiring follow-up",
        treatment: "Prescribed medication and physical therapy",
        medication: ["Ibuprofen 400mg", "Vitamin D", "Calcium supplement"],
        followUp: "2 weeks with primary physician",
        missingValues: {
          allergyInfo: "Missing",
          insuranceDetails: "Missing",
          emergencyContact: "Missing"
        }
      };
      
      setResults(mockResults);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="home-container">
      <Header />
      
      <main className="main-content">
        <div className="banner-section">
          <div className="banner-text">
            <h2>Analyze medical discharge documents</h2>
            <div className="features">
              <div className="feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <p>Upload PDF discharge documents</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <p>AI-powered document analysis</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <p>Identify missing critical information</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                  </svg>
                </div>
                <p>Highlight potential errors and inconsistencies</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="uploader-section">
          <FileUploader onFileUpload={handleFileUpload} />
          {file && !results && !isLoading && (
            <button className="analyze-btn" onClick={analyzeFile}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              Analyze Document
            </button>
          )}
        </div>
      </main>
      
      {(isLoading || results) && (
        <AnalysisResults results={results} isLoading={isLoading} />
      )}
    </div>
  );
};

export default Home;