class Termek
{
    #gyarto;
    #nev;
    #evjarat;
    #ezATermek;

    constructor(szuloElem, gyarto, nev, evjarat)
    {
        this.#gyarto = gyarto;
        this.#nev = nev;
        this.#evjarat = evjarat;
        szuloElem.append(`
            <div>
                <h3>${this.#nev}</h3>
                <p>Gyártó: ${this.#gyarto}</p>
                <p>Évjárat: ${this.#evjarat}</p>
                <button>Kedvencek közé</button>
            </div>
        `);
        this.#ezATermek = szuloElem.children("div:last-child");
        this.#ezATermek.on("click", () => window.dispatchEvent(new CustomEvent("kedvencekKozeRak", { detail: this })));
    }

    getGyarto()
    {
        return this.#gyarto;
    }

    getNev()
    {
        return this.#nev;
    }

    getEvjarat()
    {
        return this.#evjarat;
    }
}

export default Termek