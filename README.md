# CoInvestor - Engineer Recruitment Test
Thank you for taking the time to do our technical test, it consists of a simple coding test.
Upon the completion of this test, we would like you to commit all your files and submit your results by creating a [Pull Request](https://github.com/CoInvestor/tech-test/pulls) and using your full name as the branch name with a summary explaining what you have done and why within the body of the pull request.

## Coding Test
CoInvestor runs off of a central API which is available at https://api.coinvestor.co.uk/v2. You can use the API get basic platform data. For example, https://api.coinvestor.co.uk/v2/company/sponsor returns a list of fund managers that all have profiles on the platform. 

Additional data can be requested by includes using the [JSON:API](http://jsonapi.org/) spec.

An example of possible includes on the above endpoint are;

* latestLogo
* marketingDetail
* primarySponsorType
* communications
* investmentPhases
* otherSponsorTypes

You would then access them via calling a URL like

Example

`https://api.coinvestor.co.uk/v2/company/sponsor?include=communications,latestLogo`

You could then sort these results by name using 

`https://api.coinvestor.co.uk/v2/company/sponsor?include=communications,latestLogo&sort=name`

You can see an example of this on our [Live Site](https://www.coinvestor.co.uk/managers).

## Task
The task is to create a single page that will return a list of the fund managers with their data in a structured and aesthetically pleasing design. The list of fund managers should then display at a minium the following:

* Name
* Address
* Website
* Logo
* Investment Phases
* Sponsor Types

Key requirements:

Feel free to spend as much or as little time on the exercise as you like as long as the following conditions have been met.

Please complete the user story below.

Your code should compile and run in one step. Feel free to use whatever frameworks/libraries/packages you like.

## User Story
As a `...`

I want `...`

So that I `...`
