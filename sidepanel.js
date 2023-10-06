function focusInput(){
  document.getElementById('focus-input').focus()
}

chrome.runtime.onMessage.addListener((message)=>{
  if(message.type==='focusSidePanel'){
    console.log('focusSidePanel');
    console.log(document.getElementById('focus-input'));
    window.focus()
    focusInput()
  }
})

document.getElementById('test-button').addEventListener('click',focusInput)