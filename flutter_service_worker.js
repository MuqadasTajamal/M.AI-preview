'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a3d6adc49e57851e4fb5428113f5b87f",
".git/config": "0b4da371bdbb7925ba1783167c419ab3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1fe2ec9d45a96a4f9a1063a309091d40",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3f1740319468e6c3e073f4bc4baaf697",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "71638bfe65b025a53751c52caac7d6bd",
".git/logs/refs/heads/master": "71638bfe65b025a53751c52caac7d6bd",
".git/logs/refs/remotes/origin/HEAD": "6ae5526e82ff14d4b666e242e503041a",
".git/logs/refs/remotes/origin/master": "e64cb67c6d51af8ce2136dc6b8d776b7",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/1c681c648319145ac8b162fe501d01efe2a3a0": "0fb6da51e3b814f7740c70b935cb9934",
".git/objects/04/93f48602ecc18d0e8ba239a3b88b8a6714e09e": "d1dd369237a642c6aee984de5a8ca828",
".git/objects/0e/42a9d218adb1b0701cdb72f0c1f3b2398b29ca": "a853e829682a31f33d3e7c349ba75a80",
".git/objects/10/ffc7dd4196e3e6b664f6915fba56d679f6fa0b": "13a1f1fd767600535824421f82e329a2",
".git/objects/12/90e32157a5471109522d19c4d52b98aa39d91e": "ad73bf7f00f9e0cfe1cd3b0a178972c3",
".git/objects/2b/7c3acb79ccaf05bbcbef10136d8c25f70e49da": "f2812da62e19a99f02ffde4ebe0488c0",
".git/objects/2d/1af5e3cab2c955c2db7e56aa04d5ca1b60a0f8": "76cf943fd210e51017dae89e02f909e0",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/50f314b36b878d8b62435c15cfdccc24e40c2f": "1bcf1de7d2483b373a02a4e4f5f3e594",
".git/objects/38/b6bbd6126c3a0e3804c6aaaaf65831adb3d6ee": "25e9571ebd9897c9a501fd5b5d08897e",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/5a79e8a012dfa8087af3091ee2e9274ab175f8": "c6a86ebb1ac16464db7071e4a6d6abeb",
".git/objects/4c/176a60218ca137a167810a9cb7160e799d753f": "b67d8e6000b12b5508903280d2863972",
".git/objects/4e/7dd21d5a643dfe8b15eeaecb056e78356255c8": "2564499577509d71bbec9c276e14934e",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/a334ddb7cd3e5f3d8df181db178b960cd6f47d": "f4250a769cc4e3ea5e00098b1764b9f5",
".git/objects/52/8c885dbb6e5b0c7c2cdb96e37f3638cd6ef8c3": "a98040599f8a9b833fb2dec0e897ea79",
".git/objects/53/7227f20448e524e6f8d4609249d0e68223fabc": "7e844d6db58262fb886007a409c1669c",
".git/objects/56/2d8114ef18d18b8932af34a63709c4b1845368": "511f08955aa16f2818beb38a033d1ec6",
".git/objects/56/f5d9e44b3775129aa5acebc397b7d523dfbead": "3a62bb5ea5612249d0cf508a3f49c7c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5e/39ae97c2a65713da2610f5077b5a44565746f5": "3cd30fb6a1ece47eab83c79023f99170",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/4609741fa42e2cb8bcfe1ff2ff6adef4c4410c": "3b6335fcd93e7881e01a3f17c3d0fc54",
".git/objects/6c/8c7489ccd18fcc457d8c193b51296fb806f2c5": "122914c2c96ce06477e5016c287f623c",
".git/objects/73/7cf93806f82c9c300eeb893fda1ee1487afe8a": "1e642ac6f53520cde80548fb64969eb3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/e02843a764de221b3d92231f0d6a268b6a8824": "e53be00dbb9577e56699785e22739838",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/89a8afedb9a3d6571e0a2a60bbceb2551a9b4e": "78d2a133b07d0d16be87d1242fa7696c",
".git/objects/d1/c4614014aaffc04c0e0cff073739a33644360a": "a42dab7f44ee51d84c13d6cf050b1937",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/de/7886007b350d5808575d788157892a96d418f5": "a22557827f97c9e4a9bc67bdd3934d04",
".git/objects/de/c36771d44ad178b3c0220502827182c25a920b": "f43762d9cc29f52d599d57a7917dfce0",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/9976904b98e065230484f4bb043ea14ad70001": "2414ffbcc6d66bd4cd01de16ffbd8edb",
".git/objects/ee/dcad209e158830d0143d91eb159ca71abaea32": "1213b3f88ef3e854649fd63f012ba6fb",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/master": "36b662658364b7343da75d033bf89baf",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "36b662658364b7343da75d033bf89baf",
"assets/AssetManifest.bin": "b5e77d437f3d00fd5f45cdad6d014b23",
"assets/AssetManifest.bin.json": "1c176884ab7b5205f599e041f7bd0e6a",
"assets/AssetManifest.json": "8b82eb3ed28c25d51c6851fcf15e1348",
"assets/FontManifest.json": "ebecce3f76c14553e158d27dae46a289",
"assets/fonts/MaterialIcons-Regular.otf": "5599191e68ec629068230b4d116536bb",
"assets/fonts/robo1.ttf": "fa726104cd4b7e8f106e391fea744b08",
"assets/fonts/robo2.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/images/bg.png": "a64465a9d62cde5594302e405b95aec7",
"assets/images/bg1.png": "978af3a66758ffd6a7450b06023798eb",
"assets/images/m.png": "46f6fb6385bb80b4afbd6d2817d4f7ce",
"assets/images/m1.png": "059edb193dccce04623bdf2041829b3b",
"assets/images/mai.png": "ab4feb8fa22ce7b6d6b98ae68952fbed",
"assets/images/mai1.png": "78da18e39a64d9ce6978b1984d9683fa",
"assets/images/mai2.png": "2efd5fa0c55c7e2dec9fc082372d3b2d",
"assets/images/mq.png": "be4a7f93cb6157571a0f834f5dc4d987",
"assets/images/mq1.png": "342746637ae3c7ab1e9dd1497a698de9",
"assets/NOTICES": "d6e825dd97e56f8c0d503e03232890cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "99c2c21bd22a8c5dbb993eaa828b30b8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e37857255e840f63fb7696fe891ab78f",
"/": "e37857255e840f63fb7696fe891ab78f",
"main.dart.js": "a730f1909ffda64067cd6c435c690e6b",
"manifest.json": "34d60a83ae929f39054f2ceeb6d9fc85",
"version.json": "1d188648d780692ac1de8dff01bb090b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
