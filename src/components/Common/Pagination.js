import React, {Component} from "react";
import PropTypes from "prop-types";
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

export default class AppPagination extends Component {

  static propTypes = {
    show: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired
  };

  handlePageChange = (pageNumber) => {
    this.props.handlePageChange(pageNumber);
  };

  handleFirstPage = () => {
    if (this.props.currentPage > 1) {
      this.props.handlePageChange(1);
    }
  };

  handlePrevPage = () => {
    if (this.props.currentPage > 1) {
      this.props.handlePageChange(this.props.currentPage - 1);
    }
  };

  handleNextPage = () => {
    if (this.props.currentPage < this.props.pageCount) {
      this.props.handlePageChange(this.props.currentPage + 1);
    }
  };

  handleLastPage = () => {
    if (this.props.currentPage < this.props.pageCount) {
      this.props.handlePageChange(this.props.pageCount);
    }
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    let items = [];
    let lowerBound = 1;
    let upperBound = 1;

    // Calculate lower bound and upper bound of the loop below
    if (this.props.currentPage === 1) {
      lowerBound = 1;
      upperBound = this.props.pageCount <= 5 ? this.props.pageCount : 5;
    } else if (this.props.currentPage === 2) {
      lowerBound = 1;
      upperBound = this.props.pageCount <= 5 ? this.props.pageCount : 5;
    } else if (this.props.currentPage === this.props.pageCount - 1) {
      lowerBound = this.props.pageCount - 5 > 1 ? this.props.pageCount - 5 : 1;
      upperBound = this.props.pageCount - 1;
    } else if (this.props.currentPage === this.props.pageCount) {
      lowerBound = this.props.pageCount - 4 > 1 ? this.props.pageCount - 4 : 1;
      upperBound = this.props.pageCount;
    } else {
      lowerBound = this.props.currentPage - 2;
      upperBound = this.props.currentPage + 2;
    }

    for (let i = lowerBound; i <= upperBound; i++) {

      items.push(
        <PaginationItem
          key={i}
          active={this.props.currentPage === i}>
          <PaginationLink onClick={() => this.handlePageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }

    return (
      <Pagination>
        <PaginationItem disabled={this.props.currentPage <= 1}>
          <PaginationLink onClick={this.handleFirstPage}>
            First
          </PaginationLink>
        </PaginationItem>

        <PaginationItem disabled={this.props.currentPage <= 1}>
          <PaginationLink onClick={this.handlePrevPage}>
            Previous
          </PaginationLink>
        </PaginationItem>

        {items}

        <PaginationItem disabled={this.props.currentPage >= this.props.pageCount}>
          <PaginationLink onClick={this.handleNextPage}>
            Next
          </PaginationLink>
        </PaginationItem>

        <PaginationItem disabled={this.props.currentPage >= this.props.pageCount}>
          <PaginationLink onClick={this.handleLastPage}>
            Last
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    );
  }
}
