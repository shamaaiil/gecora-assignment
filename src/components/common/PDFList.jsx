const PDFList = ({ files, onRemove, formatFileSize }) => {
  return (
    <div className="space-y-2">
      {files.map((file, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-50 p-2 rounded"
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <div>
              <p
                className="text-sm font-medium text-gray-700 truncate"
                title={file.name}
              >
                {file.name}
              </p>
              <p className="text-xs text-gray-500">
                {formatFileSize(file.size)}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="ml-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default PDFList;
