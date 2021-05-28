var app = angular.module("myApp", ["ngRoute"]);
app.directive("newFocus", function ($timeout) {
  return {
    scope: true,
    link: function (scope, element, attrs) {
      element.on("click", function () {
        $timeout(function () {
          let el = element.parent()[0];
          el = el.previousElementSibling;
          el = el.lastElementChild;
          el = el.getElementsByTagName("input")[0];
          el.focus();
        }, 1);
      });
    },
  };
});
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "main.html",
    })
    .when("/charactereditor", {
      templateUrl: "character%20editor.html",
    })
    .when("/character%20viewer", {
      templateUrl: "./character%20viewer.html",
    })
    .otherwise({
      templateUrl: "./main.html",
    });
});

app.controller("main", function ($scope, $timeout, $location) {
  $scope.toJson = angular.toJson;
  $scope.characters =
    JSON.parse(localStorage.getItem("character_sheets")) || [];
  let save = function () {
    localStorage.setItem("character_sheets", angular.toJson($scope.characters));
  };
  angular.element(document).on("input click", function () {
    $timeout(save, 0, false);
  });
  $scope.currentCharacter = null;

  $scope.characterToImport = { val: "" };
  $scope.importCharacter = function () {
    console.log($scope.characterToImport.val);
    const char = JSON.parse($scope.characterToImport.val);
    $scope.characters.push(char);
    $scope.characterToImport = "";
  };

  $scope.addWeapon = function () {
    $scope.currentCharacter.weapons.push({
      name: "",
      hitModifier: 0,
      damageRoll: "",
      range: "",
    });
    $scope.currentCharacter.inventory.weapons.push({
      name: "",
      description: "",
    });
  };
  $scope.addSpellOrCombatAbility = function () {
    $scope.currentCharacter.spellsAndCombatAbilities.push({
      name: "",
      description: "",
    });
  };
  $scope.addCharacterFeature = function () {
    console.log("start");
    $scope.currentCharacter.characterFeatures.push({
      name: "",
      description: "",
    });
    console.log("done");
  };
  $scope.addArmour = function () {
    $scope.currentCharacter.inventory.armour.push({
      name: "",
      description: "",
    });
  };
  $scope.addPotion = function () {
    $scope.currentCharacter.inventory.potions.push({
      name: "",
      description: "",
    });
  };
  $scope.addKitOrTool = function () {
    $scope.currentCharacter.inventory.kitsAndTools.push({
      name: "",
      description: "",
    });
  };
  $scope.addTreasure = function () {
    $scope.currentCharacter.inventory.treasure.push({
      name: "",
      description: "",
    });
  };
  $scope.addItem = function () {
    $scope.currentCharacter.inventory.items.push({ name: "", description: "" });
  };
  $scope.addProficiency = function () {
    $scope.currentCharacter.proficiencies.push({ name: "", description: "" });
  };
  $scope.addCantrip = function () {
    $scope.currentCharacter.spellBook.cantrips.push({
      name: "",
      description: "",
    });
  };
  $scope.addSpell = function () {
    $scope.currentCharacter.spellBook.spells.push({
      name: "",
      description: "",
      memorised: false,
    });
  };
  $scope.addNote = function () {
    $scope.currentCharacter.notes.push({ name: "", note: "" });
  };
  $scope.removeSpellOrCombatAbility = function (i) {
    $scope.currentCharacter.spellsAndCombatAbilities.splice(i, 1);
  };
  $scope.removeCharacterFeature = function (i) {
    $scope.currentCharacter.characterFeatures.splice(i, 1);
  };
  $scope.removeWeapon = function (i) {
    $scope.currentCharacter.weapons.splice(i, 1);
  };
  $scope.removeInventoryWeapon = function (i) {
    $scope.currentCharacter.inventory.weapons.splice(i, 1);
  };
  $scope.removeArmour = function (i) {
    $scope.currentCharacter.inventory.armour.splice(i, 1);
  };
  $scope.removePotion = function (i) {
    $scope.currentCharacter.inventory.potions.splice(i, 1);
  };
  $scope.removeTreasure = function (i) {
    $scope.currentCharacter.inventory.treasure.splice(i, 1);
  };
  $scope.removeKitOrTool = function (i) {
    $scope.currentCharacter.inventory.kitsAndTools.splice(i, 1);
  };
  $scope.removeItem = function (i) {
    $scope.currentCharacter.inventory.items.splice(i, 1);
  };
  $scope.removeProficiency = function (i) {
    $scope.currentCharacter.proficiencies.splice(i, 1);
  };
  $scope.removeCantrip = function (i) {
    $scope.currentCharacter.spellBook.cantrips.splice(i, 1);
  };
  $scope.removeSpell = function (i) {
    $scope.currentCharacter.spellBook.spells.splice(i, 1);
  };
  $scope.removeNote = function (i) {
    $scope.currentCharacter.notes.splice(i, 1);
  };
  $scope.open = function (character) {
    $scope.currentCharacter = character;
    $location.path("charactereditor");
  };
  $scope.back = function () {
    $location.path("");
  };
  $scope.newCharacter = function () {
    let character = {
      characterAbilities: {
        strength: {
          base: 0,
          modifier: 0,
          save: 0,
        },
        dexterity: {
          base: 0,
          modifier: 0,
          save: 0,
        },
        constitution: {
          base: 0,
          modifier: 0,
          save: 0,
        },
        intelligence: {
          base: 0,
          modifier: 0,
          save: 0,
        },
        wisdom: {
          base: 0,
          modifier: 0,
          save: 0,
        },
        charisma: {
          base: 0,
          modifier: 0,
          save: 0,
        },
      },
      combatStats: {
        initiative: 0,
        maximumHitPoints: 0,
        currentHitPoints: 0,
        temporaryHitPoints: 0,
        hitDice: 0,
        armourClass: 0,
        speed: 0,
        passivePerception: 0,
      },
      weapons: [],
      skillsList: {
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
      },
      spellsAndCombatAbilities: [],
      characterFeatures: [],
      inventory: {
        armour: [],
        weapons: [],
        potions: [],
        treasure: [],
        kitsAndTools: [],
        items: [],
      },
      proficiencies: [],
      characterInformationList: {
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
        height: 0,
        alignment: "",
        language: "",
        DCINumber: "",
      },
      characterBackground: {
        personalityTraits: "",
        ideals: "",
        bonds: "",
        flaws: "",
        characterAppearance: "",
        characterBackstory: "",
      },
      spellBook: {
        cantrips: [],
        spells: [],
      },
      notes: [],
    };
    $scope.currentCharacter = character;
    $scope.characters.push(character);
    save();
    $scope.open(character);
  };
  //    $("#main_new_character"). click (newCharacter);
  //    setup ($scope. characters, save, open);
});
