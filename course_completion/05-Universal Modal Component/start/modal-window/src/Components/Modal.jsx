export default function Modal({ isModalOpen, title, subtitle, children }) {
  return (
    <div className="overlay" onClick={isModalOpen}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modalHeader">{title}</h2>
        <div className="modalBody">{subtitle}</div>
        <div className="modalFooter">{children}</div>
      </div>
    </div>
  );
}
