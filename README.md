# emar2130
## Project Title

My project is a podcast tracker. This tracker functions as a digital library that allows users to input details about podcasts that they have completed and store them. The tracker also allows users to delete podcasts that they no longer wish to keep in their library.

## Motivation

Aligning with the given brief, I settled on developing a media consumption tracking application as I am a huge consumer of digital media. As tracking applications for music and films & TV are currently already extensive, I settled on a podcast tracker. This is also because I am personally a consumer of podcasts and am interested in ways that I can track my podcast consumption.

I conducted some base-level user research in the form of surveys and interviews to determine what are the most important features that users would like to see in such a tracking application and determine a target demographic. The bright colorful aesthetics of the application and inclusions of items to track were heavily based off the data that I had collected.

## Build status 

To reduce the overall complexity of the code, I did not add functionality to the secondary “Add Title” button. 
In terms of errors , one of the main errors that I noticed is that when I add or delete podcasts instead of the objects being pushed into my existing array, a new array is being created.

 ## Video Demo 
 [![Video Demo](/public/images/landing%20page%20screenshot.png)](https://vimeo.com/833521748?share=copy)

 ## Responsive Design

Please note that the tracker has limited responsiveness. The desktop view is optimized for a MacBook Pro 14" screen with a width of 1512px. The mobile view is designed to look best on an iPhone 13/13 Pro with a width of 390px.

## Usage Instructions

This podcast tracker is meant to be used in the following manner:

1. Landing Page: The landing page consists of a header, body, and footer section. The body section contains a grid that provides a compressed view of all the titles you have added to your podcast tracker. The header and footer sections include an "Add Title" button.

2. Adding a New Title: To add a new title, click on the "Add Title" button, which triggers a slide-out window. This window contains a form.

3. Form Navigation: The form is divided into three parts. To navigate to the next or previous page, click on the respective "Next" or "Back" buttons located at the bottom of the form.

4. Required Fields: Note that all fields are required except for the episode number and tag.

5.  Form Page 1 - Podcast Name and Episode Title: These are text inputs. The episode number is a numerical input, and you can use the arrows on the side of the input field to increase or decrease the number.

6.  Form Page 2 - Genre and Star Rating: The genre picker and star rating are radio inputs. Select the desired genre and rating by clicking on the corresponding options.

7.  Form Page 3 - Platform and Host: Platform is a dropdown box field, and you can choose from the list of podcasts. Host is a text input field.

8. Tag Field: For the tag field, you can type in a tag and press either comma or return/enter to create a tag.

9. Submitting the Form: When you click the submit button on the last page, the form clears to allow for more user input.

10. Closing the Slide-Out Window: To close the slide-out window, click on the "cross" button located at the top right of the window. Alternatively, you can click again on the "Add Title" button.

11. Extended View Slide-Out Window: When you navigate to the body, you can view a compressed version of your titles with an image, rating, podcast name, and episode title. Clicking on a grid item triggers an extended view slide-out window.

12. Deleting a Title: To delete a title, click on the "trash" icon located at the bottom of the extended view slide-out window. This triggers a confirmation pop-up modal window.

13. Confirmation Modal: In the confirmation modal, clicking the "No" button allows you to exit the pop-up, while clicking the "Yes" button deletes the title.

14. Exiting the Extended View Slide-Out Window: To exit the extended view slide-out window, click on the cross button located at the top right of the window.

15. Mobile View: All functionality is retained in the mobile view.

## Design Decisions

The web application's aesthetic and functionality closely follow the submitted proposal. However, some changes were made based on the feedback received, particularly regarding the "inconsistency" in the expanded view page.

1. Text Color: The text color has been changed from black to purple to address the concerns raised by the reviewer. This change aims to rectify the oversight and improve the overall consistency of the design.

2. Button Placement: The placement of the next and back buttons has been altered to align with existing design patterns, ensuring a more consistent user experience.

3. Modal Window Overlay: The blur overlay upon modal window pop-up has been removed. This decision was made to simplify the interface and enhance usability by reducing unnecessary complexity.

Additionally, some design elements had to be adjusted to accommodate the project scope.

4. Progress Bar: The originally planned progress bar as part of the multi-step form had to be omitted. This decision was made after consulting with my tutor, considering the high level of complexity associated with dynamically updating the progress bar based on user input. Instead, a simplified approach was adopted, utilizing page-based logic to control the form's contents, which reduced additional complexity.

![original design ](public/images/pop-up%20content%20info%20final.png )Original design (progress bar)
![final design](public/images/Final%20design%20(no%20progress%20bar).png)Final design (no progress bar)
![origina design](public/images/more%20info%20final.png ) Original design (black text)
![final design](public/images/Final%20design%20(purple%20text).png )Final design (purple text)

## Installation
## Credits 
I used the following resources for my code 

https://www.freecodecamp.org/news/html-symbols-html-icon-and-entity-code-list/ (symbols)

https://codepen.io/Web_Cifar/pen/PoNNEYY (multi-step form)

https://www.w3schools.com/tags/tag_select.asp (dropdown menu)

chat gpt (genre picker and star rating pattern)

![original design ](public/images/genre%20picker%3A%20star%20rating%203.png)

Dynamically generate star icons

![original design ](public/images/Genre%20picker%20and%20star%20rating%20pattern.png) 
changing pattern to have genre picker and star rating instead of text input

![original design ](public/images/Genre%20picker%20backend.png )

Genre picker to correspond to a text input and store into local storage

![original design ](public/images/genre%20picker%3A%20star%20rating%201.png )

Displaying stars corresponding to user input

![original design ](public/images/js%20for%20star%20rating.png)

Javascript to fill in colour up to clicked star

![original design ](public/images/Star%20rating%20backend.png )
Converting rating to radio input types

![original design ](public/images/Slide%20in%20effect%20styling.png)
styling (transaltion pattern) for slide out window 


