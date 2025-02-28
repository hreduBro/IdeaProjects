import {Component} from '@angular/core';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NavigationItem} from "./navigatorInterface";

@Component({
    selector: 'app-toolbar',
    imports: [NzIconModule, NzMenuModule, NzButtonComponent],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

    navigation: NavigationItem[] = [
        {
            title: 'Navigation One',
            icon: 'mail',
            link: '/',
        },
        {
            title: 'Navigation Three - Submenu',
            icon: 'setting',
            children: [
                {
                    title: 'Item 1',
                    icon: '',
                    children: [
                        { title: 'Option 1',  icon: '' },
                        { title: 'Option 2' , icon: ''}
                    ]
                },
                {
                    title: 'Item 2',
                    icon: '',
                    children: [
                        { title: 'Option 3', icon: '', },
                        { title: 'Option 4', icon: '', },
                        {
                            title: 'Sub Menu',
                            icon: '',
                            children: [
                                { title: 'Option 5', link: '#', icon: '', },
                                { title: 'Option 6' , icon: '',}
                            ]
                        },
                        {
                            title: 'Click me',
                            icon: '',
                            children: [
                                { title: 'Option 5', link: '#', icon: '', },
                                { title: 'Option 6' , icon: '',}
                            ]
                        },
                        {
                            title: 'Disabled Sub Menu',
                            icon: '',
                            children: [
                                { title: 'Option 5', icon: '', },
                                { title: 'Option 6' ,icon: '',}
                            ],
                        }
                    ]
                }
            ]
        },
        {
            title: 'Navigation Four - Link',
            icon: '',
            link: 'https://ng.ant.design'
        }
    ];


}
