# [Sample plug-in: Character Count Plug-in]
## Purpose of the Sample Plug-in
This sample plug-in is available for educational purposes.  
Use this plug-in to understand how Kintone plug-ins work, and how they are structured.
A non-packaged version written with a single JavaScript file can be found here https://kintone.dev/en/tutorials/count-record-content/count-characters-inside-fields/

## What the plug-in does
This plug-in counts the total number of characters in a Text Area field. Spaces in the Text Area field are excluded from the count. The final count value is set into a Number field.
When a user inputs text into a Text Area field, the total character count excluding spaces is displayed in a number field after saving.
The plug-in settings page allows the user to choose which Text Area field and Number field will be used.

## Plug-in directory structure
This sample plug-in is created with the following directory structure.

src/  
├── html/  
│        └──── config.html  
├── css/  
│        ├──── 51-modern-default.css  
│        └──── config.css  
├── js/  
│        ├──── config.js  
│        ├──── desktop.js  
│        └──── kintone-config-helper.js  
├── image/  
│        └──── characters.png  
└── manifest.json  

## How to use
To simply test out the plug-in on your Kintone domain, follow these steps:

1. Download the plug-in zip file  
Reference: https://github.com/kintone/SAMPLE-Character-count-plug-in/releases
2. Install the plug-in into your domain  
Reference: https://get.kintone.help/hc/en-us/articles/115001519707-Installing-Viewing-Plug-ins
3. Add the plug-in to a specific Kintone App  
Reference: https://get.kintone.help/hc/en-us/articles/115001511188-Adding-Plug-ins-to-an-App
4. Make sure that a Text Area field and a Number field are placed in the form of your Kintone App. Access the plug-in settings, and enter in the neccessary settings. Save the settings, and update the App.
5. Click the + button on the Record List page to start adding a new record. Enter in text into the Text Area field and save. The Number field will display the number of characters in the Text Area field.

## How to modify
1. Fork to your repo
2. Make changes to files under /src
3. Repackage the plug-in by:  
 i. Zipping the manifest.json file, css directory, html directory, image directory and js directory into one zip file.  
 ii. Packaging the file using [kintone plug-in packer](https://plugin-packer.kintone.dev/).

## Pull Request Policy
As this repo exists for educational purposes, we will most likely turn down pull requests that contain updates with new features.  
Please feel free to host plug-ins with new features on your own repository.  
Bug fixes are happily accepted.

## More information
More detailed information on the plug-in can be found here https://kintone.dev/en/plugins/simple-samples/character-count-plug-in/
