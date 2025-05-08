import React from 'react';

interface CandidateSelectionProps {
  candidates: string[];
  onSelect: (candidate: string) => void;
}

const CandidateSelection: React.FC<CandidateSelectionProps> = ({ candidates, onSelect }) => {
  return (
    <div className="my-4">
      <label htmlFor="candidate" className="block text-lg font-medium">Select Candidate</label>
      <select
        id="candidate"
        className="mt-2 p-2 border border-gray-300 rounded"
        onChange={(e) => onSelect(e.target.value)}
      >
        {candidates.map((candidate, index) => (
          <option key={index} value={candidate}>
            {candidate}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CandidateSelection;
