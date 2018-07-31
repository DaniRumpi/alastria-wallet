import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'user-settings',
    templateUrl: 'user-settings.html',
    styleUrls: ['/user-settings.scss']
})
export class UserSettings {

    public userName: string;
    public userImagePath: string;

    constructor(public modalCtrl: ModalController) {
        this.userName = "Alicia Fernández Roca";
        this.userImagePath = "./assets/images/avatar/0.jpg";
    }
}
