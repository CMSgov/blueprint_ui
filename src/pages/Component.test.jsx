import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Component from "./Component";
import { GlobalStateProvider } from "../GlobalState";

const pageData = {
  id: 4,
  title: "Django",
  description: "Django",
  type: "software",
  catalog_data: {
    CMS_ARS_3_1: {
      high: {
        controls: {},
      },
      moderate: {
        controls: {},
      },
      low: {
        controls: {},
      },
    },
  },
  component_data: {
    title: "Django",
    description: "Django",
    standards: {
      CMS_ARS_3_1: {
        source:
          "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
        controls: {},
      },
    },
  },
  project_data: {
    add: [],
    remove: [],
  },
};

jest.mock("axios");

describe("Component page", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("renders the LoadingIcon when waiting for data, then renders the pageTemplate when page data is successfully returned", async () => {
    const getResponse = { status: 200, data: pageData };
    axios.get.mockImplementation(() => Promise.resolve(getResponse));

    render(
      <MemoryRouter initialEntries={[`/components/${pageData.id}`]}>
        <GlobalStateProvider>
          <Routes>
            <Route path="components/:componentId" element={<Component />} />
          </Routes>
        </GlobalStateProvider>
      </MemoryRouter>
    );
    screen.getByTestId("loading_indicator");
    const expectedTitle = `${pageData.title}`;
    await waitFor(() => {
      // ensures component has finished running async code and has rendered data
      screen.getAllByText(expectedTitle);
    });
  });

  test("renders the ErrorMessage when page data is NOT successfully returned", async () => {
    const nonExistentId = 0;
    const errorResponse = {
      response: {
        message: "Request failed with status code 400",
        code: "ERR_BAD_REQUEST",
        status: 400,
      },
    };
    axios.get.mockImplementation(() => Promise.reject(errorResponse));

    render(
      <MemoryRouter initialEntries={[`/components/${nonExistentId}`]}>
        <GlobalStateProvider>
          <Routes>
            <Route path="components/:id" element={<Component />} />
          </Routes>
        </GlobalStateProvider>
      </MemoryRouter>
    );

    // ensures component has finished running async code and has rendered data
    await waitFor(() => {
      screen.getByText("Error loading component");
    });

    // checks that ErrorMessage component has rendered
    const errorMessage = screen.getByTestId("error_message");
    expect(within(errorMessage).getByRole("heading")).toHaveTextContent(
      "Error"
    );
  });

  test("add component to a project displays toast alert", async () => {
    let dataToRender = Object.assign(pageData);
    dataToRender.project_data.add = [{ label: "Project A", value: 1 }];

    const getResponse = { status: 200, data: dataToRender };
    const postResponse = {
      data: {
        message:
          "AWS and 311 control narratives successfully added to Project A.",
      },
    };
    const mockGet = jest.spyOn(axios, "get");
    const mockPost = jest.spyOn(axios, "post");
    mockGet.mockImplementation(() => Promise.resolve(getResponse));
    mockPost.mockImplementation(() => Promise.resolve(postResponse));

    render(
      <MemoryRouter initialEntries={[`/components/${pageData.id}`]}>
        <ToastContainer />
        <GlobalStateProvider>
          <Routes>
            <Route path="components/:componentId" element={<Component />} />
          </Routes>
        </GlobalStateProvider>
      </MemoryRouter>
    );

    // wait for page data to load
    await waitFor(() => {
      screen.getAllByText(pageData.title);
    });

    // selecting a project in the Add to Project section
    const addSection = screen.getByTestId("add-section");
    await userEvent.type(
      within(addSection).getByTestId("combo-box-input"),
      "Project A"
    );
    // tab onto option
    await userEvent.tab();
    // tab to select the option
    await userEvent.tab();

    await waitFor(() => {
      // Toast alert shows up!
      screen.getByText(postResponse.data.message);
    });

    // initial get call for pageData
    // second get call after post was made to get updated pageData
    expect(mockGet).toHaveBeenCalledTimes(2);
    expect(mockPost).toHaveBeenCalledTimes(1);
  });

  test("remove component from a project displays toast alert", async () => {
    let dataToRender = Object.assign(pageData);
    dataToRender.project_data.remove = [{ label: "Project B", value: 1 }];

    const getResponse = { status: 200, data: dataToRender };
    const postResponse = {
      data: {
        message:
          "AWS and 311 control narratives successfully added to Project B.",
      },
    };
    const mockGet = jest.spyOn(axios, "get");
    const mockPost = jest.spyOn(axios, "post");
    mockGet.mockImplementation(() => Promise.resolve(getResponse));
    mockPost.mockImplementation(() => Promise.resolve(postResponse));

    render(
      <MemoryRouter initialEntries={[`/components/${pageData.id}`]}>
        <ToastContainer />
        <GlobalStateProvider>
          <Routes>
            <Route path="components/:componentId" element={<Component />} />
          </Routes>
        </GlobalStateProvider>
      </MemoryRouter>
    );

    // wait for page data to load
    await waitFor(() => {
      screen.getAllByText(pageData.title);
    });

    // selecting a project in the Add to Project section
    const removeSection = screen.getByTestId("remove-section");
    await userEvent.type(
      within(removeSection).getByTestId("combo-box-input"),
      "Project B"
    );
    // tab onto option
    await userEvent.tab();
    // tab to select the option
    await userEvent.tab();

    await waitFor(() => {
      // Toast alert shows up!
      screen.getByText(postResponse.data.message);
    });

    // initial get call for pageData
    // second get call after post was made to get updated pageData
    expect(mockGet).toHaveBeenCalledTimes(2);
    expect(mockPost).toHaveBeenCalledTimes(1);
  });

  test("failed call to change component on a project displays toast alert error", async () => {
    let dataToRender = Object.assign(pageData);
    dataToRender.project_data.remove = [{ label: "Project C", value: 1 }];

    const getResponse = { status: 200, data: dataToRender };
    const postError = {
      response: {
        message: "Request failed with status code 400",
        code: "ERR_BAD_REQUEST",
        status: 400,
      },
    };
    const mockGet = jest.spyOn(axios, "get");
    const mockPost = jest.spyOn(axios, "post");
    mockGet.mockImplementation(() => Promise.resolve(getResponse));
    mockPost.mockImplementation(() => Promise.reject(postError));

    render(
      <MemoryRouter initialEntries={[`/components/${pageData.id}`]}>
        <ToastContainer />
        <GlobalStateProvider>
          <Routes>
            <Route path="components/:componentId" element={<Component />} />
          </Routes>
        </GlobalStateProvider>
      </MemoryRouter>
    );

    // wait for page data to load
    await waitFor(() => {
      screen.getAllByText(pageData.title);
    });

    // selecting a project in the Add to Project section
    const removeSection = screen.getByTestId("remove-section");
    await userEvent.type(
      within(removeSection).getByTestId("combo-box-input"),
      "Project C"
    );
    // tab onto option
    await userEvent.tab();
    // tab to select the option
    await userEvent.tab();

    const expectedAlertError = "Something went wrong, try again.";
    await waitFor(() => {
      // Toast alert shows up!
      screen.getByText(expectedAlertError);
    });

    expect(mockGet).toHaveBeenCalledTimes(1);
    expect(mockPost).toHaveBeenCalledTimes(1);
  });
});
