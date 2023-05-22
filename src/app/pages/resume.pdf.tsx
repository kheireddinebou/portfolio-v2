"use client";

import { NextPage } from 'next';
import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect, useState } from 'react';

// Set the worker path for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

const ResumePDFPage: NextPage = () => {
  const [numPages, setNumPages] = useState<null | number>(null);

  useEffect(() => {
    // Fetch the number of pages in the PDF document
    const fetchNumPages = async () => {
      const pdfFile = '/resume.pdf';
      const pdfDoc = await pdfjs.getDocument(pdfFile).promise;
      setNumPages(pdfDoc.numPages);
    };

    fetchNumPages();
  }, []);

  return (
    <div>
      {numPages && (
        <Document file="/resume.pdf">
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      )}
    </div>
  );
};

export default ResumePDFPage;
