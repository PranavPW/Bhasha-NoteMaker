import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, Zap, AlertTriangle, CheckCircle } from 'lucide-react';
import { nlpService } from '../utils/indicNLPService';

interface NLPStatusIndicatorProps {
  onStatusChange?: (status: 'api' | 'local' | 'offline') => void;
}

const NLPStatusIndicator: React.FC<NLPStatusIndicatorProps> = ({ onStatusChange }) => {
  const [status, setStatus] = useState<'checking' | 'api' | 'local' | 'offline'>('checking');
  const [apiLatency, setApiLatency] = useState<number | null>(null);

  useEffect(() => {
    checkNLPStatus();
  }, []);

  const checkNLPStatus = async () => {
    try {
      // Try to ping a health endpoint (this would be your actual API)
      const startTime = Date.now();
      
      // Since we don't have a real API endpoint, we'll simulate the check
      // In a real implementation, you would check your actual API endpoint
      const mockApiCheck = new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate API not available for now
          reject(new Error('API not available'));
        }, 1000);
      });
      
      await mockApiCheck;
      
      const latency = Date.now() - startTime;
      setApiLatency(latency);
      setStatus('api');
      nlpService.enableAPI('/api');
      onStatusChange?.('api');
    } catch (error) {
      // Fallback to local implementation
      setStatus('local');
      nlpService.disableAPI();
      onStatusChange?.('local');
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'checking':
        return <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600" />;
      case 'api':
        return <Wifi className="h-4 w-4 text-green-600" />;
      case 'local':
        return <Zap className="h-4 w-4 text-yellow-600" />;
      case 'offline':
        return <WifiOff className="h-4 w-4 text-red-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'checking':
        return 'Checking NLP status...';
      case 'api':
        return `API Connected (${apiLatency}ms)`;
      case 'local':
        return 'Local NLP Active';
      case 'offline':
        return 'NLP Offline';
      default:
        return 'Unknown Status';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'api':
        return 'bg-green-50 border-green-200 text-green-700';
      case 'local':
        return 'bg-yellow-50 border-yellow-200 text-yellow-700';
      case 'offline':
        return 'bg-red-50 border-red-200 text-red-700';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  return (
    <div className={`flex items-center space-x-2 px-3 py-1 rounded-lg border text-xs ${getStatusColor()}`}>
      {getStatusIcon()}
      <span className="font-medium">{getStatusText()}</span>
      {status === 'api' && (
        <CheckCircle className="h-3 w-3 text-green-600" />
      )}
      <button
        onClick={checkNLPStatus}
        className="ml-2 text-xs underline hover:no-underline"
        title="Refresh NLP Status"
      >
        Refresh
      </button>
    </div>
  );
};

export default NLPStatusIndicator;