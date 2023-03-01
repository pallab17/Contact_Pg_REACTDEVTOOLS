import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">Contact Us</h1>
      <Avatar img="https://media.licdn.com/dms/image/D4D03AQECh49GnvuIyA/profile-displayphoto-shrink_800_800/0/1667118829213?e=2147483647&v=beta&t=ylMg9Lgwguu_IBaks_wl8njjtsmWLr_mkVBr9-6qh50" />

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;

/* 
img file ta contacts.jsx theke app.jsx e asche
app.jsx theke card.js e jacche img ta
ebar ami chaichi avatar/img r jonno  aar ekta img.jsx banate
jate card.jsx theke image.jsx e img ta jaye


*/
