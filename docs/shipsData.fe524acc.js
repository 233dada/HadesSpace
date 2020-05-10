parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LGIG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.byTypes=exports.data=void 0;var e={Transport:{Name:"Transport",TID:"TID_SHIP_TRANSPORT",TID_Description:"TID_SHIP_TRANSPORT_DESCR",Model:["Transport_lv1","Transport_lv2","Transport_lv3","Transport_lv4","Transport_lv5","Transport_lv6"],NewModuleSlots:["Trade","Trade","Support!Trade","Trade","Trade","Trade"],BuildCost:[250,1e3,8e3,2e4,5e4,6e4],DesignUpgradeCost:[0,1e4,6e4,3e5,1e6,7e6],DesignUpgradeTime:[0,28800,86400,259200,604800,864e3],JobCapacity:[1,2,3,4,5,8],Speed:576,FuelUsePer5000Distance:[1.8,2.4,6,8,10,11],JumpFuelCosts:[15,25,50,75,100,120],WhiteStarScore:[1,500,1e3,1500,2e3,2200],maxLevel:6},Miner:{Name:"Miner",TID:"TID_SHIP_MINER",TID_Description:"TID_SHIP_MINER_DESCR",Model:["Miner_lv1","Miner_lv2","Miner_lv3","Miner_lv4","Miner_lv5","Miner_lv6"],NewModuleSlots:["Mining","Mining","Support","Mining","Mining","Mining"],BuildCost:[500,1e3,1e4,3e4,6e4,1e5],DesignUpgradeCost:[0,5e3,5e4,25e4,8e5,6e6],DesignUpgradeTime:[0,14400,86400,259200,604800,864e3],NumSectorsToMine:[1,2,3,4,5,6],HydrogenCapacity:[50,250,600,1200,2e3,2500],MiningPeriod:[1e3,800,500,250,100,75],Speed:432,JumpFuelCosts:[5,10,15,20,25,40],WhiteStarScore:[1,500,1e3,2e3,4e3,8e3],maxLevel:6},Battleship:{Name:"Battleship",TID:"TID_SHIP_BATTLESHIP",TID_Description:"TID_SHIP_BATTLESHIP_DESCR",Model:["Battleship_lv1","Battleship_lv2","Battleship_lv3","Battleship_lv4","Battleship_lv5","Battleship_lv6"],NewModuleSlots:["Weapon!Shield","Support","Support","Support","Support","Support"],BuildCost:[750,1500,2e4,6e4,12e4,15e4],DesignUpgradeCost:[0,1e4,8e4,4e5,15e5,8e6],DesignUpgradeTime:[0,28800,86400,259200,604800,864e3],HP:[4200,5e3,6e3,7500,9e3,9500],HealRate:[5,4,3.25,2.5,2.5,2.63],Speed:600,FuelUsePer5000Distance:[2.8,4.2,12,24,40,44],JumpFuelCosts:[20,50,80,120,200,240],WhiteStarScore:[1,500,2e3,4e3,7e3,8e3],BSScore:[1,1e4,25e3,4e4,5e4,6e4],maxLevel:6},CerberusSentinel:{Name:"CerberusSentinel",TID:"TID_SHIP_CERB_FIGHTER",TID_Description:"TID_SHIP_CERB_FIGHTER_DESCR",Model:"Fighter_Cerberus2_lv1",HP:750,Speed:300,InfluencePoints:10,maxLevel:1,Battery:6},CerberusGuardian:{Name:"CerberusGuardian",TID:"TID_SHIP_CERB_SECTOR_GUARDIAN",TID_Description:"TID_SHIP_CERB_SECTOR_GUARDIAN_DESCR",Model:"Fighter_Cerberus1_lv1",HP:7e3,Speed:330,InfluencePoints:20,maxLevel:1,GuardianBattery:1},CerberusColossus:{Name:"CerberusColossus",TID:"TID_SHIP_CERB_COLOSSUS",TID_Description:"TID_SHIP_CERB_COLOSSUS_DESCR",Model:"Battleship_Cerberus_lv1",HP:4e4,Speed:360,InfluencePoints:150,maxLevel:1,ColossusLaser:1,Salvage:12,PassiveShield:10},CerberusInterceptor:{Name:"CerberusInterceptor",TID:"TID_SHIP_CERB_INTERCEPTOR",TID_Description:"TID_SHIP_CERB_INTERCEPTOR_DESCR",Model:"Fighter_Cerberus3_lv1",HP:8e3,Speed:660,InfluencePoints:40,maxLevel:1,InterceptorMBattery:1},CerberusDestroyer:{Name:"CerberusDestroyer",TID:"TID_SHIP_CERB_DESTROYER",TID_Description:"TID_SHIP_CERB_DESTROYER_DESCR",Model:"Cerberus_Destroyer_lv1",HP:1e4,Speed:360,DockedObjectDestroyTime:180,InfluencePoints:80,maxLevel:1,DestroyerVengeance:1},CerberusPhoenix:{Name:"CerberusPhoenix",TID:"TID_SHIP_CERB_PHOENIX",TID_Description:"TID_SHIP_CERB_PHOENIX_DESCR",Model:"Fighter_Cerberus4_lv1",HP:45e3,Speed:270,OnDestroySpawnCount:3,InfluencePoints:180,maxLevel:1,DualLaser:5,PhoenixShield:1},AlphaDrone:{Name:"AlphaDrone",TID:"TID_SHIP_ALPHA_DRONE",TID_Description:"TID_SHIP_ALPHA_DRONE_DESCR",Model:["AlphaDrone_lv1","AlphaDrone_lv2","AlphaDrone_lv3","AlphaDrone_lv3","AlphaDrone_lv3","AlphaDrone_lv3","AlphaDrone_lv3","AlphaDrone_lv3","AlphaDrone_lv3","AlphaDrone_lv3","AlphaDrone_lv3","AlphaDrone_lv3"],HP:[400,1200,2500,3500,4500,5500,6500,7500,8500,1e4,12e3,14e3],InitialModule:"Battery",InitialModuleLevels:2,Speed:1050,maxLevel:12},ShipmentDrone:{Name:"ShipmentDrone",TID:"TID_SHIP_SHIPMENT_DRONE",TID_Description:"TID_SHIP_SHIPMENT_DRONE_DESCR",Model:"ShipmentDrone_lv1",Speed:1320,MaxPerStarSystem:8,maxLevel:1},TutBattleship:{Name:"TutBattleship",TID:"TID_SHIP_BATTLESHIP",TID_Description:"TID_SHIP_BATTLESHIP_DESCR",Model:"Battleship_lv3",NewModuleSlots:"Weapon",BuildCost:0,DesignUpgradeCost:0,DesignUpgradeTime:0,HP:6e3,InitialModule:"WeakBattery",InitialModuleLevels:0,HydrogenCapacity:0,Speed:600,FuelUsePer5000Distance:0,JumpFuelCosts:0,ShipAIHandler:9,AIUpdateIntervalSeconds:4,WhiteStarScore:0,maxLevel:1},MiningDrone:{Name:"MiningDrone",TID:"TID_SHIP_MINING_DRONE",TID_Description:"TID_SHIP_MINING_DRONE_DESCR",Model:["MiningDrone_lv1","MiningDrone_lv2","MiningDrone_lv3","MiningDrone_lv4","MiningDrone_lv5","MiningDrone_lv6","MiningDrone_lv7","MiningDrone_lv8","MiningDrone_lv9","MiningDrone_lv10"],HydrogenCapacity:[140,160,180,200,220,250,280,310,350,400],Speed:1200,MaxPerStarSystem:50,maxLevel:10},CerberusBomber:{Name:"CerberusBomber",TID:"TID_SHIP_CERBERUS_BOMBER",TID_Description:"TID_SHIP_CERBERUS_BOMBER_DESCR",Model:"Fighter_Cerberus5_lv1",HP:48e3,MiningPeriod:80,Speed:240,InfluencePoints:200,maxLevel:1,BomberLauncher:1},BlueStarBot:{Name:"BlueStarBot",TID:"TID_SHIP_BATTLESHIP",TID_Description:"TID_SHIP_BATTLESHIP_DESCR",Model:["Battleship_lv1","Battleship_lv2","Battleship_lv3","Battleship_lv4","Battleship_lv5"],NewModuleSlots:["Weapon!Shield","Support","Support","Support","Support"],HP:[4200,5e3,6e3,7500,9e3],InitialModule:"WeakBattery",InitialModuleLevels:0,HydrogenCapacity:0,Speed:600,ShipAIHandler:12,AIUpdateIntervalSeconds:5,maxLevel:5},CerberusStorm:{Name:"CerberusStorm",TID:"TID_SHIP_STORM",TID_Description:"TID_SHIP_STORM_DESCR",Model:"Fighter_Cerberus6_lv1",HP:4e4,Speed:36,InfluencePoints:150,maxLevel:1,DartBarrage:1},CerberusGhosts:{Name:"CerberusGhosts",TID:"TID_SHIP_CERB_GHOSTS",TID_Description:"TID_SHIP_CERB_GHOSTS_DESCR",Model:"Cerberus_Swarm_lv1",HP:200,Speed:900,InfluencePoints:0,maxLevel:1,Battery:3},CorpFlagship:{Name:"CorpFlagship",TID:"TID_CORP_FLAGSHIP",TID_Description:"TID_CORP_FLAGSHIP_DESCR",Model:["Corp_Flagship_lv1","Corp_Flagship_lv2","Corp_Flagship_lv3","Corp_Flagship_lv4","Corp_Flagship_lv5","Corp_Flagship_lv5","Corp_Flagship_lv6","Corp_Flagship_lv6","Corp_Flagship_lv7","Corp_Flagship_lv7","Corp_Flagship_lv8","Corp_Flagship_lv8","Corp_Flagship_lv9","Corp_Flagship_lv9","Corp_Flagship_lv10"],DesignUpgradeCost:[2e5,6e5,2e6,5e6,2e7,4e7,6e7,8e7,1e8,14e7,18e7,22e7,26e7,3e8,35e7],HP:[5e3,5500,6050,6650,7300,8e3,8800,9700,10700,11800,13e3,14200,15600,17500,2e4],Speed:480,WhiteStarScore:[5e3,1e4,15e3,2e4,3e4,4e4,5e4,6e4,7e4,8e4,9e4,1e5,11e4,12e4,13e4],maxLevel:15,Battery:[1,2,3,4,5,6,7,8,9,10,10,11,11,12,12],Immolation:[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],Recoil:[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],Stealth:[0,0,0,12,12,12,12,12,12,12,12,12,12,12,12],EMPRocket:[0,0,0,0,0,1,2,3,4,5,6,7,8,8,8]}};exports.data=e;var r={player:["Transport","Miner","Battleship","CorpFlagship"],cerberus:["CerberusSentinel","CerberusGuardian","CerberusInterceptor","CerberusColossus","CerberusDestroyer","CerberusBomber","CerberusPhoenix","CerberusStorm","CerberusGhosts"],drones:["ShipmentDrone","MiningDrone","AlphaDrone"],notregistered:["TutBattleship","BlueStarBot"]};exports.byTypes=r;
},{}]},{},["LGIG"], null)
//# sourceMappingURL=shipsData.fe524acc.js.map