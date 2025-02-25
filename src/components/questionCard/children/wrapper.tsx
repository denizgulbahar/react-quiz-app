export const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="max-w-[1100px] bg-[#ebfeff] rounded-lg border-2 border-[#0085a3] p-5 shadow-md text-center">
        {children}
      </div>
    );
};
  