let citizens = [
    {
        name: "saurav",
        age: 28,
        city: "Mumbai",
        salary: 30000,
    },
    {
        name: "krishna",
        age: 45,
        city: "Hyderabad",
        salary: 60000,
    },
    {
        name: "vijay",
        age: 30,
        city: "Chennai",
        salary: 25000,
    },
    {
        name: "bhargav",
        age: 22,
        city: "Hyderabad",
        salary: 21000,
    },
    {
        name: "shalini",
        age: 35,
        city: "Delhi",
        salary: 80000,
    }
  ];
  

  function display(superarray) {
    let tabledata = "";
  
    superarray.forEach(function (citizens, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${citizens.name}</td>
      <td>${citizens.age}</td>
      <td>${citizens.city}</td>
      <td>${citizens.salary}</td>
      <td>
      <button onclick='dveletecitizen(${index})'>delete</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  }
  
  display(citizens);
 
  
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
    let newdata = citizens.filter(function (citizen) {
        return (citizen.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1) || (citizen.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1);       
        })   
    display(newdata);
  }
  
  function deletecitizen(index) {
    citizens.splice(index, 1);
    display(citizens);
  }
  