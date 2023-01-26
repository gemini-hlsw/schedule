import { ChangeEvent, useState, useRef } from 'react';
import './UploadButton.scss';

export default function FileUploadSingle() {

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
        <div>
          <button onClick={handleUploadClick} className='upload-btn'>
            {file ? <i className='pi pi-upload'></i>  :  <i className='pi pi-times-circle'></i>}
                
          </button>
          <span>
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