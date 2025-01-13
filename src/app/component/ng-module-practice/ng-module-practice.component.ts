import { Component, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalContent } from '../../shared/interface/request/modal-content.request';

@Component({
  selector: 'app-ng-module-practice',
  standalone: false,
  templateUrl: './ng-module-practice.component.html',
  styleUrl: './ng-module-practice.component.css'
})
export class NgModulePracticeComponent {
  public name: string = '';
  public names: string[] = [];
  private index: number = -1;
  public message: string = '';
  public modalContent: ModalContent = {
    heading: '',
    message: '',
    confirmButton: '',
    declineButton: ''
  };

  @ViewChild('template') confirmationDialog!: TemplateRef<any>;

  constructor(
    private modalService: BsModalService
    
  ) {
  }

  public submit() {
    if (this.index == -1) {
      this.names.push(this.name);
    }
    else {
      this.names[this.index] = this.name;
      this.index = -1;
    }
    this.name = "";
  }

  public editName(currIndex: number) {
    this.name = this.names[currIndex];
    this.index = currIndex;
  }

  public deleteName(index: number) {
    this.index = index;
    this.modalContent = {
      confirmButton: 'Ok',
      message: "Are you sure you want to delete this name?",
      heading: "Delete Confirmation",
      declineButton: "Cancel"
    }
    this.modalService.show(this.confirmationDialog, { class: 'modal-sm' });
  }
  public getResponseToDelete(val: boolean) {
    if (val) {
      this.names.splice(this.index, 1);
    }
    this.index = -1;
    this.modalService.hide();

  }
 
}
