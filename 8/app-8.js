function student(name, gender) {
    this.name = name;
    this.gender = gender;

}
const studObj1 = new student("sima", "femail");
student.prototype.age = 12;
console.log(studObj1.age);
const studObj2 = Object.assign({}, studObj1);
studObj2.age= 20;
console.log(studObj2.age);