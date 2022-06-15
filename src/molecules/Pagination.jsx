import { PaginationLogic } from "./PaginationLogic";

const PaginationPrevious = ({ onPrevious, currentPage, url }) => {
  if (currentPage === 1) {
    return "";
  }
  return (
    <li className="usa-pagination__item usa-pagination__arrow">
      <a
        href={url}
        onClick={onPrevious}
        className="usa-pagination__link usa-pagination__previous-page"
        aria-label="Previous page"
      >
        <svg className="usa-icon" aria-hidden="true" role="img">
          {/* <use xlink:href="/assets/img/sprite.svg#navigate_before"></use> */}
        </svg>
        <span className="usa-pagination__link-text">&#12296; Previous</span>
      </a>
    </li>
  );
};

const PaginationCurrent = ({ number, url }) => {
  return (
    <li className="usa-pagination__item usa-pagination__page-no">
      <a
        href={url}
        className="usa-pagination__button usa-current"
        data-testid="current-page"
        aria-label="Page {number}"
        aria-current="page"
        aria-disabled="true"
      >
        {number}
      </a>
    </li>
  );
};

const PaginationPage = ({ number, url }) => {
  return (
    <li className="usa-pagination__item usa-pagination__page-no">
      <a
        href={url}
        className="usa-pagination__button"
        aria-label="Page {number}"
      >
        {number}
      </a>
    </li>
  );
};

const PaginationSpacer = () => {
  return (
    <li
      className="usa-pagination__item usa-pagination__overflow"
      role="presentation"
    >
      <span>…</span>
    </li>
  );
};

const PaginationNext = ({ onNext, currentPage, paginationRange, url }) => {
  let lastPage = paginationRange[paginationRange.length - 1];
  if (currentPage === lastPage) {
    return "";
  }
  return (
    <li className="usa-pagination__item usa-pagination__arrow">
      <a
        href={url}
        onClick={onNext}
        className="usa-pagination__link usa-pagination__next-page"
        aria-label="Next page"
      >
        <span className="usa-pagination__link-text">Next &#12297;</span>
        <svg className="usa-icon" aria-hidden="true" role="img">
          {/* <use xlink:href="/assets/img/sprite.svg#navigate_next"></use> */}
        </svg>
      </a>
    </li>
  );
};

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    currentPage,
    pageSize = 20,
    baseUrl,
  } = props;
  const paginationRange = PaginationLogic({
    currentPage,
    totalCount,
    pageSize,
  });
  if (paginationRange.length < 2) {
    return <></>;
  }
  const getUrl = (pageNumber) => {
    return baseUrl + "?page=" + pageNumber;
  };
  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let rows = [];
  let i = 0;

  while (i < paginationRange.length) {
    if (paginationRange[i] === true) {
      rows.push(<PaginationSpacer key={i} />);
    } else if (currentPage === paginationRange[i]) {
      rows.push(
        <PaginationCurrent
          key={i}
          number={paginationRange[i]}
          url={getUrl(paginationRange[i])}
        />
      );
    } else {
      rows.push(
        <PaginationPage
          key={i}
          number={paginationRange[i]}
          url={getUrl(paginationRange[i])}
        />
      );
    }
    i++;
  }
  return (
    <>
      <nav aria-label="Pagination" className="usa-pagination">
        <ul className="usa-pagination__list">
          <PaginationPrevious
            onPrevious={onPrevious}
            currentPage={currentPage}
            url={getUrl(currentPage - 1)}
          />
          {rows}
          <PaginationNext
            onNext={onNext}
            currentPage={currentPage}
            paginationRange={paginationRange}
            url={getUrl(currentPage + 1)}
          />
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
