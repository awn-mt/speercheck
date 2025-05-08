import React from 'react';

interface CalendarProps {
  availabilityData: {
    engineers: Record<string, string[]>;
    candidates: Record<string, string[]>;
  };
  selectedCandidate: string | null;
  onSlotSelect: (slot: string) => void;
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = Array.from({ length: 18 }, (_, i) => {
  const hour = 9 + Math.floor(i / 2);
  const minute = i % 2 === 0 ? '00' : '30';
  return `${hour}:${minute}`;
});

const Calendar: React.FC<CalendarProps> = ({
  availabilityData,
  selectedCandidate,
  onSlotSelect,
}) => {
  const candidateSlots =
    selectedCandidate && availabilityData.candidates[selectedCandidate]
      ? availabilityData.candidates[selectedCandidate]
      : [];

  const getOverlap = (slotLabel: string) => {
    const engineers = Object.entries(availabilityData.engineers);
    const availableEngineers = engineers
      .filter(([_, slots]) => slots.includes(slotLabel))
      .map(([name]) => name);
    return availableEngineers;
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(5, 1fr)', gap: '1px' }}>
      {/* Header Row */}
      <div></div>
      {days.map((day) => (
        <div key={day} style={{ fontWeight: 'bold', textAlign: 'center' }}>{day}</div>
      ))}

      {/* Time Slots */}
      {timeSlots.map((time) => (
        <React.Fragment key={time}>
          <div style={{ padding: '4px', fontWeight: 'bold' }}>{time}</div>
          {days.map((day) => {
            const label = `${day} ${time}`;
            const engineerOverlap = getOverlap(label);
            const isAvailable = candidateSlots.includes(label) && engineerOverlap.length > 0;

            return (
              <div key={label} style={{ textAlign: 'center' }}>
                {isAvailable ? (
                  <div>
                    <button
                      onClick={() => onSlotSelect(label)}
                      style={{
                        padding: '6px',
                        backgroundColor: '#4ade80', // green-400
                        border: '1px solid #ccc',
                        cursor: 'pointer',
                        fontSize: '12px',
                        borderRadius: '4px'
                      }}
                    >
                      {time}
                    </button>
                    <div style={{ fontSize: '10px', marginTop: '4px', color: '#333' }}>
                      {engineerOverlap.map((name) => (
                        <div key={name}>{name}</div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div style={{ padding: '6px', fontSize: '12px', color: '#aaa' }}>–</div>
                )}
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Calendar;