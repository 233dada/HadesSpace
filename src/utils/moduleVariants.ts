import lightModules from '@Data/light_modules.js';
import darkModules from '@Data/dark_modules.js';
import globals from '@Data/globals.js';
import locKeys from '@Regulation/locKeys.mjs';

export type ModuleVariantId = 'light' | 'dark';

export interface ModuleVariant {
    id: ModuleVariantId;
    titleLocKey: string;
    descriptionKey: string;
    data: Record<string, unknown>;
    fields: string[];
}

type VariantSource = Record<string, Record<string, unknown> & {
    Name?: string;
    TID_Description?: string;
}>;

/**
 * Parser/service fields that are not part of the variant's stat payload.
 * Everything else in a light/dark module entry is rendered automatically,
 * so new CSV columns need no changes here.
 */
const META_KEYS = new Set([
    'Name',
    'TID',
    'TID_Description',
    'Icon',
    'Model',
    'PrefabModel',
    'EnableQuantum',
    'VFX',
]);

const SOURCES: Record<ModuleVariantId, VariantSource> = {
    light: lightModules as VariantSource,
    dark: darkModules as VariantSource,
};

// Quantum progression lives in globals.csv, but belongs to every variant table.
const QUANTUM_GLOBAL_FIELDS = [
    'QuantumUpgradeBaseLevels',
    'QuantumArtifactBPReqs',
    'QuantumUpgradeCosts',
];

const QUANTUM_GLOBALS = Object.fromEntries(
    QUANTUM_GLOBAL_FIELDS
        .map((key) => [key, (globals as Record<string, unknown>)[key]])
        .filter(([, value]) => Array.isArray(value)),
);

/**
 * Discovers Light/Dark variants from the parsed CSV data itself. A module is
 * included only when the parser found a variant description for it, and its
 * fields are all non-service keys, so newly added stats appear automatically.
 * @return {Record<string, ModuleVariant[]>} variants grouped by module name
 */
export default function getModuleVariants(): Record<string, ModuleVariant[]> {
    const result: Record<string, ModuleVariant[]> = {};

    for (const [id, source] of Object.entries(SOURCES) as [ModuleVariantId, VariantSource][]) {
        for (const [moduleName, variantData] of Object.entries(source)) {
            if (!variantData || variantData.Name !== moduleName || !variantData.TID_Description) {
                continue;
            }

            const data = { ...QUANTUM_GLOBALS, ...variantData };
            const fields = Object.keys(data).filter((key) => (
                !META_KEYS.has(key) && !key.startsWith('_')
            ));

            (result[moduleName] ??= []).push({
                id,
                titleLocKey: locKeys[id],
                descriptionKey: variantData.TID_Description,
                data,
                fields,
            });
        }
    }

    return result;
}
