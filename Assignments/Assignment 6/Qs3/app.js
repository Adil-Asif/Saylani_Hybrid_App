
function Student(name,age,id,degree){

this.name = name;
this.age = age;
this.id = id;
this.degree = degree;
}



var obj1 = new Student('Adil',18,'2028','CS');
var obj2 = new Student('Abdullah',21,'2018','EE');
var obj3 = new Student('Saif',20,'1028','CS');

document.writeln("Object 1 <br/>");
for (key in obj1){
    document.writeln(key,": ")
    document.writeln(obj1[key],"<br/>");
}
document.writeln("<br/> <br/> <br/>")

document.writeln("Object 2<br/>");
for (key in obj2){
    document.writeln(key,": ")
    document.writeln(obj2[key],"<br/>");
}
document.writeln("<br/> <br/> <br/>")
document.writeln("Object 3<br/>");
for (key in obj3){
    document.writeln(key,": ")
    document.writeln(obj3[key],"<br/>");
}