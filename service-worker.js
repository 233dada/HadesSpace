if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,l)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const p=e=>r(e,s),u={module:{uri:s},exports:n,require:p};i[s]=Promise.all(a.map((e=>u[e]||p(e)))).then((e=>(l(...e),n)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hades-space"}),self.skipWaiting(),e.precacheAndRoute([{url:"/HadesSpace/404.html",revision:"dec0e5853338d708b6f2602239bfa350"},{url:"/HadesSpace/CartographerRU/images/instruct1.png",revision:"3daeb2770a2eab92dd45e5f27f069a29"},{url:"/HadesSpace/CartographerRU/images/instruct2.png",revision:"d5e4d6d6b7f07d0ff221669cc1eaf5c3"},{url:"/HadesSpace/CartographerRU/images/layers-2x.png",revision:"4f0283c6ce28e888000e978e537a6a56"},{url:"/HadesSpace/CartographerRU/images/layers.png",revision:"a6137456ed160d7606981aa57c559898"},{url:"/HadesSpace/CartographerRU/images/marker-icon-2x.png",revision:"401d815dc206b8dc1b17cd0e37695975"},{url:"/HadesSpace/CartographerRU/images/marker-icon.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/HadesSpace/CartographerRU/images/marker-shadow.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"/HadesSpace/CartographerRU/index.html",revision:"967e7ae310782280782a85e74138ad17"},{url:"/HadesSpace/CartographerRU/leaflet.css",revision:"83499c88888e27f85435b14fc288e632"},{url:"/HadesSpace/CartographerRU/leaflet.js",revision:"762a6b64eba28bd621f2fc8aba9168d6"},{url:"/HadesSpace/CartographerRU/style.css",revision:"450fc463b8b1a349df717056fbb3e078"},{url:"/HadesSpace/css/About.41758443.css",revision:null},{url:"/HadesSpace/css/Achievements.c1d0c630.css",revision:null},{url:"/HadesSpace/css/AllianceLevels.c1d0c630.css",revision:null},{url:"/HadesSpace/css/BlueStar.c1d0c630.css",revision:null},{url:"/HadesSpace/css/Cerberus.3f21769d.css",revision:null},{url:"/HadesSpace/css/CompendiumCorp.308eda73.css",revision:null},{url:"/HadesSpace/css/CompendiumTech.b786aac3.css",revision:null},{url:"/HadesSpace/css/CrystalCalc.8186c226.css",revision:null},{url:"/HadesSpace/css/Drone.c1d0c630.css",revision:null},{url:"/HadesSpace/css/Mining.c1d0c630.css",revision:null},{url:"/HadesSpace/css/ModulesCalc.75a85eac.css",revision:null},{url:"/HadesSpace/css/PlanetsCalc.69d738a2.css",revision:null},{url:"/HadesSpace/css/RedStar.e2b2e6d9.css",revision:null},{url:"/HadesSpace/css/Shield.c1d0c630.css",revision:null},{url:"/HadesSpace/css/Ships.4ba86e5b.css",revision:null},{url:"/HadesSpace/css/SpaceBuildings.c1d0c630.css",revision:null},{url:"/HadesSpace/css/Support.c1d0c630.css",revision:null},{url:"/HadesSpace/css/Trade.c1d0c630.css",revision:null},{url:"/HadesSpace/css/WSMatches.b4a50f16.css",revision:null},{url:"/HadesSpace/css/Weapon.c1d0c630.css",revision:null},{url:"/HadesSpace/css/WhiteStar.dbeb7e23.css",revision:null},{url:"/HadesSpace/css/YellowStar.a1e07151.css",revision:null},{url:"/HadesSpace/css/app.68857834.css",revision:null},{url:"/HadesSpace/favicon/150x150.png",revision:"7ac132d32e3760e93b81d305f4fd25ac"},{url:"/HadesSpace/favicon/16x16.png",revision:"bc0a3a9097013db0736970d421bc0516"},{url:"/HadesSpace/favicon/192x192.png",revision:"2416bdc39ec05133a5ec65109f01514f"},{url:"/HadesSpace/favicon/32x32.png",revision:"8c9e4de86ec33dbcbcb752440161a7d1"},{url:"/HadesSpace/favicon/512x512.png",revision:"1addb7269b39c6dece2e4f716d6a12f2"},{url:"/HadesSpace/favicon/apple-touch.png",revision:"969a2ad199640e64204cf322eb397e16"},{url:"/HadesSpace/favicon/favicon.png",revision:"59ab6640e691932b8197ec8bdad44229"},{url:"/HadesSpace/favicon/safari-pinned-tab.svg",revision:"f0139fcda368ab3f6bf4c4ce34583552"},{url:"/HadesSpace/img/AlphaBadge01.aaf854bd.png",revision:null},{url:"/HadesSpace/img/AlphaBadge01_DN.fa4561ef.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv1.b81ce6a1.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv1_DrkNeb.c617b1b6.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv2.25a12bf5.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv2_DrkNeb.aaf791a8.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv3.ded605e4.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv3_DrkNeb.f6192146.png",revision:null},{url:"/HadesSpace/img/AreaShieldRing01.e27264b4.png",revision:null},{url:"/HadesSpace/img/Battleship.a30fc9a3.png",revision:null},{url:"/HadesSpace/img/Battleship_Cerberus.914aac62.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydra.68b102c0.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydra_DrkNeb.51b37647.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling1.39fa3fdb.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling1_DrkNeb.6fc55527.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling2.bd7af92f.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling2_DrkNeb.718927d4.png",revision:null},{url:"/HadesSpace/img/Battleship_Cerberus_DrkNeb.e88851e1.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv1.15f37934.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv2.8827eae4.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv3.5d8fa403.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv4.a882afd4.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv5.6cbb20b3.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv6.f1c698a8.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv7.cb3a64ed.png",revision:null},{url:"/HadesSpace/img/Battleship_lv2.949c7deb.png",revision:null},{url:"/HadesSpace/img/Battleship_lv3.64b2c479.png",revision:null},{url:"/HadesSpace/img/Battleship_lv4.aace2539.png",revision:null},{url:"/HadesSpace/img/Battleship_lv5.b255c2d2.png",revision:null},{url:"/HadesSpace/img/Battleship_lv6.57754cd3.png",revision:null},{url:"/HadesSpace/img/BlackCitadel.8e77e917.jpg",revision:null},{url:"/HadesSpace/img/BlackCitadel.c9cf0466.png",revision:null},{url:"/HadesSpace/img/CerberusStation_DrkNeb.793dc304.png",revision:null},{url:"/HadesSpace/img/CerberusStation_DrkNeb_lv2.d65ed47c.png",revision:null},{url:"/HadesSpace/img/CerberusStation_DrkNeb_lv3.9053d732.png",revision:null},{url:"/HadesSpace/img/Cerberus_DrkNeb_Carrier.7c4af800.png",revision:null},{url:"/HadesSpace/img/Cerberus_swarm1.9f780ded.png",revision:null},{url:"/HadesSpace/img/CompendiumCorp.65e9fa29.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv1.4824df3f.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv10.fdf38acb.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv10_DrkNeb.1678c493.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv11_DrkNeb.b86e514f.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv12_DrkNeb.5afe2551.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv13_DrkNeb.3ca8d875.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv1_DrkNeb.de35d7cb.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv2.772141a5.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv2_DrkNeb.74b140bb.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv3.7ca8ba80.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv3_DrkNeb.2eb70b71.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv4.e21fef9a.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv4_DrkNeb.dc75f79e.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv5.35389f62.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv5_DrkNeb.5c19f4b9.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv6.faf44c59.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv6_DrkNeb.ec0597e2.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv7.02ded316.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv7_DrkNeb.1ca2bf9b.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv8.3a8001b6.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv8_DrkNeb.93a6c595.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv9.d16dbd57.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv9_DrkNeb.5e056909.png",revision:null},{url:"/HadesSpace/img/DecoyDrone_DrkNeb_lv1.584b26bd.png",revision:null},{url:"/HadesSpace/img/DecoyDrone_DrkNeb_lv2.895cc692.png",revision:null},{url:"/HadesSpace/img/DecoyDrone_DrkNeb_lv3.242ac56b.png",revision:null},{url:"/HadesSpace/img/DecoyDrone_DrkNeb_lv4.ece6f89e.png",revision:null},{url:"/HadesSpace/img/DecoyDrone_DrkNeb_lv5.31ab52c5.png",revision:null},{url:"/HadesSpace/img/Distinction_Admiral.50508555.png",revision:null},{url:"/HadesSpace/img/Distinction_Admiral_Legacy.67f10e58.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar1.23df34fb.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar10.6ae6c392.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar10_Legacy.d2435c81.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar1_Legacy.ce059ecc.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar50.ac652b78.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar50_Legacy.374bb433.png",revision:null},{url:"/HadesSpace/img/Distinction_Emperor.8031c8af.png",revision:null},{url:"/HadesSpace/img/Distinction_Emperor_Legacy.91d54d44.png",revision:null},{url:"/HadesSpace/img/Distinction_Governer.ce7c2a58.png",revision:null},{url:"/HadesSpace/img/Distinction_Governer_Legacy.e05f7c30.png",revision:null},{url:"/HadesSpace/img/Distinction_WhiteStar1.6f38cbc7.png",revision:null},{url:"/HadesSpace/img/Distinction_WhiteStar1_Legacy.2d7fc467.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus.ebc57e57.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus1.4cd5200c.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus2.0d148aa5.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus3.6e364ca7.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus4.d5c92038.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus5.57abf3ce.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus6.a5416040.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus_DrkNeb.a9a99848.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus1.bbc33c39.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus2.c3ef8eea.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus3.5d56bcba.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus4.f216d634.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus5.2a2b069d.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus6.483fee3f.png",revision:null},{url:"/HadesSpace/img/Miner.bb0ff4be.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv1.d20b0fd2.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv2.3f36dd8c.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv3.79df3736.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv4.5878d749.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv5.d6c49a29.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv6.d60b354f.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv7.d966eb53.png",revision:null},{url:"/HadesSpace/img/Miner_lv3.5f7e99e1.png",revision:null},{url:"/HadesSpace/img/Miner_lv4.7f90a3f2.png",revision:null},{url:"/HadesSpace/img/Miner_lv5.1e17b687.png",revision:null},{url:"/HadesSpace/img/Miner_lv6.d22009e7.png",revision:null},{url:"/HadesSpace/img/MiningDrone_lv10.0a8430de.png",revision:null},{url:"/HadesSpace/img/MiningDrone_lv4-6.27dc57eb.png",revision:null},{url:"/HadesSpace/img/RelicDrone_lv1_DrkNeb.2cae484d.png",revision:null},{url:"/HadesSpace/img/RelicDrone_lv2_DrkNeb.c953c154.png",revision:null},{url:"/HadesSpace/img/RelicDrone_lv3_DrkNeb.2b8b3d48.png",revision:null},{url:"/HadesSpace/img/RemoteBomb.1a71e1b9.png",revision:null},{url:"/HadesSpace/img/RemoteBomb_DrkNeb.1a71e1b9.png",revision:null},{url:"/HadesSpace/img/RepairDrone_DrkNeb_lv1.69634901.png",revision:null},{url:"/HadesSpace/img/RepairDrone_DrkNeb_lv2.f3e962c2.png",revision:null},{url:"/HadesSpace/img/RepairDrone_DrkNeb_lv3.92fc265d.png",revision:null},{url:"/HadesSpace/img/RepairDrone_DrkNeb_lv4.89178a6b.png",revision:null},{url:"/HadesSpace/img/RepairDrone_DrkNeb_lv5.e8fa84f7.png",revision:null},{url:"/HadesSpace/img/ShipShield.1a4c8760.png",revision:null},{url:"/HadesSpace/img/ShipmentDrone_lv1_DrkNeb.6ed936b5.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv7.baa9ca51.png",revision:null},{url:"/HadesSpace/img/Transport_lv4.902b8f3e.png",revision:null},{url:"/HadesSpace/img/Transport_lv5.4c7b03d4.png",revision:null},{url:"/HadesSpace/img/Transport_lv6.c4e1dd80.png",revision:null},{url:"/HadesSpace/img/afk.6d23e64a.png",revision:null},{url:"/HadesSpace/img/areaDamageIndicator.50d251ee.svg",revision:null},{url:"/HadesSpace/img/arrow.d13ea956.svg",revision:null},{url:"/HadesSpace/img/art.cf8a109c.png",revision:null},{url:"/HadesSpace/img/blueStar_Fragments.3259f068.svg",revision:null},{url:"/HadesSpace/img/calc.ad6c3479.png",revision:null},{url:"/HadesSpace/img/cargo.d95635ca.png",revision:null},{url:"/HadesSpace/img/chat_arrow.4084257f.svg",revision:null},{url:"/HadesSpace/img/clock.e3e3bc1e.svg",revision:null},{url:"/HadesSpace/img/close.6b363d37.svg",revision:null},{url:"/HadesSpace/img/compendium.f74a3730.png",revision:null},{url:"/HadesSpace/img/compendiumTech.63a74f77.png",revision:null},{url:"/HadesSpace/img/credit.45d17641.svg",revision:null},{url:"/HadesSpace/img/dark_nebula_splash2.b045a196.png",revision:null},{url:"/HadesSpace/img/directDamageIndicator.419eb42a.svg",revision:null},{url:"/HadesSpace/img/flt_friendly.b2f59a38.svg",revision:null},{url:"/HadesSpace/img/fuel.e6f48255.svg",revision:null},{url:"/HadesSpace/img/github_logo.b7172519.png",revision:null},{url:"/HadesSpace/img/influence.5b32ac8f.svg",revision:null},{url:"/HadesSpace/img/menu.368c620f.svg",revision:null},{url:"/HadesSpace/img/mining_route.51fc86b0.svg",revision:null},{url:"/HadesSpace/img/news_Update01.4166e256.png",revision:null},{url:"/HadesSpace/img/news_Update02.19daf0d6.png",revision:null},{url:"/HadesSpace/img/outbound.17ce2b54.svg",revision:null},{url:"/HadesSpace/img/planet.23c4780f.png",revision:null},{url:"/HadesSpace/img/planets-calc.73393e3a.png",revision:null},{url:"/HadesSpace/img/portrait_AlphaDrone.6eb85669.png",revision:null},{url:"/HadesSpace/img/portrait_AlphaDrone.d9c429eb.jpg",revision:null},{url:"/HadesSpace/img/portrait_AlphaRocket.b6eeb13d.png",revision:null},{url:"/HadesSpace/img/portrait_Anomaly.282fea85.png",revision:null},{url:"/HadesSpace/img/portrait_Anomaly.b414a071.jpg",revision:null},{url:"/HadesSpace/img/portrait_Asteroids.1dfd1a61.png",revision:null},{url:"/HadesSpace/img/portrait_Asteroids_cr.d10f3f4a.png",revision:null},{url:"/HadesSpace/img/portrait_Battleship.ad0aaa9a.png",revision:null},{url:"/HadesSpace/img/portrait_Battleship.e9f0fccf.jpg",revision:null},{url:"/HadesSpace/img/portrait_BlueStar.1cb180a5.jpg",revision:null},{url:"/HadesSpace/img/portrait_BlueStar.741a09ad.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusBomber.29a19be1.jpg",revision:null},{url:"/HadesSpace/img/portrait_CerberusBomber.c49ba18e.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusCarrier.176e5eed.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusColossus.34ff8038.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusColossus.903c5b81.jpg",revision:null},{url:"/HadesSpace/img/portrait_CerberusDestroyer.edddf096.jpg",revision:null},{url:"/HadesSpace/img/portrait_CerberusDestroyer.fa5e72f7.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusHydra.177137be.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusPhoenix.04463ce5.jpg",revision:null},{url:"/HadesSpace/img/portrait_CerberusPhoenix.808baedb.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusStation.36e3b3b2.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusStation.62cbf446.jpg",revision:null},{url:"/HadesSpace/img/portrait_CerberusStorm.72f906f7.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusStorm.c08136ab.jpg",revision:null},{url:"/HadesSpace/img/portrait_CerberusSwarm.65c53c04.png",revision:null},{url:"/HadesSpace/img/portrait_CorpFlagship.9760c916.jpg",revision:null},{url:"/HadesSpace/img/portrait_CorpFlagship.a867d836.png",revision:null},{url:"/HadesSpace/img/portrait_DroneAreaShield.358a1ad0.png",revision:null},{url:"/HadesSpace/img/portrait_DyingPlanet.06e7bf58.jpg",revision:null},{url:"/HadesSpace/img/portrait_DyingPlanet.45ade265.png",revision:null},{url:"/HadesSpace/img/portrait_EmptySpace.dfd72b26.png",revision:null},{url:"/HadesSpace/img/portrait_Guardian.3a2713ae.png",revision:null},{url:"/HadesSpace/img/portrait_Guardian.bae31958.jpg",revision:null},{url:"/HadesSpace/img/portrait_Interceptor.21742f11.jpg",revision:null},{url:"/HadesSpace/img/portrait_Interceptor.ea343281.png",revision:null},{url:"/HadesSpace/img/portrait_JumpGate.68b7809a.png",revision:null},{url:"/HadesSpace/img/portrait_Miner.ad2997e6.png",revision:null},{url:"/HadesSpace/img/portrait_MiningDrone.79b1fcac.png",revision:null},{url:"/HadesSpace/img/portrait_Planet.6505daee.png",revision:null},{url:"/HadesSpace/img/portrait_PlanetWhiteStar.d6e9627d.png",revision:null},{url:"/HadesSpace/img/portrait_RedStar.5797a8e0.png",revision:null},{url:"/HadesSpace/img/portrait_RemoteBomb.6e8d4260.png",revision:null},{url:"/HadesSpace/img/portrait_Sentinel.dd91e5c0.jpg",revision:null},{url:"/HadesSpace/img/portrait_Sentinel.fc58bceb.png",revision:null},{url:"/HadesSpace/img/portrait_ShipmentDrone.90149456.png",revision:null},{url:"/HadesSpace/img/portrait_SpaceBuilding.6d7d43dd.jpg",revision:null},{url:"/HadesSpace/img/portrait_SpaceBuilding.a263596c.png",revision:null},{url:"/HadesSpace/img/portrait_Transport.9f9f4458.png",revision:null},{url:"/HadesSpace/img/portrait_TurretLaser.eede8f54.png",revision:null},{url:"/HadesSpace/img/portrait_Tutorial.0cc16efe.png",revision:null},{url:"/HadesSpace/img/portrait_WarpLane.485577e1.jpg",revision:null},{url:"/HadesSpace/img/portrait_WarpLane.ecbc5ff2.png",revision:null},{url:"/HadesSpace/img/portrait_WhiteStar.d70a2bb2.png",revision:null},{url:"/HadesSpace/img/portrait_YellowStar.b00882d9.png",revision:null},{url:"/HadesSpace/img/portrait_shipyard.db11bda3.png",revision:null},{url:"/HadesSpace/img/relic.6752e037.png",revision:null},{url:"/HadesSpace/img/settings.f901efb7.svg",revision:null},{url:"/HadesSpace/img/shipments.5a390ca3.svg",revision:null},{url:"/HadesSpace/img/star_blue.ebf929ce.png",revision:null},{url:"/HadesSpace/img/star_blue_1.7965631a.png",revision:null},{url:"/HadesSpace/img/star_blue_2.74b0f7b4.png",revision:null},{url:"/HadesSpace/img/star_dark.250c8a03.png",revision:null},{url:"/HadesSpace/img/star_multi.cd14437e.png",revision:null},{url:"/HadesSpace/img/star_pve.66785ed7.png",revision:null},{url:"/HadesSpace/img/star_pvp.842b9b8d.png",revision:null},{url:"/HadesSpace/img/star_red.22580ac0.svg",revision:null},{url:"/HadesSpace/img/star_red.a3606d62.png",revision:null},{url:"/HadesSpace/img/star_red_dark.ec1367bb.png",revision:null},{url:"/HadesSpace/img/star_white.bdba5449.png",revision:null},{url:"/HadesSpace/img/star_yellow.175546ca.png",revision:null},{url:"/HadesSpace/img/station_BlueStarScanner.6cbb83ac.png",revision:null},{url:"/HadesSpace/img/station_Diplomacy.42f1be0b.png",revision:null},{url:"/HadesSpace/img/station_RedStarScanner.355c5d1e.png",revision:null},{url:"/HadesSpace/img/station_Research.ceacc0b3.png",revision:null},{url:"/HadesSpace/img/station_ShipmentRelay.9ea08c8f.png",revision:null},{url:"/HadesSpace/img/station_Shipyard.190d1c06.png",revision:null},{url:"/HadesSpace/img/station_ShortRangeScanner.a8c7338d.png",revision:null},{url:"/HadesSpace/img/station_WhiteStarScanner.3ddf45cc.png",revision:null},{url:"/HadesSpace/img/station_trade.dbe63410.png",revision:null},{url:"/HadesSpace/img/time.7dcddb1d.png",revision:null},{url:"/HadesSpace/img/timeModulator.127450fb.png",revision:null},{url:"/HadesSpace/img/vengeanceIndicator.45f6c458.png",revision:null},{url:"/HadesSpace/img/warpLaneHub.398191f4.png",revision:null},{url:"/HadesSpace/img/сrystal.ee8a2089.svg",revision:null},{url:"/HadesSpace/index.html",revision:"9bc2f02d18209aa7f2e8262361ce813d"},{url:"/HadesSpace/js/144.f2313dfc.js",revision:null},{url:"/HadesSpace/js/298.0e2706fe.js",revision:null},{url:"/HadesSpace/js/485.4cfebc18.js",revision:null},{url:"/HadesSpace/js/622.7b7c13be.js",revision:null},{url:"/HadesSpace/js/715.8f1bfa73.js",revision:null},{url:"/HadesSpace/js/782.8bb7f567.js",revision:null},{url:"/HadesSpace/js/946.6bc7e4cb.js",revision:null},{url:"/HadesSpace/js/About.915381cf.js",revision:null},{url:"/HadesSpace/js/Achievements.a0038ba9.js",revision:null},{url:"/HadesSpace/js/AllianceLevels.85bf4be3.js",revision:null},{url:"/HadesSpace/js/BlueStar.42e0135a.js",revision:null},{url:"/HadesSpace/js/Cerberus.f0feb8eb.js",revision:null},{url:"/HadesSpace/js/CompendiumCorp.fc250706.js",revision:null},{url:"/HadesSpace/js/CompendiumTech.d11ec916.js",revision:null},{url:"/HadesSpace/js/CrystalCalc.2897e0cd.js",revision:null},{url:"/HadesSpace/js/Drone.5824d42d.js",revision:null},{url:"/HadesSpace/js/Mining.738a60e0.js",revision:null},{url:"/HadesSpace/js/ModulesCalc.d03109ec.js",revision:null},{url:"/HadesSpace/js/PlanetsCalc.ef8d11bf.js",revision:null},{url:"/HadesSpace/js/RedStar.9091a45e.js",revision:null},{url:"/HadesSpace/js/Shield.e4b82b90.js",revision:null},{url:"/HadesSpace/js/Ships.055bec18.js",revision:null},{url:"/HadesSpace/js/SpaceBuildings.7f368c5a.js",revision:null},{url:"/HadesSpace/js/Support.e1267f76.js",revision:null},{url:"/HadesSpace/js/Trade.a36f91cd.js",revision:null},{url:"/HadesSpace/js/WSMatches.f12efcbe.js",revision:null},{url:"/HadesSpace/js/Weapon.c87c562f.js",revision:null},{url:"/HadesSpace/js/WhiteStar.b6349555.js",revision:null},{url:"/HadesSpace/js/YellowStar.74e9beeb.js",revision:null},{url:"/HadesSpace/js/app.4120d906.js",revision:null},{url:"/HadesSpace/js/chunk-vendors.b9bc291f.js",revision:null},{url:"/HadesSpace/js/locale-de-json.8d0e9fe8.js",revision:null},{url:"/HadesSpace/js/locale-en-json.d9432c9f.js",revision:null},{url:"/HadesSpace/js/locale-es-json.bcf6ad30.js",revision:null},{url:"/HadesSpace/js/locale-fr-json.9667b5da.js",revision:null},{url:"/HadesSpace/js/locale-it-json.079781c9.js",revision:null},{url:"/HadesSpace/js/locale-jp-json.9067b499.js",revision:null},{url:"/HadesSpace/js/locale-ko-json.74b472b8.js",revision:null},{url:"/HadesSpace/js/locale-pt-json.75430852.js",revision:null},{url:"/HadesSpace/js/locale-ru-json.fb921373.js",revision:null},{url:"/HadesSpace/js/locale-zh-si-json.ed1b9452.js",revision:null},{url:"/HadesSpace/manifest.json",revision:"334271836314703960297c9e634cf03d"},{url:"/HadesSpace/meta-image.png",revision:"ebb83cdcac2992bb6f891618c45cc2f0"},{url:"/HadesSpace/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
