function redirectToUrl() {
    // Get the URL entered by the user
    const urlInput = document.getElementById("urlInput").value;

    try {
        // Validate the URL
        const url = new URL(urlInput); // Throws an error if invalid

        // Open a new blank page
        const blankWindow = window.open("about:blank", "_blank");

        if (blankWindow) {
            // Write the HTML structure for the blank page
            blankWindow.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Redirect</title>
                    <style>
                        body, html {
                            margin: 0;
                            padding: 0;
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                        }
                        iframe {
                            width: 100%;
                            height: 100%;
                            border: none;
                        }
                    </style>
                </head>
                <body>
                    <iframe src="${url.href}" sandbox="allow-scripts allow-same-origin"></iframe>
                </body>
                </html>
            `);

            // Close the document to finish rendering
            blankWindow.document.close();
        } else {
            alert("Pop-up blocked! Please allow pop-ups for this site.");
        }
    } catch (e) {
        // Alert the user if the URL is invalid
        alert("Invalid URL. Please enter a valid URL (e.g., https://example.com).");
    }
}
