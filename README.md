# Blueprint UI

## Local Development

Please visit the infrastructure repo for setting up a local development environment at https://github.com/CMSgov/blueprint_infra

## Pre-commit hook

When committing code, a pre-commit hook is set to run linting and prettier formatting on the staged files. It will also run the suite of react testing library test (it will not cypress tests).

To run this hook manually on your staged files, in a terminal window, run: <br>
`npm run pre-commit`

## Testing

We leverage two different sets of tests:
1. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) which is a library that uses the framework [Jest](https://jestjs.io/) - for unit tests and some integration tests
2. [Cypress](https://docs.cypress.io/) - for end to end tests and some integration tests

### React Testing Library
To run manually in a terminal window, run: <br>
*By default, the test commands will go into watch mode and rerun as you save code changes.* <br>
`npm test` or `npm run test`

If you want to run only once, set the watch to false: <br>
`npm test -- --watchAll=false`

You can choose to run a directory of tests or individual test files by adding the path to the command: <br>
e.g. `npm test /src/molecules/ProjectHeader.test.jsx`

### Cypress
To run Cypress end-to-end tests:
- make sure that your app is running the required Docker containers
- in the root directory of Blueprint UI, run `npx cypress open`

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
