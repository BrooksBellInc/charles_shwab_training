# charles_shwab_training

For this activity we will be building a mini test in the Browser console. To emulate the user of Optimizely, we will inject test code using the Code Injector Google Chrome plugin.

## Getting Started

1) Install the [Code Injector Google Chrome plugin](https://chrome.google.com/webstore/detail/code-injector/jgcallaoodbhagkaoobenaabockcejmc?hl=en#:~:text=Code%20Injector&text=A%20WebExtensions%20based%20addon%20which,HTML%20to%20any%20web%20page)
2) Once you've installed the plugin, confirm it is added to your Extensions bar.
3) Navigate to https://www.schwab.com/brokerage
4) Open the Code Injector plugin. And select "Add rule"
<img width="843" alt="Screen Shot 2021-04-27 at 9 43 51 AM" src="https://user-images.githubusercontent.com/19861044/116263808-b1a79a80-a747-11eb-94c5-afb0536a9f86.png">
5) Paste the Brokerage page URL into the URL matching bar: <https://www.schwab.com/brokerage>, deselect the "On Page Load" box. This will ensure that our code does not have to wait for page load to complete before executing.
<img width="797" alt="Screen Shot 2021-04-27 at 9 44 15 AM" src="https://user-images.githubusercontent.com/19861044/116263788-ac4a5000-a747-11eb-8505-27d9dad2cbe5.png">
6) Open up the starterFile.js file in this repo. You'll notice that there is a runPoll function included. Because we are executing code from the console, we need to wait for the Optimizely util functions to exist on the window before we can use them in our code. The runPoll function is waiting for the Optimizely property to exist - you do not need to change this code. All your variant code should fo within the executeTest function. 
7) Reference the Test info below as well to create your variant code. You can work on your code directly in the Plugin or in a code editor of your choice.
8) If using a code editor, paste your code into the JavaScript tab in Code Injector and press save. Each time you save the code, reload the page to trigger the injection of the code. 

## Campaign Information

**Campaign Name**: Brokerage Page Test 1 <br>
**Campaign Type**: A/B Test<br>
**Hypothesis**: By bringing benefits content to above the fold and updating the hero and CTA copy, users will be more likely to quickly get the information they need and continue down the funnel. <br>
**KPI**: Brokerage Account Signups <br>
**Metrics**: Adobe Analytics custom click event with name 'BB_brokerage_CTA_Click' should fire when a user clicks on "Open a Brokerage Account".<br>
**Mockups**
Control:

<img width="1675" alt="Screen Shot 2021-04-27 at 12 04 45 PM" src="https://user-images.githubusercontent.com/19861044/116274865-0a2f6580-a751-11eb-8ffd-3a0a09449275.png">

Variant_A:

<img width="1676" alt="Screen Shot 2021-04-27 at 12 06 36 PM" src="https://user-images.githubusercontent.com/19861044/116274882-10254680-a751-11eb-9066-0ef71f8e7cf4.png">


**Changes to Make**:
1) Herospace header text should be changed from: "Today, get closer to your goals." to "Get closer to your goals."
2) Herospace CTA button text should be changed from: "Open a Brokerage Account" to "Open a Brokerage Account Today"
3) The "Easily trade and manage investments..." section should be moved to directly below the herospace/blue section.
4) Use Optimizely utils to ensure you are waiting for elements to exist on the page before executing code.
5) Clicking on the "Open a Brokerage Account..." button should fire an Adobe Analytics custom link with the name 'BB_brokerage_CTA_Click' using s.tl(). Ensure this call completes successfully by looking in the Network tab.
6) If successful you should see a call that looks like this:

<img width="1080" alt="Screen Shot 2021-04-27 at 12 26 51 PM" src="https://user-images.githubusercontent.com/19861044/116277924-f5080600-a753-11eb-95f7-476f88fd1592.png">






