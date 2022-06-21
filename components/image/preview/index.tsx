import Image from "next/image"
import React from "react"
import styles from "../../../styles/FilePreview.module.scss"

const FilePreview = (props: any) => {
  const { fileData, onRemoveImage } = props
  const aspectRatio = props.aspectRatio || (16 / 9)
  return (
    <div className={styles.previewContainer}>
      <div className="row">
        {fileData?.fileList?.map((f: any, idx: number) => {
          const imageURL = URL.createObjectURL(f)
          return (
            <div key={idx} className={`col-3 ${styles.imageContain}`}>
              <Image alt="upload-preview" width={250} height={250 / aspectRatio} layout="responsive" src={imageURL} />
              <p>{f.name}</p>
              <div className={styles.cancelBtn}>
                <Image alt="upload-cancel" width={25} height={25} src="/cancel.svg" onClick={() => onRemoveImage(idx)} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilePreview
