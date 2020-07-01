## Description

This is a web browser automation demo which uses a fairly standard page object model and runs some browser tests
against the wonderful [The Internet](https://the-internet.herokuapp.com/) site using Javascript and Webdriverio v6. 
There is a Typescript version in a similarly named repo, but I was curious how the code would look if the overhead 
of transpilation was taken out of the equation.

This repo was born out of an experiment with webdriverio v4, and was updated when v5 came along, and again when v6 
appeared.

Test examples cover such issues as:
* A/B Testing
* Basic Authentication
* Broken Images
* Challenging DOMs
* Checkbox Manipulation
* Drag & Drop Operations
* Dropdown Lists
* Dynamic Content
* Exit Intent (mouse out) 
* File Upload (TODO - needs completing)
* Login Page


## Requirements
* Use nodeJS LTS v12.18.1 or above
* Google Chrome

## Setup
* use nvm (or equivalent) to set the nodeJS version
* Clone repository
* run `npm install` in root directory

## Execution
Execution on your local machine only (for now).
* `npm run test` to run the tests
* `npm run test:report` to run the tests with allure reporting (this creates a local directory, `allure-report` then 
opens it in the browser)

## Known Issues
* The dynamic content tests for the avatar images fail intermittently because the static page in question keeps changing. To be fair, the page says "some of the content" will be static but doesn't say which content :-)
* Issues with the allure reporter. 

## TODO
* Allure reporting seems to have gone wonky - fix this or select a different reporting tool like mochawesome 