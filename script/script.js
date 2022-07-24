let getDetails = (num) => {

    for(let i=1;i<=num;i++){
        let url = `https://rickandmortyapi.com/api/character/${i}`;
        // console.log(url);
        fetch(url)
            .then((data) => {
                data.json()
                    .then((finalResponse) => {
                        console.log(finalResponse);
                    })
            })
    }
};