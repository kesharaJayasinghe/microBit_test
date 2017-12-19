enum ledPtrn{
    //% block="P1"
    pattern1,
    //% block="P2"
    pattern2,
    //% block="P3"
    pattern3
}

/**
 * LED blink patterns
 */
//% color="#2c3e50" weight=10
namespace ledPkg{
    /**
     * Set time values
     * @param VR1 variable1
     * @param VR2 variable2
     */
    //% blockId=LED_TEST block="ptrn VR1 %VR1|VR2 %VR2|VR3 %VR3"
    export function ptrn(VR1: ledPtrn, VR2 = 10): void {
        const value = 0
        const output = (value * 10)
        
        switch (VR1) {
            case ledPtrn.pattern1: return value/2
            case ledPtrn.pattern2: return value/4
            case ledPtrn.pattern3: return value/5
            default: value    
        }
    }
}
