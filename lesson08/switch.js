const num_gpa = 4.1;
const letter_gpa = null;

function get_gpa_letter(grade_code) {
  switch (true) {
    case grade_code == 4.3:
      return "A+";
    case grade_code > 4:
      return "A-";
    case grade_code > 3.7:
      return "A-";
  }
}

console.log(get_gpa_letter(4));

function determine_student_type(code) {
  let return_val = null;

  switch (code) {
    case "U":
      return_val = "UnderGrad";
      break;
    case "G":
      return_val = "Grad";
      break;

    default:
      return_val = "Unknown";
  }

  return return_val;
}

console.log(determine_student_type("U"));
