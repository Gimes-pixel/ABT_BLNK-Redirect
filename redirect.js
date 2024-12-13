function redirectToUrl() {
    // Get the URL entered in the input field
    const inputElement = document.getElementById('url');
    const url = inputElement.value;

    try {
        // Validate the URL to make sure it's correct
        const validUrl = new URL(url);

        // Open a new about:blank page
        const newWindow = window.open('about:blank', '_blank');

        if (newWindow) {
            // Create an iframe element
            const iframe = newWindow.document.createElement('iframe');
            iframe.src = validUrl.href;
            iframe.style.width = '100%'; // Make the iframe take up the full width
            iframe.style.height = '100%'; // Make the iframe take up the full height
            iframe.style.border = 'none'; // Remove the border
            iframe.sandbox = ''; // Add a sandbox for security

            // Style the body of the new window and append the iframe
            newWindow.document.body.style.margin = '0';
            newWindow.document.body.style.height = '100vh';
            newWindow.document.body.appendChild(iframe);
        } else {
            // If the new window doesn't open, show an error
            alert('Failed to open a new window. Check your browser settings.');
        }
    } catch (error) {
        // If the URL is invalid, show an alert
        alert('Invalid URL. Please enter a valid URL.');
    }
}

