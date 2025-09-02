import { Component } from '@angular/core';
import {
  Sheet,
  SheetOverlay,
  SheetTrigger,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from '@lib/components/sheet/sheet';
import { Button } from '@lib/components/button/button';

@Component({
  selector: 'app-sheet-demo',
  imports: [
    Sheet,
    SheetOverlay,
    SheetTrigger,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
    Button,
  ],
  templateUrl: './sheet-demo.html',
  styleUrl: './sheet-demo.css',
})
export class SheetDemo {}
