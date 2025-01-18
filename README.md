# Stale Closure Bug in React

This repository demonstrates a common but subtle bug in React applications involving the use of `setInterval` within a functional component.

The `bug.js` file shows the incorrect implementation where the `setInterval` callback uses a stale closure for the `count` variable.  This leads to the counter not functioning as expected.

The `bugSolution.js` file presents the corrected implementation, showcasing how to properly handle updates inside the `setInterval` callback to avoid stale closures.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install` (or `yarn install`).
4. Run `npm start` (or `yarn start`).

Observe the incorrect behavior in the initial implementation and the corrected behavior in the solution.
