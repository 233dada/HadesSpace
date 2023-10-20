/**
 * @GeneratedBy StarSectors.js runner
 * @OriginalFile raw/Nebula/red_star_sectors.csv
 * @UsedFiles cerb_groups.csv, cerberus_stations.csv
 */

export default {
    Name: ["TutorialRedStar", "Mine_Risk0_Lv1", "Mine_Risk0_Lv2", "Mine_Risk0_Lv3", "Mine_Risk0_Lv4", "Mine_Risk0_Lv5", "Mine_Risk0_Lv6", "Mine_Risk0_Lv7", "Mine_Risk0_Lv8", "Mine_Risk0_Lv9", "Mine_Risk0_Lv10", "Mine_Risk1_Lv1", "Mine_Risk1_Lv2", "Mine_Risk1_Lv3", "Mine_Risk1_Lv4", "Mine_Risk1_Lv5", "Mine_Risk1_Lv6", "Mine_Risk1_Lv7", "Mine_Risk1_Lv8", "Mine_Risk1_Lv9", "Mine_Risk1_Lv10", "Mine_Risk2_Lv1", "Mine_Risk2_Lv2", "Mine_Risk2_Lv3", "Mine_Risk2_Lv4", "Mine_Risk2_Lv5", "Mine_Risk2_Lv6", "Mine_Risk2_Lv7", "Mine_Risk2_Lv8", "Mine_Risk2_Lv9", "Mine_Risk2_Lv10", "ArtifactPlanet_Lv1", "ArtifactPlanet_Lv2", "ArtifactPlanet_Lv3", "ArtifactPlanet_Lv4", "ArtifactPlanet_Lv5", "ArtifactPlanet_Lv6", "ArtifactPlanet_Lv7", "ArtifactPlanet_Lv8", "ArtifactPlanet_Lv9", "ArtifactPlanet_Lv10", "ArtifactPlanet_Lv11", "Mine_Risk0_Lv11", "Mine_Risk1_Lv11", "Mine_Risk2_Lv11", "ArtifactPlanet_Lv12", "Mine_Risk0_Lv12", "Mine_Risk1_Lv12", "Mine_Risk2_Lv12"],
    PlanetTypes: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "destroyed01", "destroyed01", "destroyed02", "destroyed03", "destroyed04", "destroyed05", "destroyed06", "destroyed07", "destroyed08", "destroyed09", "destroyed10", "destroyed11", null, null, null, "destroyed12", null, null, null],
    MinPlanetDistanceFromCenter: 0,
    MaxPlanetDistanceFromCenter: 0,
    MoonSize: 100,
    AsteroidsMin: [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 4, 6, 8, 8, 8, 8, 8, 8, 4, 4, 4, 10, 10, 10, 10, 10, 10, 10, 10, 3, 5, 8, 10, 3, 5, 8],
    AsteroidsMax: [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6, 4, 4, 6, 8, 10, 10, 10, 10, 10, 10, 5, 6, 6, 10, 10, 10, 10, 10, 10, 10, 10, 4, 7, 10, 10, 4, 7, 10],
    HydrogenPerDay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 200, 250, 300, 400, 500, 600, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 0, 0, 0, 1000],
    AsteroidBeltAxis1Size: [0, 1500, 1200, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 1200, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 1800, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 2000, 1500, 1400, 1400, 1400, 1750, 1000, 1000, 1000, 1000, 1000, 1400, 1500, 1600, 1400, 1400, 1500, 1700],
    AsteroidBeltAxis2Size: [0, 1200, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1400, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1300, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 2000, 1300, 1400, 1600, 1600, 1750, 1750, 1750, 1750, 1750, 1750, 1550, 1300, 1200, 1800, 1550, 1300, 1200],
    CerbGroup: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        { Name: "RS0", NumSentinels: 1 },
        { Name: "RSG", NumGuardians: 1 },
        { Name: "RSM1L3", NumSentinels: [0, 1], NumGuardians: 1 },
        { Name: "RSM1L4", NumSentinels: [2, 4], NumGuardians: 1 },
        { Name: "RSM1L5", NumSentinels: [3, 4], NumGuardians: 1, WeightPerPlayers: [100, 100, 0] },
        { Name: "RSM1L6", NumSentinels: [3, 6], NumGuardians: 2 },
        { Name: "RSM1L7", NumSentinels: [3, 6], NumGuardians: 2 },
        { Name: "RSM1L8", NumSentinels: [2, 4], NumGuardians: [1, 2] },
        { Name: "RSM1L9", NumSentinels: [3, 6], NumGuardians: [3, 5] },
        { Name: "RSM1L10", NumSentinels: [4, 7], NumGuardians: [3, 4] },
        { Name: "RSM2L1" },
        { Name: "RSM2L2", NumSentinels: [1, 2], NumGuardians: 1 },
        { Name: "RSM2L3", NumSentinels: [1, 3], NumGuardians: 1 },
        { Name: "RSM2L4", NumSentinels: [1, 3], NumGuardians: 1, WeightPerPlayers: [100, 100, 0] },
        { Name: "RSM2L5", NumSentinels: 3, NumGuardians: 2, NumColossus: [0, 1] },
        { Name: "RSM2L6", NumSentinels: 3, NumGuardians: 2, NumColossus: [0, 1], WeightPerPlayers: [100, 100, 50] },
        { Name: "RSM2L7", NumSentinels: [3, 5] },
        { Name: "RSM2L8", NumSentinels: [3, 4], NumGuardians: [1, 2], NumPhoenix: 1 },
        { Name: "RSM2L9", NumSentinels: 4, NumGuardians: 3, NumColossus: 1 },
        { Name: "RSM2L10", NumSentinels: [3, 5], NumGuardians: [2, 3], NumPhoenix: 1, NumStorm: 1 },
        { Name: "RS0", NumSentinels: 1 },
        { Name: "RSP2", NumSentinels: [0, 1], NumGuardians: 1 },
        { Name: "RSP3", NumSentinels: [2, 3], NumGuardians: [1, 2], WeightPerPlayers: [100, 100, 0] },
        { Name: "RSP4", NumSentinels: 3, NumGuardians: 2 },
        { Name: "RSP5", NumSentinels: 1, NumGuardians: 4, NumColossus: 1 },
        { Name: "RSP6", NumSentinels: [3, 4], NumGuardians: [3, 4] },
        { Name: "RSP7", NumBomber: 1 },
        { Name: "RSP8", NumGuardians: 2 },
        { Name: "RSP9", NumBomber: 0, NumStorm: 2 },
        { Name: "RSP10", NumColossus: 1, NumStorm: 2 },
        { Name: "RSP11", NumHydra: 1 },
        null,
        { Name: "RSM1L11", NumSentinels: [6, 9], NumGuardians: [4, 6], NumColossus: [0, 2] },
        { Name: "RSM2L11", NumSentinels: [5, 7], NumGuardians: [3, 4], NumPhoenix: 1, NumStorm: 2 },
        { Name: "RSP12", NumStorm: 2, NumCarrier: 1 },
        null,
        { Name: "RSM1L12", NumSentinels: [6, 9], NumGuardians: [4, 6], NumColossus: [0, 2] },
        { Name: "RSM2L12", NumSentinels: [5, 7], NumGuardians: [3, 4], NumPhoenix: 1, NumStorm: 2 },
    ],
    MinArtifacts: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, null, null, null, 4, null, null, null],
    MaxArtifacts: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, null, null, null, 6, null, null, null],
    ArtifactGroupName: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "tutorial", "rs1", "rs2", "rs3", "rs4", "rs5", "rs6", "rs7", "rs8", "rs9", "rs10", "rs11", null, null, null, "rs12", null, null, null],
    DisableMoveOutsideSector: 0,
    GhostsSpawnWeight: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 800, null, null, null, null, null, null, null, null, null, 1000, 400, 400, 500, 600, 700, 800, 900, 1000, 1000, 1000, 1000, null, null, null, 1000, null, null, null],
    SpawnPctPerGateDistance: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [0, 100], [0, 100], [0, 100], [0, 100], [0, 100], [0, 100], [0, 100], [0, 100], [0, 100], null, null, null, [0, 100], null, null, null],
};
