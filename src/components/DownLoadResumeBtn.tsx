import React from "react";
import HackerBtn from "./animation/HackerBtn";

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <a
        href="/Portfolio/Koushik_Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <HackerBtn label="Download Resume" />
      </a>
    </div>
  );
}

export default DownLoadResumeBtn;
