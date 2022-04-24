'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "420c20faf3285bc4dc2d56b520eeacf8",
"mstile-310x310.png": "e54be8f484df4847b568a94590fbe054",
"version.json": "198d2762edeeeb6d88f02d70297a1da0",
"mstile-144x144.png": "71a6f08b80050d53d9af724dfb9a2641",
"safari-pinned-tab.svg": "fe5f827b4b415fccbf3e97c73db2b422",
"favicon.ico": "cb7134b834d9b2a9ce37a72bd49195c0",
"index.html": "eaa421148122c22698e27f09902f0c6a",
"/": "eaa421148122c22698e27f09902f0c6a",
"android-chrome-192x192.png": "8ad5d71299d74c058164faec3c75f583",
"apple-touch-icon.png": "f1e2bb2654e7bd8b8489ed57377c0392",
"mstile-70x70.png": "a9edf2b5eb1e4dc4bc64da29f41c1f49",
"main.dart.js": "ffdcf3d39726307d1ff469c8f09e4ac9",
"mstile-310x150.png": "ca8d38e0b1410a214d947db50dd0de51",
"android-chrome-512x512.png": "f92d1171a1dae1c987bb3a21e10fa260",
"manifest.json": "2e78bef7d88a50d6cf7f78872f8dc915",
"mstile-150x150.png": "1a2e9c4a7c69d4cfda02ac6f9f085827",
"assets/AssetManifest.json": "d284a2f0ba04515b7ae9e0f349dc3132",
"assets/NOTICES": "4daf7343390c919c092a5f976f20ed99",
"assets/splash2.jpg": "f209a8ac1dce4adedc89e90f28af801b",
"assets/FontManifest.json": "41f3757626699b423ad4fd2daa6be51c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/me.png": "fd1ed8262daf4afafdd0ac384f7359ee",
"assets/assets/images/android.svg": "5f4709b74bb37a3dd3857743691ed8d2",
"assets/assets/images/undraw_faq_re_31cw.svg": "8c6aed20641da2d956378f65c3cd394f",
"assets/assets/images/github.svg": "a6d8c48cdc66316c579ced5a55cb88ac",
"assets/assets/images/icons8-mongodb.svg": "5929aeee3ce5495b9475613e2fae694f",
"assets/assets/images/app-store-png-logo-33107.png": "a4016b922f3c8fc3cace660b4c45ecce",
"assets/assets/images/twitter-round-line-color.svg": "973de3858e1f48d898cd19ff7ce1d53c",
"assets/assets/images/flutter.svg": "89e161060662c05666fa7652ecdb0218",
"assets/assets/images/icons8-swift.svg": "9cda9d8aec4afde8120ef7a7343dba27",
"assets/assets/images/white_logo.svg": "2e8d153375a342587ebc34bbb0091861",
"assets/assets/images/email.svg": "95df3a0601ae75f29196d5db87937dde",
"assets/assets/images/mobile-phone-round.svg": "aa384540ed3ea5ca15d9765d8bc3113a",
"assets/assets/images/logo_lockup_dart_vertical_wht.svg": "62e2d4b2006ff9013e3cfe1304a9b615",
"assets/assets/images/en_badge_web_generic.png": "008c518b2dc2a600dc01a09a38e3f631",
"assets/assets/images/facebook-round-line-color.svg": "7cacca0d6f0f1323bff5a79288bafc52",
"assets/assets/images/92813512-27f0bb80-f376-11ea-8562-ee2b3e416aec.png": "3eacacb29f8c878a58db2c0ed7f93f79",
"assets/assets/images/icons8-mysql-logo.svg": "81b84c54cdb9a636295648c7024525e7",
"assets/assets/images/25182%2520%255BConverted%255D.svg": "74942623337ff6ca3b5dda048448fbda",
"assets/assets/images/ios.svg": "3ca5ebb7125e355f169ef9787b0c1691",
"assets/assets/images/linkedin.svg": "1cdb14b7fc02c266ac839631e1d87386",
"assets/assets/images/instagram-round-line.svg": "e73a9658145dd53813d11fb42f7c42ff",
"assets/assets/images/logo_lockup_flutter_vertical_wht.svg": "a20a4ce4ff043410e84a1bcae38fcacc",
"assets/assets/images/whatsapp.png": "7611f02494be1e121a6f6a391d3eafdc",
"assets/assets/images/image.json": "301d2f1577b2a838feacc3a4336f6c51",
"assets/assets/images/black_logo.svg": "21d9fac855cd2a65569f05ea60fc9b36",
"assets/assets/images/icons8-git-250.svg": "b5ac5b8f1d30ba25e6493332ccac5c2d",
"assets/assets/images/whatsapp-round-line-color.svg": "7f4b5f751460eb82dea9b808dd172205",
"assets/assets/images/icons8-java.svg": "f7349e128937ded447b0908bb9583d30",
"assets/assets/images/bg.jpg": "b7440dff613f16c9913294c18329ab22",
"assets/assets/animation/error.json": "91460248890c2ceb21a11766528807a3",
"assets/assets/animation/82423-developer-yoga.json": "820fe3f1820431901ca5a62d9c276e00",
"assets/assets/animation/background.json": "722da02ea0b350ad74e25e97a4ad7eef",
"assets/assets/animation/63814-gradient-dots-background.json": "57963ff2cbb72824a524ce472e945996",
"assets/assets/animation/about_animation.json": "f6b5625f8d555e1ae62e8352ddcef8d8",
"assets/assets/animation/backgroundanimationlonger.flr": "fc4abe257388d6135d1c7cbe35c79f50",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Menlo-Regular.ttf": "9f94dc20bb2a09c15241d3a880b7ad01",
"assets/assets/fonts/PNU-Regular.ttf": "a5145dd6e710b1ec18f06be74f1570df",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/PNU-Bold.ttf": "4363d9c9ec9845a2dbe13c881d204e0e",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/PNU-Medium.ttf": "a18a53e2baa5e07c4acf87dc49f9d292",
"browserconfig.xml": "a3be6b218989ceba3431d68ca25a6d78",
"favicon-32x32.png": "b969eaf9c733f170a7ba7324b94a003c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
