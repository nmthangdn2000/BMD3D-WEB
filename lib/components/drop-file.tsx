import React, { useEffect, useState } from 'react';

type DropFileProps = {
  accept?: string;
  onChange?: (files: File[]) => void;
};

export const DropFile = ({ accept, onChange }: DropFileProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  useEffect(() => {
    if (files.length > 0) {
      onChange?.(files);

      inputRef.current!.value = '';
      setFiles([]);
    }
  }, [files]);

  return (
    <div
      className="flex items-center justify-center w-full"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <label
        htmlFor="dropzone-file"
        className="group flex flex-col items-center justify-center p-3 w-full h-40 border-2 border-gray-300 border-dashed rounded-2xl cursor-pointer"
      >
        <div className="bg-gray-50 group-hover:bg-gray-100 w-full h-full rounded-xl">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              Drag file here or browse
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Max file size 20MB
            </p>
          </div>
          <input
            ref={inputRef}
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept={accept}
            multiple
          />
        </div>
      </label>
    </div>
  );
};
