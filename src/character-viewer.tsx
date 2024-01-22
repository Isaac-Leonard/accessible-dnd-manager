import {
  Ability,
  Armour,
  Cantrip,
  Character,
  CharacterAbilities,
  CharacterInformation,
  CombatStats,
  ExtraInformation,
  Feature,
  Inventory,
  Item,
  Note,
  Proficiencies,
  Proficiency,
  Skills,
  Spell,
  SpellBook,
  Weapon,
  defaultArmour,
  defaultCantrip,
  defaultFeature,
  defaultItem,
  defaultNote,
  defaultProficiency,
  defaultSpell,
  defaultWeapon,
} from "./character";
import { makePropertySetterFactory, useArrayManager } from "./utils";
import { InputControl, NumberControl, TextareaControl } from "./components";

type CharacterViewerProps = {
  character: Character;
  setCharacter: (character: Character) => void;
  back: () => void;
};

export const CharacterViewer = ({
  character,
  setCharacter,
  back,
}: CharacterViewerProps) => {
  const propertySetter = makePropertySetterFactory(character, setCharacter);
  return (
    <div>
      <div>
        <button onClick={back}>Back</button>
      </div>
      <AbilitiesViewer
        abilities={character.characterAbilities}
        setAbilities={propertySetter("characterAbilities")}
      />
      <CombatStatsViewer
        stats={character.combatStats}
        setStats={propertySetter("combatStats")}
      />
      <SkillsViewer
        skills={character.skillsList}
        setSkills={propertySetter("skillsList")}
      />
      <FeaturesViewer
        features={character.spellsAndCombatAbilities}
        setFeatures={propertySetter("spellsAndCombatAbilities")}
      />
      <InventoryViewer
        inventory={character.inventory}
        setInventory={propertySetter("inventory")}
      />
      <ProficienciesViewer
        proficiencies={character.proficiencies}
        setProficiencies={propertySetter("proficiencies")}
      />
      <CharacterInfoViewer
        info={character.characterInformationList}
        setInfo={propertySetter("characterInformationList")}
      />
      <BackgroundInfoViewer
        info={character.characterBackground}
        setInfo={propertySetter("characterBackground")}
      />
      <SpellbookViewer
        spellbook={character.spellBook}
        setSpellbook={propertySetter("spellBook")}
      />
      <NotesViewer notes={character.notes} setNotes={propertySetter("notes")} />{" "}
      <div>
        <div>
          <h2>Export</h2>
        </div>
        <pre>{JSON.stringify(character)}</pre>
      </div>
    </div>
  );
};

type AbilitiesViewerProps = {
  abilities: CharacterAbilities;
  setAbilities: (abilities: CharacterAbilities) => void;
};

const AbilitiesViewer = ({ abilities, setAbilities }: AbilitiesViewerProps) => {
  const propertySetter = makePropertySetterFactory(abilities, setAbilities);
  return (
    <div id="character_abilities">
      <div>
        <h2 id="character_abilities_heading">Ability scores</h2>
      </div>
      <div>
        <AbilityViewer
          name="Strength"
          ability={abilities.strength}
          setAbility={propertySetter("strength")}
        />
        <AbilityViewer
          name="Dexterity"
          ability={abilities.dexterity}
          setAbility={propertySetter("dexterity")}
        />
        <AbilityViewer
          name="Constitution"
          ability={abilities.constitution}
          setAbility={propertySetter("constitution")}
        />
        <AbilityViewer
          name="Intelligence"
          ability={abilities.intelligence}
          setAbility={propertySetter("intelligence")}
        />
        <AbilityViewer
          name="Wizdom"
          ability={abilities.wisdom}
          setAbility={propertySetter("wisdom")}
        />
        <AbilityViewer
          name="Charisma"
          ability={abilities.charisma}
          setAbility={propertySetter("charisma")}
        />
      </div>
    </div>
  );
};

type StatsViewerProps = {
  stats: CombatStats;
  setStats: (stats: CombatStats) => void;
};

