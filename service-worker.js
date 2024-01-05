/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "361543011b1b207c53bd862a7b4bcfae"
  },
  {
    "url": "assets/css/0.styles.1e5a53e3.css",
    "revision": "e1675fee86bc6d1e693787c4d261d0d3"
  },
  {
    "url": "assets/img/3table.98bb1ea3.jpg",
    "revision": "98bb1ea3eb55d48dc6391a174bfb4d3d"
  },
  {
    "url": "assets/img/create.69802240.png",
    "revision": "69802240c05c3ce856fe9c8d642d7407"
  },
  {
    "url": "assets/img/delete.a9d6a903.png",
    "revision": "a9d6a9031ecc90776f367d51b3591eb6"
  },
  {
    "url": "assets/img/get.57b16f29.png",
    "revision": "57b16f29a30763b5eb40f8bd9306c692"
  },
  {
    "url": "assets/img/get2.72ac2292.png",
    "revision": "72ac2292cee17e9942cac94b11240e94"
  },
  {
    "url": "assets/img/get3.fac6ffe6.png",
    "revision": "fac6ffe6b4c54c211e2a4f1c0bb9d597"
  },
  {
    "url": "assets/img/put.623b68fb.png",
    "revision": "623b68fb8d9155264c4ea963824a2840"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start_services.093ca418.png",
    "revision": "093ca418d4aace60852929cae77eab4c"
  },
  {
    "url": "assets/js/1.56133b77.js",
    "revision": "2da534fa191618a5a6b251d18154c800"
  },
  {
    "url": "assets/js/10.34cccb11.js",
    "revision": "e065eca5ea686ec9f05f4e15eeee584a"
  },
  {
    "url": "assets/js/13.23b0e7ce.js",
    "revision": "d3c0266ba68bdf070cff297f0c5009db"
  },
  {
    "url": "assets/js/14.38905ced.js",
    "revision": "11f98910966b665869bd4ddd84acd4de"
  },
  {
    "url": "assets/js/15.3cfbe4cb.js",
    "revision": "c331f6242226113348b13a2e99196c1d"
  },
  {
    "url": "assets/js/16.62132929.js",
    "revision": "91453dffac73ef2404ddba6da098351d"
  },
  {
    "url": "assets/js/17.fa9aeaa8.js",
    "revision": "e1e1c4989e3555fcba1f1d2cd520bb4b"
  },
  {
    "url": "assets/js/18.a98b0b2f.js",
    "revision": "323367dd6465eda418130e4d177f5b80"
  },
  {
    "url": "assets/js/19.ae0a40dc.js",
    "revision": "a533ff7eee1fb4577c2ae9eb6ed2359a"
  },
  {
    "url": "assets/js/2.62ceaa0b.js",
    "revision": "a8038ac1f110845a5301e3198d8bc1e5"
  },
  {
    "url": "assets/js/20.3ac320f8.js",
    "revision": "139b922c8f37debcf61e1e77e11bbfaf"
  },
  {
    "url": "assets/js/21.b34e2f1a.js",
    "revision": "5051edacfd19d3f1d4dc116f1d14a6fd"
  },
  {
    "url": "assets/js/22.9ced3a47.js",
    "revision": "ad86a51272401b639103c8f988d515c4"
  },
  {
    "url": "assets/js/23.34e4d295.js",
    "revision": "a7f6a3ed4f9f2dd311771ed5a678f35c"
  },
  {
    "url": "assets/js/24.9b896e20.js",
    "revision": "6091e03f1f592722b2635890d3a9ffaa"
  },
  {
    "url": "assets/js/25.590cc8fc.js",
    "revision": "8535f926ecfd4a0f08d8317a2d8bf578"
  },
  {
    "url": "assets/js/26.ad41f3f5.js",
    "revision": "69c5c687ea9306a29a3f5028b5c49d95"
  },
  {
    "url": "assets/js/27.93b70bd3.js",
    "revision": "526528bfb6d50b0a53531d609a477bed"
  },
  {
    "url": "assets/js/28.57858661.js",
    "revision": "45542df40a57d743a77d0a82644d5616"
  },
  {
    "url": "assets/js/29.ccfd7e77.js",
    "revision": "7b07b88a6c4b7483ebcee6f1d7759e2e"
  },
  {
    "url": "assets/js/3.39341a22.js",
    "revision": "c3ca928fb0625cfbb0df863e85a1c7c5"
  },
  {
    "url": "assets/js/30.5cbc41de.js",
    "revision": "9b39d55c826b854a96982a7a399ce7d8"
  },
  {
    "url": "assets/js/31.6491fdce.js",
    "revision": "8973e5d9c618a0da48aef00914d0fc55"
  },
  {
    "url": "assets/js/32.e0d5b615.js",
    "revision": "ce9554827ffe0df7825f16b5ac2a33a4"
  },
  {
    "url": "assets/js/33.7dfeeece.js",
    "revision": "01bf8204a4493c2d1feb9e5996d344d3"
  },
  {
    "url": "assets/js/34.50744da4.js",
    "revision": "ae946a31032f3e6a01ac9cdb4475cca6"
  },
  {
    "url": "assets/js/35.47b51faa.js",
    "revision": "e1ea447162c9501e15477a96db572d00"
  },
  {
    "url": "assets/js/36.b49de1a1.js",
    "revision": "47dc878154db676665413c0051a9b598"
  },
  {
    "url": "assets/js/37.2fa35a2c.js",
    "revision": "8cfe52f8e8780e2e70b684ccdc8810f8"
  },
  {
    "url": "assets/js/38.55dc1b3c.js",
    "revision": "a6ea2a48237846007dc9da7c90356eef"
  },
  {
    "url": "assets/js/39.36f83b9f.js",
    "revision": "b51634ce1ba7d6c4988b17fbdd7f0f6d"
  },
  {
    "url": "assets/js/4.3bcc4080.js",
    "revision": "7a84258ca85a7363a97957e549516e04"
  },
  {
    "url": "assets/js/41.3fe40e51.js",
    "revision": "d33b8fe489e7938b5294cab96d1a7faf"
  },
  {
    "url": "assets/js/5.c359d757.js",
    "revision": "e6866376c3bb2f60cda1cebe1de67175"
  },
  {
    "url": "assets/js/6.e9bc3c6a.js",
    "revision": "9cb9c8f35d1770632908b7e5f1b79a5e"
  },
  {
    "url": "assets/js/7.24ed4422.js",
    "revision": "f50dd02655301bd5cf35bb92ae40e7df"
  },
  {
    "url": "assets/js/8.cac270c3.js",
    "revision": "714463267c30b319d4ca863af386e733"
  },
  {
    "url": "assets/js/9.3749ca08.js",
    "revision": "b344120c5d163a728ce559cce35eac92"
  },
  {
    "url": "assets/js/app.5e1c556e.js",
    "revision": "ae961da248c36cb168648fe91753a112"
  },
  {
    "url": "assets/js/vendors~docsearch.2d737b4b.js",
    "revision": "294b247c6ab62b4e7e84055aafee5eb6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "424db84b6627db74529f1e5980229a1d"
  },
  {
    "url": "design/index.html",
    "revision": "f8f67ab60c0c330f7d460cc14ade71c4"
  },
  {
    "url": "index.html",
    "revision": "b2e0c37e82c82178e535370bbd2547dc"
  },
  {
    "url": "intro/index.html",
    "revision": "a57640f8d01a518f2b691e950041c0db"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "1c29cfa0760db5cde34dfaa49397a062"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "0c24aad5c271c9d50f33f8c7a0aefd92"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "cd129a2312899534967274e655adc48d"
  },
  {
    "url": "software/index.html",
    "revision": "9f113723aaa568f628ea7434c8183428"
  },
  {
    "url": "test/index.html",
    "revision": "c54725b0e9322ac61cffcdd1e9ebdc5b"
  },
  {
    "url": "use cases/index.html",
    "revision": "5b442902ec91718a5ae635562b6ca957"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
