import { render, screen } from "@testing-library/react";
import { getByTestId } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import Pagination from "../molecules/Pagination";

describe("testing expected outcomes using fitst page current", () => {
  const onPageChange = jest.fn();
  let baseUrl = "testing.url";
  let currentPage = 1;

  // test("renders no pagination with one page of content", () => {
  //     let totalCount = 20;
  //     const {container} = render(<Pagination onPageChange={onPageChange} totalCount={totalCount} currentPage={currentPage} baseUrl={baseUrl}/>, {wrapper: MemoryRouter});
  //     expect(container.firstChild).toBeNull();// error  Avoid direct Node access. Prefer using the methods from Testing Library
  // });
  test("renders pagination with two page of content", () => {
    let totalCount = 40;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(1);
    // expect(screen.getByTestId("project_header_title_acronym")).toHaveTextContent(
    //     expectedProjectName
    //   );
  });
  test("renders pagination with three page of content", () => {
    let totalCount = 60;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(1);
  });
  test("renders pagination with four page of content", () => {
    let totalCount = 80;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(1);
  });
  test("renders pagination with five page of content", () => {
    let totalCount = 100;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(1);
  });
  test("renders pagination with six page of content", () => {
    let totalCount = 120;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(1);
  });
  test("renders pagination with seven page of content", () => {
    let totalCount = 140;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(1);
  });
});

describe("testing pagination using page 2 current", () => {
  const onPageChange = jest.fn();
  let baseUrl = "testing.url";
  let currentPage = 2;

  test("renders pagination with two page of content", () => {
    let totalCount = 40;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(2);
  });
  test("renders pagination with 3 page of content", () => {
    let totalCount = 60;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(2);
  });
  test("renders pagination with 4 page of content", () => {
    let totalCount = 80;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(2);
  });
  test("renders pagination with 5 page of content", () => {
    let totalCount = 100;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(2);
  });
  test("renders pagination with 6 page of content", () => {
    let totalCount = 120;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(2);
  });
  test("renders pagination with 7 page of content", () => {
    let totalCount = 140;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(2);
  });
});

describe("testing pagination using page 3 current", () => {
  const onPageChange = jest.fn();
  let baseUrl = "testing.url";
  let currentPage = 3;

  test("renders pagination with 3 page of content", () => {
    let totalCount = 60;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(3);
  });
  test("renders pagination with 4 page of content", () => {
    let totalCount = 80;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(3);
  });
  test("renders pagination with 5 page of content", () => {
    let totalCount = 100;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(3);
  });
  test("renders pagination with 6 page of content", () => {
    let totalCount = 120;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(3);
  });
  test("renders pagination with 7 page of content", () => {
    let totalCount = 140;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(3);
  });
});

describe("testing pagination using page 4 current", () => {
  const onPageChange = jest.fn();
  let baseUrl = "testing.url";
  let currentPage = 4;

  test("renders pagination with 4 page of content", () => {
    let totalCount = 80;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(4);
  });
  test("renders pagination with 5 page of content", () => {
    let totalCount = 100;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(4);
  });
  test("renders pagination with 6 page of content", () => {
    let totalCount = 120;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(4);
  });
  test("renders pagination with 7 page of content", () => {
    let totalCount = 140;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(4);
  });
});

describe("testing pagination using page 5 current", () => {
  const onPageChange = jest.fn();
  let baseUrl = "testing.url";
  let currentPage = 5;

  test("renders pagination with 5 page of content", () => {
    let totalCount = 100;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(5);
  });
  test("renders pagination with 6 page of content", () => {
    let totalCount = 120;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(5);
  });
  test("renders pagination with 7 page of content", () => {
    let totalCount = 140;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(5);
  });
});

describe("testing pagination using page 6 current", () => {
  const onPageChange = jest.fn();
  let baseUrl = "testing.url";
  let currentPage = 6;

  test("renders pagination with 6 page of content", () => {
    let totalCount = 120;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(6);
  });
  test("renders pagination with 7 page of content", () => {
    let totalCount = 140;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent(6);
  });
});

describe("testing pagination using enough pages of content to trigger ellipsis", () => {
  const onPageChange = jest.fn();
  let baseUrl = "testing.url";
  let ellipsis = "…";

  test("renders pagination with ellipsis, when currentPage is 1,2,3 expect to find ellipsis at space 6", () => {
    let totalCount = 140;
    let currentPage = 1;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByTestId("current-page")).toHaveTextContent(1);
    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
    expect(screen.getByText(5)).toBeInTheDocument();
    expect(() => screen.getByText(6)).toThrow();
    expect(screen.getByText(7)).toBeInTheDocument();
    expect(screen.getByText(ellipsis)).toBeInTheDocument();
  });

  test("renders pagination with ellipsis, when currentPage >= 4 expect to find ellipsis at space 2", () => {
    let totalCount = 140;
    let currentPage = 7;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByTestId("current-page")).toHaveTextContent(7);
    expect(() => screen.getByText(2)).toThrow();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
    expect(screen.getByText(5)).toBeInTheDocument();
    expect(screen.getByText(6)).toBeInTheDocument();
    expect(screen.getByText(7)).toBeInTheDocument();
    expect(screen.getByText(ellipsis)).toBeInTheDocument();
  });

  test("renders pagination with ellipsis 20 pages, when currentPage >= 4 expect to find ellipsis at space 2", () => {
    let totalCount = 200;
    let currentPage = 4;
    render(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        currentPage={currentPage}
        baseUrl={baseUrl}
      />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByTestId("current-page")).toHaveTextContent(4);
    expect(() => screen.getByText(2)).toThrow();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
    expect(screen.getByText(5)).toBeInTheDocument();
    expect(() => screen.getByText(6)).toThrow();
    expect(() => screen.getByText(7)).toThrow();
    expect(() => screen.getByText(8)).toThrow();
    expect(() => screen.getByText(9)).toThrow();
    expect(screen.getByText(10)).toBeInTheDocument();
    expect(screen.getAllByText(ellipsis)).toHaveLength(2);
  });
});
