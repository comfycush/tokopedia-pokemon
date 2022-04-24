import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledPaginationContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const propTypes = {
  count: PropTypes.number,
  limit: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
};

const CustomPaginate = ({
  count,
  limit,
  onChange = () => {},
  page,
}) => {
  function handlePageChange({ selected }) {
    onChange(selected);
  }

  return (
    <StyledPaginationContainer>
      <nav aria-label="Page navigation">
        <ReactPaginate
          initialPage={page}
          previousLabel="&laquo;"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextLabel="&raquo;"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          pageCount={Math.floor(count / limit)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          activeClassName="active"
          breakClassName="page-item"
          breakLinkClassName="page-link"
        />
      </nav>
    </StyledPaginationContainer>
  );
};

export default CustomPaginate;

CustomPaginate.propTypes = propTypes;
