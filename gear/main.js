function calcularDiente() {
    // console.log('calculo del diente')
    const anguloDiente = parseInt(document.getElementById('anguloDiente').value);
    const radius1 = parseInt(document.getElementById('radius1').value);
    const radius2 = parseInt(document.getElementById('radius2').value);
    const espesor = parseInt(document.getElementById('espesor').value);
    const convertDegToRad = Math.PI/180
    // console.log('anguloDiente', anguloDiente)
    const inclinacionDiente = espesor*Math.sin(anguloDiente*convertDegToRad)
    var miSpan = document.getElementById("inclinacionDiente");
    miSpan.textContent = inclinacionDiente + " mm";

    const giroCara1 = (inclinacionDiente*360)/(2*Math.PI*radius1)
    const giroCara2 = (inclinacionDiente*360)/(2*Math.PI*radius2)


    var miSpan2 = document.getElementById("giroCara1");
    miSpan2.textContent = giroCara1 + " Cº";  
    
    var miSpan3 = document.getElementById("giroCara2");
    miSpan3.textContent = giroCara2 + " Cº";
}


function drawGear() {
  const canvas = document.getElementById('gearCanvas');
  const ctx = canvas.getContext('2d');
  
  const teeth = parseInt(document.getElementById('teeth').value);
  const radius = parseInt(document.getElementById('radius').value);
  const pressureAngle = parseInt(document.getElementById('pressure').value) * Math.PI / 180;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(canvas.width / 2, canvas.height / 2);
  
  const toothDepth = radius * 0.1;
  const toothAngle = (Math.PI * 2) / (teeth * 4);
//   console.log('toothAngle', toothAngle)
  
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
  ctx.strokeStyle = 'red';
ctx.moveTo(100, 75);
ctx.lineTo(0, 0);

//ctx.lineWidth = 15;
ctx.stroke();
ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 5);
ctx.stroke();
}

drawGear();