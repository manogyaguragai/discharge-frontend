// components/AnalysisResults.jsx
import React from 'react';
import '../styles/AnalysisResults.css';

const AnalysisResults = ({ results, isLoading }) => {
  if (isLoading) {
    return (
      <div className="analysis-results">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Analyzing your document...</p>
        </div>
      </div>
    );
  }
  
  if (!results) return null;
  
  return (
    <div className="analysis-results">
      <h2>Analysis Results</h2>
      <div className="results-grid">
        <div className="result-card">
          <h3>Patient Information</h3>
          <div className="result-item">
            <span>Name:</span>
            <p>{results.patientName}</p>
          </div>
          <div className="result-item">
            <span>Patient Number:</span>
            <p>{results.patientNumber}</p>
          </div>
          <div className="result-item">
            <span>Address:</span>
            <p>{results.patientAddress}</p>
          </div>
        </div>
        
        <div className="result-card">
          <h3>Medical Information</h3>
          <div className="result-item">
            <span>Diagnosis:</span>
            <p>{results.diagnosis}</p>
          </div>
          <div className="result-item">
            <span>Treatment:</span>
            <p>{results.treatment}</p>
          </div>
          {results.medication && results.medication.length > 0 && (
            <div className="result-item">
              <span>Medications:</span>
              <ul>
                {results.medication.map((med, index) => (
                  <li key={index}>{med}</li>
                ))}
              </ul>
            </div>
          )}
          {results.followUp && (
            <div className="result-item">
              <span>Follow-up:</span>
              <p>{results.followUp}</p>
            </div>
          )}
        </div>
        
        <div className="result-card">
          <h3>Missing Information</h3>
          {results.missingValues && Object.keys(results.missingValues).length > 0 ? (
            <ul>
              {Object.entries(results.missingValues).map(([key, value], index) => (
                <li key={index}>{key.replace(/_/g, ' ')}: {value}</li>
              ))}
            </ul>
          ) : (
            <p>No missing values detected</p>
          )}
        </div>
        
        <div className="result-card">
          <h3>Medication Analysis</h3>
          <div className="result-item">
            <span>Medications Found:</span>
            <p>{results.medication ? results.medication.length : 0}</p>
          </div>
          <div className="result-item">
            <span>Medication Documentation:</span>
            <p>{results.medication && results.medication.length > 0 ? 'Complete' : 'Incomplete'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;