// priority: 0
console.info("[AMMONIUM@KUBEJS]: fluidTransform.js loaded");

ServerEvents.recipes((e) => {
  /**
   * Creates a lychee "item_inside" recipe.
   *
   * @param {string[]|Fluid[]|string|Fluid} fluids - The fluid(s) the items must be inside.
   * @param {string[]|Item[]|string|Item} results - The result(s) of the recipe.
   * @param {string[]|Item[]|string|Item} inputs - The inputs(s) of the recipe.
   */
  // function fluidTransform(fluids, results, inputs) {
  //   const resultsArray = Array.isArray(results) ? results : [results];
  //   const inputsArray = Array.isArray(inputs) ? inputs : [inputs];
  //   const fluidsArray = Array.isArray(fluids) ? fluids : [fluids];

  //   const transformResult = (result) => {
  //     return typeof result === "string"
  //       ? { type: "drop_item", item: Item.of(result).toJson().get("item") }
  //       : {
  //           type: "drop_item",
  //           item: result.toJson().get("item"),
  //           count: result.getCount(),
  //         };
  //   };

  //   const transformInput = (input) => {
  //     return typeof input === "string"
  //       ? { item: Item.of(input).toJson().get("item") }
  //       : { item: input.toJson().get("item") };
  //   };

  //   const transformFluid = (fluid) => {
  //     return typeof fluid === "string"
  //       ? Fluid.of(fluid).toJson().get("fluid")
  //       : fluid.toJson().get("fluid");
  //   };

  //   const transformedResultsArray = resultsArray.map(transformResult);
  //   const transformedInputsArray = inputsArray.map(transformInput);
  //   const transformedFluidsArray = fluidsArray.map(transformFluid);

  //   e.custom({
  //     type: "lychee:item_inside",
  //     item_in: transformedInputsArray,
  //     block_in: { blocks: transformedFluidsArray },
  //     post: transformedResultsArray,
  //   });
  // }

  //fluidTransform("minecraft:water", Item.of("minecraft:rotten_flesh", 2), ["minecraft:leather","immersiveengineering:dust_saltpeter",]);
  //fluidTransform('minecraft:water', 'ae2:damaged_budding_quartz', ['kubejs:certus_seed', 'ae2:charged_certus_quartz_crystal'])

  /**
   *
   * @param {string} type define what type of transformation --> `fluid` | `explosion`
   * @param {item[]} ingredients items on input recipe
   * @param {item} output item result
   * @param {fluid} fluid_tag (optional : return `water`) define fluid tag when type == `fluid`
   */
  let ae2_transform = (type, ingredients, output, fluid_tag) => {
    let circumstance = { type: type };
    if (type == "fluid") {
      circumstance.tag =
        typeof fluid_tag == null ? fluid_tag : "minecraft:water";
    }

    let item_input = [];
    ingredients.forEach((item) => {
      item_input.push({ item: item });
    });

    e.custom({
      type: "ae2:transform",
      circumstance: circumstance,
      ingredients: item_input,
      result: {
        //"count": count,   //dont work , probably caused by ae2 issue nomore supported 
        item: output,
      },
    });
  };

  ae2_transform(
    "fluid",
    ["ae2:charged_certus_quartz_crystal", "kubejs:certus_seed"],
    "ae2:damaged_budding_quartz",
    "minecraft:water"
  );

  ae2_transform(
    "fluid",
    ["minecraft:leather", "immersiveengineering:dust_saltpeter"],
    "kubejs:rotten_nitrate",
    "minecraft:water"
  );

});
