This project uses a simple expressjs server to render an html form that contains the link to be checked.
The backend then calls a file through SlimerJS that opens a headless browser, goes to the page, adds it to the cart, and then send the maximum number of items and waits for souq's server response with what can call the real number of remaining stock.
The index.js file - which uses slimerjs writes the output to a file count.txt that is then read by the expressjs server to send to the front-end

Technologies used:
- expressJS
- slimerJs - see documentation: requires firefox to be installed
- yarn
