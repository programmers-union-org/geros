import React from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
// import { Button } from "@/components/ui/button";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfReactPdf({ src }) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function nextPage() {
    if (pageNumber < (numPages ?? -1)) {
      setPageNumber((v) => v + 1);
    }
  }

  function prevPage() {
    if (pageNumber > 1) {
      setPageNumber((v) => v - 1);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full lg:min-h-screen bg-gray-100 p-4">
      <div className="flex flex-row items-center  justify-between  w-full max-w-5xl text-center mt-8 mb-12">
        <h2 className="text-2xl md:text-3xl font-thin text-gray-800 ">
          View Our Brochure
        </h2>
        <a
          href={src}
          download
          className="inline-block text-sm md:text-md px-4 py-2 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:bg-black transition duration-200"
        >
          Download Brochure
        </a>
      </div>

      <div className="hidden lg:flex  w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
        <Document
          file={src}
          onLoadSuccess={onDocumentLoadSuccess}
          className="my-react-pdf flex justify-center"
        >
          <Page className="" pageNumber={pageNumber} width={1020} />
        </Document>
      </div>
      <div className=" lg:hidden w-ful bg-white rounded-xl shadow-lg overflow-hidden">
        <Document
          file={src}
          onLoadSuccess={onDocumentLoadSuccess}
          className="my-react-pdf flex justify-center"
        >
          <Page className="" pageNumber={pageNumber} width={400} />
        </Document>
      </div>
      <div className="flex items-center justify-between gap-4 my-8">
        <a onClick={prevPage} className="inline-block cursor-pointer px-3 py-2 text-xs bg-gray-600 text-white font-medium rounded-lg shadow-md hover:bg-black transition duration-200">Previous</a>
        <p className="text-gray-700 font-medium">
          Page {pageNumber} of {numPages ?? "..."}
        </p>
        <a onClick={nextPage} className="inline-block cursor-pointer px-3 py-2 text-xs bg-gray-600 text-white font-medium rounded-lg shadow-md hover:bg-black transition duration-200">Next</a>
      </div>
    </div>
  );
}
