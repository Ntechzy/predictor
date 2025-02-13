import React, { useState } from 'react';

const RankPredictor = () => {
  const [percentile, setPercentile] = useState('');
  const [rankRange, setRankRange] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [animationClass, setAnimationClass] = useState(''); // For bubble effect

  // Function to calculate the rank
  const calculateRank = () => {
    if (!percentile) {
      setErrorMessage('Please enter a percentile.');
      setRankRange('');
      return;
    }

    if (percentile < 0 || percentile > 100) {
      setErrorMessage('Please enter a valid percentile between 0 and 100.');
      setRankRange('');
      return;
    }

    setErrorMessage('');
    const studentsAt1300000 = ((100 - percentile) * 1300000) / 100;
    const studentsAt1400000 = ((100 - percentile) * 1400000) / 100;

    setRankRange(`Your rank will be between ${Math.floor(studentsAt1400000)} and ${Math.floor(studentsAt1300000)}`);

    // Trigger animation on rank output
    setAnimationClass('animate-bubble');
  };

  return (
    <div className="min-h-screen flex justify-end items-center bg-cover bg-center relative"
      style={{
        backgroundImage: 'url(https://imgs.search.brave.com/pj_HvFM9kJ-ePVUTelDbec29Py8WtPavuT5phgCJnxo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ha20t/aW1nLWEtaW4udG9z/c2h1Yi5jb20vaW5k/aWF0b2RheS9pbWFn/ZXMvc3RvcnkvMjAy/NDAxL2plZS1tYWlu/LTIwMjQtaW1hZ2Ut/Y29ycmVjdGlvbi13/aW5kb3ctb3Blbi1o/b3ctdG8tbWFrZS1j/aGFuZ2VzLTA2MTYx/MDM4My0xNng5XzAu/anBnP1ZlcnNpb25J/ZD12a0lVbmhOZDlI/d19FNVdvX0xpNWQz/eWpjVlVjdzZRViZz/aXplPTY5MDozODg)', 
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'  // Adding a semi-transparent overlay
      }}
    >
      <div className="bg-white relative py-16 bg-opacity-80 md:mr-10 p-8 rounded-lg shadow-lg max-w-md w-full md:mr-20 mx-5">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Rank Predictor</h1>

        <label htmlFor="percentile" className="block text-lg font-medium text-blue-900">
          Enter your percentile:
        </label>
        <input
          id="percentile"
          type="number"
          value={percentile}
          onChange={(e) => setPercentile(e.target.value)}
          placeholder="Enter percentile"
          className="mt-2 w-full px-4 py-2 border border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
        
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}

        <button
          onClick={calculateRank}
          className="mt-4 w-full py-3 bg-blue-900 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
        >
          Predict Rank
        </button>

        {rankRange && (
          <div className={`mt-6 text-center text-xl font-medium text-green-700 ${animationClass}`}>
            <p>{rankRange}</p>
          </div>
        )}

        <div className=" absolute bottom-1 mt-4 left-[34%] text-center  text-sm text-gray-600">
          Powered by <a href='https://ntechzy.in/' target='_blank' className="font-semibold text-blue-700">Ntechzy pvt.ltd.</a>
        </div>
      </div>
    </div>
  );
};

export default RankPredictor;
