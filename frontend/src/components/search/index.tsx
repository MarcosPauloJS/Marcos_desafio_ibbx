import { Wapper, Describe, SearchInput, WrapperInput } from "./styled";
import { FaSearch } from "react-icons/fa";
import debounce from "lodash.debounce";
import { useCallback } from "react";

interface SearchProps {
  describe: string;
  searchChange: (value: string) => void;
}

function Search({ describe, searchChange }: SearchProps) {
  const debounced = useCallback(
    debounce((nextValue: any) => {
      searchChange(nextValue);
    }, 1000),
    []
  );

  return (
    <Wapper>
      <Describe>{describe}</Describe>
      <WrapperInput>
        <FaSearch />
        <SearchInput
          placeholder="Pesquisar ..."
          onChange={(event) => {
            event.preventDefault();
            debounced(event?.target.value || "");
          }}
        />
      </WrapperInput>
    </Wapper>
  );
}

export default Search;
