import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface MathRendererProps {
  content: string;
}

const MathRenderer: React.FC<MathRendererProps> = ({ content }) => {
  const renderContent = (text: string) => {
    // Split content by math blocks and inline math
    const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$)/);
    
    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        // Block math
        const math = part.slice(2, -2).trim();
        try {
          return <BlockMath key={index} math={math} />;
        } catch (error) {
          return (
            <div key={index} className="text-red-500 bg-red-50 p-2 rounded text-sm">
              Math Error: {math}
            </div>
          );
        }
      } else if (part.startsWith('$') && part.endsWith('$')) {
        // Inline math
        const math = part.slice(1, -1).trim();
        try {
          return <InlineMath key={index} math={math} />;
        } catch (error) {
          return (
            <span key={index} className="text-red-500 bg-red-50 px-1 rounded text-sm">
              {part}
            </span>
          );
        }
      } else {
        // Regular text with line breaks
        return part.split('\n').map((line, lineIndex, array) => (
          <React.Fragment key={`${index}-${lineIndex}`}>
            {line}
            {lineIndex < array.length - 1 && <br />}
          </React.Fragment>
        ));
      }
    });
  };

  return <div className="math-content">{renderContent(content)}</div>;
};

export default MathRenderer;