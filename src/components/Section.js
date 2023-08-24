const Section = ({ componentTitle, children }) => {
  return (
    <div className="section">
      <strong>{componentTitle}</strong>
      {children}
    </div>
  );
};

export default Section;
