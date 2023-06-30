import './search-box.styles.scss';

const SearchBox = ({ className, onChangeHandler, placeholder }) => (
    <input
      className={className}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
  
  export default SearchBox;