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
          <PaginationLink previous onClick={this.handlePrevPage}/>
        </PaginationItem>

        {items}

        <PaginationItem disabled={this.props.currentPage >= this.props.pageCount}>
          <PaginationLink next onClick={this.handleNextPage}/>
        </PaginationItem>
      </Pagination>
    );
  }
}
