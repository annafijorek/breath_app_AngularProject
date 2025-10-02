import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
type Mode = 'relax' | 'focus' | null;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  mode: Mode = null;
  countdown: number | null = null;
  running = false;
  phase = 'rest';
  instruction = 'Choose session mode'; 
  step = 0;
  private timeoutId: any;

  private cycles: any = {
    relax: { 
      phases: ['rest','inhale', 'hold', 'exhale'],
      times: [0.5, 4, 4, 6],
      instructions: ['','Inhale', 'Hold', 'Exhale']
    },
    focus: {
      phases: ['rest','inhale', 'hold', 'exhale'],
      times: [0.5,4, 4, 4], 
      instructions: ['','Inhale', 'Hold', 'Exhale'] 
    }
  };


  selectMode(mode: Mode) {
    if (this.running) return; 
    this.running = true;
    this.mode = mode;
    this.startCountdown();
  }

  startCountdown() {
    this.countdown = 3;
    this.instruction = 'Get ready...';
    this.phase = 'rest'; 

    const interval = setInterval(() => {
      if (this.countdown! > 1) {
        this.countdown!--;
      } 
      else {
        clearInterval(interval);
        this.countdown = null;
        this.startSession(); 
        
      }
    }, 1000);
  }


  startSession() {
    if (!this.mode) return;
    this.running = true;
    this.step = 0;
    this.runPhase();
  }

  runPhase() {
    const cycle = this.cycles[this.mode!];
    this.phase = cycle.phases[this.step];
    this.instruction = cycle.instructions[this.step];

    this.timeoutId = setTimeout(() => {
      this.step = (this.step + 1) % cycle.phases.length;
      this.runPhase();
    }, cycle.times[this.step] * 1000);
  }


  stopSession() {
    clearTimeout(this.timeoutId);
    this.running = false;
    this.mode = null;
    this.instruction = 'Choose session mode';
    this.phase = 'rest'; 
    this.countdown = null;
  }
}
