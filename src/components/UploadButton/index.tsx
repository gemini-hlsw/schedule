import React, { useRef } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import { Tooltip } from 'primereact/tooltip';

interface UploadProps{
    label: string
  }




export default function UploadButton( {label}: UploadProps) {
    const toast = useRef<Toast>(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };


    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <div className="flex align-items-center gap-3 ml-auto">
                    <span> {label}</span>
                </div>
            </div>
        );
    };

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };


    return (
            <>
                <Toast ref={toast}></Toast>
                <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />
                <FileUpload name="demo[]" 
                            url={'/api/upload'} 
                            onUpload={onUpload} 
                            accept="image/*" 
                            maxFileSize={1000000} 
                            emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>}
                            headerTemplate={headerTemplate}
                            chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} 
                />
            </>
      );
}