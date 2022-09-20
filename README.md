# Blueprint UI

## Local Development

Please visit the infrastructure repo for setting up a local development environment at <https://github.com/CMSgov/blueprint_infra>

## Visual Elements
This application leverages [USWDS](https://designsystem.digital.gov/) and [Trussworks' React-USWDS](https://github.com/trussworks/react-uswds).  The application currently has the USWDS dependency pinned to version 2.x.x until Trussworks releases a version of it's library for the latest USWDS enhancements.  For this to work propery, the project requires the `--legacy-peer-deps` flag to properly install dependencies.

## Pre-commit hook

When committing code, a pre-commit hook is set to run linting and prettier formatting on the staged files. It will also run the suite of react testing library test (it will not cypress tests).

To run this hook manually on your staged files, in a terminal window, run:
`npm run pre-commit`

## Using Docker
This client application includes a Docker container implementation.  You do not have to use Docker but it is highly encouraged.  More information on getting started with [Docker](https://docs.docker.com/desktop/) and [Docker Compose](https://docs.docker.com/compose/).

## Testing

We leverage two different sets of tests:

1. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) which is a library that uses the framework [Jest](https://jestjs.io/) - for unit tests and some integration tests
2. [Cypress](https://docs.cypress.io/) - for end to end tests and some integration tests

### React Testing Library

To run manually, open a shell terminal in the repo's docker container (e.g. `docker exec -it blueprint_ui_1 sh`). From there the following commands can be run:

*By default, the test commands will go into watch mode and rerun as you save code changes.*
`npm test` or `npm run test`

If you want to run only once, set the watch to false:
`npm test -- --watchAll=false`

You can choose to run a directory of tests or individual test files by adding the path to the command:
e.g. `npm test /src/molecules/ProjectHeader.test.jsx`

### Cypress

To run Cypress end-to-end tests:

- make sure that your app is running the required Docker containers
- in the root directory of Blueprint UI, run `npx cypress open`

## Interfacing with backend systems
When adding a new request to an API, developers should leverage the [RequestService](https://github.com/CMSgov/blueprint_ui/blob/develop/src/services/RequestService.js).  This will allow the app to
1. Maintain a simplified and uniform way to handle all types of requests
2. Reduce code repetition
3. Leverage generalized tests that are sufficient for most requests
4. Integrates backend authorization in a single place
5. Allow for an easier transition to complex state management if necessary in the future

An example implementation of a request can be referenced [here](https://github.com/CMSgov/blueprint_ui/blob/1a7d6b2d557a3da0214b85cbd28d9497f1da2e6f/src/pages/Control.jsx#L27).
## Developer Notes

We have agreed to work based on the following standards for the project
    - Utilizing Atomic Design directory structure, visible under src atoms, molecules, organisms, templates, and pages
        - atoms will be for small reusable parts consisting of a single page element: input, button, label
        - molecules will be for small reusable components consisting of a few atoms or page elements: this is somewhat subjective
        - organisms will be for reusable components that make sense by themselves: header, footer
        - templates will be for reusable components that can easily be used by pages
        - pages will be for individual pages, either stand alone or mostly using a template (pages act as instances of templates)

    - Naming conventions
        - Files will be named using Pascal case: SomeFile.jsx
        - Component names will also use Pascal case SomeFile

    - Code will be written utilizing react hooks, and avoid using the react class style
        - Hooks are basically functional components that scale up easily when needing to utilize state without having to rewrite them

## Useful Terminology
1. [Control](https://pages.nist.gov/OSCAL/documentation/concepts/#control)
2. [Control Implementation](https://pages.nist.gov/OSCAL/documentation/schema/implementation-layer/component/json-schema/#global_control-implementation_h2)
3. [Component](https://pages.nist.gov/OSCAL/documentation/schema/implementation-layer/component/)
4. [System Security Plan (SSP)](https://pages.nist.gov/OSCAL/documentation/schema/implementation-layer/ssp/)
5. [Catalog](https://pages.nist.gov/OSCAL/documentation/concepts/#catalog)
6. [OSCAL](https://pages.nist.gov/OSCAL/concepts/terminology/)


