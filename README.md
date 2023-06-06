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


