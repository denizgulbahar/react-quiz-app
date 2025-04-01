export const CardWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div 
      className="card-wrapper"
      style={{ padding: '20px' }}
    >
      {children}
    </div>
  );
};

  