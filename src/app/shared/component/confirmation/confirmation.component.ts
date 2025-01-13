import { Component,TemplateRef, Input,Output,EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalContent } from '../../interface/request/modal-content.request';



@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})

export class ConfirmationComponent {

  @Input() msg: string = "";
  @Input() modalContent?: ModalContent;
  @Output() newItemEvent = new EventEmitter<boolean>();

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
 
  confirm(): void {
    this.newItemEvent.emit(true);
  }
 
  decline(): void {
    this.newItemEvent.emit(false);
  }
 
}
