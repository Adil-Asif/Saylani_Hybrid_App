var person = {
  name: "Adil A",
  email: "adilasif123@gmail.com",
  password: "",
  age: "",
  gender: "",
  city: "Karachi",
  country: "",
};

function checkObject() {
  if (person["name"] === undefined) {
    document.write("First Name is undefined", "<br/>");
  } else {
    if (person["name"].search(" ")) {
      document.write("First Name is defined", "<br/>");
      var space = person["name"].search(" ");
      if (
        person["name"][space + 1] >= "A" &&
        person["name"][space + 1] <= "Z"
      ) {
        document.write("Last Name is defined", "<br/>");
      }
      else{
        document.write("Last Name is undefined", "<br/>");
      }
    }
  }

  if (person["age"] === undefined) {
    document.write("Age is undefined", "<br/>");
  } else {
    document.write("Age is defined", "<br/>");
  }

  if (person["country"] === undefined) {
    document.write("Country is undefined", "<br/>");
  } else {
    document.write("Country is defined", "<br/>");
  }
}

checkObject();