const CombatStatsViewer = ({ stats, setStats }: StatsViewerProps) => {
  const propertySetter = makePropertySetterFactory(stats, setStats);
  return (
    <div id="combat_stats">
      <div>
        <h2 id="combat_stats_heading">Combat Stats</h2>
      </div>
      <div>
        <div>
          <NumberControl
            label=" Initiative"
            value={stats.initiative}
            setValue={propertySetter("initiative")}
          />
          <NumberControl
            label="Maximum hit points"
            value={stats.maximumHitPoints}
            setValue={propertySetter("maximumHitPoints")}
          />
          <NumberControl
            label="Current hit points"
            value={stats.currentHitPoints}
            setValue={propertySetter("currentHitPoints")}
          />
          <NumberControl
            label="Temporary hit points"
            value={stats.temporaryHitPoints}
            setValue={propertySetter("temporaryHitPoints")}
          />
          <InputControl
            label="Hit dice"
            value={stats.hitDice}
            setValue={propertySetter("hitDice")}
          />
          <NumberControl
            label="Armour class"
            value={stats.armourClass}
            setValue={propertySetter("armourClass")}
          />
          <InputControl
            label="Speed"
            value={stats.speed}
            setValue={propertySetter("speed")}
          />
          <NumberControl
            label="Passive perception"
            value={stats.passivePerception}
            setValue={propertySetter("passivePerception")}
          />
        </div>
      </div>
    </div>
  );
};

type WeaponsViewerProps = {
  weapons: Weapon[];
  setWeapons: (weapons: Weapon[]) => void;
};

