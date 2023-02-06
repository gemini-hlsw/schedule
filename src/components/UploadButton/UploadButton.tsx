import { ChangeEvent, useState, useRef } from 'react';
import './UploadButton.scss';

interface UploadProps{
  label: string
}


export default function UploadButton( {label}: UploadProps) {


    const[file, setFile] = useState<File>();
    const inputRef = useRef<HTMLInputElement | null>(null);
    
    const handleUploadClick = () => {
        inputRef.current?.click();
    };
    
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    return (
        <div className='upload-btn-container'>
          <button onClick={handleUploadClick} className='upload-btn'>
            {file ? <i className='pi pi-times-circle'></i> : <i className='pi pi-upload'></i>}
                
          </button>
          <span className='label'>
            {label}:
          </span>
          <span className='filename'>
            {file ? `${file.name}` : 'No file'}
          </span>
          
          <input
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
      );
}