import { useState } from 'react';

function Tabs({ entries }) {
  const [isEntryOpen, setIsEntryOpen] = useState({});
  function toggleEntry(title) {
    setIsEntryOpen({
      ...isEntryOpen,
      [title]: !isEntryOpen[title],
    });
  }

  return (
    <div className="tabs">
      { Object.keys(entries).map( title => {
        const isOpen = isEntryOpen[title];
        return (
            <div key={title} className={`tabs__entry ${isOpen ? 'tabs__entry--open' : '' }`}>
            <button className="tabs__title" onClick={ () => toggleEntry(title) }>
              {title}
            </button>
            <div className="tabs__body">{entries[title]}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Tabs;