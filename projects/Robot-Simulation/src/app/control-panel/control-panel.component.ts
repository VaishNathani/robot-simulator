import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

 controlPanelForm  = this.fb.group({
    place: this.fb.group({
      placeX: [''],
      placeY: [''],
      faceN: [''],
      faceS: [''],
      faceE: [''],
      faceW: [''],
    move: this.fb.group({
      moveUnit: [''],
    left: this.fb.group({
        moveLeft: [''],
    right: this.fb.group({
        moveRight: [''],
    report: this.fb.group({
        reportPosition: [''],
    reset: this.fb.group({
        resetRobot: [''],
    }),
  }),
}),
})
}),
}),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
