function calcularDiente() {
    // console.log('calculo del diente')
    const anguloDiente = parseInt(document.getElementById('anguloDiente').value);
    const Diameter1 = parseInt(document.getElementById('diameter1').value);
    const Diameter2 = parseInt(document.getElementById('diameter2').value);
    const espesorGear = parseInt(document.getElementById('espesor').value);
    const convertDegToRad = Math.PI/180
    // console.log('anguloDiente', anguloDiente)
    const inclinacionDiente = espesor*Math.sin(anguloDiente*convertDegToRad)
    // var miSpan = document.getElementById("inclinacionDiente");
    // miSpan.textContent = inclinacionDiente + " mm";

    // const giroCara1 = (inclinacionDiente*360)/(2*Math.PI*radius1)
    // const giroCara2 = (inclinacionDiente*360)/(2*Math.PI*radius2)

    //////////////////engranaje 1
    const circumference1 = Math.PI*Diameter1
    console.log('circumference', circumference1)
    const leadOfTheHelicoidal1 = circumference1 /Math.tan(anguloDiente*Math.PI/180)
    console.log('leadOfTheHelicoidal', leadOfTheHelicoidal1)
    const twistAngle1 = (espesorGear/leadOfTheHelicoidal1)*360
    console.log('twistAngle', twistAngle1)

    //////////////////engranaje 2
    const circumference2 = Math.PI*Diameter2
    console.log('circumference', circumference2)
    const leadOfTheHelicoidal2 = circumference2 /Math.tan(anguloDiente*Math.PI/180)
    console.log('leadOfTheHelicoidal', leadOfTheHelicoidal2)
    const twistAngle2 = (espesorGear/leadOfTheHelicoidal2)*360
    console.log('twistAngle', twistAngle2)

    
    const giroCara1 = twistAngle1
    const giroCara2 = twistAngle2

    var miSpan2 = document.getElementById("giroCara1");
    miSpan2.textContent = giroCara1 + " Cº";  
    
    var miSpan3 = document.getElementById("giroCara2");
    miSpan3.textContent = giroCara2 + " Cº";
}


function drawGear() {
  const canvas = document.getElementById('gearCanvas');
  const ctx = canvas.getContext('2d');
  console.log('canvas', canvas)
  console.log('ctx', ctx)
  
  const teeth = parseInt(document.getElementById('teeth').value);
  const radius = parseInt(document.getElementById('radius').value);
  const pressureAngle = parseInt(document.getElementById('pressure').value) * Math.PI / 180;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(canvas.width / 2, canvas.height / 2);
  
  const toothDepth = radius * 0.1;
  const toothAngle = (Math.PI * 2) / (teeth * 4);
  
  ctx.beginPath();
  
  for (let i = 0; i < teeth; i++) {
    const angle = i * 2 * Math.PI / teeth;
    
    // Start of tooth
    ctx.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
    
    // Outer curve of tooth
    ctx.arc(0, 0, radius + toothDepth, angle, angle + toothAngle, false);
//   console.log('radius', radius)
//   console.log('toothDepth', toothDepth)
//   console.log('angle', angle)
//   console.log('toothAngle', toothAngle)

    
    // Tip of tooth
    ctx.arc(0, 0, radius + toothDepth, angle + toothAngle, angle + 3 * toothAngle, false);
    
    // Inner curve of tooth
    ctx.arc(0, 0, radius, angle + 3 * toothAngle, angle + 4 * toothAngle, false);
  }
  
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = 'red';
  ctx.fill();
  
  // Draw center circle
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.2, 0, 2 * Math.PI);
  ctx.fillStyle = 'green';
  ctx.strokeStyle = 'red';
  ctx.fill();
  ctx.stroke();
  
  ctx.translate(-canvas.width / 2, -canvas.height / 2);


/////////////////////////////////n
  // ctx.strokeStyle = 'red';
// ctx.moveTo(100, 75);
// ctx.lineTo(0, 0);

//ctx.lineWidth = 15;
// ctx.stroke();
// ctx.strokeStyle = 'blue';
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 5);
// ctx.stroke();
console.log('ctx al acabar la funcion')

}

////////--------------------------------------------------------------------------------

function drawGear2() {
  const canvas = document.getElementById('gearCanvas2');
  const ctx = canvas.getContext('2d');
  const module = parseInt(document.getElementById('module').value);
  const Nteeths = parseInt(document.getElementById('Nteeths').value);
  console.log('module', module)
  console.log('Nteeths', Nteeths)

  const diametroP = document.getElementsByClassName('diametroPrimitivoDisplay')[0];
  const diametroPValue = diametroP.getElementsByTagName('p')[0];
  diametroPValue.textContent = module*Nteeths


  //////bucle for
  const espacioDeDienteMasHueco = 360/Nteeths
  const espacioDeDiente = espacioDeDienteMasHueco/2
  // console.log('huecos', huecos)
  var angulodeInicioDiente = 0
  
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < Nteeths; i++) {
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, module*Nteeths, angulodeInicioDiente*Math.PI/180, angulodeInicioDiente*Math.PI/180 + espacioDeDiente*Math.PI/180);
    angulodeInicioDiente = angulodeInicioDiente + espacioDeDienteMasHueco
    console.log('angulodeInicioDiente', angulodeInicioDiente)
    console.log('canvas.width', canvas.width)
    console.log('canvas.height', canvas.height)
    // ctx.translate(canvas.width / 2, canvas.height / 2);
  }
/////////////////////////////////n
//   ctx.strokeStyle = 'red';
// ctx.moveTo(100, 75);
// ctx.lineTo(0, 0);
// ctx.lineWidth = 1;
// ctx.stroke();
// ctx.strokeStyle = 'blue';
// ctx.beginPath();
// ctx.arc(100, 75, module*Nteeths, 0*Math.PI/180, 90*Math.PI/180);
// ctx.stroke();
}

drawGear();
drawGear2()