
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown, XCircle } from 'lucide-react';

const FilterDropdown = ({ triggerLabel, items, value, onValueChange, filterKey }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2" aria-label={`Filter by ${triggerLabel}: ${value}`}>
          {triggerLabel}: <span className="font-semibold text-primary">{value}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={value} onValueChange={(val) => onValueChange(filterKey, val)}>
          {value !== 'All' && (
            <>
              <DropdownMenuRadioItem value="All" className="flex items-center gap-2 text-red-600">
                <XCircle className="w-4 h-4" /> Clear Filter
              </DropdownMenuRadioItem>
              <DropdownMenuSeparator />
            </>
          )}
          {items.map((item) => (
            <DropdownMenuRadioItem key={item} value={item}>
              {item}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
