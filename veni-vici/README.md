# Web Development Project 4 - *Movie Learner*

Submitted by: **Epifanio Sarinana**

This web app: **The web app contains movies from Imdb from 2014 to 20224. The purpose is to see what movies exist, who are the main actors, director, rating, year released and a summary. It captures a list around 11 thousand movies with their IMdb id. After that is shows the information mentioned before.**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [x] **Only one item/API call is viewable at a time**
- [x] **API calls appear random to the user**
- [x] **At least one image is displayed per API call**
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
- [x] To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [x] Multiple types of attributes can be added to the ban list
- [ ] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [x] Clear all filters

## Video Walkthrough

Here's a walkthrough of implemented user stories:


<img src='https://imgur.com/a/DSA96DM.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LiceCap and Imgur  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

One big challenge I encountered was creating the database. Origanilly I was going to get a random movie from IMDb but,
there was no way to get a random movie without getting an error of list to long. I solved this by getting data from a kaggle
dataset and using a python script. 

## License

    Copyright [2024] [Epifanio Sarinana]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.