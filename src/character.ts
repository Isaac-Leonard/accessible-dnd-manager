import { transformProperty } from "./utils";

export type CharacterV0 = {
  characterAbilities: CharacterAbilities;
  combatStats: CombatStats;
  weapons: Weapon[];
  skillsList: Skills;
  spellsAndCombatAbilities: Feature[];
  characterFeatures: Feature[];
  inventory: InventoryV1;
  proficiencies: Proficiency[];
  characterInformationList: CharacterInformation;
  characterBackground: ExtraInformation;
  spellBook: SpellBook;
  notes: Note[];
};

export type CharacterV1 = {
  characterAbilities: CharacterAbilities;
  combatStats: CombatStats;
  weapons: Weapon[];
  skillsList: Skills;
  spellsAndCombatAbilities: Feature[];
  inventory: InventoryV1;
  proficiencies: Proficiency[];
  characterInformationList: CharacterInformation;
  characterBackground: ExtraInformation;
  spellBook: SpellBook;
  notes: Note[];
};

export type Character = {
  version: "2";
  characterAbilities: CharacterAbilities;
  combatStats: CombatStats;
  weapons: Weapon[];
  skillsList: Skills;
  spellsAndCombatAbilities: Feature[];
  inventory: Inventory;
  proficiencies: Proficiency[];
  characterInformationList: CharacterInformation;
  characterBackground: ExtraInformation;
  spellBook: SpellBook;
  notes: Note[];
};

export type StoredCharacter = Character | CharacterV1 | CharacterV0;

export const defaultCharacter = (): Character => {
  return {
    version: "2",
    characterAbilities: defaultCharacterAbilities(),
    combatStats: defaultCombatStats(),
    weapons: [],
    skillsList: defaultSkills(),
    spellsAndCombatAbilities: [],
    inventory: defaultInventory(),
    proficiencies: [],
    characterInformationList: defaultCharacterInformation(),
    characterBackground: defaultExtraInformation(),
    spellBook: defaultSpellBook(),
    notes: [],
  };
};

export type Ability = {
  base: number;
  modifier: number;
  save: number;
};

const defaultAbility = (): Ability => {
  return {
    base: 10,
    modifier: 0,
    save: 0,
  };
};

export type CharacterAbilities = {
  strength: Ability;
  dexterity: Ability;
  constitution: Ability;
  intelligence: Ability;
  wisdom: Ability;
  charisma: Ability;
};

export type CombatStats = {
  initiative: number;
  maximumHitPoints: number;
  currentHitPoints: number;
  temporaryHitPoints: number;
  hitDice: string;
  armourClass: number;
  speed: string;
  passivePerception: number;
};

const defaultCharacterAbilities = (): CharacterAbilities => {
  return {
    strength: defaultAbility(),
    dexterity: defaultAbility(),
    constitution: defaultAbility(),
    intelligence: defaultAbility(),
    wisdom: defaultAbility(),
    charisma: defaultAbility(),
  };
};

const defaultCombatStats = (): CombatStats => {
  return {
    initiative: 0,
    maximumHitPoints: 0,
    currentHitPoints: 0,
    temporaryHitPoints: 0,
    hitDice: "0",
    armourClass: 10,
    speed: "",
    passivePerception: 0,
  };
};

export type Skills = {
  acrobatics: number;
  animalHandling: number;
  arcana: number;
  athletics: number;
  deception: number;
  history: number;
  insight: number;
  intimidation: number;
  investigation: number;
  medicine: number;
  nature: number;
  perception: number;
  performance: number;
  persuasion: number;
  religion: number;
  sleightOfHand: number;
  stealth: number;
  survival: number;
};

const defaultSkills = (): Skills => {
  return {
    acrobatics: 0,
    animalHandling: 0,
    arcana: 0,
    athletics: 0,
    deception: 0,
    history: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    medicine: 0,
    nature: 0,
    perception: 0,
    performance: 0,
    persuasion: 0,
    religion: 0,
    sleightOfHand: 0,
    stealth: 0,
    survival: 0,
  };
};

export type Weapon = {
  name: string;
  hitModifier: number;
  damageRoll: string;
  range: string;
};

