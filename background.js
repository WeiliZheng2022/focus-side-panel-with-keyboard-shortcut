chrome.commands.onCommand.addListener(async (command, tab) => {
  console.log(`Command "${command}" called`);
  if (command === "focus-side-panel") {
    chrome.runtime.sendMessage({
      type: 'focusSidePanel'
    })
  }
  if (command === "focus-the-content") {
    console.log('tab',tab);
    // Actually the tab is already active, so I don't know how to make it focused.
    await chrome.tabs.update(tab.id, { active: true });
    await chrome.windows.update(tab.windowId, { focused: true });
  }
});