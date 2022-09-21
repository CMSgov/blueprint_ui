import { render, screen, waitFor } from "@testing-library/react";
import { useContext, useEffect, useState } from "react";
import { MemoryRouter } from "react-router-dom";
import { GlobalStateProvider } from "../GlobalState";
import { MAIN_ROUTES } from "../AppRoutes";
import App from "../App";
import Breadcrumbs from "./Breadcrumbs";

test("renders breadcrumbs no url", async () => {
  render(
    <MemoryRouter initialEntries={[""]}>
      <App />
    </MemoryRouter>
  );
  await waitFor(() => {
    const breadcrumbs = screen.queryByTestId("breadcrumbs-bar");
    expect(breadcrumbs).toBeNull();
  });
});

test("renders breadcrumbs home", async () => {
  render(
    <MemoryRouter initialEntries={[MAIN_ROUTES.HOME]}>
      <App />
    </MemoryRouter>
  );
  await waitFor(() => {
    const breadcrumbs = screen.queryByTestId("breadcrumbs-bar");
    expect(breadcrumbs).toBeNull();
  });
});

// test("renders breadcrumbs healthcheck", async () => {
//   render(
//     <MemoryRouter initialEntries={[MAIN_ROUTES.HEALTHCHECK]}>
//       <App />
//     </MemoryRouter>
//   );
//
//   await waitFor(() => {
//     expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
//   });
//   await waitFor(() => {
//     expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent(
//       "healthcheck"
//     );
//   });
// });

test("renders breadcrumbs help", async () => {
  render(
    <MemoryRouter initialEntries={[MAIN_ROUTES.HELP]}>
      <App />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("help");
  });
});

test("renders breadcrumbs help faq", async () => {
  render(
    <MemoryRouter initialEntries={["/help/faq"]}>
      <App />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("help");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("faq");
  });
});

test("renders breadcrumbs help contact-us", async () => {
  render(
    <MemoryRouter initialEntries={["/help/contact-us"]}>
      <App />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("help");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent(
      "contact us"
    );
  });
});

test("renders breadcrumbs project setup", async () => {
  render(
    <MemoryRouter initialEntries={[MAIN_ROUTES.PROJECT_SETUP]}>
      <App />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent(
      "project setup"
    );
  });
});

test("renders breadcrumbs project setup confirmation", async () => {
  render(
    <MemoryRouter initialEntries={["/project-setup/confirmation"]}>
      <App />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent(
      "project setup"
    );
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent(
      "confirmation"
    );
  });
});

test("renders breadcrumbs project setup confirmation select components", async () => {
  render(
    <MemoryRouter
      initialEntries={["/project-setup/confirmation/select-components"]}
    >
      <App />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent(
      "project setup"
    );
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent(
      "confirmation"
    );
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent(
      "select components"
    );
  });
});

test("renders breadcrumbs component library", async () => {
  render(
    <MemoryRouter initialEntries={[MAIN_ROUTES.COMPONENT_LIBRARY]}>
      <App />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent(
      "components"
    );
  });
});

test("renders breadcrumbs component library component", async () => {
  const componentData = {
    title: "ociso",
    id: 1,
  };
  const state = { component: componentData };

  render(
    <MemoryRouter
      initialEntries={[`${MAIN_ROUTES.COMPONENT_LIBRARY}/${componentData.id}`]}
    >
      <App>
        <GlobalStateProvider value={state}>
          <Breadcrumbs />
        </GlobalStateProvider>
      </App>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent(
      "components"
    );
  });
  //   await waitFor(() => {
  //     expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("ociso");
  //   });
});

test("renders breadcrumbs projects", async () => {
  render(
    <MemoryRouter initialEntries={[MAIN_ROUTES.PROJECTS]}>
      <App />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("projects");
  });
});

test("renders breadcrumbs project", async () => {
  const projectData = {
    title: "Test Project",
    acronym: "TP",
    id: 1,
  };
  const state = { state: { project: projectData } };
  render(
    <MemoryRouter initialEntries={[`/projects/${projectData.id}`]}>
      <App>
        {/* <GlobalState.Provider value={[state]}> */}
        <Breadcrumbs />
        {/* </GlobalState.Provider> */}
      </App>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("projects");
  });
  //   await waitFor(() => {
  //     expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("test project");
  //   });
});

test("renders breadcrumbs project controls", async () => {
  const projectData = {
    title: "Test Project",
    acronym: "TP",
    id: 1,
  };
  const state = { state: { project: projectData } };
  render(
    <MemoryRouter initialEntries={[`/projects/${projectData.id}/controls`]}>
      <App>
        {/* <GlobalState.Provider value={[state]}>
          <Breadcrumbs />
        </GlobalState.Provider> */}
      </App>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("projects");
  });
  //   await waitFor(() => {
  //     expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("test project");
  //   });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("controls");
  });
});

test("renders breadcrumbs project control", async () => {
  const projectData = {
    title: "Test Project",
    acronym: "TP",
    id: 1,
  };
  const state = { state: { project: projectData } };
  render(
    <MemoryRouter
      initialEntries={[`/projects/${projectData.id}/controls/ac-1`]}
    >
      <App>
        {/* <GlobalState.Provider value={[state]}>
          <Breadcrumbs />
        </GlobalState.Provider> */}
      </App>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("Home");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("projects");
  });
  //   await waitFor(() => {
  //     expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("test project");
  //   });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("controls");
  });
  await waitFor(() => {
    expect(screen.getByTestId("breadcrumbs-bar")).toHaveTextContent("ac 1");
  });
});
