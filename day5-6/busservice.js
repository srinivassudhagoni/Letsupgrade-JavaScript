window.onload = function () {
  let initialbuses = [];

  if (localStorage.getItem("buses") == null) {
    localStorage.setItem("buses", JSON.stringify(initialbuses));
  }
};

function display(superarray = undefined) {
  let tabledata = "";
  let buses;
  if (superarray == undefined) {
    buses = JSON.parse(localStorage.getItem("buses"));
  } else {
    buses = superarray;
  }

  buses.forEach(function (bus, index)
  {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.number}</td>
      <td>${bus.passengercapacity}</td>
      </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display();

function addBus(e) {
  e.preventDefault();
  let bus = {};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let number = document.getElementById("number").value;
  let passengercapacity = document.getElementById("passengercapacity").value;
  bus.name = name;
  bus.source = source;
  bus.destination = destination;
  bus.number = Number(number);
  bus.passengercapacity = Number(passengercapacity);

  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.push(bus);
  localStorage.setItem("buses", JSON.stringify(buses));

  display();

  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("number").value = "";
  document.getElementById("passengercapacity").value = "";
}

function searchByName() {
  let searchValue = document.getElementById("search").value;
  let buses = JSON.parse(localStorage.getItem("buses"));
  let newdata = buses.filter(function (bus) {
    return (
      bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 ||
      bus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
};

