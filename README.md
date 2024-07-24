# Rename Tab Extension

Rename Tab Extension is a simple yet powerful Chrome extension that allows users to rename their browser tabs. This can be particularly useful for users who have multiple tabs open and want to better organize their browsing experience.

## Features

- **Rename Tabs**: Easily rename the title of any tab to something more meaningful or descriptive.
- **Persistence**: The custom tab name will persist through page refreshes and URL changes within the same tab session.
- **Dynamic Sites Support**: Works seamlessly with dynamic sites like Twitter and Instagram.
- **Reversion on Close**: The tab title reverts to its original name once the tab is closed and reopened.

## How It Can Be Useful

This extension is perfect for users who:
- Frequently have numerous tabs open and struggle to identify them quickly.
- Want to customize tab titles for better organization.
- Need a temporary reminder or label on a tab without changing the actual content of the page.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch on the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned/downloaded this repository.

## Usage

1. Once installed, click on the extension icon in the Chrome toolbar.
2. Enter the new title for your current tab in the input field.
3. Click the "Rename Tab" button to apply the new title.
4. The new title will persist through any navigation or refreshes in the same tab session.
5. The tab will revert to its original title when it is closed and reopened.

## Project Structure

- `manifest.json`: The manifest file that defines the extension's metadata and permissions.
- `popup.html`: The HTML file for the extension's popup interface.
- `popup.js`: The JavaScript file that handles the logic for renaming the tab.
- `background.js`: The JavaScript file that handles background tasks such as monitoring tab updates and activations.
- `images/`: Directory containing icon images for the extension.

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. Any contributions, issues, and feature requests are welcome!

## License

This project is licensed under the MIT License.
