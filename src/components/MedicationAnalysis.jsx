import React, { useState } from 'react';
import '../styles/MedicationAnalysis.css';

const MedicationAnalysis = ({ medications, dosageResults }) => {
  const [activeTab, setActiveTab] = useState('prescriptions');
  
  if (!medications || medications.length === 0) {
    return (
      <div className="medication-analysis">
        <h3>Medication Analysis</h3>
        <p>No medication information available</p>
      </div>
    );
  }

  return (
    <div className="medication-analysis">
      <h3>Medication Analysis</h3>
      
      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'prescriptions' ? 'active' : ''}`}
          onClick={() => setActiveTab('prescriptions')}
        >
          Prescriptions
        </button>
        <button 
          className={`tab-btn ${activeTab === 'dosage' ? 'active' : ''}`}
          onClick={() => setActiveTab('dosage')}
        >
          Dosage Check
        </button>
      </div>
      
      {activeTab === 'prescriptions' && (
        <div className="medication-table">
          <table>
            <thead>
              <tr>
                <th>Medication</th>
                <th>Strength</th>
                <th>Frequency</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {medications.map((med, index) => (
                <tr key={index}>
                  <td>{med.name}</td>
                  <td>{med.strength}</td>
                  <td>{med.route && med.frequency ? `${med.route} ${med.frequency}` : med.route_frequency}</td>
                  <td>{med.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {activeTab === 'dosage' && dosageResults && (
        <div className="medication-table">
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Medication</th>
                <th>Prescribed</th>
                <th>Reference Dosage</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {dosageResults.map((med, index) => (
                <tr key={index} className={med.correctness === 0 ? 'warning' : ''}>
                  <td className="status-cell">
                    {med.correctness === 0 && (
                      <div className="flag-icon" title="Potential dosage issue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                          <line x1="4" y1="22" x2="4" y2="15"></line>
                        </svg>
                      </div>
                    )}
                  </td>
                  <td>{med.name}</td>
                  <td>{med.prescribed_dosage || 'Not specified'}</td>
                  <td>{med.nnf_dosage || 'Not found'}</td>
                  <td>{med.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MedicationAnalysis;