const WeaponsViewer = ({ weapons, setWeapons }: WeaponsViewerProps) => {
  const { set, remove, add, ref } = useArrayManager(
    weapons,
    setWeapons,
    defaultWeapon
  );
  return (
    <div id="weapons">
      <div>
        <h2 id="weapons_heading">Weapons</h2>
      </div>
      <ul id="weapons_list">
        {weapons.map((weapon, index) => (
          <li>
            <InputControl
              label="Name"
              value={weapon.name}
              setValue={set(index, "name")}
              innerRef={index === weapons.length - 1 ? ref : null}
            />
            <TextareaControl
              label="Description"
              value={weapon.description}
              setValue={set(index, "description")}
            />
            <NumberControl
              label="Hit modifier"
              value={weapon.hitModifier}
              setValue={set(index, "hitModifier")}
            />
            <InputControl
              label="Damage roll"
              value={weapon.damageRoll}
              setValue={set(index, "damageRoll")}
            />
            <InputControl
              label="Range"
              value={weapon.range}
              setValue={set(index, "range")}
            />
            <NumberControl
              label="Amount owned"
              value={weapon.amount}
              setValue={set(index, "amount")}
            />
            <NumberControl
              label="Weight (pounds)"
              value={weapon.weight}
              setValue={set(index, "weight")}
            />
            <div>
              <button onClick={remove(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={add}>Add a Weapon</button>
      </div>
    </div>
  );
};

type SkillsViewerProps = {
  skills: Skills;
  setSkills: (skilles: Skills) => void;
};

const SkillsViewer = ({ skills, setSkills }: SkillsViewerProps) => {
  const propertySetter = makePropertySetterFactory(skills, setSkills);
  return (
    <div id="skills_list">
      <div>
        <h2 id="skills_list_heading">Skills</h2>
      </div>
      <ul>
        <li>
          <NumberControl
            label="Acrobatics (Dex)"
            value={skills.acrobatics}
            setValue={propertySetter("acrobatics")}
          />
        </li>
        <li>
          <NumberControl
            label="Animal Handling (Wiz)"
            value={skills.animalHandling}
            setValue={propertySetter("animalHandling")}
          />
        </li>
        <li>
          <NumberControl
            label=" Arcana (Int)"
            value={skills.arcana}
            setValue={propertySetter("arcana")}
          />
        </li>
        <li>
          <NumberControl
            label="Athletics (Str)"
            value={skills.athletics}
            setValue={propertySetter("athletics")}
          />
        </li>
        <li>
          <NumberControl
            label="Deception (Cha)"
            value={skills.deception}
            setValue={propertySetter("deception")}
          />
        </li>
        <li>
          <NumberControl
            label="History (Int)"
            value={skills.history}
            setValue={propertySetter("history")}
          />
        </li>
        <li>
          <NumberControl
            label="Insight (Wiz)"
            value={skills.insight}
            setValue={propertySetter("insight")}
          />
        </li>
        <li>
          <NumberControl
            label="Intimidation (Cha)"
            value={skills.intimidation}
            setValue={propertySetter("intimidation")}
          />
        </li>
        <li>
          <NumberControl
            label="Investigation (Int)"
            value={skills.investigation}
            setValue={propertySetter("investigation")}
          />
        </li>
        <li>
          <NumberControl
            label=" Medicine (Wiz)"
            value={skills.medicine}
            setValue={propertySetter("medicine")}
          />
        </li>
        <li>
          <NumberControl
            label="Nature (Int)"
            value={skills.nature}
            setValue={propertySetter("nature")}
          />
        </li>
        <li>
          <NumberControl
            label="Perception (Wiz)"
            value={skills.perception}
            setValue={propertySetter("perception")}
          />{" "}
        </li>
        <li>
          <NumberControl
            label="Performance (Cha)"
            value={skills.performance}
            setValue={propertySetter("performance")}
          />
        </li>
        <li>
          <NumberControl
            label="Persuasion (Cha)"
            value={skills.persuasion}
            setValue={propertySetter("persuasion")}
          />
        </li>
        <li>
          <NumberControl
            label="Religion (Int)"
            value={skills.religion}
            setValue={propertySetter("religion")}
          />
        </li>
        <li>
          <NumberControl
            label=" Sleight of Hand (Dex)"
            value={skills.sleightOfHand}
            setValue={propertySetter("sleightOfHand")}
          />{" "}
        </li>
        <li>
          <NumberControl
            label="Stealth (dex)"
            value={skills.stealth}
            setValue={propertySetter("stealth")}
          />
        </li>
        <li>
          <NumberControl
            label="Survival (Wiz)"
            value={skills.survival}
            setValue={propertySetter("survival")}
          />{" "}
        </li>
      </ul>
    </div>
  );
};

type FeaturesViewerProps = {
  features: Feature[];
  setFeatures: (features: Feature[]) => void;
};

const FeaturesViewer = ({ features, setFeatures }: FeaturesViewerProps) => {
  const { set, remove, add, ref } = useArrayManager(
    features,
    setFeatures,
    defaultFeature
  );
  return (
    <div id="spells_and_combat_abilities">
      <div>
        <h2 id="spells_and_combat_abilities_heading">Features</h2>
      </div>
      <ul id="spells_and_combat_abilities_list">
        {features.map((feature, index) => (
          <li>
            <InputControl
              label="Name"
              value={feature.name}
              setValue={set(index, "name")}
              innerRef={index === features.length - 1 ? ref : null}
            />
            <TextareaControl
              label="Description"
              value={feature.description}
              setValue={set(index, "description")}
            />
            <InputControl
              label="Source"
              value={feature.source}
              setValue={set(index, "source")}
            />
            <div>
              <button onClick={remove(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={add}>Add a spell or ability</button>
      </div>
    </div>
  );
};

type InventoryViewerProps = {
  inventory: Inventory;
  setInventory: (inventory: Inventory) => void;
};

const InventoryViewer = ({ inventory, setInventory }: InventoryViewerProps) => {
  const propertySetter = makePropertySetterFactory(inventory, setInventory);
  const totalWeight = Object.values(inventory)
    .flat()
    .reduce((total, { amount, weight }) => total + amount * weight, 0);
  return (
    <div id="inventory">
      <div>
        <h2 id="inventory_heading">Inventory</h2>
      </div>
      <div>Total weight: {totalWeight}</div>
      <ArmourViewer
        armour={inventory.armour}
        setArmour={propertySetter("armour")}
      />
      <WeaponsViewer
        weapons={inventory.weapons}
        setWeapons={propertySetter("weapons")}
      />
      <ItemViewer
        headingText="Potions"
        addbuttonText="Add Potion"
        items={inventory.potions}
        setItems={propertySetter("potions")}
      />
      <ItemViewer
        headingText="Treasure"
        addbuttonText="Add treasure"
        items={inventory.treasure}
        setItems={propertySetter("treasure")}
      />
      <ItemViewer
        headingText="Kits and Tools"
        addbuttonText="Add Kit or Tool"
        items={inventory.kitsAndTools}
        setItems={propertySetter("kitsAndTools")}
      />
      <ItemViewer
        headingText="Items"
        items={inventory.items}
        addbuttonText="Add Item"
        setItems={propertySetter("items")}
      />
    </div>
  );
};

type ItemViewerProps = {
  headingText: string;
  addbuttonText: string;
  items: Item[];
  setItems: (items: Item[]) => void;
};

const ItemViewer = ({
  headingText,
  addbuttonText,
  items,
  setItems,
}: ItemViewerProps) => {
  const { set, remove, add, ref } = useArrayManager(
    items,
    setItems,
    defaultItem
  );
  return (
    <div>
      <div>
        <h3>{headingText}</h3>
      </div>
      <ul id="inventory_items_list">
        {items.map((item, index) => (
          <li>
            <InputControl
              label="Name"
              value={item.name}
              setValue={set(index, "name")}
              innerRef={index === items.length - 1 ? ref : null}
            />
            <TextareaControl
              label="Description"
              value={item.description}
              setValue={set(index, "description")}
            />
            <NumberControl
              label="Amount owned"
              value={item.amount}
              setValue={set(index, "amount")}
            />
            <NumberControl
              label="Weight (pounds)"
              value={item.weight}
              setValue={set(index, "weight")}
            />
            <div>
              <button onClick={remove(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={add}>{addbuttonText}</button>
      </div>
    </div>
  );
};

type ArmourViewerProps = {
  armour: Armour[];
  setArmour: (armour: Armour[]) => void;
};

const ArmourViewer = ({ armour: armourList, setArmour }: ArmourViewerProps) => {
  const { set, remove, add, ref } = useArrayManager(
    armourList,
    setArmour,
    defaultArmour
  );
  return (
    <div>
      <div>
        <h3>Armour</h3>
      </div>
      <ul id="inventory_armour_list">
        {armourList.map((armour, index) => (
          <li>
            <InputControl
              label="Name"
              value={armour.name}
              setValue={set(index, "name")}
              innerRef={armourList.length - 1 === index ? ref : null}
            />
            <TextareaControl
              label="Description"
              value={armour.description}
              setValue={set(index, "description")}
            />
            <InputControl
              label="AC bonus"
              value={armour.armourClassBonus}
              setValue={set(index, "armourClassBonus")}
            />
            <InputControl
              label="Type"
              value={armour.armourType}
              setValue={set(index, "armourType")}
            />
            <InputControl
              label="Penalty"
              value={armour.penalty}
              setValue={set(index, "penalty")}
            />
            <NumberControl
              label="Amount owned"
              value={armour.amount}
              setValue={set(index, "amount")}
            />
            <NumberControl
              label="Weight (pounds)"
              value={armour.weight}
              setValue={set(index, "weight")}
            />
            <div>
              <button onClick={remove(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={add}>Add Armour</button>
      </div>
    </div>
  );
};

type ProficienciesViewerProps = {
  proficiencies: Proficiencies;
  setProficiencies: (proficiencies: Proficiencies) => void;
};

const ProficienciesViewer = ({
  proficiencies,
  setProficiencies,
}: ProficienciesViewerProps) => {
  const set = makePropertySetterFactory(proficiencies, setProficiencies);
  return (
    <div>
      <div>
        <h2 id="proficiencies_heading">Proficiencies</h2>
      </div>
      <NumberControl
        label="Proficiency bonus"
        value={proficiencies.bonus}
        setValue={set("bonus")}
      />
      <InputControl
        label="Weapons"
        value={proficiencies.weapons}
        setValue={set("weapons")}
      />
      <InputControl
        label="Armour"
        value={proficiencies.armour}
        setValue={set("armour")}
      />
      <InputControl
        label="Saving throws"
        value={proficiencies.savingThrows}
        setValue={set("savingThrows")}
      />
      <InputControl
        label="Skills"
        value={proficiencies.skills}
        setValue={set("skills")}
      />
      <InputControl
        label="Tools"
        value={proficiencies.tools}
        setValue={set("tools")}
      />
      <OtherProficienciesViewer
        proficiencies={proficiencies.others}
        setProficiencies={set("others")}
      />{" "}
    </div>
  );
};

type OtherProficienciesViewerProps = {
  proficiencies: Proficiency[];
  setProficiencies: (proficiencies: Proficiency[]) => void;
};

const OtherProficienciesViewer = ({
  proficiencies,
  setProficiencies,
}: OtherProficienciesViewerProps) => {
  const { set, remove, add, ref } = useArrayManager(
    proficiencies,
    setProficiencies,
    defaultProficiency
  );
  return (
    <div id="proficiencies">
      {proficiencies.map((proficiency, index) => (
        <div>
          <InputControl
            label="name"
            value={proficiency.name}
            setValue={set(index, "name")}
            innerRef={proficiencies.length - 1 === index ? ref : null}
          />
          <InputControl
            label="Applied to"
            value={proficiency.description}
            setValue={set(index, "description")}
            placeholder="athletics religion"
          />
          <button onClick={remove(index)}>Remove</button>
        </div>
      ))}
      <div>
        <button onClick={add}>Add a Proficiency</button>
      </div>
    </div>
  );
};

type AbilityViewerProps = {
  ability: Ability;
  setAbility: (ability: Ability) => void;
  name: string;
};

const AbilityViewer = ({ ability, setAbility, name }: AbilityViewerProps) => {
  const propertySetter = makePropertySetterFactory(ability, setAbility);
  return (
    <div>
      <NumberControl
        label={name}
        value={ability.base}
        setValue={propertySetter("base")}
      />
      <NumberControl
        label="Modifier"
        value={ability.modifier}
        setValue={propertySetter("modifier")}
      />
      <NumberControl
        label="Save"
        value={ability.save}
        setValue={propertySetter("save")}
      />
    </div>
  );
};

type CharacterInfoViewerProps = {
  info: CharacterInformation;
  setInfo: (info: CharacterInformation) => void;
};

const CharacterInfoViewer = ({ info, setInfo }: CharacterInfoViewerProps) => {
  const propertySetter = makePropertySetterFactory(info, setInfo);
  return (
    <div id="character_information_list">
      <div>
        <h2 id="character_information_list_heading">
          Player and Character Information
        </h2>
      </div>
      <div>
        <InputControl
          label="Player name"
          value={info.playerName}
          setValue={propertySetter("playerName")}
        />
        <InputControl
          label="Character name"
          value={info.characterName}
          setValue={propertySetter("characterName")}
        />
        <InputControl
          label="Race"
          value={info.race}
          setValue={propertySetter("race")}
        />
        <NumberControl
          label="Level"
          value={info.level}
          setValue={propertySetter("level")}
        />
        <NumberControl
          label="Experience points"
          value={info.experience}
          setValue={propertySetter("experience")}
        />
        <NumberControl
          label="Advancement points"
          value={info.advancementPoints}
          setValue={propertySetter("advancementPoints")}
        />
        <NumberControl
          label="Treasure points"
          value={info.treasurePoints}
          setValue={propertySetter("treasurePoints")}
        />
        <InputControl
          label="Class"
          value={info.class}
          setValue={propertySetter("class")}
        />
        <InputControl
          label="Background"
          value={info.background}
          setValue={propertySetter("background")}
        />
        <NumberControl
          label="Age"
          value={info.age}
          setValue={propertySetter("age")}
        />
        <InputControl
          label="Height"
          value={info.height}
          setValue={propertySetter("height")}
        />
        <InputControl
          label="Alignment"
          value={info.alignment}
          setValue={propertySetter("alignment")}
        />
        <InputControl
          label="Languages"
          value={info.language}
          setValue={propertySetter("language")}
        />
        <InputControl
          label="DCI Number"
          value={info.DCINumber}
          setValue={propertySetter("DCINumber")}
        />
      </div>
    </div>
  );
};

type BackgroundInfoViewerProps = {
  info: ExtraInformation;
  setInfo: (info: ExtraInformation) => void;
};

const BackgroundInfoViewer = ({ info, setInfo }: BackgroundInfoViewerProps) => {
  const propertySetter = makePropertySetterFactory(info, setInfo);
  return (
    <div id="character_background">
      <div>
        <h2 id="character_background_heading">Extra Character Details</h2>
      </div>
      <TextareaControl
        label="Personality traits"
        value={info.personalityTraits}
        setValue={propertySetter("personalityTraits")}
      />
      <TextareaControl
        label="Ideals"
        value={info.ideals}
        setValue={propertySetter("ideals")}
      />
      <TextareaControl
        label="Bonds"
        value={info.bonds}
        setValue={propertySetter("bonds")}
      />
      <TextareaControl
        label="Floors"
        value={info.flaws}
        setValue={propertySetter("flaws")}
      />

      <TextareaControl
        label="Appearance"
        value={info.characterAppearance}
        setValue={propertySetter("characterAppearance")}
      />
      <TextareaControl
        label="Back story"
        value={info.characterBackstory}
        setValue={propertySetter("characterBackstory")}
      />
    </div>
  );
};

type SpellbookViewerProps = {
  spellbook: SpellBook;
  setSpellbook: (spellbook: SpellBook) => void;
};

const SpellbookViewer = ({ spellbook, setSpellbook }: SpellbookViewerProps) => {
  const propertySetter = makePropertySetterFactory(spellbook, setSpellbook);
  return (
    <div id="spell_book">
      <div>
        <h2 id="spell_book_heading">Spells</h2>
      </div>
      <CantripViewer
        cantrips={spellbook.cantrips}
        setCantrips={propertySetter("cantrips")}
      />
      <SpellViewer
        spells={spellbook.spells}
        setSpells={propertySetter("spells")}
      />
    </div>
  );
};

type CantripViewerProps = {
  cantrips: Cantrip[];
  setCantrips: (cantrips: Cantrip[]) => void;
};

const CantripViewer = ({ cantrips, setCantrips }: CantripViewerProps) => {
  const { set, remove, add, ref } = useArrayManager(
    cantrips,
    setCantrips,
    defaultCantrip
  );
  return (
    <div>
      <div>
        <h3>Cantrips</h3>
      </div>
      <ul id="spell_book_cantrips">
        {cantrips.map((cantrip, index) => {
          return (
            <li>
              <InputControl
                label="Name"
                value={cantrip.name}
                setValue={set(index, "name")}
                innerRef={cantrips.length - 1 === index ? ref : null}
              />
              <InputControl
                label="Description"
                value={cantrip.description}
                setValue={set(index, "description")}
              />
              <button onClick={remove(index)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={add}>Add a Cantrip</button>
      </div>
    </div>
  );
};

type SpellsViewerProps = {
  spells: Spell[];
  setSpells: (spells: Spell[]) => void;
};

const SpellViewer = ({ spells, setSpells }: SpellsViewerProps) => {
  const { set, remove, add, ref } = useArrayManager(
    spells,
    setSpells,
    defaultSpell
  );
  return (
    <div>
      <div>
        <h3>Spells</h3>
      </div>
      <ul id="spell_book_spells">
        {spells.map((spell, index) => (
          <li>
            <InputControl
              label="Name"
              value={spell.name}
              setValue={set(index, "name")}
              innerRef={spells.length - 1 === index ? ref : null}
            />
            <TextareaControl
              label="Description"
              value={spell.description}
              setValue={set(index, "description")}
            />
            <NumberControl
              label="Level"
              value={spell.level}
              setValue={set(index, "level")}
            />
            <div>
              <label htmlFor={"memorised" + index}>Memorised/prepared</label>
              <input
                type="checkbox"
                id={"memorised" + index}
                value="Memorised / Prepared"
                checked={spell.memorised}
                onChange={(e) =>
                  set(index, "memorised")(e.currentTarget.checked)
                }
              />
            </div>
            <div>
              <button onClick={remove(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={add}>Add a spell</button>
      </div>
    </div>
  );
};

type NotesViewerProps = { notes: Note[]; setNotes: (notes: Note[]) => void };

const NotesViewer = ({ notes, setNotes }: NotesViewerProps) => {
  const { set, remove, add, ref } = useArrayManager(
    notes,
    setNotes,
    defaultNote
  );
  return (
    <div id="notes">
      <div>
        <h2 id="notes_heading">Notes</h2>
      </div>
      <ul id="notes_list">
        {notes.map((note, index) => (
          <li>
            <InputControl
              label="Name"
              value={note.name}
              setValue={set(index, "name")}
              innerRef={index === notes.length - 1 ? ref : null}
            />
            <TextareaControl
              label="Note"
              value={note.note}
              setValue={set(index, "note")}
            />
            <div>
              <button onClick={remove(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={add}>Add a Note</button>
      </div>
    </div>
  );
};
