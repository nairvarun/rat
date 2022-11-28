chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    },
        res => res[0].result.forEach(url => chrome.tabs.create({ active: false, url: url }))
    );
});
