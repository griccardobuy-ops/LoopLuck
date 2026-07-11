importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

<script>
window.OneSignalDeferred = window.OneSignalDeferred || [];

OneSignalDeferred.push(async function(OneSignal) {
  await OneSignal.init({
    appId: "0cfd448c-97c6-4772-b492-2a4238aeb9d3",
    serviceWorkerPath: "LoopLuck/OneSignalSDKWorker.js",
    serviceWorkerParam: {
      scope: "/LoopLuck/"
    }
  });
});
</script>
