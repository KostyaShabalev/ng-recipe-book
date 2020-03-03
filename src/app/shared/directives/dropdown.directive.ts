import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostListener('click', ['$event.target']) toggleOpen(dropdownElement: HTMLElement) {
        if (dropdownElement.classList.contains('dropdown-item')) {
            dropdownElement.parentElement.classList.remove('show');
        } else {
            dropdownElement.nextElementSibling.classList.toggle('show');
        }
    }
}