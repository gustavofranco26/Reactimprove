interface ButtonProps {
    cssClass?: string;
    handleClick?: () => void;
    children?: React.ReactNode;
  }
  
  //ab

  function Button({ children, cssClass = "btn", handleClick }: ButtonProps) {
    return (
      <button onClick={handleClick} className={cssClass}>
        {children}
      </button>
    );
  }
  
  export default Button;
