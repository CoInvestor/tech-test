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
* Sponsor Types

#### Key requirements:

You have two weeks to complete this upon receiving the email link. Please ensure that you have met all of the above conditions

Please complete the user story below.

Your code should compile and run in one step. Feel free to use whatever frameworks/libraries/packages you like.

## User Story
As a user,

I want to be able to find the list of all the fund managers,

So that I can see their name, address, website and sponsor type.
