import { Component } from '@angular/core';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
} from '@lib/components/alert-dialog/alert-dialog';
import { Button } from '@lib/components/button/button';

@Component({
  selector: 'app-alert-dialog-demo',
  imports: [
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogTrigger,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    Button,
  ],
  template: `<button ui-button variant="outline" [dialogTrigger]="dialog" ui-alert-dialog-trigger>
      Show Dialog
    </button>

    <ng-template #dialog let-close="close">
      <div ui-alert-dialog-overlay>
        <div ui-alert-dialog>
          <div ui-alert-dialog-header>
            <h1 ui-alert-dialog-title>Are you absolutely sure?</h1>
            <p ui-alert-dialog-description>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </p>
          </div>
          <div ui-alert-dialog-footer>
            <button ui-button (click)="close()" variant="outline">Cancel</button>
            <button ui-button (click)="close()">Continue</button>
          </div>
        </div>
      </div>
    </ng-template> `,
  styleUrl: './alert-dialog-demo.css',
})
export class AlertDialogDemo {}
