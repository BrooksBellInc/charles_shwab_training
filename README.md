# charles_shwab_training

For this activity we will be building a mini test in the Browser console. To emulate the user of Optimizely, we will inject test code using the Code Injector Google Chrome plugin.

## Getting Started

1) Install the Code Injector Google Chrome plugin: <https://chrome.google.com/webstore/detail/code-injector/jgcallaoodbhagkaoobenaabockcejmc?hl=en#:~:text=Code%20Injector&text=A%20WebExtensions%20based%20addon%20which,HTML%20to%20any%20web%20page>
2) Once you've installed the plugin, confirm it is added to your Extensions bar.
3) Navigate to https://www.schwab.com/brokerage
4) Open the Code Injector plugin:
<img width="843" alt="Screen Shot 2021-04-27 at 9 43 51 AM" src="https://user-images.githubusercontent.com/19861044/116263808-b1a79a80-a747-11eb-94c5-afb0536a9f86.png">

<img width="843" alt="Screen Shot 2021-04-27 at 9 43 51 AM" src="https://user-images.githubusercontent.com/19861044/116263808-b1a79a80-a747-11eb-94c5-afb0536a9f86.png">

Campaign Name: Brokerage Page Test 1
Campaign Type: A/B Test
Hypothesis: By bringing benefits content to above the fold and updating the hero and CTA copy, users will be more likely to quickly get the information they need and continue down the funnel.
KPI: Brokerage Account Signups 
Metrics: Adobe Analytics custom click event should dire when a user clicks on "Open a Brokerage Account"


Start by installing the Code Injector Google Chrome Plugin 
Navigate to the Charles Schwab Brokerage page: https://www.schwab.com/brokerage
Open the Code Injector plugin and select “Add Rule”.
Paste the Charles Schwab brokerage URL into the URL pattern field.
Deselect “On page load”
For the purpose of this exercise, we need to poll for Optimizely utils to exist on the window. On the next slide, we’ve provided a runPoll function you can use. Paste this into the JavaScript tab.
![image](https://user-images.githubusercontent.com/19861044/116262397-7eb0d700-a746-11eb-9e91-ce96d6be845f.png)
