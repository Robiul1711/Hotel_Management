import React, { useState } from 'react';
import { Button, Flex, Modal, message } from 'antd';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MenuModal = ({ pdfUrl }) => {
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <Flex vertical gap="middle" align="flex-start">
      <button
        onClick={() => {
          if (!pdfUrl) {
            message.warning('Menu PDF is not available yet');
            return;
          }
          setOpen(true);
        }}
        className="bg-primary text-white md:px-16 py-1 px-2 md:py-3 rounded-full hover:bg-orange-600 transition-all mt-10"
      >
        View Menu
      </button>

      <Modal
        title="Our Restaurant Menu"
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={800}
      >
        {pdfUrl ? (
          <div className="flex flex-col items-center">
            <div className="border rounded-lg overflow-hidden shadow-md">
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="p-8 text-center">Loading menu...</div>}
                error={<div className="p-8 text-center text-red-500">Failed to load menu PDF</div>}
              >
                <Page 
                  pageNumber={pageNumber} 
                  width={700} 
                  loading={<div className="p-8 text-center">Loading page...</div>}
                />
              </Document>
            </div>

            {numPages > 1 && (
              <div className="flex items-center justify-center mt-4 gap-4">
                <Button 
                  onClick={previousPage} 
                  disabled={pageNumber <= 1}
                  className="flex items-center"
                >
                  Previous
                </Button>
                <span>
                  Page {pageNumber} of {numPages}
                </span>
                <Button 
                  onClick={nextPage} 
                  disabled={pageNumber >= numPages}
                  className="flex items-center"
                >
                  Next
                </Button>
              </div>
            )}

            <div className="mt-4 text-center">
              <a 
                href={pdfUrl} 
                download="Restaurant_Menu.pdf"
                className="text-primary hover:underline"
              >
                Download Full Menu
              </a>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            Menu PDF is not available at the moment. Please check back later.
          </div>
        )}
      </Modal>
    </Flex>
  );
};

export default MenuModal;