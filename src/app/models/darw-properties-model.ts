
export class DrawProperties {
    id: number;

    fill: string;
    strokeFill: string;
    strokeWidth: number;
    dashArray: number;
    thickness: number;
    opacity: number;
    isFill: boolean;
    isStroke: boolean;
    
    visible: boolean;

    constructor() {
        this.isFill = true;
        this.fill = '#e7e7e7';
        this.isStroke = true;
        this.strokeFill = 'black';
        this.strokeWidth = 1;
        this.visible = true;
    }
}