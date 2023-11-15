"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[142],{48147:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(66252),o=r(3577),n=r(49963),S=r(2262),_=r(56298),i=r(74428);const I={class:"container"},l={class:"title"},D=["href"],T={key:0},d={key:0,class:"icon"},R=(0,a.aZ)({__name:"Content",props:{args:{}},setup(e){const t=(0,S.iH)(!0);function r(e){if(Array.isArray(e)){const t=Math.floor(Math.random()*e.length);return e[t]}return e}return(e,S)=>((0,a.wg)(),(0,a.iD)("div",I,[Object.keys(e.args.data).length>1?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("div",l,[(0,a._)("div",{class:(0,o.C_)(["chat-icon",[t.value?"opened":"closed"]]),onClick:S[0]||(S[0]=e=>t.value=!t.value)},null,2)]),(0,a.Wm)(n.uT,null,{default:(0,a.w5)((()=>[t.value?((0,a.wg)(),(0,a.iD)("ol",{key:0,class:(0,o.C_)(["list",{"with-icons":"iconDir"in e.args}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.args.data,(t=>((0,a.wg)(),(0,a.iD)("li",{key:t.Name},[(0,a._)("a",{href:`#${t.Name}`},["iconDir"in e.args?((0,a.wg)(),(0,a.iD)("div",T,[t.PrefabModel||t.Icon||t.Model?((0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(i.Z,{name:r(t.PrefabModel||t.Icon||t.Model),dir:e.args.iconDir},null,8,["name","dir"])])):(0,a.kq)("",!0),(0,a._)("p",null,(0,o.zw)(e.$t(t.TID)),1)])):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)((0,o.zw)(e.$t(t.TID)),1)],64))],8,D)])))),128))],2)):(0,a.kq)("",!0)])),_:1})],64)):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.args.data,((t,r)=>((0,a.wg)(),(0,a.j4)(_.Z,{key:r,data:t,"table-opts":e.args.tableOpts,"icon-dir":e.args.iconDir},null,8,["data","table-opts","icon-dir"])))),128))]))}});var s=r(83744);const c=(0,s.Z)(R,[["__scopeId","data-v-b56c99e6"]]),u=c},99298:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(66252),o=r(2262),n=r(3577),S=r(70131),_=r(77451),i=r(48147);const I={class:"portrait-container"},l=["src","alt"],D={class:"topic"},T=(0,a.aZ)({__name:"Page",props:{contentArgs:{},titleLocKey:{},portrait:{default:null}},setup(e){const t=e,{t:r}=(0,S.QT)(),T=(0,a.Fl)((()=>r(t.titleLocKey)));return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)((0,o.SU)(_.Fb),null,{default:(0,a.w5)((()=>[(0,a._)("title",null,(0,n.zw)(T.value),1)])),_:1}),(0,a._)("div",I,[e.portrait?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"portrait",src:e.portrait.src,alt:e.portrait.alt},null,8,l)):(0,a.kq)("",!0),(0,a._)("h1",D,(0,n.zw)(T.value),1)]),(0,a.WI)(e.$slots,"default"),(0,a.Wm)(i.Z,{args:e.contentArgs},null,8,["args"])]))}});var d=r(83744);const R=(0,d.Z)(T,[["__scopeId","data-v-aa4fca4c"]]),s=R},7015:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var a=r(66252),o=r(2262),n=r(99298),S=r(78642),_=r(51131),i=r(91782);const I={__name:"SpaceBuildings",setup(e){const t=(0,S.Z)(_.Z,{filter:([,e])=>e?.AllowBuildOnYS});return(e,r)=>((0,a.wg)(),(0,a.j4)(n.Z,{"title-loc-key":"TID_PRODUCTION_DLG_STATIONS","content-args":{data:(0,o.SU)(t),iconDir:"game/SpaceBuildings"},portrait:{src:(0,o.SU)(i),alt:"spacebuildings"}},null,8,["content-args","portrait"]))}},l=I,D=l},91782:(e,t,r)=>{e.exports=r.p+"img/BlackCitadel.8e77e917.jpg"},51131:(e,t,r)=>{r.d(t,{Z:()=>a});const a={Shipyard:{Name:"Shipyard",AllowBuildOnYS:1,MoveHydrogenCostPerSector:100,TID:"TID_BUILDING_SHIPYARD",TID_Description:"TID_BUILDING_SHIPYARD_DESCR",TID_INFO_SCREEN:"TID_BUILDING_SHIPYARD_DESCR",TID_UPGRADE:"TID_BLD_SHIPYARD_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_SHIPYARD",ConceptImage:"portrait_shipyard",PrefabModel:"station_Shipyard",PrefabModel_BuildMenu:"station_Shipyard_ui",RequiredPlanetLevel:1,UISortOrder:10,Cost:[800,4e3,1e4,2e4,8e4,2e5,5e5,1e6,2e6,5e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,ShipyardCapacity:[4,5,7,8,10,12,13,14,15,16],BuildNotifMode:0,ShowInStarLinks:1,ConstructionTime:[5,60,1800,28800,86400,172800,259200,345600,432e3,432e3]},ShortRangeScanner:{Name:"ShortRangeScanner",AllowBuildOnYS:1,CanCancelBuild:1,CancelBuildRefundPct:90,SeparateBuildingPerLevel:1,AllowAdditionalBuildingsAtMaxLevel:1,MoveHydrogenCostPerSector:50,AllowMoveInSameSectorOnly:1,TID:"TID_BUILDING_SHORT_RANGE_SCANNER",TID_Description:"TID_BUILDING_SHORT_RANGE_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_SHORT_RANGE_SCANNER_INFO",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"station_ShortRangeScanner",PrefabModel_BuildMenu:"station_ShortRangeScanner_ui",PrefabModel_WithStarHarvester:"station_HydroScanner",RequiredPlanetLevel:3,UISortOrder:30,Cost:[500,2e3,2e4,4e4,8e4,15e4,3e5,6e5,1e6,2e6,3e6,4e6],SectorUnlockCost:[1500,2e3,2e4,4e4,8e4,15e4,3e5,6e5,1e6,2e6,3e6,4e6],SectorUnlockTime:[60,3600,86400,129600,172800,259200,345600,432e3,518400,604800,604800,604800],RequiresEmptySector:0,MaxPerSector:1,CanScanSectors:1,BuildNotifMode:2,ConstructionTime:[60,600,43200,86400,86400,86400,86400,86400,86400,86400,86400,86400]},RedStarScanner:{Name:"RedStarScanner",AllowBuildOnYS:1,MoveHydrogenCostPerSector:25,TID:"TID_BUILDING_REDSTAR_SCANNER",TID_Description:"TID_BUILDING_REDSTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_REDSTAR_SCANNER_INFO",TID_UPGRADE:"TID_BLD_REDSTAR_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_MISSION_BUILDING",ConceptImage:"portrait_JumpGate",PrefabModel:"station_RedStarScanner",PrefabModel_BuildMenu:"station_RedStarScanner_ui",RequiredPlanetLevel:4,UISortOrder:40,Cost:[1e3,5e3,2e4,6e4,1e5,2e5,6e5,2e6,4e6,8e6,17e6,32e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:0,StargateModel:"JumpGate",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[3,60,1800,86400,172800,259200,345600,432e3,518400,604800,864e3,864e3]},ResearchStation:{Name:"ResearchStation",AllowBuildOnYS:1,MoveHydrogenCostPerSector:25,TID:"TID_BUILDING_RESEARCH",TID_Description:"TID_BUILDING_RESEARCH_DESCR",TID_INFO_SCREEN:"TID_BUILDING_RESEARCH_INFO",TID_UPGRADE:"TID_BLD_RESEARCH_STATION_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_RESEARCH_STATION",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"station_Research",PrefabModel_BuildMenu:"station_Research_ui",RequiredPlanetLevel:5,UISortOrder:50,Cost:1e3,ResearchSlots:8,RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:5},DiplomacyCenter:{Name:"DiplomacyCenter",AllowBuildOnYS:1,SeparateBuildingPerLevel:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_DIPLOMACY_CENTER",TID_Description:"TID_BUILDING_DIPLOMACY_CENTER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_DIPLOMACY_CENTER_INFO",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"station_Diplomacy",PrefabModel_BuildMenu:"station_Diplomacy_ui",RequiredPlanetLevel:7,UISortOrder:120,Cost:[25e3,5e5,4e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:3,MaxPerSector:1,StargateModel:"JumpGate",BuildNotifMode:3,ShowInStarLinks:1,ConstructionTime:[28800,432e3,864e3]},TradingStation:{Name:"TradingStation",AllowBuildOnYS:1,CanBeRenamed:1,MoveHydrogenCostPerSector:500,TID:"TID_BUILDING_TRADINGSTATION",TID_Description:"TID_BUILDING_TRADINGSTATION_DESCR",TID_INFO_SCREEN:"TID_BUILDING_TRADINGSTATION_DESCR",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"station_trade",PrefabModel_BuildMenu:"station_trade_ui",RequiredPlanetLevel:13,UISortOrder:140,Cost:[2e3,5e3,5e3,5e3,5e3,5e3,5e3,5e3,5e3,5e3],TotalShipmentCRPerDay:[1500,3e3,4500,6e3,8e3,1e4,12e3,15e3,18e3,25e3],MaxShipments:[15,20,25,30,35,40,50,60,70,80],RequiresEmptySector:1,CenterPlacement:1,RequiresSectorDistance:1,MaxOnOwnSolarSystem:3,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,RSLevelReq:[null,5,6,7,7,8,8,9,9,10],ConstructionTime:[86400,172800,345600,432e3,518400,604800,691200,777600,864e3,950400]},WarpLaneHub:{Name:"WarpLaneHub",AllowBuildOnYS:1,SeparateBuildingPerLevel:1,AllowAdditionalBuildingsAtMaxLevel:1,BuyInPairs:1,MoveHydrogenCostPerSector:50,TID:"TID_BUILDING_WARPLANE_HUB",TID_Description:"TID_BUILDING_WARPLANE_HUB_DESCR",TID_INFO_SCREEN:"TID_BUILDING_WARPLANE_HUB_INFO",ConceptImage:"portrait_WarpLane",PrefabModel:"warpLaneHub",PrefabModel_BuildMenu:"warpLaneHub_ui",RequiredPlanetLevel:12,UISortOrder:130,Cost:[1e4,1e4,15e3,15e3,2e4,2e4,25e3,25e3,5e4,5e4,1e5,1e5,2e5,2e5,3e5,3e5,4e5,4e5,5e5,5e5,6e5,6e5],RSLevelReq:[5,5,5,5,6,6,6,6,7,7,7,7,7,7,8,8,8,8,9,9,10,10],RequiresEmptySector:0,MaxOnOwnSolarSystem:24,MaxPerSector:8,IsWarpLane:1,OverrideMinAsteroidDistSquared:1e6,BuildNotifMode:1,ConstructionTime:[43200,43200,86400,86400,172800,172800,259200,259200,345600,345600,432e3,432e3,518400,518400,604800,604800,691200,691200,777600,777600,864e3,864e3]},Stargate:{Name:"Stargate",AllowBuildOnYS:0,TID:"TID_BUILDING_STARGATE",TID_Description:"TID_BUILDING_STARGATE_DESCR",TID_INFO_SCREEN:"TID_BUILDING_STARGATE_DESCR",ConceptImage:"portrait_JumpGate",IsStargate:1,RequiresEmptySector:0,OverrideMinAsteroidDistSquared:1e6,StargateModel:"JumpGate02"},OrangeStarScanner:{Name:"OrangeStarScanner",AllowBuildOnYS:0,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_ORANGESTAR_SCANNER",TID_Description:"TID_BUILDING_ORANGESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_ORANGESTAR_SCANNER_INFO",ConceptImage:"portrait_JumpGate",Model:"redStarScanner",RequiredPlanetLevel:5,UISortOrder:50,Cost:4e4,RequiresEmptySector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:1,StargateModel:"JumpGate",ConstructionTime:86400},WhiteStarScanner:{Name:"WhiteStarScanner",AllowBuildOnYS:1,MoveHydrogenCostPerSector:100,TID:"TID_BLD_WHITESTAR_SCANNER",TID_Description:"TID_BLD_WHITESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BLD_WHITESTAR_SCANNER_DESCR",TID_UPGRADE:"TID_BLD_REDSTAR_UPGRADE",ConceptImage:"portrait_JumpGate",PrefabModel:"station_WhiteStarScanner",PrefabModel_BuildMenu:"station_WhiteStarScanner_ui",RequiredPlanetLevel:10,UISortOrder:92,Cost:25e3,RequiresEmptySector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,StargateModel:"JumpGateWhiteStar",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:1},TimeModulator:{Name:"TimeModulator",AllowBuildOnYS:0,MoveHydrogenCostPerSector:1e3,AllowMoveInSameSectorOnly:1,TID:"TID_BLD_STAR_HARVESTER",TID_Description:"TID_BLD_STAR_HARVESTER_BUILD_DESCR",TID_INFO_SCREEN:"TID_BLD_STAR_HARVESTER_DESCR",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"timeModulator",PrefabModel_BuildMenu:"timeModulator_ui",RequiredPlanetLevel:6,UISortOrder:71,Cost:[1e3,4e3,1e4,3e4,1e5,2e5,4e5,6e5,8e5,1e6,2e6,3e6,4e6,5e6,6e6,7e6],RequiresStarSector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[5,3600,28800,172800,345600,432e3,518400,604800,691200,777600,864e3,864e3,864e3,864e3,864e3,864e3]},BlueStarScanner:{Name:"BlueStarScanner",AllowBuildOnYS:1,MoveHydrogenCostPerSector:100,TID:"TID_BUILDING_BLUESTAR_SCANNER",TID_Description:"TID_BUILDING_BLUESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_BLUESTAR_SCANNER_INFO",TID_UPGRADE:"TID_BUILDING_BLUESTAR_SCANNER_INFO",ConceptImage:"portrait_Anomaly",PrefabModel:"station_BlueStarScanner",PrefabModel_BuildMenu:"station_BlueStarScanner_ui",RequiredPlanetLevel:5,UISortOrder:90,Cost:5e3,RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:1,StargateModel:"JumpGate",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:3},ShipmentRelay:{Name:"ShipmentRelay",AllowBuildOnYS:1,MoveHydrogenCostPerSector:100,TID:"TID_BLD_RELAY",TID_Description:"TID_BLD_RELAY_DESCR",TID_INFO_SCREEN:"TID_BLD_RELAY_INFO",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"station_ShipmentRelay",PrefabModel_BuildMenu:"station_ShipmentRelay_ui",RequiredPlanetLevel:4,UISortOrder:55,Cost:[1500,5e3,1e4,2e4,3e4,4e4,5e4,6e4,7e4,8e4,1e5],MaxOnOwnSolarSystem:1,MaxPerSector:1,RelayBonusPct:[0,5,10,20,60,110,150,180,240,330,1100],HydroCostPerShipment:[5,10,20,40,60,80,100,120,140,160,200],BuildNotifMode:[0,1],ShowInStarLinks:1,RSLevelReq:[null,2,3,4,5,6,7,8,9,10,11],ConstructionTime:[3,28800,57600,86400,172800,259200,345600,432e3,518400,604800,604800]},QuantumStarGate:{Name:"QuantumStarGate",MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_QUANTUMSTAR_GATE",TID_Description:"TID_BUILDING_QUANTUMSTAR_GATE_DESCR",TID_INFO_SCREEN:"TID_BUILDING_QUANTUMSTAR_GATE_INFO",TID_UPGRADE:"TID_BUILDING_QUANTUMSTAR_GATE_INFO",ConceptImage:"portrait_Anomaly",PrefabModel:"station_DarkStarScanner",PrefabModel_BuildMenu:"station_DarkStarScanner_ui",RequiredPlanetLevel:0,UISortOrder:200,Cost:12e6,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:2,StargateModel:"JumpGate_DarkStar",ConstructionTime:86400},QuantumScanner:{Name:"QuantumScanner",MoveHydrogenCostPerSector:500,AllowMoveInSameSectorOnly:1,TID:"TID_BUILDING_QUANTUM_STAR_SCANNER",TID_Description:"TID_BUILDING_QUANTUM_STAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_QUANTUM_STAR_SCANNER_DESCR",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"station_ShortRangeScanner",PrefabModel_BuildMenu:"station_ShortRangeScanner_ui",Cost:1e6,RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,BuildNotifMode:2,QSExploreCost:1e3,DestroyerTarget:1,MaxHealth:1e3,ConstructionTime:3},MineralRefinery:{Name:"MineralRefinery",AllowBuildOnYS:0,MoveHydrogenCostPerSector:5e3,AllowMoveInSameSectorOnly:1,TID:"TID_BUILDING_MINERAL_REFINERY",TID_Description:"TID_BUILDING_MINERAL_REFINERY_DESCR",TID_INFO_SCREEN:"TID_BUILDING_MINERAL_REFINERY_DESCR",TID_UPGRADE:"TID_BUILDING_MINERAL_REFINERY_DESCR",ConceptImage:"portrait_Anomaly",PrefabModel:"timeModulator",PrefabModel_BuildMenu:"timeModulator_ui",Cost:1e6,RequiresStarSector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,DestroyerTarget:1,MaxHealth:1e3,ConstructionTime:3},DO_NOT_USE:{Name:"DO_NOT_USE",SeparateBuildingPerLevel:1,MoveHydrogenCostPerSector:500,AllowMoveInSameSectorOnly:1,TID:"TID_BUILDING_HYDRO_SCANNER",TID_Description:"TID_BUILDING_HYDRO_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_HYDRO_SCANNER_INFO",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"station_HydroScanner",PrefabModel_BuildMenu:"station_ShortRangeScanner_ui",RequiredPlanetLevel:3,UISortOrder:70,Cost:[12e4,18e4,25e4,5e5,1e6,2e6,4e6,6e6,8e6,1e6,16e6,2e7],MaxPerSector:1,BuildNotifMode:1,RequiresDoneSRS:1,GenAsteroids:[2,5],SimilarBuildingID:1,ConstructionTime:[28800,86400,172800,259200,345600,432e3,432e3,432e3,432e3,604800,604800,604800]},StarHarvester:{Name:"StarHarvester",AllowBuildOnYS:1,MoveHydrogenCostPerSector:50,AllowMoveInSameSectorOnly:1,TID:"TID_BLD_STAR_HARVESTER",TID_Description:"TID_BLD_STAR_HARVESTER_DESCR",TID_INFO_SCREEN:"TID_BLD_STAR_HARVESTER_DESCR",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"timeModulator",PrefabModel_BuildMenu:"timeModulator_ui",RequiredPlanetLevel:10,UISortOrder:95,Cost:[7e4,9e4,14e4,19e4,55e4,15e5,21e5,4e6,8e6,16e6,32e6],RequiresStarSector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,SHHydroPerDay:[1e3,1500,2500,5e3,6e3,8e3,1e4,12e3,14e3,18e3,44e3],ConstructionTime:[86400,86400,86400,172800,172800,259200,259200,259200,432e3,604800,864e3]}}}}]);