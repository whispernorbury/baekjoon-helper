const cheerio = require("cheerio");
const url = `http://web.archive.org/web/20140301191716/http://pokemondb.net/pokedex/national`;

const ans = {};
const crawl = async () => {
    try {
        const Html = await fetch(url).then((res) => res.text());
        const $ = cheerio.load(Html);
        for (let i = 0; i < 718; i++) {
            const pokemon = $(`span.infocard-tall`).eq(i);
            const name = pokemon.find(`a.ent-name`).text();
            const type = pokemon.find(`a.itype`).map((_, ele) => $(ele).text()).get().join(' ');
            ans[i+1] = {
                name: name,
                type: type,
            }
        }
        console.log(ans);
    } catch (e) {
        console.error(e);
    }
}
crawl();