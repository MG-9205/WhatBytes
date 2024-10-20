"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const UpdateModal = ({ isOpen, onClose, onSave, initialValues }: any) => {
  const [percentile, setPercentile] = useState(initialValues.percentile);
  const [correctAnswers, setCorrectAnswers] = useState(
    initialValues.correctAnswers
  );
  const [rank, setRank] = useState(initialValues.rank);

  const [errors, setErrors] = useState({
    rank: false,
    percentile: false,
    correctAnswers: false,
  });

  // Validate inputs whenever the input values change
  useEffect(() => {
    setErrors({
      rank: !rank || isNaN(Number(rank)),
      percentile: !percentile || isNaN(Number(percentile)),
      correctAnswers: !correctAnswers || isNaN(Number(correctAnswers)),
    });
  }, [rank, percentile, correctAnswers]);

  const handleSave = () => {
    
    if (!errors.rank && !errors.percentile && !errors.correctAnswers) {
      onSave({ percentile, correctAnswers, rank });
      onClose(); 
    }
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center w-[100%] bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[100%] md:max-w-lg max-w-md ">
        <div className="flex justify-between items-center w-[100%] pb-4">
          <h2 className="text-xl font-bold mb-4">Update Score</h2>
          <div>
            <Image src="/html2.png" alt="html" width={35} height={35} />
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
        
          <div className="flex items-center justify-between w-[100%]">
            <div className="flex gap-2 items-center">
              <div>
                <span className="bg-blue-950 text-white font-bold rounded-[50%] px-2 py-1">
                  1
                </span>
              </div>

              <div className="text-[13px]">
                <span className="font-semibold">Update your</span>
                <span className="font-bold"> Rank</span>
              </div>
            </div>
            <div className="flex flex-col">
            <input
              id="rank"
              type="number"
              value={rank}
              placeholder="Rank"
              required
              onChange={(e) => setRank(e.target.value)}
              className={`w-[140px] p-2 border-2 ${
                errors.rank ? "border-red-500" : "border-blue-500"
              } outline-none rounded-md`}
            />
             {errors.rank && (
            <span className="text-red-500 text-xs">required | should be a number.</span>
          )}
            </div>
          </div>
         

         
          <div className="flex items-center justify-between w-[100%]">
            <div className="flex gap-2 items-center">
              <div>
                <span className="bg-blue-950 text-white font-bold rounded-[50%] px-2 py-1">
                  2
                </span>
              </div>

              <div className="text-[13px]">
                <span className="font-semibold">Update your</span>
                <span className="font-bold"> Percentile</span>
              </div>
            </div>
            <div className="flex flex-col">
            <input
              id="percentile"
              type="number"
              placeholder="Percentile"
              required
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              className={`w-[140px] p-2 rounded-md border-2 ${
                errors.percentile ? "border-red-500" : "border-blue-500"
              } outline-none`}
            />
             {errors.percentile && (
            <span className="text-red-500 text-xs">required | percentile (0-100).</span>
          )}
            </div>
          </div>
          {errors.percentile && (
            <span className="text-red-500 text-xs">Percentile is required and must be a number.</span>
          )}

         
          <div className="flex items-center justify-between w-[100%]">
            <div className="flex gap-2 items-center">
              <div>
                <span className="bg-blue-950 text-white font-bold rounded-[50%] px-2 py-1">
                  3
                </span>
              </div>

              <div className="text-[13px]">
                <span className="font-semibold">Update your</span>
                <span className="font-bold"> Current Score (out of 15)</span>
              </div>
            </div>
            <div className="flex flex-col">
            <input
              id="correctAnswers"
              type="number"
              value={correctAnswers}
              placeholder="Current Score"
              onChange={(e) => setCorrectAnswers(e.target.value)}
              className={`w-[140px] p-2 rounded-md border-2 ${
                errors.correctAnswers ? "border-red-500" : "border-blue-500"
              } outline-none`}
            />
              {errors.correctAnswers && (
            <span className="text-red-500 text-xs">required | and must be a number.</span>
          )}</div>
          </div>
        

         
        </div>

        <div className="flex justify-end mt-4 gap-2">
          
          <button
            onClick={onClose}
            className=" text-blue-950 border-2 border-blue-950 py-2 px-4 rounded-md"
          >
            Cancel
          </button>

          
          <button
            onClick={handleSave}
            className="bg-blue-950 border border-black text-white font-bold py-2 px-6 rounded-md"
          >
            Save -&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
