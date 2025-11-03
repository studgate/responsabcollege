import React from 'react';
import { ChevronLeft, ChevronRight, Bell } from 'lucide-react';

const AnnouncementBar = ({ items = [], color = 'bg-amber-500', textColor = 'text-gray-900' }) => {
  const [index, setIndex] = React.useState(0);
  const [collapsed, setCollapsed] = React.useState(false);

  if (!items.length || collapsed) return null;

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  const currentItem = items[index];
  const hasAction = typeof currentItem === 'object' && currentItem.action;

  return (
    <div className={`${color} ${textColor} py-2.5 sm:py-2 border-b border-black/10`}> 
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex flex-wrap items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5 sm:gap-2 font-semibold tracking-widest uppercase text-xs sm:text-xs">
          <Bell className="w-4 h-4 sm:w-4 sm:h-4 flex-shrink-0" /> 
          <span className="text-[11px] sm:text-xs">Alerts</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <button aria-label="Previous announcement" onClick={prev} className="w-7 h-7 sm:w-7 sm:h-7 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center touch-manipulation">
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button aria-label="Next announcement" onClick={next} className="w-7 h-7 sm:w-7 sm:h-7 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center touch-manipulation">
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
        <div className="relative overflow-hidden flex-1 min-w-0">
          <div key={index} className="text-[11px] sm:text-sm md:text-base whitespace-nowrap animate-[slide-up_0.25s_ease-out]">
            {typeof currentItem === 'object' ? currentItem.text : currentItem}
          </div>
        </div>
        {hasAction && (
          <button 
            onClick={currentItem.action}
            className="px-3 py-1.5 sm:px-4 sm:py-1 bg-black/20 hover:bg-black/30 rounded-lg text-xs sm:text-sm font-medium transition-colors touch-manipulation flex-shrink-0"
          >
            {currentItem.actionText || 'Learn More'}
          </button>
        )}
        <button aria-label="Collapse announcement" onClick={() => setCollapsed(true)} className="text-xs sm:text-sm underline/50 hover:underline flex-shrink-0 touch-manipulation">
          Hide
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
