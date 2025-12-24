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
    <div className="min-h-screen flex items-center justify-center bg-transparent p-4">
      <div className="max-w-xl w-full bg-[#2d2433] rounded-2xl shadow-2xl border border-[#d4955b] p-8">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 bg-[#d4955b] bg-opacity-20 rounded-full p-3 border border-[#d4955b]">
            <ZapIcon className="w-6 h-6 text-[#d4955b]" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#d4955b] mb-2">
              Rate Limit Reached
            </h2>
            <p className="text-[#b8a49b] mb-4">
              You've made too many requests. Please wait a moment before trying again.
            </p>

            {/* Countdown */}
            {countdown > 0 ? (
              <div className="flex items-center gap-2 text-[#b8a49b] bg-[#1f1825] rounded-lg px-4 py-3 mb-4 border border-[#3d3142]">
                <Clock className="w-5 h-5 text-[#d4955b]" />
                <span>Please wait <strong className="text-[#d4955b]">{countdown}s</strong></span>
              </div>
            ) : (
              <div className="text-[#d4955b] font-medium mb-4 flex items-center gap-2">
                <span className="text-xl">✓</span> Ready! You can try again now.
              </div>
            )}

            {/* Button */}
            <button
              disabled={countdown > 0}
              onClick={() => window.location.reload()}
              className={`
                w-full px-6 py-3 rounded-lg font-medium transition-all duration-200
                ${countdown > 0 
                  ? 'bg-[#3d3142] text-[#6d5f66] cursor-not-allowed border border-[#3d3142]' 
                  : 'bg-[#d4955b] text-[#1a1a1a] hover:bg-[#e5a66c] border border-[#d4955b] hover:shadow-lg hover:shadow-[#d4955b]/20'
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
