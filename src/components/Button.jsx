/* eslint-disable react/prop-types */
function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-5 my-5 text-2xl font-bold text-white rounded-lg shadow-md bg-primary shadow-primary outline hover:bg-secondary"
    >
      {children}
    </button>
  );
}

export default Button;
