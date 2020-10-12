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

exports.sendHiringInfo = (form) => {

  let answersForm = []

  for (let index = 0; index < form.length; index++) {
    const step = form[index];

    switch (step.stepNumber) {

      case 1:
      case 2:
      case 16:
        break;

      case 10:
      case 11:
        let answersOptions = ""
        if(form[2].answer == "Software Engineer") {
          form[index].options[0].forEach(option => {
            if(option.value > 0) {
              answersOptions += (option.name + " " + option.value + " ");
            }
          });
        } else {
          form[index].options[1].forEach(option => {
            if(option.value > 0) {
              answersOptions += (option.name + " " + option.value + " ");
            }
          });
        }
        answersForm.push(answersOptions);
        break;

      case 12:
        if(form[2].answer == "Software Engineer") {
          let answersOptions = ""
          form[index].options[0].forEach(option => {
            if(option.value > 0) {
              answersOptions += (option.name + " " + option.value + " ");
            }
          });
          answersForm.push(answersOptions);
        } else {
          answersForm.push(step.answer);
        }
        break;
        
      case 14:
        step.answers.forEach(answer => {
          answersForm.push(answer);  
        });
        break;
      case 15:
        answersForm.push(step.answer1);
        answersForm.push(step.answer2);
        break;
    
      default:
        answersForm.push(step.answer);
    }

  }
    
  return generateNewTokenGoogleSheets().then((result)=>{

    let SHEET_ID = process.env.GATSBY_SHEET_ID;
    let ACCESS_TOKEN = result.access_token;

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Hiring!A2:Q2:append?valueInputOption=USER_ENTERED`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(
        {
          "range": "Hiring!A2:Q2",
          "majorDimension": "ROWS",
          "values": [
            answersForm,
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
