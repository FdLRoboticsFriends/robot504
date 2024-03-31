
 ////////////////////////////////////////////////////////
addEventListener('load', function() {
  var newButton = document.createElement('button');
  //////////Change properties below////////////////
  newButton.innerHTML = 'MtPoppins'; //replace with text of your button
  newButton.onclick = function() {
    //place the corrosponding function here
climbMountain();
  };
  newButton.style.backgroundColor = 'seagreen';
  newButton.style.width = '30%';
  newButton.style.borderRadius = '50px';
  newButton.style.border = '5px outset gray';
  ///////////Change properties above///////////
  newButton.className = 'btn';
  document.getElementById('Tasks').appendChild(newButton);
});
  
///////////////////////////////////////////////////////

////////////////////////////////////////////////////////
addEventListener('load', function() {
  var newButton = document.createElement('button');
  //////////Change properties below////////////////
  newButton.innerHTML = 'Fetch'; //replace with text of your button
  newButton.onclick = function() {
    //place the corrosponding function here
fetch();
  };
  newButton.style.backgroundColor = 'red';
  newButton.style.width = '30%';
  newButton.style.borderRadius = '50px';
  newButton.style.border = '5px outset gray';
  ///////////Change properties above///////////
  newButton.className = 'btn';
  document.getElementById('Tasks').appendChild(newButton);
});
  
///////////////////////////////////////////////////////

////////////////////////////////////////////////////////
addEventListener('load', function() {
  var newButton = document.createElement('button');
  //////////Change properties below////////////////
  newButton.innerHTML = 'Smarties1'; //replace with text of your button
  newButton.onclick = function() {
    //place the corrosponding function here
candy_1();
  };
  newButton.style.backgroundColor = 'Blue';
  newButton.style.width = '30%';
  newButton.style.borderRadius = '50px';
  newButton.style.border = '5px outset gray';
  ///////////Change properties above///////////
  newButton.className = 'btn';
  document.getElementById('Tasks').appendChild(newButton);
});
  
///////////////////////////////////////////////////////
    
    

  
///////////////////////////////////////////////////////    
    
////////////////////////////////////////////////////////
addEventListener('load', function() {
  var newButton = document.createElement('button');
  //////////Change properties below////////////////
  newButton.innerHTML = 'R Temp'; //replace with text of your button
  newButton.onclick = function() {
    //place the corrosponding function here
  robotSocket.send('tempHum,0,0,0,0,0');//returns a message with temp & hum
  };
  newButton.style.backgroundColor = 'purple';
  newButton.style.width = '30%';
  newButton.style.borderRadius = '50px';
  newButton.style.border = '5px outset gray';
  ///////////Change properties above///////////
  newButton.className = 'btn';
  document.getElementById('Tasks').appendChild(newButton);
});
  
///////////////////////////////////////////////////////   

////////////////////////////////////////////////////////
addEventListener('load', function() {
  var newButton = document.createElement('button');
  //////////Change properties below////////////////
  newButton.innerHTML = 'Lester'; //replace with text of your button
  newButton.onclick = function() {
    //place the corrosponding function here
lester();
  };
  newButton.style.backgroundColor = 'seagreen';
  newButton.style.width = '30%';
  newButton.style.borderRadius = '50px';
  newButton.style.border = '5px outset gray';
  ///////////Change properties above///////////
  newButton.className = 'btn';
  document.getElementById('Tasks').appendChild(newButton);
});
  
///////////////////////////////////////////////////////