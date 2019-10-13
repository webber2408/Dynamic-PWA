let deferredInstallPrompt = null;

let installModal = $('#modalRelatedContent');
let installButton = document.querySelector('#installButton');

window.addEventListener('beforeinstallprompt', (e)=>{
    console.log("Function fired!");
    e.preventDefault();
    deferredInstallPrompt = e;
    installModal.modal('show');
    installButton.addEventListener('click',()=>{
        deferredInstallPrompt.prompt();
        installModal.modal('hide');
    });
    deferredInstallPrompt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt', choice);
      } else {
        console.log('User dismissed the A2HS prompt', choice);
      }
      deferredInstallPrompt = null;
    });
});

window.addEventListener('appinstalled',(e)=>{
    console.log('App Installed');
});
