# -Broken-App

First, the code imports the necessary modules: fs, path, and https.
It then checks to make sure that the script was called with a filename argument. If not, it prints an error message and exits the script.
It reads the contents of the file specified by the filename argument and splits it into an array of URLs.
For each URL in the array, the code extracts the hostname from the URL and uses it to create a filename for the output file.
It then sends a GET request to the URL using the https module, and saves the HTML response to the output file using the fs module.
If any errors occur during the process of reading the input file, sending a request, or writing to an output file, the code prints an error message to the console.
