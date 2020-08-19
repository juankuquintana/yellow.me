const generateNewTokenGoogleSheets = () => {
  return fetch('https://oauth2.googleapis.com/token', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "client_id": process.env.GATSBY_CLIENT_ID,
      "client_secret": process.env.GATSBY_CLIENT_SECRET,
      "refresh_token": process.env.GATSBY_REFRESH_TOKEN,
      "grant_type": "refresh_token"
    })
  }).then(result => { return result.json() })
}

 
exports.subscribeNewsletter = (email) => {
  return generateNewTokenGoogleSheets().then((result)=>{
    //console.log("sadasd", result.access_token);

    let SHEET_ID = process.env.GATSBY_SHEET_ID;
    let ACCESS_TOKEN = result.access_token;

    return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Newsletter!A2:A3:append?valueInputOption=USER_ENTERED`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(
        {
          "range": "Newsletter!A2:A3",
          "majorDimension": "ROWS",
          "values": [
            [email],
          ],
        }
      )
    }).then((result)=> {
      return result.json();
    })
    
  }).catch((err)=>{
    console.log("error generating new token", err);
  })
}

exports.sendTalentInfo = (name, email, selectedOption, yearsExperience) => {
  return generateNewTokenGoogleSheets().then((result)=>{
    let SHEET_ID = process.env.GATSBY_SHEET_ID;
    let ACCESS_TOKEN = result.access_token;

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Talent!A2:D2:append?valueInputOption=USER_ENTERED`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(
        {
          "range": "Talent!A2:D2",
          "majorDimension": "ROWS",
          "values": [
            [name, email, selectedOption, yearsExperience],
          ],
        }
      )
    }).then((result)=> {
      return result.json();
    })

  }).catch((err)=>{
    console.log("error generating new token", err);
  })
}
