import React from "react";

const Resume = () => {
  return (
    <div className="w-full">
      <div className="sm:w-[55rem] w-full m-auto flex flex-col gap-2 pt-6 border border-[var(--bg)] rounded-dm">
        <div className="w-full flex justify-center">
          <a
            href="/resume.pdf"
            download="AnuprajVarma-resume.pdf"
            className="text-md px-4 py-2 rounded-md font-medium bg-[var(--bg)] hover:bg-[var(--border-color)]/70 transition duration-300 text-center w-fit"
          >
            Download
          </a>
        </div>
        <div className="sm:h-[40rem] h-[35rem]">
          <iframe
            src="https://drive.google.com/file/d/1pVIojU_VNk7zGARarRsN63oL_bHwU5Ck/preview"
            allow="autoplay"
            className="w-full h-full p-4"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;
