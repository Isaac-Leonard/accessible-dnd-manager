function setup(characters, save, open) {
  $("a").click(function (e) {
    e.preventDefault();
    $("#" + this.href.split("#")[1])
      .attr("tabindex", 0)
      .focus()
      .removeAttr("tabindex");
  });
  $("#character_abilities_strength_base").change(function () {
    characters.currentCharacter.characterAbilities.strength.base = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_strength_modifier").change(function () {
    characters.currentCharacter.characterAbilities.strength.modifier = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_strength_save").change(function () {
    characters.currentCharacter.characterAbilities.strength.save = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_dexterity_base").change(function () {
    characters.currentCharacter.characterAbilities.dexterity.base = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_dexterity_modifier").change(function () {
    characters.currentCharacter.characterAbilities.dexterity.modifier = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_dexterity_save").change(function () {
    characters.currentCharacter.characterAbilities.dexterity.save = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_constitution_base").change(function () {
    characters.currentCharacter.characterAbilities.constitution.base = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_constitution_modifier").change(function () {
    characters.currentCharacter.characterAbilities.constitution.modifier = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_constitution_save").change(function () {
    characters.currentCharacter.characterAbilities.constitution.save = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_intelligence_base").change(function () {
    characters.currentCharacter.characterAbilities.intelligence.base = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_intelligence_modifier").change(function () {
    characters.currentCharacter.characterAbilities.intelligence.modifier = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_intelligence_save").change(function () {
    characters.currentCharacter.characterAbilities.intelligence.save = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_wisdom_base").change(function () {
    characters.currentCharacter.characterAbilities.wisdom.base = $(this).val();
    save();
  });
  $("#character_abilities_wisdom_modifier").change(function () {
    characters.currentCharacter.characterAbilities.wisdom.modifier = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_wisdom_save").change(function () {
    characters.currentCharacter.characterAbilities.wisdom.save = $(this).val();
    save();
  });
  $("#character_abilities_charisma_base").change(function () {
    characters.currentCharacter.characterAbilities.charisma.base = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_charisma_modifier").change(function () {
    characters.currentCharacter.characterAbilities.charisma.modifier = $(
      this
    ).val();
    save();
  });
  $("#character_abilities_charisma_save").change(function () {
    characters.currentCharacter.characterAbilities.charisma.save = $(
      this
    ).val();
    save();
  });
  $("#combat_stats_initiative").change(function () {
    characters.currentCharacter.combatStats.initiative = $(this).val();
    save();
  });
  $("#combat_stats_maximum_hit_points").change(function () {
    characters.currentCharacter.combatStats.maximumHitPoints = $(this).val();
    save();
  });
  $("#combat_stats_current_hit_points").change(function () {
    characters.currentCharacter.combatStats.currentHitPoints = $(this).val();
    save();
  });
  $("#combat_stats_temporary_hit_points").change(function () {
    characters.currentCharacter.combatStats.temporaryHitPoints = $(this).val();
    save();
  });
  $("#combat_stats_hit_dice").change(function () {
    characters.currentCharacter.combatStats.hitDice = $(this).val();
    save();
  });
  $("#combat_stats_armour_class").change(function () {
    characters.currentCharacter.combatStats.armourClass = $(this).val();
    save();
  });
  $("#combat_stats_speed").change(function () {
    characters.currentCharacter.combatStats.speed = $(this).val();
    save();
  });
  $("#combat_stats_passive_perception").change(function () {
    characters.currentCharacter.combatStats.passivePerception = $(this).val();
    save();
  });
  $("#weapons_add").click(function () {
    characters.currentCharacter.weapons.push({
      name: "",
      hitModifier: "",
      damageRoll: "",
      range: "",
    });
    open();
    $(
      "#weapons_name" + (characters.currentCharacter.weapons.length - 1)
    ).focus();
  });
  $("#skills_list_acrobatics").change(function () {
    characters.currentCharacter.skillsList.acrobatics = $(this).val();
    save();
  });
  $("#skills_list_animal_handling").change(function () {
    characters.currentCharacter.skillsList.animalHandling = $(this).val();
    save();
  });
  $("#skills_list_arcana").change(function () {
    characters.currentCharacter.skillsList.arcana = $(this).val();
    save();
  });
  $("#skills_list_athletics").change(function () {
    characters.currentCharacter.skillsList.athletics = $(this).val();
    save();
  });
  $("#skills_list_deception").change(function () {
    characters.currentCharacter.skillsList.deception = $(this).val();
    save();
  });
  $("#skills_list_history").change(function () {
    characters.currentCharacter.skillsList.history = $(this).val();
    save();
  });
  $("#skills_list_insight").change(function () {
    characters.currentCharacter.skillsList.insight = $(this).val();
    save();
  });
  $("#skills_list_intimidation").change(function () {
    characters.currentCharacter.skillsList.intimidation = $(this).val();
    save();
  });
  $("#skills_list_investigation").change(function () {
    characters.currentCharacter.skillsList.investigation = $(this).val();
    save();
  });
  $("#skills_list_medicine").change(function () {
    characters.currentCharacter.skillsList.medicine = $(this).val();
    save();
  });
  $("#skills_list_nature").change(function () {
    characters.currentCharacter.skillsList.nature = $(this).val();
    save();
  });
  $("#skills_list_perception").change(function () {
    characters.currentCharacter.skillsList.perception = $(this).val();
    save();
  });
  $("#skills_list_performance").change(function () {
    characters.currentCharacter.skillsList.performance = $(this).val();
    save();
  });
  $("#skills_list_persuasion").change(function () {
    characters.currentCharacter.skillsList.persuasion = $(this).val();
    save();
  });
  $("#skills_list_religion").change(function () {
    characters.currentCharacter.skillsList.religion = $(this).val();
    save();
  });
  $("#skills_list_sleight_of_hand").change(function () {
    characters.currentCharacter.skillsList.sleightOfHand = $(this).val();
    save();
  });
  $("#skills_list_stealth").change(function () {
    characters.currentCharacter.skillsList.stealth = $(this).val();
    save();
  });
  $("#skills_list_survival").change(function () {
    characters.currentCharacter.skillsList.survival = $(this).val();
    save();
  });
  $("#spells_and_combat_abilities_add").click(function () {
    characters.currentCharacter.spellsAndCombatAbilities.push({
      name: "",
      description: "",
    });
    open();
    $(
      "#spells_and_combat_abilities_name" +
        (characters.currentCharacter.spellsAndCombatAbilities.length - 1)
    ).focus();
  });
  $("#character_features_add").click(function () {
    characters.currentCharacter.characterFeatures.push({
      name: "",
      description: "",
    });
    open();
    $(
      "#character_features_name" +
        (characters.currentCharacter.characterFeatures.length - 1)
    ).focus();
  });
  $("#inventory_armour_add").click(function () {
    characters.currentCharacter.inventory.armour.push({
      name: "",
      description: "",
    });
    open();
    $(
      "#inventory_armour_name" +
        (characters.currentCharacter.inventory.armour.length - 1)
    ).focus();
  });
  $("#inventory_weapons_add").click(function () {
    characters.currentCharacter.inventory.weapons.push({
      name: "",
      description: "",
    });
    open();
    $(
      "#inventory_weapons_name" +
        (characters.currentCharacter.inventory.weapons.length - 1)
    ).focus();
  });
  $("#inventory_potions_add").click(function () {
    characters.currentCharacter.inventory.potions.push({
      name: "",
      description: "",
    });
    open();
    $(
      "#inventory_potions_name" +
        (characters.currentCharacter.inventory.potions.length - 1)
    ).focus();
  });
  $("#inventory_kits_and_tools_add").click(function () {
    characters.currentCharacter.inventory.kitsAndTools.push({
      name: "",
      description: "",
    });
    open();
    $(
      "#inventory_kits_and_tools_name" +
        (characters.currentCharacter.inventory.kitsAndTools.length - 1)
    ).focus();
  });
  $("#inventory_treasure_add").click(function () {
    characters.currentCharacter.inventory.treasure.push({
      name: "",
      description: "",
    });
    open();
    $(
      "#inventory_treasure_name" +
        (characters.currentCharacter.inventory.treasure.length - 1)
    ).focus();
  });
  $("#inventory_items_add").click(function () {
    characters.currentCharacter.inventory.items.push({
      name: "",
      description: "",
    });
    open();
    $(
      "#inventory_items_name" +
        (characters.currentCharacter.inventory.items.length - 1)
    ).focus();
  });
  $("#proficiencies_add").click(function () {
    characters.currentCharacter.proficiencies.push({
      name: "",
      description: "",
    });
    open();
    $(
      "#proficiencies_name" +
        (characters.currentCharacter.proficiencies.length - 1)
    ).focus();
  });
  $("#character_information_list_player_name").change(function () {
    characters.currentCharacter.characterInformationList.playerName = $(
      this
    ).val();
    save();
  });
  $("#character_information_list_character_name").change(function () {
    characters.currentCharacter.characterInformationList.characterName = $(
      this
    ).val();
    save();
  });
  $("#character_information_list_race").change(function () {
    characters.currentCharacter.characterInformationList.race = $(this).val();
    save();
  });
  $("#character_information_list_class").change(function () {
    characters.currentCharacter.characterInformationList.class = $(this).val();
    save();
  });
  $("#character_information_list_background").change(function () {
    characters.currentCharacter.characterInformationList.background = $(
      this
    ).val();
    save();
  });
  $("#character_information_list_age").change(function () {
    characters.currentCharacter.characterInformationList.age = $(this).val();
    save();
  });
  $("#character_information_list_height").change(function () {
    characters.currentCharacter.characterInformationList.height = $(this).val();
    save();
  });
  $("#character_information_list_alignment").change(function () {
    characters.currentCharacter.characterInformationList.alignment = $(
      this
    ).val();
    save();
  });
  $("#character_information_list_language").change(function () {
    characters.currentCharacter.characterInformationList.language = $(
      this
    ).val();
    save();
  });
  $("#character_information_list_dci_number").change(function () {
    characters.currentCharacter.characterInformationList.DCINumber = $(
      this
    ).val();
    save();
  });
  $("#character_background_personality_traits").change(function () {
    characters.currentCharacter.characterBackground.personalityTraits = $(
      this
    ).val();
    save();
  });
  $("#character_background_ideals").change(function () {
    characters.currentCharacter.characterBackground.ideals = $(this).val();
    save();
  });
  $("#character_background_bonds").change(function () {
    characters.currentCharacter.characterBackground.bonds = $(this).val();
    save();
  });
  $("#character_background_floors").change(function () {
    characters.currentCharacter.characterBackground.flaws = $(this).val();
    save();
  });
  $("#character_background_character_appearance").change(function () {
    characters.currentCharacter.characterBackground.characterAppearance = $(
      this
    ).val();
    save();
  });
  $("#character_background_character_back_story").change(function () {
    characters.currentCharacter.characterBackground.characterBackStory = $(
      this
    ).val();
    save();
  });
  $("#spell_book_cantrip_add").click(function () {
    characters.currentCharacter.spellBook.cantrips.push({
      name: "",
      description: "",
    });
    open();
    $(
      "#spell_book_cantrip_name" +
        (characters.currentCharacter.spellBook.cantrips.length - 1)
    ).focus();
  });
  $("#spell_book_spell_add").click(function () {
    characters.currentCharacter.spellBook.spells.push({
      name: "",
      description: "",
      level: "",
      memorised: false,
    });
    open();
    $(
      "#spell_book_spell_name" +
        (characters.currentCharacter.spellBook.spells.length - 1)
    ).focus();
  });
}
