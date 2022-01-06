import { LightningElement } from 'lwc';
import { CloseActionScreenEvent } from "lightning/actions";

export default class MyLwcQuickAction extends LightningElement {

    cancel() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }

    handleSave() {
        // Do whatever updates need to be done via Apex method
        eval("$A.get('e.force:refreshView').fire();");
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}