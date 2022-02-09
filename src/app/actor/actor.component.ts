import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Actor } from '../model/actor';
import { ActorService } from '../service/actor.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
})
export class ActorComponent implements OnInit {
  public actors: Actor[] = [];

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.getActors();
  }

  public getActors(): void {
    this.actorService.getActors().subscribe(
      (response: Actor[]) => {
        this.actors = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddActor(addForm: NgForm): void {
    document.getElementById('add-actor-form')?.click();
    this.actorService.addActor(addForm.value).subscribe(
      (response: Actor) => {
        console.log(response);
        this.getActors();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
