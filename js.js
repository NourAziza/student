var allValue = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

var myArray = [
  {
    No: "2",
    Username: "Hadi_25142",
    Bdate: "Monday , November 05",
    Name: "هادي البصلة",
    Program: "ITE",
    Mobile: "00963993058019",
  },
  {
    No: "1",
    Username: "Aziz_21286",
    Bdate: "Monday , November 05",
    Name: "عزيز اليوتس",
    Program: "BIT",
    Mobile: "00963993058019",
  },
  {
    No: "3",
    Username: "Malk_21534",
    Bdate: "Monday , November 05",
    Name: "مالك التس",
    Program: "BAIT",
    Mobile: "00963993058019",
  },
];

buildTable(myArray);

function buildTable(data) {
  var table = document.getElementById("myTable");

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
                           <td>${data[i].No}</td>
                           <td>${data[i].Username}</td>
                           <td>${data[i].Name}</td>
                           <td>${data[i].Program}</td>
                     </tr>`;
    table.innerHTML += row;
  }
}
var cValue
function newCaptcha() {
  var cVal1 = allValue[Math.floor(Math.random() * allValue.length)];
  var cVal2 = allValue[Math.floor(Math.random() * allValue.length)];
  var cVal3 = allValue[Math.floor(Math.random() * allValue.length)];
  var cVal4 = allValue[Math.floor(Math.random() * allValue.length)];
  var cVal5 = allValue[Math.floor(Math.random() * allValue.length)];
  var cVal6 = allValue[Math.floor(Math.random() * allValue.length)];
  cValue = cVal1 + cVal2 + cVal3 + cVal4 + cVal5 + cVal6;
  captchaValue.innerHTML = cValue;
}
newCaptcha();

document.querySelector("#new_captcha").addEventListener("click", newCaptcha);

thisValue = "";
captcha_code.addEventListener("change", function () {
  thisValue = captcha_code.value;
});
function check() {
  console.log(cValue);
  if (
    !document.form1.txt1.value ||
    !document.form1.txt2.value ||
    !document.form1.txt3.value ||
    !document.form1.txt4.value
  ) {
    alert("يوجد حقول غير معبئة");
    return false;
  } else {
    if (
      !document.form1.txt1.value.includes("_") &&
      document.form1.txt1.value[0] != document.form1.txt1.value[0].toUpperCase()
    ) {
      alert(
        "اسم المستخدم يجب أن يحتوي على '_' و أول حرف كبير و باللغة الإنجليزية"
      );
      return false;
    }
    if (thisValue != cValue) {
        alert("نص الكبتشا مختلف")
    }
    myArray.push({
      No: myArray.length + 1,
      Username: document.form1.txt1.value,
      Name: document.form1.txt2.value,
      Program:
        document.form1.programA.options[document.form1.programA.selectedIndex]
          .text,
      Bdate: document.form1.txt3.value,
      Mobile: document.form1.txt4.value,
    });
    console.log(myArray);
    document.form1.txt1.value = "";
    document.form1.txt2.value = "";
    document.form1.txt3.value = "";
    document.form1.txt4.value = "";
    document.getElementById("myTable").innerHTML = "";
    buildTable(myArray);
  }
}
function CheckArabicOnly(field) {
  var sNewVal = "";
  var sFieldVal = field.value;

  for (var i = 0; i < sFieldVal.length; i++) {
    var ch = sFieldVal.charAt(i),
      c = ch.charCodeAt(0);

    if ((c < 1536 || c > 1791) && c != 32) {
      // Discard
    } else {
      sNewVal += ch;
    }
  }

  field.value = sNewVal;
}
function CheckEnglishOnly(field) {
  var sNewVal = "";
  var sFieldVal = field.value;

  for (var i = 0; i < sFieldVal.length; i++) {
    var ch = sFieldVal.charAt(i),
      c = ch.charCodeAt(0);

    if (c > 1536 ) {
      // Discard
    } else {
      sNewVal += ch;
    }
  }

  field.value = sNewVal;
}
function Sort() {
  valueSort = document.form1.sortV.value;
  document.getElementById("myTable").innerHTML = "";
  console.log(
    myArray.sort((a, b) => {
      return a.Program - b.Program;
    })
  );
  if (valueSort == "No") {
    buildTable(
      myArray.sort((a, b) => {
        return a.No - b.No;
      })
    );
  } else if (valueSort == "Name") {
    buildTable(
      myArray.sort((a, b) => {
        if (a.Name < b.Name) {
          return -1;
        }
        if (a.Name > b.Name) {
          return 1;
        }
        return 0;
      })
    );
  } else if (valueSort == "Program") {
    buildTable(
      myArray.sort((a, b) => {
        if (a.Program < b.Program) {
          return -1;
        }
        if (a.Program > b.Program) {
          return 1;
        }
        return 0;
      })
    );
  }
}
function convert() {
  valueSort = document.form1.sortV.value;
  var value =
    document.form1.sProgram.options[document.form1.sProgram.selectedIndex].text;
  if (valueSort == "No") {
    document.getElementById("mytextarea").innerText = JSON.stringify(
      myArray
        .sort((a, b) => {
          return a.No - b.No;
        })
        .filter((item) => item.Program == value).length > 0
        ? myArray.filter((item) => item.Program == value)
        : value == "ALL"
        ? myArray
        : [
            {
              No: "No Data",
              Username: "No Data",
              Bdate: "No Data",
              Name: "No Data",
              Program: "No Data",
              Mobile: "No Data",
            },
          ]
    );
  } else if (valueSort == "Name") {
    document.getElementById("mytextarea").innerText = JSON.stringify(
      myArray
        .sort((a, b) => {
          if (a.Name < b.Name) {
            return -1;
          }
          if (a.Name > b.Name) {
            return 1;
          }
          return 0;
        })
        .filter((item) => item.Program == value).length > 0
        ? myArray.filter((item) => item.Program == value)
        : value == "ALL"
        ? myArray
        : [
            {
              No: "No Data",
              Username: "No Data",
              Bdate: "No Data",
              Name: "No Data",
              Program: "No Data",
              Mobile: "No Data",
            },
          ]
    );
  } else if (valueSort == "Program") {
    document.getElementById("mytextarea").innerText = JSON.stringify(
      myArray
        .sort((a, b) => {
          if (a.Program < b.Program) {
            return -1;
          }
          if (a.Program > b.Program) {
            return 1;
          }
          return 0;
        })
        .filter((item) => item.Program == value).length > 0
        ? myArray.filter((item) => item.Program == value)
        : value == "ALL"
        ? myArray
        : [
            {
              No: "No Data",
              Username: "No Data",
              Bdate: "No Data",
              Name: "No Data",
              Program: "No Data",
              Mobile: "No Data",
            },
          ]
    );
  } else {
    document.getElementById("mytextarea").innerText = JSON.stringify(
      myArray.filter((item) => item.Program == value).length > 0
        ? myArray.filter((item) => item.Program == value)
        : value == "ALL"
        ? myArray
        : [
            {
              No: "No Data",
              Username: "No Data",
              Bdate: "No Data",
              Name: "No Data",
              Program: "No Data",
              Mobile: "No Data",
            },
          ]
    );
  }
}
function selectedProgram() {
  var value =
    document.form1.sProgram.options[document.form1.sProgram.selectedIndex].text;
  document.getElementById("myTable").innerHTML = "";
  if (value == "ALL") {
    buildTable(myArray);
  } else {
    buildTable(
      myArray.filter((item) => item.Program == value).length > 0
        ? myArray.filter((item) => item.Program == value)
        : [
            {
              No: "No Data",
              Username: "No Data",
              Bdate: "No Data",
              Name: "No Data",
              Program: "No Data",
              Mobile: "No Data",
            },
          ]
    );
  }
}
