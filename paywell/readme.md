i get email subscribers list from gumroad api then inject it to db   
the code here get email list from db inject it to cloudflare api  
the code here inject in db list of accessingstrings  

var expressionfirst = `http.cookie contains "gumroad={\\"v\\":\\"1\\"`;
var expressionfirst = `http.cookie contains "gumroad={\\"v\\":\\"2\\"`;
var options = {
  method: 'PATCH',
  url: 'https://api.cloudflare.com/client/v4/zones/acdcd5735aac0eb8bf0389b1ebc59d2d/rulesets/1b93fd5c5bfa43298922bd9ccb3c9e3f/rules/2e60c2afe61a4a43a30a9e47001974ac',
  headers: {'Content-Type': 'application/json', Authorization: 'Bearer YrVKNLXr9v-iA2Qxw1vGs7EoKSAuX3sYlEzpu6cV'},
  data: {
    action: 'skip',
  action_parameters: {
    ruleset: "current"
  },
    description: 'gumroad',
    expression: emailall2
  }
};
for skip
24218