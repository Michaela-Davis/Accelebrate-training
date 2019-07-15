import React from 'react';
import PropTypes from 'prop-types';

export const UnorderedList = (props) => {
  

  return <ul>
    {props.items.length=== 0 && <li>There are no items.</li>}
    {props.items.map((item, index) => <li key={index}> {item}</li>)}
  </ul>;
};

UnorderedList.defaultProps = {
  items: [],
  children: item => item,
  emptyListText: 'There are no items.',
};

UnorderedList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.func,
  emptyListText: PropTypes.string,
};