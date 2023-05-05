class Aszinkron
{
    constructor()
    {

    }

    adatBetolt(vegpont, callback)
    {
        fetch(vegpont, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(callback)
            .catch(error => console.log(error));
    }

    adatTorol(vegpont, id)
    {
        vegpont += "/" + id;
        fetch(vegpont, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {

            })
            .catch(error => console.log(error));
    }
}

export default Aszinkron