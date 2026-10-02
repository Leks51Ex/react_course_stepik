export default function Button({ children, click, variant }) {
  return (
    <button className={variant} onClick={click}>
      {children}
    </button>
  );
}
