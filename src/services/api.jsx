// api.jsx
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

export const processPDF = async (file) => {
  const formData = new FormData();
  formData.append('pdf', file);
  
  try {
    const response = await axios.post(
      `${API_URL}/process_pdf/`,
      formData,
      {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error processing PDF:', error);
    throw error;
  }
};

export default {
  processPDF,
};