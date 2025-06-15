import React from 'react';
import { Calculator, Sigma } from 'lucide-react';
import { MathSymbol } from '../types/Language';

interface MathToolbarProps {
  onInsertMath: (latex: string) => void;
  isVisible: boolean;
}

const mathSymbols: MathSymbol[] = [
  // Basic operators
  { symbol: '+', latex: '+', category: 'basic', description: 'Addition' },
  { symbol: '−', latex: '-', category: 'basic', description: 'Subtraction' },
  { symbol: '×', latex: '\\times', category: 'basic', description: 'Multiplication' },
  { symbol: '÷', latex: '\\div', category: 'basic', description: 'Division' },
  { symbol: '=', latex: '=', category: 'basic', description: 'Equals' },
  { symbol: '≠', latex: '\\neq', category: 'basic', description: 'Not equal' },
  { symbol: '≈', latex: '\\approx', category: 'basic', description: 'Approximately' },
  
  // Relations
  { symbol: '<', latex: '<', category: 'relations', description: 'Less than' },
  { symbol: '>', latex: '>', category: 'relations', description: 'Greater than' },
  { symbol: '≤', latex: '\\leq', category: 'relations', description: 'Less than or equal' },
  { symbol: '≥', latex: '\\geq', category: 'relations', description: 'Greater than or equal' },
  
  // Greek letters
  { symbol: 'α', latex: '\\alpha', category: 'greek', description: 'Alpha' },
  { symbol: 'β', latex: '\\beta', category: 'greek', description: 'Beta' },
  { symbol: 'γ', latex: '\\gamma', category: 'greek', description: 'Gamma' },
  { symbol: 'δ', latex: '\\delta', category: 'greek', description: 'Delta' },
  { symbol: 'θ', latex: '\\theta', category: 'greek', description: 'Theta' },
  { symbol: 'λ', latex: '\\lambda', category: 'greek', description: 'Lambda' },
  { symbol: 'π', latex: '\\pi', category: 'greek', description: 'Pi' },
  { symbol: 'σ', latex: '\\sigma', category: 'greek', description: 'Sigma' },
  { symbol: 'φ', latex: '\\phi', category: 'greek', description: 'Phi' },
  { symbol: 'ω', latex: '\\omega', category: 'greek', description: 'Omega' },
  
  // Functions
  { symbol: 'sin', latex: '\\sin', category: 'functions', description: 'Sine' },
  { symbol: 'cos', latex: '\\cos', category: 'functions', description: 'Cosine' },
  { symbol: 'tan', latex: '\\tan', category: 'functions', description: 'Tangent' },
  { symbol: 'log', latex: '\\log', category: 'functions', description: 'Logarithm' },
  { symbol: 'ln', latex: '\\ln', category: 'functions', description: 'Natural log' },
  
  // Symbols
  { symbol: '∞', latex: '\\infty', category: 'symbols', description: 'Infinity' },
  { symbol: '∑', latex: '\\sum', category: 'symbols', description: 'Sum' },
  { symbol: '∫', latex: '\\int', category: 'symbols', description: 'Integral' },
  { symbol: '√', latex: '\\sqrt{}', category: 'symbols', description: 'Square root' },
  { symbol: 'x²', latex: 'x^2', category: 'symbols', description: 'Superscript' },
  { symbol: 'x₁', latex: 'x_1', category: 'symbols', description: 'Subscript' },
  { symbol: '½', latex: '\\frac{1}{2}', category: 'symbols', description: 'Fraction' }
];

const categories = [
  { id: 'basic', name: 'Basic', icon: Calculator },
  { id: 'relations', name: 'Relations', icon: Calculator },
  { id: 'greek', name: 'Greek', icon: Sigma },
  { id: 'functions', name: 'Functions', icon: Calculator },
  { id: 'symbols', name: 'Symbols', icon: Sigma }
];

const MathToolbar: React.FC<MathToolbarProps> = ({ onInsertMath, isVisible }) => {
  const [activeCategory, setActiveCategory] = React.useState('basic');

  if (!isVisible) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4 fade-in">
      <div className="flex items-center space-x-2 mb-3">
        <Calculator className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Mathematical Symbols</span>
      </div>
      
      <div className="flex space-x-1 mb-3 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-3 py-1 text-xs rounded transition-colors whitespace-nowrap ${
              activeCategory === category.id
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-6 sm:grid-cols-8 gap-1">
        {mathSymbols
          .filter(symbol => symbol.category === activeCategory)
          .map((symbol, index) => (
            <button
              key={index}
              onClick={() => onInsertMath(symbol.latex)}
              className="math-symbol flex items-center justify-center h-8 text-center"
              title={symbol.description}
            >
              {symbol.symbol}
            </button>
          ))}
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200">
        <div className="text-xs text-gray-500 mb-2">Common Templates:</div>
        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => onInsertMath('\\frac{a}{b}')}
            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition-colors"
          >
            Fraction
          </button>
          <button
            onClick={() => onInsertMath('x^{a}')}
            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition-colors"
          >
            Power
          </button>
          <button
            onClick={() => onInsertMath('\\sqrt{x}')}
            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition-colors"
          >
            Square Root
          </button>
          <button
            onClick={() => onInsertMath('\\int_{a}^{b}')}
            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition-colors"
          >
            Integral
          </button>
          <button
            onClick={() => onInsertMath('\\sum_{i=1}^{n}')}
            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition-colors"
          >
            Summation
          </button>
        </div>
      </div>
    </div>
  );
};

export default MathToolbar;