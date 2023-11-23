const marvel_heroes=["thor" ,"Ironman","spiderman"]
const dc=["superman","flash","batman"]

//marvel_heroes.push(dc)

//console.log(marvel_heroes);

//console.log(marvel_heroes[3][1]);

//const allHeroes=marvel_heroes.concat(dc);

//console.log(allHeroes);


const all_new_hero= [...marvel_heroes,...dc]

console.log(all_new_hero);



