# Evaluate-News-With-NLP
Web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

## Contents

- [Installation](#installation)
- [Interface](#interface)
- [Run](#run)
- [Testing](#testing)

## Installation
1 - clone or fork the repo <br />
2 - Make sure you have `npm` installed.
```
mvn install
```
## Interface
- Go to [MeaningCloud](https://learn.meaningcloud.com) and sign up for an API key. 
- You can also check out the documentation of the MeaningCloud API [here](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc)
- Create a new  file named `.env` in the root of your project.
- Fill the `.env` file with your API key like this:

```
key=**********************
```
## Run
### 1. Production Mode
- `npm run build-prod` to generate the distribution folder.
- Production mode can be accessed at `localhost:8081`

### 2. Development Mode
- `npm run build-dev` to start the webpack dev server.
- Development mode can be accessed at `localhost:8080`

**Note: To successfuly run and test development mode, express server should be running.**

## Testing
- `npm run test` to run Jest.
