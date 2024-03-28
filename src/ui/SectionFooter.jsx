import PropTypes from "prop-types";
function SectionFooter({ children }) {
  return (
    <div className="mt-20 z-[100] flex items-center justify-center flex-col gap-7">
      {children}
    </div>
  );
}

SectionFooter.propTypes = {
  children: PropTypes.any,
};

export default SectionFooter;
