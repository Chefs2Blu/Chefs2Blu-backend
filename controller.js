import fs from "fs";

export function getAllRecipes(req, res) {

    const recipesFile = fs.readFileSync("./recipes.json", { encoding: "utf-8" });
    const recipes = JSON.parse(recipesFile);

    return res.send(recipes)
}