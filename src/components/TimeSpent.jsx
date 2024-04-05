import React, { useState, useEffect } from 'react';

const TimeSpent = ({ currentSection, startTime, setStartTime, setSectionTimes }) => {
  useEffect(() => {
    const handleSectionChange = () => {
      if (startTime !== null) {
        const endTime = Date.now();
        const timeSpent = (endTime - startTime) / 1000;
        setSectionTimes(prevTimes => ({
          ...prevTimes,
          [currentSection]: prevTimes[currentSection] + timeSpent
        }));
        setStartTime(null);
      }
    };

    window.addEventListener('resize', handleSectionChange);

    return () => {
      window.removeEventListener('resize', handleSectionChange);
    };
  }, [currentSection, startTime, setStartTime, setSectionTimes]);

  return null; 
};

export default TimeSpent;
