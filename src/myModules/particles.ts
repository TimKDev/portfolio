export class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: any;

  constructor(mouse: any, hue: any){
      this.x = mouse.x;
      this.y = mouse.y;
      //this.x = Math.random() * canvas.width;
      //this.y = Math.random() * canvas.height;
      this.size = Math.random()*15 + 1; // Random Number zwischen 1 und 6
      this.speedX = Math.random()*3 - 1.5; // Random Number zwischen -1.5 und 1.5
      this.speedY = Math.random()*3 - 1.5;
      // Die Particles sollen ihre Farbe jetzt behalten:
      // this.color = 'hsl(' + hue + ', 100%, 50%)';
      let randomColor = Math.floor(Math.random()*2);
      switch (randomColor) {
        case 0:
          this.color = '#2DFCD8';
          break;
        case 1: 
          this.color = '#FA2759';
          break;
        case 2:
          this.color = '#2DFCD8';
          break;
      }
      // this.color = '#2DFCD8';
  }
  update(){
      // Update für jedes Animation Frame
      // Verändere den Ort für jedes Frame mit den Geschwindigkeiten:
      this.x += this.speedX;
      this.y += this.speedY;
      // Verkleinere jeden Kreis in jedem Frame:
      if(this.size > 0.2) this.size -= 0.1; // Short Notation für einzeilige If-Schleifen!
  }
  draw(ctx: any){
      ctx.fillStyle = this.color; // hsl ist eine weitere Methode um farben festzulegen.
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
      ctx.fill();
  }
}
// // Speichere die Particles in einem globalen Array:
// const particleArray: Particle[] = [];
// // Diese globale Variable speichert die Änderung der Farbe:
// let hue = 0;


// // Erzeuge Particles an der Mausposition durch clicken:
// canvas.addEventListener('click', function(event){
//   mouse.x = event.x;
//   mouse.y = event.y;
//   for(let i = 0; i < 20; i++){
//       particleArray.push(new Particle());
//   }
// });

// // Erzeuge Particles durch Mousemove:
// canvas.addEventListener('mousemove', function(event){
//   mouse.x = event.x;
//   mouse.y = event.y;
//   for(let i = 0; i < 2; i++){
//       particleArray.push(new Particle());
//   }
// });


export function paintWithResize(canvas: any){
  // Canvas soll das gesamte Window bedecken:
  canvas.setAttribute("width", `${window.innerWidth}`);
  canvas.setAttribute("height", `${window.innerHeight}`);

  window.addEventListener('resize', function(){
      canvas.setAttribute("width", `${window.innerWidth}`);
      canvas.setAttribute("height", `${window.innerHeight}`);
      // Bei Resizen werden die gezeichneten Elemente jetzt gelöscht, daher müssen sie hier jetzt
      // nochmals eingefügt werden:
  });
}

function distanceParticles(part1: Particle, part2: Particle): number{
  return Math.sqrt((part1.x - part2.x)**2 + (part1.y - part2.y)**2);
}

export function handleParticles(ctx: any, particleArray: Particle[]){
  for(let i = 0; i < particleArray.length; i++){
      particleArray[i].update();
      particleArray[i].draw(ctx);
      // Jetzt sollen Teilchen, die eine bestimmte Entfernung zueinander besitzen durchh eine Linie
      // verbunden werden:
      for(let j = i; j < particleArray.length; j++){
          if(distanceParticles(particleArray[i],particleArray[j]) < 100){
              ctx.beginPath();
              ctx.strokeStyle = particleArray[i].color;
              ctx.lineWidth = 0.2;
              ctx.moveTo(particleArray[i].x, particleArray[i].y);
              ctx.lineTo(particleArray[j].x, particleArray[j].y);
              ctx.stroke();
              ctx.closePath();
          }
      }
      // Entferne ein Element, falls es kleiner als 0.3 Radius wird:
      if(particleArray[i].size <= 0.3){
          particleArray.splice(i, 1); // splice Methode für Arrays ist vielseitig einsetzbar
          i--; // Diese Zeile stellt sicher, dass der Loop korrekt ausgeführt wird, auch wenn 
          // ein Element entfernt wurde, sonst würden Elemente übersprungen werden!
      }

  }
}

// animateParticles(); // Start animation