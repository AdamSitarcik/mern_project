import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useAppContext } from '../context/appContext';
import { useState, useMemo } from 'react';

function SearchContainer() {
  const [localSearch, setLocalSearch] = useState('');
  const { isLoading, search, searchStatus, searchType, sort, sortOptions, handleChange, clearFilters, jobTypeOptions, statusOptions } = useAppContext();

  const handleSearch = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch('');
    clearFilters();
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        handleChange({ name: e.target.name, value: e.target.value });
      }, 1000);
    };
  };

  const optimisedDebounce = useMemo(() => debounce(), []);

  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className="form-center">
          <FormRow labelText='search position' type='text' name='search' value={localSearch} handleChange={optimisedDebounce} />
          <FormRowSelect labelText='status' name='searchStatus' value={searchStatus} handleChange={handleSearch} list={['all', ...statusOptions]} />
          <FormRowSelect labelText='job type' name='searchType' value={searchType} handleChange={handleSearch} list={['all', ...jobTypeOptions]} />
          <FormRowSelect name='sort' value={sort} handleChange={handleSearch} list={sortOptions} />
          <button className='btn btn-block btn-danger' disabled={isLoading} onClick={handleSubmit}>clear filters</button>
        </div>
      </form>
    </Wrapper>
  );
}
export default SearchContainer;