import React, { useState } from 'react';
import DOMPurify from 'dompurify';

const Overview = ({ villa }) => {
  const [showFull, setShowFull] = useState(false);

  // Get the description text - prioritize specificVilla data if available
  const description = villa?.specificVilla?.long_des || villa?.long_des || '';
  
  // Sanitize HTML content
  const sanitizedDesc = DOMPurify.sanitize(description);
  
  // For preview, strip tags and show first 250 chars of plain text + "..."
  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const plainText = stripHtml(description);
  const previewText = plainText.length > 250 
    ? plainText.slice(0, 250) + '...' 
    : plainText;

  return (
    <div id="description" className="space-y-5 text-[#495560]">
      <p className="text-[24px] text-black">Description</p>
      <div className="">
        {plainText.length > 250 ? (
          <>
            <div
              className=" mb-0"
              dangerouslySetInnerHTML={{
                __html: showFull ? sanitizedDesc : previewText,
              }}
            />
            <button
              onClick={() => setShowFull((prev) => !prev)}
              className="text-blue-500 font-medium hover:underline mt-2"
            >
              {showFull ? 'See Less' : 'See More'}
            </button>
          </>
        ) : (
          <div
            className="xlg:text-xl"
            dangerouslySetInnerHTML={{ __html: sanitizedDesc }}
          />
        )}
      </div>
    </div>
  );
};

export default Overview;