import { ZapIcon, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const RateLimitedUi = () => {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 bg-amber-100 rounded-full p-3">
            <ZapIcon className="w-6 h-6 text-amber-600" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Rate Limit Reached
            </h2>
            <p className="text-slate-600 mb-4">
              You've made too many requests. Please wait a moment before trying again.
            </p>

            {/* Countdown */}
            {countdown > 0 ? (
              <div className="flex items-center gap-2 text-slate-700 bg-slate-50 rounded-lg px-4 py-3 mb-4">
                <Clock className="w-5 h-5 text-slate-500" />
                <span>Please wait <strong className="text-slate-900">{countdown}s</strong></span>
              </div>
            ) : (
              <div className="text-green-600 font-medium mb-4">
                ✓ Ready! You can try again now.
              </div>
            )}

            {/* Button */}
            <button
              disabled={countdown > 0}
              onClick={() => window.location.reload()}
              className={`
                w-full px-6 py-3 rounded-lg font-medium transition-colors
                ${countdown > 0 
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
                }
              `}
            >
              {countdown > 0 ? 'Please Wait...' : 'Try Again'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUi;