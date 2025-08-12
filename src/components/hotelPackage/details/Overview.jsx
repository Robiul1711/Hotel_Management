import React, { useState } from 'react';
import DOMPurify from 'dompurify';

const Overview = ({ villa }) => {
  const [showFull, setShowFull] = useState(false);

  // Sanitize full HTML content from backend
  const sanitizedFullDesc = villa?.long_des ? DOMPurify.sanitize(villa.long_des) : '';

  // For preview, strip tags and show first 250 chars of plain text + "..."
  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const previewText = villa?.long_des
    ? stripHtml(villa.long_des).slice(0, 250) + '...'
    : '';

  return (
    <div id="description" className="space-y-5 text-[#495560]">
      <p className="text-[24px] text-black">Description</p>
      <div className="hidden md:block">
        {villa?.long_des?.length > 250 ? (
          <>
            <p
              className="xlg:text-xl"
              dangerouslySetInnerHTML={{
                __html: showFull ? sanitizedFullDesc : previewText,
              }}
            />
            <button
              onClick={() => setShowFull((prev) => !prev)}
              className="text-blue-500 font-medium"
            >
              {showFull ? 'See Less' : 'See More'}
            </button>
          </>
        ) : (
          <p
            className="xlg:text-xl"
            dangerouslySetInnerHTML={{ __html: sanitizedFullDesc }}
          />
        )}
      </div>
    </div>
  );
};

export default Overview;
