import React, {Component} from "react";
import PropTypes from "prop-types";
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

export default class AppPagination extends Component {

  static propTypes = {
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
    let items = [];
    for (let i = 1; i <= this.props.pageCount; i++) {
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
