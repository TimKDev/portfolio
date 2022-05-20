import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { handleParticles, paintWithResize, Particle } from 'src/myModules/particles'

@Component({
  selector: 'app-start-section',
  templateUrl: './start-section.component.html',
  styleUrls: ['./start-section.component.scss']
})
export class StartSectionComponent implements AfterViewInit {
  // Verwende immer besser den @ViewChild Dekorator statt document.getElementById(...)
  // oder ähnliches:
  @ViewChild('myCanvas') canvas!: ElementRef<HTMLCanvasElement>;
  ctx!: any;

  @ViewChild('startSection') startSection!: any;

  particleArray: Particle[] = [];
  hue: number = 0;
  mouse: any = {
    x: undefined,
    y: undefined
  }

  constructor() { }

  ngAfterViewInit(): void {
    paintWithResize(this.canvas.nativeElement);

    this.ctx = this.canvas.nativeElement.getContext('2d');
    
    // Erzeuge Particles an der Mausposition durch clicken:
    // Mit der nativeElement Eigenschaft kann man aus einer @ViewChild Objekt 
    // das normale DOM Element rausziehen, das man in native JS durch getElementById
    // bekommen würde:
    this.startSection.nativeElement.addEventListener('click', (event: any) => {
      this.mouse.x = event.x;
      this.mouse.y = event.y + window.scrollY;
      for(let i = 0; i < 20; i++){
        this.particleArray.push(new Particle(this.mouse, this.hue));
      }
      console.log(this.particleArray);
      
    });

    // Erzeuge Particles durch Mousemove:
    this.startSection.nativeElement.addEventListener('mousemove', (event: any) => {
      this.mouse.x = event.x;
      this.mouse.y = event.y + window.scrollY;
      for(let i = 0; i < 2; i++){
        this.particleArray.push(new Particle(this.mouse, this.hue));
      }
    });
    
    // Start animation:
    this.animateParticles();
  }

  animateParticles() {
    
    
     this.ctx.clearRect(0,0,this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    handleParticles(this.ctx, this.particleArray);
    // Wichtig bei einer solchen Verwendung von requestAnimationFrame ist die Tatsache, 
    // dass eine Arrowfunktion verwendet werden muss, um beim rekursiven Aufrufen den 
    // Kontext des this nicht zu verlieren: 
    requestAnimationFrame(() => this.animateParticles());
    this.hue += 2;
  }

}
