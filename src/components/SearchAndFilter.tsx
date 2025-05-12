
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface SearchAndFilterProps {
  filterOptions: {
    id: string;
    name: string;
    options: { value: string; label: string }[];
  }[];
  onSearch: (value: string) => void;
  onFilter: (id: string, value: string) => void;
}

const SearchAndFilter = ({ filterOptions, onSearch, onFilter }: SearchAndFilterProps) => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input 
          placeholder="Search..."
          className="pl-9"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {filterOptions.map((filter) => (
        <Select 
          key={filter.id}
          onValueChange={(value) => onFilter(filter.id, value)}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder={filter.name} />
          </SelectTrigger>
          <SelectContent>
            {filter.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  );
};

export default SearchAndFilter;
