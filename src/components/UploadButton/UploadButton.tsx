import React, { useRef } from 'react'
import { FileUpload } from 'primereact/fileupload'
import { ProgressBar } from 'primereact/progressbar'
import { Toast } from 'primereact/toast'
import { Tooltip } from 'primereact/tooltip'

import './UploadButton.scss'


interface UploadProps {
  label: string
}

export default function UploadButton({ label }: UploadProps) {
  const toast = useRef<Toast>(null)

  const onUpload = () => {
    toast.current?.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' })
  }

  const headerTemplate = (options: any) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;

    return (
      <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
        <div className="flex align-items-right gap-3 ml-auto" style={{ marginLeft: 1 }}>
          <span>{label}</span>
        </div>
        {chooseButton}
        {uploadButton}
        {cancelButton}
      </div>
    )
  }

  const itemTemplate = (file: any, props: any) => {
    return (
      <div className="flex align-items-left flex-wrap">
        <div className="flex align-items-left" style={{ width: '20%' }}>
          <span className="flex flex-column text-left ml-3">
            {file.name}
          </span>
        </div>
      </div>
    )
  }


  const chooseOptions = {
    icon: 'pi pi-fw pi-images',
    iconOnly: true,
    className: 'custom-choose-btn p-button-rounded p-button-outlined'
  }

  const uploadOptions = {
    icon: 'pi pi-fw pi-cloud-upload',
    iconOnly: true,
    className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'
  }

  const cancelOptions = {
    icon: 'pi pi-fw pi-times',
    iconOnly: true,
    className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'
  }

  return (
    <>
      <Toast ref={toast}></Toast>
      <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />
      <FileUpload
        className="smaller-upload"
        name="demo[]"
        url={'/api/upload'}
        onUpload={onUpload}
        accept="image/*"
        maxFileSize={1000000}
        itemTemplate={itemTemplate}
        headerTemplate={headerTemplate}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
      />
    </>
  );
}