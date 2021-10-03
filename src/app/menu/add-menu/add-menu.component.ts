import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/shared/app.state';
import { getCurrentMenuItem, itemType, MenuItem } from '../state/menu.reducer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  pageTitle:string;
  @Input() selectedItem:MenuItem;
  @Output() create = new EventEmitter<MenuItem>();
  @Output() update = new EventEmitter<MenuItem>();
  @Output() delete = new EventEmitter<MenuItem>();
  @Output() clearCurrent = new EventEmitter();

  constructor(
    private store:Store<appState>,
    private fb: FormBuilder
  ) { }

  menuItemForm: FormGroup;

  ngOnInit(): void {
    // Define the form group
    this.menuItemForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      type: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedItem) {
      const item = changes.selectedItem.currentValue as MenuItem;
      this.displayItem(item);
    }
  }

  displayItem(item: MenuItem | null): void {
    if (item && this.menuItemForm) {
      this.menuItemForm.reset();

      if (item.id === 0) {
        this.pageTitle = 'Add Menu Item';
      } else {
        this.pageTitle = `Edit Menu Item: ${item.name}`;
      }

      this.menuItemForm.patchValue({
        id: item.id,
        name: item.name,
        type: item.type,
        price: item.price,
        stock: item.stock
      });
    }
  }

  cancelEdit(): void {
    this.displayItem(this.selectedItem);
  }

  deleteItem(): void {
    if (this.selectedItem && this.selectedItem.id) {
      if (confirm(`Are you sure to delete this item: ${this.selectedItem.name}?`)) {
        this.delete.emit(this.selectedItem);
      }
    } else {
      this.clearCurrent.emit();
    }
  }

  saveItem(): void {
    if (this.menuItemForm.valid) {
      if (this.menuItemForm.dirty) {
        const item = { ...this.selectedItem, ...this.menuItemForm.value };

        if (item.id === 0) {
          this.create.emit(item);
        } else {
          this.update.emit(item);
        }
      }
    }
  }

}
