import { DrawShape } from "./ng-draw-base.model";

export class NGDrawText extends DrawShape  {

    private static internalid: number = 0;
    id: number;

    content: string;
    
    constructor() {
        super('text-' + NGDrawText.internalid++);
        this.content = '';
    }
}