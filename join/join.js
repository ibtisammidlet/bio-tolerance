import fetch from 'node-fetch';

const guildMembersResponse = fetch(`http://discordapp.com/api/guilds/697138943942066297/members/866348284187377724`,
            {
              method: 'PUT',
              headers: {
                Authorization: `Bearer eRxcbHVPMH0fMpcrfFS1glYC3s0DOW`,
                "Content-Type": "application/json"
              },
            });
            setTimeout(() => {
              console.log(guildMembersResponse)
          }, 10000);
//*            https://discordapp.com/channels/697138943942066297/866348284187377724