/* import { useState } from "react";
import { WindowsControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowsControls target="resume" />
        <h2>Dexter's Resume</h2>

        <a
          href="files/Daniel Tobi Onipe - Full-Stack.pdf"
          download
          className="cursor-pointer"
          title="Download Resumé"
        >
          <Download className="icon" />
        </a>
      </div>
      <Document file="files/Daniel Tobi Onipe - Full-Stack.pdf">
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
 */

import { useState } from "react";
import { WindowsControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  }

  function goToNextPage() {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
  }

  return (
    <>
      <div id="window-header">
        <WindowsControls target="resume" />
        <h2>Dexter's Resume</h2>

        <div className="flex items-center gap-4">
          {/* Page Navigation Controls */}
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="p-1 rounded hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
              title="Previous Page"
            >
              <ChevronLeft className="icon" size={20} />
            </button>

            <span className="text-sm font-medium min-w-[60px] text-center">
              Page {pageNumber} of {numPages || "--"}
            </span>

            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="p-1 rounded hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
              title="Next Page"
            >
              <ChevronRight className="icon" size={20} />
            </button>
          </div>

          {/* Download Button */}
          <a
            href="files/Daniel Tobi Onipe - Full-Stack.pdf"
            download
            className="cursor-pointer p-2 rounded hover:bg-gray-100"
            title="Download Resumé"
          >
            <Download className="icon" />
          </a>
        </div>
      </div>

      <Document
        file="files/Daniel Tobi Onipe - Full-Stack.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="text-center py-8">Loading PDF...</div>}
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer
          renderAnnotationLayer
          className="pdf-page"
        />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;