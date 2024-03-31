function blinky()    //name your function by replacing " NameOfYourFunction"
{   
 robotSocket.send('pixelmulti,0,60,200,300,0');//parameters:color1,color2,color3.color 4. off turn that pixel off
 wait(1000);
 robotSocket.send('pixelsOff,0,0,0,0,0');//turns all pixels off
}

function blinky2(){
robotSocket.send('turbine1,dumpServo/0/0/0/0/0');
// robotSocket.send('led,0,1,900,0,0'); //change 2nd parameter to turn on or off
//robotSocket.send('turbine1,tempHum/0/60/0/0/0'); //returns the temp and hum on the turbine
//robotSocket.send('turbine1,windServo/0/0/0/0/0'); //change number after 1st slash for speed 
// robotSocket.send('lineFollow,left,750,14000,0,0');
// wait(16500);
// tempHum();
}

function tempHum(){
  robotSocket.send('tempHum,0,0,0,0,0');//returns a message with temp & hum
}

function lester(){
robotSocket.send('lester,tie/0/0/0/0/0');
}