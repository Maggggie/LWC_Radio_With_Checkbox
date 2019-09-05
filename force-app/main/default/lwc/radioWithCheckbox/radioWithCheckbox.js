import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class RadioWithCheckbox extends LightningElement {
    @wire(getContactList)
    contacts;
    handleChangeEvent(event){
        Array.from(this.template.querySelectorAll('lightning-input'))
        .forEach(element => {
            element.checked=false;
        });
        const checkbox = this.template.querySelector('lightning-input[data-value="'+event.target.dataset.value+'"]');
        checkbox.checked=true;
    }
}