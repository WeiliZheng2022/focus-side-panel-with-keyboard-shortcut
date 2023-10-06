chrome.runtime.onMessage.addListner((message)=>{
  if(message.type==='focusSidePanel'){
    window.focus()
    document.getElementById('focus-input').focus()
  }
})