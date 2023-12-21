import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fighter } from '../../core/models/fighter.model';
import { FighterStateService } from '../../core/services/fighter-state.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';

const primeComponents = [TableModule, ButtonModule, InputTextModule, ToolbarModule, DialogModule];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ...primeComponents],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // Attributes public
  public fighters: Fighter[] = [];
  public form: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    fightsWon: new FormControl(''),
    age: new FormControl(''),
    nationality: new FormControl(''),
    kilograms: new FormControl(''),
  });
  public editingFighterId: number | null = null;
  public isVisibleAddFighterDialog: boolean = false;

  // Attributes private
  private readonly fighters$: Observable<Fighter[]> = this.fighterStateService.allFighter$;

  constructor(
    private readonly fighterStateService: FighterStateService,
  ) { }

  // Lifecycle hooks
  public ngOnInit(): void {
    this.subscribeToFighters();
  }

  // Methods public
  public onRowEditInit(fighter: Fighter): void {
    this.editingFighterId = fighter.id;
    this.form.patchValue({
      name: fighter.name,
      address: fighter.address,
      fightsWon: fighter.fightsWon,
      age: fighter.age,
      nationality: fighter.nationality,
      kilograms: fighter.kilograms,
    });
  }

  public onRowEditSave(): void {
    if (this.form.valid && this.editingFighterId !== null) {
      this.fighterStateService.updateFighter({ ...this.form.value, id: this.editingFighterId });
      this.editingFighterId = null;
    }
  }

  public onRowEditCancel(): void {
    this.editingFighterId = null;
  }

  public onRowDelete(fighter: Fighter): void {
    this.fighterStateService.deleteFighter(fighter.id);
  }

  public onAddFighter(): void {
    if (this.form.valid) {
      this.fighterStateService.addFighter(this.form.value);
      this.form.reset();
      this.hideDialog();
    }
  }

  public showDialog() {
    this.isVisibleAddFighterDialog = true;
  }

  public hideDialog() {
    this.isVisibleAddFighterDialog = false;
  }

  // Methods private
  private subscribeToFighters(): void {
    this.fighters$.subscribe((fighters) => {
      this.fighters = fighters;
    });
  }
}
