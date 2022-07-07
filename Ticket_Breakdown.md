# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Epic: Create unique identifier for Agents

Sub-task #1: Creating a DB Migrations
Effort: 2
Goal: Create a migration for DB
Create the required migrations:
- A new column uuid for the Agents table
Acceptance Criteria:
- Migration should be tested in lower envs at least once.
Assets: None
Dependencies: None
Test procedure:
- Execute migration
- Validate that field is created in DB

Sub-task #2: Design OpenAPI schema for Agent ID CRUD
Effort: 2
Goal: 
Create a schema for the Agents Unique Identifier creator.
Also, a API mock would be useful for testing.
Acceptance Criteria:
- Should be API-first and published
- Should be on OpenAPI standard
Assets: Postman, Stoplight
Dependencies: None
Test procedure: 
- Using a mock server for testing, create a test suit with cases.
- Add automated tests to CI

Sub-task #3: Develop API with current schema of Sub-task #2
Effort: 5
Goal: Create a functional version of the mocked API in Sub-task #2
Acceptance Criteria: 
- Should log each decision into logger module (DataDog, NewRelic, etc.)
- Should have security by any means (token prefered) with unique authentication for each Facilities
- Should have correspond unit tests and integration tests
- Should use middlewares from API Gateway (Throttling, Rate limiting, CORS support)
- Should have versioning support
Assets: None
Dependencies: API Gateway
Test procedure:
- Set automated test of CI from Sub-task #2, to the functional version of the API
- Unit tests and integration tests should be created
- E2E testing should exists

Sub-task #4: Create a UI for Facilities to set the UUID for Agents
Effort: 4
Goal: As a Facility, I want to CRUD a uuid for my agent
Acceptance Criteria:
- Should comply with the API created in Sub-task #3
- Should be a isolated component
- Business logic should be separated from UI/UX
- Should be responsive and comply with accessibility
Assets: Design provided by UI/UX team
Dependencies: API, Javascript
Test procedure:
- Isolated component test
- Functional tests

Sub-task #5: Adapt report task to use UUID from Agents
Effort: 2
Goal: Generated reports should now use the UUID and not the DB id key
Acceptance Criteria:
- Reports should display the new UUID
- Modify current test to be valid with the adaptation of the UUID
Assets: None
Dependencies: Business decision (In case of empty UUID, business should bring a solution)
Test procedure:
- Create a fake report
- Validate that report contains the expected UUID
