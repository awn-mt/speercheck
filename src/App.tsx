import React, { useState } from 'react';
import Calendar from './components/Calendar';
import CandidateSelection from './components/CandidateSelection';
import ConfirmationModal from './components/ConfirmationModal';

const App: React.FC = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const candidates = ['Bob', 'John', 'Smith'];
  const availabilityData = {
    engineers: {
      Mohammed: ["Tuesday 14:00", "Wednesday 15:30"],
      Ali: ["Tuesday 14:00", "Thursday 10:00"],
      Sami: ["Monday 9:00", "Tuesday 14:00"],
    },
    candidates: {
      Bob: ["Monday 9:00", "Tuesday 10:00"],
      John: ["Tuesday 14:00", "Wednesday 15:30"],
      Smith: ["Monday 9:00", "Tuesday 14:00"]
    }
  };

  const handleCandidateSelect = (candidate: string) => {
    setSelectedCandidate(candidate);
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <CandidateSelection candidates={candidates} onSelect={handleCandidateSelect} />
      <Calendar availabilityData={availabilityData} selectedCandidate={selectedCandidate} onSlotSelect={handleSlotSelect} />
      {isModalOpen && (<ConfirmationModal candidate={selectedCandidate} slot={selectedSlot} onClose={() => setIsModalOpen(false)}
  />
)}
    </div>
  );
};

export default App;
