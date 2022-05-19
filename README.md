# React 18 Component Library with Storybook

## Installation
Use `npm` with flag `--legacy-peer-deps` to install dependencies.

```
npm install --legacy-peer-deps
```
> ❗️ Don't use yarn. It cannot resolve the dependecies correctly in this case.

### But Why?
Storybook has a peer dependency to `@mdx-js/react` that uses react@17. Until the package is updated you have to install it with `--legacy-peer-deps`

## Publish
To publish the library to GitHub Packages (https://github.com/features/packages) follow these steps

1. init git repo (with `.gitignore` and so on...)
2. push repo to GitHub
3. add the following into the package.json
```json
{
  "name": "@YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/YOUR_GITHUB_USERNAME"
  },
  ...  
}
```

4. create a personal access token on GitHub (https://github.com/settings/tokens) with permission `write:packages`
5. modify your local `.npmrc` file (https://docs.npmjs.com/cli/v7/configuring-npm/npmrc) as follows
```json
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```
> ❗️ Replace YOUR_AUTH_TOKEN with the newly generated GitHub Token, and YOUR_GITHUB_USERNAME with ... your username . Leave the `//` at the beginning of the last line
6. Run 
```
npm publish
```

## Consume
When you've published the library you can find the package at your GitHub profile page under the `Packages` tab (e.g. https://github.com/ppulwey?tab=packages)
You can install it as you're should be familiar with...
```
npm install @myusername/package-name
```
or
```
yarn add @myusername/package-name
```

## Update the package
When you want to update the package, increase the version number in the `package.json` file manually or with npm-version (https://docs.npmjs.com/cli/v8/commands/npm-version).

Then run 
```
npm publish
```

---

For full instructions how to setup a React Library with Storybook see this great tutorial by _Alex Eagleson_ I've stolen from: https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe?signin=true#adding-storybook
___
