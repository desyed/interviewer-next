import { Button, FileInput, Image, Title } from "@mantine/core";
import React from "react";
import { LuClock3 } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";
import { CgSandClock } from "react-icons/cg";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { FiUploadCloud } from "react-icons/fi";
import Link from "next/link";

const AnswerFile = () => {
  return (
    <section>
      <div className="text-center w-1/3 mx-auto text-gray-500 text-sm">
        <Title className="my-10" order={3}>
          What are some of your leadership experiences?
        </Title>
        <div>
          <div className="flex justify-center">
            <div className="bg-white p-5 w-full rounded-2xl shadow-xl">
              <div className="flex justify-between">
                <div className="px-3 bg-gray-200 rounded-full">00:00</div>
                <div className="px-3 bg-gray-200 rounded-full">Recording</div>
              </div>
              <div className="pt-10">
                <FiUploadCloud className="text-6xl" />
                <p>
                  Drag your file here and click to{" "}
                  <span className="text-blue-500 font-semibold">Upload</span>
                </p>
              </div>
              <div className="flex justify-center items-center gap-3 border">
                <FileInput size="xl" variant="unstyled" />
              </div>
            </div>
          </div>
          <div>
            <div className="absolute left-32 top-[150px]">
              <p>01</p>
              <p className="text-7xl my-10 text-gray-300 font-bold">02</p>
              <p>03</p>
              <p>04</p>
            </div>
            <div className="flex gap-20 bg-white absolute left-0 top-[250px]">
              <div className="h-3 w-16 bg-gray-300 my-auto"></div>
              <div>
                <p className="my-0 flex items-center">
                  {" "}
                  <RiQuestionAnswerLine /> Question
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-10">
              <p className="flex items-center gap-1">
                <LuClock3 />
                Answer time 01:00
              </p>
              <p className="flex items-center gap-1">
                <FaClockRotateLeft />2 of 4 attempt(s) left
              </p>
            </div>
            <p className="flex items-start text-start gap-1">
              <CgSandClock className="text-2xl" />
              We recommend taking no more than 10m 00s to complete this
              question. Your time:{" "}
              <span className="text-blue-500 font-bold items-end">09:48</span>
            </p>
          </div>
          <div className="space-x-5 py-5">
            <Button variant="outline" color="black" radius="xl">
              <FaArrowRotateLeft /> Re-record
            </Button>
            <Link className="no-underline" href={"/User/AlmostDone"}>
              <Button variant="filled" radius="xl">
                Save and continue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnswerFile;
