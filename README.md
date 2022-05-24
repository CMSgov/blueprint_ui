# Blueprint UI

### Local Development

Please visit the infrastructure repo for setting up a local development environment at https://github.com/CMSgov/blueprint_infra

### Pre-commit hook

When committing code, a pre-commit hook is set to run linting and prettier formatting on the staged files.

To run this manually on your staged files, in a terminal window, run: `npm run pre-commit`

### Testing

To run tests, in a terminal window, run: `npm test` or `npm run test`

To run Cypress end-to-end tests;
    - make sure that your app is running the required Docker containers
    - in the root directory of Blueprint UI, run `npx cypress open`

### Developer Notes

We have agreed to work based on the following standards for the project
    - Utilizing Atomic Design directory structure, visible under src atoms, molecules, organisms, templates, and pages
        - atoms will be for small reusable parts consisting of a single page element: input, button, label
        - molecules will be for small reusable components consisting of a few atoms or page elements: this is somewhat subjective 
        - organisms will be for reusable components that make sense by them self: header, footer
        - templates will be for reusable components that can make easily be used by pages
        - pages will be for individual pages, either stand alone or mostly using a template

    - Naming conventions
        - Files will be named using Pascale case: SomeFile.jsx
        - Component names will also use Pascale case SomeFile

    - Code will be writen utilizing react hooks, and avoid using the react class style
        - Hooks are basically functional components that scale up easily when needing to utilize state without having to rewrite them
