## 0.4

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The message is entered to HTML form and "Save"-button with type submit is pressed.
    activate browser
    browser->>server: POST form data to https://studies.cs.helsinki.fi/exampleapp/new_note
    deactivate browser
    Note left of server: Server creates a new note
    activate server
    server->>browser: Redirect to https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server
    activate browser
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate browser
    activate server
    server->>browser: Notes page HTML
    deactivate server
    activate browser
    Note right of browser: HTML document requires CSS and JavaScript files so request them from the server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    deactivate browser
    activate server
    server->>browser: main.css
    deactivate server
    activate browser
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    deactivate browser
    activate server
    server->>browser: main.js
    deactivate server
    activate browser
    Note right of browser: Browser executes main.js and requests the notes in JSON format from the server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    deactivate browser
    activate server
    server->>browser: Data of data.json
    deactivate server
    activate browser
    Note right of browser: Browser continues executing main.js and fills the HTML page with result data of last request
```