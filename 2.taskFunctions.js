function fetch() {
  robotSocket.send('motorMove,0,1,600,0,0');
  wait(800);
  robotSocket.send('brake,0,1,400,0,0');
  wait(1000); //the parameter is wait time in millseconds
  robotSocket.send('motorMove,1,0,600,0,0');
  wait(800);
  robotSocket.send('brake,0,1,400,0,0');

  
}
function climbMountain() {
 robotSocket.send('lineFollow,left,500,7000,0,0');//paramters:side of line, speed, time in ms
 wait(7000);
 robotSocket.send('lineFollow,left,675,7000,0,0');//paramters:side of line, speed, time in ms
}
function candy_1() {
robotSocket.send('lineFollow,left,525,8700,0,0');//paramters:side of line, speed, time in ms
  wait(10000);
  smarties_1();
}
