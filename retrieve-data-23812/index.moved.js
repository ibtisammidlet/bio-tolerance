
    const accessToken = req.body
    const tokenType = "Bearer"

    axios.get('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${tokenType} ${accessToken}`,
        },
    })
        .then(result => result.json())
        .then(response => {
            const { username, discriminator } = response;
            console.log(`  ${username}#${discriminator}`)
        })
        .catch(console.error);










        
        /*
const fetchUser = async (data) => {
      
const response =  await axios.get(`https://discordapp.com/api/users/@me`, {headers: {	authorization: `Bearer fsSQEpuCVDSo7DHNqbDZe6YwO98js7`    }})
         .then(result => result.json())
          .then(response => {
            const { username, discriminator } = response;
            console.log(` ${username}#${discriminator}`)
        })
        .catch(console.error)

}
        */

