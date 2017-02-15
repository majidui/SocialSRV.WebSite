"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require("@angular/core");
const material_1 = require("@angular/material");
let AppComponent = class AppComponent {
    constructor(_dialog, _snackbar) {
        this._dialog = _dialog;
        this._snackbar = _snackbar;
        this.isDarkTheme = false;
        this.foods = [
            { name: 'Pizza', rating: 'Excellent' },
            { name: 'Burritos', rating: 'Great' },
            { name: 'French fries', rating: 'Pretty good' },
        ];
        this.progress = 0;
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }
    openDialog() {
        let dialogRef = this._dialog.open(DialogContent);
        dialogRef.afterClosed().subscribe(result => {
            this.lastDialogResult = result;
        });
    }
    showSnackbar() {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css']
    }),
    __metadata("design:paramtypes", [material_1.MdDialog, material_1.MdSnackBar])
], AppComponent);
exports.AppComponent = AppComponent;
let DialogContent = class DialogContent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
};
DialogContent = __decorate([
    core_1.Component({
        template: `     <p>This is a dialog</p>     <p>       <label>         This is a text box inside of a dialog.         <input #dialogInput>       </label>     </p>     <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>   `,
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], DialogContent);
exports.DialogContent = DialogContent;
//# sourceMappingURL=app.component.js.map