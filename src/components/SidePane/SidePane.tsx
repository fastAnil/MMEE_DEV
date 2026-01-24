import { useState, useEffect } from "react";

interface SidePaneProps {
  title: string;
}

export default function SidePane({ title }: SidePaneProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);


  

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsExpanded(!mobile); // Expand on desktop, collapse on mobile by default
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`side-pane ${isExpanded ? 'expanded' : 'collapsed'} ${isMobile ? 'mobile' : 'desktop'}`}>
      <div className="side-pane-header">
        <h4>{title}</h4>
        {isMobile && (
          <button 
            className="toggle-button" 
            onClick={toggleExpanded}
            aria-label={`Toggle ${title} panel`}
          >
            {isExpanded ? '▲' : '▼'}
          </button>
        )}
      </div>
      {isExpanded && (
        <div className="side-pane-content">
          <p>Content for {title}</p>
          {/* Add your actual content here */}
        </div>
      )}
    </div>
  );
}
