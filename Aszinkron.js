class Aszinkron
{
    constructor()
    {

    }

    adatBetolt(vegpont, callback)
    {
        this.#adatotKezel(vegpont, "GET", callback);
    }

    adatTorol(vegpont, id)
    {
        this.#adatotKezel(vegpont + "/" + id, "DELETE", data => {

        });
    }

    #adatotKezel(vegpont, method, callback)
    {
        fetch(vegpont, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(callback)
            .catch(console.log);
    }
}

export default Aszinkron