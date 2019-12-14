import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostListener('click', ['$event.target']) toggleOpen(dropdownMenu: HTMLElement) {
        dropdownMenu.nextElementSibling.classList.toggle('show')
    }
}