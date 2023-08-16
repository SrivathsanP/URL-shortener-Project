// This is an asynchronous function named 'shortenUrl' without any parameters.
const shortenUrl = async () => {
    // It gets the value from an HTML input element with the ID "long-url".
    const longUrl = document.getElementById("long-url").value;

    // It sends a GET request to the shrtco.de API to shorten the long URL.
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
    
    // It awaits the response and parses it as JSON.
    const data = await response.json();
    
    // It extracts the shortened URL from the API response data.
    const shortUrl = data.result.full_short_link;

    // It gets a reference to an HTML element with the ID "short-url-container".
    const shortUrlContainer = document.getElementById('short-url-container');
    
    // It gets a reference to a link inside an HTML element with the ID "short-url".
    const shortUrlLink = document.getElementById('short-url').querySelector('a');
    
    // It sets the 'href' attribute of the link to the shortened URL.
    shortUrlLink.href = shortUrl;
    
    // It makes the element with the ID "short-url-container" visible.
    shortUrlContainer.style.display = 'block';

    // It gets a reference to an HTML button element with the ID "copy-btn".
    const copyBtn = document.getElementById('copy-btn');
    
    // It adds a click event listener to the copy button.
    copyBtn.addEventListener('click', () => {
        // When the button is clicked, it uses the Clipboard API to copy the shortened URL.
        navigator.clipboard.writeText(shortUrl).then(() => {
            // After copying, it shows an alert to indicate that the URL has been copied.
            alert('copied to clipboard');
        });
    });
};

// It gets a reference to an HTML button element with the ID "shorten-btn".
const shortenBtn = document.getElementById('shorten-btn');

// It adds a click event listener to the shorten button.
shortenBtn.addEventListener('click', shortenUrl);
