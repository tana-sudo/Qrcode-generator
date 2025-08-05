import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

// This script prompts the user for a URL and generates a QR code image from it.
// The QR code image is saved as 'qr_image.png' in the current directory.
 inquirer.prompt([
    /* Pass your questions in here */
    {   message :"Enter the text to encode in QR code:",
        name: "URL",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
     const url = answers.URL;
     var qr_svg = qr.image(url);
     qr_svg.pipe(fs.createWriteStream('qr_image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
        console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      // Something else went wrong
        console.error("An error occurred:", error);
    }
  });


 
 

 
