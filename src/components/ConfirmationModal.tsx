import React from 'react';

interface ConfirmationModalProps {
  candidate: string | null;
  slot: string | null;
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ candidate, slot, onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      inset: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        minWidth: '300px',
        textAlign: 'center'
      }}>
        <h2>Interview Scheduled</h2>
        <p><strong>Candidate:</strong> {candidate}</p>
        <p><strong>Slot:</strong> {slot}</p>

        <button
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
