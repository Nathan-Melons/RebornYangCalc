import { Generation, MoveCategory, NatureName, StatID, StatsTable, TypeName, Weather } from '../data/interface';
import { Field, Side } from '../field';
import { Move } from '../move';
import { Pokemon } from '../pokemon';
import { RawDesc } from '../desc';
export declare function isGrounded(pokemon: Pokemon, field: Field): boolean;
export declare function getModifiedStat(stat: number, mod: number, gen?: Generation): number;
export declare function computeFinalStats(gen: Generation, attacker: Pokemon, defender: Pokemon, field: Field, ...stats: StatID[]): void;
export declare function getFinalSpeed(gen: Generation, pokemon: Pokemon, field: Field, side: Side): number;
export declare function getMoveEffectiveness(gen: Generation, move: Move, type: TypeName, isGhostRevealed?: boolean, isGravity?: boolean, isRingTarget?: boolean): number;
export declare function checkAirLock(pokemon: Pokemon, field: Field): void;
export declare function checkTeraformZero(pokemon: Pokemon, field: Field): void;
export declare function checkForecast(pokemon: Pokemon, weather?: Weather): void;
export declare function checkItem(pokemon: Pokemon, magicRoomActive?: boolean): void;
export declare function checkWonderRoom(pokemon: Pokemon, wonderRoomActive?: boolean): void;
export declare function checkIntimidate(gen: Generation, source: Pokemon, target: Pokemon): void;
export declare function checkDownload(source: Pokemon, target: Pokemon, wonderRoomActive?: boolean): void;
export declare function checkIntrepidSword(source: Pokemon, gen: Generation): void;
export declare function checkDauntlessShield(source: Pokemon, gen: Generation): void;
export declare function checkEmbody(source: Pokemon, gen: Generation): void;
export declare function checkInfiltrator(pokemon: Pokemon, affectedSide: Side): void;
export declare function checkSeedBoost(pokemon: Pokemon, field: Field): void;
export declare function checkMultihitBoost(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc, usedWhiteHerb?: boolean): boolean;
export declare function chainMods(mods: number[], lowerBound: number, upperBound: number): number;
export declare function getBaseDamage(level: number, basePower: number, attack: number, defense: number): number;
export declare function getMostProficientStat(pokemon: Pokemon, gen?: Generation): StatID;
export declare function getFinalDamage(baseAmount: number, i: number, effectiveness: number, isBurned: boolean, stabMod: number, finalMod: number, protect?: boolean): number;
export declare function getShellSideArmCategory(source: Pokemon, target: Pokemon): MoveCategory;
export declare function getWeightFactor(pokemon: Pokemon): 2 | 1 | 0.5;
export declare function countBoosts(gen: Generation, boosts: StatsTable): number;
export declare function getEVDescriptionText(gen: Generation, pokemon: Pokemon, stat: 'atk' | 'def' | 'spd' | 'spa', natureName: NatureName): string;
export declare function handleFixedDamageMoves(attacker: Pokemon, move: Move): number;
export declare function pokeRound(num: number): number;
export declare function OF16(n: number): number;
export declare function OF32(n: number): number;
