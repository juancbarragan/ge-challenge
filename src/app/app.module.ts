import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { MatTreeModule, MatIconModule, MatButtonModule, MatTableModule } from '@angular/material';
import { FileDatabase } from './services/file-database.service';
import { DragDropDirectiveModule} from "angular4-drag-drop";
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TableComponent
  ],
  imports: [
   BrowserAnimationsModule, MatTreeModule, MatIconModule, MatButtonModule, DragDropDirectiveModule, MatTableModule
  ],
  providers: [FileDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
