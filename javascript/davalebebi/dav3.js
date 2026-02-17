const student = {
      firstname: "nika",
      lastname: "gelashvili",
      grades: [70,80,60],

      getaverage(){
            let sum = 0;
            for(let i = 0; i < this.grades.length; i++){
                  sum += this.grades[i];
            }
            return sum / this.grades.length;
      },

      ispassing(){
            if (student.getaverage() >= 50){
                  console.log("passed")
            } else {
                  console.log("failed")
            }
      }
}

console.log(student.getaverage() + student.ispassing())