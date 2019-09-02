import React from "react";

const SectionHeader = ({ title, subtitle }: any) => (
  <div className="level">
    <div className="level-left">
      <h2 className="title is-4 level-item">{title}</h2>
      {subtitle && <h4 className="subtitle is-6 level-item">{subtitle}</h4>}
    </div>
    <div className="level-right is-hidden-print">
      <a className="level-item" href="#top">
        Back to top
      </a>
    </div>
  </div>
);

export default SectionHeader;
