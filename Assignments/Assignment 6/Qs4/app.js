function readData() {
  var name = document.getElementById("name").value;

  var gender = document.getElementById("gender").value;

  var address = document.getElementById("address").value;

  var education = document.getElementById("education").value;

  var profession = document.getElementById("profession").value;

  document.writeln("Name: ", name);
  document.writeln("<br/><br/> Gender: ", gender);
  document.writeln("<br/><br/> Address: ", address);
  document.writeln("<br/><br/> Education: ", education);
  document.writeln("<br/><br/> Profession: ", profession);
}
