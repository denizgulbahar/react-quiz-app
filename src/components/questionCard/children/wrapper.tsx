export const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div 
      className="
        max-w-[1100px] 
        bg-red-500
        rounded-lg 
        border-2 
        border-[#0085a3] 
        p-5
        flex-col
        shadow-md 
        text-center
      "
      style={{ padding: '20px' }}
    >
      {children}
    </div>
  );
};

  