import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import myResume from "../assets/Santhosh_Resume-2.pdf";
import "../stylesheets/resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  return (
    <div id="Resume" className="section resume-class">
      <h2 className="text-4xl font-semibold text-center">Resume</h2>

      <p className="text-2xl text-center">Take a look at my Resume</p>

      <a
        href={myResume}
        download="Santhosh_Resume.pdf"
        className="download-btn"
      >
        Download PDF
      </a>

      <Document file={myResume}>
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
};

export default Resume;