export const defaultWeapon = (): Weapon => {
  return {
    name: "",
    hitModifier: 0,
    damageRoll: "",
    range: "",
  };
};

export type Feature = { name: string; description: string; source: string };

export const defaultFeature = (): Feature => {
  return {
    name: "",
    description: "",
    source: "",
  };
};

export type ItemV1 = { name: string; description: string };
export type Item = {
  name: string;
  description: string;
  weight: number;
  amount: number;
};

export type ArmourV1 = ItemV1 & {
  armourType: string;
  armourClassBonus: string;
  penalty: string;
};

export type Armour = Item & {
  armourType: string;
  armourClassBonus: string;
  penalty: string;
};

export const defaultItem = (): Item => {
  return { name: "", description: "", weight: 0, amount: 1 };
};

export const defaultArmour = (): Armour => {
  return {
    name: "",
    description: "",
    weight: 0,
    amount: 1,
    armourType: "",
    armourClassBonus: "",
    penalty: "",
  };
};

export type InventoryV1 = {
  armour: Armour[];
  weapons: Item[];
  potions: Item[];
  treasure: Item[];
  kitsAndTools: Item[];
  items: Item[];
};

export type Inventory = {
  armour: Armour[];
  weapons: Item[];
  potions: Item[];
  treasure: Item[];
  kitsAndTools: Item[];
  items: Item[];
};

const defaultInventory = (): Inventory => {
  return {
    armour: [],
    weapons: [],
    potions: [],
    treasure: [],
    kitsAndTools: [],
    items: [],
  };
};

export type Proficiency = { name: string; description: string };

export const defaultProficiency = (): Proficiency => {
  return { name: "", description: "" };
};

export type CharacterInformation = {
  playerName: string;
  characterName: string;
  race: string;
  class: string;
  level: number;
  experience: number;
  advancementPoints: number;
  treasurePoints: number;
  background: string;
  age: number;
  height: string;
  alignment: string;
  language: string;
  DCINumber: string;
};

export const defaultCharacterInformation = (): CharacterInformation => {
  return {
    playerName: "",
    characterName: "",
    race: "",
    class: "",
    level: 1,
    experience: 0,
    advancementPoints: 0,
    treasurePoints: 0,
    background: "",
    age: 0,
    height: "",
    alignment: "",
    language: "",
    DCINumber: "",
  };
};

export type ExtraInformation = {
  personalityTraits: string;
  ideals: string;
  bonds: string;
  flaws: string;
  characterAppearance: string;
  characterBackstory: string;
};

export const defaultExtraInformation = (): ExtraInformation => {
  return {
    personalityTraits: "",
    ideals: "",
    bonds: "",
    flaws: "",
    characterAppearance: "",
    characterBackstory: "",
  };
};

export type Cantrip = {
  name: string;
  description: string;
};

export const defaultCantrip = (): Cantrip => {
  return {
    name: "",
    description: "",
  };
};

export type Spell = {
  name: string;
  description: string;
  level: number;
  memorised: boolean;
};

export const defaultSpell = (): Spell => {
  return { name: "", description: "", level: 1, memorised: false };
};

export type SpellBook = {
  cantrips: Cantrip[];
  spells: Spell[];
};

export const defaultSpellBook = (): SpellBook => {
  return {
    cantrips: [],
    spells: [],
  };
};

export type Note = { name: string; note: string };

export const defaultNote = (): Note => {
  return { name: "", note: "" };
};

export const updateOldCharacter = (char: StoredCharacter): Character => {
  if ("characterFeatures" in char) {
    const { characterFeatures, ...updatedChar } = char;
    for (let feature of characterFeatures) {
      updatedChar.spellsAndCombatAbilities.push(feature);
    }
    return updateV1toV2(char);
  } else if ("version" in char) {
    return char;
  } else {
    return updateV1toV2(char);
  }
};

const updateV1toV2 = (char: CharacterV1): Character => {
  const inventory = Object.fromEntries(
    Object.entries(char.inventory).map(([key, itemList]) => {
      return [key, itemList.map((item) => ({ ...item, weight: 0, amount: 1 }))];
    })
  ) as Inventory;
  return transformProperty(char, "inventory", inventory);
};
