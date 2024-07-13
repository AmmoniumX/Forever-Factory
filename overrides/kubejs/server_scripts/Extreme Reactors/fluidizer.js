// priority: 0
console.info('[AMMONIUM@KUBEJS]: fluidizer.js loaded')

ServerEvents.recipes(e => {
  function createFluidizerMix(type, ingredient1, ingredient2, result) {
    e.custom({
      type: type,
      ingredient1: ingredient1,
      ingredient2: ingredient2,
      result: result
    });
    e.custom({
      type: type,
      ingredient1: ingredient2,
      ingredient2: ingredient1,
      result: result
    });
  }

  createFluidizerMix(
    "bigreactors:fluidizersolidmixing",
    {
      ingredient: {
        item: "powah:crystal_blazing"
      },
      count: 1
    },
    {
      ingredient: {
        item: "minecraft:ender_pearl"
      },
      count: 4
    },
    {
      fluid: "bigreactors:tangerium",
      count: 1000
    }
  );

  createFluidizerMix(
    "bigreactors:fluidizersolidmixing",
    {
      ingredient: {
        item: "kubejs:cryotheum_crystal"
      },
      count: 1
    },
    {
      ingredient: {
        item: "minecraft:redstone"
      },
      count: 2
    },
    {
      fluid: "bigreactors:cryomisi",
      count: 1000
    }
  );

  // createFluidizerMix(
  //   "bigreactors:fluidizerfluidmixing",
  //   {
  //     fluid: {
  //       fluid: "bigreactors:redfrigium",
  //       count: 1000
  //     }
  //   },
  //   {
  //     fluid: {
  //       fluid: "bigreactors:verderium",
  //       count: 1000
  //     }
  //   },
  //   {
  //     fluid: "bigreactors:rossinite",
  //     count: 1000
  //   }
  // );
})
