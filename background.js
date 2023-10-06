chrome.commands.onCommand.addListener(async (command) => {
  console.log(`Command "${command}" called`);
  chrome.runtime.sendMessage({
    type:'focusSidePanel'
  })
  // const [tab] = await chrome.tabs.query({active: true})
  // chrome.sidePanel.open({tabId:tab.id});
});