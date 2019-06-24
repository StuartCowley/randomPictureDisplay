# randomPictureDisplay

Random Picture display generator

Brief:
(Project set as part of the Code Nation Master course)
 - Build a browser based random image generator using the unsplash API
 - Include inputs for the number of images wanted and a keyword term to narrow down searches
 - Include a reset button to clear the screen

![Screenshot](https://github.com/StuartCowley/randomPictureDisplay/blob/master/Screenshot%20random%20image%20generator.png)

Tech/framework used
 - Built with JavaScript

Features:
 - Can display up to 7 images per line on full screen browser
 - Will generate the desired number of random images. If a single word is entered in the keyword field, images are filtered to include it before displaying
 - Display can be emptied with the reset button
 
Code example:
(The following is the logic for fetching the random image from unsplash.com)

![Screenshot](https://github.com/StuartCowley/randomPictureDisplay/blob/master/random%20Image%20Screenshot.png)

If requesting large numbers of images, some images will be duplicates. Using a sleep function to delay requests to the API, improved the amount of different images but was inefficient. Another API may be the answer but time constraints prevented me finding one


Link to documentation for unsplash:
 - https://unsplash.com/documentation#get-a-random-photo


Built by:
 - @StuartCowley
