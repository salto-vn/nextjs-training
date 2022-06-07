interface IBaseModal {
  children: React.ReactNode
  className?: string
  header?: string | React.ReactNode
  footer?: React.ReactNode
  visible: boolean
  hideModal: () => void
}

export default function BaseModal(props: IBaseModal) {
  const { visible, children, hideModal, header, footer, className } = props
  return (
    <>
      <div
        className={`modal fade ${visible ? 'show' : ''}`}
        role="dialog"
        aria-modal="true"
        data-bs-keyboard="false"
        data-bs-backdrop="static"
        style={{ ...visible ? { display: "block" } : { display: "none" } }}
      >
        <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${className || ''}`}>
          <div className="modal-content">
            <div className="modal-header">
              {header ? header : <>
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hideModal}></button></>
              }
            </div>
            <div className="modal-body">
              {children}
            </div>
            {footer && <div className="modal-footer">
              {footer}
            </div>}
          </div>
        </div>
      </div>
      {visible && <div className="modal-backdrop fade show"></div>}
    </>

  )
}
