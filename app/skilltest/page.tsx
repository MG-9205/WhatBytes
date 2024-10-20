"use client"
import { useState } from "react";
import ClientLayout from "../client-layout";
import Image from "next/image";
import DoughnutChart from "@/components/Charts/DoughnutChart";
import UpdateModal from "@/components/UpdateModal";
import LineChart from "@/components/Charts/LineChart";

interface UpdatedValues {
  rank: number;
  percentile: number;
  correctAnswers: number;
}
export default function SkillTestPage() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statistics, setStatistics] = useState<UpdatedValues>({
    percentile: 90,
    correctAnswers: 12,
    rank: 4,
  });


  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  
  const handleSave = (updatedValues:UpdatedValues) => {
    setStatistics(updatedValues);
    setIsModalOpen(false); 
  };

  return (
    <ClientLayout>
      <h1 className="text-2xl font-semibold mb-6">SkillTest</h1>
      <div className="flex flex-col md:flex-row md:gap-2 gap-4 min-h-[100vh] overflow-auto pb-10">
        
        <div className="flex-1 md:flex-[0_0_65%] flex flex-col gap-4 p-4 md:p-2 ">
          
          <div className="p-4 rounded-lg border flex items-center justify-around">
            <div className=" hidden md:block">
              <Image src="/html2.png" alt="html" width={80} height={80} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[1.2rem]">
                Hyper Text Markup Language
              </span>
              <span className="flex gap-2 text-gray-400 font-semibold flex-wrap">
                <span>Question: 08</span>
                <span>|</span>
                <span>Duration: 15min</span>
                <span>|</span>
                <span>Submitted on 5 June 2021</span>
              </span>
            </div>
            <div className="cursor-pointer" onClick={handleUpdateClick}>
              <span className="bg-blue-950 border-2 border-black text-white font-semibold rounded-md py-2 px-4">
                Update
              </span>
            </div>
          </div>

          <div className="border p-2 rounded-lg">
            <h1 className="text-left w-[100%] font-bold text-[1.1rem]">
              Quick Statistics
            </h1>
            <div className="flex justify-around items-center py-4 flex-wrap gap-y-2">
             
              <div className="flex items-center gap-2">
                <div>
                  <span className="p-3 rounded-full bg-slate-100">
                    &#x1F3C6;
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[1.4rem] leading-none">
                    {statistics.rank}
                  </span>
                  <span className="text-gray-300 font-semibold">Your Rank</span>
                </div>
              </div>

              <div className="h-10 w-[1px] bg-gray-300"></div>

              
              <div className="flex items-center gap-2">
                <div>
                  <span className="p-3 rounded-full bg-slate-100 flex justify-center items-center">
                    &#x1F4CB;
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[1.4rem] leading-none">
                    {statistics.percentile}%
                  </span>
                  <span className="text-gray-300 font-semibold">Percentile</span>
                </div>
              </div>

              <div className="h-10 w-[1px] bg-gray-300"></div>

              
              <div className="flex items-center gap-2">
                <div>
                  <span className="p-3 rounded-full bg-slate-100 flex justify-center items-center">
                    <span className="w-5 h-5 border-2 border-gray-400 flex items-center justify-center bg-green-600 text-white">
                      &#x2714;
                    </span>
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[1.4rem] leading-none">
                    {statistics.correctAnswers}/15
                  </span>
                  <span className="text-gray-300 font-semibold">Correct Answer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border p-4 rounded-lg flex items-center justify-center flex-col w-[100%]">
            <div className="flex flex-col gap-2 w-[100%]">
              <div className="font-extrabold">
                Comparison Graph
              </div>
              <div>
                <div className="flex justify-between w-[100%] md:gap-5">
                  <span className="">
                    <span className="font-bold text-gray-500 ">You Scored {statistics.percentile}% percentile</span>
                    <span className="font-semibold text-gray-400 ">
                      &nbsp;which is lower than the average percentile 72% of all engineer who took this assessment
                    </span>
                    
                  </span>
                  <span>
                  <span className="p-3 w-10 h-10 rounded-full bg-slate-100 flex justify-center items-center">
                    &#x1F4CB;
                  </span>
                  </span>
                </div>
              
              </div>
            </div>
           <LineChart/>
          </div>
        </div>

        
        <div className="flex flex-col gap-4 p-4 md:p-2 w-[100%]">
          <div className="border p-3 rounded-lg flex flex-col items-center gap-6">
            <h1 className="font-bold text-left w-full">Syllabus Wise Analysis</h1>
            <div className="space-y-4 w-[100%] flex flex-col gap-1 pb-3">
            
              <div className="flex flex-col w-[100%]">
                <div className="flex-1">
                  <span className="font-semibold text-gray-500">HTML Tool, Form, History</span>
                </div>
                <div className="flex w-[100%] items-center justify-between mt-1 gap-2">
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <span className="font-semibold">80%</span>
                </div>
              </div>

              
              <div className="flex flex-col w-[100%]">
                <div className="flex-1">
                  <span className="font-semibold text-gray-500">Tags & References in HTML</span>
                </div>
                <div className="flex w-[100%] items-center justify-between mt-1 gap-2">
                  <div className="w-full bg-orange-100 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <span className="font-semibold">60%</span>
                </div>
              </div>

            
              <div className="flex flex-col w-[100%]">
                <div className="flex-1">
                  <span className="font-semibold text-gray-500">Tables & References in HTML</span>
                </div>
                <div className="flex w-[100%] items-center justify-between mt-1 gap-2">
                  <div className="w-full bg-red-100 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "24%" }}></div>
                  </div>
                  <span className="font-semibold">24%</span>
                </div>
              </div>

             
              <div className="flex flex-col w-[100%]">
                <div className="flex-1">
                  <span className="font-semibold text-gray-500">Tables & CSS Basics</span>
                </div>
                <div className="flex w-[100%] items-center justify-between mt-1 gap-2">
                  <div className="w-full bg-green-100 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "96%" }}></div>
                  </div>
                  <span className="font-semibold">96%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border p-3 pb-6 rounded-lg flex items-center justify-center flex-col">
            <div>
              <div className="w-[100%] flex justify-between font-bold pb-2">
                <span>Question Analysis</span>
                <span className="text-blue-600">{statistics.correctAnswers}/15</span>
              </div>
              <div className="font-semibold text-[13px] pb-8">
                <span className="text-gray-600">You Scored {statistics.correctAnswers} Question correct out of 15. &nbsp;  
              </span>
              <span className="text-gray-400">
                 However it still needs some impoverments.
              </span>
              </div>
            </div>
           <DoughnutChart correct={statistics.correctAnswers}/>
          </div>
        </div>
      </div>
      <UpdateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        initialValues={statistics}
      />
    </ClientLayout>
  );
}
